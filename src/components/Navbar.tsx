import React, { useState } from 'react';
import { Sparkles, Search, ShoppingBag, ExternalLink, Menu, X, Heart, Flame } from 'lucide-react';
import { ProductCategory } from '../types';
import { IDUS_STORE_URL, SMARTSTORE_URL } from '../data/products';

interface NavbarProps {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenBrandStory: () => void;
  onOpenChannelGuide: () => void;
  onOpenCustomOrder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onOpenBrandStory,
  onOpenChannelGuide,
  onOpenCustomOrder
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);

  const categories: { label: string; value: ProductCategory }[] = [
    { label: '전체 작품', value: 'all' },
    { label: '캔들/방향제', value: '캔들/방향제' },
    { label: '디퓨저/룸스프레이', value: '디퓨저/룸스프레이' },
    { label: '오브제/소품', value: '오브제/소품' },
    { label: '선물세트', value: '선물세트' },
    { label: '답례품/커스텀', value: '답례품/커스텀' },
  ];

  return (
    <header id="main-header" className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EAE5DC] transition-all">
      {/* Top Notice Bar */}
      <div className="bg-[#2C2C2C] text-[#FDFBF7] py-1.5 px-4 text-xs font-light text-center tracking-wide flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 text-[#D4AF37]">
          <Sparkles className="w-3.5 h-3.5" />
          100% 천연 식물성 소이왁스 핸드메이드
        </span>
        <span className="hidden sm:inline text-neutral-400">|</span>
        <span className="hidden sm:inline text-neutral-300">정성 가득 선물 포장 &amp; 캘리그라피 카드 무료 서비스</span>
      </div>

      {/* Main Navbar Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); onSelectCategory('all'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#F5EFE6] border border-[#D4AF37]/40 flex items-center justify-center text-[#9E7D2E] group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 fill-[#D4AF37]/30 text-[#B89035]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-kr text-2xl font-bold tracking-tight text-[#1A1A1A]">
                  초언니들
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#B89035] font-semibold border border-[#D4AF37]/50 rounded px-1.5 py-0.5 bg-[#FAF7F0]">
                  Atelier
                </span>
              </div>
              <p className="text-[11px] text-[#7A746B] tracking-wider font-light">
                CHO SISTERS HANDCRAFTED
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => onSelectCategory(cat.value)}
                className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-[#2C2C2C] text-[#FDFBF7] shadow-sm'
                    : 'text-[#5C564C] hover:text-[#1A1A1A] hover:bg-[#F3EDE2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Direct Channel Jump Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Inline Search Input or Toggle */}
            <div className="relative">
              {showSearchInput ? (
                <div className="flex items-center bg-[#F3EDE2] rounded-full px-3 py-1.5 border border-[#DFD7CB] w-48 sm:w-64">
                  <Search className="w-4 h-4 text-[#8C8275] mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="작품명, 향기, 소품 검색..."
                    className="bg-transparent text-xs sm:text-sm text-[#2C2C2C] focus:outline-none w-full placeholder:text-[#A89E90]"
                    autoFocus
                  />
                  <button 
                    onClick={() => { setShowSearchInput(false); onSearchChange(''); }}
                    className="text-[#8C8275] hover:text-[#2C2C2C] ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowSearchInput(true)}
                  className="p-2 rounded-full text-[#5C564C] hover:text-[#1A1A1A] hover:bg-[#F3EDE2] transition-colors cursor-pointer"
                  title="작품 검색"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quick Channel Direct Buttons (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-[#EAE5DC]">
              {/* Idus Button */}
              <a
                href={IDUS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#FF5B35] bg-[#FFF2EE] border border-[#FFDCD3] hover:bg-[#FFE6DF] transition-colors shadow-xs"
                title="초언니들 아이디어스 샵으로 이동"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5B35]"></span>
                아이디어스
                <ExternalLink className="w-3 h-3 text-[#FF5B35]/70" />
              </a>

              {/* Naver SmartStore Button */}
              <a
                href={SMARTSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#03C75A] bg-[#EEFBF3] border border-[#C6F1D7] hover:bg-[#E0F8EA] transition-colors shadow-xs"
                title="초언니들 네이버 스마트스토어로 이동"
              >
                <span className="w-2 h-2 rounded-full bg-[#03C75A]"></span>
                스마트스토어
                <ExternalLink className="w-3 h-3 text-[#03C75A]/70" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#5C564C] hover:text-[#1A1A1A] hover:bg-[#F3EDE2]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE5DC] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold text-[#8C8275] uppercase tracking-wider px-3 py-1">카테고리</p>
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  onSelectCategory(cat.value);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg font-medium transition-colors ${
                  activeCategory === cat.value
                    ? 'bg-[#2C2C2C] text-[#FDFBF7]'
                    : 'text-[#4A453E] hover:bg-[#EFE9DF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#EAE5DC] space-y-2">
            <p className="text-[11px] font-semibold text-[#8C8275] uppercase tracking-wider px-3">빠른 링크 &amp; 구매 채널</p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={IDUS_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-[#FF5B35] bg-[#FFF2EE] border border-[#FFDCD3]"
              >
                아이디어스 샵
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={SMARTSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-bold text-[#03C75A] bg-[#EEFBF3] border border-[#C6F1D7]"
              >
                스마트스토어 샵
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={() => { onOpenBrandStory(); setMobileMenuOpen(false); }}
                className="flex-1 text-xs py-2 px-3 text-[#5C564C] bg-white border border-[#EAE5DC] rounded-lg text-center"
              >
                브랜드 이야기
              </button>
              <button
                onClick={() => { onOpenChannelGuide(); setMobileMenuOpen(false); }}
                className="flex-1 text-xs py-2 px-3 text-[#5C564C] bg-white border border-[#EAE5DC] rounded-lg text-center"
              >
                채널별 혜택 안내
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
