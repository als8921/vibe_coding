"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";
import { BubbleAnalysis } from "../types";

interface TimeSeriesChartProps {
  analysis: BubbleAnalysis;
}

export const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({
  analysis,
}) => {
  // 60년간의 시뮬레이션 데이터 (월별)
  const timeSeriesData = [
    // 1960년대
    { year: "1965", m2Ratio: 0.8, gdpRatio: 0.6, leverage: 0.3 },
    { year: "1970", m2Ratio: 0.9, gdpRatio: 0.7, leverage: 0.4 },

    // 1970년대
    { year: "1975", m2Ratio: 0.7, gdpRatio: 0.5, leverage: 0.2 },
    { year: "1980", m2Ratio: 0.6, gdpRatio: 0.4, leverage: 0.3 },

    // 1980년대
    { year: "1985", m2Ratio: 0.8, gdpRatio: 0.6, leverage: 0.4 },
    { year: "1990", m2Ratio: 1.1, gdpRatio: 0.8, leverage: 0.5 },

    // 1990년대
    { year: "1995", m2Ratio: 1.3, gdpRatio: 1.0, leverage: 0.6 },
    { year: "2000", m2Ratio: 1.8, gdpRatio: 1.4, leverage: 0.85 },

    // 2000년대
    { year: "2005", m2Ratio: 1.4, gdpRatio: 1.1, leverage: 0.7 },
    { year: "2008", m2Ratio: 1.2, gdpRatio: 1.1, leverage: 0.92 },
    { year: "2010", m2Ratio: 1.0, gdpRatio: 0.9, leverage: 0.6 },
    { year: "2015", m2Ratio: 1.2, gdpRatio: 1.3, leverage: 0.5 },

    // 2020년대
    { year: "2020", m2Ratio: 1.4, gdpRatio: 1.6, leverage: 0.78 },
    { year: "2021", m2Ratio: 1.6, gdpRatio: 1.8, leverage: 0.82 },
    { year: "2022", m2Ratio: 1.5, gdpRatio: 1.7, leverage: 0.75 },
    { year: "2023", m2Ratio: 1.7, gdpRatio: 1.9, leverage: 0.73 },
    { year: "2024", m2Ratio: 1.8, gdpRatio: 2.0, leverage: 0.74 },
    {
      year: "2025",
      m2Ratio: analysis.marketCapToM2Ratio,
      gdpRatio: analysis.marketCapToGDPRatio,
      leverage: analysis.nasdaqLeverageRatio,
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isCurrent = label === "2025";

      return (
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-3 shadow-lg">
          <p className="text-white font-bold mb-2">
            {label}년 {isCurrent && "(현재)"}
          </p>
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
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded"></div>
              <span className="text-gray-300">
                레버리지:{" "}
                <span className="text-orange-400 font-bold">
                  {(data.leverage * 100).toFixed(1)}%
                </span>
              </span>
            </div>
            {isCurrent && (
              <div className="text-green-400 text-xs mt-2">AI 분석 결과</div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2">60년간 시장 추이</h3>
        <p className="text-sm text-gray-400">
          과거 60년간의 시가총액 비율과 레버리지 추이
        </p>
      </div>

      {/* 차트 */}
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={timeSeriesData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="year"
              stroke="#9CA3AF"
              fontSize={10}
              tick={{ fill: "#9CA3AF" }}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#9CA3AF"
              fontSize={10}
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
              strokeOpacity={0.5}
            />
            <ReferenceLine
              y={1.5}
              stroke="#F59E0B"
              strokeDasharray="5 5"
              strokeOpacity={0.5}
            />
            <ReferenceLine
              y={1.2}
              stroke="#10B981"
              strokeDasharray="5 5"
              strokeOpacity={0.5}
            />

            {/* 레버리지 위험 구간 */}
            <ReferenceLine
              y={0.8}
              stroke="#EF4444"
              strokeDasharray="3 3"
              strokeOpacity={0.3}
            />
            <ReferenceLine
              y={0.6}
              stroke="#F59E0B"
              strokeDasharray="3 3"
              strokeOpacity={0.3}
            />

            {/* 라인 차트 */}
            <Line
              type="monotone"
              dataKey="m2Ratio"
              stroke="#06B6D4"
              strokeWidth={2}
              dot={{ fill: "#06B6D4", strokeWidth: 1, r: 2 }}
              activeDot={{ r: 4, stroke: "#06B6D4", strokeWidth: 2 }}
              name="M2 비율"
            />
            <Line
              type="monotone"
              dataKey="gdpRatio"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={{ fill: "#8B5CF6", strokeWidth: 1, r: 2 }}
              activeDot={{ r: 4, stroke: "#8B5CF6", strokeWidth: 2 }}
              name="GDP 비율"
            />
            <Line
              type="monotone"
              dataKey="leverage"
              stroke="#F97316"
              strokeWidth={2}
              dot={{ fill: "#F97316", strokeWidth: 1, r: 2 }}
              activeDot={{ r: 4, stroke: "#F97316", strokeWidth: 2 }}
              name="레버리지 비율"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 주요 시기 표시 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded"></div>
          <span className="text-gray-400">2000 닷컴</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-red-500 rounded"></div>
          <span className="text-gray-400">2008 금융위기</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-orange-500 rounded"></div>
          <span className="text-gray-400">2020 코로나</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded"></div>
          <span className="text-gray-400">현재 2025</span>
        </div>
      </div>

      {/* 현재 위치 표시 */}
      <div className="mt-4 p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-700/50">
        <div className="text-sm text-gray-300">
          <div className="font-bold text-white mb-2">
            현재 시장 위치 (2025년)
          </div>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-center">
              <div className="text-lg font-bold text-cyan-400">
                {analysis.marketCapToM2Ratio.toFixed(2)}
              </div>
              <div className="text-gray-400">M2 비율</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">
                {analysis.marketCapToGDPRatio.toFixed(2)}
              </div>
              <div className="text-gray-400">GDP 비율</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-400">
                {(analysis.nasdaqLeverageRatio * 100).toFixed(1)}%
              </div>
              <div className="text-gray-400">레버리지</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
