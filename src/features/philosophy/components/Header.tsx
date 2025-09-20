import React from "react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header className={`text-center py-8 px-4 relative z-10 ${className}`}>
      <p className="text-pixel-sm text-gray-700 opacity-80">
        외로운 당신을 위한 특별한 위로
      </p>
    </header>
  );
};

export default Header;
