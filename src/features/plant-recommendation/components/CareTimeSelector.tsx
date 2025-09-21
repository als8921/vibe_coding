"use client";

import React from "react";
import { careTimes } from "../data/plantData";

interface CareTimeSelectorProps {
  selectedCareTime: string;
  onCareTimeSelect: (careTimeId: string) => void;
}

export const CareTimeSelector: React.FC<CareTimeSelectorProps> = ({
  selectedCareTime,
  onCareTimeSelect,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        ⏰ 식물 관리에 얼마나 시간을 투자할 수 있나요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        관리 시간에 맞는 식물을 추천해드릴게요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {careTimes.map((time) => (
          <button
            key={time.id}
            onClick={() => onCareTimeSelect(time.id)}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedCareTime === time.id
                ? "bg-gradient-to-br from-purple-400 to-pink-400 text-white border-purple-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-purple-200 hover:border-purple-300 hover:shadow-lg"
            }`}
          >
            <div className="text-5xl mb-4">{time.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{time.name}</h3>
            <p className="text-base opacity-80">{time.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
