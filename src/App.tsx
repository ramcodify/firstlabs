import { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
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
import { LegalPage } from './pages/LegalPage';
import type { JobOpening } from './data/careers';

export function App() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [legalPageType, setLegalPageType] = useState<'privacy' | 'terms' | null>(null);

  // Check URL hash on mount or hash change for #privacy or #terms
  useEffect(() => {
    const handleHashCheck = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') {
        setLegalPageType('privacy');
      } else if (hash === '#terms') {
        setLegalPageType('terms');
      } else {
        setLegalPageType(null);
      }
    };

    handleHashCheck();
    window.addEventListener('hashchange', handleHashCheck);
    return () => window.removeEventListener('hashchange', handleHashCheck);
  }, []);

  const handleCloseLegal = () => {
    setLegalPageType(null);
    if (window.location.hash === '#privacy' || window.location.hash === '#terms') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleOpenLegal = (type: 'privacy' | 'terms') => {
    setLegalPageType(type);
    history.replaceState(null, '', `#${type}`);
  };

  // Dedicated Full Page Legal View
  if (legalPageType) {
    return (
      <LegalPage
        type={legalPageType}
        onBackToHome={handleCloseLegal}
        onSwitchType={(type) => {
          setLegalPageType(type);
          history.replaceState(null, '', `#${type}`);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#171717] flex flex-col font-sans selection:bg-[#3446A8] selection:text-white">
      {/* Studio Editorial Preloader */}
      <Preloader />

      {/* Sticky Top Navigation */}
      <Navbar onOpenLegal={handleOpenLegal} />

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
    </div>
  );
}

export default App;
