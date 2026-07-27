import { useSearchParams } from 'react-router-dom';
import ContactSection from '../components/ContactSection';
import { PhoneCall, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || undefined;

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      {/* Hero Header Banner */}
      <section className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Direct Founder Access</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Book Your Free 30-Minute <br />
            <span className="text-[#2563EB]">Growth Strategy Consultation</span>
          </h1>

          <p className="text-base sm:text-lg text-[#64748B] dark:text-slate-300 max-w-2xl mx-auto">
            Connect directly with agency founders Mohamed Thariq (+91 86087 24931) and Muja (+91 63694 80812).
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <ContactSection preselectedService={preselectedService} />
    </div>
  );
}
