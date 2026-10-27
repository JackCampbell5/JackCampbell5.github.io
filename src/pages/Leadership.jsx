import { activities } from '../data/activities'
import ActivityCard from '../components/leadership/ActivityCard'

const featured = activities.filter(a => a.featured)
const rest = [...activities.filter(a => !a.featured)].sort((a, b) =>
  b.start.localeCompare(a.start),
)

export default function Leadership() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-3">
        Leadership
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-12 max-w-2xl">
        Outside the IDE: founding communities, running a theatre company, and nine years with a
        refugee-resettlement nonprofit.
      </p>

      <div className="flex flex-col gap-5 mb-5">
        {featured.map(activity => (
          <ActivityCard key={activity.id} activity={activity} featured />
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {rest.map(activity => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  )
}
