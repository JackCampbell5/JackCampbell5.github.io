#!/usr/bin/env node
/**
 * Photo processing pipeline — run via `npm run photos`
 *
 * Category folders in photos/originals/ are processed differently depending on structure:
 *   - If a category has subfolders (e.g. landscapes/iceland/), each subfolder = a location group
 *   - If a category is flat (e.g. sunsets/), it is processed as one group with no location
 *
 * Emits AVIF + WebP + JPEG at 400/800/1600w to public/photos/<category>/[location]/
 * Generates a 20px base64 blur placeholder per photo
 * Writes all metadata to src/data/photos.json
 *
 * Idempotent: skips a derivative if it already exists and is newer than the source.
 */

import sharp from 'sharp'
import { readdir, stat, mkdir, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const ORIGINALS_DIR = path.join(ROOT, 'photos', 'originals')
const OUTPUT_DIR = path.join(ROOT, 'public', 'photos')
const JSON_OUT = path.join(ROOT, 'src', 'data', 'photos.json')

const WIDTHS = [800, 1600]
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tiff', '.avif'])

function parseExifData(exifBuffer) {
  const empty = { dateTaken: null, camera: null, focalLength: null, fNumber: null, exposureTime: null, iso: null }
  if (!exifBuffer || exifBuffer.length < 14) return empty
  try {
    if (exifBuffer.slice(0, 6).toString('ascii') !== 'Exif\0\0') return empty
    const tiff = exifBuffer.slice(6)
    const le = tiff.slice(0, 2).toString('ascii') === 'II'
    const r16 = off => le ? tiff.readUInt16LE(off) : tiff.readUInt16BE(off)
    const r32 = off => le ? tiff.readUInt32LE(off) : tiff.readUInt32BE(off)
    if (r16(2) !== 0x002A) return empty

    const readStr = (off, count) => tiff.slice(off, off + count).toString('ascii').replace(/\0.*$/, '').trim()
    const readRat = off => { const n = r32(off), d = r32(off + 4); return d ? n / d : null }

    const scanIFD = (ifdOff, want) => {
      const n = r16(ifdOff), found = {}
      for (let i = 0; i < n; i++) {
        const e = ifdOff + 2 + i * 12, tag = r16(e)
        if (want.has(tag)) found[tag] = { type: r16(e + 2), count: r32(e + 4), voff: e + 8 }
      }
      return found
    }

    const ifd0 = r32(4)
    const i0 = scanIFD(ifd0, new Set([0x010F, 0x0110, 0x8769]))
    const result = { ...empty }

    // Samsung model number → friendly name lookup
    const SAMSUNG_MODELS = {
      'SM-S908U': 'Samsung Galaxy S22 Ultra', 'SM-S908B': 'Samsung Galaxy S22 Ultra',
      'SM-S918U': 'Samsung Galaxy S23 Ultra', 'SM-S918B': 'Samsung Galaxy S23 Ultra',
      'SM-S928U': 'Samsung Galaxy S24 Ultra', 'SM-S928B': 'Samsung Galaxy S24 Ultra',
      'SM-S938U': 'Samsung Galaxy S25 Ultra', 'SM-S938B': 'Samsung Galaxy S25 Ultra',
      'SM-S911U': 'Samsung Galaxy S23',       'SM-S921U': 'Samsung Galaxy S24',
      'SM-S931U': 'Samsung Galaxy S25',
    }
    // Make + Model → combine into camera string
    const rawMake = i0[0x010F] ? readStr(i0[0x010F].count > 4 ? r32(i0[0x010F].voff) : i0[0x010F].voff, i0[0x010F].count) : ''
    const model   = i0[0x0110] ? readStr(i0[0x0110].count > 4 ? r32(i0[0x0110].voff) : i0[0x0110].voff, i0[0x0110].count) : ''
    const make = rawMake.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    if (model) {
      result.camera = SAMSUNG_MODELS[model]
        ?? (model.toLowerCase().startsWith(rawMake.toLowerCase()) ? model : [make, model].filter(Boolean).join(' '))
    }

    if (!i0[0x8769]) return result
    const exifIFD = r32(i0[0x8769].voff)
    const ix = scanIFD(exifIFD, new Set([0x9003, 0x829A, 0x829D, 0x8827, 0x920A]))

    // DateTimeOriginal
    if (ix[0x9003]) {
      const e = ix[0x9003], off = e.count > 4 ? r32(e.voff) : e.voff
      const s = tiff.slice(off, off + 19).toString('ascii')
      const m = s.match(/(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/)
      if (m) result.dateTaken = new Date(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}`).getTime()
    }
    // ExposureTime
    if (ix[0x829A]) {
      const val = readRat(r32(ix[0x829A].voff))
      if (val !== null) result.exposureTime = val >= 1 ? `${val}s` : `1/${Math.round(1 / val)}s`
    }
    // FNumber
    if (ix[0x829D]) {
      const val = readRat(r32(ix[0x829D].voff))
      if (val !== null) result.fNumber = `f/${parseFloat(val.toFixed(1))}`
    }
    // ISO
    if (ix[0x8827]) result.iso = r16(ix[0x8827].voff)
    // FocalLength
    if (ix[0x920A]) {
      const val = readRat(r32(ix[0x920A].voff))
      if (val !== null) result.focalLength = `${parseFloat(val.toFixed(1))}mm`
    }

    return result
  } catch { return { ...empty } }
}

function parseDateFromStem(stem) {
  // Android: 20230709_102617
  let m = stem.match(/^(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})/)
  if (m) return new Date(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}`).getTime()
  // Google Pixel: IMG_20250324_002916 or PXL_20231111_181352336
  m = stem.match(/(?:IMG|PXL)_(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})(\d{2})/)
  if (m) return new Date(`${m[1]}-${m[2]}-${m[3]}T${m[4]}:${m[5]}:${m[6]}`).getTime()
  return null
}

function sanitizeStem(stem) {
  return stem
    .replace(/[^a-zA-Z0-9-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
}

async function isNewer(src, dest) {
  if (!existsSync(dest)) return true
  const [srcStat, destStat] = await Promise.all([stat(src), stat(dest)])
  return srcStat.mtimeMs > destStat.mtimeMs
}

async function processGroup(category, location, srcOverride = null) {
  const srcDir = srcOverride ?? (location
    ? path.join(ORIGINALS_DIR, category, location)
    : path.join(ORIGINALS_DIR, category))
  const outDir = location
    ? path.join(OUTPUT_DIR, category, location)
    : path.join(OUTPUT_DIR, category)
  const pathPrefix = location
    ? `/photos/${category}/${location}`
    : `/photos/${category}`

  if (!existsSync(srcDir)) return []
  await mkdir(outDir, { recursive: true })

  const entries = await readdir(srcDir, { withFileTypes: true })
  const files = entries
    .filter(e => e.isFile() && SUPPORTED.has(path.extname(e.name).toLowerCase()))
    .map(e => e.name)
    .sort()

  const results = []
  const usedStems = new Set()

  for (const file of files) {
    const srcPath = path.join(srcDir, file)
    const rawStem = path.basename(file, path.extname(file))
    let stem = sanitizeStem(rawStem)

    // Deduplicate stems (e.g. IMG_0798.JPG and IMG_0798(1).jpg both become IMG_0798)
    let finalStem = stem
    let count = 1
    while (usedStems.has(finalStem)) {
      finalStem = `${stem}_${count++}`
    }
    usedStems.add(finalStem)
    stem = finalStem

    console.log(`  ${category}/${location ? location + '/' : ''}${file}`)

    let meta
    try {
      meta = await sharp(srcPath).metadata()
    } catch (err) {
      console.warn(`  SKIP ${file}: ${err.message}`)
      continue
    }
    // EXIF orientation 5-8 means the image is rotated 90/270° — swap w/h for correct aspect ratio
    const { orientation } = meta
    const swapped = orientation >= 5 && orientation <= 8
    const intrinsicW = swapped ? meta.height : meta.width
    const intrinsicH = swapped ? meta.width : meta.height

    const fileStat = await stat(srcPath)
    const exif = parseExifData(meta.exif)
    const dateTaken = exif.dateTaken ?? parseDateFromStem(rawStem) ?? fileStat.mtimeMs

    const blurBuf = await sharp(srcPath)
      .rotate()
      .resize(20, null, { withoutEnlargement: true })
      .jpeg({ quality: 40 })
      .toBuffer()
    const placeholder = `data:image/jpeg;base64,${blurBuf.toString('base64')}`

    for (const w of WIDTHS) {
      for (const [format, ext] of [['webp', 'webp'], ['jpeg', 'jpg']]) {
        const outFile = path.join(outDir, `${stem}-${w}w.${ext}`)
        if (!(await isNewer(srcPath, outFile))) continue
        const pipeline = sharp(srcPath).rotate().resize(w, null, { withoutEnlargement: true })
        if (format === 'avif') pipeline.avif({ quality: 60 })
        else if (format === 'webp') pipeline.webp({ quality: 78 })
        else pipeline.jpeg({ quality: 82, progressive: true })
        await pipeline.toFile(outFile)
      }
    }

    results.push({
      id: location ? `${category}-${location}-${stem}` : `${category}-${stem}`,
      category,
      location: location ?? null,
      stem,
      dateTaken,
      camera: exif.camera,
      focalLength: exif.focalLength,
      fNumber: exif.fNumber,
      exposureTime: exif.exposureTime,
      iso: exif.iso,
      width: intrinsicW,
      height: intrinsicH,
      placeholder,
      src: {
        webp: WIDTHS.map(w => `${pathPrefix}/${stem}-${w}w.webp`),
        jpeg: WIDTHS.map(w => `${pathPrefix}/${stem}-${w}w.jpg`),
      },
      widths: WIDTHS,
    })
  }

  return results
}

async function main() {
  if (!existsSync(ORIGINALS_DIR)) {
    console.log('photos/originals/ does not exist — nothing to process.')
    return
  }

  const categoryEntries = await readdir(ORIGINALS_DIR, { withFileTypes: true })
  const categories = categoryEntries.filter(d => d.isDirectory()).map(d => d.name)

  if (categories.length === 0) {
    console.log('No category subdirectories found in photos/originals/ — nothing to process.')
    return
  }

  await mkdir(OUTPUT_DIR, { recursive: true })

  const allPhotos = []

  for (const cat of categories) {
    const catDir = path.join(ORIGINALS_DIR, cat)
    const contents = await readdir(catDir, { withFileTypes: true })
    const subdirs = contents.filter(d => d.isDirectory()).map(d => d.name)

    if (subdirs.length > 0) {
      // Category has location subfolders (e.g. landscapes/iceland/)
      console.log(`\n${cat}/ — ${subdirs.length} location(s): ${subdirs.join(', ')}`)
      for (const sub of subdirs) {
        const photos = await processGroup(cat, sub)
        allPhotos.push(...photos)
        console.log(`  → ${sub}: ${photos.length} photos`)
      }
      // Also pick up any loose files at the category root → "other"
      const looseFiles = contents.filter(
        e => e.isFile() && SUPPORTED.has(path.extname(e.name).toLowerCase())
      )
      if (looseFiles.length > 0) {
        const catRoot = path.join(ORIGINALS_DIR, cat)
        const photos = await processGroup(cat, 'other', catRoot)
        allPhotos.push(...photos)
        console.log(`  → other: ${photos.length} photos`)
      }
    } else {
      // Flat category (e.g. sunsets/)
      console.log(`\n${cat}/ — flat`)
      const photos = await processGroup(cat, null)
      allPhotos.push(...photos)
      console.log(`  → ${photos.length} photos`)
    }
  }

  await writeFile(JSON_OUT, JSON.stringify(allPhotos, null, 2), 'utf8')
  console.log(`\nDone. Wrote ${allPhotos.length} entries to src/data/photos.json`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
