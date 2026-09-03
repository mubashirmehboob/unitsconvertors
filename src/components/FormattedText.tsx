import React from "react";
import { formatArticleText } from "../utils/mathSanitizer";

interface FormattedTextProps {
  text?: string | null;
  className?: string;
  as?: "span" | "div" | "p";
}

/**
 * MANDATORY ARTICLE FORMATTING RULE:
 * 1. Use HTML <strong>...</strong> for bold emphasis. Never use Markdown **...** syntax.
 * 2. Mathematical expressions must render visibly in clean Unicode math (e.g. 1 rad² = 1 sr, 4π, 10⁻⁷).
 * 
 * FormattedText safely sanitizes and renders article strings containing:
 * - HTML tags like <strong>, <em>, <code>, <sup>, <sub>
 * - Automatic conversion of stray Markdown **text** into <strong>text</strong>
 * - Conversion of raw LaTeX/math syntax ($...$, \text{}, \pi, \frac{}, exponents) into clean Unicode
 */
export const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  className,
  as = "span",
}) => {
  if (!text) return null;

  const processed = formatArticleText(text);

  // If there are no HTML tags, render directly as clean text
  if (!processed.includes("<")) {
    if (as === "div") return <div className={className}>{processed}</div>;
    if (as === "p") return <p className={className}>{processed}</p>;
    return <span className={className}>{processed}</span>;
  }

  const Tag = as;
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: processed }}
    />
  );
};

export default FormattedText;
