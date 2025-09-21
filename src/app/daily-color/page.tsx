"use client";

import React, { useState } from "react";
import { DailyColorHeader } from "@/features/daily-color/components/DailyColorHeader";
import { UserInputForm } from "@/features/daily-color/components/UserInputForm";
import { ColorResultDisplay } from "@/features/daily-color/components/ColorResultDisplay";
import { PastelBackground } from "@/features/daily-color/components/PastelBackground";
import { ColorRecommendation } from "@/features/daily-color/types";

export default function DailyColorPage() {
  const [colorRecommendation, setColorRecommendation] =
    useState<ColorRecommendation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formData: {
    birthDate: string;
    gender: string;
    preferredTone: string;
  }) => {
    setIsLoading(true);
    try {
      // Gemini API 호출 로직은 별도 서비스에서 처리
      const response = await fetch("/api/daily-color", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("컬러 추천을 가져오는데 실패했습니다.");
      }

      const data = await response.json();
      setColorRecommendation(data);
    } catch (error) {
      console.error("Error fetching color recommendation:", error);
      alert("컬러 추천을 가져오는데 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <PastelBackground />

      <div className="relative z-10">
        <DailyColorHeader />

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {!colorRecommendation ? (
              <UserInputForm
                onSubmit={handleFormSubmit}
                isLoading={isLoading}
              />
            ) : (
              <ColorResultDisplay
                recommendation={colorRecommendation}
                onReset={() => setColorRecommendation(null)}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
