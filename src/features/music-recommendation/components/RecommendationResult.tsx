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
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🎵</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          당신을 위한 음악 추천
        </h3>
        <p className="text-gray-600">{result.summary}</p>
      </div>

      <div className="space-y-4">
        {result.recommendations.map((music, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-lavender-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-lavender-200 to-mint-200 rounded-xl flex items-center justify-center text-2xl">
                  🎶
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-800 mb-1">
                  {music.title}
                </h4>
                <p className="text-lavender-600 font-medium mb-2">
                  {music.artist}
                </p>
                <p className="text-sm text-gray-600 mb-2">{music.reason}</p>
                {music.genre && (
                  <span className="inline-block px-3 py-1 bg-mint-100 text-mint-700 text-xs rounded-full">
                    {music.genre}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <button
          onClick={onRestart}
          className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white/20"
        >
          🔄 다시 추천받기
        </button>
      </div>
    </div>
  );
};
