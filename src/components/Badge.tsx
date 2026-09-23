import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'amber' | 'dark' | 'success' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded-full transition-colors';
  
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wide',
    md: 'text-xs px-3 py-1 tracking-normal',
  };

  const variantStyles = {
    default: 'bg-studio-surface-warm text-studio-text border border-studio-border',
    accent: 'bg-studio-accent-light text-studio-accent border border-studio-accent/20 font-semibold',
    amber: 'bg-studio-amber-light text-studio-amber border border-studio-amber/25 font-semibold',
    dark: 'bg-studio-dark text-white/90 border border-studio-dark-border',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-semibold',
    outline: 'bg-transparent text-studio-muted border border-studio-border hover:border-studio-border-strong',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
