import React, { useState, useEffect } from 'react';
import { sendToWhatsApp } from '../utils/whatsapp';

const NutritionForm = ({ selectedPlan, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    height: '',
    weight: '',
    work: 'Student',
    marriage: 'Single',
    plan: selectedPlan || 'Weight Loss',
    phone: '',
  });

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan }));
    }
  }, [selectedPlan]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp(formData);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 overflow-y-auto backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl relative border border-gray-300 my-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase text-center">Plan Application</h2>
        <p className="text-yellow-500 text-center mb-8 font-medium">{formData.plan} Plan</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
              <input 
                type="text" name="name" required value={formData.name} onChange={handleChange} 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Age</label>
                <input 
                  type="number" name="age" required value={formData.age} onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Gender</label>
                <select 
                  name="gender" value={formData.gender} onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Height (cm/ft)</label>
                <input 
                  type="text" name="height" required value={formData.height} onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                  placeholder="175cm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Weight (kg/lbs)</label>
                <input 
                  type="text" name="weight" required value={formData.weight} onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                  placeholder="70kg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Work Style</label>
                <select 
                  name="work" value={formData.work} onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                >
                  <option>Student</option>
                  <option>Office</option>
                  <option>Physical Work</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Marriage Status</label>
                <select 
                  name="marriage" value={formData.marriage} onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
                >
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number (WhatsApp)</label>
              <input 
                type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                placeholder="+91 9999999999"
              />
            </div>
            
            <input type="hidden" name="plan" value={formData.plan} />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg py-4 rounded-lg uppercase shadow-lg transition-all transform hover:-translate-y-1 mt-6"
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default NutritionForm;
