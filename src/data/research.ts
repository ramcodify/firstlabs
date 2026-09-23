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
    title: 'High-Dimensional Semantic Retrieval',
    summary: 'Traditional keyword search fails when job descriptions use diverse corporate phrasing or omit implicit technical skills. We map candidate credentials and career specifications into a dense 768-dimensional latent vector space.',
    technicalDetails: 'Candidate profiles and job descriptions are vectorized into normalized 768-dimensional embeddings. Cosine similarity calculates angular proximity in high-dimensional space, capturing latent semantic equivalence between distinct terminologies (e.g. "Distributed Key-Value Cache" ~ "Redis Clustering").',
    metricLabel: 'Search Fatigue Reduction',
    metricValue: '60%',
    metricNote: 'Internal studio benchmark on candidate evaluation cohorts',
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
    summary: 'Complex candidate filtering shouldn\'t trigger round-trip network delays. By executing multi-facet seniority, technology stack, and geographic constraint evaluations directly in-memory, queries resolve in sub-15ms.',
    technicalDetails: 'Candidate seniority thresholds (years of experience), location hierarchies, and compensation criteria are loaded into an in-memory bitset index upon session initialization. Bitwise intersection filters candidate sets across hundreds of thousands of attributes without SQLite or remote DB overhead.',
    metricLabel: 'In-Memory Query Latency',
    metricValue: '< 15ms',
    metricNote: 'Internal benchmark measured on midrange Android devices',
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
    summary: 'Users should never have to surrender privacy in exchange for intelligent software automation. Our mobile architecture keeps sensitive candidate and personal information locked on-device.',
    technicalDetails: 'All local persistence utilizes SQLCipher-encrypted Room databases with hardware-backed Android Keystore integration. Application telemetry is strictly opt-in, telemetry payloads are k-anonymized, and personal records are never shared with advertising networks or third-party data aggregators.',
    metricLabel: 'Third-Party Data Brokerage',
    metricValue: '0%',
    metricNote: 'Enforced studio architectural policy and audited privacy standard',
    architectureHighlights: [
      'Local encrypted Room DB via SQLCipher',
      'TLS 1.3 certificate pinning on all endpoints',
      'Zero telemetry monetization or user brokerage',
      'On-device clipboard masking for sensitive tokens'
    ]
  }
];
