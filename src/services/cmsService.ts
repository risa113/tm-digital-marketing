import { CREATIVE_PROJECTS, CreativeProject } from '../data/portfolioData';
import { SERVICES, ServiceItem, TESTIMONIALS, CONTACT_INFO } from '../data/marketingData';

// Types
export interface CMSPortfolioProject extends CreativeProject {
  status: 'published' | 'draft';
  order: number;
  featured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CMSMediaAsset {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  category: 'branding' | 'banners' | 'advertisements' | 'visiting-cards' | 'general';
  uploadedAt: string;
  dimensions?: { width: number; height: number };
}

export interface CMSService extends ServiceItem {
  status: 'published' | 'draft';
  order: number;
  category?: string;
}

export interface CMSTestimonial {
  id: string;
  client: string;
  company: string;
  role: string;
  rating: number;
  quote: string;
  verified: boolean;
  service?: string;
  status: 'published' | 'draft';
  createdAt: string;
}

export interface CMSHomeContent {
  badge: string;
  heroHeading: string;
  heroHeadingHighlight: string;
  heroSubtitle: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  heroStats: { value: string; label: string; sublabel: string }[];
}

export interface CMSAboutContent {
  badge: string;
  title: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
}

export interface CMSContactSettings {
  phone1: string;
  phone2: string;
  whatsappNumber: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
  businessHours: string;
}

export interface CMSSEOSettings {
  pageId: string;
  pageTitle: string;
  metaDescription: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
}

export interface CMSWebsiteSettings {
  siteName: string;
  tagline: string;
  logoText: string;
  footerText: string;
  copyrightText: string;
  enableAnnouncement: boolean;
  announcementText: string;
}

export interface CMSActivityLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  target: string;
  category: 'portfolio' | 'services' | 'media' | 'content' | 'seo' | 'settings' | 'auth';
  details?: string;
}

// Storage Keys
const STORAGE_KEYS = {
  PORTFOLIO: 'tm_cms_portfolio_v1',
  MEDIA: 'tm_cms_media_v1',
  SERVICES: 'tm_cms_services_v1',
  TESTIMONIALS: 'tm_cms_testimonials_v1',
  HOME: 'tm_cms_home_v1',
  ABOUT: 'tm_cms_about_v1',
  CONTACT: 'tm_cms_contact_v1',
  SEO: 'tm_cms_seo_v1',
  SETTINGS: 'tm_cms_settings_v1',
  ACTIVITY: 'tm_cms_activity_v1'
};

// Seed Defaults
const initialProjects: CMSPortfolioProject[] = CREATIVE_PROJECTS.map((project, idx) => ({
  ...project,
  status: 'published',
  order: idx + 1,
  featured: true,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}));

const initialMedia: CMSMediaAsset[] = [
  {
    id: 'm1',
    name: 'Crescent Construction Logo Design',
    url: '/portfolio/branding/crescent-construction-logo-design.jpg',
    size: 51774,
    type: 'image/jpeg',
    category: 'branding',
    uploadedAt: new Date().toISOString(),
    dimensions: { width: 764, height: 215 }
  },
  {
    id: 'm2',
    name: 'Crescent Roofing Logo Design',
    url: '/portfolio/branding/crescent-roofing-logo-design.jpg',
    size: 26980,
    type: 'image/jpeg',
    category: 'branding',
    uploadedAt: new Date().toISOString(),
    dimensions: { width: 540, height: 185 }
  },
  {
    id: 'm3',
    name: 'Crescent Construction Promotional Banner',
    url: '/portfolio/banners/crescent-construction-promotional-banner.jpg',
    size: 428016,
    type: 'image/jpeg',
    category: 'banners',
    uploadedAt: new Date().toISOString(),
    dimensions: { width: 1024, height: 584 }
  },
  {
    id: 'm4',
    name: 'Crescent Roofing Promotional Banner',
    url: '/portfolio/banners/crescent-roofing-promotional-banner.jpg',
    size: 388391,
    type: 'image/jpeg',
    category: 'banners',
    uploadedAt: new Date().toISOString(),
    dimensions: { width: 1024, height: 584 }
  },
  {
    id: 'm5',
    name: 'Al Tamam Furniture Newspaper Advertisement',
    url: '/portfolio/advertisements/al-tamam-furniture-newspaper-advertisement.jpg',
    size: 291933,
    type: 'image/jpeg',
    category: 'advertisements',
    uploadedAt: new Date().toISOString(),
    dimensions: { width: 662, height: 1024 }
  },
  {
    id: 'm6',
    name: 'Masha Catering Festival Biriyani Advertisement',
    url: '/portfolio/advertisements/masha-catering-festival-advertisement.jpg',
    size: 588310,
    type: 'image/jpeg',
    category: 'advertisements',
    uploadedAt: new Date().toISOString(),
    dimensions: { width: 682, height: 1024 }
  },
  {
    id: 'm7',
    name: 'Al Tamam Corporate Visiting Card',
    url: '/portfolio/visiting-cards/al-tamam-corporate-visiting-card.jpg',
    size: 323179,
    type: 'image/jpeg',
    category: 'visiting-cards',
    uploadedAt: new Date().toISOString(),
    dimensions: { width: 1024, height: 585 }
  }
];

