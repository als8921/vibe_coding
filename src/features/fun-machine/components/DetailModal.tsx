"use client";

import React, { useEffect } from "react";
import { DetailModalProps } from "../types";

export const DetailModal: React.FC<DetailModalProps> = ({
  result,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* 모달 콘텐츠 */}
      <div className="relative bg-gradient-to-b from-blue-400 to-blue-600 p-8 rounded-3xl border-4 border-blue-800 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full border-2 border-red-800 flex items-center justify-center text-pixel-base hover:bg-red-600 transition-colors"
        >
          ✕
        </button>

        {/* 헤더 */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{result.emoji}</div>
          <h2 className="text-pixel-3xl text-blue-900 font-bold mb-2">
            {result.name} 상세정보
          </h2>
          <p className="text-pixel-base text-blue-800 bg-white/80 p-3 rounded-xl border-2 border-blue-300">
            {result.description}
          </p>
        </div>

        {/* 상세 정보 */}
        <div className="space-y-4">
          {/* 기본 정보 */}
          <div className="bg-white/90 p-4 rounded-xl border-2 border-blue-300">
            <h3 className="text-pixel-lg text-blue-900 font-bold mb-3">
              📋 기본 정보
            </h3>
            <div className="grid grid-cols-2 gap-4 text-pixel-sm">
              {result.details.location && (
                <div>
                  <div className="text-blue-700 font-bold">📍 위치</div>
                  <div className="text-gray-800">{result.details.location}</div>
                </div>
              )}
              {result.details.duration && (
                <div>
                  <div className="text-blue-700 font-bold">⏰ 소요시간</div>
                  <div className="text-gray-800">{result.details.duration}</div>
                </div>
              )}
              {result.details.difficulty && (
                <div>
                  <div className="text-blue-700 font-bold">⚡ 난이도</div>
                  <div className="text-gray-800">
                    {result.details.difficulty === "easy" && "🟢 쉬움"}
                    {result.details.difficulty === "medium" && "🟡 보통"}
                    {result.details.difficulty === "hard" && "🔴 어려움"}
                  </div>
                </div>
              )}
              {result.details.price && (
                <div>
                  <div className="text-blue-700 font-bold">💰 가격</div>
                  <div className="text-gray-800">
                    {result.details.price === "free" && "🟢 무료"}
                    {result.details.price === "cheap" && "🟡 저렴"}
                    {result.details.price === "moderate" && "🟠 보통"}
                    {result.details.price === "expensive" && "🔴 비쌈"}
                  </div>
                </div>
              )}
              {result.details.bestTime && (
                <div className="col-span-2">
                  <div className="text-blue-700 font-bold">🌟 추천 시간</div>
                  <div className="text-gray-800">{result.details.bestTime}</div>
                </div>
              )}
            </div>
          </div>

          {/* 팁 */}
          {result.details.tips && result.details.tips.length > 0 && (
            <div className="bg-white/90 p-4 rounded-xl border-2 border-blue-300">
              <h3 className="text-pixel-lg text-blue-900 font-bold mb-3">
                💡 유용한 팁
              </h3>
              <ul className="space-y-2">
                {result.details.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-pixel-sm text-gray-800"
                  >
                    <span className="text-yellow-500 mt-1">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-b from-green-500 to-green-700 text-white font-bold text-pixel-lg rounded-xl border-2 border-green-800 shadow-lg hover:scale-105 transition-transform duration-200"
          >
            확인했어요! 👍
          </button>
        </div>

        {/* 장식 요소 */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-300 border-2 border-blue-700 rounded-full"></div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-300 border-2 border-blue-700 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-300 border-2 border-blue-700 rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-blue-300 border-2 border-blue-700 rounded-full"></div>
      </div>
    </div>
  );
};
