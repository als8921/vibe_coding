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
    <div className={`philosophy-quote-container ${className}`}>
      <div className="philosophy-quote-box">
        <p className="philosophy-quote-text">
          {isTyping ? displayText : quote.text}
          {isTyping && <span className="philosophy-cursor">|</span>}
        </p>
        <p className="philosophy-quote-author">{quote.author}</p>
      </div>
    </div>
  );
};

export default QuoteDisplay;
