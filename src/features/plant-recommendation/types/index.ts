export interface PlantPreference {
  spaceType: string; // 거실, 침실, 화장실, 베란다, 사무실 등
  lightCondition: string; // 밝음, 보통, 어두움
  spaceSize: string; // 작음, 보통, 큼
  careTime: string; // 적음, 보통, 많음
  experience: string; // 초보자, 중급자, 전문가
  budget: string; // 저렴, 보통, 비쌈
  purpose: string[]; // 공기정화, 장식, 향기, 수집 등
  location: string; // 지역 정보
}

export interface PlantRecommendation {
  name: string;
  scientificName: string;
  description: string;
  careLevel: string;
  lightRequirement: string;
  wateringFrequency: string;
  priceRange: {
    min: number;
    max: number;
    average: number;
  };
  benefits: string[];
  imageUrl?: string;
  reason: string;
}

export interface RecommendationResult {
  recommendations: PlantRecommendation[];
  summary: string;
  totalBudget: {
    min: number;
    max: number;
    average: number;
  };
}

export type SelectionStep =
  | "spaceType"
  | "lightCondition"
  | "spaceSize"
  | "careTime"
  | "experience"
  | "budget"
  | "purpose"
  | "location"
  | "result";

export interface PlantRecommendationState {
  currentStep: SelectionStep;
  preferences: PlantPreference;
  recommendations: RecommendationResult | null;
  isLoading: boolean;
}
