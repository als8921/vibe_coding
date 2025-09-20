import React from "react";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`philosophy-footer ${className}`}>
      <p className="philosophy-footer-text">© 2025 개똥철학. 모든 권리 보유.</p>
    </footer>
  );
};

export default Footer;
