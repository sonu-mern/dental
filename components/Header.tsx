
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { CLINIC_INFO } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-all hover:text-medical-primary relative group ${
                  isActive(item.path) ? 'text-medical-primary' : 'text-slate-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-medical-primary transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-medical-grad text-white px-7 py-3 rounded-2xl text-sm font-bold shadow-lg shadow-cyan-200/50 hover:shadow-cyan-300/60 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <a href={`tel:${CLINIC_INFO.phone}`} className="p-2 text-medical-primary bg-cyan-50 rounded-xl">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-medical-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 py-10 px-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-2xl font-black ${
                isActive(item.path) ? 'text-medical-primary' : 'text-slate-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-medical-grad text-white py-5 rounded-[2rem] font-black text-xl shadow-xl shadow-cyan-200/50"
          >
            Make Appointment
          </Link>
          <div className="pt-6 border-t border-slate-50 flex justify-center gap-8">
            {CLINIC_INFO.socials.map((social) => (
              <a key={social.name} href={social.url} className="text-slate-400 hover:text-medical-primary">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
