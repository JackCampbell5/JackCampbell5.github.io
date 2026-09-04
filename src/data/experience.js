/**
 * Experience data — edit entries here to update the /experience page.
 *
 * Fields:
 *   id       string  — unique key
 *   org      string  — organization name
 *   title    string  — role title
 *   dates    string  — display string
 *   location string  — city, state (or "Remote")
 *   shipped  string  — what you built / shipped / changed (web-narrative tone, not resume bullets)
 */

export const experiences = [
  {
    id: 'meta-2026',
    org: 'Meta',
    title: 'Software Engineering Intern',
    dates: 'May 2026 – Aug 2026',
    location: 'Menlo Park, CA',
    shipped:
      'Owned the Android launch of an AI dating assistant in Facebook Dating, brought it to iOS parity, and extended it with net-new capabilities across 15+ production areas — running 6 parallel workstreams with AI tooling. Also designed an ML feature from the ground up for 10+ surfaces, owning framing and fallback tradeoffs.',
  },
  {
    id: 'meta-2025',
    org: 'Meta',
    title: 'Software Engineering Intern',
    dates: 'Jun 2025 – Aug 2025',
    location: 'Menlo Park, CA',
    shipped:
      'Designed and shipped Strong Start, a production platform turning an informal nonprofit referral process into a structured 7-criteria search that cut service-find time 40% across the DC metro. 9,400+ LOC, 750+ commits, 88 code reviews in 5 weeks.',
  },
  {
    id: 'hnb',
    org: 'Homes Not Borders',
    title: 'Director of Technology and System Design',
    dates: 'Nov 2024 – Present',
    location: 'Washington, DC',
    shipped:
      'Handed an unscoped problem, shipped a full rent-assistance tracking platform in under 24 hours in continuous contact with caseworkers, then iterated to serve 300+ refugee families at 75% faster case-processing speed. Also ran stakeholder discovery and shipped a multilingual mentor-matching tool that cut match time 30%.',
  },
  {
    id: 'nist-2024',
    org: 'NIST — National Institute of Standards and Technology',
    title: 'AI Project Lead',
    dates: 'May 2024 – Aug 2024',
    location: 'Gaithersburg, MD',
    shipped:
      'Led an LLM application to operate multimillion-dollar neutron scattering instruments — no prior domain expertise, conflicting stakeholders, shifting requirements. Control script creation time down 25%, functional prototype delivered in 8 weeks under budget. Presented to 50+ NIST AI experts and at an international AI for Materials Science workshop.',
  },
  {
    id: 'nist-2022',
    org: 'NIST — National Institute of Standards and Technology',
    title: 'CORE Intern',
    dates: 'Sep 2022 – Aug 2023',
    location: 'Gaithersburg, MD',
    shipped:
      'Designed and launched a modular experiment-planning web tool serving 3M+ compiled data points, lowering the entry barrier for neutron scattering research.',
  },
  {
    id: 'alpine',
    org: 'Alpine Rewards',
    title: 'Product Consultant — QUEST Honors Capstone',
    dates: 'Jan 2026 – May 2026',
    location: 'Remote',
    shipped:
      'Designed a five-stage multi-agent pipeline that cut 30-minute equity compensation lookups to under 5 minutes. Delivered what the client asked for plus an unrequested architectural recommendation that made the handoff survivable. $378K/yr projected in reclaimed capacity.',
  },
]
