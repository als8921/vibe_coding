"use client";

import React from "react";
import { BubbleAnalysis } from "../types";

interface AnalysisResultProps {
  analysis: BubbleAnalysis;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ analysis }) => {
  const getBubbleLevelColor = (level: string) => {
    switch (level) {
      case "low":
        return "from-green-500 to-green-400";
      case "moderate":
        return "from-yellow-500 to-yellow-400";
      case "high":
        return "from-orange-500 to-orange-400";
      case "extreme":
        return "from-red-500 to-red-400";
      default:
        return "from-gray-500 to-gray-400";
    }
  };

  const getBubbleLevelText = (level: string) => {
    switch (level) {
      case "low":
        return "낮음";
      case "moderate":
        return "보통";
      case "high":
        return "높음";
      case "extreme":
        return "극심";
      default:
        return "알 수 없음";
    }
  };

  const getRecommendationIcon = (action: string) => {
    if (action.includes("매수")) return "📈";
    if (action.includes("매도")) return "📉";
    if (action.includes("관망")) return "👀";
    if (action.includes("분할")) return "⚖️";
    return "💡";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* 리스크 평가 */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">⚠️</span>
          리스크 평가
        </h3>

        {/* 버블 수준 표시 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">현재 버블 수준</span>
            <span className="text-sm font-medium text-white">
              {getBubbleLevelText(analysis.bubbleLevel)}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${getBubbleLevelColor(
                analysis.bubbleLevel
              )} transition-all duration-1000`}
              style={{
                width:
                  analysis.bubbleLevel === "low"
                    ? "25%"
                    : analysis.bubbleLevel === "moderate"
                    ? "50%"
                    : analysis.bubbleLevel === "high"
                    ? "75%"
                    : "100%",
              }}
            />
          </div>
        </div>

        {/* 리스크 설명 */}
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="text-sm font-bold text-gray-300 mb-2">
              시장 상황 분석
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              {analysis.riskAssessment}
            </p>
          </div>

          {/* 과거 유사 시기 */}
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="text-sm font-bold text-gray-300 mb-2">
              과거 유사 시기
            </h4>
            <div className="flex flex-wrap gap-2">
              {analysis.historicalComparison.similarPeriods.map(
                (period, index) => (
                  <span
                    key={index}
                    className="text-xs bg-orange-900/30 text-orange-300 px-2 py-1 rounded border border-orange-700/50"
                  >
                    {period}
                  </span>
                )
              )}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {analysis.historicalComparison.currentVsHistorical}
            </p>
          </div>
        </div>
      </div>

      {/* 투자 권고사항 */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="text-2xl">
            {getRecommendationIcon(analysis.recommendation.action)}
          </span>
          투자 권고사항
        </h3>

        {/* 권고 행동 */}
        <div className="mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg border border-blue-700/50">
            <h4 className="text-lg font-bold text-blue-300 mb-2">
              권고 행동: {analysis.recommendation.action}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {analysis.recommendation.reasoning}
            </p>
          </div>
        </div>

        {/* 추가 고려사항 */}
        <div className="space-y-4">
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h4 className="text-sm font-bold text-gray-300 mb-2">
              투자 시 고려사항
            </h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>
                  레버리지 거래는 현재{" "}
                  {analysis.nasdaqLeverageRatio >= 0.8 ? "높은" : "보통"}{" "}
                  수준입니다
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>
                  시가총액/GDP 비율이{" "}
                  {analysis.marketCapToGDPRatio >= 1.5 ? "높은" : "적정"}{" "}
                  수준입니다
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">•</span>
                <span>
                  과거 버블 시기와 비교하여{" "}
                  {analysis.bubbleLevel === "high" ||
                  analysis.bubbleLevel === "extreme"
                    ? "주의가"
                    : "안정적인"}{" "}
                  필요합니다
                </span>
              </li>
            </ul>
          </div>

          {/* 주의사항 */}
          <div className="p-4 bg-red-900/20 rounded-lg border border-red-700/50">
            <h4 className="text-sm font-bold text-red-300 mb-2 flex items-center gap-2">
              <span>⚠️</span>
              중요 주의사항
            </h4>
            <p className="text-xs text-gray-400">
              이 분석은 과거 데이터를 바탕으로 한 참고용 정보입니다. 투자 결정은
              개인의 상황과 리스크 감수 능력을 고려하여 신중하게 하시기
              바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
