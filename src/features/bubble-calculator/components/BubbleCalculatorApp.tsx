"use client";

import React, { useState } from "react";
import { BubbleAnalysis, BubbleCalculatorState } from "../types";
import { MarketRatioChart } from "./MarketRatioChart";
import { LeverageRatioChart } from "./LeverageRatioChart";
import { TimeSeriesChart } from "./TimeSeriesChart";
import { AnalysisResult } from "./AnalysisResult";
import { DarkBackground } from "./DarkBackground";

export const BubbleCalculatorApp: React.FC = () => {
  const [state, setState] = useState<BubbleCalculatorState>({
    isLoading: false,
    analysis: null,
    error: null,
    historicalData: [],
  });

  const handleAnalyze = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: null,
    }));

    try {
      const response = await fetch("/api/bubble-calculator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("분석 요청이 실패했습니다.");
      }

      const analysis: BubbleAnalysis = await response.json();

      setState((prev) => ({
        ...prev,
        analysis,
        isLoading: false,
      }));
    } catch (error) {
      console.error("버블 분석 오류:", error);
      setState((prev) => ({
        ...prev,
        error:
          error instanceof Error
            ? error.message
            : "알 수 없는 오류가 발생했습니다.",
        isLoading: false,
      }));
    }
  };

  const handleReset = () => {
    setState({
      isLoading: false,
      analysis: null,
      error: null,
      historicalData: [],
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <DarkBackground />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-12">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800">
              <h1 className="text-4xl font-bold text-white mb-4">
                📊 주식시장 버블 계산기
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                과거 60년간의 데이터로 2025년 현재 주식시장의 버블 상태를
                분석합니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleAnalyze}
                  disabled={state.isLoading}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-cyan-400"
                >
                  {state.isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      분석 중...
                    </span>
                  ) : (
                    "시장 분석하기"
                  )}
                </button>
                {state.analysis && (
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 bg-gray-700 text-white font-bold rounded-xl hover:bg-gray-600 transition-all duration-300 border border-gray-600"
                  >
                    다시 분석
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 에러 메시지 */}
          {state.error && (
            <div className="mb-8">
              <div className="bg-red-900/50 border border-red-500 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <span className="text-red-400">⚠️</span>
                  <span className="text-red-300">{state.error}</span>
                </div>
              </div>
            </div>
          )}

          {/* 분석 결과 */}
          {state.analysis && (
            <div className="space-y-8">
              {/* 주요 지표 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-cyan-400 mb-2">
                    시가총액/M2 비율
                  </h3>
                  <div className="text-3xl font-bold text-white">
                    {state.analysis.marketCapToM2Ratio.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    통화량 대비 주식시장 규모
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-purple-400 mb-2">
                    시가총액/GDP 비율
                  </h3>
                  <div className="text-3xl font-bold text-white">
                    {state.analysis.marketCapToGDPRatio.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    경제 규모 대비 주식시장 규모
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-lg font-bold text-orange-400 mb-2">
                    레버리지 청산 비율
                  </h3>
                  <div className="text-3xl font-bold text-white">
                    {(state.analysis.nasdaqLeverageRatio * 100).toFixed(1)}%
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    나스닥 레버리지 거래 비중
                  </div>
                </div>
              </div>

              {/* 시계열 차트 */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                <TimeSeriesChart analysis={state.analysis} />
              </div>

              {/* 차트 섹션 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">
                    시장 비율 추이
                  </h3>
                  <MarketRatioChart analysis={state.analysis} />
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">
                    레버리지 청산 비율
                  </h3>
                  <LeverageRatioChart analysis={state.analysis} />
                </div>
              </div>

              {/* 분석 결과 상세 */}
              <AnalysisResult analysis={state.analysis} />
            </div>
          )}

          {/* 로딩 상태 */}
          {state.isLoading && (
            <div className="text-center py-12">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="text-6xl mb-4 animate-pulse">📊</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  주식시장을 분석하고 있어요...
                </h3>
                <p className="text-gray-400">
                  과거 60년간의 데이터를 비교 분석 중입니다 ✨
                </p>
              </div>
            </div>
          )}

          {/* 초기 안내 */}
          {!state.analysis && !state.isLoading && (
            <div className="text-center py-12">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  주식시장 버블 분석을 시작해보세요
                </h3>
                <p className="text-gray-400 mb-6">
                  AI가 과거 버블 시기와 2025년 현재를 비교하여
                  <br />
                  투자 위험도를 객관적으로 분석해드립니다
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>과거 60년 데이터 분석</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>레버리지 거래 분석</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>투자 권고사항 제공</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
