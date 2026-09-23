import React, { useState } from 'react';
import { ArrowRight, FileText, Bell, Zap, SlidersHorizontal } from 'lucide-react';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

export const FirstHireDeepDive: React.FC = () => {
  const [pipelineStep, setPipelineStep] = useState<1 | 2 | 3 | 4>(3);

  return (
    <section id="firsthire-showcase" className="py-24 sm:py-32 bg-studio-bg border-b border-studio-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="accent">FLAGSHIP CASE STUDY</Badge>
          <span className="font-mono text-xs text-studio-muted uppercase tracking-widest">
            [03] / FIRSTHIRE RUNTIME
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-studio-text tracking-tight leading-[1.12]">
            Be in the <span className="text-studio-accent italic">First 10 Applicants</span> for Verified Tech Jobs.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-studio-muted leading-relaxed">
            FirstHire is a native Android job search app that delivers real-time notifications within 5 minutes and tailors your ATS resume in 1 tap.
          </p>
        </div>

        {/* Deep Dive Grid (Product Showcase + Interactive Pipeline) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive 4-Step Pipeline Demo (7 cols) */}
          <div className="lg:col-span-7 bg-studio-surface border border-studio-border rounded-2xl p-5 sm:p-8 shadow-card">
            
            {/* Interactive Step Switcher */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-studio-border flex-wrap gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-studio-muted font-bold">
                Interactive Pipeline Simulation
              </span>
              <div className="flex items-center gap-1 bg-studio-surface-warm p-1 rounded-lg border border-studio-border">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    onClick={() => setPipelineStep(step as 1 | 2 | 3 | 4)}
                    className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-all ${
                      pipelineStep === step
                        ? 'bg-studio-accent text-white font-bold shadow-subtle'
                        : 'text-studio-muted hover:text-studio-text'
                    }`}
                  >
                    Step {step}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 1: Candidate Profile */}
            {pipelineStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-studio-accent text-white font-mono text-xs flex items-center justify-center font-bold">
                      1
                    </span>
                    <h3 className="font-bold text-sm text-studio-text">Candidate Semantic Vector Initialization</h3>
                  </div>
                  <Badge variant="outline">On-Device</Badge>
                </div>

                <div className="bg-studio-surface-card border border-studio-border rounded-xl p-4 font-mono text-xs space-y-2">
                  <div className="text-studio-muted">Profile Attributes:</div>
                  <div className="grid grid-cols-2 gap-2 text-studio-text">
                    <div>Primary: <span className="font-bold">Android / Systems</span></div>
                    <div>Experience: <span className="font-bold">0-3 Years (Associate/Mid)</span></div>
                    <div>Target Stack: <span className="font-bold">Kotlin, Compose, Go, Redis</span></div>
                    <div>Location: <span className="font-bold">Mumbai / Remote India</span></div>
                  </div>
                  <div className="pt-2 text-[11px] text-studio-accent border-t border-studio-border">
                    &rarr; Vectorized into 768-dimensional normalized tensor
                  </div>
                </div>

                <div className="p-3 bg-studio-surface-warm rounded-lg text-xs text-studio-muted leading-relaxed">
                  FirstHire stores candidate parameters locally. No personal profile data is exposed to recruiters or job boards until you choose to tap an employer's direct application link.
                </div>
              </div>
            )}

            {/* Step 2: Fresh Job Drop */}
            {pipelineStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-studio-accent text-white font-mono text-xs flex items-center justify-center font-bold">
                      2
                    </span>
                    <h3 className="font-bold text-sm text-studio-text">Fresh Job Ingestion &amp; 5-Minute Push</h3>
                  </div>
                  <Badge variant="success">Speed: &lt; 5m</Badge>
                </div>

                <div className="bg-studio-surface-card border border-studio-border rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-studio-border text-xs font-mono">
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Bell className="w-3.5 h-3.5" /> Push Trigger: 4 mins after post
                    </span>
                    <span className="text-studio-muted">Applicants: 7 (First 10 tier)</span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-studio-text">Swiggy dropped SDE-1 (Backend)</h4>
                    <p className="text-xs text-studio-accent font-medium">Bengaluru &bull; ₹16–24 LPA &bull; Greenhouse ATS</p>
                    <p className="text-xs text-studio-muted leading-relaxed pt-1">
                      Looking for engineers experienced in concurrent services, caching with Redis, and writing reliable PostgreSQL queries.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-studio-surface-warm rounded-lg text-xs text-studio-muted leading-relaxed">
                  Traditional aggregators batch email digests 12-24 hours later when 400+ candidates have applied. FirstHire streams notifications directly to your phone within 5 minutes.
                </div>
              </div>
            )}

            {/* Step 3: Semantic Cosine Match (Default) */}
            {pipelineStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-studio-accent text-white font-mono text-xs flex items-center justify-center font-bold">
                      3
                    </span>
                    <h3 className="font-bold text-sm text-studio-text">High-Dimensional Cosine Similarity</h3>
                  </div>
                  <Badge variant="accent">Score: 94.2%</Badge>
                </div>

                {/* Similarity Visual Gauge */}
                <div className="bg-studio-surface-card border border-studio-border rounded-xl p-4 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center text-studio-text">
                    <span>Semantic Similarity Vector Distance</span>
                    <span className="font-bold text-studio-accent">0.942 (Threshold &gt; 0.80)</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-studio-border rounded-full h-2 overflow-hidden">
                    <div className="bg-studio-accent h-full rounded-full transition-all duration-500" style={{ width: '94.2%' }} />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 text-studio-muted border-t border-studio-border">
                    <div>Candidate: <span className="text-studio-text">"Distributed Cache &amp; Sharding"</span></div>
                    <div>Listing: <span className="text-studio-text">"Redis Cluster &amp; Partitioning"</span></div>
                  </div>
                  <div className="text-[11px] text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-200">
                    &bull; Keyword Match: FAILED on exact string<br />
                    &bull; Semantic Vector Match: PASSED (Cosine dot product &gt; 0.90)
                  </div>
                </div>

                <div className="p-3 bg-studio-surface-warm rounded-lg text-xs text-studio-muted leading-relaxed">
                  FirstHire recognizes conceptual equivalence. You aren't penalized simply because a job specification wrote "high-throughput queuing" and your resume mentions "Kafka event-driven streaming".
                </div>
              </div>
            )}

            {/* Step 4: 1-Click ATS Adaptation */}
            {pipelineStep === 4 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-studio-accent text-white font-mono text-xs flex items-center justify-center font-bold">
                      4
                    </span>
                    <h3 className="font-bold text-sm text-studio-text">1-Click ATS Resume Restructuring</h3>
                  </div>
                  <Badge variant="amber">Truth Preserved</Badge>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  {/* Original Bullet */}
                  <div className="p-3 rounded-lg border border-red-200 bg-red-50/50 space-y-1">
                    <div className="text-red-700 font-bold text-[11px] uppercase">
                      Before &bull; Generic Formulation (ATS Score: 48%)
                    </div>
                    <p className="text-studio-text font-sans text-xs">
                      "Worked on backend APIs and helped improve database performance for internal team."
                    </p>
                  </div>

                  {/* Adapted Bullet */}
                  <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/50 space-y-1">
                    <div className="text-emerald-800 font-bold text-[11px] uppercase">
                      After &bull; ATS Structured Formulation (ATS Score: 96%)
                    </div>
                    <p className="text-studio-text font-sans text-xs">
                      "Engineered RESTful microservices in Go and optimized PostgreSQL indexing, reducing p99 query latency from 85ms to 14ms across high-throughput endpoints."
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-studio-surface-warm rounded-lg text-xs text-studio-muted leading-relaxed">
                  The ATS tailoring engine preserves 100% factual accuracy of your verified achievements while translating bullets into parsed industry formats recognized by Greenhouse, Lever, and Workday.
                </div>
              </div>
            )}

            {/* Step Controls */}
            <div className="pt-5 mt-5 border-t border-studio-border flex items-center justify-between">
              <span className="font-mono text-xs text-studio-muted">
                Step {pipelineStep} of 4
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPipelineStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3 | 4) : 4))}
                >
                  &larr; Prev
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setPipelineStep((s) => (s < 4 ? ((s + 1) as 1 | 2 | 3 | 4) : 1))}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Next Step
                </Button>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Technical Specifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-studio-text tracking-tight">
                Engineered for early-career software engineers.
              </h3>
              <p className="text-sm text-studio-muted leading-relaxed">
                When tech openings drop in India, the first 10–25 applicants receive over 4X the interview callbacks compared to those who apply hours later after resume queues overflow.
              </p>
            </div>

            {/* Feature Points List */}
            <div className="space-y-3.5 pt-2">
              
              <div className="p-4 rounded-xl border border-studio-border bg-studio-surface space-y-1">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-studio-accent" />
                  <h4 className="text-xs font-bold text-studio-text uppercase tracking-wider">
                    5-Minute Drop Alerts
                  </h4>
                </div>
                <p className="text-xs text-studio-muted leading-relaxed">
                  Real-time push notifications when engineering roles drop on verified company boards.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-studio-border bg-studio-surface space-y-1">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-studio-amber" />
                  <h4 className="text-xs font-bold text-studio-text uppercase tracking-wider">
                    1-Click ATS Resume Tailoring
                  </h4>
                </div>
                <p className="text-xs text-studio-muted leading-relaxed">
                  Restructures verified candidate experience bullets to match employer ATS parsing criteria.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-studio-border bg-studio-surface space-y-1">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                  <h4 className="text-xs font-bold text-studio-text uppercase tracking-wider">
                    In-Memory Multi-City Filtering
                  </h4>
                </div>
                <p className="text-xs text-studio-muted leading-relaxed">
                  Filter by compensation, location, and seniority with sub-15ms latency powered by Jetpack Compose.
                </p>
              </div>

            </div>

            {/* CTA Box */}
            <div className="pt-2 flex items-center gap-3">
              <Button
                href="https://play.google.com/store/apps/details?id=com.remedez.firsthire"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
              >
                Download FirstHire (Google Play) &rarr;
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
