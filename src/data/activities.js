/**
 * Leadership & activities data — edit entries here to update /leadership.
 *
 * color:     one of 'violet' | 'rose' | 'teal' | 'sky' | 'pink' | 'amber'
 * featured:  shown first, alone, in a larger full-width card — currently just
 *            the Bay Area Intern Hiking Club. Everyone else is in the grid.
 * highlights: expandable bullets (same "Show more" pattern as Projects/Experience)
 * metrics:   rendered as stat chips — keep keys in METRIC_LABELS below in sync
 * story:     optional longer narrative (paragraphs separated by \n\n), only
 *            Bay Area Intern Hiking Club has one right now — rendered behind
 *            a separate "Read the full story" toggle from highlights.
 *
 * Non-featured entries are sorted by `start` descending in Leadership.jsx —
 * keep this file in roughly that order for readability, but the page does
 * the actual sort.
 */

export const METRIC_LABELS = {
  members: 'Members',
  trips: 'Trips',
  participants: 'Participants',
  companies_represented: 'Companies',
  sold_out_productions: 'Sold-out Shows',
  company_size: 'Company Size',
  departments: 'Departments',
  locations: 'Locations',
  duration_hours: 'Hours',
  incidents: 'Incidents',
  troop_size: 'Troop Size',
  service_hours: 'Service Hours',
  member_growth: 'Growth',
  apartments_set_up: 'Apartments Set Up',
  hours: 'Hours Volunteered',
  volunteers_recruited: 'Volunteers Recruited',
  years: 'Years',
}

