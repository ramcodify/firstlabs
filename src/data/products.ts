export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  isFlagship?: boolean;
  packageId: string;
  description: string;
  detailedDescription: string;
  iconUrl: string;
  playStoreUrl: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'firsthire',
    name: 'FirstHire',
    tagline: 'AI Career Matching & Resume Accelerator',
    category: 'Work & Careers',
    isFlagship: true,
    packageId: 'com.remedez.firsthire',
    description: 'Tech job discovery and resume tailoring accelerator for engineers. Matches candidates using 768-dimensional semantic embeddings with zero latency.',
    detailedDescription: 'Finding a job shouldn\'t feel like a full-time job. FirstHire continuously indexes tech openings across global ecosystems, computes 768-dimensional vector representations, and adapts your resume for target positions in one tap.',
    iconUrl: '/assets/images/firsthire-icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.remedez.firsthire',
    tags: ['AI Embeddings', 'ATS Resume Tailor', 'Android', 'Jetpack Compose', '768 Dimensions'],
    metrics: [
      { label: 'Alert Latency', value: '< 5 mins' },
      { label: 'Embedding Space', value: '768-dim' },
      { label: 'Search Latency', value: '< 15ms' },
      { label: 'Consultancy Spam', value: '0%' }
    ],
    features: [
      'Real-time push alerts within 5 minutes of verified role drops',
      '1-Click AI-powered ATS resume restructuring preserving factual truth',
      '768-dimensional semantic cosine similarity job matching',
      '100% direct employer career links with zero recruiter brokerage'
    ]
  },
  {
    id: 'copyshelf',
    name: 'CopyShelf',
    tagline: 'Edge Panel Clipboard Manager',
    category: 'Productivity Utility',
    packageId: 'com.remedez.copyshelf',
    description: 'An edge panel clipboard manager allowing instant access to frequently used text snippets via a floating drawer. Built with offline-first local storage and automatic sensitive data masking.',
    detailedDescription: 'Designed for Android power users who need instant access to text templates, addresses, and code snippets without switching away from active apps. All data remains exclusively on-device in an encrypted Room database.',
    iconUrl: '/assets/images/copyshelf-icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.remedez.copyshelf',
    tags: ['Edge Drawer', 'Offline-First', 'Data Masking', 'Room DB', 'Android Native'],
    metrics: [
      { label: 'Architecture', value: '100% Local' },
      { label: 'Sensitive Masking', value: 'Auto-detect' },
      { label: 'Cloud Leakage', value: 'Zero' }
    ],
    features: [
      'Accessible anytime via smooth sliding edge gesture',
      'Encrypted local storage with automatic credit card and token masking',
      'Categorized snippet bins for repetitive communication',
      'Zero network permissions required'
    ]
  },
  {
    id: 'gymtimer',
    name: 'Gym Timer',
    tagline: 'Workout Consistency Tracker',
    category: 'Health & Fitness',
    packageId: 'com.kragma.gymtimer',
    description: 'A minimalist fitness companion focused purely on workout consistency. Tracks time spent training with one-tap check-ins and activity heatmaps without complex exercise logging bloat.',
    detailedDescription: 'Most fitness applications burden the user with endless set-and-rep data entry. Gym Timer tracks the single metric that dictates 90% of long-term results: showing up and putting in the time.',
    iconUrl: '/assets/images/gymtimer-icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kragma.gymtimer',
    tags: ['One-Tap Checkin', 'Activity Heatmap', 'Zero Bloat', 'Minimalist UI', 'Android Native'],
    metrics: [
      { label: 'Check-in Time', value: '1 Tap' },
      { label: 'Cognitive Load', value: 'Minimal' },
      { label: 'Visual View', value: 'Annual Heatmap' }
    ],
    features: [
      'Single tap session initiation and duration measurement',
      'GitHub-style annual consistency heatmap visualization',
      'Zero advertisements, tracking cookies, or subscription walls',
      'Battery-optimized background timer service'
    ]
  }
];
