import React, { useState, useEffect } from "react";
import { Copy, Check, Calculator, ArrowRight, RefreshCw, Compass } from "lucide-react";
import { EngineeringTool } from "../data/calculatorsData";
import { isIdentityEngineeringTool } from "../utils/identityDetection";
import IdentityConversionNotice from "./IdentityConversionNotice";

/**
 * Format arc degrees to standard astronomical Right Ascension (Hours, Minutes, Seconds).
 * 360° = 24h, 15° = 1h, 1h = 60m, 1m = 60s.
 */
function formatDegreesToRightAscension(degrees: number) {
  if (isNaN(degrees)) {
    return {
      hms: "--",
      hours: 0,
      minutes: 0,
      seconds: "0",
      decimalHours: 0,
      formattedDegrees: "0°",
    };
  }

  let normDeg = degrees;
  if (normDeg < 0) {
    normDeg = ((normDeg % 360) + 360) % 360;
  }

  const totalHours = normDeg / 15;

  let h = Math.floor(totalHours);
  const remMinutes = (totalHours - h) * 60;
  let m = Math.floor(remMinutes);
  const remSeconds = (remMinutes - m) * 60;

  // Round seconds to 1 decimal place when needed, avoid unnecessary trailing zeros
  let roundedSec = Math.round(remSeconds * 10) / 10;
  if (roundedSec >= 60) {
    roundedSec = 0;
    m += 1;
  }
  if (m >= 60) {
    m = 0;
    h += 1;
  }

  if (degrees === 360) {
    h = 24;
    m = 0;
    roundedSec = 0;
  } else if (normDeg > 360 && h >= 24) {
    h = h % 24;
  }

  const secFormatted = roundedSec % 1 === 0 ? roundedSec.toFixed(0) : roundedSec.toFixed(1);
  const hms = `${h}h ${m}m ${secFormatted}s`;

  return {
    hms,
    hours: h,
    minutes: m,
    seconds: secFormatted,
    decimalHours: totalHours,
    formattedDegrees: `${parseFloat(degrees.toFixed(6))}°`
  };
}

interface EngineeringCalculatorWidgetProps {
  tool: EngineeringTool;
  disciplineName?: string;
  disciplineTools?: EngineeringTool[];
  onSelectTool?: (tool: EngineeringTool) => void;
  showOpenFullButton?: boolean;
  onOpenFull?: () => void;
}

