"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Header,
  QuoteDisplay,
  MainButton,
  Stats,
  Footer,
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
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pink-50 to-cyan-50 flex items-center justify-center z-50">
        <div className="text-center p-8 max-w-md w-full">
          <div className="mb-8">
            <Image
              src="/philosophy-icon.png"
              alt="개똥철학 로고"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-2xl shadow-xl"
            />
          </div>
          <div className="mb-12">
            <p className="text-pixel-lg text-gray-700 opacity-80">
              외로운 당신을 위한 특별한 위로
            </p>
          </div>
          <div className="mb-10">
            <button
              onClick={handleStart}
              className="bg-gradient-to-r from-pink-400 to-cyan-400 text-white px-8 py-4 rounded-2xl text-pixel-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-4 mx-auto"
            >
              <span>시작하기</span>
              <span>→</span>
            </button>
          </div>
          <div>
            <p className="text-pixel-sm text-gray-700 opacity-70">
              버튼을 눌러서 위로의 명언을 받아보세요
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-50 to-cyan-50 flex flex-col items-center justify-center relative overflow-hidden">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <QuoteDisplay quote={currentQuote} isAnimating={isAnimating} />

        <MainButton onClick={handleButtonClick} isLoading={isLoading} />

        {isClient && <Stats clickCount={clickCount} />}
      </main>

      <Footer />

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-2xl opacity-60">☁️</div>
        <div className="absolute top-20 right-15 text-2xl opacity-60">☁️</div>
        <div className="absolute bottom-30 left-20 text-2xl opacity-60">☁️</div>
        <div className="absolute top-15 right-30 text-2xl opacity-60">⭐</div>
        <div className="absolute bottom-20 right-10 text-2xl opacity-60">
          ⭐
        </div>
        <div className="absolute top-60 left-5 text-2xl opacity-60">⭐</div>
      </div>
    </div>
  );
}
