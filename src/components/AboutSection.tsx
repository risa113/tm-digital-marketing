import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Target, ShieldCheck, TrendingUp, Award } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      title: 'Product-First Thinking',
      desc: 'We design and build digital growth systems that people love and businesses depend on.'
    },
    {
      title: 'Enterprise-Grade Reliability',
      desc: 'Scalable marketing funnels and high-performing tech systems that keep pace with your growth.'
    },
    {
      title: 'Measurable Impact',
      desc: 'Transparent weekly delivery, clear KPI goals, and revenue metrics you can track in real-time.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>ABOUT US</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight leading-tight">
              Strategic Marketing, Thoughtful Design, <span className="gradient-text">Measurable Growth.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Glass Card Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden shadow-xl">
              <div className="space-y-6 relative z-10">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#2563EB]">Who We Are</span>
                
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#111827] dark:text-white leading-snug">
                  "We help businesses generate leads, increase revenue, and build strong digital brands."
                </h3>
                
                <p className="text-[#64748B] dark:text-slate-300 text-sm sm:text-base leading-relaxed text-justify sm:text-left">
                  TM Digital Marketing is a professional IT & digital marketing partner for businesses that want more than just code or basic posts. We create intelligent marketing systems, meaningful digital experiences, and growth-ready strategies that connect technology with commercial impact.
                </p>

                <div className="pt-4 space-y-4">
                  <p className="text-xs font-bold text-[#111827] dark:text-white uppercase tracking-wider">What Makes Us Distinct</p>
                  {pillars.map((p) => (
                    <div key={p.title} className="flex items-start gap-3 text-left">
                      <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-[#111827] dark:text-white">{p.title}</h4>
                        <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed text-justify sm:text-left">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="SEO Services in Tirunelveli - TM Digital Marketing Team"
                  loading="lazy"
                  decoding="async"
                  width="1000"
                  height="667"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0F172A]/90 backdrop-blur-md border border-slate-700/60 shadow-xl flex items-center justify-between text-white text-left">
                  <div>
                    <p className="text-xs font-bold text-sky-400">Quality-Driven Approach</p>
                    <p className="text-sm font-bold text-white">Polished digital products that perform & inspire.</p>
                  </div>
                  <Award className="w-8 h-8 text-[#3B82F6] shrink-0" />
                </div>
              </div>

              {/* Bottom Badge Overlay */}
              <div className="mt-6 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-between text-left">
                <div>
                  <p className="text-xs font-bold text-[#2563EB]">Proven Outcomes</p>
                  <p className="text-sm font-bold text-[#111827] dark:text-white">High-impact marketing launches for ambitious businesses.</p>
                </div>
                <TrendingUp className="w-6 h-6 text-[#2563EB] shrink-0" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
