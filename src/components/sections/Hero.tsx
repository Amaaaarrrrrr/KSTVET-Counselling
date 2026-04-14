import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Lock, CheckCircle, Heart } from 'lucide-react';
import { Button } from '../ui/Button';
import { HeroIllustration } from '../../assets/svg/HeroIllustration';
import { OrganicBlob } from '../../assets/svg/OrganicBlob';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden bg-cream-100">
      {/* Decorative Blobs */}
      <OrganicBlob className="absolute -top-20 -right-20 w-96 h-96 opacity-20 rotate-45 fill-maroon-100" />
      <OrganicBlob color="fill-gold-50" className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-50 text-maroon-400 text-[10px] md:text-xs font-bold uppercase tracking-widest border border-maroon-100">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Kenya School of TVET — Gigiri, Nairobi
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-tight">
            Supporting Every <span className="text-maroon-400 italic">Member</span> of Our Community.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            Professional, confidential guidance and counselling for trainees, staff, and the KSTVET family. Whoever you are, whatever you're facing — there is a place for you here.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
              <Lock className="w-4 h-4 text-maroon-400" />
              Fully Confidential
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
              <CheckCircle className="w-4 h-4 text-maroon-400" />
              Qualified Counsellors
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-700">
              <Heart className="w-4 h-4 text-gold-400" />
              Open to All
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="primary" size="lg" href="/contact">
              Book a Session
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Our Services
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square lg:aspect-[4/5] border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
              alt="Students collaborating in a peaceful environment"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/40 to-transparent" />
          </div>
          
          {/* Floating Callout */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-4 md:p-6 rounded-2xl shadow-float max-w-[200px] md:max-w-[240px] border-l-4 border-gold-400"
          >
            <p className="font-serif text-lg text-slate-900 mb-1">KSTVET</p>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Empowering <span className="text-maroon-400 font-bold italic">technical trainers</span> for a better tomorrow.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs font-bold uppercase tracking-widest">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};
