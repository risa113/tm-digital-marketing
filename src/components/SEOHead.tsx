import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FAQS, SERVICES, CONTACT_INFO } from '../data/marketingData';

interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

const ROUTE_SEO_MAP: Record<string, RouteSEO> = {
  '/': {
    title: 'TM Digital Marketing | Modern Growth & Digital Agency',
    description: 'TM Digital Marketing is an elite growth agency helping international & local brands scale with SEO, Meta Ads, Google Ads PPC, Web Engineering & AI Automation.',
    keywords: 'digital marketing agency, SEO services, Meta Ads, Google Ads PPC, web development, growth marketing',
    canonical: 'https://tmdigitalmarketing.com/'
  },
  '/about': {
    title: 'About Us | TM Digital Marketing Agency',
    description: 'Learn about TM Digital Marketing, founded by Mohamed Thariq & Muja. Our mission, agile growth methodology, and commitment to client ROI.',
    keywords: 'about TM digital marketing, agency founders, Mohamed Thariq, Muja, marketing agency story',
    canonical: 'https://tmdigitalmarketing.com/about'
  },
  '/services': {
    title: 'Services & Growth Solutions | TM Digital Marketing',
    description: 'Explore our 12+ digital growth services: SEO, PPC advertising, Social Media, 3D Web Development, Video Editing, AI Automation & Direct WhatsApp funnels.',
    keywords: 'digital marketing services, SEO audit, Meta ad campaigns, Google PPC, custom web development',
    canonical: 'https://tmdigitalmarketing.com/services'
  },
  '/process': {
    title: 'Our 6-Step Growth Blueprint | TM Digital Marketing',
    description: 'Discover how TM Digital Marketing launches and scales high-converting marketing campaigns in 7 days with our agile growth sprint process.',
    keywords: 'marketing process, growth sprint, campaign roadmap, conversion rate optimization, campaign launch',
    canonical: 'https://tmdigitalmarketing.com/process'
  },
  '/deliverables': {
    title: 'Deliverables & Case Studies | TM Digital Marketing',
    description: 'Explore our deliverables, portfolio showcase, vector branding systems, web development projects, and high-ROI client case studies.',
    keywords: 'marketing deliverables, web portfolio, case studies, ad creatives, ROI results',
    canonical: 'https://tmdigitalmarketing.com/deliverables'
  },
  '/why-us': {
    title: 'Why Choose Us | TM Digital Marketing Differentiators',
    description: 'Why top brands choose TM Digital Marketing: direct founder access, 7-day launch velocity, transparent real-time analytics, and 100% data-driven strategy.',
    keywords: 'why choose TM digital, agency comparison, direct founder access, marketing ROI guarantee',
    canonical: 'https://tmdigitalmarketing.com/why-us'
  },
  '/testimonials': {
    title: 'Client Testimonials & Reviews | TM Digital Marketing',
    description: 'Read verified client testimonials and success stories from business owners who scaled revenue with TM Digital Marketing.',
    keywords: 'client reviews, TM digital testimonials, agency ratings, customer success stories',
    canonical: 'https://tmdigitalmarketing.com/testimonials'
  },
  '/faq': {
    title: 'Frequently Asked Questions | TM Digital Marketing',
    description: 'Find instant answers to questions about campaign launch timelines, founder access, pricing models, and service deliverables.',
    keywords: 'marketing FAQ, campaign launch time, founder contacts, agency pricing',
    canonical: 'https://tmdigitalmarketing.com/faq'
  },
  '/contact': {
    title: 'Contact Us | Book Free Strategy Call | TM Digital Marketing',
    description: 'Get in touch with founders Mohamed Thariq (+91 86087 24931) & Muja (+91 63694 80812). Book a free 30-minute growth strategy consultation.',
    keywords: 'contact TM digital marketing, book marketing consultation, Mohamed Thariq, Muja',
    canonical: 'https://tmdigitalmarketing.com/contact'
  }
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const seo = ROUTE_SEO_MAP[location.pathname] || {
      title: 'TM Digital Marketing | Growth & Digital Agency',
      description: 'TM Digital Marketing provides high-performance digital marketing, SEO, PPC, and Web Development for global businesses.',
      keywords: 'digital marketing, SEO, PPC, Web development',
      canonical: `https://tmdigitalmarketing.com${location.pathname}`
    };

    // Update document title
    document.title = seo.title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seo.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords);

    // Update Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    // 1. Structured Data: LocalBusiness & ProfessionalService Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://tmdigitalmarketing.com/#organization",
      "name": "TM Digital Marketing",
      "alternateName": "TM Digital",
      "url": seo.canonical,
      "logo": "https://tmdigitalmarketing.com/favicon.svg",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "description": seo.description,
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
      "sameAs": [CONTACT_INFO.instagram],
      "priceRange": "$$"
    };

    // 2. Structured Data: FAQ Schema
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

    // 3. Service Schema
    const serviceCatalogSchema = {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": SERVICES.map((service, index) => ({
        "@type": "OfferCatalog",
        "name": service.title,
        "description": service.shortDesc,
        "position": index + 1
      }))
    };

    const scriptIds = ['seo-local-business-jsonld', 'seo-faq-jsonld', 'seo-services-jsonld'];
    const schemas = [localBusinessSchema, faqSchema, serviceCatalogSchema];

    scriptIds.forEach((id) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    });

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
  }, [location.pathname]);

  return null;
}
