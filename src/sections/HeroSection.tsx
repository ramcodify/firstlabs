import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'firsthire' | 'copyshelf' | 'gymtimer'>('firsthire');

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden border-b border-studio-border">
      {/* Subtle micro-grid pattern */}
      <div className="absolute inset-0 editorial-grid pointer-events-none opacity-60" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-studio-accent animate-pulse-subtle" />
            <span className="font-mono text-xs uppercase tracking-widest text-studio-accent font-semibold">
              Independent Product Studio &bull; Mumbai, India
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-studio-text tracking-tight leading-[1.08] mb-6">
            The First Labs
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-studio-text/90 leading-snug mb-4">
            Independent products for work, learning, and everyday life.
          </p>

          <p className="text-base sm:text-lg text-studio-muted leading-relaxed max-w-2xl mb-8">
            We build focused software that removes friction from the things people do every day. Native Android applications, distributed indexing pipelines, and applied intelligence without unnecessary complexity.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            <Button
              href="#products"
              variant="primary"
              size="md"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              Explore our products
            </Button>
            
            <Button
              href="#philosophy"
              variant="secondary"
              size="md"
            >
              See how we build &rarr;
            </Button>

            <span className="font-mono text-xs text-studio-muted ml-1 hidden sm:inline">
              3 active products in market
            </span>
          </div>
        </div>

        {/* Studio Product Composition / Interactive Showcase */}
        <div className="bg-studio-surface border border-studio-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card">
          
          {/* Showcase Navigation Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-studio-border gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-studio-muted font-bold block mb-1">
                Studio Triage
              </span>
              <p className="text-xs text-studio-text">
                Live interactive architecture &amp; preview of our active product line
              </p>
            </div>

            {/* Product Switch Tabs */}
            <div className="flex items-center p-1 bg-studio-surface-warm rounded-xl border border-studio-border text-xs w-full sm:w-auto">
              <button
                onClick={() => setActiveTab('firsthire')}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'firsthire'
                    ? 'bg-studio-surface text-studio-accent font-semibold shadow-subtle border border-studio-border'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                01 FirstHire (Flagship)
              </button>
              <button
                onClick={() => setActiveTab('copyshelf')}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'copyshelf'
                    ? 'bg-studio-surface text-studio-accent font-semibold shadow-subtle border border-studio-border'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                02 CopyShelf
              </button>
              <button
                onClick={() => setActiveTab('gymtimer')}
                className={`flex-1 sm:flex-initial px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                  activeTab === 'gymtimer'
                    ? 'bg-studio-surface text-studio-accent font-semibold shadow-subtle border border-studio-border'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                03 Gym Timer
              </button>
            </div>
          </div>

          {/* Active Tab: FirstHire */}
          {activeTab === 'firsthire' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              
              {/* Product Info (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/images/firsthire-icon.png"
                    alt="FirstHire"
                    className="w-12 h-12 rounded-xl border border-studio-border shadow-subtle object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl font-bold text-studio-text">FirstHire</h3>
                      <Badge variant="accent">Flagship</Badge>
                    </div>
                    <p className="text-xs font-mono text-studio-accent font-semibold">
                      AI Job Search &bull; 768-dim Vector Match
                    </p>
                  </div>
                </div>

                <p className="text-sm text-studio-muted leading-relaxed">
                  Indexes fresh engineering opportunities directly from employer career platforms, calculates 768-dimensional semantic embeddings, and alerts candidates within 5 minutes of job drops.
                </p>

                <div className="space-y-2 text-xs text-studio-text font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Real-time push alerts within 5 minutes of posting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1-Click ATS resume restructuring preserving factual truth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero agency spam &bull; 100% direct employer links</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3 flex-wrap">
                  <Button
                    href="#firsthire-showcase"
                    variant="primary"
                    size="sm"
                  >
                    Deep Dive Case Study &rarr;
                  </Button>
                  <Button
                    href="https://play.google.com/store/apps/details?id=com.remedez.firsthire"
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

              {/* Product UI Demonstration Mockup (7 cols) */}
              <div className="lg:col-span-7 bg-studio-surface-warm border border-studio-border rounded-xl p-4 sm:p-5">
                <div className="space-y-3">
                  
                  {/* Top Bar simulating real app state */}
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-studio-border text-studio-muted">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-studio-text font-medium">Live Feed: Mumbai Tech Ecosystem</span>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[11px] font-semibold border border-emerald-200">
                      Sync: &lt; 5m ago
                    </span>
                  </div>

                  {/* Simulated Verified Job Drop Card */}
                  <div className="bg-studio-surface border border-studio-border rounded-xl p-4 shadow-subtle hover:border-studio-accent/40 transition-colors">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-studio-text">Systems Backend Engineer</h4>
                          <span className="text-[10px] font-mono bg-blue-50 text-studio-accent px-1.5 py-0.5 rounded font-bold">
                            94% MATCH
                          </span>
                        </div>
                        <p className="text-xs text-studio-accent font-medium">High-Throughput Distributed Platform &bull; Mumbai</p>
                      </div>
                      <span className="font-mono text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold whitespace-nowrap">
                        ₹22-26 LPA
                      </span>
                    </div>

                    <p className="text-xs text-studio-muted line-clamp-2 mb-3">
                      Required: Go / Node.js, distributed database sharding, Redis caching, and low-latency API design.
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-studio-border/60 text-xs">
                      <div className="flex gap-1.5 flex-wrap">
                        <span className="font-mono text-[10px] bg-studio-surface-warm text-studio-muted px-2 py-0.5 rounded">Go</span>
                        <span className="font-mono text-[10px] bg-studio-surface-warm text-studio-muted px-2 py-0.5 rounded">Redis</span>
                        <span className="font-mono text-[10px] bg-studio-surface-warm text-studio-muted px-2 py-0.5 rounded">PostgreSQL</span>
                      </div>
                      <span className="text-studio-accent font-semibold text-[11px] flex items-center gap-1">
                        1-Click ATS Tailored &rarr;
                      </span>
                    </div>
                  </div>

                  {/* Simulated Second Job Card */}
                  <div className="bg-studio-surface border border-studio-border rounded-xl p-3.5 shadow-subtle opacity-90">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-studio-text">Client Platform Engineer</h4>
                          <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-bold">
                            91% MATCH
                          </span>
                        </div>
                        <p className="text-xs text-studio-accent font-medium">Core Web Architecture &bull; Hybrid</p>
                      </div>
                      <span className="font-mono text-[11px] text-studio-text font-bold">
                        ₹18-24 LPA
                      </span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}

          {/* Active Tab: CopyShelf */}
          {activeTab === 'copyshelf' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/images/copyshelf-icon.png"
                    alt="CopyShelf"
                    className="w-12 h-12 rounded-xl border border-studio-border shadow-subtle object-cover"
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-studio-text">CopyShelf</h3>
                    <p className="text-xs font-mono text-studio-amber font-semibold">
                      Edge-Panel Clipboard &bull; 100% Offline-First
                    </p>
                  </div>
                </div>

                <p className="text-sm text-studio-muted leading-relaxed">
                  A persistent sliding edge drawer allowing instant access to frequently used text snippets, code templates, and tokens from any active Android screen.
                </p>

                <div className="space-y-2 text-xs text-studio-text font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sliding edge handle accessible across any running app</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Encrypted local Room database with zero network footprint</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automatic masking of passwords, tokens, and credit cards</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href="https://play.google.com/store/apps/details?id=com.remedez.copyshelf"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    View on Google Play
                  </Button>
                </div>
              </div>

              {/* CopyShelf UI Demo */}
              <div className="lg:col-span-7 bg-studio-surface-warm border border-studio-border rounded-xl p-4 sm:p-5">
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-studio-border text-studio-muted">
                    <span>Edge Handle: Screen Right [Active]</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">100% On-Device</span>
                  </div>

                  <div className="bg-studio-surface p-3 rounded-lg border border-studio-border space-y-1">
                    <div className="flex justify-between items-center text-[11px] text-studio-muted">
                      <span>Snippet: API Header Token</span>
                      <span className="text-amber-800 bg-amber-50 px-1.5 py-0.2 rounded font-bold">MASKED</span>
                    </div>
                    <code className="text-xs text-studio-text block bg-studio-surface-warm p-1.5 rounded">
                      Bearer sk_live_••••••••••••••••34f9
                    </code>
                  </div>

                  <div className="bg-studio-surface p-3 rounded-lg border border-studio-border space-y-1">
                    <div className="flex justify-between items-center text-[11px] text-studio-muted">
                      <span>Snippet: Standard Standup Format</span>
                      <span className="text-studio-accent font-bold">FREQUENT</span>
                    </div>
                    <p className="text-xs text-studio-muted line-clamp-1">
                      Yesterday: Shipped vector indexer. Today: Latency profiling on Compose tree.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab: Gym Timer */}
          {activeTab === 'gymtimer' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/images/gymtimer-icon.png"
                    alt="Gym Timer"
                    className="w-12 h-12 rounded-xl border border-studio-border shadow-subtle object-cover"
                  />
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-studio-text">Gym Timer</h3>
                    <p className="text-xs font-mono text-emerald-700 font-semibold">
                      Workout Consistency Tracker &bull; Zero Bloat
                    </p>
                  </div>
                </div>

                <p className="text-sm text-studio-muted leading-relaxed">
                  A minimalist workout companion built around the single metric that matters most: showing up. No repetitive exercise logging, no social feeds, no tracking paywalls.
                </p>

                <div className="space-y-2 text-xs text-studio-text font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>One-tap gym check-in &amp; session duration counter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>GitHub-style annual consistency heatmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Zero advertisements &bull; Zero battery-draining services</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    href="https://play.google.com/store/apps/details?id=com.kragma.gymtimer"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="sm"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    View on Google Play
                  </Button>
                </div>
              </div>

              {/* Gym Timer Heatmap Mockup */}
              <div className="lg:col-span-7 bg-studio-surface-warm border border-studio-border rounded-xl p-4 sm:p-5">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-studio-border text-xs font-mono text-studio-muted">
                    <span>Consistency Heatmap (Last 16 Weeks)</span>
                    <span className="font-bold text-emerald-700">78 Sessions Tracked</span>
                  </div>

                  {/* Simulated Heatmap Grid */}
                  <div className="grid grid-cols-16 gap-1.5 p-3 bg-studio-surface rounded-lg border border-studio-border overflow-x-auto">
                    {Array.from({ length: 96 }).map((_, i) => {
                      const level = (i * 7 + 3) % 5;
                      const colors = [
                        'bg-studio-surface-warm',
                        'bg-emerald-200',
                        'bg-emerald-400',
                        'bg-emerald-600',
                        'bg-emerald-800'
                      ];
                      return (
                        <div
                          key={i}
                          className={`w-3.5 h-3.5 rounded-[2px] ${colors[level]} transition-transform hover:scale-125`}
                          title={`Day ${i + 1}`}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-studio-muted">
                    <span>Less frequent</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-studio-surface-warm" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-200" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800" />
                    </div>
                    <span>More frequent</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
