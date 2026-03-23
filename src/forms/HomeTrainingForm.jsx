import React, { useState } from 'react';
import { sendToWhatsApp } from '../utils/whatsapp';

const HomeTrainingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    location: '',
    preferredTime: '',
    goal: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp(formData);
  };

  return (
    <div className="bg-gray-50 rounded-2xl w-full max-w-2xl mx-auto p-10 shadow-2xl border border-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase text-center tracking-wide">Join Home Training</h2>
      <p className="text-gray-500 text-center mb-10 font-light">Fill out your details to get started with our home training program.</p>
        
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Full Name</label>
            <input 
              type="text" name="name" required value={formData.name} onChange={handleChange} 
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Phone Number</label>
            <input 
              type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
              placeholder="WhatsApp Number"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">Address</label>
          <input 
            type="text" name="address" required value={formData.address} onChange={handleChange} 
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
            placeholder="Street Address, Appt / Flat"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">City</label>
            <input 
              type="text" name="city" required value={formData.city} onChange={handleChange} 
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
              placeholder="Your City"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Location/Area Pin</label>
            <input 
              type="text" name="location" required value={formData.location} onChange={handleChange} 
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light" 
              placeholder="Area code or Landmark"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Preferred Training Time</label>
            <select 
              name="preferredTime" value={formData.preferredTime} onChange={handleChange} required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light"
            >
              <option value="" disabled>Select Time</option>
              <option value="Morning (5 AM - 9 AM)">Morning (5 AM - 9 AM)</option>
              <option value="Noon (12 PM - 3 PM)">Noon (12 PM - 3 PM)</option>
              <option value="Evening (5 PM - 9 PM)">Evening (5 PM - 9 PM)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Training Goal</label>
            <select 
              name="goal" value={formData.goal} onChange={handleChange} required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all font-light"
            >
              <option value="" disabled>Select Goal</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="General Fitness">General Fitness</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-lg py-4 rounded-lg uppercase shadow-lg transition-all transform hover:-translate-y-1 mt-8"
        >
          Submit via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default HomeTrainingForm;
