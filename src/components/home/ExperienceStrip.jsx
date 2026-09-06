import { Link } from 'react-router-dom'
import ExperienceCard from '../experience/ExperienceCard'
import { experiences } from '../../data/experience'

const featured = experiences.filter(e => e.featured).slice(0, 3)

export default function ExperienceStrip() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 border-t border-border dark:border-border-dark">
      <h2 className="font-display text-2xl font-bold text-ink dark:text-ink-dark mb-8">
        Selected experience
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map(exp => (
          <ExperienceCard key={exp.id} exp={exp} mode="swe" dateInHeader />
        ))}
      </div>
      <div className="mt-8">
        <Link
          to="/experience"
          className="text-sm text-brand-pink dark:text-brand-pink-light font-medium hover:underline focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
        >
          View all experience →
        </Link>
      </div>
    </section>
  )
}
