import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  onOpenCareers?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
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
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'FirstHire', href: '#firsthire-showcase' },
    { label: 'Research', href: '#research' },
    { label: 'How We Build', href: '#philosophy' },
    { label: 'Careers', href: '#careers' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#F7F6F2]/95 backdrop-blur-md border-b border-studio-border shadow-subtle'
          : 'py-4.5 bg-[#F7F6F2]/80 backdrop-blur-sm border-b border-studio-border/60'
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

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-studio-muted hover:text-studio-text transition-colors tracking-wide py-1 border-b border-transparent hover:border-studio-text/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & External Links */}
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <Button
              href="#firsthire-showcase"
              variant="primary"
              size="sm"
              className="text-[11px] px-2.5 py-1"
            >
              FirstHire
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-studio-text hover:bg-studio-surface-warm border border-studio-border focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-[#171717]/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto bg-studio-surface border-l border-studio-border h-full shadow-modal p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="pb-4 mb-6 border-b border-studio-border flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-studio-muted">
                  Studio Navigation
                </span>
                <span className="font-mono text-[10px] text-studio-accent font-semibold bg-studio-accent-light px-2 py-0.5 rounded">
                  v2.6
                </span>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-medium text-studio-text hover:bg-studio-surface-warm transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-studio-muted">&rarr;</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-studio-border space-y-3">
              <Button
                href="https://play.google.com/store/apps/details?id=com.remedez.firsthire"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="md"
                className="w-full justify-center"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                FirstHire on Google Play
              </Button>

              <div className="text-center font-mono text-[11px] text-studio-muted pt-2">
                talent@thefirstlabs.live
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
