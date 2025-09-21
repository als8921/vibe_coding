"use client";

import React from "react";

export const DailyColorHeader: React.FC = () => {
  return (
    <header className="text-center py-8">
      <div className="animate-fadeInUp">
        <h1 className="text-pixel-4xl text-pink-600 mb-4 font-pixel">
          🌈 오늘의 컬러
        </h1>
        <p className="text-pixel-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          사주에 따라 그날그날 행운의 컬러를 추천해드려요!
          <br />
          나만의 특별한 컬러를 찾아보세요 ✨
        </p>
      </div>
    </header>
  );
};
