import React, { useMemo } from "react";
import katex from "katex";

interface MathFormulaProps {
  formula: string;
  displayMode?: boolean;
  className?: string;
  asInline?: boolean;
}

/**
 * Normalizes a mathematical or conversion string into valid LaTeX syntax for KaTeX.
 */
function normalizeToLatex(input: string): string {
  if (!input) return "";
  let s = input.trim();

  // Escape % symbol so it does not comment out LaTeX
  s = s.replace(/%/g, "\\%");

  // Convert plain text equation symbols, Greek letters, and fractions to clean LaTeX equivalents
  s = s
    .replace(/°C/g, "{^\\circ}\\text{C}")
    .replace(/°F/g, "{^\\circ}\\text{F}")
    .replace(/°/g, "{^\\circ}")
    .replace(/×/g, " \\times ")
    .replace(/·/g, " \\cdot ")
    .replace(/÷/g, " \\div ")
    .replace(/½/g, "\\frac{1}{2}")
    .replace(/¼/g, "\\frac{1}{4}")
    .replace(/¾/g, "\\frac{3}{4}")
    .replace(/π/g, "\\pi ")
    .replace(/ω/g, "\\omega ")
    .replace(/τ/g, "\\tau ")
    .replace(/μ/g, "\\mu ")
    .replace(/ρ/g, "\\rho ")
    .replace(/λ/g, "\\lambda ")
    .replace(/Δ/g, "\\Delta ")
    .replace(/σ/g, "\\sigma ")
    .replace(/ε/g, "\\varepsilon ")
    .replace(/η/g, "\\eta ")
    .replace(/θ/g, "\\theta ")
    .replace(/Φ/g, "\\Phi ")
    .replace(/Ω/g, "\\Omega ")
    .replace(/Σ/g, "\\Sigma ")
    .replace(/∑/g, "\\sum ")
    .replace(/x̄/g, "\\bar{x}")
    .replace(/±/g, "\\pm ")
    .replace(/≈/g, "\\approx ")
    .replace(/≤/g, "\\le ")
    .replace(/≥/g, "\\ge ")
    .replace(/≠/g, "\\ne ")
    .replace(/²/g, "^{2}")
    .replace(/³/g, "^{3}")
    .replace(/⁴/g, "^{4}")
    .replace(/⁻¹/g, "^{-1}")
    .replace(/⁻²/g, "^{-2}")
    .replace(/⁻³/g, "^{-3}");

  // Handle square roots: replace √[ ... ] or √(...) or √{...} with \sqrt{...}
  s = s.replace(/√\[([^\]]+)\]/g, "\\sqrt{$1}");
  s = s.replace(/√\(([^)]+)\)/g, "\\sqrt{$1}");
  s = s.replace(/√([a-zA-Z0-9]+)/g, "\\sqrt{$1}");
  s = s.replace(/√/g, "\\sqrt{}");

  // Normalize multi-character subscripts like N_driven -> N_{\text{driven}}, L_10 -> L_{10}
  s = s.replace(/_([a-zA-Z0-9]+)(?!})/g, (match, p1) => {
    if (/^[a-zA-Z]{2,}$/.test(p1)) {
      return `_{\\text{${p1}}}`;
    }
    return `_{${p1}}`;
  });

  // Ensure commands like \cdot, \times, \tau have spaces when directly followed by alphanumeric chars
  s = s
    .replace(/\\cdot(?=[a-zA-Z0-9])/g, "\\cdot ")
    .replace(/\\times(?=[a-zA-Z0-9])/g, "\\times ")
    .replace(/\\tau(?=[a-zA-Z0-9(])/g, "\\tau ")
    .replace(/\\mu(?=[a-zA-Z0-9(])/g, "\\mu ")
    .replace(/\\omega(?=[a-zA-Z0-9(])/g, "\\omega ");

  return s;
}

/**
 * Parses mixed text containing inline ($...$) or block ($$...$$) LaTeX expressions.
 */
function parseMixedTextWithMath(text: string) {
  if (!text) return [];
  const regex = /(\$\$[\s\S]+?\$\$|\$[^\$]+?\$)/g;
  const parts: Array<{ type: "text" | "math"; content: string; displayMode: boolean }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: "text", content: text.substring(lastIndex, match.index), displayMode: false });
    }
    const rawMatch = match[0];
    const isBlock = rawMatch.startsWith("$$");
    const mathContent = isBlock ? rawMatch.slice(2, -2) : rawMatch.slice(1, -1);
    parts.push({ type: "math", content: mathContent, displayMode: isBlock });
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push({ type: "text", content: text.substring(lastIndex), displayMode: false });
  }
  return parts;
}

