"use client";

import React, { useState } from "react";
import { UserInput } from "../types";
import { COLOR_TONES, GENDER_OPTIONS } from "../data/colorTones";

interface UserInputFormProps {
  onSubmit: (data: UserInput) => void;
  isLoading: boolean;
}

export const UserInputForm: React.FC<UserInputFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [formData, setFormData] = useState<UserInput>({
    birthDate: "",
    gender: "",
    preferredTone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.birthDate && formData.gender && formData.preferredTone) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: keyof UserInput, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 생일 입력 */}
          <div className="space-y-2">
            <label className="block text-pixel-lg text-gray-700 font-pixel">
              📅 생년월일
            </label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) => handleInputChange("birthDate", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition-colors text-pixel-base"
              required
            />
          </div>

          {/* 성별 선택 */}
          <div className="space-y-2">
            <label className="block text-pixel-lg text-gray-700 font-pixel">
              👤 성별
            </label>
            <div className="grid grid-cols-3 gap-3">
              {GENDER_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleInputChange("gender", option.value)}
                  className={`py-3 px-4 rounded-xl border-2 transition-all font-pixel ${
                    formData.gender === option.value
                      ? "border-pink-400 bg-pink-100 text-pink-700"
                      : "border-gray-200 bg-white text-gray-600 hover:border-pink-300"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* 선호 색상톤 선택 */}
          <div className="space-y-2">
            <label className="block text-pixel-lg text-gray-700 font-pixel">
              🎨 선호 색상톤
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto scrollbar-hide">
              {COLOR_TONES.map((tone) => (
                <button
                  key={tone.id}
                  type="button"
                  onClick={() => handleInputChange("preferredTone", tone.id)}
                  className={`p-3 rounded-xl border-2 transition-all text-left font-pixel ${
                    formData.preferredTone === tone.id
                      ? "border-pink-400 bg-pink-100"
                      : "border-gray-200 bg-white hover:border-pink-300"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-center space-x-1">
                      {tone.colors.slice(0, 4).map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="text-center">
                      <div className="text-pixel-sm font-medium">
                        {tone.name}
                      </div>
                      <div className="text-pixel-xs text-gray-500 leading-tight">
                        {tone.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={
              isLoading ||
              !formData.birthDate ||
              !formData.gender ||
              !formData.preferredTone
            }
            className="w-full py-4 px-6 bg-gradient-to-r from-pink-400 to-purple-400 text-white text-pixel-lg rounded-xl font-pixel shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isLoading ? "🔮 컬러 분석 중..." : "✨ 나만의 행운 컬러 찾기"}
          </button>
        </form>
      </div>
    </div>
  );
};
