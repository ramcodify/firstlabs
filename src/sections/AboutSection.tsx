import React from 'react';
import { ShieldCheck, Compass, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-studio-surface border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-studio-muted tracking-widest uppercase">
              [08] / ABOUT THE STUDIO
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-studio-text tracking-tight">
            An independent engineering studio founded on product craft.
          </h2>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif text-xl sm:text-2xl text-studio-text/90 leading-relaxed">
              The First Labs exists to create software that respects the user's intelligence and time. We combine research in vector retrieval and client runtimes with an uncompromising respect for personal privacy.
            </p>

            <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
              Unlike organizations driven by synthetic hype cycles, we treat software development as an enduring discipline. We write clean native code, run deterministic benchmarks, and refuse to harvest private telemetry. Our products—FirstHire, CopyShelf, and Gym Timer—are created by engineers who use them daily.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-studio-border text-xs font-mono">
              <div className="p-3 bg-studio-surface-card rounded-lg border border-studio-border">
                <span className="text-studio-muted block text-[10px]">FOUNDED</span>
                <span className="font-bold text-studio-text">Independent</span>
              </div>
              <div className="p-3 bg-studio-surface-card rounded-lg border border-studio-border">
                <span className="text-studio-muted block text-[10px]">HEADQUARTERS</span>
                <span className="font-bold text-studio-text">Mumbai, India</span>
              </div>
              <div className="p-3 bg-studio-surface-card rounded-lg border border-studio-border">
                <span className="text-studio-muted block text-[10px]">PHILOSOPHY</span>
                <span className="font-bold text-studio-text">Private By Default</span>
              </div>
            </div>
          </div>

          {/* Pillars List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl border border-studio-border bg-studio-surface-card space-y-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-studio-accent" />
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-studio-text">
                  Native Android Craft
                </h3>
              </div>
              <p className="text-xs text-studio-muted leading-relaxed">
                We believe mobile hardware is extraordinary when unlocked with native Jetpack Compose, zero bloat, and encrypted local storage.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-studio-border bg-studio-surface-card space-y-2">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-studio-amber" />
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-studio-text">
                  Applied Intelligence
                </h3>
              </div>
              <p className="text-xs text-studio-muted leading-relaxed">
                We employ 768-dimensional semantic embeddings where they genuinely outperform rigid keywords—not as marketing decoration.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-studio-border bg-studio-surface-card space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-studio-text">
                  Honest Ownership
                </h3>
              </div>
              <p className="text-xs text-studio-muted leading-relaxed">
                We publish our software directly on Google Play, operate with transparent salaries, and maintain direct lines of communication.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
