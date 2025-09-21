"use client";

import React from "react";
import { spaceSizes } from "../data/plantData";

interface SpaceSizeSelectorProps {
  selectedSpaceSize: string;
  onSpaceSizeSelect: (spaceSizeId: string) => void;
}

export const SpaceSizeSelector: React.FC<SpaceSizeSelectorProps> = ({
  selectedSpaceSize,
  onSpaceSizeSelect,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        📏 공간 크기는 어느 정도인가요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        공간에 맞는 크기의 식물을 추천해드릴게요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {spaceSizes.map((size) => (
          <button
            key={size.id}
            onClick={() => onSpaceSizeSelect(size.id)}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedSpaceSize === size.id
                ? "bg-gradient-to-br from-blue-400 to-cyan-400 text-white border-blue-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-blue-200 hover:border-blue-300 hover:shadow-lg"
            }`}
          >
            <div className="text-5xl mb-4">{size.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{size.name}</h3>
            <p className="text-base opacity-80">{size.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
