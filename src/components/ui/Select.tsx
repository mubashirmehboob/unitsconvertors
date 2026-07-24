import React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  badge?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, options, error, id, children, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={selectId} className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            className={`w-full min-h-[44px] h-11 px-4 pr-10 rounded-xl border border-[var(--border-subtle)] dark:border-slate-700 bg-[var(--surface)] dark:bg-slate-900/60 text-slate-900 dark:text-white font-display text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 appearance-none cursor-pointer transition-colors ${
              error ? "border-red-500 focus-visible:ring-red-500" : ""
            } ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                {opt.label} {opt.badge ? `(${opt.badge})` : ""}
              </option>
            ))}
            {children}
          </select>
          <ChevronDown className="absolute right-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
        </div>
        {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";
