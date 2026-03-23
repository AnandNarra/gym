import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-2xl text-center transform hover:-translate-y-2 transition-all duration-300 shadow-xl border border-gray-300 hover:border-yellow-500/50 flex flex-col items-center group">
      <div className="text-yellow-500 mb-6 text-5xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">{title}</h3>
      <p className="text-gray-500 font-light leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;
