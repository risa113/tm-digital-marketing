import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/marketingData';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight">
            What Our Clients <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-[#64748B] dark:text-slate-300 text-base sm:text-lg">
            Real feedback from business owners and CMOs who trust TM Digital Marketing.
          </p>
        </div>

        {/* Glass Card Auto-Slide Display */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 relative shadow-xl space-y-6"
            >
              <Quote className="w-12 h-12 text-[#2563EB]/20 absolute top-6 right-8 pointer-events-none" />

              {/* Company Logo & Star Rating */}
              <div className="flex items-center justify-between">
                <span className="font-heading font-extrabold text-lg text-[#2563EB] bg-blue-50 dark:bg-blue-950/60 px-4 py-1.5 rounded-xl border border-blue-200 dark:border-blue-800">
                  {current.companyLogo}
                </span>

                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-base sm:text-xl text-[#111827] dark:text-slate-100 font-medium leading-relaxed italic">
                "{current.quote}"
              </p>

              {/* Avatar & Author */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={`${current.name} - Testimonial for TM Digital Marketing`}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#2563EB]"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-sm text-[#111827] dark:text-white">{current.name}</h4>
                    <p className="text-xs text-[#64748B] dark:text-slate-400">{current.role} • <strong className="text-[#111827] dark:text-slate-200">{current.company}</strong></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === i ? 'w-8 bg-[#2563EB]' : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-3 rounded-2xl glass-card hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-3 rounded-2xl glass-card hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
