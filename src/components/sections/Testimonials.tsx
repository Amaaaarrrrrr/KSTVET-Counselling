import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Carousel } from '../ui/Carousel';
import { testimonials } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  return (
    <section className="section-pad bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="section-heading">Voices of Our Community</h2>
            <p className="section-sub mx-auto">
              Real stories from trainees and staff who have found support and guidance at the KSTVET centre.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <Carousel items={testimonials} />
        </ScrollReveal>
      </div>
    </section>
  );
};
