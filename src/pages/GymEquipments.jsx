import React, { useState } from 'react';
import LeadsForm from '../forms/LeadsForm';
import { motion } from 'framer-motion';

const GymEquipments = () => {
  const [showForm, setShowForm] = useState(false);

  const brands = [
    { name: 'Vefit Equipment', logo: '/images/brands/vefit-equipment-logo.png' },
    { name: 'Aerofit', logo: '/images/brands/aerofit-logo.jpg' },
    { name: 'Maxfit', logo: '/images/brands/maxfit-logo.png' },
    { name: 'Realleader USA', logo: '/images/brands/realleader-logo.png' },
    { name: 'Jerai Fitness', logo: '/images/brands/jerai-logo.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/gym-equipment-bg.png')" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold uppercase mb-6 tracking-tight"
          >
            Gym <span className="text-yellow-500">Equipment</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            From providing high-quality equipment to offering complete franchise support—we handle everything you need to succeed.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-yellow-500 text-gray-900 uppercase font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition-all shadow-xl hover:scale-105"
          >
            Request Catalog
          </button>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-gray-900">Partner <span className="text-yellow-500">Brands</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light mb-16">
          We collaborate with multiple leading global brands to bring you the best-in-class fitness hardware.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col items-center justify-center hover:bg-white hover:shadow-2xl hover:border-yellow-500/30 transition-all group aspect-square lg:aspect-auto lg:h-48"
            >
              <div className="w-full h-full flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider group-hover:text-yellow-600 transition-colors text-center">{brand.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 italic font-light text-2xl md:text-3xl leading-relaxed text-gray-700">
            "At VeFit.in, we don’t just support businesses — we build <span className="text-yellow-500 font-bold not-italic">fitness brands</span>."
          </div>
          <p className="mt-12 text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            We offer financial assistance to make your fitness dream more accessible. Whether it's business strategies or marketing guidance, we are your partner in success.
          </p>
          <motion.button
            onClick={() => setShowForm(true)}
            animate={{
              scale: [1, 1.05, 1],
              backgroundColor: ["#111827", "#2b4a7d", "#111827"]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
            className="mt-10 bg-gray-900 text-white uppercase font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            Enquire for Equipment
          </motion.button>
        </div>
      </section>

      {showForm && (
        <LeadsForm
          title="Gym Equipment Inquiry"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default GymEquipments;
