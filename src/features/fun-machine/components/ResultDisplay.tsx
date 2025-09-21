"use client";

import React from "react";
import { ResultDisplayProps } from "../types";

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
  result,
  onShowDetails,
  onSpinAgain,
  spinCount,
}) => {
  return (
    <div className="bg-gradient-to-b from-green-400 to-green-600 p-8 rounded-3xl border-4 border-green-800 shadow-2xl">
      {/* 결과 헤더 */}
      <div className="text-center mb-6">
        <div className="text-6xl mb-4 animate-bounce">{result.emoji}</div>
        <h2 className="text-pixel-3xl text-green-900 font-bold mb-2">
          🎉 추천 결과 🎉
        </h2>
        <p className="text-pixel-xl text-green-800 mb-4">{result.name}</p>
        <p className="text-pixel-base text-green-700 bg-white/80 p-3 rounded-xl border-2 border-green-300">
          {result.description}
        </p>
      </div>

      {/* 카테고리 태그 */}
      <div className="flex justify-center gap-4 mb-6">
        <span className="px-4 py-2 bg-white/90 text-pixel-sm text-gray-800 rounded-full border-2 border-green-300">
          {result.category === "activity" ? "🎯 액티비티" : "🍽️ 음식"}
        </span>
        <span className="px-4 py-2 bg-white/90 text-pixel-sm text-gray-800 rounded-full border-2 border-green-300">
          {result.subcategory}
        </span>
      </div>

      {/* 기본 정보 */}
      <div className="bg-white/90 p-4 rounded-xl border-2 border-green-300 mb-6">
        <div className="grid grid-cols-2 gap-4 text-pixel-sm">
          {result.details.duration && (
            <div className="text-center">
              <div className="text-green-700 font-bold">⏰ 소요시간</div>
              <div className="text-gray-800">{result.details.duration}</div>
            </div>
          )}
          {result.details.price && (
            <div className="text-center">
              <div className="text-green-700 font-bold">💰 가격</div>
              <div className="text-gray-800">
                {result.details.price === "free" && "무료"}
                {result.details.price === "cheap" && "저렴"}
                {result.details.price === "moderate" && "보통"}
                {result.details.price === "expensive" && "비쌈"}
              </div>
            </div>
          )}
          {result.details.difficulty && (
            <div className="text-center">
              <div className="text-green-700 font-bold">⚡ 난이도</div>
              <div className="text-gray-800">
                {result.details.difficulty === "easy" && "쉬움"}
                {result.details.difficulty === "medium" && "보통"}
                {result.details.difficulty === "hard" && "어려움"}
              </div>
            </div>
          )}
          {result.details.bestTime && (
            <div className="text-center">
              <div className="text-green-700 font-bold">🌟 추천시간</div>
              <div className="text-gray-800">{result.details.bestTime}</div>
            </div>
          )}
        </div>
      </div>

      {/* 액션 버튼들 */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={onShowDetails}
          className="px-6 py-3 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold text-pixel-base rounded-xl border-2 border-blue-800 shadow-lg hover:scale-105 transition-transform duration-200"
        >
          📋 상세설명 보기
        </button>
        <button
          onClick={onSpinAgain}
          className="px-6 py-3 bg-gradient-to-b from-purple-500 to-purple-700 text-white font-bold text-pixel-base rounded-xl border-2 border-purple-800 shadow-lg hover:scale-105 transition-transform duration-200"
        >
          🎰 다시 돌리기
        </button>
      </div>

      {/* 스핀 카운터 */}
      <div className="text-center">
        <p className="text-pixel-sm text-green-800">
          총 {spinCount}번 돌렸습니다! 🎯
        </p>
      </div>

      {/* 장식 요소 */}
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-300 border-2 border-green-700 rounded-full"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-300 border-2 border-green-700 rounded-full"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-300 border-2 border-green-700 rounded-full"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-300 border-2 border-green-700 rounded-full"></div>
    </div>
  );
};
