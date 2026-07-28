import React, { useState } from 'react';
import { Star, MessageCircle, CheckCircle, Plus, Sparkles, X, ChevronRight, Search, Heart, ThumbsUp } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/salonData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);
  const [filterQuery, setFilterQuery] = useState('');

  // New review form state
  const [clientName, setClientName] = useState('');
  const [service, setService] = useState('Fruit Waxing & Facial');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: 'rev-' + Date.now(),
      clientName: clientName.trim(),
      service,
      rating,
      comment: comment.trim(),
      date: 'Just now',
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setShowForm(false);
    setClientName('');
    setComment('');
  };

  // Display initial 3 reviews on home
  const initialDisplayReviews = reviews.slice(0, 3);

  // Filtered reviews inside All Reviews modal
  const modalReviews = reviews.filter((rev) => {
    if (!filterQuery) return true;
    const q = filterQuery.toLowerCase();
    return (
      rev.clientName.toLowerCase().includes(q) ||
      rev.service.toLowerCase().includes(q) ||
      rev.comment.toLowerCase().includes(q)
    );
  });

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-b from-[#FFF0F5] via-[#FFF8FA] to-[#FFFFFF] relative overflow-hidden">
      {/* Gentle background decorative blur circles */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/80 border border-pink-200 text-[#DB2777] text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
              Client Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Loved by Thousands of Clients
            </h2>
            <p className="text-xs sm:text-sm text-pink-900/70 mt-1.5 max-w-xl leading-relaxed">
              Read real reviews from brides and beauty lovers across Pakistan.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setShowForm(true)}
              className="px-5 py-2.5 rounded-full bg-white text-[#DB2777] hover:bg-pink-50 text-xs font-bold shadow-sm hover:shadow-md transition cursor-pointer flex items-center gap-2 border border-pink-200"
            >
              <Plus className="w-4 h-4 text-[#EC4899]" />
              <span>Write a Review</span>
            </button>

            <button
              onClick={() => setShowAllModal(true)}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white text-xs font-bold shadow-md hover:shadow-lg hover:scale-[1.02] transition cursor-pointer flex items-center gap-1.5 border border-pink-300"
            >
              <span>See All ({reviews.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Initial 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialDisplayReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md hover:border-pink-300 transition-all group"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-pink-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-pink-50 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1">
                    {rev.clientName}
                    {rev.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />}
                  </h4>
                  <span className="inline-block mt-0.5 text-[10px] text-[#DB2777] font-semibold bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                    {rev.service}
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-pink-50 flex items-center justify-center text-pink-400 group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button Row */}
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border border-white/40"
          >
            <span>See More Reviews ({reviews.length} Total)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ALL REVIEWS SEPARATE MODAL (Next Reviews Box) */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pink-950/40 backdrop-blur-md p-4 sm:p-6 animate-fade-in">
          <div className="bg-white w-full max-w-4xl max-h-[88vh] rounded-3xl border border-pink-200 shadow-2xl flex flex-col overflow-hidden relative">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-pink-100/80 via-rose-50 to-pink-50 border-b border-pink-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm border border-pink-200 flex items-center justify-center text-[#EC4899]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-gray-900 flex items-center gap-2">
                    Client Reviews
                    <span className="text-xs font-sans font-bold bg-[#EC4899] text-white px-2.5 py-0.5 rounded-full">
                      {reviews.length} Verified
                    </span>
                  </h3>
                  <p className="text-xs text-pink-900/70">What our clients say about Deluxe HS The Salon</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Search / Filter input */}
                <div className="relative flex-1 sm:w-60">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-pink-400" />
                  <input
                    type="text"
                    value={filterQuery}
                    onChange={(e) => setFilterQuery(e.target.value)}
                    placeholder="Search reviews or services..."
                    className="w-full pl-8 pr-3 py-1.5 bg-white border border-pink-200 rounded-full text-xs text-gray-800 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                  />
                  {filterQuery && (
                    <button
                      onClick={() => setFilterQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setShowAllModal(false)}
                  className="w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-pink-50 transition shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Reviews List */}
            <div className="p-6 overflow-y-auto space-y-4 bg-[#FFF9FA] flex-1">
              {modalReviews.length === 0 ? (
                <div className="text-center py-12 text-pink-900/60 text-xs">
                  No reviews match your search query "{filterQuery}".
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {modalReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="bg-white p-5 rounded-2xl border border-pink-100 shadow-sm hover:border-pink-300 transition-all space-y-3 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-1 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-pink-400 font-medium">{rev.date}</span>
                        </div>

                        <p className="text-xs text-gray-700 leading-relaxed italic">
                          "{rev.comment}"
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-pink-50 flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-gray-900 flex items-center gap-1">
                            {rev.clientName}
                            {rev.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                          </h4>
                          <span className="text-[10px] font-semibold text-[#DB2777]">
                            {rev.service}
                          </span>
                        </div>
                        <ThumbsUp className="w-3.5 h-3.5 text-pink-300" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-pink-100 flex items-center justify-between shrink-0">
              <span className="text-xs text-pink-900/70 font-medium hidden sm:inline">
                Showing {modalReviews.length} of {reviews.length} reviews
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => {
                    setShowAllModal(false);
                    setShowForm(true);
                  }}
                  className="px-4 py-2 rounded-full bg-pink-100 hover:bg-pink-200 text-[#DB2777] text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Write Review</span>
                </button>

                <button
                  onClick={() => setShowAllModal(false)}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white text-xs font-bold shadow transition"
                >
                  Close Box
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Write Review Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pink-950/40 backdrop-blur-md p-4">
          <div className="bg-white w-full max-w-md rounded-3xl border border-pink-200 shadow-2xl p-6 space-y-4 relative">
            <div className="flex items-center justify-between border-b border-pink-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EC4899]" />
                <h3 className="font-serif font-bold text-lg text-gray-900">Write a Review</h3>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-pink-900 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g., Mahnoor Khan"
                  className="w-full p-2.5 bg-pink-50/50 border border-pink-200 rounded-xl text-xs text-gray-800 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-900 uppercase mb-1">Service Experienced</label>
                <input
                  type="text"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g., Fruit Waxing / Keratin Botox / Nikkah Makeup"
                  className="w-full p-2.5 bg-pink-50/50 border border-pink-200 rounded-xl text-xs text-gray-800 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-900 uppercase mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition hover:scale-110"
                    >
                      <Star
                        className={`w-6 h-6 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-pink-900 uppercase mb-1">Your Feedback</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with Deluxe HS The Salon..."
                  className="w-full p-2.5 bg-pink-50/50 border border-pink-200 rounded-xl text-xs text-gray-800 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-[#EC4899]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#EC4899] via-[#F472B6] to-[#FB7185] text-white font-bold text-xs rounded-xl shadow-md cursor-pointer hover:shadow-lg transition border border-white/30"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

