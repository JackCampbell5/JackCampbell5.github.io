import { useState } from 'react'
import { experiences } from '../data/experience'
import ExperienceCard from '../components/experience/ExperienceCard'

export default function Experience() {
  const [mode, setMode] = useState('swe')

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-display text-4xl font-bold text-ink dark:text-ink-dark mb-3">
        Experience
      </h1>
      <p className="text-ink-muted dark:text-ink-muted-dark mb-8">
        From a nonprofit deploy at midnight to AI features at Meta. Toggle to see how the story changes by lens.
      </p>

      {/* SWE / PM toggle */}
      <div
        className="flex gap-1 p-1 rounded-lg bg-surface dark:bg-surface-dark border border-border dark:border-border-dark w-fit mb-10"
        role="group"
        aria-label="Experience framing"
      >
        <button
          onClick={() => setMode('swe')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-1 ${
            mode === 'swe'
              ? 'bg-brand-violet text-white'
              : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark'
          }`}
        >
          SWE
        </button>
        <button
          onClick={() => setMode('pm')}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-1 ${
            mode === 'pm'
              ? 'bg-brand-violet text-white'
              : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark'
          }`}
        >
          PM
        </button>
      </div>

      {/* Experience list — single column, stacked in resume order */}
      <div className="flex flex-col gap-4">
        {experiences.map(exp => (
          <ExperienceCard key={exp.id} exp={exp} mode={mode} />
        ))}
      </div>
    </div>
  )
}
