import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, MessageCircle, MapPin, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

export const CrisisWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-80 bg-white rounded-2xl shadow-float overflow-hidden border border-coral-100"
          >
            <div className="bg-coral-400 p-4 text-white flex items-center justify-between">
              <h3 className="font-serif text-lg">You are not alone.</h3>
              <button onClick={() => setIsOpen(false)} className="hover:bg-coral-600 rounded-full p-1 transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              <p className="text-sm text-slate-600">If you are in immediate danger or need urgent support, please use these resources:</p>
              
              <div className="space-y-3">
                <a href="tel:0800720600" className="flex items-center gap-3 p-3 rounded-xl bg-coral-50 text-coral-600 hover:bg-coral-100 transition-colors">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">National Helpline</p>
                    <p className="font-bold text-sm sm:text-base">0800 720 600</p>
                  </div>
                </a>
                <a href="tel:1199" className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors">
                  <Phone className="w-5 h-5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider">Red Cross Crisis</p>
                    <p className="font-bold text-sm sm:text-base">1199</p>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                  <Clock className="w-3 h-3" />
                  <span>Campus Walk-in: Wed 10am-1pm</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-3 h-3" />
                  <span>Room C14, Main Campus</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full font-medium shadow-float transition-all duration-300 cursor-pointer",
          isOpen ? "bg-slate-900 text-white" : "bg-coral-400 text-white hover:bg-coral-600 animate-pulse"
        )}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        <span className={cn(isOpen ? "inline" : "hidden xs:inline")}>{isOpen ? "Close" : "Need help now?"}</span>
      </button>
    </div>
  );
};
