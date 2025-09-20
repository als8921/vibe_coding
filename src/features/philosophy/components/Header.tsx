import React from "react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header className={`philosophy-header ${className}`}>
      <p className="philosophy-subtitle">외로운 당신을 위한 특별한 위로</p>
    </header>
  );
};

export default Header;
