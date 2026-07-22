import React from 'react';
import { Phone, Sparkles, Award, Star, CheckCircle2, ChevronRight, ShieldCheck, MessageSquare, MapPin } from 'lucide-react';
import { SALON_IMAGES, SALON_SOCIAL_LINKS } from '../data/salonData';

interface HeroProps {
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices }) => {
  return (
    <section className="relative bg-[#1A0912] text-white overflow-hidden py-12 md:py-20 lg:py-24 border-b border-[#CF5376]/30">
      {/* Background Image Overlay with Gradient */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
        <img
          src={SALON_IMAGES.hero}
          alt="Deluxe HS The Salon Luxury Interior"
          className="w-full h-full object-cover object-center scale-105 transform animate-fade-in"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0912] via-[#1A0912]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0912] via-transparent to-[#1A0912]/80" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#CF5376]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8559]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CF5376]/20 border border-[#FF8559]/40 text-[#FFB578] text-xs font-semibold tracking-wide shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8559] animate-pulse" />
                <span>Executive Beauty Salon & Bridal Studio Faisalabad</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[11px] font-semibold tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Certified Organic Products</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Welcome to <br />
              <span className="text-gradient-sunset">Deluxe HS The Salon</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-rose-100/90 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience pinnacle luxury in Pakistani bridal transformations, precision hair color balayage, keratin botox extenso treatments, organic fruit waxing, and rejuvenating hydra facials.
            </p>

            {/* Location & Contact Highlight */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#28101A] to-[#1A0912] border border-[#FF8559]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#FF8559] shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white">D-Ground, Near Faysal Hospital</p>
                  <p className="text-rose-200/80">People's Colony No 1, Faisalabad</p>
                </div>
              </div>
              <a
                href={`tel:${SALON_SOCIAL_LINKS.phone}`}
                className="shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#E65447] text-white text-xs font-bold border border-[#FFB578]/40 hover:bg-[#CF5376] transition"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0301-3928585</span>
              </a>
            </div>

            {/* Feature Highlights Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#CF5376]/20 border border-[#FF8559]/30 text-[#FFB578] text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8559]" />
                Signature Bridal Services
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#E65447]/20 border border-[#FF8559]/30 text-[#FFB578] text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8559]" />
                Executive Fruit Waxing
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF8559]/20 border border-[#FFB578]/30 text-[#FFB578] text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8559]" />
                Hair Extenso & Keratin Botox
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={SALON_SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white font-bold text-base shadow-xl shadow-[#FF8559]/20 hover:scale-[1.02] transition active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 group border border-[#FFB578]/40"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Contact Us / WhatsApp Inquiry</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-[#FFB578] hover:text-white font-medium text-base border border-[#FF8559]/30 backdrop-blur-sm transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View All Services Menu</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-serif font-bold text-[#FFB578]">31.3K</p>
                <p className="text-xs text-rose-200/80">Instagram Community</p>
              </div>
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#FF8559]">
                  <Star className="w-4 h-4 fill-[#FF8559]" />
                  <span className="text-xl font-serif font-bold text-white">5.0</span>
                </div>
                <p className="text-xs text-rose-200/80">Google Client Rating</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-bold text-[#E65447]">100%</p>
                <p className="text-xs text-rose-200/80">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card Frame with Palette Gradient */}
              <div className="rounded-2xl p-1 bg-gradient-to-b from-[#CF5376] via-[#E65447] to-[#FF8559] shadow-2xl">
                <div className="bg-[#1A0912] rounded-[14px] p-5 sm:p-6 space-y-5 overflow-hidden relative">
                  {/* Image showcase */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                      src={SALON_IMAGES.bridal}
                      alt="Deluxe HS Bridal Beauty"
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#FFB578] bg-black/60 px-2 py-0.5 rounded">
                          Signature Look
                        </span>
                        <h3 className="text-lg font-serif font-bold text-white">Bridal Makeover Studio</h3>
                      </div>
                      <span className="text-xs font-bold text-white bg-[#E65447] px-2.5 py-1 rounded-lg border border-[#FFB578]/40">
                        Custom Glam
                      </span>
                    </div>
                  </div>

                  {/* Secondary Highlight Box */}
                  <div className="bg-[#CF5376]/20 border border-[#FF8559]/30 rounded-xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#E65447] flex items-center justify-center border border-[#FFB578]/40 text-white">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-[#FFB578]">Executive Fruit Waxing</h4>
                        <p className="text-[11px] text-rose-200/80">Full Body Smooth Care</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-white bg-[#CF5376] px-2.5 py-1 rounded-md">
                      Special Care
                    </span>
                  </div>

                  {/* Contact Guarantee */}
                  <div className="flex items-center gap-2 text-[11px] text-rose-200/80 pt-1 border-t border-white/10">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct call & WhatsApp support for queries & timings</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#28101A] text-white p-3 rounded-xl border border-[#FF8559] shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-8 h-8 rounded-full bg-[#FF8559] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold">100% Original Products</p>
                  <p className="text-[10px] text-[#FFB578]">Executive Salon Faisalabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
