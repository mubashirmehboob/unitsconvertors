import React, { useState, useEffect } from "react";
import { 
  Zap, RotateCw, HardHat, Atom, Sun, Thermometer, Droplet, 
  Waves, Cpu, Grid, Compass, Calculator, Search, ArrowRight, 
  BookOpen, ChevronRight, Layers, ArrowLeft, Sparkles, X, ShieldCheck,
  CheckCircle2, Scale, ExternalLink
} from "lucide-react";
import { engineeringCalculatorsData, EngineeringTool } from "../data/calculatorsData";
import { applyAutomatedSeo } from "../utils/classificationEngine";
import { generateEngineeringArticle } from "../data/engineeringArticlesEngine";
import { injectPageSchemas } from "../utils/schemaEngine";
import EngineeringCalculatorWidget from "./EngineeringCalculatorWidget";
import MathFormula from "./MathFormula";

const EngineeringComparisonTable = React.lazy(() => import("./EngineeringComparisonTable"));
const EngineeringArticleEngine = React.lazy(() => import("./EngineeringArticleEngine"));

const iconMap: Record<string, React.ComponentType<any>> = {
  Zap, RotateCw, HardHat, Atom, Sun, Thermometer, Droplet, Waves, Cpu, Grid, Compass
};

interface EngineeringCategoryPageProps {
  disciplineId: string;
  initialToolId?: string;
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string) => void;
}

