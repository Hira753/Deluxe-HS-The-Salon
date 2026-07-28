import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Instagram, Sparkles, Navigation, ShieldCheck } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from '../data/salonData';

export const ContactLocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-[#FFF0F5] via-[#FFF7FA] to-[#FFF0F5] text-gray-800 relative overflow-hidden border-t border-b border-pink-200">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-200 text-[#DB2777] text-xs font-semibold tracking-widest uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#EC4899]" />
            Visit Us & Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900">
            Location & <span className="text-[#EC4899]">Contact Details</span>
          </h2>
          <p className="text-pink-950/80 text-base sm:text-lg font-normal">
            We look forward to welcoming you at Deluxe HS The Salon Executive Branch in Faisalabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address & Location Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-sm flex flex-col justify-between hover:border-[#EC4899] hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-[#EC4899]">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DB2777]">Salon Location</span>
                <h3 className="text-xl font-serif font-bold text-gray-900 mt-1">
                  Executive Branch
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  Plot 452, near Faysal Hospital, Block A People's Colony No 1, D-Ground, Faisalabad, Pakistan
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-pink-950 font-semibold pt-2">
                <span className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200">D-Ground Area</span>
                <span className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200">Near Faysal Hospital</span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Deluxe+HS+Salon+Faisalabad+Peoples+Colony"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white font-bold text-xs sm:text-sm transition shadow-xs hover:scale-105 cursor-pointer border border-pink-300"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Open Google Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Direct Phone & WhatsApp Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-sm flex flex-col justify-between hover:border-[#EC4899] hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-[#EC4899]">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DB2777]">Direct Helpline</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">0301-3928585</h3>
                <p className="text-gray-500 text-xs mt-1">Call for appointments or WhatsApp inquiries</p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant response on WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#EC4899] shrink-0" />
                  <span>Mon – Sun: 10:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6">
              <a
                href={`tel:${SALON_SOCIAL_LINKS.phone}`}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#DB2777] hover:bg-[#be2166] text-white font-bold text-xs sm:text-sm transition shadow-xs border border-pink-300"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>
              <a
                href={SALON_SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition shadow-xs border border-emerald-500"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Business Hours & Instagram Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-sm flex flex-col justify-between hover:border-[#EC4899] hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-[#EC4899]">
                <Instagram className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#DB2777]">Official Instagram</span>
                <h3 className="text-xl font-serif font-bold text-gray-900 mt-1">@deluxehsthesalon</h3>
                <p className="text-gray-500 text-xs mt-1">Follow for daily real bride stories & hair transformations</p>
              </div>

              <div className="p-3.5 bg-pink-50 rounded-2xl border border-pink-200 flex items-center justify-between text-xs">
                <span className="text-pink-950 font-semibold">31.3K+ Instagram Followers</span>
                <Sparkles className="w-4 h-4 text-[#EC4899]" />
              </div>
            </div>

            <div className="pt-6">
              <a
                href={SALON_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white font-bold text-xs sm:text-sm transition shadow-xs hover:scale-105 cursor-pointer border border-pink-300"
              >
                <Instagram className="w-4 h-4 text-white" />
                <span>Visit Instagram Page</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

