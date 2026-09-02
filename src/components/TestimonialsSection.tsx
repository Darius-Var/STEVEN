import React, { useState } from 'react';
import { Star, Quote, ShieldCheck, Award, ThumbsUp, CheckCircle2, ChevronLeft, ChevronRight, Building, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-cyan-600" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Commercial Operators Across BC
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Read what restaurant directors, food processors, and cold storage warehouse managers say about our speed, pricing, and workmanship.
          </p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              id={`testimonial-card-${review.id}`}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-cyan-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Rating & Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
                    {review.serviceType}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic relative">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Info Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {review.author}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {review.role} • <span className="text-slate-700 font-medium">{review.company}</span>
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                  <span>{review.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            
            <div className="flex flex-col items-center justify-center p-2">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center mb-3 border border-cyan-500/30 text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Licensed & Insured</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Technical Safety BC Class A Refrigeration Contractor & WorkSafeBC Verified
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center mb-3 border border-cyan-500/30 text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">Serving BC Businesses</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Over 15+ years of dedicated commercial and industrial refrigeration mastery
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-2 pt-6 sm:pt-2">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center mb-3 border border-cyan-500/30 text-cyan-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white">100% Satisfaction Guarantee</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Work done right the first time with comprehensive labor and parts warranties
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
