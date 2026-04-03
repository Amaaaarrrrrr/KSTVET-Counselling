import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Heart, Shield } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { team } from '../../data/team';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export const MeetTheTeam: React.FC = () => {
  return (
    <section className="section-pad bg-sand-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-heading">Meet Our Counsellors</h2>
            <p className="section-sub mx-auto">
              Our team of qualified professionals is dedicated to providing the highest standard of care.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 0.1}>
              <div className="card-base p-8 h-full flex flex-col group">
                <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className={cn(
                    "absolute inset-0 rounded-full flex items-center justify-center font-serif text-3xl font-bold",
                    member.color === 'teal' && "bg-teal-100 text-teal-600",
                    member.color === 'purple' && "bg-purple-100 text-purple-600",
                    member.color === 'amber' && "bg-amber-100 text-amber-600",
                    member.color === 'coral' && "bg-coral-100 text-coral-600"
                  )}>
                    {member.initials}
                  </div>
                  {member.imageUrl && (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
                <h3 className="font-serif text-xl text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-teal-600 font-medium mb-4">{member.title}</p>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialisations.map((spec, i) => (
                      <Badge key={i} variant="slate" size="sm">{spec}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 mt-auto">
                  <Button variant="ghost" size="sm" className="w-full justify-between group-hover:bg-teal-50">
                    View Full Profile
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