const initialServices: CMSService[] = SERVICES.map((s, idx) => ({
  ...s,
  status: 'published',
  order: idx + 1,
  category: 'Digital Marketing'
}));

const initialTestimonials: CMSTestimonial[] = TESTIMONIALS.map((t, idx) => ({
  id: `test-${idx + 1}`,
  client: t.name,
  company: t.company || 'Enterprise Client',
  role: t.role,
  rating: t.rating || 5,
  quote: t.quote,
  verified: true,
  status: 'published',
  createdAt: new Date().toISOString()
}));

const initialHomeContent: CMSHomeContent = {
  badge: 'TIRUNELVELI’S PREMIER DIGITAL GROWTH AGENCY',
  heroHeading: 'Scale Your Business Revenue With',
  heroHeadingHighlight: 'High-ROAS Marketing & 3D Web Apps',
  heroSubtitle: 'We help local businesses and high-growth brands dominate search rankings, run profitable ad funnels, and build international-standard websites.',
  primaryCtaText: 'Book Free 30-Min Strategy Call',
  primaryCtaLink: '#contact',
  secondaryCtaText: 'Explore Completed Work',
  secondaryCtaLink: '/completed-projects',
  heroStats: [
    { value: '+340%', label: 'Average Inbound Growth', sublabel: 'Verified Lead Generation' },
    { value: '5.2x', label: 'Average ROAS on Meta & Google', sublabel: 'Profitable Customer Acquisition' },
    { value: '7 Days', label: 'Sprint Launch Velocity', sublabel: 'Agile Full-Funnel Deployment' },
    { value: '100%', label: 'Founder Direct Accountability', sublabel: 'Zero Junior Account Managers' }
  ]
};

const initialAboutContent: CMSAboutContent = {
  badge: 'FOUNDER-LED DIGITAL EXCELLENCE',
  title: 'Built to Elevate Southern Tamil Nadu Brands to Global Standards',
  description: 'Founded by Mohamed Thariq and Muja, TM Digital Marketing combines modern creative direction with aggressive mathematical ROI. We treat every client campaign as an equity-level partnership.',
  mission: 'To empower businesses in Tirunelveli and beyond with silicon-valley grade digital marketing, high-performance web engineering, and transparent lead generation.',
  vision: 'To be the undisputed #1 performance marketing and web agency in South India, celebrated for client results, modern design, and measurable revenue scaling.',
  values: [
    'Direct Founder Accountability',
    'Mathematical ROI Over Fluff',
    'Modern Luxury Visuals',
    '7-Day Sprint Agility',
    'Long-Term Client Partnership'
  ]
};

const initialContactSettings: CMSContactSettings = {
  phone1: '+91 86087 24931',
  phone2: '+91 63694 80812',
  whatsappNumber: '+91 86087 24931',
  email: 'tmdigitalmarketingofficial@gmail.com',
  address: '11-G, Ambasamudram Road, Near Bharath Petrol Bulk, Melapalayam, Tirunelveli - 627005',
  googleMapsUrl: CONTACT_INFO.googleMapsUrl || 'https://maps.google.com/?q=Melapalayam,Tirunelveli',
  instagramUrl: 'https://instagram.com/tmdigitalmarketing',
  linkedinUrl: 'https://linkedin.com/company/tm-digital-marketing',
  businessHours: 'Monday – Saturday: 9:00 AM – 8:00 PM IST'
};

