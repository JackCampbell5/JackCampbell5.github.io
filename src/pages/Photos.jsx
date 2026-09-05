import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import photosData from '../data/photos.json'

function PhotoTile({ photo, onClick }) {
  const [loaded, setLoaded] = useState(false)
  const ar = photo.width / photo.height

  const srcsetWebp = photo.src.webp.map((u, i) => `${u} ${photo.widths[i]}w`).join(', ')
  const srcsetJpeg = photo.src.jpeg.map((u, i) => `${u} ${photo.widths[i]}w`).join(', ')

  return (
    <button
      onClick={onClick}
      className="block w-full mb-3 break-inside-avoid rounded-lg overflow-hidden cursor-zoom-in relative group focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2"
      aria-label="Open photo"
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: ar }}
      >
        {/* Blur placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{
            backgroundImage: `url(${photo.placeholder})`,
            opacity: loaded ? 0 : 1,
          }}
          aria-hidden="true"
        />
        <picture>
          <source type="image/webp" srcSet={srcsetWebp} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
          <img
            src={photo.src.jpeg.at(0)}
            srcSet={srcsetJpeg}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            alt=""
            loading="lazy"
            width={photo.width}
            height={photo.height}
            onLoad={() => setLoaded(true)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </picture>
      </div>
    </button>
  )
}

function FilterDropdown({ options, selected, onChange }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const visible = options.filter(o => o.toLowerCase().includes(search.toLowerCase()))

  const toggle = option => {
    const next = new Set(selected)
    if (next.has(option)) next.delete(option)
    else next.add(option)
    onChange(next)
  }

  const label =
    selected.size === 0 ? 'All locations' :
    selected.size === 1 ? [...selected][0] :
    `${selected.size} selected`

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 ${
          selected.size > 0
            ? 'bg-brand-violet text-white border-brand-violet'
            : 'bg-surface dark:bg-surface-dark border-border dark:border-border-dark text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark'
        }`}
      >
        <span className="capitalize">{label}</span>
        <span className={`text-xs transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-canvas dark:bg-canvas-dark border border-border dark:border-border-dark rounded-xl shadow-xl z-20 overflow-hidden">
          <div className="p-2 border-b border-border dark:border-border-dark">
            <input
              type="text"
              placeholder="Search locations…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 text-sm bg-surface dark:bg-surface-dark border border-border dark:border-border-dark rounded-lg text-ink dark:text-ink-dark placeholder:text-ink-muted dark:placeholder:text-ink-muted-dark focus:outline-none focus:border-brand-violet"
              autoFocus
            />
          </div>
          <div className="max-h-60 overflow-y-auto p-1">
            {visible.length === 0 ? (
              <p className="px-3 py-2 text-sm text-ink-muted dark:text-ink-muted-dark">No matches</p>
            ) : visible.map(option => (
              <label
                key={option}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer hover:bg-surface dark:hover:bg-surface-dark capitalize"
              >
                <input
                  type="checkbox"
                  checked={selected.has(option)}
                  onChange={() => toggle(option)}
                  className="accent-brand-violet w-3.5 h-3.5 shrink-0"
                />
                <span className="text-sm text-ink dark:text-ink-dark">{option}</span>
              </label>
            ))}
          </div>
          {selected.size > 0 && (
            <div className="p-2 border-t border-border dark:border-border-dark">
              <button
                onClick={() => { onChange(new Set()); setSearch('') }}
                className="w-full text-xs text-ink-muted dark:text-ink-muted-dark hover:text-brand-violet dark:hover:text-brand-violet-light transition-colors"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index]
  const srcsetJpeg = photo.src.jpeg.map((u, i) => `${u} ${photo.widths[i]}w`).join(', ')

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        disabled={index === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl disabled:opacity-20 px-3 py-2 transition-colors"
        aria-label="Previous photo"
      >
        ‹
      </button>

      {/* Image + info */}
      <div
        className="flex flex-col items-center gap-3"
        onClick={e => e.stopPropagation()}
      >
        <picture>
          <source type="image/webp" srcSet={photo.src.webp.map((u, i) => `${u} ${photo.widths[i]}w`).join(', ')} sizes="100vw" />
          <img
            src={photo.src.jpeg.at(-1)}
            srcSet={srcsetJpeg}
            sizes="100vw"
            alt=""
            className="max-h-[78vh] max-w-[88vw] object-contain rounded"
          />
        </picture>

        {/* Metadata */}
        <div className="text-center px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-white/80 flex-wrap">
            {(() => {
              const label = photo.location ?? (photo.category !== 'landscapes' ? photo.category.charAt(0).toUpperCase() + photo.category.slice(1) : null)
              return label ? (
                <>
                  <span className="font-medium capitalize">{label}</span>
                  <span className="text-white/30">·</span>
                </>
              ) : null
            })()}
            <span className="text-white/60">
              {new Date(photo.dateTaken).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          {(photo.camera || photo.focalLength || photo.fNumber || photo.exposureTime || photo.iso) && (
            <div className="mt-1 flex items-center justify-center gap-2 text-xs text-white/40 flex-wrap">
              {photo.camera && <span>{photo.camera}</span>}
              {photo.camera && (photo.focalLength || photo.fNumber) && <span className="text-white/20">·</span>}
              {photo.focalLength && <span>{photo.focalLength}</span>}
              {photo.fNumber && <span>{photo.fNumber}</span>}
              {photo.exposureTime && <span>{photo.exposureTime}</span>}
              {photo.iso && <span>ISO {photo.iso}</span>}
            </div>
          )}
        </div>
      </div>

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        disabled={index === photos.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl disabled:opacity-20 px-3 py-2 transition-colors"
        aria-label="Next photo"
      >
        ›
      </button>

      {/* Counter + close */}
      <div className="absolute top-4 inset-x-0 flex items-center justify-between px-4" onClick={e => e.stopPropagation()}>
        <span className="text-white/50 text-sm font-mono">{index + 1} / {photos.length}</span>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white text-xl px-2 py-1 transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body
  )
}

