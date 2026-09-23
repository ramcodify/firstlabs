import React from 'react';

interface SectionHeaderProps {
  number?: string;
  kicker: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  kicker,
  title,
  description,
  centered = false,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      <div className={`flex items-center gap-2 mb-3.5 ${centered ? 'justify-center' : ''}`}>
        {number && (
          <span className={`font-mono text-xs tracking-widest font-semibold ${dark ? 'text-studio-dark-muted' : 'text-studio-muted'}`}>
            [{number}]
          </span>
        )}
        <span className={`text-xs uppercase font-mono tracking-widest font-semibold ${dark ? 'text-studio-amber' : 'text-studio-accent'}`}>
          {kicker}
        </span>
      </div>

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight leading-[1.15] ${dark ? 'text-white' : 'text-studio-text'}`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-studio-dark-muted' : 'text-studio-muted'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
