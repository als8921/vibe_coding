"use client";

import { useState } from "react";

interface TestPageProps {
  testData: {
    title: string;
    questions: Array<{
      question: string;
      options: {
        text: string;
        type: "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
      }[];
    }>;
    results: Record<string, string>;
  };
  onComplete: (answers: string[]) => void;
  onReset: () => void;
}

export default function TestPage({
  testData,
  onComplete,
  onReset,
}: TestPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < testData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const currentQ = testData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / testData.questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            🧠 {testData.title || "나만의 MBTI 테스트"}
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              질문 {currentQuestion + 1} / {testData.questions.length}
            </span>
            <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* 질문 */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center leading-relaxed">
              {currentQ?.question}
            </h3>
          </div>

          {/* 선택지 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQ?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option.type)}
                className="p-6 text-left bg-white dark:bg-gray-700 rounded-2xl border-2 border-gray-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <span className="text-lg text-gray-800 dark:text-white font-medium">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="flex justify-between items-center">
          <button
            onClick={onReset}
            className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            ← 처음으로 돌아가기
          </button>

          {currentQuestion > 0 && (
            <button
              onClick={handlePrevious}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              ← 이전 질문
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
