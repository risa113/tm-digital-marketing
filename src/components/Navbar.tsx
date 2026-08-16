import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronDown, 
  Home,
  UserCheck,
  Zap,
  RefreshCw,
  Layers,
  ShieldCheck,
  HelpCircle,
  MessageSquare,
  PhoneCall,
  BookOpen,
  Search,
  Share2,
  Target,
  TrendingUp,
  Code,
  Palette
} from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenConsultation: () => void;
}

export default function Navbar({ darkMode, onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer & dropdown when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: UserCheck },
    { label: 'Services', path: '/services', icon: Zap, hasDropdown: true },
    { label: 'Blog', path: '/blog', icon: BookOpen },
    { label: 'Process', path: '/process', icon: RefreshCw },
    { label: 'Deliverables', path: '/deliverables', icon: Layers },
    { label: 'Why Us', path: '/why-us', icon: ShieldCheck },
    { label: 'Reviews', path: '/testimonials', icon: MessageSquare },
    { label: 'FAQ', path: '/faq', icon: HelpCircle },
    { label: 'Contact', path: '/contact', icon: PhoneCall }
  ];

  const dedicatedServices = [
    { label: 'Digital Marketing Tirunelveli', path: '/digital-marketing-agency-tirunelveli', desc: 'Full-funnel growth engine', icon: Zap },
    { label: 'SEO Services Tirunelveli', path: '/seo-services-tirunelveli', desc: 'Google search & local 3-pack', icon: Search },
    { label: 'Social Media Marketing', path: '/social-media-marketing-tirunelveli', desc: 'Viral Instagram Reels & feeds', icon: Share2 },
    { label: 'Google Ads PPC', path: '/google-ads-tirunelveli', desc: 'High-intent search & PMax', icon: TrendingUp },
    { label: 'Meta Ads (FB & IG)', path: '/meta-ads-tirunelveli', desc: 'Visual ad scaling & CAPI', icon: Target },
    { label: 'Website Development', path: '/web-development-tirunelveli', desc: '3D React & Next.js platforms', icon: Code },
    { label: 'Branding & Logo Systems', path: '/branding-tirunelveli', desc: 'Luxury vector identities', icon: Palette },
    { label: 'Lead Generation Funnels', path: '/lead-generation-tirunelveli', desc: 'WhatsApp & AI chatbot leads', icon: MessageSquare }
  ];

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? darkMode
            ? 'bg-[#0F172A]/95 border-b border-slate-800 shadow-xl backdrop-blur-md'
            : 'bg-white/95 border-b border-slate-200/90 shadow-md backdrop-blur-md'
          : 'bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <Link to="/" className="shrink-0 flex items-center lg:pr-4 xl:pr-6 lg:border-r border-slate-200/60 dark:border-slate-800/60">
          <Logo size="sm" showTagline={true} />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-xs xl:text-[13px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-1 ${
                        isActive || location.pathname.includes('-tirunelveli')
                          ? 'text-[#2563EB] bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400 font-extrabold shadow-xs'
                          : darkMode
                          ? 'text-slate-300 hover:text-[#2563EB] hover:bg-slate-800/50'
                          : 'text-[#111827] hover:text-[#2563EB] hover:bg-slate-100/70'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                  </NavLink>

                  {/* Mega Menu Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-200 grid grid-cols-2 gap-2 z-50 ${
                      servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-2'
                    }`}
                  >
                    {dedicatedServices.map((ds) => {
                      const IconComp = ds.icon;
                      return (
                        <Link
                          key={ds.path}
                          to={ds.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/60 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all flex items-start gap-2.5 text-left group/item"
                        >
                          <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-[#2563EB] transition-colors leading-tight">
                              {ds.label}
                            </p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight pt-0.5">
                              {ds.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs xl:text-[13px] font-bold px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-[#2563EB] bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400 font-extrabold shadow-xs'
                      : darkMode
                      ? 'text-slate-300 hover:text-[#2563EB] hover:bg-slate-800/50'
                      : 'text-[#111827] hover:text-[#2563EB] hover:bg-slate-100/70'
                  }`
                }
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Right CTA Group (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-slate-200/60 dark:border-slate-800/60 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="font-btn text-xs xl:text-sm font-semibold rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 xl:px-5 py-2.5 shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Book Consultation</span>
          </button>
        </div>

        {/* Mobile Controls Group */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
            title="Toggle Navigation Menu"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#2563EB]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 sm:top-20 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            data-lenis-prevent="true"
            data-lenis-prevent-touch="true"
            className="relative z-50 lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md px-3 sm:px-4 py-3 shadow-2xl overflow-y-auto modal-scrollable overscroll-contain touch-pan-y max-h-[75vh] w-full rounded-b-2xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest">
                  Quick Navigation
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">
                  Tap link to navigate
                </span>
              </div>

              {/* 2-Column Grid Layout */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <NavLink
                      key={link.label}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `text-xs font-bold py-2.5 px-3 rounded-xl border flex items-center gap-2.5 transition-all ${
                          isActive
                            ? 'bg-blue-50 dark:bg-blue-950/80 border-blue-300 dark:border-blue-700 text-[#2563EB] dark:text-blue-400 font-extrabold shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/70 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-[#2563EB]'
                        }`
                      }
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] flex items-center justify-center shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{link.label}</span>
                    </NavLink>
                  );
                })}
              </div>

              {/* Mobile Dedicated Service Links */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest px-1">
                  High-Intent Local Services
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                  {dedicatedServices.slice(0, 4).map((ds) => (
                    <Link
                      key={ds.path}
                      to={ds.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:text-[#2563EB] flex items-center gap-2 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span className="truncate">{ds.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Compact CTA Button */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-btn font-semibold text-xs text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Book Free Strategy Call</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
