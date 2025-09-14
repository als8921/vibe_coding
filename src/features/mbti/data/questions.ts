import { Question } from "../types";

export const questionDatabase: Question[] = [
  // 통합 질문들 - 각 질문에서 E/I, S/N, T/F, J/P 모든 요소를 포함
  {
    id: "q1",
    question: "버스 안에서 시끄럽게 통화하는 사람이 있을 때 나는?",
    options: [
      { text: "직접적으로 '조용히 해주세요'라고 말한다", types: ["E", "T"] },
      { text: "조용히 참고 있지만 속으로는 화가 난다", types: ["I", "F"] },
      {
        text: "다른 승객들의 반응을 관찰하며 상황을 파악한다",
        types: ["S", "I"],
      },
      { text: "이런 상황이 왜 생겼는지 생각해본다", types: ["N", "I"] },
    ],
    category: "mixed",
    description: "상황 대처 방식",
  },
  {
    id: "q2",
    question: "친구가 '우리 회사에서 해고당했어'라고 말할 때 나는?",
    options: [
      {
        text: "즉시 위로하고 함께 시간을 보내자고 제안한다",
        types: ["E", "F"],
      },
      { text: "조용히 들어주고 필요할 때 도움을 준다", types: ["I", "F"] },
      { text: "구체적인 상황과 다음 계획에 대해 물어본다", types: ["S", "T"] },
      {
        text: "이 일이 앞으로의 삶에 어떤 의미가 될지 생각해본다",
        types: ["N", "T"],
      },
    ],
    category: "mixed",
    description: "친구 위로 방식",
  },
  {
    id: "q3",
    question: "새로운 프로젝트를 시작할 때 나는?",
    options: [
      {
        text: "팀원들과 브레인스토밍을 하며 아이디어를 나눈다",
        types: ["E", "N"],
      },
      { text: "혼자서 깊이 생각한 후 계획을 세운다", types: ["I", "J"] },
      { text: "단계별로 구체적인 계획을 세우고 실행한다", types: ["S", "J"] },
      {
        text: "전체적인 비전을 먼저 그려보고 창의적으로 접근한다",
        types: ["N", "P"],
      },
    ],
    category: "mixed",
    description: "프로젝트 시작 방식",
  },
  {
    id: "q4",
    question: "친구가 '갑자기 영화 보러 갈래?'라고 제안할 때 나는?",
    options: [
      { text: "즉시 '좋아! 지금 바로 나가자'라고 응답한다", types: ["E", "P"] },
      { text: "잠깐 생각해보고 '음... 언제쯤?'라고 묻는다", types: ["I", "J"] },
      {
        text: "어떤 영화를 볼지, 몇 시에 만날지 구체적으로 정한다",
        types: ["S", "J"],
      },
      {
        text: "즉흥적인 제안이 재밌어 보여서 바로 수락한다",
        types: ["N", "P"],
      },
    ],
    category: "mixed",
    description: "즉흥적 제안 대응",
  },
  {
    id: "q5",
    question: "동료가 계속 같은 실수를 반복할 때 나는?",
    options: [
      {
        text: "다른 동료들과 함께 상의해서 해결방법을 찾는다",
        types: ["E", "T"],
      },
      { text: "조용히 개인적으로 조언을 해준다", types: ["I", "F"] },
      { text: "구체적인 개선 방법과 체크리스트를 제시한다", types: ["S", "T"] },
      {
        text: "근본적인 원인을 파악해서 근본적인 해결책을 찾는다",
        types: ["N", "T"],
      },
    ],
    category: "mixed",
    description: "동료 도움 방식",
  },
  {
    id: "q6",
    question: "새로운 스마트폰을 살 때 나는?",
    options: [
      { text: "친구들에게 추천을 받고 함께 가게에 간다", types: ["E", "S"] },
      { text: "혼자서 온라인으로 조사하고 결정한다", types: ["I", "S"] },
      {
        text: "카메라 화소, 배터리 용량 등 스펙을 꼼꼼히 비교한다",
        types: ["S", "T"],
      },
      {
        text: "디자인과 브랜드의 철학, 미래 가능성에 끌린다",
        types: ["N", "F"],
      },
    ],
    category: "mixed",
    description: "구매 결정 방식",
  },
  {
    id: "q7",
    question: "가족이 '요즘 스트레스가 많아'라고 말할 때 나는?",
    options: [
      {
        text: "즉시 '무엇이든 말해봐, 들어줄게'라고 말한다",
        types: ["E", "F"],
      },
      { text: "조용히 들어주고 필요할 때만 조언한다", types: ["I", "F"] },
      { text: "구체적으로 어떤 일이 스트레스인지 파악한다", types: ["S", "T"] },
      {
        text: "이 상황이 가족에게 어떤 의미인지 생각해본다",
        types: ["N", "F"],
      },
    ],
    category: "mixed",
    description: "가족 상담 방식",
  },
  {
    id: "q8",
    question: "여행을 계획할 때 나는?",
    options: [
      { text: "친구들과 함께 계획을 세우고 의견을 나눈다", types: ["E", "S"] },
      { text: "혼자서 조용히 계획을 세운다", types: ["I", "J"] },
      {
        text: "일정표를 만들고 숙소, 교통편을 미리 예약한다",
        types: ["S", "J"],
      },
      {
        text: "대략적인 방향만 정하고 현지에서 즉흥적으로 결정한다",
        types: ["N", "P"],
      },
    ],
    category: "mixed",
    description: "여행 계획 방식",
  },
  {
    id: "q9",
    question: "새로운 취미를 시작할 때 나는?",
    options: [
      {
        text: "친구들과 함께 시작해서 서로 격려하며 배운다",
        types: ["E", "F"],
      },
      { text: "혼자서 조용히 기초부터 차근차근 배운다", types: ["I", "J"] },
      {
        text: "기초부터 차근차근 배우고 연습 계획을 세운다",
        types: ["S", "J"],
      },
      { text: "일단 시작해보고 과정에서 자유롭게 탐구한다", types: ["N", "P"] },
    ],
    category: "mixed",
    description: "취미 시작 방식",
  },
  {
    id: "q10",
    question: "친구가 '오늘 날씨가 좋네'라고 말할 때 나는?",
    options: [
      {
        text: "즉시 '그러게! 나가서 뭐 할까?'라고 제안한다",
        types: ["E", "P"],
      },
      { text: "고개를 끄덕이며 '맞아'라고 간단히 답한다", types: ["I", "S"] },
      {
        text: "'맞아, 기온이 25도고 습도도 적당해'라고 구체적으로 답한다",
        types: ["S", "T"],
      },
      {
        text: "'날씨가 마음의 상태를 반영하는 것 같아'라고 추상적으로 답한다",
        types: ["N", "F"],
      },
    ],
    category: "mixed",
    description: "일상 대화 방식",
  },
  {
    id: "q11",
    question: "요리할 때 나는?",
    options: [
      { text: "가족이나 친구들과 함께 요리하며 즐긴다", types: ["E", "F"] },
      { text: "혼자서 조용히 요리하며 집중한다", types: ["I", "S"] },
      {
        text: "레시피를 정확히 따라하고 계량컵으로 정확히 측정한다",
        types: ["S", "J"],
      },
      {
        text: "기존 레시피를 응용해서 새로운 조합을 시도한다",
        types: ["N", "P"],
      },
    ],
    category: "mixed",
    description: "요리 방식",
  },
  {
    id: "q12",
    question: "회사에서 새로운 동료가 첫 출근하는 날 나는?",
    options: [
      { text: "먼저 다가가서 자기소개하고 도움을 제안한다", types: ["E", "F"] },
      { text: "인사만 하고 자연스럽게 적응할 시간을 준다", types: ["I", "S"] },
      { text: "업무 관련해서 구체적인 도움을 제공한다", types: ["S", "T"] },
      {
        text: "새로운 동료가 팀에 어떤 변화를 가져올지 기대한다",
        types: ["N", "F"],
      },
    ],
    category: "mixed",
    description: "새 동료 대응",
  },
];

export const getQuestionsByCategory = (category: string): Question[] => {
  return questionDatabase.filter((q) => q.category === category);
};

export const getAllCategories = (): string[] => {
  return Array.from(new Set(questionDatabase.map((q) => q.category)));
};
