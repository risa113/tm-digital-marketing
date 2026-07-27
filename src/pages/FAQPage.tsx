import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  MessageSquare, 
  PhoneCall, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { FAQS, CONTACT_INFO } from '../data/marketingData';

interface FAQPageProps {
  onOpenConsultation: () => void;
}

export default function FAQPage({ onOpenConsultation }: FAQPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string | null>('f1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const extendedFaqs = [
    ...FAQS,
    {
      id: 'f5',
      question: 'What is your average ROAS return on Meta and Google ad campaigns?',
      answer: 'Our performance campaigns average between 3.5x to 6.2x ROAS depending on your industry margins, offer strength, and audience size.'
    },
    {
      id: 'f6',
      question: 'Do you require long-term 6-month or 12-month contract lock-ins?',
      answer: 'No! We operate on flexible monthly retainers. We believe in earning your business month-after-month based on revenue results.'
    },
    {
      id: 'f7',
      question: 'What technologies do you use for website development?',
      answer: 'We build ultra-fast 3D web platforms using React, Next.js, Three.js, Tailwind CSS, and headless CMS integrations to ensure 98+ Google Lighthouse scores.'
    },
    {
      id: 'f8',
      question: 'How do you handle reporting and metrics tracking?',
      answer: 'You get real-time access to automated GA4 and Meta CAPI dashboards, alongside weekly video walkthroughs directly from founders Mohamed Thariq and Muja.'
    }
  ];

  const filteredFaqs = extendedFaqs.filter((faq) => {
    return faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Frequently Asked <span className="text-[#2563EB]">Questions</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our 7-day campaign launch sprints, founder strategy access, pricing models, and tech stack.
          </p>

          {/* Live Search Input */}
          <div className="max-w-xl mx-auto relative pt-4">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search any question (e.g. campaign launch, pricing, ROAS)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 space-y-3">
            <p>No questions matched your search "{searchTerm}".</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs font-bold text-[#2563EB] underline"
            >
              Clear Search Term
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-md transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white hover:text-[#2563EB] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#2563EB] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </section>

      {/* Still Have Questions Callout */}
      <section className="py-16 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center mx-auto">
            <MessageSquare className="w-7 h-7" />
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">Still Have Questions?</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Speak directly with agency founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812) on WhatsApp or phone.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href="https://wa.me/918608724931"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#25D366] text-white font-btn font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#2563EB] text-white font-btn font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
