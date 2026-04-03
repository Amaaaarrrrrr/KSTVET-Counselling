import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-3xl text-teal-100 leading-none">KSTVET</span>
            <span className="font-sans text-xs text-teal-400 tracking-wider uppercase">Counselling Centre</span>
          </Link>
          <p className="text-teal-100/70 text-sm leading-relaxed max-w-xs">
            Providing professional, confidential, and accessible mental health support to the KSTVET community and beyond. Amani is the Swahili word for peace.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center hover:bg-teal-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4 text-teal-100/70 text-sm">
            <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Our Services</Link></li>
            <li><Link to="/who-we-help" className="hover:text-teal-400 transition-colors">Who We Help</Link></li>
            <li><Link to="/resources" className="hover:text-teal-400 transition-colors">Resource Library</Link></li>
            <li><Link to="/blog" className="hover:text-teal-400 transition-colors">Wellness Blog</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-xl mb-6">Our Services</h4>
          <ul className="space-y-4 text-teal-100/70 text-sm">
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Mental Health & Wellbeing</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Career & Academic Guidance</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Financial Stress Counselling</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Relationships & Personal Growth</Link></li>
            <li><Link to="/services" className="hover:text-teal-400 transition-colors">Staff Wellbeing Initiative</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-xl mb-6">Contact Us</h4>
          <ul className="space-y-4 text-teal-100/70 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Main Campus, Room C14, UN Avenue, Gigiri, Nairobi</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-teal-400 shrink-0" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-teal-400 shrink-0" />
              <span>counselling@kstvet.ac.ke</span>
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-teal-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-teal-100/40">
        <p>© 2026 KSTVET Counselling Centre. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-teal-400 transition-colors">Confidentiality Agreement</a>
        </div>
      </div>
    </footer>
  );
};
