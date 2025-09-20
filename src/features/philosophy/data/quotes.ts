export interface Quote {
  id: number;
  text: string;
  category: string;
  author: string;
}

export const quotes: Quote[] = [
  // 위로 카테고리 - 더 감성적이고 따뜻한 문장들
  {
    id: 1,
    text: "당신의 눈물도 아름다운 진주가 될 거예요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 2,
    text: "오늘의 상처는 내일의 지혜가 되어요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 3,
    text: "혼자라는 것은 나쁜 것이 아니에요. 나만의 시간이에요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 4,
    text: "당신이 사랑받을 만한 사람이에요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 5,
    text: "작은 발걸음도 큰 여정의 시작이에요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 6,
    text: "눈물이 마르면 더 선명한 세상이 보여요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 7,
    text: "당신의 마음은 보물이에요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 8,
    text: "힘들어도 괜찮아요. 모든 것이 지나갈 거예요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 9,
    text: "당신의 존재 자체가 누군가에게는 소중해요",
    category: "위로",
    author: "개똥철학자",
  },
  {
    id: 10,
    text: "지금 이 순간도 당신을 위해 준비된 시간이에요",
    category: "위로",
    author: "개똥철학자",
  },

  // 유머 카테고리 - 감성적인 유머
  {
    id: 11,
    text: "실패는 성공의 어머니예요. 엄마는 항상 사랑하니까요",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 12,
    text: "늦었다고 생각할 때가 정말 늦었을 때예요. 하지만 시작할 때예요",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 13,
    text: "돈이 모든 것을 해결해주지는 않지만, 대부분은 해결해줘요. 특히 눈물은요",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 14,
    text: "인생은 짧아요. 그래서 더 아름답게 살아야 해요",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 15,
    text: "웃음은 최고의 약이에요. 특히 마음이 아플 때",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 16,
    text: "오늘의 고민은 내일의 추억이 될 거예요. 그리고 웃음이 될 거예요",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 17,
    text: "완벽하지 않아도 괜찮아요. 완벽한 것은 완벽하지 않으니까요",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 18,
    text: "인생은 롤러코스터예요. 내리는 법을 배우면 재밌어져요",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 19,
    text: "어려운 일은 쉽게, 쉬운 일은 사랑스럽게",
    category: "유머",
    author: "개똥철학자",
  },
  {
    id: 20,
    text: "포기하지 마세요. 개도 때때로 포기하지만 다시 일어서거든요",
    category: "유머",
    author: "개똥철학자",
  },

  // 철학 카테고리 - 깊이 있는 위로
  {
    id: 21,
    text: "상처받은 마음도 때로는 새로운 꽃을 피워내요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 22,
    text: "작은 것의 소중함을 아는 것이 큰 지혜예요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 23,
    text: "모든 일에는 때가 있어요. 지금도 그때예요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 24,
    text: "변화는 불편하지만 새로운 나를 만나게 해줘요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 25,
    text: "진정한 행복은 마음에서 나와요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 26,
    text: "인생은 여행이에요. 목적지보다 함께한 사람이 중요해요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 27,
    text: "감사할 줄 아는 마음이 행복의 열쇠예요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 28,
    text: "어둠이 깊을수록 별은 더 밝게 빛나요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 29,
    text: "시간은 모든 것을 치유해줘요. 사랑도 마찬가지예요",
    category: "철학",
    author: "개똥철학자",
  },
  {
    id: 30,
    text: "진실은 때로는 아플 수 있지만 마음을 자유롭게 해줘요",
    category: "철학",
    author: "개똥철학자",
  },

  // 감사 카테고리 - 마음이 따뜻해지는 감사
  {
    id: 31,
    text: "오늘도 건강하게 일어나서 새로운 하루를 맞이할 수 있어요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 32,
    text: "맛있는 음식을 먹을 수 있다는 것이 얼마나 행복한 일인지요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 33,
    text: "따뜻한 햇살이 내 마음을 어루만져주는 것 같아요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 34,
    text: "사랑하는 사람들이 있다는 것이 세상에서 가장 큰 축복이에요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 35,
    text: "숨 쉴 수 있다는 것이 생명의 기적이에요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 36,
    text: "꿈을 꿀 수 있다는 것이 마음의 자유예요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 37,
    text: "웃을 수 있다는 것이 얼마나 소중한 선물인지요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 38,
    text: "배울 수 있다는 것이 마음의 성장이에요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 39,
    text: "성장할 수 있다는 것이 인생의 아름다움이에요",
    category: "감사",
    author: "개똥철학자",
  },
  {
    id: 40,
    text: "희망을 가질 수 있다는 것이 마음의 불꽃이에요",
    category: "감사",
    author: "개똥철학자",
  },

  // 격려 카테고리 - 따뜻한 격려
  {
    id: 41,
    text: "당신은 할 수 있어요! 마음속에 이미 그 힘이 있어요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 42,
    text: "오늘도 화이팅! 당신을 응원하는 마음이에요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 43,
    text: "한 걸음씩 나아가면 돼요. 작은 발걸음도 소중해요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 44,
    text: "포기하지 마세요. 당신은 더 강한 사람이에요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 45,
    text: "당신의 노력은 반드시 아름다운 열매를 맺을 거예요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 46,
    text: "어려운 시간도 지나갈 거예요. 그리고 더 밝은 시간이 올 거예요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 47,
    text: "당신은 세상에서 가장 특별한 사람이에요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 48,
    text: "새로운 시작은 언제나 가능해요. 지금도 그때예요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 49,
    text: "당신의 꿈은 반드시 이루어질 거예요. 믿어보세요",
    category: "격려",
    author: "개똥철학자",
  },
  {
    id: 50,
    text: "오늘도 최선을 다하세요. 당신은 충분히 잘하고 있어요",
    category: "격려",
    author: "개똥철학자",
  },

  // 특별 카테고리 - 마음을 어루만지는 특별한 위로
  {
    id: 51,
    text: "상처받은 마음도 때로는 새로운 꽃을 피워내요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 52,
    text: "외로운 밤에도 별은 빛나고 있어요. 당신을 위해",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 53,
    text: "당신의 미소는 세상을 밝게 해요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 54,
    text: "작은 용기가 큰 변화를 만들어요. 당신 안에 그 용기가 있어요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 55,
    text: "오늘의 끝은 내일의 시작이에요. 새로운 희망이에요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 56,
    text: "당신의 이야기는 아직 끝나지 않았어요. 아름다운 이야기가 계속될 거예요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 57,
    text: "힘든 시간일수록 더 빛나는 사람이에요. 당신이 그래요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 58,
    text: "당신의 마음은 세상에서 가장 아름다운 보물이에요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 59,
    text: "새로운 하루는 새로운 기회예요. 당신을 위한 기회예요",
    category: "특별",
    author: "개똥철학자",
  },
  {
    id: 60,
    text: "당신은 이미 충분히 아름다워요. 그대로도 완벽해요",
    category: "특별",
    author: "개똥철학자",
  },
];

export const getRandomQuote = (): Quote => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export const getQuotesByCategory = (category: string): Quote[] => {
  return quotes.filter((quote) => quote.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = [...new Set(quotes.map((quote) => quote.category))];
  return categories;
};
