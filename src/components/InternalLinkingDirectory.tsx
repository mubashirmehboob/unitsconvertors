import React, { useState } from "react";
import { 
  ChevronRight, ArrowRight, TrendingUp, Compass, Clock, Sparkles, 
  Star, Award, Activity, Flame, Link2, Layers, Search, Eye, Ruler,
  Heart
} from "lucide-react";
import { Category } from "../types";
import { categoryIconMap, getCategoryStyle } from "./Header";

interface InternalLinkingDirectoryProps {
  categories: Category[];
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
  favorites?: string[];
  onToggleFavorite?: (id: string) => void;
}

export default function InternalLinkingDirectory({ 
  categories, 
  onNavigate,
  favorites = [],
  onToggleFavorite
}: InternalLinkingDirectoryProps) {
  const [activeTab, setActiveTab] = useState<"popular" | "categories" | "related" | "recent" | "searched" | "trending" | "saved">("popular");

  // Popular Converters (High-traffic relationships across major measurement categories)
  const popularConverters = [
    { cat: "length", from: "meter", to: "foot", title: "Meter to Feet", desc: "Scientific to Imperial stature standard calculation.", symbol: "m ↔ ft" },
    { cat: "weight-mass", from: "kilogram", to: "pound", title: "Kilogram to Pound", desc: "Global weight scale reference converter.", symbol: "kg ↔ lb" },
    { cat: "temperature", from: "celsius", to: "fahrenheit", title: "Celsius to Fahrenheit", desc: "Direct ambient thermal scale translation.", symbol: "°C ↔ °F" },
    { cat: "length", from: "kilometer", to: "mile", title: "Kilometer to Mile", desc: "Geographic distance calculations.", symbol: "km ↔ mi" },
    { cat: "volume", from: "liter", to: "gallon-us", title: "Liter to US Gallon", desc: "Volumetric liquid fluid volume engine.", symbol: "L ↔ gal" },
    { cat: "length", from: "inch", to: "centimeter", title: "Inch to Centimeter", desc: "Precise industrial blueprint measurement.", symbol: "in ↔ cm" },
    { cat: "area", from: "square-foot", to: "square-meter", title: "Square Feet to Sq Meters", desc: "Real estate and plot layout translator.", symbol: "ft² ↔ m²" },
    { cat: "weight-mass", from: "pound", to: "kilogram", title: "Pound to Kilogram", desc: "Mass value conversion for physical goods.", symbol: "lb ↔ kg" },
  ];

  // Related Converters (Symmetric or counterpart converters that complete the crawler circle)
  const relatedConverters = [
    { cat: "length", from: "foot", to: "meter", title: "Feet to Meters", desc: "Imperial heights to metric measurements.", symbol: "ft ↔ m" },
    { cat: "weight-mass", from: "pound", to: "ounce", title: "Pounds to Ounces", desc: "Sae divisions of weight calculations.", symbol: "lb ↔ oz" },
    { cat: "temperature", from: "fahrenheit", to: "celsius", title: "Fahrenheit to Celsius", desc: "Convert meteorological states safely.", symbol: "°F ↔ °C" },
    { cat: "length", from: "mile", to: "kilometer", title: "Miles to Kilometers", desc: "Aviation and driving path metrication.", symbol: "mi ↔ km" },
    { cat: "volume", from: "gallon-us", to: "liter", title: "US Gallons to Liters", desc: "Commercial fluid capacities to metric.", symbol: "gal ↔ L" },
    { cat: "length", from: "centimeter", to: "inch", title: "Centimeters to Inches", desc: "Precision mechanical conversion scale.", symbol: "cm ↔ in" },
    { cat: "area", from: "square-meter", to: "square-foot", title: "Sq Meters to Square Feet", desc: "Standard plot dimensions conversion.", symbol: "m² ↔ ft²" },
    { cat: "weight-mass", from: "ounce", to: "gram", title: "Ounces to Grams", desc: "Dietary measurements and small values.", symbol: "oz ↔ g" },
  ];

  // Recently Updated Converters (Verified calculations with recently synced standard indexes)
  const recentlyUpdatedConverters = [
    { cat: "volume", from: "liter", to: "gallon-uk", title: "Liters to UK Gallons", desc: "Imperial UK liquid measure standard.", symbol: "L ↔ gal (UK)" },
    { cat: "angle", from: "degree", to: "radian", title: "Degrees to Radians", desc: "Trigonometrical angular unit standard.", symbol: "° ↔ rad" },
    { cat: "data-transfer", from: "MBps", to: "GBps", title: "Megabytes to Gigabytes", desc: "SaaS broadband speeds and throughput.", symbol: "MB/s ↔ GB/s" },
    { cat: "pressure", from: "kilopascal", to: "psi", title: "Kilopascals to PSI", desc: "Pneumatic inflation and pressure rating.", symbol: "kPa ↔ psi" },
    { cat: "weight-mass", from: "gram", to: "troy-ounce", title: "Grams to Troy Ounces", desc: "Precious metals and gold mass conversion.", symbol: "g ↔ ozt" },
    { cat: "power", from: "kilowatt", to: "horsepower-mechanical", title: "Kilowatts to Horsepower", desc: "Industrial motor and mechanical output.", symbol: "kW ↔ hp" },
  ];

  // Most Searched Converters (Highly searched search intent query targets)
  const mostSearchedConverters = [
    { cat: "weight-mass", from: "gram", to: "ounce", title: "Grams to Ounces", desc: "Culinary weight measurement mappings.", symbol: "g ↔ oz" },
    { cat: "volume", from: "cubic-foot", to: "liter", title: "Cubic Feet to Liters", desc: "Gas capacity and cargo container volumes.", symbol: "ft³ ↔ L" },
    { cat: "weight-mass", from: "metric-ton", to: "pound", title: "Metric Tons to Pounds", desc: "Shipping freight mass conversions.", symbol: "t ↔ lb" },
    { cat: "length", from: "yard", to: "meter", title: "Yards to Meters", desc: "Athletics track and textiles measurements.", symbol: "yd ↔ m" },
    { cat: "area", from: "hectare", to: "acre", title: "Hectares to Acres", desc: "Agricultural field dimensions standards.", symbol: "ha ↔ ac" },
    { cat: "length", from: "inch", to: "millimeter", title: "Inches to Millimeters", desc: "Engineering draft sizing conversion.", symbol: "in ↔ mm" },
  ];

  // Trending Converters (Rising search trends and traffic spike targets)
  const trendingConverters = [
    { cat: "temperature", from: "celsius", to: "kelvin", title: "Celsius to Kelvin", desc: "Scientific absolute zero temperature math.", symbol: "°C ↔ K" },
    { cat: "volume", from: "cup-us", to: "milliliter", title: "Cups to Milliliters", desc: "Kitchen recipe fluid translations.", symbol: "cp ↔ mL" },
    { cat: "area", from: "square-mile", to: "acre", title: "Square Miles to Acres", desc: "Regional land scale map index conversions.", symbol: "mi² ↔ ac" },
    { cat: "speed", from: "kmh", to: "mph", title: "Kmh to Mph", desc: "Speedometer velocity measurements.", symbol: "km/h ↔ mph" },
    { cat: "pressure", from: "pascal", to: "bar", title: "Pascal to Bar", desc: "Meteorological and barometric conversion.", symbol: "Pa ↔ bar" },
    { cat: "energy", from: "joule", to: "calorie", title: "Joules to Calories", desc: "Nutritional and kinetic thermodynamics.", symbol: "J ↔ cal" },
  ];

  const tabs = [
    { id: "popular", label: "Popular Converters", icon: Star, color: "text-amber-500" },
    { id: "categories", label: "Category Directory", icon: Compass, color: "text-indigo-500" },
    { id: "related", label: "Related Conversions", icon: Link2, color: "text-sky-500" },
    { id: "recent", label: "Recently Updated", icon: Clock, color: "text-emerald-500" },
    { id: "searched", label: "Most Searched", icon: Search, color: "text-blue-500" },
    { id: "trending", label: "Trending Now", icon: Flame, color: "text-orange-500" },
    { id: "saved", label: "Saved / Bookmarks", icon: Heart, color: "text-rose-500" },
  ] as const;

  const handleLinkClick = (e: React.MouseEvent, cat: string, from?: string, to?: string) => {
    e.preventDefault();
    onNavigate(cat, from, to);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-6" id="seo-linking-directory">
      <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/10 backdrop-blur-sm flex flex-col gap-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-black text-blue-600 dark:text-cyan-400 tracking-wider uppercase bg-blue-50 dark:bg-cyan-950/40 px-3 py-1 rounded-full w-fit">
              Crawlable Index Matrix
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
              HTML Directory & SEO Link Index
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Browse our dynamic, interconnected structure of verified converter nodes. Click any link for instant local loading.
            </p>
          </div>
          <button
            onClick={() => onNavigate("home", undefined, undefined, "sitemap")}
            className="h-10 px-5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold text-xs hover:scale-105 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            Open HTML Sitemap
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Tab Selection Bar - highly styled and responsive */}
        <div className="flex flex-wrap gap-1.5 border-b border-slate-200/60 dark:border-slate-800 pb-3">
          {tabs.map(tab => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive 
                    ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-cyan-400 shadow-sm scale-102" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900/60"
                }`}
              >
                <TabIcon className={`h-3.5 w-3.5 ${isActive ? "animate-pulse" : tab.color}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Contents: Rendered with crawlable <a> tags */}
        <div className="min-h-[220px]">
          {/* 1. POPULAR CONVERTERS */}
          {activeTab === "popular" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-200">
              {popularConverters.map((item, idx) => {
                const isFav = favorites.includes(`${item.cat}/${item.from}-to-${item.to}`);
                return (
                  <a
                    key={idx}
                    href={`#/${item.cat}/${item.from}-to-${item.to}`}
                    onClick={(e) => handleLinkClick(e, item.cat, item.from, item.to)}
                    className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-black tracking-wide text-blue-600 dark:text-cyan-400 uppercase bg-blue-50 dark:bg-cyan-950/30 px-2 py-0.5 rounded">
                          {item.cat}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                          {onToggleFavorite && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleFavorite(`${item.cat}/${item.from}-to-${item.to}`);
                              }}
                              className="h-6 w-6 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900/60 flex items-center justify-center transition-all active:scale-125"
                              title={isFav ? "Remove from bookmarks" : "Save converter"}
                            >
                              <Heart className={`h-3 w-3 ${isFav ? "fill-rose-500 text-rose-500" : "text-slate-400 hover:text-rose-500"}`} />
                            </button>
                          )}
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-900 text-[10px] font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                      <span className="font-mono">{item.symbol}</span>
                      <span className="flex items-center gap-0.5">
                        Calculate <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* 2. CATEGORY DIRECTORY */}
          {activeTab === "categories" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 animate-in fade-in duration-200">
              {categories.map(cat => {
                const CatIcon = categoryIconMap[cat.id] || Ruler;
                const style = getCategoryStyle(cat.id);
                return (
                  <a
                    key={cat.id}
                    href={`#/${cat.id}`}
                    onClick={(e) => handleLinkClick(e, cat.id)}
                    className="p-3.5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 hover:border-blue-500 hover:shadow-sm hover:-translate-y-0.5 transition-all flex flex-col items-center justify-center text-center gap-2 group"
                  >
                    <div className={`h-9 w-9 rounded-xl ${style.bg} ${style.text} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <CatIcon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {cat.name}
                      </span>
                      <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500">
                        {cat.units.length} Units
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* 3. RELATED CONVERSIONS */}
          {activeTab === "related" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-200">
              {relatedConverters.map((item, idx) => {
                const isFav = favorites.includes(`${item.cat}/${item.from}-to-${item.to}`);
                return (
                  <a
                    key={idx}
                    href={`#/${item.cat}/${item.from}-to-${item.to}`}
                    onClick={(e) => handleLinkClick(e, item.cat, item.from, item.to)}
                    className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-sky-500 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-black tracking-wide text-sky-600 dark:text-sky-400 uppercase bg-sky-50 dark:bg-sky-950/30 px-2 py-0.5 rounded">
                          {item.cat}
                        </span>
                        <div className="flex items-center gap-1">
                          <Link2 className="h-3 w-3 text-sky-400" />
                          {onToggleFavorite && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleFavorite(`${item.cat}/${item.from}-to-${item.to}`);
                              }}
                              className="h-6 w-6 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900/60 flex items-center justify-center transition-all active:scale-125"
                              title={isFav ? "Remove from bookmarks" : "Save converter"}
                            >
                              <Heart className={`h-3 w-3 ${isFav ? "fill-rose-500 text-rose-500" : "text-slate-400 hover:text-rose-500"}`} />
                            </button>
                          )}
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-900 text-[10px] font-bold text-slate-400 group-hover:text-sky-500 transition-colors">
                      <span className="font-mono">{item.symbol}</span>
                      <span className="flex items-center gap-0.5">
                        Convert <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* 4. RECENTLY UPDATED */}
          {activeTab === "recent" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
              {recentlyUpdatedConverters.map((item, idx) => {
                const isFav = favorites.includes(`${item.cat}/${item.from}-to-${item.to}`);
                return (
                  <a
                    key={idx}
                    href={`#/${item.cat}/${item.from}-to-${item.to}`}
                    onClick={(e) => handleLinkClick(e, item.cat, item.from, item.to)}
                    className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-black tracking-wide text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded">
                          NIST Factor Verified
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="flex items-center gap-0.5 text-[8px] font-black text-emerald-500 uppercase">
                            <Sparkles className="h-2.5 w-2.5 animate-bounce" /> Sync
                          </span>
                          {onToggleFavorite && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleFavorite(`${item.cat}/${item.from}-to-${item.to}`);
                              }}
                              className="h-6 w-6 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900/60 flex items-center justify-center transition-all active:scale-125"
                              title={isFav ? "Remove from bookmarks" : "Save converter"}
                            >
                              <Heart className={`h-3 w-3 ${isFav ? "fill-rose-500 text-rose-500" : "text-slate-400 hover:text-rose-500"}`} />
                            </button>
                          )}
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-900 text-[10px] font-bold text-slate-400 group-hover:text-emerald-500 transition-colors">
                      <span className="font-mono">{item.symbol}</span>
                      <span className="flex items-center gap-0.5">
                        Open Calculator <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* 5. MOST SEARCHED */}
          {activeTab === "searched" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
              {mostSearchedConverters.map((item, idx) => {
                const isFav = favorites.includes(`${item.cat}/${item.from}-to-${item.to}`);
                return (
                  <a
                    key={idx}
                    href={`#/${item.cat}/${item.from}-to-${item.to}`}
                    onClick={(e) => handleLinkClick(e, item.cat, item.from, item.to)}
                    className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-black tracking-wide text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded">
                          High Intent Search
                        </span>
                        <div className="flex items-center gap-1">
                          <Search className="h-3 w-3 text-blue-500" />
                          {onToggleFavorite && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleFavorite(`${item.cat}/${item.from}-to-${item.to}`);
                              }}
                              className="h-6 w-6 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900/60 flex items-center justify-center transition-all active:scale-125"
                              title={isFav ? "Remove from bookmarks" : "Save converter"}
                            >
                              <Heart className={`h-3 w-3 ${isFav ? "fill-rose-500 text-rose-500" : "text-slate-400 hover:text-rose-500"}`} />
                            </button>
                          )}
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-900 text-[10px] font-bold text-slate-400 group-hover:text-blue-500 transition-colors">
                      <span className="font-mono">{item.symbol}</span>
                      <span className="flex items-center gap-0.5">
                        Launch <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* 6. TRENDING NOW */}
          {activeTab === "trending" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in duration-200">
              {trendingConverters.map((item, idx) => {
                const isFav = favorites.includes(`${item.cat}/${item.from}-to-${item.to}`);
                return (
                  <a
                    key={idx}
                    href={`#/${item.cat}/${item.from}-to-${item.to}`}
                    onClick={(e) => handleLinkClick(e, item.cat, item.from, item.to)}
                    className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-orange-500 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] font-black tracking-wide text-orange-600 dark:text-orange-400 uppercase bg-orange-50 dark:bg-orange-950/30 px-2 py-0.5 rounded">
                          Trending +280%
                        </span>
                        <div className="flex items-center gap-1">
                          <Flame className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
                          {onToggleFavorite && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                onToggleFavorite(`${item.cat}/${item.from}-to-${item.to}`);
                              }}
                              className="h-6 w-6 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900/60 flex items-center justify-center transition-all active:scale-125"
                              title={isFav ? "Remove from bookmarks" : "Save converter"}
                            >
                              <Heart className={`h-3 w-3 ${isFav ? "fill-rose-500 text-rose-500" : "text-slate-400 hover:text-rose-500"}`} />
                            </button>
                          )}
                        </div>
                      </div>
                      <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-900 text-[10px] font-bold text-slate-400 group-hover:text-orange-500 transition-colors">
                      <span className="font-mono">{item.symbol}</span>
                      <span className="flex items-center gap-0.5">
                        Go to Tool <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}

          {/* 7. SAVED CONVERTERS */}
          {activeTab === "saved" && (
            <div className="animate-in fade-in duration-200">
              {(() => {
                const parsedFavorites = (favorites || []).map(favId => {
                  const [catId, slug] = favId.split("/");
                  if (!slug) return null;
                  const [fromId, toId] = slug.split("-to-");
                  const cat = categories.find(c => c.id === catId);
                  if (!cat) return null;
                  const fromU = cat.units.find(u => u.id === fromId);
                  const toU = cat.units.find(u => u.id === toId);
                  if (!fromU || !toU) return null;
                  return {
                    cat: catId,
                    from: fromId,
                    to: toId,
                    title: `${fromU.name} to ${toU.name}`,
                    desc: `Bookmarked conversion pair in ${cat.name}.`,
                    symbol: `${fromU.symbol || ""} ↔ ${toU.symbol || ""}`
                  };
                }).filter((x): x is NonNullable<typeof x> => x !== null);

                if (parsedFavorites.length === 0) {
                  return (
                    <div className="flex flex-col items-center justify-center py-12 px-4 text-center rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/10">
                      <Heart className="h-10 w-10 text-rose-300 dark:text-rose-900/40 mb-3" />
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No saved converters yet</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 max-w-sm">
                        Click the heart icon "Save Converter" on any active converter tool or link card to populate your favorites list.
                      </p>
                    </div>
                  );
                }

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {parsedFavorites.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#/${item.cat}/${item.from}-to-${item.to}`}
                        onClick={(e) => handleLinkClick(e, item.cat, item.from, item.to)}
                        className="group p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-rose-500 hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[9px] font-black tracking-wide text-rose-600 dark:text-rose-400 uppercase bg-rose-50 dark:bg-rose-950/30 px-2 py-0.5 rounded">
                              {item.cat}
                            </span>
                            {onToggleFavorite && (
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  onToggleFavorite(`${item.cat}/${item.from}-to-${item.to}`);
                                }}
                                className="h-6 w-6 rounded-md hover:bg-slate-100 dark:hover:bg-slate-900/60 flex items-center justify-center transition-all active:scale-125"
                                title="Remove from bookmarks"
                              >
                                <Heart className="h-3 w-3 fill-rose-500 text-rose-500" />
                              </button>
                            )}
                          </div>
                          <h4 className="font-display font-bold text-slate-900 dark:text-white text-sm group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 leading-normal">
                            {item.desc}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 dark:border-slate-900 text-[10px] font-bold text-slate-400 group-hover:text-rose-500 transition-colors">
                          <span className="font-mono">{item.symbol}</span>
                          <span className="flex items-center gap-0.5">
                            Launch Tool <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                );
              })()}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
