import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Search, 
  Share2, 
  Target, 
  TrendingUp, 
  Code, 
  Palette, 
  Video, 
  FileText, 
  MessageSquare, 
  Mail, 
  Bot, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';
import { SERVICES, ServiceItem, WEBSITE_PACKAGES } from '../data/marketingData';

interface ServicesPageProps {
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

const ICON_MAP: Record<string, any> = {
  Search,
  Share2,
  Target,
  TrendingUp,
  Code,
  Palette,
  Video,
  FileText,
  MessageSquare,
  Mail,
  Bot
};

export default function ServicesPage({ onOpenConsultation, onSelectService }: ServicesPageProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'paid' | 'web' | 'creative'>('all');

  // Filter services by category
  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'paid') return ['seo', 'meta-ads', 'google-ads', 'whatsapp-marketing', 'email-marketing'].includes(s.id);
    if (activeCategory === 'web') return ['website-development', 'ai-automation'].includes(s.id);
    if (activeCategory === 'creative') return ['branding', 'graphic-design', 'video-editing', 'content-creation', 'social-media-marketing'].includes(s.id);
    return true;
  });

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <Zap className="w-4 h-4" />
            <span>12+ Growth Solutions</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            High-Performance Digital Marketing <br />
            <span className="text-[#2563EB]">Tailored For Maximum Revenue</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From SEO search domination to high-ROAS Meta Ads and 3D web engineering, explore our comprehensive suite of growth solutions.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'paid', label: 'Paid Ads & PPC' },
              { id: 'web', label: 'Web & AI Tech' },
              { id: 'creative', label: 'Creative & Video' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  activeCategory === tab.id
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-lg shadow-blue-600/30'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#2563EB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComp = ICON_MAP[service.iconName] || Zap;
            return (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-extrabold text-[11px] border border-emerald-200/60 dark:border-emerald-800">
                      {service.metric}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider">{service.tag}</span>
                    <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white pt-0.5">{service.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Key Deliverables:</p>
                    <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Dedicated strategy & audit roadmap</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Custom ad creative testing & copywriting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>Weekly analytics & direct founder calls</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-3 rounded-xl bg-blue-50 dark:bg-blue-950/80 hover:bg-[#2563EB] hover:text-white text-[#2563EB] font-btn font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing / Packages Matrix */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Transparent Pricing</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white">
              Website & Development Pricing Plans
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Choose the perfect plan tailored for your brand. 100% transparent pricing with direct founder support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 items-stretch">
            {WEBSITE_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-blue-600/10 via-slate-900 to-slate-900 text-white border-[#2563EB] shadow-2xl scale-[1.02] z-10'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:border-[#2563EB]/40'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#2563EB] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md whitespace-nowrap">
                    {pkg.popularTag || '⭐ Most Popular'}
                  </span>
                )}

                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl flex items-center gap-2">
                      <span>{pkg.icon}</span>
                      <span>{pkg.name}</span>
                    </h3>
                    
                    <div className="pt-2">
                      <span className="font-num font-extrabold text-3xl sm:text-4xl text-[#2563EB] dark:text-blue-400 block">
                        {pkg.price}
                      </span>
                    </div>

                    <p className={`text-xs leading-relaxed font-medium pt-1 ${pkg.popular ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                      {pkg.subtitle}
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-[11px] font-bold text-[#2563EB] dark:text-blue-300 mt-2">
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span>{pkg.delivery}</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                      Includes
                    </p>
                    <div className="space-y-2">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2 text-xs font-medium leading-snug">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-blue-400' : 'text-[#2563EB]'}`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4">
                  <button
                    onClick={onOpenConsultation}
                    className={`w-full py-3.5 rounded-xl font-btn font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/40'
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90'
                    }`}
                  >
                    <span>{pkg.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Need a Custom Growth Package?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Contact founders Mohamed Thariq & Muja directly to build a bespoke performance marketing roadmap.
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
              to="/contact"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
