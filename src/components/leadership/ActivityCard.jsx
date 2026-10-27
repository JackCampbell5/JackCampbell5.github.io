import { useState } from 'react'
import { METRIC_LABELS } from '../../data/activities'

const colorMap = {
  violet: {
    stripe: 'bg-brand-violet',
    label:  'text-brand-violet dark:text-brand-violet-light',
    bullet: 'text-brand-violet dark:text-brand-violet-light',
    button: 'text-brand-violet dark:text-brand-violet-light hover:underline focus-visible:outline-brand-violet',
    chip:   'border-brand-violet/30 text-brand-violet dark:border-brand-violet-light/30 dark:text-brand-violet-light',
  },
  rose: {
    stripe: 'bg-brand-rose',
    label:  'text-brand-rose dark:text-brand-rose-light',
    bullet: 'text-brand-rose dark:text-brand-rose-light',
    button: 'text-brand-rose dark:text-brand-rose-light hover:underline focus-visible:outline-brand-rose',
    chip:   'border-brand-rose/30 text-brand-rose dark:border-brand-rose-light/30 dark:text-brand-rose-light',
  },
  teal: {
    stripe: 'bg-brand-teal',
    label:  'text-brand-teal dark:text-brand-teal-light',
    bullet: 'text-brand-teal dark:text-brand-teal-light',
    button: 'text-brand-teal dark:text-brand-teal-light hover:underline focus-visible:outline-brand-teal',
    chip:   'border-brand-teal/30 text-brand-teal dark:border-brand-teal-light/30 dark:text-brand-teal-light',
  },
  sky: {
    stripe: 'bg-brand-sky',
    label:  'text-brand-sky dark:text-brand-sky-light',
    bullet: 'text-brand-sky dark:text-brand-sky-light',
    button: 'text-brand-sky dark:text-brand-sky-light hover:underline focus-visible:outline-brand-sky',
    chip:   'border-brand-sky/30 text-brand-sky dark:border-brand-sky-light/30 dark:text-brand-sky-light',
  },
  pink: {
    stripe: 'bg-brand-pink',
    label:  'text-brand-pink dark:text-brand-pink-light',
    bullet: 'text-brand-pink dark:text-brand-pink-light',
    button: 'text-brand-pink dark:text-brand-pink-light hover:underline focus-visible:outline-brand-pink',
    chip:   'border-brand-pink/30 text-brand-pink dark:border-brand-pink-light/30 dark:text-brand-pink-light',
  },
  amber: {
    stripe: 'bg-brand-amber',
    label:  'text-brand-amber dark:text-brand-amber-light',
    bullet: 'text-brand-amber dark:text-brand-amber-light',
    button: 'text-brand-amber dark:text-brand-amber-light hover:underline focus-visible:outline-brand-amber',
    chip:   'border-brand-amber/30 text-brand-amber dark:border-brand-amber-light/30 dark:text-brand-amber-light',
  },
}

export default function ActivityCard({ activity, featured = false }) {
  const [expanded, setExpanded] = useState(false)
  const [storyOpen, setStoryOpen] = useState(false)
  const colors = colorMap[activity.color] ?? colorMap.violet
  const hasHighlights = activity.highlights && activity.highlights.length > 0
  const metricEntries = activity.metrics ? Object.entries(activity.metrics) : []

  return (
    <article className="rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark flex flex-col overflow-hidden">
      <div className={`h-1 w-full ${colors.stripe}`} />

      <div className={`flex flex-col gap-3 flex-1 ${featured ? 'p-7' : 'p-6'}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <span className={`text-xs font-semibold ${colors.label}`}>{activity.role}</span>
            <h2
              className={`font-display font-semibold text-ink dark:text-ink-dark leading-snug ${
                featured ? 'text-xl' : 'text-lg'
              }`}
            >
              {activity.title}
            </h2>
            <p className="text-xs text-ink-muted dark:text-ink-muted-dark">
              {activity.org}
              {activity.location ? ` · ${activity.location}` : ''}
            </p>
          </div>
          <span className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono shrink-0 pt-1">
            {activity.dates}
          </span>
        </div>

        <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          {activity.summary}
        </p>

        {metricEntries.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {metricEntries.map(([key, value]) => (
              <span
                key={key}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border ${colors.chip}`}
              >
                <span className="font-mono font-semibold">{value}</span> {METRIC_LABELS[key] ?? key}
              </span>
            ))}
          </div>
        )}

        {hasHighlights && expanded && (
          <ul className="mt-1 flex flex-col gap-2.5">
            {activity.highlights.map((bullet, i) => (
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

        {activity.story && storyOpen && (
          <div className="mt-1 flex flex-col gap-3 pt-3 border-t border-border dark:border-border-dark">
            {activity.story.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-auto pt-1">
          {hasHighlights && (
            <button
              onClick={() => setExpanded(e => !e)}
              className={`self-start text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors ${colors.button}`}
            >
              {expanded ? 'Show less ↑' : 'Show more ↓'}
            </button>
          )}
          {activity.story && (
            <button
              onClick={() => setStoryOpen(s => !s)}
              className={`self-start text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors ${colors.button}`}
            >
              {storyOpen ? 'Hide the full story ↑' : 'Read the full story ↓'}
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
