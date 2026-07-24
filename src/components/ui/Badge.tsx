import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "cyan" | "outline";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className = "",
  variant = "default",
  size = "md",
  children,
  ...props
}) => {
  const variantStyles = {
    default: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    primary: "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60",
    secondary: "bg-[var(--background-secondary)] text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-[var(--border-subtle)] dark:border-slate-700",
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/60",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/60",
    cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/60",
    outline: "border border-[var(--border-subtle)] dark:border-slate-700 text-slate-600 dark:text-slate-400 bg-transparent",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] rounded-md font-semibold tracking-wider uppercase",
    md: "px-2.5 py-1 text-xs rounded-lg font-semibold",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 font-display transition-colors whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
