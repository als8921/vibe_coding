export interface Question {
  id: string;
  question: string;
  options: {
    text: string;
    types: ("E" | "I" | "S" | "N" | "T" | "F" | "J" | "P")[];
  }[];
  category: string;
  description: string;
}

export interface TestData {
  title: string;
  questions: Question[];
  results: Record<string, string>;
}

export interface TestPageProps {
  testData: TestData;
  onComplete: (answers: string[]) => void;
  onReset: () => void;
}

export interface ResultPageProps {
  testData: TestData;
  userAnswers: string[];
  onReset: () => void;
}
