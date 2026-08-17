import { EngineeringArticleData } from "./engineeringArticlesEngine";
import { physicsBespokeArticlesPart1 } from "./physicsBespokeArticles1";
import { physicsBespokeArticlesPart2 } from "./physicsBespokeArticles2";

/**
 * Combined production-quality bespoke technical articles for Physics Calculators.
 * Adheres strictly to PHYSICS CALCULATOR ARTICLE TEMPLATE V1.0.
 */

export const physicsBespokeArticlesMap: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  ...physicsBespokeArticlesPart1,
  ...physicsBespokeArticlesPart2
};
