import React from 'react';

export const PhilosophySection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Start with the problem',
      desc: 'Software exists to eliminate human friction. We don\'t invent artificial problems to showcase speculative tech; we begin with the concrete friction someone feels opening an app or looking for work.'
    },
    {
      num: '02',
      title: 'Remove unnecessary complexity',
      desc: 'Most products collapse under feature bloat. We aggressively question every modal, dropdown, and remote network call until only what is strictly necessary remains.'
    },
    {
      num: '03',
      title: 'Build the smallest useful system',
      desc: 'A small, robust codebase running locally on Android outperforms complex distributed systems for everyday utility. We prefer compact architectures with zero failure points.'
    },
    {
      num: '04',
      title: 'Measure what matters',
      desc: 'We don\'t optimize for infinite screen time or daily active user manipulation. We measure whether the user completed their intent faster—checking in at the gym in 1 second, or landing an interview.'
    },
    {
      num: '05',
      title: 'Iterate with patience',
      desc: 'Great software matures through repeated refinement. We maintain, tune, and polish our products over years rather than abandoning them after a launch week spike.'
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-studio-bg border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-studio-muted tracking-widest uppercase">
              [05] / STUDIO PHILOSOPHY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-studio-text tracking-tight">
            How we build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
            Our engineering methodology is deliberate, restrained, and skeptical of hype.
          </p>
        </div>

        {/* Editorial Vertical Pacing Stack */}
        <div className="space-y-6 max-w-4xl">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-studio-surface border border-studio-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6 shadow-subtle hover:border-studio-border-strong transition-colors"
            >
              <span className="font-mono text-xl sm:text-2xl font-bold text-studio-accent shrink-0 pt-0.5">
                {step.num}
              </span>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-normal text-studio-text tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
