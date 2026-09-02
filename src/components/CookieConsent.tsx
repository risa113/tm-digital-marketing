import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const COOKIE_CONSENT_KEY = 'tm_cookie_consent_choice_v1';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!storedConsent) {
        // Show after a brief delay for smooth UX
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore localStorage access errors
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({
          status: 'accepted',
          essential: true,
          analytics: true,
          advertising: true,
          timestamp: new Date().toISOString()
        })
      );
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({
          status: 'essential_only',
          essential: true,
          analytics: false,
          advertising: false,
          timestamp: new Date().toISOString()
        })
      );
    } catch {
      // Ignore
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 rounded-3xl bg-white/95 dark:bg-[#0B101D]/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl shadow-blue-500/10 text-slate-800 dark:text-slate-200"
          role="dialog"
          aria-label="Cookie and Privacy Consent"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800 text-[#2563EB] flex items-center justify-center shrink-0">
                <Cookie className="w-4 h-4" />
              </div>
              <h3 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                Cookie &amp; Privacy Preferences
              </h3>
            </div>
            <button
              onClick={handleEssentialOnly}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              title="Close and use essential cookies only"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            We use cookies, Google Analytics, and third-party advertising partners (such as Google AdSense DART cookies) to personalize content, analyze site traffic, and deliver relevant advertisements. Review our{' '}
            <Link to="/privacy" className="text-[#2563EB] font-bold underline hover:opacity-80">
              Privacy Policy
            </Link>{' '}
            and{' '}
            <Link to="/cookies" className="text-[#2563EB] font-bold underline hover:opacity-80">
              Cookie Policy
            </Link>
            .
          </p>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-btn font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Accept All</span>
            </button>
            <button
              onClick={handleEssentialOnly}
              className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-btn font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>Essential Only</span>
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
