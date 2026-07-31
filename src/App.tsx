import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

import SEOHead from './components/SEOHead';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';
import ChatbotWidget from './components/ChatbotWidget';
import ConsultationModal from './components/ConsultationModal';

import HomePage from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const DeliverablesPage = lazy(() => import('./pages/DeliverablesPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

import { ServiceItem } from './data/marketingData';

const PageLoader = () => (
  <div className="w-full min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>();

  const location = useLocation();
  const navigate = useNavigate();

  // Lenis Smooth Scroll Initialization (Desktop Only for Maximum Mobile Performance)
  useEffect(() => {
    // Disable Lenis on mobile / touch devices to prevent CPU throttle & main thread blocking
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
      {/* Scroll restoration component */}
      <ScrollToTop />

      {/* Dynamic Route SEO Head setup */}
      <SEOHead />

      {/* Persistent Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Animated Route Transitions Content Area */}
      <main className="w-full max-w-[100vw] overflow-x-hidden min-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Suspense fallback={<PageLoader />}>
              <Routes location={location}>
                {/* Home Page Routes (Handles Root + GitHub Pages Subpaths) */}
                <Route path="/" element={renderHomePage()} />
                <Route path="/tm-digital-marketing" element={renderHomePage()} />
                <Route path="/dTM-digital-marketing" element={renderHomePage()} />
                <Route path="/tm-digital-marketing/" element={renderHomePage()} />
                <Route path="/dTM-digital-marketing/" element={renderHomePage()} />

                {/* Dedicated Navigation Pages */}
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

                {/* 404 Fallback */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer />

      {/* Floating Action Utilities (WhatsApp, Direct Founder Call, Scroll-to-Top) */}
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
