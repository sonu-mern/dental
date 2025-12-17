
import React from 'react';
import { DOCTORS } from '../constants';
import { Award, GraduationCap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Your Smile, Our Passion.</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2010, Lumina Dental Care has been at the forefront of modern dentistry. We believe that a trip to the dentist should be a relaxing experience. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our clinic combines a spa-like environment with surgical-grade precision to give you the best of both worlds. We use 100% digital workflows to ensure accuracy and reduce appointment times.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-medical-primary">15+</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-tight">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-medical-primary">25k+</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-tight">Happy Smiles</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-medical-primary">10+</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-tight">Specialists</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/clinic/800/600" 
              className="rounded-3xl shadow-2xl relative z-10" 
              alt="Our Clinic" 
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden lg:block">
              <div className="flex items-center gap-3">
                <Users className="text-medical-primary" />
                <div>
                  <div className="font-bold text-gray-900">Expert Team</div>
                  <div className="text-sm text-gray-500">Board Certified Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Specialists</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our doctors are not just experts in their field, they are dedicated partners in your health journey.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {DOCTORS.map(doc => (
              <div key={doc.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm flex flex-col sm:flex-row group">
                <div className="sm:w-2/5 relative overflow-hidden">
                  <img 
                    src={doc.image} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    alt={doc.name} 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-medical-primary">
                    {doc.experience}
                  </div>
                </div>
                <div className="sm:w-3/5 p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{doc.name}</h3>
                    <p className="text-medical-primary font-medium">{doc.role}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-gray-400 mt-1" />
                      <ul className="text-sm text-gray-600">
                        {doc.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                      </ul>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-gray-400 mt-1" />
                      <ul className="text-sm text-gray-600">
                        {doc.memberships.map((m, i) => <li key={i}>{m}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
