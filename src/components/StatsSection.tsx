import React from "react";

export default function StatsSection() {
  const stats = [
    {
      metric: "24+",
      label: "Core Categories",
      desc: "From length & mass to engineering & radioactivity",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      metric: "516+",
      label: "Unit Converters",
      desc: "Pre-rendered high-performance calculation matrices",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      metric: "100%",
      label: "Free Forever",
      desc: "No paywalls, subscription models, or email gating",
      gradient: "from-emerald-500 to-blue-600"
    },
    {
      metric: "Instant",
      label: "Browser Computing",
      desc: "Zero server lag, running locally on your device",
      gradient: "from-blue-600 to-indigo-500"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full" id="stats-section">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800 bg-white dark:bg-slate-900/40 backdrop-blur-sm flex flex-col gap-1 items-center justify-center text-center hover:shadow-lg transition-all duration-300"
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
