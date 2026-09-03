import { EngineeringTool, EngineeringCalculatorDiscipline } from "../calculatorsData";
import { EngineeringArticleData, EngineeringArticleFAQ } from "../engineeringArticlesEngine";

/**
 * Shared context provided to category templates and universal fallback generator
 */
export interface ArticleGeneratorContext {
  tool: EngineeringTool;
  discipline: EngineeringCalculatorDiscipline;
  allDisciplines: EngineeringCalculatorDiscipline[];
  canonicalUrl: string;
  calculatedOutput: number | null;
  outputFormatted: string;
  relatedTools: Array<{ id: string; name: string; formula: string; route: string }>;
  relevantUnitCategories: Array<{ id: string; name: string }>;
  normalizedDiscId: string;
}

/**
 * Universal Category Template Contract
 * Each category template implements this contract to populate domain-specific articles.
 * 
 * MANDATORY ARTICLE FORMATTING RULE FOR UnitsConvertors.com:
 * 1. NEVER use Markdown bold syntax `**...**` anywhere inside article content.
 * 2. For text that should be visibly bold, ALWAYS use proper HTML `<strong>...</strong>` tags.
 * 3. Never use Markdown `**...**` in introductions, overviews, equations, examples, or FAQs.
 */
export interface CalculatorCategoryArticleTemplate {
  categoryId: string; // e.g., "electrical-calc", "mechanical-calc", "civil-calc"
  categoryName: string; // e.g., "Electrical Engineering", "Mechanical Engineering"
  
  // Custom generator function for the template
  generateArticle: (ctx: ArticleGeneratorContext) => EngineeringArticleData;
}
