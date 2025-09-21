"use client";

import React, { useState } from "react";
import { SlotMachine } from "./SlotMachine";
import { SpinButton } from "./SpinButton";
import { ResultDisplay } from "./ResultDisplay";
import { DetailModal } from "./DetailModal";
import { FunMachineState, ActivityItem } from "../types";

export const FunMachineApp: React.FC = () => {
  const [state, setState] = useState<FunMachineState>({
    isSpinning: false,
    currentResult: null,
    showDetails: false,
    spinCount: 0,
  });

  const handleSpin = () => {
    setState((prev) => ({
      ...prev,
      isSpinning: true,
      currentResult: null,
      showDetails: false,
    }));
  };

  const handleSpinComplete = () => {
    setState((prev) => ({
      ...prev,
      isSpinning: false,
    }));
  };

  const handleResult = (result: ActivityItem) => {
    setState((prev) => ({
      ...prev,
      currentResult: result,
      spinCount: prev.spinCount + 1,
    }));
  };

  const handleShowDetails = () => {
    setState((prev) => ({
      ...prev,
      showDetails: true,
    }));
  };

  const handleCloseDetails = () => {
    setState((prev) => ({
      ...prev,
      showDetails: false,
    }));
  };

  const handleSpinAgain = () => {
    handleSpin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      {/* 배경 패턴 */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ff6b6b 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #4ecdc4 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* 스핀 중일 때 배경 효과 */}
      {state.isSpinning && (
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-red-400/10 to-yellow-400/10 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-300/20 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-red-300/20 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-300/10 rounded-full animate-ping delay-700"></div>
        </div>
      )}

      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* 메인 헤더 */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-pixel-4xl text-white font-bold mb-4 drop-shadow-lg">
              🎰 재미자판기 🎰
            </h1>
            <p className="text-pixel-lg text-white/90 mb-2">
              온갖 액티비티와 음식을 랜덤으로 추천해드려요!
            </p>
            <p className="text-pixel-base text-white/80">
              레버를 당기면 신나는 추천이 나와요! 🎉
            </p>
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="space-y-8">
          {/* 슬롯머신 */}
          <div className="flex justify-center">
            <SlotMachine
              onResult={handleResult}
              isSpinning={state.isSpinning}
              onSpinComplete={handleSpinComplete}
            />
          </div>

          {/* 스핀 버튼 */}
          <div className="flex justify-center">
            <SpinButton
              onSpin={handleSpin}
              isSpinning={state.isSpinning}
              disabled={state.isSpinning}
            />
          </div>

          {/* 결과 표시 */}
          {state.currentResult && (
            <div className="flex justify-center">
              <ResultDisplay
                result={state.currentResult}
                onShowDetails={handleShowDetails}
                onSpinAgain={handleSpinAgain}
                spinCount={state.spinCount}
              />
            </div>
          )}
        </div>

        {/* 통계 정보 */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-pixel-xl text-white font-bold mb-4">
              📊 자판기 통계
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-pixel-sm">
              <div className="text-white/90">
                <div className="text-2xl mb-1">🎯</div>
                <div>총 스핀</div>
                <div className="font-bold text-white">{state.spinCount}회</div>
              </div>
              <div className="text-white/90">
                <div className="text-2xl mb-1">🎲</div>
                <div>추천 가능</div>
                <div className="font-bold text-white">20가지</div>
              </div>
              <div className="text-white/90">
                <div className="text-2xl mb-1">🎪</div>
                <div>액티비티</div>
                <div className="font-bold text-white">10개</div>
              </div>
              <div className="text-white/90">
                <div className="text-2xl mb-1">🍽️</div>
                <div>음식</div>
                <div className="font-bold text-white">10개</div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 안내 */}
        <div className="mt-8 text-center">
          <p className="text-pixel-sm text-white/70">
            계속 돌리고 싶은 마음이 드는 중독성 있는 재미자판기! 🎰✨
          </p>
        </div>
      </div>

      {/* 상세 모달 */}
      {state.currentResult && (
        <DetailModal
          result={state.currentResult}
          isOpen={state.showDetails}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};
