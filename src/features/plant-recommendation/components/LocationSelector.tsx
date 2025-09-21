"use client";

import React from "react";
import { locations } from "../data/plantData";

interface LocationSelectorProps {
  selectedLocation: string;
  onLocationSelect: (locationId: string) => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        📍 어느 지역에 계신가요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        지역별 가게 정보를 제공해드릴게요
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => onLocationSelect(location.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedLocation === location.id
                ? "bg-gradient-to-br from-indigo-400 to-blue-400 text-white border-indigo-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-indigo-200 hover:border-indigo-300 hover:shadow-lg"
            }`}
          >
            <div className="text-lg font-bold mb-1">{location.name}</div>
            <div className="text-xs opacity-80">{location.region}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
