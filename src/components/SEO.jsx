import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/colfit.png', 
  url,
  type = 'website'
}) => {
  const { pathname } = useLocation();
  const siteUrl = 'https://colfit.in';
  const fullUrl = url || `${siteUrl}${pathname}`;
  const siteTitle = 'ColFit - Premium Gym & Fitness';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'ColFit is your premium destination for gym, personal training, nutrition, and fitness equipment. Join the ColFit community today.';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || 'gym, fitness, workout, training, nutrition, colfit'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={fullUrl} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "ColFit",
          "image": `${siteUrl}/colfit.png`,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "99597 61403",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Various Locations",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500001",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.3850,
            "longitude": 78.4867
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "05:00",
            "closes": "22:00"
          },
          "sameAs": [
            "https://www.facebook.com/colfit",
            "https://www.instagram.com/colfit"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
