import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Copy,
  Check,
  ChevronDown,
  Info,
  AlertTriangle,
  Calculator,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  Hash,
  Scale,
  Ruler,
  Clock,
  Zap,
  Thermometer,
  Gauge,
  Atom,
  Flame,
  Radio,
  FileText,
  Layers,
  Box
} from "lucide-react";
import MathFormula from "./MathFormula";
import {
  SI_BASE_UNITS,
  SI_DERIVED_UNITS,
  SI_PREFIXES,
  LENGTH_FACTORS,
  AREA_FACTORS,
  VOLUME_FACTORS,
  MASS_FACTORS,
  TIME_FACTORS,
  SPEED_FACTORS,
  ACCELERATION_FACTORS,
  FORCE_FACTORS,
  PRESSURE_FACTORS,
  ENERGY_FACTORS,
  POWER_FACTORS,
  TORQUE_FACTORS,
  ELECTRICAL_FACTORS,
  RADIOACTIVITY_FACTORS,
  METRIC_IMPERIAL_COMPARISONS,
  WORKED_EXAMPLES,
  COMMON_MISTAKES,
  REFERENCE_FAQS,
  AUTHORITATIVE_REFERENCES,
  INTERNAL_TOOL_LINKS,
  ConversionFactorRow
} from "../data/referenceData";

const DERIVED_QUANTITY_LINKS: Record<string, { route: string; label: string }> = {
  "Force": { route: "/force-conversion", label: "Force Converter" },
  "Pressure, stress": { route: "/pressure-conversion", label: "Pressure Converter" },
  "Energy, work, quantity of heat": { route: "/energy-conversion", label: "Energy Converter" },
  "Power, radiant flux": { route: "/power-conversion", label: "Power Converter" },
  "Electric charge, quantity of electricity": { route: "/electric-charge-conversion", label: "Electric Charge Converter" },
  "Electric potential difference, electromotive force": { route: "/voltage-conversion", label: "Voltage Converter" },
  "Capacitance": { route: "/capacitance-conversion", label: "Capacitance Converter" },
  "Electric resistance": { route: "/electric-resistance-conversion", label: "Resistance Converter" },
  "Inductance": { route: "/inductance-conversion", label: "Inductance Converter" },
  "Frequency": { route: "/frequency-conversion", label: "Frequency Converter" },
  "Radioactivity (decays per unit time)": { route: "/radioactivity-conversion", label: "Radioactivity Converter" },
};

interface UnitConversionReferenceProps {
  onNavigate: (routeStr: string, e?: React.MouseEvent) => void;
}

