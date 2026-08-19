import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FAQS, CONTACT_INFO, TESTIMONIALS } from '../data/marketingData';
import { BLOG_ARTICLES } from '../data/blogData';

interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  name: string;
  serviceType?: string;
  isServicePage?: boolean;
  isBlogPage?: boolean;
}

const STATIC_ROUTE_SEO_MAP: Record<string, RouteSEO> = {
  '/': {
    title: 'TM Digital Marketing | Best Digital Marketing Agency in Tirunelveli',
    description: 'TM Digital Marketing is Tirunelveli’s premier digital marketing agency. We scale business revenue with high-ROI SEO, Meta Ads, Google Ads PPC, 3D Web Development & AI Automation in Tamil Nadu.',
    keywords: 'best digital marketing agency in Tirunelveli, digital marketing company in Tirunelveli, digital marketing services in Tirunelveli, SEO company in Tirunelveli, digital marketing agency in Nellai, digital marketing agency Tamil Nadu',
    canonical: 'https://tmdigitalgrow.com/',
    name: 'Home'
  },
  '/about': {
    title: 'About Us | TM Digital Marketing Agency Founders & Mission',
    description: 'Meet TM Digital Marketing founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812). Discover our agile 7-day sprint model, international standards, and ROI-driven marketing mission in Tirunelveli.',
    keywords: 'about TM digital marketing, agency founders, Mohamed Thariq, Muja, Tirunelveli marketing agency team',
    canonical: 'https://tmdigitalgrow.com/about',
    name: 'About Us'
  },
  '/services': {
    title: 'Services & Growth Solutions | TM Digital Marketing Tirunelveli',
    description: 'Explore our 12+ digital marketing services in Tirunelveli: Google SEO, Meta Ads, Google Search PPC, 3D Web Engineering, Video Editing, Vector Branding & D2C WhatsApp Lead Funnels.',
    keywords: 'digital marketing services Tirunelveli, SEO services, Meta Ads management, Google PPC agency, web development packages',
    canonical: 'https://tmdigitalgrow.com/services',
    name: 'Services'
  },
  '/digital-marketing-agency-tirunelveli': {
    title: 'Best Digital Marketing Agency in Tirunelveli | TM Digital Marketing',
    description: 'Scale your business revenue with Tirunelveli’s top digital marketing agency. We build full-funnel Meta Ads, Google PPC campaigns, Local SEO rankings & 3D websites for brands across Tamil Nadu.',
    keywords: 'best digital marketing agency in Tirunelveli, digital marketing company in Tirunelveli, digital marketing services in Tirunelveli, digital marketing agency in Nellai, online marketing agency Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/digital-marketing-agency-tirunelveli',
    name: 'Digital Marketing Agency Tirunelveli',
    serviceType: 'Digital Marketing Services',
    isServicePage: true
  },
  '/seo-services-tirunelveli': {
    title: 'SEO Services in Tirunelveli | #1 Google & Local SEO Agency',
    description: 'Rank #1 on Google Search and Google Maps 3-Pack with TM Digital Marketing. Technical Core Web Vitals audits, programmatic keyword maps, schema markup & high-DA link building in Tirunelveli.',
    keywords: 'SEO company in Tirunelveli, SEO agency in Tirunelveli, local SEO services Tirunelveli, SEO company in Nellai, best SEO agency Tamil Nadu',
    canonical: 'https://tmdigitalgrow.com/seo-services-tirunelveli',
    name: 'SEO Services Tirunelveli',
    serviceType: 'Search Engine Optimization (SEO)',
    isServicePage: true
  },
  '/social-media-marketing-tirunelveli': {
    title: 'Social Media Marketing Agency in Tirunelveli | Viral Reels & Growth',
    description: 'Build a viral brand on Instagram and Facebook with TM Digital Marketing. Cinematic 9:16 Reels production, vernacular Tamil/English hooks, and comment-to-WhatsApp conversion funnels in Tirunelveli.',
    keywords: 'social media marketing agency in Tirunelveli, social media marketing company in Tirunelveli, Instagram marketing agency in Tirunelveli, social media marketing in Nellai',
    canonical: 'https://tmdigitalgrow.com/social-media-marketing-tirunelveli',
    name: 'Social Media Marketing Tirunelveli',
    serviceType: 'Social Media Marketing',
    isServicePage: true
  },
  '/google-ads-tirunelveli': {
    title: 'Google Ads Agency in Tirunelveli | High-ROAS Google PPC Management',
    description: 'Capture high-intent ready-to-buy customers on Google Search and Maps. We manage Google PPC, Performance Max, and Shopping campaigns that maximize ROAS for businesses in Tirunelveli and Tamil Nadu.',
    keywords: 'Google Ads agency in Tirunelveli, Google PPC company Tirunelveli, search engine marketing Nellai, Google ads specialist Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/google-ads-tirunelveli',
    name: 'Google Ads Tirunelveli',
    serviceType: 'Google Ads PPC Management',
    isServicePage: true
  },
  '/meta-ads-tirunelveli': {
    title: 'Meta Ads Agency in Tirunelveli | Facebook & Instagram Ads Experts',
    description: 'Scale sales rapidly with Meta Ads (Facebook & Instagram). We deploy high-velocity creative testing, 9:16 video ad scripts, retargeting funnels, and CAPI server tracking for Tirunelveli brands.',
    keywords: 'Facebook Ads agency in Tirunelveli, Meta Ads agency in Tirunelveli, Instagram ads company Nellai, paid social media agency Tamil Nadu',
    canonical: 'https://tmdigitalgrow.com/meta-ads-tirunelveli',
    name: 'Meta Ads Tirunelveli',
    serviceType: 'Meta Ads (Facebook & Instagram)',
    isServicePage: true
  },
  '/web-development-tirunelveli': {
    title: 'Website Development Company in Tirunelveli | 3D React & Next.js Sites',
    description: 'Custom, ultra-fast 3D glassmorphic websites built with React, Next.js, and Tailwind CSS. 98+ Google Lighthouse scores, mobile-first responsiveness, and high lead conversion funnels in Tirunelveli.',
    keywords: 'website development company in Tirunelveli, web development company in Tirunelveli, web design company Nellai, React Nextjs web development Tamil Nadu',
    canonical: 'https://tmdigitalgrow.com/web-development-tirunelveli',
    name: 'Web Development Tirunelveli',
    serviceType: 'Website Development & Engineering',
    isServicePage: true
  },
  '/branding-tirunelveli': {
    title: 'Branding Agency in Tirunelveli | Vector Logos & Visual Identity',
    description: 'Elevate your brand into an iconic industry leader. We create bespoke corporate vector logos, luxury brand guidelines, typography hierarchies, and packaging design in Tirunelveli.',
    keywords: 'branding agency in Tirunelveli, logo design company Tirunelveli, brand identity agency Nellai, vector branding Tamil Nadu',
    canonical: 'https://tmdigitalgrow.com/branding-tirunelveli',
    name: 'Branding Tirunelveli',
    serviceType: 'Branding & Brand Identity',
    isServicePage: true
  },
  '/lead-generation-tirunelveli': {
    title: 'Lead Generation Company in Tirunelveli | Automated WhatsApp Funnels',
    description: 'Fill your sales pipeline with verified buyer leads. We build automated WhatsApp marketing funnels, 24/7 AI qualification chatbots, and direct CRM integrations in Tirunelveli and Tamil Nadu.',
    keywords: 'lead generation company in Tirunelveli, WhatsApp marketing agency Tirunelveli, B2B lead generation Nellai, conversational marketing Tamil Nadu',
    canonical: 'https://tmdigitalgrow.com/lead-generation-tirunelveli',
    name: 'Lead Generation Tirunelveli',
    serviceType: 'Lead Generation & Conversational Funnels',
    isServicePage: true
  },
  '/blog': {
    title: 'Digital Marketing & SEO Blog | Growth Insights | TM Digital',
    description: 'Expert digital marketing guides, Local SEO blueprints, Google Ads comparisons, and website development pricing breakdowns for businesses in Tirunelveli, Nellai, and Tamil Nadu.',
    keywords: 'digital marketing blog, SEO guide Tirunelveli, Google Ads vs Meta Ads, website cost Tirunelveli, marketing insights Tamil Nadu',
    canonical: 'https://tmdigitalgrow.com/blog',
    name: 'Growth Blog',
    isBlogPage: true
  },
  '/process': {
    title: 'Our 6-Step Growth Blueprint | Agile 7-Day Sprint Process',
    description: 'Discover how TM Digital Marketing launches and scales high-converting marketing campaigns in 7 days with our agile growth sprint process in Tirunelveli.',
    keywords: 'marketing process, growth sprint, campaign roadmap, 7 day launch, conversion rate optimization',
    canonical: 'https://tmdigitalgrow.com/process',
    name: 'Process'
  },
  '/deliverables': {
    title: 'Deliverables & Client Portfolio | TM Digital Marketing',
    description: 'Explore our deliverables, vector branding systems, 3D web development projects, video Reel edits, and high-ROI client case studies from Tirunelveli.',
    keywords: 'marketing deliverables, web portfolio, case studies, ad creatives, ROI results Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/deliverables',
    name: 'Deliverables'
  },
  '/why-us': {
    title: 'Why Choose Us | TM Digital Marketing Differentiators',
    description: 'Why top brands choose TM Digital Marketing in Tirunelveli: direct founder access, 7-day launch velocity, transparent real-time GA4 analytics, and 100% ROI-driven strategy.',
    keywords: 'why choose TM digital, agency comparison, direct founder access, marketing ROI guarantee Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/why-us',
    name: 'Why Us'
  },
  '/faq': {
    title: 'Frequently Asked Questions | TM Digital Marketing Tirunelveli',
    description: 'Find instant answers to questions regarding campaign launch timelines, founder access with Mohamed Thariq & Muja, pricing packages, and guarantees.',
    keywords: 'marketing FAQ, campaign launch time, founder contacts, agency pricing Tirunelveli',
    canonical: 'https://tmdigitalgrow.com/faq',
    name: 'FAQ'
  },
  '/testimonials': {
    title: 'Client Reviews & Success Stories | TM Digital Marketing Tirunelveli',
    description: 'Read verified client reviews and case studies from top businesses in Tirunelveli, Nellai, and Tamil Nadu that scaled with TM Digital Marketing.',
    keywords: 'TM digital marketing reviews, client testimonials Tirunelveli, digital marketing success stories Nellai',
    canonical: 'https://tmdigitalgrow.com/testimonials',
    name: 'Testimonials'
  },
  '/contact': {
    title: 'Contact Us | Book Free Strategy Call | TM Digital Marketing',
    description: 'Connect directly with founders Mohamed Thariq (+91 86087 24931) & Muja (+91 63694 80812). Book a free 30-minute growth strategy consultation in Tirunelveli.',
    keywords: 'contact TM digital marketing, book marketing consultation, Mohamed Thariq, Muja, digital marketing office Tirunelveli',
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
    description: 'TM Digital Marketing Terms of Service, original content guarantee, intellectual property rights, and client service agreement terms.',
    keywords: 'TM digital marketing terms, terms of service, content policy, original content guarantee',
    canonical: 'https://tmdigitalgrow.com/terms',
    name: 'Terms of Service'
  }
};

