"use client";

import React from "react";
import { Idea } from "../types";

interface IdeaCardProps {
  idea: Idea;
}

const IdeaCard: React.FC<IdeaCardProps> = ({ idea }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case "희망":
        return "☀️";
      case "창작":
        return "🎨";
      case "신비":
        return "🌙";
      case "평온":
        return "🍃";
      case "열정":
        return "🔥";
      case "우주":
        return "🌌";
      case "로맨틱":
        return "💕";
      case "모험":
        return "🗺️";
      case "차분":
        return "☁️";
      case "환상":
        return "🦄";
      default:
        return "💭";
    }
  };

  const getThemeColor = (theme: string) => {
    switch (theme) {
      case "희망":
        return "from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30";
      case "창작":
        return "from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30";
      case "신비":
        return "from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30";
      case "평온":
        return "from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30";
      case "열정":
        return "from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30";
      case "우주":
        return "from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30";
      case "로맨틱":
        return "from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30";
      case "모험":
        return "from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30";
      case "차분":
        return "from-gray-100 to-slate-100 dark:from-gray-900/30 dark:to-slate-900/30";
      case "환상":
        return "from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30";
      default:
        return "from-gray-100 to-gray-200 dark:from-gray-800/50 dark:to-gray-700/50";
    }
  };

  return (
    <div
      className={`bg-gradient-to-br ${getThemeColor(
        idea.theme
      )} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20`}
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{getMoodEmoji(idea.mood)}</span>
          <span className="text-pixel-sm font-bold text-gray-600 dark:text-gray-300">
            {idea.theme}
          </span>
        </div>
        <div className="text-pixel-xs text-gray-500 dark:text-gray-400">
          {formatDate(idea.createdAt)}
        </div>
      </div>

      {/* 내용 */}
      <div className="mb-4">
        <p className="text-pixel-base text-gray-800 dark:text-white leading-relaxed whitespace-pre-wrap">
          {idea.content}
        </p>
      </div>

      {/* 푸터 */}
      <div className="flex items-center justify-between">
        <div className="text-pixel-xs text-gray-500 dark:text-gray-400">
          ID: {idea.id.slice(-6)}
        </div>
        <div className="flex space-x-1">
          {idea.mood === "희망" && <span className="text-sm">✨</span>}
          {idea.mood === "창작" && <span className="text-sm">🎨</span>}
          {idea.mood === "신비" && <span className="text-sm">🔮</span>}
          {idea.mood === "평온" && <span className="text-sm">🍃</span>}
          {idea.mood === "열정" && <span className="text-sm">🔥</span>}
          {idea.mood === "우주" && <span className="text-sm">🌌</span>}
          {idea.mood === "로맨틱" && <span className="text-sm">💕</span>}
          {idea.mood === "모험" && <span className="text-sm">🗺️</span>}
          {idea.mood === "차분" && <span className="text-sm">☁️</span>}
          {idea.mood === "환상" && <span className="text-sm">🦄</span>}
        </div>
      </div>
    </div>
  );
};

export default IdeaCard;
