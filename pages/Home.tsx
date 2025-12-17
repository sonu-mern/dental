
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, ShieldCheck, Heart, Smile, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, TESTIMONIALS, CLINIC_INFO } from '../constants';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="space-y-32 pb-32 overflow-hidden">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-soft-grad overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-300/30 rounded-full blur-[100px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[120px]" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-medical-primary border border-cyan-100">
                <Sparkles className="w-4 h-4" />
                Experience the Future of Dentistry
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                A Brighter <span className="text-transparent bg-clip-text bg-medical-grad">Smile</span>,<br />
                A Better <span className="text-transparent bg-clip-text bg-indigo-500">You.</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Painless technology meets artistic precision. We create smiles that change lives using AI-driven diagnostics and spa-like comfort.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/book"
                  className="w-full sm:w-auto bg-medical-grad text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                >
                  Book Free Consult
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="w-full sm:w-auto glass text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-medical-primary rounded-full flex items-center justify-center text-white mr-1 shadow-md">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </div>
                  Watch Results
                </button>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Free 3D Scan Included
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  0% Interest Financing
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="animate-float">
                <div className="relative z-10 p-4 glass rounded-[3rem] shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                    alt="Modern Dental Professional" 
                    className="rounded-[2.5rem] w-full object-cover aspect-[4/5] shadow-inner"
                  />
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-xl z-20 max-w-[200px]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex -space-x-2">
                        {[1,2,3].map(i => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                          </div>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-400">+500 today</span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800">Next available slot: Today, 4:00 PM</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-20"
        >
          <span className="text-medical-primary font-bold tracking-widest uppercase text-sm">Treatments</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Advanced Dental Solutions</h2>
          <div className="w-24 h-1.5 bg-medical-grad mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-100/50 transition-all cursor-default"
            >
              <div className="w-16 h-16 bg-soft-grad rounded-2xl flex items-center justify-center text-medical-primary mb-8 group-hover:bg-medical-grad group-hover:text-white transition-all duration-500 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Starts $99</span>
                <Link to="/services" className="text-medical-primary opacity-0 group-hover:opacity-100 transition-all font-bold text-sm flex items-center gap-1">
                  View <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Parallax-ish Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-[4rem] p-10 md:p-20 text-white overflow-hidden relative"
        >
          {/* Decorative Gradient Overlay */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent opacity-50" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-8">
              <div className="w-20 h-20 bg-medical-grad rounded-3xl flex items-center justify-center text-white shadow-xl rotate-3">
                <Smile className="w-10 h-10" />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Your Confidence is Our Greatest <span className="text-medical-primary">Smile.</span></h2>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-medical-primary">4.9</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Google Rating</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-medical-primary">15k</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Patients</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {TESTIMONIALS.map((t, idx) => (
                <motion.div 
                  key={t.id} 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="glass rounded-3xl p-8 border-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img src={`https://i.pravatar.cc/100?u=${t.id}`} className="w-12 h-12 rounded-full border-2 border-medical-primary" alt={t.name} />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-lg italic text-slate-300">"{t.content}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured FAQ/Help CTA */}
      <section className="text-center space-y-12">
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="bg-medical-grad/5 py-24 rounded-[5rem] max-w-5xl mx-auto px-8"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Ready for your transformation?</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Our AI Assistant Lumina is online 24/7 to answer your questions. Or schedule a physical visit for a deep-dive diagnosis.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/book" className="bg-medical-grad text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-cyan-200 hover:scale-105 transition-all">
              Schedule Your Visit
            </Link>
            <button 
              onClick={() => (window as any).scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all"
            >
              Talk to AI Lumina
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
