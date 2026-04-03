import React from 'react';
import { useCounterAnimation } from '../../hooks';

interface CounterAnimationProps {
  value: number;
  suffix: string;
  duration?: number;
  className?: string;
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({ value, suffix, duration = 2000, className }) => {
  const { ref, count } = useCounterAnimation(value, duration);

  return (
    <div ref={ref} className={className}>
      {count % 1 === 0 ? count : count.toFixed(1)}{suffix}
    </div>
  );
};
