import React from 'react';

export const HeroIllustration: React.FC = () => {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <path d="M450 250C450 360.457 360.457 450 250 450C139.543 450 50 360.457 50 250C50 139.543 139.543 50 250 50C360.457 50 450 139.543 450 250Z" fill="#E1F5EE" />
      <path d="M400 300C400 382.843 332.843 450 250 450C167.157 450 100 382.843 100 300C100 217.157 167.157 150 250 150C332.843 150 400 217.157 400 300Z" fill="#F0EBE1" fillOpacity="0.6" />
      
      {/* Abstract Figures */}
      <circle cx="180" cy="200" r="30" fill="#0F6E56" />
      <path d="M130 320C130 280 150 250 180 250C210 250 230 280 230 320" stroke="#0F6E56" strokeWidth="12" strokeLinecap="round" />
      
      <circle cx="320" cy="220" r="30" fill="#D85A30" />
      <path d="M270 340C270 300 290 270 320 270C350 270 370 300 370 340" stroke="#D85A30" strokeWidth="12" strokeLinecap="round" />
      
      <path d="M210 220C230 210 270 210 290 220" stroke="#0F6E56" strokeWidth="4" strokeDasharray="8 8" fill="none" />
    </svg>
  );
};
