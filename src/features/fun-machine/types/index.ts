export interface ActivityItem {
  id: string;
  name: string;
  category: "activity" | "food";
  subcategory: string;
  emoji: string;
  description: string;
  details: {
    location?: string;
    duration?: string;
    difficulty?: "easy" | "medium" | "hard";
    price?: "free" | "cheap" | "moderate" | "expensive";
    bestTime?: string;
    tips?: string[];
  };
}

export interface FunMachineState {
  isSpinning: boolean;
  currentResult: ActivityItem | null;
  showDetails: boolean;
  spinCount: number;
}

export interface SlotMachineProps {
  onResult: (result: ActivityItem) => void;
  isSpinning: boolean;
}

export interface ResultDisplayProps {
  result: ActivityItem;
  onShowDetails: () => void;
  onSpinAgain: () => void;
  spinCount: number;
}

export interface DetailModalProps {
  result: ActivityItem;
  isOpen: boolean;
  onClose: () => void;
}
