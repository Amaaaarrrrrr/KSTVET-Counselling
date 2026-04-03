import React from 'react';
import { CounterAnimation } from '../ui/CounterAnimation';
import { stats } from '../../data/stats';

export const Statistics: React.FC = () => {
  return (
    <section className="bg-maroon-400 text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2 relative">
            {index !== 0 && (
              <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-maroon-600" />
            )}
            <CounterAnimation
              value={stat.value}
              suffix={stat.suffix}
              className="font-serif text-5xl md:text-6xl text-gold-400"
            />
            <p className="text-sm md:text-base text-cream-100 font-medium uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
