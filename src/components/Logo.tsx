import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const svgSize = {
    sm: "h-8 w-8",
    md: "h-10 w-10 sm:h-11 sm:w-11",
    lg: "h-14 w-14",
  };

  return (
    <div className={`flex items-center justify-center transition-all duration-300 ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`${svgSize[size]} select-none`}
      >
        {/* Rounded square blue background matching the screenshot */}
        <rect width="100" height="100" rx="20" fill="#2563eb" />
        
        {/* Ruler outer frame */}
        <rect 
          x="36" 
          y="20" 
          width="28" 
          height="60" 
          rx="4" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none" 
        />
        
        {/* Horizontal Ticks inside the vertical ruler */}
        {/* Major Ticks */}
        <line x1="39" y1="31" x2="55" y2="31" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="39" y1="50" x2="55" y2="50" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="39" y1="69" x2="55" y2="69" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
        
        {/* Minor Ticks */}
        <line x1="39" y1="25" x2="48" y2="25" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="39" y1="37" x2="48" y2="37" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="39" y1="43" x2="48" y2="43" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="39" y1="56" x2="48" y2="56" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="39" y1="62" x2="48" y2="62" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="39" y1="75" x2="48" y2="75" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
