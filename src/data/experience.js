/**
 * Experience data — edit entries here to update /experience.
 *
 * iconUrl: drop a logo into public/experience/<filename> and set the path here.
 *          e.g. '/experience/meta.png' — null shows org name only.
 * color:   one of 'violet' | 'rose' | 'teal' | 'sky' | 'pink' | 'amber'
 * sweSummary / pmSummary: one-line framing for each toggle mode
 * sweBullets / pmBullets: exact text from each resume version
 */

export const experiences = [
  {
    id: 'meta-2026',
    org: 'Meta',
    title: 'Software Engineering Intern',
    dates: 'May 2026 – Aug 2026',
    location: 'Menlo Park, CA',
    color: 'violet',
    featured: true,
    iconUrl: '/experience/meta.avif',
    sweSummary:
      'Shipped an Android AI dating assistant into production, extended it to iOS parity, and ran 6 parallel workstreams across 15+ production areas.',
    pmSummary:
      'Owned AI feature development end-to-end, from scoping and XFN alignment with data science and design through A/B experimentation and fallback tradeoffs.',
    sweBullets: [
      'Owned the Android launch of an AI dating assistant in Facebook Dating and brought it to iOS parity and extended it with net-new capabilities across 15+ production areas, by leveraging AI tools to accomplish 6 tasks simultaneously.',
      'Designed an ML feature from the ground up for 10+ surfaces, owning the framing and fallback tradeoffs.',
      'Owned experiment design for 2 profile surfaces, defining north-star and guardrail metrics with XFN data science and design.',
      "Caught and fixed a silent data-loss bug in a teammate's feature mid-rollout that permanently deleted photos on reorder.",
    ],
    pmBullets: [
      'AI Feature Development: Designed and implemented an AI-powered Dating Assistant for Facebook Dating on Android by leveraging AI tools to accomplish 6 tasks simultaneously.',
      'Applied ML Design: Designed an ML feature from the ground up for 10+ surfaces, owning framing and fallback tradeoffs.',
      'Proactive Project Design: Independently scoped, designed, and implemented additional full-stack project improving tooling.',
      'Cross-functional Collaboration: Partnered with XFN designers to design, prototype, and A/B multiple new user experiences.',
    ],
  },
  {
    id: 'meta-2025',
    org: 'Meta',
    title: 'Software Engineering Intern',
    dates: 'Jun 2025 – Aug 2025',
    location: 'Menlo Park, CA',
    color: 'violet',
    featured: true,
    iconUrl: '/experience/meta.avif',
    sweSummary:
      'Shipped Strong Start, a 7-criteria refugee service search platform, in 5 weeks with 9,400+ LOC, 750+ commits, and 88 code reviews.',
    pmSummary:
      'Defined requirements directly with nonprofit caseworkers, then delivered a production platform that cut service-search time 40% across the DC metro.',
    sweBullets: [
      'Defined requirements with nonprofit caseworkers and shipped Strong Start, turning an informal referral process into a structured 7-criteria search that cut time-to-find-a-service 40% across the DC metro.',
      'Produced 9,400+ LOC, 750+ commits, and 88 code reviews in 5 weeks.',
    ],
    pmBullets: [
      'Scalable Platform Development: Designed and delivered Strong Start, a production-ready platform connecting refugees with nonprofit services across 7+ criteria, serving refugees across the DC metro area.',
      'High-velocity Engineering Execution: Produced 9,400+ LOC, 750+ commits, and 88 code reviews in 5 weeks.',
      'Technical & Social Impact: Cut service search time by 40%, streamlining access to essential resources for refugees.',
    ],
  },
  {
    id: 'hnb',
    org: 'Homes Not Borders',
    title: 'Director of Technology and System Design',
    dates: 'Nov 2024 – Present',
    location: 'Washington, DC',
    color: 'teal',
    featured: true,
    iconUrl: '/experience/homes-not-borders.jpg',
    sweSummary:
      'Built a full rent-assistance tracking platform in under 24 hours and iterated on caseworker feedback to serve 300+ refugee families.',
    pmSummary:
      'Scoped an undefined problem, ran stakeholder discovery, and shipped two multilingual tools that accelerated case processing by 75%.',
    sweBullets: [
      'Handed an unscoped problem, shipped a full rent-assistance platform in under 24 hours in continuous contact with caseworkers, then iterated on their feedback serving 300+ families.',
      'Ran stakeholder discovery to establish requirements for mentor-matching tool and shipped tool matching mentors 30% faster.',
    ],
    pmBullets: [
      'Systems Development: Built and deployed a rent-assistance tracking system serving 300+ refugee families, accelerating case processing speed by 75%.',
      'Multilingual Tooling: Developed a mentor-matching platform in multiple languages that enabled mentor matches 30% faster.',
    ],
  },
  {
    id: 'nist-2024',
    org: 'NIST - National Institute of Standards and Technology',
    title: 'AI Project Lead',
    dates: 'May 2024 – Aug 2024',
    location: 'Gaithersburg, MD',
    color: 'sky',
    iconUrl: '/experience/nist.png',
    sweSummary:
      'Led an LLM application for multimillion-dollar neutron instruments with script creation time down 25% and a functional prototype delivered in 8 weeks under budget.',
    pmSummary:
      'Drove AI adoption in a skeptical scientific organization, reconciling conflicting stakeholders and presenting results to 50+ domain experts at an international workshop.',
    sweBullets: [
      'Led development of an LLM application for operating multimillion-dollar neutron instruments with no prior expertise, reconciling conflicting stakeholder opinions as requirements shifted. Script creation time down 25%, prototype in 8 weeks, under budget.',
      'Built buy-in across a skeptical scientific audience with presentations to 50+ internal AI experts and an international workshop.',
    ],
    pmBullets: [
      'AI Instrument Control: Led development of an LLM-based application to operate multimillion-dollar neutron scattering instruments, reducing control script creation time by 25%. Delivered functional prototype under budget in 8 weeks.',
      'Technical Presentations: Presented results to 50+ NIST AI Community of Interest Members and at international AI for Materials Science Workshop, increasing visibility of AI adoption in nuclear physics labs.',
    ],
  },
  {
    id: 'nist-2022',
    org: 'NIST - National Institute of Standards and Technology',
    title: 'CORE Intern',
    dates: 'Sep 2022 – Aug 2023',
    location: 'Gaithersburg, MD',
    color: 'sky',
    iconUrl: '/experience/nist.png',
    sweSummary:
      'Launched a modular experiment-planning web tool that consolidated 3M+ compiled data points for neutron scattering research.',
    pmSummary:
      'Designed and shipped a research-access tool that lowered the barrier to entry for neutron scattering experiments.',
    sweBullets: [
      'Launched modular experiment-planning web tool serving 3M+ compiled data points, lowering the entry barrier for research.',
    ],
    pmBullets: [
      'Scientific Tool Development: Designed and launched a modular experiment-planning web tool serving 3M+ compiled data points, lowering the entry barrier for neutron scattering research.',
    ],
  },
  {
    id: 'alpine',
    org: 'Alpine Rewards',
    title: 'Product Consultant — QUEST Honors Capstone',
    dates: 'Jan 2026 – May 2026',
    location: 'Remote',
    color: 'amber',
    iconUrl: '/experience/alpine.avif',
    sweSummary:
      'Architected a five-stage multi-agent pipeline that cut 30-minute equity compensation lookups to under 5 minutes.',
    pmSummary:
      'Led a consulting engagement, ran 5 stakeholder interviews, diagnosed the root problem, and designed the solution architecture that projected $378K/yr in reclaimed capacity.',
    sweBullets: [
      'Designed five-stage agent architecture allowing the team to build and cut 30-minute lookups to under 5 minutes by interviewing 5 stakeholders resulting in $378K/yr projected in reclaimed capacity.',
    ],
    pmBullets: [
      'Designed five-stage agent architecture allowing the team to build and cut 30-minute lookups to under 5 minutes by interviewing 5 stakeholders resulting in $378K/yr projected in reclaimed capacity.',
    ],
  },
]
