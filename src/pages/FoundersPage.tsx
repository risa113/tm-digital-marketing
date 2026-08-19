import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Phone, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Zap, 
  Target, 
  Code2, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Palette,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO, STATS } from '../data/marketingData';

interface FoundersPageProps {
  onOpenConsultation: () => void;
}

export default function FoundersPage({ onOpenConsultation }: FoundersPageProps) {
  const thariq = CONTACT_INFO.contacts[0];
  const muja = CONTACT_INFO.contacts[1];

  const founderPillars = [
    {
      icon: Zap,
      title: 'Direct Founder Accountability',
      desc: 'No junior account managers or middlemen. You communicate directly with agency founders who personally build and optimize your campaigns.'
    },
    {
      icon: Target,
      title: 'Mathematical ROI & Revenue First',
      desc: 'Zero vanity impressions. We judge campaign success strictly by customer acquisition cost (CAC), qualified lead volume, and bottom-line profit.'
    },
    {
      icon: Code2,
      title: 'Silicon Valley Tech Standards',
      desc: 'We combine 3D React/Next.js interactive engineering with high-converting direct-response marketing funnels.'
    },
    {
      icon: ShieldCheck,
      title: 'Agile 7-Day Sprint Velocity',
      desc: 'Eliminate 6-week agency delays. Your brand identity, landing pages, and ad campaigns launch tested and ready within 7 business days.'
    }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB] shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Executive Leadership & Founders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Meet the Visionaries Behind <br />
            <span className="text-[#2563EB]">TM Digital Marketing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Founded by <strong>Mohamed Thariq</strong> and <strong>Muja</strong> in Tirunelveli, TM Digital Marketing was built on a single uncompromising standard: bridging world-class 3D creative design with strict mathematical performance marketing.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6"
          >
            {STATS.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-md text-center space-y-1"
              >
                <p className="font-heading font-black text-2xl sm:text-3xl text-[#2563EB]">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Detailed Founder Profiles Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          {/* Profile 1: Mohamed Thariq */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Left Column: Portrait & Direct Contact */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-5">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-2xl overflow-hidden">
                  <img
                    src={thariq.image}
                    alt="Mohamed Thariq - Co-Founder & Creative Director"
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {thariq.name}
                  </h3>
                  <p className="text-sm font-bold text-[#2563EB] uppercase tracking-wider">
                    Co-Founder & Creative Director
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Tirunelveli, Tamil Nadu, India
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <a
                    href={thariq.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-[#25D366] text-emerald-700 dark:text-emerald-300 hover:text-white border border-emerald-200 dark:border-emerald-800 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${thariq.phone}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-[#2563EB] text-[#2563EB] dark:text-blue-300 hover:text-white border border-blue-200 dark:border-blue-800 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Bio, Capabilities & Philosophy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                    Creative Direction & 3D Engineering
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    Architecting Brand Identities & Interactive Digital Experiences
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mohamed Thariq leads the creative direction, brand systems, and front-end engineering at TM Digital Marketing. With a deep passion for 3D visual storytelling and performance web architecture, Thariq transforms traditional websites into interactive customer experiences that capture attention and drive immediate brand trust.
                </p>

                {/* Core Competencies */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400">
                    Core Specializations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      '3D Glassmorphic Web Architecture (React & Three.js)',
                      'Luxury Vector Brand Identities & Logo Systems',
                      'High-CTR Video Editing & Motion Ads',
                      'UI/UX Design Systems & Conversion Wireframing',
                      'Automated Lead Capture Frontend Engineering',
                      'Core Web Vitals & Sub-Second Page Speed Mastery'
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophy Quote */}
                <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  "Design without commercial conversion is merely decoration. Our goal is to craft brand experiences that visually captivate the user while systematically engineering bottom-line sales."
                </div>
              </div>

            </div>
          </div>

          {/* Profile 2: Muja */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Left Column: Portrait & Direct Contact */}
              <div className="lg:col-span-5 flex flex-col items-center text-center space-y-5">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl p-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 shadow-2xl overflow-hidden">
                  <img
                    src={muja.image}
                    alt="Muja - Co-Founder & Chief Growth Officer"
                    className="w-full h-full object-cover rounded-[22px]"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    {muja.name}
                  </h3>
                  <p className="text-sm font-bold text-[#2563EB] uppercase tracking-wider">
                    Co-Founder & Chief Growth Officer
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Tirunelveli, Tamil Nadu, India
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3 w-full max-w-xs">
                  <a
                    href={muja.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-[#25D366] text-emerald-700 dark:text-emerald-300 hover:text-white border border-emerald-200 dark:border-emerald-800 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${muja.phone}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-[#2563EB] text-[#2563EB] dark:text-blue-300 hover:text-white border border-blue-200 dark:border-blue-800 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Bio, Capabilities & Philosophy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider">
                    Paid Ads & Growth Strategy
                  </span>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                    Scaling Customer Acquisition & Mathematical ROAS
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  Muja leads the growth strategy, paid advertising, and conversion optimization divisions at TM Digital Marketing. Specializing in high-ROAS Meta Ads (Facebook & Instagram), Google Search PPC, Performance Max, and automated WhatsApp lead funnels, Muja has engineered growth funnels for retail, healthcare, real estate, and D2C brands across Tamil Nadu.
                </p>

                {/* Core Competencies */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-400">
                    Core Specializations
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Meta Ads Scaling & Conversions API (CAPI) Tracking',
                      'Google Search Ads PPC & Performance Max (PMax)',
                      'Automated WhatsApp D2C Lead Capture Funnels',
                      'Local SEO & Google Maps 3-Pack Domination',
                      'Customer Acquisition Cost (CAC) Optimization',
                      'Direct-Response Copywriting & Multi-Angle Ad Angles'
                    ].map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophy Quote */}
                <div className="p-5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/80 text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  "Impressions don't pay business overhead. Every advertising rupee invested must return measurable revenue, predictable customer pipelines, and verifiable commercial expansion."
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. The 4 Founder Principles */}
      <section className="py-16 sm:py-20 bg-white/60 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">
              Founder Accountability
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Why Partner Directly With Founders?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The TM Digital difference: Senior expertise without junior agency overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founderPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-4 hover:border-[#2563EB] transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation Call-to-Action */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-tr from-[#2563EB] to-indigo-700 text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
            <div className="space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-sm">
                Direct 1-on-1 Strategy
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight leading-tight">
                Ready to Scale Your Brand with Mohamed Thariq & Muja?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Book a free 30-minute growth consultation. We will audit your current website, ads, and SEO funnels and deliver a tailored roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#2563EB] font-heading font-extrabold text-sm sm:text-base shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Book Free 30-Min Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="https://wa.me/918608724931"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-extrabold text-sm sm:text-base shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
