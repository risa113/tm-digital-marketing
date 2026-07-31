import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Star, 
  Quote, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import { TESTIMONIALS } from '../data/marketingData';

interface TestimonialsPageProps {
  onOpenConsultation: () => void;
}

export default function TestimonialsPage({ onOpenConsultation }: TestimonialsPageProps) {
  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <MessageSquare className="w-4 h-4" />
            <span>Tirunelveli Verified Client Reviews</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Tirunelveli Customer Reviews & <br />
            <span className="text-[#2563EB]">Verified Success Stories</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Read verified customer reviews from top businesses in Tirunelveli who scaled revenue with <strong>TM Digital Marketing</strong> — the premier SEO, Meta Ads, and Website Development agency in Tirunelveli, Tamil Nadu.
          </p>

          {/* Partner Badges & Top SEO Keywords */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Best Digital Marketing Agency in Tirunelveli</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#2563EB]" /> #1 SEO Services Tirunelveli</span>
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Meta &amp; Google Ads Experts</span>
          </div>
        </div>
      </section>

      {/* Verified Text Testimonials Grid */}
      <section className="py-12 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Top Local Business Reviews</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">What Tirunelveli Business Owners Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-extrabold text-[#2563EB]">{t.companyLogo}</span>
                  </div>

                  <Quote className="w-8 h-8 text-blue-500/20" />

                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h3 className="font-bold text-xs text-slate-900 dark:text-white">{t.name}</h3>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Ready to Write Your Own Success Story?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a free 30-minute growth strategy consultation with Mohamed Thariq & Muja today.
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
              to="/contact"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Contact Us Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
