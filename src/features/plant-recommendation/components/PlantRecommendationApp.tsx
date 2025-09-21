"use client";

import React, { useState } from "react";
import { PastelBackground } from "./PastelBackground";
import { SpaceTypeSelector } from "./SpaceTypeSelector";
import { LightConditionSelector } from "./LightConditionSelector";
import { SpaceSizeSelector } from "./SpaceSizeSelector";
import { CareTimeSelector } from "./CareTimeSelector";
import { ExperienceSelector } from "./ExperienceSelector";
import { BudgetSelector } from "./BudgetSelector";
import { PurposeSelector } from "./PurposeSelector";
import { LocationSelector } from "./LocationSelector";
import { RecommendationResult } from "./RecommendationResult";
import {
  PlantRecommendationState,
  SelectionStep,
  RecommendationResult as ResultType,
} from "../types";

export const PlantRecommendationApp: React.FC = () => {
  const [state, setState] = useState<PlantRecommendationState>({
    currentStep: "spaceType",
    preferences: {
      spaceType: "",
      lightCondition: "",
      spaceSize: "",
      careTime: "",
      experience: "",
      budget: "",
      purpose: [],
      location: "",
    },
    recommendations: null,
    isLoading: false,
  });

  const handleSpaceTypeSelect = (spaceTypeId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, spaceType: spaceTypeId },
      currentStep: "lightCondition" as SelectionStep,
    }));
  };

  const handleLightConditionSelect = (lightConditionId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, lightCondition: lightConditionId },
      currentStep: "spaceSize" as SelectionStep,
    }));
  };

  const handleSpaceSizeSelect = (spaceSizeId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, spaceSize: spaceSizeId },
      currentStep: "careTime" as SelectionStep,
    }));
  };

  const handleCareTimeSelect = (careTimeId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, careTime: careTimeId },
      currentStep: "experience" as SelectionStep,
    }));
  };

  const handleExperienceSelect = (experienceId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, experience: experienceId },
      currentStep: "budget" as SelectionStep,
    }));
  };

  const handleBudgetSelect = (budgetId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: { ...prev.preferences, budget: budgetId },
      currentStep: "purpose" as SelectionStep,
    }));
  };

  const handlePurposeToggle = (purposeId: string) => {
    setState((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        purpose: prev.preferences.purpose.includes(purposeId)
          ? prev.preferences.purpose.filter((id) => id !== purposeId)
          : [...prev.preferences.purpose, purposeId],
      },
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
      const response = await fetch("/api/plant-recommendation", {
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
      console.error("식물 추천 오류:", error);
      setState((prev) => ({
        ...prev,
        isLoading: false,
        recommendations: {
          recommendations: [
            {
              name: "오류가 발생했습니다",
              scientificName: "Error Plant",
              description: "다시 시도해주세요",
              careLevel: "어려움",
              lightRequirement: "밝음",
              wateringFrequency: "주 1회",
              priceRange: { min: 0, max: 0, average: 0 },
              benefits: ["오류 해결"],
              reason: "시스템 오류가 발생했습니다",
            },
          ],
          summary: "식물 추천 중 오류가 발생했습니다.",
          totalBudget: { min: 0, max: 0, average: 0 },
        },
      }));
    }
  };

  const handleRestart = () => {
    setState({
      currentStep: "spaceType",
      preferences: {
        spaceType: "",
        lightCondition: "",
        spaceSize: "",
        careTime: "",
        experience: "",
        budget: "",
        purpose: [],
        location: "",
      },
      recommendations: null,
      isLoading: false,
    });
  };

  const handleNextStep = () => {
    if (
      state.currentStep === "purpose" &&
      state.preferences.purpose.length > 0
    ) {
      setState((prev) => ({
        ...prev,
        currentStep: "location" as SelectionStep,
      }));
    }
  };

  const renderCurrentStep = () => {
    switch (state.currentStep) {
      case "spaceType":
        return (
          <SpaceTypeSelector
            selectedSpaceType={state.preferences.spaceType}
            onSpaceTypeSelect={handleSpaceTypeSelect}
          />
        );
      case "lightCondition":
        return (
          <LightConditionSelector
            selectedLightCondition={state.preferences.lightCondition}
            onLightConditionSelect={handleLightConditionSelect}
          />
        );
      case "spaceSize":
        return (
          <SpaceSizeSelector
            selectedSpaceSize={state.preferences.spaceSize}
            onSpaceSizeSelect={handleSpaceSizeSelect}
          />
        );
      case "careTime":
        return (
          <CareTimeSelector
            selectedCareTime={state.preferences.careTime}
            onCareTimeSelect={handleCareTimeSelect}
          />
        );
      case "experience":
        return (
          <ExperienceSelector
            selectedExperience={state.preferences.experience}
            onExperienceSelect={handleExperienceSelect}
          />
        );
      case "budget":
        return (
          <BudgetSelector
            selectedBudget={state.preferences.budget}
            onBudgetSelect={handleBudgetSelect}
          />
        );
      case "purpose":
        return (
          <PurposeSelector
            selectedPurposes={state.preferences.purpose}
            onPurposeToggle={handlePurposeToggle}
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
              <div className="text-6xl mb-4 animate-spin">🌱</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                당신을 위한 식물을 찾고 있어요...
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
      case "spaceType":
        return 12;
      case "lightCondition":
        return 25;
      case "spaceSize":
        return 37;
      case "careTime":
        return 50;
      case "experience":
        return 62;
      case "budget":
        return 75;
      case "purpose":
        return 87;
      case "location":
        return 95;
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
        <div className="max-w-6xl mx-auto">
          {/* 헤더 */}
          <div className="text-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                🌿 나만의 식물 추천
              </h1>
              <p className="text-lg text-gray-600">
                집과 어울리는 완벽한 식물을 찾아보세요
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
                <div className="w-full bg-green-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-400 to-mint-400 h-3 rounded-full transition-all duration-500 ease-out"
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
          {state.currentStep === "purpose" &&
            state.preferences.purpose.length > 0 && (
              <div className="text-center mt-8">
                <button
                  onClick={handleNextStep}
                  className="px-10 py-4 bg-gradient-to-r from-green-500 to-mint-500 text-white font-bold text-lg rounded-2xl hover:from-green-600 hover:to-mint-600 transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white/20"
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
