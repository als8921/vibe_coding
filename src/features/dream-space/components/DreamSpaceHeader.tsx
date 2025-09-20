"use client";

import React from "react";
import { Theme } from "../types";

interface DreamSpaceHeaderProps {
  theme: Theme | null;
  ideaCount: number;
  onToggleBookViewer: () => void;
}

const DreamSpaceHeader: React.FC<DreamSpaceHeaderProps> = ({
  theme,
  ideaCount,
  onToggleBookViewer,
}) => {
  return (
    <header className="relative z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* 로고 및 제목 */}
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🌙</div>
            <div>
              <h1 className="text-pixel-2xl font-bold text-gray-800 dark:text-white">
                최민성의 망상 공간
              </h1>
              <p className="text-pixel-sm text-gray-600 dark:text-gray-300">
                꿈과 아이디어가 살아 숨쉬는 곳
              </p>
            </div>
          </div>

          {/* 현재 테마 및 아이디어 수 */}
          <div className="flex items-center space-x-6">
            {theme && (
              <div className="text-center">
                <div className="text-pixel-sm text-gray-600 dark:text-gray-300">
                  현재 테마
                </div>
                <div className={`text-pixel-lg font-bold ${theme.colors.text}`}>
                  {theme.name}
                </div>
              </div>
            )}

            <div className="text-center">
              <div className="text-pixel-sm text-gray-600 dark:text-gray-300">
                아이디어
              </div>
              <div className="text-pixel-lg font-bold text-gray-800 dark:text-white">
                {ideaCount}개
              </div>
            </div>

            {/* 책 보기 버튼 */}
            <button
              onClick={onToggleBookViewer}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📖</span>
                <span className="text-pixel-sm font-bold text-gray-800 dark:text-white">
                  책 보기
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DreamSpaceHeader;
