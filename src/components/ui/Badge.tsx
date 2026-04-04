import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  variant: 'maroon' | 'gold' | 'cta' | 'slate' | 'cream' | 'forest' | 'olive' | 'coral';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant, size = 'md', children, className }) => {
  const variants = {
    maroon: "bg-maroon-50 text-maroon-400",
    gold: "bg-gold-50 text-gold-400",
    cta: "bg-cta-50 text-cta-400",
    slate: "bg-slate-200 text-slate-900",
    cream: "bg-cream-100 text-slate-900",
    forest: "bg-forest-400/10 text-forest-400",
    olive: "bg-olive-400/10 text-olive-400",
    coral: "bg-coral-50 text-coral-600"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };

  return (
    <span className={cn("pill", variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
};
