import React from 'react';
import { ShieldCheck, FileCheck, AlertCircle, Award, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/marketingData';

export default function TermsPage() {
  const lastUpdated = "July 31, 2026";

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Original Content & Legal Terms</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#111827] dark:text-white">
            Terms of Service & Content Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated} | TM Digital Marketing Agency
          </p>
        </div>

        {/* Main Glass Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 leading-relaxed text-sm text-slate-700 dark:text-slate-300">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#2563EB]" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and <strong>TM Digital Marketing</strong> ("Agency", "we", "us", or "our"), concerning your access to and use of <a href="https://tmdigitalgrow.com" className="text-[#2563EB] underline">https://tmdigitalgrow.com</a>.
            </p>
          </section>

          {/* Section 2: Original Content Guarantee */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#2563EB]" />
              <span>2. Original Content & Intellectual Property</span>
            </h2>
            <p>
              All content published on <code>tmdigitalgrow.com</code>—including case studies, digital marketing service descriptions, ROI strategies, technical code, design elements, graphics, and video frameworks—is 100% original content created and owned exclusively by <strong>TM Digital Marketing</strong> founders (Mohamed Thariq & Muja).
            </p>
            <p>
              Unauthorized copying, reproduction, or redistribution of our original written materials, service frameworks, or visual assets without prior written consent is strictly prohibited.
            </p>
          </section>

          {/* Section 3: AdSense & Advertisements */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#2563EB]" />
              <span>3. Advertisements & Third-Party Links</span>
            </h2>
            <p>
              Our site may display advertisements provided by Google AdSense and third-party advertising partners. We do not endorse third-party advertised products or services. Clicking on third-party links or ads will redirect you to external sites governed by their respective terms and privacy policies.
            </p>
          </section>

          {/* Section 4: Service Contracts */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              4. Client Service Agreements
            </h2>
            <p>
              Specific client marketing deliverables, SEO campaigns, Meta Ads management, and website engineering projects are governed by custom client contracts signed directly with founders Mohamed Thariq or Muja.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              5. Contact Us
            </h2>
            <p>If you have any questions regarding these Terms or Content Policies, please contact us:</p>
            <p className="font-semibold text-xs flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2563EB]" />
              <span>Email: <strong>{CONTACT_INFO.email}</strong> | Phones: <strong>+91 86087 24931</strong> / <strong>+91 63694 80812</strong></span>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
