"use client";

import React from "react";
import { PREVIOUS_TASTE_OPTIONS } from "../data/additionalOptions";

interface PreviousTasteSelectorProps {
  selectedTaste: string | null;
  onTasteSelect: (tasteId: string) => void;
}

export const PreviousTasteSelector: React.FC<PreviousTasteSelectorProps> = ({
  selectedTaste,
  onTasteSelect,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🎧</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          평소에 주로 듣던 음악 스타일은?
        </h3>
        <p className="text-gray-600">
          기존 취향을 파악해서 더 정확한 추천을 해드릴게요
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {PREVIOUS_TASTE_OPTIONS.map((taste) => (
          <button
            key={taste.id}
            onClick={() => onTasteSelect(taste.id)}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedTaste === taste.id
                ? "border-teal-400 bg-teal-100 shadow-xl scale-105"
                : "border-teal-200 bg-white hover:border-teal-300 hover:bg-teal-50 hover:shadow-lg"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{taste.label.split(" ")[0]}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {taste.label.split(" ").slice(1).join(" ")}
              </div>
              <div className="text-xs text-gray-500">{taste.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
