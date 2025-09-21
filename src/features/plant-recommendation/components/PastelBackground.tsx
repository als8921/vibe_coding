"use client";

import React from "react";

export const PastelBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-mint-50 to-emerald-100" />

      {/* 부드러운 원형 요소들 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-30 animate-pulse-slow" />
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-mint-200 rounded-full opacity-40 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-emerald-200 rounded-full opacity-25 animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-28 h-28 bg-lime-200 rounded-full opacity-35 animate-pulse-slow"
        style={{ animationDelay: "0.5s" }}
      />

      {/* 작은 파티클들 */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-green-300 rounded-full opacity-50 animate-pulse-slow" />
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-mint-300 rounded-full opacity-60 animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-emerald-300 rounded-full opacity-40 animate-pulse-slow"
        style={{ animationDelay: "0.8s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-lime-300 rounded-full opacity-70 animate-pulse-slow"
        style={{ animationDelay: "2.2s" }}
      />

      {/* 식물 관련 장식 요소들 */}
      <div className="absolute top-1/2 left-1/6 w-6 h-6 bg-green-400 rounded-full opacity-30 animate-bounce" />
      <div
        className="absolute top-1/6 right-1/6 w-4 h-4 bg-mint-400 rounded-full opacity-40 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/6 left-1/2 w-3 h-3 bg-emerald-400 rounded-full opacity-50 animate-bounce"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};
