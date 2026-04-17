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


      {/* Pink Angels Video Showcase Section */}
      <section className="relative h-[90vh] bg-black overflow-hidden group">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 transition-opacity duration-1000 group-hover:opacity-70"
        >
          <source src="/videos/pink-angels-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>

        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" font-bold tracking-[0.4em] uppercase text-lg md:text-xl mb-4"
          >
            <span className="text-white">Women's</span>
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none mb-6"
          >
            <span className="text-pink-500"> PINK ANGEL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto font-serif italic"
          >
            "Transforming lives through personalized fitness, nutrition, and expert guidance tailored for the female body."
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <button
              onClick={() => navigate('/pink-angels')}
              className="bg-pink-600 text-white px-12 py-4 rounded-full font-black text-xl uppercase tracking-widest hover:bg-pink-700 transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              Explore More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Pink Angels Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative py-20 px-10 text-center rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl group cursor-pointer"
          style={{ backgroundImage: "url('/images/pink-angels-bg.webp')" }}
          onClick={() => navigate('/pink-angels')}
        >
          <div className="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/40 transition duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold uppercase mb-4 text-white tracking-wider">Pink Angels</h2>
            <p className="text-gray-200 mb-8 font-light text-sm">Specialized fitness training for women's health & pregnancy.</p>
            <span className="bg-pink-500 text-white uppercase font-bold py-3 px-8 rounded-full hover:bg-pink-400 transition-all shadow-lg inline-block group-hover:scale-105">View Plans</span>
          </div>
        </motion.div>

        {/* Training Parent Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative py-20 px-4 text-center rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl group cursor-pointer"
          style={{ backgroundImage: "url('/images/training-nutrition-v2.jpg')" }}
          onClick={() => navigate('/training')}
        >
          <div className="absolute inset-0 bg-black/50 z-0 group-hover:bg-black/30 transition duration-500"></div>
          <div className="relative z-10">
            <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-xs mb-2 block">Men's & Women's</span>
            <h2 className="text-3xl font-bold uppercase mb-4 text-white tracking-wider">Training & Nutrition</h2>
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
            <h2 className="text-3xl font-bold uppercase mb-4 text-white tracking-wider">Franchise Offering</h2>
            <p className="text-gray-200 mb-8 font-light text-sm">End-to-end solutions for setting up and scaling your gym business.</p>
            <span className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block group-hover:scale-105">Learn More</span>
          </div>
        </motion.div>

        {/* Gym Equipment Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative py-20 px-10 text-center rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl group cursor-pointer"
          style={{ backgroundImage: "url('/images/gym-equipment-bg.png')" }}
          onClick={() => navigate('/gym-equipments')}
        >
          <div className="absolute inset-0 bg-black/60 z-0 group-hover:bg-black/40 transition duration-500"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold uppercase mb-4 text-white tracking-wider">Gym Equipment</h2>
            <p className="text-gray-200 mb-8 font-light text-sm">High-quality multi-gym equipment from leading global brands.</p>
            <span className="bg-yellow-500 text-gray-900 uppercase font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-all shadow-lg inline-block group-hover:scale-105">View Brands</span>
          </div>
        </motion.div>

      </section>

      {/* Founder Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-yellow-500/10 rounded-3xl -rotate-3 z-0"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/images/founder.png"
                  alt="Mahesh Kagithala - Founder of veFit.in"
                  className="w-full h-auto object-cover transform hover:scale-105 transition duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white text-center z-20">
                  <div className="text-xl font-bold uppercase tracking-widest leading-none mb-1 text-white">Mahesh Kagithala</div>
                  <div className="text-yellow-500 text-[10px] uppercase font-bold tracking-[0.4em]">Founder</div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <div>
                <span className="text-yellow-600 uppercase tracking-widest text-sm font-bold mb-2 block">Our Roots</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase text-gray-900 leading-tight">
                  Founder Story – <span className="text-yellow-500">veFit.in</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  In 2011, the journey began with a simple passion — <span className="font-bold text-gray-900 uppercase">fitness</span>.
                </p>
                <p>
                  As a certified fitness trainer, I stepped into the industry with a strong desire to transform lives through health and discipline. Working across multiple gyms over the years, I didn’t just train clients — I studied the ecosystem deeply.
                </p>

                <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-yellow-500 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">Building veFit.in</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium uppercase text-gray-700">
                    <div className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span> 3 Owned Gyms Established</div>
                    <div className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span> 7+ Managed Partner Gyms</div>
                    <div className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span> Lead Creative Teams</div>
                    <div className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span> Managed Operations</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-3">
                    <h4 className="text-yellow-600 font-bold uppercase text-sm tracking-widest">Our Vision</h4>
                    <p className="text-sm leading-6">To build a network of high-quality fitness centers that deliver consistent results and redefine gym operations in India.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-yellow-600 font-bold uppercase text-sm tracking-widest">Our Mission</h4>
                    <p className="text-sm leading-6">To transform fitness businesses into structured, scalable, and profitable ventures while helping people achieve their best selves.</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    to="/success-story"
                    className="inline-block bg-yellow-500 text-gray-900 uppercase font-bold py-4 px-10 rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:scale-105"
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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
