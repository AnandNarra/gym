import React from 'react';

const PlanCard = ({ title, img, desc, benefits, onApply }) => {
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-300">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transition duration-500 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white uppercase tracking-wide">{title}</h3>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 mb-6 font-light">{desc}</p>
        <ul className="mb-8 space-y-3 flex-grow">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start text-sm text-gray-500">
              <span className="text-yellow-500 mr-2 font-bold">✓</span> {benefit}
            </li>
          ))}
        </ul>
        <button 
          onClick={() => onApply(title)}
          className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold rounded-lg uppercase shadow-md transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
