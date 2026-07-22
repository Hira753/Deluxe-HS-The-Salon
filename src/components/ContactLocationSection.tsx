import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Instagram, Sparkles, Navigation, ShieldCheck } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from '../data/salonData';

export const ContactLocationSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1A0912] via-[#28101A] to-[#12050C] text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CF5376]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF8559]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#CF5376]/20 border border-[#FF8559]/40 text-[#FFB578] text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#FF8559]" />
            Visit Us & Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Location & <span className="text-[#FFB578]">Contact Details</span>
          </h2>
          <p className="text-rose-100/80 text-base sm:text-lg">
            We look forward to welcoming you at Deluxe HS The Salon Executive Branch in Faisalabad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address & Location Card */}
          <div className="bg-gradient-to-br from-[#28101A] to-[#1A0912] p-6 sm:p-8 rounded-2xl border border-[#FF8559]/30 shadow-xl flex flex-col justify-between hover:border-[#CF5376] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#CF5376]/20 border border-[#FF8559]/40 flex items-center justify-center text-[#FFB578]">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB578]">Salon Location</span>
                <h3 className="text-xl font-serif font-bold text-white mt-1">
                  Executive Branch
                </h3>
                <p className="text-rose-100/90 text-sm leading-relaxed mt-2">
                  Plot 452, near Faysal Hospital, Block A People's Colony No 1, D-Ground, Faisalabad, Pakistan
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-rose-100 font-medium pt-2">
                <span className="px-2.5 py-1 rounded-md bg-[#CF5376]/20 border border-[#FF8559]/30">D-Ground Area</span>
                <span className="px-2.5 py-1 rounded-md bg-[#CF5376]/20 border border-[#FF8559]/30">Near Faysal Hospital</span>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://maps.google.com/?q=Deluxe+HS+Salon+Faisalabad+Peoples+Colony"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white font-bold text-sm hover:brightness-110 transition shadow-md border border-[#FFB578]/40"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Open Google Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Direct Phone & WhatsApp Card */}
          <div className="bg-gradient-to-br from-[#28101A] to-[#1A0912] p-6 sm:p-8 rounded-2xl border border-[#FF8559]/30 shadow-xl flex flex-col justify-between hover:border-[#CF5376] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#CF5376]/20 border border-[#FF8559]/40 flex items-center justify-center text-[#FFB578]">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB578]">Direct Helpline</span>
                <h3 className="text-2xl font-bold text-white mt-1">0301-3928585</h3>
                <p className="text-rose-200/70 text-xs mt-1">Call for appointments or WhatsApp inquiries</p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-rose-100/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant response on WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF8559] shrink-0" />
                  <span>Mon – Sun: 10:00 AM – 8:00 PM</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6">
              <a
                href={`tel:${SALON_SOCIAL_LINKS.phone}`}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#E65447] hover:bg-[#d44336] text-white font-bold text-xs sm:text-sm transition shadow-md border border-[#FFB578]/30"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Now</span>
              </a>
              <a
                href={SALON_SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#CF5376] hover:bg-[#be4265] text-white font-bold text-xs sm:text-sm transition shadow-md border border-[#FFB578]/30"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Business Hours & Instagram Card */}
          <div className="bg-gradient-to-br from-[#28101A] to-[#1A0912] p-6 sm:p-8 rounded-2xl border border-[#FF8559]/30 shadow-xl flex flex-col justify-between hover:border-[#CF5376] transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#CF5376]/20 border border-[#FF8559]/40 flex items-center justify-center text-[#FFB578]">
                <Instagram className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFB578]">Official Instagram</span>
                <h3 className="text-xl font-serif font-bold text-white mt-1">@deluxehsthesalon</h3>
                <p className="text-rose-200/70 text-xs mt-1">Follow for daily real bride stories & hair transformations</p>
              </div>

              <div className="p-3.5 bg-[#1A0912] rounded-xl border border-[#FF8559]/20 flex items-center justify-between text-xs">
                <span className="text-rose-100">31.3K+ Instagram Followers</span>
                <Sparkles className="w-4 h-4 text-[#FF8559]" />
              </div>
            </div>

            <div className="pt-6">
              <a
                href={SALON_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white font-bold text-sm transition shadow-md border border-[#FFB578]/40"
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
