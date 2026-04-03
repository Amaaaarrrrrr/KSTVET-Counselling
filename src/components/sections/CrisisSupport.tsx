import React from 'react';
import { Phone, MapPin, MessageCircle, Mail, Clock, ShieldAlert, FileText } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const CrisisSupport: React.FC = () => {
  const crisisLines = [
    { name: 'National Mental Health Helpline', number: '0800 720 600', status: 'Free / 24h' },
    { name: 'Red Cross Crisis Line', number: '1199', status: '24h' },
    { name: 'Befrienders Kenya', number: '+254 722 178 177', status: 'Support' },
    { name: 'LVCT Health One-2-One', number: '1190', status: 'Youth' },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-coral-50 rounded-[40px] p-8 md:p-16 border-l-[12px] border-coral-400 shadow-xl relative overflow-hidden">
          {/* Decorative Icon */}
          <ShieldAlert className="absolute -top-10 -right-10 w-64 h-64 text-coral-100 opacity-20 rotate-12" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <ScrollReveal>
                <Badge variant="coral" className="mb-4">Urgent Support</Badge>
                <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-tight">
                  Need urgent support right now?
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  If you are in immediate danger, feeling suicidal, or experiencing a mental health crisis, please do not wait. Reach out immediately.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-coral-100">
                  <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center text-coral-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Emergency Phone</p>
                    <p className="text-xl font-bold text-slate-900">+254 700 000 000</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-coral-100">
                  <div className="w-12 h-12 rounded-xl bg-coral-100 flex items-center justify-center text-coral-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Campus Walk-in</p>
                    <p className="text-lg font-bold text-slate-900">Room C14, Main Campus (Wed 10am-1pm)</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} className="flex flex-wrap gap-4">
                <Button variant="coral" size="lg" href="/#contact">
                  Book an Emergency Session
                </Button>
                <Button variant="outline" size="lg" className="bg-white border-coral-200 text-coral-600 hover:bg-coral-50">
                  <FileText className="w-5 h-5 mr-2" />
                  Crisis Safety Plan
                </Button>
              </ScrollReveal>
            </div>

            <div className="space-y-8">
              <ScrollReveal delay={0.3}>
                <h3 className="font-serif text-2xl text-slate-900 mb-6">National Crisis Lines</h3>
                <div className="space-y-4">
                  {crisisLines.map((line, i) => (
                    <div key={i} className="flex items-center justify-between p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-coral-100 hover:border-coral-300 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-coral-50 flex items-center justify-center text-coral-400">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{line.name}</p>
                          <p className="text-lg font-serif text-coral-600">{line.number}</p>
                        </div>
                      </div>
                      <Badge variant="coral" size="sm" className="bg-white">{line.status}</Badge>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.5} className="p-6 bg-white/40 rounded-2xl border border-dashed border-coral-200">
                <p className="text-sm text-slate-500 italic text-center">
                  "You don't have to carry the weight of the world on your shoulders. It's okay to ask for help."
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
