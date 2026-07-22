import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#12050C] text-white pt-16 pb-8 relative overflow-hidden border-t border-[#CF5376]/20">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-[#CF5376]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-14">
          
          {/* Column 1: Brand Logo & Certification Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#E65447] via-[#FF8559] to-[#FFB578] p-0.5 shadow-md shrink-0">
                <div className="w-full h-full bg-[#1A0912] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#FF8559]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-black tracking-wider text-white">
                  DELUXE HS
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFB578] bg-[#CF5376]/20 px-2 py-0.5 rounded border border-[#FF8559]/40 inline-block mt-0.5">
                  EXECUTIVE SALON & BRIDAL STUDIO
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed max-w-md pt-1">
              Official Executive Makeover Studio. Where beauty meets salon precision and uncompromised organic care in Faisalabad.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xs hover:bg-[#CF5376] hover:text-white hover:border-transparent transition"
                title="Instagram"
              >
                📷
              </a>
              <a
                href={SALON_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xs hover:bg-[#1877F2] hover:border-transparent transition"
                title="Facebook"
              >
                f
              </a>
              <a
                href={SALON_SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xs hover:bg-black hover:border-white/40 transition"
                title="TikTok"
              >
                🎵
              </a>
              <a
                href={SALON_SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-xs hover:bg-[#FF8559] hover:text-white hover:border-transparent transition"
                title="WhatsApp"
              >
                💬
              </a>
            </div>
          </div>

          {/* Column 2: EXPLORE */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#FFB578] uppercase tracking-widest">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs text-rose-100/80">
              <li>
                <a href="#services" className="hover:text-white transition">Services Menu</a>
              </li>
              <li>
                <a href="#bridal-showcase" className="hover:text-white transition">Package Builder</a>
              </li>
              <li>
                <a href="#bridal-gallery" className="hover:text-white transition">Our Specialists</a>
              </li>
              <li>
                <a href={SALON_SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Book Appointment</a>
              </li>
            </ul>
          </div>

          {/* Column 3: GET IN TOUCH */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#FFB578] uppercase tracking-widest">
              GET IN TOUCH
            </h4>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-rose-100/60 block mb-0.5 font-medium">Helpline</span>
                <a href={`tel:${SALON_SOCIAL_LINKS.phone}`} className="text-white hover:text-[#FF8559] font-medium">
                  +92 301 3928585
                </a>
              </div>

              <div>
                <span className="text-rose-100/60 block mb-0.5 font-medium">Support</span>
                <a href="mailto:appointments@deluxehs.pk" className="text-rose-100/90 hover:text-white">
                  appointments@deluxehs.pk
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: TIMINGS */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-[#FFB578] uppercase tracking-widest">
              TIMINGS
            </h4>

            <div className="text-xs space-y-1 text-rose-100/90">
              <p>Mon - Sun: 10:00 AM - 08:00 PM</p>
              <p className="text-[#FF8559] font-bold">Open All 7 Days</p>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-white/10" />

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-rose-100/60 gap-3">
          <p>© {new Date().getFullYear()} Deluxe HS The Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-1 text-rose-100/60">
            <span>Crafted with elegance and precision</span>
            <Heart className="w-3.5 h-3.5 text-[#CF5376] fill-[#CF5376] inline ml-0.5" />
          </div>
        </div>

      </div>
    </footer>
  );
};

