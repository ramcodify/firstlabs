import React, { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, ShieldCheck, FileText, ExternalLink, Printer, Search, 
  Check, Copy, Lock, Smartphone, Database, Sparkles,
  ArrowRight, CheckCircle2, Shield, HelpCircle
} from 'lucide-react';
import type { LegalDocument } from '../data/legal';
import { PRIVACY_DOCUMENT, TERMS_DOCUMENT } from '../data/legal';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onBackToHome: () => void;
  onSwitchType: (type: 'privacy' | 'terms') => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ 
  type, 
  onBackToHome, 
  onSwitchType 
}) => {
  const [activeDocType, setActiveDocType] = useState<'privacy' | 'terms'>(type);
  const [viewMode, setViewMode] = useState<'simple' | 'complex'>('simple');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setActiveDocType(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [type]);

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
    onSwitchType(newType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-studio-text flex flex-col font-sans selection:bg-studio-accent selection:text-white">
      
      {/* Sticky Full Page Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-[#F7F6F2]/95 backdrop-blur-md border-b border-studio-border shadow-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          
          {/* Back to Studio link & Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-1.5 text-xs font-mono font-medium text-studio-muted hover:text-studio-text px-2.5 py-1.5 rounded-lg border border-studio-border hover:bg-studio-surface transition-all active:scale-[0.98]"
              aria-label="Return to Main Studio Website"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to Studio</span>
              <span className="sm:hidden">Back</span>
            </button>

            <div className="h-4 w-px bg-studio-border hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-studio-surface border border-studio-border flex items-center justify-center p-1 shadow-subtle">
                <img
                  src="/assets/images/the-first-labs-mark.png"
                  alt="The First Labs"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-sans font-bold text-sm tracking-tight text-studio-text hidden md:inline">
                The First <span className="text-studio-accent font-semibold">Labs</span>
              </span>
            </div>
          </div>

          {/* Document Switcher Tabs */}
          <div className="flex items-center p-1 bg-studio-surface-warm rounded-xl border border-studio-border text-xs font-mono">
            <button
              onClick={() => handleTabChange('privacy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeDocType === 'privacy'
                  ? 'bg-studio-surface text-studio-accent font-bold shadow-subtle border border-studio-border'
                  : 'text-studio-muted hover:text-studio-text'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-studio-accent" />
              <span>Privacy</span>
            </button>

            <button
              onClick={() => handleTabChange('terms')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                activeDocType === 'terms'
                  ? 'bg-studio-surface text-studio-amber font-bold shadow-subtle border border-studio-border'
                  : 'text-studio-muted hover:text-studio-text'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-studio-amber" />
              <span>Terms</span>
            </button>
          </div>

          {/* Mode Switcher: Simple vs Complex */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center p-0.5 bg-studio-surface-warm rounded-lg border border-studio-border text-xs font-mono">
              <button
                onClick={() => setViewMode('simple')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'simple'
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 shadow-subtle'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>Plain English</span>
              </button>
              <button
                onClick={() => setViewMode('complex')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  viewMode === 'complex'
                    ? 'bg-studio-surface text-studio-text font-bold border border-studio-border shadow-subtle'
                    : 'text-studio-muted hover:text-studio-text'
                }`}
              >
                <FileText className="w-3 h-3 text-studio-accent" />
                <span>Full Legal</span>
              </button>
            </div>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg border border-studio-border hover:bg-studio-surface text-studio-muted hover:text-studio-text transition-colors"
              title="Copy Direct URL"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Main Full Page Body */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full space-y-12">
        
        {/* Document Header & Breadcrumb */}
        <div className="space-y-4 border-b border-studio-border pb-8">
          <div className="flex items-center gap-2 font-mono text-xs text-studio-muted">
            <button onClick={onBackToHome} className="hover:text-studio-accent transition-colors">
              The First Labs
            </button>
            <span>/</span>
            <span>Legal &amp; Info</span>
            <span>/</span>
            <span className="text-studio-text font-semibold capitalize">{activeDocType}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={activeDocType === 'privacy' ? 'accent' : 'amber'}>
                  {doc.application}
                </Badge>
                <span className="font-mono text-xs text-studio-muted">
                  Last Updated: {doc.lastUpdated}
                </span>
                <span className="font-mono text-[10px] bg-studio-surface border border-studio-border px-2 py-0.5 rounded text-studio-muted">
                  Official Studio Policy
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-normal text-studio-text tracking-tight">
                {viewMode === 'simple' ? `${doc.title} — In Plain English` : doc.title}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-studio-muted max-w-2xl leading-relaxed">
                {viewMode === 'simple'
                  ? 'We believe software must respect human dignity and privacy. Here is our straightforward, plain-English breakdown with zero fine-print ambiguity.'
                  : doc.subtitle}
              </p>
            </div>

            {/* Mobile View Mode Switcher */}
            <div className="sm:hidden flex items-center p-0.5 bg-studio-surface-warm rounded-lg border border-studio-border text-xs font-mono w-full justify-between">
              <button
                onClick={() => setViewMode('simple')}
                className={`flex-1 py-1.5 rounded-md transition-all text-center ${
                  viewMode === 'simple'
                    ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200'
                    : 'text-studio-muted'
                }`}
              >
                Plain English
              </button>
              <button
                onClick={() => setViewMode('complex')}
                className={`flex-1 py-1.5 rounded-md transition-all text-center ${
                  viewMode === 'complex'
                    ? 'bg-studio-surface text-studio-text font-bold border border-studio-border'
                    : 'text-studio-muted'
                }`}
              >
                Full Legal Text
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* LEVEL 1: SIMPLE MODE (Plain English, Friendly, Free Feel) */}
        {/* ======================================================== */}
        {viewMode === 'simple' ? (
          <div className="space-y-12 animate-in fade-in duration-300">
            
            {/* 3 Core Guarantees Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-studio-border bg-studio-surface shadow-subtle space-y-3 card-interactive">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-studio-text">
                  Zero Data Brokerage
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  We never sell, rent, or monetize personal candidate or user data to brokers or ad exchanges. Zero tracking pixels; zero third-party ads.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-studio-border bg-studio-surface shadow-subtle space-y-3 card-interactive">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-studio-accent border border-blue-200 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-studio-text">
                  Local-First Storage
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  CopyShelf and Gym Timer store 100% of data in encrypted SQLite databases directly on your device. Zero remote server dependencies.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-studio-border bg-studio-surface shadow-subtle space-y-3 card-interactive">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-studio-amber border border-amber-200 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-normal text-studio-text">
                  Complete Data Control
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                  You can purge your profile, remove snippets, or delete all records at any moment in 1 tap, or via direct email to talent@thefirstlabs.live.
                </p>
              </div>
            </div>

            {/* Application Matrix Section */}
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-studio-border">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-studio-text tracking-tight">
                    Product Architecture &amp; Data Breakdown
                  </h2>
                  <p className="text-xs sm:text-sm text-studio-muted mt-1">
                    Transparent summary of what each application does and doesn't do.
                  </p>
                </div>
                <span className="font-mono text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-bold hidden sm:inline">
                  100% Verified
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* FirstHire */}
                <div className="p-6 rounded-2xl border border-studio-border bg-studio-surface shadow-card space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-5 h-5 text-studio-accent" />
                      <h3 className="font-serif text-xl font-bold text-studio-text">FirstHire</h3>
                    </div>
                    <Badge variant="accent">Flagship AI</Badge>
                  </div>
                  <p className="text-xs text-studio-muted leading-relaxed">
                    AI job matching using 768-dimensional candidate vector embeddings.
                  </p>
                  <ul className="text-xs text-studio-text space-y-2 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-studio-accent font-bold">&bull;</span>
                      <span>Vector match calculated only for relevant jobs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-studio-accent font-bold">&bull;</span>
                      <span>No resumes sold to headhunters or recruiters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-studio-accent font-bold">&bull;</span>
                      <span>1-Tap account and record purge in Settings.</span>
                    </li>
                  </ul>
                </div>

                {/* CopyShelf */}
                <div className="p-6 rounded-2xl border border-studio-border bg-studio-surface shadow-card space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-5 h-5 text-studio-amber" />
                      <h3 className="font-serif text-xl font-bold text-studio-text">CopyShelf</h3>
                    </div>
                    <Badge variant="amber">100% Offline</Badge>
                  </div>
                  <p className="text-xs text-studio-muted leading-relaxed">
                    Edge-panel clipboard manager with automated sensitive token masking.
                  </p>
                  <ul className="text-xs text-studio-text space-y-2 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-studio-amber font-bold">&bull;</span>
                      <span>100% on-device Room SQLite database.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-studio-amber font-bold">&bull;</span>
                      <span>Zero network calls; zero cloud sync servers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-studio-amber font-bold">&bull;</span>
                      <span>Sensitive tokens and credit cards masked locally.</span>
                    </li>
                  </ul>
                </div>

                {/* Gym Timer */}
                <div className="p-6 rounded-2xl border border-studio-border bg-studio-surface shadow-card space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Lock className="w-5 h-5 text-emerald-700" />
                      <h3 className="font-serif text-xl font-bold text-studio-text">Gym Timer</h3>
                    </div>
                    <Badge variant="success">Zero Bloat</Badge>
                  </div>
                  <p className="text-xs text-studio-muted leading-relaxed">
                    Minimalist workout companion centered around daily consistency.
                  </p>
                  <ul className="text-xs text-studio-text space-y-2 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">&bull;</span>
                      <span>No account or sign-up needed to use.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">&bull;</span>
                      <span>Zero background trackers or battery drain.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold">&bull;</span>
                      <span>Workout heatmap saved purely on physical storage.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Plain English FAQ Strip */}
            <div className="space-y-4 bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 pb-3 border-b border-studio-border">
                <HelpCircle className="w-5 h-5 text-studio-accent" />
                <h3 className="font-serif text-xl font-normal text-studio-text">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-studio-text">
                    Do you ever sell my resume or email address?
                  </h4>
                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                    No, never. We do not participate in candidate data brokerage, recruiter monetization schemes, or ad tracking networks.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-studio-text">
                    Can The First Labs access my clipboard history?
                  </h4>
                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                    No. CopyShelf runs 100% on your Android device. It does not even request the network access permission in its Android manifest.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-studio-text">
                    How do I permanently delete all my data?
                  </h4>
                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                    In FirstHire, tap Settings &rarr; Reset Account. Alternatively, email talent@thefirstlabs.live and our team in Mumbai will purge your records immediately.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-studio-text">
                    Are the applications GDPR and DPDP compliant?
                  </h4>
                  <p className="text-xs sm:text-sm text-studio-muted leading-relaxed">
                    Yes. Because our applications collect the absolute minimum data required to function, they naturally align with the strongest privacy frameworks worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Transition to Deep / Complex View Callout */}
            <div className="p-6 sm:p-8 rounded-2xl bg-studio-surface-warm border border-studio-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-subtle">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-studio-muted font-bold block mb-1">
                  Full Regulatory Disclosures
                </span>
                <h3 className="font-serif text-2xl font-normal text-studio-text">
                  Need the complete formal legal contract?
                </h3>
                <p className="text-xs sm:text-sm text-studio-muted max-w-xl mt-1">
                  Review all {doc.sections.length} formal legal clauses, subsections, security protocols, and exportable regulatory documents.
                </p>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setViewMode('complex');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Read Full Legal Clauses
              </Button>
            </div>

          </div>
        ) : (
          /* ======================================================== */
          /* LEVEL 2: COMPLEX MODE (Full Formal Legal Clauses)        */
          /* ======================================================== */
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Return to Plain English Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs gap-3">
              <span className="text-emerald-800 font-medium">
                Viewing full formal legal agreement ({doc.sections.length} clauses).
              </span>
              <button
                onClick={() => setViewMode('simple')}
                className="font-bold text-emerald-800 hover:underline flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>&larr; Switch back to Plain English Summary</span>
              </button>
            </div>

            {/* In-Document Search & Print Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-studio-surface border border-studio-border rounded-xl">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-studio-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search legal clauses (e.g. deletion, cookies)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-studio-surface-warm border border-studio-border text-xs text-studio-text placeholder:text-studio-muted focus:border-studio-accent focus:outline-none transition-colors font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-studio-muted hover:text-studio-text absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    &times;
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 text-xs font-mono text-studio-muted hover:text-studio-text px-3 py-2 rounded-lg border border-studio-border hover:bg-studio-surface-warm transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Document</span>
                </button>
                <a
                  href={doc.mirrorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-studio-accent hover:underline px-3 py-2 rounded-lg border border-studio-border hover:bg-studio-surface-warm transition-colors"
                >
                  <span>Google Docs Mirror</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Search Results Feedback */}
            {searchQuery && (
              <div className="p-3.5 rounded-lg bg-studio-surface-warm text-xs font-mono text-studio-muted flex items-center justify-between">
                <span>Found {filteredSections.length} section(s) matching "{searchQuery}"</span>
                <button onClick={() => setSearchQuery('')} className="text-studio-accent underline">
                  Clear filter
                </button>
              </div>
            )}

            {filteredSections.length === 0 && (
              <div className="py-16 text-center text-studio-muted font-mono text-xs">
                No policy sections found matching your search.
              </div>
            )}

            {/* Detailed Formal Sections */}
            <div className="space-y-10 bg-studio-surface border border-studio-border rounded-2xl p-6 sm:p-10 shadow-card">
              {filteredSections.map((section) => (
                <section
                  key={section.id}
                  id={`sec-${section.id}`}
                  className="space-y-4 pb-8 border-b border-studio-border/70 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-studio-accent bg-studio-accent-light px-2.5 py-1 rounded">
                      § {section.number}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-studio-text tracking-tight">
                      {section.title}
                    </h3>
                  </div>

                  {section.content.map((p, idx) => (
                    <p key={idx} className="text-sm text-studio-muted leading-relaxed font-sans">
                      {p}
                    </p>
                  ))}

                  {section.subsections && (
                    <div className="space-y-4 pt-3 pl-3 sm:pl-6 border-l-2 border-studio-border">
                      {section.subsections.map((sub, sIdx) => (
                        <div key={sIdx} className="space-y-2">
                          <h4 className="font-bold text-xs font-mono uppercase tracking-wider text-studio-text">
                            {sub.subtitle}
                          </h4>
                          {sub.text && (
                            <p className="text-sm text-studio-muted leading-relaxed font-sans">
                              {sub.text}
                            </p>
                          )}
                          {sub.items && (
                            <ul className="space-y-1.5 text-sm text-studio-muted font-sans pl-4 list-disc">
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

          </div>
        )}

        {/* Full Page Bottom Navigation Bar */}
        <div className="pt-8 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            variant="secondary"
            size="md"
            onClick={onBackToHome}
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Studio Home
          </Button>

          <div className="text-xs font-mono text-studio-muted text-center sm:text-right">
            Questions? Contact <a href={`mailto:${doc.contactEmail}`} className="text-studio-accent hover:underline">{doc.contactEmail}</a>
          </div>
        </div>

      </main>

      {/* Full Page Footer */}
      <footer className="bg-studio-surface border-t border-studio-border py-10 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-studio-muted">
          <div>
            &copy; 2026 The First Labs &bull; Mumbai, India
          </div>
          <div>
            Native Android &bull; Zero Data Brokerage &bull; Private by Default
          </div>
        </div>
      </footer>

    </div>
  );
};
