export interface MarketData {
  date: string;
  marketCap: number; // 시가총액 (억 달러)
  m2Supply: number; // M2 통화량 (억 달러)
  gdp: number; // GDP (억 달러)
  nasdaqLeverageRatio: number; // 나스닥 레버리지 청산 비율
}

export interface BubbleAnalysis {
  marketCapToM2Ratio: number; // 시가총액/M2 비율
  marketCapToGDPRatio: number; // 시가총액/GDP 비율
  nasdaqLeverageRatio: number; // 나스닥 레버리지 청산 비율
  bubbleLevel: "low" | "moderate" | "high" | "extreme";
  riskAssessment: string;
  historicalComparison: {
    similarPeriods: string[];
    currentVsHistorical: string;
  };
  recommendation: {
    action: string;
    reasoning: string;
  };
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface BubbleCalculatorState {
  isLoading: boolean;
  analysis: BubbleAnalysis | null;
  error: string | null;
  historicalData: MarketData[];
}

export interface HistoricalBubblePeriod {
  period: string;
  marketCapToM2Ratio: number;
  marketCapToGDPRatio: number;
  nasdaqLeverageRatio: number;
  outcome: string;
  description: string;
}
