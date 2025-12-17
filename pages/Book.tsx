
import React, { useState } from 'react';
import { Calendar, User, Phone, Clipboard, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Book: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-xl text-center space-y-6 border border-gray-100">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Booking Received!</h2>
          <p className="text-gray-600 leading-relaxed">
            Thank you for choosing Lumina. One of our coordinators will call you shortly to confirm your preferred time slot.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-medical-primary text-white py-4 rounded-xl font-bold shadow-lg"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold text-gray-900">Book Your Appointment</h1>
        <p className="text-gray-600">Quick, easy, and secure. We'll confirm your details within 30 minutes during working hours.</p>
      </div>

      <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-2">
                <User className="w-4 h-4" /> Full Name
              </label>
              <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-2">
                <Phone className="w-4 h-4" /> Phone Number
              </label>
              <input required type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-2">
                <Clipboard className="w-4 h-4" /> Treatment Type
              </label>
              <select required className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all">
                <option value="">Select a service</option>
                {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                <option value="other">Other Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-bold text-gray-600 mb-2">
                <Calendar className="w-4 h-4" /> Preferred Date
              </label>
              <input required type="date" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 block mb-2">Additional Notes (Optional)</label>
            <textarea rows={3} placeholder="Any specific concerns or questions?" className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-medical-primary outline-none transition-all"></textarea>
          </div>

          <div className="bg-medical-blue p-6 rounded-2xl border border-cyan-100 flex items-start gap-4">
            <CheckCircle2 className="text-medical-primary w-6 h-6 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-600 leading-relaxed">
              By submitting this form, you agree to be contacted via phone or email for appointment scheduling purposes. Your data is encrypted and handled securely.
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-medical-primary text-white py-5 rounded-[2rem] font-extrabold text-xl shadow-xl shadow-medical-primary/30 hover:scale-[1.02] active:scale-100 transition-all uppercase tracking-wide"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
