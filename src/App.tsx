import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';
import ChatbotWidget from './components/ChatbotWidget';
import ConsultationModal from './components/ConsultationModal';
import AdminLeadPortal from './components/AdminLeadPortal';
import { ServiceItem } from './data/marketingData';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>();

  // Lenis Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForForm(service.title);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 transition-colors duration-300 relative font-poppins">
      {/* Dynamic SEO JSON-LD Schemas & Head Setup */}
      <SEOHead />

      {/* Top Header Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenConsultation={handleOpenConsultation}
        onOpenAdminPortal={() => setIsAdminPortalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="w-full max-w-[100vw] overflow-x-hidden">
        <HeroSection onOpenConsultation={handleOpenConsultation} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectService} />
        <ProcessSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection preselectedService={selectedServiceForForm} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <StickyButtons />
      <ChatbotWidget onOpenConsultation={handleOpenConsultation} />

      {/* Booking Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={selectedServiceForForm}
      />

      {/* Private Admin Lead Database Portal */}
      <AdminLeadPortal
        isOpen={isAdminPortalOpen}
        onClose={() => setIsAdminPortalOpen(false)}
      />
    </div>
  );
}
