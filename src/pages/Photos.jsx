export default function Photos() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-3">
        Photography
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-12">
        Canon EOS R50 — landscapes and sunsets.{' '}
        <span className="text-brand-violet dark:text-brand-violet-light">
          [ Gallery coming in Phase 3 — run <code>npm run photos</code> once originals are in place ]
        </span>
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="aspect-[4/3] rounded-xl bg-surface dark:bg-surface-dark border border-border dark:border-border-dark flex items-center justify-center text-sm text-ink-muted dark:text-ink-muted-dark"
          >
            Photo placeholder {i + 1}
          </div>
        ))}
      </div>
    </div>
  )
}
