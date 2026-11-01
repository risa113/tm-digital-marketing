import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Palette, 
  FileImage, 
  Megaphone, 
  CreditCard, 
  Image as ImageIcon, 
  Zap, 
  Star, 
  Home, 
  UserCheck, 
  Search, 
  PhoneCall, 
  Settings, 
  ShieldCheck, 
  LogOut, 
  ExternalLink, 
  Menu, 
  X, 
  Sparkles,
  Bell
} from 'lucide-react';
import Logo from '../Logo';
import { authService } from '../../services/authService';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Portfolio Projects', path: '/admin/portfolio', icon: Briefcase },
    { label: 'Branding', path: '/admin/portfolio?cat=Branding%20%26%20Identity', icon: Palette },
    { label: 'Banner Designs', path: '/admin/portfolio?cat=Banner%20Designing', icon: FileImage },
    { label: 'Advertisements', path: '/admin/portfolio?cat=Advertisement%20Designing', icon: Megaphone },
    { label: 'Visiting Cards', path: '/admin/portfolio?cat=Visiting%20Card%20Designing', icon: CreditCard },
    { label: 'Media Library', path: '/admin/media', icon: ImageIcon },
    { label: 'Services', path: '/admin/services', icon: Zap },
    { label: 'Testimonials', path: '/admin/testimonials', icon: Star },
    { label: 'Home Page', path: '/admin/content/home', icon: Home },
    { label: 'About Us', path: '/admin/content/about', icon: UserCheck },
    { label: 'SEO Settings', path: '/admin/seo', icon: Search },
    { label: 'Contact Settings', path: '/admin/contact', icon: PhoneCall },
    { label: 'Website Settings', path: '/admin/settings', icon: Settings },
    { label: 'Admin Profile', path: '/admin/profile', icon: ShieldCheck }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B101D] text-[#111827] dark:text-slate-100 flex flex-col font-poppins">
      
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <Logo size="sm" showTagline={false} />
            <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-[#2563EB] dark:text-blue-400 text-[10px] font-black border border-blue-200 dark:border-blue-800">
              CMS ADMIN
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Quick View Site */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors"
          >
            <span>View Public Site</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
          </a>

          {/* Admin User Badge */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              MT
            </div>
            <div className="hidden md:block text-left">
              <div className="text-xs font-bold leading-tight text-slate-900 dark:text-white">
                {currentUser?.name || 'Mohamed Thariq'}
              </div>
              <div className="text-[10px] font-extrabold text-[#2563EB] leading-tight">
                SUPER_ADMIN
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
            title="Sign out of Admin Panel"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Mobile Backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-20 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar Navigation */}
        <aside
          className={`fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-4rem)] w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out overflow-y-auto ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-4 space-y-1">
            <div className="px-3 py-1.5 text-[10px] font-black tracking-wider text-slate-400 dark:text-slate-500 uppercase">
              Management Modules
            </div>

            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = location.pathname === item.path || (item.path.includes('?') && location.pathname + location.search === item.path);

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#2563EB] text-white shadow-md shadow-blue-600/20 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-[#2563EB]'
                  }`}
                >
                  <IconComp className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#2563EB]'}`} />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Bottom Sidebar Box */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-center space-y-1">
              <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-[#2563EB]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>TM CMS Engine</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Production-Ready Live Sync
              </p>
            </div>
          </div>
        </aside>

        {/* Content Viewport */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>

    </div>
  );
}
