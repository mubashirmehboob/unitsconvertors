import React from "react";
import { ChevronRight, ArrowRight, Sparkles, Star } from "lucide-react";

interface FeaturedConvertersProps {
  onNavigate: (category: string, fromUnit?: string, toUnit?: string) => void;
}

export default function FeaturedConverters({ onNavigate }: FeaturedConvertersProps) {
  const featured = [
    {
      cat: "length",
      from: "meter",
      to: "foot",
      title: "Meter to Feet",
      symbol: "m ↔ ft",
      eq: "1 m = 3.28084 ft",
      label: "Length"
    },
    {
      cat: "weight-mass",
      from: "kilogram",
      to: "pound",
      title: "Kilogram to Pound",
      symbol: "kg ↔ lb",
      eq: "1 kg = 2.20462 lb",
      label: "Mass"
    },
    {
      cat: "temperature",
      from: "celsius",
      to: "fahrenheit",
      title: "Celsius to Fahrenheit",
      symbol: "°C ↔ °F",
      eq: "°F = (°C × 1.8) + 32",
      label: "Thermal"
    },
    {
      cat: "length",
      from: "kilometer",
      to: "mile",
      title: "Kilometer to Mile",
      symbol: "km ↔ mi",
      eq: "1 km = 0.62137 mi",
      label: "Length"
    },
    {
      cat: "volume",
      from: "liter",
      to: "gallon-us",
      title: "Liter to US Gallon",
      symbol: "L ↔ gal (US)",
      eq: "1 L = 0.26417 gal",
      label: "Volume"
    },
    {
      cat: "length",
      from: "inch",
      to: "centimeter",
      title: "Inch to Centimeter",
      symbol: "in ↔ cm",
      eq: "1 in = 2.54 cm",
      label: "Length"
    }
  ];

  const recentlyAdded = [
    {
      cat: "volume",
      from: "liter",
      to: "gallon-uk",
      title: "Liters to UK Gallons",
      symbol: "L ↔ gal (UK)",
      badge: "UK System"
    },
    {
      cat: "power",
      from: "kilowatt",
      to: "horsepower-mechanical",
      title: "Kilowatts to HP",
      symbol: "kW ↔ hp",
      badge: "Mechanical"
    },
    {
      cat: "angle",
      from: "degree",
      to: "radian",
      title: "Degrees to Radians",
      symbol: "° ↔ rad",
      badge: "Trigonometry"
    },
    {
      cat: "data-transfer",
      from: "MBps",
      to: "GBps",
      title: "Megabytes to Gigabytes",
      symbol: "MB/s ↔ GB/s",
      badge: "SaaS speeds"
    },
    {
      cat: "pressure",
      from: "kilopascal",
      to: "psi",
      title: "Kilopascals to PSI",
      symbol: "kPa ↔ psi",
      badge: "Pneumatics"
    },
    {
      cat: "weight-mass",
      from: "gram",
      to: "troy-ounce",
      title: "Grams to Troy Ounces",
      symbol: "g ↔ ozt",
      badge: "Precious Metal"
    }
  ];

  return (
    <div className="flex flex-col gap-12 w-full">
      
      {/* FEATURED CONVERTERS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6" id="featured-converters">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-black text-blue-600 dark:text-cyan-400 tracking-wider uppercase bg-blue-50 dark:bg-cyan-950/40 px-3 py-1 rounded-full">
              Global Favorites
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
              Featured Unit Converters
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Direct entry-point links to the most frequently searched measurement relationships on the internet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(item.cat, item.from, item.to)}
              className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-40"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                    {item.label}
                  </span>
                  <Star className="h-3.5 w-3.5 text-blue-500/50 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h4 className="font-display font-black text-slate-900 dark:text-white text-base leading-snug group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono mt-1">
                  {item.eq}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60 w-full text-xs font-semibold text-slate-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                <span className="font-mono text-[10px]">{item.symbol}</span>
                <span className="flex items-center gap-1 hover:underline">
                  Calculate
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENTLY ADDED CONVERTERS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6" id="recently-added">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-black text-cyan-600 dark:text-emerald-400 tracking-wider uppercase bg-cyan-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full">
              Database Updates
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
              Recently Added Calculators
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Newest verified mathematical coefficients integrated into our standard conversion index.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentlyAdded.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(item.cat, item.from, item.to)}
              className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-40"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">
                    {item.badge}
                  </span>
                  <span className="flex items-center gap-1 text-[9px] font-black text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                    <Sparkles className="h-3 w-3 animate-pulse" /> NEW
                  </span>
                </div>
                <h4 className="font-display font-black text-slate-900 dark:text-white text-base leading-snug group-hover:text-cyan-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-1">
                  Verified NIST standard factors
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/60 w-full text-xs font-semibold text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-emerald-400 transition-colors">
                <span className="font-mono text-[10px]">{item.symbol}</span>
                <span className="flex items-center gap-1 hover:underline">
                  Launch Tool
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
