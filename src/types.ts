export type ProductCategory = 
  | 'all'
  | '캔들/방향제'
  | '디퓨저/룸스프레이'
  | '오브제/소품'
  | '선물세트'
  | '답례품/커스텀';

export interface ProductScentNote {
  top?: string;
  middle?: string;
  base?: string;
  description?: string;
}

export interface ProductLink {
  idus: string;
  smartstore: string;
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discountRate?: number;
  category: '캔들/방향제' | '디퓨저/룸스프레이' | '오브제/소품' | '선물세트' | '답례품/커스텀';
  description: string;
  fullDescription: string;
  images: string[];
  badges: ('BEST' | 'NEW' | '선물추천' | '100% 핸드메이드' | '한정수량' | '답례품인기')[];
  scentTags: string[];
  scentNote?: ProductScentNote;
  specs: {
    capacity?: string;
    burnTime?: string;
    material?: string;
    origin?: string;
    packaging?: string;
  };
  craftNotes?: string[];
  rating: number;
  reviewCount: number;
  links: ProductLink;
  isCustomizable?: boolean;
}

export interface ChannelInfo {
  name: 'idus' | 'smartstore';
  displayName: string;
  accentColor: string;
  bgColor: string;
  textColor: string;
  badgeText: string;
  benefits: string[];
  url: string;
}
