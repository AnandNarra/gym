import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const PartnerGyms = () => {
  const [selectedGym, setSelectedGym] = useState(null);

  const gyms = [
    {
      id: 1,
      name: "JAWAN PRO-GYM",
      image: "/images/jawan-pro-gym.png",
      rating: "5.0",
      reviews: "305",
      address: "F8JV+VGC, Kondapur, Venkateshwara Nagar, Serilingampalle (M), Telangana 500084",
      phone: "99597 61403",
      hours: "6:00 AM - 12:00 PM | 4:00 PM - 10:00 PM",
      description: "Train together. Stay stronger. 💪❤️ Join our Exclusive Couple Plans and transform together! Limited slots available – Join now!",
      features: [
        "Modern Equipment",
        "Professional Trainers",
        "Spacious Workout Area",
        "Hygienic Environment",
        "Exclusive Couple Plans",
        "Expert Coaching",
        "Clean Space",
        "Diet Plan"
      ]
    },
    {
      id: 2,
      name: "Sky9 Fitness Studio | Tolichowki",
      image: "/images/sky9-fitness.png",
      rating: "4.2",
      reviews: "60",
      address: "MCH Colony, Salarjung Colony, Nizam Colony, Toli Chowki, Hyderabad, Telangana 500008",
      phone: "99597 61403",
      hours: "6:00 AM - 11:30 PM",
      description: "Sky9 Fitness Studio is an excellent gym with top-class amenities and a very positive workout environment. The equipment is modern, well-maintained, and suitable for all fitness levels. The gym is clean, spacious, and well organized.",
      features: [
        "Top-class Amenities",
        "Modern Equipment",
        "Well Maintained",
        "Spacious Layout",
        "Positive Atmosphere",
        "Variety of Machines",
        "Helpful Trainers",
        "Aesthetic Lighting"
      ]
    },
    {
      id: 3,
      name: "A1 Fitness",
      image: "/images/a1-fitness.png",
      rating: "4.6",
      reviews: "161",
      address: "Silver Oak Complex, 10-5-12/2/30/401, Ahmed Nagar, Masab Tank, Hyderabad, Telangana 500028",
      phone: "99597 61403",
      hours: "6:00 AM - 11:00 PM",
      description: "A1 Fitness is well-equipped with weights, workout machines, and accessories. It offers a friendly atmosphere and centrally air-conditioned facilities with a high standard of hygiene.",
      features: [
        "Well Equipped",
        "Central AC",
        "Drinking Water",
        "Clean Washrooms",
        "Friendly Staff",
        "Affordable Price",
        "Experienced Trainers",
        "Hygienic Environment"
      ],
      imagePosition: "object-top"
    },
    {
      id: 4,
      name: "Vintage Fitness Gym",
      image: "/images/vintage-fitness.png",
      rating: "4.8",
      reviews: "360",
      address: "1-57/19, above Royal Fruit Shop, Kondapur, Sri Ram Nagar, Gachibowli, Hyderabad, Telangana 500084",
      phone: "99597 61403",
      hours: "6:00 AM - 10:00 PM",
      description: "Vintage Fitness Gym is one of the best gyms in the area with a wonderful environment to workout. It features a huge collection of equipment and amazing personal trainers like Tarun, Sameer, and Raju who guide you through your fitness journey.",
      features: [
        "Personal Training",
        "Diet Planning",
        "Supportive Trainers",
        "Huge Equipment Collection",
        "Motivating Environment",
        "Safe & Hygienic",
        "Expert Guidance",
        "Modern Facility"
      ]
    },
    {
      id: 5,
      name: "Primezone Fitness - [ PREMIUM ]",
      image: "/images/primezone-fitness.png",
      rating: "4.8",
      reviews: "119",
      address: "304, Ayyappa Society Main Rd, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081",
      phone: "99597 61403",
      hours: "6:00 AM - 11:30 PM",
      description: "Join Primezone Fitness for a premium fitness experience at an affordable price. We offer brand new, advanced equipment and a highly supportive environment with friendly staff to ensure your fitness goals are met.",
      features: [
        "Premium Equipment",
        "Supportive Trainers",
        "Zumba Classes",
        "Advanced Machines",
        "Friendly Environment",
        "Well Maintained",
        "Clean & Hygienic",
        "Flexible Plans"
      ]
    },
    {
      id: 6,
      name: "Prime Fitness Gym",
      image: "/images/prime-fitness-kondapur.png",
      rating: "4.5",
      reviews: "604",
      address: "1st Floor, Botanical Garden Rd, Kondapur, Gachibowli, Hyderabad, Telangana 500084",
      phone: "99597 61403",
      hours: "6:00 AM - 10:00 PM",
      description: "Prime Fitness Gym stands out for its excellent facility, equipment, and friendly trainers. It's a nicely maintained place for daily workouts with motivating trainers who provide personalized tips and tricks.",
      features: [
        "Motivating Trainers",
        "Diet Planning",
        "Excellent Facility",
        "Friendly Atmosphere",
        "Nice Ambience",
        "Well Maintained",
        "Cool Pricing",
        "Personalized Tips"
      ],
      imagePosition: "object-top"
    },
    {
      id: 7,
      name: "Iron Kingdom Gym - Kondapur",
      image: "/images/iron-kingdom.png",
      rating: "4.9",
      reviews: "111",
      address: "1-57/3/A & 1-57/76/A Botanical garden road, Sriram Nagar Colony, Kondapur, Hyderabad, Telangana 500084",
      phone: "99597 61403",
      hours: "6:00 AM - 10:00 PM",
      description: "Iron Kingdom Gym offers a modern equipment setup in a clean and hygienic environment. Our professional and supportive trainers ensure proper guidance for both beginners and experienced fitness enthusiasts.",
      features: [
        "Modern Equipment",
        "Clean Environment",
        "Weight Training",
        "Professional Guidance",
        "Positive Vibe",
        "Supportive Trainers",
        "Hygienic Space",
        "Highly Recommended"
      ],
      imagePosition: "object-top"
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <SEO
        title="Partner Gyms"
        description="Our network of premium collaborator gyms."
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] bg-black overflow-hidden group">
        <img
          src="/images/training-hero.png"
          alt="Partner Gyms"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Partner <span className="text-yellow-500">Gyms</span></h1>
            <p className="text-gray-300 max-w-xl mx-auto px-4">Experience premium fitness at our network of collaborated gym locations.</p>
          </motion.div>
        </div>
      </section>

      {/* Gyms Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gyms.map((gym, index) => (
            <motion.div
              key={gym.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#faebd7] rounded-3xl overflow-hidden shadow-lg cursor-pointer group flex flex-col h-full border border-gray-200/40"
              onClick={() => setSelectedGym(gym)}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={gym.image} 
                  alt={gym.name} 
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${gym.imagePosition || ''}`} 
                />
                <div className="absolute top-4 left-4 bg-[#f1b407] text-black text-[10px] font-black px-3 py-1 rounded-xl uppercase tracking-widest shadow-md">
                  Active Partner
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight line-clamp-1">{gym.name}</h3>
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm border border-gray-50 shrink-0">
                    <svg className="w-3 h-3 text-[#f1b407] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    <span className="text-gray-900 font-bold text-[10px]">{gym.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed font-medium line-clamp-2">{gym.address}</p>
                <div className="mt-auto flex items-center justify-between border-t border-gray-300/60 pt-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-[#00c853] rounded-full"></div>
                    <span className="text-[#00c853] text-[10px] font-black uppercase tracking-wider">Open Now</span>
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
        {selectedGym && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px]"
            onClick={() => setSelectedGym(null)}
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
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">{selectedGym.name}</h2>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-yellow-500 font-bold text-sm">{selectedGym.rating}</span>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-xs">({selectedGym.reviews} reviews)</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedGym(null)}
                  className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <div className="overflow-y-auto custom-scrollbar">
                {/* Main Image */}
                <div className="h-60 md:h-72 w-full">
                  <img 
                    src={selectedGym.image} 
                    alt={selectedGym.name} 
                    className={`w-full h-full object-cover ${selectedGym.imagePosition || ''}`} 
                  />
                </div>

                <div className="p-6 md:p-8 space-y-8">
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a href={`tel:${selectedGym.phone}`} className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors shadow-md active:scale-95">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      CALL NOW
                    </a>
                    <a href={`https://maps.google.com/?q=${selectedGym.name}+${selectedGym.address}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 text-gray-700 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors active:scale-95">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      DIRECTIONS
                    </a>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="bg-gray-50 p-2 rounded-lg shrink-0">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Address</p>
                          <p className="text-gray-700 text-sm font-medium leading-snug">{selectedGym.address}</p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="bg-gray-50 p-2 rounded-lg shrink-0">
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Operating Hours</p>
                          <p className="text-gray-700 text-sm font-medium leading-snug">{selectedGym.hours}</p>
                          <p className="text-green-600 text-xs font-bold mt-1">Open Now</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Key Amenities</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedGym.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
                            <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            <span className="text-gray-700 text-[11px] font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-3">About Jawan Pro Gym</h4>
                    <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-blue-500 pl-4">
                      "{selectedGym.description}"
                    </p>
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

export default PartnerGyms;
