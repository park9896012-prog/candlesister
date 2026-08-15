import { Product } from '../types';

export const IDUS_STORE_URL = "https://www.idus.com/v2/search?keyword=%EC%B4%88%EC%96%B8%EB%8B%88%EB%93%A4&keyword_channel=user";
export const SMARTSTORE_URL = "https://smartstore.naver.com/candlesister_store?NaPm=ct%3Dmstxnlkr%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3D5d4448343ce0467d5caef70e987e85ac8c289d38";

export const PRODUCTS: Product[] = [
  {
    id: "prod-01",
    title: "초언니들 시그니처 소이 캔들 세트 (우드윅 & 골드 틴케이스)",
    subtitle: "은은한 향과 감성적인 타닥타닥 소리가 돋보이는 100% 천연 수제 소이 캔들",
    price: 25000,
    originalPrice: 29000,
    discountRate: 14,
    category: "개업ㆍ집들이 선물",
    description: "골든 소이 왁스와 프리미엄 프래그런스 오일로 정성껏 블렌딩하여 머리 아프지 않은 맑은 향을 선사합니다.",
    fullDescription: "초언니들의 베스트셀러 시그니처 캔들 세트입니다. 미국산 100% 천연 골든 소이 왁스만을 사용하여 유해 물질 걱정 없이 안심하고 태울 수 있습니다. 친환경 우드윅 심지를 적용하여 촛불을 켤 때마다 자작나무 장작이 타는 듯한 기분 좋은 ASMR 사운드를 즐기실 수 있습니다.",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572726729953-b0938f38bc5a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1596433809252-260c2745dfdd?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["BEST", "100% 핸드메이드", "선물추천"],
    scentTags: ["포레스트우드", "소프트코튼", "화이트머스크"],
    scentNote: {
      top: "베르가못, 신선한 소나무 잎",
      middle: "시더우드, 은방울꽃, 화이트로즈",
      base: "샌달우드, 앰버, 캐시미어 머스크",
      description: "비 온 뒤 숲속의 맑은 흙내음과 포근한 코튼의 잔향이 어우러진 시그니처 향"
    },
    specs: {
      capacity: "220g (약 45~50시간 연소)",
      burnTime: "약 50시간",
      material: "100% 골든 소이왁스, 천연 단풍나무 우드윅",
      origin: "대한민국 (초언니들 아틀리에 핸드메이드)",
      packaging: "크래프트 친환경 선물 박스 + 리본 패키징"
    },
    craftNotes: [
      "파라핀 및 인공 경화제를 전혀 첨가하지 않고 순수 수작업으로 붓습니다.",
      "주문 확인 후 갓 만든 캔들로 발송되어 신선한 발향을 자랑합니다.",
      "우드윅 심지는 매 사용 전 5mm로 커팅해 사용하시면 그을음 없이 깨끗합니다."
    ],
    rating: 4.9,
    reviewCount: 428,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    },
    isCustomizable: true
  },
  {
    id: "prod-02",
    title: "달항아리 세라믹 오브제 캔들 (도자기 홀더 포함)",
    subtitle: "한국 전통의 미를 담은 백자 달항아리 속 플로럴 우디 소이 캔들",
    price: 34000,
    originalPrice: 38000,
    discountRate: 11,
    category: "차량용 방향제",
    description: "핸드크래프트 도자기와 수제 캔들의 조화. 연소 후에는 다용도 화병이나 인테리어 오브제로 활용 가능합니다.",
    fullDescription: "흙의 온기가 느껴지는 핸드메이드 백자 도자기에 캔들을 부어 완성한 고급 오브제입니다. 캔들을 모두 태우고 난 뒤 뜨거운 물로 가볍게 세척하면 찻잔, 칫솔꽂이, 미니 화병 등 지속 가능한 라이프스타일 소품으로 영구 소장이 가능합니다.",
    images: [
      "https://images.unsplash.com/photo-1608181831434-2e6b77fd8981?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["BEST", "100% 핸드메이드", "한정수량"],
    scentTags: ["백련화향", "편백나무", "소프트앰버"],
    scentNote: {
      top: "연꽃잎, 맑은 그린티",
      middle: "히노끼 편백, 백합",
      base: "고목 나무향, 머스크",
      description: "고즈넉한 한옥 툇마루에서 바람에 실려오는 은은한 연꽃과 편백의 그윽함"
    },
    specs: {
      capacity: "280g (약 60시간 연소)",
      burnTime: "약 60시간",
      material: "백자 도자기, 100% 네이처 소이왁스, 최고급 스모크리스 면심지",
      origin: "대한민국 수제 도자기 공방 콜라보",
      packaging: "한지 패키징 & 전통 매듭 보자기 포장 옵션 가능"
    },
    craftNotes: [
      "물레 성형으로 빚은 도자기로 제품마다 미세한 곡선과 질감 차이가 있어 세상에 단 하나뿐입니다.",
      "환경호르몬이 전혀 검출되지 않는 식기용 백자토로 제작되었습니다."
    ],
    rating: 5.0,
    reviewCount: 189,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    },
    isCustomizable: true
  },
  {
    id: "prod-03",
    title: "보태니컬 플라워 왁스 타블렛 (옷장·방향 사셰)",
    subtitle: "천연 드라이플라워와 프리미엄 에센셜 오일로 굳힌 감성 방향제",
    price: 13500,
    originalPrice: 15000,
    discountRate: 10,
    category: "개업ㆍ집들이 선물",
    description: "불을 붙이지 않고 옷장, 신발장, 차량 등에 걸어두는 은은하고 감성적인 고체 방향제입니다.",
    fullDescription: "자연 건조한 수국, 유칼립투스, 미니 장미를 왁스 표면에 섬세하게 올려 장식한 왁스 타블렛입니다. 프랑스 IFRA 안전 인증 에센셜 오일을 사용하여 밀폐된 공간에서도 머리가 아프지 않고 기분 좋은 발향을 선사합니다.",
    images: [
      "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b8?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["선물추천", "100% 핸드메이드", "답례품인기"],
    scentTags: ["라벤더가든", "다우니코튼", "유칼립투스"],
    scentNote: {
      top: "유칼립투스, 라벤더 꽃망울",
      middle: "로즈마리, 화이트 플로럴",
      base: "클린 코튼, 바닐라 빈",
      description: "햇볕에 바싹 말린 깨끗한 리넨 침구와 향긋한 허브 정원의 싱그러움"
    },
    specs: {
      capacity: "약 85g (발향 기간 3~4개월)",
      material: "비즈왁스 & 소이왁스 블렌드, 드라이플라워, 코튼 스트랩",
      origin: "대한민국 핸드메이드",
      packaging: "개별 크래프트 윈도우 박스 포장"
    },
    craftNotes: [
      "생화의 색감이 가장 예쁠 때 정성스레 말려 꽃 한 송이씩 정성껏 배치합니다.",
      "직사광선이나 고온의 차량 내부를 피해주시면 오랜 기간 예쁜 모양과 향을 유지합니다."
    ],
    rating: 4.9,
    reviewCount: 312,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    },
    isCustomizable: true
  },
  {
    id: "prod-04",
    title: "초언니들 프리미엄 룸 & 패브릭 스프레이 150ml",
    subtitle: "공간과 섬유를 즉각적으로 맑고 향기롭게 바꿔주는 천연 탈취 아로마 미스트",
    price: 18000,
    originalPrice: 21000,
    discountRate: 14,
    category: "개업ㆍ집들이 선물",
    description: "사탕수수 발효 식물성 에탄올 베이스로 자극 없이 공간과 침구의 냄새를 99% 케어합니다.",
    fullDescription: "외출 전후 코트나 침구, 거실 패브릭에 2~3회 분사하여 싱그러운 호텔 스파의 무드를 연출해보세요. 항균 및 탈취 검사를 완료한 순한 성분으로 반려동물이나 아이가 있는 가정에서도 안심하고 사용할 수 있습니다.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["NEW", "선물추천"],
    scentTags: ["피그앤세이지", "상탈우드", "자몽바질"],
    scentNote: {
      top: "무화과 잎, 비터 그레이프프루트",
      middle: "클라리세이지, 시클라멘",
      base: "샌달우드, 시더, 베티버",
      description: "달콤 쌉싸름한 무화과 잎사귀와 세이지의 세련되고 감각적인 우디 그린 향"
    },
    specs: {
      capacity: "150ml (안개분사 미세 스프레이 헤드)",
      material: "사탕수수 식물성 알코올, 정제수, 식물 유래 계면활성제, 고급 향료",
      origin: "대한민국",
      packaging: "호박색 유리병 & 린넨 파우치 포함"
    },
    craftNotes: [
      "향수 등급의 고농축 조향으로 잔향이 8시간 이상 은은하게 지속됩니다.",
      "안개 분사 노즐을 장착하여 뭉침 없이 부드럽게 고르게 분사됩니다."
    ],
    rating: 4.8,
    reviewCount: 145,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    }
  },
  {
    id: "prod-05",
    title: "홈스테디 리드 디퓨저 200ml (우드 캡 & 리얼 플라워 스틱)",
    subtitle: "거실과 침실을 따뜻하고 고급스러운 무드로 채우는 감성 보태니컬 디퓨저",
    price: 28000,
    originalPrice: 32000,
    discountRate: 13,
    category: "개업ㆍ집들이 선물",
    description: "안전한 곡물 발효 베이스와 천연 우드 리드스틱으로 균일하고 자연스러운 발향을 선사합니다.",
    fullDescription: "매일 머무는 공간을 5성급 부티크 호텔의 로비처럼 연출해주는 홈스테디 디퓨저입니다. 묵직하고 모던한 유리 용기와 내추럴 월넛 우드 캡, 드라이 플라워 포인트 스틱 5개가 기본 동봉되어 인테리어 효과가 뛰어납니다.",
    images: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["BEST", "선물추천"],
    scentTags: ["호텔로비", "일랑일랑", "바질만다린"],
    scentNote: {
      top: "만다린, 라임, 베르가못",
      middle: "바질, 화이트 타임, 일랑일랑",
      base: "패출리, 베티버, 드라이 앰버",
      description: "신선한 시트러스와 허브 향기가 기분 좋은 활력을 북돋아주는 럭셔리 라운지 무드"
    },
    specs: {
      capacity: "200ml (사용 기간 약 2~3개월)",
      material: "곡물발효 베이스, 강화 유리용기, 섬유 리드스틱 5p + 플라워 스틱 2p",
      origin: "대한민국",
      packaging: "프리미엄 원통형 하드 기프트 케이스"
    },
    craftNotes: [
      "초기 사용 시 스틱을 2~3개 꽂아 발향 강도를 조절하세요.",
      "1~2주에 한 번씩 스틱을 뒤집어 주시면 풍성한 발향이 유지됩니다."
    ],
    rating: 4.9,
    reviewCount: 276,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    }
  },
  {
    id: "prod-06",
    title: "[선물세트] 힐링 나이트 기프트 패키지 (캔들 + 스너퍼 + 윅디퍼 + 성냥)",
    subtitle: "소중한 사람에게 쉼과 온기를 선물하는 올인원 캔들 케어 풀세트",
    price: 39000,
    originalPrice: 46000,
    discountRate: 15,
    category: "시즌 선물",
    description: "시그니처 소이 캔들과 앤틱 골드 캔들 관리 도구(스너퍼, 윅디퍼), 롱 성냥이 포함된 선물 패키지.",
    fullDescription: "집들이 선물, 생일 축하, 연말연시 감사 선물로 가장 사랑받는 올인원 선물세트입니다. 고급스러운 앤틱 골드 마감의 캔들 케어 액세서리가 함께 구성되어 캔들을 끌 때 그을음 없이 깔끔하게 관리할 수 있습니다.",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["BEST", "선물추천", "100% 핸드메이드"],
    scentTags: ["선물인기", "커스텀메시지", "앤틱골드"],
    scentNote: {
      top: "선택 가능 (포레스트 / 코튼 / 시트러스)",
      description: "주문 시 원하시는 초언니들 시그니처 향으로 맞춤 제작해 드립니다."
    },
    specs: {
      capacity: "캔들 220g + 골드 스너퍼 + 골드 윅디퍼 + 유리병 롱성냥",
      material: "소이왁스, 스테인리스 스틸 골드 도금, 크래프트 선물상자",
      origin: "대한민국",
      packaging: "프리미엄 골드 리본 & 캘리그라피 감사 카드 동봉"
    },
    craftNotes: [
      "축하/감사 메시지 카드 문구를 무료로 캘리그라피 인쇄해 드립니다.",
      "선물 받으시는 분의 주소로 바로 발송하셔도 완벽한 패키징으로 도착합니다."
    ],
    rating: 5.0,
    reviewCount: 512,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    },
    isCustomizable: true
  },
  {
    id: "prod-07",
    title: "[웨딩/돌잔치 답례품] 맞춤 라벨링 미니 캔들 60g (10개 세트~)",
    subtitle: "신랑신부 이름 또는 아기 이름을 각인한 따뜻한 정성의 감성 답례품",
    price: 45000,
    originalPrice: 50000,
    discountRate: 10,
    category: "답례품",
    description: "10개 단위로 주문 가능한 맞춤 라벨 캔들. 특별한 날 찾아주신 분들께 기억에 남는 향기를 선물하세요.",
    fullDescription: "웨딩, 돌잔치, 기업 행사, 개업식 등에 가장 인기 있는 맞춤 라벨링 캔들입니다. 원하시는 문구와 날짜, 디자인 시안을 1:1로 확인 후 정성스럽게 제작해 드립니다. 10개 이상 대량 주문 시 추가 할인 및 개별 쇼핑백을 함께 증정합니다.",
    images: [
      "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["답례품인기", "100% 핸드메이드"],
    scentTags: ["맞춤각인", "대량할인", "개별포장완료"],
    scentNote: {
      top: "스위트 피치, 로즈블라썸, 화이트코튼 (선택 가능)",
      description: "남녀노소 누구나 호불호 없이 좋아하는 은은하고 화사한 향기"
    },
    specs: {
      capacity: "60g x 10개 (개별 약 15시간 연소)",
      material: "천연 소이왁스, 독일산 프리미엄 면심지, 알루미늄/유리 틴케이스",
      origin: "대한민국 수제 제작",
      packaging: "개별 투명 케이스 or 크래프트 상자 + 맞춤 제작 네임 스티커 부착"
    },
    craftNotes: [
      "아이디어스/스마트스토어 주문 후 톡톡 또는 1:1 메시지로 문구를 전달해주시면 시안을 무료 제작해 드립니다.",
      "행사 날짜 2주 전 여유 있게 주문해주시면 가장 신선한 캔들로 수령 가능합니다."
    ],
    rating: 4.9,
    reviewCount: 380,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    },
    isCustomizable: true
  },
  {
    id: "prod-08",
    title: "크라프트 버블 큐브 오브제 필라 캔들 (감성 인테리어)",
    subtitle: "몽글몽글 사랑스러운 큐브 버블 형태의 무향/유향 인테리어 필라 캔들",
    price: 12000,
    originalPrice: 14000,
    discountRate: 14,
    category: "차량용 방향제",
    description: "테이블, 선반, 협탁 어디에 두어도 감각적인 포인트가 되는 소장 가치 100% 감성 캔들입니다.",
    fullDescription: "소이 왁스와 밀랍(비즈왁스)을 최적의 비율로 배합하여 단단하면서도 부드러운 텍스처를 자랑하는 버블 큐브 캔들입니다. 태우지 않고 올려두는 것만으로도 공간의 분위기를 포근하고 감각적으로 전환해줍니다.",
    images: [
      "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=1000&q=80"
    ],
    badges: ["NEW", "100% 핸드메이드"],
    scentTags: ["바닐라라떼", "무향선택가능", "인테리어오브제"],
    scentNote: {
      top: "크리미 바닐라, 헤이즐넛",
      middle: "웜 카라멜, 샌달우드",
      base: "통카빈, 앰버",
      description: "달콤하고 부드러운 온기를 선사하는 포근한 베이커리 무드"
    },
    specs: {
      capacity: "약 160g (크기 6cm x 6cm x 6cm)",
      material: "골든 소이왁스 & 천연 비즈왁스, 스모크리스 코튼 심지",
      origin: "대한민국",
      packaging: "크래프트 박스 + 트와인 끈 포장"
    },
    craftNotes: [
      "필라 캔들은 연소 시 받침대(캔들 트레이) 위에 올려두고 태우시는 것을 권장합니다.",
      "색상은 아이보리, 웜베이지, 세이지그린 중 선택 가능합니다."
    ],
    rating: 4.8,
    reviewCount: 94,
    links: {
      idus: IDUS_STORE_URL,
      smartstore: SMARTSTORE_URL
    }
  }
];