export default function Photos() {
  const [selected, setSelected] = useState(new Set())
  const [sortOrder, setSortOrder] = useState('newest')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Unified label for each photo: location name OR capitalized category (for sunsets)
  const photoLabel = p => p.location ?? (p.category.charAt(0).toUpperCase() + p.category.slice(1))

  const filterOptions = [...new Set(photosData.map(photoLabel))].sort()

  const base =
    selected.size === 0
      ? photosData
      : photosData.filter(p => selected.has(photoLabel(p)))

  const sorted = [...base].sort((a, b) =>
    sortOrder === 'newest' ? b.dateTaken - a.dateTaken : a.dateTaken - b.dateTaken
  )

  // Portraits first, then landscapes — makes the offset middle column look intentional
  const portraits = sorted.filter(p => p.height > p.width)
  const landscapes = sorted.filter(p => p.width >= p.height)
  const filtered = [...portraits, ...landscapes]

  // Close lightbox on filter/sort change
  useEffect(() => { setLightboxIndex(null) }, [selected, sortOrder])

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return
    const len = filtered.length
    const handler = e => {
      if (e.key === 'ArrowRight') setLightboxIndex(i => Math.min(i + 1, len - 1))
      if (e.key === 'ArrowLeft')  setLightboxIndex(i => Math.max(i - 1, 0))
      if (e.key === 'Escape')     setLightboxIndex(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, filtered.length])

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-2">
        Photography
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-8">
        Canon EOS R50 — landscapes and sunsets
      </p>

      {photosData.length === 0 ? (
        <p className="text-ink-muted dark:text-ink-muted-dark">
          Run{' '}
          <code className="font-mono text-sm bg-surface dark:bg-surface-dark border border-border dark:border-border-dark px-1.5 py-0.5 rounded">
            npm run photos
          </code>{' '}
          to process originals and populate this gallery.
        </p>
      ) : (
        <>
          {/* Filter + sort */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <FilterDropdown
              options={filterOptions}
              selected={selected}
              onChange={setSelected}
            />
            <div className="flex items-center gap-1 text-sm shrink-0">
              {['newest', 'oldest'].map(order => (
                <button
                  key={order}
                  onClick={() => setSortOrder(order)}
                  className={`px-3 py-1 rounded-md capitalize transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 ${
                    sortOrder === order
                      ? 'text-ink dark:text-ink-dark font-medium'
                      : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark'
                  }`}
                >
                  {order}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry grid — 3 cols on desktop (middle offset), 2 cols on mobile */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-3">
            {[0, 1, 2].map(col => (
              <div key={col} className={`flex flex-col gap-3 ${col === 1 ? 'mt-16' : ''}`}>
                {filtered
                  .filter((_, i) => i % 3 === col)
                  .map((photo) => {
                    const globalIndex = filtered.indexOf(photo)
                    return (
                      <PhotoTile
                        key={photo.id}
                        photo={photo}
                        onClick={() => setLightboxIndex(globalIndex)}
                      />
                    )
                  })}
              </div>
            ))}
          </div>
          <div className="sm:hidden columns-2 gap-3">
            {filtered.map((photo, i) => (
              <PhotoTile
                key={photo.id}
                photo={photo}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => Math.max(i - 1, 0))}
          onNext={() => setLightboxIndex(i => Math.min(i + 1, filtered.length - 1))}
        />
      )}
    </div>
  )
}
