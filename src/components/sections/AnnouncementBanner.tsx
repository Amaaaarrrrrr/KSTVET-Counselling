import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Bell } from 'lucide-react';

export const AnnouncementBanner: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-gold-400 text-maroon-900 relative border-b border-gold-600"
        >
          <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-4">
            <Bell className="w-4 h-4 shrink-0 animate-bounce-slow" />
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
              📅 April 2026 Intake: Orientation sessions for new DTTE trainees start next Monday at the Guidance & Counselling Office.
            </p>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