export default function UnitConversionReference({ onNavigate }: UnitConversionReferenceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
    }, 2000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Filter factors across tables if user uses the quick lookup
  const filterFactors = (rows: ConversionFactorRow[]) => {
    if (!searchQuery.trim()) return rows;
    const q = searchQuery.toLowerCase();
    return rows.filter(
      r =>
        r.fromUnit.toLowerCase().includes(q) ||
        r.fromSymbol.toLowerCase().includes(q) ||
        r.toUnit.toLowerCase().includes(q) ||
        r.toSymbol.toLowerCase().includes(q) ||
        r.factor.toLowerCase().includes(q) ||
        r.notes.toLowerCase().includes(q)
    );
  };

  const filteredLength = useMemo(() => filterFactors(LENGTH_FACTORS), [searchQuery]);
  const filteredArea = useMemo(() => filterFactors(AREA_FACTORS), [searchQuery]);
  const filteredVolume = useMemo(() => filterFactors(VOLUME_FACTORS), [searchQuery]);
  const filteredMass = useMemo(() => filterFactors(MASS_FACTORS), [searchQuery]);
  const filteredTime = useMemo(() => filterFactors(TIME_FACTORS), [searchQuery]);
  const filteredSpeed = useMemo(() => filterFactors(SPEED_FACTORS), [searchQuery]);
  const filteredAcc = useMemo(() => filterFactors(ACCELERATION_FACTORS), [searchQuery]);
  const filteredForce = useMemo(() => filterFactors(FORCE_FACTORS), [searchQuery]);
  const filteredPressure = useMemo(() => filterFactors(PRESSURE_FACTORS), [searchQuery]);
  const filteredEnergy = useMemo(() => filterFactors(ENERGY_FACTORS), [searchQuery]);
  const filteredPower = useMemo(() => filterFactors(POWER_FACTORS), [searchQuery]);
  const filteredTorque = useMemo(() => filterFactors(TORQUE_FACTORS), [searchQuery]);
  const filteredElec = useMemo(() => filterFactors(ELECTRICAL_FACTORS), [searchQuery]);
  const filteredRad = useMemo(() => filterFactors(RADIOACTIVITY_FACTORS), [searchQuery]);

  const totalFilteredCount =
    filteredLength.length +
    filteredArea.length +
    filteredVolume.length +
    filteredMass.length +
    filteredTime.length +
    filteredSpeed.length +
    filteredAcc.length +
    filteredForce.length +
    filteredPressure.length +
    filteredEnergy.length +
    filteredPower.length +
    filteredTorque.length +
    filteredElec.length +
    filteredRad.length;

  return (
    <div className="w-full bg-[var(--background)] text-slate-800 dark:text-slate-200 transition-colors duration-150">
      {/* Top Breadcrumb & Metadata Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <button
              onClick={(e) => onNavigate("/", e)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none"
            >
              Home
            </button>
            <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-400" />
            <span className="text-slate-600 dark:text-slate-300">Resources</span>
            <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-slate-400" />
            <span className="text-slate-900 dark:text-white font-medium truncate">Unit Conversion Reference</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-[var(--background)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Unit Conversion Reference: Conversion Factors, Formulas & SI Units
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A comprehensive metrological handbook and conversion factor reference grounded in the BIPM SI Brochure (9th Edition), NIST Special Publication 811, and ISO/IEC 80000. Formulated for students, scientists, practicing engineers, and precision researchers.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-500" /> Grounded in BIPM & NIST Standards
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-500" /> Exact 1959 Yard & Pound Alignment
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> Verified 2026 Metrology Revisions
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Article Content */}
        <main className="space-y-16 max-w-none">
          {/* Universal Search Bar */}
          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60 shadow-xs">
            <label htmlFor="reference-search" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Search Factors & Formulas
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="reference-search"
                type="text"
                placeholder="Search units (e.g. meter, psi, joule, pascal)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {searchQuery && (
              <div className="text-[11px] text-slate-500 dark:text-slate-400 flex justify-between items-center mt-2">
                <span>Matches: {totalFilteredCount}</span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  1. Introduction
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Measurement is the quantitative foundation of all empirical science, manufacturing, international commerce, and technological development. From the precision dimensions of nanoscale microprocessors to structural load tolerances in civil bridges, physical quantities must be communicated with unambiguous accuracy.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                However, humanity has developed multiple competing measurement traditions over centuries. While the international scientific and industrial community has largely standardized on the <strong>International System of Units (SI)</strong>, substantial portions of commerce and consumer industry—particularly in the United States and the United Kingdom—rely on <strong>US Customary</strong> and <strong>British Imperial</strong> units. This reference guide presents verified, mathematically exact conversion factors, scientific base definitions, step-by-step calculation techniques, and practical dimensional analysis protocols to ensure absolute consistency across disciplines.
              </p>
            </section>

            {/* 2. What Is Unit Conversion? */}
            <section id="what-is-unit-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Hash className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  2. What Is Unit Conversion?
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Unit conversion is the mathematical translation of a measured physical magnitude from one measurement scale to another without altering the physical quantity itself. Every physical measurement consists of two essential parts: a <strong>numerical value</strong> and a <strong>unit of measurement</strong>:
              </p>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center my-4">
                <MathFormula formula="\text{Physical Quantity} = Q = \{Q\} \cdot [Q]" displayMode />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                  where <MathFormula formula="\{Q\}" asInline /> is the numerical magnitude and <MathFormula formula="[Q]" asInline /> represents the physical unit dimension.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                When you convert between units, you alter the scale of <MathFormula formula="[Q]" asInline />. Because the physical reality of <MathFormula formula="Q" asInline /> remains invariant, the numerical magnitude <MathFormula formula="\{Q\}" asInline /> must change in exact inverse proportion. For instance, a distance measured as 1 meter is physically identical to 100 centimeters or approximately 3.28084 feet. The fundamental mathematical tool used to execute this translation safely is the <strong>conversion factor</strong>.
              </p>
            </section>

            {/* 3. SI Units */}
            <section id="si-units" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Atom className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  3. International System of Units (SI)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                The <strong>Système International d'Unités (SI)</strong> is the world's most widely adopted system of physical units, maintained by the Bureau International des Poids et Mesures (BIPM) under the Metre Convention. On May 20, 2019 (World Metrology Day), the SI underwent its most profound transformation in over a century: all seven base units were redefined not by physical artifact prototypes (such as the International Prototype of the Kilogram), but by fixing the exact numerical values of <strong>seven fundamental constants of nature</strong>. For an exhaustive guide to defining constants, historical derivations, and metric prefix hierarchies, consult our companion{" "}
                <a
                  href="/resources/si-units-reference"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/resources/si-units-reference");
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1"
                >
                  SI Units & Metric Prefixes Reference
                  <ExternalLink className="w-3 h-3" />
                </a>
                .
              </p>

              {/* 7 Base Units Table */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  The Seven SI Base Units & Their Defining Constants (2019 BIPM Definition)
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                        <th className="p-3">Physical Quantity</th>
                        <th className="p-3">Unit Name</th>
                        <th className="p-3">Symbol</th>
                        <th className="p-3">Defining Constant</th>
                        <th className="p-3">Numerical Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                      {SI_BASE_UNITS.map((u, i) => (
                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                          <td className="p-3 font-medium text-slate-900 dark:text-white">{u.quantity}</td>
                          <td className="p-3 font-semibold text-blue-600 dark:text-blue-400">{u.name}</td>
                          <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{u.symbol}</td>
                          <td className="p-3 text-slate-600 dark:text-slate-300">{u.definingConstant}</td>
                          <td className="p-3 font-mono text-xs text-slate-500 dark:text-slate-400">{u.definingValue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Common Derived Units Table */}
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Coherent SI Derived Units with Special Names and Symbols
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Derived units are formed by combining base units through algebraic multiplication and division. Twenty-two derived units possess special names approved by the General Conference on Weights and Measures (CGPM).
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                        <th className="p-3">Quantity</th>
                        <th className="p-3">Derived Unit</th>
                        <th className="p-3">Symbol</th>
                        <th className="p-3">In Other SI Units</th>
                        <th className="p-3">In SI Base Units</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                      {SI_DERIVED_UNITS.slice(0, 14).map((d, idx) => {
                        const targetTool = DERIVED_QUANTITY_LINKS[d.quantity];
                        return (
                          <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                            <td className="p-3 font-medium text-slate-900 dark:text-white">
                              {targetTool ? (
                                <a
                                  href={targetTool.route}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate(targetTool.route);
                                  }}
                                  className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
                                  title={`Open interactive ${targetTool.label}`}
                                >
                                  {d.quantity}
                                  <ArrowRight className="w-3 h-3 text-slate-400" />
                                </a>
                              ) : (
                                d.quantity
                              )}
                            </td>
                            <td className="p-3 font-semibold text-blue-600 dark:text-blue-400">
                              {targetTool ? (
                                <a
                                  href={targetTool.route}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onNavigate(targetTool.route);
                                  }}
                                  className="hover:underline"
                                  title={`Open ${targetTool.label}`}
                                >
                                  {d.name}
                                </a>
                              ) : (
                                d.name
                              )}
                            </td>
                            <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{d.symbol}</td>
                            <td className="p-3 font-mono text-slate-600 dark:text-slate-300">{d.inOtherUnits}</td>
                            <td className="p-3 font-mono text-xs text-slate-500 dark:text-slate-400">{d.inBaseUnits}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 4. SI Prefixes */}
            <section id="si-prefixes" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  4. SI Prefixes (Quetta to Quecto)
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                SI prefixes are standardized morphemes prefixed to unit names to produce decimal multiples and submultiples. In November 2022, the 27th CGPM expanded the prefix range by adding four new official prefixes: <strong>ronna (R, 10²⁷)</strong>, <strong>quetta (Q, 10³⁰)</strong>, <strong>ronto (r, 10⁻²⁷)</strong>, and <strong>quecto (q, 10⁻³⁰)</strong>. The table below presents the complete 24-prefix hierarchy.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">Prefix</th>
                      <th className="p-3">Symbol</th>
                      <th className="p-3">Multiplier</th>
                      <th className="p-3">Decimal Word (Short Scale)</th>
                      <th className="p-3">Physical Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {SI_PREFIXES.map((p, idx) => (
                      <tr key={idx} className={`hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors ${p.factorExponent > 24 || p.factorExponent < -24 ? "bg-amber-50/40 dark:bg-amber-950/20" : ""}`}>
                        <td className="p-3 font-semibold text-slate-900 dark:text-white">
                          {p.prefix}
                          {(p.factorExponent >= 27 || p.factorExponent <= -27) && (
                            <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                              2022 CGPM
                            </span>
                          )}
                        </td>
                        <td className="p-3 font-mono font-bold text-blue-600 dark:text-blue-400">{p.symbol}</td>
                        <td className="p-3 font-mono text-slate-700 dark:text-slate-300">{p.multiplier}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-400">{p.words}</td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400 italic">{p.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Decimal vs Binary Callout */}
              <div className="p-5 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/70 dark:bg-blue-950/30 space-y-2">
                <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-sm">
                  <Info className="w-4 h-4" />
                  <span>Crucial Distinction: Decimal SI Prefixes vs. Binary IEC Prefixes</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  In telecommunications, disk drive manufacturing, and SI physics, prefixes represent powers of ten: <MathFormula formula="1\text{ kB} = 10^3 = 1,000\text{ bytes}" asInline /> and <MathFormula formula="1\text{ TB} = 10^{12} = 1,000,000,000,000\text{ bytes}" asInline />. However, in semiconductor RAM memory architecture, binary powers of two govern: <MathFormula formula="1\text{ KiB (kibibyte)} = 2^{10} = 1,024\text{ bytes}" asInline /> and <MathFormula formula="1\text{ TiB (tebibyte)} = 2^{40} = 1,099,511,627,776\text{ bytes}" asInline />. Confusing these standards leads to a ~9.1% perceived discrepancy when an operating system displaying binary gibibytes reads a decimal terabyte hard drive.
                </p>
              </div>
            </section>

            {/* Helper Component for Rendering Tables */}
            {/* 5. Length Conversion Factors */}
            <section id="length-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Ruler className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  5. Length Conversion Factors
                </h2>
                <a
                  href="/length-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/length-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Length Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The base SI unit of length is the meter (<MathFormula formula="\text{m}" asInline />). Under the 1959 International Yard and Pound Agreement, all Anglo-American length units are defined by exact metric equivalents: <MathFormula formula="1\text{ yard} \equiv 0.9144\text{ m}" asInline /> and <MathFormula formula="1\text{ inch} \equiv 25.4\text{ mm}" asInline />.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By (Factor)</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredLength.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                        <td className="p-3 text-right">
                          <button
                            onClick={() => copyToClipboard(row.factor, `len-${idx}`)}
                            title="Copy Factor"
                            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            {copiedText === `len-${idx}` ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Area Conversion Factors */}
            <section id="area-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  6. Area Conversion Factors
                </h2>
                <a
                  href="/area-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/area-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Area Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Area conversions require squaring linear conversion factors. One square foot is <MathFormula formula="(0.3048\text{ m})^2 = 0.09290304\text{ m}^2" asInline /> exactly.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredArea.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 7. Volume Conversion Factors */}
            <section id="volume-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  7. Volume & Capacity Conversion Factors
                </h2>
                <a
                  href="/volume-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/volume-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Volume Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Pay careful attention to <strong>US Liquid Gallons (231 cu in = 3.785411784 L)</strong> versus <strong>British Imperial Gallons (exactly 4.54609 L)</strong>. An Imperial gallon is ~20.1% larger than a US liquid gallon.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredVolume.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. Mass & Weight Conversion Factors */}
            <section id="mass-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  8. Mass & Weight Conversion Factors
                </h2>
                <a
                  href="/weight-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/weight-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Weight & Mass Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The international avoirdupois pound is legally defined as exactly <MathFormula formula="1\text{ lb} \equiv 0.45359237\text{ kg}" asInline />. Troy ounces (used for gold, silver, and platinum) equal 31.1034768 grams, whereas standard avoirdupois ounces equal 28.349523125 grams.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredMass.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 9. Time Conversion Factors */}
            <section id="time-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  9. Time Conversion Factors
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The SI base unit of time is the second (<MathFormula formula="\text{s}" asInline />). For scientific work, the <strong>Julian Year</strong> is standardized at exactly 365.25 days (31,557,600 s).
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredTime.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 10. Temperature Conversion Formulas */}
            <section id="temperature-conversion" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Thermometer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  10. Temperature Conversion Formulas
                </h2>
                <a
                  href="/temperature-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/temperature-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Temperature Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Unlike length or mass, temperature measurements represent <strong>affine scales with non-coincident zero baselines</strong>. As a result, you cannot convert temperatures through simple multiplicative factors alone. Both an offset addition/subtraction and a scale factor are required.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/50 space-y-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Celsius to Fahrenheit</h3>
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950 font-mono text-center">
                    <MathFormula formula="T(^\circ\text{F}) = \left( T(^\circ\text{C}) \times \frac{9}{5} \right) + 32" displayMode />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Multiply Celsius by 1.8, then add 32. Water freezes at 0 °C (32 °F) and boils at 100 °C (212 °F).
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/50 space-y-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Fahrenheit to Celsius</h3>
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950 font-mono text-center">
                    <MathFormula formula="T(^\circ\text{C}) = \left( T(^\circ\text{F}) - 32 \right) \times \frac{5}{9}" displayMode />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Subtract 32 first, then multiply by 5/9 (or divide by 1.8).
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/50 space-y-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Celsius to Kelvin</h3>
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950 font-mono text-center">
                    <MathFormula formula="T(\text{K}) = T(^\circ\text{C}) + 273.15" displayMode />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Kelvin is the thermodynamic SI base unit. Absolute zero is exactly 0 K = -273.15 °C.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/50 space-y-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Fahrenheit to Rankine</h3>
                  <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950 font-mono text-center">
                    <MathFormula formula="T(^\circ\text{R}) = T(^\circ\text{F}) + 459.67" displayMode />
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Rankine is the absolute thermodynamic temperature scale with Fahrenheit degree spacing.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <strong>Important Note on Temperature Intervals (<MathFormula formula="\Delta T" asInline />):</strong> When converting a temperature change or heat gradient rather than a specific thermometer reading, do NOT add or subtract the 32 °F offset! A change of <MathFormula formula="1^\circ\text{C} = 1\text{ K} = 1.8^\circ\text{F} = 1.8^\circ\text{R}" asInline />.
              </div>
            </section>

            {/* 11. Speed & Velocity Conversion */}
            <section id="speed-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  11. Speed & Velocity Conversion Factors
                </h2>
                <a
                  href="/speed-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/speed-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Speed Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredSpeed.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 12. Acceleration */}
            <section id="acceleration-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  12. Acceleration Conversion Factors
                </h2>
                <a
                  href="/acceleration-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/acceleration-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Acceleration Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredAcc.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 13. Force */}
            <section id="force-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  13. Force Conversion Factors
                </h2>
                <a
                  href="/force-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/force-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Force Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredForce.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 14. Pressure Conversion Factors */}
            <section id="pressure-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  14. Pressure Conversion Factors
                </h2>
                <a
                  href="/pressure-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/pressure-conversion");
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Pressure Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The SI unit is the pascal (<MathFormula formula="1\text{ Pa} = 1\text{ N/m}^2" asInline />). One bar is defined as exactly <MathFormula formula="100,000\text{ Pa}" asInline />, and standard atmospheric pressure is <MathFormula formula="101,325\text{ Pa}" asInline />. For heavy industrial stress analysis, hydraulic head, and vacuum ratings, consult our companion{" "}
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
                .
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredPressure.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 15. Energy & Work */}
            <section id="energy-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  15. Energy & Work Conversion Factors
                </h2>
                <a
                  href="/energy-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/energy-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Energy Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredEnergy.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 16. Power Conversion */}
            <section id="power-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Flame className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  16. Power Conversion Factors
                </h2>
                <a
                  href="/power-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/power-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Power Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Notice the distinction between <strong>Mechanical Horsepower (hp ≈ 745.7 W)</strong> and <strong>Metric Horsepower (PS ≈ 735.5 W)</strong>.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Authority / Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredPower.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 17. Torque */}
            <section id="torque-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  17. Torque Conversion Factors
                </h2>
                <a
                  href="/torque-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/torque-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Interactive Torque Converter <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredTorque.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 18. Frequency & Rotational Speed */}
            <section id="frequency-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Radio className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  18. Frequency & Rotational Speed Conversion
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Frequency in hertz (<MathFormula formula="1\text{ Hz} = 1\text{ cycle per second}" asInline />) converts to rotational angular velocity via <MathFormula formula="\omega = 2\pi f" asInline />:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">1 Hertz (Hz)</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">= 60 revolutions per minute (RPM)</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">= 2π rad/s ≈ 6.283185 rad/s</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">1 RPM</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">= 1/60 Hz ≈ 0.016667 Hz</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">= π/30 rad/s ≈ 0.104720 rad/s</div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">1 Radian / Second (rad/s)</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">= 1 / (2π) Hz ≈ 0.159155 Hz</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">= 30/π RPM ≈ 9.549297 RPM</div>
                </div>
              </div>
            </section>

            {/* 19. Electrical Units */}
            <section id="electrical-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between flex-wrap gap-2">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  19. Electrical Units Conversion
                </h2>
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href="/electric-resistance-conversion"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/electric-resistance-conversion");
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Resistance Tools <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/voltage-conversion"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/voltage-conversion");
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Voltage Tools <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/electricity-conversion"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate("/electricity-conversion");
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Current Tools <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Electrical units derive from Maxwell's equations and Ohm's Law. For circuit analysis, complex AC impedance, and electronics design, consult our companion{" "}
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
                </a>{" "}
                or use the interactive{" "}
                <a
                  href="/calculators/electrical-calculators/ohms-law-calculator"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/calculators/electrical-calculators/ohms-law-calculator");
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  Ohm's Law Calculator
                </a>
                .
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredElec.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 20. Radioactivity & Radiation */}
            <section id="radioactivity-conversion" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center justify-between">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Atom className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  20. Radioactivity & Radiation Units
                </h2>
                <a
                  href="/radioactivity-conversion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/radioactivity-conversion", e);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Radioactivity Tools <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">From Unit</th>
                      <th className="p-3">To Unit</th>
                      <th className="p-3">Multiply By</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {filteredRad.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.fromUnit} ({row.fromSymbol})</td>
                        <td className="p-3 text-blue-600 dark:text-blue-400 font-medium">{row.toUnit} ({row.toSymbol})</td>
                        <td className="p-3 font-mono font-bold text-slate-800 dark:text-slate-200">{row.factor}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${row.exact ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`}>
                            {row.exact ? "Exact" : "Approx."}
                          </span>
                        </td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 21. Metric to Imperial Reference */}
            <section id="metric-to-imperial" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  21. Metric to Imperial & US Customary Reference
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                For everyday work, engineering drawings, and international logistics, the quick reference table below contrasts core metric units against their common imperial counterparts with practical real-world contexts.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                      <th className="p-3">Measurement Category</th>
                      <th className="p-3">Metric Quantity</th>
                      <th className="p-3">Imperial / US Equivalent</th>
                      <th className="p-3">Defining Relationship</th>
                      <th className="p-3">Practical Scenario</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-[var(--surface)] dark:bg-slate-950">
                    {METRIC_IMPERIAL_COMPARISONS.map((m, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                        <td className="p-3 font-semibold text-slate-900 dark:text-white">{m.category}</td>
                        <td className="p-3 font-mono text-blue-600 dark:text-blue-400 font-medium">{m.metricUnit}</td>
                        <td className="p-3 font-mono text-slate-700 dark:text-slate-300 font-medium">{m.imperialUnit}</td>
                        <td className="p-3 font-mono text-xs text-slate-600 dark:text-slate-400">{m.relationship}</td>
                        <td className="p-3 text-xs text-slate-500 dark:text-slate-400">{m.practicalExample}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 22. Exact vs. Approximate */}
            <section id="exact-vs-approximate" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  22. Exact vs. Approximate Conversion Factors
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                One of the most frequent misconceptions in metrology is assuming that all conversion factors are rounded approximations. In truth, conversion factors fall into two distinct legal and mathematical categories:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 text-sm">
                    <Check className="w-4 h-4" />
                    <span>Exact by Definition (Infinite Precision)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    These factors are established by international treaty or scientific decree. They contain an infinite number of significant figures:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside pt-1 font-mono">
                    <li>1 inch = 25.4 millimeters (exact)</li>
                    <li>1 foot = 0.3048 meter (exact)</li>
                    <li>1 avoirdupois pound = 0.45359237 kg (exact)</li>
                    <li>1 nautical mile = 1,852 meters (exact)</li>
                    <li>1 atmosphere = 101,325 pascals (exact)</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-300 text-sm">
                    <Info className="w-4 h-4" />
                    <span>Approximate / Repeating Ratios</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    These arise when conversions involve irrational numbers (such as <MathFormula formula="\pi" asInline />), repeating fractions (such as 5/9), or empirical astronomical constants:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-400 list-disc list-inside pt-1 font-mono">
                    <li>1 radian = 180° / π ≈ 57.29577951°</li>
                    <li>1 nautical mile / 1 statute mile ≈ 1.150779448 mi</li>
                    <li>1 torr = 101,325 / 760 Pa ≈ 133.3223684 Pa</li>
                    <li>1 slug ≈ 14.5939029 kg</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 23. How Conversion Factors Work */}
            <section id="how-conversion-works" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  23. How Conversion Factors Work: The Factor-Label Method
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                The standard procedure used across engineering and physical chemistry is the <strong>factor-label method</strong> (also known as <strong>dimensional analysis</strong> or the <strong>unit-factor method</strong>). Because a conversion factor equates two representations of the identical physical reality:
              </p>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center my-4">
                <MathFormula formula="\frac{1\text{ inch}}{25.4\text{ mm}} = 1 \quad\text{and}\quad \frac{25.4\text{ mm}}{1\text{ inch}} = 1" displayMode />
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Because multiplying any quantity by 1 preserves its physical identity, you can chain multiple conversion factors in sequence. The goal is to orient the fractions such that unwanted units appear in both the numerator and denominator, canceling out algebraically until only the desired target unit remains:
              </p>
              <div className="p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20 text-center font-mono text-xs sm:text-sm my-4">
                <MathFormula formula="X\text{ [Target]} = Y\text{ [Original]} \times \left( \frac{\text{Target Unit}}{\text{Original Unit}} \right)" displayMode />
              </div>
            </section>

            {/* 24. Step-by-Step Conversion Examples */}
            <section id="formula-examples" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  24. Step-by-Step Conversion Formula Examples
                </h2>
              </div>

              <div className="space-y-6">
                {WORKED_EXAMPLES.map((ex, idx) => (
                  <div key={idx} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 shadow-xs space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                      <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {ex.title}
                      </h3>
                      <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 w-fit font-mono">
                        Target: {ex.targetUnit}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      <strong>Problem Statement:</strong> {ex.problem}
                    </p>

                    <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950 font-mono text-xs sm:text-sm text-center">
                      <MathFormula formula={ex.formula} displayMode />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Step-by-Step Solution:
                      </h4>
                      <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {ex.steps.map((st, sIdx) => (
                          <li key={sIdx} className="leading-relaxed pl-1">{st}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
                      <div className="font-bold text-emerald-700 dark:text-emerald-400">
                        Result: {ex.finalAnswer}
                      </div>
                      <div className="text-slate-500 dark:text-slate-400 italic text-xs max-w-md">
                        {ex.keyTakeaway}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 25. Square & Cubic Conversions */}
            <section id="square-cubic-conversions" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  25. Square & Cubic Unit Conversions
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                When converting derived units of area (2 dimensions) or volume (3 dimensions), you must <strong>raise both the conversion factor and its unit to the appropriate exponent</strong>. A common student error is multiplying area by a 1-dimensional length factor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/50 space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Square (Area) Scaling Law</h3>
                  <MathFormula formula="1\text{ m} = 100\text{ cm} \implies 1\text{ m}^2 = (100\text{ cm})^2 = 10,000\text{ cm}^2" displayMode />
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                    Because area spans two dimensions, the multiplier is <MathFormula formula="100^2 = 10^4" asInline />, not 100.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/50 space-y-2">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">Cubic (Volume) Scaling Law</h3>
                  <MathFormula formula="1\text{ yd} = 3\text{ ft} \implies 1\text{ yd}^3 = (3\text{ ft})^3 = 27\text{ ft}^3" displayMode />
                  <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
                    Because volume spans three dimensions, 1 cubic yard contains 27 cubic feet, not 3 or 9.
                  </p>
                </div>
              </div>
            </section>

            {/* 26. Significant Figures & Rounding */}
            <section id="sig-figs-rounding" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Hash className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  26. Significant Figures & Rounding Precision
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                In practical engineering and physical science, calculating unit conversions must respect the experimental uncertainty of the original measurement:
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40">
                  <strong className="text-slate-900 dark:text-white">1. Exact Conversion Factors Have Infinite Significant Figures:</strong>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    Because <MathFormula formula="1\text{ in} = 25.4\text{ mm}" asInline /> is an exact legal definition, the factor 25.4 does not limit the number of significant digits in your calculation. A measurement of 12.000 inches converts to exactly 304.80 millimeters (5 sig figs preserved).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40">
                  <strong className="text-slate-900 dark:text-white">2. Avoid Spurious False Precision:</strong>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    If an automobile speed limit sign reads 65 mph (which has 2 significant figures), reporting the metric equivalent as 104.60736 km/h gives a false illusion of micrometer-level radar precision. Round to 105 km/h (or 100 km/h for approximate road signs).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40">
                  <strong className="text-slate-900 dark:text-white">3. Intermediate Rounding Prevention:</strong>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    When performing multi-step engineering calculations, retain all decimal places in calculator registers until the final step, then round once to match the least precise input measurement.
                  </p>
                </div>
              </div>
            </section>

            {/* 27. Common Unit Conversion Mistakes */}
            <section id="common-mistakes" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  27. Common Unit Conversion Mistakes to Avoid
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Unit conversion errors have caused infamous engineering catastrophes, including the 1999 loss of NASA's $125 million <strong>Mars Climate Orbiter</strong> (caused when thruster software produced impulse data in pound-force seconds while navigation software expected metric newton-seconds). Below are the seven most common pitfalls:
              </p>

              <div className="grid grid-cols-1 gap-4">
                {COMMON_MISTAKES.map((m) => (
                  <div key={m.id} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-2">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {m.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {m.description}
                    </p>
                    <div className="p-3 rounded-lg bg-red-50/50 dark:bg-red-950/20 border border-red-200/60 dark:border-red-900/40 text-xs text-red-900 dark:text-red-200">
                      <strong>Mistake Example:</strong> {m.example}
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200">
                      <strong>Correct Procedure:</strong> {m.correctMethod}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 28. UnitsConvertors Tools Directory */}
            <section id="conversion-tools" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <Calculator className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  28. UnitsConvertors Interactive Tools Directory
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Need to perform rapid interactive conversions? Use our specialized conversion calculators, engineered with high-precision floating point arithmetic, instant unit swapping, and formula derivations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                {INTERNAL_TOOL_LINKS.map((tool, idx) => (
                  <a
                    key={idx}
                    href={tool.route}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(tool.route);
                    }}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60 text-left hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-sm transition-all group focus-visible:outline-none block"
                  >
                    <div className="flex items-center justify-between font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <span>{tool.name}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                      {tool.description}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* 29. Frequently Asked Questions (FAQ) */}
            <section id="faq" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  29. Frequently Asked Questions
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Common questions regarding international measurement standards, conversion rules, and unit definitions.
              </p>

              <div className="space-y-3 pt-2">
                {REFERENCE_FAQS.map((faq, idx) => {
                  const isExpanded = expandedFaq === idx;
                  const contentId = `ref-faq-${idx}`;
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
                        <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${isExpanded ? "rotate-180 text-blue-500" : ""}`} />
                      </button>
                      {isExpanded && (
                        <div id={contentId} role="region" className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50/50 dark:bg-slate-900/20">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 30. Authoritative References & Standards */}
            <section id="references" className="scroll-mt-24 space-y-4">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  30. Authoritative References & Standards
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                All conversion factors and definitions published on this page are grounded in the following official international metrology standards and publications:
              </p>

              <div className="space-y-3">
                {AUTHORITATIVE_REFERENCES.map((ref, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/40 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                        {ref.title}
                      </h3>
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {ref.organization}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {ref.description}
                    </p>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800/80">
                      Citation: {ref.citation}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Companion Metrology Reference Resources */}
            <section className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-3">
              <div className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Companion Metrology Reference Resources
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Deepen your understanding of modern measurement standards, defining physical constants, and advanced engineering formulations:
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/resources/si-units-reference"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/resources/si-units-reference");
                  }}
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <Scale className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  SI Units & Metric Prefixes Reference
                </a>
                <a
                  href="/resources/engineering-units-reference"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/resources/engineering-units-reference");
                  }}
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <Calculator className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Engineering Units & Conversion Reference
                </a>
                <a
                  href="/calculators"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/calculators");
                  }}
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors inline-flex items-center gap-2 shadow-2xs"
                >
                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Engineering Calculators Directory
                </a>
              </div>
            </section>

          </main>
      </div>
    </div>
  );
}
