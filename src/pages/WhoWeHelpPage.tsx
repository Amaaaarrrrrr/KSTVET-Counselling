import React from 'react';
import { GraduationCap, BookOpen, Shield, Heart, Award, Users, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { whoWeHelp } from '../data/whoWeHelp';
import { cn } from '../utils/cn';

const iconMap: Record<string, any> = {
  'graduation-cap': GraduationCap,
  'book-open': BookOpen,
  'shield': Shield,
  'heart': Heart,
  'award': Award,
  'users': Users,
};

const WhoWeHelpPage: React.FC = () => {
  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="section-pad bg-ivory-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="green" className="mb-6">Who We Help</Badge>
            <h1 className="section-heading mb-8">A Place for Everyone</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Our centre is an inclusive space. We have developed specialised approaches to support the unique challenges faced by different members of the KSTVET community.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Audience Sections */}
      <div className="space-y-0">
        {whoWeHelp.map((item, index) => {
          const Icon = iconMap[item.icon] || Users;
          const isEven = index % 2 === 0;

          return (
            <section key={item.id} className={cn("section-pad", isEven ? "bg-white" : "bg-ivory-50/30")}>
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className={cn("space-y-8", !isEven && "lg:order-2")}>
                  <ScrollReveal>
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                      item.color === 'green' && "bg-green-50 text-green-800",
                      item.color === 'gold' && "bg-gold-50 text-gold-600",
                      item.color === 'coral' && "bg-coral-50 text-coral-600",
                      item.color === 'ivory' && "bg-ivory-50 text-slate-600"
                    )}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="font-serif text-4xl text-slate-900 mb-4">{item.group}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="space-y-4 pt-4">
                      <h4 className="font-bold text-slate-900">How we support you:</h4>
                      <ul className="space-y-3">
                        {[
                          'Tailored one-on-one guidance sessions',
                          'Group workshops focused on shared challenges',
                          'Confidential referral to specialist services',
                          'Flexible scheduling to fit your commitments'
                        ].map((point, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-6">
                      <Button variant="primary" href="/contact">
                        Get Support as a {item.group.replace('Current ', '')}
                      </Button>
                    </div>
                  </ScrollReveal>
                </div>

                <div className={cn("relative", !isEven && "lg:order-1")}>
                  <ScrollReveal delay={0.2}>
                    <div className={cn(
                      "aspect-square rounded-[60px] overflow-hidden relative shadow-2xl border-8 border-white",
                      item.color === 'green' && "bg-green-50",
                      item.color === 'gold' && "bg-gold-50",
                      item.color === 'coral' && "bg-coral-50",
                      item.color === 'ivory' && "bg-ivory-100"
                    )}>
                      {item.imageUrl ? (
                        <>
                          <img 
                            src={item.imageUrl} 
                            alt={item.group}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-transparent to-transparent" />
                          <div className="absolute bottom-8 left-8 right-8">
                            <p className="font-serif text-xl text-white italic leading-relaxed">
                              "We understand the specific pressures you face in your role within our community."
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Abstract Decoration */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <Icon className="w-64 h-64" />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                            <p className="font-serif text-2xl text-slate-400 italic">
                              "We understand the specific pressures you face in your role within our community."
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default WhoWeHelpPage;
