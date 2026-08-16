import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  Search 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

interface Props {
  onOpenConsultation: () => void;
}

export default function GoogleAdsTirunelveliPage({ onOpenConsultation }: Props) {
  const capabilities = [
    { title: 'Google Search PPC Campaigns', desc: 'Bid on high-intent buyer keywords with exact match structure and negative keyword exclusions.' },
    { title: 'Performance Max (PMax) Campaigns', desc: 'Leverage Google AI bidding across Search, Maps, YouTube, Gmail, and Google Display networks.' },
    { title: 'Google Local Services & Maps Ads', desc: 'Appear at the very top of Google Maps search results with direct click-to-call buttons.' },
    { title: 'High-Converting PPC Landing Pages', desc: 'Custom high-speed landing pages engineered with clear value propositions and low bounce rates.' },
    { title: 'Server-Side GA4 Conversion Tracking', desc: 'Accurately track phone calls, form leads, and WhatsApp clicks without attribution loss.' },
    { title: 'Weekly Bid & ROAS Optimization', desc: 'Continuous keyword pruning, ad copy split testing, and ad spend efficiency maximization.' }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <TrendingUp className="w-4 h-4 text-[#2563EB]" />
            <span>Google PPC &amp; Performance Max Experts</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Google Ads Agency in Tirunelveli: <br />
            <span className="text-[#2563EB]">High-ROI PPC Campaigns</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Reach high-intent customers the instant they search for your products or services on Google. We manage Search PPC, Shopping, Performance Max, and YouTube ad campaigns that deliver maximum return on ad spend (ROAS) across Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Free Google Ads Audit</span>
            </button>
            <a
              href={`tel:${CONTACT_INFO.contacts[0].phone}`}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#2563EB]" />
              <span>Call Founders: +91 86087 24931</span>
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">PPC Management Framework</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Precision Google Ads Engineered for High Conversion
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 hover:border-[#2563EB] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">{cap.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{cap.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-[#10B981]">✓ Zero Wasted Ad Spend</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Want More Qualified Inquiries From Google Search?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book a 30-minute Google PPC audit with founders Mohamed Thariq &amp; Muja to optimize your ad spend and lower cost per acquisition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Claim Free PPC Audit</span>
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Contact Google Ads Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