export default function EngineeringCategoryPage({
  disciplineId,
  initialToolId,
  onNavigate
}: EngineeringCategoryPageProps) {
  // Find matching discipline by ID
  const normalizedId = disciplineId.endsWith("-calc") ? disciplineId : `${disciplineId}-calc`;
  const discipline = engineeringCalculatorsData.find(
    d => d.id === disciplineId || d.id === normalizedId || d.id.replace("-calc", "") === disciplineId
  ) || engineeringCalculatorsData[0];

  const Icon = iconMap[discipline.iconName] || Calculator;

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Active Tool state
  const [activeTool, setActiveTool] = useState<EngineeringTool | null>(() => {
    if (initialToolId) {
      const found = discipline.tools.find(t => t.id === initialToolId);
      if (found) return found;
    }
    return null;
  });

  // Reset active tool when route changes
  useEffect(() => {
    if (initialToolId) {
      const found = discipline.tools.find(t => t.id === initialToolId);
      if (found) {
        setActiveTool(found);
        return;
      }
    }
    setActiveTool(null);
  }, [discipline.id, initialToolId]);

  // Apply SEO metadata & dynamic Schema.org JSON-LD
  useEffect(() => {
    if (activeTool) {
      applyAutomatedSeo({
        pageType: "engineering-calculator",
        isEngineering: true,
        title: `${activeTool.name} | ${discipline.name} Engineering Calculators`,
        description: `${activeTool.description} Free online engineering solver with multi-variable formula (${activeTool.formula}), physical boundary assumptions, and real-time SI calculation.`,
        canonicalUrl: `https://unitsconvertors.com/engineering-calculators/${discipline.id}/${activeTool.id}`
      });
      injectPageSchemas({
        page: "engineering-category",
        category: discipline.id,
        toolId: activeTool.id
      });
    } else {
      applyAutomatedSeo({
        pageType: "engineering-category",
        isEngineering: true,
        title: `${discipline.name} Calculators | UnitsConvertors.com`,
        description: `Explore all available ${discipline.name.toLowerCase()} calculators on UnitsConvertors.com. Multi-variable physical equations, SI unit standards, and explicit assumptions for engineering design.`,
        canonicalUrl: `https://unitsconvertors.com/engineering-calculators/${discipline.id}`
      });
      injectPageSchemas({
        page: "engineering-category",
        category: discipline.id
      });
    }
  }, [discipline, activeTool]);

  // Filter tools
  const filteredTools = discipline.tools.filter(tool => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.formula.toLowerCase().includes(q) ||
      tool.outputUnit.toLowerCase().includes(q)
    );
  });

  const otherDisciplines = engineeringCalculatorsData.filter(d => d.id !== discipline.id);

  const handleSelectTool = (tool: EngineeringTool) => {
    setActiveTool(tool);
    window.scrollTo({ top: 0, behavior: "smooth" });
    onNavigate(discipline.id, tool.id);
  };

  const handleBackToDirectory = () => {
    setActiveTool(null);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
    onNavigate(discipline.id);
  };

  const disciplineTitle = discipline.name.toLowerCase().endsWith("calculators") || discipline.name.toLowerCase().endsWith("calculator") 
    ? discipline.name 
    : `${discipline.name} Calculators`;

  const primaryTool = discipline.tools[0];

  // =========================================================================
  // VIEW 1: DEDICATED CALCULATOR TOOL PAGE
  // =========================================================================
  if (activeTool) {
    const relatedTools = discipline.tools.filter(t => t.id !== activeTool.id);
    const articleData = generateEngineeringArticle(activeTool, discipline, engineeringCalculatorsData);

    return (
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8 animate-in fade-in duration-200">
        
        {/* Breadcrumb Navigation */}
        <nav className="text-xs font-semibold text-slate-400 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
          <button 
            onClick={() => onNavigate("home")}
            className="hover:text-amber-500 cursor-pointer transition-colors"
          >
            Home
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <button 
            onClick={() => onNavigate("engineering-calculators")}
            className="hover:text-amber-500 cursor-pointer transition-colors"
          >
            Engineering Calculators
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <button 
            onClick={handleBackToDirectory}
            className="hover:text-amber-500 cursor-pointer transition-colors"
          >
            {disciplineTitle}
          </button>
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          <span className="text-slate-700 dark:text-slate-200 font-bold truncate max-w-[220px] sm:max-w-none">
            {activeTool.name}
          </span>
        </nav>

        {/* Back Button to Directory Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            onClick={handleBackToDirectory}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All {disciplineTitle} ({discipline.tools.length})
          </button>

          <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            SI Metric Equations • Real-Time Engine
          </span>
        </div>

        {/* Calculator Widget Component */}
        <EngineeringCalculatorWidget
          tool={activeTool}
          disciplineName={discipline.name}
          disciplineTools={discipline.tools}
          onSelectTool={handleSelectTool}
          showOpenFullButton={false}
        />

        {/* Full 13-Section SEO Article System */}
        <React.Suspense fallback={<div className="py-8 text-center text-slate-400">Loading technical article...</div>}>
          <EngineeringArticleEngine article={articleData} onNavigate={onNavigate} />
        </React.Suspense>

        {/* Technically Relevant Engineering Comparison Table */}
        <React.Suspense fallback={<div className="py-8 text-center text-slate-400">Loading comparison table...</div>}>
          <EngineeringComparisonTable disciplineId={discipline.id} />
        </React.Suspense>

        {/* Related Calculators in Same Discipline */}
        {relatedTools.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" />
                Related {disciplineTitle}
              </h3>
              <button
                onClick={handleBackToDirectory}
                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                View All {discipline.tools.length} Tools <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedTools.slice(0, 6).map(tool => (
                <div
                  key={tool.id}
                  onClick={() => handleSelectTool(tool)}
                  className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-lg cursor-pointer transition-all flex flex-col justify-between gap-4 group h-full"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/40">
                        {tool.outputUnit}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        SI Model
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {tool.name}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-slate-400 truncate max-w-[140px]">
                      <MathFormula formula={tool.formula} asInline={true} />
                    </span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                      Open Calculator <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Global CTA Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-xl font-bold">
              Explore More Engineering Tools
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Switch to other engineering disciplines including Mechanical, Civil, Fluid Mechanics, Physics, Thermodynamics, and Chemistry calculators.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={handleBackToDirectory}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              Explore {disciplineTitle}
            </button>
            <button
              onClick={() => onNavigate("engineering-calculators")}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 cursor-pointer"
            >
              Browse All Disciplines
            </button>
          </div>
        </div>

        {/* Other Engineering Disciplines Grid */}
        <div className="space-y-4">
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
            Other Engineering Calculator Disciplines
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {otherDisciplines.map(otherDisc => {
              const OtherIcon = iconMap[otherDisc.iconName] || Calculator;
              return (
                <div
                  key={otherDisc.id}
                  onClick={() => onNavigate("engineering-calculators", undefined, undefined, otherDisc.id)}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md cursor-pointer transition-all flex flex-col gap-2.5 group"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    <OtherIcon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors">
                      {otherDisc.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {otherDisc.tools.length} Tools
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: CATEGORY DIRECTORY LANDING PAGE (When activeTool is NULL)
  // =========================================================================
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
        <button 
          onClick={() => onNavigate("engineering-calculators")}
          className="hover:text-amber-500 cursor-pointer transition-colors"
        >
          Engineering Calculators
        </button>
        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
        <span className="text-slate-700 dark:text-slate-200 font-bold">
          {disciplineTitle}
        </span>
      </nav>

      {/* Hero Section */}
      <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 h-48 w-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-start sm:items-center gap-4 relative z-10">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 shadow-inner">
            <Icon className="h-8 w-8" />
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                {discipline.badge || "Engineering Discipline"}
              </span>
              <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                {discipline.tools.length} Verified Calculators
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {disciplineTitle} Studio
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {discipline.description} Solve multi-variable physical equations with SI unit standards, explicit assumptions, and instant calculations.
            </p>
          </div>
        </div>

        {/* Hero Quick Badge */}
        <div className="flex flex-col gap-2 shrink-0 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-4 md:pt-0 md:pl-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Multi-Variable Solvers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>SI Metric Standards</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span>Zero-Latency Execution</span>
          </div>
        </div>
      </div>

      {/* Embedded Live Primary Calculator */}
      {primaryTool && (
        <EngineeringCalculatorWidget
          tool={primaryTool}
          disciplineName={discipline.name}
          disciplineTools={discipline.tools}
          onSelectTool={(t) => handleSelectTool(t)}
          showOpenFullButton={true}
          onOpenFull={() => handleSelectTool(primaryTool)}
        />
      )}

      {/* Directory Section Header & Search Bar */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-amber-500" />
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              All {disciplineTitle} Directory ({discipline.tools.length})
            </h2>
          </div>

          {/* Search Input with Clear Button */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder={`Search ${discipline.name.toLowerCase()} calculators...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-10 pr-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 cursor-pointer"
                title="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Directory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              onClick={() => handleSelectTool(tool)}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between gap-4 group h-full"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border border-amber-200/50 dark:border-amber-900/40">
                    Unit: {tool.outputUnit}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Standard Model
                  </span>
                </div>

                <h3 className="font-display font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {tool.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-slate-400 truncate max-w-[140px]">
                  <MathFormula formula={tool.formula} asInline={true} />
                </span>
                <span className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0">
                  Open Calculator <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <div className="p-10 text-center rounded-3xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 space-y-4">
            <div className="flex justify-center">
              <Calculator className="h-10 w-10 text-slate-400" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                No {discipline.name.toLowerCase()} calculators found matching "{searchQuery}"
              </h3>
              <p className="text-xs text-slate-500">
                Try searching with different engineering terms or explore popular tools in this discipline.
              </p>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-xl bg-amber-500 text-white text-xs font-bold transition-all hover:bg-amber-600 cursor-pointer"
              >
                Reset Search Filter
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Discipline Technical Comparison Table */}
      <React.Suspense fallback={<div className="py-8 text-center text-slate-400">Loading comparison table...</div>}>
        <EngineeringComparisonTable disciplineId={discipline.id} />
      </React.Suspense>

      {/* Category Educational & Scientific Overview */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 p-6 sm:p-8 space-y-4 shadow-sm">
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-amber-500" />
          Understanding {disciplineTitle} Equations & SI Verification
        </h3>

        <div className="prose dark:prose-invert text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
          <p>
            {disciplineTitle} model physical relationships in engineering according to international SI standards. Unlike standard unit conversion tools that calculate linear scalar ratios between equivalent dimensions (e.g. converting feet to meters), engineering calculators evaluate governing multi-variable equations combining mass, force, pressure, potential, charge, or temperature.
          </p>
          <p>
            Every calculator in the {discipline.name} discipline explicitly states its governing mathematical equation, required dimensional input variables, and physical boundary assumptions to ensure rigorous technical transparency.
          </p>
        </div>
      </div>

      {/* Other Engineering Calculator Disciplines */}
      <div className="space-y-4">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
          Explore Other Engineering Calculator Disciplines
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {otherDisciplines.map(otherDisc => {
            const OtherIcon = iconMap[otherDisc.iconName] || Calculator;
            return (
              <div
                key={otherDisc.id}
                onClick={() => onNavigate("engineering-calculators", undefined, undefined, otherDisc.id)}
                className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md cursor-pointer transition-all flex flex-col gap-2.5 group"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <OtherIcon className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-amber-600 transition-colors">
                    {otherDisc.name}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {otherDisc.tools.length} Tools
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
