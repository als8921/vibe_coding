"use client";

import React, { useState, useEffect } from "react";
import { ActivityItem } from "../types";
import { ACTIVITY_DATA } from "../data/activities";

interface SlotMachineProps {
  onResult: (result: ActivityItem) => void;
  isSpinning: boolean;
  onSpinComplete: () => void;
}

export const SlotMachine: React.FC<SlotMachineProps> = ({
  onResult,
  isSpinning,
  onSpinComplete,
}) => {
  const [slots, setSlots] = useState<ActivityItem[]>([
    ACTIVITY_DATA[0],
    ACTIVITY_DATA[1],
    ACTIVITY_DATA[2],
  ]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomActivity = (): ActivityItem => {
    return ACTIVITY_DATA[Math.floor(Math.random() * ACTIVITY_DATA.length)];
  };

  useEffect(() => {
    if (isSpinning) {
      setIsAnimating(true);

      // 슬롯 애니메이션 효과
      const animationInterval = setInterval(() => {
        setSlots([
          getRandomActivity(),
          getRandomActivity(),
          getRandomActivity(),
        ]);
      }, 100);

      // 3초 후 결과 결정
      setTimeout(() => {
        clearInterval(animationInterval);
        const finalResult = getRandomActivity();
        setSlots([finalResult, finalResult, finalResult]);
        setIsAnimating(false);
        onResult(finalResult);
        onSpinComplete();
      }, 3000);
    }
  }, [isSpinning, onResult, onSpinComplete]);

  return (
    <div className="relative bg-gradient-to-b from-yellow-400 to-yellow-600 p-8 rounded-3xl border-4 border-yellow-800 shadow-2xl">
      {/* 슬롯머신 헤더 */}
      <div className="text-center mb-6">
        <h2 className="text-pixel-3xl text-yellow-900 font-bold mb-2">
          🎰 재미자판기 🎰
        </h2>
        <p className="text-pixel-base text-yellow-800">
          레버를 당겨서 랜덤 추천을 받아보세요!
        </p>
      </div>

      {/* 슬롯 창 */}
      <div className="flex justify-center gap-4 mb-8">
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`w-24 h-32 bg-white border-4 border-gray-800 rounded-lg flex flex-col items-center justify-center transition-all duration-200 relative overflow-hidden ${
              isAnimating ? "animate-pulse" : ""
            }`}
            style={{
              boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            {/* 슬롯 내부 글로우 효과 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

            {/* 슬롯 스크롤 효과 */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center transition-transform duration-100 ${
                isAnimating ? "animate-spin" : ""
              }`}
              style={{
                transform: isAnimating ? "translateY(-100%)" : "translateY(0)",
              }}
            >
              <div className="text-4xl mb-2">{slot.emoji}</div>
              <div className="text-pixel-xs text-center text-gray-800 px-1">
                {slot.name}
              </div>
            </div>

            {/* 슬롯 하이라이트 */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* 레버 */}
      <div className="flex justify-center">
        <div className="relative">
          {/* 레버 본체 */}
          <div className="w-8 h-20 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full border-2 border-gray-900 shadow-inner">
            {/* 레버 그립 */}
            <div
              className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-red-500 to-red-700 rounded-full border-2 border-red-800 cursor-pointer transition-all duration-200 hover:scale-110 ${
                isSpinning ? "translate-y-12 rotate-3" : "hover:translate-y-1"
              }`}
              style={{
                boxShadow: isSpinning
                  ? "0 4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)"
                  : "0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              {/* 그립 텍스처 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-red-400/20 to-transparent"></div>
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-red-800 rounded-full"></div>
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-red-800 rounded-full"></div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-red-800 rounded-full"></div>
            </div>

            {/* 레버 하단 연결부 */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-700 rounded-full border border-gray-900"></div>
          </div>

          {/* 레버 베이스 */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 shadow-lg">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* 장식 요소 */}
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-300 border-2 border-yellow-700 rounded-full"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-300 border-2 border-yellow-700 rounded-full"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 border-2 border-yellow-700 rounded-full"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-300 border-2 border-yellow-700 rounded-full"></div>

      {/* LED 조명 효과 */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <div
          className={`absolute top-4 left-4 w-2 h-2 bg-red-500 rounded-full transition-all duration-200 ${
            isSpinning
              ? "animate-pulse shadow-red-500 shadow-lg"
              : "animate-pulse"
          }`}
        ></div>
        <div
          className={`absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full transition-all duration-200 ${
            isSpinning
              ? "animate-pulse shadow-blue-500 shadow-lg"
              : "animate-pulse"
          }`}
        ></div>
        <div
          className={`absolute bottom-4 left-4 w-2 h-2 bg-green-500 rounded-full transition-all duration-200 ${
            isSpinning
              ? "animate-pulse shadow-green-500 shadow-lg"
              : "animate-pulse"
          }`}
        ></div>
        <div
          className={`absolute bottom-4 right-4 w-2 h-2 bg-yellow-500 rounded-full transition-all duration-200 ${
            isSpinning
              ? "animate-pulse shadow-yellow-500 shadow-lg"
              : "animate-pulse"
          }`}
        ></div>

        {/* 스핀 중 추가 조명 효과 */}
        {isSpinning && (
          <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-yellow-300/10 rounded-full animate-ping delay-150"></div>
          </>
        )}
      </div>
    </div>
  );
};
