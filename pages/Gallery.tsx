
import React from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Smile Transformation Gallery</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Real patients, real results. See how we've helped others regain their confidence with a healthy smile.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        {GALLERY.map(item => (
          <div key={item.id} className="space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="relative">
                    <img src={item.beforeImage} alt="Before" className="rounded-2xl w-full" />
                    <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded-md text-[10px] uppercase font-bold backdrop-blur-sm">Before</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <img src={item.afterImage} alt="After" className="rounded-2xl w-full" />
                    <span className="absolute bottom-2 left-2 bg-medical-primary/70 text-white px-2 py-1 rounded-md text-[10px] uppercase font-bold backdrop-blur-sm">After</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4">
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm mt-2">Achieved through professional dental whitening and minor orthodontic adjustment.</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-medical-blue p-12 rounded-[3rem] text-center">
          <h2 className="text-2xl font-bold mb-4">Start your own journey today</h2>
          <p className="text-gray-600 mb-8">Click below to book your consultation and get a digital preview of your future smile.</p>
          <a href="#/book" className="bg-medical-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-block">Book My Consultation</a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
