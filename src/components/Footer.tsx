import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle2, Loader2, ChevronDown, MapPin, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Logo from './Logo';
import { CONTACT_INFO } from '../data/marketingData';
import { submitLeadToDatabase } from '../services/apiService';

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
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);
    try {
      await submitLeadToDatabase({
        name: 'Newsletter Subscriber',
        email: email,
        service: 'Digital Growth Insights Newsletter'
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 }
      });

      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      console.error('Subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-[#0B101D] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-14 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand & Newsletter Main Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-gradient-to-r from-blue-500/5 via-blue-600/5 to-cyan-500/5 dark:from-blue-950/30 dark:to-slate-900/40 backdrop-blur-md shadow-xl shadow-blue-500/5 mb-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-6 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-400 leading-relaxed max-w-lg">
              TM Digital Marketing is Tirunelveli’s premier growth agency. We scale business revenue with high-ROI SEO, Meta Ads, Google PPC, Web Development, and AI Automation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-pink-500 hover:text-pink-600 transition-colors"
                title="Instagram Page"
              >
                <InstagramIcon className="w-4 h-4 stroke-pink-500" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-[#2563EB] transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-emerald-500 transition-colors flex items-center gap-1.5 text-xs font-semibold"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Tirunelveli, TN</span>
              </a>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-3 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8">
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#111827] dark:text-white">
              Subscribe to Growth Insights
            </h3>
            <p className="text-xs text-[#64748B] dark:text-slate-400">
              Get battle-tested ad frameworks and SEO updates directly in your inbox.
            </p>

            {isSubscribed ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>🎉 Subscribed successfully!</span>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="ml-auto text-xs underline text-emerald-600 hover:opacity-80"
                >
                  Add another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 text-[#111827] dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB] border border-slate-200 dark:border-slate-800"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-btn font-semibold px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 text-white text-xs shrink-0 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Single Professional Interactive Accordion Button */}
        <div className="flex justify-center my-6">
          <button
            onClick={() => setIsSitemapOpen(!isSitemapOpen)}
            className="group flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300/80 dark:border-slate-700 text-xs font-bold transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
            aria-expanded={isSitemapOpen}
          >
            <span>{isSitemapOpen ? 'Hide All Website Headings & Footers' : 'Show All Website Headings & Footers'}</span>
            <div className={`p-1 rounded-full bg-[#2563EB] text-white transition-transform duration-300 ${isSitemapOpen ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-4 h-4 stroke-[3]" />
            </div>
          </button>
        </div>

        {/* Expandable Sitemap Drawer */}
        <AnimatePresence>
          {isSitemapOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden mb-10"
            >
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Navigation Pages */}
                <div className="space-y-3">
                  <h4 className="font-heading font-extrabold text-xs text-[#2563EB] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span>Navigation Pages</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li><Link to="/" className="hover:text-[#2563EB] transition-colors block py-0.5">Home</Link></li>
                    <li><Link to="/about" className="hover:text-[#2563EB] transition-colors block py-0.5">About Us</Link></li>
                    <li><Link to="/services" className="hover:text-[#2563EB] transition-colors block py-0.5">Services</Link></li>
                    <li><Link to="/process" className="hover:text-[#2563EB] transition-colors block py-0.5">Growth Process</Link></li>
                    <li><Link to="/deliverables" className="hover:text-[#2563EB] transition-colors block py-0.5">Deliverables</Link></li>
                    <li><Link to="/why-us" className="hover:text-[#2563EB] transition-colors block py-0.5">Why Us</Link></li>
                    <li><Link to="/testimonials" className="hover:text-[#2563EB] transition-colors block py-0.5">Testimonials</Link></li>
                    <li><Link to="/faq" className="hover:text-[#2563EB] transition-colors block py-0.5">FAQ</Link></li>
                    <li><Link to="/contact" className="hover:text-[#2563EB] transition-colors block py-0.5">Contact</Link></li>
                    <li><Link to="/privacy" className="hover:text-[#2563EB] transition-colors block py-0.5 font-bold text-[#2563EB]">Privacy Policy</Link></li>
                    <li><Link to="/terms" className="hover:text-[#2563EB] transition-colors block py-0.5 font-bold text-[#2563EB]">Terms &amp; Conditions</Link></li>
                  </ul>
                </div>

                {/* Growth Services */}
                <div className="space-y-3">
                  <h4 className="font-heading font-extrabold text-xs text-[#2563EB] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span>Growth Services</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li><Link to="/services" className="hover:text-[#2563EB] transition-colors block py-0.5">SEO &amp; Local Ranking</Link></li>
                    <li><Link to="/services" className="hover:text-[#2563EB] transition-colors block py-0.5">Meta &amp; Instagram Ads</Link></li>
                    <li><Link to="/services" className="hover:text-[#2563EB] transition-colors block py-0.5">Google Ads &amp; PPC Sprints</Link></li>
                    <li><Link to="/services" className="hover:text-[#2563EB] transition-colors block py-0.5">Website Engineering</Link></li>
                    <li><Link to="/services" className="hover:text-[#2563EB] transition-colors block py-0.5">Vector Branding &amp; Logo</Link></li>
                    <li><Link to="/services" className="hover:text-[#2563EB] transition-colors block py-0.5">WhatsApp Lead Automation</Link></li>
                  </ul>
                </div>

                {/* Direct Founder Contacts */}
                <div className="space-y-3">
                  <h4 className="font-heading font-extrabold text-xs text-[#2563EB] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                    <span>Direct Founder Access</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div>
                      <p className="font-extrabold text-slate-900 dark:text-slate-200">MOHAMED THARIQ</p>
                      <a href="tel:8608724931" className="text-[#2563EB] font-bold hover:underline flex items-center gap-1 mt-0.5">
                        <Phone className="w-3.5 h-3.5" /> +91 86087 24931
                      </a>
                    </div>
                    <div className="pt-2">
                      <p className="font-extrabold text-slate-900 dark:text-slate-200">MUJA</p>
                      <a href="tel:6369480812" className="text-[#2563EB] font-bold hover:underline flex items-center gap-1 mt-0.5">
                        <Phone className="w-3.5 h-3.5" /> +91 63694 80812
                      </a>
                    </div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-500 dark:text-slate-400 hover:text-[#2563EB] block pt-2">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Copyright Footer */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] dark:text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} TM Digital Marketing. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-[#2563EB] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#2563EB] transition-colors">Terms of Service</Link>
            <span>•</span>
            <p className="font-bold text-[#2563EB]">CONNECT • ENGAGE • GROW</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
