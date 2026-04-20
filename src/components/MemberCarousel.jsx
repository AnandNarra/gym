import React, { useState } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const members = [
  {
    id: 1,
    name: "Rahul Verma",
    goal: "Weight Loss (-18kg)",
    duration: "5 Months",
    image: "/images/members/member-1.jpg",
    rating: 5,
    story: "I struggled with my weight for years. The personalized attention at veFit.in along with a strict dietary plan helped me shed 18 kilos. I feel more energetic than ever!",
    stats: "Body Fat: 28% -> 15%"
  },
  {
    id: 2,
    name: "Rohit Desai",
    goal: "Fat Loss & Muscle Toning",
    duration: "6 Months",
    image: "/images/members/member-2.jpg",
    rating: 5,
    story: "Balancing a hectic corporate job and health was overwhelming. The focused workouts and balanced nutrition plan specifically customized for me changed my life. I dropped the extra fat and gained solid muscle.",
    stats: "Weight: 85kg -> 73kg"
  },
  {
    id: 3,
    name: "Vikram Singh",
    goal: "Muscle Hypertrophy (+10kg)",
    duration: "8 Months",
    image: "/images/members/member-3.jpg",
    rating: 5,
    story: "I wanted to build serious muscle and step on stage. The trainers at veFit pushed me past my limits. Went from a skinny frame to a confident, muscular build.",
    stats: "Lean Mass: +8kg"
  },
  {
    id: 4,
    name: "Aman Gupta",
    goal: "Strength & Conditioning",
    duration: "1 Year",
    image: "/images/members/member-4.jpg",
    rating: 5,
    story: "After recovering from a sedentary lifestyle, I had no core strength. The coaches helped me safely rebuild my core and drastically improve my overall conditioning. Highly recommend!",
    stats: "Deadlift: 60kg -> 140kg"
  },
  {
    id: 5,
    name: "Arjun Krishnan",
    goal: "Functional Strength",
    duration: "4 Months",
    image: "/images/members/member-5.jpg",
    rating: 4,
    story: "Sitting at a desk 10 hours a day destroyed my posture. Thanks to the mobility and functional strength routines, my back pain is gone and my posture is completely fixed.",
    stats: "Mobility Score: +60%"
  },
  {
    id: 6,
    name: "Karan Patel",
    goal: "General Fitness & Toning",
    duration: "3 Months",
    image: "/images/members/member-6.jpg",
    rating: 5,
    story: "I joined just to stay active, but the vibrant community and fun classes keep me coming back every single day. The trainers here are like family.",
    stats: "Endurance: +40%"
  },
  {
    id: 7,
    name: "Aditya Patil",
    goal: "Athletic Conditioning",
    duration: "7 Months",
    image: "/images/members/member-7.jpg",
    rating: 5,
    story: "As an amateur runner, I needed strength conditioning to prevent injuries. The tailored Olympic lifting and plyometrics program here vastly improved my sprint times.",
    stats: "100m Dash: -1.2s"
  },
  {
    id: 8,
    name: "Siddharth Nair",
    goal: "Transformation",
    duration: "10 Months",
    image: "/images/members/member-8.jpg",
    rating: 5,
    story: "Lost 22kg and completely transformed my relationship with food. I used to rely on crash diets; now I eat balanced meals and lift heavy. Best gym experience ever.",
    stats: "Body Fat: 32% -> 18%"
  }
];

const MemberCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activePopup, setActivePopup] = useState(null);

  // We duplicate the array to create a seamless infinite scrolling effect
  const repeatedMembers = [...members, ...members, ...members];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
            <span className="text-yellow-500">Member</span> Stories
          </h2>
          <p className="text-gray-500 font-light max-w-2xl mx-auto">
            Real people, real results. See how our personalized approach is transforming lives every single day.
          </p>
        </div>
      </div>

      {/* Marquee Wrapper */}
      <div 
        className="w-full relative flex overflow-x-hidden"
        style={{ paddingBottom: '20px' }}
      >
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 40s linear infinite',
            animationPlayState: isHovered ? 'paused' : 'running',
            width: 'max-content'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActivePopup(null);
          }}
        >
          {repeatedMembers.map((member, index) => (
            <div
              key={`${member.id}-${index}`}
              className="w-[300px] h-[400px] mx-4 relative rounded-2xl overflow-hidden cursor-pointer group flex-shrink-0 shadow-lg"
              onMouseEnter={() => setActivePopup(index)}
              onMouseLeave={() => setActivePopup(null)}
            >
              {/* Default Card View */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold uppercase tracking-wider">{member.name}</h3>
                <p className="text-yellow-400 text-sm font-semibold mb-2">{member.goal}</p>
                
                {/* Rating Stars */}
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                     <FaStar key={i} className={i < member.rating ? "text-yellow-500" : "text-gray-400"} size={12} />
                  ))}
                </div>
              </div>

              {/* Hover Popup Overlay */}
              <AnimatePresence>
                {activePopup === index && (
                  <motion.div
                    initial={{ opacity: 0, y: '100%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100%' }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute inset-0 bg-white z-20 flex flex-col p-6 rounded-2xl border-4 border-yellow-500 shadow-2xl overflow-hidden whitespace-normal"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-gray-900 text-xl font-black uppercase leading-tight">{member.name}</h3>
                        <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">{member.goal}</p>
                      </div>
                      <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        {member.duration}
                      </div>
                    </div>

                    <div className="flex text-yellow-500 mb-4">
                      {[...Array(5)].map((_, i) => (
                         <FaStar key={i} className={i < member.rating ? "text-yellow-500" : "text-gray-200"} size={14} />
                      ))}
                    </div>

                    <div className="flex-grow">
                      <FaQuoteLeft className="text-yellow-200 text-3xl mb-2" />
                      <p className="text-gray-600 text-sm italic font-light leading-relaxed mb-4">
                        {member.story}
                      </p>
                    </div>

                    <div className="mt-auto bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Key Result</p>
                      <p className="text-gray-900 font-bold">{member.stats}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
      `}} />
    </section>
  );
};

export default MemberCarousel;
