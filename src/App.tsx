import { useState, useEffect } from 'react';
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
import AdminLeadPortal from './components/AdminLeadPortal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import DeliverablesPage from './pages/DeliverablesPage';
import WhyUsPage from './pages/WhyUsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

import { ServiceItem } from './data/marketingData';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>();

  const location = useLocation();
  const navigate = useNavigate();

  // Lenis Smooth Scroll Initialization with Modal Bypassing
  useEffect(() => {
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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
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

  // Auto-open Admin Lead Portal if URL contains /admin or /portal or /leads
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/admin') || path.includes('/portal') || path.includes('/leads')) {
      setIsAdminOpen(true);
    }
  }, [location.pathname]);

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
        onOpenAdmin={() => setIsAdminOpen(true)}
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
            <Routes location={location}>
              {/* Home Page Routes (Handles Root + GitHub Pages Subpaths) */}
              <Route path="/" element={renderHomePage()} />
              <Route path="/tm-digital-marketing" element={renderHomePage()} />
              <Route path="/dTM-digital-marketing" element={renderHomePage()} />
              <Route path="/tm-digital-marketing/" element={renderHomePage()} />
              <Route path="/dTM-digital-marketing/" element={renderHomePage()} />

              {/* Admin Portal Direct Routes */}
              <Route path="/admin" element={renderHomePage()} />
              <Route path="/admin-portal" element={renderHomePage()} />
              <Route path="/portal" element={renderHomePage()} />
              <Route path="/leads" element={renderHomePage()} />

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
                path="/faq"
                element={<FAQPage onOpenConsultation={handleOpenConsultation} />}
              />
              <Route path="/contact" element={<ContactPage />} />

              {/* 404 Fallback */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Floating Action Utilities (WhatsApp, Direct Founder Call, Scroll-to-Top) */}
      <StickyButtons />
      <ChatbotWidget onOpenConsultation={handleOpenConsultation} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedServiceForForm}
      />

      {/* Founder Admin Lead Portal */}
      <AdminLeadPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
}
