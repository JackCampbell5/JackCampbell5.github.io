import { createPortal } from 'react-dom'

export default function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index]
  const srcsetJpeg = photo.src.jpeg.map((u, i) => `${u} ${photo.widths[i]}w`).join(', ')
  const label = photo.location ?? (photo.category !== 'landscapes'
    ? photo.category.charAt(0).toUpperCase() + photo.category.slice(1)
    : null)

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
      <div className="flex flex-col items-center gap-3" onClick={e => e.stopPropagation()}>
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
            {label && (
              <>
                <span className="font-medium capitalize">{label}</span>
                <span className="text-white/30">·</span>
              </>
            )}
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
