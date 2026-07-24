import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, icon, id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && <div className="absolute left-3.5 text-slate-400 pointer-events-none">{icon}</div>}
          <input
            ref={ref}
            id={inputId}
            className={`w-full min-h-[44px] h-11 ${
              icon ? "pl-10" : "px-4"
            } pr-4 rounded-xl border border-[var(--border-subtle)] dark:border-slate-700 bg-[var(--surface)] dark:bg-slate-900/60 text-slate-900 dark:text-white font-mono text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors ${
              error ? "border-red-500 focus-visible:ring-red-500" : ""
            } ${className}`}
            {...props}
          />
        </div>
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
