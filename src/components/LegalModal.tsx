import React, { useEffect, useState, useMemo } from 'react';
import { 
  X, ShieldCheck, FileText, ExternalLink, Printer, Search, 
  Check, Copy, Lock, Smartphone, Database, Mail 
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
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (type) {
      setActiveDocType(type);
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

  // Filter sections by search query
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-studio-dark/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-doc-title"
    >
      <div
        className="bg-studio-surface border border-studio-border rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-modal overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control & Tab Header */}
        <div className="p-4 sm:p-6 border-b border-studio-border bg-studio-surface-card space-y-4">
          
          <div className="flex items-center justify-between gap-4">
            {/* Document Switcher Tabs */}
            <div className="flex items-center p-1 bg-studio-surface-warm rounded-xl border border-studio-border">
              <button
                onClick={() => handleTabChange('privacy')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
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
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeDocType === 'terms'
                    ? 'bg-studio-surface text-studio-amber font-bold shadow-subtle border border-studio-border'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-studio-amber" />
                <span>Terms of Service</span>
              </button>
            </div>

            {/* Quick Actions & Close */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-studio-muted hover:text-studio-text px-2.5 py-1.5 rounded-lg border border-studio-border hover:bg-studio-surface transition-colors"
                title="Print Document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-studio-muted hover:text-studio-text px-2.5 py-1.5 rounded-lg border border-studio-border hover:bg-studio-surface transition-colors"
                title="Copy Direct Link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedLink ? 'Copied' : 'Link'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-studio-muted hover:text-studio-text hover:bg-studio-surface-warm transition-colors"
                aria-label="Close Legal Document"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Title & Meta */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-1">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={activeDocType === 'privacy' ? 'accent' : 'amber'}>
                  {doc.application}
                </Badge>
                <span className="font-mono text-xs text-studio-muted">
                  Updated: {doc.lastUpdated}
                </span>
              </div>
              <h2 id="legal-doc-title" className="font-serif text-2xl sm:text-3xl font-normal text-studio-text tracking-tight">
                {doc.title}
              </h2>
              <p className="text-xs text-studio-muted max-w-xl mt-0.5">
                {doc.subtitle}
              </p>
            </div>

            {/* Search Input within Document */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-studio-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search policy sections..."
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
          </div>

        </div>

        {/* Studio Governance Summary Card (Top Banner) */}
        <div className="bg-studio-surface-warm/60 border-b border-studio-border px-6 py-3.5 hidden sm:block">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
            {doc.summaryPillars.map((pillar, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[10px] text-studio-muted uppercase tracking-wider block">
                  {pillar.label}
                </span>
                <span className="font-bold text-studio-text block text-[11px]">
                  {pillar.value}
                </span>
                <span className="text-[10px] text-studio-muted line-clamp-1">
                  {pillar.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-studio-text bg-white">
          
          {/* Applications Data Matrix (For Privacy Policy) */}
          {activeDocType === 'privacy' && !searchQuery && (
            <div className="p-4 rounded-xl border border-studio-border bg-studio-surface-card space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-studio-border">
                <span className="font-bold text-studio-text uppercase tracking-wider text-[11px]">
                  Studio Application Matrix &bull; Data Handling Overview
                </span>
                <Badge variant="outline">Verified Architecture</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3 rounded-lg border border-studio-border bg-white space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-studio-text">
                    <Database className="w-3.5 h-3.5 text-studio-accent" />
                    <span>FirstHire</span>
                  </div>
                  <div className="text-[11px] text-studio-muted space-y-0.5">
                    <div>Storage: <span className="text-studio-text">Firestore + Local</span></div>
                    <div>ATS Processing: <span className="text-studio-text">Ephemeral / No resale</span></div>
                    <div>Alerts: <span className="text-studio-text">FCM &lt; 5m</span></div>
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-studio-border bg-white space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-studio-text">
                    <Smartphone className="w-3.5 h-3.5 text-studio-amber" />
                    <span>CopyShelf</span>
                  </div>
                  <div className="text-[11px] text-studio-muted space-y-0.5">
                    <div>Storage: <span className="text-studio-text">100% On-Device Room</span></div>
                    <div>Cloud Sync: <span className="text-emerald-700 font-bold">0% None</span></div>
                    <div>Data Masking: <span className="text-studio-text">Auto-detect</span></div>
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-studio-border bg-white space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-studio-text">
                    <Lock className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Gym Timer</span>
                  </div>
                  <div className="text-[11px] text-studio-muted space-y-0.5">
                    <div>Storage: <span className="text-studio-text">100% On-Device</span></div>
                    <div>Accounts: <span className="text-studio-text">None required</span></div>
                    <div>Ads / Telemetry: <span className="text-emerald-700 font-bold">0% None</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

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

        {/* Footer Bar with Official Mirror Link and Direct Email */}
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
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close Document
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
