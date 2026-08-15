import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory } from './types';

const BrandPhilosophy = lazy(() => import('./components/BrandPhilosophy').then(module => ({ default: module.BrandPhilosophy })));
const ChannelGuideSection = lazy(() => import('./components/ChannelGuideSection').then(module => ({ default: module.ChannelGuideSection })));
const ReviewSection = lazy(() => import('./components/ReviewSection').then(module => ({ default: module.ReviewSection })));
const CustomOrderBanner = lazy(() => import('./components/CustomOrderBanner').then(module => ({ default: module.CustomOrderBanner })));

export default function Storefront() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products', err);
        setLoading(false);
      });
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('products-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBrandStory = () => {
    const el = document.getElementById('brand-story-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenChannelGuide = () => {
    const el = document.getElementById('channel-guide-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCustomOrder = () => {
    const el = document.getElementById('custom-order-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C2C2C]">
      {/* Navigation Bar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          const el = document.getElementById('products-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim()) {
            const el = document.getElementById('products-section');
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }}
        onOpenBrandStory={handleOpenBrandStory}
        onOpenChannelGuide={handleOpenChannelGuide}
        onOpenCustomOrder={handleOpenCustomOrder}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroBanner
          onExploreClick={handleExploreClick}
          onOpenBrandStory={handleOpenBrandStory}
        />

        {/* Product Collection Grid with Category and Search filtering */}
        <ProductGrid
          products={products}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenDetail={(prod) => setSelectedProduct(prod)}
        />

        <Suspense fallback={<div className="py-20 text-center text-[#D4AF37]">로딩 중...</div>}>
          {/* Brand Philosophy & Craft Notes */}
          <BrandPhilosophy />

          {/* Channel Buying Guide (Idus vs SmartStore Comparison) */}
          <ChannelGuideSection />

          {/* Verified Reviews Section */}
          <ReviewSection />

          {/* Wedding / Custom Bulk Order Service Banner */}
          <CustomOrderBanner />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
