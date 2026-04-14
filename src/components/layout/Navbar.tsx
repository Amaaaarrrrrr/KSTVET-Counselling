import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Help', path: '/who-we-help' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'Surveys', path: '/surveys' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-maroon-800 text-cream-50 py-2 px-6 md:px-12 lg:px-20 flex justify-between items-center text-[10px] md:text-xs font-medium tracking-wider uppercase">
        <div className="flex items-center gap-4">
          <a href="https://kstvet.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
            Main KSTVET Website
          </a>
          <span className="opacity-30">|</span>
          <span>Gigiri, Nairobi</span>
        </div>
        <div className="hidden sm:block">
          Official Guidance & Counselling Department
        </div>
      </div>

      <nav
        className={cn(
          "transition-all duration-300 px-6 md:px-12 lg:px-20 py-4",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl text-maroon-400 leading-none tracking-tight">KSTVET</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
            </div>
            <span className="font-sans text-[10px] md:text-xs text-slate-500 tracking-widest uppercase font-bold mt-0.5">Guidance & Counselling</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "font-bold text-xs tracking-widest uppercase transition-colors relative py-1",
                    isActive ? "text-maroon-400" : "text-slate-600 hover:text-maroon-400"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-400"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Button variant="primary" size="sm" href="/contact" className="ml-4">
              Book a Session
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-slate-900 p-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center justify-between py-3 text-lg font-serif border-b border-slate-50",
                          isActive ? "text-maroon-400" : "text-slate-700"
                        )
                      }
                    >
                      {link.name}
                      <ChevronRight className="w-4 h-4 opacity-30" />
                    </NavLink>
                  </motion.div>
                ))}
                <div className="pt-4">
                  <Button variant="primary" className="w-full" href="/contact">
                    Book a Session
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
