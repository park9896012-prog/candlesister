import React from 'react';
import { Star, MessageSquare, Sparkles, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS, IDUS_STORE_URL, SMARTSTORE_URL } from '../data/products';

export const ReviewSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F0] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D23] bg-white border border-[#EBE1D0] px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Customer Reviews</span>
            </div>
            <h2 className="font-serif-kr text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              고객님들이 전해주신 따뜻한 이야기
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#7A7163]">실제 구매자 후기 평점:</span>
            <div className="flex items-center gap-1 px-3 py-1 bg-white rounded-full border border-[#EAE5DC] font-bold text-sm text-[#2C2C2C]">
              <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              <span>4.9 / 5.0</span>
              <span className="text-[#9E9587] font-normal text-xs">(1,200+건)</span>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 border border-[#EAE5DC] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating & Channel Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      rev.channel === 'idus'
                        ? 'bg-[#FFF2EE] text-[#FF5B35] border-[#FFDCD3]'
                        : 'bg-[#EEFBF3] text-[#03C75A] border-[#C6F1D7]'
                    }`}
                  >
                    {rev.channel === 'idus' ? '아이디어스 구매' : '스마트스토어 구매'}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-[#524B40] leading-relaxed line-clamp-4">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-3 border-t border-[#F5EFE6] text-xs">
                <p className="font-semibold text-[#2C2C2C] truncate">{rev.product}</p>
                <div className="flex items-center justify-between text-[11px] text-[#9E9587] mt-0.5">
                  <span>{rev.author} 님</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
