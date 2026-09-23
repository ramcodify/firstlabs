import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Smartphone } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const ProductsSection: React.FC = () => {
  const firstHire = PRODUCTS.find((p) => p.id === 'firsthire')!;
  const copyShelf = PRODUCTS.find((p) => p.id === 'copyshelf')!;
  const gymTimer = PRODUCTS.find((p) => p.id === 'gymtimer')!;

  return (
    <section id="products" className="py-24 sm:py-32 bg-studio-surface-warm/40 border-b border-studio-border relative">
      <div id="apps" className="absolute -top-20" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold text-studio-muted tracking-widest uppercase">
                Applications
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-studio-text tracking-tight">
              Our Software Portfolio
            </h2>
            <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
              Focused, privacy-first Android applications built to solve specific productivity and daily lifestyle challenges.
            </p>
          </div>

          <div className="font-mono text-xs text-studio-muted">
            3 Production Applications &bull; Google Play Distributed
          </div>
        </div>

        {/* Asymmetric Product Grid Layout */}
        <div className="space-y-8">
          
          {/* 1. FIRSTHIRE (Large Featured Case Study Layout) */}
          <div className="bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-10 lg:p-12 shadow-card transition-all duration-300 hover:shadow-card-hover hover:border-studio-accent/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Product Identity & Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge variant="accent">FLAGSHIP PRODUCT</Badge>
                  <span className="font-mono text-xs text-studio-muted">ID: {firstHire.packageId}</span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-normal text-studio-text tracking-tight mb-2">
                    {firstHire.name}
                  </h3>
                  <p className="text-sm font-mono text-studio-accent font-semibold">
                    {firstHire.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-studio-muted leading-relaxed">
                  {firstHire.detailedDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {firstHire.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-studio-surface-warm border border-studio-border text-studio-text font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-studio-border">
                  {firstHire.metrics.map((m, i) => (
                    <div key={i} className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase text-studio-muted tracking-wider block">
                        {m.label}
                      </span>
                      <span className="font-mono text-base font-bold text-studio-text">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="pt-2 flex items-center gap-3 flex-wrap">
                  <Button
                    href="#firsthire-showcase"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Explore FirstHire
                  </Button>
                  <Button
                    href={firstHire.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Google Play
                  </Button>
                </div>
              </div>

              {/* Right Column: Visual Product Frame */}
              <div className="lg:col-span-6 bg-studio-surface-card border border-studio-border rounded-xl p-5 sm:p-7 relative overflow-hidden">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-studio-border">
                    <div className="flex items-center gap-2">
                      <img
                        src={firstHire.iconUrl}
                        alt="FirstHire Icon"
                        className="w-8 h-8 rounded-lg border border-studio-border object-cover"
                      />
                      <span className="font-mono text-xs font-semibold text-studio-text">FirstHire Native Android</span>
                    </div>
                    <span className="font-mono text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                      768-DIM VECTOR ENGINE
                    </span>
                  </div>

                  {/* Editorial Interface Snapshot */}
                  <div className="bg-white rounded-xl border border-studio-border p-4 space-y-3 shadow-subtle">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-studio-muted uppercase tracking-wider">Candidate Semantic Profile</span>
                        <h4 className="text-xs font-bold text-studio-text">Senior Mobile Engineer (Android/Kotlin)</h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-studio-accent bg-studio-accent-light px-2 py-0.5 rounded">
                        Cosine Sim: 0.942
                      </span>
                    </div>

                    <div className="text-[11px] text-studio-muted bg-studio-surface-warm p-2.5 rounded font-mono leading-relaxed">
                      &bull; In-memory candidate bitset intersection: 12ms<br />
                      &bull; ATS Resume Alignment: Lever, Greenhouse, Workday<br />
                      &bull; Location: Mumbai &bull; Zero agency middlemen
                    </div>

                    <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-studio-muted">
                      <span>Status: Alert pushed in 3m 42s</span>
                      <span className="text-emerald-700 font-semibold">Direct Apply Link Verified</span>
                    </div>
                  </div>

                  <div className="p-3 bg-studio-surface-warm rounded-lg border border-studio-border text-xs text-studio-muted flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-studio-accent shrink-0" />
                    <span>768-dimensional embeddings computed on verified job drops</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Grid: 2 Distinct Layouts (CopyShelf = compact product card; Gym Timer = horizontal editorial card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* 2. COPYSHELF: Compact Product Card (5 cols) */}
            <div className="lg:col-span-5 bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover hover:border-studio-amber/40">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={copyShelf.iconUrl}
                      alt="CopyShelf"
                      className="w-10 h-10 rounded-xl border border-studio-border object-cover"
                    />
                    <div>
                      <h3 className="font-serif text-2xl font-normal text-studio-text tracking-tight">
                        {copyShelf.name}
                      </h3>
                      <span className="font-mono text-[11px] text-studio-amber font-semibold block">
                        Edge Panel Utility
                      </span>
                    </div>
                  </div>
                  <Badge variant="amber">Utility</Badge>
                </div>

                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  {copyShelf.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2 pt-2 border-t border-studio-border text-xs text-studio-text font-medium">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Offline-first encrypted Room DB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-studio-amber shrink-0" />
                    <span>Sliding edge handle accessible across any app</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {copyShelf.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-studio-surface-warm border border-studio-border text-studio-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-studio-border flex items-center justify-between">
                <span className="font-mono text-xs text-studio-muted">
                  Package: com.remedez.copyshelf
                </span>
                <Button
                  href={copyShelf.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Google Play
                </Button>
              </div>
            </div>

            {/* 3. GYM TIMER: Horizontal Editorial Card (7 cols) */}
            <div className="lg:col-span-7 bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between transition-all duration-300 hover:shadow-card-hover hover:border-emerald-600/30">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={gymTimer.iconUrl}
                      alt="Gym Timer"
                      className="w-10 h-10 rounded-xl border border-studio-border object-cover"
                    />
                    <div>
                      <h3 className="font-serif text-2xl font-normal text-studio-text tracking-tight">
                        {gymTimer.name}
                      </h3>
                      <span className="font-mono text-[11px] text-emerald-700 font-semibold block">
                        Workout Consistency Tracker
                      </span>
                    </div>
                  </div>
                  <Badge variant="success">Health &amp; Fitness</Badge>
                </div>

                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  {gymTimer.description}
                </p>

                {/* Heatmap Preview Strip */}
                <div className="p-3 bg-studio-surface-warm rounded-xl border border-studio-border">
                  <div className="flex items-center justify-between text-[11px] font-mono text-studio-muted mb-2">
                    <span>Consistency Strip (Annual Checkins)</span>
                    <span className="text-emerald-700 font-semibold">1-Tap Logged</span>
                  </div>
                  <div className="flex gap-1 overflow-x-auto pb-1">
                    {Array.from({ length: 28 }).map((_, i) => {
                      const active = (i * 3 + 1) % 4 !== 0;
                      return (
                        <div
                          key={i}
                          className={`w-3.5 h-6 rounded-sm shrink-0 ${
                            active ? 'bg-emerald-500' : 'bg-studio-border'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {gymTimer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-studio-surface-warm border border-studio-border text-studio-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-studio-border flex items-center justify-between flex-wrap gap-3">
                <span className="font-mono text-xs text-studio-muted">
                  Package: com.kragma.gymtimer
                </span>
                <Button
                  href={gymTimer.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Google Play
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
