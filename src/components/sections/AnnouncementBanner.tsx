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
          className="bg-teal-400 text-white relative"
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-4">
            <Bell className="w-4 h-4 shrink-0 animate-bounce-slow" />
            <p className="text-sm font-medium text-center">
              📅 Walk-in sessions every Wednesday 10am–1pm, Room C14, Main Campus. No appointment needed.
            </p>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
