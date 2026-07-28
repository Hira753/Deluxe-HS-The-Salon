import React, { useState } from 'react';
import { Sparkles, Heart, MessageSquare, X, Eye, ShieldCheck, Check, Award } from 'lucide-react';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Barat & Red Bridals' | 'Soft & Nikkah Glam' | 'Bridal Hairstyles & Gajras';
  description: string;
  highlights: string[];
}

export const REAL_BRIDAL_GALLERY: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Champagne Gold Nikkah Soft Glam',
    category: 'Soft & Nikkah Glam',
    description: 'Soft pink blush eyelids, dewy glass skin, elegant Kundan Matha Patti and pearl necklace draping.',
    highlights: ['Airbrush Soft Glam', 'Pearl & Kundan Setting', 'Dewy Glass Finish'],
  },
  {
    id: 'g-2',
    title: 'Emerald Green Velvet Walima Look',
    category: 'Soft & Nikkah Glam',
    description: 'Emerald green velvet bridal attire with mint tikka, subtle smokey winged liner, and sculpted cheeks.',
    highlights: ['Smokey Winged Eye', 'Velvet Draping', 'Precision Contour'],
  },
  {
    id: 'g-3',
    title: 'Royal Red & Gold Barat Signature Bride',
    category: 'Barat & Red Bridals',
    description: 'Classic crimson red Barat bridal makeup with deep gold lids, rich maroon lips, and heavy Matha Patti setting.',
    highlights: ['Deep Maroon Lips', 'Traditional Matha Patti', 'Waterproof HD Base'],
  },
  {
    id: 'g-4',
    title: 'Mint Green Mint & Pearl Shehnaai Bride',
    category: 'Soft & Nikkah Glam',
    description: 'Mint green embellished bridal ensemble with fresh gajra hair strand braid and subtle matha patti.',
    highlights: ['Gajra Braid Styling', 'Mint & Gold Palette', 'Natural Glow Prep'],
  },
  {
    id: 'g-5',
    title: 'Crimson Velvet Bridal Dupatta Draping',
    category: 'Barat & Red Bridals',
    description: 'Deep red velvet bridal look with red roses in bun updo, intricate Kundan necklace and Matha Patti.',
    highlights: ['Red Rose Hair Bun', 'Heavy Dupatta Setting', 'Mirror-Shine Lips'],
  },
  {
    id: 'g-6',
    title: 'Silver Diamond Soft Engagement Look',
    category: 'Soft & Nikkah Glam',
    description: 'Metallic lavender grey eyeshadow, sharp eyeliner, silver diamond jewellery and side-swept waves.',
    highlights: ['Metallic Eye Accent', 'Side-Swept Curls', 'Radiant Highlight'],
  },
  {
    id: 'g-7',
    title: 'Cascading Curly Hair with Fresh Baby\'s Breath',
    category: 'Bridal Hairstyles & Gajras',
    description: 'Long voluminous curls with delicate white Gypsophila (baby\'s breath) flowers tucked into half-up twist.',
    highlights: ['Fresh Gypsophila Flowers', 'Voluminous Curls', 'Half-Up Twist'],
  },
  {
    id: 'g-8',
    title: 'Crown Braided Updo Bun with Pearl Pins',
    category: 'Bridal Hairstyles & Gajras',
    description: 'Intricate Dutch crown braid merging into a low textured floral bun embellished with delicate pearl accents.',
    highlights: ['Dutch Crown Braid', 'Low Textured Bun', 'Pearl Pin Accent'],
  },
  {
    id: 'g-9',
    title: 'Gajra Floral Updo Braid for Nikkah',
    category: 'Bridal Hairstyles & Gajras',
    description: 'Traditional jasmine gajra strings layered into a neat braided bun with crown volume for Nikkah brides.',
    highlights: ['Jasmine Gajra Wrap', 'Nikkah Traditional Hair', 'Crown Volume Base'],
  },
];

