import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

import SEOHead from './components/SEOHead';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import StickyButtons from './components/StickyButtons';

// Lazy load interactive modal dialogs
const ChatbotWidget = lazy(() => import('./components/ChatbotWidget'));
const ConsultationModal = lazy(() => import('./components/ConsultationModal'));

// Lazy load route pages for maximum initial load performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const DigitalMarketingTirunelveliPage = lazy(() => import('./pages/DigitalMarketingTirunelveliPage'));
const SEOServicesTirunelveliPage = lazy(() => import('./pages/SEOServicesTirunelveliPage'));
const SocialMediaMarketingTirunelveliPage = lazy(() => import('./pages/SocialMediaMarketingTirunelveliPage'));
const GoogleAdsTirunelveliPage = lazy(() => import('./pages/GoogleAdsTirunelveliPage'));
const MetaAdsTirunelveliPage = lazy(() => import('./pages/MetaAdsTirunelveliPage'));
const WebDevelopmentTirunelveliPage = lazy(() => import('./pages/WebDevelopmentTirunelveliPage'));
const BrandingTirunelveliPage = lazy(() => import('./pages/BrandingTirunelveliPage'));
const LeadGenerationTirunelveliPage = lazy(() => import('./pages/LeadGenerationTirunelveliPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const DeliverablesPage = lazy(() => import('./pages/DeliverablesPage'));
const CompletedProjectsPage = lazy(() => import('./pages/CompletedProjectsPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const DisclaimerPage = lazy(() => import('./pages/DisclaimerPage'));
const FoundersPage = lazy(() => import('./pages/FoundersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Lazy load Admin Portal & CMS Pages
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const AdminPortfolioPage = lazy(() => import('./pages/admin/AdminPortfolioPage'));
const AdminMediaPage = lazy(() => import('./pages/admin/AdminMediaPage'));
const AdminServicesPage = lazy(() => import('./pages/admin/AdminServicesPage'));
const AdminTestimonialsPage = lazy(() => import('./pages/admin/AdminTestimonialsPage'));
const AdminHomePage = lazy(() => import('./pages/admin/AdminHomePage'));
const AdminAboutPage = lazy(() => import('./pages/admin/AdminAboutPage'));
const AdminSEOPage = lazy(() => import('./pages/admin/AdminSEOPage'));
const AdminContactPage = lazy(() => import('./pages/admin/AdminContactPage'));
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage'));
const AdminProfilePage = lazy(() => import('./pages/admin/AdminProfilePage'));

import AdminAuthGuard from './components/admin/AdminAuthGuard';
import AdminLayout from './components/admin/AdminLayout';

import { ServiceItem } from './data/marketingData';

// Lightweight route transition spinner
function PageLoadingFallback() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center py-24">
      <div className="w-9 h-9 rounded-full border-3 border-blue-600/20 border-t-[#2563EB] animate-spin" />
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string | undefined>();

  const location = useLocation();
  const navigate = useNavigate();

  // Lenis Smooth Scroll Initialization (Desktop Only for Maximum Performance)
  useEffect(() => {
    const isMobile = window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024);
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.0,
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

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#F8FAFC] dark:bg-[#0F172A] text-[#111827] dark:text-slate-100 transition-colors duration-300 relative font-poppins">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Dynamic Route SEO Head & Structured Data Schemas (Public Pages Only) */}
      {!isAdminRoute && <SEOHead />}

      {/* Persistent Header Navbar (Public Pages Only) */}
      {!isAdminRoute && (
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenConsultation={handleOpenConsultation}
        />
      )}

      {/* Visual Breadcrumb Navigation (Public Pages Only) */}
      {!isAdminRoute && <Breadcrumbs />}

      {/* Route Content Area with Code-Splitting Suspense */}
      <main className="w-full max-w-[100vw] overflow-x-hidden min-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
          >
            <Suspense fallback={<PageLoadingFallback />}>
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
                  path="/completed-projects"
                  element={<CompletedProjectsPage onOpenConsultation={handleOpenConsultation} />}
                />
                <Route
                  path="/completed-work"
                  element={<CompletedProjectsPage onOpenConsultation={handleOpenConsultation} />}
                />
                <Route
                  path="/our-work"
                  element={<CompletedProjectsPage onOpenConsultation={handleOpenConsultation} />}
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
                <Route
                  path="/founders"
                  element={<FoundersPage onOpenConsultation={handleOpenConsultation} />}
                />
                <Route
                  path="/leadership"
                  element={<FoundersPage onOpenConsultation={handleOpenConsultation} />}
                />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/terms-of-service" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/ad-disclosure" element={<DisclaimerPage />} />

                {/* Admin CMS & Portal Routes */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                  path="/admin"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminDashboardPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminDashboardPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/portfolio"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminPortfolioPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/media"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminMediaPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/services"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminServicesPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/testimonials"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminTestimonialsPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/content/home"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminHomePage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/content/about"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminAboutPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/seo"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminSEOPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/contact"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminContactPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/settings"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminSettingsPage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />
                <Route
                  path="/admin/profile"
                  element={
                    <AdminAuthGuard>
                      <AdminLayout>
                        <AdminProfilePage />
                      </AdminLayout>
                    </AdminAuthGuard>
                  }
                />

                {/* 404 Fallback */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer (Public Pages Only) */}
      {!isAdminRoute && <Footer />}

      {/* Floating Action Utilities (Public Pages Only) */}
      {!isAdminRoute && <StickyButtons />}
      
      {/* Interactive GDPR & Google AdSense Compliant Cookie Consent Banner */}
      {!isAdminRoute && <CookieConsent />}

      {!isAdminRoute && (
        <Suspense fallback={null}>
          <ChatbotWidget onOpenConsultation={handleOpenConsultation} />
          {isConsultationOpen && (
            <ConsultationModal
              isOpen={isConsultationOpen}
              onClose={() => setIsConsultationOpen(false)}
              defaultService={selectedServiceForForm}
            />
          )}
        </Suspense>
      )}
    </div>
  );
}

