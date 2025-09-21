import { HistoricalBubblePeriod } from "../types";

export const historicalBubblePeriods: HistoricalBubblePeriod[] = [
  {
    period: "2000년 닷컴 버블",
    marketCapToM2Ratio: 1.8,
    marketCapToGDPRatio: 1.4,
    nasdaqLeverageRatio: 0.85,
    outcome: "버블 붕괴",
    description: "기술주 중심의 과도한 투자 열풍으로 시장이 폭락",
  },
  {
    period: "2008년 금융위기",
    marketCapToM2Ratio: 1.2,
    marketCapToGDPRatio: 1.1,
    nasdaqLeverageRatio: 0.92,
    outcome: "금융위기",
    description: "서브프라임 모기지 위기로 인한 전 세계 금융시장 붕괴",
  },
  {
    period: "2020년 코로나 충격",
    marketCapToM2Ratio: 1.4,
    marketCapToGDPRatio: 1.6,
    nasdaqLeverageRatio: 0.78,
    outcome: "급락 후 급등",
    description: "팬데믹 초기 급락 후 통화정책으로 급등",
  },
  {
    period: "2021년 메모주 열풍",
    marketCapToM2Ratio: 1.6,
    marketCapToGDPRatio: 1.8,
    nasdaqLeverageRatio: 0.82,
    outcome: "부분적 조정",
    description: "개별주 중심의 투기적 거래로 인한 시장 불안정",
  },
  {
    period: "1990년 일본 버블",
    marketCapToM2Ratio: 2.1,
    marketCapToGDPRatio: 1.9,
    nasdaqLeverageRatio: 0.88,
    outcome: "잃어버린 10년",
    description: "부동산과 주식시장의 동시 버블 붕괴",
  },
];

export const currentMarketData = {
  date: new Date().toISOString().split("T")[0],
  marketCap: 48000, // 48조 달러 (2025년 기준 추정)
  m2Supply: 22000, // 22조 달러
  gdp: 28000, // 28조 달러
  nasdaqLeverageRatio: 0.72, // 72%
};
