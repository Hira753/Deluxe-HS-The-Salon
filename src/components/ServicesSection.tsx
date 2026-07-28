import React, { useState, useMemo } from 'react';
import { Search, Clock, Sparkles, Tag, MessageSquare } from 'lucide-react';
import { SALON_SERVICES } from '../data/salonData';
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
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-[#FFF8FA] to-[#FFF0F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-200 text-[#DB2777] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
            Deluxe HS Executive Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900">
            Our Beauty & Styling Services
          </h2>
          <p className="text-pink-950/80 text-sm sm:text-base leading-relaxed">
            Choose from our specialized hair, bridal, face facial, fruit waxing, nail care, and body massage packages. Contact us directly on WhatsApp to inquire or schedule your visit.
          </p>
        </div>

        {/* Search Bar & Category Filters Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-pink-200 mb-10 space-y-4">
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#EC4899]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g., fruit wax, keratin, balayage, facial)..."
              className="w-full pl-12 pr-4 py-3 bg-pink-50/50 border border-pink-200 rounded-full text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#EC4899] transition"
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
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    active
                      ? 'bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white border-pink-300 shadow-sm'
                      : 'bg-white text-gray-700 hover:bg-pink-50 border-pink-200'
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
          <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-pink-200">
            <p className="text-gray-500 font-medium">No services matching "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-3 text-xs text-[#EC4899] underline font-bold"
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
                  className="bg-white rounded-3xl p-6 border border-pink-200 hover:border-[#EC4899] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top Popular Ribbon if popular */}
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-[#EC4899] to-[#F472B6] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-2xl border-l border-b border-pink-300 flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-3 h-3 text-pink-100" />
                      Popular
                    </div>
                  )}

                  <div>
                    {/* Category Badge & Duration */}
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="inline-flex items-center gap-1 font-semibold text-[#DB2777] bg-pink-100 px-3 py-1 rounded-full">
                        <Tag className="w-3 h-3 text-[#EC4899]" />
                        {service.category}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#EC4899]" />
                        {service.durationMinutes} mins
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#EC4899] transition-colors mb-2">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Special Note / Fruit Wax highlight */}
                    {service.specialNote && (
                      <div className="mb-4 bg-pink-50 border-l-3 border-[#EC4899] p-2.5 rounded-r-xl text-[11px] text-pink-950 font-medium">
                        ✨ {service.specialNote}
                      </div>
                    )}
                  </div>

                  {/* Footer: Consultation & Contact Button */}
                  <div className="pt-4 border-t border-pink-100 flex items-center justify-between mt-2">
                    <span className="text-xs text-[#DB2777] font-semibold bg-pink-50 px-3 py-1 rounded-full">
                      Custom Consultation
                    </span>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white text-xs font-bold shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition cursor-pointer border border-pink-300"
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

