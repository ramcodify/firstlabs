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
    description: 'AI-powered tech job search and resume tailoring accelerator. Uses 768-dimensional semantic embeddings to match candidates with top tech positions with zero latency.',
    detailedDescription: "Finding a job shouldn't feel like a full-time job. FirstHire continuously indexes tech openings across global ecosystems, computes 768-dimensional semantic embeddings, and adapts your resume for target positions in one tap.",
    iconUrl: '/assets/images/firsthire-icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.remedez.firsthire',
    tags: ['AI Embeddings', 'Resume Tailor', 'Jetpack Compose'],
    metrics: [
      { label: 'Alert Latency', value: '< 5 mins' },
      { label: 'Embedding Space', value: '768-dim' },
      { label: 'Search Latency', value: '< 15ms' },
      { label: 'Consultancy Spam', value: '0%' }
    ],
    features: [
      'Semantic cosine similarity matching (768 dimensions)',
      '1-Click ATS-tailored resume generation',
      'Zero-latency experience & multi-city location filtering',
      'Instant 5-minute push alerts for newly dropped tech roles'
    ]
  },
  {
    id: 'copyshelf',
    name: 'CopyShelf: Edge Clipboard',
    tagline: 'Edge Panel Clipboard Manager',
    category: 'Utility',
    packageId: 'com.remedez.copyshelf',
    description: 'An edge panel clipboard manager allowing instant access to saved text snippets via a floating edge drawer. Designed with offline-first privacy and automatic sensitive data masking.',
    detailedDescription: 'An edge panel clipboard manager allowing instant access to saved text snippets via a floating edge drawer. Designed with offline-first privacy and automatic sensitive data masking. All data remains exclusively on-device in an encrypted Room database.',
    iconUrl: '/assets/images/copyshelf-icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.remedez.copyshelf',
    tags: ['Edge Panel', 'Offline-First', 'Data Masking'],
    metrics: [
      { label: 'Architecture', value: '100% Local' },
      { label: 'Sensitive Masking', value: 'Auto-detect' },
      { label: 'Cloud Leakage', value: 'Zero' }
    ],
    features: [
      'Sliding edge handle accessible across any active Android screen',
      'Encrypted local Room database with zero network footprint',
      'Automatic masking of passwords, credit cards, and sensitive tokens',
      'Zero network permissions required'
    ]
  },
  {
    id: 'gymtimer',
    name: 'Gym Timer: Workout Tracker',
    tagline: 'Workout Consistency Tracker',
    category: 'Health & Fitness',
    packageId: 'com.kragma.gymtimer',
    description: 'A minimalist fitness companion focused purely on workout consistency. Tracks total time spent at the gym with one-tap check-ins and activity heatmaps without complex logging bloat.',
    detailedDescription: 'A minimalist fitness companion focused purely on workout consistency. Tracks total time spent at the gym with one-tap check-ins and activity heatmaps without complex logging bloat.',
    iconUrl: '/assets/images/gymtimer-icon.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kragma.gymtimer',
    tags: ['One-Tap Checkin', 'Activity Heatmap', 'Zero Bloat'],
    metrics: [
      { label: 'Check-in Time', value: '1 Tap' },
      { label: 'Cognitive Load', value: 'Minimal' },
      { label: 'Visual View', value: 'Annual Heatmap' }
    ],
    features: [
      'One-tap gym check-in & session duration counter',
      'GitHub-style annual consistency heatmap visualization',
      'Zero advertisements, tracking cookies, or subscription walls',
      'Battery-optimized background timer service'
    ]
  }
];
