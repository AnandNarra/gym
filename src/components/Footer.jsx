import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="inline-block mb-4">
            <img src="/images/logo.png" alt="GymFitness Logo" className="h-[40px] w-auto max-w-[200px] object-contain" />
          </Link>
          <p className="text-sm">Transform your body and life with expert guidance, premium plans, and pure motivation. Join us today.</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link to="/nutrition" className="hover:text-yellow-500 transition">Nutrition Plans</Link></li>
            <li><Link to="/online-training" className="hover:text-yellow-500 transition">Online Training</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@gymfitness.com</li>
            <li>Phone: +91 9959761403</li>
            <li>Location: Your City, State</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500 text-xl transition"><FaFacebook /></a>
            <a href="#" className="hover:text-yellow-500 text-xl transition"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-500 text-xl transition"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-500 text-xl transition"><FaYoutube /></a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} GymFitness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
