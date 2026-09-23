export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: string[];
  subsections?: {
    subtitle: string;
    items?: string[];
    text?: string;
  }[];
}

export interface LegalDocument {
  id: 'privacy' | 'terms';
  title: string;
  subtitle: string;
  lastUpdated: string;
  application: string;
  mirrorUrl: string;
  officialEntity: string;
  contactEmail: string;
  summaryPillars: {
    label: string;
    value: string;
    description: string;
  }[];
  sections: LegalSection[];
}

export const PRIVACY_DOCUMENT: LegalDocument = {
  id: 'privacy',
  title: 'Privacy Policy',
  subtitle: 'Governance, data processing, on-device security, and candidate privacy standards.',
  lastUpdated: 'August 25, 2026',
  application: 'FirstHire, CopyShelf & Gym Timer',
  mirrorUrl: 'https://docs.google.com/document/d/1IM9xj0xgrinn387U1qKsF4Jgqlcn6LgOq0KcAj1Ha-8/edit?usp=sharing',
  officialEntity: 'The First Labs',
  contactEmail: 'talent@thefirstlabs.live',
  summaryPillars: [
    {
      label: 'Third-Party Data Brokerage',
      value: '0% Absolute Zero',
      description: 'We do not sell, rent, or monetize personal candidate or user data to brokers or ad exchanges.'
    },
    {
      label: 'On-Device Storage',
      value: 'Encrypted Room DB',
      description: 'Sensitive clipboard snippets and workout sessions remain exclusively encrypted on-device.'
    },
    {
      label: 'Transport Security',
      value: 'TLS 1.3 / SSL',
      description: 'All remote communications with candidate indexing pipelines utilize strict encrypted protocols.'
    },
    {
      label: 'Data Deletion',
      value: 'On Request',
      description: 'Full account and personal record erasure supported via direct email to talent@thefirstlabs.live.'
    }
  ],
  sections: [
    {
      id: 'preamble',
      number: '00',
      title: 'Preamble & Commitment',
      content: [
        'FirstHire and the applications developed by The First Labs ("we", "our", or "us") are designed with privacy by default. We build focused software that removes friction from everyday workflows without exploiting personal user data.',
        'This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications, including FirstHire, CopyShelf, and Gym Timer (collectively, the "Applications").',
        'Please review this policy carefully. If you do not agree with the terms herein, please do not access or use the Applications.'
      ]
    },
    {
      id: 'collection',
      number: '01',
      title: 'Information We Collect',
      content: [
        'We collect information in a limited, purposeful manner solely to deliver core product features:'
      ],
      subsections: [
        {
          subtitle: 'A. Personal & Profile Data',
          items: [
            'Full name, email address, and profile picture (when you register an account or authenticate via Google Sign-In).',
            'Candidate career preferences: target job titles, preferred technical stacks, seniority range, and target metropolitan areas.',
            'Resume text voluntarily submitted to our 1-click ATS tailoring engine for semantic optimization.'
          ]
        },
        {
          subtitle: 'B. Technical, Device & Telemetry Data',
          items: [
            'Device model, operating system version, and system locale settings.',
            'Network connectivity state and IP address for secure request routing.',
            'In-app activity: jobs viewed, searches performed, and bookmarked opportunities.',
            'Push notification tokens via Firebase Cloud Messaging (FCM) to deliver 5-minute job drop alerts.'
          ]
        },
        {
          subtitle: 'C. Edge Clipboard & Fitness Tracking (CopyShelf & Gym Timer)',
          text: 'CopyShelf stores text snippets strictly on your local device in an encrypted Room SQLite database with automated sensitive token/card masking. Gym Timer logs check-in durations locally on-device. Neither utility transmits your clipboard contents or workout logs to remote servers.'
        }
      ]
    },
    {
      id: 'usage',
      number: '02',
      title: 'How We Use Your Information',
      content: [
        'We process information strictly to provide and improve the services you request:',
        '• Manage authentication sessions and verify candidate account status.',
        '• Deliver personalized job feeds ranked by 768-dimensional semantic vector cosine similarity.',
        '• Calculate ATS formatting and keyword alignment for target job descriptions.',
        '• Send instant push notifications within 5 minutes of verified role postings.',
        '• Synchronize bookmarked jobs across your registered Android devices.',
        '• Identify stability issues, crash patterns, and latency bottlenecks to maintain sub-second performance.'
      ]
    },
    {
      id: 'third-party',
      number: '03',
      title: 'Third-Party Services & Infrastructure',
      content: [
        'We work with trusted enterprise cloud infrastructure providers to run our backend systems:',
        '• Google Firebase (Authentication, Cloud Firestore, Cloud Functions, Cloud Messaging): Used for secure authentication tokens, encrypted database synchronization, and low-latency push notifications.',
        '• Google Sign-In: Used for secure, streamlined OAuth authentication.',
        'These providers access data only to perform specified compute operations on our behalf and are legally barred from retaining, sharing, or using your information for independent commercial purposes.'
      ]
    },
    {
      id: 'security',
      number: '04',
      title: 'Data Storage & Security Architecture',
      content: [
        'We employ robust administrative, technical, and physical security measures to safeguard candidate and user data:',
        '• All client-server communications are enforced over TLS 1.3 / SSL with certificate verification.',
        '• Local Android persistent storage utilizes SQLCipher-encrypted Room databases with hardware-backed Android Keystore integration.',
        '• Production databases are isolated behind strict role-based access controls and monitored for unauthorized access.',
        'While we follow industry best practices, no electronic transmission over the internet or cloud storage layer can guarantee 100% invulnerability.'
      ]
    },
    {
      id: 'retention',
      number: '05',
      title: 'Data Retention & Deletion Rights',
      content: [
        'We retain personal information only for as long as your account remains active or as required to deliver our services.',
        'You have the unqualified right to request the complete deletion of your account, profile, preferences, and associated personal records at any time.',
        'To request immediate account and data erasure, email talent@thefirstlabs.live with the subject line "Data Deletion Request". Upon receiving your verified request, we permanently purge your personal records from all active production databases.'
      ]
    },
    {
      id: 'children',
      number: '06',
      title: 'Children\'s Privacy',
      content: [
        'Our Applications are intended for early-career professionals and individuals at least 13 years of age. We do not knowingly solicit or collect personal information from children under 13. If we discover a child under 13 has provided personal details, we immediately delete such records from our infrastructure.'
      ]
    },
    {
      id: 'governance',
      number: '07',
      title: 'Policy Updates & Contact',
      content: [
        'We may update this Privacy Policy periodically to reflect architectural evolutions or regulatory requirements. Material revisions will be reflected in the "Last updated" date above.',
        'For inquiries, grievance redressal, or data audit requests, reach our studio leadership directly:',
        'Entity: The First Labs',
        'Application: FirstHire (com.remedez.firsthire)',
        'Direct Email: talent@thefirstlabs.live',
        'Location: Mumbai Tech Hub, Maharashtra, India'
      ]
    }
  ]
};

