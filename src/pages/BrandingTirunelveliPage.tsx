import { Link } from 'react-router-dom';
import { 
  Palette, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  Eye, 
  Award 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

interface Props {
  onOpenConsultation: () => void;
}

export default function BrandingTirunelveliPage({ onOpenConsultation }: Props) {
  const brandPillars = [
    { title: 'Vector Logo Design Systems', desc: 'Scalable corporate vector marks, monochrome variations, and app icon assets crafted with geometric precision.' },
    { title: 'Brand Identity Guidelines & Books', desc: 'Comprehensive color palettes, typography hierarchy, UI token specifications, and usage rulebooks.' },
    { title: 'Commercial Packaging & Print Collateral', desc: 'High-impact product packaging, business cards, corporate brochures, and exhibition banner designs.' },
    { title: 'Social Media Grid Aesthetics', desc: 'Consistent visual templates, typography standards, and branded promotional post layouts.' },
    { title: 'Brand Positioning & Tone of Voice', desc: 'Strategic market differentiation, mission statements, and customer-facing messaging frameworks.' },
    { title: '3D Product Rendering & Motion Mockups', desc: 'Photorealistic 3D visual assets and animated logo idents for video campaigns and digital billboards.' }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <Palette className="w-4 h-4 text-[#2563EB]" />
            <span>Brand Identity Studio in Tirunelveli</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Branding Agency in Tirunelveli: <br />
            <span className="text-[#2563EB]">Unforgettable Visual Identities</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Elevate your company from a commodity into an iconic market leader. We create modern luxury brand identities, vector logo systems, typography frameworks, and packaging designs for businesses in Tirunelveli, Nellai, and Tamil Nadu.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Book Branding Consultation</span>
            </button>
            <a
              href={`tel:${CONTACT_INFO.contacts[0].phone}`}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#2563EB]" />
              <span>Direct Founder: +91 86087 24931</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Creative Capabilities</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            Comprehensive Brand Strategy &amp; Visual Design
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {brandPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 hover:border-[#2563EB] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-amber-500">⭐ 100% Bespoke Original Craft</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Ready to Build a Category-Defining Brand?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule a free brand strategy call with Creative Director Mohamed Thariq to review your brand positioning and identity goals.
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
              <span>Contact Creative Studio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
