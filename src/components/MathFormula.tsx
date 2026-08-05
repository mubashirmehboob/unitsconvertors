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

  // If the string already contains recognized LaTeX commands or math delimiters, preserve LaTeX structure
  if (/\\(text|frac|sum|int|log|left|right|times|cdot|div|delta|lambda|rho|AA|qquad|degree|mu)|[_^{}]/.test(s)) {
    return s;
  }

  // Convert plain text equation symbols to clean LaTeX equivalents
  s = s
    .replace(/°C/g, "{^\\circ}\\text{C}")
    .replace(/°F/g, "{^\\circ}\\text{F}")
    .replace(/°/g, "{^\\circ}")
    .replace(/×/g, " \\times ")
    .replace(/÷/g, " \\div ");

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
                throwOnError: false
              });
              return (
                <span
                  key={idx}
                  className="katex-inline inline-block text-slate-900 dark:text-slate-100 font-sans"
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
        throwOnError: false
      });
      return html;
    } catch (err) {
      console.warn("KaTeX equation rendering error:", err, "for formula:", formula);
      return null;
    }
  }, [formula, displayMode, asInline]);

  if (!formula) return null;

  // If parsed mixed text with math
  if (typeof renderedContent !== "string" && renderedContent !== null) {
    return <span className={className}>{renderedContent}</span>;
  }

  // Fallback if KaTeX failed to produce string
  if (typeof renderedContent !== "string") {
    return <code className={`font-mono text-xs text-slate-800 dark:text-slate-200 ${className}`}>{formula}</code>;
  }

  // Block math rendering container
  if (displayMode && !asInline) {
    return (
      <div 
        className={`w-full overflow-x-auto custom-scrollbar my-2.5 py-2 px-3 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800 text-center font-sans text-slate-900 dark:text-slate-100 shadow-xs transition-colors ${className}`}
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
      className={`katex-inline-wrapper inline-block font-sans text-slate-900 dark:text-slate-100 align-middle ${className}`}
      aria-label={`Inline formula: ${formula}`}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  );
}
