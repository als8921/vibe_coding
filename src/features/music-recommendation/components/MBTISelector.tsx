"use client";

import React from "react";
import { MBTI_OPTIONS } from "../data/additionalOptions";

interface MBTISelectorProps {
  selectedMBTI: string | undefined;
  onMBTISelect: (mbtiId: string) => void;
}

export const MBTISelector: React.FC<MBTISelectorProps> = ({
  selectedMBTI,
  onMBTISelect,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🧠</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          MBTI는 무엇인가요?
        </h3>
        <p className="text-gray-600">성격 유형에 맞는 음악을 추천해드릴게요</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {MBTI_OPTIONS.map((mbti) => (
          <button
            key={mbti.id}
            onClick={() => onMBTISelect(mbti.id)}
            className={`p-3 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedMBTI === mbti.id
                ? "border-indigo-400 bg-indigo-100 shadow-xl scale-105"
                : "border-indigo-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-lg"
            }`}
          >
            <div className="text-center">
              <div className="text-lg font-bold text-gray-800 mb-1">
                {mbti.label}
              </div>
              <div className="text-xs text-gray-600 mb-1">
                {mbti.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
