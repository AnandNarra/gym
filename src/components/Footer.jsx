import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#0d1525] pt-24 pb-12 text-gray-400 overflow-hidden">
      {/* Decorative Branding Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-800 pb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-flex flex-col">
              <div className="text-4xl font-black tracking-tighter leading-none">
                <span className="text-white">vefit</span><span className="text-[#6ec344]">.in</span>
              </div>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mt-1 ml-1">The Fitness Hub</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Transform your lifestyle with our science-driven training and nutrition ecosystems. Elevating fitness across India through expert coaching and premium equipment.
            </p>
            <div className="flex space-x-4 pt-2">
              {[FaFacebook, FaInstagram, FaTwitter, FaYoutube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-12">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Our Ecosystem</h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: 'Pink Angel', path: '/pink-angels' },
                { name: 'Training Programs', path: '/training' },
                { name: 'Nutrition Plans', path: '/nutrition' },
                { name: 'Gym Equipment', path: '/gym-equipments' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white hover:translate-x-1 transition-all inline-block">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:ml-8">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Support</h3>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: 'Success Story', path: '/success-story' },
                { name: 'Franchise Offering', path: '/franchise' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Join Now', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-white hover:translate-x-1 transition-all inline-block">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-sm">
                <FaMapMarkerAlt className="mt-1 text-[#6ec344] flex-shrink-0" />
                <span>Kondapur, Hyderabad, Telangana 500084</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <FaPhone className="text-[#6ec344] flex-shrink-0" />
                <span>+91 95155 67932</span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <FaEnvelope className="text-[#6ec344] flex-shrink-0" />
                <span>info@vefit.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-semibold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} VE FIT INDIA. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
