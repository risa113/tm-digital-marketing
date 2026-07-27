import React, { useEffect } from 'react';
import { FAQS, SERVICES, CONTACT_INFO } from '../data/marketingData';

export default function SEOHead() {
  useEffect(() => {
    // 1. Structured Data: LocalBusiness & ProfessionalService Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://tmdigitalmarketing.com/#organization",
      "name": "TM Digital Marketing",
      "alternateName": "TM Digital",
      "url": "https://tmdigitalmarketing.com/",
      "logo": "https://tmdigitalmarketing.com/favicon.svg",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "description": "Best Digital Marketing Agency in Tirunelveli offering SEO, Meta Ads, Google Ads PPC, Web Development, and Social Media Marketing.",
      "telephone": ["+91 86087 24931", "+91 63694 80812"],
      "email": CONTACT_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Tirunelveli",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.7139,
        "longitude": 77.7567
      },
      "hasMap": CONTACT_INFO.googleMapsUrl,
      "founder": [
        {
          "@type": "Person",
          "name": "Mohamed Thariq",
          "telephone": "+91 86087 24931"
        },
        {
          "@type": "Person",
          "name": "Muja",
          "telephone": "+91 63694 80812"
        }
      ],
      "sameAs": [
        CONTACT_INFO.instagram
      ],
      "priceRange": "$$",
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
        "opens": "09:00",
        "closes": "20:00"
      }
    };

    // 2. Structured Data: FAQPage Schema for Google Rich Snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // 3. Structured Data: Service Catalog Schema
    const serviceCatalogSchema = {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services in Tirunelveli",
      "itemListElement": SERVICES.map((service, index) => ({
        "@type": "OfferCatalog",
        "name": service.title,
        "description": service.shortDesc,
        "position": index + 1
      }))
    };

    // 4. WebSite Schema with SearchAction
    const webSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://tmdigitalmarketing.com/",
      "name": "TM Digital Marketing",
      "publisher": {
        "@id": "https://tmdigitalmarketing.com/#organization"
      }
    };

    // Inject Script tags into Document Head
    const scriptIds = [
      'seo-local-business-jsonld',
      'seo-faq-jsonld',
      'seo-services-jsonld',
      'seo-website-jsonld'
    ];

    const schemas = [localBusinessSchema, faqSchema, serviceCatalogSchema, webSiteSchema];

    // Clean up old injected scripts if re-rendering
    scriptIds.forEach((id) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    });

    // Append new scripts
    schemas.forEach((schemaData, idx) => {
      const script = document.createElement('script');
      script.id = scriptIds[idx];
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

    return () => {
      scriptIds.forEach((id) => {
        const existing = document.getElementById(id);
        if (existing) existing.remove();
      });
    };
  }, []);

  return null;
}
