"use client";

import React from "react";
import Image from "next/image";

interface IntroScreenProps {
  onStart: () => void;
  className?: string;
}

const IntroScreen: React.FC<IntroScreenProps> = ({
  onStart,
  className = "",
}) => {
  return (
    <div className={`philosophy-intro-screen ${className}`}>
      <div className="philosophy-intro-container">
        {/* 메인 아이콘 */}
        <div className="philosophy-intro-logo">
          <Image
            src="/philosophy-icon.png"
            alt="개똥철학 로고"
            width={300}
            height={300}
            className="philosophy-intro-icon"
            priority
          />
        </div>

        {/* 부제목만 표시 */}
        <div className="philosophy-intro-title-section">
          <p className="philosophy-intro-subtitle">
            외로운 당신을 위한 특별한 위로
          </p>
        </div>

        {/* 시작하기 버튼 */}
        <div className="philosophy-intro-button-container">
          <button className="philosophy-intro-start-button" onClick={onStart}>
            <span className="philosophy-button-text">시작하기</span>
            <span className="philosophy-button-arrow">→</span>
          </button>
        </div>

        {/* 하단 텍스트 */}
        <div className="philosophy-intro-footer">
          <p className="philosophy-intro-description">
            버튼을 눌러서 위로의 명언을 받아보세요
          </p>
        </div>
      </div>

      {/* 배경 요소들 */}
      <div className="philosophy-intro-background-elements">
        <div className="philosophy-intro-cloud cloud-1">☁️</div>
        <div className="philosophy-intro-cloud cloud-2">☁️</div>
        <div className="philosophy-intro-cloud cloud-3">☁️</div>
        <div className="philosophy-intro-star star-1">⭐</div>
        <div className="philosophy-intro-star star-2">⭐</div>
        <div className="philosophy-intro-star star-3">⭐</div>
      </div>
    </div>
  );
};

export default IntroScreen;
