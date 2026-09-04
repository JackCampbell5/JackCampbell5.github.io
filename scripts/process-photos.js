#!/usr/bin/env node
/**
 * Photo processing pipeline — run via `npm run photos`
 *
 * Reads originals from  photos/originals/<category>/
 * Emits AVIF + WebP + JPEG at 400/800/1600w to  public/photos/<category>/
 * Generates a 20px base64 blur placeholder per photo
 * Writes dimensions + placeholders to  src/data/photos.json
 *
 * Idempotent: skips a derivative if it already exists and is newer than the source.
 * Never runs automatically during `npm run build` — CI should not reprocess images.
 */

import sharp from 'sharp'
import { readdir, stat, mkdir, writeFile, readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

const ORIGINALS_DIR = path.join(ROOT, 'photos', 'originals')
const OUTPUT_DIR = path.join(ROOT, 'public', 'photos')
const JSON_OUT = path.join(ROOT, 'src', 'data', 'photos.json')

const WIDTHS = [400, 800, 1600]
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.heif', '.tiff'])

async function isNewer(src, dest) {
  if (!existsSync(dest)) return true
  const [srcStat, destStat] = await Promise.all([stat(src), stat(dest)])
  return srcStat.mtimeMs > destStat.mtimeMs
}

async function processCategory(category) {
  const srcDir = path.join(ORIGINALS_DIR, category)
  const outDir = path.join(OUTPUT_DIR, category)

  if (!existsSync(srcDir)) return []

  await mkdir(outDir, { recursive: true })

  const files = (await readdir(srcDir))
    .filter(f => SUPPORTED.has(path.extname(f).toLowerCase()))
    .sort()

  const results = []

  for (const file of files) {
    const srcPath = path.join(srcDir, file)
    const stem = path.basename(file, path.extname(file))

    console.log(`Processing ${category}/${file}...`)

    // Read metadata once
    const meta = await sharp(srcPath).metadata()
    const { width: intrinsicW, height: intrinsicH } = meta

    // Generate blur placeholder: 20px wide, base64 JPEG
    const blurBuf = await sharp(srcPath)
      .resize(20, null, { withoutEnlargement: true })
      .jpeg({ quality: 40 })
      .toBuffer()
    const placeholder = `data:image/jpeg;base64,${blurBuf.toString('base64')}`

    // Emit AVIF, WebP, JPEG at each width
    for (const w of WIDTHS) {
      for (const [format, ext] of [['avif', 'avif'], ['webp', 'webp'], ['jpeg', 'jpg']]) {
        const outFile = path.join(outDir, `${stem}-${w}w.${ext}`)
        if (!(await isNewer(srcPath, outFile))) {
          continue
        }
        const pipeline = sharp(srcPath).resize(w, null, { withoutEnlargement: true })
        if (format === 'avif') pipeline.avif({ quality: 60 })
        else if (format === 'webp') pipeline.webp({ quality: 78 })
        else pipeline.jpeg({ quality: 82, progressive: true })
        await pipeline.toFile(outFile)
      }
    }

    results.push({
      id: `${category}-${stem}`,
      category,
      stem,
      width: intrinsicW,
      height: intrinsicH,
      placeholder,
      // Public paths relative to the site root
      src: {
        avif: WIDTHS.map(w => `/photos/${category}/${stem}-${w}w.avif`),
        webp: WIDTHS.map(w => `/photos/${category}/${stem}-${w}w.webp`),
        jpeg: WIDTHS.map(w => `/photos/${category}/${stem}-${w}w.jpg`),
      },
      widths: WIDTHS,
    })
  }

  return results
}

async function main() {
  if (!existsSync(ORIGINALS_DIR)) {
    console.log('photos/originals/ does not exist — nothing to process.')
    console.log('See photos/README.md for how to set up originals.')
    return
  }

  const categories = (await readdir(ORIGINALS_DIR, { withFileTypes: true }))
    .filter(d => d.isDirectory())
    .map(d => d.name)

  if (categories.length === 0) {
    console.log('No category subdirectories found in photos/originals/ — nothing to process.')
    return
  }

  await mkdir(OUTPUT_DIR, { recursive: true })

  const allPhotos = []
  for (const cat of categories) {
    const photos = await processCategory(cat)
    allPhotos.push(...photos)
    console.log(`  ${cat}: ${photos.length} photos`)
  }

  await writeFile(JSON_OUT, JSON.stringify(allPhotos, null, 2), 'utf8')
  console.log(`\nDone. Wrote ${allPhotos.length} entries to src/data/photos.json`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
