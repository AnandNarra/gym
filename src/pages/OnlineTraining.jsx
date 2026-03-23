import React, { useState } from 'react';
import NutritionForm from '../forms/NutritionForm';

const OnlineTraining = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const programs = [
    { title: 'Personal Online Training', desc: '1-on-1 coaching customized completely to your body and goals.', price: 'Rs. 99 / month' },
    { title: 'Monthly Training Program', desc: 'A standardized workout program updated every month to keep you progressing.', price: 'Rs. 49 / month' },
    { title: 'Diet + Workout Plan', desc: 'Comprehensive package combining both fitness and nutrition tailored to you.', price: 'Rs. 129 / month' },
    { title: 'Video Call Training', desc: 'Real-time video call sessions with our top trainers to correct your form.', price: 'Rs. 199 / month' },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center uppercase mb-6 tracking-tight">
          <span className="text-yellow-500">Online</span> Training
        </h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg font-light">
          Get access to elite trainers no matter where you live. Our online coaching brings the gym directly to your phone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-300 shadow-xl hover:-translate-y-2 hover:border-yellow-500/50 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">{program.title}</h3>
              <p className="text-gray-500 font-light mb-8 flex-grow">{program.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-yellow-500">{program.price.split(' ')[0]}</span>
                <span className="text-gray-500 text-sm"> {program.price.split(' ').slice(1).join(' ')}</span>
              </div>
              <button 
                onClick={() => setSelectedPlan(program.title)}
                className="w-full bg-yellow-500 text-gray-900 uppercase font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
              >
                Join Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <NutritionForm 
          selectedPlan={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
        />
      )}
    </div>
  );
};

export default OnlineTraining;
