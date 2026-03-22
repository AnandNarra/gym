import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-50 z-0' : 'opacity-0 -z-10'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
          Transform Your Body, <br className="hidden md:block" />
          <span className="text-yellow-500">Transform Your Life</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
          Push your limits, break your boundaries, and achieve your fitness goals with expert guidance and a supportive community.
        </p>
        <Link 
          to="/contact" 
          className="bg-yellow-500 text-gray-900 text-lg font-bold px-10 py-4 rounded-full uppercase shadow-lg hover:bg-yellow-400 hover:shadow-yellow-500/50 transition-all duration-300 transform hover:-translate-y-1"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
