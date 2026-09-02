import React from 'react';
import { Cookie, ShieldCheck, CheckCircle2, Settings, ExternalLink, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/marketingData';

export default function CookiePolicyPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <Cookie className="w-4 h-4" />
            <span>Google AdSense &amp; Cookie Compliance</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#111827] dark:text-white">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated} | TM Digital Marketing Agency
          </p>
        </div>

        {/* Main Glass Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 leading-relaxed text-sm text-slate-700 dark:text-slate-300">
          
          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
              <span>1. What Are Cookies?</span>
            </h2>
            <p>
              Cookies are small text files that websites place on your device (computer, smartphone, or tablet) as you browse. They are widely used to make websites work efficiently, enhance user navigation, analyze site traffic, and deliver personalized content and advertisements.
            </p>
            <p>
              This Cookie Policy explains how <strong>TM Digital Marketing</strong> (accessible at <a href="https://tmdigitalgrow.com" className="text-[#2563EB] underline">https://tmdigitalgrow.com</a>) uses cookies, web beacons, tracking pixels, and similar technologies.
            </p>
          </section>

          {/* Section 2: Types of Cookies We Use */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#2563EB]" />
              <span>2. Categories of Cookies We Use</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#2563EB] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Essential / Necessary Cookies</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Required for core site functionality, security, route navigation, and cookie consent preferences. These cannot be switched off in our systems.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#2563EB] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Analytics &amp; Performance Cookies</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Helps us understand how visitors interact with our content via Google Analytics (GA4), counting visits, bounce rates, and traffic sources.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#2563EB] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Google AdSense &amp; DART Cookies</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Third-party vendor Google uses DART cookies to serve contextual and interest-based ads to visitors based on prior visits to our site and other web properties.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-[#2563EB] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Marketing &amp; Retargeting Pixels</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Meta Pixel (Facebook/Instagram) allows us to measure campaign efficacy, build lookalike audiences, and provide relevant commercial marketing updates.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Google AdSense DART Cookie Disclosure */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              3. Google AdSense &amp; Third-Party Advertising Disclosures
            </h2>
            <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 space-y-3">
              <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                Mandatory Google AdSense Disclosure
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li>
                  Third-party vendors, including <strong>Google</strong>, use cookies to serve ads based on a user's prior visits to our website or other websites on the internet.
                </li>
                <li>
                  Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
                </li>
                <li>
                  Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-bold underline inline-flex items-center gap-1">Google Ads Settings <ExternalLink className="w-3 h-3" /></a>.
                </li>
                <li>
                  Alternatively, users can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-bold underline inline-flex items-center gap-1">aboutads.info choices <ExternalLink className="w-3 h-3" /></a> or <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] font-bold underline inline-flex items-center gap-1">Network Advertising Initiative <ExternalLink className="w-3 h-3" /></a>.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: How to Control and Delete Cookies */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              4. How to Manage or Disable Cookies in Your Browser
            </h2>
            <p>
              Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline or delete cookies if you prefer. Please note that disabling cookies may affect the functionality of certain website elements:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs">
              <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Third-party cookies → Block third-party cookies.</li>
              <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Enhanced Tracking Protection.</li>
              <li><strong>Apple Safari:</strong> Preferences → Privacy → Prevent cross-site tracking / Block all cookies.</li>
              <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies.</li>
              <li><strong>Mobile (iOS / Android):</strong> Adjust cookie settings inside your mobile browser app settings menu.</li>
            </ul>
          </section>

          {/* Section 5: Contact Information */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              5. Questions &amp; Data Officer Contact
            </h2>
            <p>
              If you have any questions regarding our Cookie Policy or data handling practices, feel free to contact our agency founders:
            </p>
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-bold">Mohamed Thariq (Co-Founder)</p>
                  <p className="flex items-center gap-1.5 text-[#2563EB] mt-1"><Phone className="w-3.5 h-3.5" /> +91 86087 24931</p>
                </div>
                <div>
                  <p className="font-bold">Muja (Co-Founder)</p>
                  <p className="flex items-center gap-1.5 text-[#2563EB] mt-1"><Phone className="w-3.5 h-3.5" /> +91 63694 80812</p>
                </div>
              </div>
              <p className="text-xs pt-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <span>Email: <strong>{CONTACT_INFO.email}</strong></span>
              </p>
            </div>
          </section>

          {/* Navigation CTA */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/privacy"
              className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-all"
            >
              <span>View Privacy Policy</span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>Contact Privacy Officer</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
