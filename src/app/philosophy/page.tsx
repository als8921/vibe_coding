"use client";

import React, { useState, useEffect } from "react";
import {
  Header,
  QuoteDisplay,
  MainButton,
  Stats,
  Footer,
  IntroScreen,
  Quote,
  getRandomQuote,
} from "@/features/philosophy";

// 초기 명언 (서버와 클라이언트에서 동일하게 유지)
const initialQuote: Quote = {
  id: 0,
  text: "명언을 생성하려면 버튼을 눌러주세요!",
  category: "기본",
  author: "개똥철학자",
};

export default function PhilosophyPage() {
  const [currentQuote, setCurrentQuote] = useState<Quote>(initialQuote);
  const [clickCount, setClickCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // 클라이언트 사이드에서만 실행
  useEffect(() => {
    setIsClient(true);

    // 로컬 스토리지에서 클릭 횟수 불러오기
    const savedClickCount = localStorage.getItem("gaeddong-click-count");
    if (savedClickCount) {
      setClickCount(parseInt(savedClickCount, 10));
    }

    // 초기 명언 생성 (랜덤)
    const randomQuote = getRandomQuote();
    setCurrentQuote(randomQuote);

    // 인트로 화면 표시 여부 확인
    const hasSeenIntro = localStorage.getItem("gaeddong-intro-seen");
    if (hasSeenIntro) {
      setShowIntro(false);
    }
  }, []);

  const handleStart = () => {
    setShowIntro(false);
    localStorage.setItem("gaeddong-intro-seen", "true");
  };

  const handleButtonClick = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setIsAnimating(true);

    // 버튼 클릭 애니메이션을 위한 약간의 지연
    await new Promise((resolve) => setTimeout(resolve, 300));

    const newQuote = getRandomQuote();
    setCurrentQuote(newQuote);

    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    // 로컬 스토리지에 클릭 횟수 저장
    localStorage.setItem("gaeddong-click-count", newClickCount.toString());

    setIsLoading(false);
  };

  // 인트로 화면 표시
  if (showIntro) {
    return <IntroScreen onStart={handleStart} />;
  }

  return (
    <div className="philosophy-container">
      <Header />

      <main className="philosophy-main">
        <QuoteDisplay quote={currentQuote} isAnimating={isAnimating} />

        <MainButton onClick={handleButtonClick} isLoading={isLoading} />

        {isClient && <Stats clickCount={clickCount} />}
      </main>

      <Footer />

      {/* Background Elements */}
      <div className="philosophy-background-elements">
        <div className="pixel-cloud cloud-1">☁️</div>
        <div className="pixel-cloud cloud-2">☁️</div>
        <div className="pixel-cloud cloud-3">☁️</div>
        <div className="pixel-star star-1">⭐</div>
        <div className="pixel-star star-2">⭐</div>
        <div className="pixel-star star-3">⭐</div>
      </div>
    </div>
  );
}
