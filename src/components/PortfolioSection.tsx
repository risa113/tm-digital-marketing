import { useState, useEffect, useCallback } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Eye, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  Palette, 
  FileImage, 
  CreditCard, 
  Megaphone, 
  ShieldCheck, 
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { 
  CREATIVE_PROJECTS, 
  PORTFOLIO_CATEGORIES, 
  PortfolioCategory, 
  CreativeProject 
} from '../data/portfolioData';
import { fadeInUp, fadeInDown, defaultViewport } from '../utils/animations';

interface PortfolioSectionProps {
  onOpenConsultation?: () => void;
}

export default function PortfolioSection({ onOpenConsultation }: PortfolioSectionProps) {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All Projects');
  const [selectedProject, setSelectedProject] = useState<CreativeProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Sync category with URL query param if present (?category=...)
  useEffect(() => {
    const categoryParam = searchParams.get('category') as PortfolioCategory | null;
    if (categoryParam && PORTFOLIO_CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Handle smooth scroll to portfolio on anchor link
  useEffect(() => {
    if (location.hash === '#portfolio') {
      const el = document.getElementById('portfolio');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.hash, location.search]);

  // Filter projects by active category
  const filteredProjects = activeCategory === 'All Projects'
    ? CREATIVE_PROJECTS
    : CREATIVE_PROJECTS.filter((item) => item.category === activeCategory);

  // Open modal
  const handleOpenModal = (project: CreativeProject) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  // Next / Previous navigation in modal
  const handleNextImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => 
      prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const handlePrevImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => 
      prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, handleNextImage, handlePrevImage]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  // Category Icon helper
  const getCategoryIcon = (category: PortfolioCategory) => {
    switch (category) {
      case 'Branding & Identity':
        return <Palette className="w-4 h-4" />;
      case 'Banner Designing':
        return <FileImage className="w-4 h-4" />;
      case 'Advertisement Designing':
        return <Megaphone className="w-4 h-4" />;
      case 'Visiting Card Designing':
        return <CreditCard className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  // Get project count by category
  const getCategoryCount = (category: PortfolioCategory) => {
    if (category === 'All Projects') return CREATIVE_PROJECTS.length;
    return CREATIVE_PROJECTS.filter((p) => p.category === category).length;
  };

  return (
    <section 
      id="portfolio" 
      className="py-24 bg-white dark:bg-[#0B101D] text-[#111827] dark:text-slate-100 relative overflow-hidden transition-colors duration-300"
      aria-label="Our Creative Work Portfolio"
    >
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/60 dark:bg-blue-900/30 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 text-xs font-bold text-[#2563EB] dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/80 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB] dark:text-blue-400" />
            <span className="uppercase tracking-wider">TM DIGITAL MARKETING PORTFOLIO</span>
          </motion.div>

          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-[#111827] dark:text-white tracking-tight leading-tight"
          >
            OUR CREATIVE WORK
          </motion.h2>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={1.5}
            className="font-heading font-semibold text-lg sm:text-xl text-[#2563EB] dark:text-blue-400 tracking-tight"
          >
            Turning Business Ideas Into Powerful Visual Identities.
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            custom={2}
            className="text-[#64748B] dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Explore our completed branding, advertising, banner designing, and corporate design projects. Every project represents our commitment to professional business presentation.
          </motion.p>
        </header>

        {/* Category Filter Tabs */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          custom={2.5}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-14"
          role="tablist"
          aria-label="Filter portfolio projects by creative service category"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const count = getCategoryCount(category);

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={isActive}
                className={`relative px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-slate-100/80 dark:bg-slate-800/80 text-[#64748B] dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 border border-slate-200/80 dark:border-slate-700/80'
                }`}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Portfolio Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-[#2563EB]/60 dark:hover:border-blue-500/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Display Frame */}
                  <figure className="relative h-64 sm:h-60 w-full overflow-hidden bg-slate-50 dark:bg-slate-950/70 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-center p-4">
                    {/* Category Tag Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-[10px] font-extrabold text-[#2563EB] dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/80 shadow-sm flex items-center gap-1">
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </span>
                    </div>

                    {/* Quick Preview Action Icon */}
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[#2563EB] dark:text-blue-400 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer"
                      title="Enlarge Image Preview"
                      aria-label={`View enlarged preview for ${project.title}`}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    {/* Actual Project Image */}
                    <img
                      src={project.image}
                      alt={project.altText}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />

                    {/* Hover Backdrop Overlay */}
                    <div 
                      onClick={() => handleOpenModal(project)}
                      className="absolute inset-0 bg-blue-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" 
                    />
                  </figure>

                  {/* Card Content Details */}
                  <div className="p-6 space-y-3">
                    {/* Client & Service */}
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Client: {project.client}
                      </span>
                      <h3 className="font-heading font-extrabold text-lg text-[#111827] dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Specs / Deliverable Badge */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>{project.deliverableTag}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Action Button */}
                <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 mt-4 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-medium text-slate-400 dark:text-slate-500 truncate">
                    {project.clientLocation}
                  </div>

                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/80 hover:bg-[#2563EB] text-[#2563EB] dark:text-blue-400 hover:text-white dark:hover:text-white text-xs font-bold border border-blue-200 dark:border-blue-800 hover:border-transparent transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Supporting Trust & Growth Callout */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-[#2563EB] dark:text-blue-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-[#2563EB] dark:text-blue-400" />
              <span>CUSTOM DIGITAL AGENCY GRAPHIC DESIGN SERVICES</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-[#111827] dark:text-white">
              Need Premium Branding, Banners, or Print Advertisements?
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
              We create vector logos, high-conversion commercial flex banners, newspaper layouts, and corporate visiting cards engineered to position your business as the market leader.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            {onOpenConsultation ? (
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg shadow-blue-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Design Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg shadow-blue-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Design Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </motion.div>

      </div>

      {/* LIGHTBOX / FULL MODAL IMAGE PREVIEW */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} Lightbox Preview`}
          >
            {/* Backdrop Dismiss Area */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={handleCloseModal}
              aria-hidden="true" 
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-5xl bg-white dark:bg-[#0F172A] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Header Bar */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-900/80">
                <div className="flex items-center gap-3 truncate">
                  <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-[#2563EB] dark:text-blue-400 text-[11px] font-bold border border-blue-200 dark:border-blue-800 shrink-0">
                    {selectedProject.category}
                  </span>
                  <div className="truncate">
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#111827] dark:text-white truncate">
                      {selectedProject.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      Client: {selectedProject.client} • {selectedProject.clientLocation}
                    </p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer shrink-0"
                  aria-label="Close project preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Content Area: Large Contain Image Stage */}
              <div className="relative flex-1 bg-slate-950 flex items-center justify-center min-h-[320px] max-h-[58vh] p-4 sm:p-6 overflow-hidden select-none">
                {/* Contain Image */}
                <img
                  src={selectedProject.galleryImages[activeImageIndex]}
                  alt={`${selectedProject.title} Preview ${activeImageIndex + 1}`}
                  className="max-h-full max-w-full object-contain rounded-lg drop-shadow-2xl transition-opacity duration-300"
                />

                {/* Prev & Next Buttons (if multiple images exist) */}
                {selectedProject.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-lg"
                      aria-label="View previous image"
                      title="Previous (Left Arrow)"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-lg"
                      aria-label="View next image"
                      title="Next (Right Arrow)"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/60 text-white text-[11px] font-bold backdrop-blur-md">
                      {activeImageIndex + 1} / {selectedProject.galleryImages.length}
                    </div>
                  </>
                )}
              </div>

              {/* Gallery Thumbnails (if multiple images) */}
              {selectedProject.galleryImages.length > 1 && (
                <div className="px-6 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-2 overflow-x-auto">
                  {selectedProject.galleryImages.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-12 w-20 rounded-lg overflow-hidden border-2 transition-all p-0.5 bg-black cursor-pointer ${
                        activeImageIndex === idx 
                          ? 'border-[#2563EB] scale-105' 
                          : 'border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={imgSrc} alt="Thumbnail" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}

              {/* Project Meta Information & Action Footer */}
              <div className="p-6 bg-white dark:bg-[#0F172A] border-t border-slate-200 dark:border-slate-800 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-8 space-y-2">
                    <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                    
                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {selectedProject.highlights.map((h, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Action Box */}
                  <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col justify-end gap-2">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-center">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">Deliverable Format</div>
                      <div className="text-xs font-bold text-[#111827] dark:text-white mt-0.5">
                        {selectedProject.specs.format}
                      </div>
                    </div>

                    {onOpenConsultation ? (
                      <button
                        onClick={() => {
                          handleCloseModal();
                          onOpenConsultation();
                        }}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs text-center shadow-md shadow-blue-600/25 transition-all cursor-pointer"
                      >
                        Request Similar Project
                      </button>
                    ) : (
                      <a
                        href="#contact"
                        onClick={handleCloseModal}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs text-center shadow-md shadow-blue-600/25 transition-all cursor-pointer"
                      >
                        Request Similar Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* JSON-LD Schema for SEO Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'TM Digital Marketing Creative Work & Completed Client Portfolio',
            description: 'Completed branding, advertising, banner designing, and visiting card designing projects by TM Digital Marketing Agency in Tirunelveli, Tamil Nadu.',
            url: 'https://tmdigitalgrow.com/#portfolio',
            author: {
              '@type': 'Organization',
              name: 'TM Digital Marketing',
              url: 'https://tmdigitalgrow.com'
            },
            hasPart: CREATIVE_PROJECTS.map((project) => ({
              '@type': 'CreativeWork',
              name: project.title,
              creator: {
                '@type': 'Organization',
                name: 'TM Digital Marketing'
              },
              about: project.service,
              image: `https://tmdigitalgrow.com${project.image}`,
              description: project.description
            }))
          })
        }}
      />
    </section>
  );
}
