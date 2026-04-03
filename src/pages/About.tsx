import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Heart, Accessibility, Award } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { MeetTheTeam } from '../components/sections/MeetTheTeam';
import { Badge } from '../components/ui/Badge';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Confidentiality',
      description: 'Your privacy is our absolute priority. We provide a safe, secure space where you can speak freely without fear of judgment or exposure.'
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: 'Accessibility',
      description: 'Mental health support should be available to everyone. We offer free and subsidised sessions to ensure cost is never a barrier to care.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Dignity',
      description: 'We treat every individual with the utmost respect, honouring your unique experiences, culture, and personal journey.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Community',
      description: 'We believe in the power of connection. Our services strengthen the bonds within the KSTVET community and the wider Nairobi area.'
    }
  ];

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="section-pad bg-sand-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="teal" className="mb-6">Our Story</Badge>
            <h1 className="section-heading mb-8">About KSTVET Counselling</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              "Amani" is the Swahili word for peace. At the KSTVET Counselling Centre, we are dedicated to helping every member of our community find that peace within themselves and their lives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
            <ScrollReveal>
              <p>
                Founded in 2014, the KSTVET Counselling Centre began as a small initiative to support students struggling with the transition into technical education. We quickly realised that the challenges our students faced—from academic pressure to financial stress and personal trauma—required a more comprehensive, professional approach.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                Over the last decade, we have grown into a fully-fledged clinical service, staffed by qualified psychologists and counsellors registered with the Kenya Counselling and Psychological Association (KCPA). While our primary mission remains supporting KSTVET students, we have expanded our reach to include staff wellbeing programmes and community outreach initiatives.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p>
                We believe that mental health is the foundation of all success—academic, professional, and personal. By providing a safe, confidential space for healing and growth, we empower our community to overcome obstacles and reach their full potential.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3} className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Counselling Session"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-50 rounded-full -z-10" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-coral-50 rounded-full -z-10" />
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-sand-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="section-heading">Our Core Values</h2>
              <p className="section-sub mx-auto">The principles that guide every session and every interaction at our centre.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-base p-8 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-xl text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <MeetTheTeam />

      {/* Accreditation */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Our Accreditations & Affiliations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-slate-900" />
              <span className="font-bold text-slate-900">KCPA Registered</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-slate-900" />
              <span className="font-bold text-slate-900">AMHRTF Affiliated</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-slate-900" />
              <span className="font-bold text-slate-900">Nairobi Wellness Network</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
