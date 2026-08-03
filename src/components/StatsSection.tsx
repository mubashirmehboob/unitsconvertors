import React from "react";
import { categoriesData } from "../data/convertersData";
import { engineeringCalculatorsData } from "../data/calculatorsData";

export default function StatsSection() {
  const totalUnitCategories = categoriesData.length;
  const totalEngineeringDisciplines = engineeringCalculatorsData.length;
  const totalCategories = totalUnitCategories + totalEngineeringDisciplines;

  // Calculate total unit conversion pair permutations
  const totalUnitPairs = categoriesData.reduce((acc, cat) => {
    const len = cat.units.length;
    return acc + (len * (len - 1));
  }, 0);

  // Calculate total engineering tools
  const totalEngTools = engineeringCalculatorsData.reduce((acc, disc) => {
    return acc + disc.tools.length;
  }, 0);

  const totalToolsCount = totalUnitPairs + totalEngTools;

  const stats = [
    {
      metric: `${totalCategories}`,
      label: "Categories & Disciplines",
      desc: `${totalUnitCategories} Unit Converters + ${totalEngineeringDisciplines} Engineering Disciplines`,
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      metric: `${totalToolsCount.toLocaleString()}+`,
      label: "Converters & Calculators",
      desc: "Exact SI/NIST unit pairs & multi-variable engineering models",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      metric: "100%",
      label: "Free & Open Access",
      desc: "No paywalls, subscription models, or email gating",
      gradient: "from-emerald-500 to-blue-600"
    },
    {
      metric: "Instant",
      label: "Client-Side Computing",
      desc: "Zero server latency, running 100% locally in your browser",
      gradient: "from-blue-600 to-indigo-500"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="stats-section">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-[var(--border-subtle)] dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 hover:bg-[var(--surface-hover)] dark:hover:bg-slate-900/60 backdrop-blur-sm flex flex-col gap-1 items-center justify-center text-center hover:shadow-md transition-all duration-300"
          >
            <span className={`font-display text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}>
              {item.metric}
            </span>
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">
              {item.label}
            </span>
            <span className="text-[9px] text-slate-400 dark:text-slate-500 leading-snug mt-1 max-w-[150px]">
              {item.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
