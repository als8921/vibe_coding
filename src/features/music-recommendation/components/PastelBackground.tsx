"use client";

import React from "react";

export const PastelBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 via-mint-50 to-pink-100" />

      {/* 부드러운 원형 요소들 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-lavender-200 rounded-full opacity-30 animate-pulse-slow" />
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-mint-200 rounded-full opacity-40 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-200 rounded-full opacity-25 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-28 h-28 bg-peach-200 rounded-full opacity-35 animate-pulse-slow"
        style={{ animationDelay: "0.5s" }}
      />

      {/* 작은 파티클들 */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-lavender-300 rounded-full opacity-50 animate-pulse-slow" />
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-mint-300 rounded-full opacity-60 animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-pink-300 rounded-full opacity-40 animate-pulse-slow"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-peach-300 rounded-full opacity-70 animate-pulse-slow"
        style={{ animationDelay: "2.2s" }}
      />

      {/* 음악 관련 이모지 파티클 */}
      <div className="absolute top-1/2 left-1/6 text-2xl opacity-20 animate-pulse-slow">
        🎵
      </div>
      <div
        className="absolute top-2/3 right-1/6 text-xl opacity-25 animate-pulse-slow"
        style={{ animationDelay: "1.2s" }}
      >
        🎶
      </div>
      <div
        className="absolute bottom-1/2 left-2/3 text-lg opacity-30 animate-pulse-slow"
        style={{ animationDelay: "0.7s" }}
      >
        🎤
      </div>
    </div>
  );
};
