import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-32 flex flex-col items-center text-center gap-6">
      <p className="font-mono text-sm text-brand-pink font-medium uppercase tracking-widest">
        404
      </p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink dark:text-ink-dark">
        You found a dead end.
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark max-w-sm leading-relaxed">
        Whatever you were looking for isn't here. The good news is that dead ends
        are usually pretty close to the right path.
      </p>
      <Link
        to="/"
        className="mt-4 inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-pink text-white font-medium text-sm hover:bg-brand-pink-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
      >
        ← Back home
      </Link>
    </div>
  )
}
