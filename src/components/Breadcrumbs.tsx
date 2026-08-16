import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogData';

const STATIC_ROUTE_NAMES: Record<string, string> = {
  '/about': 'About Us',
  '/services': 'Services & Solutions',
  '/digital-marketing-agency-tirunelveli': 'Digital Marketing Agency Tirunelveli',
  '/seo-services-tirunelveli': 'SEO Services Tirunelveli',
  '/social-media-marketing-tirunelveli': 'Social Media Marketing',
  '/google-ads-tirunelveli': 'Google Ads PPC',
  '/meta-ads-tirunelveli': 'Meta Facebook & Instagram Ads',
  '/web-development-tirunelveli': 'Website Development',
  '/branding-tirunelveli': 'Branding & Logo Systems',
  '/lead-generation-tirunelveli': 'Lead Generation & WhatsApp Funnels',
  '/blog': 'Growth Insights Blog',
  '/process': '6-Step Growth Process',
  '/deliverables': 'Deliverables & Case Studies',
  '/why-us': 'Why Choose Us',
  '/faq': 'Frequently Asked Questions',
  '/contact': 'Contact Founders',
  '/testimonials': 'Client Reviews',
  '/privacy': 'Privacy Policy',
  '/privacy-policy': 'Privacy Policy',
  '/terms': 'Terms of Service',
  '/terms-of-service': 'Terms of Service'
};

export default function Breadcrumbs() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/$/, '') || '/';

  if (currentPath === '/') return null;

  // Handle dynamic blog routes
  if (currentPath.startsWith('/blog/')) {
    const slug = currentPath.replace('/blog/', '');
    const article = BLOG_ARTICLES.find((a) => a.slug === slug);
    const title = article ? article.title : 'Article';

    return (
      <nav aria-label="Breadcrumb" className="w-full bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800/80 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-[#64748B] dark:text-slate-400 overflow-hidden">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-[#2563EB] transition-colors shrink-0">
            <Home className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/blog" className="hover:text-[#2563EB] transition-colors shrink-0">
            <span>Blog</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-[#111827] dark:text-slate-200 font-bold truncate">{title}</span>
        </div>
      </nav>
    );
  }

  const title = STATIC_ROUTE_NAMES[currentPath] || 'Page';

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-slate-100/80 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800/80 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-[#64748B] dark:text-slate-400">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-[#2563EB] transition-colors">
          <Home className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-[#111827] dark:text-slate-200 font-bold">{title}</span>
      </div>
    </nav>
  );
}
