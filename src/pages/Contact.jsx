import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { sendToWhatsApp } from '../utils/whatsapp';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "919959761403";
    const text = `New Contact Form Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/919959761403?text=${encodeURIComponent("Hi GymFitness, I have an inquiry.")}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      <SEO 
        title="Contact Us" 
        description="Get in touch with VeFit.in to start your fitness journey. We're here to help with training, nutrition, and gym business setup." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center uppercase mb-6 tracking-tight">
          <span className="text-yellow-500">Contact</span> Us
        </h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed">
          Questions or inquiries? Don't hesitate to reach out. Drop us a line or visit the gym to transform your life today.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Details */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow-2xl border border-gray-300 space-y-8">
            <h3 className="text-2xl font-bold uppercase text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500/20 p-4 rounded-full text-yellow-500 text-xl flex-shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Our Location</h4>
                <p className="text-gray-500 font-light">123 Fitness Street, Gym District, City, Country</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500/20 p-4 rounded-full text-yellow-500 text-xl flex-shrink-0">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Phone Number</h4>
                <p className="text-gray-500 font-light">+91 9959761403</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-500/20 p-4 rounded-full text-yellow-500 text-xl flex-shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Email Address</h4>
                <p className="text-gray-500 font-light">info@gymfitness.com</p>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-8 mt-8">
              <h4 className="text-gray-900 font-bold mb-4 uppercase">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white text-gray-600 p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"><FaFacebook size={20} /></a>
                <a href="#" className="bg-white text-gray-600 p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"><FaInstagram size={20} /></a>
                <a href="#" className="bg-white text-gray-600 p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"><FaTwitter size={20} /></a>
                <a href="#" className="bg-white text-gray-600 p-3 rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-colors"><FaYoutube size={20} /></a>
              </div>
            </div>
            
            <button 
              onClick={openWhatsApp}
              className="w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-gray-900 font-bold uppercase py-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <FaWhatsapp size={24} />
              <span>Chat on WhatsApp</span>
            </button>

          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-10 shadow-2xl border border-gray-300">
            <h3 className="text-2xl font-bold uppercase text-gray-900 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Full Name</label>
                <input 
                  type="text" name="name" required value={formData.name} onChange={handleChange} 
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
                  placeholder="Your Name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Phone Number</label>
                  <input 
                    type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
                    placeholder="WhatsApp Phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Email Address</label>
                  <input 
                    type="email" name="email" required value={formData.email} onChange={handleChange} 
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
                    placeholder="example@mail.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">Message</label>
                <textarea 
                  name="message" required value={formData.message} onChange={handleChange} rows="5"
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg py-4 rounded-lg uppercase shadow-lg transition-transform transform hover:-translate-y-1"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
        
        {/* Google Maps Location */}
        <div className="mt-16 w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-gray-300 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.694600109033!2d78.4350172!3d17.4080139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzI4LjkiTiA3OMKwMjYnMjkuNyJF!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Gym Location"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none rounded-2xl border border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