export const activities = [
  {
    id: 'bay-area-intern-hiking-club',
    title: 'Bay Area Intern Hiking Club',
    role: 'Founder',
    org: 'Independent (Bay Area interns)',
    location: 'San Francisco Bay Area, CA',
    dates: 'Mar 2026 – Aug 2026',
    color: 'violet',
    featured: true,
    start: '2026-03',
    summary:
      'Founded a community for relocated tech interns that grew from zero to 180+ members and ran 8 trips across Northern California — all alongside a full-time internship.',
    highlights: [
      'Spotted an unmet need among relocated interns with no local network; set out to find three people and a car, and grew it to 180+ members on Discord.',
      'Led 8 trips (4 day trips, 4 overnight/weekend trips with rental cars and hotels) for 100+ participants from 20 tech companies, including Meta, Google, Apple, Netflix, LinkedIn, and Rivian.',
      'Coordinated transportation, permits, timed-entry passes, and lodging for destinations including Lake Tahoe, Half Dome, Sequoia National Park, Big Sur, and Muir Woods.',
      'Built "driver packets" (passengers, contacts, pickup times, route, parking-pass instructions) so 6 carpools of 28 strangers could reach a no-signal destination and all get home safely.',
      'Ran community beyond trips: weekly lunches and Discord activity groups.',
    ],
    metrics: { members: '180+', trips: 8, participants: '100+', companies_represented: 20 },
    story: `I expected three people to show up a hike. 180 joined the Discord.

Last summer I moved to the Bay Area for an internship and spent most of my weekends at my apartment. Interesting work Monday through Friday, then nothing. When I found out I was coming back, I decided that wasn't happening twice and figured a few other interns probably felt the same way. The goal was to find three people and a car to go hiking on Saturdays.

Five months later, I had started the Bay Area Intern Hiking Club and ran 8 trips. That included 4 day trips and 4 overnight trips with rental cars and hotels, going to places such as Lake Tahoe, Half Dome, Sequoia National Park, and Big Sur. Over 100 participants, from 20 tech companies including Meta, Google, Apple, Netflix, LinkedIn, and Rivian. All of it planned on nights and weekends alongside my full-time internship.

The hardest one was Muir Woods. 28 strangers, 6 carpools, timed entry passes, and a destination an hour outside the city with no cell signal. That meant every problem had to be solved before anyone left. So I built driver packets: passenger names, phone numbers, addresses, and pickup times, plus a recommended route and step-by-step instructions for using the parking pass. Six cars left from different corners of the Bay Area. Everyone arrived. Everyone got home.

That packet is the whole thesis. The goal was never to run the hardest, most impressive hike; it was to make saying yes as easy as possible. No gear knowledge required, no logistics to untangle, no need to already know someone in the group chat. Lower the barrier, and more people end up outside exploring the beautiful Northern California nature.

Thank you to everyone who was a part of the club, whether it was joining our weekly lunches, participating in the Discord server activity groups, or attending the trips. It would not have been the same without you.

Feel free to reach out if you're thinking of running something like this; I'm happy to share how I ran it. This chapter of the club is over, but I'm not done building things like this.`,
  },
  {
    id: 'maryland-ghostlight',
    title: 'Maryland Ghostlight Theatre Company',
    role: 'President & Producer (previously Technical Director, Sound Designer)',
    org: 'University of Maryland',
    location: 'College Park, MD',
    dates: 'Jan 2024 – Present',
    color: 'pink',
    featured: false,
    start: '2024-01',
    summary:
      'Lead a 25-person student theatre company, owning schedule, budget, and coordination across 8 departments for 5 sold-out productions.',
    highlights: [
      'Owned schedule, budget, and cross-department coordination for 5 sold-out, on-time, and safe productions in a 25-person company.',
      'Acted as the escalation path for 8 departments without creative authority over any of them.',
      "Fed post-mortems from every production into the company's first written process playbook, reducing repeat failures.",
      'Led the design team and ran weekly production meetings to keep departments aligned and deliverables on time.',
      'Coordinated fire-code compliance, space planning, and resource sharing with production venues.',
      'As Technical Director, owned all technical needs — space, sets, lights, and sound.',
    ],
    metrics: { sold_out_productions: 5, company_size: 25, departments: 8 },
  },
  {
    id: 'homes-not-borders',
    title: 'Homes Not Borders',
    role: 'Volunteer Setup Lead',
    org: 'Homes Not Borders (refugee resettlement nonprofit)',
    dates: 'Jul 2017 – Present',
    color: 'teal',
    featured: false,
    start: '2017-07',
    summary:
      '9+ years volunteering with a refugee-resettlement nonprofit — 75+ apartments set up for refugee families and 600+ hours served.',
    highlights: [
      'Set up 75+ apartments for refugee families.',
      'Volunteered 600+ hours (and counting).',
      'Recruited 75+ volunteers to support the organization.',
      "Built internal tools to optimize the nonprofit's operations.",
      'Collected donations, built furniture, led apartment setups, and executed tasks set by the director.',
    ],
    metrics: { apartments_set_up: '75+', hours: '600+', volunteers_recruited: '75+', years: '9+' },
  },
  {
    id: 'dc-the-game',
    title: 'DC the Game',
    role: 'Co-Founder',
    org: 'Cross-campus student organization',
    location: 'DC / Maryland / Virginia',
    dates: 'Apr 2026 – Present',
    color: 'amber',
    featured: false,
    start: '2026-04',
    summary: 'Co-founded a tri-state scavenger-hunt game spanning DC, Maryland, and Virginia.',
    highlights: [
      'Organized tri-state games coordinating 98 locations and 9 hours of logistics for 30+ participants.',
      'Zero incidents.',
    ],
    metrics: { locations: 98, duration_hours: 9, participants: '30+', incidents: 0 },
  },
  {
    id: 'terrapin-trail-club',
    title: 'Terrapin Trail Club',
    role: 'Intro Trip Coordinator & Trip Leader',
    org: 'University of Maryland',
    location: 'College Park, MD',
    dates: 'Sep 2024 – Present',
    color: 'sky',
    featured: false,
    start: '2024-09',
    summary: 'Organized and led 19 outdoor trips for 410 total participants.',
    highlights: [
      'Organized and led 19 trips for 410 total participants — camping, hiking, and volunteer trips.',
      'Coordinate introductory trips for new club members.',
    ],
    metrics: { trips: 19, participants: 410 },
  },
  {
    id: 'quest-serves',
    title: 'QUEST Serves',
    role: 'Co-President',
    org: 'QUEST Honors Program, University of Maryland',
    location: 'College Park, MD',
    dates: 'Sep 2024 – Aug 2026',
    color: 'rose',
    featured: false,
    start: '2024-09',
    summary: 'Restarted a lapsed honors-program service organization, growing it from 2 to 12 members.',
    highlights: [
      'Restarted a lapsed organization, growing it from 2 to 12 members.',
      'Added a sub-organization structure to give individual members ownership.',
      'Refocused the organization on expanding off-campus community engagement.',
      'Planned, promoted, and led off-campus service projects, including warehouse renovations and apartment move-ins/decorating.',
    ],
    metrics: { member_growth: '2 → 12' },
  },
  {
    id: 'umd-tdps-stage-management',
    title: 'UMD School of Theatre, Dance & Performance Studies',
    role: 'Stage Manager, Assistant Stage Manager',
    org: 'Clarice Smith Performing Arts Center, University of Maryland',
    location: 'College Park, MD',
    dates: 'Jan 2024 – Dec 2025',
    color: 'violet',
    featured: false,
    start: '2024-01',
    summary: "Stage-managed productions for UMD's School of Theatre, Dance & Performance Studies.",
    highlights: [
      'As Stage Manager, coordinated every aspect of a fast-paced, one-week experimental performance.',
      'As ASM, managed prop organization and distribution for rehearsals and performances.',
      'Delegated work to the backstage crew to keep productions running efficiently.',
      'Problem-solved on the fly and covered multiple roles when team members were absent.',
    ],
  },
  {
    id: 'scouts-bsa',
    title: 'Scouts BSA — Troop (Gaithersburg, MD)',
    role: 'Eagle Scout; Senior Patrol Leader (also ASPL, Patrol Leader, First Year Patrol Leader, Quartermaster)',
    org: 'Scouts BSA',
    location: 'Gaithersburg, MD',
    dates: 'Jan 2019 – Nov 2021',
    color: 'amber',
    featured: false,
    start: '2019-01',
    summary:
      'Eagle Scout who served as Senior Patrol Leader for a troop of 70+ Scouts, including through the shift to virtual during COVID.',
    highlights: [
      'Earned Eagle Scout (2021).',
      'Senior Patrol Leader for a troop of 70+ Scouts.',
      'Reimagined troop meetings and campouts for a virtual format, then safely restarted in-person activities.',
      'Planned and led trips of 30+ Scouts — hiking, sub-zero camping, cabin and beach camping, and skiing.',
      '450+ hours of service projects.',
    ],
    metrics: { troop_size: '70+', service_hours: '450+' },
  },
]
