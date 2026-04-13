import React, { useState } from 'react';
import LeadsForm from '../forms/LeadsForm';
import { motion } from 'framer-motion';

const Franchise = () => {
  const [showForm, setShowForm] = useState(false);

  const offerings = [
    { title: 'Location Analysis', desc: 'Detailed site evaluation, footfall study, and demand analysis.', icon: '📍' },
    { title: 'Competitor Analysis', desc: 'In-depth study of nearby fitness centers to outperform local competition.', icon: '📊' },
    { title: 'Premium Equipment', desc: 'Supply of high-quality multi-gym brand equipment tailored to space.', icon: '🏋️' },
    { title: 'Budget Planning', desc: 'Complete investment breakdown and optimized budget allocation.', icon: '💰' },
    { title: 'Staff Management', desc: 'Support in hiring skilled trainers and performance strategies.', icon: '👨‍🏫' },
    { title: 'Management Software', desc: 'Complete CRM and gym management system for tracking performance.', icon: '💻' },
    { title: 'Marketing Support', desc: 'Pre-launch and post-launch digital and local marketing strategies.', icon: '📣' },
    { title: 'Finance Support', desc: 'Assistance in loan approvals and flexible financing options.', icon: '🏦' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/franchise-bg.png')" }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold uppercase mb-6 tracking-tight"
          >
            Franchise <span className="text-yellow-500">Offering</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            VeFit.in is a one-stop solution for aspiring gym owners and fitness entrepreneurs. We provide end-to-end solutions for setting up and scaling successful multi-gym businesses.
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-yellow-500 text-gray-900 uppercase font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition-all shadow-xl hover:scale-105"
          >
            Start Your Business
          </button>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-gray-900">Complete <span className="text-yellow-500">Business</span> Solution</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            We handle everything from location analysis to marketing support, ensuring your fitness venture is profitable and scalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-yellow-500/50 transition-all group shadow-sm hover:shadow-xl"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase">{item.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8 text-gray-900">Why Choose <span className="text-yellow-500">VeFit.in</span></h2>
              <ul className="space-y-6">
                <li className="flex items-center text-lg text-gray-600">
                  <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</span>
                  End-to-end franchise support
                </li>
                <li className="flex items-center text-lg text-gray-600">
                  <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</span>
                  Proven business model for maximum ROI
                </li>
                <li className="flex items-center text-lg text-gray-600">
                  <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</span>
                  Strong industry network & brand reputation
                </li>
                <li className="flex items-center text-lg text-gray-600">
                  <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">✓</span>
                  Focus on long-term profitability and scalability
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="p-8 bg-gray-900 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to expand?</h3>
                <p className="text-gray-400 mb-8 font-light">Join the VeFit network and transform the fitness industry in your city.</p>
                <button 
                  onClick={() => setShowForm(true)}
                  className="w-full bg-yellow-500 text-gray-900 uppercase font-bold py-4 rounded-xl hover:bg-yellow-400 transition-all shadow-lg"
                >
                  Contact Franchise Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <LeadsForm 
          title="Franchise Opportunity" 
          onClose={() => setShowForm(false)} 
        />
      )}
    </div>
  );
};

export default Franchise;
