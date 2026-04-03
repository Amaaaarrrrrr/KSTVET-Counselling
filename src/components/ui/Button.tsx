import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface ButtonProps {
  variant: 'primary' | 'outline' | 'cta' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'md',
  children,
  onClick,
  href,
  className,
  icon
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-maroon-400 hover:bg-maroon-600 text-white shadow-md hover:scale-105 active:scale-95",
    outline: "border-2 border-maroon-400 text-maroon-400 hover:bg-maroon-50",
    cta: "bg-cta-400 hover:bg-cta-600 text-white shadow-md hover:scale-105 active:scale-95",
    ghost: "text-slate-500 hover:text-maroon-400 hover:bg-maroon-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} onClick={onClick} className={combinedClassName}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link to={href} onClick={onClick} className={combinedClassName}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
      {icon}
    </button>
  );
};
