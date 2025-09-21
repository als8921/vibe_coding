export interface ColorRecommendation {
  luckyColor: {
    name: string;
    hex: string;
    description: string;
  };
  clothingRecommendations: {
    tops: string[];
    bottoms: string[];
    accessories: string[];
  };
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fortune: {
    general: string;
    love: string;
    career: string;
    health: string;
  };
  date: string;
}

export interface UserInput {
  birthDate: string;
  gender: string;
  preferredTone: string;
}

export interface ColorTone {
  id: string;
  name: string;
  description: string;
  colors: string[];
}
