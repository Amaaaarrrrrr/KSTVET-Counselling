import React from 'react';
import { ContactSection } from '../components/sections/ContactSection';
import { FAQ } from '../components/sections/FAQ';
import { Badge } from '../components/ui/Badge';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="section-pad bg-sand-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="coral" className="mb-6">Contact Us</Badge>
            <h1 className="section-heading mb-8">We're Here to Listen</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Whether you're ready to book your first session or just have a few questions, our team is ready to support you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
      <FAQ />
    </div>
  );
};

export default ContactPage;
