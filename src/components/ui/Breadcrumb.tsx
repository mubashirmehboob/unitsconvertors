import React from "react";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onHomeClick?: () => void;
  className?: string;
  injectSchema?: boolean;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  onHomeClick,
  className = "",
  injectSchema = false,
}) => {
  // Generate JSON-LD BreadcrumbList Schema
  const schemaObj = injectSchema
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://unitsconvertors.com",
          },
          ...items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 2,
            name: item.label,
          })),
        ],
      }
    : null;

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-display ${className}`}>
      {schemaObj && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
        />
      )}
      <ol className="flex items-center flex-wrap gap-1.5">
        <li className="inline-flex items-center">
          <button
            type="button"
            onClick={onHomeClick}
            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xs"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </button>
        </li>
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-600 flex-shrink-0" />
            {item.active || !item.onClick ? (
              <span className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                {item.label}
              </span>
            ) : (
              <button
                type="button"
                onClick={item.onClick}
                className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xs truncate max-w-[150px] sm:max-w-xs"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
