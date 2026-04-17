import React, { useState } from 'react';
import { sendToWhatsApp } from '../utils/whatsapp';

const PlanApplicationForm = ({ title, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Female',
    height: '',
    weight: '',
    work: '',
    marriage: 'Single',
    phone: '',
    plan: title || 'Diet + Workout Plan'
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-4 backdrop-blur-sm overflow-y-auto">
      <div className="bg-[#f2f2f2] rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative my-auto">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-800 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-1 uppercase text-center tracking-tighter">PLAN APPLICATION</h2>
        <p className="text-[#d97706] text-center mb-6 font-bold uppercase tracking-widest text-xs">{formData.plan}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" name="name" required value={formData.name} onChange={handleChange} 
                className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm" 
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Age</label>
                <input 
                  type="number" name="age" required value={formData.age} onChange={handleChange} 
                  className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm" 
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Gender</label>
                <select 
                   name="gender" value={formData.gender} onChange={handleChange}
                   className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm"
                >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Height (cm/ft)</label>
                <input 
                  type="text" name="height" required value={formData.height} onChange={handleChange} 
                  className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm" 
                  placeholder="175cm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Weight (kg/lbs)</label>
                <input 
                  type="text" name="weight" required value={formData.weight} onChange={handleChange} 
                  className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm" 
                  placeholder="70kg"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Work Style</label>
                <select 
                   name="work" required value={formData.work} onChange={handleChange}
                   className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm"
                >
                    <option value="">Select Option</option>
                    <option value="Student">Student</option>
                    <option value="Professional">Professional</option>
                    <option value="Home Maker">Home Maker</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Business">Business</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Marriage Status</label>
                <select 
                   name="marriage" value={formData.marriage} onChange={handleChange}
                   className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm"
                >
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number (WhatsApp)</label>
              <input 
                type="tel" name="phone" required value={formData.phone} onChange={handleChange} 
                className="w-full bg-[#e5e5e5] border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d97706] transition-all text-sm" 
                placeholder="+91 9999999999"
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#d97706] hover:bg-[#b45309] text-black font-black text-lg py-4 rounded-xl uppercase shadow-xl transition-all transform active:scale-95 mt-2"
          >
            Submit via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanApplicationForm;
