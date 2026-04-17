import React, { useState } from 'react';
import LeadsForm from '../forms/LeadsForm';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';

const Franchise = () => {
  const [showForm, setShowForm] = useState(false);

  const offerings = [
    { title: 'Location Analysis', desc: 'Detailed site evaluation, footfall study, and demand analysis.', icon: '📍', image: '/images/location_analysis_bg_1776105514202.png' },
    { title: 'Competitor Analysis', desc: 'In-depth study of nearby fitness centers to outperform local competition.', icon: '📊', image: '/images/competitor_analysis_bg_1776105534814.png' },
    { title: 'Premium Equipment', desc: 'Supply of high-quality multi-gym brand equipment tailored to space.', icon: '🏋️', image: '/images/premium_equipment_bg_1776105553971.png' },
    { title: 'Budget Planning', desc: 'Complete investment breakdown and optimized budget allocation.', icon: '💰', image: '/images/budget_planning_bg_1776105567003.png' },
    { title: 'Staff Management', desc: 'Support in hiring skilled trainers and performance strategies.', icon: '👨‍🏫', image: '/images/staff_management_bg_1776105583245.png' },
    { title: 'Management Software', desc: 'Complete CRM and gym management system for tracking performance.', icon: '💻', image: '/images/management_software_bg_1776105598567.png' },
    { title: 'Marketing Support', desc: 'Pre-launch and post-launch digital and local marketing strategies.', icon: '📣', image: '/images/marketing_support_bg_1776105616553.png' },
    { title: 'Finance Support', desc: 'Assistance in loan approvals and flexible financing options.', icon: '🏦', image: '/images/finance_support_bg_1776105633732.png' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Franchise Opportunity"
        description="Launch a profitable fitness business with VeFit.in. We offer location analysis, equipment supply, and complete marketing support."
      />



      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/franchise-bg.png')" }}></div>
        <div className="relative z-10 max-w-none mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <span className="text-yellow-500 uppercase tracking-[0.3em] text-sm font-semibold mb-6 drop-shadow-sm">
              The VeFit Advantage
            </span>
            <p className="text-white text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase italic leading-none">
              Own Your Gym. <br className="md:hidden" />
              <span className="text-yellow-500">Own Your Future.</span>
            </p>
            <h1
              className="text-2xl md:text-3xl font-bold uppercase mb-8 tracking-widest text-gray-300"
            >
              Franchise <span className="text-yellow-500">Offering</span>
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mb-8 rounded-full"></div>

            <button
              onClick={() => setShowForm(true)}
              className="bg-yellow-500 text-gray-900 uppercase font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition-all shadow-xl hover:scale-105"
            >
              Start Your Business
            </button>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-gray-900">
            Complete <span className="text-yellow-500">Business</span> Solution
          </h2>
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
              className="relative h-64 rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-gray-100"
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-0"></div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                <div className="text-3xl mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                <p className="text-gray-300 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase mb-8 text-gray-900">
                Why Choose <span className="text-yellow-500">VeFit.in</span>
              </h2>
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
