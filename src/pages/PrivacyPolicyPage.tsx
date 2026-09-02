import React from 'react';
import { Shield, Lock, Eye, Cookie, FileText, CheckCircle2, Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../data/marketingData';

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2, 2026";

  return (
    <div className="w-full pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800 text-xs font-extrabold uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Google AdSense, GDPR &amp; CCPA Compliant</span>
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
          
          {/* Section 1: Overview & Data Controller */}
          <section className="space-y-3">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#2563EB]" />
              <span>1. Overview &amp; Data Controller</span>
            </h2>
            <p>
              At <strong>TM Digital Marketing</strong> (accessible at <a href="https://tmdigitalgrow.com" className="text-[#2563EB] underline">https://tmdigitalgrow.com</a>), operated by agency founders <strong>Mohamed Thariq</strong> and <strong>Muja</strong> in Tirunelveli, Tamil Nadu, India, we respect your privacy and are committed to protecting the personal information you share with us.
            </p>
            <p>
              This Privacy Policy document contains types of information that is collected and recorded by TM Digital Marketing and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
          </section>

          {/* Section 2: Log Files */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#2563EB]" />
              <span>2. Log Files &amp; Automated Technical Data</span>
            </h2>
            <p>
              TM Digital Marketing follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
            </p>
          </section>

          {/* Section 3: Information We Collect */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#2563EB]" />
              <span>3. Information We Collect</span>
            </h2>
            <p>We may collect personal information that you provide voluntarily when you:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong>Contact Forms &amp; Consultations:</strong> Name, business email, phone number, company website, and marketing requirements.</li>
              <li><strong>Newsletter Subscription:</strong> Email address for receiving growth guides and marketing insights.</li>
              <li><strong>Communication Records:</strong> WhatsApp chats, telephone records, or direct emails with founders.</li>
            </ul>
          </section>

          {/* Section 4: Cookies and Google DoubleClick DART Cookies */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <Cookie className="w-5 h-5 text-[#2563EB]" />
              <span>4. Cookies and Google DoubleClick DART Cookies</span>
            </h2>
            <p>
              Like any other website, TM Digital Marketing uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            
            <div className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 space-y-3">
              <h3 className="font-bold text-[#111827] dark:text-white text-xs uppercase tracking-wide">
                Google DoubleClick DART Cookie &amp; AdSense Terms:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-xs">
                <li>Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to <code>tmdigitalgrow.com</code> and other sites on the internet.</li>
                <li>Users may opt out of the use of DART cookies by visiting the Google ad and content network Privacy Policy at: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline font-semibold inline-flex items-center gap-1">https://policies.google.com/technologies/ads <ExternalLink className="w-3 h-3" /></a></li>
                <li>Users may customize their personalized ad preferences via the <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline font-semibold inline-flex items-center gap-1">Google Ads Settings <ExternalLink className="w-3 h-3" /></a>.</li>
                <li>You can also opt out of participating third-party ad networks through the <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline font-semibold inline-flex items-center gap-1">Digital Advertising Alliance (DAA) <ExternalLink className="w-3 h-3" /></a> or the <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline font-semibold inline-flex items-center gap-1">Network Advertising Initiative (NAI) <ExternalLink className="w-3 h-3" /></a>.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Third-Party Advertising Partners */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
              <span>5. Third-Party Advertising Partners &amp; Privacy Policies</span>
            </h2>
            <p>
              Some of the advertisers on our site may use cookies and web beacons. Our advertising partners include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2">
              <li><strong>Google AdSense:</strong> <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">https://policies.google.com/technologies/ads</a></li>
              <li><strong>Google Analytics (GA4):</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">https://policies.google.com/privacy</a></li>
              <li><strong>Meta Pixel (Facebook/Instagram):</strong> <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline">https://www.facebook.com/privacy/policy</a></li>
            </ul>
            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TM Digital Marketing. They automatically receive your IP address when this occurs. TM Digital Marketing has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </section>

          {/* Section 6: CCPA Privacy Rights */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              6. CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
              <li>Request that a business disclose the categories and specific pieces of personal data collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business collected.</li>
              <li>Request that a business that sells or shares a consumer's personal data, not sell or share the consumer's personal data.</li>
            </ul>
            <p className="text-xs">If you make a request, we have one month to respond to you. Please contact us to exercise these rights.</p>
          </section>

          {/* Section 7: GDPR Data Protection Rights */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              7. GDPR Data Protection Rights
            </h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-xs">
              <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification:</strong> You have the right to request correction of inaccurate information.</li>
              <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data under certain conditions.</li>
              <li><strong>The right to restrict processing:</strong> You have the right to request restriction of processing of your personal data.</li>
              <li><strong>The right to data portability:</strong> You have the right to request transfer of your data to another organization.</li>
            </ul>
          </section>

          {/* Section 8: Children's Information */}
          <section className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              8. Children's Privacy (COPPA Compliance)
            </h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              TM Digital Marketing does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </section>

          {/* Section 9: Data Officer & Contact */}
          <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h2 className="font-heading font-bold text-xl text-[#111827] dark:text-white">
              9. Contact Our Data Protection Officers
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy policies or data handling, reach out directly to agency leadership:
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
              to="/cookies"
              className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-all"
            >
              <span>View Cookie Policy</span>
            </Link>
            <Link
              to="/disclaimer"
              className="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-bold text-xs transition-all"
            >
              <span>View Disclaimers</span>
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
