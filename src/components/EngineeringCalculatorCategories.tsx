import React from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { engineeringCalculatorsData, getCategorySlugForDiscipline } from "../data/calculatorsData";
import { calcIconMap } from "./Header";

interface EngineeringCalculatorCategoriesProps {
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string, toolSlug?: string) => void;
}

export default function EngineeringCalculatorCategories({ onNavigate }: EngineeringCalculatorCategoriesProps) {
  // Display only the first 12 disciplines on the homepage
  const visibleDisciplines = engineeringCalculatorsData.slice(0, 12);

  return (
    <section 
      className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6 py-4" 
      id="engineering-calculator-categories"
      aria-label="Engineering Calculator Categories"
    >
      {/* Header Bar: Section Title, Badge, and Hub Link */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <Calculator className="h-5 w-5 text-amber-500 dark:text-amber-400" />
            Engineering Calculator Categories
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900/60">
              {engineeringCalculatorsData.length} Disciplines
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Multi-variable engineering formulas, physics calculators, and technical equation solvers.
          </p>
        </div>

        <a
          href="/calculators"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("calculators");
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors cursor-pointer shrink-0"
        >
          Explore All Calculators
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Responsive Grid displaying 12 categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-2">
        {visibleDisciplines.map((discipline) => {
          const Icon = calcIconMap[discipline.iconName] || Calculator;
          const catSlug = getCategorySlugForDiscipline(discipline.id);

          const displayName = 
            discipline.name === "Electrical" ? "Electrical Engineering" :
            discipline.name === "Mechanical" ? "Mechanical Engineering" :
            discipline.name === "Civil" ? "Civil Engineering" :
            discipline.name;

          return (
            <a
              key={discipline.id}
              href={`/calculators/${catSlug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("calculators", undefined, undefined, catSlug);
              }}
              className="group relative flex flex-col justify-between rounded-[24px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/5 dark:hover:shadow-amber-500/10 hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 block"
              id={`eng-calc-card-${discipline.id}`}
              aria-label={`Open ${displayName} Calculators`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform border border-amber-200/50 dark:border-amber-900/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                    {discipline.tools.length} Tools
                  </span>
                </div>

                <h3 className="font-sans text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-1.5 tracking-tight">
                  {displayName}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {discipline.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80">
                <span>Open Calculators</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Centered Large Solid CTA Button: Discover More Engineering Calculators */}
      <div className="flex justify-center mt-4">
        <a
          href="/calculators"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("calculators");
          }}
          className="inline-flex items-center justify-center h-12 px-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-sans text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer text-center"
          id="discover-more-engineering-calculators-btn"
        >
          Discover More Engineering Calculators
        </a>
      </div>
    </section>
  );
}