export default function MathFormula({
  formula,
  displayMode = true,
  className = "",
  asInline = false
}: MathFormulaProps) {
  const hasTextColor = /\btext-/.test(className);
  const hasBgColor = /\bbg-/.test(className);
  const hasBorder = /\bborder/.test(className);

  const renderedContent = useMemo(() => {
    if (!formula) return null;

    // Check if the formula contains inline/block delimiters like $...$
    if (formula.includes("$")) {
      const parts = parseMixedTextWithMath(formula);
      return (
        <span className="inline-flex flex-wrap items-center gap-1 font-sans">
          {parts.map((part, idx) => {
            if (part.type === "text") {
              return <span key={idx}>{part.content}</span>;
            }
            try {
              const html = katex.renderToString(normalizeToLatex(part.content), {
                displayMode: part.displayMode,
                throwOnError: false,
                output: "html"
              });
              return (
                <span
                  key={idx}
                  className={`katex-inline inline-block font-sans ${hasTextColor ? "" : "text-current"}`}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            } catch (err) {
              console.warn("KaTeX inline rendering error:", err);
              return <code key={idx} className="font-mono text-xs">{part.content}</code>;
            }
          })}
        </span>
      );
    }

    // Otherwise render as a direct LaTeX equation
    const normalizedLatex = normalizeToLatex(formula);
    try {
      const html = katex.renderToString(normalizedLatex, {
        displayMode: asInline ? false : displayMode,
        throwOnError: false,
        output: "html"
      });
      return html;
    } catch (err) {
      console.warn("KaTeX equation rendering error:", err, "for formula:", formula);
      return null;
    }
  }, [formula, displayMode, asInline, hasTextColor]);

  if (!formula) return null;

  // If parsed mixed text with math
  if (typeof renderedContent !== "string" && renderedContent !== null) {
    return <span className={className}>{renderedContent}</span>;
  }

  // Fallback if KaTeX failed to produce string
  if (typeof renderedContent !== "string") {
    return <code className={`font-mono text-xs ${hasTextColor ? "" : "text-current"} ${className}`}>{formula}</code>;
  }

  // Block math rendering container
  if (displayMode && !asInline) {
    return (
      <div 
        className={`w-full overflow-x-auto custom-scrollbar my-2.5 py-2 px-3 rounded-xl ${hasBgColor ? "" : "bg-slate-50/80 dark:bg-slate-900/60"} ${hasBorder ? "" : "border border-slate-200/70 dark:border-slate-800"} text-center font-sans ${hasTextColor ? "" : "text-slate-900 dark:text-slate-100"} shadow-xs transition-colors ${className}`}
        aria-label={`Mathematical equation: ${formula}`}
      >
        <div 
          className="katex-block-wrapper flex items-center justify-center min-w-max mx-auto"
          dangerouslySetInnerHTML={{ __html: renderedContent }}
        />
      </div>
    );
  }

  // Inline math rendering
  return (
    <span
      className={`katex-inline-wrapper inline-flex items-center font-sans ${hasTextColor ? "" : "text-current"} align-middle ${className}`}
      aria-label={`Inline formula: ${formula}`}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
}
