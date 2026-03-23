import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    const phone = "919959761403";
    const message = "Hi GymFitness, I want to join!";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-gray-900 rounded-full p-4 shadow-lg shadow-green-500/30 transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
