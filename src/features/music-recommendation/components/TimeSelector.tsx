"use client";

import React from "react";
import { TIME_OPTIONS } from "../data/options";

interface TimeSelectorProps {
  selectedTime: string | null;
  onTimeSelect: (timeId: string) => void;
}

export const TimeSelector: React.FC<TimeSelectorProps> = ({
  selectedTime,
  onTimeSelect,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">⏰</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          언제 음악을 들으실 건가요?
        </h3>
        <p className="text-gray-600">시간대에 맞는 음악을 추천해드릴게요</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {TIME_OPTIONS.map((time) => (
          <button
            key={time.id}
            onClick={() => onTimeSelect(time.id)}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedTime === time.id
                ? "border-blue-400 bg-blue-100 shadow-xl scale-105"
                : "border-blue-200 bg-white hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{time.label.split(" ")[0]}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {time.label.split(" ").slice(1).join(" ")}
              </div>
              <div className="text-xs text-gray-500">{time.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
