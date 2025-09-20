"use client";

import React, { useState } from "react";
import { Idea } from "../types";
import IdeaCard from "./IdeaCard";

interface BookViewerProps {
  ideas: Idea[];
  onClose: () => void;
  onDeleteIdea: (ideaId: string) => void;
}

const BookViewer: React.FC<BookViewerProps> = ({
  ideas,
  onClose,
  onDeleteIdea,
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [ideaToDelete, setIdeaToDelete] = useState<Idea | null>(null);

  const handleDeleteClick = (idea: Idea) => {
    setIdeaToDelete(idea);
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (ideaToDelete) {
      onDeleteIdea(ideaToDelete.id);
      setIdeaToDelete(null);
      setShowDeleteConfirm(false);
    }
  };

  const handleCancelDelete = () => {
    setIdeaToDelete(null);
    setShowDeleteConfirm(false);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[70vh] overflow-y-auto scrollbar-hide">
          {ideas.map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              onDelete={() => handleDeleteClick(idea)}
            />
          ))}
        </div>
      </div>

      {/* 삭제 확인 모달 */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl max-w-md mx-4">
            <div className="text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-pixel-lg font-bold text-gray-800 dark:text-white mb-2">
                아이디어를 삭제하시겠어요?
              </h3>
              <p className="text-pixel-sm text-gray-600 dark:text-gray-300 mb-6">
                이 작업은 되돌릴 수 없어요.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={handleCancelDelete}
                  className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl text-pixel-sm font-bold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  취소
                </button>
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl text-pixel-sm font-bold hover:bg-red-600 transition-colors duration-200"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookViewer;