const initialSEOSettings: CMSSEOSettings[] = [
  {
    pageId: 'home',
    pageTitle: 'TM Digital Marketing | Best Digital Marketing Agency in Tirunelveli',
    metaDescription: 'TM Digital Marketing is Tirunelveli’s premier digital marketing agency. We scale business revenue with high-ROI SEO, Meta Ads, Google Ads PPC, 3D Web Development & AI Automation in Tamil Nadu.',
    keywords: 'best digital marketing agency in Tirunelveli, digital marketing company in Tirunelveli, SEO services Tirunelveli, Meta ads agency Tirunelveli',
    ogTitle: 'TM Digital Marketing | Best Digital Marketing Agency in Tirunelveli',
    ogDescription: 'Scale business revenue with high-ROI SEO, Meta Ads, Google Ads PPC & 3D Web Development in Tirunelveli.',
    ogImage: '/logo-full.png',
    canonicalUrl: 'https://tmdigitalgrow.com/'
  },
  {
    pageId: 'completed-projects',
    pageTitle: 'Completed Client Projects & Creative Work Portfolio | TM Digital Marketing',
    metaDescription: 'Explore completed client projects by TM Digital Marketing: branding & logo design, promotional banner designing, newspaper advertisements, visiting cards, and live web platforms in Tirunelveli.',
    keywords: 'Digital Marketing Agency, Branding Services, Banner Designing, Advertisement Designing, Visiting Card Designing, Graphic Design Services, completed client projects',
    ogTitle: 'Completed Client Projects & Creative Portfolio | TM Digital Marketing',
    ogDescription: 'Explore real branding, banners, newspaper advertisements, and 3D websites delivered by TM Digital Marketing.',
    ogImage: '/portfolio/banners/crescent-construction-promotional-banner.jpg',
    canonicalUrl: 'https://tmdigitalgrow.com/completed-projects'
  }
];

const initialWebsiteSettings: CMSWebsiteSettings = {
  siteName: 'TM Digital Marketing',
  tagline: 'Precision Digital Marketing & Web Engineering',
  logoText: 'TM DIGITAL',
  footerText: 'Tirunelveli’s premier digital marketing agency. We engineer high-ROAS Meta Ads, Google Ads PPC, Local SEO, and 3D Web Development for brands across Tamil Nadu.',
  copyrightText: '© 2026 TM Digital Marketing. All rights reserved.',
  enableAnnouncement: false,
  announcementText: '🔥 Launch Special Offer: Free 30-Minute Growth Audit & 20% Launch Discount!'
};

const initialActivityLogs: CMSActivityLog[] = [
  {
    id: 'log-1',
    timestamp: new Date().toISOString(),
    user: 'mohamedthariq113@gmail.com',
    action: 'System Initialized',
    target: 'TM Digital Marketing CMS',
    category: 'settings',
    details: 'Master CMS database seeded with completed client projects and core services'
  }
];

