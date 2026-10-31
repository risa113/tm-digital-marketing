export type PortfolioCategory =
  | 'All Projects'
  | 'Branding & Identity'
  | 'Banner Designing'
  | 'Advertisement Designing'
  | 'Visiting Card Designing';

export interface CreativeProject {
  id: string;
  title: string;
  client: string;
  service: string;
  category: 'Branding & Identity' | 'Banner Designing' | 'Advertisement Designing' | 'Visiting Card Designing';
  description: string;
  image: string;
  galleryImages: string[];
  deliverableTag: string;
  clientLocation: string;
  altText: string;
  imageFit: 'contain' | 'cover';
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'banner';
  specs: {
    format: string;
    resolution: string;
    deliveryTime: string;
    industry: string;
  };
  highlights: string[];
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All Projects',
  'Branding & Identity',
  'Banner Designing',
  'Advertisement Designing',
  'Visiting Card Designing'
];

export const CREATIVE_PROJECTS: CreativeProject[] = [
  {
    id: 'crescent-construction-branding',
    title: 'Professional Branding & Logo Design',
    client: 'Crescent Construction',
    service: 'Professional Branding & Logo Design',
    category: 'Branding & Identity',
    description: 'Custom corporate visual identity designed with an iconic golden crescent silhouette enclosing modern architectural lines. Built for high-trust visibility across commercial infrastructure, residential projects, and brand stationery.',
    image: '/portfolio/branding/crescent-construction-logo-design.jpg',
    galleryImages: [
      '/portfolio/branding/crescent-construction-logo-design.jpg',
      '/portfolio/banners/crescent-construction-promotional-banner.jpg'
    ],
    deliverableTag: 'Vector Logo Suite & Brand System',
    clientLocation: 'Melapalayam, Tirunelveli',
    altText: 'Crescent Construction Professional Branding & Logo Design by TM Digital Marketing Agency',
    imageFit: 'contain',
    aspectRatio: 'banner',
    specs: {
      format: 'AI, SVG, EPS, PNG, PDF',
      resolution: 'Vector Scalable / 300 DPI Print',
      deliveryTime: 'Completed Client Delivery',
      industry: 'Construction & Real Estate'
    },
    highlights: [
      'Architectural Golden Crescent Mark',
      'Dual-Tone Executive Blue & Gold Typography',
      'Corporate Vector Stationery & Brand Assets'
    ]
  },
  {
    id: 'crescent-roofing-branding',
    title: 'Professional Branding & Logo Design',
    client: 'Crescent Roofing',
    service: 'Professional Branding & Logo Design',
    category: 'Branding & Identity',
    description: 'Industrial engineering brand mark integrating heavy structural roofing trusses, skylight geometric lattices, and bold royal blue-gold contrast for pre-engineered buildings and industrial steel fabrication.',
    image: '/portfolio/branding/crescent-roofing-logo-design.jpg',
    galleryImages: [
      '/portfolio/branding/crescent-roofing-logo-design.jpg',
      '/portfolio/banners/crescent-roofing-promotional-banner.jpg'
    ],
    deliverableTag: 'Industrial Brand Mark & Identity',
    clientLocation: 'Melapalayam, Tirunelveli',
    altText: 'Crescent Roofing Professional Branding & Logo Design by TM Digital Marketing Agency',
    imageFit: 'contain',
    aspectRatio: 'banner',
    specs: {
      format: 'AI, SVG, EPS, PNG, PDF',
      resolution: 'Vector Scalable / 300 DPI Print',
      deliveryTime: 'Completed Client Delivery',
      industry: 'Industrial Steel Fabrication'
    },
    highlights: [
      'Structural Trusses Engineering Emblem',
      'Industrial Heavy Fabrication Visual Balance',
      'High-Contrast Safety Blue & Metallic Gold'
    ]
  },
  {
    id: 'crescent-construction-banner',
    title: 'Professional Promotional Banner Design',
    client: 'Crescent Construction',
    service: 'Professional Promotional Banner Design',
    category: 'Banner Designing',
    description: 'High-impact outdoor promotional hoarding banner design combining 3D commercial building visuals, luxury modern residences, clear contact funnels, and core civil engineering service highlights.',
    image: '/portfolio/banners/crescent-construction-promotional-banner.jpg',
    galleryImages: [
      '/portfolio/banners/crescent-construction-promotional-banner.jpg',
      '/portfolio/branding/crescent-construction-logo-design.jpg'
    ],
    deliverableTag: 'Large Format Outdoor Promotional Banner',
    clientLocation: 'Melapalayam, Tirunelveli',
    altText: 'Crescent Construction Professional Promotional Banner Design by TM Digital Marketing Agency',
    imageFit: 'contain',
    aspectRatio: 'landscape',
    specs: {
      format: 'TIFF, PDF, CMYK Large Flex',
      resolution: 'Ultra High-Res Outdoor Display',
      deliveryTime: 'Completed Client Delivery',
      industry: 'Commercial & Residential Construction'
    },
    highlights: [
      'Large Format Hoarding & Flex Alignment',
      'Visual Segmentation of Core Construction Services',
      'High-Visibility Highway Contact CTA Placement'
    ]
  },
  {
    id: 'crescent-roofing-banner',
    title: 'Professional Promotional Banner Design',
    client: 'Crescent Roofing',
    service: 'Professional Promotional Banner Design',
    category: 'Banner Designing',
    description: 'Comprehensive industrial flex banner detailing pre-engineered buildings, UPVC roofing systems, cold storage structures, steel bridges, and GST-compliant corporate fabrication specifications.',
    image: '/portfolio/banners/crescent-roofing-promotional-banner.jpg',
    galleryImages: [
      '/portfolio/banners/crescent-roofing-promotional-banner.jpg',
      '/portfolio/branding/crescent-roofing-logo-design.jpg'
    ],
    deliverableTag: 'Industrial Flex & Workshop Banner',
    clientLocation: 'Melapalayam, Tirunelveli',
    altText: 'Crescent Roofing Professional Promotional Banner Design by TM Digital Marketing Agency',
    imageFit: 'contain',
    aspectRatio: 'landscape',
    specs: {
      format: 'TIFF, PDF, CMYK Flex',
      resolution: 'Workshop & Roadside Display 300 DPI',
      deliveryTime: 'Completed Client Delivery',
      industry: 'Pre-Engineering & Steel Fabrication'
    },
    highlights: [
      'Comprehensive 8-Point Fabrication Catalog',
      'Crisp Workshop & Construction Site Action Photos',
      'Industrial Standard Specifications & GST Showcase'
    ]
  },
  {
    id: 'al-tamam-furniture-advertisement',
    title: 'Newspaper Advertisement Design',
    client: 'Al Tamam Furniture Manufacturing LLC',
    service: 'Newspaper Advertisement Design',
    category: 'Advertisement Designing',
    description: 'Full-page vernacular newspaper advertisement layout highlighting premium living room, bedroom, dining, office, and custom modular furniture with structured promotional pricing and store location CTAs.',
    image: '/portfolio/advertisements/al-tamam-furniture-newspaper-advertisement.jpg',
    galleryImages: [
      '/portfolio/advertisements/al-tamam-furniture-newspaper-advertisement.jpg'
    ],
    deliverableTag: 'Full Page Newspaper & Print Advertisement',
    clientLocation: 'Melapalayam, Tirunelveli',
    altText: 'Al Tamam Furniture Newspaper Advertisement Design by TM Digital Marketing Agency',
    imageFit: 'contain',
    aspectRatio: 'portrait',
    specs: {
      format: 'Print Press CMYK PDF, High-Res JPEG',
      resolution: 'Newspaper Quality 300 DPI',
      deliveryTime: 'Completed Client Delivery',
      industry: 'Luxury Furniture & Interior Manufacturing'
    },
    highlights: [
      'High-Contrast Vernacular Tamil Typography Hierarchy',
      '8-Category Visual Grid for Products & Showroom Deals',
      'Clear Multi-Line WhatsApp & Phone Contact Box'
    ]
  },
  {
    id: 'masha-catering-advertisement',
    title: 'Festival Bucket Biriyani Advertisement Design',
    client: 'Masha Catering Service',
    service: 'Newspaper & Promotional Advertisement Design',
    category: 'Advertisement Designing',
    description: 'Festive commercial advertisement flyer design featuring rich emerald and gold festive lighting aesthetics, appetizing product staging, transparent menu pricing, and direct order channels.',
    image: '/portfolio/advertisements/masha-catering-festival-advertisement.jpg',
    galleryImages: [
      '/portfolio/advertisements/masha-catering-festival-advertisement.jpg'
    ],
    deliverableTag: 'Commercial Festive Print & Digital Flyer',
    clientLocation: 'Melapalayam, Tirunelveli',
    altText: 'Masha Catering Service Festival Bucket Biriyani Advertisement Design by TM Digital Marketing Agency',
    imageFit: 'contain',
    aspectRatio: 'portrait',
    specs: {
      format: 'RGB Digital Flyer & CMYK Print Leaflet',
      resolution: '300 DPI Ultra Vibrant',
      deliveryTime: 'Completed Client Delivery',
      industry: 'Catering & Hospitality Services'
    },
    highlights: [
      'Royal Emerald & Festive Gold Islamic Theme',
      'Transparent Multi-Tier Pricing for Full & Half Buckets',
      'High-Conversion Instant WhatsApp Order Ingestion'
    ]
  },
  {
    id: 'al-tamam-visiting-card',
    title: 'Corporate Visiting Card Design',
    client: 'Crescent Properties / Al Tamam Corporate',
    service: 'Corporate Visiting Card Design',
    category: 'Visiting Card Designing',
    description: 'Executive matte navy-black and metallic gold double-sided visiting card design featuring luxury interior staging, rounded corner geometry, QR contact integration, and corporate business classification.',
    image: '/portfolio/visiting-cards/al-tamam-corporate-visiting-card.jpg',
    galleryImages: [
      '/portfolio/visiting-cards/al-tamam-corporate-visiting-card.jpg'
    ],
    deliverableTag: 'Double-Sided Executive Visiting Card',
    clientLocation: 'Melapalayam, Tirunelveli',
    altText: 'Corporate Visiting Card Design by TM Digital Marketing Agency',
    imageFit: 'contain',
    aspectRatio: 'landscape',
    specs: {
      format: 'Die-Cut CMYK 350 GSM Print PDF',
      resolution: 'Ultra High Definition 600 DPI',
      deliveryTime: 'Completed Client Delivery',
      industry: 'Executive Corporate & Real Estate'
    },
    highlights: [
      'Dual-Sided Executive Layout (Front & Reverse)',
      'Subtle Gold Trim Accents & Modern Rounded Corner Finish',
      'Dual Furniture & Land Promotion Contact Classification'
    ]
  }
];
