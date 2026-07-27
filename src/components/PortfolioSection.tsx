import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowUpRight, CheckCircle2, Zap, Image as ImageIcon } from 'lucide-react';
import { PORTFOLIO, PortfolioItem } from '../data/marketingData';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const categories = ['All', 'Websites', 'Branding & Logos', 'Social & Reels', 'Ad Creatives', 'Campaign Funnels'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter((item) => item.category === activeCategory);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAFC] dark:bg-[#0F172A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Highlighted Deliverables (Step 6: H2 Heading) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-xs font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>AGENCY CAPABILITIES & DELIVERABLES</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight">
            Client Results & <span className="gradient-text">Deliverables</span>
          </h2>
          <p className="text-[#64748B] dark:text-slate-300 text-base sm:text-lg">
            Explore our client results and core marketing deliverables engineered to elevate brand identity, scale acquisition, and drive revenue in Tirunelveli.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30'
                  : 'glass-card text-[#64748B] dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="group glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-[#2563EB] transition-all cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  {/* Image Container (Step 7 & Step 15: Optimized alt & loading="lazy") */}
                  <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    {failedImages[item.id] ? (
                      <div className="w-full h-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex flex-col items-center justify-center p-6 text-white text-center">
                        <ImageIcon className="w-10 h-10 mb-2 opacity-80" />
                        <span className="font-heading font-extrabold text-sm">{item.category}</span>
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={`${item.title} - SEO Services in Tirunelveli`}
                        loading="lazy"
                        onError={() => handleImageError(item.id)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md text-[10px] font-bold text-[#2563EB] border border-blue-200 dark:border-blue-800 shadow-sm">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 dark:bg-[#0F172A]/90 backdrop-blur-md text-[#2563EB] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-extrabold text-lg text-[#111827] dark:text-white group-hover:text-[#2563EB] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] dark:text-slate-300 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#10B981]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.result}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">{item.client}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Launch Special Offer Callout Banner */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-blue-200 dark:border-blue-800/60 bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#2563EB] dark:text-blue-400 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 animate-pulse" />
              <span>LAUNCH SPECIAL OFFER</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#111827] dark:text-white">
              Be Our Next Success Story
            </h3>
            <p className="text-xs text-[#64748B] dark:text-slate-300">
              Partner with founders Mohamed Thariq and Muja today to receive a <strong>Free 30-Minute Marketing Audit & 20% Launch Discount</strong>.
            </p>
          </div>

          <a
            href="#contact"
            className="font-btn font-semibold text-xs rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 shadow-xl shadow-blue-600/30 shrink-0 hover:scale-105 transition-all"
          >
            Claim Launch Discount
          </a>
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#2563EB]"
              >
                ✕
              </button>

              <div className="h-64 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] text-xs font-bold">
                  {selectedItem.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-[#111827] dark:text-white">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                  {selectedItem.summary}
                </p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#10B981]">✓ {selectedItem.result}</span>
                  <a
                    href="#contact"
                    onClick={() => setSelectedItem(null)}
                    className="font-btn font-semibold px-6 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs shadow-md"
                  >
                    Request Similar Deliverable
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
