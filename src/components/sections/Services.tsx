import React from 'react';
import { CheckCircle2, Brain, Briefcase, Wallet, Users as UsersIcon } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Tabs } from '../ui/Tabs';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { services } from '../../data/services';

const iconMap: Record<string, any> = {
  brain: Brain,
  briefcase: Briefcase,
  wallet: Wallet,
  users: UsersIcon,
};

export const Services: React.FC = () => {
  const tabs = services.map((service) => ({
    id: service.id,
    label: service.title,
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
        <div className="space-y-6">
          <h3 className="font-serif text-3xl text-slate-900">{service.title}</h3>
          <p className="text-teal-600 font-serif italic text-lg">{service.heroLine}</p>
          <p className="text-slate-600 leading-relaxed">{service.longDescription}</p>
          <div className="pt-4">
            <Button variant="primary" href="/contact">
              Book this service →
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-card border border-slate-100">
          <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-teal-400" />
            Common issues we help with:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {service.issues.map((issue, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 shrink-0" />
                {issue}
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Available for:</p>
            <div className="flex flex-wrap gap-2">
              {service.audiences.map((audience, i) => (
                <Badge key={i} variant="teal" size="sm">{audience}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }));

  return (
    <section className="section-pad bg-sand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-heading">Our Specialised Services</h2>
            <p className="section-sub mx-auto">
              We offer a range of support services tailored to the specific challenges of the TVET community.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <Tabs tabs={tabs} className="max-w-5xl mx-auto" />
        </ScrollReveal>
      </div>
    </section>
  );
};
