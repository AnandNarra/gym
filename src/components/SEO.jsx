import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | VeFit.in` : "VeFit.in - Premium Gym, Training & Equipment";
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};

export default SEO;
