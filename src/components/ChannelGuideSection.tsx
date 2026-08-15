import React from 'react';
import { ExternalLink, Check, Gift, CreditCard, MessageSquare, Truck, Sparkles, Tag } from 'lucide-react';
import { CHANNEL_BENEFITS } from '../data/products';

export const ChannelGuideSection: React.FC = () => {
  return (
    <section id="channel-guide-section" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D23] bg-[#FAF5EB] border border-[#EBE1D0] px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Shopping Guide</span>
        </div>
        <h2 className="font-serif-kr text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          어디서 구매할지 고민되시나요?
        </h2>
        <p className="text-sm sm:text-base text-[#6E675B] max-w-2xl mx-auto font-light">
          아이디어스와 네이버 스마트스토어는 동일한 정품 수제 작품을 판매하고 있습니다.
          자주 사용하시는 플랫폼과 선호하시는 결제 혜택에 따라 자유롭게 선택하세요.
        </p>
      </div>

      {/* Side-by-Side Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* IDUS CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFDCD3] hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between space-y-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFF2EE] rounded-bl-full pointer-events-none -z-0" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#FF5B35] bg-[#FFF2EE] px-3 py-1 rounded-full border border-[#FFDCD3]">
                {CHANNEL_BENEFITS.idus.badge}
              </span>
              <span className="text-xs font-semibold text-[#8C8275]">작가 소통 &amp; 커스텀</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#2C2C2C] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5B35]"></span>
                {CHANNEL_BENEFITS.idus.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#665E52]">
                {CHANNEL_BENEFITS.idus.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-2.5 pt-2">
              {CHANNEL_BENEFITS.idus.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4338]">
                  <div className="w-4 h-4 rounded-full bg-[#FFF0EC] text-[#FF5B35] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#F5EDE8] relative z-10">
            <a
              href={CHANNEL_BENEFITS.idus.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#FF5B35] hover:bg-[#E84B26] text-white font-bold text-sm shadow-md transition-all group"
            >
              <span>아이디어스 초언니들 샵 바로가기</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* SMARTSTORE CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#C6F1D7] hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between space-y-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEFBF3] rounded-bl-full pointer-events-none -z-0" />
          
          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#03C75A] bg-[#EEFBF3] px-3 py-1 rounded-full border border-[#C6F1D7]">
                {CHANNEL_BENEFITS.smartstore.badge}
              </span>
              <span className="text-xs font-semibold text-[#8C8275]">NPay 포인트 &amp; 간편결제</span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif-kr text-xl sm:text-2xl font-bold text-[#2C2C2C] flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#03C75A]"></span>
                {CHANNEL_BENEFITS.smartstore.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#665E52]">
                {CHANNEL_BENEFITS.smartstore.description}
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-2.5 pt-2">
              {CHANNEL_BENEFITS.smartstore.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4338]">
                  <div className="w-4 h-4 rounded-full bg-[#E5F9ED] text-[#03C75A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#E8F6EE] relative z-10">
            <a
              href={CHANNEL_BENEFITS.smartstore.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#03C75A] hover:bg-[#02A74B] text-white font-bold text-sm shadow-md transition-all group"
            >
              <span>스마트스토어 초언니들 샵 바로가기</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
};
