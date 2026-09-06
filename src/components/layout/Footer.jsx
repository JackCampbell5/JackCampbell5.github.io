export default function Footer() {
  return (
    <footer className="border-t border-border dark:border-border-dark mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted dark:text-ink-muted-dark">
        <span>© {new Date().getFullYear()} Jack Campbell</span>
        <div className="flex items-center gap-5">
          <a
            href="mailto:jackbcampbell15@gmail.com"
            className="hover:text-brand-pink dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
          >
            Email
          </a>
          <a
            href="https://github.com/JackCampbell5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-pink dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/jackcampbell5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-pink dark:hover:text-brand-pink-light transition-colors focus-visible:outline-2 focus-visible:outline-brand-pink focus-visible:outline-offset-2 rounded-sm"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
