import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { faqs } from '../../data/faqs';

export const FAQ: React.FC = () => {
  return (
    <section className="section-pad bg-cream-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <ScrollReveal>
            <h2 className="section-heading">Common Questions</h2>
            <p className="section-sub">
              Everything you need to know about accessing our services, confidentiality, and what to expect at KSTVET.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="p-8 bg-white rounded-3xl shadow-card border border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-maroon-50 flex items-center justify-center text-maroon-400 mb-6">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-slate-900 mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our team is here to help. If you can't find the answer you're looking for, please don't hesitate to reach out.
            </p>
            <Button variant="outline" className="w-full justify-between" href="/contact">
              Contact our team
              <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <Accordion items={faqs} />
        </ScrollReveal>
      </div>
    </section>
  );
};
