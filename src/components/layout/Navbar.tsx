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
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "transition-all duration-300 px-6 md:px-12 lg:px-20 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-2xl text-teal-600 leading-none">KSTVET</span>
          <span className="font-sans text-xs text-slate-500 tracking-wider uppercase">Counselling Centre</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "font-medium text-sm transition-colors relative py-1",
                  isActive ? "text-teal-600" : "text-slate-700 hover:text-teal-400"
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Button variant="primary" size="sm" href="/contact">
            Book a Session
          </Button>
          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-xs font-bold text-slate-500">
            EN
          </div>
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
                        "flex items-center justify-between py-3 text-lg font-medium border-b border-slate-50",
                        isActive ? "text-teal-600" : "text-slate-700"
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
  );
};
