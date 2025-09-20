"use client";

import React from "react";

interface StatsProps {
  clickCount: number;
  className?: string;
}

const Stats: React.FC<StatsProps> = ({ clickCount, className = "" }) => {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <p className="text-pixel-sm text-gray-700 opacity-70">
        오늘 <span className="text-pink-500">{clickCount}</span>
        번의 위로를 받았어요!
      </p>
    </div>
  );
};

export default Stats;
