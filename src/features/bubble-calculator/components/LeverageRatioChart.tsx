"use client";

import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  ComposedChart,
} from "recharts";
import { BubbleAnalysis } from "../types";

interface LeverageRatioChartProps {
  analysis: BubbleAnalysis;
}

export const LeverageRatioChart: React.FC<LeverageRatioChartProps> = ({
  analysis,
}) => {
  // 과거 레버리지 데이터
  const chartData = [
    {
      period: "2000",
      name: "닷컴 버블",
      ratio: 0.85,
      status: "위험",
      outcome: "버블 붕괴",
    },
    {
      period: "2008",
      name: "금융위기",
      ratio: 0.92,
      status: "매우위험",
      outcome: "금융위기",
    },
    {
      period: "2020",
      name: "코로나",
      ratio: 0.78,
      status: "높음",
      outcome: "급락 후 급등",
    },
    {
      period: "2021",
      name: "메모주",
      ratio: 0.82,
      status: "높음",
      outcome: "부분적 조정",
    },
    {
      period: "2025",
      name: "현재",
      ratio: analysis.nasdaqLeverageRatio,
      status: "현재",
      outcome: "분석 중",
    },
  ];

  const getStatusText = (ratio: number) => {
    if (ratio >= 0.8) return "매우 위험";
    if (ratio >= 0.6) return "주의";
    return "안전";
  };

  const getStatusTextColor = (ratio: number) => {
    if (ratio >= 0.8) return "text-red-400";
    if (ratio >= 0.6) return "text-orange-400";
    return "text-green-400";
  };

  interface TooltipPayload {
    payload: {
      name: string;
      ratio: number;
      status: string;
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
              <div className="w-3 h-3 bg-orange-400 rounded"></div>
              <span className="text-gray-300">
                레버리지 비율:{" "}
                <span className="text-orange-400 font-bold">
                  {(data.ratio * 100).toFixed(1)}%
                </span>
              </span>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              상태: {getStatusText(data.ratio)}
            </div>
            {data.outcome !== "분석 중" && (
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
      {/* 현재 레버리지 상태 */}
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">
          {(analysis.nasdaqLeverageRatio * 100).toFixed(1)}%
        </div>
        <div
          className={`text-lg font-medium ${getStatusTextColor(
            analysis.nasdaqLeverageRatio
          )}`}
        >
          {getStatusText(analysis.nasdaqLeverageRatio)}
        </div>
        <div className="text-sm text-gray-400 mt-1">
          나스닥 레버리지 청산 비율
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
              domain={[0, 1]}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* 위험 구간 표시 */}
            <ReferenceLine
              y={0.8}
              stroke="#EF4444"
              strokeDasharray="5 5"
              strokeOpacity={0.7}
            />
            <ReferenceLine
              y={0.6}
              stroke="#F59E0B"
              strokeDasharray="5 5"
              strokeOpacity={0.7}
            />

            {/* 위험 구간 영역 */}
            <Area
              type="monotone"
              dataKey={() => 1}
              fill="#EF4444"
              fillOpacity={0.1}
              stroke="none"
            />
            <Area
              type="monotone"
              dataKey={() => 0.8}
              fill="#F59E0B"
              fillOpacity={0.1}
              stroke="none"
            />

            {/* 레버리지 비율 라인 */}
            <Line
              type="monotone"
              dataKey="ratio"
              stroke="#F97316"
              strokeWidth={3}
              dot={{ fill: "#F97316", strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: "#F97316", strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 위험 구간 설명 */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded"></div>
          <span className="text-gray-400">80%+ (위험)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-orange-500 rounded"></div>
          <span className="text-gray-400">60-80% (주의)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded"></div>
          <span className="text-gray-400">60% 미만 (안전)</span>
        </div>
      </div>

      {/* 과거 데이터 비교 */}
      <div className="space-y-3">
        <h4 className="text-sm font-bold text-gray-300">과거 시기 비교</h4>
        {chartData.slice(0, -1).map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span className="text-sm text-gray-300">{data.name}</span>
              <span className="text-xs text-gray-500">({data.status})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-white">
                {(data.ratio * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 레버리지 해석 */}
      <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
        <div className="text-sm text-gray-300">
          <div className="font-bold text-white mb-2">
            레버리지 청산 비율 해석
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>60% 미만: 안전 (낮은 레버리지)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>60-80%: 주의 (보통 레버리지)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>80% 이상: 위험 (높은 레버리지)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
