import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const TrainingPrograms = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pb-20">
      <SEO
        title="Training Programs"
        description="Choose from our range of personalized training and nutrition programs."
      />

      {/* Full-Width Featured Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] bg-black overflow-hidden group">
        <img
          src="/images/training-hero.png"
          alt="Training Programs"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-80 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </section>

      <div id="training-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative py-16 px-8 text-center rounded-[2rem] bg-cover bg-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
            style={{ backgroundImage: "url('/images/home-training.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/40 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase mb-3 text-white tracking-tight whitespace-nowrap">Home Training</h2>
              <p className="text-gray-200 mb-8 font-light text-xs md:text-sm max-w-[200px] mx-auto leading-relaxed">Don't have time for the gym? We'll bring the training right to your doorstep.</p>
              <Link to="/home-training" className="bg-[#f1b407] text-gray-900 uppercase font-extrabold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105 active:scale-95 text-xs md:text-sm">LEARN MORE</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative py-16 px-8 text-center rounded-[2rem] bg-cover bg-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
            style={{ backgroundImage: "url('/images/online-training.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/40 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase mb-3 text-white tracking-tight whitespace-nowrap">Online Training</h2>
              <p className="text-gray-200 mb-8 font-light text-xs md:text-sm max-w-[200px] mx-auto leading-relaxed">Get fit from anywhere in the world with our personal online training programs.</p>
              <Link to="/online-training" className="bg-[#f1b407] text-gray-900 uppercase font-extrabold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105 active:scale-95 text-xs md:text-sm">LEARN MORE</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative py-16 px-8 text-center rounded-[2rem] bg-cover bg-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
            style={{ backgroundImage: "url('/images/nutrition-parent.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/40 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase mb-3 text-white tracking-tight whitespace-nowrap">Nutrition Plans</h2>
              <p className="text-gray-200 mb-8 font-light text-xs md:text-sm max-w-[200px] mx-auto leading-relaxed">Tailored diets for fat loss, muscle gain & health optimized for your body.</p>
              <Link to="/nutrition" className="bg-[#f1b407] text-gray-900 uppercase font-extrabold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105 active:scale-95 text-xs md:text-sm">LEARN MORE</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;
