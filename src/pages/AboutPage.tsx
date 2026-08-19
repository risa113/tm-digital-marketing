import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  UserCheck, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  Globe, 
  ArrowRight,
  Sparkles,
  Users
} from 'lucide-react';
import { CONTACT_INFO } from '../data/marketingData';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export default function AboutPage({ onOpenConsultation }: AboutPageProps) {
  const leadership = [
    {
      name: 'Mohamed Thariq',
      role: 'Co-Founder & Creative Director',
      phone: '+91 86087 24931',
      directTel: '8608724931',
      bio: 'Brand architect and full-stack web dev wizard specializing in 3D glassmorphic web design, vector brand identities, and high-CTR video editing.',
      image: '/mohamed_thariq.png',
      skills: ['3D Web Engineering', 'Brand Systems', 'Motion & Video', 'AI Automation']
    },
    {
      name: 'Muja',
      role: 'Co-Founder & Chief Growth Officer',
      phone: '+91 63694 80812',
      directTel: '6369480812',
      bio: 'PPC & Meta Ads specialist with expertise in scaling acquisition funnels, ROAS optimization, and performance copywriting for international and local brands.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      skills: ['Poster Making', 'Meta Ads', 'Video Editing', 'Social Media Management']
    }
  ];

  const coreValues = [
    {
      title: 'Agile 7-Day Sprint Speed',
      desc: 'We eliminate traditional 6-week agency delays. Your ad campaigns and digital assets launch in 5 to 7 days.',
      icon: Zap
    },
    {
      title: '100% Data & ROAS Driven',
      desc: 'Zero vanity metrics. We focus exclusively on lead volume, customer acquisition cost (CAC), and revenue growth.',
      icon: Target
    },
    {
      title: 'Direct Founder Accountability',
      desc: 'You work directly with agency founders Mohamed Thariq & Muja without junior account manager buffers.',
      icon: ShieldCheck
    },
    {
      title: 'International Quality Standards',
      desc: 'World-class glassmorphic designs, WCAG accessible web apps, and modern high-converting ad scripts.',
      icon: Globe
    }
  ];

  return (
    <div className="w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen">
      
      {/* Hero Header Banner */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]">
            <UserCheck className="w-4 h-4" />
            <span>About TM Digital Marketing</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
            We Are Built to Scale <br />
            <span className="text-[#2563EB]">Ambitious Brands Globally</span>
          </h1>

          <p className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Founded with a singular mission: to liberate businesses from slow, outdated marketing agencies by delivering high-velocity ad campaigns, 3D web platforms, and data-driven ROI engines.
          </p>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-16 bg-white dark:bg-[#0B101D] border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Our Agency Story</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white leading-tight">
                From Local Performance Sprints to International Growth Benchmarks
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed">
                TM Digital Marketing was established by <strong className="text-slate-900 dark:text-white">Mohamed Thariq</strong> and <strong className="text-slate-900 dark:text-white">Muja</strong> to bridge the gap between creative visual excellence and strict mathematical ROI.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 leading-relaxed">
                We believe that modern businesses shouldn't have to wait months for branding or ad campaign launches. With our agile 7-day sprint model, custom AI tools, and programmatic SEO frameworks, we enable companies across North America, Europe, the Middle East, and Asia to capture market leadership rapidly.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900">
                  <Target className="w-6 h-6 text-[#2563EB] mb-2" />
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Our Mission</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">To engineer scalable, predictable lead and revenue systems for every client.</p>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900">
                  <Eye className="w-6 h-6 text-[#3B82F6] mb-2" />
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Our Vision</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">To become the premier growth agency trusted by high-growth global enterprises.</p>
                </div>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className="lg:col-span-6">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0F172A] text-white shadow-2xl space-y-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
                
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-bold text-blue-300">
                  <Globe className="w-4 h-4" /> Global Standards
                </span>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Why International Clients Work With TM Digital
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% English & Multilingual Fluency</strong> for seamless communication across global timezones.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Advanced Server CAPI & GA4 Tracking</strong> compliant with international data privacy standards.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Direct WhatsApp & Slack Channels</strong> for instant real-time strategy updates.</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Founders: Mohamed Thariq & Muja</span>
                  <span className="text-[#2563EB] font-bold">HQ & Remote Hubs</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Bios (Mohamed Thariq & Muja) */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Executive Leadership</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white">
              Meet the Agency Founders
            </h2>
            <p className="text-sm text-[#64748B] dark:text-slate-400 max-w-xl mx-auto">
              Direct access to senior strategy partners who manage your campaigns personally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((founder) => (
              <div
                key={founder.name}
                className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shrink-0 shadow-lg overflow-hidden">
                      {founder.image ? (
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      ) : (
                        <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-xl">
                          {founder.name[0]}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-xl text-slate-900 dark:text-white">{founder.name}</h3>
                      <p className="text-xs font-bold text-[#2563EB]">{founder.role}</p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                    {founder.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-[10px] font-bold text-[#2563EB]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={`tel:${founder.directTel}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#2563EB] hover:underline"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call: {founder.phone}</span>
                  </a>
                  <button
                    onClick={onOpenConsultation}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#2563EB] hover:text-white text-slate-700 dark:text-slate-300 text-xs transition-colors"
                  >
                    Book Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Agency Values */}
      <section className="py-16 bg-white dark:bg-[#0B101D] border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2563EB]">Our Core Philosophy</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#111827] dark:text-white">
              The Principles That Drive Our Success
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-[#2563EB] flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">{val.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl">Ready to Work with Founders Directly?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Schedule your free 1-on-1 strategy call with Mohamed Thariq & Muja to audit your current marketing funnels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Schedule Free Strategy Call</span>
            </button>
            <Link
              to="/services"
              className="w-full sm:w-auto font-btn font-bold px-8 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 flex items-center justify-center gap-2"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
