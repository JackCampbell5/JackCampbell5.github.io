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

export default function ExperienceCard({ exp, mode }) {
  const [expanded, setExpanded] = useState(false)
  const colors = colorMap[exp.color] ?? colorMap.violet
  const summary = mode === 'swe' ? exp.sweSummary : exp.pmSummary
  const bullets = mode === 'swe' ? exp.sweBullets : exp.pmBullets
  const hasBullets = bullets && bullets.length > 0

  return (
    <article className="rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark overflow-hidden">
      {/* Accent stripe */}
      <div className={`h-1 w-full ${colors.stripe}`} />

      <div className="p-6 flex flex-col gap-2">
        {/* Org row: icon + name | dates */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {exp.iconUrl && (
              <img
                src={exp.iconUrl}
                alt=""
                aria-hidden="true"
                className="w-5 h-5 rounded object-contain"
              />
            )}
            <span className={`text-xs font-semibold ${colors.label}`}>
              {exp.org}
            </span>
          </div>
          <time className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono shrink-0">
            {exp.dates}
          </time>
        </div>

        {/* Title */}
        <h2 className="font-display text-lg font-semibold text-ink dark:text-ink-dark leading-snug">
          {exp.title}
        </h2>

        {/* Location */}
        {exp.location && (
          <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
            {exp.location}
          </p>
        )}

        {/* One-line summary */}
        <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed mt-1">
          {summary}
        </p>

        {/* Expanded bullets */}
        {hasBullets && expanded && (
          <ul className="mt-2 flex flex-col gap-2.5">
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
            className={`self-start text-xs font-medium mt-1 focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors ${colors.button}`}
          >
            {expanded ? 'Show less ↑' : 'Show more ↓'}
          </button>
        )}
      </div>
    </article>
  )
}
