import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BridalKeratinShowcase } from './components/BridalKeratinShowcase';
import { BridalGallerySection } from './components/BridalGallerySection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from './data/salonData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'reviews' | 'location'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectPage = (page: 'home' | 'services' | 'reviews' | 'location') => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8FA] text-gray-800 font-sans antialiased selection:bg-[#EC4899] selection:text-white">
      {/* Main Navigation Header */}
      <Header currentPage={currentPage} onSelectPage={handleSelectPage} />

      {/* Page Content View Based on Current Selection */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Hero Banner */}
            <Hero onSelectPage={handleSelectPage} />

            {/* Quick Preview of Signature Offerings */}
            <BridalKeratinShowcase />

            {/* Real Bridal & Hair Gallery Showcase */}
            <BridalGallerySection />

            {/* Client Reviews Preview */}
            <ReviewsSection />

            {/* Location & Contact Section */}
            <ContactLocationSection />
          </>
        )}

        {currentPage === 'services' && (
          <div className="pt-4">
            <ServicesSection />
            <BridalKeratinShowcase />
          </div>
        )}

        {currentPage === 'reviews' && (
          <div className="pt-4">
            <ReviewsSection />
            <BridalGallerySection />
          </div>
        )}

        {currentPage === 'location' && (
          <div className="pt-4">
            <ContactLocationSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onSelectPage={handleSelectPage} />

      {/* Floating Action WhatsApp & Phone Call Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${SALON_SOCIAL_LINKS.phone}`}
          className="w-12 h-12 rounded-full bg-[#DB2777] hover:bg-[#EC4899] text-white flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer border border-pink-200"
          title="Call 0301-3928585"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={SALON_SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-xl hover:scale-110 transition cursor-pointer border border-emerald-400"
          title="Chat on WhatsApp (0301-3928585)"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

