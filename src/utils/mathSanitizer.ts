/**
 * Global Math & Text Sanitizer for UnitsConvertors.com
 *
 * Converts raw LaTeX mathematical notation ($...$, \text{}, \pi, \frac{}, exponents, etc.)
 * into clean, readable, elegant Unicode mathematical typography.
 * Also transforms any stray Markdown bold (**...**) into standard HTML <strong>...</strong>.
 */

const SUPERSCRIPT_MAP: Record<string, string> = {
  "0": "⁰",
  "1": "¹",
  "2": "²",
  "3": "³",
  "4": "⁴",
  "5": "⁵",
  "6": "⁶",
  "7": "⁷",
  "8": "⁸",
  "9": "⁹",
  "+": "⁺",
  "-": "⁻",
  "=": "⁼",
  "(": "⁽",
  ")": "⁾",
  "n": "ⁿ",
  "i": "ⁱ",
  "x": "ˣ",
  "y": "ʸ"
};

const SUBSCRIPT_MAP: Record<string, string> = {
  "0": "₀",
  "1": "₁",
  "2": "₂",
  "3": "₃",
  "4": "₄",
  "5": "₅",
  "6": "₆",
  "7": "₇",
  "8": "₈",
  "9": "₉",
  "+": "₊",
  "-": "₋",
  "=": "₌",
  "(": "₍",
  ")": "₎",
  "a": "ₐ",
  "e": "ₑ",
  "o": "ₒ",
  "x": "ₓ"
};

export function toSuperscript(str: string): string {
  return str.split("").map((c) => SUPERSCRIPT_MAP[c] || c).join("");
}

export function toSubscript(str: string): string {
  return str.split("").map((c) => SUBSCRIPT_MAP[c] || c).join("");
}

/**
 * Converts a single LaTeX mathematical expression into clean Unicode math.
 */
export function cleanSingleMathExpr(expr: string): string {
  if (!expr) return "";
  let s = expr;

  // 1. Remove text wrappers: \text{...}, \mathrm{...}, \mathbf{...}, \mathit{...}, \operatorname{...}
  s = s.replace(/\\(text|mathrm|mathbf|mathit|operatorname|textbf)\{([^}]+)\}/g, "$2");

  // 2. Greek letters
  s = s
    .replace(/\\pi\b/g, "π")
    .replace(/\\tau\b/g, "τ")
    .replace(/\\theta\b/g, "θ")
    .replace(/\\Theta\b/g, "Θ")
    .replace(/\\Omega\b/g, "Ω")
    .replace(/\\omega\b/g, "ω")
    .replace(/\\mu\b/g, "µ")
    .replace(/\\Delta\b/g, "Δ")
    .replace(/\\delta\b/g, "δ")
    .replace(/\\lambda\b/g, "λ")
    .replace(/\\Lambda\b/g, "Λ")
    .replace(/\\sigma\b/g, "σ")
    .replace(/\\Sigma\b/g, "Σ")
    .replace(/\\alpha\b/g, "α")
    .replace(/\\beta\b/g, "β")
    .replace(/\\gamma\b/g, "γ")
    .replace(/\\Gamma\b/g, "Γ")
    .replace(/\\phi\b/g, "φ")
    .replace(/\\Phi\b/g, "Φ")
    .replace(/\\rho\b/g, "ρ")
    .replace(/\\eta\b/g, "η")
    .replace(/\\varepsilon\b|\\epsilon\b/g, "ε");

  // 3. Mathematical operators, relations, symbols
  s = s
    .replace(/\\approx\b/g, "≈")
    .replace(/\\times\b/g, "×")
    .replace(/\\cdot\b/g, "·")
    .replace(/\\div\b/g, "÷")
    .replace(/\\pm\b/g, "±")
    .replace(/\\mp\b/g, "∓")
    .replace(/\\le\b|\\leq\b/g, "≤")
    .replace(/\\ge\b|\\geq\b/g, "≥")
    .replace(/\\neq\b|\\ne\b/g, "≠")
    .replace(/\\equiv\b/g, "≡")
    .replace(/\\sim\b/g, "~")
    .replace(/\\propto\b/g, "∝")
    .replace(/\\infty\b/g, "∞")
    .replace(/\\degree\b|\^\\circ|\^\{\\circ\}|\\circ\b/g, "°");

  // 4. Square roots: \sqrt{...} -> √( ... )
  s = s.replace(/\\sqrt\{([^}]+)\}/g, "√($1)");
  s = s.replace(/\\sqrt\b/g, "√");

  // 5. Fractions: \frac{num}{den} -> (num / den) or num / den
  while (/\\frac\{([^{}]+)\}\{([^{}]+)\}/.test(s)) {
    s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, num, den) => {
      const trimmedNum = num.trim();
      const trimmedDen = den.trim();
      return `${trimmedNum} / ${trimmedDen}`;
    });
  }

  // 6. Explicit degree symbols like {^\circ}C or ^\circ C
  s = s.replace(/\{?\^?\\circ\}?([CF])/g, "°$1");

  // 7. Superscripts with braces: ^{...}
  s = s.replace(/\^\{([^{}]+)\}/g, (_m, exp) => {
    const trimmed = exp.trim();
    return toSuperscript(trimmed);
  });

  // 8. Superscripts with single characters: ^2, ^3, ^-, ^+
  s = s.replace(/\^([0-9+\-nixy])/g, (_m, char) => {
    return toSuperscript(char);
  });

  // 9. Subscripts with braces: _{...}
  s = s.replace(/_\{([^{}]+)\}/g, (_m, sub) => {
    const trimmed = sub.trim();
    if (trimmed.startsWith("(") && trimmed.endsWith(")")) {
      return trimmed;
    }
    if (/^[0-9+\-aeox]+$/.test(trimmed)) {
      return toSubscript(trimmed);
    }
    return `(${trimmed})`;
  });

  // 10. Subscripts with parentheses: _(F) -> (F)
  s = s.replace(/_\(([A-Za-z0-9]+)\)/g, "($1)");

  // 11. Clean spacing macros: \, \;, \!, \quad
  s = s
    .replace(/\\quad\b/g, "  ")
    .replace(/\\,/g, " ")
    .replace(/\\;/g, " ")
    .replace(/\\!/g, "");

  // 12. Clean leftover stray backslashes before plain words
  s = s.replace(/\\([a-zA-Z]+)/g, "$1");

  // 13. Remove leftover curly braces around plain text
  s = s.replace(/\{([^{}]+)\}/g, "$1");
  s = s.replace(/[{}]/g, "");

  return s;
}

