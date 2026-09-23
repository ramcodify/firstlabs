import React from 'react';
import { Briefcase, BookOpen, Layers } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      badge: '01 • Work & Careers',
      title: 'Accelerating Professional Potential',
      desc: 'We build tools like FirstHire that automate the most tedious aspects of career discovery, application formatting, and network outreach so candidates can focus on interview preparation.',
      icon: Briefcase,
      tag: 'FirstHire'
    },
    {
      num: '02',
      badge: '02 • Knowledge & Learning',
      title: 'Simplifying Complex Information',
      desc: 'We design reading and research engines that extract key concepts, synthesize dense documentation, and structure educational material into actionable knowledge for self-directed learners.',
      icon: BookOpen,
      tag: 'Research Engines'
    },
    {
      num: '03',
      badge: '03 • Daily Utility',
      title: 'Unobtrusive Everyday Utility',
      desc: 'From edge-drawer clipboard managers like CopyShelf to consistency trackers like Gym Timer, our utilities solve real daily needs without cognitive overhead.',
      icon: Layers,
      tag: 'CopyShelf & Gym Timer'
    }
  ];

  return (
    <section id="vision" className="py-24 sm:py-32 bg-studio-dark text-white border-b border-studio-dark-border relative overflow-hidden">
      {/* Dark micro-grid texture */}
      <div className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-studio-amber tracking-widest uppercase">
              Studio Focus
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Our Three Pillars of Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-studio-dark-muted leading-relaxed">
            Every product we build addresses one of three foundational areas of daily life.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="p-6 sm:p-8 rounded-2xl border border-studio-dark-border bg-studio-dark-surface/70 backdrop-blur-sm flex flex-col justify-between space-y-6 hover:border-studio-dark-muted/50 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-studio-dark-border">
                    <span className="font-mono text-xs font-bold text-studio-amber uppercase tracking-wider">
                      {p.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-studio-dark-border flex items-center justify-center text-studio-amber">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-sm text-studio-dark-muted leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-studio-dark-border/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-studio-dark-muted">Focus Area:</span>
                  <span className="text-white font-semibold">{p.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
