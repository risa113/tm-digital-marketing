export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  metric: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Websites' | 'Branding & Logos' | 'Social & Reels' | 'Ad Creatives' | 'Campaign Funnels';
  client: string;
  result: string;
  image: string;
  summary: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  companyLogo: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface PricingPackage {
  id: string;
  icon: string;
  name: string;
  price: string;
  subtitle: string;
  delivery: string;
  features: string[];
  cta: string;
  popular?: boolean;
  popularTag?: string;
}

export const WEBSITE_PACKAGES: PricingPackage[] = [
  {
    id: 'starter',
    icon: '🚀',
    name: 'Starter',
    price: '₹7,999',
    subtitle: 'Perfect for: Personal Brands, Freelancers & Small Businesses',
    delivery: '3–5 Business Days',
    features: [
      '1 Premium Landing Page',
      'Responsive Design (Mobile, Tablet & Desktop)',
      'Modern UI/UX Design',
      'Contact Form',
      'WhatsApp Integration',
      'Google Maps Integration',
      'Basic SEO Optimization',
      'Speed Optimization',
      'SSL Setup Assistance',
      '1 Revision',
      '1 Month Support'
    ],
    cta: 'Get Started',
    popular: false
  },
  {
    id: 'growth',
    icon: '⭐',
    name: 'Growth',
    price: '₹17,999',
    subtitle: 'Perfect for: Startups & Growing Businesses',
    delivery: '5–7 Business Days',
    features: [
      'Up to 5 Custom Pages',
      'Premium Responsive Design',
      'Professional UI/UX',
      'Contact Forms',
      'WhatsApp Chat Integration',
      'Google Analytics Setup',
      'Google Search Console Setup',
      'Basic SEO Optimization',
      'Performance Optimization',
      'Image Optimization',
      'Social Media Integration',
      '2 Months Support'
    ],
    cta: 'Start Your Project',
    popular: false
  },
  {
    id: 'professional',
    icon: '💎',
    name: 'Professional',
    price: '₹34,999',
    subtitle: 'Perfect for: Companies & Established Businesses',
    delivery: '7–12 Business Days',
    features: [
      'Up to 8 Premium Pages',
      'Custom UI/UX Design',
      'Dynamic Website Features',
      'Admin Dashboard',
      'Blog Management',
      'Gallery Management',
      'Advanced SEO Optimization',
      'Google Analytics Setup',
      'Google Search Console Setup',
      'Performance Optimization',
      'Website Security',
      'Backup Configuration',
      '3 Months Support'
    ],
    cta: 'Choose Professional',
    popular: true,
    popularTag: '⭐ Most Popular'
  },
  {
    id: 'enterprise',
    icon: '👑',
    name: 'Enterprise',
    price: 'Starting from ₹79,999',
    subtitle: 'Perfect for: Large Businesses & Enterprise Solutions',
    delivery: 'Custom Project Timeline',
    features: [
      'Unlimited Pages',
      'Fully Dynamic Website',
      'Custom Admin Dashboard',
      'Database Integration',
      'API Integration',
      'Payment Gateway',
      'Booking & Appointment System',
      'AI Chatbot Integration',
      'CRM Integration',
      'Enterprise SEO Strategy',
      'Advanced Security',
      'Automated Backups',
      'Priority Support',
      'Custom Feature Development'
    ],
    cta: 'Contact Sales',
    popular: false
  }
];

export const CONTACT_INFO = {
  companyName: 'TM Digital Marketing',
  tagline: 'CONNECT • ENGAGE • GROW',
  contacts: [
    { name: 'MOHAMED THARIQ', phone: '8608724931', formattedPhone: '+91 86087 24931' },
    { name: 'MUJA', phone: '6369480812', formattedPhone: '+91 63694 80812' }
  ],
  email: 'tmdigitalgrow@gmail.com',
  instagram: 'https://www.instagram.com/tm_digital_marketing_/',
  googleMapsUrl: 'https://maps.app.goo.gl/MzWHpq6QTfUt1jho8?g_st=ac',
  location: 'TM Digital Marketing Headquarters'
};

