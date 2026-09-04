import { skills } from '../data/skills'

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-10">
        About
      </h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Bio + education */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <p className="text-ink dark:text-ink-dark leading-relaxed">
            Software engineer, drawn to problems nobody is working on yet and the gap between the
            tool you have vs the tool you need. Experience working for organizations without a
            software organization behind them — refugees navigating resettlement processes at Homes
            Not Borders, caseworkers tracking all the local services in a spreadsheet, and 2 summers
            at NIST working with scientists operating instruments they didn't design the software
            for. Two summers at Meta taught the other half of the job, which is the discipline that
            keeps quality from slipping as volume goes up.
          </p>
          <p className="text-ink dark:text-ink-dark leading-relaxed">
            The habit underneath all of it is asking what problem is actually being solved before
            agreeing to solve the stated one. Those diverge more often than anyone admits, and the
            divergence only shows up months later. A consulting engagement for Alpine Rewards went
            best when it delivered what the client asked for as well as a recommendation they hadn't
            asked for, because a tool nobody owns doesn't survive the handoff.
          </p>
          <p className="text-ink dark:text-ink-dark leading-relaxed">
            Computer Science senior at the University of Maryland, machine learning concentration,
            open to software engineering and product roles. Outside of that, mostly finding reasons
            to get people outdoors. Always up for a conversation; reach out anytime.
          </p>

          <p className="mt-2 font-medium text-brand-violet dark:text-brand-violet-light">
            Open to full-time roles — graduating May 2027.
          </p>

          {/* Resume link — replace href with real Google Drive URL (Batch C) */}
          <div className="mt-2">
            <a
              href="#"
              aria-disabled="true"
              className="inline-flex items-center px-5 py-2.5 rounded-lg bg-brand-violet text-white font-medium text-sm opacity-50 cursor-not-allowed"
              tabIndex={-1}
            >
              Resume (link coming soon)
            </a>
          </div>

          {/* Education */}
          <div className="mt-6 pt-6 border-t border-border dark:border-border-dark">
            <h2 className="font-display text-lg font-semibold text-ink dark:text-ink-dark mb-4">
              Education
            </h2>
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between flex-wrap gap-x-4">
                <span className="font-medium text-ink dark:text-ink-dark">
                  University of Maryland, College Park
                </span>
                <span className="text-sm text-ink-muted dark:text-ink-muted-dark font-mono shrink-0">
                  Expected May 2027
                </span>
              </div>
              <p className="text-sm text-ink-muted dark:text-ink-muted-dark">
                B.S. Computer Science — Machine Learning Concentration
              </p>
              <p className="text-sm text-brand-violet dark:text-brand-violet-light font-medium">
                GPA 3.93 / 4.0
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['QUEST Honors Program', 'Scholars Program'].map(prog => (
                  <span
                    key={prog}
                    className="px-2.5 py-1 rounded-md text-xs bg-surface dark:bg-surface-dark border border-border dark:border-border-dark text-ink-muted dark:text-ink-muted-dark"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills sidebar */}
        <aside>
          <h2 className="font-display text-lg font-semibold text-ink dark:text-ink-dark mb-5">
            Skills
          </h2>
          {skills.map(group => (
            <div key={group.category} className="mb-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-muted dark:text-ink-muted-dark mb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md text-xs bg-surface dark:bg-surface-dark border border-border dark:border-border-dark text-ink dark:text-ink-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
