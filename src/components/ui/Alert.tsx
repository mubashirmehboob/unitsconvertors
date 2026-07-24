import React from "react";
import { CheckCircle, AlertTriangle, Info, XCircle } from "lucide-react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "info" | "warning" | "error";
  title?: string;
  icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  className = "",
  variant = "info",
  title,
  icon,
  children,
  ...props
}) => {
  const variantStyles = {
    success: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800/60",
    info: "bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800/60",
    warning: "bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border-amber-200 dark:border-amber-800/60",
    error: "bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border-rose-200 dark:border-rose-800/60",
  };

  const defaultIcons = {
    success: <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />,
    info: <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />,
    error: <XCircle className="h-5 w-5 text-rose-600 dark:text-rose-400 flex-shrink-0" />,
  };

  return (
    <div
      role="alert"
      className={`p-4 rounded-xl border flex items-start gap-3 transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon || defaultIcons[variant]}
      <div className="flex flex-col gap-0.5 text-xs sm:text-sm leading-relaxed">
        {title && <span className="font-bold tracking-tight">{title}</span>}
        <div>{children}</div>
      </div>
    </div>
  );
};
