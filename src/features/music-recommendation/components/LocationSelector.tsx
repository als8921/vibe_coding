"use client";

import React from "react";
import { LOCATION_OPTIONS } from "../data/options";

interface LocationSelectorProps {
  selectedLocation: string | null;
  onLocationSelect: (locationId: string) => void;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({
  selectedLocation,
  onLocationSelect,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">📍</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          어디서 음악을 들으실 건가요?
        </h3>
        <p className="text-gray-600">
          장소에 어울리는 분위기의 음악을 추천해드릴게요
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {LOCATION_OPTIONS.map((location) => (
          <button
            key={location.id}
            onClick={() => onLocationSelect(location.id)}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedLocation === location.id
                ? "border-green-400 bg-green-100 shadow-xl scale-105"
                : "border-green-200 bg-white hover:border-green-300 hover:bg-green-50 hover:shadow-lg"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">
                {location.label.split(" ")[0]}
              </div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {location.label.split(" ").slice(1).join(" ")}
              </div>
              <div className="text-xs text-gray-500">
                {location.description}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
