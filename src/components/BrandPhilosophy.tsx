import React from 'react';
import { Sparkles, Flower2, HeartHandshake, Gift, Flame, CheckCircle2 } from 'lucide-react';
import { BRAND_VALUES } from '../data/products';

export const BrandPhilosophy: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#8C6D23]" />;
      case 'Flower2':
        return <Flower2 className="w-6 h-6 text-[#8C6D23]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#8C6D23]" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-[#8C6D23]" />;
      default:
        return <Flame className="w-6 h-6 text-[#8C6D23]" />;
    }
  };

  return (
    <section id="brand-story-section" className="py-14 sm:py-20 bg-[#F7F3EB] border-y border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Story Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest text-[#8C6D23] uppercase bg-[#EFE6D5] px-3.5 py-1 rounded-full border border-[#DED2BF]">
            CRAFTSMANSHIP &amp; PHILOSOPHY
          </span>
          <h2 className="font-serif-kr text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
            "손끝의 온기로 빚어내는 하루의 쉼"
          </h2>
          <p className="text-sm sm:text-base text-[#615A4E] leading-relaxed font-light">
            <strong>초언니들</strong>은 빠르고 기계적인 대량 생산 대신,
            하나하나 손으로 붓고 다듬는 느린 공예의 가치를 믿습니다. 
            하루의 끝, 지친 마음에 작은 불빛과 따스한 향기가 스며들 수 있도록
            가장 순수한 재료만을 정직하게 담습니다.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_VALUES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-xs rounded-2xl p-6 border border-[#E8DFD1] hover:border-[#D4AF37]/50 hover:shadow-lg transition-all duration-300 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF5EB] border border-[#E9DEC9] flex items-center justify-center">
                {getIcon(item.icon)}
              </div>
              <h3 className="font-serif-kr text-base sm:text-lg font-bold text-[#2C2C2C]">
                {item.title}
              </h3>
              <p className="text-xs text-[#6B6355] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Craft Process Notice */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFD1] flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-bold text-[#8C6D23]">
              <CheckCircle2 className="w-4 h-4" />
              <span>오더메이드 신선 캔들 보증</span>
            </div>
            <h4 className="font-serif-kr text-lg font-bold text-[#2C2C2C]">
              오래 쌓아둔 재고를 판매하지 않습니다
            </h4>
            <p className="text-xs sm:text-sm text-[#6E6658]">
              초언니들은 아이디어스와 스마트스토어 주문 확인 후 매일 공방에서 신선하게 왁스를 녹여 부어냅니다. 
              가장 풍성하고 맑은 첫 발향을 경험해보세요.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-center px-4 py-2 bg-[#F9F5EC] rounded-xl border border-[#EAE0D0]">
              <span className="text-lg font-bold text-[#2C2C2C] font-display">100%</span>
              <p className="text-[11px] text-[#7A7163]">순수 소이왁스</p>
            </div>
            <div className="text-center px-4 py-2 bg-[#F9F5EC] rounded-xl border border-[#EAE0D0]">
              <span className="text-lg font-bold text-[#2C2C2C] font-display">0%</span>
              <p className="text-[11px] text-[#7A7163]">파라핀 / 화학방부제</p>
            </div>
            <div className="text-center px-4 py-2 bg-[#F9F5EC] rounded-xl border border-[#EAE0D0]">
              <span className="text-lg font-bold text-[#2C2C2C] font-display">4.9★</span>
              <p className="text-[11px] text-[#7A7163]">누적 구매 만족도</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
