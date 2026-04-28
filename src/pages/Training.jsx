import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Training = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden pb-20">
      <SEO
        title="Training"
        description="Choose between personalized Home Training and comprehensive Online Coaching programs designed to fit your lifestyle."
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Gym's Card - First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border border-gray-200"
            style={{ backgroundImage: "url('/images/training-hero.png')" }}
          >
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none group-hover:bg-black/60 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">Gym's</h2>
              <p className="text-gray-200 mb-8 font-light text-sm">
                Our collaborator gyms are coming soon. Stay tuned for premium fitness locations.
              </p>
              <span className="bg-gray-500 text-white uppercase font-bold py-3 px-8 rounded-full cursor-not-allowed inline-block">Coming Soon</span>
            </div>
          </motion.div>

          {/* Trainers Card - Second */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border border-gray-200"
            style={{ backgroundImage: "url('/images/workout.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none group-hover:bg-black/50 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">Trainers</h2>
              <p className="text-gray-200 mb-8 font-light text-sm">
                Access our network of expert collaborator trainers. View certified professionals soon.
              </p>
              <span className="bg-gray-500 text-white uppercase font-bold py-3 px-8 rounded-full cursor-not-allowed inline-block">Coming Soon</span>
            </div>
          </motion.div>

          {/* Training Card - Last */}
          <Link
            to="/training-programs"
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border-2 border-yellow-500/50 cursor-pointer hover:border-yellow-500 transition-all block"
            style={{ backgroundImage: "url('/images/home-training.png')" }}
          >
            <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none group-hover:bg-black/60 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-white">Training</h2>
              <p className="text-gray-200 mb-8 font-light text-sm">
                Explore our personalized Home Training, Online Coaching, and Nutrition Plans.
              </p>
              <span className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105">
                Show Details
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Training;
