import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp,
  Filter,
  Eye
} from 'lucide-react';
import { PORTFOLIO, PortfolioItem } from '../data/marketingData';

interface DeliverablesPageProps {
  onOpenConsultation: () => void;
}

export default function DeliverablesPage({ onOpenConsultation }: DeliverablesPageProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', 'Websites', 'Branding & Logos', 'Social & Reels', 'Ad Creatives', 'Campaign Funnels'];

  const filteredPortfolio = PORTFOLIO.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <Layers className="w-4 h-4" />
            <span>Deliverables & Work Showcase</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            High-Impact Deliverables Engineered <br />
            <span className="text-[#2563EB]">For Revenue & Visual Mastery</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore our custom vector branding systems, 3D glassmorphic web apps, viral Reel edits, and high-ROAS Meta & Google ad funnels.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  activeCategory === cat
                    ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-lg shadow-blue-600/30'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#2563EB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Deliverables Showcase Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all group"
            >
              <div className="space-y-4">
                {/* Image Container with Zoom */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black shadow-md flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{item.result}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider">{item.client}</p>
                  <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedItem(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:underline"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Details</span>
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] text-xs font-bold hover:bg-[#2563EB] hover:text-white transition-colors"
                >
                  Get Similar Result
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Item Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl max-w-2xl w-full space-y-6 shadow-2xl relative">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-extrabold text-[#2563EB] uppercase tracking-wider">{selectedItem.category}</span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 dark:text-white">{selectedItem.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Client: {selectedItem.client}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold"
              >
                Close ✕
              </button>
            </div>

            <div className="h-64 rounded-2xl overflow-hidden">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                Performance Metric: {selectedItem.result}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedItem.summary} This deliverable was engineered using TM Digital Marketing's high-conversion growth sprint framework, optimizing ad copy, landing page speeds, and target audience persona alignment.
              </p>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 rounded-xl bg-[#2563EB] text-white font-btn font-bold text-xs shadow-lg shadow-blue-600/30"
              >
                Request Custom Deliverable
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Want High-Impact Deliverables For Your Brand?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Partner with founders Mohamed Thariq & Muja to craft custom websites, ad creatives, and high-converting marketing funnels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Strategy Call</span>
            </button>
            <Link
              to="/why-us"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Why Work With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
