import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Testimonial } from '../../types';

interface CarouselProps {
  items: Testimonial[];
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({ items, className }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, items.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div 
      className={cn("relative overflow-hidden py-12", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-12">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-card relative"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-teal-50 opacity-50" />
            <div className="relative z-10">
              <p className="font-serif italic text-xl md:text-2xl text-slate-800 mb-8 leading-relaxed">
                "{items[current].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-serif font-bold">
                  {items[current].initials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900">{items[current].name}</h4>
                  <p className="text-sm text-teal-600">{items[current].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors z-20 cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors z-20 cursor-pointer"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
              current === index ? "w-8 bg-teal-400" : "bg-slate-300 hover:bg-teal-200"
            )}
          />
        ))}
      </div>
    </div>
  );
};