// Helper: safe localStorage read/write
function getStorage<T>(key: string, defaultValue: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[CMS Storage Read Error ${key}]:`, err);
    return defaultValue;
  }
}

function setStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    // Dispatch custom event for cross-component reactivity in the same tab
    window.dispatchEvent(new CustomEvent('tm_cms_updated', { detail: { key, value } }));

    // Instant cross-tab broadcast via BroadcastChannel
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        const bc = new BroadcastChannel('tm_cms_channel');
        bc.postMessage({ type: 'tm_cms_updated', key, timestamp: Date.now() });
        bc.close();
      }
    } catch {
      // Ignore fallback if BroadcastChannel is restricted
    }
  } catch (err) {
    console.warn(`[CMS Storage Write Error ${key}]:`, err);
  }
}

// ----------------------------------------------------
// CMS Service Methods
// ----------------------------------------------------

export const CMSService = {
  // Real-time multi-tab and multi-window subscription
  subscribe(callback: (key?: string) => void): () => void {
    const handler = (e?: any) => {
      const key = e?.detail?.key || e?.key;
      callback(key);
    };

    window.addEventListener('tm_cms_updated', handler);
    window.addEventListener('storage', handler);
    window.addEventListener('focus', handler);

    let bc: BroadcastChannel | null = null;
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        bc = new BroadcastChannel('tm_cms_channel');
        bc.onmessage = () => handler();
      }
    } catch {}

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        handler();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('tm_cms_updated', handler);
      window.removeEventListener('storage', handler);
      window.removeEventListener('focus', handler);
      document.removeEventListener('visibilitychange', handleVisibility);
      if (bc) {
        try {
          bc.close();
        } catch {}
      }
    };
  },
  // Activity Logging
  logActivity(action: string, target: string, category: CMSActivityLog['category'], details?: string) {
    const logs = getStorage<CMSActivityLog[]>(STORAGE_KEYS.ACTIVITY, initialActivityLogs);
    const newLog: CMSActivityLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString(),
      user: localStorage.getItem('tm_admin_user_email') || 'mohamedthariq113@gmail.com',
      action,
      target,
      category,
      details
    };
    logs.unshift(newLog);
    // Keep last 100 logs
    setStorage(STORAGE_KEYS.ACTIVITY, logs.slice(0, 100));
  },

  getActivityLogs(): CMSActivityLog[] {
    return getStorage<CMSActivityLog[]>(STORAGE_KEYS.ACTIVITY, initialActivityLogs);
  },

  // 1. Portfolio Projects
  getProjects(includeDrafts = false): CMSPortfolioProject[] {
    const projects = getStorage<CMSPortfolioProject[]>(STORAGE_KEYS.PORTFOLIO, initialProjects);
    if (includeDrafts) return projects;
    return projects.filter((p) => p.status === 'published');
  },

  getProjectById(id: string): CMSPortfolioProject | undefined {
    const projects = this.getProjects(true);
    return projects.find((p) => p.id === id);
  },

  saveProject(projectData: Partial<CMSPortfolioProject>): CMSPortfolioProject {
    const projects = this.getProjects(true);
    const now = new Date().toISOString();

    if (projectData.id) {
      // Update existing
      const idx = projects.findIndex((p) => p.id === projectData.id);
      if (idx !== -1) {
        projects[idx] = {
          ...projects[idx],
          ...projectData,
          updatedAt: now
        } as CMSPortfolioProject;
        setStorage(STORAGE_KEYS.PORTFOLIO, projects);
        this.logActivity('Updated Project', projects[idx].title, 'portfolio', `Client: ${projects[idx].client}`);
        return projects[idx];
      }
    }

    // Create new
    const newId = projectData.id || `proj-${Date.now()}`;
    const newProject: CMSPortfolioProject = {
      id: newId,
      title: projectData.title || 'Untitled Project',
      client: projectData.client || 'Client Name',
      service: projectData.service || 'Creative Design',
      category: projectData.category || 'Branding & Identity',
      description: projectData.description || '',
      image: projectData.image || '/portfolio/branding/crescent-construction-logo-design.jpg',
      galleryImages: projectData.galleryImages || [projectData.image || ''],
      deliverableTag: projectData.deliverableTag || 'Completed Delivery',
      clientLocation: projectData.clientLocation || 'Melapalayam, Tirunelveli',
      altText: projectData.altText || `${projectData.title} by TM Digital Marketing`,
      imageFit: projectData.imageFit || 'contain',
      aspectRatio: projectData.aspectRatio || 'landscape',
      specs: projectData.specs || {
        format: 'Vector, Print PDF, Web',
        resolution: '300 DPI Print Ready',
        deliveryTime: 'Completed Client Delivery',
        industry: 'Commercial'
      },
      highlights: projectData.highlights || ['Verified Deliverable', 'High Definition'],
      status: projectData.status || 'published',
      order: projects.length + 1,
      featured: projectData.featured ?? true,
      createdAt: now,
      updatedAt: now
    };

    projects.unshift(newProject);
    setStorage(STORAGE_KEYS.PORTFOLIO, projects);
    this.logActivity('Created Project', newProject.title, 'portfolio', `Category: ${newProject.category}`);
    return newProject;
  },

  deleteProject(id: string): boolean {
    const projects = this.getProjects(true);
    const target = projects.find((p) => p.id === id);
    const filtered = projects.filter((p) => p.id !== id);
    setStorage(STORAGE_KEYS.PORTFOLIO, filtered);
    if (target) {
      this.logActivity('Deleted Project', target.title, 'portfolio', `Removed ID: ${id}`);
    }
    return true;
  },

  toggleProjectStatus(id: string): CMSPortfolioProject | null {
    const projects = this.getProjects(true);
    const proj = projects.find((p) => p.id === id);
    if (!proj) return null;
    proj.status = proj.status === 'published' ? 'draft' : 'published';
    proj.updatedAt = new Date().toISOString();
    setStorage(STORAGE_KEYS.PORTFOLIO, projects);
    this.logActivity(
      proj.status === 'published' ? 'Published Project' : 'Unpublished Project',
      proj.title,
      'portfolio'
    );
    return proj;
  },

  // 2. Media Assets
  getMedia(): CMSMediaAsset[] {
    return getStorage<CMSMediaAsset[]>(STORAGE_KEYS.MEDIA, initialMedia);
  },

  saveMedia(asset: Omit<CMSMediaAsset, 'id' | 'uploadedAt'>): CMSMediaAsset {
    const media = this.getMedia();
    const newAsset: CMSMediaAsset = {
      ...asset,
      id: `media-${Date.now()}`,
      uploadedAt: new Date().toISOString()
    };
    media.unshift(newAsset);
    setStorage(STORAGE_KEYS.MEDIA, media);
    this.logActivity('Uploaded Media', newAsset.name, 'media', `Size: ${(newAsset.size / 1024).toFixed(1)} KB`);
    return newAsset;
  },

  deleteMedia(id: string): boolean {
    const media = this.getMedia();
    const target = media.find((m) => m.id === id);
    const filtered = media.filter((m) => m.id !== id);
    setStorage(STORAGE_KEYS.MEDIA, filtered);
    if (target) {
      this.logActivity('Deleted Media Asset', target.name, 'media');
    }
    return true;
  },

  // 3. Services
  getServices(includeDrafts = false): CMSService[] {
    const services = getStorage<CMSService[]>(STORAGE_KEYS.SERVICES, initialServices);
    if (includeDrafts) return services;
    return services.filter((s) => s.status === 'published');
  },

  saveService(serviceData: Partial<CMSService>): CMSService {
    const services = this.getServices(true);
    if (serviceData.id) {
      const idx = services.findIndex((s) => s.id === serviceData.id);
      if (idx !== -1) {
        services[idx] = { ...services[idx], ...serviceData } as CMSService;
        setStorage(STORAGE_KEYS.SERVICES, services);
        this.logActivity('Updated Service', services[idx].title, 'services');
        return services[idx];
      }
    }
    const newService: CMSService = {
      id: serviceData.id || `srv-${Date.now()}`,
      title: serviceData.title || 'New Service',
      shortDesc: serviceData.shortDesc || '',
      fullDesc: serviceData.fullDesc || '',
      iconName: serviceData.iconName || 'Zap',
      tag: serviceData.tag || 'Growth',
      metric: serviceData.metric || '+200% ROI',
      status: serviceData.status || 'published',
      order: services.length + 1
    };
    services.push(newService);
    setStorage(STORAGE_KEYS.SERVICES, services);
    this.logActivity('Created Service', newService.title, 'services');
    return newService;
  },

  deleteService(id: string): boolean {
    const services = this.getServices(true);
    const target = services.find((s) => s.id === id);
    const filtered = services.filter((s) => s.id !== id);
    setStorage(STORAGE_KEYS.SERVICES, filtered);
    if (target) {
      this.logActivity('Deleted Service', target.title, 'services');
    }
    return true;
  },

  // 4. Testimonials
  getTestimonials(includeDrafts = false): CMSTestimonial[] {
    const list = getStorage<CMSTestimonial[]>(STORAGE_KEYS.TESTIMONIALS, initialTestimonials);
    if (includeDrafts) return list;
    return list.filter((t) => t.status === 'published');
  },

  saveTestimonial(data: Partial<CMSTestimonial>): CMSTestimonial {
    const list = this.getTestimonials(true);
    if (data.id) {
      const idx = list.findIndex((t) => t.id === data.id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...data } as CMSTestimonial;
        setStorage(STORAGE_KEYS.TESTIMONIALS, list);
        this.logActivity('Updated Testimonial', list[idx].client, 'content');
        return list[idx];
      }
    }
    const newTestimonial: CMSTestimonial = {
      id: `test-${Date.now()}`,
      client: data.client || 'Client Name',
      company: data.company || 'Enterprise',
      role: data.role || 'CEO',
      rating: data.rating || 5,
      quote: data.quote || '',
      verified: data.verified ?? true,
      status: data.status || 'published',
      createdAt: new Date().toISOString()
    };
    list.unshift(newTestimonial);
    setStorage(STORAGE_KEYS.TESTIMONIALS, list);
    this.logActivity('Created Testimonial', newTestimonial.client, 'content');
    return newTestimonial;
  },

  deleteTestimonial(id: string): boolean {
    const list = this.getTestimonials(true);
    const filtered = list.filter((t) => t.id !== id);
    setStorage(STORAGE_KEYS.TESTIMONIALS, filtered);
    this.logActivity('Deleted Testimonial', id, 'content');
    return true;
  },

  // 5. Website Content
  getHomeContent(): CMSHomeContent {
    return getStorage<CMSHomeContent>(STORAGE_KEYS.HOME, initialHomeContent);
  },

  saveHomeContent(content: Partial<CMSHomeContent>): CMSHomeContent {
    const current = this.getHomeContent();
    const updated = { ...current, ...content };
    setStorage(STORAGE_KEYS.HOME, updated);
    this.logActivity('Updated Homepage Content', 'Hero & CTA Sections', 'content');
    return updated;
  },

  getAboutContent(): CMSAboutContent {
    return getStorage<CMSAboutContent>(STORAGE_KEYS.ABOUT, initialAboutContent);
  },

  saveAboutContent(content: Partial<CMSAboutContent>): CMSAboutContent {
    const current = this.getAboutContent();
    const updated = { ...current, ...content };
    setStorage(STORAGE_KEYS.ABOUT, updated);
    this.logActivity('Updated About Page Content', 'Mission & Vision', 'content');
    return updated;
  },

  getContactSettings(): CMSContactSettings {
    return getStorage<CMSContactSettings>(STORAGE_KEYS.CONTACT, initialContactSettings);
  },

  saveContactSettings(settings: Partial<CMSContactSettings>): CMSContactSettings {
    const current = this.getContactSettings();
    const updated = { ...current, ...settings };
    setStorage(STORAGE_KEYS.CONTACT, updated);
    this.logActivity('Updated Business Contact Details', 'Phone & Address', 'settings');
    return updated;
  },

  // 6. SEO Settings
  getSEOSettings(pageId?: string): CMSSEOSettings[] | CMSSEOSettings | undefined {
    const all = getStorage<CMSSEOSettings[]>(STORAGE_KEYS.SEO, initialSEOSettings);
    if (!pageId) return all;
    return all.find((s) => s.pageId === pageId);
  },

  saveSEOSettings(pageId: string, settings: Partial<CMSSEOSettings>): CMSSEOSettings {
    const all = getStorage<CMSSEOSettings[]>(STORAGE_KEYS.SEO, initialSEOSettings);
    const idx = all.findIndex((s) => s.pageId === pageId);
    let updated: CMSSEOSettings;
    if (idx !== -1) {
      all[idx] = { ...all[idx], ...settings };
      updated = all[idx];
    } else {
      updated = {
        pageId,
        pageTitle: settings.pageTitle || 'TM Digital Marketing',
        metaDescription: settings.metaDescription || '',
        keywords: settings.keywords || '',
        ogTitle: settings.ogTitle || settings.pageTitle || '',
        ogDescription: settings.ogDescription || settings.metaDescription || '',
        ogImage: settings.ogImage || '/logo-full.png',
        canonicalUrl: settings.canonicalUrl || `https://tmdigitalgrow.com/${pageId}`
      };
      all.push(updated);
    }
    setStorage(STORAGE_KEYS.SEO, all);
    this.logActivity('Updated SEO Settings', `Page: ${pageId}`, 'seo');
    return updated;
  },

  // 7. Website Settings
  getWebsiteSettings(): CMSWebsiteSettings {
    return getStorage<CMSWebsiteSettings>(STORAGE_KEYS.SETTINGS, initialWebsiteSettings);
  },

  saveWebsiteSettings(settings: Partial<CMSWebsiteSettings>): CMSWebsiteSettings {
    const current = this.getWebsiteSettings();
    const updated = { ...current, ...settings };
    setStorage(STORAGE_KEYS.SETTINGS, updated);
    this.logActivity('Updated Global Website Settings', 'Site Configuration', 'settings');
    return updated;
  },

  // Dashboard Stats
  getDashboardStats() {
    const projects = this.getProjects(true);
    const services = this.getServices(true);
    const testimonials = this.getTestimonials(true);
    const media = this.getMedia();

    return {
      totalProjects: projects.length,
      publishedProjects: projects.filter((p) => p.status === 'published').length,
      draftProjects: projects.filter((p) => p.status === 'draft').length,
      brandingProjects: projects.filter((p) => p.category === 'Branding & Identity').length,
      bannerProjects: projects.filter((p) => p.category === 'Banner Designing').length,
      adProjects: projects.filter((p) => p.category === 'Advertisement Designing').length,
      visitingCardProjects: projects.filter((p) => p.category === 'Visiting Card Designing').length,
      totalServices: services.length,
      totalTestimonials: testimonials.length,
      totalMedia: media.length
    };
  }
};
