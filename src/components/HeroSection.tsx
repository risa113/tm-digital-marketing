import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, Zap } from 'lucide-react';
import { STATS } from '../data/marketingData';
import AmbientBackground from './AmbientBackground';
import { fadeInUp, fadeInDown, slideInLeft, slideInRight, staggerContainer, defaultViewport } from '../utils/animations';

const Hero3DCanvas = lazy(() => import('./Hero3DCanvas'));

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

function StatCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const frameTime = 1000 / 60;
    const totalFrames = duration / frameTime;
    const increment = value / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, frameTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-num font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#111827] dark:text-white tracking-tight">
      {Math.floor(count)}
      <span className="text-[#2563EB]">{suffix}</span>
    </span>
  );
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  useEffect(() => {
    const check = () => {
      setIsMobileDevice(window.innerWidth < 1024 || ('ontouchstart' in window && window.innerWidth < 1280));
    };
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#F8FAFC] dark:bg-[#0F172A]">
      <AmbientBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Buttons */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-7 space-y-5 sm:space-y-7 text-left"
          >
            {/* Top Tag Pill */}
            <motion.div 
              variants={fadeInDown}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] sm:text-xs font-extrabold text-[#2563EB] shadow-md shadow-blue-500/10"
            >
              <Zap className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>#1 Digital Marketing Agency in Tirunelveli</span>
            </motion.div>

            {/* Sora ExtraBold Heading */}
            <motion.h1 
              variants={fadeInUp}
              custom={1}
              className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#111827] dark:text-white tracking-tight leading-[1.1]"
            >
              Grow Your Business with <br className="hidden sm:block" />
              <span className="gradient-text drop-shadow-[0_4px_24px_rgba(37,99,235,0.3)]">TM Digital Marketing</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              variants={fadeInUp}
              custom={2}
              className="text-sm sm:text-lg text-[#64748B] dark:text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              Tirunelveli's top digital marketing team helping brands dominate <strong className="text-[#111827] dark:text-white font-semibold">Google SEO</strong>, <strong className="text-[#111827] dark:text-white font-semibold">Instagram</strong>, <strong className="text-[#111827] dark:text-white font-semibold">Meta Ads</strong> and <strong className="text-[#111827] dark:text-white font-semibold">Google PPC</strong> with strategies that drive high ROI.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeInUp}
              custom={3}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1"
            >
              <button
                onClick={onOpenConsultation}
                className="font-btn font-semibold text-sm sm:text-base rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 sm:px-8 py-3.5 sm:py-4 shadow-xl shadow-blue-600/40 hover:shadow-blue-500/60 transition-all flex items-center justify-center gap-2.5 cursor-pointer relative overflow-hidden active:scale-98"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <Link
                to="/deliverables"
                className="font-btn font-semibold text-sm sm:text-base rounded-2xl glass-card text-[#111827] dark:text-white px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2.5 border border-slate-200 dark:border-slate-800 shadow-md active:scale-98"
              >
                <span>Deliverables</span>
                <Play className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
              </Link>
            </motion.div>

            {/* Trust highlights */}
            <motion.div 
              variants={fadeInUp}
              custom={4}
              className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#64748B] dark:text-slate-400 font-medium"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981]" />
                <span>Direct Founder Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981]" />
                <span>Agile 7-Day Campaign Launch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981]" />
                <span>Instant WhatsApp Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Mobile-Optimized Fast Graphic vs Desktop 3D Canvas */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="lg:col-span-5 relative min-h-[280px] sm:min-h-[380px] flex items-center justify-center"
          >
            {isMobileDevice ? (
              /* Ultra-Fast 0ms-Load Mobile Growth Showcase Card */
              <div className="w-full max-w-md rounded-3xl p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white border border-blue-500/30 shadow-2xl relative overflow-hidden space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-base text-[#2563EB]">TM</span>
                    <span className="font-heading font-bold text-xs tracking-wider text-slate-200">DIGITAL MARKETING</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>100% ROI</span>
                  </div>
                </div>

                <div className="text-center py-2">
                  <p className="text-[10px] font-extrabold tracking-widest text-[#38BDF8] uppercase">CONNECT • ENGAGE • GROW</p>
                  <p className="font-heading font-extrabold text-2xl text-white pt-1">Growth Dashboard</p>
                </div>

                {/* Lightweight CSS Bar Chart */}
                <div className="h-28 flex items-end justify-between gap-2 px-2 pt-2 border-b border-slate-700/50 pb-2">
                  {[
                    { month: 'SEO', height: '40%', val: '+180%' },
                    { month: 'Meta', height: '65%', val: '+320%' },
                    { month: 'Google', height: '85%', val: '+450%' },
                    { month: 'Leads', height: '100%', val: '+620%' }
                  ].map((bar) => (
                    <div key={bar.month} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                      <span className="text-[9px] font-bold text-cyan-300">{bar.val}</span>
                      <div 
                        className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400"
                        style={{ height: bar.height }}
                      />
                      <span className="text-[10px] text-slate-400 font-semibold">{bar.month}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 pt-1">
                  <span>⚡ 7-Day Sprint Deploy</span>
                  <span className="text-[#38BDF8]">Direct Founder Support</span>
                </div>
              </div>
            ) : (
              /* Desktop 3D Canvas */
              <Suspense fallback={
                <div className="w-full h-64 rounded-3xl bg-blue-50/50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 animate-pulse flex items-center justify-center">
                  <Zap className="w-8 h-8 text-[#2563EB]/40 animate-spin" />
                </div>
              }>
                <Hero3DCanvas />
              </Suspense>
            )}
          </motion.div>

        </div>

        {/* Animated Counter Statistics Bar (Heavy Glow + Shimmer on Hover) */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200 dark:border-slate-800">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass-card p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-1 group heavy-card-glow shimmer-sweep"
              >
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <h3 className="font-heading font-bold text-xs sm:text-sm text-[#111827] dark:text-white pt-0.5 sm:pt-1 group-hover:text-[#2563EB] transition-colors">
                  {stat.label}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-slate-400">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
