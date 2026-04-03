import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FloatingBookButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Link to="/contact">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full bg-teal-400 text-white font-medium shadow-float hover:bg-teal-600 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span className="hidden xs:inline">Book a Session</span>
          </motion.button>
        </Link>
      )}
    </AnimatePresence>
  );
};
