import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen bg-black overflow-hidden relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        style={{ filter: 'grayscale(20%)' }}
      >
        <source src="/videos/home-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-6xl md:text-9xl font-black text-white mb-4 uppercase tracking-tighter leading-none italic"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          VEFIT<span className="text-yellow-500">.IN</span>
        </motion.h1>
        <motion.p
          className="text-2xl md:text-4xl text-yellow-500 mb-4 font-black uppercase tracking-[0.2em] italic"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Training. Gym equipment. Supplements.
        </motion.p>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-widest uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Available Online and Offline
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 }}
        >
          <Link
            to="/contact"
            className="bg-yellow-500 text-gray-900 text-lg font-bold px-10 py-4 rounded-full uppercase shadow-lg hover:bg-yellow-400 hover:shadow-yellow-500/50 transition-all duration-300 transform hover:-translate-y-1 inline-block"
          >
            Join Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
