import { EngineeringTool, EngineeringCalculatorDiscipline } from "./calculatorsData";
import { categoriesData } from "./convertersData";
import { bespokeArticlesMap } from "./bespokeArticles";
import { ArticleGeneratorContext } from "./articleTemplates/types";
import { getCategoryTemplate } from "./articleTemplates/registry";
import { generateUniversalFallbackArticle, universalDisciplineStandardsMap } from "./articleTemplates/universalFallback";
import { sanitizeArticleData } from "../utils/mathSanitizer";

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
export interface EngineeringArticleFAQ {
  question: string;
  answer: string;
}

export interface EngineeringArticleData {
  title: string;
  metaDescription: string;
  canonicalUrl: string;
  introduction: {
    overview: string;
    applications: string[];
    industries: string[];
  };
  quickAnswer: string;
  governingEquation: {
    formula: string;
    explanation: string;
    variables: Array<{
      symbol: string;
      label: string;
      unit: string;
      description: string;
    }>;
  };
  inputParameters: Array<{
    name: string;
    label: string;
    unit: string;
    defaultValue: number;
    explanation: string;
  }>;
  outputExplanation: {
    unit: string;
    interpretation: string;
    designImpact: string;
  };
  stepByStepExample: {
    givenInputs: Array<{ label: string; value: number; unit: string }>;
    substitution: string;
    intermediateSteps: string[];
    finalResult: string;
    unit: string;
  };
  practicalExample: {
    scenarioTitle: string;
    industryContext: string;
    problemStatement: string;
    engineeringSolution: string;
  };
  assumptions: string[];
  limitations: string[];
  commonMistakes: string[];
  bestPractices: string[];
  faqs: EngineeringArticleFAQ[];
  standardsReferences: Array<{
    organization: string;
    code: string;
    title: string;
  }>;
  internalLinks: {
    parentDiscipline: { id: string; name: string };
    relatedTools: Array<{ id: string; name: string; formula: string; route: string }>;
    relevantUnitCategories: Array<{ id: string; name: string }>;
  };
}

// Re-export standards map for backwards compatibility if needed
export const disciplineStandardsMap = universalDisciplineStandardsMap;

// Helper to find related converter categories
export function getRelatedConverterCategories(disciplineId: string) {
  const catIds: string[] = [];
  const lower = disciplineId.toLowerCase();
  
  if (lower.includes("electrical") || lower.includes("electronics")) {
    catIds.push("electric-potential", "electric-current", "electric-resistance", "energy", "power");
  } else if (lower.includes("mechanical") || lower.includes("civil")) {
    catIds.push("pressure", "force", "length", "area", "volume", "density");
  } else if (lower.includes("thermodynamics") || lower.includes("hvac")) {
    catIds.push("temperature", "heat-capacity", "energy", "power", "pressure");
  } else if (lower.includes("fluid")) {
    catIds.push("volumetric-flow-rate", "pressure", "viscosity", "density", "volume");
  } else if (lower.includes("optics") || lower.includes("light")) {
    catIds.push("illuminance", "luminance", "luminous-intensity", "length");
  } else if (lower.includes("physics")) {
    catIds.push("speed", "acceleration", "force", "work", "power", "energy");
  } else if (lower.includes("chemistry")) {
    catIds.push("concentration", "mass", "volume", "molar-mass");
  } else if (lower.includes("surveying") || lower.includes("gis") || lower.includes("navigation") || lower.includes("astronomy")) {
    catIds.push("angle", "length");
  } else {
    catIds.push("pressure", "energy", "power", "length", "temperature");
  }

  return categoriesData
    .filter(cat => catIds.includes(cat.id))
    .map(cat => ({ id: cat.id, name: cat.name }));
}

/**
 * Universal Article Engine Entry Point
 * Orchestrates article generation adhering to strict priority rules:
 * 1. Calculator-Specific Bespoke Article Override
 * 2. Category-Specific Article Template
 * 3. Universal Fallback Template
 */
export function generateEngineeringArticle(
  tool: EngineeringTool,
  discipline: EngineeringCalculatorDiscipline,
  allDisciplines: EngineeringCalculatorDiscipline[]
): EngineeringArticleData {
  const normalizedDiscId = discipline.id.endsWith("-calc") ? discipline.id : `${discipline.id}-calc`;
  const route = tool.route || `/engineering-calculators/${discipline.id}/${tool.id}`;
  const canonicalUrl = `https://www.unitsconvertors.com${route.startsWith("/") ? route : "/" + route}`;

  // Related tools in same discipline
  const relatedTools = discipline.tools
    .filter(t => t.id !== tool.id)
    .slice(0, 6)
    .map(t => ({
      id: t.id,
      name: t.name,
      formula: t.formula,
      route: t.route || `/engineering-calculators/${discipline.id}/${t.id}`
    }));

  // Relevant converter categories
  const relevantUnitCategories = getRelatedConverterCategories(discipline.id);

  // 1. PRIORITY 1: Calculator-specific bespoke article override
  if (bespokeArticlesMap[tool.id]) {
    return sanitizeArticleData(bespokeArticlesMap[tool.id](canonicalUrl, relatedTools, relevantUnitCategories));
  }

  // Calculate default step-by-step output
  const defaultInputsMap: Record<string, number> = {};
  tool.inputs.forEach(inp => {
    defaultInputsMap[inp.name] = inp.defaultValue;
  });

  let calculatedOutput: number | null = null;
  try {
    const calcFn = tool.calculate as any;
    const res = calcFn(defaultInputsMap);
    if (typeof res === "number" && !isNaN(res)) {
      calculatedOutput = res;
    } else {
      const args = tool.inputs.map(i => i.defaultValue);
      calculatedOutput = calcFn(...args);
    }
  } catch {
    calculatedOutput = 1.0;
  }

  const outputFormatted = calculatedOutput !== null ? calculatedOutput.toLocaleString(undefined, { maximumFractionDigits: 4 }) : "1.00";

  // Build shared context for article templates / universal fallback
  const ctx: ArticleGeneratorContext = {
    tool,
    discipline,
    allDisciplines,
    canonicalUrl,
    calculatedOutput,
    outputFormatted,
    relatedTools,
    relevantUnitCategories,
    normalizedDiscId
  };

  // 2. PRIORITY 2: Category-specific article template from registry
  const categoryTemplate = getCategoryTemplate(normalizedDiscId) || getCategoryTemplate(discipline.id);
  if (categoryTemplate) {
    return sanitizeArticleData(categoryTemplate.generateArticle(ctx));
  }

  // 3. PRIORITY 3: Universal fallback article structure
  return sanitizeArticleData(generateUniversalFallbackArticle(ctx));
}