/**
 * Transforms any text string by converting $...$ LaTeX blocks and bare LaTeX commands
 * into clean Unicode math notation.
 */
export function cleanMathToUnicode(input: string): string {
  if (!input) return "";
  let s = input;

  // Process $$...$$ block math
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_match, inner) => {
    return cleanSingleMathExpr(inner.trim());
  });

  // Process $...$ inline math
  s = s.replace(/\$([^\$\n]+)\$/g, (_match, inner) => {
    return cleanSingleMathExpr(inner.trim());
  });

  // Catch any remaining bare LaTeX commands that were not wrapped in $...$
  if (
    s.includes("\\text{") ||
    s.includes("\\frac{") ||
    s.includes("\\pi") ||
    s.includes("\\approx") ||
    s.includes("\\times") ||
    s.includes("\\cdot") ||
    s.includes("\\sqrt{") ||
    s.includes("\\circ") ||
    s.includes("\\equiv")
  ) {
    s = cleanSingleMathExpr(s);
  }

  // Ensure powers like ^2, ^3 in plain text are turned into ² and ³
  s = s
    .replace(/rad\^2\b/g, "rad²")
    .replace(/m\^2\b/g, "m²")
    .replace(/cm\^2\b/g, "cm²")
    .replace(/ft\^2\b/g, "ft²")
    .replace(/in\^2\b/g, "in²")
    .replace(/m\^3\b/g, "m³")
    .replace(/cm\^3\b/g, "cm³")
    .replace(/ft\^3\b/g, "ft³")
    .replace(/in\^3\b/g, "in³")
    .replace(/s\^2\b/g, "s²")
    .replace(/s\^-1\b/g, "s⁻¹")
    .replace(/\^2\b/g, "²")
    .replace(/\^3\b/g, "³")
    .replace(/\^4\b/g, "⁴")
    .replace(/\^-1\b/g, "⁻¹")
    .replace(/\^-2\b/g, "⁻²")
    .replace(/\^-3\b/g, "⁻³");

  return s;
}

/**
 * Complete text formatter:
 * 1. Converts Markdown bold (**text**) to standard HTML <strong>text</strong>.
 * 2. Converts LaTeX math expressions into clean Unicode math.
 * 3. Preserves legitimate HTML tags (<strong>, <em>, <code>, etc.).
 */
export function formatArticleText(text: string | null | undefined): string {
  if (!text) return "";
  let processed = text;

  // 1. Transform markdown bold **...** into <strong>...</strong>
  if (processed.includes("**")) {
    processed = processed.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
  }

  // 2. Clean math syntax
  processed = cleanMathToUnicode(processed);

  // 3. Normalize spaces
  processed = processed.replace(/ {2,}/g, " ");

  return processed;
}

/**
 * Recursively traverses and sanitizes all text fields in an article data structure.
 * Preserves `math` fields intended for KaTeX (e.g. formula.math).
 */
export function sanitizeArticleData<T>(obj: T): T {
  if (!obj || typeof obj !== "object") {
    if (typeof obj === "string") {
      return formatArticleText(obj) as unknown as T;
    }
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => sanitizeArticleData(item)) as unknown as T;
  }

  const result: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj as Record<string, any>)) {
    // Preserve formula.math or fields named 'math' for KaTeX blocks
    if (key === "math" && typeof value === "string") {
      result[key] = value;
    } else if (typeof value === "string") {
      // Don't inject HTML tags into metaDescription or seoTitle, only clean math
      if (key === "seoTitle" || key === "metaDescription") {
        result[key] = cleanMathToUnicode(value.replace(/\*\*([^*]+?)\*\*/g, "$1"));
      } else {
        result[key] = formatArticleText(value);
      }
    } else if (typeof value === "object" && value !== null) {
      result[key] = sanitizeArticleData(value);
    } else {
      result[key] = value;
    }
  }

  return result as T;
}

