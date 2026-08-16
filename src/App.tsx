import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

import SEOHead from './components/SEOHead';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import AdSenseBanner from './components/AdSenseBanner';
import StickyButtons from './components/StickyButtons';
import ChatbotWidget from './components/ChatbotWidget';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import DigitalMarketingTirunelveliPage from './pages/DigitalMarketingTirunelveliPage';
import SEOServicesTirunelveliPage from './pages/SEOServicesTirunelveliPage';
import SocialMediaMarketingTirunelveliPage from './pages/SocialMediaMarketingTirunelveliPage';
import GoogleAdsTirunelveliPage from './pages/GoogleAdsTirunelveliPage';
import MetaAdsTirunelveliPage from './pages/MetaAdsTirunelveliPage';
import WebDevelopmentTirunelveliPage from './pages/WebDevelopmentTirunelveliPage';
import BrandingTirunelveliPage from './pages/BrandingTirunelveliPage';
import LeadGenerationTirunelveliPage from './pages/LeadGenerationTirunelveliPage';
import BlogIndexPage from './pages/BlogIndexPage';
import BlogPostPage from './pages/BlogPostPage';
import ProcessPage from './pages/ProcessPage';
import DeliverablesPage from './pages/DeliverablesPage';
import WhyUsPage from './pages/WhyUsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

import { ServiceItem } from './data/marketingData';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>();

  const location = useLocation();
  const navigate = useNavigate();

  // Lenis Smooth Scroll Initialization (Desktop Only for Maximum Mobile Performance)
  useEffect(() => {
    const isMobile = window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      prevent: (node: HTMLElement) => {
        return (
          node.hasAttribute('data-lenis-prevent') ||
          node.classList.contains('modal-scrollable') ||
          node.closest('[data-lenis-prevent]') !== null ||
          node.closest('.modal-scrollable') !== null
        );
      }
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  // Update HTML class for Dark/Light Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForForm(service.title);
    navigate(`/contact?service=${encodeURIComponent(service.title)}`);
  };

  const renderHomePage = () => (
    <HomePage
      onOpenConsultation={handleOpenConsultation}
      onSelectService={handleSelectService}
    />
  );

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 transition-colors duration-300 relative font-poppins">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Dynamic Route SEO Head & Structured Data Schemas */}
      <SEOHead />

      {/* Persistent Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Visual Breadcrumb Navigation */}
      <Breadcrumbs />

      {/* Route Content Area */}
      <main className="w-full max-w-[100vw] overflow-x-hidden min-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            <Routes location={location}>
              {/* Home Page Routes */}
              <Route path="/" element={renderHomePage()} />
              <Route path="/tm-digital-marketing" element={renderHomePage()} />
              <Route path="/dTM-digital-marketing" element={renderHomePage()} />
              <Route path="/tm-digital-marketing/" element={renderHomePage()} />
              <Route path="/dTM-digital-marketing/" element={renderHomePage()} />

              {/* Dedicated Core Pages */}
              <Route
                path="/about"
                element={<AboutPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/services"
                element={
                  <ServicesPage
                    onOpenConsultation={handleOpenConsultation}
                    onSelectService={handleSelectService}
                  />
                }
              />

              {/* Dedicated High-Intent Local Service Landing Pages */}
              <Route
                path="/digital-marketing-agency-tirunelveli"
                element={<DigitalMarketingTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/seo-services-tirunelveli"
                element={<SEOServicesTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/social-media-marketing-tirunelveli"
                element={<SocialMediaMarketingTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/google-ads-tirunelveli"
                element={<GoogleAdsTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/meta-ads-tirunelveli"
                element={<MetaAdsTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/web-development-tirunelveli"
                element={<WebDevelopmentTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/branding-tirunelveli"
                element={<BrandingTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/lead-generation-tirunelveli"
                element={<LeadGenerationTirunelveliPage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* Blog System */}
              <Route
                path="/blog"
                element={<BlogIndexPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/blog/:slug"
                element={<BlogPostPage onOpenConsultation={handleOpenConsultation} />}
              />

              {/* Supporting Agency Navigation Pages */}
              <Route
                path="/process"
                element={<ProcessPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/deliverables"
                element={<DeliverablesPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/why-us"
                element={<WhyUsPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/testimonials"
                element={<TestimonialsPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route
                path="/faq"
                element={<FAQPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/terms-of-service" element={<TermsPage />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Google AdSense Ad Unit Banner */}
      <AdSenseBanner slot="4970893672" />

      {/* Persistent Footer */}
      <Footer />

      {/* Floating Action Utilities */}
      <StickyButtons />
      <ChatbotWidget onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedServiceForForm}
      />
    </div>
  );
}
