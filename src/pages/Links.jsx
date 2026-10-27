import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { linktree } from '../data/links'
import BrandIcon from '../components/ui/BrandIcons'
import ThemeToggle from '../components/ui/ThemeToggle'

/* Accent per row. Written out in full rather than interpolated because
   Tailwind scans source for literal class strings — `bg-brand-${color}`
   would never make it into the stylesheet. Same pattern as ProjectCard. */
const accents = {
  pink: {
    tile:   'bg-brand-pink/12 text-brand-pink dark:bg-brand-pink/20 dark:text-brand-pink-light',
    hover:  'hover:border-brand-pink/60 dark:hover:border-brand-pink-light/50',
    arrow:  'text-brand-pink dark:text-brand-pink-light',
    focus:  'focus-visible:outline-brand-pink',
  },
  sky: {
    tile:   'bg-brand-sky/12 text-brand-sky dark:bg-brand-sky/20 dark:text-brand-sky-light',
    hover:  'hover:border-brand-sky/60 dark:hover:border-brand-sky-light/50',
    arrow:  'text-brand-sky dark:text-brand-sky-light',
    focus:  'focus-visible:outline-brand-sky',
  },
  violet: {
    tile:   'bg-brand-violet/12 text-brand-violet dark:bg-brand-violet/20 dark:text-brand-violet-light',
    hover:  'hover:border-brand-violet/60 dark:hover:border-brand-violet-light/50',
    arrow:  'text-brand-violet dark:text-brand-violet-light',
    focus:  'focus-visible:outline-brand-violet',
  },
  teal: {
    tile:   'bg-brand-teal/12 text-brand-teal dark:bg-brand-teal/20 dark:text-brand-teal-light',
    hover:  'hover:border-brand-teal/60 dark:hover:border-brand-teal-light/50',
    arrow:  'text-brand-teal dark:text-brand-teal-light',
    focus:  'focus-visible:outline-brand-teal',
  },
  amber: {
    tile:   'bg-brand-amber/12 text-brand-amber dark:bg-brand-amber/20 dark:text-brand-amber-light',
    hover:  'hover:border-brand-amber/60 dark:hover:border-brand-amber-light/50',
    arrow:  'text-brand-amber dark:text-brand-amber-light',
    focus:  'focus-visible:outline-brand-amber',
  },
  rose: {
    tile:   'bg-brand-rose/12 text-brand-rose dark:bg-brand-rose/20 dark:text-brand-rose-light',
    hover:  'hover:border-brand-rose/60 dark:hover:border-brand-rose-light/50',
    arrow:  'text-brand-rose dark:text-brand-rose-light',
    focus:  'focus-visible:outline-brand-rose',
  },
}

const ROW_BASE =
  'group relative flex items-center gap-4 w-full rounded-2xl border border-border dark:border-border-dark ' +
  'bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-sm px-4 py-3.5 ' +
  'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 ' +
  'dark:hover:shadow-black/30 focus-visible:outline-2 focus-visible:outline-offset-2'

function RowBody({ item, accent }) {
  return (
    <>
      <span
        className={`shrink-0 grid place-items-center w-11 h-11 rounded-xl transition-transform duration-200 group-hover:scale-110 ${accent.tile}`}
      >
        <BrandIcon name={item.icon} className="w-5 h-5" />
      </span>

      <span className="flex flex-col min-w-0 text-left">
        <span className="font-display font-semibold text-sm text-ink dark:text-ink-dark leading-snug">
          {item.label}
        </span>
        <span className="text-xs text-ink-muted dark:text-ink-muted-dark truncate">
          {item.sub}
        </span>
      </span>

      <span
        className={`ml-auto shrink-0 text-sm transition-transform duration-200 group-hover:translate-x-0.5 ${accent.arrow}`}
        aria-hidden="true"
      >
        →
      </span>
    </>
  )
}

export default function Links() {
  // Unlisted page — keep it out of search results. Removed on unmount so the
  // rest of the SPA stays indexable.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)

    const prevTitle = document.title
    document.title = 'Jack Campbell — Links'

    return () => {
      document.head.removeChild(meta)
      document.title = prevTitle
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-canvas dark:bg-canvas-dark text-ink dark:text-ink-dark overflow-hidden">
      {/* Palette wash — soft brand-colored blooms behind the card stack */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-brand-pink/25 dark:bg-brand-pink/15 blur-3xl" />
        <div className="absolute -top-20 -right-28 w-[26rem] h-[26rem] rounded-full bg-brand-violet/20 dark:bg-brand-violet/15 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-brand-sky/20 dark:bg-brand-sky/12 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-brand-amber/20 dark:bg-brand-amber/12 blur-3xl" />
      </div>

      <div className="absolute top-3 right-3 z-10">
        <ThemeToggle />
      </div>

      <main className="relative max-w-md mx-auto px-5 pt-16 pb-16 sm:pt-20 flex flex-col items-center">
        <img
          src="/headshot-circle.png"
          alt="Jack Campbell"
          width="112"
          height="112"
          className="w-28 h-28 rounded-full object-cover ring-4 ring-canvas dark:ring-canvas-dark shadow-xl shadow-black/10 dark:shadow-black/40"
        />

        <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-center">
          Jack Campbell
        </h1>
        <p className="mt-2 text-sm text-ink-muted dark:text-ink-muted-dark text-center text-balance">
          Software engineer · CS senior at UMD ·{' '}
          <span className="text-brand-pink dark:text-brand-pink-light font-medium">
            graduating May 2027
          </span>
        </p>

        <nav className="mt-9 w-full flex flex-col gap-3" aria-label="Links">
          {linktree.map(item => {
            const accent = accents[item.color] ?? accents.pink

            return item.internal ? (
              <Link
                key={item.id}
                to={item.href}
                className={`${ROW_BASE} ${accent.hover} ${accent.focus}`}
              >
                <RowBody item={item} accent={accent} />
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`${ROW_BASE} ${accent.hover} ${accent.focus}`}
              >
                <RowBody item={item} accent={accent} />
              </a>
            )
          })}
        </nav>

        <p className="mt-10 text-xs text-ink-muted dark:text-ink-muted-dark">
          © {new Date().getFullYear()} Jack Campbell
        </p>
      </main>
    </div>
  )
}
