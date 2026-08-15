import React, { useState, useMemo } from 'react';
import { Sparkles, SlidersHorizontal, Search, RotateCcw, Check, ArrowUpDown } from 'lucide-react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenDetail: (product: Product) => void;
}

type SortOption = 'popular' | 'newest' | 'priceAsc' | 'priceDesc' | 'reviews';

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onOpenDetail
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [selectedBadgeFilter, setSelectedBadgeFilter] = useState<string | null>(null);

  const categories: { label: string; value: ProductCategory }[] = [
    { label: '전체 보기', value: 'all' },
    { label: '차량용 방향제', value: '차량용 방향제' },
    { label: '답례품', value: '답례품' },
    { label: '개업ㆍ집들이 선물', value: '개업ㆍ집들이 선물' },
    { label: '시즌 선물', value: '시즌 선물' },
  ];

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter(p => p.categories && p.categories.includes(activeCategory));
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.scentTags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Badge filter
    if (selectedBadgeFilter) {
      if (selectedBadgeFilter === '커스텀가능') {
        result = result.filter(p => p.isCustomizable);
      } else {
        result = result.filter(p => p.badges.includes(selectedBadgeFilter as any));
      }
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        result.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      case 'newest':
        result.sort((a, b) => (b.badges.includes('NEW') ? 1 : 0) - (a.badges.includes('NEW') ? 1 : 0));
        break;
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [products, activeCategory, searchQuery, selectedBadgeFilter, sortBy]);

  return (
    <section id="products-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D23] bg-[#FAF5EB] border border-[#E9DFCD] px-3 py-1 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Craft Works</span>
        </div>
        <h2 className="font-serif-kr text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A]">
          초언니들 핸드크래프트 컬렉션
        </h2>
        <p className="text-sm sm:text-base text-[#6E675B] max-w-2xl mx-auto font-light">
          아이디어스와 스마트스토어에서 만날 수 있는 수제 소이 캔들, 아로마 디퓨저, 도자기 오브제입니다.
        </p>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => onSelectCategory(cat.value)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeCategory === cat.value
                ? 'bg-[#2C2C2C] text-[#FDFBF7] shadow-md scale-102'
                : 'bg-white text-[#5C564C] border border-[#E5DACB] hover:border-[#2C2C2C] hover:text-[#1A1A1A]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Secondary Filter & Sort & Search Bar */}
      <div className="bg-[#FAF7F0] border border-[#EAE5DC] rounded-2xl p-3 sm:p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Quick Tag Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5 w-full md:w-auto">
          <span className="text-xs font-semibold text-[#807669] mr-1 hidden sm:inline">태그 필터:</span>
          {['BEST', 'NEW', '선물추천', '100% 핸드메이드', '커스텀가능'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedBadgeFilter(selectedBadgeFilter === tag ? null : tag)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                selectedBadgeFilter === tag
                  ? 'bg-[#8C6D23] text-white border-[#8C6D23] font-semibold shadow-2xs'
                  : 'bg-white text-[#635B4F] border-[#E2D8CC] hover:bg-[#F2ECE1]'
              }`}
            >
              {tag}
            </button>
          ))}

          {selectedBadgeFilter && (
            <button
              onClick={() => setSelectedBadgeFilter(null)}
              className="text-xs text-[#9E9484] hover:text-[#2C2C2C] flex items-center gap-1 ml-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              초기화
            </button>
          )}
        </div>

        {/* Counter & Sort Select */}
        <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto text-xs">
          <span className="text-[#7A7163] whitespace-nowrap">
            총 <strong className="text-[#2C2C2C] font-bold">{filteredProducts.length}</strong>개의 작품
          </span>

          <div className="flex items-center gap-1.5 bg-white border border-[#E2D8CC] rounded-xl px-3 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8C8275]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent text-xs text-[#2C2C2C] focus:outline-none cursor-pointer font-medium"
            >
              <option value="popular">인기순 (평점/리뷰)</option>
              <option value="newest">신상품순</option>
              <option value="priceAsc">낮은 가격순</option>
              <option value="priceDesc">높은 가격순</option>
              <option value="reviews">리뷰 많은순</option>
            </select>
          </div>
        </div>

      </div>

      {/* Active Search Query Notice */}
      {searchQuery && (
        <div className="mb-6 flex items-center justify-between bg-[#FFF9EE] border border-[#F4E2BD] px-4 py-2.5 rounded-xl text-xs sm:text-sm text-[#8C6D23]">
          <span>
            <strong>'{searchQuery}'</strong> 검색 결과 ({filteredProducts.length}건)
          </span>
          <button
            onClick={() => onSearchChange('')}
            className="text-xs font-semibold underline hover:text-[#5E4711] cursor-pointer"
          >
            검색어 지우기
          </button>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetail={onOpenDetail}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border border-[#EAE5DC] space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#F5EFE6] text-[#8C6D23] mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif-kr text-lg font-bold text-[#2C2C2C]">
              조건에 맞는 작품을 찾을 수 없습니다
            </h3>
            <p className="text-xs sm:text-sm text-[#7A7163]">
              다른 카테고리나 검색어로 다시 시도해보세요.
            </p>
          </div>
          <button
            onClick={() => {
              onSelectCategory('all');
              onSearchChange('');
              setSelectedBadgeFilter(null);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#2C2C2C] text-white text-xs font-medium rounded-full cursor-pointer hover:bg-[#1A1A1A]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            전체 작품 보기
          </button>
        </div>
      )}

    </section>
  );
};
