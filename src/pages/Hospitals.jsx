import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const Hospitals = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  const hospitals = [
    {
      id: 1,
      name: "Navayuga Multi-Speciality Hospital",
      image: "/images/navayuga-hospital.png",
      rating: "4.9",
      reviewsCount: "105",
      address: "Road NO, D.No. 14-1-90/156, 11 D, Gayatri Nagar, Allapur, Hyderabad, Telangana 500018",
      phone: "096663 24419", // Gym booking number
      hours: "Open 24 hours",
      description: "Navayuga Multi-Speciality Hospital is a leading healthcare institution committed to delivering high-quality, patient-centered care. With advanced infrastructure, modern diagnostic facilities, and a team of experienced doctors across specialities such as Cardiology, Orthopaedics, Neurology, Paediatrics, Gynaecology, and Critical Care.",
      specialities: [
        "Gynaecology",
        "Obstetrics",
        "Paediatrics",
        "Cardiology",
        "Orthopaedics",
        "Neurology",
        "Critical Care",
        "Modern Diagnostics"
      ],
      reviews: [
        { user: "RNPN Navya", text: "Good service and doctors also polite, best hospital in this location" },
        { user: "K Venkatesh", text: "Excellent doctor and friendly nurses good and budget money" },
        { user: "Bhu lakshmi Yanamala", text: "Best hospital in this locality, highly recommend for pregnant women." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <SEO
        title="Partner Hospitals - Pink Angels"
        description="Our network of trusted multi-speciality hospitals for women's health."
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[90vh] bg-black overflow-hidden group">
        <img
          src="/images/hospitals-hero.png"
          alt="Partner Hospitals"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
      </section>

      {/* Hospitals Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {hospitals.map((hospital, index) => (
            <motion.div
              key={hospital.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#fff0f3] rounded-3xl overflow-hidden shadow-lg cursor-pointer group flex flex-col h-full border border-pink-100/50"
              onClick={() => setSelectedHospital(hospital)}
            >
              <div className="relative h-52 overflow-hidden bg-white">
                <img src={hospital.image} alt={hospital.name} className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-pink-600 text-white text-[10px] font-black px-3 py-1 rounded-xl uppercase tracking-widest shadow-md">
                  Pink Partner
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight line-clamp-1">{hospital.name}</h3>
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm border border-pink-50 shrink-0">
                    <svg className="w-3 h-3 text-pink-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-gray-900 font-bold text-[10px]">{hospital.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed font-medium line-clamp-2">{hospital.address}</p>
                <div className="mt-auto flex items-center justify-between border-t border-pink-200/60 pt-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                    <span className="text-pink-600 text-[10px] font-black uppercase tracking-wider">Open 24/7</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-900 font-black text-[10px] uppercase group-hover:translate-x-1 transition-transform">
                    Details
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
        {selectedHospital && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setSelectedHospital(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{selectedHospital.name}</h2>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-pink-600 font-bold text-sm">{selectedHospital.rating}</span>
                    <div className="flex text-pink-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">({selectedHospital.reviewsCount} reviews)</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedHospital(null)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar">
                {/* Main Image */}
                <div className="h-60 md:h-72 w-full bg-pink-50/30">
                  <img src={selectedHospital.image} alt={selectedHospital.name} className="w-full h-full object-contain p-4 md:p-8" />
                </div>

                {/* Main Content */}
                <div className="p-6 md:p-8 space-y-8">
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${selectedHospital.phone}`} className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors shadow-md active:scale-95">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      CALL TO BOOK
                    </a>
                    <a href={`https://maps.google.com/?q=${selectedHospital.name}+${selectedHospital.address}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors active:scale-95">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      DIRECTIONS
                    </a>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="bg-pink-50 p-2 rounded-lg shrink-0">
                          <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Address</p>
                          <p className="text-gray-700 text-sm font-medium leading-snug">{selectedHospital.address}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="bg-pink-50 p-2 rounded-lg shrink-0">
                          <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Availability</p>
                          <p className="text-gray-700 text-sm font-medium leading-snug">{selectedHospital.hours}</p>
                          <p className="text-green-600 text-xs font-bold mt-1 uppercase tracking-tight">Active Consultation</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Core Specialities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedHospital.specialities.map((spec, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-pink-50/50 px-3 py-2 rounded-lg border border-pink-100">
                            <svg className="w-3.5 h-3.5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            <span className="text-gray-700 text-[11px] font-semibold">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* About */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">About Navayuga Hospital</h4>
                    <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-pink-500 pl-4">
                      "{selectedHospital.description}"
                    </p>
                  </div>

                  {/* Reviews Section */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Patient Reviews</h4>
                    <div className="space-y-4">
                      {selectedHospital.reviews.map((rev, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center text-[10px] font-bold text-pink-600">
                              {rev.user.charAt(0)}
                            </div>
                            <span className="text-xs font-bold text-gray-900">{rev.user}</span>
                          </div>
                          <p className="text-gray-600 text-xs italic">"{rev.text}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hospitals;
