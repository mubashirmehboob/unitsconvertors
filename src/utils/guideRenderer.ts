import katex from "katex";

/**
 * Universal Guide & Article Content Renderer for UnitsConvertors.com
 *
 * Responsibilities:
 * 1. Repairs JS string literal escape casualties & malformed LaTeX expressions:
 *    - \t + ext{ -> \text{
 *    - \f + rac{ -> \frac{
 *    - \t + imes -> \times
 *    - [\b] + eta -> \beta
 *    - \r + ho -> \rho
 *    - ext{ -> \text{
 *    - rac{ -> \frac{
 *    - cdot -> \cdot
 *    - circ -> \circ
 *    - approx -> \approx
 *    - bold-wrapped math "**$...$**" -> "$...$"
 * 2. Normalizes JSX className="..." attributes to HTML class="..." attributes.
 * 3. Renders KaTeX display math ($$...$$) in responsive, centered, styled containers.
 * 4. Renders KaTeX inline math ($...$) cleanly into typography without dollar signs.
 * 5. Parses Markdown tables into responsive, accessible, styled HTML tables.
 * 6. Enhances existing raw HTML tables with responsive wrappers and modern borders/padding if missing.
 * 7. Parses Markdown headings (## -> <h2>, ### -> <h3>, #### -> <h4>, # -> <h1>) and strips trailing hashes.
 * 8. Enhances raw HTML headings (<h2>, <h3>, <h4>) with professional Tailwind typography.
 * 9. Parses Markdown links ([Text](url)) into accessible styled anchor tags.
 * 10. Parses Markdown lists (- item, * item, 1. item) into styled <ul> and <ol>.
 * 11. Parses Markdown bold (**text**, __text__) and italics (*text*, _text_).
 * 12. Parses Markdown blockquotes (> quote) and horizontal rules (---).
 * 13. Parses Markdown code blocks (```...```) and inline code (`...`).
 * 14. Wraps loose un-tagged paragraphs in semantic <p> tags with comfortable reading line-height.
 * 15. Formats FAQ sections cleanly with distinct cards and hierarchy.
 */

/**
 * Repairs malformed mathematical and LaTeX patterns before parsing.
 */
