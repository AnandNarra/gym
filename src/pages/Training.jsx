import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Training = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 uppercase mb-4 tracking-tight">
            Our <span className="text-yellow-500">Training</span> Programs
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Whether you prefer the comfort of your home or the flexibility of online coaching, we have the perfect training solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border border-gray-200"
            style={{ backgroundImage: "url('/images/home-training.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/50 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold uppercase mb-4 text-white">Home Training</h2>
              <p className="text-gray-200 mb-8 font-light text-lg">Don't have time for the gym? We'll bring the training right to your doorstep.</p>
              <Link to="/home-training" className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105">Learn More</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group border border-gray-200"
            style={{ backgroundImage: "url('/images/online-training.png')" }}
          >
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/50 transition duration-500"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold uppercase mb-4 text-white">Online Training</h2>
              <p className="text-gray-200 mb-8 font-light text-lg">Get fit from anywhere in the world with our personal online training programs.</p>
              <Link to="/online-training" className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105">Learn More</Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Training;
