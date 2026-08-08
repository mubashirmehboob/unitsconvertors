import React, { useState } from "react";
import { 
  Ruler, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Zap, 
  Globe2, 
  BookOpen, 
  Layers, 
  Compass, 
  ShieldCheck, 
  BarChart3,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { categoriesData } from "../data/convertersData";
import { categoryIconMap, getCategoryStyle } from "./Header";

interface UnitConvertersHubProps {
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "length": "Convert meters, kilometers, feet, inches, miles, and other length units.",
  "weight-mass": "Convert grams, kilograms, pounds, ounces, metric tons, and other mass units.",
  "area": "Convert square meters, square feet, acres, hectares, and other area units.",
  "volume": "Convert liters, milliliters, gallons, cubic meters, and other volume units.",
  "temperature": "Convert Celsius, Fahrenheit, Kelvin, and other temperature scales.",
  "time": "Convert seconds, minutes, hours, days, years, and other time units.",
  "speed": "Convert meters per second, kilometers per hour, miles per hour, and knots.",
  "pressure": "Convert pascals, bar, psi, atmospheres, torr, and other pressure units.",
  "energy": "Convert joules, kilojoules, calories, kilowatt-hours, and BTU.",
  "power": "Convert watts, kilowatts, megawatts, horsepower, and other power units.",
  "fuel-economy": "Convert miles per gallon, liters per 100km, and kilometers per liter.",
  "cooking": "Convert cups, tablespoons, teaspoons, fluid ounces, and milliliters.",
  "data-storage": "Convert bytes, kilobytes, megabytes, gigabytes, and terabytes.",
  "density": "Convert density units including kg/m³, g/cm³, and lb/ft³.",
  "voltage": "Convert volts, millivolts, kilovolts, and megavolts.",
  "amount-of-substance": "Convert moles, millimoles, kilomoles, and particle counts.",
  "light": "Convert lux, foot-candles, lumens, and candela.",
  "sound": "Convert decibels, nepers, and sound pressure levels.",
  "force": "Convert newtons, kilonewtons, pound-force, and dyne.",
  "flow": "Convert liters per minute, cubic meters per second, and gallons per minute.",
  "angle": "Convert degrees, radians, gradians, and arcseconds.",
  "electricity": "Convert amperes, milliamperes, kiloamperes, and microamperes.",
  "construction": "Convert board feet, cords, squares, and structural material units.",
  "data-transfer": "Convert megabits per second, gigabits per second, and megabytes per second.",
  "solid-angle": "Convert steradians, spat, and square degrees.",
  "torque": "Convert newton-meters, pound-feet, and pound-inches.",
  "acceleration": "Convert meters per second squared, g-force, and feet per second squared.",
  "electric-resistance": "Convert ohms, kilohms, megohms, and milliohms.",
  "capacitance": "Convert farads, microfarads, nanofarads, and picofarads.",
  "inductance": "Convert henries, millihenries, and microhenries.",
  "electric-charge": "Convert coulombs, ampere-hours, and elementary charges.",
  "radioactivity": "Convert becquerels, curies, rutherfords, and rontgens."
};

const POPULAR_CONVERTERS = [
  { cat: "length", from: "meter", to: "millimeter", title: "Meter to Millimeter", desc: "Convert meters to millimeters with exact metric scale factor (1 m = 1,000 mm)." },
  { cat: "length", from: "meter", to: "foot", title: "Meter to Feet", desc: "Convert metric length to international feet standard for height and construction." },
  { cat: "length", from: "kilometer", to: "mile", title: "Kilometer to Mile", desc: "Convert geographic distance between metric kilometers and imperial miles." },
  { cat: "length", from: "inch", to: "centimeter", title: "Inch to Centimeter", desc: "Convert industrial blueprint measurements between inches and centimeters." },
  { cat: "weight-mass", from: "kilogram", to: "pound", title: "Kilogram to Pound", desc: "Convert international mass scales between kilograms and avoirdupois pounds." },
  { cat: "weight-mass", from: "gram", to: "ounce", title: "Gram to Ounce", desc: "Convert small culinary or lab mass values between grams and ounces." },
  { cat: "temperature", from: "celsius", to: "fahrenheit", title: "Celsius to Fahrenheit", desc: "Convert temperature values using exact linear thermal scale formulas." },
  { cat: "volume", from: "liter", to: "gallon-us", title: "Liter to US Gallon", desc: "Convert fluid volume capacities between liters and US liquid gallons." },
  { cat: "pressure", from: "pascal", to: "mmhg", title: "Pascal to Millimeter of Mercury", desc: "Convert hydrostatic and barometric pressure between pascals and mmHg." },
  { cat: "power", from: "kilowatt", to: "gigawatt", title: "Kilowatt to Gigawatt", desc: "Convert electrical power grid capacities between kilowatts and gigawatts." },
  { cat: "area", from: "square-foot", to: "square-meter", title: "Square Feet to Square Meters", desc: "Convert real estate floor areas between square feet and square meters." },
  { cat: "data-storage", from: "megabyte", to: "gigabyte", title: "Megabyte to Gigabyte", desc: "Convert digital file and storage capacities using standard decimal prefixes." },
];

export default function UnitConvertersHub({ onNavigate }: UnitConvertersHubProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categoriesData.filter((cat) => {
    if (!searchTerm.trim()) return true;
    const query = searchTerm.toLowerCase();
    const desc = CATEGORY_DESCRIPTIONS[cat.id] || "";
    return (
      cat.name.toLowerCase().includes(query) ||
      cat.id.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query) ||
      cat.units.some((u) => u.name.toLowerCase().includes(query) || u.symbol.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pb-16">
      {/* Top Banner Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-teal-500 to-sky-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-slate-900 dark:text-slate-100 font-bold">Unit Converters</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-sm mb-10">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Ruler className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              <span>32 Unit Conversion Categories</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Unit Converters
            </h1>

            <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Explore 32 measurement categories covering SI, metric, customary, scientific, engineering, and commonly used units. Choose a category below to explore available units and direct conversion tools.
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              UnitsConvertors.com provides direct unit-to-unit conversion tools covering SI, metric, customary, scientific, engineering, and commonly used measurement units. Each converter delivers instant calculation results along with standardized formulas, calculation steps, and physical quantity definitions.
            </p>

            {/* Quick Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search categories or units (e.g., length, pascal, kilogram, lux)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Directory Section */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                <Layers className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Category Directory
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Explore all 32 measurement categories and their available units.
              </p>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 self-start sm:self-auto">
              {filteredCategories.length} Categories Shown
            </span>
          </div>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <Search className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">No categories found</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try searching for another unit or physical quantity term.</p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredCategories.map((cat) => {
                const Icon = categoryIconMap[cat.id] || Ruler;
                const style = getCategoryStyle(cat.id);
                const desc = CATEGORY_DESCRIPTIONS[cat.id] || `Convert ${cat.name.toLowerCase()} units.`;

                return (
                  <a
                    key={cat.id}
                    href={`/${cat.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(cat.id);
                    }}
                    className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3.5">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${style.bg} ${style.text} group-hover:scale-105 transition-transform`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                          {cat.units.length} units
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {cat.name}
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {desc}
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <span>Explore Converters</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Popular Unit Conversions Section */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5">
                <Sparkles className="h-5 w-5 text-amber-500" />
                Popular Unit Conversions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Direct links to commonly used measurement conversion pairs across daily, engineering, and scientific applications.
              </p>
            </div>
            <a
              href="/converters"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("converters");
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 self-start sm:self-auto"
            >
              <span>Explore All Converters</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {POPULAR_CONVERTERS.map((p, idx) => {
              const cat = categoriesData.find((c) => c.id === p.cat);
              const style = getCategoryStyle(p.cat);
              const Icon = categoryIconMap[p.cat] || Ruler;

              return (
                <a
                  key={idx}
                  href={`/${p.cat}/${p.from}-to-${p.to}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(p.cat, p.from, p.to);
                  }}
                  className="group flex flex-col justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${style.bg} ${style.text}`}>
                        {cat?.name || p.cat}
                      </span>
                      <Icon className="h-4 w-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
                      {p.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="flex items-center text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 pt-3 mt-2 border-t border-slate-100 dark:border-slate-800">
                    <span>Convert Now</span>
                    <ChevronRight className="h-3.5 w-3.5 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* SEO Educational Content Section */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Online Unit Conversion Tools
            </h2>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
            <p>
              Unit conversion expresses a measured physical quantity in an equivalent unit of measurement without altering the underlying physical value. Throughout history, diverse human civilizations developed independent measurement systems based on localized trade, agricultural land surveying, and regional custom. Today, modern science and global industry rely primarily on the International System of Units (SI), commonly known as the metric system, alongside customary systems such as the United States Customary System (USCS) and Imperial Units.
            </p>

            <p>
              Navigating between different measurement frameworks requires mathematically exact conversion factors derived from international physical standards. For linear quantities such as length, mass, area, volume, and time, conversions rely on direct proportional ratios defined by organizations like the International Bureau of Weights and Measures (BIPM). Non-linear scale conversions—such as temperature scale translations between Celsius, Fahrenheit, and Kelvin—incorporate offset values alongside scaling multipliers to account for differing zero-point reference states.
            </p>

            <p>
              Whether you are an engineering professional verifying structural dimensions, a healthcare researcher reviewing laboratory mass concentrations, a student solving physics equations, or a home baker adjusting international recipes, direct online conversion tools remove manual calculation errors and streamline productivity. Accurate unit translation ensures safety in industrial manufacturing, precision in construction blueprints, and seamless global trade compliance.
            </p>

            <p>
              Every converter page on UnitsConvertors.com runs instantaneous, client-side calculations using standardized mathematical algorithms. In addition to immediate numerical outputs, each tool provides explicit step-by-step calculation workflows, governing mathematical formulas, comprehensive reference conversion tables, and clear explanations of physical unit definitions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
