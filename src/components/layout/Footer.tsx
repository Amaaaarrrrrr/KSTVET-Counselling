import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-maroon-900 text-cream-50 pt-20 pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl text-gold-400 leading-none">KSTVET</span>
            <span className="font-sans text-xs text-gold-200 tracking-wider uppercase font-bold">Guidance & Counselling</span>
          </Link>
          <p className="text-cream-50/70 text-sm leading-relaxed max-w-xs">
            Providing professional, confidential, and accessible mental health support to the KSTVET community. Supporting every member of our community.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-maroon-800 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-900 transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-maroon-800 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-900 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-maroon-800 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-900 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-maroon-800 flex items-center justify-center hover:bg-gold-400 hover:text-maroon-900 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold-400">Quick Links</h4>
          <ul className="space-y-4 text-cream-50/70 text-sm">
            <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold-400 transition-colors">Our Services</Link></li>
            <li><Link to="/who-we-help" className="hover:text-gold-400 transition-colors">Who We Help</Link></li>
            <li><Link to="/resources" className="hover:text-gold-400 transition-colors">Resource Library</Link></li>
            <li><Link to="/blog" className="hover:text-gold-400 transition-colors">Wellness Blog</Link></li>
            <li><Link to="/surveys" className="hover:text-gold-400 transition-colors">Surveys & Assessments</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* KSTVET Portals */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold-400">KSTVET Portals</h4>
          <ul className="space-y-4 text-cream-50/70 text-sm">
            <li><a href="https://kstvet.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Main Website</a></li>
            <li><a href="https://portal.kstvet.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Student Portal</a></li>
            <li><a href="https://elearning.kstvet.ac.ke" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">E-Learning</a></li>
            <li><a href="https://portal.hef.co.ke" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">HEF Portal</a></li>
            <li><a href="https://kstvet.ac.ke/bursary/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Bursary Info</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-xl mb-6 text-gold-400">Contact Us</h4>
          <ul className="space-y-4 text-cream-50/70 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Guidance & Counselling Office, Gigiri, Nairobi</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-gold-400 shrink-0" />
              <span>0707 444 222 / 0786 444 600</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-gold-400 shrink-0" />
              <span>counselling@kstvet.ac.ke</span>
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-gold-400 shrink-0" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-maroon-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-50/40 font-medium">
        <p>© 2026 KSTVET Guidance & Counselling. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold-400 transition-colors">Confidentiality Agreement</a>
        </div>
      </div>
    </footer>
  );
};
