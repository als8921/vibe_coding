"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ResultPage from "../../components/ResultPage";
import { questionDatabase } from "../../data/questions";

export default function MBTIResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [testData, setTestData] = useState<any>(null);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // URL에서 답변 데이터 가져오기
    const answersParam = searchParams.get("answers");
    if (answersParam) {
      try {
        const answers = JSON.parse(decodeURIComponent(answersParam));
        setUserAnswers(answers);
      } catch (error) {
        console.error("답변 데이터 파싱 오류:", error);
        router.push("/mbti");
        return;
      }
    } else {
      router.push("/mbti");
      return;
    }

    // 테스트 데이터 설정
    const fixedQuestions = [
      questionDatabase.find((q) => q.id === "q1")!,
      questionDatabase.find((q) => q.id === "q2")!,
      questionDatabase.find((q) => q.id === "q3")!,
      questionDatabase.find((q) => q.id === "q4")!,
    ];

    const data = {
      title: "MBTI 성격 유형 검사",
      questions: fixedQuestions,
      results: {
        ESTJ: "계획적인 리더 ESTJ",
        ESTP: "즉흥적인 모험가 ESTP",
        ESFJ: "따뜻한 돌봄이 ESFJ",
        ESFP: "자유로운 연예인 ESFP",
        ENTJ: "카리스마 있는 지휘관 ENTJ",
        ENTP: "혁신적인 발명가 ENTP",
        ENFJ: "영감을 주는 선생님 ENFJ",
        ENFP: "열정적인 활동가 ENFP",
        ISTJ: "실용적인 관리자 ISTJ",
        ISTP: "만능 재주꾼 ISTP",
        ISFJ: "용감한 수호자 ISFJ",
        ISFP: "호기심 많은 예술가 ISFP",
        INTJ: "용의주도한 전략가 INTJ",
        INTP: "논리적인 사색가 INTP",
        INFJ: "선의의 옹호자 INFJ",
        INFP: "열정적인 중재자 INFP",
      },
    };

    setTestData(data);
    setIsLoading(false);
  }, [searchParams, router]);

  const handleReset = () => {
    router.push("/mbti");
  };

  if (isLoading || !testData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">
            결과를 불러오는 중...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        <ResultPage
          testData={testData}
          userAnswers={userAnswers}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}
