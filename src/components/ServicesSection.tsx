import React, { useState, useMemo } from 'react';
import { Search, Clock, Sparkles, Filter, Tag, MessageSquare } from 'lucide-react';
import { SALON_SERVICES, SALON_SOCIAL_LINKS } from '../data/salonData';
import { ServiceCategory } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ServiceCategory[] = [
    'All',
    'Hair Care',
    'Bridal & Makeup',
    'Skin & Face',
    'Nails & Spa',
    'Waxing',
  ];

  const filteredServices = useMemo(() => {
    return SALON_SERVICES.filter((service) => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FFF8F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#CF5376]/15 border border-[#FF8559]/30 text-[#CF5376] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8559]" />
            Deluxe HS Executive Menu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1A0912]">
            Our Beauty & Styling Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Choose from our specialized hair, bridal, face facial, fruit waxing, nail care, and body massage packages. Contact us directly on WhatsApp to inquire or schedule your visit.
          </p>
        </div>

        {/* Search Bar & Category Filters Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-[#FF8559]/20 mb-10 space-y-4">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#E65447]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g., fruit wax, keratin, balayage, facial)..."
              className="w-full pl-12 pr-4 py-3 bg-[#FFF8F6] border border-[#FF8559]/30 rounded-full text-sm text-[#1A0912] focus:outline-none focus:ring-2 focus:ring-[#FF8559] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                    active
                      ? 'bg-gradient-to-r from-[#CF5376] via-[#E65447] to-[#FF8559] text-white font-bold border-[#FF8559] shadow-md'
                      : 'bg-[#FFF8F6] text-[#1A0912]/80 hover:bg-[#E65447]/10 border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium">No services matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-[#E65447] underline font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const waText = encodeURIComponent(`Hello Deluxe HS Salon! I am interested in inquiring about ${service.name}.`);
              const waUrl = `https://wa.me/923013928585?text=${waText}`;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 border border-[#FF8559]/20 hover:border-[#FF8559] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Popular Ribbon if popular */}
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#FF8559] to-[#E65447] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl border-l border-b border-[#FFB578]/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#FFB578]" />
                      Popular
                    </div>
                  )}

                  <div>
                    {/* Category Badge & Duration */}
                    <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1 font-medium text-[#CF5376] bg-[#CF5376]/10 px-2.5 py-0.5 rounded-full">
                        <Tag className="w-3 h-3" />
                        {service.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-3.5 h-3.5 text-[#FF8559]" />
                        {service.durationMinutes} mins
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-[#1A0912] group-hover:text-[#E65447] transition-colors mb-2">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Special Note / Fruit Wax highlight */}
                    {service.specialNote && (
                      <div className="mb-4 bg-[#FFB578]/20 border-l-2 border-[#E65447] p-2 rounded-r-md text-[11px] text-[#1A0912] font-medium">
                        ✨ {service.specialNote}
                      </div>
                    )}
                  </div>

                  {/* Footer: Consultation & Contact Button */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-2">
                    <span className="text-xs text-[#CF5376] font-medium bg-[#CF5376]/10 px-3 py-1 rounded-full">
                      Custom Consultation
                    </span>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white text-xs font-bold shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition cursor-pointer border border-[#FFB578]/40"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-white" />
                      <span>Inquire Details</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
