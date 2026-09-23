import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { StudioIntro } from './sections/StudioIntro';
import { ProductsSection } from './sections/ProductsSection';
import { FirstHireDeepDive } from './sections/FirstHireDeepDive';
import { ResearchSection } from './sections/ResearchSection';
import { PhilosophySection } from './sections/PhilosophySection';
import { ValuesSection } from './sections/ValuesSection';
import { CareersSection } from './sections/CareersSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { JobDetailModal } from './components/JobDetailModal';
import { LegalModal } from './components/LegalModal';
import type { JobOpening } from './data/careers';

export function App() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Check URL hash on mount or hash change for #privacy or #terms
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') {
        setLegalModalType('privacy');
      } else if (hash === '#terms') {
        setLegalModalType('terms');
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const handleCloseLegal = () => {
    setLegalModalType(null);
    if (window.location.hash === '#privacy' || window.location.hash === '#terms') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalModalType(type);
    history.replaceState(null, '', `#${type}`);
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171717] flex flex-col font-sans selection:bg-[#3446A8] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Assembly */}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <StudioIntro />
        <ProductsSection />
        <FirstHireDeepDive />
        <ResearchSection />
        <PhilosophySection />
        <ValuesSection />
        <CareersSection onSelectJob={(job) => setSelectedJob(job)} />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Site Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Career Specification Detail Modal */}
      <JobDetailModal
        job={selectedJob}
        onClose={() => setSelectedJob(null)}
      />

      {/* Enhanced Legal & Governance Modal (Hidden by Default) */}
      <LegalModal
        type={legalModalType}
        onClose={handleCloseLegal}
        onSwitchType={(type) => {
          setLegalModalType(type);
          history.replaceState(null, '', `#${type}`);
        }}
      />
    </div>
  );
}

export default App;
