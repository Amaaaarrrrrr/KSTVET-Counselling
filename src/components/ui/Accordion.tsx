import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { FAQ } from '../../types';

interface AccordionProps {
  items: FAQ[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="border-b border-slate-200 last:border-0">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full py-4 flex items-center justify-between text-left group cursor-pointer"
          >
            <span className="font-serif text-lg text-slate-900 group-hover:text-teal-600 transition-colors">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-teal-400 transition-transform duration-300",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pb-4 text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
