export interface JobOpening {
  id: string;
  refCode: string;
  title: string;
  department: string;
  location: string;
  type: string;
  ctc: string;
  baseSalary: string;
  variablePay: string;
  summary: string;
  tags: string[];
  responsibilities: { title: string; desc: string }[];
  requirements: { title: string; desc: string }[];
  selectionProcess: { stage: string; title: string; desc: string }[];
  applyEmail: string;
  mailSubject: string;
  mailBody: string;
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'fed-2026',
    refCode: 'FED-2026',
    title: 'Associate Frontend Developer',
    department: 'Web & Client Architecture',
    location: 'Mumbai, India (Hybrid)',
    type: 'Full-Time',
    ctc: '₹8 LPA + Variables',
    baseSalary: '₹8 LPA Guaranteed Base',
    variablePay: 'Performance-linked feature bonuses',
    summary: 'Build responsive web applications, component design systems, client-side state synchronization, and sub-second interaction pipelines for high-throughput candidate platforms.',
    tags: ['TypeScript', 'Modern Web', 'Design Systems', 'Core Web Vitals', 'WebSockets', 'REST APIs'],
    responsibilities: [
      {
        title: 'Web Applications & Interfaces',
        desc: 'Develop and maintain user-facing web applications using modern JavaScript, TypeScript, and component-driven frameworks.'
      },
      {
        title: 'Rendering Performance & Core Web Vitals',
        desc: 'Optimize bundle sizes, client caching, asset delivery, and rendering lifecycles to maintain sub-second page loads and fluid interaction latency.'
      },
      {
        title: 'Design Systems & UI Engineering',
        desc: 'Translate product requirements and design mockups into accessible, reusable component libraries with strict visual consistency.'
      },
      {
        title: 'State Management & Data Synchronization',
        desc: 'Architect client-side state handling, offline tolerance, optimistic updates, and real-time data streaming via WebSockets.'
      },
      {
        title: 'Code Quality & Automated Testing',
        desc: 'Write automated component, end-to-end, and visual regression tests to maintain zero-regression release cycles.'
      }
    ],
    requirements: [
      {
        title: 'JavaScript & TypeScript Mastery',
        desc: 'Deep knowledge of ECMAScript standards, closures, asynchronous patterns, browser event loop, and static type systems.'
      },
      {
        title: 'DOM, CSS & Browser Internals',
        desc: 'Clear understanding of critical rendering path, layout reflows, compositor layers, CSS architecture, and cross-browser rendering behavior.'
      },
      {
        title: 'Network & Client-Side Storage',
        desc: 'Familiarity with HTTP caching headers, Service Workers, IndexedDB, Web Storage, and network request optimization.'
      },
      {
        title: 'Accessibility & Standards',
        desc: 'Commitment to WCAG accessibility standards, semantic HTML, keyboard navigation, and assistive technologies.'
      }
    ],
    selectionProcess: [
      { stage: '1', title: 'Online Technical Assessment', desc: 'Structured evaluation covering core JavaScript fundamentals, DOM concepts, web standards, and analytical problem-solving.' },
      { stage: '2', title: 'Technical & JavaScript Interview', desc: '1-on-1 virtual technical interview exploring language fundamentals, asynchronous programming, frontend architecture, and practical engineering trade-offs.' },
      { stage: '3', title: 'Managerial & Leadership Interview', desc: 'Discussion with engineering leadership focusing on project ownership, cross-functional collaboration, problem-solving mindset, and culture alignment.' },
      { stage: '4', title: 'Offer & Onboarding', desc: 'Leadership alignment, compensation walkthrough, and formal onboarding roadmap for joining our core engineering team in Mumbai.' }
    ],
    applyEmail: 'talent@thefirstlabs.live',
    mailSubject: 'Application: Associate Frontend Developer [FED-2026] - [Your Name]',
    mailBody: 'Hi The First Labs Team,\n\nI am applying for the Associate Frontend Developer role (Ref: FED-2026).\n\nPortfolio / GitHub: \nLinkedIn: \nBrief note on relevant projects:\n\nLooking forward to hearing from you.\n'
  },
  {
    id: 'ase-26',
    refCode: 'ASE-26',
    title: 'Associate Software Engineer',
    department: 'Core Systems & Distributed Backend',
    location: 'Mumbai, India (Hybrid)',
    type: 'Full-Time',
    ctc: '₹23 LPA + Variables',
    baseSalary: '₹18–₹20 LPA Fixed Base',
    variablePay: '₹3–₹5 LPA Performance-linked Bonus',
    summary: 'Build production backend microservices, real-time distributed crawlers, 768-dimensional vector search indexing pipelines, and high-performance database architectures powering FirstHire.',
    tags: ['Go', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Vector Search', 'Firestore'],
    responsibilities: [
      {
        title: 'Backend Microservices & APIs',
        desc: 'Design, develop, and maintain low-latency REST and async backend services using Node.js, TypeScript, Go, or Python.'
      },
      {
        title: 'Database Design & Optimization',
        desc: 'Design relational (PostgreSQL) and document (Firestore) schemas. Optimize composite B-Tree indexes, connection pooling, and keyset pagination.'
      },
      {
        title: 'Distributed Systems & Reliability',
        desc: 'Build resilient event-driven workers, circuit breakers, rate limiters, and idempotent API patterns for zero data loss.'
      },
      {
        title: 'Vector Search & Retrieval Pipelines',
        desc: 'Work with 768-dimensional vector embeddings, cosine distance similarity indexing, and automated candidate-to-opportunity matching pipelines.'
      },
      {
        title: 'Automated Testing & CI/CD',
        desc: 'Write high-coverage automated unit and integration tests, conduct peer code reviews, and ship continuous zero-downtime releases.'
      }
    ],
    requirements: [
      {
        title: 'Computer Science Fundamentals',
        desc: 'Strong foundation in data structures, graph algorithms, hash maps, sliding windows, and amortized time-space complexity.'
      },
      {
        title: 'Concurrency & Systems Architecture',
        desc: 'Clear understanding of asynchronous execution models, event loop microtasks vs macrotasks, and thread-safe operations.'
      },
      {
        title: 'Databases & Caching',
        desc: 'Practical familiarity with SQL queries, transaction isolation, indexing trade-offs, and caching strategies with Redis.'
      },
      {
        title: 'API Standards & Networking',
        desc: 'Understanding of HTTP/2, HTTP/3, WebSockets, RESTful conventions, and secure token-based authentication flows.'
      }
    ],
    selectionProcess: [
      { stage: '1', title: 'Profile & Project Evaluation', desc: 'Review of code repositories, past projects, or relevant engineering problem-solving background.' },
      { stage: '2', title: 'Technical & Systems Interview', desc: '1-on-1 virtual session focused on core algorithms, system architecture, and API design trade-offs.' },
      { stage: '3', title: 'Engineering Deep-Dive', desc: 'Technical discussion with senior engineers covering past implementations, database design, and practical edge cases.' },
      { stage: '4', title: 'Offer & Onboarding', desc: 'Leadership alignment, compensation walkthrough, and formal offer rollout for joining our Mumbai team.' }
    ],
    applyEmail: 'talent@thefirstlabs.live',
    mailSubject: 'Application: Associate Software Engineer [ASE-26] - [Your Name]',
    mailBody: 'Hi The First Labs Team,\n\nI am applying for the Associate Software Engineer role (Ref: ASE-26).\n\nGitHub / Profile: \nResume URL: \nBrief note on distributed systems / backend experience:\n\nBest regards,\n'
  }
];

export const STUDIO_PROVISIONS = [
  {
    title: 'Workstation Setup',
    desc: 'Apple MacBook Pro (M-Series) with dual 4K external displays and ergonomic accessories.'
  },
  {
    title: 'Health Insurance',
    desc: 'Comprehensive medical coverage of ₹10 Lakhs covering the employee and immediate family/parents.'
  },
  {
    title: 'Learning Stipend',
    desc: '₹1,00,000 annual allowance for technical literature, engineering tooling, and conferences.'
  },
  {
    title: 'Location & Commute',
    desc: 'Mumbai Tech Hub base with hybrid working options, catered lunches, espresso, and transit reimbursement.'
  }
];
