// MBTI 모듈의 메인 진입점
export { default as MBTIPage } from "./pages/MBTIPage";
export { default as MBTIResultPage } from "./pages/MBTIResultPage";
export { default as TestPage } from "./components/TestPage";
export { default as ResultPage } from "./components/ResultPage";
export {
  questionDatabase,
  getQuestionsByCategory,
  getAllCategories,
} from "./data/questions";
export type {
  Question,
  TestData,
  TestPageProps,
  ResultPageProps,
} from "./types";
