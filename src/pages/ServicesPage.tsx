import React from 'react';
import { Brain, Briefcase, Wallet, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { services } from '../data/services';
import { cn } from '../utils/cn';

const iconMap: Record<string, any> = {
  brain: Brain,
  briefcase: Briefcase,
  wallet: Wallet,
  users: Users,
};

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="section-pad bg-ivory-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="green" className="mb-6">Our Services</Badge>
            <h1 className="section-heading mb-8">Specialised Support for Every Need</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We provide professional guidance and counselling across four key areas, ensuring that whatever challenge you are facing, we have the expertise to help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <div className="divide-y divide-slate-100">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          const isEven = index % 2 === 0;

          return (
            <section key={service.id} className={cn("section-pad", isEven ? "bg-white" : "bg-ivory-50/50")}>
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className={cn("space-y-8", !isEven && "lg:order-2")}>
                  <ScrollReveal>
                    <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-800 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="font-serif text-4xl text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-green-800 font-serif italic text-xl mb-6">{service.heroLine}</p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                      {service.longDescription}
                    </p>
                    <Button variant="primary" size="lg" href="/contact">
                      Book a {service.title} Session
                    </Button>
                  </ScrollReveal>
                </div>

                <div className={cn(!isEven && "lg:order-1")}>
                  <ScrollReveal delay={0.2}>
                    <div className="relative mb-12 rounded-[40px] overflow-hidden shadow-2xl aspect-video lg:aspect-square border-8 border-white">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
                    </div>

                    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-card border border-slate-100">
                      <h3 className="font-bold text-slate-900 mb-8 flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                        What we can help you with:
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {service.issues.map((issue, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-gold-400 mt-2 shrink-0" />
                            <span className="text-slate-600 leading-tight">{issue}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-8 border-t border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Available for:</p>
                        <div className="flex flex-wrap gap-2">
                          {service.audiences.map((audience, i) => (
                            <Badge key={i} variant="green">{audience}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="section-pad bg-green-900 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl">Not sure which service you need?</h2>
            <p className="text-ivory-100/70 text-lg">
              That's perfectly okay. Most people aren't sure when they first reach out. Book a general intake session and we'll help you figure it out together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button variant="primary" size="lg" href="/contact">
                Book General Intake
              </Button>
              <Button variant="outline" size="lg" className="border-green-400 text-ivory-100 hover:bg-green-800" href="/contact">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
