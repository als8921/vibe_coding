"use client";

import React from "react";
import { spaceTypes } from "../data/plantData";

interface SpaceTypeSelectorProps {
  selectedSpaceType: string;
  onSpaceTypeSelect: (spaceTypeId: string) => void;
}

export const SpaceTypeSelector: React.FC<SpaceTypeSelectorProps> = ({
  selectedSpaceType,
  onSpaceTypeSelect,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        🌿 어떤 공간에 식물을 두실 건가요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        공간의 특성에 맞는 식물을 추천해드릴게요
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {spaceTypes.map((space) => (
          <button
            key={space.id}
            onClick={() => onSpaceTypeSelect(space.id)}
            className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedSpaceType === space.id
                ? "bg-gradient-to-br from-green-400 to-mint-400 text-white border-green-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-green-200 hover:border-green-300 hover:shadow-lg"
            }`}
          >
            <div className="text-4xl mb-3">{space.icon}</div>
            <h3 className="text-xl font-bold mb-2">{space.name}</h3>
            <p className="text-sm opacity-80">{space.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
