import { Link } from 'react-router-dom';
import { 
  Code, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2 
} from 'lucide-react';
import { CONTACT_INFO, WEBSITE_PACKAGES } from '../data/marketingData';

interface Props {
  onOpenConsultation: () => void;
}

export default function WebDevelopmentTirunelveliPage({ onOpenConsultation }: Props) {
  const features = [
    { title: 'Custom React & Next.js Platforms', desc: 'Engineered from scratch without bloated WordPress themes for instantaneous page transitions and unmatched speed.' },
    { title: '3D Interactive Glassmorphic UI/UX', desc: 'Apple and Stripe inspired glassmorphism with interactive 3D WebGL canvases and fluid micro-animations.' },
    { title: '98+ Google Lighthouse Performance', desc: 'Sub-second load times, LCP < 1.2s, zero layout shift (CLS = 0), and optimized WebP visual assets.' },
    { title: 'Mobile-First Responsive Engineering', desc: 'Pixel-perfect typography, touch targets, and layouts fluidly optimized for mobile, tablet, and desktop.' },
    { title: 'Built-in Technical SEO & Schema', desc: 'Every website comes pre-configured with Google Search Console, GA4, Open Graph, and JSON-LD schema.' },
    { title: 'Direct WhatsApp & Database Routing', desc: 'Automated contact form submissions saved to cloud databases and routed instantly to your WhatsApp.' }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <Code className="w-4 h-4 text-[#2563EB]" />
            <span>Modern Web Engineering in Tirunelveli</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Website Development Company in <br />
            <span className="text-[#2563EB]">Tirunelveli &amp; Nellai</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ultra-fast, mobile-responsive 3D glassmorphic websites built with React, Next.js, and Tailwind CSS. We engineer high-converting web applications that rank #1 on Google and turn visitors into paying customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Start Your Web Project</span>
            </button>
            <a
              href={`tel:${CONTACT_INFO.contacts[0].phone}`}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#2563EB]" />
              <span>Call Founders: +91 86087 24931</span>
            </a>
          </div>
        </div>
      </section>

      {/* Engineering Features Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Full-Stack Engineering</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Built with Modern Tech for Unrivaled Speed
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 hover:border-[#2563EB] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-[#2563EB]">⚡ 98+ Lighthouse Score Guaranteed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Matrix */}
      <section className="py-16 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Transparent Pricing</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Website Development Packages
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              100% transparent pricing with direct founder support and agile delivery timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch pt-4">
            {WEBSITE_PACKAGES.map((pkg) => {
              const isProf = pkg.id === 'professional' || pkg.popular;
              return (
                <div
                  key={pkg.id}
                  className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between relative ${
                    isProf
                      ? 'bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white border-2 border-blue-500 shadow-2xl xl:-translate-y-3 z-20 scale-[1.03]'
                      : 'bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'
                  }`}
                >
                  <div className="space-y-5">
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl flex items-center gap-2">
                        <span>{pkg.icon}</span>
                        <span>{pkg.name}</span>
                      </h3>
                      <div className="pt-2">
                        <span className={`font-num font-black text-3xl block ${
                          isProf ? 'text-cyan-300' : 'text-[#2563EB]'
                        }`}>
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">{pkg.subtitle}</p>
                    </div>

                    <div className="space-y-2 pt-2">
                      {pkg.features.map((f) => (
                        <div key={f} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-btn font-bold text-xs shadow-md hover:bg-[#1D4ED8] transition-all"
                    >
                      {pkg.cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Ready to Build an Ultra-Fast Website?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact agency founders Mohamed Thariq &amp; Muja to discuss your project requirements and receive a free wireframe prototype.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Strategy Call</span>
            </button>
            <Link
              to="/deliverables"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>View Past Deliverables</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
