"use client";

import React from "react";

interface SpinButtonProps {
  onSpin: () => void;
  isSpinning: boolean;
  disabled?: boolean;
}

export const SpinButton: React.FC<SpinButtonProps> = ({
  onSpin,
  isSpinning,
  disabled = false,
}) => {
  return (
    <div className="relative">
      {/* 레버 당기는 버튼 */}
      <button
        onClick={onSpin}
        disabled={isSpinning || disabled}
        className={`
          relative px-12 py-6 bg-gradient-to-b from-red-500 to-red-700 
          text-white font-bold text-pixel-xl rounded-2xl 
          border-4 border-red-800 shadow-2xl
          transform transition-all duration-200
          hover:scale-105 active:scale-95 active:translate-y-1
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          ${isSpinning ? "animate-pulse" : ""}
          hover:shadow-red-500/50 hover:shadow-3xl
        `}
        style={{
          textShadow: "2px 2px 0px rgba(0,0,0,0.5)",
          boxShadow: isSpinning
            ? "0 8px 0px rgba(139, 69, 19, 0.8), inset 0 2px 0px rgba(255,255,255,0.3), 0 0 20px rgba(239, 68, 68, 0.5)"
            : "0 8px 0px rgba(139, 69, 19, 0.8), inset 0 2px 0px rgba(255,255,255,0.3)",
        }}
      >
        <div className="flex items-center gap-3">
          {/* 레버 아이콘 애니메이션 */}
          <span
            className={`text-2xl transition-transform duration-200 ${
              isSpinning ? "animate-bounce rotate-12" : ""
            }`}
          >
            🎰
          </span>
          <span>{isSpinning ? "돌리는 중..." : "레버 당기기!"}</span>
          <span
            className={`text-2xl transition-transform duration-200 ${
              isSpinning ? "animate-bounce -rotate-12" : ""
            }`}
          >
            🎰
          </span>
        </div>

        {/* 버튼 하이라이트 효과 */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-2xl pointer-events-none"></div>

        {/* 버튼 그림자 효과 */}
        <div className="absolute -bottom-2 left-0 right-0 h-4 bg-red-900 rounded-2xl opacity-30"></div>
      </button>

      {/* 스핀 중일 때 추가 효과 */}
      {isSpinning && (
        <>
          {/* 글로우 효과 */}
          <div className="absolute inset-0 bg-red-500/20 rounded-2xl animate-ping"></div>

          {/* 파티클 효과 */}
          <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute -top-4 -right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100"></div>
          <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-200"></div>
          <div className="absolute -bottom-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        </>
      )}
    </div>
  );
};
