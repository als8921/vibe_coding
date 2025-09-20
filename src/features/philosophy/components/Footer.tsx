import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`text-center py-4 mt-auto relative z-10 ${className}`}>
      <p className="text-sm text-gray-500">© 2025 개똥철학. 모든 권리 보유.</p>
      <p className="text-xs text-gray-400 mt-1">아이디어 제공: 이서형</p>
    </footer>
  );
};

export default Footer;
