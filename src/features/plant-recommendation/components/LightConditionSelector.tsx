"use client";

import React from "react";
import { lightConditions } from "../data/plantData";

interface LightConditionSelectorProps {
  selectedLightCondition: string;
  onLightConditionSelect: (lightConditionId: string) => void;
}

export const LightConditionSelector: React.FC<LightConditionSelectorProps> = ({
  selectedLightCondition,
  onLightConditionSelect,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        ☀️ 조명 조건은 어떤가요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        식물이 받을 수 있는 빛의 양을 알려주세요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lightConditions.map((light) => (
          <button
            key={light.id}
            onClick={() => onLightConditionSelect(light.id)}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedLightCondition === light.id
                ? "bg-gradient-to-br from-yellow-400 to-orange-400 text-white border-yellow-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-yellow-200 hover:border-yellow-300 hover:shadow-lg"
            }`}
          >
            <div className="text-5xl mb-4">{light.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{light.name}</h3>
            <p className="text-base opacity-80">{light.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
