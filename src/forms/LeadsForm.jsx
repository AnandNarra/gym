import React, { useState } from 'react';
import { sendToWhatsApp } from '../utils/whatsapp';

const LeadsForm = ({ title, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    pincode: '',
    plan: title || 'Inquiry'
  });

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
        
        <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase text-center">Get Started</h2>
        <p className="text-yellow-500 text-center mb-8 font-medium">{title}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
              <input 
                type="text" name="name" required value={formData.name} onChange={handleChange} 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number (WhatsApp)</label>
              <input 
                type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                placeholder="+91 9999999999"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
              <input 
                type="email" name="email" required value={formData.email} onChange={handleChange} 
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                placeholder="example@gmail.com"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Location</label>
                <input 
                  type="text" name="location" required value={formData.location} onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                  placeholder="City/Area"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Pincode</label>
                <input 
                  type="text" name="pincode" required value={formData.pincode} onChange={handleChange} 
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all" 
                  placeholder="6-digit code"
                />
              </div>
            </div>
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

export default LeadsForm;