export const STATS = [
  { value: 100, suffix: '%', label: 'ROI & Data Driven', desc: 'Zero vanity metrics, 100% focused on revenue' },
  { value: 7, suffix: ' Days', label: 'Fast Campaign Launch', desc: 'Agile sprint launch for immediate market testing' },
  { value: 24, suffix: '/7', label: 'Founder Support', desc: 'Direct access to Mohamed Thariq & Muja' },
  { value: 10, suffix: '+', label: 'Growth Channels', desc: 'Meta, Google Ads, SEO & Web Dev' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    shortDesc: 'Dominate Google search results with programmatic SEO, semantic content clusters & technical site authority.',
    fullDesc: 'We optimize your website to rank #1 on Google for high-intent buyer queries using technical Core Web Vitals audits and keyword opportunity maps.',
    iconName: 'Search',
    tag: 'Organic Growth',
    metric: '+350% Organic Traffic'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'Build a viral brand presence on Instagram, LinkedIn, Facebook & TikTok with scroll-stopping content.',
    fullDesc: 'Engage and grow your community across all social networks with high-impact visual grids, daily interactive stories, and organic growth strategies.',
    iconName: 'Share2',
    tag: 'Brand Building',
    metric: 'Viral Impressions'
  },
  {
    id: 'meta-ads',
    title: 'Meta Ads (Facebook & Instagram)',
    shortDesc: 'Scale sales rapidly with ad copy testing, UGC video creatives & lookalike retargeting funnels.',
    fullDesc: 'Turn Facebook and Instagram into continuous revenue generators. We run high-velocity creative testing, retargeting funnels, and CAPI server tracking.',
    iconName: 'Target',
    tag: 'Paid Acquisition',
    metric: 'High ROAS Scaling'
  },
  {
    id: 'google-ads',
    title: 'Google Ads (Search & Display)',
    shortDesc: 'Capture ready-to-buy search intent through high-conversion Google PPC & Performance Max campaigns.',
    fullDesc: 'Reach customers the exact instant they search for your services. We manage Google Search PPC, Shopping, YouTube Ads, and Performance Max.',
    iconName: 'TrendingUp',
    tag: 'PPC Mastery',
    metric: 'Lower Acquisition Cost'
  },
  {
    id: 'website-development',
    title: 'Website Development',
    shortDesc: 'Ultra-fast 3D glassmorphic websites built with Next.js, React, Three.js & Tailwind CSS for maximum conversion.',
    fullDesc: 'Bespoke corporate web platforms engineered for lightning speed, mobile responsiveness, seamless UX, and high lead capture rates.',
    iconName: 'Code',
    tag: 'Engineering',
    metric: '98+ Lighthouse Score'
  },
  {
    id: 'branding',
    title: 'Branding & Brand Identity',
    shortDesc: 'Stand out from competitors with luxury brand guidelines, logo systems & brand positioning.',
    fullDesc: 'Unforgettable visual identities tailored for fast-moving businesses, including color tokens, typography systems, vector logos, and brand books.',
    iconName: 'Palette',
    tag: 'Creative Studio',
    metric: '100% Brand Clarity'
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    shortDesc: 'High-converting social graphics, promotional posters & visual branding assets tailored for Tirunelveli businesses.',
    fullDesc: 'Custom vector graphics, promotional campaign banners, social media post templates, and commercial print collateral.',
    iconName: 'Palette',
    tag: 'Design Studio',
    metric: 'High Visual Impact'
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Motion Graphics',
    shortDesc: 'Cinematic commercial edits, 3D product animations & high-energy Reels/TikTok ad scripts.',
    fullDesc: 'Transform raw footage into scroll-stopping video ads optimized for TikTok, Instagram Reels, and YouTube shorts.',
    iconName: 'Video',
    tag: 'Motion Studio',
    metric: 'High CTR Animations'
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    shortDesc: 'Persuasive sales copywriting, thought leadership blogs & viral newsletter engines.',
    fullDesc: 'Direct-response copywriting and strategic content that educates prospects and drives high-intent booking conversions.',
    iconName: 'FileText',
    tag: 'Copywriting',
    metric: 'Persuasive Copy'
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp Marketing',
    shortDesc: 'Direct-to-consumer conversational funnels, automated broadcasts & instant customer support.',
    fullDesc: 'Leverage the 98% open rate of WhatsApp with segmented broadcast campaigns, automated catalog messaging, and CRM routing.',
    iconName: 'MessageSquare',
    tag: 'Direct Messaging',
    metric: '98% Open Rate'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    shortDesc: 'Automated Klaviyo & ActiveCampaign flows for abandoned carts, welcome sequences & subscriber nurture.',
    fullDesc: 'Turn email lists into recurring revenue streams with hyper-segmented behavioral email automation sequences.',
    iconName: 'Mail',
    tag: 'Lifecycle Funnels',
    metric: 'Automated Sales'
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Agents',
    shortDesc: 'Automate customer support, lead qualification & business workflows with custom AI assistants & bots.',
    fullDesc: 'Deploy 24/7 intelligent AI chatbots, automated CRM data routing, dynamic email responses, and lead scraping engines.',
    iconName: 'Bot',
    tag: 'AI Technology',
    metric: '24/7 Auto Conversion'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: '01', title: 'Research & Discovery', desc: 'Fast-track audit of your target audience, competitors & growth channels.' },
  { step: '02', title: 'Agile Growth Strategy', desc: 'Custom 30-day roadmap tailored for immediate lead generation.' },
  { step: '03', title: 'Creative Content Sprint', desc: 'Rapid production of ad copy, high-impact graphics & video assets.' },
  { step: '04', title: 'Campaign Launch', desc: 'Omnichannel launch across Meta Ads, Google PPC & Social Media.' },
  { step: '05', title: 'Conversion Tuning', desc: 'A/B testing, bidding adjustments & checkout funnel optimization.' },
  { step: '06', title: 'Scale & Dominate', desc: 'Scale winning ad creatives aggressively to build market leadership.' }
];

