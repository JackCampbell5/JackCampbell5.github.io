/**
 * Projects data — edit entries here to update /projects and the homepage strip.
 *
 * color: one of 'violet' | 'rose' | 'teal' | 'sky' | 'pink' | 'amber'
 *        Each project gets a unique accent color.
 *
 * screenshotUrl: drop images into public/projects/ named by id (e.g. /projects/strong-start.jpg)
 */

export const projects = [
  {
    id: 'strong-start',
    name: 'Strong Start',
    context: 'Meta — Software Engineering Internship',
    dates: 'Jun 2025',
    color: 'violet',
    description:
      'A web app connecting refugees in the DC metro with nonprofit services. Built during a Meta Software Engineering internship and shipped into production.',
    bullets: [
      'Developed a web app enabling nonprofits to add and manage service listings tailored for refugees in their local area.',
      'Designed and implemented a custom search algorithm ranking services based on 8 user-defined parameters to improve relevance.',
      'Created a recommendation system to identify and rank surrounding services not yet in the database for nonprofits to expand service selection.',
      'Optimized search efficiency by integrating the Haversine formula for location calculations, significantly reducing runtime and API calls.',
      'Leveraged Google Maps API to accurately calculate distances and discover additional nonprofits within target areas.',
      'Automated React component creation by building and publishing an NPM package, saving significant time for my fellow interns.',
    ],
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
    color: 'rose',
    description:
      'A five-stage multi-agent AI pipeline that answers natural-language equity compensation queries with cell-level source citations. Built as a QUEST 490H capstone consulting project with Alpine Rewards.',
    bullets: [
      'Delivered four recommendations and nine documentation deliverables (~100 pages); projected annual savings of $378,000 in reclaimed consultant time.',
      'Contributed to a five-stage Copilot Studio sub-agent pipeline (Query Parser → File Retrieval → Data Extractor → Value Finder → Response Formatter) that answers natural-language questions with cell-level source citations, after three earlier architectures were tested and ruled out.',
      'Ran discovery through interviews with five Alpine consultants and an inventory of 15 anonymized client folders, which surfaced seven distinct file-naming patterns.',
      'Built the shared task tracker (owners, review deadlines, delivery deadlines, linked documents) that the team used to manage nine deliverables and a working software prototype in parallel.',
      'Helped design a test suite spanning five question categories, including error-handling cases that check the agent refuses to answer rather than fabricate a value.',
      'Applied the DMADV framework to structure the engagement from scope definition through validation.',
    ],
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
    color: 'teal',
    description:
      'A rapid-response housing coordination tool built for Homes Not Borders after refugee resettlement agencies suddenly lost funding, putting hundreds of DC-area families at risk of eviction.',
    bullets: [
      'Last spring, when refugee resettlement agencies suddenly lost funding and were forced to shut down, hundreds of new refugees in the DC area were at risk of losing their apartments. One nonprofit called Homes Not Borders took on this additional role of rent payments, but did not have an existing process to do it.',
      'To create this process, I built a rapid-response housing coordination tool for nonprofit Homes Not Borders after refugee agencies shut down, putting hundreds at risk of eviction.',
      'Consolidated 5 forms across 5 languages into a single, filterable spreadsheet database with multilingual auto-translation and multi-level approval tracking.',
      'Prioritized speed and usability by designing the system in Google Sheets, enabling immediate deployment and easy updates by nontechnical staff.',
      'The tool enabled the organization to quickly identify and secure housing for multiple refugee families abandoned in U.S. hotels.',
    ],
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
    color: 'sky',
    description:
      'A Google Forms and Apps Script system that consolidated UMD CS undergrad research applications from hundreds of scattered emails into a single filterable interface.',
    bullets: [
      "Streamlined UMD Computer Science Department's undergrad research application process by consolidating hundreds of scattered emails into a single Google Form and filterable spreadsheet.",
      'Developed custom Google Apps Scripts to automate creation/deletion of individual professor sheets, improving usability and reducing bugs.',
      'Kept UMD Computer Science Department consistently informed during the QUEST project by preparing pre-meeting agendas, managing meeting timing, taking collaborative notes, and following up with summaries and action items.',
      'Presented the final solution to the Head of Undergraduate Research and at a department-wide faculty and advisor meeting.',
      'Delivered biweekly update presentations to stakeholders throughout the project.',
      'Designed and analyzed surveys from 50 undergraduates and 10 professors to guide feature development and assess impact.',
    ],
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
    color: 'pink',
    description:
      'A physical product redesign tackling the frustrations of traditional keyrings. Developed through 8 user interviews and 55 surveys as a QUEST Honors program project.',
    bullets: [
      'For our QUEST Honors Program product redesign project, our team tackled the challenges of traditional keyrings. Our product, CAPSlock, includes a keycap that allows tactile and visual differentiation of keys, plus a new modular keyring with an easy detach mechanism allowing you to carry around the keys you need when you need them.',
      'To create our product, we conducted 8 interviews and 55 surveys of our anticipated customers to figure out what features we needed most. In the keyring redesign our focus was figuring out how to carry around fewer keys as well as keyrings being very hard to add and remove keys from. This led to our new modular design, which is secure but easy to open.',
      'Through this project, I practiced my project management skills by dividing up and following up on assignments. I created calendars and organized documents so everyone had the same information. I also learned a lot about customer-focused design, iterative problem-solving, and prototyping from my team.',
    ],
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
    color: 'amber',
    description:
      'A chat application connecting UMD students based on shared question responses. Building platonic connections in a world where everyone is always on their phones.',
    bullets: [
      'In talking to people across the UMD campus, many people agree that it is much harder to meet people and make friends as everyone is always on their phones. To address this issue, I have been developing a chat application that connects users based on their responses to various questions.',
      'Currently working: user log-in, chatting, and matching.',
      'Next steps: enhance question quality for better matching; improve security measures to protect user data.',
      'This project is yet to be released.',
    ],
    stack: ['In development'],
    liveUrl: null,
    repoUrl: null,
    repoPublic: false,
    featured: false,
    screenshotUrl: null,
  },
]
