import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = ({ name, role, review, image }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-xl relative mt-10 border border-gray-300">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <img 
          src={image} 
          alt={name} 
          className="w-20 h-20 rounded-full border-4 border-gray-100 object-cover" 
        />
      </div>
      <FaQuoteLeft className="text-yellow-500/20 text-4xl mb-6 mx-auto mt-6" />
      <p className="text-gray-600 italic text-center mb-6 font-light">{review}</p>
      <div className="text-center mt-auto">
        <h4 className="text-xl font-bold text-gray-900 uppercase">{name}</h4>
        <p className="text-yellow-500 text-sm">{role}</p>
      </div>
    </div>
  );
};

export default Testimonial;
