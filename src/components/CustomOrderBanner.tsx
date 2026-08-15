import React, { useState } from 'react';
import { Gift, Sparkles, MessageCircle, ExternalLink, Check, Mail, Phone } from 'lucide-react';
import { IDUS_STORE_URL, SMARTSTORE_URL } from '../data/products';

export const CustomOrderBanner: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="custom-order-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-[#2C2C2C] to-[#1A1A1A] text-[#FDFBF7] rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xl">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold tracking-wide border border-white/10">
              <Gift className="w-3.5 h-3.5" />
              <span>WEDDING &amp; CORPORATE GIFT SERVICE</span>
            </div>
            
            <h2 className="font-serif-kr text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
              웨딩 답례품 &amp; 기업·단체 맞춤 주문
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-light leading-relaxed">
              결혼식, 돌잔치, 개업식, 기업 VIP 선물 등 특별한 순간을 위한 맞춤 라벨링 &amp; 캘리그라피 감사 카드를 무료로 제작해 드립니다. 
              10개 이상 수량별 특별 할인과 프리미엄 개별 포장을 제공합니다.
            </p>

            {/* Benefit Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-neutral-300">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                1:1 맞춤 네임 라벨 디자인 무료
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                원하는 향기 선택 &amp; 블렌딩
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                개별 쇼핑백 &amp; 감사 카드 동봉
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
            <a
              href={IDUS_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#FF5B35] hover:bg-[#E84B26] text-white font-bold text-sm shadow-md transition-all text-center"
            >
              <span>아이디어스 1:1 메시지 상담</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={SMARTSTORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#03C75A] hover:bg-[#02A74B] text-white font-bold text-sm shadow-md transition-all text-center"
            >
              <span>스마트스토어 톡톡 상담</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
