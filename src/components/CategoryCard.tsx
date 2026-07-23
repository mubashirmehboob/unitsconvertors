import React from "react";
import { Ruler } from "lucide-react";
import { categoryIconMap, getCategoryStyle } from "./Header";
import { Category } from "../types";

interface CategoryCardProps {
  key?: string;
  category: Category;
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
}

export default function CategoryCard({ category, onNavigate }: CategoryCardProps) {
  const Icon = categoryIconMap[category.id] || Ruler;
  const style = getCategoryStyle(category.id);

  return (
    <div 
      onClick={() => onNavigate(category.id)}
      className={`group relative flex flex-col items-center justify-center rounded-[24px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 px-2 pt-[15px] pb-[15px] hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/20 dark:hover:shadow-black/30 hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-all duration-300 ease-out cursor-pointer min-h-[120px]`}
      id={`cat-card-${category.id}`}
    >
      {/* Subtle background glow effect */}
      <div className={`absolute -inset-px rounded-[24px] bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-[0.02] dark:group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none`} />

      {/* Direct Category Icon */}
      <Icon className={`h-10 w-10 ${style.text} group-hover:scale-108 transition-transform duration-300 stroke-[1.5]`} />

      {/* Category Name with Suffix */}
      <span className="font-sans text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-center mt-3 tracking-tight transition-colors line-clamp-2 px-1">
        {category.name} Converters
      </span>
    </div>
  );
}
