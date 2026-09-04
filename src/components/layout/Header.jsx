import { NavLink } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'

const navLinks = [
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/photos', label: 'Photos' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-canvas/80 dark:bg-canvas-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-6" aria-label="Main navigation">
        <NavLink
          to="/"
          className="font-display font-bold text-xl text-brand-violet dark:text-brand-violet-light shrink-0 focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 rounded-sm"
        >
          Jack Campbell
        </NavLink>

        <div className="flex-1 flex items-center justify-end gap-1 sm:gap-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-violet focus-visible:outline-offset-2 ${
                  isActive
                    ? 'text-brand-violet dark:text-brand-violet-light bg-surface dark:bg-surface-dark'
                    : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark hover:bg-surface dark:hover:bg-surface-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
