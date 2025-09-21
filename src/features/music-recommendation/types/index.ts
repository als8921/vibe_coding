export interface MusicPreference {
  mood: string;
  artists: string[];
  timeOfDay: string;
  location: string;
}

export interface MusicRecommendation {
  title: string;
  artist: string;
  reason: string;
  genre?: string;
  mood?: string;
}

export interface RecommendationResult {
  recommendations: MusicRecommendation[];
  summary: string;
}

export type SelectionStep = "mood" | "artists" | "time" | "location" | "result";

export interface MusicRecommendationState {
  currentStep: SelectionStep;
  preferences: MusicPreference;
  recommendations: RecommendationResult | null;
  isLoading: boolean;
}
