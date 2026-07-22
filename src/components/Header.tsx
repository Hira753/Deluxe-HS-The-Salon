import React, { useState } from 'react';
import { Phone, Sparkles, Clock, MapPin, Menu, X, MessageSquare } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from '../data/salonData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services Menu', href: '#services' },
    { label: 'Bridal & Hair Botox', href: '#bridal-showcase' },
    { label: 'Bridal & Hairstyles Gallery', href: '#bridal-gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1A0912]/95 backdrop-blur-md border-b border-[#CF5376]/30 text-white shadow-xl">
      {/* Top Banner */}
      <div className="hidden lg:block bg-gradient-to-r from-[#CF5376] via-[#E65447] to-[#FF8559] text-white py-1.5 px-6 text-xs font-medium border-b border-white/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-bold text-[11px] bg-[#1A0912]/20 px-2.5 py-0.5 rounded border border-white/30">
              <Sparkles className="w-3 h-3 text-[#FFB578]" />
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
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#CF5376] via-[#E65447] to-[#FF8559] p-0.5 shadow-lg shadow-[#FF8559]/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#1A0912] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#FFB578]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-white flex items-center gap-1">
                Deluxe <span className="text-gradient-sunset">HS</span>
              </span>
              <span className="text-[9px] tracking-[0.2em] text-[#FFB578] uppercase font-bold flex items-center gap-1">
                The Salon Executive Branch
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-rose-100/90 hover:text-[#FFB578] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF8559] to-[#FFB578] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SALON_SOCIAL_LINKS.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF8559]/40 bg-[#FF8559]/15 text-[#FFB578] hover:bg-[#FF8559]/30 transition text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF8559]" />
              <span>0301-3928585</span>
            </a>

            <a
              href={SALON_SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer border border-[#FFB578]/40"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SALON_SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#E65447] to-[#FF8559] text-white text-xs font-bold cursor-pointer"
            >
              Contact Us
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-rose-100 hover:text-white hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1A0912] border-b border-[#CF5376]/30 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-rose-100 hover:text-[#FFB578] py-2 px-3 rounded-lg hover:bg-white/5 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${SALON_SOCIAL_LINKS.phone}`}
              className="w-full py-2.5 rounded-xl border border-[#FF8559]/40 bg-[#FF8559]/15 text-[#FFB578] text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FF8559]" />
              <span>Call 0301-3928585</span>
            </a>
            <a
              href={SALON_SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
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
