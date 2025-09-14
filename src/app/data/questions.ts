export interface Question {
  id: string;
  question: string;
  options: {
    text: string;
    type: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
  }[];
  category: string;
  description: string;
}

export const questionDatabase: Question[] = [
  // E/I 질문들
  {
    id: "ei_1",
    question: "새로운 사람들과 만나는 파티에서 당신은?",
    options: [
      { text: "많은 사람들과 활발하게 대화하며 에너지를 얻는다", type: "E" },
      { text: "소수의 친한 사람들과 깊이 있는 대화를 나눈다", type: "I" },
      { text: "파티의 분위기를 이끌어가며 모든 사람의 관심을 끈다", type: "E" },
      { text: "조용한 구석에서 관찰하며 필요할 때만 참여한다", type: "I" },
    ],
    category: "E/I",
    description: "외향성 vs 내향성",
  },
  {
    id: "ei_2",
    question: "주말에 시간을 보내는 방법은?",
    options: [
      { text: "친구들과 함께 외출하거나 활동적인 일을 한다", type: "E" },
      { text: "집에서 혼자만의 시간을 가지며 휴식을 취한다", type: "I" },
      { text: "새로운 사람들을 만나고 새로운 경험을 추구한다", type: "E" },
      { text: "책을 읽거나 개인적인 취미 활동에 집중한다", type: "I" },
    ],
    category: "E/I",
    description: "외향성 vs 내향성",
  },
  {
    id: "ei_3",
    question: "문제를 해결할 때 당신의 스타일은?",
    options: [
      { text: "다른 사람들과 토론하며 아이디어를 나눈다", type: "E" },
      { text: "혼자서 깊이 생각한 후 결정한다", type: "I" },
      { text: "팀을 이끌고 모든 사람의 의견을 수렴한다", type: "E" },
      { text: "조용히 분석하고 신중하게 접근한다", type: "I" },
    ],
    category: "E/I",
    description: "외향성 vs 내향성",
  },

  // S/N 질문들
  {
    id: "sn_1",
    question: "새로운 프로젝트를 시작할 때 당신은?",
    options: [
      { text: "구체적이고 실용적인 계획을 세운다", type: "S" },
      { text: "전체적인 비전과 가능성을 먼저 생각한다", type: "N" },
      { text: "단계별로 차근차근 진행한다", type: "S" },
      { text: "창의적이고 혁신적인 방법을 찾는다", type: "N" },
    ],
    category: "S/N",
    description: "감각 vs 직관",
  },
  {
    id: "sn_2",
    question: "정보를 처리하는 방식을 선택하세요",
    options: [
      { text: "현재 상황과 구체적인 사실에 집중한다", type: "S" },
      { text: "미래 가능성과 추상적인 아이디어에 관심이 많다", type: "N" },
      { text: "실제 경험과 검증된 방법을 선호한다", type: "S" },
      { text: "새로운 관점과 이론적 접근을 좋아한다", type: "N" },
    ],
    category: "S/N",
    description: "감각 vs 직관",
  },
  {
    id: "sn_3",
    question: "학습할 때 선호하는 방법은?",
    options: [
      { text: "단계별로 차근차근 실습하며 배운다", type: "S" },
      { text: "전체적인 개념을 파악한 후 세부사항을 이해한다", type: "N" },
      { text: "구체적인 예시와 실제 사례를 통해 배운다", type: "S" },
      { text: "이론과 원리를 먼저 이해한 후 적용한다", type: "N" },
    ],
    category: "S/N",
    description: "감각 vs 직관",
  },

  // T/F 질문들
  {
    id: "tf_1",
    question: "중요한 결정을 내릴 때 당신은?",
    options: [
      { text: "논리적 분석과 객관적 기준을 우선시한다", type: "T" },
      { text: "사람들의 감정과 가치관을 고려한다", type: "F" },
      { text: "데이터와 사실에 기반하여 결정한다", type: "T" },
      { text: "모든 사람이 만족할 수 있는 방법을 찾는다", type: "F" },
    ],
    category: "T/F",
    description: "사고 vs 감정",
  },
  {
    id: "tf_2",
    question: "갈등 상황에서 당신의 접근 방식은?",
    options: [
      { text: "사실과 논리로 문제를 해결하려고 한다", type: "T" },
      { text: "상대방의 입장을 이해하고 조화를 추구한다", type: "F" },
      { text: "객관적으로 분석하고 공정한 해결책을 찾는다", type: "T" },
      { text: "모든 사람의 감정을 고려하여 해결한다", type: "F" },
    ],
    category: "T/F",
    description: "사고 vs 감정",
  },
  {
    id: "tf_3",
    question: "피드백을 줄 때 당신은?",
    options: [
      { text: "직접적이고 솔직하게 문제점을 지적한다", type: "T" },
      { text: "상대방의 기분을 고려하며 부드럽게 전달한다", type: "F" },
      { text: "구체적이고 명확한 개선점을 제시한다", type: "T" },
      { text: "긍정적인 부분을 먼저 언급한 후 조언한다", type: "F" },
    ],
    category: "T/F",
    description: "사고 vs 감정",
  },

  // J/P 질문들
  {
    id: "jp_1",
    question: "일상생활에서 당신은?",
    options: [
      { text: "계획을 세우고 체계적으로 일을 처리한다", type: "J" },
      { text: "유연하게 상황에 맞춰 일을 처리한다", type: "P" },
      { text: "미리 준비하고 예상 가능한 상황을 선호한다", type: "J" },
      { text: "즉흥적이고 자유로운 스타일을 좋아한다", type: "P" },
    ],
    category: "J/P",
    description: "판단 vs 인식",
  },
  {
    id: "jp_2",
    question: "마감일이 있는 작업을 할 때 당신은?",
    options: [
      { text: "미리 계획을 세우고 여유있게 완료한다", type: "J" },
      { text: "마감일에 가까워질수록 집중력이 높아진다", type: "P" },
      { text: "일정을 정확히 지키며 체계적으로 진행한다", type: "J" },
      { text: "압박감 속에서 더 좋은 결과를 만들어낸다", type: "P" },
    ],
    category: "J/P",
    description: "판단 vs 인식",
  },
  {
    id: "jp_3",
    question: "새로운 기회가 생겼을 때 당신은?",
    options: [
      { text: "신중하게 검토한 후 결정한다", type: "J" },
      { text: "흥미가 생기면 바로 도전해본다", type: "P" },
      { text: "장단점을 분석하고 계획을 세운 후 시작한다", type: "J" },
      { text: "즉흥적으로 시작하고 과정에서 배운다", type: "P" },
    ],
    category: "J/P",
    description: "판단 vs 인식",
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return questionDatabase.filter((q) => q.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(questionDatabase.map((q) => q.category)));
};
