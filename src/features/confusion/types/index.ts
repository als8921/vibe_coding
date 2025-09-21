export interface PixelCharacter {
  id: string;
  x: number;
  y: number;
  vx: number; // x축 속도
  vy: number; // y축 속도
  ax: number; // x축 가속도
  ay: number; // y축 가속도
  radius: number;
  color: string;
  isHit: boolean;
  hitTimer: number;
  isMainCharacter?: boolean; // 메인 캐릭터 여부
  spawnTimer?: number; // 스폰 타이머
  clickCount?: number; // 클릭 횟수 (크기 증가용)
}

export interface ConfusionState {
  characters: PixelCharacter[];
  isPlaying: boolean;
  score: number;
  chaosLevel: number;
}

export interface TouchEvent {
  x: number;
  y: number;
  timestamp: number;
}
