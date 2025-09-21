"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { PixelCharacter } from "../types";
import { PixelCharacter as PixelCharacterComponent } from "./PixelCharacter";

interface ConfusionCanvasProps {
  width: number;
  height: number;
}

export const ConfusionCanvas = ({ width, height }: ConfusionCanvasProps) => {
  const animationRef = useRef<number | undefined>(undefined);
  const [characters, setCharacters] = useState<PixelCharacter[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  // const [chaosLevel, setChaosLevel] = useState(0); // 혼돈 레벨 제거

  // 물리 상수 (더 정신없게!)
  const GRAVITY = 0.15; // 중력 증가
  const FRICTION = 0.95; // 마찰 감소 (더 오래 날아다님)
  const FORCE_MULTIPLIER = 25; // 힘 증가

  // 캐릭터 초기화
  const initializeCharacters = useCallback(() => {
    const newCharacters: PixelCharacter[] = [];

    // 메인 캐릭터 (중앙에 큰 캐릭터)
    newCharacters.push({
      id: "main-character",
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      ax: 0,
      ay: 0,
      radius: 60,
      color: "#FFD700", // 금색
      isHit: false,
      hitTimer: 0,
      isMainCharacter: true,
      spawnTimer: 0,
      clickCount: 0,
    });

    setCharacters(newCharacters);
    setIsPlaying(true);
  }, [width, height]);

  // 충돌 감지 및 반응
  const handleCollision = useCallback(
    (char1: PixelCharacter, char2: PixelCharacter) => {
      const dx = char2.x - char1.x;
      const dy = char2.y - char1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const minDistance = char1.radius + char2.radius;

      if (distance < minDistance) {
        // 충돌 발생
        const overlap = minDistance - distance;
        const separationX = (dx / distance) * overlap * 0.5;
        const separationY = (dy / distance) * overlap * 0.5;

        // 위치 분리
        char1.x -= separationX;
        char1.y -= separationY;
        char2.x += separationX;
        char2.y += separationY;

        // 속도 교환 (탄성 충돌)
        const relativeVx = char2.vx - char1.vx;
        const relativeVy = char2.vy - char1.vy;
        const relativeSpeed = relativeVx * dx + relativeVy * dy;

        if (relativeSpeed > 0) return; // 이미 분리 중

        const impulse = (2 * relativeSpeed) / (minDistance * minDistance);
        const impulseX = impulse * dx;
        const impulseY = impulse * dy;

        char1.vx += impulseX * char2.radius;
        char1.vy += impulseY * char2.radius;
        char2.vx -= impulseX * char1.radius;
        char2.vy -= impulseY * char1.radius;

        // 히트 상태 설정
        char1.isHit = true;
        char1.hitTimer = 10;
        char2.isHit = true;
        char2.hitTimer = 10;
      }
    },
    []
  );

  // 물리 업데이트
  const updatePhysics = useCallback(() => {
    setCharacters((prevCharacters) => {
      const updatedCharacters = [...prevCharacters];

      updatedCharacters.forEach((char) => {
        // 메인 캐릭터는 완전 고정 (물리 적용 안함, 위치도 절대 변경 안함)
        if (char.isMainCharacter) {
          // 히트 타이머만 감소
          if (char.hitTimer > 0) {
            char.hitTimer--;
            if (char.hitTimer === 0) {
              char.isHit = false;
            }
          }
          // 위치를 항상 중앙으로 고정 (혹시 모를 이동 방지)
          char.x = width / 2;
          char.y = height / 2;
          char.vx = 0;
          char.vy = 0;
          char.ax = 0;
          char.ay = 0;
          return; // 메인 캐릭터는 여기서 종료
        }

        // 작은 캐릭터들만 물리 적용
        // 히트 타이머 감소
        if (char.hitTimer > 0) {
          char.hitTimer--;
          if (char.hitTimer === 0) {
            char.isHit = false;
          }
        }

        // 중력 적용
        char.ay += GRAVITY;

        // 속도 업데이트
        char.vx += char.ax;
        char.vy += char.ay;

        // 마찰 적용
        char.vx *= FRICTION;
        char.vy *= FRICTION;

        // 위치 업데이트
        char.x += char.vx;
        char.y += char.vy;

        // 가속도 리셋
        char.ax = 0;
        char.ay = 0;

        // 화면 경계에서 사라지기 (더 오래 유지되도록 수정)
        if (
          char.x + char.radius < -50 || // 화면 밖으로 더 멀리 나가야 사라짐
          char.x - char.radius > width + 50 ||
          char.y + char.radius < -50 ||
          char.y - char.radius > height + 50
        ) {
          // 화면 밖으로 나간 캐릭터는 제거할 예정으로 표시
          char.radius = 0; // 크기를 0으로 만들어 보이지 않게 함
        }
      });

      // 모든 캐릭터 간 충돌 검사 (메인 캐릭터 포함)
      for (let i = 0; i < updatedCharacters.length; i++) {
        for (let j = i + 1; j < updatedCharacters.length; j++) {
          handleCollision(updatedCharacters[i], updatedCharacters[j]);
        }
      }

      // 화면 밖으로 나간 작은 캐릭터들 제거
      const filteredCharacters = updatedCharacters.filter((char) => {
        if (char.isMainCharacter) return true; // 메인 캐릭터는 항상 유지
        return char.radius > 0; // 작은 캐릭터는 크기가 0이 아닌 것만 유지
      });

      return filteredCharacters;
    });
  }, [width, height, handleCollision]);

  // 작은 캐릭터 스폰 함수
  const spawnSmallCharacters = useCallback(
    (centerX: number, centerY: number) => {
      const colors = [
        "#FF6B6B",
        "#4ECDC4",
        "#45B7D1",
        "#96CEB4",
        "#FFEAA7",
        "#DDA0DD",
        "#98D8C8",
        "#FFB6C1",
        "#87CEEB",
        "#F0E68C",
      ];

      const newSmallCharacters: PixelCharacter[] = [];
      const spawnCount = 18; // 스폰할 작은 캐릭터 수 증가

      // 클라이언트에서만 실행되도록 보장
      if (typeof window === "undefined") return;

      for (let i = 0; i < spawnCount; i++) {
        const angle =
          (Math.PI * 2 * i) / spawnCount + (Math.random() - 0.5) * 0.5; // 약간의 랜덤 각도 추가
        const distance = 100 + Math.random() * 60; // 중심에서의 거리 증가
        const spawnX = centerX + Math.cos(angle) * distance;
        const spawnY = centerY + Math.sin(angle) * distance;

        // 중심에서 바깥쪽으로 튕겨나가는 속도 (더 빠르게!)
        const velocity = 12 + Math.random() * 8; // 속도 증가
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        // 크기를 더 다양하게 (매우 작은 것부터 큰 것까지)
        const sizeType = Math.random();
        let radius;
        if (sizeType < 0.3) {
          radius = 8 + Math.random() * 5; // 작은 크기 (8-13)
        } else if (sizeType < 0.7) {
          radius = 15 + Math.random() * 10; // 중간 크기 (15-25)
        } else {
          radius = 25 + Math.random() * 15; // 큰 크기 (25-40)
        }

        newSmallCharacters.push({
          id: `small-character-${Date.now()}-${Math.random()
            .toString(36)
            .substr(2, 9)}-${i}`,
          x: spawnX,
          y: spawnY,
          vx: vx,
          vy: vy,
          ax: 0,
          ay: 0,
          radius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          isHit: true, // 스폰 시 히트 상태
          hitTimer: 25, // 히트 시간 증가
          isMainCharacter: false,
        });
      }

      setCharacters((prev) => [...prev, ...newSmallCharacters]);
      setScore((prev) => prev + 50); // 스폰 시 더 많은 점수
      // setChaosLevel((prev) => Math.min(prev + 5, 100)); // 혼돈 레벨 제거
    },
    []
  );

  // 터치/클릭 핸들러
  const handleCharacterClick = useCallback(
    (id: string, clickX: number, clickY: number) => {
      setCharacters((prevCharacters) => {
        const updatedCharacters = [...prevCharacters];
        const character = updatedCharacters.find((char) => char.id === id);

        if (character) {
          if (character.isMainCharacter) {
            // 메인 캐릭터 클릭 시 작은 캐릭터들 스폰
            spawnSmallCharacters(character.x, character.y);

            // 클릭 횟수 증가 및 크기 증가
            character.clickCount = (character.clickCount || 0) + 1;
            character.radius = Math.min(60 + character.clickCount * 5, 120); // 최대 120까지

            // 메인 캐릭터는 완전 고정이므로 히트 효과만 적용
            character.isHit = true;
            character.hitTimer = 20;

            // 혹시 모를 이동 방지를 위해 위치 강제 고정
            character.x = width / 2;
            character.y = height / 2;
            character.vx = 0;
            character.vy = 0;
            character.ax = 0;
            character.ay = 0;
          } else {
            // 작은 캐릭터 클릭 시 기존 로직 (더 강한 힘!)
            const dx = character.x - clickX;
            const dy = character.y - clickY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 0) {
              // 크기에 따라 다른 힘 적용 (작은 캐릭터일수록 더 강하게!)
              const sizeMultiplier = Math.max(
                0.5,
                1 - (character.radius - 8) / 32
              ); // 8px일 때 1.0, 40px일 때 0.5
              const forceX =
                (dx / distance) * FORCE_MULTIPLIER * sizeMultiplier;
              const forceY =
                (dy / distance) * FORCE_MULTIPLIER * sizeMultiplier;

              character.vx += forceX;
              character.vy += forceY;
              character.isHit = true;
              character.hitTimer = 20; // 히트 시간 증가

              setScore((prev) => prev + 10);
              // setChaosLevel((prev) => Math.min(prev + 1, 100)); // 혼돈 레벨 제거
            }
          }
        }

        return updatedCharacters;
      });
    },
    [spawnSmallCharacters, height, width]
  );

  // 애니메이션 루프
  useEffect(() => {
    if (isPlaying) {
      const animate = () => {
        updatePhysics();
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, updatePhysics]);

  // 컴포넌트 마운트 시 캐릭터 초기화 (클라이언트에서만)
  useEffect(() => {
    if (typeof window !== "undefined") {
      initializeCharacters();
    }
  }, [initializeCharacters]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 배경 패턴 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #ff00ff 25%, transparent 25%),
            linear-gradient(-45deg, #ff00ff 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #00ffff 75%),
            linear-gradient(-45deg, transparent 75%, #00ffff 75%)
          `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
        }}
      />

      {/* 캐릭터들 */}
      {characters.map((character) => (
        <PixelCharacterComponent
          key={character.id}
          character={character}
          onClick={handleCharacterClick}
        />
      ))}

      {/* UI */}
      <div className="absolute top-4 left-4 text-white font-mono text-sm">
        <div>점수: {score}</div>
        <div>
          메인 캐릭터 크기:{" "}
          {characters.find((char) => char.isMainCharacter)?.clickCount || 0}회
          클릭
        </div>
        <div>
          캐릭터 수: {characters.filter((char) => !char.isMainCharacter).length}
          개
        </div>
      </div>

      <div className="absolute top-4 right-4 text-white font-mono text-xs opacity-70">
        <div>👑 더 정신없이 날아다닙니다!</div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-mono text-xs opacity-50">
        캐릭터들이 더 오래 유지됩니다!
      </div>
    </div>
  );
};
