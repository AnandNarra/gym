import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Pink Angel', path: '/pink-angels' },
    { name: 'Training and Gyms', path: '/training' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Equipments', path: '/gym-equipments' },

    { name: 'Success Story', path: '/success-story' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col justify-center items-start md:items-center">
              <div className="text-xl md:text-3xl font-extrabold tracking-tight">
                <span style={{ color: '#2b4a7d' }}>vefit</span><span style={{ color: '#6ec344' }}>.in</span>
              </div>
              <span className="text-[7px] md:text-[10px] text-gray-500 font-medium mt-[-2px] whitespace-nowrap">Training. Gym equipment. Supplements.</span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-500 whitespace-nowrap ${location.pathname === link.path ? 'text-yellow-500' : 'text-gray-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-600 transition whitespace-nowrap"
            >
              Join Now
            </Link>
          </div>
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-semibold border-b border-gray-50 ${location.pathname === link.path
                  ? 'text-yellow-500 bg-gray-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-yellow-500 text-gray-900 text-center px-4 py-3 rounded-xl font-bold hover:bg-yellow-600 transition"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
