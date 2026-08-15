import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductGrid } from './components/ProductGrid';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { ChannelGuideSection } from './components/ChannelGuideSection';
import { ReviewSection } from './components/ReviewSection';
import { CustomOrderBanner } from './components/CustomOrderBanner';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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
          products={PRODUCTS}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onOpenDetail={(prod) => setSelectedProduct(prod)}
        />

        {/* Brand Philosophy & Craft Notes */}
        <BrandPhilosophy />

        {/* Channel Buying Guide (Idus vs SmartStore Comparison) */}
        <ChannelGuideSection />

        {/* Verified Reviews Section */}
        <ReviewSection />

        {/* Wedding / Custom Bulk Order Service Banner */}
        <CustomOrderBanner />
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
