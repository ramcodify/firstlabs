import React, { useEffect, useState, useMemo } from 'react';
import { 
  X, ShieldCheck, FileText, ExternalLink, Printer, Search, 
  Check, Copy, Lock, Smartphone, Database, Mail, Sparkles,
  ArrowRight, CheckCircle2, Shield
} from 'lucide-react';
import type { LegalDocument } from '../data/legal';
import { PRIVACY_DOCUMENT, TERMS_DOCUMENT } from '../data/legal';
import { Button } from './Button';
import { Badge } from './Badge';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
  onSwitchType?: (type: 'privacy' | 'terms') => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, onSwitchType }) => {
  const [activeDocType, setActiveDocType] = useState<'privacy' | 'terms'>('privacy');
  // Progressive disclosure: 'simple' (Plain English) vs 'complex' (Full Formal Clauses)
  const [viewMode, setViewMode] = useState<'simple' | 'complex'>('simple');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (type) {
      setActiveDocType(type);
      // Reset to simple view whenever modal is opened
      setViewMode('simple');
      setSearchQuery('');
    }
  }, [type]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  const doc: LegalDocument = activeDocType === 'privacy' ? PRIVACY_DOCUMENT : TERMS_DOCUMENT;

  // Filter sections by search query in complex mode
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return doc.sections;
    const q = searchQuery.toLowerCase();
    return doc.sections.filter((s) => {
      const inTitle = s.title.toLowerCase().includes(q);
      const inContent = s.content.some((c) => c.toLowerCase().includes(q));
      const inSubsections = s.subsections?.some(
        (sub) =>
          sub.subtitle.toLowerCase().includes(q) ||
          sub.text?.toLowerCase().includes(q) ||
          sub.items?.some((item) => item.toLowerCase().includes(q))
      );
      return inTitle || inContent || inSubsections;
    });
  }, [doc, searchQuery]);

  if (!type) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/#${activeDocType}`;
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleTabChange = (newType: 'privacy' | 'terms') => {
    setActiveDocType(newType);
    setSearchQuery('');
    if (onSwitchType) onSwitchType(newType);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#171717]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-studio-surface border border-studio-border rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-modal overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="p-4 sm:p-6 border-b border-studio-border bg-studio-surface-card space-y-4">
          
          <div className="flex items-center justify-between gap-3 flex-wrap">
            {/* Document Switcher Tabs */}
            <div className="flex items-center p-1 bg-studio-surface-warm rounded-xl border border-studio-border">
              <button
                onClick={() => handleTabChange('privacy')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeDocType === 'privacy'
                    ? 'bg-studio-surface text-studio-accent font-bold shadow-subtle border border-studio-border'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-studio-accent" />
                <span>Privacy Policy</span>
              </button>

              <button
                onClick={() => handleTabChange('terms')}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeDocType === 'terms'
                    ? 'bg-studio-surface text-studio-amber font-bold shadow-subtle border border-studio-border'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-studio-amber" />
                <span>Terms of Service</span>
              </button>
            </div>

            {/* View Mode Toggle: Simple vs Complex */}
            <div className="flex items-center gap-2">
              <div className="flex items-center p-0.5 bg-studio-surface-warm rounded-lg border border-studio-border">
                <button
                  onClick={() => setViewMode('simple')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                    viewMode === 'simple'
                      ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 shadow-subtle'
                      : 'text-studio-muted hover:text-studio-text'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>In Plain English</span>
                </button>
                <button
                  onClick={() => setViewMode('complex')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                    viewMode === 'complex'
                      ? 'bg-studio-surface text-studio-text font-bold border border-studio-border shadow-subtle'
                      : 'text-studio-muted hover:text-studio-text'
                  }`}
                >
                  <FileText className="w-3 h-3 text-studio-accent" />
                  <span>Full Legal Text</span>
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-studio-muted hover:text-studio-text hover:bg-studio-surface-warm transition-colors ml-1 focus:outline-none"
                aria-label="Close Legal Document"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Title & Mode Status */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-1">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={activeDocType === 'privacy' ? 'accent' : 'amber'}>
                  {doc.application}
                </Badge>
                <span className="font-mono text-xs text-studio-muted">
                  Updated: {doc.lastUpdated}
                </span>
                {viewMode === 'simple' && (
                  <span className="font-mono text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                    30-Second Summary
                  </span>
                )}
              </div>
              <h2 id="legal-modal-title" className="font-serif text-2xl sm:text-3xl font-normal text-studio-text tracking-tight">
                {viewMode === 'simple' ? `${doc.title} — In Plain English` : doc.title}
              </h2>
              <p className="text-xs text-studio-muted max-w-xl mt-0.5">
                {viewMode === 'simple'
                  ? 'We value transparency over bureaucratic jargon. Here is how we treat you, your device, and your data.'
                  : doc.subtitle}
              </p>
            </div>

            {/* Quick search input (visible in complex mode) */}
            {viewMode === 'complex' && (
              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-studio-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-studio-surface border border-studio-border text-xs text-studio-text placeholder:text-studio-muted focus:border-studio-accent focus:outline-none transition-colors font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-studio-muted hover:text-studio-text absolute right-2.5 top-1/2 -translate-y-1/2"
                  >
                    &times;
                  </button>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8 bg-white">
          
          {/* ======================================================== */}
          {/* LEVEL 1: SIMPLE MODE (Plain English, Friendly, Free Feel) */}
          {/* ======================================================== */}
          {viewMode === 'simple' ? (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* 3 Core Guarantees Banner */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl border border-studio-border bg-studio-surface-card space-y-2 card-interactive">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-studio-text">
                    Zero Data Brokerage
                  </h3>
                  <p className="text-xs text-studio-muted leading-relaxed">
                    We never sell, rent, or trade your personal data, search queries, or resume. There are zero tracking ad networks in any of our software.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-studio-border bg-studio-surface-card space-y-2 card-interactive">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-studio-accent border border-blue-200 flex items-center justify-center">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-studio-text">
                    Local-First Privacy
                  </h3>
                  <p className="text-xs text-studio-muted leading-relaxed">
                    CopyShelf and Gym Timer store 100% of information inside your phone's encrypted SQLite database. Zero network calls; zero cloud dependencies.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-studio-border bg-studio-surface-card space-y-2 card-interactive">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-studio-amber border border-amber-200 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-studio-text">
                    Full Control &amp; 1-Tap Wipe
                  </h3>
                  <p className="text-xs text-studio-muted leading-relaxed">
                    You can purge your profile, remove snippets, or delete all stored data directly from your device at any moment with zero hurdles.
                  </p>
                </div>
              </div>

              {/* Product By Product Breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-studio-border">
                  <h3 className="font-serif text-xl font-normal text-studio-text">
                    How Each Product Handles Your Information
                  </h3>
                  <span className="font-mono text-xs text-studio-muted">
                    Verified Product Architecture
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* FirstHire Card */}
                  <div className="p-4 rounded-xl border border-studio-border bg-studio-surface-card space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-studio-accent" />
                        <span className="font-bold text-sm text-studio-text">FirstHire</span>
                      </div>
                      <Badge variant="accent">Flagship AI</Badge>
                    </div>
                    <ul className="text-xs text-studio-muted space-y-1.5">
                      <li className="flex items-start gap-1.5">
                        <span className="text-studio-accent font-bold">&bull;</span>
                        <span>Candidate vectors are computed strictly for job matching.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-studio-accent font-bold">&bull;</span>
                        <span>No profile data is ever shared with third-party recruiters.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-studio-accent font-bold">&bull;</span>
                        <span>Delete profile anytime via Settings &rarr; Reset Account.</span>
                      </li>
                    </ul>
                  </div>

                  {/* CopyShelf Card */}
                  <div className="p-4 rounded-xl border border-studio-border bg-studio-surface-card space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-studio-amber" />
                        <span className="font-bold text-sm text-studio-text">CopyShelf</span>
                      </div>
                      <Badge variant="amber">100% Offline</Badge>
                    </div>
                    <ul className="text-xs text-studio-muted space-y-1.5">
                      <li className="flex items-start gap-1.5">
                        <span className="text-studio-amber font-bold">&bull;</span>
                        <span>Clipboard history stays on device; zero network sync.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-studio-amber font-bold">&bull;</span>
                        <span>Passphrases, tokens, and cards are masked automatically.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-studio-amber font-bold">&bull;</span>
                        <span>Encrypted Room SQLite database using local key storage.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Gym Timer Card */}
                  <div className="p-4 rounded-xl border border-studio-border bg-studio-surface-card space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-emerald-700" />
                        <span className="font-bold text-sm text-studio-text">Gym Timer</span>
                      </div>
                      <Badge variant="success">Zero Bloat</Badge>
                    </div>
                    <ul className="text-xs text-studio-muted space-y-1.5">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">&bull;</span>
                        <span>Zero user account required; start working out instantly.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">&bull;</span>
                        <span>No background analytics, battery draining services, or ads.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">&bull;</span>
                        <span>Workout sessions are saved entirely on your physical device.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Transition to Deep / Complex View Callout */}
              <div className="p-5 rounded-2xl bg-studio-surface-warm border border-studio-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif text-lg font-normal text-studio-text">
                    Need the formal legal text or regulatory disclosures?
                  </h4>
                  <p className="text-xs text-studio-muted max-w-lg mt-0.5">
                    Read the full 10-clause contract, data retention schedules, GDPR/DPDP compliant clauses, or print a copy.
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setViewMode('complex')}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  View Full Formal Text
                </Button>
              </div>

            </div>
          ) : (
            /* ======================================================== */
            /* LEVEL 2: COMPLEX MODE (Full Formal Legal Clauses)        */
            /* ======================================================== */
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Back to Simple Button Banner */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                <span className="text-emerald-800 font-medium">
                  Currently viewing complete formal legal contract ({doc.sections.length} clauses).
                </span>
                <button
                  onClick={() => setViewMode('simple')}
                  className="font-bold text-emerald-800 hover:underline flex items-center gap-1"
                >
                  <span>&larr; Switch back to Plain English</span>
                </button>
              </div>

              {/* Search Result Feedback */}
              {searchQuery && (
                <div className="p-3 rounded-lg bg-studio-surface-warm text-xs font-mono text-studio-muted flex items-center justify-between">
                  <span>Showing results matching "{searchQuery}" ({filteredSections.length} sections found)</span>
                  <button onClick={() => setSearchQuery('')} className="text-studio-accent underline">
                    Clear search
                  </button>
                </div>
              )}

              {filteredSections.length === 0 && (
                <div className="py-12 text-center text-studio-muted font-mono text-xs">
                  No policy sections found matching your search.
                </div>
              )}

              {/* Policy Sections */}
              {filteredSections.map((section) => (
                <section
                  key={section.id}
                  id={`sec-${section.id}`}
                  className="space-y-3 pb-6 border-b border-studio-border/70 last:border-b-0"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-studio-accent bg-studio-accent-light px-2 py-0.5 rounded">
                      § {section.number}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-studio-text tracking-tight">
                      {section.title}
                    </h3>
                  </div>

                  {section.content.map((p, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-studio-muted leading-relaxed font-sans">
                      {p}
                    </p>
                  ))}

                  {section.subsections && (
                    <div className="space-y-3 pt-2 pl-2 sm:pl-4 border-l-2 border-studio-border">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <h4 className="font-bold text-xs font-mono uppercase tracking-wider text-studio-text">
                            {sub.subtitle}
                          </h4>
                          {sub.text && (
                            <p className="text-xs sm:text-sm text-studio-muted leading-relaxed font-sans">
                              {sub.text}
                            </p>
                          )}
                          {sub.items && (
                            <ul className="space-y-1 text-xs sm:text-sm text-studio-muted font-sans pl-3 list-disc">
                              {sub.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}

            </div>
          )}

        </div>

        {/* Footer Bar */}
        <div className="p-4 sm:p-5 border-t border-studio-border bg-studio-surface-card flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3 text-studio-muted flex-wrap">
            <a
              href={doc.mirrorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-studio-accent hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Google Docs Official Mirror</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="hidden sm:inline">&bull;</span>
            <a
              href={`mailto:${doc.contactEmail}?subject=Privacy%20Inquiry%20-%20The%20First%20Labs`}
              className="text-studio-muted hover:text-studio-text flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              <span>{doc.contactEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            {viewMode === 'complex' && (
              <>
                <button
                  onClick={handlePrint}
                  className="hidden sm:flex items-center gap-1 text-xs font-mono text-studio-muted hover:text-studio-text px-2.5 py-1.5 rounded-lg border border-studio-border hover:bg-studio-surface transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="hidden sm:flex items-center gap-1 text-xs font-mono text-studio-muted hover:text-studio-text px-2.5 py-1.5 rounded-lg border border-studio-border hover:bg-studio-surface transition-colors"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied' : 'Link'}</span>
                </button>
              </>
            )}

            <Button variant="secondary" size="sm" onClick={onClose}>
              Back to Studio
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