export const BridalGallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Barat & Red Bridals' | 'Soft & Nikkah Glam' | 'Bridal Hairstyles & Gajras'>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeTab === 'All'
    ? REAL_BRIDAL_GALLERY
    : REAL_BRIDAL_GALLERY.filter((item) => item.category === activeTab);

  return (
    <section id="bridal-gallery" className="py-16 md:py-20 bg-gradient-to-b from-[#FFF7FA] to-[#FFF0F5] text-gray-800 relative border-t border-b border-pink-200 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-200 text-[#DB2777] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            Deluxe HS Real Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
            Bridal Transformations & Hairstyles
          </h2>
          <p className="text-pink-950/80 text-sm sm:text-base font-normal leading-relaxed">
            Explore authentic transformations created by Master Stylist Hira Shah and team — featuring Barat bridal glams, Nikkah soft makeups, and handcrafted floral hairstyles.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['All', 'Barat & Red Bridals', 'Soft & Nikkah Glam', 'Bridal Hairstyles & Gajras'] as const).map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white border-pink-300 shadow-sm scale-105'
                    : 'bg-white text-gray-700 hover:bg-pink-50 border-pink-200'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const waMsg = encodeURIComponent(`Hello Deluxe HS Salon! I saw your bridal look "${item.title}" in your gallery catalog and would like to inquire about availability.`);
            const waUrl = `https://wa.me/923013928585?text=${waMsg}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-pink-200 overflow-hidden shadow-sm hover:border-[#EC4899] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Header Feature Box */}
                <div
                  onClick={() => setSelectedItem(item)}
                  className="p-6 bg-gradient-to-br from-pink-50 via-white to-pink-50/50 border-b border-pink-100 cursor-pointer relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-pink-100 text-[#DB2777] text-[11px] font-bold px-3 py-1 rounded-full border border-pink-200 flex items-center gap-1 shadow-xs">
                      <Heart className="w-3 h-3 text-[#EC4899] fill-[#EC4899]" />
                      <span>{item.category}</span>
                    </span>
                    <span className="text-[10px] text-[#DB2777] font-bold uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#EC4899]" /> Signature Look
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#EC4899] transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Content Details */}
                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlight Bullets */}
                  <div className="pt-2 border-t border-pink-100 flex flex-wrap gap-1.5">
                    {item.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-pink-50 text-[#DB2777] px-2.5 py-1 rounded-full border border-pink-200"
                      >
                        ✓ {hl}
                      </span>
                    ))}
                  </div>

                  {/* WhatsApp Inquiry Button */}
                  <div className="pt-3 border-t border-pink-100 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="text-xs text-[#DB2777] hover:text-[#EC4899] font-bold underline flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details View</span>
                    </button>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white text-xs font-bold shadow-xs flex items-center gap-1.5 transition cursor-pointer border border-pink-300"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-white" />
                      <span>Inquire Look</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-pink-200 max-w-2xl w-full p-6 sm:p-8 overflow-hidden shadow-2xl relative my-auto space-y-5">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-pink-50 hover:bg-pink-100 text-gray-700 flex items-center justify-center border border-pink-200 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="inline-block bg-pink-100 text-[#DB2777] text-xs font-bold px-3 py-1 rounded-full border border-pink-200">
                {selectedItem.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
                {selectedItem.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-[#DB2777] block uppercase tracking-wider">
                  Transformation Highlights
                </span>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {selectedItem.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-pink-50 p-4 rounded-2xl border border-pink-200 text-xs text-pink-950 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#EC4899] shrink-0" />
                <span>Styling by Master Stylist Hira Shah & Senior Technicians at Deluxe HS Faisalabad.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setSelectedItem(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition"
              >
                Close Details
              </button>

              <a
                href={`https://wa.me/923013928585?text=${encodeURIComponent(`Hello Deluxe HS Salon! I want to inquire about availability for the "${selectedItem.title}" bridal look.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white text-xs font-bold shadow-md border border-pink-300 flex items-center justify-center gap-2 cursor-pointer transition"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Inquire this Look on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

