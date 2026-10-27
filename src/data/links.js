export const EMAIL         = 'jackbcampbell15@gmail.com'
export const EMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`
export const RESUME_SWE    = 'https://drive.google.com/file/d/13sQ_fFhQ3qV79jKctf29l4ekgh7DrvN_/view?usp=sharing'
export const RESUME_PM     = 'https://drive.google.com/file/d/1ztQ8vsDGjrr91fbFMPTN87h9lLFqqGv_/view?usp=sharing'
export const GITHUB        = 'https://github.com/JackCampbell5'
export const LINKEDIN      = 'https://linkedin.com/in/jackcampbell5'
export const SITE          = 'https://jackcampbell5.github.io'

/* ── Linktree rows ──
   Drives the hidden /links page. `color` keys into the accent map in
   src/pages/Links.jsx — keep them in sync. `internal: true` routes through
   React Router instead of a full page load.
*/
export const linktree = [
  {
    id: 'site',
    label: 'Portfolio',
    sub: 'Projects, experience, and photography',
    href: '/',
    icon: 'globe',
    color: 'pink',
    internal: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    sub: '/in/jackcampbell5',
    href: LINKEDIN,
    icon: 'linkedin',
    color: 'sky',
  },
  {
    id: 'github',
    label: 'GitHub',
    sub: '@JackCampbell5',
    href: GITHUB,
    icon: 'github',
    color: 'violet',
  },
  {
    id: 'resume-swe',
    label: 'Resume — Software Engineering',
    sub: 'PDF',
    href: RESUME_SWE,
    icon: 'document',
    color: 'teal',
  },
  {
    id: 'resume-pm',
    label: 'Resume — Product Management',
    sub: 'PDF',
    href: RESUME_PM,
    icon: 'document',
    color: 'amber',
  },
  {
    id: 'email',
    label: 'Email',
    sub: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: 'envelope',
    color: 'rose',
  },
]
