import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const SuccessStory = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title="Success Story" 
        description="The journey of veFit.in – From a passionate trainer to a scalable fitness ecosystem. Read our founder's story." 
      />
      
      {/* Hero Header */}
      <section className="bg-gray-900 py-20 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight mb-4"
          >
            Our <span className="text-yellow-500">Success Story</span>
          </motion.h1>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            The evolution of veFit.in from a passion project to India's growing fitness network.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Side Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 sticky top-32"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
              <img 
                src="/images/founder.png" 
                alt="Founder of veFit.in" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-8 p-6 bg-yellow-500 rounded-2xl text-gray-900">
              <h3 className="text-xl font-bold uppercase mb-2">Since 2011</h3>
              <p className="text-sm font-medium">Over a decade of fitness expertise and transformation.</p>
            </div>
          </motion.div>

          {/* Detailed Story */}
          <div className="lg:w-2/3 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg text-gray-600 font-light leading-relaxed max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">The Beginning</h2>
              <p className="mb-6">
                In 2011, the journey began with a simple passion — <strong>fitness</strong>.
              </p>
              <p className="mb-8">
                As a certified fitness trainer, I stepped into the industry with a strong desire to transform lives through health and discipline. Working across multiple gyms over the years, I didn’t just train clients — I studied the ecosystem deeply. From training methodologies and equipment usage to understanding customer behavior and gym operations, every day was a learning experience.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">Building veFit.in</h2>
              <p className="mb-6">
                The journey from trainer to entrepreneur wasn’t easy, but it was driven by clarity and experience. In the last 5 years, we have achieved significant milestones that have shaped our identity:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mb-8">
                <li className="flex items-center bg-gray-50 p-4 rounded-xl border-l-4 border-yellow-500">
                  <span className="font-bold text-gray-900">3 Successfully Owned Gyms</span>
                </li>
                <li className="flex items-center bg-gray-50 p-4 rounded-xl border-l-4 border-yellow-500">
                  <span className="font-bold text-gray-900">7+ Managed Partner Gyms</span>
                </li>
                <li className="flex items-center bg-gray-50 p-4 rounded-xl border-l-4 border-yellow-500">
                  <span className="font-bold text-gray-900">Built Robust Team of Trainers</span>
                </li>
                <li className="flex items-center bg-gray-50 p-4 rounded-xl border-l-4 border-yellow-500">
                  <span className="font-bold text-gray-900">Structured Marketing Growth</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 uppercase mb-6">What Makes Us Different</h2>
              <div className="space-y-4 mb-8">
                {[
                  'Standardized training systems for consistent results',
                  'Professional trainer management and accountability',
                  'Data-driven marketing and growth strategies',
                  'A scalable gym business model built on experience'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-gray-100">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 uppercase">Vision</h3>
                  <p className="text-sm leading-relaxed">To build a network of high-quality fitness centers that deliver consistent results, empower trainers, and redefine how gyms operate in India.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 uppercase">Mission</h3>
                  <p className="text-sm leading-relaxed">To transform fitness businesses into structured, scalable, and profitable ventures — while helping people achieve their best physical selves.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStory;
