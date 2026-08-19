import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS, ProcessStep } from '../data/marketingData';
import { fadeInUp, fadeInDown, slideInLeft, slideInRight, staggerContainer, defaultViewport } from '../utils/animations';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white dark:bg-[#0B132B] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Upper to Down & Down to Up) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>AGILE WORKFLOW</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight"
          >
            How We Drive <span className="gradient-text">Growth For Your Brand</span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={2}
            className="text-[#64748B] dark:text-slate-300 text-base sm:text-lg"
          >
            Our 6-step agile process ensures 7-day campaign deployment, continuous optimization, and predictable ROI.
          </motion.p>
        </div>

        {/* Process Steps Timeline (Staggered Side-Show & Down-to-Up Entrances) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROCESS_STEPS.map((item: ProcessStep, index: number) => {
            const cardVariant = index % 3 === 0 ? slideInLeft : index % 3 === 1 ? fadeInUp : slideInRight;

            return (
              <motion.div
                key={item.step}
                variants={cardVariant}
                custom={index % 3}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-[#2563EB] transition-all relative group shadow-lg"
              >
                {/* Big Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-num font-extrabold text-4xl text-[#2563EB] dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-xl text-[#111827] dark:text-white mb-3 group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
