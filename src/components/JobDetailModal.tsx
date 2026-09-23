import React, { useEffect, useState } from 'react';
import { X, Check, Copy, Mail, MapPin, Briefcase, IndianRupee, Shield, Laptop, BookOpen } from 'lucide-react';
import type { JobOpening } from '../data/careers';
import { STUDIO_PROVISIONS } from '../data/careers';
import { Button } from './Button';
import { Badge } from './Badge';

interface JobDetailModalProps {
  job: JobOpening | null;
  onClose: () => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (job) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [job, onClose]);

  if (!job) return null;

  const mailtoLink = `mailto:${job.applyEmail}?subject=${encodeURIComponent(job.mailSubject)}&body=${encodeURIComponent(job.mailBody)}`;

  const handleCopySpec = () => {
    const specText = `The First Labs - ${job.title} (${job.refCode})\nCTC: ${job.ctc}\nLocation: ${job.location}\nApply: ${job.applyEmail}`;
    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-studio-dark/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="job-modal-title"
    >
      <div
        className="bg-studio-surface border border-studio-border rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-modal overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 border-b border-studio-border bg-studio-surface-card flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="accent">{job.refCode}</Badge>
              <Badge variant="outline">{job.department}</Badge>
              <Badge variant="amber">{job.type}</Badge>
            </div>
            <h2 id="job-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-studio-text tracking-tight">
              {job.title}
            </h2>
            <div className="flex items-center gap-4 text-xs text-studio-muted flex-wrap">
              <span className="flex items-center gap-1 font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <IndianRupee className="w-3.5 h-3.5" />
                {job.ctc}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5" />
                The First Labs
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-studio-muted hover:text-studio-text hover:bg-studio-surface-warm transition-colors"
            aria-label="Close Job Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-studio-text">
          
          {/* Summary Callout */}
          <div className="p-4 rounded-xl bg-studio-surface-warm border border-studio-border text-sm text-studio-text leading-relaxed">
            <p className="font-medium text-studio-text mb-1">Role Mission</p>
            <p className="text-studio-muted">{job.summary}</p>
          </div>

          {/* Compensation Breakdown */}
          <section className="space-y-3">
            <h3 className="font-sans font-bold text-sm tracking-tight text-studio-text uppercase tracking-wider text-xs">
              Compensation Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg border border-studio-border bg-white space-y-1">
                <div className="text-xs text-studio-muted font-medium">Guaranteed Base</div>
                <div className="text-sm font-semibold text-studio-text">{job.baseSalary}</div>
                <div className="text-[11px] text-studio-muted">Standard monthly payroll + biannual appraisals</div>
              </div>
              <div className="p-3.5 rounded-lg border border-studio-border bg-white space-y-1">
                <div className="text-xs text-studio-muted font-medium">Variable Component</div>
                <div className="text-sm font-semibold text-studio-text">{job.variablePay}</div>
                <div className="text-[11px] text-studio-muted">Based on system reliability, velocity, and design precision</div>
              </div>
            </div>
          </section>

          {/* Key Responsibilities */}
          <section className="space-y-3">
            <h3 className="font-sans font-bold text-sm tracking-tight text-studio-text uppercase tracking-wider text-xs">
              Primary Responsibilities
            </h3>
            <div className="space-y-2.5">
              {job.responsibilities.map((r, i) => (
                <div key={i} className="p-3 rounded-lg border border-studio-border bg-white text-xs leading-relaxed">
                  <span className="font-semibold text-studio-text block mb-0.5">{r.title}</span>
                  <span className="text-studio-muted">{r.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Depth & Requirements */}
          <section className="space-y-3">
            <h3 className="font-sans font-bold text-sm tracking-tight text-studio-text uppercase tracking-wider text-xs">
              Technical Depth & Standards
            </h3>
            <div className="space-y-2.5">
              {job.requirements.map((req, i) => (
                <div key={i} className="p-3 rounded-lg border border-studio-border bg-white text-xs leading-relaxed">
                  <span className="font-semibold text-studio-text block mb-0.5">{req.title}</span>
                  <span className="text-studio-muted">{req.desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Selection Stages */}
          <section className="space-y-3">
            <h3 className="font-sans font-bold text-sm tracking-tight text-studio-text uppercase tracking-wider text-xs">
              4-Stage Evaluation Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {job.selectionProcess.map((step) => (
                <div key={step.stage} className="p-3.5 rounded-lg border border-studio-border bg-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-5 h-5 rounded-full bg-studio-accent text-white text-[10px] font-mono font-bold flex items-center justify-center">
                      {step.stage}
                    </span>
                    <span className="font-semibold text-xs text-studio-text">{step.title}</span>
                  </div>
                  <p className="text-[11px] text-studio-muted leading-relaxed pl-7">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Studio Provisions */}
          <section className="space-y-3 pt-2 border-t border-studio-border">
            <h3 className="font-sans font-bold text-sm tracking-tight text-studio-text uppercase tracking-wider text-xs">
              Studio Provisions & Environment
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {STUDIO_PROVISIONS.map((p, i) => (
                <div key={i} className="flex gap-2.5 p-3 rounded-lg bg-studio-surface-card border border-studio-border">
                  {i === 0 && <Laptop className="w-4 h-4 text-studio-accent shrink-0 mt-0.5" />}
                  {i === 1 && <Shield className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />}
                  {i === 2 && <BookOpen className="w-4 h-4 text-studio-amber shrink-0 mt-0.5" />}
                  {i === 3 && <MapPin className="w-4 h-4 text-studio-accent shrink-0 mt-0.5" />}
                  <div>
                    <h4 className="text-xs font-semibold text-studio-text">{p.title}</h4>
                    <p className="text-[11px] text-studio-muted mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-6 border-t border-studio-border bg-studio-surface-card flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={handleCopySpec}
            className="text-xs font-mono text-studio-muted hover:text-studio-text flex items-center gap-1.5 px-3 py-2 rounded-lg border border-studio-border hover:bg-studio-surface transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Spec Copied' : 'Copy Spec Link'}</span>
          </button>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              href={mailtoLink}
              variant="primary"
              size="sm"
              icon={<Mail className="w-3.5 h-3.5" />}
            >
              Apply via Email ({job.applyEmail})
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
