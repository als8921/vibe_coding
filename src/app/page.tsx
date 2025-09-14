"use client";

import { useState } from "react";
import TestPage from "./components/TestPage";
import ResultPage from "./components/ResultPage";
import { questionDatabase } from "./data/questions";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"intro" | "test" | "final">(
    "intro"
  );
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  // 고정된 질문 세트 (각 질문에서 E/I, S/N, T/F, J/P 모든 요소를 포함)
  const fixedQuestions = [
    questionDatabase.find((q) => q.id === "q1")!,
    questionDatabase.find((q) => q.id === "q2")!,
    questionDatabase.find((q) => q.id === "q3")!,
    questionDatabase.find((q) => q.id === "q4")!,
  ];

  const testData = {
    title: "나만의 MBTI 테스트",
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

  const handleStartTest = () => {
    setCurrentStep("test");
  };

  const handleTestComplete = (answers: string[]) => {
    setUserAnswers(answers);
    setCurrentStep("final");
  };

  const resetTest = () => {
    setCurrentStep("intro");
    setUserAnswers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-8">
        {currentStep === "intro" && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                🧠 MBTI 성격 유형 검사
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                간단한 질문에 답하고 당신의 성격 유형을 알아보세요!
              </p>
              <div className="space-y-4 text-left bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  ✨ 테스트 특징
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>
                    • <strong>4개의 간단한 질문</strong>으로 정확한 분석
                  </p>
                  <p>
                    • <strong>16가지 성격 유형</strong> 중 당신의 유형 발견
                  </p>
                  <p>
                    • <strong>즉시 결과 확인</strong> 가능
                  </p>
                  <p>
                    • <strong>친구들과 공유</strong> 가능
                  </p>
                </div>
              </div>
              <button
                onClick={handleStartTest}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                테스트 시작하기 🚀
              </button>
            </div>
          </div>
        )}

        {currentStep === "test" && (
          <TestPage
            testData={testData}
            onComplete={handleTestComplete}
            onReset={resetTest}
          />
        )}

        {currentStep === "final" && (
          <ResultPage
            testData={testData}
            userAnswers={userAnswers}
            onReset={resetTest}
          />
        )}
      </div>
    </div>
  );
}
