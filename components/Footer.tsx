
import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-32 md:pb-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8">
          <Logo light />
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
            Setting the global benchmark in modern dentistry since 2010. We combine clinical excellence with a unique luxury patient experience.
          </p>
          <div className="flex gap-4">
            {CLINIC_INFO.socials.map((social) => (
              <a 
                key={social.name} 
                href={social.url} 
                className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-white/50 hover:bg-medical-grad hover:text-white transition-all border border-white/5"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-xl font-bold tracking-tight">Quick Navigation</h4>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-medical-primary rounded-full" /> Treatments & Services</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-medical-primary rounded-full" /> Our Specialized Team</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-medical-primary rounded-full" /> Transformation Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-medical-primary rounded-full" /> Contact & Locations</Link></li>
            <li><Link to="/book" className="text-medical-primary font-bold hover:brightness-110 flex items-center gap-2">Online Booking Portal</Link></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-xl font-bold tracking-tight">Office Hours</h4>
          <div className="space-y-4">
            {CLINIC_INFO.hours.map((h, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">{h.days}</span>
                <span className="font-bold">{h.time}</span>
              </div>
            ))}
            <div className="pt-4 mt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs font-black text-medical-primary uppercase tracking-widest">
                <div className="w-2 h-2 bg-medical-primary rounded-full animate-pulse" />
                Emergency Line Open 24/7
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-xl font-bold tracking-tight">Newsletter</h4>
          <p className="text-slate-400 text-sm font-medium">Join 5,000+ others getting monthly oral health tips and exclusive offers.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary font-medium" 
            />
            <button className="absolute right-2 top-2 bg-medical-grad text-white px-4 py-2 rounded-xl text-xs font-bold hover:brightness-110 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-slate-500 font-medium">
          © {new Date().getFullYear()} Dental Care Luxury Clinic. Designed for Excellence.
        </p>
        <div className="flex items-center gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
