import React, { useState, useEffect, useMemo } from "react";
import {
  BookOpen,
  Search,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Info,
  Sparkles,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
  Scale,
  Atom,
  Zap,
  Thermometer,
  Clock,
  Ruler,
  Lightbulb,
  Layers,
  Globe,
  Calculator,
  Compass,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FlaskConical
} from "lucide-react";
import MathFormula from "./MathFormula";
import {
  SI_BASE_UNITS_DETAILED,
  SI_DERIVED_UNITS_SPECIAL,
  SI_PREFIXES_ALL,
  SI_FORMATTING_RULES,
  NON_SI_ACCEPTED_UNITS,
  DOMAIN_SI_APPLICATIONS,
  WORKED_SI_EXAMPLES,
  COMMON_SI_MISTAKES,
  SI_FAQS,
  SI_AUTHORITATIVE_REFERENCES,
  SI_INTERNAL_LINKS
} from "../data/siReferenceData";

const STEM_QUANTITY_ROUTES: Record<string, string> = {
  "Force": "/force-conversion",
  "Pressure / Stress": "/pressure-conversion",
  "Energy / Work": "/energy-conversion",
  "Power": "/power-conversion",
  "Torque": "/torque-conversion",
  "Potential Difference (Voltage)": "/voltage-conversion",
  "Electric Resistance": "/electric-resistance-conversion",
  "Capacitance": "/capacitance-conversion",
  "Inductance": "/inductance-conversion",
  "Electric Charge": "/electric-charge-conversion",
  "Frequency": "/frequency-conversion",
  "Radioactivity": "/radioactivity-conversion",
};

interface SiUnitsReferenceProps {
  onNavigate: (route: string, event?: React.MouseEvent) => void;
}

