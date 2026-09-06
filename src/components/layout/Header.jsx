import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'

const navLinks = [
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/photos', label: 'Photos' },
  { to: '/about', label: 'About' },
]

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Close menu on navigation
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header className="sticky top-0 z-50 bg-canvas/80 dark:bg-canvas-dark/80 backdrop-blur-md border-b border-border dark:border-border-dark">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center" aria-label="Main navigation">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2.5 shrink-0 focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
        >
          <img
            src="/headshot-circle.png"
            alt=""
            aria-hidden="true"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-display font-bold text-xl text-brand-pink dark:text-brand-pink-light">
            Jack Campbell
          </span>
        </NavLink>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden sm:flex flex-1 items-center justify-end gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 ${
                  isActive
                    ? 'text-brand-pink dark:text-brand-pink-light bg-surface dark:bg-surface-dark'
                    : 'text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark hover:bg-surface dark:hover:bg-surface-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile — theme toggle + hamburger */}
        <div className="sm:hidden flex items-center gap-1 ml-auto">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="p-2 rounded-lg text-ink-muted dark:text-ink-muted-dark hover:text-ink dark:hover:text-ink-dark hover:bg-surface dark:hover:bg-surface-dark transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border dark:border-border-dark bg-canvas dark:bg-canvas-dark px-4 py-3 flex flex-col">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-pink dark:text-brand-pink-light'
                    : 'text-ink-muted dark:text-ink-muted-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
