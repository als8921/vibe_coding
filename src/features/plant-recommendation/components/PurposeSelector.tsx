"use client";

import React from "react";
import { purposes } from "../data/plantData";

interface PurposeSelectorProps {
  selectedPurposes: string[];
  onPurposeToggle: (purposeId: string) => void;
}

export const PurposeSelector: React.FC<PurposeSelectorProps> = ({
  selectedPurposes,
  onPurposeToggle,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        🎯 식물을 키우는 목적은 무엇인가요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        여러 개를 선택하실 수 있어요 (복수 선택 가능)
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {purposes.map((purpose) => (
          <button
            key={purpose.id}
            onClick={() => onPurposeToggle(purpose.id)}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedPurposes.includes(purpose.id)
                ? "bg-gradient-to-br from-rose-400 to-pink-400 text-white border-rose-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-rose-200 hover:border-rose-300 hover:shadow-lg"
            }`}
          >
            <div className="text-4xl mb-3">{purpose.icon}</div>
            <h3 className="text-lg font-bold">{purpose.name}</h3>
          </button>
        ))}
      </div>

      {selectedPurposes.length > 0 && (
        <div className="mt-6">
          <p className="text-sm text-gray-600">
            선택된 목적: {selectedPurposes.length}개
          </p>
        </div>
      )}
    </div>
  );
};