export const TERMS_DOCUMENT: LegalDocument = {
  id: 'terms',
  title: 'Terms of Service',
  subtitle: 'Binding terms governing application access, job index accuracy, intellectual property, and acceptable use.',
  lastUpdated: 'August 25, 2026',
  application: 'FirstHire, CopyShelf & Gym Timer',
  mirrorUrl: 'https://docs.google.com/document/d/1CJEyIrnWDWuI-sU2bYnBHGEoDcgTzTtT1sd9ZLC9Z3A/edit?usp=sharing',
  officialEntity: 'The First Labs',
  contactEmail: 'talent@thefirstlabs.live',
  summaryPillars: [
    {
      label: 'License Model',
      value: 'Personal / Non-Exclusive',
      description: 'Personal, revocable license to access our consumer mobile software.'
    },
    {
      label: 'Job Indexing',
      value: 'Aggregated & Direct',
      description: 'Direct links to employer portals with zero third-party agency markups.'
    },
    {
      label: 'ATS Optimization',
      value: 'Advisory Only',
      description: 'Formatting suggestions; candidates remain solely responsible for factual truth.'
    },
    {
      label: 'Acceptable Use',
      value: 'No Scraping / Abuse',
      description: 'Reverse engineering, scraping, or automated abuse strictly prohibited.'
    }
  ],
  sections: [
    {
      id: 'acceptance',
      number: '01',
      title: 'Acceptance of Terms',
      content: [
        'By downloading, installing, accessing, or using FirstHire, CopyShelf, or Gym Timer, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.',
        'You represent that you are at least 18 years of age (or the legal age of majority in your jurisdiction) and possess full legal capacity to enter into this binding agreement.'
      ]
    },
    {
      id: 'accounts',
      number: '02',
      title: 'User Accounts & Responsibilities',
      content: [
        'To access features such as bookmarked opportunities, custom job alert filters, and resume tailoring, you may register an account via Google Sign-In or email credentials.',
        '• You agree to provide true, accurate, and current information during registration.',
        '• You are responsible for safeguarding your login credentials and for all activities conducted under your authenticated account.',
        '• We reserve the right to suspend or terminate accounts that provide misleading information, impersonate others, or violate these Terms.'
      ]
    },
    {
      id: 'acceptable-use',
      number: '03',
      title: 'Permitted Use & Prohibited Conduct',
      content: [
        'You agree to use our Applications solely for legitimate job discovery, career enhancement, and personal utility. You agree NOT to:',
        '• Attempt to reverse engineer, decompile, disassemble, or extract proprietary algorithms or source code from our client APKs or APIs.',
        '• Scrape, crawl, harvest, or index data from our Applications via automated scripts without explicit written authorization.',
        '• Introduce viruses, malware, trojans, or automated scripts intended to disrupt or overburden studio infrastructure.',
        '• Misrepresent credentials, professional achievements, or certifications on resumes processed through our platform.',
        '• Send unsolicited mass communications, spam, or abusive messages to recruiters or contacts accessible through application referral tools.'
      ]
    },
    {
      id: 'job-listings',
      number: '04',
      title: 'Job Listings & External Career Portals',
      content: [
        '• Aggregation & Accuracy: FirstHire continuously crawls and indexes openings directly from employer websites, applicant tracking systems (Greenhouse, Lever, Workday), and verified company careers portals. While we strive for pristine precision, listings may close, expire, or change compensation tiers without notice.',
        '• Third-Party Portals: Tapping "Apply" redirects you to third-party employer sites. The First Labs does not control and assumes no legal liability for employer application systems, interview schedules, or hiring choices.',
        '• No Guarantee of Employment: FirstHire is a discovery and preparation accelerator; we are not an employment agency or recruiter broker and do not guarantee callbacks, interviews, or hiring offers.'
      ]
    },
    {
      id: 'intellectual-property',
      number: '05',
      title: 'Intellectual Property Rights',
      content: [
        'The Applications, brand identity, logo, UI/UX architecture, visual designs, vector embedding pipelines, and codebases are the exclusive intellectual property of The First Labs and protected under applicable copyright, trademark, and trade secret laws.',
        'You are granted a personal, non-exclusive, non-transferable, revocable license to use the Applications for personal, non-commercial purposes in accordance with these Terms.'
      ]
    },
    {
      id: 'disclaimer',
      number: '06',
      title: 'Disclaimer of Warranties & Limitation of Liability',
      content: [
        'THE APPLICATIONS AND SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT SERVICES WILL OPERATE UNINTERRUPTED OR ERROR-FREE.',
        'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE FIRST LABS, ITS FOUNDERS, ENGINEERS, AND PARTNERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES RESULTING FROM YOUR USE OF OR INABILITY TO USE OUR APPLICATIONS, INCLUDING LOSS OF OPPORTUNITY, EMPLOYMENT OFFERS, OR DATA.'
      ]
    },
    {
      id: 'termination',
      number: '07',
      title: 'Termination & Contact',
      content: [
        'We reserve the right to suspend or revoke access to our services at any time if you breach these Terms or engage in conduct harmful to our community or systems.',
        'For legal notices or questions regarding these Terms, contact our studio leadership:',
        'The First Labs',
        'Direct Email: talent@thefirstlabs.live',
        'Mumbai Tech Hub, Maharashtra, India'
      ]
    }
  ]
};
