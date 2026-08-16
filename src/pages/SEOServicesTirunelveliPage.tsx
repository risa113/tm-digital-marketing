import { Link } from 'react-router-dom';
import { 
  Search, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MapPin, 
  Globe, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  PhoneCall, 
  Layers 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

interface Props {
  onOpenConsultation: () => void;
}

export default function SEOServicesTirunelveliPage({ onOpenConsultation }: Props) {
  const seoPillars = [
    { title: 'Technical SEO & Core Web Vitals', desc: 'LCP under 1.2s, zero layout shift (CLS = 0), mobile responsiveness, and clean XML sitemaps for rapid crawlability.' },
    { title: 'Google Map Pack (Local 3-Pack)', desc: 'Dominate regional search in Tirunelveli and Nellai with Google Business Profile optimization and localized citations.' },
    { title: 'Semantic Keyword Architecture', desc: 'Target high-intent transactional buyer queries with topical content hubs and programmatic on-page optimization.' },
    { title: 'Schema.org JSON-LD Markup', desc: 'Implement advanced LocalBusiness, Service, BreadcrumbList, and FAQPage structured data.' },
    { title: 'High-DA Authority Link Building', desc: 'Acquire high-quality, white-hat editorial backlinks and business directory citations across Tamil Nadu.' },
    { title: 'Conversion Rate Optimization (CRO)', desc: 'Transform organic search visitors into paying customers with optimized contact forms and WhatsApp CTAs.' }
  ];

  const faqs = [
    {
      q: 'How long does it take for SEO to rank on Google in Tirunelveli?',
      a: 'Local SEO map pack improvements and low-competition long-tail rankings typically show positive momentum within 30 to 60 days. Highly competitive commercial keywords usually achieve dominant page-1 rankings within 90 to 180 days with consistent topical content and authority building.'
    },
    {
      q: 'Do you guarantee #1 ranking on Google?',
      a: 'No legitimate, Google-compliant SEO agency guarantees permanent #1 rankings, as search algorithms update constantly. However, our proven technical, semantic, and local SEO framework delivers consistent top-3 organic visibility and verified organic lead generation.'
    },
    {
      q: 'What is the difference between Local SEO and Organic SEO?',
      a: 'Local SEO optimizes your Google Business Profile to appear in the Google Maps 3-Pack for regional queries like "SEO company near me" in Tirunelveli. Organic SEO optimizes your website pages to rank across Google for informational and commercial search queries statewide or nationally.'
    }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <Search className="w-4 h-4 text-[#2563EB]" />
            <span>#1 SEO Agency in Tirunelveli</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            SEO Services in Tirunelveli: <br />
            <span className="text-[#2563EB]">Rank #1 on Google Search</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Capture high-intent ready-to-buy customers in Tirunelveli, Nellai, and Tamil Nadu. Our data-backed SEO strategies combine Core Web Vitals optimization, semantic topical authority, and Google Maps Local 3-Pack domination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Get Free SEO Audit</span>
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

      {/* SEO Pillars Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Comprehensive SEO Framework</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white">
            How We Deliver Predictable Organic Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {seoPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-3 hover:border-[#2563EB] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">✓ 100% White-Hat Google Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">SEO Knowledge</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
            Frequently Asked Questions on Tirunelveli SEO
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
            >
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">{faq.q}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">
            Ready to Dominate Google Search in Tirunelveli?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Book your free technical SEO audit and keyword opportunity mapping session with Mohamed Thariq &amp; Muja today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Claim Free SEO Audit</span>
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Contact SEO Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
