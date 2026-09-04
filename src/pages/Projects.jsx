import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-3">
        Projects
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-12">
        [ Real project data coming in Phase 2 — replace entries in{' '}
        <code className="text-brand-violet dark:text-brand-violet-light">src/data/projects.js</code> ]
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map(project => (
          <article
            key={project.id}
            className="rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark p-6 flex flex-col gap-3"
          >
            <h2 className="font-display text-lg font-semibold text-ink dark:text-ink-dark">
              {project.name}
            </h2>
            <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed flex-1">
              {project.description}
            </p>
            <p className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono">
              {project.stack.join(' · ')}
            </p>
            <div className="flex gap-3 pt-1">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-violet dark:text-brand-violet-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 rounded-sm"
                >
                  Live ↗
                </a>
              )}
              {project.repoUrl && project.repoPublic && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-violet dark:text-brand-violet-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 rounded-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
