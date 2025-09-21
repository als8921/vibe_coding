"use client";

import React, { useState } from "react";
import { PastelBackground } from "./PastelBackground";
import { MoodSelector } from "./MoodSelector";
import { ArtistSelector } from "./ArtistSelector";
import { TimeSelector } from "./TimeSelector";
import { LocationSelector } from "./LocationSelector";
import { RecommendationResult } from "./RecommendationResult";
import {
  MusicRecommendationState,
  SelectionStep,
  MusicPreference,
  RecommendationResult as ResultType,
} from "../types";

export const MusicRecommendationApp: React.FC = () => {
  const [state, setState] = useState<MusicRecommendationState>({
    currentStep: "mood",
    preferences: {
      mood: "",
      artists: [],
      timeOfDay: "",
      location: "",
    },
    recommendations: null,
    isLoading: false,
  });

  const handleMoodSelect = (moodId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, mood: moodId },
      currentStep: "artists" as SelectionStep,
    }));
  };

  const handleArtistToggle = (artistId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        artists: prev.preferences.artists.includes(artistId)
          ? prev.preferences.artists.filter((id) => id !== artistId)
          : [...prev.preferences.artists, artistId],
      },
    }));
  };

  const handleTimeSelect = (timeId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, timeOfDay: timeId },
      currentStep: "location" as SelectionStep,
    }));
  };

  const handleLocationSelect = async (locationId: string) => {
    const updatedPreferences = {
      ...state.preferences,
      location: locationId,
    };

    setState((prev) => ({
      ...prev,
      preferences: updatedPreferences,
      currentStep: "result" as SelectionStep,
      isLoading: true,
    }));

    try {
      const response = await fetch("/api/music-recommendation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPreferences),
      });

      const result: ResultType = await response.json();

      setState((prev) => ({
        ...prev,
        recommendations: result,
        isLoading: false,
      }));
    } catch (error) {
      console.error("음악 추천 오류:", error);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        recommendations: {
          recommendations: [
            {
              title: "오류가 발생했습니다",
              artist: "시스템",
              reason: "다시 시도해주세요",
              genre: "기타",
              mood: "중성",
            },
          ],
          summary: "음악 추천 중 오류가 발생했습니다.",
        },
      }));
    }
  };

  const handleRestart = () => {
    setState({
      currentStep: "mood",
      preferences: {
        mood: "",
        artists: [],
        timeOfDay: "",
        location: "",
      },
      recommendations: null,
      isLoading: false,
    });
  };

  const handleNextStep = () => {
    if (
      state.currentStep === "artists" &&
      state.preferences.artists.length > 0
    ) {
      setState((prev) => ({ ...prev, currentStep: "time" as SelectionStep }));
    }
  };

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case "mood":
        return (
          <MoodSelector
            selectedMood={state.preferences.mood}
            onMoodSelect={handleMoodSelect}
          />
        );
      case "artists":
        return (
          <ArtistSelector
            selectedArtists={state.preferences.artists}
            onArtistToggle={handleArtistToggle}
          />
        );
      case "time":
        return (
          <TimeSelector
            selectedTime={state.preferences.timeOfDay}
            onTimeSelect={handleTimeSelect}
          />
        );
      case "location":
        return (
          <LocationSelector
            selectedLocation={state.preferences.location}
            onLocationSelect={handleLocationSelect}
          />
        );
      case "result":
        if (state.isLoading) {
          return (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 animate-spin">🎵</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                당신을 위한 음악을 찾고 있어요...
              </h3>
              <p className="text-gray-600">잠시만 기다려주세요 ✨</p>
            </div>
          );
        }
        return state.recommendations ? (
          <RecommendationResult
            result={state.recommendations}
            onRestart={handleRestart}
          />
        ) : null;
      default:
        return null;
    }
  };

  const getProgressPercentage = () => {
    switch (state.currentStep) {
      case "mood":
        return 25;
      case "artists":
        return 50;
      case "time":
        return 75;
      case "location":
        return 90;
      case "result":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="min-h-screen relative">
      <PastelBackground />

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                🎵 나만의 음악 추천
              </h1>
              <p className="text-lg text-gray-600">
                상황과 기분에 맞는 맞춤형 음악을 추천해드려요
              </p>
            </div>
          </div>

          {/* 진행률 표시 */}
          {state.currentStep !== "result" && (
            <div className="mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>진행률</span>
                  <span>{getProgressPercentage()}%</span>
                </div>
                <div className="w-full bg-lavender-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-lavender-400 to-mint-400 h-3 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getProgressPercentage()}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* 메인 컨텐츠 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            {renderCurrentStep()}
          </div>

          {/* 네비게이션 버튼 */}
          {state.currentStep === "artists" &&
            state.preferences.artists.length > 0 && (
              <div className="text-center mt-8">
                <button
                  onClick={handleNextStep}
                  className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white/20"
                >
                  다음 단계로 →
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