export const BRAND_VALUES = [
  {
    title: "100% 천연 식물성 왁스",
    desc: "석유계 파라핀 0%. 미국산 순수 소이왁스와 천연 밀랍만을 고집하여 그을음 없이 깨끗하게 연소됩니다.",
    icon: "Sparkles"
  },
  {
    title: "IFRA 안전 인증 프리미엄 조향",
    desc: "국제향료협회(IFRA) 기준을 준수한 최고 등급 프래그런스와 천연 에센셜 오일로 머리 아프지 않은 맑은 향을 선사합니다.",
    icon: "Flower2"
  },
  {
    title: "자매 작가의 수제 공예",
    desc: "주문 즉시 손으로 정성스레 계량하고 부어내는 오더메이드 방식으로 가장 신선한 발향력을 전달합니다.",
    icon: "HeartHandshake"
  },
  {
    title: "친환경 & 맞춤 선물 패키징",
    desc: "FSC 인증 친환경 크래프트 박스, 한지, 면 리본을 사용하여 받으시는 순간까지 기분 좋은 감동을 전합니다.",
    icon: "Gift"
  }
];

export const CHANNEL_BENEFITS = {
  idus: {
    title: "아이디어스 (idus)",
    badge: "핸드메이드 작가 플랫폼",
    color: "#FF5B35",
    description: "작가와 직접 소통하고 특별한 커스텀 요청이 가능한 핸드메이드 전용 마켓",
    points: [
      "작가 1:1 메시지로 빠른 맞춤 커스텀 & 각인 요청",
      "초언니들 '단골 맺기' 시 전용 할인 쿠폰 즉시 지급",
      "아이디어스 VIP 클럽 회원 전 상품 무료배송 혜택",
      "실제 구매 고객들의 생생한 포토 후기 1,000+개 확인"
    ],
    url: IDUS_STORE_URL,
    btnText: "아이디어스에서 구매하기"
  },
  smartstore: {
    title: "네이버 스마트스토어",
    badge: "네이버 공식 스토어",
    color: "#03C75A",
    description: "네이버페이 포인트 최대 적립과 간편 결제를 지원하는 공식 스토어",
    points: [
      "네이버페이 최대 5% 적립 & 간편 1초 결제 지원",
      "알림받기 동의 시 스토어 장바구니 즉시 할인 쿠폰",
      "네이버 현대카드 및 제휴 카드 무이자 할부 혜택",
      "스토어 공식 빠른 배송 및 네이버 톡톡 실시간 상담"
    ],
    url: SMARTSTORE_URL,
    btnText: "스마트스토어에서 구매하기"
  }
};

