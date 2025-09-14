"use client";

import { useState, useEffect } from "react";

interface ResultPageProps {
  testData: {
    title: string;
    questions: Array<{
      question: string;
      options: {
        text: string;
        types: ("E" | "I" | "S" | "N" | "T" | "F" | "J" | "P")[];
      }[];
    }>;
    results: Record<string, string>;
  };
  userAnswers: string[];
  onReset: () => void;
}

export default function ResultPage({
  testData,
  userAnswers,
  onReset,
}: ResultPageProps) {
  const [mbtiType, setMbtiType] = useState<string>("");
  const [isCalculating, setIsCalculating] = useState(true);

  useEffect(() => {
    // MBTI 계산 로직
    const calculateMBTI = () => {
      if (userAnswers.length === 0) return "";

      const counts = {
        E: 0,
        I: 0,
        S: 0,
        N: 0,
        T: 0,
        F: 0,
        J: 0,
        P: 0,
      };

      // 각 답변에 따라 카운트 (여러 타입을 가질 수 있음)
      userAnswers.forEach((answer) => {
        const types = answer.split(",");
        types.forEach((type) => {
          if (type in counts) {
            counts[type as keyof typeof counts]++;
          }
        });
      });

      // MBTI 유형 결정
      const first = counts.E > counts.I ? "E" : "I";
      const second = counts.S > counts.N ? "S" : "N";
      const third = counts.T > counts.F ? "T" : "F";
      const fourth = counts.J > counts.P ? "J" : "P";

      return first + second + third + fourth;
    };

    // 계산 시뮬레이션 (로딩 효과)
    setTimeout(() => {
      const result = calculateMBTI();
      setMbtiType(result);
      setIsCalculating(false);
    }, 2000);
  }, [userAnswers]);

  const getTypeDescription = (type: string) => {
    const descriptions: Record<string, string> = {
      ESTJ: "외향적, 감각적, 사고적, 판단적",
      ESTP: "외향적, 감각적, 사고적, 인식적",
      ESFJ: "외향적, 감각적, 감정적, 판단적",
      ESFP: "외향적, 감각적, 감정적, 인식적",
      ENTJ: "외향적, 직관적, 사고적, 판단적",
      ENTP: "외향적, 직관적, 사고적, 인식적",
      ENFJ: "외향적, 직관적, 감정적, 판단적",
      ENFP: "외향적, 직관적, 감정적, 인식적",
      ISTJ: "내향적, 감각적, 사고적, 판단적",
      ISTP: "내향적, 감각적, 사고적, 인식적",
      ISFJ: "내향적, 감각적, 감정적, 판단적",
      ISFP: "내향적, 감각적, 감정적, 인식적",
      INTJ: "내향적, 직관적, 사고적, 판단적",
      INTP: "내향적, 직관적, 사고적, 인식적",
      INFJ: "내향적, 직관적, 감정적, 판단적",
      INFP: "내향적, 직관적, 감정적, 인식적",
    };
    return descriptions[type] || "";
  };

  const getTypeEmoji = (type: string) => {
    const emojis: Record<string, string> = {
      ESTJ: "👑",
      ESTP: "🎯",
      ESFJ: "🤝",
      ESFP: "🎪",
      ENTJ: "💼",
      ENTP: "💡",
      ENFJ: "🌟",
      ENFP: "🌈",
      ISTJ: "📋",
      ISTP: "🔧",
      ISFJ: "🛡️",
      ISFP: "🎨",
      INTJ: "🧠",
      INTP: "🔬",
      INFJ: "🔮",
      INFP: "💫",
    };
    return emojis[type] || "✨";
  };

  if (isCalculating) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 text-center">
          <div className="mb-8">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-500 border-t-transparent mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              결과를 분석하고 있어요...
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              당신의 답변을 바탕으로 MBTI 유형을 계산 중입니다
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
        {/* 결과 헤더 */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{getTypeEmoji(mbtiType)}</div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {testData.results[mbtiType] || `${mbtiType} 유형`}
          </h2>
          <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-2">
            {mbtiType}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {getTypeDescription(mbtiType)}
          </p>
        </div>

        {/* 액션 버튼들 */}
        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            다시 테스트하기
          </button>
        </div>

        {/* 공유 기능 */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            친구들과 결과를 공유해보세요!
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                const text = `나의 ${testData.title || "MBTI"} 결과: ${
                  testData.results[mbtiType] || mbtiType
                } ${getTypeEmoji(mbtiType)}`;
                navigator.clipboard.writeText(text);
                alert("결과가 클립보드에 복사되었습니다!");
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
            >
              📋 결과 복사하기
            </button>
            <button
              onClick={() => {
                const url = window.location.href;
                navigator.clipboard.writeText(url);
                alert("링크가 클립보드에 복사되었습니다!");
              }}
              className="px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-200"
            >
              🔗 링크 공유하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
