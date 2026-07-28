import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from '../data/salonData';

interface FooterProps {
  onSelectPage?: (page: 'home' | 'services' | 'reviews' | 'location') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPage }) => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-[#FFF0F5] to-[#FFE4EC] text-gray-800 pt-16 pb-8 relative overflow-hidden border-t border-pink-200">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-14">
          
          {/* Column 1: Brand Logo & Certification Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#EC4899] via-[#F472B6] to-[#FB7185] p-0.5 shadow-sm shrink-0">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#EC4899]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-black tracking-wider text-gray-900">
                  DELUXE HS
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DB2777] bg-pink-100 px-2.5 py-0.5 rounded-full border border-pink-200 inline-block mt-0.5">
                  EXECUTIVE SALON & BRIDAL STUDIO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md pt-1">
              Official Executive Makeover Studio. Where beauty meets salon precision and uncompromised organic care in Faisalabad.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center text-xs hover:bg-pink-100 transition shadow-xs"
                title="Instagram"
              >
                📷
              </a>
              <a
                href={SALON_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center text-xs hover:bg-pink-100 transition shadow-xs"
                title="Facebook"
              >
                f
              </a>
              <a
                href={SALON_SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center text-xs hover:bg-pink-100 transition shadow-xs"
                title="TikTok"
              >
                🎵
              </a>
              <a
                href={SALON_SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center text-xs hover:bg-pink-100 transition shadow-xs"
                title="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#DB2777] uppercase tracking-widest">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li>
                <button onClick={() => onSelectPage?.('home')} className="hover:text-[#EC4899] font-medium transition cursor-pointer">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => onSelectPage?.('services')} className="hover:text-[#EC4899] font-medium transition cursor-pointer">
                  Services Menu
                </button>
              </li>
              <li>
                <button onClick={() => onSelectPage?.('reviews')} className="hover:text-[#EC4899] font-medium transition cursor-pointer">
                  Client Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onSelectPage?.('location')} className="hover:text-[#EC4899] font-medium transition cursor-pointer">
                  Location & Map
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#DB2777] uppercase tracking-widest">
              GET IN TOUCH
            </h4>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-gray-500 block mb-0.5 font-medium">Helpline</span>
                <a href={`tel:${SALON_SOCIAL_LINKS.phone}`} className="text-gray-900 hover:text-[#EC4899] font-bold">
                  +92 301 3928585
                </a>
              </div>

              <div>
                <span className="text-gray-500 block mb-0.5 font-medium">Support</span>
                <a href="mailto:appointments@deluxehs.pk" className="text-gray-700 hover:text-[#EC4899]">
                  appointments@deluxehs.pk
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: TIMINGS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#DB2777] uppercase tracking-widest">
              TIMINGS
            </h4>

            <div className="text-xs space-y-1 text-gray-700">
              <p>Mon - Sun: 10:00 AM - 08:00 PM</p>
              <p className="text-[#EC4899] font-bold">Open All 7 Days</p>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-pink-200" />

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Deluxe HS The Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-gray-500">
            <span>Crafted with elegance and precision</span>
            <Heart className="w-3.5 h-3.5 text-[#EC4899] fill-[#EC4899] inline ml-0.5" />
          </div>
        </div>

      </div>
    </footer>
  );
};


