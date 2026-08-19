import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  RefreshCw, 
  Search, 
  Compass, 
  Layers, 
  Rocket, 
  Sliders, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck,
  Cpu,
  Clock
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/marketingData';
import AmbientBackground from '../components/AmbientBackground';
import { fadeInUp, fadeInDown, slideInLeft, slideInRight, staggerContainer, defaultViewport } from '../utils/animations';

interface ProcessPageProps {
  onOpenConsultation: () => void;
}

export default function ProcessPage({ onOpenConsultation }: ProcessPageProps) {
  const [activeStep, setActiveStep] = useState(0);

  const stepDetails = [
    {
      step: '01',
      title: 'Discovery & Market Audit',
      timeframe: 'Day 1 - Day 2',
      icon: Search,
      overview: 'We conduct a comprehensive audit of your existing audience, competitor ad creatives, keywords, and landing page bottlenecks.',
      deliverables: [
        'Competitor Ad Creative Analysis',
        'SEO Opportunity & Keyword Gap Map',
        'Conversion Rate Bottleneck Report',
        'Target Audience Persona Blueprint'
      ]
    },
    {
      step: '02',
      title: 'Agile Strategy & Blueprint',
      timeframe: 'Day 2 - Day 3',
      icon: Compass,
      overview: 'We construct your custom 30-day growth engine roadmap, detailing exact ad budgets, bidding strategies, and landing page wireframes.',
      deliverables: [
        'Omnichannel Media Budget Plan',
        'Offer Hook & Copywriting Angles',
        'High-Conversion Landing Page Structure',
        'Tracking Pixel & CAPI Implementation Specs'
      ]
    },
    {
      step: '03',
      title: 'Creative Content Sprint',
      timeframe: 'Day 3 - Day 5',
      icon: Layers,
      overview: 'Our design studio produces scroll-stopping video Reels, 3D vector graphics, promotional banners, and direct-response sales copy.',
      deliverables: [
        '5+ A/B Ad Creative Variations',
        'Cinematic Short-Form Video Reels',
        'High-Converting Ad Copy Angles',
        'Mobile-Optimized Glassmorphic Assets'
      ]
    },
    {
      step: '04',
      title: 'Omnichannel Campaign Launch',
      timeframe: 'Day 5 - Day 7',
      icon: Rocket,
      overview: 'We deploy your ad campaigns across Meta Ads, Google Search PPC, and Instagram while setting up 24/7 conversion tracking.',
      deliverables: [
        'Live Meta Ads (FB & Instagram)',
        'Live Google PPC & Shopping Campaigns',
        'Server-Side CAPI & GA4 Event Tracking',
        'Direct WhatsApp Lead Routing System'
      ]
    },
    {
      step: '05',
      title: 'Conversion Tuning & Optimization',
      timeframe: 'Day 8 - Day 14',
      icon: Sliders,
      overview: 'We analyze real-time click-through rates, cost per lead (CPL), and landing page drop-offs to optimize bidding and pause non-performing ads.',
      deliverables: [
        'Daily Bid & Placement Adjustments',
        'Negative Keyword Exclusions',
        'A/B Creative Winner Scaling',
        'Weekly Performance Video Breakdown'
      ]
    },
    {
      step: '06',
      title: 'Scale & Market Leadership',
      timeframe: 'Day 15 - Ongoing',
      icon: TrendingUp,
      overview: 'We scale your winning campaigns aggressively, introduce retargeting funnels, and deploy AI chatbots to maximize lifetime customer value.',
      deliverables: [
        'Aggressive Budget Scaling',
        'Custom AI Lead Qualification Bot',
        'Lookalike & Retargeting Audience Expansion',
        'Direct Founder Strategic Review Call'
      ]
    }
  ];

  const toolsStack = [
    { name: 'Google Analytics 4', category: 'Analytics', icon: '📊' },
    { name: 'Meta Ads Manager', category: 'Paid Social', icon: '🎯' },
    { name: 'Google Ads PPC', category: 'Search PPC', icon: '🔍' },
    { name: 'SEMrush & Ahrefs', category: 'SEO Research', icon: '🚀' },
    { name: 'React & Next.js', category: 'Web Engineering', icon: '⚡' },
    { name: 'AI Workflows', category: 'Automation', icon: '🤖' }
  ];

  return (
    <div className="relative w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen overflow-hidden">
      <AmbientBackground />

      {/* Hero Header Banner (Upper to Down & Down to Up) */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]"
          >
            <RefreshCw className="w-4 h-4 animate-spin-slow" />
            <span>Agile Growth Engine</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Our Proven 6-Step <br />
            <span className="text-[#2563EB]">7-Day Campaign Launch Blueprint</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={2}
            className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We turn market research into live, high-converting ad campaigns and modern web platforms in just 7 days.
          </motion.p>
        </div>
      </section>

      {/* Interactive Process Step Explorer (Side-Show Left & Right) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Step Selector Tabs (Left Slide) */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-5 space-y-3"
          >
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB] mb-2 px-2">
              Select Step To View Details
            </p>
            {stepDetails.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-xl shadow-blue-600/30 font-bold scale-[1.02]'
                      : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-[#2563EB]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black ${
                      activeStep === idx ? 'bg-white/20 text-white' : 'bg-blue-50 dark:bg-blue-950 text-[#2563EB]'
                    }`}>
                      {step.step}
                    </span>
                    <div>
                      <p className="text-sm font-extrabold">{step.title}</p>
                      <p className={`text-[11px] ${activeStep === idx ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'}`}>
                        {step.timeframe}
                      </p>
                    </div>
                  </div>
                  <IconComp className="w-5 h-5 opacity-80" />
                </button>
              );
            })}
          </motion.div>

          {/* Active Step Details Panel (Right Slide) */}
          <motion.div 
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-7"
          >
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center">
                    {(() => {
                      const IconComp = stepDetails[activeStep].icon;
                      return <IconComp className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#2563EB] uppercase tracking-wider">
                      Phase {stepDetails[activeStep].step}
                    </span>
                    <h2 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">
                      {stepDetails[activeStep].title}
                    </h2>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{stepDetails[activeStep].timeframe}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed">
                {stepDetails[activeStep].overview}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
                  Deliverables Produced in This Phase:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stepDetails[activeStep].deliverables.map((item) => (
                    <div
                      key={item}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Agile Sprint Execution guaranteed
                </span>
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Start This Process
                </button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Technology & Tools Stack (Staggered Down to Up) */}
      <section className="py-16 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <div className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Engineering & Ad Tools</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
              Powered by Industry-Leading Marketing Tech
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {toolsStack.map((tool, idx) => (
              <motion.div
                key={tool.name}
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -6 }}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-md"
              >
                <div className="text-2xl">{tool.icon}</div>
                <h3 className="font-bold text-xs text-slate-900 dark:text-white">{tool.name}</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">{tool.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="py-16 bg-slate-900 text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Ready to Launch Your 7-Day Growth Sprint?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get started today with founders Mohamed Thariq & Muja. We set up your campaign and tracking in under a week.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Launch 7-Day Sprint</span>
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/deliverables"
                className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
              >
                <span>View Past Deliverables</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
