"use client";

import { useState, useEffect } from "react";
import { ConfusionCanvas } from "./ConfusionCanvas";

export const ConfusionApp = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 클라이언트에서만 실행
    if (typeof window === "undefined") return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsLoaded(true);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white font-mono text-xl animate-pulse">
          정신없는 픽셀 괴롭히기 로딩 중...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen">
      <ConfusionCanvas width={dimensions.width} height={dimensions.height} />
    </div>
  );
};
