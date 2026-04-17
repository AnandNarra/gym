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
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-7xl md:text-9xl font-black mb-2 tracking-tighter leading-none"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{ color: '#2b4a7d' }}>vefit</span><span style={{ color: '#6ec344' }}>.in</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl text-white/90 mb-6 font-medium tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Training. Gym equipment. Supplements.
        </motion.p>

        <motion.p
          className="text-lg md:text-2xl text-yellow-500 mb-10 font-bold uppercase tracking-[0.2em]"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Available Online and Offline Training
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
