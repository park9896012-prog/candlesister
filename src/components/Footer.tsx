import React from 'react';
import { Flame, ExternalLink, Heart, Instagram, MessageCircle, ShieldCheck, Mail } from 'lucide-react';
import { IDUS_STORE_URL, SMARTSTORE_URL } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242424] text-[#E5E0D8] pt-14 pb-12 border-t border-[#383838]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#383838]">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#333] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Flame className="w-4 h-4 fill-[#D4AF37]/40 text-[#D4AF37]" />
              </div>
              <div>
                <span className="font-serif-kr text-xl font-bold tracking-tight text-white">
                  초언니들
                </span>
                <span className="text-[10px] text-[#D4AF37] block font-light tracking-widest">
                  HANDMADE CRAFT ATELIER
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8A196] leading-relaxed max-w-md font-light">
              초언니들은 자매 작가가 함께 100% 천연 식물성 골든소이왁스와 엄선된 프리미엄 조향으로 정성을 다해 만드는 수제 캔들 &amp; 공예 라이프스타일 브랜드입니다.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] text-[#D4AF37] bg-[#2E2C28] px-2.5 py-1 rounded-md border border-[#484236]">
                <ShieldCheck className="w-3.5 h-3.5" />
                생활화학제품 안전기준 적합신고 완료
              </span>
            </div>
          </div>

          {/* Col 2: Official Store Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              공식 구매 채널
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={IDUS_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#FF7A5C] hover:text-[#FF967F] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B35]"></span>
                  아이디어스 (idus) 초언니들 샵
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={SMARTSTORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#2CDA7B] hover:text-[#52E897] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#03C75A]"></span>
                  네이버 스마트스토어 공식몰
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#8C8478]">
                * 두 채널 모두 작가 직접 제작 정품이 발송됩니다.
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Center & Workshop Info */}
          <div className="lg:col-span-4 space-y-3 text-xs text-[#A8A196]">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              고객센터 &amp; 단체주문 문의
            </h4>
            <div className="space-y-1">
              <p className="text-white font-bold text-sm">아이디어스 메시지 / 네이버 톡톡 상담</p>
              <p>운영 시간: 평일 10:00 ~ 18:00 (주말 및 공휴일 휴무)</p>
              <p>주말 주문 건은 월요일부터 순차 제작/발송됩니다.</p>
            </div>
            <p className="text-[11px] text-[#7A7368]">
              아틀리에 위치: 대한민국 서울시 마포구 연남동 핸드메이드 공방
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A7368] gap-4">
          <p>© {new Date().getFullYear()} 초언니들 (Cho Sisters). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with heart for peaceful moments
          </p>
        </div>

      </div>
    </footer>
  );
};
