import React from 'react';

export const StudioIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-studio-bg border-b border-studio-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs font-semibold text-studio-muted tracking-widest uppercase">
            [01] / STUDIO MANIFESTO
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-studio-text leading-[1.12] tracking-tight">
              Small team.<br />
              <span className="text-studio-muted italic">Focused products.</span>
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-studio-text/90 leading-snug pt-2">
              “We prefer useful software over unnecessary complexity. Each product starts with a simple question: what can we make easier?”
            </p>
          </div>

          {/* Supporting Technical & Human Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-sm sm:text-base text-studio-muted leading-relaxed border-l border-studio-border pl-6 lg:pl-8">
            <p>
              The First Labs operates as an independent software studio. We are not a venture-backed growth machine designed to capture your attention and sell it to ad exchanges.
            </p>

            <p>
              Instead, we build practical client applications, native Android runtimes, and local-first utilities that people rely on during their working days, study sessions, and training routines.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-studio-border font-mono text-xs text-studio-text">
              <div>
                <span className="text-studio-muted block text-[11px]">STUDIO NATURE</span>
                <span className="font-semibold">Independent &amp; Focused</span>
              </div>
              <div>
                <span className="text-studio-muted block text-[11px]">CORE PLATFORM</span>
                <span className="font-semibold">Android &amp; High-Perf Web</span>
              </div>
              <div>
                <span className="text-studio-muted block text-[11px]">DATA BROKERAGE</span>
                <span className="font-semibold text-emerald-700">0% Absolute Zero</span>
              </div>
              <div>
                <span className="text-studio-muted block text-[11px]">PRIMARY LOCATION</span>
                <span className="font-semibold">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
