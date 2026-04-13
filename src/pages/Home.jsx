import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import { FaDumbbell, FaUtensils, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { icon: <FaDumbbell />, title: 'Modern Equipment', description: 'State of the art gym equipment to help you hit your goals effectively.' },
    { icon: <FaUtensils />, title: 'Nutrition Plans', description: 'Personalized meal and nutrition plans by expert dietitians.' },
    { icon: <FaHeartbeat />, title: 'Expert Trainers', description: 'Certified professional trainers to guide you in every step.' },
  ];


  return (
    <>
      <SEO 
        title="Home" 
        description="VeFit.in is the ultimate fitness hub for premium gym training, personalized nutrition, and high-end gym equipment solutions." 
      />
      <Hero />





      {/* Main Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Training Parent Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative py-20 px-10 text-center rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl group cursor-pointer"
          style={{ backgroundImage: "url('/images/training-parent.png')" }}
          onClick={() => navigate('/training')}
        >
          <div className="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/40 transition duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-3xl mb-4 text-white tracking-wide">Training & <span className="italic">Nutrition</span></h2>
            <p className="text-gray-200 mb-8 font-light text-sm">Expert Home/Online training and scientific diet plans.</p>
            <span className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block group-hover:scale-105">View Plans</span>
          </div>
        </motion.div>

        {/* Franchise Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative py-20 px-10 text-center rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl group cursor-pointer"
          style={{ backgroundImage: "url('/images/franchise-bg.png')" }}
          onClick={() => navigate('/franchise')}
        >
          <div className="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/40 transition duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-3xl mb-4 text-white tracking-wide">Franchise <span className="italic">Offering</span></h2>
            <p className="text-gray-200 mb-8 font-light text-sm">End-to-end solutions for setting up and scaling your gym business.</p>
            <span className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block group-hover:scale-105">Learn More</span>
          </div>
        </motion.div>

        {/* Gym Equipment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative py-20 px-10 text-center rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl group cursor-pointer"
          style={{ backgroundImage: "url('/images/gym-equipment-bg.png')" }}
          onClick={() => navigate('/gym-equipments')}
        >
          <div className="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/40 transition duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-3xl mb-4 text-white tracking-wide">Gym <span className="italic text-yellow-500">Equipment</span></h2>
            <p className="text-gray-200 mb-8 font-light text-sm">High-quality multi-gym equipment from leading global brands.</p>
            <span className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block group-hover:scale-105">View Brands</span>
          </div>
        </motion.div>

      </section>



      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4"><span className="text-yellow-500 italic">Member</span> Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Testimonial
                name="Mark T."
                role="Weight Loss Program"
                review="I lost 15kg in 3 months! The dietary plan was easy to follow and the trainers are incredibly supportive."
                image="https://i.pravatar.cc/150?img=11"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Testimonial
                name="Sarah W."
                role="Online Training"
                review="Working remotely made it hard to hit the gym. Online training kept me accountable and in shape."
                image="https://i.pravatar.cc/150?img=5"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <Testimonial
                name="James D."
                role="Muscle Gain"
                review="The hypertrophy program completely changed my physique. Went from 65kg to 78kg lean muscle."
                image="https://i.pravatar.cc/150?img=12"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>



      {/* About Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6"><span className="text-yellow-500 italic">About</span> Our Gym</h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Welcome to vefit.in, the premier location for fitness enthusiasts. We provide an encouraging community, professional coaches,
            and tailored programs to help you transform your lifestyle. Experience the best workout environment with world-class facilities.
          </p>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


    </>
  );
};

export default Home;
