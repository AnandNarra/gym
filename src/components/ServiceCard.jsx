import React, { useRef } from 'react';
import gsap from 'gsap';

const ServiceCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.3
    });
    
    gsap.to(iconRef.current, {
      x: (x - centerX) * 0.1,
      y: (y - centerY) * 0.1,
      scale: 1.1,
      ease: "power2.out",
      duration: 0.3
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
      duration: 0.5
    });
    
    gsap.to(iconRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      ease: "power2.out",
      duration: 0.5
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-gray-50 p-8 rounded-2xl text-center shadow-xl border border-gray-300 flex flex-col items-center cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div ref={iconRef} className="text-yellow-500 mb-6 text-5xl" style={{ transform: "translateZ(50px)" }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider" style={{ transform: "translateZ(30px)" }}>{title}</h3>
      <p className="text-gray-500 font-light leading-relaxed" style={{ transform: "translateZ(20px)" }}>{description}</p>
    </div>
  );
};

export default ServiceCard;
