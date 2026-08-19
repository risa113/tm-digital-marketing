import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
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
  Layers,
  Palette,
  Bot,
  Activity,
  Award,
  Globe,
  Compass,
  Cpu,
  BarChart3,
  Flame,
  ChevronRight
} from 'lucide-react';
import { CONTACT_INFO, STATS } from '../data/marketingData';

interface FoundersPageProps {
  onOpenConsultation: () => void;
}

export default function FoundersPage({ onOpenConsultation }: FoundersPageProps) {
  const [activeTabThariq, setActiveTabThariq] = useState<'specialties' | 'metrics' | 'philosophy'>('specialties');
  const [activeTabMuja, setActiveTabMuja] = useState<'specialties' | 'metrics' | 'philosophy'>('specialties');
  const [filterView, setFilterView] = useState<'all' | 'thariq' | 'muja'>('all');

  const thariq = CONTACT_INFO.contacts[0];
  const muja = CONTACT_INFO.contacts[1];

  const handleBookingClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenConsultation();
  };

  const sprintSteps = [
    {
      step: '01',
      title: 'Founder Growth Audit',
      time: 'Day 1',
      desc: '1-on-1 discovery with Mohamed Thariq & Muja. We dissect your CAC, competitors, and growth bottlenecks.'
    },
    {
      step: '02',
      title: '3D Creative & Funnel Blueprint',
      time: 'Days 2–3',
      desc: 'Architecting high-converting 3D glassmorphic landing pages, vector brand assets, and high-CTR video copy.'
    },
    {
      step: '03',
      title: 'Meta CAPI & Tracking Infrastructure',
      time: 'Days 4–5',
      desc: 'Configuring GA4 server-side attribution, Meta Conversions API (CAPI), and automated WhatsApp CRM funnels.'
    },
    {
      step: '04',
      title: 'Aggressive Market Launch',
      time: 'Days 6–7',
      desc: 'Live deployment across Google PPC and Meta Ads with real-time ROAS monitoring and founder optimizations.'
    }
  ];

  return (
    <div className="relative w-full pt-20 sm:pt-28 pb-20 bg-[#F8FAFC] dark:bg-[#090D16] text-slate-900 dark:text-white transition-colors duration-300 overflow-hidden">
      
      {/* Animated Ambient Cyber Grid & Glowing Orbs Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Radial Orb 1 */}
        <motion.div 
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 sm:w-[550px] sm:h-[550px] rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-transparent blur-3xl"
        />
        {/* Animated Radial Orb 2 */}
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 -right-32 w-96 h-96 sm:w-[600px] sm:h-[600px] rounded-full bg-gradient-to-bl from-indigo-600/30 via-purple-500/20 to-transparent blur-3xl"
        />
        {/* Animated Radial Orb 3 */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -40, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-40 left-1/3 w-96 h-96 sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-cyan-600/25 via-blue-500/15 to-transparent blur-3xl"
        />

        {/* Ambient Subtle Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* 1. Cinematic Hero Section */}
        <section className="text-center space-y-6 pt-4 sm:pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 dark:from-blue-950/60 dark:to-indigo-950/60 border border-blue-400/30 dark:border-blue-700/50 backdrop-blur-xl text-xs sm:text-sm font-extrabold text-[#2563EB] dark:text-blue-400 shadow-xl shadow-blue-500/10"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span className="tracking-wide">Direct Founder Leadership • Zero Junior Middlemen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 dark:text-white leading-[1.1] max-w-5xl mx-auto"
          >
            The Visionaries Behind <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#2563EB] via-sky-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
              TM Digital Marketing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Co-Founders <strong>Mohamed Thariq</strong> &amp; <strong>Muja</strong> unite award-winning 3D glassmorphic web architecture with aggressive mathematical ROI marketing funnels for clients in Tirunelveli and worldwide.
          </motion.p>

          {/* Interactive Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 sm:gap-3 pt-2 flex-wrap"
          >
            {[
              { id: 'all', label: '⚡ All Visionaries' },
              { id: 'thariq', label: '🎨 Mohamed Thariq (Creative)' },
              { id: 'muja', label: '📈 Muja (Growth)' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilterView(f.id as any)}
                className={`relative px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                  filterView === f.id
                    ? 'text-white shadow-xl shadow-blue-600/30'
                    : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-500'
                }`}
              >
                {filterView === f.id && (
                  <motion.div
                    layoutId="activeFilterBubble"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#2563EB] to-indigo-600 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{f.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Animated Interactive Metric Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4"
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-5 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl text-center space-y-1 group"
              >
                <div className="font-heading font-black text-2xl sm:text-4xl bg-gradient-to-r from-[#2563EB] to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 2. Interactive Animated Dual Founder Showcases */}
        <section className="space-y-12 sm:space-y-16">
          
          {/* Card 1: Mohamed Thariq */}
          <AnimatePresence mode="wait">
            {(filterView === 'all' || filterView === 'thariq') && (
              <motion.div
                key="thariq-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-[#2563EB]/60 transition-colors group"
              >
                {/* Glow Accent Ambient Background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-500/20 transition-all duration-700" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
                  
                  {/* Left Column: Portrait & Interactive Contact Hotline */}
                  <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
                    <div className="relative group/avatar">
                      {/* Rotating Halo Glow Ring */}
                      <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-blue-600 via-sky-400 to-indigo-600 opacity-75 blur-md group-hover/avatar:opacity-100 group-hover/avatar:scale-105 transition-all duration-500" />
                      
                      <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-[28px] p-1.5 bg-slate-900 overflow-hidden shadow-2xl">
                        <img
                          src={thariq.image}
                          alt="Mohamed Thariq - Co-Founder & Creative Director"
                          className="w-full h-full object-cover rounded-[24px] group-hover/avatar:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Floating Live Status Pill */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 text-emerald-400 border border-emerald-500/50 backdrop-blur-md text-[11px] font-extrabold flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Direct Access</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 dark:text-white">
                        {thariq.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#2563EB] dark:text-sky-400">
                        Co-Founder &amp; Creative Director
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        Brand Systems • 3D Web Engineering • UI/UX Architecture
                      </p>
                    </div>

                    {/* Quick Interactive Direct Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={thariq.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-[#25D366] text-emerald-700 dark:text-emerald-300 hover:text-white border border-emerald-200 dark:border-emerald-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={`tel:${thariq.phone}`}
                        className="py-3 px-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 hover:bg-[#2563EB] text-[#2563EB] dark:text-blue-300 hover:text-white border border-blue-200 dark:border-blue-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Directly</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Right Column: Interactive Details & Tabs */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header Badge & Tagline */}
                    <div className="space-y-2">
                      <span className="px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-[#2563EB] dark:text-blue-400 text-xs font-black uppercase tracking-wider">
                        Creative Intelligence
                      </span>
                      <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white leading-tight">
                        Engineering 3D Interactive Web Experiences &amp; Unforgettable Brands
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Mohamed Thariq leads creative direction and web engineering at TM Digital Marketing. By fusing high-performance React/Three.js frameworks with commercial psychology, Thariq ensures your digital assets command immediate prestige and deliver effortless customer conversion.
                    </p>

                    {/* Interactive Tab Switcher */}
                    <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 w-fit">
                      {[
                        { id: 'specialties', label: '🚀 Superpowers' },
                        { id: 'metrics', label: '📊 Impact' },
                        { id: 'philosophy', label: '💡 Philosophy' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setActiveTabThariq(t.id as any)}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTabThariq === t.id
                              ? 'bg-white dark:bg-slate-900 text-[#2563EB] dark:text-blue-400 shadow-md font-extrabold'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content 1: Superpowers */}
                    {activeTabThariq === 'specialties' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
                      >
                        {[
                          { title: '3D Web Architecture', desc: 'Three.js, WebGL & React glassmorphic design' },
                          { title: 'Vector Brand Identity', desc: 'Luxury typography, color systems & logos' },
                          { title: 'High-CTR Video Production', desc: 'Cinematic Premiere & After Effects ads' },
                          { title: 'Sub-Second Speed', desc: '100% Core Web Vitals & Google performance' },
                          { title: 'Full-Stack Integration', desc: 'Custom CMS, Supabase & Lead Gateways' },
                          { title: 'AI Automated Pipelines', desc: 'Rapid generative asset iteration engines' }
                        ].map((skill, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 hover:border-blue-500/50 transition-colors space-y-0.5"
                          >
                            <p className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                              <span>{skill.title}</span>
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                              {skill.desc}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Tab Content 2: Impact Metrics */}
                    {activeTabThariq === 'metrics' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
                      >
                        <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-center space-y-1">
                          <p className="font-heading font-black text-2xl text-[#2563EB]">100%</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Custom Code Quality</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-center space-y-1">
                          <p className="font-heading font-black text-2xl text-[#2563EB]">&lt; 0.8s</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Avg Page Load Speed</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-center space-y-1">
                          <p className="font-heading font-black text-2xl text-[#2563EB]">+300%</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Visitor Engagement</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab Content 3: Philosophy */}
                    {activeTabThariq === 'philosophy' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-transparent border-l-4 border-[#2563EB] text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed space-y-2"
                      >
                        <p>
                          "A website or brand identity that doesn't generate revenue is merely digital decoration. Every single visual element, motion transition, and vector asset we build is purposefully engineered to mesmerize users and trigger action."
                        </p>
                        <p className="text-xs font-bold not-italic text-[#2563EB]">— Mohamed Thariq, Creative Director</p>
                      </motion.div>
                    )}

                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Card 2: Muja */}
          <AnimatePresence mode="wait">
            {(filterView === 'all' || filterView === 'muja') && (
              <motion.div
                key="muja-card"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xl overflow-hidden hover:border-[#2563EB]/60 transition-colors group"
              >
                {/* Glow Accent Ambient Background */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
                  
                  {/* Left Column: Portrait & Interactive Contact Hotline */}
                  <div className="lg:col-span-5 flex flex-col items-center text-center space-y-6">
                    <div className="relative group/avatar">
                      {/* Rotating Halo Glow Ring */}
                      <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-indigo-600 via-purple-500 to-sky-500 opacity-75 blur-md group-hover/avatar:opacity-100 group-hover/avatar:scale-105 transition-all duration-500" />
                      
                      <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-[28px] p-1.5 bg-slate-900 overflow-hidden shadow-2xl">
                        <img
                          src={muja.image}
                          alt="Muja - Co-Founder & Chief Growth Officer"
                          className="w-full h-full object-cover rounded-[24px] group-hover/avatar:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Floating Live Status Pill */}
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 text-emerald-400 border border-emerald-500/50 backdrop-blur-md text-[11px] font-extrabold flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Direct Access</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-heading font-black text-2xl sm:text-4xl text-slate-900 dark:text-white">
                        {muja.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#2563EB] dark:text-indigo-400">
                        Co-Founder &amp; Chief Growth Officer
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        Meta &amp; Google PPC • ROAS Optimization • Lead Funnels
                      </p>
                    </div>

                    {/* Quick Interactive Direct Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={muja.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-[#25D366] text-emerald-700 dark:text-emerald-300 hover:text-white border border-emerald-200 dark:border-emerald-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/10"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={`tel:${muja.phone}`}
                        className="py-3 px-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 hover:bg-[#2563EB] text-[#2563EB] dark:text-blue-300 hover:text-white border border-blue-200 dark:border-blue-800 font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Directly</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Right Column: Interactive Details & Tabs */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header Badge & Tagline */}
                    <div className="space-y-2">
                      <span className="px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-xs font-black uppercase tracking-wider">
                        Growth Science
                      </span>
                      <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-slate-900 dark:text-white leading-tight">
                        Scaling Predictable Customer Acquisition &amp; Mathematical ROAS
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      Muja spearheads paid acquisition funnels, conversion rate optimization (CRO), and direct-response campaign architectures. Managing large-scale campaigns across Meta Ads, Google PPC, and automated WhatsApp CRM funnels, Muja delivers verifiable ROI for enterprise and local leaders alike.
                    </p>

                    {/* Interactive Tab Switcher */}
                    <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 w-fit">
                      {[
                        { id: 'specialties', label: '🚀 Superpowers' },
                        { id: 'metrics', label: '📊 Impact' },
                        { id: 'philosophy', label: '💡 Philosophy' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setActiveTabMuja(t.id as any)}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            activeTabMuja === t.id
                              ? 'bg-white dark:bg-slate-900 text-[#2563EB] dark:text-blue-400 shadow-md font-extrabold'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content 1: Superpowers */}
                    {activeTabMuja === 'specialties' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
                      >
                        {[
                          { title: 'Meta Ads (FB & IG) Mastery', desc: 'Deep creative testing, CAPI & Pixel tracking' },
                          { title: 'Google Ads Search & PMax', desc: 'High-intent buyer keyword harvesting & bidding' },
                          { title: 'WhatsApp Direct Lead Engines', desc: 'Conversational automation with 98% open rates' },
                          { title: 'Mathematical ROAS Strategy', desc: 'Unit economics, CAC reduction & LTV growth' },
                          { title: 'Local SEO Maps Domination', desc: 'Google Maps 3-Pack rank #1 local dominance' },
                          { title: 'Direct-Response Copywriting', desc: 'High-conversion sales hooks in Tamil & English' }
                        ].map((skill, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 hover:border-indigo-500/50 transition-colors space-y-0.5"
                          >
                            <p className="text-xs font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                              <span>{skill.title}</span>
                            </p>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-5">
                              {skill.desc}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Tab Content 2: Impact Metrics */}
                    {activeTabMuja === 'metrics' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
                      >
                        <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-center space-y-1">
                          <p className="font-heading font-black text-2xl text-indigo-600 dark:text-indigo-400">5.2x</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Average ROAS</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-center space-y-1">
                          <p className="font-heading font-black text-2xl text-indigo-600 dark:text-indigo-400">-42%</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Cost Per Lead (CPL)</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-800/60 text-center space-y-1">
                          <p className="font-heading font-black text-2xl text-indigo-600 dark:text-indigo-400">7 Days</p>
                          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Sprint Launch Speed</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Tab Content 3: Philosophy */}
                    {activeTabMuja === 'philosophy' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent border-l-4 border-indigo-500 text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed space-y-2"
                      >
                        <p>
                          "Vanity impressions don't pay payroll or business expansion. We judge our campaigns squarely on cost per acquisition, cash-flow velocity, and proven commercial return for every rupee spent."
                        </p>
                        <p className="text-xs font-bold not-italic text-indigo-600 dark:text-indigo-400">— Muja, Chief Growth Officer</p>
                      </motion.div>
                    )}

                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </section>

        {/* 3. The Interactive Synergy Reactor Section */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-slate-900 to-[#0B101D] text-white border border-slate-800 shadow-2xl overflow-hidden">
          {/* Animated Glow Grid in Container */}
          <div className="absolute inset-0 bg-[radial-gradient(#2563EB15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="relative z-10 space-y-10 text-center max-w-4xl mx-auto">
            <div className="space-y-3">
              <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-wider border border-blue-400/30">
                The TM Synergy Formula
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl tracking-tight">
                Creative Visual Magic <br />
                <span className="text-[#2563EB] dark:text-sky-400">× Mathematical Paid Strategy</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                Most agencies are either designers who don’t understand advertising mathematics, or ad buyers who create ugly visuals. We solve both under one roof.
              </p>
            </div>

            {/* Visual Formula Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-slate-800/60 border border-blue-500/30 space-y-2 text-center"
              >
                <Palette className="w-8 h-8 text-sky-400 mx-auto" />
                <h4 className="font-heading font-black text-lg text-white">Mohamed Thariq</h4>
                <p className="text-xs text-sky-300 font-bold">3D Web, UI/UX &amp; Vector Branding</p>
                <p className="text-[11px] text-slate-400">Captures customer desire and commands brand authority.</p>
              </motion.div>

              <div className="flex items-center justify-center text-3xl font-black text-blue-400">
                <span className="p-3 rounded-full bg-blue-600/20 border border-blue-500/40 animate-pulse">+</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-6 rounded-2xl bg-slate-800/60 border border-indigo-500/30 space-y-2 text-center"
              >
                <Target className="w-8 h-8 text-indigo-400 mx-auto" />
                <h4 className="font-heading font-black text-lg text-white">Muja</h4>
                <p className="text-xs text-indigo-300 font-bold">Meta Ads, Google PPC &amp; ROAS Funnels</p>
                <p className="text-[11px] text-slate-400">Drives hyper-targeted buyers and converts clicks to cash.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. The 7-Day Agile Founder Sprint */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2563EB]">
              Agile Deployment Velocity
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-slate-900 dark:text-white">
              The 7-Day Founder Sprint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              We eliminate traditional agency delays. From your first strategy call to live revenue generation in 1 week.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sprintSteps.map((s, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="p-6 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 relative overflow-hidden group hover:border-[#2563EB]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-black text-2xl text-blue-600/30 dark:text-blue-400/30 group-hover:text-[#2563EB] transition-colors">
                    {s.step}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] dark:text-blue-400 text-[10px] font-black uppercase">
                    {s.time}
                  </span>
                </div>
                <h4 className="font-heading font-black text-lg text-slate-900 dark:text-white">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Direct Founder Consultation Call-To-Action */}
        <section className="pt-4">
          <div className="relative p-8 sm:p-14 lg:p-16 rounded-[36px] bg-gradient-to-tr from-[#2563EB] via-blue-600 to-indigo-700 text-white shadow-2xl overflow-hidden text-center space-y-8">
            {/* Ambient Background Blur Rings */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />

            <div className="space-y-4 max-w-3xl mx-auto relative z-10">
              <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                Direct Access Hotline
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                Ready to Scale With Mohamed Thariq &amp; Muja?
              </h2>
              <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                Book a free 30-minute growth roadmap session. We will personally audit your website, ad copy, and keyword funnels with zero sales pressure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBookingClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#2563EB] font-heading font-black text-sm sm:text-base shadow-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2.5"
              >
                <span>Book Free 30-Min Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/918608724931"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-heading font-black text-sm sm:text-base shadow-2xl transition-all flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
