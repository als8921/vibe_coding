"use client";

import React from "react";
import { RecommendationResult as ResultType } from "../types";

interface RecommendationResultProps {
  result: ResultType;
  onRestart: () => void;
}

export const RecommendationResult: React.FC<RecommendationResultProps> = ({
  result,
  onRestart,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ko-KR").format(price);
  };

  return (
    <div className="space-y-8">
      {/* 헤더 */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          🌿 당신을 위한 식물 추천
        </h2>
        <p className="text-lg text-gray-600 mb-6">{result.summary}</p>

        {/* 총 예산 정보 */}
        <div className="bg-gradient-to-r from-green-100 to-mint-100 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            💰 예상 총 비용
          </h3>
          <div className="flex justify-center items-center space-x-4 text-lg">
            <span className="text-green-600 font-bold">
              {formatPrice(result.totalBudget.min)}원
            </span>
            <span className="text-gray-500">~</span>
            <span className="text-green-600 font-bold">
              {formatPrice(result.totalBudget.max)}원
            </span>
            <span className="text-gray-500">
              (평균: {formatPrice(result.totalBudget.average)}원)
            </span>
          </div>
        </div>
      </div>

      {/* 식물 추천 */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800 text-center">
          🌱 추천 식물
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {result.recommendations.map((plant, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {plant.name}
                  </h4>
                  <p className="text-sm text-gray-500 italic">
                    {plant.scientificName}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">
                    {formatPrice(plant.priceRange.average)}원
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatPrice(plant.priceRange.min)}~
                    {formatPrice(plant.priceRange.max)}원
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{plant.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-green-800 mb-1">
                    관리 난이도
                  </div>
                  <div className="text-sm text-green-600">
                    {plant.careLevel}
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-blue-800 mb-1">
                    빛 요구량
                  </div>
                  <div className="text-sm text-blue-600">
                    {plant.lightRequirement}
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-purple-800 mb-1">
                    물주기
                  </div>
                  <div className="text-sm text-purple-600">
                    {plant.wateringFrequency}
                  </div>
                </div>
                <div className="bg-pink-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-pink-800 mb-1">
                    추천 이유
                  </div>
                  <div className="text-sm text-pink-600">{plant.reason}</div>
                </div>
              </div>

              {plant.benefits.length > 0 && (
                <div className="bg-yellow-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-yellow-800 mb-2">
                    🌟 장점
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {plant.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 재시작 버튼 */}
      <div className="text-center pt-8">
        <button
          onClick={onRestart}
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-mint-500 text-white font-bold text-lg rounded-2xl hover:from-green-600 hover:to-mint-600 transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white/20"
        >
          🌱 다시 추천받기
        </button>
      </div>
    </div>
  );
};
