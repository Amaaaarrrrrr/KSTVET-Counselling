import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  variant: 'teal' | 'purple' | 'amber' | 'coral' | 'slate';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant, size = 'md', children, className }) => {
  const variants = {
    teal: "bg-teal-50 text-teal-600",
    purple: "bg-purple-50 text-purple-600",
    amber: "bg-amber-50 text-amber-600",
    coral: "bg-coral-50 text-coral-600",
    slate: "bg-slate-50 text-slate-600"
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
