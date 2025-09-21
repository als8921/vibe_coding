import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { MusicPreference } from "@/features/music-recommendation/types";

const ai = new GoogleGenAI({});

export async function POST(request: NextRequest) {
  try {
    const preferences: MusicPreference = await request.json();

    if (
      !preferences.mood ||
      !preferences.artists.length ||
      !preferences.timeOfDay ||
      !preferences.location
    ) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    const prompt = `
당신은 음악 추천 전문가입니다. 반드시 실제로 존재하는 유명한 곡들만 추천해주세요.

사용자 정보:
- 현재 기분: ${preferences.mood}
- 선호 아티스트/장르: ${preferences.artists.join(", ")}
- 시간대: ${preferences.timeOfDay}
- 장소: ${preferences.location}
- 날씨: ${preferences.weather || "미선택"}
- 기존 취향: ${preferences.previousTaste || "미선택"}
- MBTI: ${preferences.mbti || "미선택"}

다음 JSON 형식으로 응답해주세요:
{
  "recommendations": [
    {
      "title": "실제 곡 제목",
      "artist": "실제 아티스트명",
      "reason": "이 곡을 추천하는 이유 (50자 이내)",
      "genre": "장르",
      "mood": "곡의 분위기"
    }
  ],
  "summary": "전체 추천에 대한 요약 (100자 이내)"
}

**중요한 규칙 - 반드시 지켜주세요:**
1. **절대로 가상의 곡이나 아티스트를 만들어내지 마세요**
2. **오직 실제로 존재하는 유명한 곡들만 추천하세요**
3. **곡 제목과 아티스트명을 정확히 입력하세요 - 잘못된 매칭 절대 금지**
4. **팝 장르를 제외한 모든 장르는 한국 노래만 추천하세요**
5. **팝 장르만 영어 노래를 추천하세요**
6. **사용자의 선호 장르에 맞는 실제 곡들을 선택하세요**
7. **각 아티스트의 실제 히트곡만 추천하세요**
8. **곡 제목과 아티스트가 정확히 매칭되는지 확인하세요**

**장르별 추천 규칙:**
- **팝 (pop)**: 영어 노래만 추천 (Taylor Swift, Ed Sheeran, Billie Eilish 등)
- **K-POP**: 한국 노래만 추천 (BTS, NewJeans, IU, LE SSERAFIM 등)
- **록**: 한국 록 노래만 추천 (YB, 자우림, 넬, 아이유 등)
- **힙합**: 한국 힙합 노래만 추천 (에픽하이, 다이나믹 듀오, 에픽하이 등)
- **인디**: 한국 인디 노래만 추천 (10cm, 선우정아, 잔나비, 혁오 등)
- **R&B**: 한국 R&B 노래만 추천 (크러쉬, 딘, 헤이즈, 수지 등)
- **발라드**: 한국 발라드 노래만 추천 (박효신, 성시경, 이승기, 태연 등)
- **트로트**: 한국 트로트 노래만 추천 (임영웅, 영탁, 김호중, 송가인 등)

**추천할 수 있는 실제 한국 아티스트와 대표곡 예시:**
- K-POP: BTS(다이너마이트, 봄날), NewJeans(Attention, Hype Boy), IU(좋은날, Blueming), LE SSERAFIM(FEARLESS, UNFORGIVEN), (여자)아이들(Tomboy, Queencard), aespa(Next Level, Savage), ITZY(WANNABE, SNEAKERS), BLACKPINK(How You Like That, Pink Venom), 세븐틴(HOT, Super), NCT(Sticker, 2 Baddies)
- 한국 록: YB(나는 나비, 나는 나비), 자우림(아티스트, 아티스트), 넬(기억을 걷는 시간, 기억을 걷는 시간), 아이유(좋은날, Blueming), 백아연(이럴거면 그러지말지, 이럴거면 그러지말지), 볼빨간사춘기(나만, 봄, 여름가을겨울)
- 한국 힙합: 에픽하이(우산, Love Love Love), 다이나믹 듀오(출첵, 출첵), 사이먼 도미닉(Simon Dominic, Simon Dominic), 기리보이(Party People, Party People), 빈지노(Aqua Man, Aqua Man), 크러쉬(가끔, 가끔)
- 한국 인디: 10cm(안아줘, 안아줘), 선우정아(서울의 달, 서울의 달), 잔나비(주저하는 연인들을 위해, 주저하는 연인들을 위해), 혁오(톰보이, 톰보이), 검정치마(Everything, Everything), 선우정아(서울의 달, 서울의 달)
- 한국 R&B: 크러쉬(가끔, 가끔), 딘(Instagram, Instagram), 헤이즈(And July, And July), 수지(Yes No Maybe, Yes No Maybe), 에일리(첫눈처럼 너에게 가겠다, 첫눈처럼 너에게 가겠다), 태연(I, I)
- 한국 발라드: 박효신(눈의 꽃, 눈의 꽃), 성시경(거리에서, 거리에서), 이승기(그리고 사랑해, 그리고 사랑해), 태연(I, I), 김범수(보고싶다, 보고싶다), 이수영(그리고 사랑해, 그리고 사랑해), 거미(미안해요, 미안해요)
- 한국 트로트: 임영웅(사랑은 늘 도망가, 사랑은 늘 도망가), 영탁(미안해요, 미안해요), 김호중(바다가 육지라면, 바다가 육지라면), 송가인(나 같은 사람, 나 같은 사람), 진성(아버지, 아버지), 태진아(아버지, 아버지), 나훈아(아버지, 아버지)

**절대로 하지 말아야 할 것:**
- 존재하지 않는 곡 제목 생성
- 존재하지 않는 아티스트 이름 생성
- 팝을 제외한 장르에서 영어 노래 추천
- 가상의 앨범이나 년도 정보 추가
- 실제와 다른 곡 정보 제공
- **잘못된 아티스트-곡 제목 매칭 (예: BTS의 "Attention" 추천)**
- **실제 존재하지 않는 곡과 가수의 조합**

**추천 전 확인사항:**
1. 추천하는 곡이 실제로 해당 아티스트의 곡인가?
2. 곡 제목이 정확한가?
3. 아티스트명이 정확한가?
4. 장르가 올바른가?
5. 위 예시에 나온 곡들과 유사한 실제 히트곡인가?

**추천 시 고려사항:**
- 날씨 정보를 활용해 분위기에 맞는 곡 추천 (예: 비 오는 날에는 감성적인 곡)
- 기존 취향을 바탕으로 유사한 스타일의 곡 추천
- MBTI 성격 유형에 맞는 음악 스타일 고려:
  * E(외향형): 에너지 넘치는 곡, I(내향형): 차분하고 깊이 있는 곡
  * S(감각형): 현실적이고 구체적인 가사, N(직관형): 추상적이고 철학적인 가사
  * T(사고형): 논리적이고 분석적인 곡, F(감정형): 감성적이고 공감적인 곡
  * J(판단형): 체계적이고 완성도 높은 곡, P(인식형): 자유롭고 즉흥적인 곡
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
    console.error("Error generating music recommendation:", error);
    return NextResponse.json(
      { error: "음악 추천을 생성하는데 실패했습니다." },
      { status: 500 }
    );
  }
}
