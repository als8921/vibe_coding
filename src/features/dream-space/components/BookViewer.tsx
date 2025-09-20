"use client";

import React, { useState } from "react";
import { Idea } from "../types";
import IdeaCard from "./IdeaCard";

interface BookViewerProps {
  ideas: Idea[];
  onClose: () => void;
}

const BookViewer: React.FC<BookViewerProps> = ({ ideas, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const ideasPerPage = 3;

  const totalPages = Math.ceil(ideas.length / ideasPerPage);
  const currentIdeas = ideas.slice(
    currentPage * ideasPerPage,
    (currentPage + 1) * ideasPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (ideas.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/20 text-center">
          <div className="text-6xl mb-6">📖</div>
          <h2 className="text-pixel-3xl font-bold text-gray-800 dark:text-white mb-4">
            아직 기록된 아이디어가 없어요
          </h2>
          <p className="text-pixel-lg text-gray-600 dark:text-gray-300 mb-8">
            첫 번째 아이디어를 기록해보세요!
          </p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl text-pixel-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            아이디어 기록하러 가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* 책 헤더 */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">📚</div>
            <div>
              <h2 className="text-pixel-2xl font-bold text-gray-800 dark:text-white">
                최민성의 망상 일기
              </h2>
              <p className="text-pixel-sm text-gray-600 dark:text-gray-300">
                총 {ideas.length}개의 아이디어가 담겨있어요
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-pixel-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
          >
            닫기
          </button>
        </div>
      </div>

      {/* 책 내용 */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 0}
              className={`px-4 py-2 rounded-xl text-pixel-sm font-bold transition-all duration-200 ${
                currentPage === 0
                  ? "bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  : "bg-purple-500 text-white hover:bg-purple-600 hover:scale-105"
              }`}
            >
              ← 이전
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 rounded-lg text-pixel-sm font-bold transition-all duration-200 ${
                    i === currentPage
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:bg-purple-300 dark:hover:bg-purple-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
              className={`px-4 py-2 rounded-xl text-pixel-sm font-bold transition-all duration-200 ${
                currentPage === totalPages - 1
                  ? "bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                  : "bg-purple-500 text-white hover:bg-purple-600 hover:scale-105"
              }`}
            >
              다음 →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookViewer;
