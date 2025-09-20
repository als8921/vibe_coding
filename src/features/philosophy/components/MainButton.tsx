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
    <div className={`philosophy-button-container ${className}`}>
      <button
        className="philosophy-main-button"
        onClick={onClick}
        disabled={isLoading}
        aria-label="새로운 명언 생성하기"
      >
        <span className="philosophy-button-text">
          {isLoading ? "생성 중..." : "새로운 위로 받기"}
        </span>
      </button>
    </div>
  );
};

export default MainButton;
