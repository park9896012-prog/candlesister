import React from 'react';
import { ExternalLink, Star, Eye, Gift, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetail }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR') + '원';
  };

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'BEST':
        return 'bg-[#2C2C2C] text-[#FDFBF7] border-black/20';
      case 'NEW':
        return 'bg-[#8C6D23] text-white border-[#8C6D23]';
      case '선물추천':
        return 'bg-[#FAF0E6] text-[#8C5E35] border-[#EBD6C1]';
      case '100% 핸드메이드':
        return 'bg-[#F2ECE1] text-[#615440] border-[#DFD5C4]';
      default:
        return 'bg-[#F5EFEB] text-[#554D42] border-[#E2D8CD]';
    }
  };

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-[#EAE5DC] overflow-hidden hover:shadow-xl hover:border-[#D8CEBE] transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Container with Hover Quick View */}
      <div className="relative aspect-square overflow-hidden bg-[#F7F3ED] cursor-pointer" onClick={() => onOpenDetail(product)}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.badges.map((badge, idx) => (
            <span
              key={idx}
              className={`text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-md border shadow-2xs ${getBadgeStyle(badge)}`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Category Pill on Image */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-[10px] font-medium bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Quick View Hover Button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none sm:pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(product);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/90 backdrop-blur-md text-[#2C2C2C] text-xs font-semibold rounded-full shadow-md hover:bg-white hover:scale-105 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>작품 자세히보기</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        
        {/* Title, Subtitle, Scent Tags */}
        <div className="space-y-2">
          {/* Rating & Review */}
          <div className="flex items-center justify-between text-xs text-[#8C8275]">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              <span className="font-bold text-[#2C2C2C]">{product.rating}</span>
              <span>({product.reviewCount})</span>
            </div>
            {product.isCustomizable && (
              <span className="text-[10px] text-[#8C6D23] font-medium flex items-center gap-0.5">
                <Sparkles className="w-3 h-3" />
                각인/맞춤 가능
              </span>
            )}
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpenDetail(product)}
            className="font-serif-kr text-base sm:text-lg font-bold text-[#1A1A1A] group-hover:text-[#8C6D23] transition-colors line-clamp-2 leading-snug cursor-pointer"
          >
            {product.title}
          </h3>

          {/* Subtitle / Short Description */}
          <p className="text-xs text-[#666055] line-clamp-2 leading-relaxed">
            {product.subtitle}
          </p>

          {/* Scent Tags */}
          <div className="flex flex-wrap gap-1 pt-1">
            {product.scentTags.slice(0, 3).map((tag, idx) => (
              <span 
                key={idx} 
                className="text-[10px] text-[#7A7164] bg-[#F5EFE6] px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Dual Purchase Channels */}
        <div className="pt-3 border-t border-[#F0EBE2] space-y-3">
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-lg sm:text-xl font-bold font-display text-[#1A1A1A]">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-xs text-[#9E9587] line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                {product.discountRate && (
                  <span className="text-xs font-bold text-[#C84528]">
                    {product.discountRate}% OFF
                  </span>
                )}
              </>
            )}
          </div>

          {/* Dual Channel CTA Buttons (아이디어스 & 스마트스토어) */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {/* Idus Button */}
            <a
              id={`btn-idus-${product.id}`}
              href={product.links.idus}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-[#FF5B35] bg-[#FFF2EE] hover:bg-[#FFE3DC] border border-[#FFD5CA] transition-all shadow-2xs text-center"
              title="아이디어스에서 구매하기"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B35] shrink-0"></span>
              <span className="truncate">아이디어스</span>
              <ExternalLink className="w-3 h-3 text-[#FF5B35]/70 shrink-0" />
            </a>

            {/* SmartStore Button */}
            <a
              id={`btn-smartstore-${product.id}`}
              href={product.links.smartstore}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold text-[#03C75A] bg-[#EEFBF3] hover:bg-[#DDF6E8] border border-[#BFF0D3] transition-all shadow-2xs text-center"
              title="네이버 스마트스토어에서 구매하기"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#03C75A] shrink-0"></span>
              <span className="truncate">스마트스토어</span>
              <ExternalLink className="w-3 h-3 text-[#03C75A]/70 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
