import React from 'react';
import { ShieldCheck, FileCheck, AlertCircle, Award, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/marketingData';

export default function TermsPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Agreement &amp; Content Policies</span>
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-[#111827] dark:text-white">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Last Updated: {lastUpdated} | TM Digital Marketing Agency
          </p>
        </div>

        {/* Main Glass Container */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 leading-relaxed text-sm text-slate-700 dark:text-slate-300">
          
          {/* Section 1: Agreement to Terms */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#2563EB]" />
              <span>1. Agreement to Terms</span>
            </h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you ("User", "you") and <strong>TM Digital Marketing</strong> ("Agency", "we", "us", or "our"), concerning your access to and use of <a href="https://tmdigitalgrow.com" className="text-[#2563EB] underline">https://tmdigitalgrow.com</a> as well as any related web applications, media channels, or mobile interfaces.
            </p>
            <p>
              By accessing the site, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are expressly prohibited from using the site and must discontinue use immediately.
            </p>
          </section>

          {/* Section 2: Intellectual Property Rights */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#2563EB]" />
              <span>2. Intellectual Property Rights &amp; Original Authorship</span>
            </h2>
            <p>
              Unless otherwise indicated, the website is our proprietary property. All source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by TM Digital Marketing founders <strong>Mohamed Thariq</strong> and <strong>Muja</strong>, and are protected by copyright and trademark laws.
            </p>
            <p>
              Except as expressly provided in these Terms of Service, no part of the site and no Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
          </section>

          {/* Section 3: User Representations & Conduct */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
              <span>3. User Representations &amp; Prohibited Conduct</span>
            </h2>
            <p>By using the site, you represent and warrant that:</p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-xs">
              <li>All registration information and consultation details you submit will be true, accurate, current, and complete.</li>
              <li>You will not access the site through automated or non-human means, whether through a bot, script, or otherwise, for malicious purposes.</li>
              <li>You will not use the site for any illegal or unauthorized purpose.</li>
              <li>You will not interfere with, disrupt, or create an undue burden on the site or the networks connected to the site.</li>
            </ul>
          </section>

          {/* Section 4: Third-Party Advertisements & Google AdSense */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#2563EB]" />
              <span>4. Third-Party Advertisements &amp; Google AdSense</span>
            </h2>
            <p>
              The website may contain advertisements, promotional links, and third-party content provided through Google AdSense and accredited ad networks. We are not responsible for the accuracy, legality, or reliability of any third-party offers or advertisements.
            </p>
            <p>
              Your correspondence or business dealings with, or participation in promotions of, advertisers found on or through the site, including payment and delivery of related goods or services, are solely between you and such advertiser.
            </p>
          </section>

          {/* Section 5: Client Service Contracts */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              5. Client Marketing Deliverables &amp; Service Contracts
            </h2>
            <p>
              Specific client services (including SEO sprints, Meta/Google PPC ad account management, custom 3D web engineering, and brand identity projects) are governed by independent master service agreements signed directly with founders Mohamed Thariq or Muja.
            </p>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              6. Limitation of Liability
            </h2>
            <p>
              In no event will TM Digital Marketing, its founders, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.
            </p>
          </section>

          {/* Section 7: Governing Law & Jurisdiction */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              7. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms of Service and your use of the site are governed by and construed in accordance with the laws of the State of Tamil Nadu, India, without regard to its conflict of law principles. Any legal action or proceeding shall be brought exclusively in the courts of Tirunelveli, Tamil Nadu, India.
            </p>
          </section>

          {/* Section 8: Contact */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              8. Contact Us
            </h2>
            <p>If you have questions or comments about these Terms of Service, please contact us:</p>
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
              to="/disclaimer"
              className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-all"
            >
              <span>Disclaimers</span>
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg transition-all"
            >
              <span>Contact Us</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
