"use client";

import React from "react";
import { ColorRecommendation } from "../types";

interface ColorResultDisplayProps {
  recommendation: ColorRecommendation;
  onReset: () => void;
}

export const ColorResultDisplay: React.FC<ColorResultDisplayProps> = ({
  recommendation,
  onReset,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* 메인 컬러 카드 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="text-center mb-6">
          <h2 className="text-pixel-3xl text-gray-800 font-pixel mb-2">
            🌟 오늘의 행운 컬러
          </h2>
          <p className="text-pixel-base text-gray-600">
            {new Date(recommendation.date).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}{" "}
            추천
          </p>
        </div>

        {/* 메인 컬러 */}
        <div className="text-center mb-8">
          <div
            className="w-32 h-32 mx-auto rounded-full shadow-2xl mb-4 border-4 border-white"
            style={{ backgroundColor: recommendation.luckyColor.hex }}
          />
          <h3 className="text-pixel-2xl font-pixel text-gray-800 mb-2">
            {recommendation.luckyColor.name}
          </h3>
          <p className="text-pixel-base text-gray-600 max-w-md mx-auto">
            {recommendation.luckyColor.description}
          </p>
        </div>

        {/* 컬러 팔레트 */}
        <div className="mb-8">
          <h4 className="text-pixel-xl font-pixel text-gray-800 mb-4 text-center">
            🎨 컬러 팔레트
          </h4>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-xl shadow-lg mb-2"
                style={{ backgroundColor: recommendation.colorPalette.primary }}
              />
              <p className="text-pixel-sm text-gray-600">Primary</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-xl shadow-lg mb-2"
                style={{
                  backgroundColor: recommendation.colorPalette.secondary,
                }}
              />
              <p className="text-pixel-sm text-gray-600">Secondary</p>
            </div>
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-xl shadow-lg mb-2"
                style={{ backgroundColor: recommendation.colorPalette.accent }}
              />
              <p className="text-pixel-sm text-gray-600">Accent</p>
            </div>
          </div>
        </div>
      </div>

      {/* 옷/악세사리 추천 */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* 옷 추천 */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
          <h4 className="text-pixel-xl font-pixel text-gray-800 mb-4">
            👕 옷 추천
          </h4>
          <div className="space-y-3">
            <div>
              <p className="text-pixel-base font-medium text-gray-700 mb-1">
                상의
              </p>
              <div className="flex flex-wrap gap-2">
                {recommendation.clothingRecommendations.tops.map(
                  (item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-pink-100 text-pink-700 text-pixel-sm rounded-full"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <p className="text-pixel-base font-medium text-gray-700 mb-1">
                하의
              </p>
              <div className="flex flex-wrap gap-2">
                {recommendation.clothingRecommendations.bottoms.map(
                  (item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-700 text-pixel-sm rounded-full"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 악세사리 추천 */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
          <h4 className="text-pixel-xl font-pixel text-gray-800 mb-4">
            💎 악세사리 추천
          </h4>
          <div className="flex flex-wrap gap-2">
            {recommendation.clothingRecommendations.accessories.map(
              (item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-700 text-pixel-sm rounded-full"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* 운세 정보 */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
        <h4 className="text-pixel-xl font-pixel text-gray-800 mb-4 text-center">
          🔮 오늘의 운세
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <p className="text-pixel-base font-medium text-gray-700 mb-1">
                전체운
              </p>
              <p className="text-pixel-sm text-gray-600">
                {recommendation.fortune.general}
              </p>
            </div>
            <div>
              <p className="text-pixel-base font-medium text-gray-700 mb-1">
                연애운
              </p>
              <p className="text-pixel-sm text-gray-600">
                {recommendation.fortune.love}
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-pixel-base font-medium text-gray-700 mb-1">
                사업운
              </p>
              <p className="text-pixel-sm text-gray-600">
                {recommendation.fortune.career}
              </p>
            </div>
            <div>
              <p className="text-pixel-base font-medium text-gray-700 mb-1">
                건강운
              </p>
              <p className="text-pixel-sm text-gray-600">
                {recommendation.fortune.health}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 다시 하기 버튼 */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-pixel-lg rounded-xl font-pixel shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          🔄 다시 분석하기
        </button>
      </div>
    </div>
  );
};
