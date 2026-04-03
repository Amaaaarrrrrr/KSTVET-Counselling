import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../ui/Button';
import { MapPlaceholder } from '../../assets/svg/MapPlaceholder';
import { cn } from '../../utils/cn';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  audience: z.enum(['trainee','staff','support_staff','parent','alumni','community'], {
    message: 'Please select your group'
  }),
  service: z.enum(['mental_health','career','financial','relationships','general','unsure'], {
    message: 'Please select a service'
  }),
  message: z.string().min(20, 'Please tell us a little more — minimum 20 characters'),
  consent: z.boolean().refine(v => v, 'Please accept the privacy notice'),
});

type FormData = z.infer<typeof schema>;

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="section-heading">Get in Touch</h2>
            <p className="section-sub mx-auto">
              Ready to take the first step? Send us a message and we'll get back to you within one working day.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <div className="bg-cream-100 rounded-3xl p-8 md:p-12 shadow-sm border border-cream-200">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-700 ml-1">Full Name *</label>
                        <input
                          {...register('name')}
                          className={cn(
                            "w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-50 outline-none transition-all",
                            errors.name && "border-cta-400 focus:ring-cta-50"
                          )}
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-xs text-cta-600 ml-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-700 ml-1">Email Address *</label>
                        <input
                          {...register('email')}
                          className={cn(
                            "w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-50 outline-none transition-all",
                            errors.email && "border-cta-400 focus:ring-cta-50"
                          )}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-xs text-cta-600 ml-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-700 ml-1">I am a... *</label>
                        <select
                          {...register('audience')}
                          className={cn(
                            "w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-50 outline-none transition-all appearance-none",
                            errors.audience && "border-cta-400 focus:ring-cta-50"
                          )}
                        >
                          <option value="">Select your group</option>
                          <option value="trainee">KSTVET Trainee</option>
                          <option value="staff">Academic Staff / Lecturer</option>
                          <option value="support_staff">Non-Academic Staff</option>
                          <option value="parent">Parent/Guardian</option>
                          <option value="alumni">Alumni</option>
                          <option value="community">Community Member</option>
                        </select>
                        {errors.audience && <p className="text-xs text-cta-600 ml-1">{errors.audience.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-700 ml-1">Interested in... *</label>
                        <select
                          {...register('service')}
                          className={cn(
                            "w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-50 outline-none transition-all appearance-none",
                            errors.service && "border-cta-400 focus:ring-cta-50"
                          )}
                        >
                          <option value="">Select a service</option>
                          <option value="mental_health">Mental Health & Wellbeing</option>
                          <option value="career">Career & Academic Guidance</option>
                          <option value="financial">Financial Stress Counselling</option>
                          <option value="relationships">Relationships & Growth</option>
                          <option value="general">General Inquiry</option>
                          <option value="unsure">I'm not sure yet</option>
                        </select>
                        {errors.service && <p className="text-xs text-cta-600 ml-1">{errors.service.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-700 ml-1">Message *</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className={cn(
                          "w-full px-5 py-3 rounded-xl bg-white border border-slate-200 focus:border-maroon-400 focus:ring-2 focus:ring-maroon-50 outline-none transition-all resize-none",
                          errors.message && "border-cta-400 focus:ring-cta-50"
                        )}
                        placeholder="Tell us a little about what's on your mind..."
                      />
                      {errors.message && <p className="text-xs text-cta-600 ml-1">{errors.message.message}</p>}
                    </div>

                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          {...register('consent')}
                          className="mt-1 w-4 h-4 rounded border-slate-300 text-maroon-400 focus:ring-maroon-50 cursor-pointer"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                          I understand that my information will be kept strictly confidential according to the centre's privacy policy. *
                        </span>
                      </label>
                      {errors.consent && <p className="text-xs text-cta-600 ml-1">{errors.consent.message}</p>}
                    </div>

                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      onClick={() => {}}
                      icon={isSubmitting ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" /> : <Send className="w-5 h-5" />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-maroon-50 text-maroon-400 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="font-serif text-3xl text-slate-900">Message Sent!</h3>
                    <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Thank you. We've received your message and will be in touch within one working day. If you need urgent support, please call 0707 444 222.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send another message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>

          {/* Info & Map */}
          <ScrollReveal delay={0.4} className="space-y-12">
            <div className="space-y-8">
              <h3 className="font-serif text-3xl text-slate-900">Visit the Centre</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-maroon-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-sm text-slate-700 font-medium">Guidance & Counselling Office<br />Gigiri, Nairobi</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-maroon-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Opening Hours</p>
                    <p className="text-sm text-slate-700 font-medium">Mon - Fri: 8:00 AM - 5:00 PM<br />Orientation sessions available</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-maroon-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-sm text-slate-700 font-medium">0707 444 222 / 0786 444 600</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-100 flex items-center justify-center text-maroon-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-sm text-slate-700 font-medium">counselling@kstvet.ac.ke</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 aspect-video flex items-center justify-center">
              <MapPin className="w-12 h-12 text-maroon-100 absolute" />
              <p className="text-slate-400 font-serif text-xl relative z-10">KSTVET Campus Map</p>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Follow our wellness journey</p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-maroon-50 hover:text-maroon-400 transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-maroon-50 hover:text-maroon-400 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-maroon-50 hover:text-maroon-400 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-maroon-50 hover:text-maroon-400 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
