
import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../constants';

const MobileActionBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 glass z-[60] flex items-center justify-around py-4 px-6 border-t border-white/20">
      <a 
        href={`tel:${CLINIC_INFO.phone}`}
        className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-medical-primary transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center">
          <Phone className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Call</span>
      </a>
      
      <Link 
        to="/book"
        className="flex-1 mx-6 bg-medical-grad text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-cyan-200 font-extrabold text-sm tracking-widest active:scale-95 transition-transform"
      >
        <Calendar className="w-5 h-5" />
        BOOK
      </Link>

      <a 
        href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g,'')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1.5 text-slate-600 hover:text-green-500 transition-colors"
      >
        <div className="w-12 h-12 rounded-2xl bg-slate-100/80 flex items-center justify-center">
          <MessageCircle className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">Chat</span>
      </a>
    </div>
  );
};

export default MobileActionBar;
