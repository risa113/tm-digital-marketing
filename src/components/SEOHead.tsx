import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FAQS, SERVICES, CONTACT_INFO, TESTIMONIALS } from '../data/marketingData';

interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  name: string;
}

const ROUTE_SEO_MAP: Record<string, RouteSEO> = {
  '/': {
    title: 'TM Digital Marketing | Modern Growth & Digital Agency',
    description: 'TM Digital Marketing is an elite growth agency helping international & local brands scale with SEO, Meta Ads, Google Ads PPC, Web Engineering & AI Automation.',
    keywords: 'digital marketing agency, SEO services, Meta Ads, Google Ads PPC, web development, growth marketing',
    canonical: 'https://tmdigitalgrow.com/',
    name: 'Home'
  },
  '/about': {
    title: 'About Us | TM Digital Marketing Agency',
    description: 'Learn about TM Digital Marketing, founded by Mohamed Thariq & Muja. Our mission, agile growth methodology, and commitment to client ROI.',
    keywords: 'about TM digital marketing, agency founders, Mohamed Thariq, Muja, marketing agency story',
    canonical: 'https://tmdigitalgrow.com/about',
    name: 'About Us'
  },
  '/services': {
    title: 'Services & Growth Solutions | TM Digital Marketing',
    description: 'Explore our 12+ digital growth services: SEO, PPC advertising, Social Media, 3D Web Development, Video Editing, AI Automation & Direct WhatsApp funnels.',
    keywords: 'digital marketing services, SEO audit, Meta ad campaigns, Google PPC, custom web development',
    canonical: 'https://tmdigitalgrow.com/services',
    name: 'Services'
  },
  '/process': {
    title: 'Our 6-Step Growth Blueprint | TM Digital Marketing',
    description: 'Discover how TM Digital Marketing launches and scales high-converting marketing campaigns in 7 days with our agile growth sprint process.',
    keywords: 'marketing process, growth sprint, campaign roadmap, conversion rate optimization, campaign launch',
    canonical: 'https://tmdigitalgrow.com/process',
    name: 'Process'
  },
  '/deliverables': {
    title: 'Deliverables & Case Studies | TM Digital Marketing',
    description: 'Explore our deliverables, portfolio showcase, vector branding systems, web development projects, and high-ROI client case studies.',
    keywords: 'marketing deliverables, web portfolio, case studies, ad creatives, ROI results',
    canonical: 'https://tmdigitalgrow.com/deliverables',
    name: 'Deliverables'
  },
  '/why-us': {
    title: 'Why Choose Us | TM Digital Marketing Differentiators',
    description: 'Why top brands choose TM Digital Marketing: direct founder access, 7-day launch velocity, transparent real-time analytics, and 100% data-driven strategy.',
    keywords: 'why choose TM digital, agency comparison, direct founder access, marketing ROI guarantee',
    canonical: 'https://tmdigitalgrow.com/why-us',
    name: 'Why Us'
  },
  '/faq': {
    title: 'Frequently Asked Questions | TM Digital Marketing',
    description: 'Find instant answers to questions about campaign launch timelines, founder access, pricing models, and service deliverables.',
    keywords: 'marketing FAQ, campaign launch time, founder contacts, agency pricing',
    canonical: 'https://tmdigitalgrow.com/faq',
    name: 'FAQ'
  },
  '/contact': {
    title: 'Contact Us | Book Free Strategy Call | TM Digital Marketing',
    description: 'Get in touch with founders Mohamed Thariq (+91 86087 24931) & Muja (+91 63694 80812). Book a free 30-minute growth strategy consultation.',
    keywords: 'contact TM digital marketing, book marketing consultation, Mohamed Thariq, Muja',
    canonical: 'https://tmdigitalgrow.com/contact',
    name: 'Contact'
  },
  '/privacy': {
    title: 'Privacy Policy | TM Digital Marketing Agency',
    description: 'TM Digital Marketing Privacy Policy. Google AdSense compliant details on cookies, DART cookies, user data protection, GDPR rights & founder contacts.',
    keywords: 'TM digital marketing privacy policy, data privacy, Google AdSense policy, GDPR policy',
    canonical: 'https://tmdigitalgrow.com/privacy',
    name: 'Privacy Policy'
  },
  '/terms': {
    title: 'Terms of Service & Original Content Policy | TM Digital Marketing',
    description: 'TM Digital Marketing Terms of Service, original content guarantee, intellectual property rights, and client agreement terms.',
    keywords: 'TM digital marketing terms, terms of service, content policy, original content guarantee',
    canonical: 'https://tmdigitalgrow.com/terms',
    name: 'Terms of Service'
  }
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace(/\/$/, '') || '/';
    const seo = ROUTE_SEO_MAP[currentPath] || {
      title: 'TM Digital Marketing | Growth & Digital Agency',
      description: 'TM Digital Marketing provides high-performance digital marketing, SEO, PPC, and Web Development for global businesses.',
      keywords: 'digital marketing, SEO, PPC, Web development',
      canonical: `https://tmdigitalgrow.com${location.pathname}`,
      name: 'TM Digital'
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

    // Update canonical link element
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', seo.canonical);
    }

    // Update Open Graph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.description);

    // 1. Structured Data: LocalBusiness & ProfessionalService Schema with AggregateRating
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://tmdigitalgrow.com/#organization",
      "name": "TM Digital Marketing",
      "alternateName": "TM Digital Agency",
      "url": seo.canonical,
      "logo": "https://tmdigitalgrow.com/favicon-48x48.png",
      "image": "https://tmdigitalgrow.com/logo.png",
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
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": TESTIMONIALS.length.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": TESTIMONIALS.map((t) => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": t.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": t.rating.toString(),
          "bestRating": "5"
        },
        "reviewBody": t.quote
      }))
    };

    // 2. Structured Data: WebSite Schema with SearchAction
    const webSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TM Digital Marketing",
      "url": "https://tmdigitalgrow.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tmdigitalgrow.com/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // 3. Structured Data: BreadcrumbList Schema
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tmdigitalgrow.com/"
      }
    ];

    if (currentPath !== '/') {
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": 2,
        "name": seo.name,
        "item": seo.canonical
      });
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    // 4. Structured Data: FAQ Schema
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

    // 5. Service Schema Catalog
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

    const scriptIds = [
      'seo-local-business-jsonld',
      'seo-website-jsonld',
      'seo-breadcrumb-jsonld',
      'seo-faq-jsonld',
      'seo-services-jsonld'
    ];
    const schemas = [
      localBusinessSchema,
      webSiteSchema,
      breadcrumbSchema,
      faqSchema,
      serviceCatalogSchema
    ];

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
