import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, Link as LinkIcon, Image as ImageIcon, Save, Check } from 'lucide-react';
import { ProductCategory } from '../types';

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [idusUrl, setIdusUrl] = useState('');
  const [smartstoreUrl, setSmartstoreUrl] = useState('');

  // Scrape State
  const [scrapeUrl, setScrapeUrl] = useState('');
  const [scraping, setScraping] = useState(false);

  const ALL_CATEGORIES: ProductCategory[] = ['차량용 방향제', '답례품', '개업ㆍ집들이 선물', '시즌 선물'];

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchProducts();
  }, [navigate]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.error('Failed to fetch products', e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleScrape = async () => {
    if (!scrapeUrl) return alert('URL을 입력해주세요.');
    setScraping(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ url: scrapeUrl })
      });
      const data = await res.json();
      if (res.ok) {
        if (data.title) setTitle(data.title);
        if (data.description) setDescription(data.description);
        if (data.image) setImageUrl(data.image);
        // 기본 구매 링크로도 세팅
        if (scrapeUrl.includes('idus.com')) setIdusUrl(scrapeUrl);
        if (scrapeUrl.includes('smartstore.naver.com')) setSmartstoreUrl(scrapeUrl);
        alert('정보를 성공적으로 가져왔습니다.');
      } else {
        alert(data.error || '스크래핑 실패');
      }
    } catch (e) {
      alert('스크래핑 중 오류 발생');
    } finally {
      setScraping(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        setImageUrl(data.url);
      } else {
        alert('이미지 업로드 실패');
      }
    } catch (e) {
      alert('업로드 오류');
    }
  };

  const handleCategoryToggle = (cat: ProductCategory) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategories.length === 0) return alert('카테고리를 최소 1개 선택해주세요.');

    const newProduct = {
      title,
      subtitle,
      price: Number(price),
      categories: selectedCategories,
      description,
      fullDescription: description,
      images: [imageUrl],
      badges: ['NEW'],
      scentTags: [],
      scentNote: {},
      specs: {},
      craftNotes: [],
      rating: 0,
      reviewCount: 0,
      links: {
        idus: idusUrl,
        smartstore: smartstoreUrl
      }
    };

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newProduct)
      });
      
      if (res.ok) {
        alert('상품이 등록되었습니다.');
        setTitle(''); setSubtitle(''); setPrice(''); setDescription(''); setImageUrl('');
        setIdusUrl(''); setSmartstoreUrl(''); setSelectedCategories([]); setScrapeUrl('');
        fetchProducts(); // Refresh list
      } else {
        alert('등록 실패');
      }
    } catch (e) {
      alert('서버 오류');
    }
  };

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <header className="bg-white border-b border-[#EAE5DC] px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-bold text-[#1A1A1A] font-serif-kr">초언니들 관리자 대시보드</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-[#5C564C] hover:text-red-500">
          <LogOut className="w-4 h-4" /> 로그아웃
        </button>
      </header>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Add Product Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EAE5DC]">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#8C6D23]" /> 상품 신규 등록
            </h2>

            {/* URL Fetch Section */}
            <div className="bg-[#FAF7F0] p-4 rounded-xl mb-6 border border-[#E9DFCD]">
              <label className="block text-sm font-semibold text-[#5C564C] mb-2 flex items-center gap-1">
                <LinkIcon className="w-4 h-4" /> 외부 URL에서 정보 가져오기 (스크래핑)
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="아이디어스 또는 스마트스토어 상품 URL 입력"
                  className="flex-1 px-3 py-2 border border-[#EAE5DC] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8C6D23]"
                  value={scrapeUrl}
                  onChange={e => setScrapeUrl(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleScrape}
                  disabled={scraping}
                  className="px-4 py-2 bg-[#8C6D23] text-white rounded-lg text-sm font-medium hover:bg-[#70571C] disabled:opacity-50"
                >
                  {scraping ? '가져오는 중...' : '정보 불러오기'}
                </button>
              </div>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5C564C] mb-1">상품명</label>
                  <input type="text" required value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg text-sm focus:ring-2 focus:ring-[#8C6D23]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5C564C] mb-1">판매가 (원)</label>
                  <input type="number" required value={price} onChange={e => setPrice(e.target.value)} className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg text-sm focus:ring-2 focus:ring-[#8C6D23]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C564C] mb-1">서브타이틀 (요약 설명)</label>
                <input type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)} className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg text-sm focus:ring-2 focus:ring-[#8C6D23]" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C564C] mb-2">카테고리 (중복 선택 가능)</label>
                <div className="flex flex-wrap gap-2">
                  {ALL_CATEGORIES.map(cat => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => handleCategoryToggle(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors flex items-center gap-1 ${selectedCategories.includes(cat) ? 'bg-[#2C2C2C] text-white border-[#2C2C2C]' : 'bg-white text-[#5C564C] border-[#EAE5DC] hover:border-[#8C6D23]'}`}
                    >
                      {selectedCategories.includes(cat) && <Check className="w-3 h-3" />}
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C564C] mb-1">상품 설명</label>
                <textarea rows={3} value={description} onChange={e => setDescription(e.target.value)} className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg text-sm focus:ring-2 focus:ring-[#8C6D23]"></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5C564C] mb-1">아이디어스 연결 링크</label>
                  <input type="url" value={idusUrl} onChange={e => setIdusUrl(e.target.value)} placeholder="https://idus.com/..." className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg text-sm focus:ring-2 focus:ring-[#FF5B35]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5C564C] mb-1">스마트스토어 연결 링크</label>
                  <input type="url" value={smartstoreUrl} onChange={e => setSmartstoreUrl(e.target.value)} placeholder="https://smartstore.naver.com/..." className="w-full px-3 py-2 border border-[#EAE5DC] rounded-lg text-sm focus:ring-2 focus:ring-[#03C75A]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C564C] mb-1">대표 이미지</label>
                <div className="flex items-center gap-4">
                  {imageUrl && <img src={imageUrl} alt="preview" className="w-16 h-16 object-cover rounded-lg border border-[#EAE5DC]" />}
                  <label className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#EAE5DC] rounded-lg cursor-pointer hover:bg-[#F3EDE2] text-sm text-[#5C564C] transition-colors">
                    <ImageIcon className="w-4 h-4" /> 이미지 업로드
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  </label>
                  <span className="text-xs text-[#9E9484]">- 또는 스크래핑으로 자동 등록됩니다.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE5DC]">
                <button type="submit" className="flex items-center justify-center gap-2 w-full py-3 bg-[#2C2C2C] text-white rounded-xl font-bold hover:bg-[#1A1A1A] transition-colors">
                  <Save className="w-5 h-5" /> 상품 등록 완료
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right: Product List Preview */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EAE5DC]">
            <h2 className="text-lg font-bold mb-4 flex items-center justify-between">
              등록된 상품 목록
              <span className="text-xs bg-[#F3EDE2] px-2 py-1 rounded text-[#5C564C]">총 {products.length}건</span>
            </h2>
            <div className="space-y-3 max-h-[800px] overflow-y-auto pr-2">
              {products.map(p => (
                <div key={p.id} className="flex gap-3 p-3 border border-[#EAE5DC] rounded-xl hover:border-[#8C6D23] transition-colors">
                  <img src={p.images?.[0] || 'https://via.placeholder.com/60'} alt="" className="w-16 h-16 object-cover rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-[#1A1A1A] truncate">{p.title}</h3>
                    <p className="text-xs text-[#8C8275]">{p.price.toLocaleString()}원</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {p.categories?.map((c: string) => (
                        <span key={c} className="text-[10px] bg-[#FAF5EB] text-[#8C6D23] px-1.5 py-0.5 rounded border border-[#E9DFCD]">{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
