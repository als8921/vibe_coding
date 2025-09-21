"use client";

import React from "react";
import { budgetRanges } from "../data/plantData";

interface BudgetSelectorProps {
  selectedBudget: string;
  onBudgetSelect: (budgetId: string) => void;
}

export const BudgetSelector: React.FC<BudgetSelectorProps> = ({
  selectedBudget,
  onBudgetSelect,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        💰 예산은 어느 정도인가요?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        예산에 맞는 식물과 가격 정보를 알려드릴게요
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {budgetRanges.map((budget) => (
          <button
            key={budget.id}
            onClick={() => onBudgetSelect(budget.id)}
            className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
              selectedBudget === budget.id
                ? "bg-gradient-to-br from-yellow-400 to-amber-400 text-white border-yellow-500 shadow-xl"
                : "bg-white/80 text-gray-700 border-yellow-200 hover:border-yellow-300 hover:shadow-lg"
            }`}
          >
            <div className="text-5xl mb-4">{budget.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{budget.name}</h3>
            <p className="text-base opacity-80">{budget.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
