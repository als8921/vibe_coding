"use client";

import React from "react";
import { MOOD_OPTIONS } from "../data/options";

interface MoodSelectorProps {
  selectedMood: string | null;
  onMoodSelect: (moodId: string) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodSelect,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🎭</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          현재 기분은 어떤가요?
        </h3>
        <p className="text-gray-600">지금의 마음 상태를 알려주세요</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {MOOD_OPTIONS.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onMoodSelect(mood.id)}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedMood === mood.id
                ? "border-purple-400 bg-purple-100 shadow-xl scale-105"
                : "border-purple-200 bg-white hover:border-purple-300 hover:bg-purple-50 hover:shadow-lg"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl mb-2">{mood.label.split(" ")[0]}</div>
              <div className="text-sm font-medium text-gray-700 mb-1">
                {mood.label.split(" ").slice(1).join(" ")}
              </div>
              <div className="text-xs text-gray-500">{mood.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
