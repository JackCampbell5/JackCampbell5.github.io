import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-16">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-ink dark:text-ink-dark max-w-3xl">
          Software engineer drawn to the gap between the tool you have and the tool you need.
        </h1>

        <p className="mt-6 text-lg text-ink-muted dark:text-ink-muted-dark max-w-xl">
          Open to full-time software engineering and product roles —{' '}
          <span className="text-brand-violet dark:text-brand-violet-light font-medium">
            graduating May 2027.
          </span>
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-violet text-white font-medium text-sm hover:bg-brand-violet-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2"
          >
            See my work
          </Link>
          <a
            href="mailto:jackbcampbell15@gmail.com"
            className="inline-flex items-center px-5 py-2.5 rounded-lg border border-border dark:border-border-dark text-ink-muted dark:text-ink-muted-dark font-medium text-sm hover:border-brand-violet hover:text-brand-violet dark:hover:border-brand-violet-light dark:hover:text-brand-violet-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Selected projects — placeholder for Phase 2 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-8">
          Selected projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map(n => (
            <div
              key={n}
              className="rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-5 flex flex-col gap-3"
            >
              <div className="h-4 w-24 rounded bg-border dark:bg-border-dark animate-pulse" />
              <div className="h-3 w-full rounded bg-border dark:bg-border-dark animate-pulse" />
              <div className="h-3 w-3/4 rounded bg-border dark:bg-border-dark animate-pulse" />
              <p className="text-xs text-ink-muted dark:text-ink-muted-dark mt-auto pt-2">
                [ PROJECT PLACEHOLDER — content coming in Phase 2 ]
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/projects"
            className="text-sm text-brand-violet dark:text-brand-violet-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 rounded-sm"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* Photo strip — placeholder for Phase 3 */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-2">
          Photography
        </h2>
        <p className="text-ink-muted dark:text-ink-muted-dark mb-8 text-sm">
          Canon EOS R50 — landscapes and sunsets
        </p>
        <div className="flex gap-3 overflow-hidden rounded-xl">
          {[1, 2, 3, 4].map(n => (
            <div
              key={n}
              className="flex-1 aspect-square rounded-lg bg-surface dark:bg-surface-dark border border-border dark:border-border-dark flex items-center justify-center text-xs text-ink-muted dark:text-ink-muted-dark"
            >
              Photo {n}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link
            to="/photos"
            className="text-sm text-brand-violet dark:text-brand-violet-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 rounded-sm"
          >
            Browse the gallery →
          </Link>
        </div>
      </section>

      {/* About snippet */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-4">
          About
        </h2>
        <p className="text-ink-muted dark:text-ink-muted-dark max-w-2xl leading-relaxed">
          CS senior at the University of Maryland (ML concentration). I've worked with organizations
          that didn't have a software team behind them — refugees at Homes Not Borders, scientists
          at NIST, caseworkers tracking services in a spreadsheet. Two summers at Meta taught the
          other half: the discipline that keeps quality from slipping as volume goes up.
        </p>
        <div className="mt-6">
          <Link
            to="/about"
            className="text-sm text-brand-violet dark:text-brand-violet-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 rounded-sm"
          >
            Read more →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
        <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-6">
          Get in touch
        </h2>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:jackbcampbell15@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-violet hover:text-brand-violet dark:hover:border-brand-violet-light dark:hover:text-brand-violet-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2"
          >
            jackbcampbell15@gmail.com
          </a>
          <a
            href="https://github.com/JackCampbell5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-violet hover:text-brand-violet dark:hover:border-brand-violet-light dark:hover:text-brand-violet-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jackcampbell15"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark hover:border-brand-violet hover:text-brand-violet dark:hover:border-brand-violet-light dark:hover:text-brand-violet-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2"
          >
            LinkedIn
          </a>
          {/* Resume link — replace href with real Google Drive URL (Batch C) */}
          <a
            href="#"
            aria-disabled="true"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dashed border-border dark:border-border-dark text-sm text-ink-muted dark:text-ink-muted-dark opacity-50 cursor-not-allowed"
          >
            Resume (coming soon)
          </a>
        </div>
      </section>
    </div>
  )
}