export default function SEOHead() {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname.replace(/\/$/, '') || '/';
    let currentPath = rawPath;

    // Handle dynamic blog routes /blog/:slug
    let isBlogPost = false;
    let blogArticle = undefined;
    if (rawPath.startsWith('/blog/')) {
      const slug = rawPath.replace('/blog/', '');
      blogArticle = BLOG_ARTICLES.find((a) => a.slug === slug);
      if (blogArticle) {
        isBlogPost = true;
      }
    }

    let seo: RouteSEO;
    if (isBlogPost && blogArticle) {
      seo = {
        title: blogArticle.metaTitle,
        description: blogArticle.metaDescription,
        keywords: `${blogArticle.category.toLowerCase()}, ${blogArticle.title.toLowerCase()}, TM digital marketing, Tirunelveli marketing guide`,
        canonical: `https://tmdigitalgrow.com/blog/${blogArticle.slug}`,
        name: blogArticle.title,
        isBlogPage: true
      };
    } else {
      seo = STATIC_ROUTE_SEO_MAP[currentPath] || {
        title: 'TM Digital Marketing | Best Digital Marketing Agency in Tirunelveli',
        description: 'TM Digital Marketing provides high-performance digital marketing, SEO, PPC, and Web Development for businesses in Tirunelveli and Tamil Nadu.',
        keywords: 'digital marketing, SEO, PPC, Web development, Tirunelveli',
        canonical: `https://tmdigitalgrow.com${rawPath === '/' ? '/' : rawPath}`,
        name: 'TM Digital'
      };
    }

    // 1. Update document title
    document.title = seo.title;

    // 2. Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seo.description);

    // 3. Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords);

    // 4. Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', seo.canonical);

    // 5. Update Open Graph & Twitter Tags
    const ogTags: Record<string, string> = {
      'og:title': seo.title,
      'og:description': seo.description,
      'og:url': seo.canonical,
      'og:type': isBlogPost ? 'article' : 'website',
      'og:site_name': 'TM Digital Marketing',
      'twitter:card': 'summary_large_image',
      'twitter:title': seo.title,
      'twitter:description': seo.description,
      'twitter:url': seo.canonical
    };

    if (isBlogPost && blogArticle) {
      ogTags['og:image'] = blogArticle.featuredImage;
      ogTags['twitter:image'] = blogArticle.featuredImage;
    } else {
      ogTags['og:image'] = 'https://tmdigitalgrow.com/growth_dashboard.jpg';
      ogTags['twitter:image'] = 'https://tmdigitalgrow.com/growth_dashboard.jpg';
    }

    Object.entries(ogTags).forEach(([key, val]) => {
      const isOg = key.startsWith('og:');
      const selector = isOg ? `meta[property="${key}"]` : `meta[name="${key}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (isOg) tag.setAttribute('property', key);
        else tag.setAttribute('name', key);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', val);
    });

    // 6. Structured Data: LocalBusiness / ProfessionalService Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://tmdigitalgrow.com/#organization",
      "name": "TM Digital Marketing",
      "alternateName": ["TM Digital", "TM Digital Marketing Agency Tirunelveli"],
      "url": "https://tmdigitalgrow.com/",
      "logo": "https://tmdigitalgrow.com/favicon-48x48.png",
      "image": "https://tmdigitalgrow.com/logo.png",
      "description": "TM Digital Marketing is Tirunelveli’s premier digital marketing agency specializing in Google SEO, Meta Ads, Google PPC, 3D Web Development, Vector Branding and D2C WhatsApp lead funnels.",
      "telephone": ["+91 86087 24931", "+91 63694 80812"],
      "email": CONTACT_INFO.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Tirunelveli Main Hub",
        "addressLocality": "Tirunelveli",
        "addressRegion": "Tamil Nadu",
        "postalCode": "627005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.7139,
        "longitude": 77.7567
      },
      "areaServed": [
        { "@type": "City", "name": "Tirunelveli" },
        { "@type": "City", "name": "Nellai" },
        { "@type": "City", "name": "Melapalayam" },
        { "@type": "City", "name": "Palayamkottai" },
        { "@type": "City", "name": "Tenkasi" },
        { "@type": "City", "name": "Tuticorin" },
        { "@type": "City", "name": "Madurai" },
        { "@type": "State", "name": "Tamil Nadu" },
        { "@type": "Country", "name": "India" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      },
      "hasMap": CONTACT_INFO.googleMapsUrl,
      "founder": [
        {
          "@type": "Person",
          "name": "Mohamed Thariq",
          "jobTitle": "Co-Founder & Creative Director",
          "telephone": "+91 86087 24931"
        },
        {
          "@type": "Person",
          "name": "Muja",
          "jobTitle": "Co-Founder & Chief Growth Officer",
          "telephone": "+91 63694 80812"
        }
      ],
      "sameAs": [
        CONTACT_INFO.instagram,
        "https://maps.app.goo.gl/MzWHpq6QTfUt1jho8?g_st=ac"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": TESTIMONIALS.length.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // 7. Structured Data: WebSite Schema with SearchAction
    const webSiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "TM Digital Marketing",
      "url": "https://tmdigitalgrow.com/",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tmdigitalgrow.com/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // 8. Structured Data: BreadcrumbList Schema
    const breadcrumbItems: any[] = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tmdigitalgrow.com/"
      }
    ];

    if (rawPath !== '/') {
      if (isBlogPost && blogArticle) {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://tmdigitalgrow.com/blog"
        });
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 3,
          "name": blogArticle.title,
          "item": seo.canonical
        });
      } else {
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": 2,
          "name": seo.name,
          "item": seo.canonical
        });
      }
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };

    // 9. Structured Data: Service Schema (For Service Pages)
    let serviceSchema: any = null;
    if (seo.isServicePage) {
      serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": seo.name,
        "serviceType": seo.serviceType || seo.name,
        "provider": {
          "@type": "ProfessionalService",
          "name": "TM Digital Marketing",
          "url": "https://tmdigitalgrow.com/"
        },
        "areaServed": [
          { "@type": "City", "name": "Tirunelveli" },
          { "@type": "City", "name": "Nellai" },
          { "@type": "State", "name": "Tamil Nadu" }
        ],
        "description": seo.description,
        "url": seo.canonical
      };
    }

    // 10. Structured Data: Article Schema (For Blog Posts)
    let articleSchema: any = null;
    if (isBlogPost && blogArticle) {
      articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blogArticle.title,
        "description": blogArticle.metaDescription,
        "image": [blogArticle.featuredImage],
        "datePublished": blogArticle.publishedDate,
        "dateModified": blogArticle.updatedDate,
        "mainEntityOfPage": seo.canonical,
        "author": {
          "@type": "Person",
          "name": blogArticle.author.name,
          "jobTitle": blogArticle.author.role
        },
        "publisher": {
          "@type": "Organization",
          "name": "TM Digital Marketing",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tmdigitalgrow.com/favicon-48x48.png"
          }
        }
      };
    }

    // 11. Structured Data: FAQPage Schema
    let faqSchema: any = null;
    if (rawPath === '/faq' || rawPath === '/') {
      faqSchema = {
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
    } else if (isBlogPost && blogArticle && blogArticle.faqs && blogArticle.faqs.length > 0) {
      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": blogArticle.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      };
    }

    const scriptIds = [
      'seo-local-business-jsonld',
      'seo-website-jsonld',
      'seo-breadcrumb-jsonld',
      'seo-service-jsonld',
      'seo-article-jsonld',
      'seo-faq-jsonld'
    ];

    scriptIds.forEach((id) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    });

    const activeSchemas = [
      { id: 'seo-local-business-jsonld', data: localBusinessSchema },
      { id: 'seo-website-jsonld', data: webSiteSchema },
      { id: 'seo-breadcrumb-jsonld', data: breadcrumbSchema },
      { id: 'seo-service-jsonld', data: serviceSchema },
      { id: 'seo-article-jsonld', data: articleSchema },
      { id: 'seo-faq-jsonld', data: faqSchema }
    ];

    activeSchemas.forEach(({ id, data }) => {
      if (data) {
        const script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data);
        document.head.appendChild(script);
      }
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
