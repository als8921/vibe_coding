import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

export async function POST(request: NextRequest) {
  try {
    const { birthDate, gender, preferredTone } = await request.json();

    if (!birthDate || !gender || !preferredTone) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    // Gemini 2.5 Flash 모델 사용

    // 생년월일을 바탕으로 사주 정보 생성
    const birthDateObj = new Date(birthDate);
    const year = birthDateObj.getFullYear();
    const month = birthDateObj.getMonth() + 1;
    const day = birthDateObj.getDate();

    // 간단한 사주 계산 (실제로는 더 복잡한 로직이 필요)
    const zodiacSign = getZodiacSign(month, day);
    const element = getElement(year);
    const season = getSeason(month);

    const prompt = `
당신은 사주 전문가이자 컬러 테라피스트입니다. 
다음 정보를 바탕으로 오늘의 행운 컬러를 추천해주세요:

사용자 정보:
- 생년월일: ${birthDate} (${zodiacSign}, ${element}띠, ${season} 출생)
- 성별: ${gender}
- 선호 색상톤: ${preferredTone}

다음 JSON 형식으로 응답해주세요:
{
  "luckyColor": {
    "name": "컬러 이름 (예: 로즈골드, 에메랄드 그린, 딥 블루 등)",
    "hex": "#hex코드",
    "description": "이 컬러가 왜 행운을 가져다주는지 설명"
  },
  "clothingRecommendations": {
    "tops": ["상의 추천 3개 (예: 로즈골드 블라우스, 에메랄드 니트, 딥 블루 셔츠 등)"],
    "bottoms": ["하의 추천 3개 (예: 베이지 스커트, 네이비 팬츠, 올리브 스커트 등)"],
    "accessories": ["악세사리 추천 5개 (예: 골드 목걸이, 실버 귀걸이, 터쿼이즈 반지 등)"]
  },
  "colorPalette": {
    "primary": "#hex코드",
    "secondary": "#hex코드", 
    "accent": "#hex코드"
  },
  "fortune": {
    "general": "전체운 설명 (2-3문장)",
    "love": "연애운 설명 (2-3문장)",
    "career": "사업운 설명 (2-3문장)",
    "health": "건강운 설명 (2-3문장)"
  },
  "date": "${new Date().toISOString()}"
}

중요한 규칙:
1. 사용자가 선택한 색상 톤(${preferredTone})에 맞는 컬러를 추천하세요
2. 사주와 오늘의 날짜를 고려한 컬러를 선택하세요
3. 실제로 입을 수 있는 현실적인 옷과 악세사리를 추천하세요
4. 모든 설명은 긍정적이고 희망적인 톤으로 작성하세요
5. JSON 형식을 정확히 지켜주세요
6. 색상은 선호 톤에 맞게 선명하고 생생한 색상으로 추천하세요
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

    const colorRecommendation = JSON.parse(jsonMatch[0]);

    return NextResponse.json(colorRecommendation);
  } catch (error) {
    console.error("Error generating color recommendation:", error);
    return NextResponse.json(
      { error: "컬러 추천을 생성하는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// 간단한 사주 계산 함수들
function getZodiacSign(month: number, day: number): string {
  const signs = [
    "물병자리",
    "물고기자리",
    "양자리",
    "황소자리",
    "쌍둥이자리",
    "게자리",
    "사자자리",
    "처녀자리",
    "천칭자리",
    "전갈자리",
    "사수자리",
    "염소자리",
  ];

  const dates = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];

  if (day <= dates[month - 1]) {
    return signs[month - 1];
  } else {
    return signs[month % 12];
  }
}

function getElement(year: number): string {
  const elements = ["금", "금", "수", "수", "목", "목", "화", "화", "토", "토"];
  return elements[year % 10];
}

function getSeason(month: number): string {
  if (month >= 3 && month <= 5) return "봄";
  if (month >= 6 && month <= 8) return "여름";
  if (month >= 9 && month <= 11) return "가을";
  return "겨울";
}
