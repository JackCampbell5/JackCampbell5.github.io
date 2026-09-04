import { Link } from 'react-router-dom'
import ProjectCard from '../projects/ProjectCard'
import { projects } from '../../data/projects'

const featured = projects.filter(p => p.featured).slice(0, 3)

export default function ProjectStrip() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
      <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-8">
        Selected projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map(project => (
          <ProjectCard key={project.id} project={project} />
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
  )
}
