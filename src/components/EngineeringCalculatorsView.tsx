import React, { useState, useEffect } from "react";
import { 
  Zap, RotateCw, HardHat, Atom, Sun, Thermometer, Droplet, 
  Waves, Cpu, Grid, Compass, Calculator, Info, Check, ArrowRight, BookOpen, ChevronRight, Search, X, ShieldCheck, MapPin, Navigation, Globe
} from "lucide-react";
import { engineeringCalculatorsData, EngineeringCalculatorDiscipline, EngineeringTool, getCategorySlugForDiscipline } from "../data/calculatorsData";
import { applyAutomatedSeo } from "../utils/classificationEngine";
import EngineeringCalculatorWidget from "./EngineeringCalculatorWidget";
import MathFormula from "./MathFormula";

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap, RotateCw, HardHat, Atom, Sun, Thermometer, Droplet, Waves, Cpu, Grid, Compass, MapPin, Navigation, Globe
};

interface EngineeringCalculatorsViewProps {
  selectedDisciplineId?: string;
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string, toolSlug?: string) => void;
}

export default function EngineeringCalculatorsView({
  selectedDisciplineId,
  onNavigate
}: EngineeringCalculatorsViewProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedDisciplineId || "all");
  const [activeTool, setActiveTool] = useState<EngineeringTool | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (activeTool) {
      applyAutomatedSeo({
        pageType: "engineering-calculator",
        isEngineering: true,
        title: `${activeTool.name} | Engineering Calculators`,
        description: activeTool.description,
        canonicalUrl: "https://unitsconvertors.com/calculators"
      });
    } else {
      applyAutomatedSeo({
        pageType: "engineering-hub",
        isEngineering: true,
        title: "Engineering Calculators Hub | UnitsConvertors.com",
        description: "Explore comprehensive engineering calculators across electrical, mechanical, civil, physics, and more on UnitsConvertors.com.",
        canonicalUrl: "https://unitsconvertors.com/calculators"
      });
    }
  }, [activeTool]);

  // Total tools count
  const totalToolsCount = engineeringCalculatorsData.reduce((acc, d) => acc + d.tools.length, 0);

  // Filter disciplines
  const filteredDisciplines = activeTab === "all" 
    ? engineeringCalculatorsData 
    : engineeringCalculatorsData.filter(d => d.id === activeTab);

  const handleSelectTool = (tool: EngineeringTool, disciplineId?: string) => {
    if (disciplineId) {
      const catSlug = getCategorySlugForDiscipline(disciplineId);
      onNavigate("calculators", undefined, undefined, catSlug, tool.slug || tool.id);
    } else {
      setActiveTool(tool);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in duration-200">
      
      {/* Breadcrumb Navigation */}
      <nav className="text-xs font-semibold text-slate-400 flex items-center gap-2" aria-label="Breadcrumb">
        <button 
          onClick={() => onNavigate("home")}
          className="hover:text-amber-500 cursor-pointer transition-colors"
        >
          Home
        </button>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <span className="text-slate-700 dark:text-slate-200 font-bold">
          Engineering Calculators Hub
        </span>
      </nav>

      {/* Header Banner */}
      <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-amber-500/10 via-slate-50 to-blue-500/10 dark:from-amber-950/20 dark:via-slate-950 dark:to-blue-950/20 p-6 sm:p-8 shadow-xl overflow-hidden">
        <div className="relative z-10 space-y-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Engineering Calculators & Multi-Variable Physics Models
          </h1>
          
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Multi-variable physical solvers across 11 engineering disciplines. Solve complex equations with SI unit standards, explicit boundary conditions, and zero calculation latency.
          </p>

          {/* Policy Notice Box */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-amber-200/80 dark:border-amber-900/50 backdrop-blur-sm text-xs text-slate-700 dark:text-slate-300 shadow-sm">
            <Info className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100 block mb-0.5">
                Product Architecture Note
              </span>
              Unlike standard unit conversion factors, engineering calculators solve governing multi-variable physical equations (e.g., $F = m \cdot a$, $V = I \cdot R$, $PV = nRT$). Every tool explicitly declares its formula, input variables, and assumptions.
            </div>
          </div>
        </div>
      </div>

      {/* Global Engineering Search */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Grid className="h-5 w-5 text-amber-500" />
            Calculator Categories
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-900">
              {engineeringCalculatorsData.length} Categories
            </span>
          </h2>

          {/* Search All Tools */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search all ${totalToolsCount} calculators...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 cursor-pointer"
                title="Clear search query"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Modal/Widget Tool Viewer if launched */}
      {activeTool && (
        <div className="relative">
          <button
            onClick={() => setActiveTool(null)}
            className="mb-3 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 cursor-pointer"
          >
            ← Close Preview Tool
          </button>
          <EngineeringCalculatorWidget
            tool={activeTool}
            showOpenFullButton={true}
            onOpenFull={() => {
              const matchedDisc = engineeringCalculatorsData.find(d => d.tools.some(t => t.id === activeTool.id));
              if (matchedDisc) {
                onNavigate(matchedDisc.id, activeTool.id);
              }
            }}
          />
        </div>
      )}

      {/* Grid of Engineering Disciplines & Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDisciplines.map(discipline => {
          const Icon = iconMap[discipline.iconName] || Calculator;

          // Filter check if searchQuery is present
          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            const matchesCategory = discipline.name.toLowerCase().includes(q) || discipline.description.toLowerCase().includes(q);
            const matchesTools = discipline.tools.some(t => 
              t.name.toLowerCase().includes(q) ||
              t.description.toLowerCase().includes(q) ||
              t.formula.toLowerCase().includes(q)
            );
            if (!matchesCategory && !matchesTools) {
              return null;
            }
          }

          const catSlug = getCategorySlugForDiscipline(discipline.id);

          return (
            <a
              key={discipline.id}
              href={`/calculators/${catSlug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("calculators", undefined, undefined, catSlug);
              }}
              className="group relative flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 dark:hover:shadow-amber-500/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 group-hover:scale-105 transition-transform border border-amber-200/50 dark:border-amber-900/40">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                    {discipline.tools.length} calculators
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mb-2">
                  {discipline.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {discipline.description}
                </p>
              </div>

              <div className="flex items-center text-xs font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                <span>Explore Calculators</span>
                <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          );
        })}
      </div>

      {/* Popular Engineering Calculators Section */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-500" />
            Popular Engineering Solvers
          </h2>
          <span className="text-xs text-slate-500 font-medium">Most Frequently Used Tools</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { name: "Ohm's Law Calculator", catSlug: "electrical-calculators", slug: "ohms-law", formula: "V = I × R", discName: "Electrical" },
            { name: "Beam Deflection", catSlug: "civil-calculators", slug: "beam-deflection-calc", formula: "δ = (F·L³) / (48·E·I)", discName: "Civil" },
            { name: "Reynolds Number", catSlug: "fluid-mechanics-calculators", slug: "reynolds-number-calc", formula: "Re = (ρ·v·D) / μ", discName: "Fluid Mechanics" },
            { name: "Voltage Divider", catSlug: "electrical-calculators", slug: "voltage-divider-calc", formula: "V_out = V_in × (R2/(R1+R2))", discName: "Electrical" },
            { name: "Lens Maker's Equation", catSlug: "optics-light-calculators", slug: "lens-makers-equation-calc", formula: "1/f = (n-1)(1/R1 - 1/R2)", discName: "Optics" },
            { name: "Quadratic Formula", catSlug: "mathematics-calculators", slug: "quadratic-formula-calc", formula: "x = (-b ± √(b²-4ac))/2a", discName: "Math" },
            { name: "Ideal Gas Law", catSlug: "thermodynamics-calculators", slug: "ideal-gas-law-calc", formula: "P·V = n·R·T", discName: "Thermodynamics" },
            { name: "Heat Transfer Rate", catSlug: "thermodynamics-calculators", slug: "heat-transfer-rate-calc", formula: "Q/t = k·A·ΔT / d", discName: "Thermodynamics" }
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate("calculators", undefined, undefined, item.catSlug, item.slug)}
              className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-mono">
                    {item.discName}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                  {item.name}
                </h3>
              </div>
              <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-2 rounded-lg border border-slate-100 dark:border-slate-800/80">
                <MathFormula formula={item.formula} asInline={true} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions Section */}
      <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-amber-500" />
          Engineering Calculators FAQ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              What is the difference between unit converters and engineering calculators?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Unit converters transform equivalent physical dimensions (such as converting meters to feet). Engineering calculators solve governing multi-variable equations (such as Ohm's Law V = I × R or Beam Deflection δ = (F·L³) / (48·E·I)) combining multiple physical inputs to calculate unknown variables.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              Are these calculators free for commercial and academic engineering use?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes. All 216+ calculators on UnitsConvertors.com are completely free and accessible online without registration, subscriptions, or hidden limits for students, research scientists, and licensed professional engineers.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              What standard measurement systems do the calculators support?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Every calculator accepts standard International System of Units (SI metric) inputs as well as common Imperial/US Customary units where applicable. Inputs automatically validate boundary conditions and physically valid parameter ranges.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">
              How are formulas and assumptions verified?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Each calculator card explicitly lists its underlying governing equation, assumed boundary conditions (e.g. isotropic medium, uniform load distribution, ideal gas state), and SI unit outputs for full transparent mathematical auditing.
            </p>
          </div>
        </div>
      </div>

      {/* Footnote Educational Info */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 space-y-4 text-xs text-slate-600 dark:text-slate-400 shadow-sm">
        <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-amber-500" />
          Engineering Calculation Standards & Dimensional Consistency
        </h3>
        <p className="leading-relaxed">
          In professional engineering analysis, unit consistency across multi-variable formulas is essential. While standard unit converters convert equivalent dimensional choices (e.g., converting meters to feet), engineering calculators solve physical equations combining mass, force, velocity, electric potential, or temperature. All engineering calculators on UnitsConvertors.com enforce dimensional homogeneity and display explicit engineering assumptions for scientific accuracy.
        </p>
      </div>

    </div>
  );
}
