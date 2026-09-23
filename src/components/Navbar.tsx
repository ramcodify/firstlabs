import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenCareers?: () => void;
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLegal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Products', href: '#products', hint: 'Portfolio' },
    { label: 'FirstHire', href: '#firsthire-showcase', hint: 'Flagship AI' },
    { label: 'Research', href: '#research', hint: 'Vector & Privacy' },
    { label: 'How We Build', href: '#philosophy', hint: 'Methodology' },
    { label: 'Principles', href: '#about', hint: 'Values' },
    { label: 'Careers', href: '#careers', hint: '2 Openings', badge: 'Hiring' },
    { label: 'Contact', href: '#contact', hint: 'Mumbai Hub' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#F7F6F2]/95 backdrop-blur-md border-b border-studio-border shadow-subtle'
            : 'py-4 bg-[#F7F6F2]/90 backdrop-blur-sm border-b border-studio-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="The First Labs — Home"
            >
              <div className="w-8 h-8 rounded-lg bg-studio-surface border border-studio-border flex items-center justify-center overflow-hidden p-1 shadow-subtle group-hover:border-studio-accent transition-colors">
                <img
                  src="/assets/images/the-first-labs-mark.png"
                  alt="The First Labs Mark"
                  className="w-full h-full object-contain"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-sm tracking-tight text-studio-text flex items-center gap-1">
                  The First <span className="text-studio-accent font-semibold">Labs</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-studio-muted -mt-0.5">
                  Product Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (>= lg: 1024px) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Desktop Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium text-studio-muted hover:text-studio-text transition-colors tracking-wide py-1 border-b border-transparent hover:border-studio-text/40 flex items-center gap-1.5"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </a>
              ))}
            </nav>

            {/* Desktop CTA & External Links (>= sm: 640px) */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.remedez.firsthire"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-studio-muted hover:text-studio-text flex items-center gap-1 px-2.5 py-1.5 rounded-md hover:bg-studio-surface-warm transition-colors"
              >
                <span>Google Play</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted" />
              </a>

              <Button
                href="#firsthire-showcase"
                variant="primary"
                size="sm"
              >
                Explore FirstHire
              </Button>
            </div>

            {/* Mobile & Tablet Hamburger Toggle (Shown on all viewports < lg) */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                href="#firsthire-showcase"
                variant="primary"
                size="sm"
                className="text-[11px] px-2.5 py-1 sm:hidden"
              >
                FirstHire
              </Button>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-studio-text hover:bg-studio-surface-warm border border-studio-border focus:outline-none transition-colors"
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Accessible Full Mobile & Tablet Drawer (< lg) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#171717]/60 backdrop-blur-md flex justify-end animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div
            className="w-full max-w-sm sm:max-w-md bg-studio-surface border-l border-studio-border h-full flex flex-col justify-between shadow-modal overflow-hidden animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-studio-border bg-studio-surface-card flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-studio-surface border border-studio-border flex items-center justify-center p-1 shadow-subtle">
                  <img
                    src="/assets/images/the-first-labs-mark.png"
                    alt="The First Labs"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-sans font-bold text-sm tracking-tight text-studio-text block">
                    The First Labs
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-studio-muted -mt-0.5 block">
                    Menu &bull; Mumbai Hub
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-studio-muted hover:text-studio-text hover:bg-studio-surface-warm border border-studio-border transition-colors focus:outline-none"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
              
              {/* Main Navigation Links */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-studio-muted font-bold block mb-2 px-1">
                  Studio Navigation
                </span>
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl text-sm font-medium text-studio-text hover:bg-studio-surface-warm transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="group-hover:text-studio-accent transition-colors font-semibold">
                          {link.label}
                        </span>
                        {link.badge && (
                          <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.2 rounded flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-studio-muted">
                          {link.hint}
                        </span>
                        <ChevronRight className="w-4 h-4 text-studio-muted group-hover:text-studio-text group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Direct Product Jump */}
              <div className="pt-2 border-t border-studio-border">
                <span className="font-mono text-[10px] uppercase tracking-widest text-studio-muted font-bold block mb-2 px-1">
                  Active Software Portfolio
                </span>
                <div className="grid grid-cols-1 gap-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.remedez.firsthire"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg border border-studio-border bg-studio-surface-card hover:bg-studio-surface-warm transition-colors text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-studio-accent" />
                      <span className="font-semibold text-studio-text">FirstHire</span>
                      <span className="text-studio-muted font-mono text-[10px]">&bull; AI Job Match</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted" />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.remedez.copyshelf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg border border-studio-border bg-studio-surface-card hover:bg-studio-surface-warm transition-colors text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-studio-amber" />
                      <span className="font-semibold text-studio-text">CopyShelf</span>
                      <span className="text-studio-muted font-mono text-[10px]">&bull; Edge Clipboard</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted" />
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.kragma.gymtimer"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-lg border border-studio-border bg-studio-surface-card hover:bg-studio-surface-warm transition-colors text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-600" />
                      <span className="font-semibold text-studio-text">Gym Timer</span>
                      <span className="text-studio-muted font-mono text-[10px]">&bull; Consistency</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-studio-muted" />
                  </a>
                </div>
              </div>

              {/* Quick Legal Access */}
              {onOpenLegal && (
                <div className="pt-2 border-t border-studio-border flex items-center justify-between px-1 text-xs">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLegal('privacy');
                    }}
                    className="text-studio-muted hover:text-studio-accent transition-colors flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-studio-accent" />
                    <span>Privacy Policy</span>
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenLegal('terms');
                    }}
                    className="text-studio-muted hover:text-studio-amber transition-colors"
                  >
                    Terms of Service
                  </button>
                </div>
              )}

            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 sm:p-5 border-t border-studio-border bg-studio-surface-card space-y-3">
              <Button
                href="#firsthire-showcase"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore FirstHire Showcase
              </Button>

              <div className="flex items-center justify-between text-xs font-mono text-studio-muted pt-1">
                <a
                  href="mailto:talent@thefirstlabs.live"
                  className="hover:text-studio-accent transition-colors"
                >
                  talent@thefirstlabs.live
                </a>
                <span>Mumbai, India</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

