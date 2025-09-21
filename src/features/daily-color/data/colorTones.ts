import { ColorTone } from "../types";

export const COLOR_TONES: ColorTone[] = [
  {
    id: "warm-tones",
    name: "따뜻한 톤",
    description: "빨강, 주황, 노랑 계열의 따뜻한 색상",
    colors: ["#FF6B6B", "#FF8E53", "#FFD93D", "#FF6B35", "#FF9500"],
  },
  {
    id: "cool-tones",
    name: "시원한 톤",
    description: "파랑, 초록, 보라 계열의 시원한 색상",
    colors: ["#4ECDC4", "#45B7D1", "#96CEB4", "#74B9FF", "#A29BFE"],
  },
  {
    id: "neutral-tones",
    name: "중성 톤",
    description: "베이지, 그레이, 브라운 계열의 중성 색상",
    colors: ["#D3D3D3", "#A8A8A8", "#8B7355", "#D2B48C", "#F5F5DC"],
  },
  {
    id: "vibrant-tones",
    name: "활기찬 톤",
    description: "밝고 생기있는 강렬한 색상",
    colors: ["#FF1493", "#00CED1", "#32CD32", "#FF4500", "#8A2BE2"],
  },
  {
    id: "romantic-tones",
    name: "로맨틱 톤",
    description: "로맨틱하고 우아한 핑크, 레드 계열",
    colors: ["#FF69B4", "#DC143C", "#FFB6C1", "#FF1493", "#C71585"],
  },
  {
    id: "nature-tones",
    name: "자연 톤",
    description: "자연스럽고 신선한 그린, 브라운 계열",
    colors: ["#228B22", "#32CD32", "#8FBC8F", "#DAA520", "#CD853F"],
  },
  {
    id: "vintage-tones",
    name: "빈티지 톤",
    description: "빈티지하고 클래식한 따뜻한 브라운 계열",
    colors: ["#D2691E", "#CD853F", "#DEB887", "#F4A460", "#DAA520"],
  },
  {
    id: "ocean-tones",
    name: "오션 톤",
    description: "바다처럼 시원하고 깊은 블루 계열",
    colors: ["#1E90FF", "#00BFFF", "#87CEEB", "#4682B4", "#5F9EA0"],
  },
  {
    id: "sunset-tones",
    name: "선셋 톤",
    description: "노을처럼 따뜻하고 아름다운 오렌지 계열",
    colors: ["#FF6347", "#FF7F50", "#FFA500", "#FFD700", "#FF8C00"],
  },
  {
    id: "purple-tones",
    name: "퍼플 톤",
    description: "보라, 바이올렛 계열의 신비로운 색상",
    colors: ["#8A2BE2", "#9932CC", "#DA70D6", "#9370DB", "#6A5ACD"],
  },
  {
    id: "mint-tones",
    name: "민트 톤",
    description: "민트, 터쿼이즈 계열의 상쾌한 색상",
    colors: ["#40E0D0", "#00CED1", "#20B2AA", "#48D1CC", "#00FA9A"],
  },
  {
    id: "peach-tones",
    name: "피치 톤",
    description: "복숭아, 코랄 계열의 부드러운 색상",
    colors: ["#FF7F50", "#FFA07A", "#FFB6C1", "#FFE4E1", "#FFDAB9"],
  },
  {
    id: "monochrome",
    name: "모노톤",
    description: "흑백, 그레이스케일의 단조로운 색상",
    colors: ["#000000", "#696969", "#808080", "#A9A9A9", "#FFFFFF"],
  },
  {
    id: "jewel-tones",
    name: "주얼 톤",
    description: "보석처럼 반짝이는 고급스러운 색상",
    colors: ["#FFD700", "#C0C0C0", "#B87333", "#E6E6FA", "#FF69B4"],
  },
  {
    id: "earth-tones",
    name: "어스 톤",
    description: "대지, 흙의 자연스러운 색상",
    colors: ["#8B4513", "#A0522D", "#D2691E", "#CD853F", "#DEB887"],
  },
];

export const GENDER_OPTIONS = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
  { value: "other", label: "기타" },
];
