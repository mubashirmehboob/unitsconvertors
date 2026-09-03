/**
 * MANDATORY ARTICLE FORMATTING RULE FOR UnitsConvertors.com:
 * 
 * 1. NEVER use Markdown bold syntax `**...**` anywhere inside article content.
 * 2. For text that should be visibly bold, ALWAYS use proper HTML `<strong>...</strong>` tags.
 * 3. This rule applies to:
 *    - existing articles
 *    - newly generated articles
 *    - regenerated articles
 *    - edited articles
 *    - FAQs
 *    - worked examples
 *    - tables
 *    - notes
 *    - introductions
 *    - SEO content
 *    - related content sections
 * 4. Exception: Do NOT alter legitimate mathematical power operators or code expressions
 *    containing asterisks (e.g. `10**12` or `Math.sin(x)**2`). Only target text emphasis.
 */
export interface CustomArticleData {
  fromUnitId: string;
  toUnitId: string;
  seoTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  h1: string;
  introduction: string[];
  quickAnswer: {
    text: string;
    formulaDisplay: string;
    subtext: string;
  };
  aboutSourceUnit: {
    title: string;
    text: string;
  };
  aboutTargetUnit: {
    title: string;
    text: string;
  };
  relationship: string;
  relationshipTitle?: string;
  relationshipItems: { label: string; value: string }[];
  formula: {
    text: string;
    math: string;
    subtext: string;
  };
  formulaTitle?: string;
  practicalTip?: {
    title?: string;
    text: string;
  };
  expertNote?: {
    title?: string;
    text: string;
  };
  examples: {
    title: string;
    items: {
      title: string;
      subtitle: string;
      steps: string[];
    }[];
  };
  table: {
    title: string;
    headers: string[];
    rows: { fromVal: string; toVal: string; extra: string; extra2?: string; extra3?: string; extra4?: string }[];
  };
  applications: {
    title: string;
    items: { title: string; text: string }[];
  };
  pitfalls: {
    title: string;
    items: string[];
  };
  faqs: {
    question: string;
    answer: string;
    questionId?: string;
  }[];
  relatedList?: { label: string; from: string; to: string }[];
  relatedArticles?: { title: string; description: string; from: string; to: string }[];
  references?: string[];
}
