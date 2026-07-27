import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle2, Zap } from 'lucide-react';
import Hero3DCanvas from './Hero3DCanvas';
import { STATS } from '../data/marketingData';

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
  return (
    <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-[#F8FAFC] dark:bg-[#0F172A]">
      {/* Background Soft Glow Blobs */}
      <div className="absolute top-10 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-blue-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-sky-400/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-5 sm:space-y-7 text-left"
          >
            {/* Top Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] sm:text-xs font-bold text-[#2563EB]">
              <Zap className="w-3.5 h-3.5 text-[#3B82F6] animate-pulse" />
              <span>#1 Digital Marketing Agency in Tirunelveli</span>
            </div>

            {/* Sora ExtraBold Heading */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#111827] dark:text-white tracking-tight leading-[1.1]">
              Grow Your Business with <br className="hidden sm:block" />
              <span className="gradient-text">TM Digital Marketing</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-lg text-[#64748B] dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              Tirunelveli's top digital marketing team helping brands dominate <strong className="text-[#111827] dark:text-white font-semibold">Google SEO</strong>, <strong className="text-[#111827] dark:text-white font-semibold">Instagram</strong>, <strong className="text-[#111827] dark:text-white font-semibold">Meta Ads</strong> and <strong className="text-[#111827] dark:text-white font-semibold">Google PPC</strong> with strategies that drive high ROI.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
              <button
                onClick={onOpenConsultation}
                className="font-btn font-semibold text-sm sm:text-base rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 sm:px-8 py-3.5 sm:py-4 shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <Link
                to="/deliverables"
                className="font-btn font-semibold text-sm sm:text-base rounded-2xl glass-card text-[#111827] dark:text-white px-6 sm:px-8 py-3.5 sm:py-4 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2.5 border border-slate-200 dark:border-slate-800"
              >
                <span>Deliverables</span>
                <Play className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-5 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] sm:text-xs text-[#64748B] dark:text-slate-400 font-medium">
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
                <span>Instant WhatsApp Communication</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Laptop & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative h-[320px] sm:h-[450px] flex items-center justify-center"
          >
            <Hero3DCanvas />
          </motion.div>

        </div>

        {/* Startup Agency Animated Counter Statistics Bar */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-1"
              >
                <StatCounter value={stat.value} suffix={stat.suffix} />
                <h3 className="font-heading font-bold text-xs sm:text-sm text-[#111827] dark:text-white pt-0.5 sm:pt-1">
                  {stat.label}
                </h3>
                <p className="text-[10px] sm:text-xs text-[#64748B] dark:text-slate-400">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
