import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'orange' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-smooth focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-slate-800 focus:ring-brand-primary',
    secondary: 'bg-brand-secondary text-white hover:bg-blue-600 focus:ring-brand-secondary',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-slate-50 focus:ring-brand-primary',
    orange: 'bg-[#E57F26] text-white hover:bg-[#D46B12] focus:ring-[#E57F26]',
    glass: 'bg-white/10 backdrop-blur-md border border-white/40 text-white hover:bg-white/20 focus:ring-white',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};
