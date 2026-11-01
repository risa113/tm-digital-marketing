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
  Palette,
  CheckCircle2,
  Globe,
  FileImage,
  CreditCard,
  Megaphone
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
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
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

  // Close mobile drawer & dropdowns when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setWorkDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobileWorkOpen(false);
  }, [location.pathname, location.search]);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About', path: '/about', icon: UserCheck },
    { label: 'Founders', path: '/founders', icon: Sparkles },
    { label: 'Services', path: '/services', icon: Zap, hasDropdown: true },
    { label: 'Blog', path: '/blog', icon: BookOpen },
    { label: 'Process', path: '/process', icon: RefreshCw },
    { label: 'Completed Work', path: '/completed-projects', icon: CheckCircle2, hasWorkDropdown: true },
    { label: 'Deliverables', path: '/deliverables', icon: Layers },
    { label: 'Why Us', path: '/why-us', icon: ShieldCheck },
    { label: 'Reviews', path: '/testimonials', icon: MessageSquare },
    { label: 'FAQ', path: '/faq', icon: HelpCircle },
    { label: 'Contact', path: '/contact', icon: PhoneCall }
  ];

  const completedWorkCategories = [
    {
      label: 'All Completed Projects',
      path: '/completed-projects',
      desc: 'Master showcase of live web architecture & creative design work',
      icon: CheckCircle2,
      badge: 'All 7+'
    },
    {
      label: 'Web Platforms & Live Sites',
      path: '/completed-projects#web-platforms',
      desc: 'Al-Hayath Umrah & HYZIN Interior 3D platforms',
      icon: Globe,
      badge: 'Live'
    },
    {
      label: 'Branding & Logo Design',
      path: '/completed-projects?category=Branding%20%26%20Identity#portfolio',
      desc: 'Crescent Construction & Crescent Roofing vector logo suites',
      icon: Palette,
      badge: 'Logos'
    },
    {
      label: 'Banner Designing',
      path: '/completed-projects?category=Banner%20Designing#portfolio',
      desc: 'Large format outdoor hoardings & industrial workshop banners',
      icon: FileImage,
      badge: 'Banners'
    },
    {
      label: 'Advertisement Designing',
      path: '/completed-projects?category=Advertisement%20Designing#portfolio',
      desc: 'Newspaper print ads & commercial festive food flyers',
      icon: Megaphone,
      badge: 'Print Ads'
    },
    {
      label: 'Visiting Card Designing',
      path: '/completed-projects?category=Visiting%20Card%20Designing#portfolio',
      desc: 'Executive double-sided corporate matte & gold visiting cards',
      icon: CreditCard,
      badge: 'Cards'
    }
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
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 lg:px-4 xl:px-6 2xl:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-1.5 sm:gap-2 xl:gap-4">
        
        {/* Brand Logo */}
        <Link to="/" className="shrink-0 flex items-center pr-1 xl:pr-2 2xl:pr-4">
          <Logo size="sm" showTagline={true} taglineClassName="hidden 2xl:flex" />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 justify-center flex-1 min-w-0">
          {navLinks.map((link) => {
            const isCompletedWork = link.path === '/completed-projects';

            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative group shrink-0"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-[11px] xl:text-xs 2xl:text-[13px] font-bold px-1.5 xl:px-2 2xl:px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-0.5 xl:gap-1 shrink-0 ${
                        isActive || location.pathname.includes('-tirunelveli')
                          ? 'text-[#2563EB] bg-blue-50 dark:bg-blue-950/60 dark:text-blue-400 font-extrabold shadow-xs'
                          : darkMode
                          ? 'text-slate-300 hover:text-[#2563EB] hover:bg-slate-800/50'
                          : 'text-[#111827] hover:text-[#2563EB] hover:bg-slate-100/70'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3 h-3 xl:w-3.5 xl:h-3.5 opacity-70 group-hover:rotate-180 transition-transform shrink-0" />
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

            if (isCompletedWork) {
              return (
                <div
                  key={link.label}
                  className="relative group shrink-0"
                  onMouseEnter={() => setWorkDropdownOpen(true)}
                  onMouseLeave={() => setWorkDropdownOpen(false)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-[11px] xl:text-xs 2xl:text-[13px] font-bold px-2 xl:px-2.5 py-1 rounded-full whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 cursor-pointer ${
                        isActive
                          ? 'bg-[#2563EB] text-white shadow-xs font-extrabold'
                          : 'text-[#2563EB] bg-blue-50/90 hover:bg-blue-100 border border-blue-200/90 dark:bg-blue-950/70 dark:hover:bg-blue-900/60 dark:text-blue-300 dark:border-blue-800/80'
                      }`
                    }
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] dark:bg-blue-400 animate-pulse shrink-0" />
                    <span>{link.label}</span>
                    <ChevronDown className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform shrink-0" />
                  </NavLink>

                  {/* Completed Work Mega Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-200 z-50 ${
                      workDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-2'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 dark:border-slate-800 px-1">
                      <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#2563EB] dark:text-blue-400 uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Completed Work by Category</span>
                      </div>
                      <Link
                        to="/completed-projects"
                        onClick={() => setWorkDropdownOpen(false)}
                        className="text-[11px] font-bold text-slate-500 hover:text-[#2563EB] transition-colors"
                      >
                        View All Completed Projects &rarr;
                      </Link>
                    </div>

                    {/* Category Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {completedWorkCategories.map((item) => {
                        const IconComp = item.icon;
                        return (
                          <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => setWorkDropdownOpen(false)}
                            className="p-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/60 border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all flex items-start gap-2.5 text-left group/item"
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 text-[#2563EB] dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                              <IconComp className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-1">
                                <p className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-[#2563EB] dark:group-hover/item:text-blue-400 transition-colors leading-tight truncate">
                                  {item.label}
                                </p>
                                <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold shrink-0">
                                  {item.badge}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight pt-1 line-clamp-1">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-[11px] xl:text-xs 2xl:text-[13px] font-bold px-1.5 xl:px-2 2xl:px-2.5 py-1.5 rounded-lg whitespace-nowrap transition-all duration-200 shrink-0 ${
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
        <div className="hidden lg:flex items-center pl-2 xl:pl-3 2xl:pl-4 border-l border-slate-200/80 dark:border-slate-800/80 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="font-btn text-xs xl:text-sm font-semibold rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-3 xl:px-4 2xl:px-5 py-2 xl:py-2.5 shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 xl:gap-2 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 xl:w-4 xl:h-4 text-amber-300 animate-pulse shrink-0" />
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
            className="fixed inset-0 top-14 sm:top-16 lg:top-20 bg-slate-950/60 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            data-lenis-prevent="true"
            data-lenis-prevent-touch="true"
            className="relative z-50 lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/98 dark:bg-[#0F172A]/98 backdrop-blur-md px-3 py-3 shadow-2xl overflow-y-auto modal-scrollable overscroll-contain touch-pan-y max-h-[72vh] w-full rounded-b-2xl text-xs"
          >
            <div className="space-y-2.5">
              
              {/* 1. Primary 6 Main Destinations Grid (Clean, Large Touch Targets) */}
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: 'Home', path: '/', icon: Home },
                  { label: 'Services', path: '/services', icon: Zap },
                  { label: 'Portfolio', path: '/completed-projects', icon: CheckCircle2 },
                  { label: 'About', path: '/about', icon: UserCheck },
                  { label: 'Blog', path: '/blog', icon: BookOpen },
                  { label: 'Contact', path: '/contact', icon: PhoneCall }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-2 px-1.5 rounded-xl border flex flex-col items-center justify-center gap-1 font-bold text-center transition-all ${
                          isActive
                            ? 'bg-blue-50 dark:bg-blue-950/80 border-blue-300 dark:border-blue-700 text-[#2563EB] dark:text-blue-400 shadow-xs'
                            : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-[#2563EB]'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4 text-[#2563EB]" />
                      <span className="text-[11px] font-bold leading-tight">{item.label}</span>
                    </NavLink>
                  );
                })}
              </div>

              {/* 2. Secondary Quick Pill Links (Compact Single Line Wrap) */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 py-1 px-1 border-t border-slate-100 dark:border-slate-800/80">
                {[
                  { label: 'Founders', path: '/founders' },
                  { label: 'Deliverables', path: '/deliverables' },
                  { label: 'Process', path: '/process' },
                  { label: 'Reviews', path: '/testimonials' },
                  { label: 'Why Us', path: '/why-us' },
                  { label: 'FAQ', path: '/faq' }
                ].map((sub) => (
                  <NavLink
                    key={sub.label}
                    to={sub.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-colors ${
                        isActive
                          ? 'bg-blue-50 border-blue-200 text-[#2563EB] dark:bg-blue-950 dark:border-blue-800'
                          : 'bg-slate-100/80 dark:bg-slate-800/80 border-slate-200/60 dark:border-slate-700 text-slate-600 dark:text-slate-300'
                      }`
                    }
                  >
                    {sub.label}
                  </NavLink>
                ))}
              </div>

              {/* 3. Collapsible Services Accordion (Hidden by default to keep menu short) */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-1">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between py-1.5 px-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-700 dark:text-slate-300"
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Explore 8 Growth Services</span>
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#2563EB]' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="grid grid-cols-2 gap-1 pt-1.5">
                    {dedicatedServices.map((ds) => (
                      <Link
                        key={ds.path}
                        to={ds.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2563EB] truncate flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="truncate">{ds.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Collapsible Completed Work Accordion (Hidden by default) */}
              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-1">
                <button
                  type="button"
                  onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                  className="w-full flex items-center justify-between py-1.5 px-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-700 dark:text-slate-300"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                    <span>Creative Work Categories</span>
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileWorkOpen ? 'rotate-180 text-[#2563EB]' : ''}`} />
                </button>
                {mobileWorkOpen && (
                  <div className="grid grid-cols-2 gap-1 pt-1.5">
                    {completedWorkCategories.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-[10px] font-semibold text-slate-700 dark:text-slate-300 hover:text-[#2563EB] truncate flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. Primary Action Button */}
              <div className="pt-1.5 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-btn font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-600/30 active:scale-98 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Book Free Consultation Call</span>
                </button>
              </div>

            </div>
          </div>
        </>
      )}
    </header>
  );
}
