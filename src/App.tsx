import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValuesBanner } from './components/ValuesBanner';
import { ServicesSection } from './components/ServicesSection';
import { BrandsSection } from './components/BrandsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { AboutSection } from './components/AboutSection';
import { ResourcesSection } from './components/ResourcesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EmergencyBanner } from './components/EmergencyBanner';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>();
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleOpenQuoteModal = (serviceId?: string, locationName?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedLocation(locationName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
    setSelectedServiceId(undefined);
    setSelectedLocation(undefined);
  };

  // Track active section for header high-contrast highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'brands', 'service-area', 'about', 'resources', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2. Core Value Pillars & Stats */}
        <ValuesBanner />

        {/* 3. Commercial Refrigeration Services */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 4. Brands We Work With */}
        <BrandsSection />

        {/* 5. Dedicated Service Area & Regional Route Map */}
        <ServiceAreaSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 6. Company Info / About Section */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 7. Resources & FAQs */}
        <ResourcesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 8. Testimonials & Trust Signals */}
        <TestimonialsSection />

        {/* 9. Contact Section */}
        <ContactSection
          prefilledLocation={selectedLocation}
          prefilledService={selectedServiceId}
        />
      </main>

      {/* Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Sticky Mobile Emergency Contact Toolbar */}
      <EmergencyBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Universal Instant Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialServiceId={selectedServiceId}
        initialLocation={selectedLocation}
      />
    </div>
  );
}
