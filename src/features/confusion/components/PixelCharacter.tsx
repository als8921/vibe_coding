"use client";

import { PixelCharacter as PixelCharacterType } from "../types";

interface PixelCharacterProps {
  character: PixelCharacterType;
  onClick: (id: string, x: number, y: number) => void;
}

export const PixelCharacter = ({ character, onClick }: PixelCharacterProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(character.id, e.clientX, e.clientY);
  };

  const pixelStyle = {
    position: "absolute" as const,
    left: `${character.x - character.radius}px`,
    top: `${character.y - character.radius}px`,
    width: `${character.radius * 2}px`,
    height: `${character.radius * 2}px`,
    backgroundColor: character.color,
    borderRadius: "50%",
    cursor: "pointer",
    transition: character.isHit ? "none" : "all 0.1s ease-out",
    transform: character.isHit ? "scale(1.2)" : "scale(1)",
    boxShadow: character.isHit
      ? `0 0 20px ${character.color}, 0 0 40px ${character.color}`
      : `0 0 10px ${character.color}`,
    zIndex: character.isHit ? 10 : character.isMainCharacter ? 5 : 1,
    border: character.isMainCharacter ? "3px solid #FFA500" : "none",
  };

  return (
    <div style={pixelStyle} onClick={handleClick} className="pixel-character">
      {/* 픽셀 얼굴 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          height: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 눈 */}
        <div
          style={{
            display: "flex",
            gap: character.isMainCharacter ? "4px" : "2px",
            marginBottom: character.isMainCharacter ? "4px" : "2px",
          }}
        >
          <div
            style={{
              width: character.isMainCharacter ? "6px" : "3px",
              height: character.isMainCharacter ? "6px" : "3px",
              backgroundColor: "#000",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: character.isMainCharacter ? "6px" : "3px",
              height: character.isMainCharacter ? "6px" : "3px",
              backgroundColor: "#000",
              borderRadius: "50%",
            }}
          />
        </div>
        {/* 입 */}
        <div
          style={{
            width: character.isMainCharacter ? "8px" : "4px",
            height: character.isMainCharacter ? "4px" : "2px",
            backgroundColor: "#000",
            borderRadius: "0 0 2px 2px",
          }}
        />
        {/* 메인 캐릭터 특별 표시 */}
        {character.isMainCharacter && (
          <div
            style={{
              position: "absolute",
              top: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "10px",
              color: "#FFA500",
              fontWeight: "bold",
              textShadow: "1px 1px 2px #000",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
