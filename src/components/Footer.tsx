import React from 'react';
import { Mail, Phone, Globe, Send } from 'lucide-react';
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
    <footer className="bg-white dark:bg-[#0B101D] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-20 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner / Newsletter */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 bg-blue-50/50 dark:bg-blue-950/20">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827] dark:text-white">
              Subscribe to Digital Growth Weekly
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300">
              Get modern marketing strategies, ad tips, and SEO trends directly in your inbox.
            </p>
          </div>

          <div className="flex w-full lg:w-auto items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full lg:w-72 px-4 py-3 rounded-xl glass-card text-[#111827] dark:text-white text-sm focus:outline-none focus:border-[#2563EB] border border-slate-200 dark:border-slate-800"
            />
            <button className="font-btn font-semibold px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs shrink-0 shadow-lg shadow-blue-600/30 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Sitemap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed max-w-sm">
              Helping brands dominate Google, Instagram, Facebook and performance ads with strategies that generate real business growth.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-card hover:bg-slate-100 dark:hover:bg-slate-800 text-pink-500 hover:text-pink-600 transition-colors"
                title="Instagram Page"
              >
                <InstagramIcon className="w-5 h-5 stroke-pink-500" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2.5 rounded-xl glass-card hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2563EB] transition-colors"
                title="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-[#111827] dark:text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#2563EB] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#2563EB] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#2563EB] transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#2563EB] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-extrabold text-xs text-[#111827] dark:text-white uppercase tracking-wider">Core Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Meta & Instagram Ads</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Google Ads & PPC</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-[#2563EB] transition-colors">WhatsApp Marketing</a></li>
            </ul>
          </div>

          {/* Direct Contacts */}
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
