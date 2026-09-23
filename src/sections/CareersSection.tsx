import React from 'react';
import { Mail, MapPin, IndianRupee, Laptop, Shield, BookOpen, Send } from 'lucide-react';
import type { JobOpening } from '../data/careers';
import { JOB_OPENINGS, STUDIO_PROVISIONS } from '../data/careers';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

interface CareersSectionProps {
  onSelectJob: (job: JobOpening) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onSelectJob }) => {
  return (
    <section id="careers" className="py-24 sm:py-32 bg-studio-bg border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-semibold text-studio-muted tracking-widest uppercase">
                [07] / STUDIO CAREERS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-studio-text tracking-tight">
              Build things that people actually use.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-studio-muted leading-relaxed">
              We are an engineering-led team based in Mumbai. We offer high autonomy, transparent compensation, modern hardware, and zero bureaucratic theatre.
            </p>
          </div>

          <div className="font-mono text-xs text-studio-muted">
            2 Active Full-Time Engineering Openings &bull; Mumbai Hub
          </div>
        </div>

        {/* Job Openings Stack */}
        <div className="space-y-6 max-w-4xl mb-16">
          {JOB_OPENINGS.map((job) => (
            <article
              key={job.id}
              className="bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-8 shadow-card hover:border-studio-accent/40 transition-all duration-200"
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="accent">{job.refCode}</Badge>
                    <Badge variant="outline">{job.department}</Badge>
                    <span className="text-xs text-studio-muted font-mono flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 flex items-center gap-1">
                    <IndianRupee className="w-3 h-3" />
                    {job.ctc}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-studio-text tracking-tight">
                  {job.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-studio-muted leading-relaxed">
                  {job.summary}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-studio-surface-warm border border-studio-border text-studio-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-studio-border flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs font-mono text-studio-muted">
                    Full-Time Position &bull; Mumbai Tech Hub (Hybrid)
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onSelectJob(job)}
                    >
                      View Specification &rarr;
                    </Button>
                    <Button
                      href={`mailto:${job.applyEmail}?subject=${encodeURIComponent(job.mailSubject)}&body=${encodeURIComponent(job.mailBody)}`}
                      variant="primary"
                      size="sm"
                      icon={<Mail className="w-3.5 h-3.5" />}
                    >
                      Apply via Email
                    </Button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Speculative Application Box */}
        <div className="max-w-4xl bg-studio-surface-card border border-studio-border rounded-2xl p-6 sm:p-8 mb-16 flex flex-col sm:flex-row items-start sm:center justify-between gap-6 shadow-subtle">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="font-serif text-2xl font-normal text-studio-text tracking-tight">
              Speculative Applications
            </h3>
            <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
              Don’t see an exact match? We review speculative portfolios for native Android engineering (Kotlin / Jetpack Compose), systems architecture, and information retrieval.
            </p>
          </div>
          <Button
            href="mailto:talent@thefirstlabs.live?subject=Speculative%20Application%20-%20The%20First%20Labs&body=Hi%20The%20First%20Labs%20Team%2C%0A%0AI%20am%20sharing%20my%20portfolio%20and%20background%20for%20speculative%20review.%0A%0AGitHub%20%2F%20Portfolio%3A%20%0AResume%20URL%3A%20%0ABackground%20summary%3A%0A%0ABest%20regards%2C"
            variant="secondary"
            size="md"
            icon={<Send className="w-3.5 h-3.5" />}
          >
            Send Portfolio &rarr;
          </Button>
        </div>

        {/* Studio Provisions (Factual & Transparent) */}
        <div className="max-w-4xl border-t border-studio-border pt-12">
          <h3 className="font-mono text-xs uppercase tracking-widest text-studio-muted font-bold mb-6">
            Studio Provisions &bull; Compensation Standard
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STUDIO_PROVISIONS.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-studio-surface border border-studio-border space-y-1">
                <div className="flex items-center gap-2">
                  {idx === 0 && <Laptop className="w-4 h-4 text-studio-accent" />}
                  {idx === 1 && <Shield className="w-4 h-4 text-emerald-700" />}
                  {idx === 2 && <BookOpen className="w-4 h-4 text-studio-amber" />}
                  {idx === 3 && <MapPin className="w-4 h-4 text-studio-accent" />}
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-studio-text">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-studio-muted leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
