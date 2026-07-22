import React, { useState } from 'react';
import { Star, MessageCircle, CheckCircle, Plus, Sparkles, X } from 'lucide-react';
import { INITIAL_REVIEWS } from '../data/salonData';
import { Review } from '../types';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);

  // New review state
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

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FFF8F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CF5376]/15 border border-[#FF8559]/30 text-[#CF5376] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FF8559]" />
              Client Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A0912]">
              Loved by Thousands of Clients
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Read real reviews from brides and beauty lovers across Pakistan.
            </p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white text-xs font-bold shadow-md hover:scale-105 transition cursor-pointer flex items-center gap-1.5 self-start md:self-auto border border-[#FFB578]/40"
          >
            <Plus className="w-4 h-4 text-white" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-[#FF8559]/20 shadow-md space-y-4 flex flex-col justify-between hover:border-[#FF8559] transition-all"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#FF8559]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rev.rating ? 'fill-[#FF8559] text-[#FF8559]' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400">{rev.date}</span>
                </div>

                <p className="text-xs text-gray-700 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#1A0912] flex items-center gap-1">
                    {rev.clientName}
                    {rev.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                  </h4>
                  <span className="text-[10px] text-[#CF5376] font-medium">{rev.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-2xl border border-[#FF8559] shadow-2xl p-6 space-y-4 relative">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-serif font-bold text-lg text-[#1A0912]">Write a Review</h3>
              <button
                onClick={() => setShowForm(false)}
                className="p-1 rounded-full text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g., Mahnoor Khan"
                  className="w-full p-2.5 bg-[#FFF8F6] border border-[#FF8559]/30 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FF8559]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Service Experienced</label>
                <input
                  type="text"
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="e.g., Fruit Waxing / Keratin Botox"
                  className="w-full p-2.5 bg-[#FFF8F6] border border-[#FF8559]/30 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FF8559]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${star <= rating ? 'fill-[#FF8559] text-[#FF8559]' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Feedback</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with Deluxe HS..."
                  className="w-full p-2.5 bg-[#FFF8F6] border border-[#FF8559]/30 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FF8559]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#E65447] via-[#FF8559] to-[#FFB578] text-white font-bold text-xs rounded-xl shadow cursor-pointer border border-[#FFB578]/40"
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
