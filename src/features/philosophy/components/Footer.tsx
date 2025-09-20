import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`text-center py-4 mt-auto relative z-10 ${className}`}>
      <p className="text-sm text-gray-500">© 2025 개똥철학. 모든 권리 보유.</p>
    </footer>
  );
};

export default Footer;
