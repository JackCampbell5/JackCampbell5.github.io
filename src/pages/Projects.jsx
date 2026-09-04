import { projects } from '../data/projects'
import ProjectCard from '../components/projects/ProjectCard'

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-3">
        Projects
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-12">
        Things I've built, shipped, or am still building.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
