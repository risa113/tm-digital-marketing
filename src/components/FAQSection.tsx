import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/marketingData';
import { Sparkles, ChevronDown } from 'lucide-react';
import { fadeInUp, fadeInDown, staggerContainer, defaultViewport } from '../utils/animations';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('f1');

  return (
    <section id="faq" className="py-28 bg-[#F8FAFC] dark:bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Upper to Down & Down to Up) */}
        <div className="text-center space-y-5 mb-20">
          <motion.div 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800"
          >
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            <span>GOT QUESTIONS?</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight leading-tight"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={2}
            className="text-[#64748B] dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about starting your digital marketing campaign with TM Digital Marketing.
          </motion.p>
        </div>

        {/* Spacious Accordion List (Staggered Down to Up Entrance) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-6"
        >
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={fadeInUp}
                custom={idx}
                className="glass-card rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all shadow-md hover:border-[#2563EB]/40"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-6 font-heading font-extrabold text-base sm:text-xl text-[#111827] dark:text-white hover:text-[#2563EB] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className="w-9 h-9 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] flex items-center justify-center shrink-0">
                    <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="px-6 sm:px-8 pb-8 text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-6 text-left"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
