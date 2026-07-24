import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  bgVariant?: "primary" | "secondary" | "transparent";
  borderBottom?: boolean;
  borderTop?: boolean;
  padded?: boolean;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className = "",
      bgVariant = "primary",
      borderBottom = false,
      borderTop = false,
      padded = true,
      children,
      ...props
    },
    ref
  ) => {
    const bgStyles = {
      primary: "bg-[var(--background-primary)] dark:bg-slate-900",
      secondary: "bg-[var(--background-secondary)] dark:bg-slate-900/40",
      transparent: "bg-transparent",
    };

    const borders = [
      borderTop ? "border-t border-[var(--border-subtle)] dark:border-slate-800" : "",
      borderBottom ? "border-b border-[var(--border-subtle)] dark:border-slate-800" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const paddingStyle = padded ? "py-8 sm:py-10" : "";

    return (
      <section
        ref={ref}
        className={`w-full transition-colors duration-200 ${bgStyles[bgVariant]} ${borders} ${paddingStyle} ${className}`}
        {...props}
      >
        <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    );
  }
);

Container.displayName = "Container";
