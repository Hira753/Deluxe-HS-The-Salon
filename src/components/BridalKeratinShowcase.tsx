import React from 'react';
import { Sparkles, Check, Heart, MessageSquare } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';
import baratBrideImg from '../assets/images/bridal_barat_red_kundan_1784704790907.jpg';

export const BridalKeratinShowcase: React.FC = () => {
  const bridalWaUrl = `https://wa.me/923013928585?text=${encodeURIComponent('Hello Deluxe HS Salon! I would like to inquire about availability and details for the Deluxe Signature Bridal Look.')}`;
  const keratinWaUrl = `https://wa.me/923013928585?text=${encodeURIComponent('Hello Deluxe HS Salon! I would like to inquire about the Hair Extenso & Keratin Botox treatment.')}`;

  return (
    <section id="bridal-showcase" className="py-16 md:py-24 bg-[#1A0912] text-white relative overflow-hidden border-t border-b border-[#CF5376]/30">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#CF5376]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF8559]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CF5376]/20 border border-[#FF8559]/40 text-[#FFB578] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8559]" />
            Signature Specialties
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Signature Bridal & Hair Botox Spotlight
          </h2>
          <p className="text-rose-100/80 text-sm sm:text-base font-light">
            Our most sought-after signature treatments crafted by Master Stylist Hira Shah and senior technicians.
          </p>
        </div>

        {/* Feature Grid: 2 Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Signature Bridal */}
          <div className="bg-[#28101A] rounded-2xl border border-[#FF8559]/40 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#CF5376] transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden bg-black">
              <img
                src={baratBrideImg}
                alt="Signature Bridal Look Deluxe HS"
                className="w-full h-full object-cover object-center scale-[1.05] group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28101A] via-transparent to-transparent opacity-90" />
              <div className="absolute top-4 left-4 bg-[#CF5376] text-white text-xs font-bold px-3 py-1 rounded-full border border-[#FFB578]/50 flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                <span>Real Bridal Look</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Signature Bridal Makeover
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#CF5376]/20 border border-[#FF8559]/40 text-[#FFB578]">
                  Barat & Nikkah
                </span>
              </div>

              <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed">
                Complete bridal transformation including HD or Airbrush makeup, hairstyle, dupatta setting, jewelry placement, eyelash application, nail polish, and pre-bridal skin prep.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-rose-200/90">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Bridal Skin Consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Long-lasting Waterproof HD Finish</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dupatta & Heavy Jewelry Draping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Complimentary Touch-up Kit</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-rose-200/60">Duration: ~4 Hours</span>
                <a
                  href={bridalWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white text-xs font-bold shadow-lg hover:scale-105 transition cursor-pointer flex items-center gap-2 border border-[#FFB578]/40"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Inquire Bridal Booking</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Keratin Botox & Extenso */}
          <div className="bg-[#28101A] rounded-2xl border border-[#FF8559]/40 overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#CF5376] transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={SALON_IMAGES.keratin}
                alt="Hair Extenso Keratin Botox Deluxe HS"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#28101A] via-transparent to-transparent opacity-90" />
              <div className="absolute top-4 left-4 bg-[#E65447] text-white text-xs font-bold px-3 py-1 rounded-full border border-[#FFB578]/50 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB578]" />
                <span>Hair Reconstruct</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Hair Extenso & Keratin Botox
                </h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#E65447]/20 border border-[#FF8559]/40 text-[#FFB578]">
                  Advanced Care
                </span>
              </div>

              <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed">
                Say goodbye to frizz and split ends! Intensive protein infusion treatment repairing damaged cuticle layers, giving sleek, glossy, mirror-shine straight hair that lasts for months.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-rose-200/90">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Formaldehyde-Free Formula</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant Mirror Shine & Smoothness</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Frizz Shield for Up to 6 Months</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes After-Care Wash Guide</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-rose-200/60">Duration: ~3.5 Hours</span>
                <a
                  href={keratinWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white text-xs font-bold shadow-lg hover:scale-105 transition cursor-pointer flex items-center gap-2 border border-[#FFB578]/40"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Inquire Hair Botox</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
