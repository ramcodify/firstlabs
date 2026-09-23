import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-studio-surface border-t border-studio-border pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-studio-border">
          
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-studio-surface border border-studio-border flex items-center justify-center p-1 shadow-subtle">
                <img
                  src="/assets/images/the-first-labs-mark.png"
                  alt="The First Labs"
                  className="w-full h-full object-contain"
                  width={32}
                  height={32}
                />
              </div>
              <span className="font-sans font-bold text-base tracking-tight text-studio-text">
                The First <span className="text-studio-accent font-semibold">Labs</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-studio-muted leading-relaxed max-w-sm">
              The First Labs builds Android solutions that make work, learning, and life a little easier. Explore FirstHire, CopyShelf, and Gym Timer.
            </p>

            <div className="pt-2 font-mono text-xs text-studio-muted space-y-1">
              <div>Entity: <span className="text-studio-text font-medium">The First Labs</span></div>
              <div>Direct: <a href="mailto:talent@thefirstlabs.live" className="text-studio-accent hover:underline">talent@thefirstlabs.live</a></div>
            </div>
          </div>

          {/* Links Column 1: Products (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-studio-text font-bold">
              Software Portfolio
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#firsthire-showcase" className="text-studio-muted hover:text-studio-accent transition-colors flex items-center gap-1.5">
                  <span>FirstHire (Flagship)</span>
                  <span className="text-[10px] bg-studio-accent-light text-studio-accent px-1.5 py-0.2 rounded font-mono font-semibold">AI Match</span>
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.remedez.copyshelf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-muted hover:text-studio-accent transition-colors flex items-center gap-1"
                >
                  <span>CopyShelf</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.kragma.gymtimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-muted hover:text-studio-accent transition-colors flex items-center gap-1"
                >
                  <span>Gym Timer</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.remedez.firsthire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-muted hover:text-studio-accent transition-colors flex items-center gap-1"
                >
                  <span>Google Play Developer Page</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Studio & Engineering (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-studio-text font-bold">
              Engineering
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#research" className="text-studio-muted hover:text-studio-accent transition-colors">
                  Vector Retrieval
                </a>
              </li>
              <li>
                <a href="#research" className="text-studio-muted hover:text-studio-accent transition-colors">
                  Fast State Runtimes
                </a>
              </li>
              <li>
                <a href="#research" className="text-studio-muted hover:text-studio-accent transition-colors">
                  Privacy by Design
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-studio-muted hover:text-studio-accent transition-colors">
                  How We Build
                </a>
              </li>
              <li>
                <a href="#careers" className="text-studio-muted hover:text-studio-accent transition-colors flex items-center gap-1">
                  <span>Careers</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Studio (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-studio-text font-bold">
              Legal & Info
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="text-studio-muted hover:text-studio-accent transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="text-studio-muted hover:text-studio-accent transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <a href="#contact" className="text-studio-muted hover:text-studio-accent transition-colors">
                  Direct Inquiries
                </a>
              </li>
              <li>
                <a href="#about" className="text-studio-muted hover:text-studio-accent transition-colors">
                  Studio Principles
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-studio-muted font-mono">
          <div>
            &copy; 2026 The First Labs. All rights reserved.
          </div>
          <div className="text-[11px] text-studio-muted/80 text-center sm:text-right">
            Building Android solutions that make work, learning, and life a little easier.
          </div>
        </div>

      </div>
    </footer>
  );
};
