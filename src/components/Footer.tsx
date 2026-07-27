import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO } from '../data/marketingData';

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0B101D] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner / Newsletter */}
        <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 mb-14 flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-blue-500/10 via-blue-600/5 to-cyan-500/10 dark:from-blue-950/40 dark:to-slate-900/40 backdrop-blur-md shadow-lg shadow-blue-500/5">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827] dark:text-white">
              Subscribe to Digital Growth Insights
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300">
              Get battle-tested ad strategies, high-conversion frameworks, and SEO updates directly in your inbox.
            </p>
          </div>

          <div className="flex w-full lg:w-auto items-center gap-2">
            <input
              type="email"
              placeholder="Enter your work email..."
              className="w-full lg:w-72 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 text-[#111827] dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB] border border-slate-200 dark:border-slate-800"
            />
            <button className="font-btn font-semibold px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs shrink-0 shadow-lg shadow-blue-600/30 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed max-w-sm">
              TM Digital Marketing is an elite growth agency helping international and local brands scale revenue with high-ROI SEO, Meta Ads, Google Ads PPC, Web Development, and AI Automation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-pink-500 hover:text-pink-600 transition-colors"
                title="Instagram Page"
              >
                <InstagramIcon className="w-5 h-5 stroke-pink-500" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2563EB] transition-colors"
                title="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Pages */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-[#111827] dark:text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-[#2563EB] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#2563EB] transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-[#2563EB] transition-colors">Services</Link></li>
              <li><Link to="/process" className="hover:text-[#2563EB] transition-colors">Growth Process</Link></li>
              <li><Link to="/deliverables" className="hover:text-[#2563EB] transition-colors">Deliverables</Link></li>
              <li><Link to="/why-us" className="hover:text-[#2563EB] transition-colors">Why Us</Link></li>
              <li><Link to="/faq" className="hover:text-[#2563EB] transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-[#2563EB] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-[#111827] dark:text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services" className="hover:text-[#2563EB] transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-[#2563EB] transition-colors">Meta & Instagram Ads</Link></li>
              <li><Link to="/services" className="hover:text-[#2563EB] transition-colors">Google Ads & PPC</Link></li>
              <li><Link to="/services" className="hover:text-[#2563EB] transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-[#2563EB] transition-colors">Branding & Motion</Link></li>
              <li><Link to="/services" className="hover:text-[#2563EB] transition-colors">AI & Automation</Link></li>
            </ul>
          </div>

          {/* Direct Founder Contacts */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-[#111827] dark:text-white uppercase tracking-wider">Direct Contacts</h4>
            <div className="space-y-2 text-xs">
              <p className="font-bold text-[#111827] dark:text-slate-200">MOHAMED THARIQ</p>
              <a href="tel:8608724931" className="text-[#2563EB] font-bold hover:underline block">+91 86087 24931</a>
              <p className="font-bold text-[#111827] dark:text-slate-200 pt-2">MUJA</p>
              <a href="tel:6369480812" className="text-[#2563EB] font-bold hover:underline block">+91 63694 80812</a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#64748B] dark:text-slate-400 hover:text-[#2563EB] block pt-2">{CONTACT_INFO.email}</a>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} TM Digital Marketing. All rights reserved.</p>
          <p className="font-bold text-[#2563EB]">CONNECT • ENGAGE • GROW</p>
        </div>

      </div>
    </footer>
  );
}
