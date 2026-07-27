import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import { CONTACT_INFO } from '../data/marketingData';
import { ServiceItem } from '../data/marketingData';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export default function HomePage({ onOpenConsultation, onSelectService }: HomePageProps) {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection onOpenConsultation={onOpenConsultation} />

      {/* Core Services Section */}
      <ServicesSection onSelectService={onSelectService} />

      {/* Founder Direct Access Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
                <ShieldCheck className="w-4 h-4" />
                1-on-1 Founder Accountability
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight">
                Work Directly with Founders Mohamed Thariq & Muja
              </h2>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                No junior account managers. Direct strategy calls, instant WhatsApp support, and weekly growth reports directly from agency founders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <a
                href={`tel:${CONTACT_INFO.contacts[0].phone}`}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white text-[#2563EB] font-btn font-bold text-sm hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Mohamed: +91 86087 24931</span>
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-blue-900/60 hover:bg-blue-900 text-white font-btn font-bold text-sm border border-white/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Go to Contact Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight">
            Ready to Dominate Your Market & <br />
            <span className="text-[#3B82F6]">Scale Your Business Revenue?</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Book a free 30-minute growth strategy consultation with TM Digital Marketing today. Let’s build your customized ROI roadmap!
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-semibold text-base rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-4 shadow-xl shadow-blue-600/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              <span>Book Free Strategy Call</span>
            </button>
            <Link
              to="/why-us"
              className="w-full sm:w-auto font-btn font-semibold text-base rounded-2xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-white px-8 py-4 transition-all flex items-center justify-center gap-2"
            >
              <span>Learn Why Brands Choose Us</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
