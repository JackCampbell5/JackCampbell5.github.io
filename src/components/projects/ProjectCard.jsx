export default function ProjectCard({ project }) {
  const hasLinks = project.liveUrl || (project.repoUrl && project.repoPublic)

  return (
    <article className="rounded-xl border border-border dark:border-border-dark bg-surface dark:bg-surface-dark flex flex-col overflow-hidden">
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
          <p className="text-xs font-medium text-brand-violet dark:text-brand-violet-light">
            {project.context}
          </p>
        )}
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-display text-lg font-semibold text-ink dark:text-ink-dark leading-snug">
            {project.name}
          </h2>
          {project.dates && (
            <span className="text-xs text-ink-muted dark:text-ink-muted-dark font-mono shrink-0 pt-1">
              {project.dates}
            </span>
          )}
        </div>
        <p className="text-sm text-ink-muted dark:text-ink-muted-dark leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
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
        )}
      </div>
    </article>
  )
}
