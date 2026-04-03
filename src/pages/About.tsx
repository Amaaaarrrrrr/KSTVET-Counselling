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
      title: 'Professionalism',
      description: 'We maintain the highest standards of clinical practice, ensuring every session is conducted with expertise and ethical integrity.'
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: 'Inclusivity',
      description: 'Our services are open to all KSTVET trainees and staff, regardless of background, department, or personal circumstances.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Integrity',
      description: 'We build trust through honesty and transparency, ensuring that our guidance is always in the best interest of our community.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We continuously evolve our counselling techniques to meet the changing needs of technical trainers and trainees in a modern world.'
    }
  ];

  return (
    <div className="pt-32 md:pt-40">
      {/* Hero */}
      <section className="section-pad bg-ivory-50">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <Badge variant="green" className="mb-6">Our History</Badge>
            <h1 className="section-heading mb-8">About KSTVET Guidance & Counselling</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Established as part of KSTVET's commitment to holistic education, our department supports the mental and professional wellbeing of Kenya's technical trainers.
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
                The Kenya School of TVET (KSTVET) was established in 1978 as the Kenya Technical Teachers College (KTTC). Over the decades, it has evolved into a premier institution for training technical teachers in Kenya and the region.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p>
                The Guidance and Counselling Department was founded to address the unique pressures faced by technical trainees and staff. We recognize that effective teaching and learning require a stable emotional and mental foundation.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p>
                Today, we serve as a vital support pillar within the institution, offering professional counselling, career guidance, and wellness programs. Our mission is to empower the KSTVET community to achieve excellence both in the classroom and in their personal lives.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3} className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
                alt="Counselling Session"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-50 rounded-full -z-10" />
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold-50 rounded-full -z-10" />
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-ivory-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="section-heading">Our Core Values</h2>
              <p className="section-sub mx-auto">The principles that guide every session and every interaction at KSTVET.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-base p-8 h-full border-t-4 border-green-800">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-800 flex items-center justify-center mb-6">
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
