"use client";

import React, { useState, useEffect } from "react";
import {
  DreamSpaceHeader,
  IdeaInput,
  ThemeDisplay,
  BookViewer,
  ThemeSelector,
  ParticleBackground,
} from "@/features/dream-space";
import { THEMES } from "@/features/dream-space/data/themes";

export interface Idea {
  id: string;
  content: string;
  theme: string;
  createdAt: Date;
  mood: string;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  particles: string[];
  description: string;
}

export default function DreamSpacePage() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [currentTheme, setCurrentTheme] = useState<Theme | null>(null);
  const [showBookViewer, setShowBookViewer] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // 로컬스토리지에서 아이디어 불러오기
    const savedIdeas = localStorage.getItem("dream-space-ideas");
    if (savedIdeas) {
      const parsedIdeas = JSON.parse(savedIdeas).map((idea: any) => ({
        ...idea,
        createdAt: new Date(idea.createdAt),
      }));
      setIdeas(parsedIdeas);
    }

    // 기본 테마 설정 (평온 테마)
    setCurrentTheme(THEMES[3]); // 평온 테마
  }, []);

  const handleIdeaSubmit = (content: string) => {
    if (!content.trim()) return;

    const newIdea: Idea = {
      id: Date.now().toString(),
      content: content.trim(),
      theme: currentTheme?.name || "평온",
      createdAt: new Date(),
      mood: currentTheme?.name || "평온",
    };

    const updatedIdeas = [...ideas, newIdea];
    setIdeas(updatedIdeas);
    localStorage.setItem("dream-space-ideas", JSON.stringify(updatedIdeas));
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-pixel-lg text-gray-600">로딩 중...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen transition-all duration-1000"
      style={{
        background:
          currentTheme?.backgroundGradient ||
          "linear-gradient(135deg, #f3e8ff 0%, #e0e7ff 50%, #ddd6fe 100%)",
      }}
    >
      <DreamSpaceHeader
        theme={currentTheme}
        ideaCount={ideas.length}
        onToggleBookViewer={() => setShowBookViewer(!showBookViewer)}
      />

      <main className="container mx-auto px-4 py-8">
        {showBookViewer ? (
          <BookViewer ideas={ideas} onClose={() => setShowBookViewer(false)} />
        ) : (
          <div className="max-w-4xl mx-auto">
            <ThemeDisplay theme={currentTheme} />
            <ThemeSelector
              currentTheme={currentTheme}
              onThemeChange={handleThemeChange}
            />
            <IdeaInput onSubmit={handleIdeaSubmit} theme={currentTheme} />
          </div>
        )}
      </main>

      {/* 파티클 배경 */}
      <ParticleBackground theme={currentTheme} />
    </div>
  );
}