// Verified 100% reliable HTTPS Unsplash URLs for GitHub Pages hosting!
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: '3D Glassmorphic Corporate & E-Commerce Web Platforms',
    category: 'Websites',
    client: 'TM Digital Engineering',
    result: 'Ultra-Fast Conversion Engine',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    summary: 'Custom high-speed React & Next.js websites built with 3D interactive canvases, mobile responsiveness, and high lead capture funnels.'
  },
  {
    id: 'p2',
    title: '3D Vector Logo Systems & Brand Guidelines',
    category: 'Branding & Logos',
    client: 'TM Design Studio',
    result: 'Luxury Visual Identity',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop',
    summary: 'Bespoke corporate vector logo marks, color tokens, typography hierarchy, and executive brand identity systems.'
  },
  {
    id: 'p3',
    title: 'High-Impact Instagram Reels & Commercial Motion Graphics',
    category: 'Social & Reels',
    client: 'TM Motion Studio',
    result: 'Viral Audience Engagement',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop',
    summary: 'Cinematic 9:16 scroll-stopping video edits, motion graphics, sound design, and viral ad scripting for Instagram Reels and TikTok.'
  },
  {
    id: 'p4',
    title: 'High-Converting Meta & Google PPC Creative Banners',
    category: 'Ad Creatives',
    client: 'TM Performance Creative',
    result: 'High Click-Through Rate',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop',
    summary: 'A/B tested promotional ad banners engineered for maximum CTR across Facebook, Instagram, and Google Display networks.'
  },
  {
    id: 'p5',
    title: 'Full-Funnel Meta Ads & Google Search Growth Blueprints',
    category: 'Campaign Funnels',
    client: 'TM Strategy Lab',
    result: 'Targeted Buyer Acquisition',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    summary: 'Structured customer acquisition funnels, buyer persona targeting, and Performance Max Google PPC campaign architecture.'
  },
  {
    id: 'p6',
    title: 'D2C WhatsApp Broadcast & Automated Lead Funnels',
    category: 'Campaign Funnels',
    client: 'TM Direct Messaging',
    result: '98% Open Rate Funnels',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=800&auto=format&fit=crop',
    summary: 'Automated catalog messaging, broadcasting flows, and instant lead capture routed directly to your sales executives.'
  }
];

export const WHY_CHOOSE_US = {
  others: [
    { title: 'Slow & Outdated Agencies', desc: 'Long wait times and cookie-cutter monthly templates.' },
    { title: 'No Founder Access', desc: 'Delegated to junior interns with zero strategic accountability.' },
    { title: 'Poor Design Quality', desc: 'Generic outdated layouts that fail to build customer trust.' },
    { title: 'Wasted Ad Spend', desc: 'No weekly optimization or creative testing.' }
  ],
  tmDigital: [
    { title: 'Agile Velocity', desc: '7-day campaign launch with rapid sprint execution.' },
    { title: 'Direct Founder Access', desc: 'Direct 1-on-1 strategy with Mohamed Thariq & Muja.' },
    { title: 'Modern Luxury Design', desc: 'Apple + Stripe inspired glassmorphic aesthetic.' },
    { title: 'Data & ROI Driven', desc: '100% focused on lead generation and revenue scaling.' },
    { title: 'Direct WhatsApp Support', desc: 'Instant communication with founders.' }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Elena Rostova',
    role: 'CEO & Founder',
    company: 'Aura Skincare',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    companyLogo: '⚡ AURA',
    rating: 5,
    quote: 'TM Digital Marketing is the most agile team we have worked with. Mohamed Thariq and Muja launched our Meta Ads and modern website in under a week!'
  },
  {
    id: 't2',
    name: 'Marcus Sterling',
    role: 'Co-Founder',
    company: 'Sterling Tech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    companyLogo: '🏛️ STERLING',
    rating: 5,
    quote: 'Direct communication with founders Mohamed Thariq and Muja made all the difference. Their data-driven PPC strategy gave us instant sales momentum.'
  },
  {
    id: 't3',
    name: 'Sophia Chen',
    role: 'Product Lead',
    company: 'Hyperion Tech',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    companyLogo: '🚀 HYPERION',
    rating: 5,
    quote: 'Their mindset and dedication to ROI are unmatched. If you want fast results and modern designs, partner with TM Digital Marketing today.'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How fast can you launch our digital marketing campaigns?',
    answer: 'We operate with agile speed! Our team builds and launches your ad campaigns, website, or branding assets in 5 to 7 days.'
  },
  {
    id: 'f2',
    question: 'Will I work directly with the founders, Mohamed Thariq and Muja?',
    answer: 'Yes! You work directly with founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812).'
  },
  {
    id: 'f3',
    question: 'Where is your company located?',
    answer: 'You can visit our official company location on Google Maps at https://maps.app.goo.gl/MzWHpq6QTfUt1jho8?g_st=ac or click the location card in our contact section!'
  },
  {
    id: 'f4',
    question: 'What marketing channels do you specialize in?',
    answer: 'We specialize in Meta Ads (Facebook & Instagram), Google Search & Shopping PPC, Programmatic SEO, 3D Web Development, Video Editing, Content Creation, and WhatsApp Marketing.'
  }
];