function repairMalformedMath(text: string): string {
  if (!text) return "";
  let s = text;

  // 1. Repair JS string literal escape casualties (e.g. \t evaluated to tab, \f to formfeed, etc.)
  s = s.replace(/\text\{/g, "\\text{");
  s = s.replace(/\frac\{/g, "\\frac{");
  s = s.replace(/\times\b/g, "\\times");
  s = s.replace(/[\b]eta\b/g, "\\beta");
  s = s.replace(/\rho\b/g, "\\rho");

  // 2. Fix bold markers wrapped around math formulas: **$math$** or **$$math$$**
  s = s.replace(/\*\*\s*(\$\$[\s\S]*?\$\$)\s*\*\*/g, "$1");
  s = s.replace(/\*\*\s*(\$[^$\n]+?\$)\s*\*\*/g, "$1");

  // 3. Fix corrupted star-bold formula patterns like "**1*****m*****=100*****cm***"
  s = s.replace(/\*\*([0-9.]+)\*+([a-zA-Z]+)\*+=([0-9.]+)\*+([a-zA-Z]+)\*+/g, "$1 $2 = $3 $4");

  // 4. Missing backslashes inside math expressions (both $$...$$ and $...$)
  s = s.replace(/(\$\$[\s\S]*?\$\$|(?<!\\)\$[^$\n\r]+?\$)/g, (mathBlock) => {
    let m = mathBlock;
    m = m.replace(/(?<!\\)\bext\{/g, "\\text{");
    m = m.replace(/(?<!\\)\bfrac\{/g, "\\frac{");
    m = m.replace(/(?<!\\)\bimes\b/g, "\\times");
    m = m.replace(/(?<!\\)\bcdot\b/g, "\\cdot");
    m = m.replace(/(?<!\\)\bcirc\b/g, "\\circ");
    m = m.replace(/(?<!\\)\bapprox\b/g, "\\approx");
    m = m.replace(/(?<!\\)\bquad\b/g, "\\quad");
    m = m.replace(/(?<!\\)\bpm\b/g, "\\pm");
    m = m.replace(/(?<!\\)\bpi\b/g, "\\pi");
    m = m.replace(/(?<!\\)\bmu\b/g, "\\mu");
    m = m.replace(/(?<!\\)%/g, "\\%");
    return m;
  });

  return s;
}

/**
 * Converts Markdown table syntax into a responsive, styled semantic HTML table.
 */
function parseMarkdownTables(text: string): string {
  // Matches markdown tables with optional outer pipes
  const tableRegex = /((?:^[ \t]*\|?[^\n|]+\|[^\n]+\|?[ \t]*\r?\n)(?:^[ \t]*\|?[\s\-:|]+\|[\s\-:|]+\|?[ \t]*\r?\n)(?:^[ \t]*\|?[^\n|]+\|[^\n]+\|?[ \t]*\r?\n?)+)/gm;

  return text.replace(tableRegex, (match) => {
    const lines = match.trim().split(/\r?\n/).map((l) => l.trim());
    if (lines.length < 2) return match;

    const parseRow = (line: string): string[] => {
      let trimmed = line;
      if (trimmed.startsWith("|")) trimmed = trimmed.slice(1);
      if (trimmed.endsWith("|")) trimmed = trimmed.slice(0, -1);
      return trimmed.split("|").map((c) => c.trim());
    };

    const headers = parseRow(lines[0]);
    const alignLine = parseRow(lines[1]);
    const alignments = alignLine.map((col) => {
      const starts = col.startsWith(":");
      const ends = col.endsWith(":");
      if (starts && ends) return "text-center";
      if (ends) return "text-right";
      return "text-left";
    });

    const rows = lines.slice(2).map(parseRow);

    let html = `<div class="overflow-x-auto my-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">\n`;
    html += `  <table class="w-full text-left border-collapse text-sm">\n`;
    html += `    <thead>\n      <tr class="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800">\n`;
    headers.forEach((h, i) => {
      const align = alignments[i] || "text-left";
      html += `        <th class="p-3.5 font-bold text-slate-900 dark:text-white ${align}">${h}</th>\n`;
    });
    html += `      </tr>\n    </thead>\n`;
    html += `    <tbody class="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900">\n`;
    rows.forEach((r) => {
      html += `      <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">\n`;
      r.forEach((cell, i) => {
        const align = alignments[i] || "text-left";
        html += `        <td class="p-3.5 text-slate-700 dark:text-slate-300 ${align}">${cell}</td>\n`;
      });
      html += `      </tr>\n`;
    });
    html += `    </tbody>\n  </table>\n</div>\n`;
    return html;
  });
}

/**
 * Normalizes and renders full guide content to semantic HTML with KaTeX formulas.
 */
export function renderGuideHtml(rawContent: string): string {
  if (!rawContent) return "";

  // 1. Normalize JSX className to HTML class attributes
  let text = rawContent.replace(/\bclassName=(["'])/g, "class=$1");

  // 2. Pre-process and repair malformed math expressions
  text = repairMalformedMath(text);

  // 3. Extract and render Display Math ($$ ... $$)
  // Uses placeholders so subsequent regexes don't touch rendered KaTeX HTML.
  const displayMathMap = new Map<string, string>();
  let displayCounter = 0;

  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (match, equation) => {
    const placeholder = `%%%DISPLAY_MATH_PLACEHOLDER_${displayCounter++}%%%`;
    try {
      const cleanEq = equation.trim();
      const rendered = katex.renderToString(cleanEq, {
        displayMode: true,
        throwOnError: false,
        output: "html"
      });
      const container = `<div class="katex-display-container my-6 overflow-x-auto py-4 px-4 sm:px-6 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-center flex items-center justify-center shadow-xs">${rendered}</div>`;
      displayMathMap.set(placeholder, container);
    } catch {
      displayMathMap.set(placeholder, match);
    }
    return placeholder;
  });

  // 4. Extract and render Inline Math ($ ... $)
  // Matches $...$ that are not escaped and not empty
  const inlineMathMap = new Map<string, string>();
  let inlineCounter = 0;

  const inlineRegex = /(?<!\\)\$([^\s$][^$\r\n]*?[^\s$]|[^\s$])\$/g;
  text = text.replace(inlineRegex, (match, equation) => {
    const placeholder = `%%%INLINE_MATH_PLACEHOLDER_${inlineCounter++}%%%`;
    try {
      const cleanEq = equation.trim();
      const rendered = katex.renderToString(cleanEq, {
        displayMode: false,
        throwOnError: false,
        output: "html"
      });
      const inlineWrapper = `<span class="katex-inline inline-block font-sans align-middle text-slate-900 dark:text-slate-100 mx-0.5">${rendered}</span>`;
      inlineMathMap.set(placeholder, inlineWrapper);
    } catch {
      inlineMathMap.set(placeholder, match);
    }
    return placeholder;
  });

  // 5. Un-wrap Markdown Headings accidentally placed inside <p> tags
  text = text.replace(/<p[^>]*>\s*(#{1,6}\s+[^\r\n<]+?)\s*<\/p>/g, "$1");

  // 6. Parse Markdown Tables
  text = parseMarkdownTables(text);

  // 7. Parse Markdown Code Blocks
  text = text.replace(/```(\w*)\r?\n([\s\S]*?)```/g, (_match, _lang, code) => {
    const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<pre class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-sm overflow-x-auto"><code>${escaped}</code></pre>`;
  });

  // 8. Parse Markdown Headings (##, ###, ####, #) and strip any optional trailing hashes
  text = text.replace(
    /^[ \t]*####[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/gm,
    '<h4 class="font-display text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">$1</h4>'
  );
  text = text.replace(
    /^[ \t]*###[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/gm,
    '<h3 class="font-display text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">$1</h3>'
  );
  text = text.replace(
    /^[ \t]*##[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/gm,
    '<h2 class="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-4 tracking-tight border-b border-slate-100 dark:border-slate-800/80 pb-2.5">$1</h2>'
  );
  text = text.replace(
    /^[ \t]*#[ \t]+(.*?)(?:[ \t]+#+)?[ \t]*$/gm,
    '<h1 class="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-8 mb-4">$1</h1>'
  );

  // 9. Parse Markdown Blockquotes
  text = text.replace(/(?:^[ \t]*>[ \t]?[^\r\n]+(?:\r?\n|$))+/gm, (match) => {
    const content = match
      .trim()
      .split(/\r?\n/)
      .map((l) => l.replace(/^[ \t]*>[ \t]?/, "").trim())
      .join(" ");
    return `<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-4 italic text-slate-700 dark:text-slate-300 bg-blue-50/40 dark:bg-blue-950/20 rounded-r-xl">${content}</blockquote>\n`;
  });

  // 10. Parse Markdown Horizontal Rules
  text = text.replace(/^[ \t]*(?:---|\*\*\*|___)[ \t]*$/gm, '<hr class="my-8 border-slate-200 dark:border-slate-800" />');

  // 11. Parse Markdown Unordered & Ordered Lists (if not in HTML tags)
  text = text.replace(/(?:^[ \t]*[-*+][ \t]+[^\r\n]+(?:\r?\n|$))+/gm, (match) => {
    if (match.includes("<li>") || match.includes("<th") || match.includes("<td")) return match;
    const items = match.trim().split(/\r?\n/).map((l) => l.replace(/^[ \t]*[-*+][ \t]+/, "").trim());
    return `<ul class="list-disc pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">\n${items.map((it) => `  <li>${it}</li>`).join("\n")}\n</ul>\n`;
  });

  text = text.replace(/(?:^[ \t]*\d+\.[ \t]+[^\r\n]+(?:\r?\n|$))+/gm, (match) => {
    if (match.includes("<li>") || match.includes("<th") || match.includes("<td")) return match;
    const items = match.trim().split(/\r?\n/).map((l) => l.replace(/^[ \t]*\d+\.[ \t]+/, "").trim());
    return `<ol class="list-decimal pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">\n${items.map((it) => `  <li>${it}</li>`).join("\n")}\n</ol>\n`;
  });

  // 12. Parse Markdown Links: [Text](url)
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors">$1</a>');

  // 13. Parse Markdown Images: ![Alt](url)
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="my-6 rounded-2xl shadow-xs border border-slate-200 dark:border-slate-800 max-w-full h-auto" />');

  // 14. Parse Markdown Bold & Italics
  text = text.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__([^_]+?)__/g, "<strong>$1</strong>");
  text = text.replace(/(?<!\*)\*([^*\s][^*]*?[^*\s]|\b[^*\s]\b)\*(?!\*)/g, "<em>$1</em>");

  // 15. Parse Markdown Inline Code
  text = text.replace(/`([^`\r\n]+)`/g, '<code class="px-1.5 py-0.5 text-xs sm:text-sm font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded">$1</code>');

  // 16. Enhance existing raw HTML <h2>, <h3>, <h4> if they lack styling
  text = text.replace(/<h2>/g, '<h2 class="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-4 tracking-tight border-b border-slate-100 dark:border-slate-800/80 pb-2.5">');
  text = text.replace(/<h3>/g, '<h3 class="font-display text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">');
  text = text.replace(/<h4>/g, '<h4 class="font-display text-lg font-bold text-slate-900 dark:text-white mt-6 mb-2">');

  // 17. Wrap untagged Markdown paragraphs in semantic <p> tags
  const blockTagRegex = /^<(?:\/)?(div|p|h[1-6]|ul|ol|li|table|thead|tbody|tr|th|td|blockquote|pre|hr|section|article|header|nav)\b/i;
  const blocks = text.split(/\n{2,}/);
  text = blocks
    .map((b) => {
      const trimmed = b.trim();
      if (!trimmed) return "";
      if (blockTagRegex.test(trimmed) || trimmed.startsWith("%%%DISPLAY_MATH_PLACEHOLDER_")) {
        return trimmed;
      }
      return `<p class="my-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">${trimmed}</p>`;
    })
    .filter(Boolean)
    .join("\n\n");

  // 18. Clean up and unwrap any display containers placed directly inside <p> tags
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, (pMatch, pContent) => {
    if (pContent.includes("%%%DISPLAY_MATH_PLACEHOLDER_")) {
      return (
        `<p class="my-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">` +
        pContent.replace(
          /(%%%DISPLAY_MATH_PLACEHOLDER_\d+%%%)/g,
          `</p>\n$1\n<p class="my-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">`
        ) +
        `</p>`
      );
    }
    return pMatch;
  });
  text = text.replace(/<p[^>]*>\s*<\/p>/g, "");

  // 19. Re-insert Math Placeholders
  for (const [placeholder, rendered] of displayMathMap.entries()) {
    text = text.replace(placeholder, rendered);
  }
  for (const [placeholder, rendered] of inlineMathMap.entries()) {
    text = text.replace(placeholder, rendered);
  }

  return text;
}
