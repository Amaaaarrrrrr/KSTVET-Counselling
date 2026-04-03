import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Shield, Heart, Award, Users } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { whoWeHelp } from '../../data/whoWeHelp';
import { cn } from '../../utils/cn';

const iconMap: Record<string, any> = {
  'graduation-cap': GraduationCap,
  'book-open': BookOpen,
  'shield': Shield,
  'heart': Heart,
  'award': Award,
  'users': Users,
};

export const WhoWeHelp: React.FC = () => {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-heading">Who We Help</h2>
            <p className="section-sub mx-auto">
              Our services are designed to meet the unique needs of every member of the KSTVET community.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whoWeHelp.map((item, index) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div className="card-base p-0 h-full flex flex-col group overflow-hidden border-b-4 border-transparent hover:border-maroon-400 transition-all duration-300">
                  {item.imageUrl && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img 
                        src={item.imageUrl} 
                        alt={item.group}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col h-full">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
                      item.color === 'maroon' && "bg-maroon-50 text-maroon-400",
                      item.color === 'gold' && "bg-gold-50 text-gold-400",
                      item.color === 'cta' && "bg-cta-50 text-cta-400",
                      item.color === 'cream' && "bg-cream-100 text-slate-900",
                      item.color === 'forest' && "bg-forest-400/10 text-forest-400",
                      item.color === 'olive' && "bg-olive-400/10 text-olive-400"
                    )}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-serif text-xl text-slate-900 mb-3">{item.group}</h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                      {item.description}
                    </p>
                    <Link
                      to="/who-we-help"
                      className="text-maroon-400 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Learn more <span>→</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
