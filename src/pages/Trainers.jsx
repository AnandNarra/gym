import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const Trainers = () => {
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyData, setApplyData] = useState({ name: '', age: '', sex: '', experience: '', location: '', phone: '' });
  const [showHireModal, setShowHireModal] = useState(false);
  const [hireSelectedTrainer, setHireSelectedTrainer] = useState(null);
  const [modalStep, setModalStep] = useState('pitch'); // 'pitch' or 'form' (for ApplyModal)
  const [hireModalStep, setHireModalStep] = useState('ecosystem'); // 'ecosystem', 'list', 'form'
  const [hireFormData, setHireFormData] = useState({ name: '', gymName: '', location: '', requirement: '', phone: '' });

  const trainers = [
    {
      id: 1,
      name: "M BALAJI",
      age: 29,
      image: "/images/trainers/m-balaji.jpeg",
      title: "Professional Men's Physique Athlete",
      experience: "10+ Years",
      rating: "5.0",
      description: "Professional men's Physique Athlete with over 10 years of experience in the fitness industry. Dedicated to helping individuals achieve their physique goals through science-based training and nutrition.",
      achievements: [
        "2017 Mr. Undivided Koraput District Gold medalist 🥇",
        "2019 Mr. Undivided Koraput District Gold 🥇 medalist",
        "2021 Mr. Odisha Bronze 🥉 medal",
        "2023 Mr. Odisha Gold medalist 🥇"
      ],
      specialties: [
        "Body Building",
        "Men's Physique",
        "Contest Prep",
        "Muscle Hypertrophy",
        "Strength Training",
        "Personal Training"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <SEO
        title="Our Trainers"
        description="Meet our certified professional trainers dedicated to your fitness transformation."
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] bg-black overflow-hidden group">
        <img
          src="/images/training-hero.png"
          alt="Our Trainers"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Our <span className="text-yellow-500">Trainers</span></h1>
            <p className="text-gray-300 max-w-xl mx-auto px-4">Work with the best in the industry to unlock your true potential.</p>
          </motion.div>
        </div>
      </section>

       {/* Call to Action Section */}
       <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-8">
         {/* Trainers Apply Card */}
         <div className="flex-1 relative overflow-hidden rounded-3xl group h-[300px]">
           <img 
             src="/images/trainer-apply-bg.png" 
             alt="Trainers Apply" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />
           <div className="absolute inset-0 bg-black/60"></div>
           <div className="relative h-full p-10 flex flex-col justify-center items-start text-white">
             <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">Trainers: Apply for Jobs</h2>
             <p className="text-gray-200 mb-8 max-w-md font-medium">Join our network and get matched with gyms seeking top talent across the industry.</p>
             <button 
              onClick={() => { setModalStep('pitch'); setShowApplyModal(true); }} 
              className="bg-white text-black font-black py-4 px-8 rounded-xl uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-xl active:scale-95"
            >
              Apply Now
            </button>
           </div>
         </div>

         {/* Gym Owners Hire Card */}
         <div className="flex-1 relative overflow-hidden rounded-3xl group h-[300px]">
           <img 
             src="/images/gym-hire-bg.png" 
             alt="Gym Owners Hire" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
           />
           <div className="absolute inset-0 bg-black/60"></div>
           <div className="relative h-full p-10 flex flex-col justify-center items-start text-white">
             <h2 className="text-3xl font-black uppercase mb-4 tracking-tight">Gym Owners: Hire Trainers</h2>
             <p className="text-gray-200 mb-8 max-w-md font-medium">Find and hire qualified trainers for your gym instantly with our verified talent pool.</p>
             <button 
               onClick={() => { setHireModalStep('ecosystem'); setShowHireModal(true); }} 
               className="bg-white text-black font-black py-4 px-8 rounded-xl uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-xl active:scale-95"
             >
               Hire Now
             </button>
           </div>
         </div>
       </section>

      {/* Trainers Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg cursor-pointer group flex flex-col h-full border border-gray-200/40"
              onClick={() => setSelectedTrainer(trainer)}
            >
              <div className="relative h-72 overflow-hidden bg-gray-200">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 object-top"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-xl uppercase tracking-widest shadow-md">
                  Elite Trainer
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight">{trainer.name}</h3>
                    <p className="text-yellow-600 text-[10px] font-bold uppercase tracking-widest">{trainer.title}</p>
                  </div>
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm border border-gray-50 shrink-0">
                    <svg className="w-3 h-3 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-gray-900 font-bold text-[10px]">{trainer.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed font-medium line-clamp-2">{trainer.description}</p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-200/60 pt-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Experience</span>
                    <span className="text-gray-900 text-[10px] font-black uppercase tracking-wider">{trainer.experience}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-900 font-black text-[10px] uppercase group-hover:translate-x-1 transition-transform">
                    Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup / Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setSelectedTrainer(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Side */}
              <div className="md:w-2/5 h-64 md:h-auto bg-gray-200 relative">
                <img
                  src={selectedTrainer.image}
                  alt={selectedTrainer.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                <div className="absolute bottom-4 left-6 md:hidden">
                  <h2 className="text-2xl font-black text-white uppercase">{selectedTrainer.name}</h2>
                  <p className="text-yellow-500 font-bold text-sm uppercase">{selectedTrainer.title}</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="md:w-3/5 flex flex-col overflow-hidden">
                <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 sticky top-0 bg-white z-10">
                  <div className="hidden md:block">
                    <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{selectedTrainer.name}</h2>
                    <p className="text-yellow-600 font-bold text-xs uppercase tracking-[0.2em]">{selectedTrainer.title}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTrainer(null)}
                    className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-full transition-all ml-auto"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </button>
                </div>

                <div className="overflow-y-auto p-8 space-y-8 custom-scrollbar">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Age</p>
                      <p className="text-gray-900 font-black text-lg">{selectedTrainer.age} Years</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Experience</p>
                      <p className="text-gray-900 font-black text-lg">{selectedTrainer.experience}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Body Building Achievements</h4>
                    <div className="space-y-3">
                      {selectedTrainer.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-yellow-50/50 p-3 rounded-xl border border-yellow-100">
                          <span className="text-gray-700 text-sm font-semibold">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Area of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTrainer.specialties.map((spec, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">Professional Bio</h4>
                    <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-yellow-500 pl-4">
                      "{selectedTrainer.description}"
                    </p>
                  </div>

                  <div className="pt-8">
                    <a
                      href="https://wa.me/919959761403?text=I%20want%20to%20book%20a%20session%20with%20M%20BALAJI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-yellow-500 text-black py-4 rounded-xl font-black uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      Book Training Session
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Apply Modal (Premium B2B Pitch + Form) */}
      {showApplyModal && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => { setShowApplyModal(false); setModalStep('pitch'); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white rounded-[2rem] w-full max-w-3xl mx-auto overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] relative max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Decorative Header Bar */}
              <div className="h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-500 w-full"></div>
              
              <button 
                onClick={() => { setShowApplyModal(false); setModalStep('pitch'); }} 
                className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-all hover:rotate-90 p-2 z-20 bg-gray-50 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="overflow-y-auto custom-scrollbar p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {modalStep === 'pitch' ? (
                    <motion.div 
                      key="pitch"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-10"
                    >
                      <div className="text-center max-w-xl mx-auto">
                        <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                          Business Solutions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">
                          Supply <span className="text-indigo-600">&</span> Grow
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">
                          At <span className="text-gray-900 font-bold underline decoration-indigo-500 decoration-2 underline-offset-4">Colfit.in</span>, we don’t just supply trainers — we engineer gym success.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                          {
                            title: "Colfit.in Promise",
                            icon: "✨",
                            items: ["Pre-screened & Verified", "Skill-tested Placements", "Replacement Guarantee"],
                            color: "indigo",
                            quote: "Zero interview hassle — we handle everything."
                          },
                          {
                            title: "PT Revenue",
                            icon: "📈",
                            items: ["Upselling Specialists", "Conversion Scripts", "Monthly Targets"],
                            color: "emerald",
                            quote: "Converting members into paying clients."
                          },
                          {
                            title: "Performance",
                            icon: "📊",
                            items: ["Performance Reports", "Member Feedback", "Attendance Tracking"],
                            color: "purple",
                            quote: "Data-driven results — no guesswork."
                          }
                        ].map((card, i) => (
                          <div key={i} className="group bg-gray-50 p-6 rounded-[1.5rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300">
                            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">{card.icon}</div>
                            <h3 className={`text-${card.color}-600 font-black text-xs uppercase tracking-widest mb-4`}>{card.title}</h3>
                            <ul className="space-y-2.5 mb-6">
                              {card.items.map((item, j) => (
                                <li key={j} className="flex items-center gap-2 text-[11px] text-gray-600 font-bold">
                                  <div className={`w-1 h-1 rounded-full bg-${card.color}-400`}></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                            <p className="text-[10px] text-gray-400 font-medium italic leading-tight border-t border-gray-200 pt-4">
                              "{card.quote}"
                            </p>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => setModalStep('form')}
                        className="group w-full bg-indigo-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] flex items-center justify-center gap-3 active:scale-[0.98] animate-pulse"
                      >
                        Start Growing Your Gym
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="text-center">
                        <button 
                          onClick={() => setModalStep('pitch')}
                          className="text-indigo-600 font-black text-[10px] uppercase tracking-widest mb-4 hover:underline flex items-center justify-center gap-2 mx-auto"
                        >
                          <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                          Back to Pitch
                        </button>
                        <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Hiring Intake</h2>
                        <p className="text-gray-500 font-medium italic">Ready to transform your gym? Let's connect.</p>
                      </div>
                      
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          const msg = `🚀 New Gym Recruitment Inquiry:\n\n👤 Full Name: ${hireFormData.name}\n🏢 Gym Name: ${hireFormData.gymName}\n📍 Location: ${hireFormData.location}\n🎯 Requirement: ${hireFormData.requirement}\n📞 Contact: ${hireFormData.phone}`;
                          const url = `https://wa.me/919959761403?text=${encodeURIComponent(msg)}`;
                          window.open(url, '_blank');
                          setShowApplyModal(false);
                          setModalStep('pitch');
                        }}
                        className="space-y-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {[
                            { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
                            { id: 'gymName', label: 'Gym Name', type: 'text', placeholder: 'Your gym branding' },
                            { id: 'location', label: 'Location', type: 'text', placeholder: 'City / Area' },
                            { id: 'phone', label: 'Contact Number', type: 'tel', placeholder: 'WhatsApp preferred' },
                            { id: 'requirement', label: 'Trainer Requirement', type: 'textarea', placeholder: 'e.g. 2 Certified Female Trainers' }
                          ].map(field => (
                            <div key={field.id} className={field.id === 'requirement' ? 'md:col-span-2' : ''}>
                              <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.2em]" htmlFor={field.id}>
                                {field.label}
                              </label>
                              {field.type === 'textarea' ? (
                                <textarea
                                  id={field.id}
                                  placeholder={field.placeholder}
                                  value={hireFormData[field.id]}
                                  onChange={e => setHireFormData({ ...hireFormData, [field.id]: e.target.value })}
                                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold placeholder:text-gray-300 min-h-[120px] resize-none"
                                  required
                                />
                              ) : (
                                <input
                                  id={field.id}
                                  placeholder={field.placeholder}
                                  type={field.type}
                                  value={hireFormData[field.id]}
                                  onChange={e => setHireFormData({ ...hireFormData, [field.id]: e.target.value })}
                                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 focus:outline-none focus:border-indigo-600 focus:bg-white transition-all font-bold placeholder:text-gray-300"
                                  required
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="pt-4">
                          <button 
                            type="submit" 
                            className="w-full bg-indigo-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-700 transition-all shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
                          >
                            Submit Inquiry via WhatsApp
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Hire Modal (Premium Ecosystem Pitch + Trainer Selection + Form) */}
      {showHireModal && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => { setShowHireModal(false); setHireModalStep('ecosystem'); setHireSelectedTrainer(null); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white rounded-[2rem] w-full max-w-4xl mx-auto overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] relative max-h-[90vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {/* Decorative Header Bar */}
              <div className="h-2 bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-500 w-full"></div>

              <button 
                onClick={() => { setShowHireModal(false); setHireModalStep('ecosystem'); setHireSelectedTrainer(null); }} 
                className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-all hover:rotate-90 p-2 z-20 bg-gray-50 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="overflow-y-auto custom-scrollbar p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {hireModalStep === 'ecosystem' ? (
                    <motion.div 
                      key="ecosystem"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-10"
                    >
                      <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                          Our Ecosystem
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">
                          Empowering <span className="text-emerald-600">Professionals</span>
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">
                          We are building a strong ecosystem for fitness professionals by connecting certified trainers with premium gym networks.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-4">Elite Benefits</h3>
                            <ul className="space-y-3">
                              {[
                                "Partnerships with leading gyms for exposure",
                                "Work in premium fitness environments",
                                "Strong network for steady client flow",
                                "Flexible working hours & shifts"
                              ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-xs text-gray-600 font-bold leading-tight">
                                  <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gray-900 p-6 rounded-2xl text-white">
                            <h3 className="text-emerald-400 font-black text-xs uppercase tracking-widest mb-4">Financial Growth</h3>
                            <div className="space-y-4">
                              <div>
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Salary Range</p>
                                <p className="text-xl font-black text-white">₹10,000 - ₹50,000 <span className="text-[10px] text-gray-500">/ month</span></p>
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">PT Commissions</p>
                                <p className="text-xl font-black text-white">20% <span className="text-emerald-500">up to 50%</span></p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm">
                            <h3 className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-4">Career Formats</h3>
                            <div className="grid grid-cols-1 gap-3">
                              {["Full-time roles", "Part-time / Shift-based", "One-time engagements"].map((format, i) => (
                                <div key={i} className="bg-emerald-50/50 px-4 py-3 rounded-xl text-emerald-800 text-xs font-black uppercase tracking-tighter text-center">
                                  {format}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                            <h3 className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-4">Stability & Support</h3>
                            <p className="text-xs text-gray-600 font-bold leading-relaxed mb-4">
                              After 6 months of continuous work, eligibility for <span className="text-indigo-700 font-black">EFPF loan opportunities</span> and financial stability support.
                            </p>
                            <p className="text-[10px] text-indigo-400 font-medium italic">
                              "We aim to empower trainers to grow financially while delivering excellence."
                            </p>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => setHireModalStep('list')}
                        className="group w-full bg-emerald-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] flex items-center justify-center gap-3 active:scale-[0.98] animate-pulse"
                      >
                        View Available Trainers
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </button>
                    </motion.div>
                  ) : hireModalStep === 'list' ? (
                    <motion.div 
                      key="trainer-list"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-10"
                    >
                      <div className="text-center max-w-xl mx-auto">
                        <button 
                          onClick={() => setHireModalStep('ecosystem')}
                          className="text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-4 hover:underline flex items-center justify-center gap-2 mx-auto"
                        >
                          <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                          Back to Ecosystem
                        </button>
                        <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter leading-none">Elite <span className="text-emerald-600">Trainers</span></h2>
                        <p className="text-gray-500 font-medium italic">Select a professional to elevate your facility.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
                        {trainers.map(tr => (
                          <div
                            key={tr.id}
                            className="group p-8 bg-gray-50 border-2 border-transparent rounded-[2rem] hover:bg-white hover:border-emerald-600 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                            onClick={() => { setHireSelectedTrainer(tr); setHireModalStep('form'); }}
                          >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-emerald-600 text-white p-2 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path></svg>
                              </div>
                            </div>
                            <h3 className="text-xl font-black text-gray-900 uppercase mb-2 tracking-tight">{tr.name}</h3>
                            <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest mb-4">{tr.title}</p>
                            <div className="flex items-center gap-2">
                              <span className="bg-emerald-50 text-emerald-700 text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-tighter">Experience: {tr.experience}</span>
                              <span className="bg-gray-100 text-gray-600 text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-tighter">Rating: {tr.rating} ⭐</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50 rounded-[1.5rem] p-6 border border-dashed border-gray-300 text-center">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                          Looking for more? <br/>
                          <span className="text-gray-900 underline underline-offset-4 font-black">We have 50+ more certified trainers in our offline network.</span>
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="hire-form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-10"
                    >
                      <div className="text-center">
                        <button 
                          onClick={() => setHireModalStep('list')}
                          className="text-emerald-600 font-black text-[10px] uppercase tracking-widest mb-4 hover:underline flex items-center justify-center gap-2 mx-auto"
                        >
                          <svg className="w-3 h-3 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                          Back to List
                        </button>
                        <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter leading-none">Hire <span className="text-emerald-600">{hireSelectedTrainer?.name}</span></h2>
                        <p className="text-gray-500 font-medium italic">Inquire about availability for your fitness center.</p>
                      </div>
                      
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          const msg = `🤝 Hire Trainer Inquiry:\n\n👤 Trainer: ${hireSelectedTrainer?.name}\n🙋 My Name: ${hireFormData.name}\n🏢 Gym Name: ${hireFormData.gymName}\n📍 Location: ${hireFormData.location}\n🎯 Requirement: ${hireFormData.requirement}\n📞 Contact: ${hireFormData.phone}`;
                          const url = `https://wa.me/919959761403?text=${encodeURIComponent(msg)}`;
                          window.open(url, '_blank');
                          setShowHireModal(false);
                          setHireModalStep('ecosystem');
                          setHireSelectedTrainer(null);
                        }}
                        className="space-y-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {[
                            { id: 'name', label: 'Your Full Name', type: 'text', placeholder: 'Enter your name' },
                            { id: 'gymName', label: 'Gym/Brand Name', type: 'text', placeholder: 'Your organization' },
                            { id: 'location', label: 'Location', type: 'text', placeholder: 'City / Area' },
                            { id: 'phone', label: 'Contact Number', type: 'tel', placeholder: 'WhatsApp number' },
                            { id: 'requirement', label: 'Requirement Details', type: 'textarea', placeholder: 'e.g. Schedule, Duration, Specific goals' }
                          ].map(field => (
                            <div key={field.id} className={field.id === 'requirement' ? 'md:col-span-2' : ''}>
                              <label className="block text-[10px] font-black text-gray-400 mb-3 uppercase tracking-[0.2em]" htmlFor={field.id}>
                                {field.label}
                              </label>
                              {field.type === 'textarea' ? (
                                <textarea
                                  id={field.id}
                                  placeholder={field.placeholder}
                                  value={hireFormData[field.id]}
                                  onChange={e => setHireFormData({ ...hireFormData, [field.id]: e.target.value })}
                                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all font-bold placeholder:text-gray-300 min-h-[100px] resize-none"
                                  required
                                />
                              ) : (
                                <input
                                  id={field.id}
                                  placeholder={field.placeholder}
                                  type={field.type}
                                  value={hireFormData[field.id]}
                                  onChange={e => setHireFormData({ ...hireFormData, [field.id]: e.target.value })}
                                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 text-gray-900 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all font-bold placeholder:text-gray-300"
                                  required
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="pt-4">
                          <button 
                            type="submit" 
                            className="w-full bg-emerald-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-[0_20px_40px_-10px_rgba(5,150,105,0.4)] flex items-center justify-center gap-3 active:scale-[0.98]"
                          >
                            Confirm Hiring Interest
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

    </div>
  );
};

export default Trainers;
