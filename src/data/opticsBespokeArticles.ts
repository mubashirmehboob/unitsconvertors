import { EngineeringArticleData } from "./engineeringArticlesEngine";
import { opticsBespokeArticlesPart1 } from "./opticsBespokeArticles1";
import { opticsBespokeArticlesPart2 } from "./opticsBespokeArticles2";

/**
 * Combined master dictionary of production-quality bespoke articles for Optics & Light Calculators (18 tools).
 * Adheres strictly to OPTICS & LIGHT CALCULATOR ARTICLE TEMPLATE V1.0.
 */
export const opticsBespokeArticlesMap: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  ...opticsBespokeArticlesPart1,
  ...opticsBespokeArticlesPart2
};
