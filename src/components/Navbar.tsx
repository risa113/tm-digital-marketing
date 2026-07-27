import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight, 
  Home,
  UserCheck,
  Zap,
  RefreshCw,
  Layers,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  PhoneCall
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

  // Close mobile drawer when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'About us', path: '/about', icon: UserCheck },
    { label: 'Services', path: '/services', icon: Zap },
    { label: 'Process', path: '/process', icon: RefreshCw },
    { label: 'Deliverables', path: '/deliverables', icon: Layers },
    { label: 'Why Us', path: '/why-us', icon: ShieldCheck },
    { label: 'Testimonials', path: '/testimonials', icon: MessageSquare },
    { label: 'FAQ', path: '/faq', icon: HelpCircle },
    { label: 'Contact', path: '/contact', icon: PhoneCall }
  ];

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
        <Link to="/" className="shrink-0 flex items-center lg:pr-6 lg:border-r border-slate-200/60 dark:border-slate-800/60">
          <Logo size="sm" showTagline={true} />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1">
          {navLinks.map((link) => (
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
          ))}
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] px-4 py-4 shadow-2xl overflow-y-auto max-h-[85vh] w-full">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest px-2 mb-1">
              Select Page Route
            </div>

            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-bold py-3 px-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/80 border-blue-200 dark:border-blue-800 text-[#2563EB] dark:text-blue-400 font-extrabold shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200/60 dark:border-slate-800 text-slate-900 dark:text-slate-200 hover:text-[#2563EB]'
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#2563EB]" />
                </NavLink>
              );
            })}

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl bg-[#2563EB] text-white font-btn font-semibold text-center flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 text-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Book Free Strategy Call</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
