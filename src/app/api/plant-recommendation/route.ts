import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { PlantPreference } from "@/features/plant-recommendation/types";

const ai = new GoogleGenAI({});

export async function POST(request: NextRequest) {
  try {
    const preferences: PlantPreference = await request.json();

    if (
      !preferences.spaceType ||
      !preferences.lightCondition ||
      !preferences.spaceSize ||
      !preferences.careTime ||
      !preferences.experience ||
      !preferences.budget ||
      !preferences.purpose.length ||
      !preferences.location
    ) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    const prompt = `
당신은 식물 추천 전문가입니다. 사용자의 환경과 선호도에 맞는 실제 식물들을 추천해주세요.

사용자 정보:
- 공간 유형: ${preferences.spaceType}
- 조명 조건: ${preferences.lightCondition}
- 공간 크기: ${preferences.spaceSize}
- 관리 시간: ${preferences.careTime}
- 경험 수준: ${preferences.experience}
- 예산: ${preferences.budget}
- 목적: ${preferences.purpose.join(", ")}
- 지역: ${preferences.location}

다음 JSON 형식으로 응답해주세요:
{
  "recommendations": [
    {
      "name": "식물명 (한국어)",
      "scientificName": "학명",
      "description": "식물 설명 (100자 이내)",
      "careLevel": "초보자/중급자/전문가",
      "lightRequirement": "밝음/보통/어두움",
      "wateringFrequency": "물주기 주기",
      "priceRange": {
        "min": 최소가격,
        "max": 최대가격,
        "average": 평균가격
      },
      "benefits": ["공기정화", "장식효과", "향기", "힐링"],
      "reason": "이 식물을 추천하는 이유 (50자 이내)"
    }
  ],
  "summary": "전체 추천에 대한 요약 (100자 이내)",
  "totalBudget": {
    "min": 총최소비용,
    "max": 총최대비용,
    "average": 총평균비용
  }
}

**중요한 규칙:**
1. **실제로 존재하는 식물만 추천하세요**
2. **한국에서 구할 수 있는 일반적인 실내 식물들을 추천하세요**
3. **사용자의 환경 조건에 맞는 식물을 선택하세요**
4. **가격은 한국 시장 기준으로 현실적으로 설정하세요**
5. **각 식물의 관리 난이도와 요구사항을 정확히 반영하세요**

**추천할 수 있는 식물 예시:**
- 초보자용: 몬스테라, 고무나무, 스투키, 산세베리아, 필로덴드론
- 중급자용: 칼라테아, 마란타, 알로카시아, 호야, 스파티필럼
- 전문가용: 보스턴고사리, 아디안텀, 셀라기넬라, 네프롤레피스, 아스파라거스

**가격 기준 (화분 포함):**
- 저렴 (1만원 이하): 3,000-10,000원
- 보통 (1-5만원): 10,000-50,000원
- 비쌈 (5만원 이상): 50,000원 이상


**식물별 특성 고려사항:**
- 거실: 큰 식물, 공기정화 효과 좋은 식물
- 침실: 밤에도 안전한 식물, 향기 좋은 식물
- 화장실: 습도 높은 환경에 적합한 식물
- 베란다: 햇빛을 좋아하는 식물, 온도 변화에 강한 식물
- 사무실: 관리가 쉬운 식물, 스트레스 해소에 좋은 식물
- 주방: 향신료나 허브류, 요리에 활용 가능한 식물

**조명 조건별 추천:**
- 밝음: 몬스테라, 고무나무, 스투키, 산세베리아
- 보통: 칼라테아, 마란타, 필로덴드론, 스파티필럼
- 어두움: 산세베리아, 아글라오네마, 드라세나, 페페로미아

**관리 시간별 추천:**
- 적음: 산세베리아, 스투키, 고무나무, 아글라오네마
- 보통: 몬스테라, 필로덴드론, 스파티필럼, 드라세나
- 많음: 칼라테아, 마란타, 보스턴고사리, 아디안텀

**목적별 추천:**
- 공기정화: 스파티필럼, 산세베리아, 고무나무, 드라세나
- 장식: 몬스테라, 칼라테아, 마란타, 필로덴드론
- 향기: 라벤더, 로즈마리, 민트, 바질
- 힐링: 스파티필럼, 아글라오네마, 페페로미아, 호야
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

    const recommendationResult = JSON.parse(jsonMatch[0]);

    return NextResponse.json(recommendationResult);
  } catch (error) {
    console.error("Error generating plant recommendation:", error);
    return NextResponse.json(
      { error: "식물 추천을 생성하는데 실패했습니다." },
      { status: 500 }
    );
  }
}
