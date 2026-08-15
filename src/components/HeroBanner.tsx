import React from 'react';
import { Sparkles, ArrowDown, ExternalLink, ShieldCheck, Heart, Award, Star } from 'lucide-react';
import { IDUS_STORE_URL, SMARTSTORE_URL } from '../data/products';

interface HeroBannerProps {
  onExploreClick: () => void;
  onOpenBrandStory: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreClick, onOpenBrandStory }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F3EB] via-[#FDFBF7] to-[#FDFBF7] pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-[#EAE5DC]">
      {/* Background Decorative Blur & Grain Pattern */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#EFE6D5]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F5EADB]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Editorial & Messaging */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E5DAC8] text-[#8C6D23] text-xs font-semibold tracking-wide shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>HANDMADE SOY CANDLE &amp; SCENT CRAFT</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="font-serif-kr text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.25]">
                느리지만 정직한 <br />
                <span className="text-[#8C6D23] underline decoration-[#D4AF37]/40 decoration-wavy decoration-1 underline-offset-8">
                  자매의 수제 공예
                </span>
                로 빚은 향기
              </h1>
              <p className="text-[#615A4F] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                <strong>'초언니들'</strong>은 100% 천연 식물성 골든 소이왁스와 엄선된 향료로
                매일 정성껏 캔들과 라이프스타일 오브제를 붓습니다. 
                공간을 채우는 따스한 불빛과 맑은 향기를 만나보세요.
              </p>
            </div>

            {/* Multi-Channel Direct Store Jump Banner */}
            <div className="bg-[#FAF7F0] border border-[#E6DDCE] rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#575045] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                  원하시는 구매 채널을 선택하세요
                </span>
                <span className="text-[11px] text-[#8C8275]">전 상품 실시간 정품 연동</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* Idus Direct CTA */}
                <a
                  href={IDUS_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-white hover:bg-[#FFF6F3] border border-[#FFDCD3] hover:border-[#FF5B35] rounded-xl transition-all group shadow-2xs"
                >
                  <div className="text-left">
                    <span className="text-[10px] font-semibold text-[#FF5B35] tracking-wider uppercase block">
                      idus 작가 샵
                    </span>
                    <span className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#FF5B35] transition-colors">
                      아이디어스에서 구매
                    </span>
                    <span className="text-[11px] text-[#8C8275] block mt-0.5">
                      작가 쿠폰 &amp; VIP 무료배송
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#FFF2EE] flex items-center justify-center text-[#FF5B35] group-hover:scale-110 transition-transform shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>

                {/* SmartStore Direct CTA */}
                <a
                  href={SMARTSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-white hover:bg-[#F2FCF6] border border-[#C6F1D7] hover:border-[#03C75A] rounded-xl transition-all group shadow-2xs"
                >
                  <div className="text-left">
                    <span className="text-[10px] font-semibold text-[#03C75A] tracking-wider uppercase block">
                      Naver 공식 스토어
                    </span>
                    <span className="text-sm font-bold text-[#2C2C2C] group-hover:text-[#03C75A] transition-colors">
                      스마트스토어에서 구매
                    </span>
                    <span className="text-[11px] text-[#8C8275] block mt-0.5">
                      NPay 최대 5% 적립
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#EEFBF3] flex items-center justify-center text-[#03C75A] group-hover:scale-110 transition-transform shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2C2C2C] hover:bg-[#1A1A1A] text-[#FDFBF7] font-medium text-sm rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>전체 작품 갤러리 둘러보기</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenBrandStory}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F5EFE6] text-[#4A453E] border border-[#D8CEBE] font-medium text-sm rounded-full transition-colors cursor-pointer"
              >
                <span>아틀리에 이야기</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EAE5DC] text-center lg:text-left">
              <div className="space-y-0.5">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#8C6D23] font-bold text-sm sm:text-base">
                  <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>4.9 / 5.0</span>
                </div>
                <p className="text-[11px] text-[#7A746B]">아이디어스 고객 만족도</p>
              </div>
              
              <div className="space-y-0.5">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#8C6D23] font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-4 h-4 text-[#8C6D23]" />
                  <span>100% 천연</span>
                </div>
                <p className="text-[11px] text-[#7A746B]">골든 소이 왁스 사용</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center justify-center lg:justify-start gap-1 text-[#8C6D23] font-bold text-sm sm:text-base">
                  <Award className="w-4 h-4 text-[#8C6D23]" />
                  <span>IFRA 인증</span>
                </div>
                <p className="text-[11px] text-[#7A746B]">안전 프리미엄 조향</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Artwork Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Featured Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group bg-[#EAE5DC]">
                <img
                  src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
                  alt="초언니들 시그니처 캔들"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                
                {/* Overlay Text Tag */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="inline-block px-2.5 py-1 rounded bg-[#D4AF37]/90 text-white text-[11px] font-bold tracking-wide backdrop-blur-xs">
                    HANDMADE SIGNATURE
                  </span>
                  <h3 className="font-serif-kr text-xl font-bold">초언니들 시그니처 소이 캔들</h3>
                  <p className="text-xs text-white/80 line-clamp-1">우드윅의 타닥타닥 소리와 함께하는 온전한 휴식</p>
                </div>
              </div>

              {/* Floating Mini Highlight Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-[#EAE5DC] max-w-[210px] sm:max-w-[230px] hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-[#EAE5DC]">
                  <img
                    src="https://images.unsplash.com/photo-1608181831434-2e6b77fd8981?auto=format&fit=crop&w=300&q=80"
                    alt="달항아리 캔들"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#8C6D23] uppercase">Craft Object</span>
                  <h4 className="font-bold text-xs text-[#2C2C2C] truncate">달항아리 세라믹 캔들</h4>
                  <p className="text-[10px] text-[#7A746B]">수제 도자기 공예품</p>
                </div>
              </div>

              {/* Floating Rating Pill */}
              <div className="absolute top-4 -right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg border border-[#EAE5DC] flex items-center gap-1.5 text-xs font-bold text-[#2C2C2C]">
                <Heart className="w-3.5 h-3.5 fill-[#FF5B35] text-[#FF5B35]" />
                <span>1,200+ 후기 만족</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
