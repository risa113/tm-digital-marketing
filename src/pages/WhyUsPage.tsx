import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  UserCheck, 
  Target, 
  Check, 
  X, 
  Sparkles, 
  MessageSquare,
  Lock,
  Code,
  Award,
  PhoneCall
} from 'lucide-react';
import { WHY_CHOOSE_US, CONTACT_INFO } from '../data/marketingData';
import AmbientBackground from '../components/AmbientBackground';
import { fadeInUp, fadeInDown, slideInLeft, slideInRight, staggerContainer, defaultViewport } from '../utils/animations';

interface WhyUsPageProps {
  onOpenConsultation: () => void;
}

export default function WhyUsPage({ onOpenConsultation }: WhyUsPageProps) {
  const differentiators = [
    { title: '7-Day Sprint Velocity', desc: 'Campaigns and 3D websites launch in 5 to 7 days, giving you instant market advantage.', icon: Zap },
    { title: 'Direct Founder Strategy', desc: 'Direct strategy access to Mohamed Thariq (+91 86087 24931) & Muja (+91 63694 80812).', icon: UserCheck },
    { title: '100% Data & ROAS Focused', desc: 'Zero vanity metrics. We scale revenue, lead volume, and return on ad spend.', icon: Target },
    { title: 'Custom AI Automation', desc: 'Deploy 24/7 AI lead qualification chatbots, auto CRM routing, and automated email flows.', icon: Code },
    { title: 'No Long-Term Lock-Ins', desc: 'Flexible monthly growth retainers. We earn your business with continuous performance.', icon: Lock },
    { title: 'Direct WhatsApp Support', desc: 'Instant real-time communication on WhatsApp directly with agency founders.', icon: MessageSquare }
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
            <ShieldCheck className="w-4 h-4" />
            <span>The TM Digital Difference</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Why High-Growth Brands Choose <br />
            <span className="text-[#2563EB]">TM Digital Marketing</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={2}
            className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We replace slow agency bureaucracy with agile sprint velocity, direct founder accountability, and transparent performance metrics.
          </motion.p>
        </div>
      </section>

      {/* 10 Key Differentiators Grid (Staggered Directional Entrances) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {differentiators.map((diff, idx) => {
            const IconComp = diff.icon;
            const cardVariant = idx % 3 === 0 ? slideInLeft : idx % 3 === 1 ? fadeInUp : slideInRight;

            return (
              <motion.div
                key={diff.title}
                variants={cardVariant}
                custom={idx % 3}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4 hover:shadow-2xl hover:border-[#2563EB]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">{diff.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{diff.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Head-to-Head Comparison Table (Side-Show Left & Right) */}
      <section className="py-16 sm:py-24 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <motion.span 
              variants={fadeInDown}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]"
            >
              Head-to-Head Comparison
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              custom={1}
              className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white"
            >
              Traditional Agencies vs TM Digital Marketing
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              custom={2}
              className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
            >
              Compare our performance-first sprint model against legacy marketing agencies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Outdated Traditional Agencies Card (Slide in Left) */}
            <motion.div 
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center font-bold">
                  ✕
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">Traditional Agencies</h3>
              </div>

              <div className="space-y-4">
                {WHY_CHOOSE_US.others.map((item) => (
                  <motion.div whileHover={{ x: 4 }} key={item.title} className="flex items-start gap-3 text-xs sm:text-sm">
                    <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">{item.title}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* TM Digital Marketing Premium Card (Slide in Right) */}
            <motion.div 
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              className="p-8 rounded-3xl bg-gradient-to-b from-blue-600/10 via-slate-900 to-slate-900 border-2 border-[#2563EB] text-white shadow-2xl space-y-6 relative"
            >
              <span className="absolute -top-3.5 left-6 px-4 py-1 rounded-full bg-[#2563EB] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                The Performance Standard
              </span>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-heading font-extrabold text-xl text-white">TM Digital Marketing</h3>
              </div>

              <div className="space-y-4">
                {WHY_CHOOSE_US.tmDigital.map((item) => (
                  <motion.div whileHover={{ x: 4 }} key={item.title} className="flex items-start gap-3 text-xs sm:text-sm">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-slate-300 text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Direct Guarantee Banner (Pop and Fade in Up) */}
      <motion.section 
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Award className="w-4 h-4" /> 100% Founder Commitment
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Direct Strategy with Mohamed Thariq & Muja</h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            You will always have direct phone and WhatsApp lines to our agency co-founders. No middleman delays.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-white text-[#2563EB] shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Book Strategy Call</span>
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${CONTACT_INFO.contacts[0].phone}`}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-blue-900/60 text-white border border-white/30 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Founders Now</span>
            </motion.a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
