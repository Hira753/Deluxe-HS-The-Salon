import React from 'react';
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
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F6] text-[#1A0912] font-sans antialiased selection:bg-[#FF8559] selection:text-white">
      {/* Main Navigation Header */}
      <Header />

      {/* Hero Banner */}
      <Hero onExploreServices={scrollToServices} />

      {/* Services Menu Catalog */}
      <ServicesSection />

      {/* Bridal & Hair Keratin Spotlight */}
      <BridalKeratinShowcase />

      {/* Deluxe HS Real Bridal & Hairstyles Gallery */}
      <BridalGallerySection />

      {/* Reviews & Client Testimonials */}
      <ReviewsSection />

      {/* Dedicated Contact Us & Location Map Section */}
      <ContactLocationSection />

      {/* Footer & Social Media Channels */}
      <Footer />

      {/* Floating Action WhatsApp & Phone Call Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`tel:${SALON_SOCIAL_LINKS.phone}`}
          className="w-12 h-12 rounded-full bg-[#E65447] hover:bg-[#CF5376] text-white flex items-center justify-center shadow-xl hover:scale-110 transition cursor-pointer border border-[#FFB578]"
          title="Call 0301-3928585"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href={SALON_SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition cursor-pointer border border-emerald-400"
          title="Chat on WhatsApp (0301-3928585)"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
