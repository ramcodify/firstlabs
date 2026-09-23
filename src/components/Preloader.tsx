import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      if (onComplete) onComplete();
      return;
    }

    // Smooth progressive counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic easing speed
        const increment = Math.max(1, Math.floor((100 - prev) / 6));
        return Math.min(100, prev + increment);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimeout = setTimeout(() => {
        setIsFading(true);
      }, 250);

      const doneTimeout = setTimeout(() => {
        setIsDone(true);
        if (onComplete) onComplete();
      }, 700);

      return () => {
        clearTimeout(fadeTimeout);
        clearTimeout(doneTimeout);
      };
    }
  }, [progress, onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-between p-6 sm:p-10 bg-[#F7F6F2] transition-opacity duration-500 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* Top Header Label */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-studio-muted">
        <span className="uppercase tracking-widest text-[11px] font-semibold">
          The First Labs
        </span>
        <span className="text-[11px]">
          Mumbai, India
        </span>
      </div>

      {/* Center Studio Logo & Identifier */}
      <div className="flex flex-col items-center gap-4 text-center max-w-xs">
        <div className="relative w-12 h-12 rounded-xl bg-studio-surface border border-studio-border flex items-center justify-center p-2 shadow-subtle">
          <img
            src="/assets/images/the-first-labs-mark.png"
            alt="The First Labs Mark"
            className="w-full h-full object-contain"
            width={48}
            height={48}
          />
          <div className="absolute -inset-1 rounded-2xl border border-studio-accent/20 animate-pulse pointer-events-none" />
        </div>

        <div className="space-y-1">
          <h1 className="font-serif text-2xl font-normal text-studio-text tracking-tight">
            The First Labs
          </h1>
          <p className="font-mono text-xs text-studio-muted tracking-wide">
            Independent Product Studio
          </p>
        </div>

        {/* Minimalist 1px Progress Track */}
        <div className="w-48 bg-studio-border/80 h-[2px] rounded-full overflow-hidden mt-3">
          <div
            className="bg-studio-accent h-full transition-all duration-75 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Status / Percent Counter */}
      <div className="w-full flex items-center justify-between text-xs font-mono text-studio-muted">
        <span className="text-[11px]">
          Initializing runtime...
        </span>
        <span className="font-bold text-studio-text font-mono text-xs">
          {progress.toString().padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
};
