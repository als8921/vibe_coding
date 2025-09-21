export const spaceTypes = [
  {
    id: "living_room",
    name: "거실",
    icon: "🛋️",
    description: "넓은 공간, 많은 사람이 지나다님",
  },
  {
    id: "bedroom",
    name: "침실",
    icon: "🛏️",
    description: "휴식 공간, 밤에도 있음",
  },
  {
    id: "bathroom",
    name: "화장실",
    icon: "🚿",
    description: "습도가 높고 환기가 필요",
  },
  {
    id: "balcony",
    name: "베란다",
    icon: "🌿",
    description: "자연광이 풍부, 온도 변화 큼",
  },
  {
    id: "office",
    name: "사무실",
    icon: "💼",
    description: "업무 공간, 에어컨 사용",
  },
  {
    id: "kitchen",
    name: "주방",
    icon: "🍳",
    description: "수증기와 열기, 조리 활동",
  },
];

export const lightConditions = [
  { id: "bright", name: "밝음", icon: "☀️", description: "직사광선이 들어옴" },
  { id: "medium", name: "보통", icon: "🌤️", description: "간접광이 들어옴" },
  { id: "low", name: "어두움", icon: "🌙", description: "인공조명만 사용" },
];

export const spaceSizes = [
  { id: "small", name: "작음", icon: "📦", description: "1-2평 정도" },
  { id: "medium", name: "보통", icon: "📦📦", description: "3-5평 정도" },
  { id: "large", name: "큼", icon: "📦📦📦", description: "6평 이상" },
];

export const careTimes = [
  { id: "low", name: "적음", icon: "⏰", description: "주 1-2회" },
  { id: "medium", name: "보통", icon: "⏰⏰", description: "주 3-4회" },
  { id: "high", name: "많음", icon: "⏰⏰⏰", description: "주 5회 이상" },
];

export const experienceLevels = [
  {
    id: "beginner",
    name: "초보자",
    icon: "🌱",
    description: "식물 키우기 처음",
  },
  { id: "intermediate", name: "중급자", icon: "🌿", description: "경험 있음" },
  {
    id: "expert",
    name: "전문가",
    icon: "🌳",
    description: "고난도 식물도 가능",
  },
];

export const budgetRanges = [
  { id: "low", name: "저렴", icon: "💰", description: "1만원 이하" },
  { id: "medium", name: "보통", icon: "💰💰", description: "1-5만원" },
  { id: "high", name: "비쌈", icon: "💰💰💰", description: "5만원 이상" },
];

export const purposes = [
  { id: "air_purification", name: "공기정화", icon: "🌬️" },
  { id: "decoration", name: "장식", icon: "🎨" },
  { id: "fragrance", name: "향기", icon: "🌸" },
  { id: "collection", name: "수집", icon: "📚" },
  { id: "healing", name: "힐링", icon: "💚" },
  { id: "feng_shui", name: "풍수", icon: "🔮" },
];

export const locations = [
  { id: "seoul", name: "서울", region: "수도권" },
  { id: "gyeonggi", name: "경기도", region: "수도권" },
  { id: "busan", name: "부산", region: "영남권" },
  { id: "daegu", name: "대구", region: "영남권" },
  { id: "incheon", name: "인천", region: "수도권" },
  { id: "gwangju", name: "광주", region: "호남권" },
  { id: "daejeon", name: "대전", region: "충청권" },
  { id: "ulsan", name: "울산", region: "영남권" },
  { id: "sejong", name: "세종", region: "충청권" },
  { id: "gangwon", name: "강원도", region: "강원권" },
  { id: "chungbuk", name: "충청북도", region: "충청권" },
  { id: "chungnam", name: "충청남도", region: "충청권" },
  { id: "jeonbuk", name: "전라북도", region: "호남권" },
  { id: "jeonnam", name: "전라남도", region: "호남권" },
  { id: "gyeongbuk", name: "경상북도", region: "영남권" },
  { id: "gyeongnam", name: "경상남도", region: "영남권" },
  { id: "jeju", name: "제주도", region: "제주권" },
];
