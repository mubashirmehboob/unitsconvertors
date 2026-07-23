import React, { useState, useEffect } from "react";
import { 
  ArrowLeftRight, RotateCcw, Copy, Check, Sliders, Share2, Printer, Heart, Sparkles, AlertCircle, ChevronDown, Zap, Calculator
} from "lucide-react";
import { Category, Unit, ConversionHistoryItem } from "../types";
import { performConversion, formatUnitValue } from "../utils/conversionEngine";
import AdPlaceholder from "./AdPlaceholder";

// Safe, sandboxed scientific calculator evaluator
function safeEval(expr: string, angleMode: "deg" | "rad"): number {
  let s = expr;
  
  // Replace mathematical constants
  s = s.replace(/π/g, "Math.PI");
  s = s.replace(/e/g, "Math.E");
  
  // Replace power symbols
  s = s.replace(/\^/g, "**");

  // Factorial implementation
  const factorial = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let r = 1;
    for (let i = 2; i <= Math.min(n, 170); i++) r *= i;
    return r;
  };

  // Custom angle-aware trig helpers
  const sin = (x: number) => angleMode === "deg" ? Math.sin(x * Math.PI / 180) : Math.sin(x);
  const cos = (x: number) => angleMode === "deg" ? Math.cos(x * Math.PI / 180) : Math.cos(x);
  const tan = (x: number) => angleMode === "deg" ? Math.tan(x * Math.PI / 180) : Math.tan(x);
  
  const asin = (x: number) => angleMode === "deg" ? Math.asin(x) * 180 / Math.PI : Math.asin(x);
  const acos = (x: number) => angleMode === "deg" ? Math.acos(x) * 180 / Math.PI : Math.acos(x);
  const atan = (x: number) => angleMode === "deg" ? Math.atan(x) * 180 / Math.PI : Math.atan(x);

  const sqrt = Math.sqrt;
  const cbrt = Math.cbrt;
  const ln = Math.log;
  const log = Math.log10;
  const exp = Math.exp;
  const yroot = (y: number, x: number) => Math.pow(x, 1 / y);

  // Translate labels to local JS functions in evaluation context
  s = s.replace(/sin\^-1\(/g, "asin(");
  s = s.replace(/cos\^-1\(/g, "acos(");
  s = s.replace(/tan\^-1\(/g, "atan(");
  s = s.replace(/sin\(/g, "sin(");
  s = s.replace(/cos\(/g, "cos(");
  s = s.replace(/tan\(/g, "tan(");
  s = s.replace(/sqrt\(/g, "sqrt(");
  s = s.replace(/cbrt\(/g, "cbrt(");
  s = s.replace(/ln\(/g, "ln(");
  s = s.replace(/log\(/g, "log(");
  s = s.replace(/exp\(/g, "exp(");
  s = s.replace(/yroot\(/g, "yroot(");

  // Match factorials like 5! -> factorial(5)
  s = s.replace(/(\d+)!/g, (_, n) => `factorial(${n})`);

  try {
    const fn = new Function(
      "sin", "cos", "tan", "asin", "acos", "atan", "sqrt", "cbrt", "ln", "log", "exp", "yroot", "factorial", "Math",
      `return (${s})`
    );
    const result = fn(sin, cos, tan, asin, acos, atan, sqrt, cbrt, ln, log, exp, yroot, factorial, Math);
    return typeof result === "number" && !isNaN(result) ? result : NaN;
  } catch (err) {
    return NaN;
  }
}

interface ConverterToolProps {
  category: Category;
  initialFromUnitId?: string;
  initialToUnitId?: string;
  onAddHistory: (item: Omit<ConversionHistoryItem, "id" | "timestamp">) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export default function ConverterTool({
  category,
  initialFromUnitId,
  initialToUnitId,
  onAddHistory,
  favorites,
  onToggleFavorite
}: ConverterToolProps) {
  // Set up local state for inputs
  const [fromUnitId, setFromUnitId] = useState("");
  const [toUnitId, setToUnitId] = useState("");
  const [inputValue, setInputValue] = useState("1");
  const [copied, setCopied] = useState(false);
  const [swapRotate, setSwapRotate] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  // Scientific Calculator states
  const [calcOpen, setCalcOpen] = useState(false);
  const [calcExpression, setCalcExpression] = useState("");
  const [calcResult, setCalcResult] = useState<string | null>(null);
  const [calcMemory, setCalcMemory] = useState<number>(0);
  const [calcAngleMode, setCalcAngleMode] = useState<"deg" | "rad">("deg");

  // Formatting State Engine
  const [precision, setPrecision] = useState<number>(9);
  const [useSigFigs, setUseSigFigs] = useState<boolean>(false);
  const [notation, setNotation] = useState<"auto" | "decimal" | "scientific">("auto");

  // Sync with props when category or deep link parameters change
  useEffect(() => {
    const defaultFrom = initialFromUnitId && category.units.some(u => u.id === initialFromUnitId)
      ? initialFromUnitId
      : category.units[0]?.id || "";
    
    const defaultTo = initialToUnitId && category.units.some(u => u.id === initialToUnitId)
      ? initialToUnitId
      : category.units[1]?.id || category.units[0]?.id || "";

    setFromUnitId(defaultFrom);
    setToUnitId(defaultTo);
  }, [category, initialFromUnitId, initialToUnitId]);

  const fromUnit = category.units.find(u => u.id === fromUnitId) || category.units[0];
  const toUnit = category.units.find(u => u.id === toUnitId) || category.units[1] || category.units[0];

  // Perform calculation
  const numericValue = parseFloat(inputValue);
  const result = isNaN(numericValue) ? 0 : performConversion(numericValue, fromUnit, toUnit, category);

  // Format inputs and outputs using the High-Precision Formatting Engine
  const formatOpts = { precision, useSigFigs, notation };
  const formattedInputResult = isNaN(numericValue) 
    ? { html: "0", text: "0" } 
    : formatUnitValue(numericValue, formatOpts);

  const formattedOutputResult = isNaN(numericValue)
    ? { html: "0", text: "0" }
    : formatUnitValue(result, formatOpts);

  // Update history on successful conversion (debounced so we don't spam)
  useEffect(() => {
    if (isNaN(numericValue) || fromUnitId === toUnitId) return;
    
    const handler = setTimeout(() => {
      onAddHistory({
        category: category.id,
        fromUnit: fromUnitId,
        toUnit: toUnitId,
        fromVal: numericValue,
        toVal: result
      });
    }, 1500); // write after 1.5s idle

    return () => clearTimeout(handler);
  }, [inputValue, fromUnitId, toUnitId]);

  const handleSwap = () => {
    setSwapRotate(prev => !prev);
    setFromUnitId(toUnitId);
    setToUnitId(fromUnitId);
  };

  const handleReset = () => {
    setInputValue("1");
  };

  const handleCalcPress = (key: string) => {
    if (key === "AC") {
      setCalcExpression("");
      setCalcResult(null);
    } else if (key === "Back") {
      if (calcResult !== null) {
        setCalcResult(null);
      } else {
        setCalcExpression(prev => prev.slice(0, -1));
      }
    } else if (key === "=") {
      if (calcExpression.trim() === "") return;
      const res = safeEval(calcExpression, calcAngleMode);
      if (isNaN(res)) {
        setCalcResult("Error");
      } else {
        setCalcResult(res.toString());
      }
    } else if (key === "Use") {
      const valToUse = calcResult !== null ? calcResult : calcExpression;
      if (valToUse && valToUse !== "Error") {
        setInputValue(valToUse);
        setCalcOpen(false);
      }
    } else if (key === "M+") {
      const currentVal = parseFloat(calcResult || calcExpression || "0");
      if (!isNaN(currentVal)) {
        setCalcMemory(prev => prev + currentVal);
      }
    } else if (key === "M-") {
      const currentVal = parseFloat(calcResult || calcExpression || "0");
      if (!isNaN(currentVal)) {
        setCalcMemory(prev => prev - currentVal);
      }
    } else if (key === "MR") {
      setCalcExpression(prev => prev + calcMemory.toString());
    } else if (key === "±") {
      if (calcResult !== null) {
        const negated = (parseFloat(calcResult) * -1).toString();
        setCalcResult(negated);
        setCalcExpression(negated);
      } else {
        setCalcExpression(prev => {
          if (prev.startsWith("-")) return prev.slice(1);
          return "-" + prev;
        });
      }
    } else if (key === "RND") {
      const rand = Math.random().toFixed(6);
      setCalcExpression(prev => prev + rand);
    } else {
      if (calcResult !== null) {
        const isOperator = ["+", "-", "*", "/", "%", "^"].includes(key);
        if (isOperator) {
          setCalcExpression(calcResult + key);
        } else {
          setCalcExpression(key);
        }
        setCalcResult(null);
      } else {
        setCalcExpression(prev => prev + key);
      }
    }
  };

  const handleCopy = () => {
    if (isNaN(result)) return;
    const textToCopy = `${formattedInputResult.text} ${fromUnit.symbol || fromUnit.name} = ${formattedOutputResult.text} ${toUnit.symbol || toUnit.name}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Generate share links
  const favoriteId = `${category.id}/${fromUnitId}-to-${toUnitId}`;
  const isFavorite = favorites.includes(favoriteId);
  const shareUrl = `${window.location.origin}/${category.id}/${fromUnitId}-to-${toUnitId}`;
  const shareText = `Convert ${fromUnit.plural} to ${toUnit.plural} effortlessly with this free offline calculator!`;

  const handleShare = (platform: "x" | "facebook" | "whatsapp" | "copy") => {
    let url = "";
    if (platform === "x") {
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    } else if (platform === "facebook") {
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    } else if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
    } else if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return;
    }
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Clean numeric input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow empty, standard numbers, decimals, or negative numbers, as well as scientific e-notations
    if (val === "" || /^-?\d*\.?\d*([eE][-+]?\d*)?$/.test(val)) {
      setInputValue(val);
    }
  };

  return (
    <div className="w-full flex flex-col gap-5" id="converter-tool-container">
      
      {/* Dynamic Print CSS Injector */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-converter-area, #printable-converter-area * {
            visibility: visible;
          }
          #printable-converter-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
            padding: 20px;
          }
          /* Hide interactive buttons on print */
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Main Interactive Converter Panel */}
      <div 
        id="printable-converter-area"
        className="relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 sm:py-5 sm:px-6 shadow-xl shadow-slate-200/50 dark:shadow-black/20 transition-all duration-300"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-br from-blue-600/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Action Tray */}
        <div className="hidden sm:flex items-center justify-between mb-4 no-print">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50/80 to-cyan-50/80 dark:from-blue-950/35 dark:to-cyan-950/35 text-blue-700 dark:text-cyan-400 text-[10px] sm:text-[11px] font-black tracking-widest uppercase border border-blue-200/40 dark:border-cyan-500/25 shadow-sm transition-all hover:scale-102">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>HIGH-PRECISION CONVERSION ENGINE</span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Scientific Calculator Button */}
            <button
              onClick={() => setCalcOpen(!calcOpen)}
              className={`h-10 w-10 rounded-xl border flex items-center justify-center transition-all shadow-sm ${
                calcOpen 
                  ? "bg-blue-600 border-blue-600 text-white" 
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
              }`}
              title="Open Scientific Calculator"
            >
              <Calculator className="h-4 w-4" />
            </button>

            {/* Toggle Bookmark */}
            <button
              onClick={() => onToggleFavorite(favoriteId)}
              className={`h-10 w-10 rounded-xl border flex items-center justify-center transition-all shadow-sm ${
                isFavorite 
                  ? "bg-rose-50 border-rose-200 text-rose-500 dark:bg-rose-950/30 dark:border-rose-900/40" 
                  : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300"
              }`}
              title={isFavorite ? "Remove from bookmarks" : "Save to bookmarks"}
            >
              <Heart className={`h-4 w-4 ${isFavorite ? "fill-rose-500 text-rose-500" : "text-slate-500"}`} />
            </button>
          </div>
        </div>


        {/* SCIENTIFIC CALCULATOR MODULE */}
        {calcOpen && (
          <div className="mb-6 p-5 rounded-3xl bg-slate-50/80 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl relative animate-in fade-in-50 zoom-in-95 duration-200 no-print">
            {/* Title / Close bar */}
            <div className="flex items-center justify-between mb-4 border-b border-slate-200/60 dark:border-slate-800 pb-3">
              <span className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Calculator className="h-4 w-4 text-blue-600 dark:text-cyan-400" />
                Scientific Calculator
              </span>
              <button
                type="button"
                onClick={() => setCalcOpen(false)}
                className="h-6 w-6 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:hover:bg-rose-900/40 dark:text-rose-400 font-bold flex items-center justify-center text-xs shadow-sm transition-all border border-rose-100/60 dark:border-rose-900/30"
                title="Close Calculator"
              >
                ✕
              </button>
            </div>

            {/* Display screen (matched to dark style with white text) */}
            <div className="w-full bg-slate-900 dark:bg-slate-950 text-white p-4 rounded-2xl mb-4 text-right font-mono border border-slate-800 dark:border-slate-800/80 shadow-inner flex flex-col justify-between h-24">
              <div className="text-xs text-slate-400 dark:text-slate-500 truncate overflow-x-auto text-left whitespace-nowrap scrollbar-none">
                {calcExpression || "0"}
              </div>
              <div className="text-3xl font-bold tracking-tight text-cyan-400 dark:text-cyan-400 truncate select-all">
                {calcResult !== null ? calcResult : calcExpression ? safeEval(calcExpression, calcAngleMode).toString() : "0"}
              </div>
            </div>

            {/* Keys layout */}
            <div className="flex flex-col lg:flex-row gap-4">
              
              {/* Left Column Block (Scientific Functions) */}
              <div className="flex-1 grid grid-cols-5 gap-1.5">
                {/* Row 1 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("sin(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  sin
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("cos(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  cos
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("tan(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  tan
                </button>
                
                {/* Deg/Rad Toggle spanned over 2 columns */}
                <div className="col-span-2 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 rounded-xl px-1.5 border border-slate-200 dark:border-slate-700/60 shadow-sm">
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="calcAngleMode"
                      checked={calcAngleMode === "deg"}
                      onChange={() => setCalcAngleMode("deg")}
                      className="accent-blue-600 h-3 w-3"
                    />
                    <span>Deg</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="radio"
                      name="calcAngleMode"
                      checked={calcAngleMode === "rad"}
                      onChange={() => setCalcAngleMode("rad")}
                      className="accent-blue-600 h-3 w-3"
                    />
                    <span>Rad</span>
                  </label>
                </div>

                {/* Row 2 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("sin^-1(")}
                  className="h-10 text-[10px] font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  sin⁻¹
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("cos^-1(")}
                  className="h-10 text-[10px] font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  cos⁻¹
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("tan^-1(")}
                  className="h-10 text-[10px] font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  tan⁻¹
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("π")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  π
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("e")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  e
                </button>

                {/* Row 3 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("^")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  xʸ
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("^3")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  x³
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("^2")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  x²
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("exp(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  eˣ
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("10^")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  10ˣ
                </button>

                {/* Row 4 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("yroot(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  ʸ√x
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("cbrt(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  ³√x
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("sqrt(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  √x
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("ln(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  ln
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("log(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  log
                </button>

                {/* Row 5 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  (
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress(")")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  )
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("1/(")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  1/x
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("%")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  %
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("!")}
                  className="h-10 text-xs font-bold rounded-xl bg-blue-50/60 hover:bg-blue-100/80 text-blue-600 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 dark:text-blue-400 border border-blue-100/40 dark:border-blue-900/20 transition-all shadow-sm"
                >
                  n!
                </button>
              </div>

              {/* Right Column Block (Standard Digits and Operations) */}
              <div className="flex-1 grid grid-cols-5 gap-1.5">
                {/* Row 1 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("7")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  7
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("8")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  8
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("9")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  9
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("+")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("Back")}
                  className="h-10 text-xs font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  Back
                </button>

                {/* Row 2 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("4")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  4
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("5")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  5
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("6")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  6
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("-")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("M+")}
                  className="h-10 text-xs font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  M+
                </button>

                {/* Row 3 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("1")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  1
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("2")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  2
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("3")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  3
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("*")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  ×
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("M-")}
                  className="h-10 text-xs font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  M-
                </button>

                {/* Row 4 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("0")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress(".")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-100/90 hover:bg-slate-200/90 text-slate-800 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50 shadow-sm transition-all"
                >
                  .
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("EXP")}
                  className="h-10 text-xs font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  EXP
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("/")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  ÷
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("MR")}
                  className="h-10 text-xs font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  MR
                </button>

                {/* Row 5 */}
                <button
                  type="button"
                  onClick={() => handleCalcPress("±")}
                  className="h-10 text-sm font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  ±
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("RND")}
                  className="h-10 text-xs font-bold rounded-xl bg-slate-200/60 hover:bg-slate-300/80 text-slate-800 dark:bg-slate-800/60 dark:hover:bg-slate-700/80 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all shadow-sm"
                >
                  RND
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("AC")}
                  className="h-10 text-xs font-bold rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:hover:bg-rose-900/50 dark:text-rose-400 border border-rose-100 dark:border-rose-900/20 transition-all shadow-md"
                >
                  AC
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("=")}
                  className="h-10 text-sm font-black rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md transition-all"
                >
                  =
                </button>
                <button
                  type="button"
                  onClick={() => handleCalcPress("Use")}
                  className="h-10 text-xs font-bold rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/50 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/20 transition-all shadow-sm"
                >
                  Use
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Dynamic Precision and Notation Control Center */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 p-3 rounded-2xl bg-slate-50/75 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/80 no-print">
          
          {/* Precision Slider (8px grid and alignment) */}
          <div className="md:col-span-7 flex flex-col gap-1.5 justify-center">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1">
                Accuracy Precision
                <span className="inline-flex items-center justify-center h-3.5 w-3.5 rounded-full border border-slate-300 dark:border-slate-700 text-[9px] text-slate-400 dark:text-slate-500 font-bold cursor-help" title="Configure decimal place rounding or significant figures output depth">i</span>
              </span>
              <span className="text-xs font-sans font-black text-blue-600 dark:text-cyan-400">
                {precision} Decimals
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="range" 
                min="2" 
                max="15" 
                value={precision} 
                onChange={(e) => setPrecision(parseInt(e.target.value))}
                className="w-full accent-blue-600 dark:accent-cyan-400 cursor-pointer h-1.5 rounded-lg bg-slate-200 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Number Notation Style Selector */}
          <div className="md:col-span-5 flex flex-col gap-1.5 justify-center">
            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Display Notation
            </span>
            <div className="grid grid-cols-3 gap-1 p-0.5 rounded-xl bg-slate-200/50 dark:bg-slate-900 border border-slate-200/10">
              {(["auto", "decimal", "scientific"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setNotation(mode)}
                  className={`py-1 text-[11px] font-bold rounded-lg capitalize transition-all ${notation === mode ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm scale-102" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"}`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Calculator Widget Grid */}
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-center">
          
          {/* FROM Unit Panel */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <label htmlFor="from-val-input" className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              CONVERT FROM ({fromUnit?.plural?.toUpperCase() || ""})
            </label>
            <div className="relative">
              <input
                id="from-val-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className="w-full h-14 pl-5 pr-14 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-2xl sm:text-3xl font-sans font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                placeholder="1"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                <span className="text-sm font-sans font-bold text-slate-400 dark:text-slate-500 uppercase select-none">
                  {fromUnit?.symbol || ""}
                </span>
              </div>
            </div>
            
            {/* From Dropdown selector */}
            <div className="relative">
              <select
                value={fromUnitId}
                onChange={(e) => setFromUnitId(e.target.value)}
                className="w-full h-12 pl-4 pr-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer appearance-none shadow-sm"
              >
                {category.units.map(unit => (
                  <option key={unit.id} value={unit.id} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* SWAP Trigger Column */}
          <div className="md:col-span-1 flex items-center justify-center no-print -my-3 md:my-0 z-10 relative">
            <button
              onClick={handleSwap}
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:scale-110 active:scale-95 hover:shadow-cyan-500/30 transition-all duration-300 border-2 border-white dark:border-slate-900"
              aria-label="Swap units"
            >
              <ArrowLeftRight className={`h-4.5 w-4.5 md:h-5 md:w-5 transition-transform duration-500 ${swapRotate ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* TO Unit Panel */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <label htmlFor="to-val-display" className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              CONVERT TO ({toUnit?.plural?.toUpperCase() || ""})
            </label>
            <div className="relative">
              <input
                id="to-val-display"
                type="text"
                readOnly
                value={formattedOutputResult.html}
                className="w-full h-14 pl-5 pr-14 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-2xl sm:text-3xl font-sans font-bold text-blue-600 dark:text-cyan-400 focus:outline-none transition-all shadow-sm cursor-text overflow-x-auto whitespace-nowrap scrollbar-none"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-sm font-sans font-bold text-slate-400 dark:text-slate-500 uppercase select-none pointer-events-none">
                {toUnit?.symbol || ""}
              </span>
            </div>

            {/* To Dropdown selector */}
            <div className="relative">
              <select
                value={toUnitId}
                onChange={(e) => setToUnitId(e.target.value)}
                className="w-full h-12 pl-4 pr-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all cursor-pointer appearance-none shadow-sm"
              >
                {category.units.map(unit => (
                  <option key={unit.id} value={unit.id} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
              <ChevronDown className="h-4 w-4 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Calculation Result Display Panel */}
        <div className="mt-5 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-950/20 border border-slate-150 dark:border-slate-800/80 flex flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-hidden max-w-full">
            <div className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30 text-emerald-500 shrink-0">
              <Check className="h-5 w-5 stroke-[3]" />
            </div>
            
            <div className="flex flex-col items-start text-left overflow-hidden max-w-full">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-black tracking-wider uppercase text-[9px] mb-1.5 shadow-[0_0_12px_rgba(16,185,129,0.05)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                MATHEMATICALLY VERIFIED EQUATION
              </span>
              <div className="text-lg font-sans font-black text-slate-900 dark:text-white break-words max-w-full leading-snug">
                <span dangerouslySetInnerHTML={{ __html: formattedInputResult.html }} /> {fromUnit?.plural} = <span className="text-blue-600 dark:text-cyan-400" dangerouslySetInnerHTML={{ __html: formattedOutputResult.html }} /> {toUnit?.plural}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 no-print shrink-0">
            {/* Reset */}
            <button
              onClick={handleReset}
              className="h-11 w-11 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 flex items-center justify-center transition-all shadow-sm"
              title="Reset values"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Boundary and limits alerts to maximize user trust */}
        {Math.abs(numericValue) < 1e-12 && numericValue !== 0 && (
          <div className="mt-3 p-3 rounded-xl border border-blue-100 dark:border-blue-950/40 bg-blue-50/50 dark:bg-blue-950/20 text-[11px] text-blue-600 dark:text-blue-400 flex items-start gap-2 animate-in slide-in-from-top-1 duration-150">
            <AlertCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" />
            <span>
              <strong>Scientific Notice:</strong> You entered an extremely small fractional value. The NIST conversion matrix is executing double-precision floating-point arithmetic with maximum fraction depth to preserve accuracy.
            </span>
          </div>
        )}

      </div>

      {/* Embedded Ad Banner to maximize AdSense suitability */}
      <AdPlaceholder slotId="converter-slot" className="no-print" />

    </div>
  );
}
