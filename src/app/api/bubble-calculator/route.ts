import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import {
  historicalBubblePeriods,
  currentMarketData,
} from "@/features/bubble-calculator/data/historicalBubbles";
import { BubbleAnalysis } from "@/features/bubble-calculator/types";

const ai = new GoogleGenAI({});

export async function POST() {
  try {
    // 현재 시장 데이터 계산
    const marketCapToM2Ratio =
      currentMarketData.marketCap / currentMarketData.m2Supply;
    const marketCapToGDPRatio =
      currentMarketData.marketCap / currentMarketData.gdp;

    // 과거 버블 시기 데이터를 문자열로 변환
    const historicalDataString = historicalBubblePeriods
      .map(
        (period) =>
          `${period.period}: M2비율 ${period.marketCapToM2Ratio}, GDP비율 ${period.marketCapToGDPRatio}, 레버리지 ${period.nasdaqLeverageRatio} - ${period.outcome}`
      )
      .join("\n");

    const prompt = `
당신은 주식시장 버블 분석 전문가입니다. 다음 데이터를 바탕으로 현재 주식시장의 버블 상태를 분석해주세요.

**현재 시장 상황 (2025년):**
- 시가총액: ${currentMarketData.marketCap}억 달러
- M2 통화량: ${currentMarketData.m2Supply}억 달러
- GDP: ${currentMarketData.gdp}억 달러
- 나스닥 레버리지 청산 비율: ${currentMarketData.nasdaqLeverageRatio}

**계산된 비율:**
- 시가총액/M2 비율: ${marketCapToM2Ratio.toFixed(2)}
- 시가총액/GDP 비율: ${marketCapToGDPRatio.toFixed(2)}

**과거 버블 시기 비교 데이터:**
${historicalDataString}

다음 JSON 형식으로 응답해주세요:
{
  "marketCapToM2Ratio": ${marketCapToM2Ratio.toFixed(2)},
  "marketCapToGDPRatio": ${marketCapToGDPRatio.toFixed(2)},
  "nasdaqLeverageRatio": ${currentMarketData.nasdaqLeverageRatio},
  "bubbleLevel": "low|moderate|high|extreme",
  "riskAssessment": "현재 시장 상황에 대한 상세한 리스크 평가 (200자 이내)",
  "historicalComparison": {
    "similarPeriods": ["과거 유사한 시기의 버블 명칭들"],
    "currentVsHistorical": "과거와 현재를 비교한 분석 (150자 이내)"
  },
  "recommendation": {
    "action": "투자자에게 권하는 행동 (매수/매도/관망/분할매수 등)",
    "reasoning": "권고사항의 근거 (200자 이내)"
  }
}

**분석 기준:**
1. **bubbleLevel 판단 기준:**
   - low: M2비율 < 1.2, GDP비율 < 1.2
   - moderate: M2비율 1.2-1.5, GDP비율 1.2-1.5
   - high: M2비율 1.5-2.0, GDP비율 1.5-2.0
   - extreme: M2비율 > 2.0, GDP비율 > 2.0

2. **레버리지 청산 비율 해석:**
   - 0.8 이상: 높은 레버리지 (위험)
   - 0.6-0.8: 보통 레버리지
   - 0.6 이하: 낮은 레버리지 (안정)

3. **과거 사례와의 비교:**
   - 현재 수치가 과거 버블 시기와 얼마나 유사한지 분석
   - 특히 2000년 닷컴 버블, 2008년 금융위기와의 비교

4. **투자 권고사항:**
   - 현재 버블 수준에 따른 구체적인 투자 전략
   - 리스크 관리 방안
   - 시장 타이밍에 대한 조언

**중요한 규칙:**
- 객관적이고 균형잡힌 분석 제공
- 과도한 공포나 낙관주의 피하기
- 구체적이고 실용적인 조언 제공
- 과거 데이터를 바탕으로 한 근거 있는 분석
`;

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: prompt,
    });

    const text = response.text || "";

    // JSON 파싱
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("JSON 형식의 응답을 받지 못했습니다.");
    }

    const analysis: BubbleAnalysis = JSON.parse(jsonMatch[0]);

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Error analyzing bubble:", error);
    return NextResponse.json(
      { error: "버블 분석을 생성하는데 실패했습니다." },
      { status: 500 }
    );
  }
}
