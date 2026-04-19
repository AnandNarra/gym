import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Training = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SEO 
        title="Training" 
        description="Choose between personalized Home Training and comprehensive Online Coaching programs designed to fit your lifestyle." 
      />

      {/* Full-Width Featured Video Section */}
      <section className="w-full bg-black overflow-hidden group mb-12">
        <div className="w-full aspect-video md:aspect-[21/9] relative">
          <video 
            src="/videos/training-video-v2.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </section>

      <div id="training-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border border-gray-200"
            style={{ backgroundImage: "url('/images/home-training.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/50 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">Home Training</h2>
              <p className="text-gray-200 mb-8 font-light text-sm">Don't have time for the gym? We'll bring the training right to your doorstep.</p>
              <Link to="/home-training" className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105">Learn More</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border border-gray-200"
            style={{ backgroundImage: "url('/images/online-training.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/50 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">Online Training</h2>
              <p className="text-gray-200 mb-8 font-light text-sm">Get fit from anywhere in the world with our personal online training programs.</p>
              <Link to="/online-training" className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105">Learn More</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border border-gray-200"
            style={{ backgroundImage: "url('/images/nutrition-parent.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/50 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">Nutrition Plans</h2>
              <p className="text-gray-200 mb-8 font-light text-sm">Tailored diets for fat loss, muscle gain & health optimized for your body.</p>
              <Link to="/nutrition" className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Training;
