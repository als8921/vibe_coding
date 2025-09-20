"use client";

import React from "react";

const DreamSpaceFooter: React.FC = () => {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
          <div className="text-center">
            <div className="text-pixel-lg text-gray-600 dark:text-gray-300 mb-2">
              💡 아이디어 제공자
            </div>
            <div className="text-pixel-xl font-bold text-gray-800 dark:text-white mb-4">
              최민성
            </div>
            <div className="text-pixel-sm text-gray-500 dark:text-gray-400 mb-4">
              꿈과 아이디어가 살아 숨쉬는 망상 공간의 창조자
            </div>
            <div className="flex justify-center items-center space-x-4 text-pixel-sm text-gray-500 dark:text-gray-400">
              <span>🌙</span>
              <span>✨</span>
              <span>💭</span>
              <span>🎨</span>
              <span>🌟</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DreamSpaceFooter;