export default function SiUnitsReference({ onNavigate }: SiUnitsReferenceProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [prefixFilter, setPrefixFilter] = useState<"all" | "multiples" | "submultiples" | "new2022">("all");

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Filtered prefixes based on category and search query
  const filteredPrefixes = useMemo(() => {
    return SI_PREFIXES_ALL.filter((p) => {
      // Category filter
      if (prefixFilter === "multiples" && p.exponent <= 0) return false;
      if (prefixFilter === "submultiples" && p.exponent >= 0) return false;
      if (prefixFilter === "new2022" && p.yearAdopted !== 2022) return false;

      // Search filter
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.symbol.toLowerCase().includes(q) ||
        p.factorText.toLowerCase().includes(q) ||
        p.wordUS.toLowerCase().includes(q) ||
        p.scaleContext.toLowerCase().includes(q)
      );
    });
  }, [prefixFilter, searchQuery]);

  // Filtered derived units based on search query
  const filteredDerivedUnits = useMemo(() => {
    if (!searchQuery) return SI_DERIVED_UNITS_SPECIAL;
    const q = searchQuery.toLowerCase();
    return SI_DERIVED_UNITS_SPECIAL.filter(
      (u) =>
        u.name.toLowerCase().includes(q) ||
        u.symbol.toLowerCase().includes(q) ||
        u.quantity.toLowerCase().includes(q) ||
        u.expressedInBaseUnits.toLowerCase().includes(q) ||
        u.significance.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const getBaseUnitIcon = (name: string) => {
    switch (name) {
      case "second":
        return <Clock className="w-5 h-5 text-indigo-500" />;
      case "metre":
        return <Ruler className="w-5 h-5 text-blue-500" />;
      case "kilogram":
        return <Scale className="w-5 h-5 text-emerald-500" />;
      case "ampere":
        return <Zap className="w-5 h-5 text-amber-500" />;
      case "kelvin":
        return <Thermometer className="w-5 h-5 text-rose-500" />;
      case "mole":
        return <FlaskConical className="w-5 h-5 text-purple-500" />;
      case "candela":
        return <Lightbulb className="w-5 h-5 text-yellow-500" />;
      default:
        return <Atom className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="w-full bg-[var(--background)] dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen">
      {/* Breadcrumb Header Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
            <button
              onClick={(e) => onNavigate("/", e)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-slate-400 dark:text-slate-500">Resources</span>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white truncate">
              SI Units & Metric Prefixes Reference
            </span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>BIPM 9th Ed. & 27th CGPM Compliant</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Hero Header */}
        <header className="mb-10 sm:mb-14 space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            SI Units & Metric Prefixes Reference
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-4xl leading-relaxed">
            The definitive reference guide to the International System of Units (SI). Covers the 2019 redefined <strong>seven SI base units</strong>, <strong>22 derived units with special names</strong>, full <strong>metric prefixes from quetta (10³⁰) through quecto (10⁻³⁰)</strong>, case-sensitive notation rules, accepted non-SI units, and practical STEM applications.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
              <BookOpen className="w-3.5 h-3.5 text-blue-500" /> Primary Sources: BIPM SI Brochure & NIST SP 811
            </span>
            <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 px-2.5 py-1 rounded-md">
              <Globe className="w-3.5 h-3.5 text-emerald-500" /> Resolution 3 of 27th CGPM (2022 Prefixes Included)
            </span>
            <button
              onClick={(e) => onNavigate("/resources/unit-conversion-reference", e)}
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline ml-auto"
            >
              <span>View Unit Conversion Reference</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="space-y-14">
            {/* Quick Search & Filter Bar */}
            <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60 shadow-xs space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search any SI unit, symbol, prefix (e.g. pascal, quetta, K, Ω, Hz)..."
                    className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--background)] dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1 sm:pb-0">
                  <button
                    onClick={() => setPrefixFilter("all")}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      prefixFilter === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    All Prefixes
                  </button>
                  <button
                    onClick={() => setPrefixFilter("multiples")}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      prefixFilter === "multiples"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    Multiples (10³–10³⁰)
                  </button>
                  <button
                    onClick={() => setPrefixFilter("submultiples")}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      prefixFilter === "submultiples"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    Submultiples (10⁻¹–10⁻³⁰)
                  </button>
                  <button
                    onClick={() => setPrefixFilter("new2022")}
                    className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                      prefixFilter === "new2022"
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                    }`}
                  >
                    New 2022 Prefixes
                  </button>
                </div>
              </div>
            </div>

            {/* SECTION 1: Introduction */}
            <section id="introduction" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  1. Introduction to the SI
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Measurement is the language of science, engineering, and global commerce. For civilizations to collaborate on satellite navigation, international trade, quantum computing, and climate modeling, every measurement of distance, time, mass, electric current, and temperature must have an unambiguous, internationally recognized meaning.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                The <strong>International System of Units</strong> (universally abbreviated as <strong>SI</strong> from the French <em>Système international d'unités</em>) is the world’s only coherent, official metric measurement system. Established by the 11th General Conference on Weights and Measures (CGPM) in 1960 under the authority of the historic 1875 Metre Convention, the SI is today adopted by nearly every sovereign nation on Earth. For general conversions into US Customary, British Imperial, and traditional measurement units, refer to our comprehensive{" "}
                <a
                  href="/resources/unit-conversion-reference"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/resources/unit-conversion-reference");
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1"
                >
                  Unit Conversion Reference
                  <ExternalLink className="w-3 h-3" />
                </a>
                .
              </p>
              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-800/60 bg-blue-50/50 dark:bg-blue-950/20 text-xs sm:text-sm text-blue-900 dark:text-blue-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Authoritative Foundation:</strong> All definitions and values presented on this reference page reflect the <strong>9th Edition of the BIPM SI Brochure</strong> (including the 2019 fundamental constants redefinition) and the <strong>27th CGPM Resolution 3 (November 2022)</strong> which officially ratified four new metric prefixes.
                </div>
              </div>
            </section>

            {/* SECTION 2: What Is the SI? */}
            <section id="what-is-si" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  2. What Is the International System of Units?
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                The SI is a <strong>coherent system of units</strong> built upon seven mutually independent base quantities. In a coherent system, derived units are formed directly by multiplying and dividing base units with a numerical factor of exactly 1—no arbitrary multipliers, unit offsets, or gravitational acceleration constants are required.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Universal Coherence
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Physical equations hold true directly without conversion constants. For instance, mechanical power $P = F \cdot v$ yields watts directly when force is in newtons and velocity is in metres per second.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <Atom className="w-4 h-4 text-blue-500" />
                    Quantum Invariance
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Since the 2019 redefinition, every SI unit is derived from invariant constants of the universe (Planck constant $h$, speed of light $c$, elementary charge $e$, Boltzmann constant $k$). No physical metal cylinders exist in the definitions.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-2">
                  <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-500" />
                    Decimal Scaling
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Prefixes scale any unit by powers of ten across 60 orders of magnitude, from subatomic quecto ($10^{-30}$) to astronomical quetta ($10^{30}$).
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3: Seven SI Base Units */}
            <section id="seven-base-units" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  3. The Seven SI Base Units
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                By international agreement under the Metre Convention, seven physical quantities were selected as the dimensional foundation of the entire system. Below is the master summary of the seven SI base units:
              </p>

              {/* Responsive Table of 7 Base Units */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                      <th className="py-3 px-4">Base Quantity</th>
                      <th className="py-3 px-4">Unit Name</th>
                      <th className="py-3 px-4">Symbol</th>
                      <th className="py-3 px-4">Dimension</th>
                      <th className="py-3 px-4">Defining Fundamental Constant</th>
                      <th className="py-3 px-4">Fixed Numerical Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {SI_BASE_UNITS_DETAILED.map((u) => (
                      <tr key={u.name} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                          <div className="flex items-center gap-2">
                            {getBaseUnitIcon(u.name)}
                            <span>{u.quantity}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-blue-600 dark:text-blue-400">
                          {u.name}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white">
                          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            {u.symbol}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-600 dark:text-slate-400">
                          <MathFormula formula={u.dimensionSymbol} />
                        </td>
                        <td className="py-3 px-4 text-slate-700 dark:text-slate-300">
                          {u.definingConstant}
                        </td>
                        <td className="py-3 px-4 font-mono text-xs text-slate-600 dark:text-slate-400 whitespace-nowrap">
                          {u.definingValue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 4: Individual Explanations of Each Base Unit */}
            <section id="base-unit-details" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Atom className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  4. Deep Dive: Individual Base Unit Definitions
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                In 2019, the 26th CGPM implemented the most profound reform in measurement history: tying every base unit to an exact numerical value of a fundamental constant of physics. Below are the precise definitions, mathematical expressions, historical evolution, and modern laboratory realization methods for each of the seven units:
              </p>

              <div className="space-y-6">
                {SI_BASE_UNITS_DETAILED.map((u, idx) => (
                  <div
                    key={u.name}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800">
                          {getBaseUnitIcon(u.name)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white capitalize">
                              {u.quantity}: {u.name} ({u.symbol})
                            </h3>
                            <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              Dim: {u.dimensionSymbol}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            Base Unit #{idx + 1} of the International System
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => copyToClipboard(u.formalDefinition, `def-${u.name}`)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 transition-colors self-start sm:self-center"
                        title="Copy formal BIPM definition"
                      >
                        {copiedKey === `def-${u.name}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Definition</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Exact Constant Banner */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="text-slate-500 dark:text-slate-400">Defining Constant: </span>
                        <strong className="text-slate-900 dark:text-white">{u.definingConstant}</strong>
                      </div>
                      <div className="font-mono text-blue-600 dark:text-blue-400 font-bold bg-white dark:bg-slate-900 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700">
                        <MathFormula formula={u.exactValueMath} />
                      </div>
                    </div>

                    {/* Formal Definition */}
                    <div className="space-y-1.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Official BIPM Definition
                      </h4>
                      <blockquote className="p-3 rounded-lg border-l-4 border-blue-500 bg-blue-50/40 dark:bg-blue-950/20 text-xs sm:text-sm text-slate-800 dark:text-slate-200 italic leading-relaxed">
                        "{u.formalDefinition}"
                      </blockquote>
                    </div>

                    {/* Plain Explanation */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Plain-Language Explanation
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {u.plainExplanation}
                      </p>
                    </div>

                    {/* History & Realization Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                        <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          <span>Historical Evolution</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {u.historicalContext}
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                        <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Primary Laboratory Realization</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {u.realizationMethod}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 5: SI Derived Units with Special Names */}
            <section id="derived-units" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  5. SI Derived Units with Special Names
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Derived units are formed algebraically by multiplying or dividing base units according to physical equations. For convenience and ease of communication, the CGPM has approved <strong>22 derived units with special names and symbols</strong>.
              </p>

              {/* Table of 22 Derived Units */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                      <th className="py-3 px-4">Derived Quantity</th>
                      <th className="py-3 px-4">Unit Name</th>
                      <th className="py-3 px-4">Symbol</th>
                      <th className="py-3 px-4">Expressed in Other SI</th>
                      <th className="py-3 px-4">Expressed in SI Base Units</th>
                      <th className="py-3 px-4">Physical Significance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {filteredDerivedUnits.map((u) => (
                      <tr key={u.name} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                          {u.quantity}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-blue-600 dark:text-blue-400">
                          {u.name}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-900 dark:text-white">
                          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                            {u.symbol}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-xs text-slate-600 dark:text-slate-400">
                          {u.expressedInOtherSI}
                        </td>
                        <td className="py-3 px-4 font-mono text-xs text-slate-900 dark:text-slate-200 font-medium">
                          {u.expressedInBaseUnits}
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                          {u.significance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 6: Derived-Unit Dimensional Expressions */}
            <section id="dimensional-expressions" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Compass className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  6. Derived-Unit Dimensional Expressions
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                In physics and dimensional analysis, the dimension of any physical quantity $Q$ is represented symbolically by powers of the seven base dimensions:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center font-mono text-sm sm:text-base text-blue-600 dark:text-blue-400 font-bold overflow-x-auto">
                <MathFormula formula="\dim Q = \mathsf{L}^\alpha \, \mathsf{M}^\beta \, \mathsf{T}^\gamma \, \mathsf{I}^\delta \, \Theta^\varepsilon \, \mathsf{N}^\zeta \, \mathsf{J}^\eta" />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Where L is length, M is mass, T is time, I is electric current, &Theta; is thermodynamic temperature, N is amount of substance, and J is luminous intensity. Checking dimensional homogeneity is the standard scientific method for detecting algebraic bugs in complex equations before numerical calculation.
              </p>

              {/* Dimensional Reference Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {[
                  { name: "Force (Newton)", sym: "N", dim: "\\mathsf{M}\\cdot\\mathsf{L}\\cdot\\mathsf{T}^{-2}" },
                  { name: "Energy / Work (Joule)", sym: "J", dim: "\\mathsf{M}\\cdot\\mathsf{L}^2\\cdot\\mathsf{T}^{-2}" },
                  { name: "Power (Watt)", sym: "W", dim: "\\mathsf{M}\\cdot\\mathsf{L}^2\\cdot\\mathsf{T}^{-3}" },
                  { name: "Pressure / Stress (Pascal)", sym: "Pa", dim: "\\mathsf{M}\\cdot\\mathsf{L}^{-1}\\cdot\\mathsf{T}^{-2}" },
                  { name: "Electric Potential (Volt)", sym: "V", dim: "\\mathsf{M}\\cdot\\mathsf{L}^2\\cdot\\mathsf{T}^{-3}\\cdot\\mathsf{I}^{-1}" },
                  { name: "Electric Resistance (Ohm)", sym: "Ω", dim: "\\mathsf{M}\\cdot\\mathsf{L}^2\\cdot\\mathsf{T}^{-3}\\cdot\\mathsf{I}^{-2}" },
                  { name: "Capacitance (Farad)", sym: "F", dim: "\\mathsf{M}^{-1}\\cdot\\mathsf{L}^{-2}\\cdot\\mathsf{T}^4\\cdot\\mathsf{I}^2" },
                  { name: "Inductance (Henry)", sym: "H", dim: "\\mathsf{M}\\cdot\\mathsf{L}^2\\cdot\\mathsf{T}^{-2}\\cdot\\mathsf{I}^{-2}" },
                  { name: "Magnetic Flux Density (Tesla)", sym: "T", dim: "\\mathsf{M}\\cdot\\mathsf{T}^{-2}\\cdot\\mathsf{I}^{-1}" },
                ].map((item) => (
                  <div key={item.sym} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
                      <span>{item.name}</span>
                      <span className="font-mono text-blue-600 dark:text-blue-400">[{item.sym}]</span>
                    </div>
                    <div className="font-mono text-slate-600 dark:text-slate-300 pt-1">
                      <MathFormula formula={item.dim} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 7: SI Prefixes from Quetta to Quecto */}
            <section id="si-prefixes" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  7. SI Prefixes (Quetta to Quecto: 10³⁰ to 10⁻³⁰)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                In November 2022, the <strong>27th CGPM</strong> made scientific history by ratifying four new prefixes: <strong>quetta ($10^{30}$)</strong> and <strong>ronna ($10^{27}$)</strong> for astronomical scales and big data, alongside <strong>ronto ($10^{-27}$)</strong> and <strong>quecto ($10^{-30}$)</strong> for subatomic physics. This extended the official SI prefix range across <strong>60 orders of magnitude</strong>:
              </p>

              {/* Prefixes Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                      <th className="py-3 px-4">Prefix</th>
                      <th className="py-3 px-4">Symbol</th>
                      <th className="py-3 px-4">Factor</th>
                      <th className="py-3 px-4">Short Scale Name (US)</th>
                      <th className="py-3 px-4">Year Adopted</th>
                      <th className="py-3 px-4">Real-World Scientific Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {filteredPrefixes.map((p) => {
                      const isNew = p.yearAdopted === 2022;
                      return (
                        <tr
                          key={p.name}
                          className={`hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors ${
                            isNew ? "bg-emerald-50/30 dark:bg-emerald-950/10" : ""
                          }`}
                        >
                          <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                            <div className="flex items-center gap-2">
                              <span>{p.name}</span>
                              {isNew && (
                                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 font-semibold">
                                  2022 New
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 font-mono font-bold text-blue-600 dark:text-blue-400 text-base">
                            {p.symbol}
                          </td>
                          <td className="py-3 px-4 font-mono text-xs font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                            <MathFormula formula={p.factorLatex || p.factorText} />
                          </td>
                          <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-400">
                            {p.wordUS}
                          </td>
                          <td className="py-3 px-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                            {p.yearAdopted}
                          </td>
                          <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
                            {p.scaleContext}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 8: Real-World Prefix Examples */}
            <section id="prefix-examples" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  8. Real-World Metric Prefix Examples
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Metric prefixes transform unwieldy numerical strings of zeroes into elegant, scan-friendly expressions across science and technology:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <Globe className="w-4 h-4 text-blue-500" />
                    Macroscopic & Astronomical Multiples
                  </h3>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li>
                      <strong>1.9 Quettagrams (Qg):</strong> The total mass of Jupiter (&asymp; 1.9 &times; 10<sup>27</sup> kg = 1.9 &times; 10<sup>30</sup> g).
                    </li>
                    <li>
                      <strong>5.97 Ronnagrams (Rg):</strong> The mass of Earth (&asymp; 5.97 &times; 10<sup>24</sup> kg = 5.97 &times; 10<sup>27</sup> g).
                    </li>
                    <li>
                      <strong>120 Zettabytes (ZB):</strong> Annual global digital data created and stored worldwide.
                    </li>
                    <li>
                      <strong>9.46 Petametres (Pm):</strong> Distance of one light-year in vacuum.
                    </li>
                    <li>
                      <strong>3 Terabytes (TB):</strong> Standard storage capacity of a modern desktop backup drive.
                    </li>
                    <li>
                      <strong>3.5 Gigahertz (GHz):</strong> Operating clock frequency of computer microprocessors.
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-3">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <Atom className="w-4 h-4 text-purple-500" />
                    Microscopic &amp; Subatomic Submultiples
                  </h3>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                    <li>
                      <strong>0.911 Rontograms (rg):</strong> Invariant rest mass of an electron (&asymp; 9.109 &times; 10<sup>-31</sup> kg = 0.911 &times; 10<sup>-27</sup> g).
                    </li>
                    <li>
                      <strong>1.67 Yoctograms (yg):</strong> Invariant rest mass of a proton (&asymp; 1.673 &times; 10<sup>-27</sup> kg = 1.673 &times; 10<sup>-24</sup> g).
                    </li>
                    <li>
                      <strong>0.16 Zeptocoulombs (zC):</strong> Elementary electric charge (<em>e</em> &approx; 1.602 &times; 10<sup>-19</sup> C).
                    </li>
                    <li>
                      <strong>1.7 Femtometres (fm):</strong> Effective charge radius of a proton.
                    </li>
                    <li>
                      <strong>2 Nanometres (nm):</strong> Diameter of a Watson-Crick double helix DNA strand.
                    </li>
                    <li>
                      <strong>7 Micrometres (&micro;m):</strong> Average diameter of a human red blood cell (erythrocyte).
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 9: SI Unit Symbol & Formatting Rules */}
            <section id="symbol-formatting-rules" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  9. SI Unit Symbol & Formatting Rules
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Unit symbols are mathematical notations rather than linguistic abbreviations. The BIPM, NIST, and ISO/IEC 80000 mandate strict typographical conventions to ensure universal clarity across cultures and computer algorithms:
              </p>

              <div className="space-y-4">
                {SI_FORMATTING_RULES.map((rule) => (
                  <div
                    key={rule.ruleNumber}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        Rule #{rule.ruleNumber}: {rule.title}
                      </h3>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-semibold">
                        {rule.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {rule.explanation}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 text-xs space-y-1">
                        <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          <span>Correct Usage</span>
                        </div>
                        <div className="font-mono text-emerald-900 dark:text-emerald-100 font-semibold">
                          {rule.correctExample}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 text-xs space-y-1">
                        <div className="font-bold text-rose-800 dark:text-rose-300 flex items-center gap-1.5">
                          <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                          <span>Incorrect / Avoid</span>
                        </div>
                        <div className="font-mono text-rose-900 dark:text-rose-100 font-semibold line-through">
                          {rule.incorrectExample}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                      <strong>Why this rule matters:</strong> {rule.whyItMatters}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 10: SI versus Non-SI Units */}
            <section id="si-vs-non-si" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  10. SI versus Non-SI Units (Accepted & Deprecated)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Although the SI is intended to be universal, certain non-SI units are so deeply embedded in daily life, civil navigation, astronomy, and trade that the BIPM formally recognizes them as <strong>non-SI units accepted for use with the SI</strong>:
              </p>

              {/* Table of Accepted Non-SI Units */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                      <th className="py-3 px-4">Unit Name</th>
                      <th className="py-3 px-4">Symbol</th>
                      <th className="py-3 px-4">Quantity</th>
                      <th className="py-3 px-4">Exact Value in SI Units</th>
                      <th className="py-3 px-4">Status & Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                    {NON_SI_ACCEPTED_UNITS.map((u) => (
                      <tr key={u.name} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                          {u.name}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-blue-600 dark:text-blue-400">
                          {u.symbol}
                        </td>
                        <td className="py-3 px-4 text-slate-600 dark:text-slate-400">
                          {u.quantity}
                        </td>
                        <td className="py-3 px-4 font-mono text-xs font-semibold text-slate-900 dark:text-slate-200">
                          {u.valueInSi}
                        </td>
                        <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
                          {u.notes}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Deprecated Units Warning */}
              <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-2">
                <div className="font-bold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Deprecated Non-SI Units (Not Recommended by BIPM)</span>
                </div>
                <p className="text-xs leading-relaxed text-amber-800 dark:text-amber-300">
                  Older metric and CGS units should be converted to official SI equivalents: replace <strong>bar</strong> with megapascals (1 bar = 0.1 MPa = 100 kPa); replace <strong>torr / mmHg</strong> with pascals (1 Torr ≈ 133.322 Pa); replace <strong>calorie</strong> with joules (1 cal = 4.184 J); replace <strong>dyne</strong> with newtons (1 dyn = $10^{-5}$ N); replace <strong>erg</strong> with joules (1 erg = $10^{-7}$ J); and replace <strong>micron</strong> with the proper SI name micrometre (µm).
                </p>
              </div>
            </section>

            {/* SECTION 11: Common Metric Units */}
            <section id="common-metric-units" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  11. Common Everyday Metric Units
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Everyday metric usage pairs convenient base units with standard prefixes. Below is a quick comparison of the most widespread metric units across weather, nutrition, transit, and consumer electronics:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                {[
                  { domain: "Distance & Travel", unit: "Kilometre (km)", val: "1 000 m", use: "Highway distances, running road races, and speed limits (km/h)." },
                  { domain: "Commerce & Body Mass", unit: "Kilogram (kg)", val: "1 000 g", use: "Groceries, baggage allowances, medical patient mass." },
                  { domain: "Beverages & Liquids", unit: "Litre (L) & mL", val: "1 L = 0.001 m³", use: "Milk, bottled drinks, automotive fuel tanks, syringes." },
                  { domain: "Weather & Climate", unit: "Degree Celsius (°C)", val: "K − 273.15", use: "Forecasts: 0 °C is freezing, 20–25 °C room comfort, 100 °C boiling." },
                  { domain: "Electrical Power", unit: "Kilowatt (kW)", val: "1 000 W", use: "Home electric appliances, EV motors, solar panel arrays." },
                  { domain: "Barometric Pressure", unit: "Hectopascal (hPa)", val: "100 Pa", use: "Weather maps (1 013.25 hPa standard sea-level pressure)." },
                  { domain: "Dietary Energy", unit: "Kilojoule (kJ)", val: "1 000 J", use: "Standard food nutritional labeling (1 kcal = 4.184 kJ)." },
                  { domain: "Land Area", unit: "Hectare (ha)", val: "10 000 m²", use: "Farms, public parks, forestry, and real estate parcels." }
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 text-xs space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {item.domain}
                    </span>
                    <div className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.unit}
                    </div>
                    <div className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">
                      {item.val}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed pt-1">
                      {item.use}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTIONS 12-15: Domain-Specific SI Applications */}
            <section id="engineering-units" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  12–15. SI Units Across STEM Disciplines
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                The strength of the SI is its complete coherence across scientific disciplines. For specialized industrial imperial-to-metric conversions, fluid dynamics calculations, and mechanical stress formulations, consult our companion{" "}
                <a
                  href="/resources/engineering-units-reference"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/resources/engineering-units-reference");
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1"
                >
                  Engineering Units & Conversion Reference
                  <ExternalLink className="w-3 h-3" />
                </a>
                . The tables below outline the key derived units, base-unit formulas, and real-world roles across mechanical engineering, electrical engineering, physics, and chemistry:
              </p>

              <div className="space-y-8">
                {DOMAIN_SI_APPLICATIONS.map((domainApp, idx) => (
                  <div
                    key={domainApp.domain}
                    id={
                      idx === 0
                        ? "engineering-units"
                        : idx === 1
                        ? "electrical-units"
                        : idx === 2
                        ? "physics-units"
                        : "chemistry-units"
                    }
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <div>
                        <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                          Section {12 + idx}: SI in {domainApp.domain}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {domainApp.description}
                        </p>
                      </div>
                      <a
                        href={`/calculators/${domainApp.disciplineSlug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`/calculators/${domainApp.disciplineSlug}`);
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-semibold hover:bg-blue-100 transition-colors self-start sm:self-center"
                      >
                        <span>Open {domainApp.domain.split(" ")[0]} Calculators</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold">
                            <th className="py-2.5 px-3">Quantity</th>
                            <th className="py-2.5 px-3">Standard SI Unit</th>
                            <th className="py-2.5 px-3">Symbol</th>
                            <th className="py-2.5 px-3">SI Base Unit Equivalent</th>
                            <th className="py-2.5 px-3">Engineering / Scientific Application</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                          {domainApp.units.map((u) => {
                            const converterRoute = STEM_QUANTITY_ROUTES[u.quantity];
                            return (
                              <tr key={u.quantity} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                                <td className="py-2.5 px-3 font-semibold text-slate-900 dark:text-white">
                                  {converterRoute ? (
                                    <a
                                      href={converterRoute}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        onNavigate(converterRoute);
                                      }}
                                      className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                      title={`Open interactive ${u.quantity} converter`}
                                    >
                                      {u.quantity}
                                      <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                                    </a>
                                  ) : (
                                    u.quantity
                                  )}
                                </td>
                                <td className="py-2.5 px-3 font-mono text-blue-600 dark:text-blue-400">
                                  {u.unitName}
                                </td>
                                <td className="py-2.5 px-3 font-mono font-bold text-slate-800 dark:text-slate-200">
                                  {u.symbol}
                                </td>
                                <td className="py-2.5 px-3 font-mono text-slate-500 dark:text-slate-400">
                                  {u.baseUnitEquivalent}
                                </td>
                                <td className="py-2.5 px-3 text-slate-600 dark:text-slate-300">
                                  {u.realWorldUse}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 16: Step-by-Step Conversion Examples */}
            <section id="conversion-examples" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  16. Step-by-Step SI Conversion Examples
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Converting between metric prefixes and coherent base units requires systematic dimensional analysis. Below are four fully worked examples illustrating the exact mathematical cancellation process:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {WORKED_SI_EXAMPLES.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {ex.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                        Worked Example
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {ex.scenario}
                    </p>

                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-mono text-center overflow-x-auto text-blue-600 dark:text-blue-400 font-bold">
                      <MathFormula formula={ex.governingFormula} />
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Calculation Steps
                      </span>
                      <ol className="space-y-1 text-xs text-slate-700 dark:text-slate-300 list-decimal pl-4 leading-relaxed">
                        {ex.stepByStep.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/50 text-xs space-y-1">
                      <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Final Result</span>
                      </div>
                      <div className="font-mono text-emerald-900 dark:text-emerald-100 font-bold">
                        {ex.finalResult}
                      </div>
                    </div>

                    <div className="text-[11px] text-amber-800 dark:text-amber-300 bg-amber-50/60 dark:bg-amber-950/20 p-2.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
                      <strong>Common Pitfall:</strong> {ex.commonTrap}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 17: Common SI Mistakes */}
            <section id="common-mistakes" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  17. Common SI Errors & Pitfalls
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Metric and SI errors in engineering and scientific reports lead to costly misunderstandings, broken software integrations, and failed paper submissions. Below are the six most prevalent mistakes:
              </p>

              <div className="grid grid-cols-1 gap-4">
                {COMMON_SI_MISTAKES.map((m) => (
                  <div
                    key={m.id}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                        {m.errorTitle}
                      </h3>
                      <span className="text-xs text-rose-600 dark:text-rose-400 font-mono font-semibold">
                        Avoid
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 text-rose-900 dark:text-rose-200">
                        <strong className="block text-rose-800 dark:text-rose-300 font-bold mb-0.5">Incorrect:</strong>
                        <span className="font-mono line-through">{m.badUsage}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200">
                        <strong className="block text-emerald-800 dark:text-emerald-300 font-bold mb-0.5">Correct:</strong>
                        <span className="font-mono font-bold">{m.correctUsage}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {m.explanation}
                    </p>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      <strong>Real-world consequence:</strong> {m.realWorldImpact}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 18: Frequently Asked Questions (FAQ) */}
            <section id="faq" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  18. Frequently Asked Questions
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Authoritative answers to the most common questions regarding SI base units, the 2019 redefinition, metric prefixes, and notation standards.
              </p>

              <div className="space-y-3 pt-2">
                {SI_FAQS.map((faq, idx) => {
                  const isExpanded = expandedFaq === idx;
                  const contentId = `si-faq-${idx}`;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 dark:border-slate-800 rounded-xl bg-[var(--surface)] dark:bg-slate-900/40 overflow-hidden transition-colors shadow-xs"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isExpanded}
                        aria-controls={contentId}
                        className="w-full min-h-[44px] flex items-center justify-between p-4 sm:p-5 text-left font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors focus-visible:outline-none"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-blue-500" : ""
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <div
                          id={contentId}
                          role="region"
                          className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-slate-900/20"
                        >
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 19: Authoritative References & Standards */}
            <section id="references" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  19. Authoritative Standards & References
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Every unit definition, mathematical value, constant, and prefix on this reference page is directly verified against the official publications of the International Bureau of Weights and Measures (BIPM), the National Institute of Standards and Technology (NIST), and ISO/IEC:
              </p>

              <div className="space-y-3">
                {SI_AUTHORITATIVE_REFERENCES.map((ref, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-1.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                        {ref.title}
                      </h3>
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
                      >
                        <span>Official Source</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {ref.organization}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {ref.description}
                    </p>
                    <div className="text-[11px] font-mono text-slate-400 dark:text-slate-500 pt-0.5">
                      Citation: {ref.citation}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* UnitsConvertors Interactive Tools Hub */}
            <section className="p-6 rounded-2xl border border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30 dark:from-blue-950/20 dark:via-slate-900 dark:to-indigo-950/20 shadow-xs space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    Interactive Converters & Engineering Tools
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Instantly convert between SI base units, derived units, metric prefixes, and imperial measurements:
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="/resources/unit-conversion-reference"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/resources/unit-conversion-reference");
                    }}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors shadow-xs inline-flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Unit Conversion Reference
                  </a>
                  <a
                    href="/resources/engineering-units-reference"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/resources/engineering-units-reference");
                    }}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-xs transition-colors shadow-2xs inline-flex items-center gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5 text-indigo-500" />
                    Engineering Units Reference
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                {SI_INTERNAL_LINKS.slice(1, 13).map((link, idx) => (
                  <a
                    key={idx}
                    href={link.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.route);
                    }}
                    className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 text-left hover:border-blue-500 hover:shadow-xs transition-all group focus-visible:outline-none block"
                  >
                    <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      {link.category}
                    </div>
                    <div className="font-bold text-xs text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between mt-0.5">
                      <span>{link.name}</span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
  );
}
