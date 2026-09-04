import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-3">
        Experience
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-12">
        Organizations without a software team, and one that had a very large one.
      </p>

      <ol className="relative border-l-2 border-border dark:border-border-dark ml-4 flex flex-col gap-10">
        {experiences.map(exp => (
          <li key={exp.id} className="ml-6">
            <span
              className="absolute -left-[9px] w-4 h-4 rounded-full bg-brand-violet ring-4 ring-canvas dark:ring-canvas-dark"
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h2 className="font-display text-lg font-semibold text-ink dark:text-ink-dark">
                {exp.title}
              </h2>
              <span className="text-brand-violet dark:text-brand-violet-light font-medium text-sm">
                {exp.org}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-0.5 mb-3">
              <time className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono">
                {exp.dates}
              </time>
              {exp.location && (
                <span className="text-xs text-ink-muted dark:text-ink-muted-dark">
                  {exp.location}
                </span>
              )}
            </div>
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed max-w-2xl">
              {exp.shipped}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
