/**
 * Projects data — replace DUMMY entries with real content (Batch A).
 *
 * Fields:
 *   id         string  — unique key
 *   name       string  — project title
 *   description string — what problem it solved
 *   stack      string[] — technologies used
 *   liveUrl    string | null — live demo URL
 *   repoUrl    string | null — GitHub URL
 *   repoPublic boolean — if false, repo link is hidden
 *   featured   boolean — shown on homepage project strip
 */

export const projects = [
  {
    id: 'dummy-1',
    name: 'DUMMY PROJECT ALPHA',
    description:
      'This is a placeholder entry. Replace it with a real project description explaining the problem it solved and why it mattered.',
    stack: ['React', 'Python', 'PostgreSQL'],
    liveUrl: null,
    repoUrl: 'https://github.com/JackCampbell5/PLACEHOLDER',
    repoPublic: false,
    featured: true,
  },
  {
    id: 'dummy-2',
    name: 'DUMMY PROJECT BETA',
    description:
      'Another placeholder. Describe the project: its user, the gap it filled, what you built.',
    stack: ['TypeScript', 'Node.js', 'SQLite'],
    liveUrl: 'https://placeholder.example.com',
    repoUrl: 'https://github.com/JackCampbell5/PLACEHOLDER',
    repoPublic: true,
    featured: true,
  },
  {
    id: 'dummy-3',
    name: 'DUMMY PROJECT GAMMA',
    description:
      'Third placeholder. Add as many real entries as you like — the grid handles any count.',
    stack: ['Python', 'scikit-learn', 'FastAPI'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: true,
  },
]
