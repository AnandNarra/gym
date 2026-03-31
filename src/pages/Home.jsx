import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import PlanCard from '../components/PlanCard';
import Testimonial from '../components/Testimonial';
import NutritionForm from '../forms/NutritionForm';
import { FaDumbbell, FaUtensils, FaHeartbeat } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    { icon: <FaDumbbell />, title: 'Modern Equipment', description: 'State of the art gym equipment to help you hit your goals effectively.' },
    { icon: <FaUtensils />, title: 'Nutrition Plans', description: 'Personalized meal and nutrition plans by expert dietitians.' },
    { icon: <FaHeartbeat />, title: 'Expert Trainers', description: 'Certified professional trainers to guide you in every step.' },
  ];

  const plans = [
    { title: 'Weight Loss', img: '/images/weight-loss.png', desc: 'Shed pounds fast and build an aesthetic physique.', benefits: ['Fat loss program', 'Dietary guidance', 'Weekly tracking'] },
    { title: 'Weight Gain', img: '/images/weight-gain.png', desc: 'Build lean muscle mass and improve your overall strength.', benefits: ['Bulking nutrition', 'Hypertrophy guide', 'Form correction'] },
    { title: 'Maintenance', img: '/images/maintenance.png', desc: 'Maintain your physique while improving cardiovascular health.', benefits: ['Balanced lifestyle', 'Flexible dieting', 'Endurance training'] },
  ];

  return (
    <>
      <Hero />





      {/* CTA Sections (Online and Home Training) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group"
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
          className="relative py-24 px-10 text-center rounded-2xl bg-cover bg-center overflow-hidden shadow-2xl group"
          style={{ backgroundImage: "url('/images/online-training.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none group-hover:bg-black/50 transition duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold uppercase mb-4 text-white">Online Training</h2>
            <p className="text-gray-200 mb-8 font-light text-lg">Get fit from anywhere in the world with our personal online training programs.</p>
            <Link to="/online-training" className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block hover:scale-105">Learn More</Link>
          </div>
        </motion.div>

      </section>


      {/* Nutrition Plans */}
      <section className="py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4"><span className="text-yellow-500">Nutrition</span> Plans</h2>
            <p className="text-gray-500 font-light">Choose the best tailored nutrition program that fits your goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <PlanCard
                  {...plan}
                  onApply={(planTitle) => navigate('/nutrition', { state: { plan: planTitle } })}
                />
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4"><span className="text-yellow-500">Member</span> Stories</h2>
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
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6"><span className="text-yellow-500">About</span> Our Gym</h2>
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
