import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Star, 
  Quote, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  Award,
  ShieldCheck
} from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '../data/marketingData';

interface TestimonialsPageProps {
  onOpenConsultation: () => void;
}

export default function TestimonialsPage({ onOpenConsultation }: TestimonialsPageProps) {
  const [filter, setFilter] = useState<'all' | 'skincare' | 'tech' | 'growth'>('all');

  const videoReviews = [
    {
      name: 'Elena Rostova',
      company: 'Aura Skincare',
      role: 'CEO & Founder',
      result: '5.2x Meta Ads ROAS',
      thumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
      duration: '1:45'
    },
    {
      name: 'Marcus Sterling',
      company: 'Sterling Tech',
      role: 'Co-Founder',
      result: '+340% PPC Leads',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      duration: '2:10'
    }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <MessageSquare className="w-4 h-4" />
            <span>Verified Client Success</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            What Business Leaders Say About <br />
            <span className="text-[#2563EB]">TM Digital Marketing</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Read verified reviews and success stories from companies that scaled revenue with our digital marketing sprints.
          </p>

          {/* Partner Badges */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs font-bold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Google Premier Partner</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#2563EB]" /> Meta Business Partner</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#2563EB]" /> HubSpot Certified</span>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Video Reviews</span>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 dark:text-white">Client Video Interviews</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videoReviews.map((vid) => (
            <div
              key={vid.name}
              className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4 group cursor-pointer"
              onClick={onOpenConsultation}
            >
              <div className="relative h-60 rounded-2xl overflow-hidden bg-slate-800">
                <img src={vid.thumbnail} alt={vid.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#2563EB] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-bold">
                  {vid.duration} Video Interview
                </div>
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold">
                  {vid.result}
                </div>
              </div>

              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">{vid.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{vid.role}, {vid.company}</p>
                </div>
                <span className="text-xs text-[#2563EB] font-bold flex items-center gap-1">
                  Play Review <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Text Testimonials Grid */}
      <section className="py-12 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Verified Reviews</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">What Our Clients Experience</h2>
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
