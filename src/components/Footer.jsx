import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 mt-16 text-gray-300" style={{ backgroundColor: '#2b4a7d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="inline-flex flex-col justify-center items-start mb-4">
            <div className="text-3xl font-extrabold tracking-tight">
              <span className="text-white">vefit</span><span style={{ color: '#6ec344' }}>.in</span>
            </div>
            <span className="text-[10px] text-gray-300 font-medium mt-[-2px]">Gyms. Fit meals. Gym supplements.</span>
          </Link>
          <p className="text-sm">Transform your body and life with expert guidance, premium plans, and pure motivation. Join us today.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#6ec344] transition">Home</Link></li>
            <li><Link to="/nutrition" className="hover:text-[#6ec344] transition">Nutrition Plans</Link></li>
            <li><Link to="/online-training" className="hover:text-[#6ec344] transition">Online Training</Link></li>
            <li><Link to="/contact" className="hover:text-[#6ec344] transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@vefit.in</li>
            <li>Phone: +919515567932</li>
            <li>Location: AMB Mall, Asian sun city, B 401, beside Sarath City Capital Mall, Kondapur, Hyderabad, Telangana 500084</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-[#6ec344] text-xl transition"><FaFacebook /></a>
            <a href="#" className="hover:text-[#6ec344] text-xl transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#6ec344] text-xl transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#6ec344] text-xl transition"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/20 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} vefit.in. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
