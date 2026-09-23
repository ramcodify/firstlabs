import React from 'react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      statement: 'Useful over impressive.',
      elaboration: 'We do not build technology merely to display technical virtuosity. We build software that performs an honest, helpful task.'
    },
    {
      statement: 'Simple over complicated.',
      elaboration: 'Complexity is easy; restraint is difficult. When given two viable architectures, we always choose the one with fewer moving parts.'
    },
    {
      statement: 'Private by default.',
      elaboration: 'Your device belongs to you. Personal data, clipboard snippets, and career notes should never leave your hardware without your explicit intent.'
    },
    {
      statement: 'Fast where it matters.',
      elaboration: 'We care deeply about milliseconds. In-memory bitset intersections and 120 FPS Jetpack Compose interfaces make software feel instantaneous.'
    },
    {
      statement: 'Small products, carefully made.',
      elaboration: 'We take pride in the craft of small tools. We would rather build three focused, reliable applications than a sprawling, mediocre suite.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-studio-dark text-white border-b border-studio-dark-border relative overflow-hidden">
      {/* Dark micro-grid texture */}
      <div className="absolute inset-0 editorial-grid-dark pointer-events-none opacity-40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-studio-amber tracking-widest uppercase">
              [06] / STUDIO PRINCIPLES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight">
            Practical principles over corporate slogans.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-studio-dark-muted leading-relaxed">
            The tenets that govern what we build, how we architect systems, and what we deliberately choose to ignore.
          </p>
        </div>

        {/* Typography-Led Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl border border-studio-dark-border bg-studio-dark-surface/60 backdrop-blur-sm flex flex-col justify-between space-y-4 hover:border-studio-dark-muted/40 transition-colors ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <span className="font-mono text-xs text-studio-amber block mb-3 font-semibold">
                  Principle 0{idx + 1}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight leading-snug">
                  {v.statement}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-studio-dark-muted leading-relaxed">
                {v.elaboration}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
