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
 * Each category template implements this contract to populate domain-specific articles
 */
export interface CalculatorCategoryArticleTemplate {
  categoryId: string; // e.g., "electrical-calc", "mechanical-calc", "civil-calc"
  categoryName: string; // e.g., "Electrical Engineering", "Mechanical Engineering"
  
  // Custom generator function for the template
  generateArticle: (ctx: ArticleGeneratorContext) => EngineeringArticleData;
}
