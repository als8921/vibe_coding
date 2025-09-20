"use client";

import React, { useState } from "react";
import { Theme } from "../types";

interface IdeaInputProps {
  onSubmit: (content: string) => void;
  theme: Theme | null;
}

const IdeaInput: React.FC<IdeaInputProps> = ({ onSubmit, theme }) => {
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="mb-8">
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="text-center mb-6">
          <h3 className="text-pixel-2xl font-bold text-gray-800 dark:text-white mb-2">
            새로운 아이디어 기록하기
          </h3>
          <p className="text-pixel-lg text-gray-600 dark:text-gray-300">
            꿈에서 본 것, 갑자기 떠오른 아이디어를 자유롭게 적어보세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="여기에 아이디어를 적어보세요...&#10;예: 꿈에서 본 무지개 다리&#10;새로운 앱 아이디어&#10;창작 영감 등"
              className={`w-full h-32 p-4 rounded-2xl border-2 transition-all duration-300 resize-none text-pixel-base ${
                isFocused
                  ? "border-purple-400 shadow-lg"
                  : "border-gray-200 dark:border-gray-600"
              } bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none`}
            />

            {/* 포커스 시 테마 색상 표시 */}
            {isFocused && theme && (
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(45deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`,
                  border: `2px solid ${theme.colors.primary}40`,
                }}
              />
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              disabled={!content.trim()}
              className={`px-8 py-3 rounded-2xl text-pixel-lg font-bold transition-all duration-300 ${
                content.trim()
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              }`}
            >
              {content.trim() ? "아이디어 저장하기 ✨" : "내용을 입력해주세요"}
            </button>
          </div>
        </form>

        {/* 테마 정보 */}
        {theme && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/30 dark:to-pink-900/30">
            <div className="text-pixel-sm text-gray-600 dark:text-gray-300 text-center">
              💡 <strong>{theme.name}</strong> 테마로 아이디어를 기록하고
              있어요. 위에서 다른 테마를 선택할 수 있어요!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaInput;
