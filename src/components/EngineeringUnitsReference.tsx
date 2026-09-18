import React, { useState, useMemo } from "react";
import {
  Ruler,
  Scale,
  Clock,
  Zap,
  Thermometer,
  Gauge,
  Activity,
  Waves,
  Search,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  HelpCircle,
  FileText,
  ArrowRight,
  ShieldCheck,
  Compass,
  Info,
  AlertTriangle,
  Calculator,
  Sparkles,
  BookOpen,
  ArrowUpDown,
  Cpu,
  Flame,
  Droplets,
  Layers,
  CheckCircle,
  Box
} from "lucide-react";
import MathFormula from "./MathFormula";
import {
  ENGINEERING_SECTIONS,
  ENGINEERING_CONVERSION_FACTORS,
  ENGINEERING_FORMULAS,
  ENGINEERING_FAQS,
  WORKED_ENGINEERING_EXAMPLES,
  ENGINEERING_STANDARDS_REFERENCES
} from "../data/engineeringReferenceData";

interface EngineeringUnitsReferenceProps {
  onNavigate: (category: string, fromUnit?: string, toUnit?: string, extraPage?: string, toolSlug?: string) => void;
}

export default function EngineeringUnitsReference({ onNavigate }: EngineeringUnitsReferenceProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Filter conversion factors
  const filteredFactors = useMemo(() => {
    if (!searchQuery.trim()) return ENGINEERING_CONVERSION_FACTORS;
    const q = searchQuery.toLowerCase().trim();
    return ENGINEERING_CONVERSION_FACTORS.filter(
      (f) =>
        f.quantity.toLowerCase().includes(q) ||
        f.siUnit.toLowerCase().includes(q) ||
        f.siSymbol.toLowerCase().includes(q) ||
        f.usUnit.toLowerCase().includes(q) ||
        f.usSymbol.toLowerCase().includes(q) ||
        f.conversionEquation.toLowerCase().includes(q) ||
        f.notes.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Filter formulas
  const filteredFormulas = useMemo(() => {
    if (!searchQuery.trim()) return ENGINEERING_FORMULAS;
    const q = searchQuery.toLowerCase().trim();
    return ENGINEERING_FORMULAS.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.formula.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q) ||
        f.engineeringContext.toLowerCase().includes(q) ||
        f.variables.some((v) => v.name.toLowerCase().includes(q) || v.symbol.toLowerCase().includes(q) || v.siUnit.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  return (
    <div className="w-full bg-[var(--background)] dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen">
      {/* Breadcrumb Header Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs sm:text-sm">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => onNavigate("/")}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-slate-400 dark:text-slate-500">Resources</span>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="font-semibold text-slate-900 dark:text-white truncate">
              Engineering Units & Conversion Reference
            </span>
          </nav>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>BIPM, NIST SP 811 & ISO 80000 Aligned</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col gap-4 max-w-4xl">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Engineering Units & Conversion Reference
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              An authoritative handbook of engineering units, dimensional relationships, exact conversion factors, and physical equations across mechanical, electrical, thermal, and fluid systems. Grounded in the BIPM SI Brochure, NIST Special Publication 811, and ISO/IEC 80000 standards.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-500" /> Exact 1959 Yard & Pound Standards
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-500" /> Absolute vs. Gauge Pressure Rigor
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono">
                <Check className="w-3.5 h-3.5 text-emerald-500" /> Distinct US Customary & Imperial Volumes
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <main className="space-y-16 max-w-none">
          {/* Quick Table of Contents Grid */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60 shadow-xs">
            <div className="flex items-center gap-2 mb-4 font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Quick Reference Navigation</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs">
              {ENGINEERING_SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors truncate font-medium"
                >
                  {sec.title}
                </a>
              ))}
            </div>
          </div>

          {/* Universal Search Bar */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[var(--surface)] dark:bg-slate-900/60 shadow-xs">
            <label htmlFor="engineering-search" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Filter Engineering Factors, Units & Formulas
            </label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                id="engineering-search"
                type="text"
                placeholder="Search by quantity, unit, symbol, formula, or keyword (e.g. pascal, torque, psi, ohm, flow)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {searchQuery && (
              <div className="text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center mt-2.5">
                <span>
                  Found {filteredFactors.length} factors and {filteredFormulas.length} formulas matching &quot;{searchQuery}&quot;
                </span>
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* 1. Engineering Units: An Overview */}
          <section id="overview" className="scroll-mt-24 space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                1. Engineering Units: An Overview
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Engineering is the application of physical sciences and mathematics to design, fabricate, and operate structures, machines, electronic systems, and chemical processes. In pure theoretical physics, equations are often analyzed in abstract dimensionless forms or using natural units. In contrast, <strong>engineering requires tangible, concrete units</strong> scaled to the physical dimensions of human machinery, structural loads, and energy delivery networks.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Measurement units in engineering serve three critical functions:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Structural & Machine Safety
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Yield strengths, working load limits, and pressure relief setpoints rely on exact unit definitions to maintain design factors of safety and prevent physical failure.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Global Interchangeability
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  International supply chains require precise dimensional harmonization—such as metric fastener thread pitches (ISO) versus Unified National threads (ANSI/ASME).
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  Coherence in Computation
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Coherent unit systems prevent conversion errors in finite element analysis (FEA), computational fluid dynamics (CFD), and embedded control algorithms.
                </p>
              </div>
            </div>
          </section>

          {/* 2. SI Units Used in Engineering */}
          <section id="si-in-engineering" className="scroll-mt-24 space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                2. SI Units Used in Engineering
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              The <strong>International System of Units (SI)</strong> is the global standard across international engineering codes (ISO, IEC, IEEE). The greatest operational advantage of the SI is <em>coherence</em>: derived units are obtained from base units through pure multiplication or division with no arbitrary numerical factors. For in-depth exploration of the seven fundamental defining constants and metric prefixes, consult the companion{" "}
              <button
                onClick={() => onNavigate("/resources/si-units-reference")}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-1"
              >
                SI Units & Metric Prefixes Reference
                <ExternalLink className="w-3 h-3" />
              </button>
              .
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Physical Quantity</th>
                    <th className="px-4 py-3">Coherent SI Unit</th>
                    <th className="px-4 py-3">Symbol</th>
                    <th className="px-4 py-3">Base Unit Equivalence</th>
                    <th className="px-4 py-3">Practical Engineering Scales</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono text-xs">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Force</td>
                    <td className="px-4 py-3 font-sans">Newton</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">N</td>
                    <td className="px-4 py-3">kg·m·s⁻²</td>
                    <td className="px-4 py-3 font-sans">kN, MN</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Pressure & Stress</td>
                    <td className="px-4 py-3 font-sans">Pascal</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">Pa</td>
                    <td className="px-4 py-3">N/m² = kg·m⁻¹·s⁻²</td>
                    <td className="px-4 py-3 font-sans">kPa, MPa (N/mm²), GPa, bar</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Work, Energy & Heat</td>
                    <td className="px-4 py-3 font-sans">Joule</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">J</td>
                    <td className="px-4 py-3">N·m = kg·m²·s⁻²</td>
                    <td className="px-4 py-3 font-sans">kJ, MJ, kW·h</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Power & Heat Flow</td>
                    <td className="px-4 py-3 font-sans">Watt</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">W</td>
                    <td className="px-4 py-3">J/s = kg·m²·s⁻³</td>
                    <td className="px-4 py-3 font-sans">kW, MW, GW</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Electric Potential</td>
                    <td className="px-4 py-3 font-sans">Volt</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">V</td>
                    <td className="px-4 py-3">W/A = kg·m²·s⁻³·A⁻¹</td>
                    <td className="px-4 py-3 font-sans">mV, V, kV</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Electrical Resistance</td>
                    <td className="px-4 py-3 font-sans">Ohm</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">Ω</td>
                    <td className="px-4 py-3">V/A = kg·m²·s⁻³·A⁻²</td>
                    <td className="px-4 py-3 font-sans">mΩ, Ω, kΩ, MΩ</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Electric Capacitance</td>
                    <td className="px-4 py-3 font-sans">Farad</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">F</td>
                    <td className="px-4 py-3">C/V = kg⁻¹·m⁻²·s⁴·A²</td>
                    <td className="px-4 py-3 font-sans">pF, nF, µF, mF</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Magnetic Inductance</td>
                    <td className="px-4 py-3 font-sans">Henry</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">H</td>
                    <td className="px-4 py-3">Wb/A = kg·m²·s⁻²·A⁻²</td>
                    <td className="px-4 py-3 font-sans">µH, mH, H</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Frequency</td>
                    <td className="px-4 py-3 font-sans">Hertz</td>
                    <td className="px-4 py-3 font-bold text-blue-600 dark:text-blue-400">Hz</td>
                    <td className="px-4 py-3">s⁻¹</td>
                    <td className="px-4 py-3 font-sans">Hz, kHz, MHz, GHz</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 3. Mechanical Engineering Units */}
          <section id="mechanical-units" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Ruler className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                3. Mechanical Engineering Units
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Mechanical engineering bridges solid mechanics, dynamics, kinematics, materials science, and fluid machinery. Sizing gears, shafts, fasteners, and hydraulic rams requires rigorous differentiation between force, pressure, torque, and stress.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Force */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Force</h3>
                  <button
                    onClick={() => onNavigate("/force-conversion")}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Force Converter <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  In SI, force is measured in Newtons (<span className="font-mono font-bold">1 N = 1 kg·m/s²</span>). In US customary engineering, the primary unit is the pound-force (<span className="font-mono font-bold">lbf</span>), defined as the gravitational force exerted on 1 avoirdupois pound mass under standard gravity (<span className="font-mono">9.80665 m/s²</span>).
                </p>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
                  <div>1 lbf = 4.448 221 615 N (exact)</div>
                  <div>1 kip = 1,000 lbf = 4.448 222 kN</div>
                  <div>1 N = 100,000 dyn = 0.224 809 lbf</div>
                </div>
              </div>

              {/* Torque */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Torque & Moment</h3>
                  <button
                    onClick={() => onNavigate("/torque-conversion")}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Torque Converter <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Torque represents the rotational turning effect of a force applied at radius <span className="font-mono">r</span> (<span className="font-mono">τ = r × F</span>). Although dimensionally identical to Joules (<span className="font-mono">N·m</span>), <strong>torque must never be called Joules</strong>.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
                  <div>1 lb·ft (pound-foot) ≈ 1.355 818 N·m</div>
                  <div>1 lb·in = (1/12) lb·ft ≈ 0.112 985 N·m</div>
                  <div>1 kgf·m = 9.806 65 N·m (exact)</div>
                </div>
              </div>

              {/* Work & Energy */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Work and Energy</h3>
                  <button
                    onClick={() => onNavigate("/energy-conversion")}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Energy Converter <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Scalar mechanical energy transferred through displacement (<span className="font-mono">W = F · d</span>). In thermal processes, energy is heat; in electrical systems, it is power integrated over time.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
                  <div>1 J = 1 N·m = 1 W·s = 0.737 562 ft·lbf</div>
                  <div>1 kW·h = 3,600,000 J = 3.6 MJ (exact)</div>
                  <div>1 BTU (IT) = 1,055.056 J ≈ 778.169 ft·lbf</div>
                </div>
              </div>

              {/* Power */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Power</h3>
                  <button
                    onClick={() => onNavigate("/power-conversion")}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Power Converter <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  The time rate of energy delivery (<span className="font-mono">P = W / t</span>). Mechanical horsepower differs slightly from metric horsepower (PS) and electrical horsepower.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
                  <div>1 hp (mechanical) = 550 ft·lbf/s ≈ 745.6999 W</div>
                  <div>1 PS (metric hp) = 75 kgf·m/s = 735.4988 W</div>
                  <div>1 kW = 1,000 W ≈ 1.341 022 hp ≈ 3,412.14 BTU/h</div>
                </div>
              </div>

              {/* Stress & Strain */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Stress & Strain</h3>
                  <button
                    onClick={() => onNavigate("/calculators/mechanical-calculators")}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Mechanical Solvers <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Normal stress (<span className="font-mono">σ = F / A</span>) is intensity of internal force per unit area. Strain (<span className="font-mono">ε = ΔL / L</span>) is dimensionless fractional elongation, commonly written in microstrain (<span className="font-mono">με = 10⁻⁶</span>).
                </p>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
                  <div>1 MPa = 1 N/mm² = 1,000,000 Pa</div>
                  <div>1 ksi = 1,000 psi ≈ 6.894 757 MPa</div>
                  <div>Strain: 1,000 με = 0.001 m/m = 0.1% elongation</div>
                </div>
              </div>

              {/* Mass & Volumetric Flow Rate */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">Mass & Volumetric Flow Rate</h3>
                  <button
                    onClick={() => onNavigate("/flow-conversion")}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    Flow Converter <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mass flow rate (<span className="font-mono">ṁ = dm/dt</span>) is invariant with temperature and pressure, while volumetric flow rate (<span className="font-mono">Q = V / t</span>) expands and contracts with thermal state.
                </p>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs font-mono space-y-1 text-slate-700 dark:text-slate-300">
                  <div>1 m³/s = 3,600 m³/h ≈ 2,118.88 CFM</div>
                  <div>1 US GPM = 231 in³/min ≈ 3.785 412 L/min</div>
                  <div>1 Imp GPM = 4.546 09 L/min ≈ 1.200 95 US GPM</div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Electrical Engineering Units */}
          <section id="electrical-units" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Zap className="w-6 h-6 text-amber-500" />
                4. Electrical Engineering Units
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Electrical engineering enjoys near-total worldwide standardization under the SI framework overseen by the International Electrotechnical Commission (IEC). The fundamental bridge between mechanical and electrical systems is established by the definition of the Watt (<span className="font-mono">1 W = 1 J/s = 1 V · 1 A</span>).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-sm">Voltage (V)</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Electric potential difference: work required to move unit charge (<span className="font-mono">1 V = 1 J/C</span>).
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">1 kV = 10³ V; 1 mV = 10⁻³ V</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-slate-900 dark:text-white text-sm">Current (A)</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Time rate of net electric charge flow through a cross section (<span className="font-mono">1 A = 1 C/s</span>). SI base unit.
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">1 mA = 10⁻³ A; 1 µA = 10⁻⁶ A</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Resistance (Ω)</span>
                  <button
                    onClick={() => onNavigate("/electric-resistance-conversion")}
                    className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Convert
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Opposition to steady current flow (<span className="font-mono">1 Ω = 1 V/A</span>). Governed by Ohm&apos;s Law (<span className="font-mono">V = I · R</span>).
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">1 kΩ = 10³ Ω; 1 MΩ = 10⁶ Ω</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white text-sm">Conductance (S)</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Reciprocal of resistance (<span className="font-mono">G = 1/R</span>). Measured in Siemens (<span className="font-mono">1 S = 1 Ω⁻¹ = 1 A/V</span>).
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">Historically termed &quot;mho&quot; (deprecated)</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Capacitance (F)</span>
                  <button
                    onClick={() => onNavigate("/capacitance-conversion")}
                    className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Convert
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Charge stored per unit potential (<span className="font-mono">1 F = 1 C/V</span>). 1 Farad is enormous in circuits.
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">1 µF = 10⁻⁶ F; 1 pF = 10⁻¹² F</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Inductance (H)</span>
                  <button
                    onClick={() => onNavigate("/inductance-conversion")}
                    className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Convert
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Electromotive force induced per unit rate of current change (<span className="font-mono">1 H = 1 V·s/A</span>).
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">1 mH = 10⁻³ H; 1 µH = 10⁻⁶ H</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">Electric Charge (C)</span>
                  <button
                    onClick={() => onNavigate("/electric-charge-conversion")}
                    className="text-[11px] text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Convert
                  </button>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Quantity of electricity (<span className="font-mono">1 C = 1 A·s</span>). Battery capacities use Ampere-hours.
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">1 Ah = 3,600 C; 1 mAh = 3.6 C</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white text-sm">AC Power Triangle</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Real power (<span className="font-mono">W</span>), Apparent power (<span className="font-mono">VA</span>), and Reactive power (<span className="font-mono">VAR</span>).
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">P = S · cos(θ) [Power Factor PF]</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <span className="font-bold text-slate-900 dark:text-white text-sm">Frequency (Hz)</span>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Periodic oscillations per second (<span className="font-mono">1 Hz = 1 s⁻¹</span>). Angular frequency is <span className="font-mono">ω = 2πf</span> rad/s.
                </p>
                <div className="text-[11px] font-mono text-blue-600 dark:text-blue-400">AC mains: 50 Hz or 60 Hz</div>
              </div>
            </div>
          </section>

          {/* 5. Thermal Engineering Units */}
          <section id="thermal-units" className="scroll-mt-24 space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Flame className="w-6 h-6 text-rose-500" />
                5. Thermal Engineering Units
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Thermal engineering deals with energy transfer driven by temperature gradients. Two major areas require rigorous distinction: <strong>absolute temperature vs. temperature difference</strong>, and <strong>heat energy vs. heat transfer rate</strong>.
            </p>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-2">
              <div className="font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                Critical Rule: Absolute Temperature vs. Temperature Difference (ΔT)
              </div>
              <p className="leading-relaxed">
                When converting an absolute thermodynamic temperature, an additive offset is mandatory:
                <br />
                <span className="font-mono font-semibold">T (K) = T (°C) + 273.15</span> &nbsp;|&nbsp;
                <span className="font-mono font-semibold">T (°F) = 1.8 · T (°C) + 32</span> &nbsp;|&nbsp;
                <span className="font-mono font-semibold">T (°R) = T (°F) + 459.67</span>.
                <br />
                However, when converting a <strong>temperature difference (ΔT)</strong> in heat transfer equations (<span className="font-mono">Q = m · c_p · ΔT</span>), the offset vanishes:
                <br />
                <span className="font-mono font-semibold">ΔT of 1 K = ΔT of 1 °C = ΔT of 1.8 °F = ΔT of 1.8 °R</span>.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 mt-4">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Thermal Property</th>
                    <th className="px-4 py-3">SI Unit</th>
                    <th className="px-4 py-3">Imperial Unit</th>
                    <th className="px-4 py-3">Conversion Relationship</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono text-xs">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Heat Energy (Q)</td>
                    <td className="px-4 py-3 font-sans">Joule (J) / Kilojoule (kJ)</td>
                    <td className="px-4 py-3 font-sans">British Thermal Unit (BTU)</td>
                    <td className="px-4 py-3">1 BTU_IT = 1,055.056 J (≈ 1.055 kJ)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Heat Rate / Cooling</td>
                    <td className="px-4 py-3 font-sans">Watt (W) / Kilowatt (kW)</td>
                    <td className="px-4 py-3 font-sans">BTU/h & Ton of Refrigeration</td>
                    <td className="px-4 py-3">1 Ton Ref = 12,000 BTU/h = 3.516 853 kW</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Thermal Conductivity (k)</td>
                    <td className="px-4 py-3 font-sans">W/(m·K)</td>
                    <td className="px-4 py-3 font-sans">BTU/(h·ft·°F)</td>
                    <td className="px-4 py-3">1 BTU/(h·ft·°F) ≈ 1.730 735 W/(m·K)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Specific Heat Capacity (c_p)</td>
                    <td className="px-4 py-3 font-sans">J/(kg·K)</td>
                    <td className="px-4 py-3 font-sans">BTU/(lb·°F)</td>
                    <td className="px-4 py-3">1 BTU/(lb·°F) = 4,186.8 J/(kg·K)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                    <td className="px-4 py-3 font-sans font-medium text-slate-900 dark:text-white">Heat Transfer Coeff. (U, h)</td>
                    <td className="px-4 py-3 font-sans">W/(m²·K)</td>
                    <td className="px-4 py-3 font-sans">BTU/(h·ft²·°F)</td>
                    <td className="px-4 py-3">1 BTU/(h·ft²·°F) ≈ 5.678 263 W/(m²·K)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 6. Fluid Engineering Units */}
          <section id="fluid-units" className="scroll-mt-24 space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Droplets className="w-6 h-6 text-cyan-500" />
                6. Fluid Engineering Units
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Fluid mechanics governs piping networks, aerodynamic drag, hydraulic power, and pump sizing. Calculations in fluids depend heavily on fluid properties—primarily pressure, viscosity, and density.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  Pressure: Absolute vs. Gauge (psia vs. psig)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Pressure gauges read relative to atmospheric ambient pressure. In engineering calculations involving thermodynamic state (such as the ideal gas law <span className="font-mono">P · V = n · R · T</span>), <strong>absolute pressure must always be used</strong>:
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 font-mono text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                  <div className="font-bold text-blue-600 dark:text-blue-400">P_abs = P_gauge + P_atm</div>
                  <div>Standard Atmospheric: 1 atm = 101.325 kPa = 14.6959 psia</div>
                  <div>0 psig (gauge reading) = 14.7 psia (absolute pressure)</div>
                  <div>Head of Water: 1 psi ≈ 2.30665 ft H₂O (at 4°C)</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  Viscosity: Dynamic (μ) vs. Kinematic (ν)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Dynamic (absolute) viscosity measures shear resistance under force (<span className="font-mono">τ = μ · dv/dy</span>). Kinematic viscosity divides dynamic viscosity by density (<span className="font-mono">ν = μ / ρ</span>) and dictates Reynolds numbers (<span className="font-mono">Re = v · D / ν</span>).
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 font-mono text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                  <div>Dynamic (μ): 1 Pa·s = 1 N·s/m² = 1,000 cP (centipoise)</div>
                  <div>Water at 20°C: μ ≈ 1.002 cP = 0.001002 Pa·s</div>
                  <div>Kinematic (ν): 1 m²/s = 1,000,000 cSt (centistokes)</div>
                  <div>1 cSt = 1 mm²/s (standard ISO lubricant viscosity grade)</div>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Common Engineering Conversion Factors */}
          <section id="conversion-factors" className="scroll-mt-24 space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <ArrowUpDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                7. Common Engineering Conversion Factors
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {filteredFactors.length} verified factors
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Each conversion factor below is verified against NIST SP 811 and ISO 80000. Click the copy icon next to any equation to copy it directly into your calculations or code.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Quantity</th>
                    <th className="px-4 py-3">SI Unit</th>
                    <th className="px-4 py-3">US / Imperial Unit</th>
                    <th className="px-4 py-3">Conversion Equation</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Technical Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-mono text-xs">
                  {filteredFactors.map((f, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30">
                      <td className="px-4 py-3 font-sans font-semibold text-slate-900 dark:text-white">
                        {f.quantity}
                      </td>
                      <td className="px-4 py-3 font-sans">
                        {f.siUnit} <span className="text-slate-400">({f.siSymbol})</span>
                      </td>
                      <td className="px-4 py-3 font-sans">
                        {f.usUnit} <span className="text-slate-400">({f.usSymbol})</span>
                      </td>
                      <td className="px-4 py-3 text-blue-600 dark:text-blue-400 font-bold whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <span>{f.conversionEquation}</span>
                          <button
                            onClick={() => handleCopy(f.conversionEquation, `factor-${idx}`)}
                            title="Copy conversion equation"
                            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                          >
                            {copiedKey === `factor-${idx}` ? (
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-sans">
                        {f.exactFactor ? (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px] border border-emerald-200 dark:border-emerald-800">
                            Exact
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px]">
                            Approx.
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 font-sans text-slate-600 dark:text-slate-400 min-w-[220px]">
                        {f.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 8. Engineering Formula Reference */}
          <section id="formula-reference" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                8. Engineering Formula Reference
              </h2>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                {filteredFormulas.length} core engineering equations
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Every fundamental engineering relationship connects physical quantities through mathematically rigorous dimensional syntax. The cards below detail the core formulas requested across mechanical, structural, and electrical design, with complete variable definitions in both SI coherent units and US Customary equivalents.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredFormulas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xs space-y-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {item.name}
                      </h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(item.formula, `form-${idx}`)}
                      title="Copy formula text"
                      className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                    >
                      {copiedKey === `form-${idx}` ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* KaTeX / Math Formula Container */}
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 flex justify-center items-center py-4">
                    <MathFormula formula={item.latex} displayMode={true} className="text-lg sm:text-xl font-bold" />
                  </div>

                  {/* Variable breakdown table */}
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Variable Definitions & Units
                    </div>
                    <div className="space-y-1.5">
                      {item.variables.map((v, vIdx) => (
                        <div
                          key={vIdx}
                          className="p-2 rounded-lg bg-slate-50/70 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/80 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">
                              {v.symbol}
                            </span>
                            <span className="font-medium text-slate-900 dark:text-white">{v.name}:</span>
                            <span className="text-slate-600 dark:text-slate-400">{v.description}</span>
                          </div>
                          <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
                            <span>SI: {v.siUnit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Engineering Context: </span>
                    {item.engineeringContext}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Metric vs Imperial Engineering Units */}
          <section id="metric-vs-imperial" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                9. Metric vs Imperial Engineering Units
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Engineers collaborating across international boundaries encounter fundamental structural differences between SI Metric, United States Customary (USCS), and British Imperial systems. Recognizing the physical origins of these discrepancies avoids devastating design errors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mass vs Weight */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  The Mass vs. Weight Conundrum (lbm vs. lbf and Slugs)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  In SI, mass (<span className="font-mono">kg</span>) and force (<span className="font-mono">N</span>) are distinct base and derived units: <span className="font-mono">1 N = 1 kg × 1 m/s²</span>. No gravitational constant is needed in Newton&apos;s Second Law.
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  In traditional English engineering, 1 pound-mass (<span className="font-mono">lbm</span>) weighs 1 pound-force (<span className="font-mono">lbf</span>) only on Earth&apos;s surface. To apply <span className="font-mono">F = m · a</span>, engineers must insert the gravitational conversion factor <span className="font-mono">g_c = 32.1740 ft·lbm / (lbf·s²)</span>:
                </p>
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 font-mono text-xs space-y-1 text-slate-700 dark:text-slate-300">
                  <div className="font-bold text-blue-600 dark:text-blue-400">F = (m · a) / g_c</div>
                  <div>1 slug = 32.174 049 lbm (mass accelerated at 1 ft/s² by 1 lbf)</div>
                  <div>1 blob (slinch) = 12 slugs = 386.088 lbm (in / s² system)</div>
                </div>
              </div>

              {/* US Customary vs UK Imperial Gallons */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  US Customary vs. British Imperial Volumetric Measures
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Many engineers mistakenly assume US and British gallons are identical. They are entirely separate legal standards established before 1830:
                </p>
                <ul className="text-xs text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1 leading-relaxed">
                  <li>
                    <strong>US Liquid Gallon:</strong> Queen Anne wine gallon of 1707, defined as exactly <span className="font-mono font-semibold">231 cubic inches</span> (<span className="font-mono">3.785 411 784 L</span>).
                  </li>
                  <li>
                    <strong>British Imperial Gallon:</strong> British Weights and Measures Act of 1824, defined as 10 lb of water at 62°F (<span className="font-mono font-semibold">277.419 in³</span> = <span className="font-mono">4.546 09 L</span>).
                  </li>
                </ul>
                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200 text-xs font-mono">
                  1 Imperial Gallon = 1.200 950 US Liquid Gallons (+20.09% larger!)
                </div>
              </div>
            </div>

            {/* Case Study Callout */}
            <div className="p-5 sm:p-6 rounded-2xl border border-rose-200 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 space-y-3">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-sm sm:text-base">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                Historic Cautionary Case Study: The 1999 Mars Climate Orbiter Failure
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                On September 23, 1999, NASA lost the $327.6 million <strong>Mars Climate Orbiter</strong> as it entered Martian orbit at an altitude of 57 km instead of the planned 226 km, disintegrating in the thin Martian atmosphere. The independent NASA accident investigation board determined that the prime contractor (Lockheed Martin) output small-forces thruster impulse telemetry in <strong>pound-force-seconds (lbf·s)</strong>, while the trajectory navigation team at the Jet Propulsion Laboratory (JPL) assumed the data was in SI <strong>Newton-seconds (N·s)</strong>. Because <span className="font-mono font-bold">1 lbf·s = 4.448 222 N·s</span>, the reported thruster impulses were undercalculated by a factor of 4.45 throughout the nine-month cruise phase.
              </p>
            </div>
          </section>

          {/* 10. Engineering Unit Conversion Examples */}
          <section id="conversion-examples" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                10. Engineering Unit Conversion Examples
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              These fully worked step-by-step engineering problems illustrate proper dimensional cancellation, preservation of intermediate precision, and avoidance of unit confusion across mechanical, electrical, fluid, and structural disciplines.
            </p>

            <div className="space-y-6">
              {WORKED_ENGINEERING_EXAMPLES.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      Example {idx + 1}: {ex.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold w-fit border border-blue-200 dark:border-blue-900">
                      {ex.category}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    <strong>Problem:</strong> {ex.problem}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl">
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300">Given:</span>
                      <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-0.5 mt-1 font-mono">
                        {ex.given.map((g, gIdx) => (
                          <li key={gIdx}>{g}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="font-bold text-slate-700 dark:text-slate-300">Find:</span>
                      <p className="text-slate-600 dark:text-slate-400 mt-1 font-mono">{ex.find}</p>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                    <span className="font-sans font-bold text-slate-900 dark:text-white">Step-by-Step Solution:</span>
                    {ex.stepByStep.map((s, sIdx) => (
                      <div key={sIdx} className="p-2 rounded-lg bg-slate-50/50 dark:bg-slate-900/30">
                        {s}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200 text-xs font-mono flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Final Answer:</strong> {ex.finalAnswer}</span>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                    <strong>Engineering Takeaway:</strong> {ex.engineeringTakeaway}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 11. Common Engineering Conversion Mistakes */}
          <section id="common-mistakes" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                11. Common Engineering Conversion Mistakes
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Analysis of engineering field failures, peer reviews, and laboratory test discrepancies reveals consistent patterns in unit miscalculations. Review these 6 frequent pitfalls:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                  1. Squaring or Cubing Non-Linear Unit Powers
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  When converting area or volume, multiplying by the linear conversion factor instead of raising it to the power of 2 or 3 is a frequent error. <span className="font-mono">1 m = 100 cm</span>, but <span className="font-mono">1 m² = (100 cm)² = 10,000 cm²</span>, and <span className="font-mono">1 m³ = 1,000,000 cm³</span>. Similarly, <span className="font-mono">1 ft³ = 12³ in³ = 1,728 in³</span>, not 12 in³.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                  2. Using Gauge Pressure in Gas Laws
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Equations of state (ideal gas law <span className="font-mono">PV = nRT</span>, adiabatic compression) require absolute pressure (<span className="font-mono">psia</span> or <span className="font-mono">Pa abs</span>). Inserting 100 psig into <span className="font-mono">PV = nRT</span> without adding 14.7 psi atmospheric pressure introduces a 12.8% volume error.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                  3. Applying Temperature Offsets to Differences
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  In heat transfer formulas (<span className="font-mono">Q = m · c · ΔT</span>), converting <span className="font-mono">ΔT = 20 °C</span> by calculating <span className="font-mono">20 × 1.8 + 32 = 68 °F</span> is wrong! The offset 32 applies only to absolute points; temperature differences scale strictly by 1.8 (<span className="font-mono">ΔT = 20 × 1.8 = 36 °F</span>).
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                  4. Conflating Mechanical, Metric, and Electrical Horsepower
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Imperial mechanical horsepower is 745.70 W (<span className="font-mono">550 ft·lbf/s</span>); Continental metric horsepower (PS / cv) is 735.50 W (<span className="font-mono">75 kgf·m/s</span>); and electrical motor rating horsepower is defined as 746 W exact. Stating 100 PS as 100 hp overstates available power by 1.38%.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                  5. Metric Prefix Case-Sensitivity Confusion
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Metric prefixes are strictly case-sensitive. Writing <span className="font-mono font-bold">1 mN</span> (milli-Newton = 10⁻³ N) when intending <span className="font-mono font-bold">1 MN</span> (Mega-Newton = 10⁶ N) represents a nine orders of magnitude (one billion-fold) discrepancy.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
                <div className="font-bold text-rose-600 dark:text-rose-400 text-sm">
                  6. Premature Rounding in Intermediate Computations
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Rounding intermediate unit conversions to 2 or 3 digits cascades significant compound rounding error through subsequent multi-stage equations. Always store full floating-point values and round only the final reported engineering output.
                </p>
              </div>
            </div>
          </section>

          {/* 12. Engineering Conversion Tools */}
          <section id="engineering-tools" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                12. Engineering Conversion Tools
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Explore our comprehensive suite of verified online engineering converters, discipline-specific calculators, and standards handbooks:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              <a
                href="/force-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/force-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Force</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">N, lbf, kN, kip, dyn</div>
              </a>

              <a
                href="/pressure-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/pressure-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Pressure</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">Pa, psi, bar, MPa, atm</div>
              </a>

              <a
                href="/torque-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/torque-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Torque</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">N·m, lb·ft, lb·in, kgf·m</div>
              </a>

              <a
                href="/power-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/power-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Power</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">W, kW, hp, PS, BTU/h</div>
              </a>

              <a
                href="/energy-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/energy-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Energy</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">J, kJ, kWh, BTU, ft·lbf</div>
              </a>

              <a
                href="/density-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/density-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Density</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">kg/m³, lb/ft³, g/cm³</div>
              </a>

              <a
                href="/flow-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/flow-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Flow Rate</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">m³/s, GPM, CFM, L/min</div>
              </a>

              <a
                href="/temperature-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/temperature-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Temperature</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">°C, °F, K, °R</div>
              </a>

              <a
                href="/electric-resistance-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/electric-resistance-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Resistance</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">Ω, kΩ, MΩ, mΩ</div>
              </a>

              <a
                href="/capacitance-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/capacitance-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Capacitance</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">F, µF, nF, pF</div>
              </a>

              <a
                href="/inductance-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/inductance-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Inductance</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">H, mH, µH</div>
              </a>

              <a
                href="/electric-charge-conversion"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/electric-charge-conversion");
                }}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left group block"
              >
                <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-between">
                  <span>Electric Charge</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">C, Ah, mAh</div>
              </a>

              <a
                href="/calculators"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate("/calculators");
                }}
                className="p-3 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/30 hover:border-blue-500 transition-all text-left group col-span-2 sm:col-span-3 lg:col-span-4 block"
              >
                <div className="font-bold text-sm text-blue-900 dark:text-blue-200 flex items-center justify-between">
                  <span>Interactive Engineering Calculators Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Access 120+ specialized engineering solvers covering electrical circuits, structural beam deflections, fluid pipe losses, thermodynamics, and machine design.
                </div>
              </a>
            </div>
          </section>

          {/* 13. FAQ */}
          <section id="faq" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                13. Frequently Asked Questions
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Clear, scientifically grounded answers to the most common questions encountered by students, technicians, and practicing engineers regarding measurement standards and unit conversions.
            </p>

            <div className="space-y-3">
              {ENGINEERING_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-900/40 transition-colors"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        expandedFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 14. References */}
          <section id="references" className="scroll-mt-24 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                14. Authoritative Standards & References
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Every unit definition, conversion factor, and mathematical equation presented in this reference is verified against peer-reviewed international measurement standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ENGINEERING_STANDARDS_REFERENCES.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2"
                >
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 font-mono">
                    {ref.code}
                  </div>
                  <div className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    {ref.title}
                  </div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {ref.organization}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    {ref.description}
                  </p>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-2"
                  >
                    View Standards Organization <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            {/* Cross-linking to Companion References */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 mt-6 space-y-3">
              <div className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                Companion Metrology Reference Resources
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Continue exploring our metrology handbooks for foundational physics standards and general unit conversions:
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/resources/unit-conversion-reference"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/resources/unit-conversion-reference");
                  }}
                  className="px-3.5 py-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Unit Conversion Reference (All Factors & Formulas)
                </a>
                <a
                  href="/resources/si-units-reference"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/resources/si-units-reference");
                  }}
                  className="px-3.5 py-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <Scale className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  SI Units & Metric Prefixes Reference
                </a>
                <a
                  href="/calculators"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("/calculators");
                  }}
                  className="px-3.5 py-2 rounded-lg bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Engineering Calculators Directory
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
