import React from 'react';
import HomeTrainingForm from '../forms/HomeTrainingForm';
import SEO from '../components/SEO';

const HomeTraining = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      <SEO 
        title="Home Training" 
        description="Transform your living room into your personal gym. Expert trainers come to you for convenient, professional coaching." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center uppercase mb-6 tracking-tight">
          <span className="text-yellow-500">Home</span> Training
        </h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed">
          Transform your living room into your personal gym. Expert trainers come to you, bringing all the expertise required to push your limits at the convenience of your home.
        </p>

        <HomeTrainingForm />
      </div>
    </div>
  );
};

export default HomeTraining;
