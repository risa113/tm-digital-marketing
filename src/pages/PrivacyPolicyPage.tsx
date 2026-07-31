import React from 'react';
import { Shield, Lock, Eye, Cookie, FileText, CheckCircle2, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/marketingData';

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 31, 2026";

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Google AdSense & GDPR Compliant</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#111827] dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated} | TM Digital Marketing Agency
          </p>
        </div>

        {/* Main Glass Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 leading-relaxed text-sm text-slate-700 dark:text-slate-300">
          
          {/* Overview */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#2563EB]" />
              <span>1. Overview & Data Controller</span>
            </h2>
            <p>
              At <strong>TM Digital Marketing</strong> (accessible at <a href="https://tmdigitalgrow.com" className="text-[#2563EB] underline">https://tmdigitalgrow.com</a>), operated by agency founders <strong>Mohamed Thariq</strong> and <strong>Muja</strong> in Tirunelveli, Tamil Nadu, India, we respect your privacy and are committed to protecting the personal information you share with us.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, interact with our services, or fill out our consultation forms.
            </p>
          </section>

          {/* Data Collection */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#2563EB]" />
              <span>2. Information We Collect</span>
            </h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, and business details, provided voluntarily when submitting forms or booking consultations.</li>
              <li><strong>Derivative & Device Data:</strong> Information our servers automatically collect when you access the site, such as IP address, browser type, operating system, access times, and referring URLs.</li>
              <li><strong>Analytical & Campaign Data:</strong> Data regarding performance tracking, page interactions, and conversion events for marketing analytics.</li>
            </ul>
          </section>

          {/* Cookies & Google AdSense Policy */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Cookie className="w-5 h-5 text-[#2563EB]" />
              <span>3. Cookies & Google AdSense / DoubleClick DART Cookies</span>
            </h2>
            <p>
              TM Digital Marketing uses cookies, web beacons, and tracking pixels to enhance user experience, analyze website performance, and serve relevant advertisements.
            </p>
            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 space-y-2">
              <p className="font-bold text-[#111827] dark:text-white text-xs uppercase tracking-wide">
                Google AdSense Disclosure:
              </p>
              <p className="text-xs">
                Google is a third-party vendor on our site. It uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <code>tmdigitalgrow.com</code> and other sites on the internet. Users may opt out of the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline font-semibold">https://policies.google.com/technologies/ads</a>.
              </p>
            </div>
          </section>

          {/* Third Party Partners */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#2563EB]" />
              <span>4. Third-Party Analytics & Advertising Partners</span>
            </h2>
            <p>
              We partner with third-party vendors such as <strong>Google Analytics</strong>, <strong>Meta Pixel (Facebook Ads)</strong>, and <strong>Google AdSense</strong>. These partners may use cookies or similar technologies to gather information about your activities on this and other websites to provide you targeted advertising based upon your browsing activities.
            </p>
          </section>

          {/* Use of Information */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
              <span>5. How We Use Your Information</span>
            </h2>
            <p>We use the collected information for purposes including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Providing, maintaining, and improving our digital marketing services.</li>
              <li>Responding to your inquiries and scheduling founder strategy calls.</li>
              <li>Delivering relevant advertisements and measuring campaign effectiveness.</li>
              <li>Complying with legal obligations and protecting user data security.</li>
            </ul>
          </section>

          {/* Rights & Contact */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              6. Your Data Rights & Contact Information
            </h2>
            <p>
              Under applicable data protection laws (including GDPR and CCPA), you have the right to request access to, correction of, or deletion of your personal data.
            </p>
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <p className="font-bold text-sm text-[#111827] dark:text-white">Data Privacy Officers & Founders:</p>
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
          <div className="pt-6 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>Contact Privacy Officer</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
