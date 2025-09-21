"use client";

import React from "react";
import { experienceLevels } from "../data/plantData";

interface ExperienceSelectorProps {
  selectedExperience: string;
  onExperienceSelect: (experienceId: string) => void;
}

export const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({
  selectedExperience,
  onExperienceSelect,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        🌱 식물 키우기 경험은 어떤가요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        경험 수준에 맞는 식물을 추천해드릴게요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experienceLevels.map((level) => (
          <button
            key={level.id}
            onClick={() => onExperienceSelect(level.id)}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedExperience === level.id
                ? "bg-gradient-to-br from-emerald-400 to-teal-400 text-white border-emerald-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-emerald-200 hover:border-emerald-300 hover:shadow-lg"
            }`}
          >
            <div className="text-5xl mb-4">{level.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{level.name}</h3>
            <p className="text-base opacity-80">{level.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
