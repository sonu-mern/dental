
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-20 space-y-32">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-medical-primary bg-cyan-50 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Comprehensive Care
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
            Our Dental <span className="text-transparent bg-clip-text bg-medical-grad">Treatments</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            From preventive checkups to complex smile designs, we offer a complete suite of services backed by modern technology.
          </p>
        </motion.div>
      </section>

      {/* Grid of Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-20">
        {SERVICES.map((service, idx) => (
          <motion.div 
            key={service.id} 
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 space-y-8">
              <div className="w-20 h-20 bg-soft-grad rounded-3xl flex items-center justify-center text-medical-primary shadow-inner">
                {service.icon}
              </div>
              <h2 className="text-4xl font-bold text-slate-900">{service.title}</h2>
              <p className="text-slate-500 text-lg leading-relaxed">{service.description}</p>
              
              <div className="grid sm:grid-cols-1 gap-4">
                {service.benefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4 text-slate-700 bg-white p-4 rounded-2xl border border-slate-50 shadow-sm"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="font-semibold">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/book"
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl group"
              >
                Book {service.title}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-medical-grad rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform" />
              <img 
                src={`https://images.unsplash.com/photo-${service.id === '1' ? '1588776814546-1ffcf47267a5' : service.id === '2' ? '1588776814546-1ffcf47267a5' : '1588776814546-1ffcf47267a5'}?auto=format&fit=crop&q=80&w=800`} 
                alt={service.title}
                className="rounded-[3rem] shadow-2xl w-full aspect-[4/3] object-cover relative z-10 border-4 border-white"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modern CTA */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grad opacity-10 blur-3xl rounded-full translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white">Not sure which treatment is right?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Schedule a free virtual consultation with Dr. Mitchell. We'll discuss your goals and create a custom roadmap for your smile.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              to="/book"
              className="bg-medical-grad text-white px-12 py-5 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-cyan-400/20 transition-all"
            >
              Start Free Discovery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
