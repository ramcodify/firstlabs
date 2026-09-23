import React from 'react';
import { Network, Zap, ShieldCheck, Binary, Activity, Lock } from 'lucide-react';
import { RESEARCH_PILLARS } from '../data/research';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 sm:py-32 bg-studio-surface border-b border-studio-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs font-semibold text-studio-muted tracking-widest uppercase">
              Applied Research
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-studio-text tracking-tight">
            Engineering for Cognitive Simplicity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
            How we translate research in information retrieval, vector mathematics, and native mobile runtime into frictionless user experiences.
          </p>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESEARCH_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="bg-studio-surface-card border border-studio-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:border-studio-border-strong transition-all duration-200"
            >
              <div className="space-y-6">
                
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-studio-border">
                  <span className="font-mono text-xl font-bold text-studio-accent">
                    {pillar.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-studio-surface border border-studio-border flex items-center justify-center text-studio-accent shadow-subtle">
                    {idx === 0 && <Network className="w-4 h-4" />}
                    {idx === 1 && <Zap className="w-4 h-4" />}
                    {idx === 2 && <ShieldCheck className="w-4 h-4" />}
                  </div>
                </div>

                {/* Kicker & Title */}
                <div>
                  <span className="font-mono text-xs text-studio-amber font-semibold block uppercase tracking-wider mb-1">
                    {pillar.kicker}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-studio-text tracking-tight">
                    {pillar.title}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  {pillar.summary}
                </p>

                {/* Technical Architecture Highlights */}
                <div className="bg-white p-3.5 rounded-xl border border-studio-border space-y-2">
                  <span className="font-mono text-[10px] text-studio-muted uppercase tracking-wider block font-bold">
                    Architecture Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-studio-text font-mono">
                    {pillar.architectureHighlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-studio-accent font-bold">&bull;</span>
                        <span className="text-[11px] leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Diagram Element */}
                <div className="p-3 bg-studio-surface-warm rounded-lg border border-studio-border font-mono text-[11px] text-studio-muted space-y-1">
                  {idx === 0 && (
                    <div className="text-center py-2 text-studio-text">
                      <Binary className="w-4 h-4 mx-auto mb-1 text-studio-accent" />
                      Candidate [768d] &bull; Job [768d] &rarr; Cosine &gt; 0.90
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="text-center py-2 text-studio-text">
                      <Activity className="w-4 h-4 mx-auto mb-1 text-studio-accent" />
                      In-Memory Bitset Index &rarr; &lt; 15ms Pipeline
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="text-center py-2 text-studio-text">
                      <Lock className="w-4 h-4 mx-auto mb-1 text-emerald-700" />
                      SQLCipher Encrypted Room DB &rarr; 0% Leakage
                    </div>
                  )}
                </div>

              </div>

              {/* Metric Box with Clear Studio Benchmark Disclaimer */}
              <div className="pt-6 mt-6 border-t border-studio-border space-y-1">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-studio-muted uppercase">
                    {pillar.metricLabel}
                  </span>
                  <span className="font-mono text-lg font-bold text-studio-text">
                    {pillar.metricValue}
                  </span>
                </div>
                <p className="text-[10px] text-studio-muted font-mono">
                  *{pillar.metricNote}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Studio Disclaimer Notice */}
        <p className="mt-8 text-xs text-studio-muted leading-relaxed max-w-3xl">
          Product features and availability:{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.remedez.firsthire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-studio-accent font-medium hover:underline"
          >
            FirstHire on Google Play
          </a>
          . Data practices:{' '}
          <a href="#firsthire-privacy" className="text-studio-accent font-medium hover:underline">
            FirstHire Privacy Policy
          </a>
          . Performance figures are internal studio benchmarks, not independent studies.
        </p>

      </div>
    </section>
  );
};
