
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC<{ light?: boolean }> = ({ light }) => {
  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      <div className="relative">
        <motion.div 
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`w-11 h-11 ${light ? 'bg-white text-medical-primary' : 'bg-medical-grad text-white'} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-200/50 transition-all`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17V21M12 21L9 18M12 21L15 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="2" fill="currentColor"/>
          </svg>
        </motion.div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className={`text-xl font-black tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
          Dental<span className="text-medical-primary">Care</span>
        </span>
        <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${light ? 'text-white/60' : 'text-slate-400'}`}>
          Est. 2010
        </span>
      </div>
    </div>
  );
};

export default Logo;
