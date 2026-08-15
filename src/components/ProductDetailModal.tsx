import React, { useState, useEffect } from 'react';
import { X, Star, Sparkles, ExternalLink, ShieldCheck, Heart, Copy, Check, Info, Flame, Package, Clock, Leaf } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  useEffect(() => {
    setSelectedImageIdx(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  const formatPrice = (price: number) => price.toLocaleString('ko-KR') + '원';

  const copyToClipboard = (url: string, type: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(type);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FDFBF7] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-[#EAE5DC] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-[#2C2C2C] shadow-md border border-[#EAE5DC] transition-transform hover:scale-105 cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 p-5 sm:p-7 md:p-9">
          
          {/* Left Column: Image Gallery */}
          <div className="md:col-span-6 space-y-3 sm:space-y-4">
            
            {/* Main Featured Photo */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#F5EFE6] border border-[#EAE5DC] shadow-sm">
              <img
                src={product.images[selectedImageIdx] || product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                {product.badges.map((badge, idx) => (
                  <span key={idx} className="bg-[#2C2C2C]/90 backdrop-blur-xs text-[#FDFBF7] text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                      selectedImageIdx === idx
                        ? 'border-[#8C6D23] shadow-md scale-102'
                        : 'border-[#EAE5DC] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="썸네일" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}

            {/* Craftsmanship Assurance Box */}
            <div className="bg-[#FAF7F0] border border-[#E8DFCة] border-[#E8DFD0] rounded-2xl p-4 space-y-2 text-xs text-[#635B4E]">
              <div className="flex items-center gap-1.5 font-bold text-[#8C6D23]">
                <ShieldCheck className="w-4 h-4" />
                <span>초언니들 수제 공예 약속</span>
              </div>
              <p className="leading-relaxed">
                미국산 100% 천연 골든 소이왁스와 IFRA 인증 향료를 사용하여 유해물질이나 두통 없이 깨끗하게 연소됩니다.
              </p>
            </div>

          </div>

          {/* Right Column: Details, Scent Pyramid, and Multi-channel Buy Buttons */}
          <div className="md:col-span-6 flex flex-col justify-between space-y-6 pt-4 md:pt-0">
            
            <div className="space-y-4">
              
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#8C6D23] bg-[#FAF5EB] border border-[#EBE1D0] px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-[#2C2C2C] font-semibold">
                  <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>{product.rating}</span>
                  <span className="text-[#8C8275] font-normal">({product.reviewCount}개 후기)</span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h2 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#1A1A1A] leading-snug">
                  {product.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#736B5E]">
                  {product.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 py-2 border-y border-[#EAE5DC]">
                <span className="text-2xl font-bold font-display text-[#1A1A1A]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm text-[#9E9587] line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    {product.discountRate && (
                      <span className="text-sm font-bold text-[#C84528]">
                        {product.discountRate}% 할인
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Scent Pyramid / Aroma Notes */}
              {product.scentNote && (
                <div className="bg-[#FAF7F2] border border-[#E9E0D3] rounded-2xl p-3.5 sm:p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2C2C2C]">
                    <span className="flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-[#8C6D23]" />
                      향기 노트 (Scent Profile)
                    </span>
                  </div>
                  
                  {product.scentNote.description && (
                    <p className="text-xs text-[#6B6456] italic">
                      "{product.scentNote.description}"
                    </p>
                  )}

                  <div className="grid grid-cols-1 gap-1 text-xs pt-1">
                    {product.scentNote.top && (
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-[#8C6D23] w-12 shrink-0">TOP:</span>
                        <span className="text-[#4F493E]">{product.scentNote.top}</span>
                      </div>
                    )}
                    {product.scentNote.middle && (
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-[#8C6D23] w-12 shrink-0">MID:</span>
                        <span className="text-[#4F493E]">{product.scentNote.middle}</span>
                      </div>
                    )}
                    {product.scentNote.base && (
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-[#8C6D23] w-12 shrink-0">BASE:</span>
                        <span className="text-[#4F493E]">{product.scentNote.base}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="space-y-1.5 text-xs sm:text-sm text-[#544E44] leading-relaxed">
                <p>{product.fullDescription || product.description}</p>
              </div>

              {/* Product Specifications Table */}
              <div className="border border-[#EAE5DC] rounded-xl p-3 bg-white text-xs space-y-1.5">
                {product.specs.capacity && (
                  <div className="flex justify-between py-0.5 border-b border-[#F5EFE6]">
                    <span className="text-[#8C8275]">용량 / 연소시간</span>
                    <span className="font-medium text-[#2C2C2C]">{product.specs.capacity}</span>
                  </div>
                )}
                {product.specs.material && (
                  <div className="flex justify-between py-0.5 border-b border-[#F5EFE6]">
                    <span className="text-[#8C8275]">주요 성분</span>
                    <span className="font-medium text-[#2C2C2C]">{product.specs.material}</span>
                  </div>
                )}
                {product.specs.origin && (
                  <div className="flex justify-between py-0.5 border-b border-[#F5EFE6]">
                    <span className="text-[#8C8275]">제조/원산지</span>
                    <span className="font-medium text-[#2C2C2C]">{product.specs.origin}</span>
                  </div>
                )}
                {product.specs.packaging && (
                  <div className="flex justify-between py-0.5">
                    <span className="text-[#8C8275]">기본 포장</span>
                    <span className="font-medium text-[#2C2C2C]">{product.specs.packaging}</span>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Multi-Channel Direct Purchase Actions */}
            <div className="space-y-3 pt-4 border-t border-[#EAE5DC]">
              <div className="text-center">
                <p className="text-xs font-semibold text-[#544D42]">
                  구매를 진행할 마켓 채널을 선택하세요
                </p>
                <p className="text-[11px] text-[#8C8275]">
                  클릭 시 공식 스토어의 해당 상품 페이지로 이동합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Idus Purchase Button */}
                <div className="space-y-1">
                  <a
                    id={`modal-btn-idus-${product.id}`}
                    href={product.links.idus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-[#FFF2EE] hover:bg-[#FFE5DE] border border-[#FFCDC1] text-[#FF5B35] transition-all shadow-xs group cursor-pointer"
                  >
                    <div className="text-left">
                      <span className="text-[10px] font-bold tracking-wider uppercase block text-[#FF5B35]/80">
                        idus 작가 샵
                      </span>
                      <span className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#FF5B35]">
                        아이디어스에서 구매
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF5B35] shadow-xs group-hover:scale-110 transition-transform shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                  <div className="flex items-center justify-between px-2 text-[10px] text-[#8C8275]">
                    <span>작가 1:1 메시지 &amp; 쿠폰</span>
                    <button
                      onClick={() => copyToClipboard(product.links.idus, 'idus')}
                      className="text-[#FF5B35] hover:underline flex items-center gap-0.5"
                    >
                      {copiedLink === 'idus' ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      {copiedLink === 'idus' ? '복사됨' : '링크복사'}
                    </button>
                  </div>
                </div>

                {/* SmartStore Purchase Button */}
                <div className="space-y-1">
                  <a
                    id={`modal-btn-smartstore-${product.id}`}
                    href={product.links.smartstore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-[#EEFBF3] hover:bg-[#DEF6E7] border border-[#BCEFD1] text-[#03C75A] transition-all shadow-xs group cursor-pointer"
                  >
                    <div className="text-left">
                      <span className="text-[10px] font-bold tracking-wider uppercase block text-[#03C75A]/80">
                        Naver 공식 스토어
                      </span>
                      <span className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#03C75A]">
                        스마트스토어에서 구매
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#03C75A] shadow-xs group-hover:scale-110 transition-transform shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </a>
                  <div className="flex items-center justify-between px-2 text-[10px] text-[#8C8275]">
                    <span>NPay 최대 5% 포인트 적립</span>
                    <button
                      onClick={() => copyToClipboard(product.links.smartstore, 'smartstore')}
                      className="text-[#03C75A] hover:underline flex items-center gap-0.5"
                    >
                      {copiedLink === 'smartstore' ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
                      {copiedLink === 'smartstore' ? '복사됨' : '링크복사'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
