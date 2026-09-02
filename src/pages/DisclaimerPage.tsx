import React from 'react';
import { AlertTriangle, ShieldCheck, DollarSign, ExternalLink, Award, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/marketingData';

export default function DisclaimerPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>FTC &amp; AdSense Legal Disclosures</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#111827] dark:text-white">
            Disclaimer &amp; Advertising Disclosure
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated} | TM Digital Marketing Agency
          </p>
        </div>

        {/* Main Glass Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 leading-relaxed text-sm text-slate-700 dark:text-slate-300">
          
          {/* Section 1: General Website Disclaimer */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>1. General Website &amp; Educational Disclaimer</span>
            </h2>
            <p>
              The information provided on <strong>TM Digital Marketing</strong> (<a href="https://tmdigitalgrow.com" className="text-[#2563EB] underline">https://tmdigitalgrow.com</a>), including articles, guides, case studies, and recommendations, is for general informational and educational purposes only.
            </p>
            <p>
              While we strive to provide accurate, up-to-date, and battle-tested digital marketing insights, TM Digital Marketing makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or suitability of the information contained on this website.
            </p>
          </section>

          {/* Section 2: Google AdSense & Advertising Disclosures */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              <span>2. Google AdSense &amp; Third-Party Advertising Disclosure</span>
            </h2>
            <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 space-y-3">
              <p className="text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                AdSense Publisher Compliance Notice:
              </p>
              <p className="text-xs">
                <code>tmdigitalgrow.com</code> participates in the <strong>Google AdSense</strong> publisher network, an advertising service provided by Google LLC.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs">
                <li>Google and its certified ad networks serve automated advertisements across designated content-rich sections of our website.</li>
                <li>These advertisements are marked clearly with labels such as <strong>"ADVERTISEMENT"</strong> or <strong>"SPONSORED"</strong>.</li>
                <li>The appearance of third-party advertisements on this website does not constitute an endorsement, guarantee, or recommendation by TM Digital Marketing.</li>
                <li>We do not control the content, claims, or offers made by third-party advertisers. Users interact with third-party ads at their own discretion.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Earnings & Business Results Disclaimer */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#2563EB]" />
              <span>3. Earnings &amp; Performance Results Disclaimer</span>
            </h2>
            <p>
              Any marketing statistics, case study metrics (e.g., "+350% Organic Traffic", "5.2x ROAS", "180+ leads in 7 days"), or revenue figures presented on this site reflect specific past performances achieved under particular commercial conditions.
            </p>
            <p>
              Digital marketing performance, search engine rankings, and ad costs vary significantly based on industry competition, market demand, ad budget, offer quality, and algorithmic shifts by Google and Meta. <strong>We do not guarantee specific income, revenue, or ranking guarantees</strong> without an executed client agreement.
            </p>
          </section>

          {/* Section 4: External Links Disclaimer */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-[#2563EB]" />
              <span>4. External Links Disclaimer</span>
            </h2>
            <p>
              Our website may contain links to external third-party websites or services that are not owned or operated by TM Digital Marketing. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
            </p>
          </section>

          {/* Section 5: Editorial Standards & E-E-A-T Guarantee */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              5. Editorial Standards &amp; Original Authorship
            </h2>
            <p>
              All editorial articles, guides, and tutorials published on TM Digital Marketing are written, researched, and vetted by agency founders <strong>Mohamed Thariq</strong> and <strong>Muja</strong> based on real client execution across Tamil Nadu and global markets. We adhere to strict standards of transparency, fact-checking, and original insights.
            </p>
          </section>

          {/* Section 6: Contact Information */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              6. Contact Us
            </h2>
            <p>
              If you have any questions or require additional details regarding our Disclaimer and Advertising policies, please contact us:
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
              <span>Privacy Policy</span>
            </Link>
            <Link
              to="/cookies"
              className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-all"
            >
              <span>Cookie Policy</span>
            </Link>
            <Link
              to="/terms"
              className="px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>Terms of Service</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
