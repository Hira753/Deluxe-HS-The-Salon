import React, { useState } from 'react';
import { Phone, Sparkles, Clock, MapPin, Menu, X, MessageSquare, Heart } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from '../data/salonData';

interface HeaderProps {
  currentPage: string;
  onSelectPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onSelectPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navPages = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services Menu' },
    { id: 'bridal', label: 'Bridal & Hair Botox' },
    { id: 'gallery', label: 'Bridal & Hairstyles Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Location & Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onSelectPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-pink-200 text-gray-800 shadow-sm">
      {/* Top Banner */}
      <div className="hidden lg:block bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white py-1.5 px-6 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-bold text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full border border-white/30">
              <Sparkles className="w-3 h-3 text-pink-100" />
              <span>Premier Executive Makeover Studio</span>
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <Clock className="w-3.5 h-3.5" />
              <span>{SALON_SOCIAL_LINKS.timing}</span>
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-white">
              <MapPin className="w-3.5 h-3.5" />
              <span>{SALON_SOCIAL_LINKS.shortAddress}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SALON_SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline font-bold text-white"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Inquiry</span>
            </a>
            <span className="opacity-40">|</span>
            <a
              href={`tel:${SALON_SOCIAL_LINKS.phone}`}
              className="flex items-center gap-1 hover:underline font-bold text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0301-3928585</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#EC4899] via-[#F472B6] to-[#FB7185] p-0.5 shadow-md shadow-pink-200 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#EC4899] fill-[#EC4899]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-gray-900 flex items-center gap-1">
                Deluxe <span className="text-[#EC4899]">HS</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#DB2777] uppercase font-bold flex items-center gap-1">
                The Salon Executive Branch
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links (Separate Pages) */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 text-xs font-bold">
            {navPages.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3.5 py-2 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#EC4899] text-white shadow-md shadow-pink-200'
                      : 'text-gray-700 hover:text-[#EC4899] hover:bg-pink-50'
                  }`}
                >
                  {page.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SALON_SOCIAL_LINKS.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-pink-200 bg-pink-50/80 text-[#DB2777] hover:bg-pink-100 transition text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>0301-3928585</span>
            </a>

            <a
              href={SALON_SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white font-bold text-xs shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer border border-pink-300"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={SALON_SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white text-xs font-bold cursor-pointer"
            >
              Contact Us
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-pink-200 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navPages.map((page) => {
              const isActive = currentPage === page.id;
              return (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  className={`text-left py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white shadow-sm'
                      : 'text-gray-700 hover:text-[#EC4899] hover:bg-pink-50'
                  }`}
                >
                  {page.label}
                </button>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-pink-100 flex flex-col gap-2">
            <a
              href={`tel:${SALON_SOCIAL_LINKS.phone}`}
              className="w-full py-2.5 rounded-xl border border-pink-200 bg-pink-50 text-[#DB2777] text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#EC4899]" />
              <span>Call 0301-3928585</span>
            </a>
            <a
              href={SALON_SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

