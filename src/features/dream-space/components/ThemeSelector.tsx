"use client";

import React from "react";
import { Theme } from "../types";
import { THEMES } from "../data/themes";

interface ThemeSelectorProps {
  currentTheme: Theme | null;
  onThemeChange: (theme: Theme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  return (
    <div className="mb-8">
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
        <div className="text-center mb-6">
          <h3 className="text-pixel-2xl font-bold text-gray-800 dark:text-white mb-2">
            테마 선택하기
          </h3>
          <p className="text-pixel-lg text-gray-600 dark:text-gray-300">
            아이디어에 맞는 분위기를 선택해보세요
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {THEMES.map((theme) => (
            <button
              key={theme.name}
              onClick={() => onThemeChange(theme)}
              className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                currentTheme?.name === theme.name
                  ? "ring-4 ring-purple-400 shadow-xl scale-105"
                  : "hover:shadow-lg"
              }`}
              style={{
                background: `linear-gradient(135deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`,
                border: `2px solid ${theme.colors.primary}40`,
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{theme.particles[0]}</div>
                <div className={`text-pixel-sm font-bold ${theme.colors.text}`}>
                  {theme.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {currentTheme && (
          <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/30 dark:to-pink-900/30">
            <div className="text-pixel-sm text-gray-600 dark:text-gray-300 text-center">
              💡 현재 선택된 테마: <strong>{currentTheme.name}</strong> -{" "}
              {currentTheme.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;
