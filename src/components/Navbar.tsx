import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sparkles, 
  ChevronRight, 
  Lock,
  Home,
  UserCheck,
  Zap,
  RefreshCw,
  Layers,
  ShieldCheck,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenConsultation: () => void;
  onOpenAdminPortal: () => void;
}

export default function Navbar({ darkMode, onOpenConsultation, onOpenAdminPortal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: 'Home', href: '#', icon: Home },
    { label: 'About us', href: '#about', icon: UserCheck },
    { label: 'Services', href: '#services', icon: Zap },
    { label: 'Process', href: '#process', icon: RefreshCw },
    { label: 'Deliverables', href: '#portfolio', icon: Layers },
    { label: 'Why Us', href: '#why-us', icon: ShieldCheck },
    { label: 'Testimonials', href: '#testimonials', icon: MessageSquare },
    { label: 'FAQ', href: '#faq', icon: HelpCircle }
  ];

  // Fail-proof Mobile & Desktop Touch Navigation Handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#' || href === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? darkMode
            ? 'bg-[#0F172A] border-b border-slate-800 shadow-xl'
            : 'bg-white border-b border-slate-200/80 shadow-md'
          : 'bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="shrink-0 flex items-center lg:pr-8 lg:border-r border-slate-200/60 dark:border-slate-800/60">
          <Logo size="sm" showTagline={true} />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 justify-center flex-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs xl:text-sm font-bold whitespace-nowrap transition-colors hover:text-[#2563EB] ${
                darkMode ? 'text-slate-200' : 'text-[#111827]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Group (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 pl-6 border-l border-slate-200/60 dark:border-slate-800/60 shrink-0">
          <button
            onClick={onOpenAdminPortal}
            className={`px-3.5 py-2.5 rounded-xl border transition-all text-xs font-extrabold flex items-center gap-2 shadow-sm whitespace-nowrap ${
              darkMode
                ? 'border-blue-900/60 bg-blue-950/40 text-blue-300 hover:text-white hover:border-blue-500'
                : 'border-blue-200 bg-blue-50/80 text-[#2563EB] hover:bg-blue-100 hover:border-blue-500'
            }`}
            title="Admin Leads Portal (Thariq & Muja)"
          >
            <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Admin Leads</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="font-btn text-xs sm:text-sm font-semibold rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 xl:px-5 py-2.5 shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Contact us</span>
          </button>
        </div>

        {/* Mobile Controls Group - Always Touch Accessible */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAdminPortal}
            className="px-2.5 py-1.5 rounded-xl border border-blue-200 dark:border-blue-800 text-[#2563EB] dark:text-blue-400 text-xs font-extrabold flex items-center gap-1 bg-blue-50/80 dark:bg-blue-950/60 shadow-sm"
            title="Admin Leads"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Admin</span>
          </button>

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

      {/* Fail-Safe Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] px-4 py-5 shadow-2xl overflow-y-auto max-h-[85vh] w-full">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-widest px-3 mb-1">
              Navigation Pages
            </div>

            {navLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-extrabold py-3.5 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-slate-900 dark:text-white hover:text-[#2563EB] active:scale-[0.98] transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{link.label === 'Why Us' ? 'Why Choose Us' : link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#2563EB]" />
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 mt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdminPortal();
                }}
                className="w-full py-4 rounded-2xl border-2 border-[#2563EB] text-[#2563EB] dark:text-blue-400 font-extrabold text-xs text-center flex items-center justify-center gap-2 bg-blue-50/80 dark:bg-blue-950/60 shadow-md"
              >
                <Lock className="w-4 h-4" />
                <span>Admin Leads Portal (Thariq & Muja)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 rounded-2xl bg-[#2563EB] text-white font-btn font-semibold text-center flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
