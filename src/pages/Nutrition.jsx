import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PlanCard from '../components/PlanCard';
import NutritionForm from '../forms/NutritionForm';
import SEO from '../components/SEO';

const Nutrition = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.plan) {
      setSelectedPlan(location.state.plan);
    }
  }, [location]);

  const plans = [
    { title: 'Weight Loss', img: '/images/weight-loss.png', desc: 'A proven strategy focusing on caloric deficit while preserving muscle.', benefits: ['Fat loss program', 'Dietary guidance', 'Weekly tracking'] },
    { title: 'Weight Gain', img: '/images/weight-gain.png', desc: 'Structured diet plan for putting on clean muscle mass efficiently.', benefits: ['Bulking nutrition', 'Hypertrophy guide', 'Form correction'] },
    { title: 'Maintenance', img: '/images/maintenance.png', desc: 'Optimal strategy to sustain your physique while optimizing health and performance.', benefits: ['Balanced lifestyle', 'Flexible dieting', 'Endurance training'] },
  ];

  return (
    <div className="min-h-screen bg-white pt-20 pb-20">
      <SEO 
        title="Nutrition Plans" 
        description="Unlock your maximum potential with our personalized nutrition programs tailored specially to match your unique fitness goals." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center uppercase mb-6 tracking-tight">
          <span className="text-yellow-500">Nutrition</span> Plans
        </h1>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-16 text-lg font-light">
          Unlock your maximum potential with our personalized nutrition programs tailored specially to match your unique fitness goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <PlanCard 
              key={index} 
              {...plan} 
              onApply={(title) => setSelectedPlan(title)} 
            />
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

export default Nutrition;
