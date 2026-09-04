import { useState } from 'react'

const colorMap = {
  violet: {
    stripe: 'bg-brand-violet',
    label:  'text-brand-violet dark:text-brand-violet-light',
    bullet: 'text-brand-violet dark:text-brand-violet-light',
    button: 'text-brand-violet dark:text-brand-violet-light hover:underline focus-visible:outline-brand-violet',
  },
  rose: {
    stripe: 'bg-brand-rose',
    label:  'text-brand-rose dark:text-brand-rose-light',
    bullet: 'text-brand-rose dark:text-brand-rose-light',
    button: 'text-brand-rose dark:text-brand-rose-light hover:underline focus-visible:outline-brand-rose',
  },
  teal: {
    stripe: 'bg-brand-teal',
    label:  'text-brand-teal dark:text-brand-teal-light',
    bullet: 'text-brand-teal dark:text-brand-teal-light',
    button: 'text-brand-teal dark:text-brand-teal-light hover:underline focus-visible:outline-brand-teal',
  },
  sky: {
    stripe: 'bg-brand-sky',
    label:  'text-brand-sky dark:text-brand-sky-light',
    bullet: 'text-brand-sky dark:text-brand-sky-light',
    button: 'text-brand-sky dark:text-brand-sky-light hover:underline focus-visible:outline-brand-sky',
  },
  pink: {
    stripe: 'bg-brand-pink',
    label:  'text-brand-pink dark:text-brand-pink-light',
    bullet: 'text-brand-pink dark:text-brand-pink-light',
    button: 'text-brand-pink dark:text-brand-pink-light hover:underline focus-visible:outline-brand-pink',
  },
  amber: {
    stripe: 'bg-brand-amber',
    label:  'text-brand-amber dark:text-brand-amber-light',
    bullet: 'text-brand-amber dark:text-brand-amber-light',
    button: 'text-brand-amber dark:text-brand-amber-light hover:underline focus-visible:outline-brand-amber',
  },
}

// dateInHeader: true  → date stacks below title inside the icon block (homepage grid)
//               false → date floats to the right of the header row (experience page)
export default function ExperienceCard({ exp, mode, dateInHeader = false }) {
  const [expanded, setExpanded] = useState(false)
  const colors = colorMap[exp.color] ?? colorMap.violet
  const summary = mode === 'swe' ? exp.sweSummary : exp.pmSummary
  const bullets = mode === 'swe' ? exp.sweBullets : exp.pmBullets
  const hasBullets = bullets && bullets.length > 0

  return (
    <article className="rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark overflow-hidden">
      {/* Accent stripe */}
      <div className={`h-1 w-full ${colors.stripe}`} />

      <div className="p-6 flex flex-col gap-3">
        {/* Header */}
        <div className={dateInHeader ? '' : 'flex items-start justify-between gap-4'}>
          <div className="flex items-start gap-3">
            {exp.iconUrl && (
              <div className="w-16 h-16 rounded-lg bg-white border border-border shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={exp.iconUrl}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div className="flex flex-col gap-0.5">
              <span className={`text-xs font-semibold ${colors.label}`}>
                {exp.org}
              </span>
              <h2 className="font-display text-base font-semibold text-ink dark:text-ink-dark leading-snug">
                {exp.title}
              </h2>
              {dateInHeader && (
                <time className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono">
                  {exp.dates}
                </time>
              )}
              {exp.location && (
                <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
                  {exp.location}
                </p>
              )}
            </div>
          </div>
          {!dateInHeader && (
            <time className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono shrink-0 pt-0.5">
              {exp.dates}
            </time>
          )}
        </div>

        {/* One-line summary */}
        <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          {summary}
        </p>

        {/* Expanded bullets */}
        {hasBullets && expanded && (
          <ul className="mt-1 flex flex-col gap-2.5">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2.5 items-start">
                <span className={`${colors.bullet} mt-0.5 shrink-0 select-none`} aria-hidden="true">
                  •
                </span>
                <span className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Show more/less */}
        {hasBullets && (
          <button
            onClick={() => setExpanded(e => !e)}
            className={`self-start text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors ${colors.button}`}
          >
            {expanded ? 'Show less ↑' : 'Show more ↓'}
          </button>
        )}
      </div>
    </article>
  )
}
