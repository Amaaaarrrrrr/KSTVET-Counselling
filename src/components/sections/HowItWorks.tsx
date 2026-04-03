import React from 'react';
import { Calendar, MessageSquare, Heart, Lock } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Book a Session',
      description: 'Fill out our simple contact form or walk into Room C14. We’ll match you with the right counsellor.',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      number: '02',
      title: 'Initial Conversation',
      description: 'A warm, 50-minute session to understand what’s on your mind and how we can support you.',
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      number: '03',
      title: 'Ongoing Support',
      description: 'Regular sessions tailored to your pace, helping you build resilience and find peace.',
      icon: <Heart className="w-8 h-8" />
    }
  ];

  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <ScrollReveal>
            <h2 className="section-heading">How It Works</h2>
            <p className="section-sub mx-auto">
              Taking the first step is often the hardest. We’ve made the process as simple and welcoming as possible.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-teal-100 -z-10" />
          
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="text-center space-y-6">
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full bg-teal-400 text-white flex items-center justify-center font-serif text-2xl shadow-lg mx-auto relative z-10">
                    {step.number}
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-sand-100 flex items-center justify-center text-teal-600">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.6} className="mt-24">
          <div className="max-w-4xl mx-auto bg-teal-50 rounded-3xl p-8 md:p-12 border-l-8 border-teal-400 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-teal-600 shrink-0 shadow-sm">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-serif text-2xl text-slate-900 mb-2">Your privacy is our priority.</h4>
              <p className="text-slate-600 leading-relaxed">
                Everything discussed in your sessions is strictly confidential. We adhere to the highest ethical standards of the Kenya Counselling and Psychological Association (KCPA). Your information will never be shared with teachers, parents, or employers without your explicit consent.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
