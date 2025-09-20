"use client";

import React from "react";

interface MainButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  className?: string;
}

const MainButton: React.FC<MainButtonProps> = ({
  onClick,
  isLoading = false,
  className = "",
}) => {
  return (
    <div className={`mb-8 ${className}`}>
      <button
        className="w-80 h-20 rounded-2xl bg-gradient-to-br from-pink-400 to-cyan-400 text-white text-pixel-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
        onClick={onClick}
        disabled={isLoading}
        aria-label="새로운 명언 생성하기"
      >
        <span className="text-center leading-tight px-4">
          {isLoading ? "생성 중..." : "새로운 위로 받기"}
        </span>
      </button>
    </div>
  );
};

export default MainButton;
