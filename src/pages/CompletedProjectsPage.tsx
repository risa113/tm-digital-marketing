import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Monitor, 
  Smartphone, 
  FileText, 
  Layers, 
  Palette, 
  MessageSquare, 
  ArrowRight, 
  Lock, 
  Building2, 
  LayoutGrid, 
  MapPin, 
  Star,
  Zap,
  PhoneCall,
  Clock,
  Compass
} from 'lucide-react';
import { COMPLETED_PROJECTS } from '../data/marketingData';
import AmbientBackground from '../components/AmbientBackground';
import { fadeInUp, fadeInDown, staggerContainer, defaultViewport } from '../utils/animations';

interface CompletedProjectsPageProps {
  onOpenConsultation: () => void;
}

export default function CompletedProjectsPage({ onOpenConsultation }: CompletedProjectsPageProps) {
  // Device view state for each project: 'desktop' | 'mobile' | 'study'
  const [deviceViews, setDeviceViews] = useState<Record<string, 'desktop' | 'mobile' | 'study'>>({
    'alhayath-umrah': 'desktop',
    'hyzin-interior': 'desktop'
  });

  // Interactive Theme for Al-Hayath Preview Frame
  const [alhayathTheme, setAlhayathTheme] = useState<'emerald' | 'obsidian' | 'bronze' | 'ivory'>('emerald');

  // Interactive Room Tab for Hyzin Preview Frame
  const [hyzinRoomTab, setHyzinRoomTab] = useState<'kitchen' | 'wardrobe' | 'paneling' | 'fabrication'>('kitchen');

  const setView = (projectId: string, view: 'desktop' | 'mobile' | 'study') => {
    setDeviceViews((prev) => ({ ...prev, [projectId]: view }));
  };

  // Al-Hayath Theme Palettes for interactive preview
  const alhayathThemeStyles = {
    emerald: {
      bg: 'bg-[#06110C]',
      text: 'text-[#F8FAF7]',
      card: 'bg-[#10261C]/80 border-[#D4AF37]/30',
      accent: 'text-[#D4AF37]',
      badge: 'bg-[#1E704C]/40 text-[#F5E29F] border-[#D4AF37]/30',
      gradient: 'from-[#D4AF37] via-[#F5E29F] to-[#997819]',
      glow: 'shadow-[0_0_35px_rgba(212,175,55,0.25)]'
    },
    obsidian: {
      bg: 'bg-[#08090D]',
      text: 'text-[#F1F5F9]',
      card: 'bg-[#131722]/80 border-[#E2B866]/30',
      accent: 'text-[#FFD166]',
      badge: 'bg-[#3B82F6]/20 text-[#FEF0C7] border-[#E2B866]/30',
      gradient: 'from-[#FFD166] via-[#FEF0C7] to-[#A17724]',
      glow: 'shadow-[0_0_35px_rgba(226,184,102,0.2)]'
    },
    bronze: {
      bg: 'bg-[#140D07]',
      text: 'text-[#FFFAF0]',
      card: 'bg-[#261A10]/80 border-[#E6B84D]/30',
      accent: 'text-[#FFCB42]',
      badge: 'bg-[#C25E2E]/30 text-[#FFF2C4] border-[#E6B84D]/30',
      gradient: 'from-[#FFCB42] via-[#FFF2C4] to-[#9E6E14]',
      glow: 'shadow-[0_0_35px_rgba(230,184,77,0.25)]'
    },
    ivory: {
      bg: 'bg-[#F9F6EF]',
      text: 'text-[#14211A]',
      card: 'bg-white/90 border-[#B08420]/30 shadow-md',
      accent: 'text-[#B08420]',
      badge: 'bg-[#174B34]/15 text-[#5C4308] border-[#B08420]/30',
      gradient: 'from-[#B08420] via-[#DFB743] to-[#7D5907]',
      glow: 'shadow-[0_0_25px_rgba(176,132,32,0.15)]'
    }
  };

  // Hyzin Room Showcases for interactive preview
  const hyzinRooms = {
    kitchen: {
      title: 'Modular Acrylic & Aluminium Kitchens',
      desc: '100% Termite-Proof, Moisture-Resistant Engineered Cabinets with German BLUM Soft-Close Hardware.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=900&auto=format&fit=crop',
      metric: 'Lifetime Waterproof'
    },
    wardrobe: {
      title: 'Floor-to-Ceiling Wall Drop Wardrobes',
      desc: 'Tinted Glass Sliding Doors, Integrated Sensor LED Profiling & Custom Leather-Lined Organizers.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=900&auto=format&fit=crop',
      metric: 'Zero Space Wastage'
    },
    paneling: {
      title: 'Acoustic Charcoal & Fluted Wall Louvers',
      desc: 'Monograph Fluted Architectural Feature Walls for Luxury Living Rooms & Executive TV Units.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop',
      metric: 'European Atelier Finish'
    },
    fabrication: {
      title: 'Specialized SS & Laser-Cut Metal Fabrication',
      desc: 'Bespoke Safety Doors, Glass Balustrades & Stainless Steel Coastal Balconies Across Kerala.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop',
      metric: 'SS 304 Grade Metal'
    }
  };

  return (
    <div className="relative w-full pt-20 sm:pt-28 pb-16 bg-[#F8FAFC] dark:bg-[#0F172A] min-h-screen overflow-hidden">
      <AmbientBackground />

      {/* Hero Header Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-transparent dark:from-blue-950/20 dark:via-[#0F172A] dark:to-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <motion.div 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-xs font-bold text-[#2563EB]"
          >
            <Sparkles className="w-4 h-4 text-[#3B82F6]" />
            <span>PORTFOLIO OF EXCELLENCE • COMPLETED CLIENT WORK</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1}
            className="font-heading font-extrabold text-4xl sm:text-6xl text-[#111827] dark:text-white tracking-tight leading-tight max-w-4xl mx-auto"
          >
            Completed Client Projects &amp; <br />
            <span className="gradient-text">Live Digital Transformations</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={2}
            className="text-base sm:text-xl text-[#64748B] dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We don’t just design websites — we engineer high-converting digital platforms that scale brands, dominate Google rankings, and multiply client revenue. Explore our completed client work below with interactive live previews.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={3}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6"
          >
            {[
              { val: '100%', label: 'On-Time Delivery', sub: 'Agile 7-day sprint launch' },
              { val: '4.9/5', label: 'Client Satisfaction', sub: 'Verified reviews & retention' },
              { val: '+340%', label: 'Average Lead Growth', sub: 'Inbound WhatsApp & forms' },
              { val: 'South India', label: 'Client Reach', sub: 'TN, Kerala, Karnataka & Gulf' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
                <div className="font-heading font-extrabold text-2xl text-[#2563EB] dark:text-blue-400">{stat.val}</div>
                <div className="text-xs font-bold text-[#111827] dark:text-white mt-0.5">{stat.label}</div>
                <div className="text-[10px] text-[#64748B] dark:text-slate-400">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 my-12">
        {COMPLETED_PROJECTS.map((project) => {
          const currentView = deviceViews[project.id] || 'desktop';
          const isUmrah = project.previewType === 'umrah';
          const umrahTheme = isUmrah ? alhayathThemeStyles[alhayathTheme] : null;

          return (
            <motion.section 
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              variants={staggerContainer}
              id={project.slug}
              className="scroll-mt-32 space-y-10"
            >
              {/* Project Title & Client Header */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/80 text-[#2563EB] border border-blue-200 dark:border-blue-800">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      {project.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#64748B] dark:text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                      {project.completedDate}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <img 
                      src={project.logo} 
                      alt={`${project.client} Logo`} 
                      className="h-12 w-auto max-w-[120px] object-contain rounded-lg p-1 bg-white/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                    />
                    <div>
                      <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#111827] dark:text-white tracking-tight">
                        {project.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#2563EB] dark:text-blue-400 font-medium">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-lg shadow-blue-600/30 transition-all cursor-pointer group"
                  >
                    <span>Launch Live Website</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-card hover:bg-slate-100 dark:hover:bg-slate-800 text-[#111827] dark:text-white border border-slate-200 dark:border-slate-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    <span>Request Similar Web Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
                  </button>
                </div>
              </div>

              {/* Viewport & Device Controller Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#64748B] dark:text-slate-400 uppercase tracking-wider pl-2">
                    Interactive Frame Mode:
                  </span>
                  <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <button
                      onClick={() => setView(project.id, 'desktop')}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentView === 'desktop'
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-[#64748B] dark:text-slate-300 hover:text-[#111827]'
                      }`}
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Desktop View</span>
                    </button>
                    <button
                      onClick={() => setView(project.id, 'mobile')}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentView === 'mobile'
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-[#64748B] dark:text-slate-300 hover:text-[#111827]'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile Frame</span>
                    </button>
                    <button
                      onClick={() => setView(project.id, 'study')}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        currentView === 'study'
                          ? 'bg-[#2563EB] text-white shadow-sm'
                          : 'text-[#64748B] dark:text-slate-300 hover:text-[#111827]'
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Case Study &amp; Specs</span>
                    </button>
                  </div>
                </div>

                {/* Sub-Controls: Themes for Al-Hayath, Rooms for Hyzin */}
                {isUmrah && currentView !== 'study' && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Palette className="w-3.5 h-3.5" />
                      <span>Test Dynamic 4-Theme Switcher:</span>
                    </span>
                    <div className="inline-flex gap-1">
                      {[
                        { key: 'emerald', label: 'Royal Emerald', color: '#1E704C' },
                        { key: 'obsidian', label: 'Obsidian', color: '#131722' },
                        { key: 'bronze', label: 'Bronze', color: '#533723' },
                        { key: 'ivory', label: 'Pearl Ivory', color: '#DFB743' }
                      ].map((t) => (
                        <button
                          key={t.key}
                          onClick={() => setAlhayathTheme(t.key as any)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                            alhayathTheme === t.key
                              ? 'border-yellow-400 bg-yellow-400/20 text-yellow-600 dark:text-yellow-300 scale-105'
                              : 'border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-200/50'
                          }`}
                        >
                          <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: t.color }} />
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {!isUmrah && currentView !== 'study' && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#C4A174] flex items-center gap-1">
                      <LayoutGrid className="w-3.5 h-3.5" />
                      <span>Select Architectural Showcase:</span>
                    </span>
                    <div className="inline-flex gap-1">
                      {[
                        { key: 'kitchen', label: 'Kitchens' },
                        { key: 'wardrobe', label: 'Wardrobes' },
                        { key: 'paneling', label: 'Fluted Walls' },
                        { key: 'fabrication', label: 'SS Fabrication' }
                      ].map((r) => (
                        <button
                          key={r.key}
                          onClick={() => setHyzinRoomTab(r.key as any)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                            hyzinRoomTab === r.key
                              ? 'border-[#C4A174] bg-[#C4A174]/20 text-[#3A2117] dark:text-[#EDE3D2] scale-105'
                              : 'border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-200/50'
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Main Interactive Frame Area */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  {/* VIEW 1: DESKTOP MONITOR BROWSER FRAME */}
                  {currentView === 'desktop' && (
                    <motion.div
                      key="desktop-frame"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-2xl bg-white dark:bg-[#0B101D]"
                    >
                      {/* Browser Chrome Header Bar */}
                      <div className="px-5 py-3.5 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                        {/* Traffic light dots */}
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500/80" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>

                        {/* URL Search bar */}
                        <div className="flex-1 max-w-xl mx-auto flex items-center justify-center gap-2 px-4 py-1.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 shadow-inner">
                          <Lock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="font-mono text-[11px] truncate">https://{project.displayUrl}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-300 dark:border-emerald-800 ml-1">
                            SSL 256-BIT
                          </span>
                        </div>

                        {/* Open Live link in new tab */}
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open live client site in full browser tab"
                          className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                        >
                          <span className="hidden sm:inline">Open Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Interactive Simulated Web Canvas */}
                      <div className="relative min-h-[560px] sm:min-h-[640px] overflow-hidden flex flex-col justify-between">
                        {isUmrah ? (
                          /* AL-HAYATH INTERACTIVE LIVE PREVIEW CANVAS */
                          <div className={`p-6 sm:p-12 transition-colors duration-500 ${umrahTheme?.bg} ${umrahTheme?.text}`}>
                            {/* Islamic Top Ribbon */}
                            <div className="flex items-center justify-between pb-6 border-b border-white/10">
                              <div className="flex items-center gap-3">
                                <img src={project.logo} alt="Al-Hayath" className="h-10 w-auto object-contain bg-white/10 rounded p-1" />
                                <div>
                                  <div className="font-arabic font-bold text-lg text-yellow-400">Al-Hayath Haj &amp; Umrah Service</div>
                                  <div className="text-[10px] text-slate-400 tracking-wider">Melapalayam, Tirunelveli • Licensed Haj &amp; Umrah Operator</div>
                                </div>
                              </div>
                              <div className="hidden sm:flex items-center gap-3">
                                <span className="font-arabic text-sm text-yellow-300">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${umrahTheme?.badge}`}>
                                  Theme: {alhayathTheme.toUpperCase()}
                                </span>
                              </div>
                            </div>

                            {/* Hero Showcase Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
                              <div className="lg:col-span-7 space-y-6">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${umrahTheme?.badge}`}>
                                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                                  <span>SACRED JOURNEYS GUIDED WITH TRUST &amp; AALIMS</span>
                                </div>

                                <h3 className="font-heading font-extrabold text-3xl sm:text-5xl leading-tight">
                                  Haj &amp; Umrah Packages from Tirunelveli <br />
                                  <span className={`bg-gradient-to-r ${umrahTheme?.gradient} bg-clip-text text-transparent font-serif italic`}>
                                    With Royal Proximity to Haram
                                  </span>
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                                  Experience peaceful pilgrimage with continuous guidance from respected Aalims, direct chartered flights, and 5-star hotel accommodations in Makkah and Madinah within walking distance of the sacred sanctuaries.
                                </p>

                                {/* Features Strip */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                                  {[
                                    'Continuous Aalims Guidance',
                                    '5-Star Hotels Near Haram',
                                    'Complete Saudi Visa Support',
                                    'Buffet South Indian Cuisine',
                                    'Luxury Air-Conditioned Buses',
                                    'Direct WhatsApp Booking'
                                  ].map((feat, idx) => (
                                    <div key={idx} className={`p-2.5 rounded-xl border ${umrahTheme?.card} flex items-center gap-2 text-xs`}>
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                      <span className="text-[11px] font-medium">{feat}</span>
                                    </div>
                                  ))}
                                </div>

                                {/* Live CTA Buttons inside Mockup */}
                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600 text-slate-950 font-bold text-xs shadow-lg shadow-yellow-500/20 hover:scale-105 transition-all flex items-center gap-2"
                                  >
                                    <span>Explore Umrah Packages</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </a>
                                  <a
                                    href="https://wa.me/918608724931?text=Inquiry%20regarding%20Al-Hayath%20Umrah%20Packages"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-white font-bold text-xs border border-emerald-400/30 flex items-center gap-2"
                                  >
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    <span>Direct WhatsApp Booking</span>
                                  </a>
                                </div>
                              </div>

                              {/* Visual Arch Mockup Layer */}
                              <div className="lg:col-span-5 relative flex justify-center">
                                <div className={`relative w-full max-w-[360px] aspect-[4/5] rounded-[48px] overflow-hidden border-2 border-yellow-500/40 shadow-2xl ${umrahTheme?.glow}`}>
                                  <img 
                                    src={project.heroImage} 
                                    alt="Makkah Clock Tower Al-Hayath" 
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6">
                                    <div className="text-yellow-400 text-xs font-bold flex items-center gap-1.5 mb-1">
                                      <Building2 className="w-4 h-4" />
                                      <span>Makkah Clock Royal Tower</span>
                                    </div>
                                    <div className="text-white text-sm font-bold">50 Meters from Haram Gate</div>
                                    <div className="text-slate-300 text-[11px] mt-0.5">VIP Star Stay &amp; Panoramic Kaaba Views</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* HYZIN INTERIOR INTERACTIVE LIVE PREVIEW CANVAS */
                          <div className="p-6 sm:p-12 bg-[#3A2117] text-[#EDE3D2] transition-colors duration-500">
                            {/* Monograph Header */}
                            <div className="flex items-center justify-between pb-6 border-b border-[#C4A174]/20">
                              <div className="flex items-center gap-3">
                                <img src={project.logo} alt="HYZIN INTERIOR" className="h-10 w-auto object-contain bg-[#20150C] rounded p-1" />
                                <div>
                                  <div className="font-heading font-extrabold text-lg text-[#C4A174] tracking-wider">HYZIN INTERIOR</div>
                                  <div className="text-[10px] text-[#EDE3D2]/70 tracking-widest uppercase">Kerala • Tamil Nadu • Karnataka • Studio Desk</div>
                                </div>
                              </div>
                              <div className="hidden sm:flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-[#C4A174]/15 border border-[#C4A174]/30 text-[#C4A174] text-[11px] font-bold">
                                  4.9 ★ (180+ Reviews)
                                </span>
                              </div>
                            </div>

                            {/* Hero Showcase Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-center">
                              <div className="lg:col-span-6 space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#C4A174]/20 border border-[#C4A174]/40 text-[#C4A174]">
                                  <Layers className="w-3.5 h-3.5" />
                                  <span>TURNKEY RESIDENTIAL INTERIORS &amp; SPECIALIZED FABRICATION</span>
                                </div>

                                <h3 className="font-serif italic font-extrabold text-3xl sm:text-5xl leading-tight text-white">
                                  Sculpted Spaces, <br />
                                  <span className="text-[#C4A174] not-italic font-heading">
                                    Engineered With Passion
                                  </span>
                                </h3>

                                <p className="text-xs sm:text-sm text-[#EDE3D2]/80 leading-relaxed max-w-xl">
                                  {hyzinRooms[hyzinRoomTab].desc}
                                </p>

                                {/* 10 Services Pill Matrix */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                  {[
                                    'Modular Kitchens',
                                    'Wall Drop Wardrobes',
                                    'Fluted Paneling',
                                    'False Ceilings',
                                    'Aluminium Work',
                                    'SS Balustrades',
                                    'Steel Doors',
                                    'Interactive 3D Model'
                                  ].map((s, idx) => (
                                    <span key={idx} className="px-3 py-1 rounded-lg bg-[#20150C] border border-[#C4A174]/30 text-xs text-[#EDE3D2]">
                                      {s}
                                    </span>
                                  ))}
                                </div>

                                {/* Live CTA Buttons inside Mockup */}
                                <div className="flex flex-wrap items-center gap-4 pt-4">
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-[#C4A174] hover:bg-[#d8b588] text-[#3A2117] font-bold text-xs shadow-lg shadow-[#C4A174]/20 hover:scale-105 transition-all flex items-center gap-2"
                                  >
                                    <span>Explore Interactive 3D Model</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                  </a>
                                  <a
                                    href="https://wa.me/916282549008?text=Hello%20HYZIN%20Interior%20Team%2C%20I%20would%20like%20a%20turnkey%20interior%20estimation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-700 text-white font-bold text-xs border border-emerald-500/30 flex items-center gap-2"
                                  >
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    <span>WhatsApp Project Desk</span>
                                  </a>
                                </div>
                              </div>

                              {/* Dynamic Room Visualizer Box */}
                              <div className="lg:col-span-6 space-y-3">
                                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-[#C4A174]/30 shadow-2xl group">
                                  <img 
                                    src={hyzinRooms[hyzinRoomTab].image} 
                                    alt={hyzinRooms[hyzinRoomTab].title} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  />
                                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#20150C]/90 backdrop-blur-md text-[11px] font-bold text-[#C4A174] border border-[#C4A174]/30">
                                    ✓ {hyzinRooms[hyzinRoomTab].metric}
                                  </div>
                                </div>
                                <div className="p-3 rounded-xl bg-[#20150C] border border-[#C4A174]/20 flex items-center justify-between text-xs">
                                  <span className="font-bold text-white">{hyzinRooms[hyzinRoomTab].title}</span>
                                  <span className="text-[#C4A174] text-[11px]">Turnkey Kerala &amp; TN</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Interactive Frame Bottom Bar */}
                        <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 text-xs">
                          <div className="flex items-center gap-2 text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Live Production Platform Engineered by <strong>TM Digital Marketing</strong></span>
                          </div>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3B82F6] hover:text-white flex items-center gap-1 font-bold underline transition-colors"
                          >
                            <span>Open {project.displayUrl} in full window</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* VIEW 2: SMARTPHONE MOBILE FRAME PREVIEW */}
                  {currentView === 'mobile' && (
                    <motion.div
                      key="mobile-frame"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center py-6"
                    >
                      {/* Realistic Smartphone Shell */}
                      <div className="relative w-full max-w-[380px] bg-slate-900 p-4 rounded-[50px] shadow-2xl border-4 border-slate-700">
                        {/* Dynamic Island / Speaker Notch */}
                        <div className="absolute top-7 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 ml-auto mr-3" />
                        </div>

                        {/* Screen Content Wrapper */}
                        <div className="rounded-[38px] overflow-hidden bg-slate-950 text-white border border-slate-800 min-h-[620px] flex flex-col justify-between">
                          {/* Mobile Browser Top Bar */}
                          <div className="pt-8 pb-3 px-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px]">
                            <div className="flex items-center gap-1 text-slate-300 truncate font-mono">
                              <Lock className="w-3 h-3 text-emerald-400" />
                              <span className="truncate">{project.displayUrl}</span>
                            </div>
                            <span className="text-[10px] text-emerald-400 font-bold">100% Mobile Ready</span>
                          </div>

                          {/* Mobile View Body */}
                          <div className="p-5 space-y-5 overflow-y-auto max-h-[500px]">
                            <div className="flex items-center gap-3">
                              <img src={project.logo} alt="Logo" className="h-9 w-auto object-contain bg-white/10 rounded p-1" />
                              <div className="text-xs font-bold truncate">{project.name}</div>
                            </div>

                            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
                              <img src={project.heroImage} alt="Hero" className="w-full h-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                                <span className="text-xs font-bold text-white">{project.tagline}</span>
                              </div>
                            </div>

                            <div className="space-y-2 text-xs text-slate-300">
                              <p className="line-clamp-3">{project.overview}</p>
                            </div>

                            <div className="space-y-2">
                              <div className="text-[11px] font-bold text-[#2563EB]">Core Deliverables:</div>
                              {project.deliverablesList.slice(0, 4).map((d, i) => (
                                <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{d}</span>
                                </div>
                              ))}
                            </div>

                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
                            >
                              <span>Open Live on Mobile</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>

                          {/* Home Indicator */}
                          <div className="py-2 flex justify-center bg-slate-900">
                            <div className="w-32 h-1 bg-slate-600 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* VIEW 3: CASE STUDY & TECHNICAL SPECS */}
                  {currentView === 'study' && (
                    <motion.div
                      key="study-frame"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3 }}
                      className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
                    >
                      {/* Overview Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h3 className="font-heading font-extrabold text-xl text-[#111827] dark:text-white flex items-center gap-2">
                            <Compass className="w-5 h-5 text-[#2563EB]" />
                            <span>The Business Challenge</span>
                          </h3>
                          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                            {project.theChallenge}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-heading font-extrabold text-xl text-[#111827] dark:text-white flex items-center gap-2">
                            <Zap className="w-5 h-5 text-emerald-500" />
                            <span>Our Architectural Solution</span>
                          </h3>
                          <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                            {project.ourSolution}
                          </p>
                        </div>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <h4 className="font-heading font-extrabold text-lg text-[#111827] dark:text-white">
                          Engineered Deliverables:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {project.deliverablesList.map((item, i) => (
                            <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-[#111827] dark:text-slate-200 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Business Results & Key Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((metric, i) => (
                  <div 
                    key={i} 
                    className="glass-card p-6 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-[#2563EB] transition-all shadow-md group"
                  >
                    <div className="space-y-2">
                      <div className="font-heading font-black text-3xl sm:text-4xl text-[#2563EB] dark:text-blue-400 group-hover:scale-105 transition-transform origin-left">
                        {metric.value}
                      </div>
                      <div className="font-heading font-extrabold text-sm text-[#111827] dark:text-white">
                        {metric.label}
                      </div>
                    </div>
                    <p className="text-xs text-[#64748B] dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {metric.sublabel}
                    </p>
                  </div>
                ))}
              </div>

              {/* Client Testimonial Bar (Full Width) */}
              <div className="w-full">
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-r from-blue-500/5 via-sky-500/5 to-transparent flex flex-col justify-between shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                      ))}
                      <span className="text-xs font-bold text-[#64748B] dark:text-slate-400 ml-2">Verified Client Endorsement</span>
                    </div>
                    <blockquote className="text-sm sm:text-base italic text-[#111827] dark:text-slate-200 leading-relaxed font-serif">
                      "{project.testimonial.quote}"
                    </blockquote>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between mt-4">
                    <div>
                      <div className="font-heading font-extrabold text-sm text-[#111827] dark:text-white">
                        {project.testimonial.author}
                      </div>
                      <div className="text-xs text-[#2563EB] dark:text-blue-400">
                        {project.testimonial.role}
                      </div>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1"
                    >
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Conversion Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="glass-card p-8 sm:p-14 rounded-3xl border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-sky-600/10 shadow-2xl text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/20 text-[#2563EB] dark:text-blue-400 text-xs font-bold">
            <Zap className="w-4 h-4 animate-pulse" />
            <span>READY TO BE OUR NEXT SUCCESS STORY?</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white max-w-3xl mx-auto tracking-tight">
            Let's Engineer Your High-Converting <br />
            <span className="gradient-text">Website &amp; Ad Growth Engine</span>
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner directly with founders <strong>Mohamed Thariq (+91 86087 24931)</strong> and <strong>Muja (+91 63694 80812)</strong>. We deliver complete 3D web platforms and ad funnels in 7-day agile sprints.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="font-btn font-semibold px-8 py-4 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs shadow-xl shadow-blue-600/30 transition-all cursor-pointer hover:scale-105"
            >
              Book Free 30-Minute Growth Audit
            </button>
            <a
              href="https://wa.me/918608724931?text=Hi%20Mohamed%20Thariq%2C%20I%20saw%20your%20completed%20client%20projects%20and%20want%20to%20build%20a%20website%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="font-btn font-semibold px-8 py-4 rounded-2xl glass-card hover:bg-slate-100 dark:hover:bg-slate-800 text-[#111827] dark:text-white border border-slate-200 dark:border-slate-800 text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp Founders Directly</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
