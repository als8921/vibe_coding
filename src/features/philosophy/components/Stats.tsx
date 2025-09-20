"use client";

import React from "react";

interface StatsProps {
  clickCount: number;
  className?: string;
}

const Stats: React.FC<StatsProps> = ({ clickCount, className = "" }) => {
  return (
    <div className={`philosophy-stats ${className}`}>
      <p className="philosophy-stats-text">
        오늘 <span id="philosophy-clickCount">{clickCount}</span>번의 위로를
        받았어요!
      </p>
    </div>
  );
};

export default Stats;
