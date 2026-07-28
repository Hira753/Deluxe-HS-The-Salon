import React from 'react';
import { Phone, Sparkles, Star, CheckCircle2, ChevronRight, ShieldCheck, MessageSquare, MapPin, Heart } from 'lucide-react';
import { SALON_SOCIAL_LINKS } from '../data/salonData';

interface HeroProps {
  onSelectPage: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectPage }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#FFF0F5] via-[#FFF7FA] to-[#FFFFFF] text-gray-800 overflow-hidden py-12 md:py-16 lg:py-20 border-b border-pink-200">
      {/* Ambient Soft Glow Backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100 border border-pink-200 text-[#DB2777] text-xs font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#EC4899] animate-pulse" />
                <span>Executive Beauty Salon & Bridal Studio Faisalabad</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-semibold tracking-wide shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Certified Organic Products</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-gray-900 leading-tight">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#DB2777]">
                Deluxe HS The Salon
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-pink-950/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience pinnacle luxury in Pakistani bridal transformations, precision hair color balayage, keratin botox extenso treatments, organic fruit waxing, and rejuvenating hydra facials.
            </p>

            {/* Location & Contact Highlight */}
            <div className="p-4 rounded-2xl bg-white/90 border border-pink-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-[#EC4899] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-gray-900">D-Ground, Near Faysal Hospital</p>
                  <p className="text-pink-800">People's Colony No 1, Faisalabad</p>
                </div>
              </div>
              <a
                href={`tel:${SALON_SOCIAL_LINKS.phone}`}
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-pink-200 text-[#DB2777] hover:bg-pink-50 text-xs font-bold shadow-sm transition"
              >
                <Phone className="w-3.5 h-3.5 text-[#EC4899]" />
                <span>0301-3928585</span>
              </a>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#DB2777] text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EC4899]" />
                Signature Bridal Services
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#DB2777] text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EC4899]" />
                Executive Fruit Waxing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#DB2777] text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#EC4899]" />
                Hair Extenso & Keratin Botox
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={SALON_SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2.5 border border-pink-300"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Contact Us / WhatsApp Booking</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onSelectPage('services')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-pink-50 text-[#DB2777] font-bold text-sm border border-pink-200 shadow-sm transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Services Menu</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-pink-200/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-serif font-bold text-[#EC4899]">31.3K</p>
                <p className="text-xs text-pink-900/70 font-medium">Instagram Community</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-xl font-serif font-bold text-gray-900">5.0</span>
                </div>
                <p className="text-xs text-pink-900/70 font-medium">Google Client Rating</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#DB2777]">100%</p>
                <p className="text-xs text-pink-900/70 font-medium">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Right Visual Card Column with Uploaded Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card Frame */}
              <div className="rounded-3xl p-1 bg-gradient-to-b from-[#EC4899] via-[#F472B6] to-[#FB7185] shadow-xl">
                <div className="bg-white rounded-[22px] p-4 sm:p-5 space-y-4 overflow-hidden relative">
                  {/* Hero Showcase Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-md group border border-pink-100">
                    <img
                      src="https://res.cloudinary.com/irbsm5bs/image/upload/v1785005849/ChatGPT_Image_Jul_25_2026_11_54_29_PM_zhvyok.png"
                      alt="Deluxe HS The Salon Luxury Showcase"
                      className="w-full h-auto max-h-[420px] object-cover rounded-2xl transform group-hover:scale-105 transition duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-pink-100 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-pink-300/40">
                        Signature Executive Studio
                      </span>
                      <span className="text-xs font-bold text-white bg-[#EC4899] px-3 py-1 rounded-full shadow-md">
                        Deluxe HS
                      </span>
                    </div>
                  </div>

                  {/* Highlights Box below image */}
                  <div className="relative rounded-2xl p-4 bg-pink-50/70 border border-pink-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#DB2777] block">
                          Faisalabad's Choice
                        </span>
                        <h3 className="text-xl font-serif font-bold text-gray-900 mt-0.5">
                          Executive Makeover & Hair Studio
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center text-[#EC4899] shrink-0">
                        <Heart className="w-5 h-5 fill-[#EC4899]" />
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-pink-900/90 pt-2 border-t border-pink-200/60">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#EC4899] shrink-0" />
                        <span>Bridal Barat & Nikkah HD Airbrush Makeovers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#EC4899] shrink-0" />
                        <span>Hair Extenso & Keratin Protein Botox</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#EC4899] shrink-0" />
                        <span>Executive Fruit Waxing & Hydra Glow Facials</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Guarantee */}
                  <div className="flex items-center gap-2 text-[11px] text-pink-900/80 pt-1 border-t border-pink-100">
                    <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Direct WhatsApp & phone booking support available</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 p-3.5 rounded-2xl border border-pink-200 shadow-lg flex items-center gap-3 hidden sm:flex z-20">
                <div className="w-9 h-9 rounded-full bg-[#EC4899] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold">100% Certified Salon</p>
                  <p className="text-[10px] text-[#DB2777] font-semibold">People's Colony No 1, Faisalabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

