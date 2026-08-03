import React, { useState } from "react";
import { 
  Zap, RotateCw, HardHat, Atom, Sun, Thermometer, Droplet, 
  Waves, Cpu, Grid, Compass, Calculator, Info, Check, ArrowRight, Sparkles, BookOpen, ChevronRight, Search, X, ShieldCheck
} from "lucide-react";
import { engineeringCalculatorsData, EngineeringCalculatorDiscipline, EngineeringTool } from "../data/calculatorsData";
import EngineeringCalculatorWidget from "./EngineeringCalculatorWidget";

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap, RotateCw, HardHat, Atom, Sun, Thermometer, Droplet, Waves, Cpu, Grid, Compass
};

interface EngineeringCalculatorsViewProps {
  selectedDisciplineId?: string;
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
}

export default function EngineeringCalculatorsView({
  selectedDisciplineId,
  onNavigate
}: EngineeringCalculatorsViewProps) {
  const [activeTab, setActiveTab] = useState<string>(selectedDisciplineId || "all");
  const [activeTool, setActiveTool] = useState<EngineeringTool | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Total tools count
  const totalToolsCount = engineeringCalculatorsData.reduce((acc, d) => acc + d.tools.length, 0);

  // Filter disciplines
  const filteredDisciplines = activeTab === "all" 
    ? engineeringCalculatorsData 
    : engineeringCalculatorsData.filter(d => d.id === activeTab);

  const handleSelectTool = (tool: EngineeringTool, disciplineId?: string) => {
    if (disciplineId) {
      onNavigate(disciplineId, tool.id);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold">
            <Calculator className="h-3.5 w-3.5" />
            Engineering Calculators Hub ({totalToolsCount} Tools)
          </div>
          
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

      {/* Global Engineering Search & Discipline Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Grid className="h-5 w-5 text-amber-500" />
            Engineering Disciplines (11 Categories)
          </h2>

          {/* Search All Tools */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search all 172+ engineering calculators..."
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

        {/* Discipline Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
            }`}
          >
            All Disciplines ({totalToolsCount})
          </button>
          {engineeringCalculatorsData.map(disc => (
            <button
              key={disc.id}
              onClick={() => setActiveTab(disc.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === disc.id
                  ? "bg-amber-500 text-white shadow-lg shadow-amber-500/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              <span>{disc.name}</span>
              <span className="text-[10px] opacity-75 font-mono">({disc.tools.length})</span>
            </button>
          ))}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDisciplines.map(discipline => {
          const Icon = iconMap[discipline.iconName] || Calculator;

          // Filter tools inside discipline if searchQuery is present
          const matchingTools = searchQuery.trim()
            ? discipline.tools.filter(t => 
                t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.formula.toLowerCase().includes(searchQuery.toLowerCase()) ||
                t.outputUnit.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : discipline.tools;

          if (searchQuery.trim() && matchingTools.length === 0) {
            return null;
          }

          return (
            <div
              key={discipline.id}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-md hover:shadow-lg transition-all space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 
                        onClick={() => onNavigate(discipline.id)}
                        className="text-lg font-bold text-slate-900 dark:text-white hover:text-amber-600 transition-colors cursor-pointer"
                      >
                        {discipline.name} Calculators
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {discipline.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 shrink-0 border border-amber-200 dark:border-amber-900">
                    {discipline.tools.length} Tools
                  </span>
                </div>

                {/* Tools List */}
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Available Multi-Variable Solvers:</span>
                    <button
                      onClick={() => onNavigate(discipline.id)}
                      className="text-amber-600 dark:text-amber-400 hover:underline cursor-pointer lowercase"
                    >
                      view all studio →
                    </button>
                  </h4>

                  <div className="grid grid-cols-1 gap-2">
                    {matchingTools.slice(0, 5).map(tool => (
                      <div
                        key={tool.id}
                        onClick={() => onNavigate(discipline.id, tool.id)}
                        className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/50 hover:border-amber-400 dark:hover:border-amber-600 hover:bg-amber-50/30 dark:hover:bg-amber-950/20 text-xs font-semibold cursor-pointer transition-all group"
                      >
                        <div className="flex flex-col gap-0.5">
                          <span className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                            {tool.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono font-normal">
                            Equation: {tool.formula}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 shrink-0 group-hover:translate-x-1 transition-transform">
                          Open <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Discipline CTA */}
              <button
                onClick={() => onNavigate(discipline.id)}
                className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 text-xs font-bold text-slate-700 dark:text-slate-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Explore All {discipline.tools.length} {discipline.name} Solvers
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          );
        })}
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