export const REVIEWS = [
  {
    id: "rev-1",
    author: "김*진",
    product: "초언니들 시그니처 소이 캔들 세트",
    channel: "idus",
    rating: 5,
    date: "2026.08.02",
    content: "타닥타닥 우드윅 소리가 너무 힐링돼요! 포레스트 향 주문했는데 숲속 공기처럼 은은하고 퇴근 후 켜두면 피로가 싹 풀립니다. 포장도 뜯기 아까울 정도로 예뻐서 친구 선물용으로 재구매합니다."
  },
  {
    id: "rev-2",
    author: "이*연",
    product: "달항아리 세라믹 오브제 캔들",
    channel: "smartstore",
    rating: 5,
    date: "2026.07.28",
    content: "달항아리 도자기가 너무 고급스러워요. 거실 협탁에 올려만 둬도 한국적인 감성이 살아납니다. 다 태우고 나서 작은 화병으로 쓰고 있는데 너무 실용적이에요!"
  },
  {
    id: "rev-3",
    author: "박*우",
    product: "보태니컬 플라워 왁스 타블렛",
    channel: "idus",
    rating: 5,
    date: "2026.07.19",
    content: "옷장 문 열 때마다 기분 좋은 향기가 솔솔 납니다. 꽃잎 장식이 정말 섬세해서 감탄했어요. 작가님 친절한 손편지까지 감동이었습니다 :)"
  },
  {
    id: "rev-4",
    author: "최*서",
    product: "힐링 나이트 기프트 패키지",
    channel: "smartstore",
    rating: 5,
    date: "2026.07.10",
    content: "지인 집들이 선물로 보냈는데 역대급 센스 있는 선물이라고 칭찬받았어요! 골드 스너퍼와 성냥까지 세트로 들어있어서 완벽했습니다."
  }
];
