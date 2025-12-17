
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, ChevronRight, HelpCircle, ExternalLink, Globe } from 'lucide-react';
import { CLINIC_INFO, FAQS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-20 space-y-32 overflow-hidden">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-medical-primary bg-cyan-50 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4" /> Global Standards, Local Care
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
            Connect With <span className="text-transparent bg-clip-text bg-medical-grad">Us</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Have a question about a treatment? Or want to schedule a visit? Our dedicated support team is ready to assist you.
          </p>
        </motion.div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details Panel */}
          <div className="space-y-8 lg:sticky lg:top-28 self-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-10"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Phone className="text-medical-primary w-6 h-6" /> Reach Out
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-500 font-medium">Main Office</span>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-slate-900 group-hover:text-medical-primary transition-colors">{CLINIC_INFO.phone}</a>
                  </div>
                  <div className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-500 font-medium">WhatsApp Support</span>
                    <a href={`https://wa.me/${CLINIC_INFO.whatsapp.replace(/\D/g,'')}`} target="_blank" className="font-bold text-slate-900 group-hover:text-green-500 transition-colors">{CLINIC_INFO.whatsapp}</a>
                  </div>
                  <div className="flex justify-between items-center group cursor-pointer">
                    <span className="text-slate-500 font-medium">General Email</span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="font-bold text-slate-900 group-hover:text-medical-primary transition-colors underline decoration-cyan-200">{CLINIC_INFO.email}</a>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-10 border-t border-slate-50">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <MapPin className="text-medical-primary w-6 h-6" /> Our Locations
                </h3>
                <div className="space-y-6">
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <div className="font-black text-xs uppercase text-medical-primary mb-2">Primary Branch</div>
                    <p className="text-sm text-slate-600 mb-3">{CLINIC_INFO.address}</p>
                    <a href="#" className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:gap-3 transition-all">
                      Directions <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                    <div className="font-black text-xs uppercase text-medical-primary mb-2">North City Branch</div>
                    <p className="text-sm text-slate-600 mb-3">{CLINIC_INFO.branch2}</p>
                    <a href="#" className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:gap-3 transition-all">
                      Directions <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-50 space-y-6">
                 <h3 className="text-xl font-bold">Follow Our Journey</h3>
                 <div className="flex gap-4">
                   {CLINIC_INFO.socials.map(s => (
                     <a key={s.name} href={s.url} className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-medical-grad hover:text-white transition-all shadow-sm">
                       {s.icon}
                     </a>
                   ))}
                 </div>
              </div>
            </motion.div>
          </div>

          {/* Form and FAQ Section */}
          <div className="lg:col-span-2 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-medical-grad opacity-5 rounded-bl-full" />
              <div className="relative z-10 space-y-8">
                <div>
                  <h3 className="text-3xl font-black text-slate-900 mb-3 flex items-center gap-4">
                    <MessageSquare className="text-medical-primary" /> Send us a Note
                  </h3>
                  <p className="text-slate-500">We typically respond to all inquiries within 2 business hours.</p>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Full Name</label>
                      <input type="text" placeholder="Alex Johnson" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Email Address</label>
                      <input type="email" placeholder="alex@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Topic of Discussion</label>
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-bold appearance-none">
                      <option>General Support</option>
                      <option>Service Pricing</option>
                      <option>Feedback & Suggestions</option>
                      <option>Partnership Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">How can we help?</label>
                    <textarea rows={5} placeholder="Tell us more about your needs..." className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-medium"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3">
                    Send My Inquiry
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* FAQs */}
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-slate-900 flex items-center gap-4 px-4">
                <HelpCircle className="text-medical-primary w-8 h-8" /> 
                Frequently Asked
              </h3>
              <div className="grid gap-4">
                {FAQS.map((faq, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
                  >
                    <div className="flex justify-between items-start gap-4 cursor-pointer">
                      <h4 className="text-xl font-bold text-slate-800 group-hover:text-medical-primary transition-colors">{faq.q}</h4>
                      <div className="w-8 h-8 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-medical-primary group-hover:text-white transition-all">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="mt-4 text-slate-500 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section with Floating Info Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[600px] rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" 
            alt="Clinic View" 
          />
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[90%] md:w-auto md:min-w-[400px]"
          >
            <div className="glass p-8 rounded-[2.5rem] shadow-2xl border-white/50 backdrop-blur-xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-medical-grad rounded-[2rem] flex items-center justify-center text-white shadow-xl flex-shrink-0 animate-bounce-slow">
                <MapPin className="w-10 h-10" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-black text-slate-900 mb-2">Visit Our Center</h4>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed font-medium">
                  {CLINIC_INFO.address}<br />
                  Free parking available on site.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    Open in Maps <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Reception Team */}
      <section className="bg-soft-grad py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-black text-slate-900">Always Greeted with a Smile</h2>
              <p className="text-slate-600 max-w-xl mx-auto font-medium">Meet our coordination team who makes your visit seamless and stress-free.</p>
           </div>
           <div className="flex flex-wrap justify-center gap-12">
              {[
                { name: 'Elena Gilbert', role: 'Head Coordinator', img: 'https://i.pravatar.cc/150?u=elena' },
                { name: 'Stefan Salvatore', role: 'Patient Relations', img: 'https://i.pravatar.cc/150?u=stefan' },
                { name: 'Bonnie Bennett', role: 'Insurance Liaison', img: 'https://i.pravatar.cc/150?u=bonnie' }
              ].map((staff, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="text-center space-y-4"
                >
                  <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl">
                    <img src={staff.img} className="w-full h-full object-cover" alt={staff.name} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{staff.name}</div>
                    <div className="text-xs font-black text-medical-primary uppercase tracking-widest">{staff.role}</div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
