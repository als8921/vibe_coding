"use client";

import React from "react";
import { WEATHER_OPTIONS } from "../data/additionalOptions";

interface WeatherSelectorProps {
  selectedWeather: string | undefined;
  onWeatherSelect: (weatherId: string) => void;
}

export const WeatherSelector: React.FC<WeatherSelectorProps> = ({
  selectedWeather,
  onWeatherSelect,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🌤️</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          오늘 날씨는 어떤가요?
        </h3>
        <p className="text-gray-600">날씨에 어울리는 음악을 추천해드릴게요</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {WEATHER_OPTIONS.map((weather) => (
          <button
            key={weather.id}
            onClick={() => onWeatherSelect(weather.id)}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedWeather === weather.id
                ? "border-orange-400 bg-orange-100 shadow-xl scale-105"
                : "border-orange-200 bg-white hover:border-orange-300 hover:bg-orange-50 hover:shadow-lg"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{weather.label.split(" ")[0]}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {weather.label.split(" ").slice(1).join(" ")}
              </div>
              <div className="text-xs text-gray-500">{weather.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
