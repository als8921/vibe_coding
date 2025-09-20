"use client";

import React, { useState, useEffect } from "react";
import { Quote } from "@/features/philosophy/data/quotes";

interface QuoteDisplayProps {
  quote: Quote;
  isAnimating?: boolean;
  className?: string;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({
  quote,
  isAnimating = false,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isAnimating && quote.text) {
      setDisplayText("");
      setCurrentIndex(0);
      setIsTyping(true);
    }
  }, [quote.text, isAnimating]);

  useEffect(() => {
    if (!isTyping || !quote.text) return;

    const timer = setTimeout(() => {
      if (currentIndex < quote.text.length) {
        setDisplayText((prev) => prev + quote.text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setIsTyping(false);
      }
    }, 50); // 타이핑 속도 조절

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, quote.text]);

  return (
    <div className={`w-full max-w-2xl mb-10 ${className}`}>
      <div className="bg-white border-4 border-pink-400 rounded-2xl p-8 shadow-lg relative">
        <p className="text-pixel-quote-responsive text-center text-gray-800 min-h-32 flex items-center justify-center px-4">
          {isTyping ? displayText : quote.text}
          {isTyping && <span className="text-pink-400 animate-pulse">|</span>}
        </p>
        <p className="text-pixel-sm text-pink-400 text-center mt-6 opacity-70">
          {quote.author}
        </p>
      </div>
    </div>
  );
};

export default QuoteDisplay;
