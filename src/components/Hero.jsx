import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const images = [
    '/images/hero-bg.png',
    '/images/about-gym.png',
    '/images/testimonial-bg.png'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen bg-black overflow-hidden relative">
      <ThreeBackground />
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImage ? 'opacity-30 z-0' : 'opacity-0 -z-10'
            }`}
          style={{ backgroundImage: `url('${img}')`, filter: 'grayscale(50%)' }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transform Your Body, <br className="hidden md:block" />
          <span className="text-yellow-500">Transform Your Life</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Push your limits, break your boundaries, and achieve your fitness goals with expert guidance and a supportive community.
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
