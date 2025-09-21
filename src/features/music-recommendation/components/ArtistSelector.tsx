"use client";

import React from "react";
import { ARTIST_OPTIONS } from "../data/options";

interface ArtistSelectorProps {
  selectedArtists: string[];
  onArtistToggle: (artistId: string) => void;
}

export const ArtistSelector: React.FC<ArtistSelectorProps> = ({
  selectedArtists,
  onArtistToggle,
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">🎤</h2>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          좋아하는 아티스트를 선택해주세요
        </h3>
        <p className="text-gray-600">여러 개 선택 가능해요</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ARTIST_OPTIONS.map((genre) => (
          <div
            key={genre.id}
            className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
              selectedArtists.includes(genre.id)
                ? "border-pink-400 bg-pink-100 shadow-xl scale-105"
                : "border-pink-200 bg-white hover:border-pink-300 hover:bg-pink-50 hover:shadow-lg"
            }`}
          >
            <button
              onClick={() => onArtistToggle(genre.id)}
              className="w-full text-left"
            >
              <div className="text-lg font-medium text-gray-700 mb-2">
                {genre.label}
              </div>
              <div className="text-sm text-gray-500">
                {genre.artists.slice(0, 3).join(", ")}
                {genre.artists.length > 3 && " 외..."}
              </div>
            </button>
          </div>
        ))}
      </div>

      {selectedArtists.length > 0 && (
        <div className="text-center">
          <div className="text-sm text-gray-600">
            선택된 장르: {selectedArtists.length}개
          </div>
        </div>
      )}
    </div>
  );
};
