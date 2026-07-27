import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, XCircle, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/marketingData';

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white dark:bg-[#0B132B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight leading-tight">
            Why TM Digital Marketing <span className="gradient-text">Outperforms The Rest</span>
          </h2>
          <p className="text-[#64748B] dark:text-slate-300 text-base sm:text-lg">
            See how our agile startup approach compares to slow, traditional marketing agencies.
          </p>
        </div>

        {/* 2-Column Comparative Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Traditional Agencies ❌ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border border-rose-200 dark:border-rose-950/60 bg-rose-50/20 dark:bg-rose-950/10 space-y-6 flex flex-col justify-between text-left"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-rose-200 dark:border-rose-900/40 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-500 flex items-center justify-center font-bold">
                  ❌
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-[#111827] dark:text-white">Traditional Agencies</h3>
                  <p className="text-xs text-rose-500 font-semibold">Slow execution & high overhead</p>
                </div>
              </div>

              <div className="space-y-5">
                {WHY_CHOOSE_US.others.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 text-left">
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#111827] dark:text-white">{item.title}</h4>
                      <p className="text-xs text-[#64748B] dark:text-slate-400 leading-relaxed text-justify sm:text-left">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: TM Digital Marketing ✓ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-10 rounded-3xl border-2 border-[#2563EB] bg-blue-50/30 dark:bg-blue-950/20 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden text-left"
          >
            <div className="absolute top-0 right-0 px-4 py-1 bg-[#2563EB] text-white text-[10px] font-extrabold uppercase rounded-bl-2xl tracking-wider">
              Recommended Choice
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-blue-200 dark:border-blue-900/40 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-xl text-[#111827] dark:text-white">TM Digital Marketing</h3>
                  <p className="text-xs text-[#2563EB] font-bold">Agile velocity & 100% data focus</p>
                </div>
              </div>

              <div className="space-y-5">
                {WHY_CHOOSE_US.tmDigital.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5 text-left">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#111827] dark:text-white">{item.title}</h4>
                      <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed text-justify sm:text-left">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