export default function EngineeringCalculatorWidget({
  tool,
  disciplineName,
  disciplineTools,
  onSelectTool,
  showOpenFullButton = true,
  onOpenFull
}: EngineeringCalculatorWidgetProps) {
  const [calcInputs, setCalcInputs] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    tool.inputs.forEach(inp => {
      initial[inp.name] = inp.defaultValue;
    });
    return initial;
  });

  const [calcResult, setCalcResult] = useState<number | null>(() => {
    const initial: Record<string, number> = {};
    tool.inputs.forEach(inp => {
      initial[inp.name] = inp.defaultValue;
    });
    const args = tool.inputs.map(inp => inp.defaultValue);
    try {
      const calcFn = tool.calculate as any;
      const res = calcFn(initial);
      return typeof res === "number" && !isNaN(res) ? res : calcFn(...args);
    } catch {
      return null;
    }
  });

  const [copied, setCopied] = useState(false);

  // Sync state whenever tool changes
  useEffect(() => {
    const initial: Record<string, number> = {};
    tool.inputs.forEach(inp => {
      initial[inp.name] = inp.defaultValue;
    });
    setCalcInputs(initial);

    const args = tool.inputs.map(inp => inp.defaultValue);
    try {
      const calcFn = tool.calculate as any;
      const res = calcFn(initial);
      setCalcResult(typeof res === "number" && !isNaN(res) ? res : calcFn(...args));
    } catch {
      setCalcResult(null);
    }
    setCopied(false);
  }, [tool.id]);

  const handleInputChange = (fieldName: string, value: string) => {
    const num = parseFloat(value);
    const updated = { ...calcInputs, [fieldName]: isNaN(num) ? 0 : num };
    setCalcInputs(updated);

    const args = tool.inputs.map(inp => updated[inp.name] ?? inp.defaultValue);
    try {
      const calcFn = tool.calculate as any;
      const res = calcFn(updated);
      setCalcResult(typeof res === "number" && !isNaN(res) ? res : calcFn(...args));
    } catch {
      setCalcResult(null);
    }
  };

  const handleReset = () => {
    const initial: Record<string, number> = {};
    tool.inputs.forEach(inp => {
      initial[inp.name] = inp.defaultValue;
    });
    setCalcInputs(initial);
    const args = tool.inputs.map(inp => inp.defaultValue);
    try {
      const calcFn = tool.calculate as any;
      const res = calcFn(initial);
      setCalcResult(typeof res === "number" && !isNaN(res) ? res : calcFn(...args));
    } catch {
      setCalcResult(null);
    }
  };

  const handleCopy = (customText?: string) => {
    const textToCopy = customText !== undefined ? customText : (calcResult !== null ? calcResult.toString() : "");
    if (textToCopy) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="rounded-3xl border border-amber-300 dark:border-amber-800/80 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl space-y-6">
      {/* Widget Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
        <div className="space-y-1.5">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            {tool.name}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Action Controls Header Right */}
        <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
          {disciplineTools && disciplineTools.length > 1 && onSelectTool && (
            <div className="flex flex-col gap-1 w-full md:w-auto">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Switch Calculator:
              </label>
              <select
                value={tool.id}
                onChange={(e) => {
                  const found = disciplineTools.find(t => t.id === e.target.value);
                  if (found) onSelectTool(found);
                }}
                className="h-10 px-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shadow-sm"
              >
                {disciplineTools.map(t => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Engine Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Column 1: Input Variables */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-white text-[10px] font-bold">1</span>
              Input Variables & Parameters
            </h3>

            <button
              onClick={handleReset}
              className="text-[11px] font-bold text-slate-400 hover:text-amber-500 flex items-center gap-1 cursor-pointer transition-colors"
              title="Reset inputs to default standard values"
            >
              <RefreshCw className="h-3 w-3" />
              Reset Defaults
            </button>
          </div>

          <div className="space-y-3.5">
            {tool.inputs.map(inp => (
              <div key={inp.name} className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <span>{inp.label}</span>
                  <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200/50 dark:border-amber-900/30">
                    {inp.unit}
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="any"
                    value={calcInputs[inp.name] ?? inp.defaultValue}
                    onChange={(e) => handleInputChange(inp.name, e.target.value)}
                    className="w-full h-11 pl-4 pr-12 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all shadow-sm"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-slate-400 pointer-events-none">
                    {inp.unit}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Physical Assumptions */}
          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
            <span className="font-bold text-slate-900 dark:text-slate-100 block flex items-center gap-1.5">
              Physical Boundary Assumptions:
            </span>
            <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
              {tool.assumptions.map((ass, i) => (
                <li key={i}>{ass}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2: Computed Output Result */}
        <div className="space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-white text-[10px] font-bold">2</span>
              Real-Time Calculated Output
            </h3>

            {/* Display Card */}
            {tool.id === "degree-to-right-ascension-calc" ? (() => {
              const degInput = calcInputs["degrees"] ?? 180;
              const ra = formatDegreesToRightAscension(degInput);
              return (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl space-y-4 border border-slate-800 min-w-0 max-w-full">
                  <div className="text-xs text-slate-400 font-mono flex items-center justify-between">
                    <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-300">
                      <Compass className="h-3.5 w-3.5 text-amber-400" />
                      Right Ascension
                    </span>
                    <span className="text-amber-400 font-bold font-mono px-2.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[11px]">
                      Hours, Minutes, Seconds
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Right Ascension
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                        {ra.hms}
                      </div>
                    </div>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopy(ra.hms)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 cursor-pointer"
                      title="Copy Right Ascension (H:M:S) to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 text-slate-300" />
                          <span>Copy Result</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Secondary Astronomical Precision Output Values */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-800/80 text-xs">
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <span className="text-slate-400 font-mono text-[11px] block">Decimal Right Ascension</span>
                      <span className="text-sm font-bold text-white font-mono">
                        {ra.decimalHours.toFixed(6)} hours
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-1">
                      <span className="text-slate-400 font-mono text-[11px] block">Degrees</span>
                      <span className="text-sm font-bold text-amber-300 font-mono">
                        {ra.formattedDegrees}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })() : (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl space-y-4 border border-slate-800 min-w-0 max-w-full">
                <div className="text-xs text-slate-400 font-mono flex items-center justify-between">
                  <span>Calculated Property</span>
                  <span className="text-amber-400 font-bold font-mono px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                    {tool.outputUnit}
                  </span>
                </div>

                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                    {calcResult !== null ? calcResult.toLocaleString(undefined, { maximumFractionDigits: 6 }) : "Invalid"}
                    <span className="text-sm font-normal text-slate-300 ml-2">{tool.outputUnit}</span>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy()}
                    disabled={calcResult === null}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all border border-slate-700 cursor-pointer disabled:opacity-50"
                    title="Copy output value to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-slate-300" />
                        <span>Copy Result</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Verification Footnote */}
          <div className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/80 text-xs text-slate-600 dark:text-slate-400 space-y-1.5 shadow-2xs">
            <span className="font-bold text-slate-900 dark:text-slate-100 block tracking-tight">
              {tool.disciplineId === "astronomy-calc" ? "Astronomical Coordinate Verification:" : "Dimensional SI Verification:"}
            </span>
            <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400 font-sans">
              {tool.id === "degree-to-right-ascension-calc"
                ? "Calculated dynamically using the standard celestial rate: 360° ≡ 24ʰ (15°/hour). Seconds are rounded to 1 decimal place when needed."
                : tool.disciplineId === "astronomy-calc"
                ? "Calculated dynamically using standard astronomical constants and equatorial celestial kinematics."
                : "Calculated dynamically using the selected SI inputs. Real-world thermal behavior may vary with temperature, material properties, cooling conditions, and operating conditions."}
            </p>
          </div>
        </div>
      </div>

      {/* Identity (1:1) Reference Conversion Notice */}
      {isIdentityEngineeringTool(tool) && <IdentityConversionNotice />}
    </div>
  );
}
