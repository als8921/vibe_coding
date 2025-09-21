"use client";

import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { BubbleAnalysis } from "../types";

interface MarketRatioChartProps {
  analysis: BubbleAnalysis;
}

export const MarketRatioChart: React.FC<MarketRatioChartProps> = ({
  analysis,
}) => {
  // 과거 버블 시기 데이터
  const chartData = [
    {
      period: "2000",
      name: "닷컴 버블",
      m2Ratio: 1.8,
      gdpRatio: 1.4,
      bubble: true,
      outcome: "버블 붕괴",
    },
    {
      period: "2008",
      name: "금융위기",
      m2Ratio: 1.2,
      gdpRatio: 1.1,
      bubble: true,
      outcome: "금융위기",
    },
    {
      period: "2020",
      name: "코로나",
      m2Ratio: 1.4,
      gdpRatio: 1.6,
      bubble: true,
      outcome: "급락 후 급등",
    },
    {
      period: "2021",
      name: "메모주",
      m2Ratio: 1.6,
      gdpRatio: 1.8,
      bubble: true,
      outcome: "부분적 조정",
    },
    {
      period: "2025",
      name: "현재",
      m2Ratio: analysis.marketCapToM2Ratio,
      gdpRatio: analysis.marketCapToGDPRatio,
      bubble: false,
      outcome: "분석 중",
    },
  ];

  interface TooltipPayload {
    payload: {
      name: string;
      m2Ratio: number;
      gdpRatio: number;
      bubble: boolean;
      outcome: string;
    };
  }

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: TooltipPayload[];
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-bold mb-2">{data.name}</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded"></div>
              <span className="text-gray-300">
                M2 비율:{" "}
                <span className="text-cyan-400 font-bold">
                  {data.m2Ratio.toFixed(2)}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded"></div>
              <span className="text-gray-300">
                GDP 비율:{" "}
                <span className="text-purple-400 font-bold">
                  {data.gdpRatio.toFixed(2)}
                </span>
              </span>
            </div>
            {data.bubble && (
              <div className="text-red-400 text-xs mt-2">
                결과: {data.outcome}
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      {/* 범례 */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-400 rounded"></div>
          <span className="text-gray-300">시가총액/M2 비율</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-400 rounded"></div>
          <span className="text-gray-300">시가총액/GDP 비율</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <span className="text-gray-300">과거 버블 시기</span>
        </div>
      </div>

      {/* 차트 */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="period"
              stroke="#9CA3AF"
              fontSize={12}
              tick={{ fill: "#9CA3AF" }}
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={12}
              tick={{ fill: "#9CA3AF" }}
              domain={[0, 2.5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />

            {/* 위험 구간 표시 */}
            <ReferenceLine
              y={2.0}
              stroke="#EF4444"
              strokeDasharray="5 5"
              strokeOpacity={0.7}
            />
            <ReferenceLine
              y={1.5}
              stroke="#F59E0B"
              strokeDasharray="5 5"
              strokeOpacity={0.7}
            />
            <ReferenceLine
              y={1.2}
              stroke="#10B981"
              strokeDasharray="5 5"
              strokeOpacity={0.7}
            />

            {/* 바 차트 */}
            <Bar
              dataKey="m2Ratio"
              name="M2 비율"
              fill="#06B6D4"
              radius={[2, 2, 0, 0]}
              opacity={0.8}
            />
            <Bar
              dataKey="gdpRatio"
              name="GDP 비율"
              fill="#8B5CF6"
              radius={[2, 2, 0, 0]}
              opacity={0.8}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 위험 구간 설명 */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded"></div>
          <span className="text-gray-400">2.0+ (극심)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-orange-500 rounded"></div>
          <span className="text-gray-400">1.5+ (높음)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded"></div>
          <span className="text-gray-400">1.2+ (보통)</span>
        </div>
      </div>

      {/* 현재 상태 표시 */}
      <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
        <div className="text-sm text-gray-300">
          <div className="font-bold text-white mb-1">
            현재 버블 수준: {analysis.bubbleLevel.toUpperCase()}
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>M2 비율:</span>
              <span
                className={
                  analysis.marketCapToM2Ratio >= 1.5
                    ? "text-orange-400"
                    : "text-green-400"
                }
              >
                {analysis.marketCapToM2Ratio.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>GDP 비율:</span>
              <span
                className={
                  analysis.marketCapToGDPRatio >= 1.5
                    ? "text-orange-400"
                    : "text-green-400"
                }
              >
                {analysis.marketCapToGDPRatio.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
