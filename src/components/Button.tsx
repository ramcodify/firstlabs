import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-md gap-1.5',
    md: 'text-sm px-4 py-2 rounded-lg gap-2',
    lg: 'text-base px-5 py-2.5 rounded-lg gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-studio-accent text-white hover:bg-studio-accent-hover shadow-subtle hover:shadow hover:-translate-y-0.5 active:translate-y-0 active:bg-studio-accent-hover border border-studio-accent',
    secondary: 'bg-studio-surface text-studio-text hover:bg-studio-surface-warm border border-studio-border hover:border-studio-border-strong shadow-subtle hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent text-studio-text border border-studio-border hover:border-studio-text hover:bg-studio-surface/50 active:bg-studio-surface-warm',
    ghost: 'bg-transparent text-studio-text hover:bg-studio-surface-warm hover:text-studio-accent',
    dark: 'bg-studio-dark text-white hover:bg-black border border-studio-dark-border shadow-card hover:-translate-y-0.5 active:translate-y-0',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        target={props.target}
        rel={props.rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`group ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
