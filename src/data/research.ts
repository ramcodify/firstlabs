export interface ResearchPillar {
  number: string;
  title: string;
  kicker: string;
  summary: string;
  technicalDetails: string;
  metricLabel: string;
  metricValue: string;
  metricNote: string;
  architectureHighlights: string[];
}

export const RESEARCH_PILLARS: ResearchPillar[] = [
  {
    number: '01',
    kicker: 'Vector Mathematics',
    title: 'High-Dimensional Vector Retrieval',
    summary: 'Traditional job boards rely on crude keyword filters that miss synonyms, adjacent skills, and contextual nuances. We project candidate qualifications and job descriptions into a shared 768-dimensional vector space, computing dot-product similarities to uncover relevant roles. Our internal benchmark reports over 90% matching accuracy on a test set.',
    technicalDetails: 'Candidate profiles and job descriptions are vectorized into normalized 768-dimensional embeddings. Cosine similarity calculates angular proximity in high-dimensional space, capturing latent semantic equivalence between distinct terminologies without keyword rigidity.',
    metricLabel: 'Internal Benchmark',
    metricValue: '60% less search fatigue',
    metricNote: 'Performance figures are internal studio benchmarks, not independent studies.',
    architectureHighlights: [
      '768-dimensional normalized embedding projection',
      'Dot-product cosine distance ranking',
      'Context-aware synonym & qualification expansion',
      'Zero keyword-stuffing vulnerability'
    ]
  },
  {
    number: '02',
    kicker: 'Client Runtime',
    title: 'Zero-Latency State Computation',
    summary: 'By performing candidate seniority thresholds (years of experience) and geographic hierarchy matching in-memory rather than round-tripping to remote databases, our filtering pipeline runs in under 15ms. The result is fluid 120 FPS navigation powered by native Jetpack Compose.',
    technicalDetails: 'Candidate seniority thresholds, location hierarchies, and compensation criteria are loaded into an in-memory bitset index upon session initialization. Bitwise intersection filters candidate sets across hundreds of thousands of attributes without remote DB overhead.',
    metricLabel: 'In-Memory Query Latency',
    metricValue: '< 15ms',
    metricNote: 'Performance figures are internal studio benchmarks, not independent studies.',
    architectureHighlights: [
      'In-memory bitset index intersections',
      'Zero remote round-trips for multi-filter adjustments',
      'Fluid 120 FPS UI updates with Jetpack Compose',
      'Local cache pre-fetching with smart invalidation'
    ]
  },
  {
    number: '03',
    kicker: 'Data Ethics',
    title: 'Zero-Leakage Privacy Architecture',
    summary: 'Users should never have to surrender their privacy for smart automation. We architect all storage layers with encrypted local Room databases, strict TLS encryption, and zero data-broker monetization policies.',
    technicalDetails: 'All local persistence utilizes encrypted Room databases. Application telemetry is strictly opt-in and personal records are never shared with advertising networks or third-party data aggregators.',
    metricLabel: 'Data-Brokerage Policy',
    metricValue: '100% Zero Brokerage',
    metricNote: 'Enforced studio architectural policy and audited privacy standard.',
    architectureHighlights: [
      'Local encrypted Room DB',
      'Strict TLS encryption on all endpoints',
      'Zero telemetry monetization or user brokerage',
      'On-device clipboard masking for sensitive tokens'
    ]
  }
];
