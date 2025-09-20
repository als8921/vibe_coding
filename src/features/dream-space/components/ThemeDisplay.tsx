"use client";

import React from "react";
import { Theme } from "../types";

interface ThemeDisplayProps {
  theme: Theme | null;
}

const ThemeDisplay: React.FC<ThemeDisplayProps> = ({ theme }) => {
  if (!theme) return null;

  return (
    <div className="mb-8">
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 text-center">
        <div className="mb-4">
          <div className="text-6xl mb-4">
            {
              theme.particles[
                Math.floor(Math.random() * theme.particles.length)
              ]
            }
          </div>
          <h2 className={`text-pixel-3xl font-bold ${theme.colors.text} mb-2`}>
            {theme.name}의 분위기
          </h2>
          <p className={`text-pixel-lg ${theme.colors.text} opacity-80`}>
            {theme.description}
          </p>
        </div>

        {/* 파티클 애니메이션 */}
        <div className="flex justify-center space-x-4">
          {theme.particles.map((particle, index) => (
            <div
              key={index}
              className="text-2xl animate-pulse-slow"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${2 + index * 0.5}s`,
              }}
            >
              {particle}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeDisplay;
