import React from "react";

export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "default" | "narrow" | "full";
}

export const PageContainer: React.FC<PageContainerProps> = ({
  className = "",
  maxWidth = "default",
  children,
  ...props
}) => {
  const widthStyles = {
    default: "max-w-[1080px]",
    narrow: "max-w-3xl",
    full: "max-w-7xl",
  };

  return (
    <div
      className={`w-full ${widthStyles[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 relative ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
