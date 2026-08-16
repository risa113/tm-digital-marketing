import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  PhoneCall, 
  HelpCircle, 
  Users, 
  BarChart3, 
  MapPin 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

interface Props {
  onOpenConsultation: () => void;
}

export default function DigitalMarketingTirunelveliPage({ onOpenConsultation }: Props) {
  const pillars = [
    { title: 'Search Engine Optimization (SEO)', desc: 'Dominate Google search results and local Google Maps 3-Pack in Tirunelveli and Nellai.' },
    { title: 'Meta Ads (Facebook & Instagram)', desc: 'High-ROAS visual ad campaigns, UGC video creatives & retargeting acquisition funnels.' },
    { title: 'Google Ads PPC & Search', desc: 'Capture high-intent ready-to-buy customers at the precise moment they search for your services.' },
    { title: '3D Website Engineering', desc: 'Ultra-fast, mobile-responsive React & Next.js websites built for high lead conversion rates.' },
    { title: 'Brand Identity & Vector Systems', desc: 'Distinctive visual branding, luxury color tokens, typography systems, and vector logos.' },
    { title: 'D2C WhatsApp & AI Lead Funnels', desc: 'Conversational messaging systems with 98% open rates directly connecting to your sales team.' }
  ];

  const faqs = [
    {
      q: 'Why should my business choose TM Digital Marketing in Tirunelveli?',
      a: 'We eliminate traditional slow agency bureaucracy. You get direct 1-on-1 strategy access to founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812), agile 7-day campaign launch sprints, and 100% data-driven mathematical ROI focus.'
    },
    {
      q: 'What industries in Tirunelveli and Tamil Nadu do you specialize in?',
      a: 'We drive revenue for healthcare clinics, retail fashion brands, real estate developers, educational academies, B2B manufacturers, organic food producers, and local service professionals across southern Tamil Nadu.'
    },
    {
      q: 'How fast will we see tangible lead generation results?',
      a: 'Our Meta and Google ad campaigns begin generating verified customer inquiries within 48 to 72 hours of campaign deployment. SEO and organic authority build steadily with noticeable ranking improvements within 30 to 60 days.'
    },
    {
      q: 'Do you require long-term lock-in contracts?',
      a: 'No! We operate on flexible monthly performance retainers. We earn your partnership every single month through measurable business results.'
    }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <MapPin className="w-4 h-4 text-[#2563EB]" />
            <span>Tirunelveli's Premier Growth Agency</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Best Digital Marketing Agency in <br />
            <span className="text-[#2563EB]">Tirunelveli &amp; Nellai</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Scale your business revenue with full-funnel digital marketing. We engineer high-ROAS Meta Ads, Google PPC campaigns, technical SEO rankings, 3D websites, and direct WhatsApp lead systems for brands across Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Free Strategy Call</span>
            </button>
            <a
              href={`tel:${CONTACT_INFO.contacts[0].phone}`}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#2563EB]" />
              <span>Direct Founder: +91 86087 24931</span>
            </a>
          </div>
        </div>
      </section>

      {/* Core Omnichannel Capabilities */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Full-Funnel Capabilities</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Integrated Growth Channels Designed for Maximum ROI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 hover:border-[#2563EB] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-[#2563EB] hover:underline inline-flex items-center gap-1"
                >
                  <span>Request Custom Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 7-Day Sprint Model */}
      <section className="py-16 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Velocity Meets Precision</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Why Tirunelveli Businesses Win With Our 7-Day Sprints
            </h2>
            <p className="text-sm text-[#64748B] dark:text-slate-400 max-w-2xl mx-auto">
              We replace legacy 6-week agency delays with a streamlined, high-velocity execution framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <ShieldCheck className="w-8 h-8 text-[#2563EB]" />
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Direct Founder Strategy</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Work directly with agency founders Mohamed Thariq and Muja. Zero account manager confusion or delayed communication.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <Zap className="w-8 h-8 text-[#2563EB]" />
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Agile 7-Day Launch</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ad creatives, persuasive copy, and conversion funnels are fully tested and deployed in live markets within one week.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <BarChart3 className="w-8 h-8 text-[#2563EB]" />
              <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Real-Time GA4 &amp; CAPI Tracking</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Transparent live dashboards, weekly founder video updates, and direct lead notifications routed straight to your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Got Questions?</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Digital Marketing in Tirunelveli FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
            >
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Ready to Dominate Your Market in Tirunelveli?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a free 30-minute growth strategy consultation with founders Mohamed Thariq &amp; Muja today.
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
