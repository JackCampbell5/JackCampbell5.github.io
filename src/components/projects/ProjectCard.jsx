import { useState } from 'react'

const colorMap = {
  violet: {
    stripe:  'bg-brand-violet',
    label:   'text-brand-violet dark:text-brand-violet-light',
    bullet:  'text-brand-violet dark:text-brand-violet-light',
    button:  'text-brand-violet dark:text-brand-violet-light hover:underline focus-visible:outline-brand-violet',
    link:    'text-brand-violet dark:text-brand-violet-light hover:underline focus-visible:outline-brand-violet',
  },
  rose: {
    stripe:  'bg-brand-rose',
    label:   'text-brand-rose dark:text-brand-rose-light',
    bullet:  'text-brand-rose dark:text-brand-rose-light',
    button:  'text-brand-rose dark:text-brand-rose-light hover:underline focus-visible:outline-brand-rose',
    link:    'text-brand-rose dark:text-brand-rose-light hover:underline focus-visible:outline-brand-rose',
  },
  teal: {
    stripe:  'bg-brand-teal',
    label:   'text-brand-teal dark:text-brand-teal-light',
    bullet:  'text-brand-teal dark:text-brand-teal-light',
    button:  'text-brand-teal dark:text-brand-teal-light hover:underline focus-visible:outline-brand-teal',
    link:    'text-brand-teal dark:text-brand-teal-light hover:underline focus-visible:outline-brand-teal',
  },
  sky: {
    stripe:  'bg-brand-sky',
    label:   'text-brand-sky dark:text-brand-sky-light',
    bullet:  'text-brand-sky dark:text-brand-sky-light',
    button:  'text-brand-sky dark:text-brand-sky-light hover:underline focus-visible:outline-brand-sky',
    link:    'text-brand-sky dark:text-brand-sky-light hover:underline focus-visible:outline-brand-sky',
  },
  pink: {
    stripe:  'bg-brand-pink',
    label:   'text-brand-pink dark:text-brand-pink-light',
    bullet:  'text-brand-pink dark:text-brand-pink-light',
    button:  'text-brand-pink dark:text-brand-pink-light hover:underline focus-visible:outline-brand-pink',
    link:    'text-brand-pink dark:text-brand-pink-light hover:underline focus-visible:outline-brand-pink',
  },
  amber: {
    stripe:  'bg-brand-amber',
    label:   'text-brand-amber dark:text-brand-amber-light',
    bullet:  'text-brand-amber dark:text-brand-amber-light',
    button:  'text-brand-amber dark:text-brand-amber-light hover:underline focus-visible:outline-brand-amber',
    link:    'text-brand-amber dark:text-brand-amber-light hover:underline focus-visible:outline-brand-amber',
  },
}

export default function ProjectCard({ project, dateBelow = false }) {
  const [expanded, setExpanded] = useState(false)
  const hasBullets = project.bullets && project.bullets.length > 0
  const hasLinks = project.liveUrl || (project.repoUrl && project.repoPublic)
  const colors = colorMap[project.color] ?? colorMap.violet

  return (
    <article className="rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark flex flex-col overflow-hidden">
      {/* Accent stripe */}
      <div className={`h-1 w-full ${colors.stripe}`} />

      {project.screenshotUrl && (
        <img
          src={project.screenshotUrl}
          alt={`${project.name} screenshot`}
          className="w-full aspect-video object-cover"
          loading="lazy"
          width="800"
          height="450"
        />
      )}

      <div className="p-6 flex flex-col gap-3 flex-1">
        {project.context && (
          <p className={`text-xs font-medium ${colors.label}`}>
            {project.context}
          </p>
        )}

        <div className={dateBelow ? '' : 'flex items-start justify-between gap-3'}>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-ink-dark leading-snug">
            {project.name}
          </h2>
          {project.dates && dateBelow && (
            <span className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono">
              {project.dates}
            </span>
          )}
          {project.dates && !dateBelow && (
            <span className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono shrink-0 pt-1">
              {project.dates}
            </span>
          )}
        </div>

        <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed">
          {project.description}
        </p>

        {hasBullets && expanded && (
          <ul className="mt-1 flex flex-col gap-2.5">
            {project.bullets.map((bullet, i) => (
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

        {hasBullets && (
          <button
            onClick={() => setExpanded(e => !e)}
            className={`self-start text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors ${colors.button}`}
          >
            {expanded ? 'Show less ↑' : 'Show more ↓'}
          </button>
        )}

        <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs bg-canvas dark:bg-canvas-dark border border-border dark:border-border-dark text-ink-muted dark:text-ink-muted-dark font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div className="flex gap-4 pt-1">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm ${colors.link}`}
              >
                Live ↗
              </a>
            )}
            {project.repoUrl && project.repoPublic && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm ${colors.link}`}
              >
                GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
