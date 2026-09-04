/**
 * Projects data — edit entries here to update /projects and the homepage strip.
 *
 * Fields:
 *   id           string       — unique slug; used to match screenshot at public/projects/<id>.jpg
 *   name         string       — display title
 *   context      string|null  — org / program label shown in accent color above the title
 *   dates        string|null  — display string, e.g. "Jun 2025" or "Jan – May 2026"
 *   description  string       — what gap it filled and what was built (web-narrative tone)
 *   stack        string[]     — technologies, shown as monospace chips
 *   liveUrl      string|null  — live demo or deployment URL
 *   repoUrl      string|null  — GitHub URL
 *   repoPublic   boolean      — if false, GitHub link is hidden
 *   featured     boolean      — if true, shown in the homepage strip (pick 3 max)
 *   screenshotUrl string|null — path to screenshot, e.g. "/projects/strong-start.jpg"
 *                               Drop images into public/projects/ and set this field.
 */

export const projects = [
  {
    id: 'strong-start',
    name: 'Strong Start',
    context: 'Meta — Software Engineering Internship',
    dates: 'Jun 2025',
    description:
      'Nonprofits helping refugees in the DC metro had no central way to find or share local services — caseworkers relied on informal referrals and scattered spreadsheets. Strong Start is a web app with a custom 8-parameter ranking algorithm that turns that informal process into a structured search, cutting service-find time 40%. Includes a recommendation system that surfaces nearby services not yet in the database, and an NPM package that automates React component generation for the team.',
    stack: ['JavaScript', 'React', 'Express', 'PostgreSQL', 'Prisma', 'Google Maps API'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: true,
    screenshotUrl: null,
  },
  {
    id: 'co-pilot',
    name: 'Meet Your Co-Pilot',
    context: 'Alpine Rewards — QUEST 490H Capstone',
    dates: 'Jan – May 2026',
    description:
      'Alpine Rewards consultants spent ~1 hour/day manually pulling equity compensation figures from thousands of inconsistently named Excel workbooks in SharePoint. After testing three earlier architectures, we shipped a five-stage Copilot Studio multi-agent pipeline — Query Parser → File Retrieval → Data Extractor → Value Finder → Response Formatter — that answers natural-language questions with cell-level source citations. Discovery across 15 anonymized client folders surfaced seven distinct file-naming patterns. Projected savings: $378K/yr in reclaimed consultant time.',
    stack: ['Copilot Studio', 'Multi-agent AI', 'SharePoint', 'Power Automate'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: true,
    screenshotUrl: null,
  },
  {
    id: 'hnb-tracker',
    name: 'Emergency Rental Assistance Tracker',
    context: 'Homes Not Borders',
    dates: 'Jan – May 2025',
    description:
      'When refugee resettlement agencies suddenly lost funding and shut down, hundreds of new refugees in the DC area faced eviction. Homes Not Borders took on rent payments with no existing process. In under 24 hours, I built a housing coordination tool that consolidated 5 intake forms across 5 languages into a single filterable spreadsheet with multilingual auto-translation and multi-level approval tracking — deployable immediately by nontechnical staff, zero engineering maintenance required.',
    stack: ['Google Sheets', 'Google Apps Script'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: true,
    screenshotUrl: null,
  },
  {
    id: 'umd-research',
    name: 'UMD CS Research Application System',
    context: 'QUEST Project — UMD Computer Science Department',
    dates: 'Jan – May 2025',
    description:
      `UMD CS's undergrad research application process was scattered across hundreds of emails — professors couldn't manage applicants and students had no clear path in. Consolidated everything into a Google Form and filterable spreadsheet, with custom Apps Scripts that auto-create and delete individual professor sheets as professors join or leave. Informed by surveys from 50 undergraduates and 10 professors. Presented to the Head of Undergraduate Research and at a department-wide faculty meeting.`,
    stack: ['Google Apps Script', 'Google Forms', 'Google Sheets'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: false,
    screenshotUrl: null,
  },
  {
    id: 'capslock',
    name: 'CAPSlock',
    context: 'QUEST Honors — Product Redesign',
    dates: 'Sep – Dec 2024',
    description:
      'Traditional keyrings are frustrating: every key looks the same and adding or removing one is a two-handed task. CAPSlock is a modular keyring with an easy-detach mechanism and keycaps that give each key a distinct tactile and visual identity. Developed through 8 user interviews and 55 surveys, then refined through iterative prototyping with a five-person team.',
    stack: ['Physical product design', 'User research', 'Prototyping'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: false,
    screenshotUrl: null,
  },
  {
    id: 'fun-friends',
    name: 'Fun Friends',
    context: 'Personal project — in development',
    dates: 'Sep 2023 – ongoing',
    description:
      `Making friends in college is harder when everyone's on their phones — and existing apps are built for dating, not platonic connection. Fun Friends matches users based on their answers to a set of questions and lets them chat in-app. Login, matching, and chat are working. Pre-release while question quality and security get another pass.`,
    stack: ['In development'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: false,
    screenshotUrl: null,
  },
]
