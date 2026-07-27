import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Zap, 
  Calculator,
  MessageSquare,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import { CONTACT_INFO } from '../data/marketingData';
import { ServiceItem } from '../data/marketingData';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export default function HomePage({ onOpenConsultation, onSelectService }: HomePageProps) {
  // Interactive Marketing ROI Calculator State
  const [monthlyBudget, setMonthlyBudget] = useState(1000);
  const [industry, setIndustry] = useState<'ecommerce' | 'services' | 'b2b'>('services');

  // Estimate return multiplier
  const multiplier = industry === 'ecommerce' ? 4.2 : industry === 'services' ? 5.5 : 3.8;
  const estimatedRevenue = Math.round(monthlyBudget * multiplier);
  const estimatedLeads = Math.round((monthlyBudget / 25) * (industry === 'ecommerce' ? 1.5 : 1));

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* Trusted Client Brands / Global Market Standard Bar */}
      <section className="py-10 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#64748B] dark:text-slate-400 mb-6">
            Trusted by Ambitious Brands & International Businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-heading font-black text-xl sm:text-2xl text-slate-700 dark:text-slate-300">⚡ AURA SKINCARE</span>
            <span className="font-heading font-black text-xl sm:text-2xl text-slate-700 dark:text-slate-300">🏛️ STERLING TECH</span>
            <span className="font-heading font-black text-xl sm:text-2xl text-slate-700 dark:text-slate-300">🚀 HYPERION</span>
            <span className="font-heading font-black text-xl sm:text-2xl text-slate-700 dark:text-slate-300">🌐 NEXUS DIGITAL</span>
            <span className="font-heading font-black text-xl sm:text-2xl text-slate-700 dark:text-slate-300">💎 APEX CAPITAL</span>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <ServicesSection onSelectService={onSelectService} />

      {/* Interactive Marketing ROI & Lead Estimator Calculator */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Growth Estimator</span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white leading-tight">
                Calculate Your Estimated Marketing <span className="text-[#2563EB]">ROI & Lead Growth</span>
              </h2>
              <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                See how much revenue and lead pipeline you can generate by partnering with TM Digital Marketing's performance ad funnels and SEO framework.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                  <span>Real-time conversion modeling based on active campaign benchmarks</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                  <span>No hidden agency retainers - 100% transparent ROAS tracking</span>
                </div>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                
                {/* Budget Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold text-slate-800 dark:text-slate-200">
                    <span>Monthly Ad Budget ($):</span>
                    <span className="text-xl font-black text-[#2563EB]">${monthlyBudget.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="10000"
                    step="100"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                  />
                </div>

                {/* Industry Selector */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400">Industry Model</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['services', 'ecommerce', 'b2b'] as const).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setIndustry(item)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-extrabold capitalize transition-all border ${
                          industry === item
                            ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {item === 'services' ? 'Services / Local' : item === 'ecommerce' ? 'E-Commerce' : 'B2B / SaaS'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimation Results */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80">
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Estimated Revenue</p>
                    <p className="text-2xl sm:text-3xl font-black text-[#2563EB]">${estimatedRevenue.toLocaleString()}</p>
                    <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">~{multiplier}x ROAS Return</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">Est. Monthly Leads</p>
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">~{estimatedLeads}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">High-intent prospects</p>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-btn font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Claim This Growth Plan</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Founder Direct Access Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                <ShieldCheck className="w-4 h-4" />
                1-on-1 Founder Accountability
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight">
                Work Directly with Founders Mohamed Thariq & Muja
              </h2>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                No junior account managers. Direct strategy calls, instant WhatsApp support, and weekly growth reports directly from agency founders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={`tel:${CONTACT_INFO.contacts[0].phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white text-[#2563EB] font-btn font-bold text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Mohamed: +91 86087 24931</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-blue-900/60 hover:bg-blue-900 text-white font-btn font-bold text-sm border border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Go to Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Showcase */}
      <TestimonialsSection />

      {/* Final CTA Banner */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Ready to Dominate Your Market & <br />
            <span className="text-[#3B82F6]">Scale Your Business Revenue?</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Book a free 30-minute growth strategy consultation with TM Digital Marketing today. Let’s build your customized ROI roadmap!
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-semibold text-base rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 shadow-xl shadow-blue-600/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>Book Free Strategy Call</span>
            </button>
            <Link
              to="/why-us"
              className="w-full sm:w-auto font-btn font-semibold text-base rounded-2xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white px-8 py-4 transition-all flex items-center justify-center gap-2"
            >
              <span>Learn Why Brands Choose Us</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
