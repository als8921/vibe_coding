"use client";

import React, { useState, useEffect } from "react";

// 미리 정의된 파티클 데이터 (hydration mismatch 방지)
const particleData = [
  { left: 11.22, top: 96.09, delay: 0.28, duration: 4.04 },
  { left: 5.75, top: 21.85, delay: 0.12, duration: 3.48 },
  { left: 9.37, top: 41.69, delay: 2.0, duration: 2.66 },
  { left: 56.95, top: 43.12, delay: 0.76, duration: 2.89 },
  { left: 95.79, top: 37.83, delay: 1.09, duration: 2.09 },
  { left: 37.9, top: 69.06, delay: 2.32, duration: 2.78 },
  { left: 54.76, top: 75.55, delay: 0.63, duration: 4.69 },
  { left: 40.6, top: 95.71, delay: 0.9, duration: 2.2 },
  { left: 60.79, top: 86.55, delay: 1.95, duration: 4.39 },
  { left: 35.66, top: 44.34, delay: 1.99, duration: 3.43 },
  { left: 64.62, top: 58.57, delay: 0.23, duration: 3.51 },
  { left: 16.95, top: 71.28, delay: 0.74, duration: 3.42 },
  { left: 11.06, top: 9.47, delay: 2.08, duration: 3.36 },
  { left: 12.47, top: 2.14, delay: 2.69, duration: 2.86 },
  { left: 43.65, top: 27.19, delay: 2.29, duration: 4.21 },
  { left: 90.01, top: 54.14, delay: 2.55, duration: 3.18 },
  { left: 38.65, top: 28.78, delay: 2.01, duration: 2.04 },
  { left: 33.07, top: 52.4, delay: 1.91, duration: 3.38 },
  { left: 87.54, top: 25.08, delay: 1.66, duration: 2.6 },
  { left: 71.35, top: 2.45, delay: 0.19, duration: 4.17 },
];

export const DarkBackground: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* 기본 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* 애니메이션 원형 그라데이션들 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-2000" />

      {/* 미묘한 격자 패턴 */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* 떠다니는 파티클 효과 - 클라이언트에서만 렌더링 */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particleData.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* 네온 라인 효과 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent" />
    </div>
  );
};
