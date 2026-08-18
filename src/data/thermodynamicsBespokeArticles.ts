import { EngineeringArticleData } from "./engineeringArticlesEngine";
import { thermodynamicsBespokeArticlesPart1 } from "./thermodynamicsBespokeArticles1";
import { thermodynamicsBespokeArticlesPart2 } from "./thermodynamicsBespokeArticles2";

/**
 * Unified bespoke articles map for all 12 Thermodynamics Calculators:
 * 1. heat-transfer (Conduction Heat Transfer Calculator)
 * 2. heat-transfer-rate (Heat Transfer Rate Calculator)
 * 3. convection-heat-transfer (Convection Heat Transfer Calculator)
 * 4. radiation-heat-transfer (Radiation Heat Transfer Calculator)
 * 5. specific-heat-energy (Specific Heat Energy Calculator)
 * 6. thermal-expansion (Thermal Expansion Calculator)
 * 7. carnot-efficiency (Carnot Efficiency Calculator)
 * 8. ideal-gas-law (Ideal Gas Law Calculator)
 * 9. isothermal-process (Isothermal Process Calculator)
 * 10. adiabatic-process (Adiabatic Process Calculator)
 * 11. heat-exchanger-effectiveness (Heat Exchanger Effectiveness Calculator)
 * 12. thermal-resistance (Thermal Resistance Calculator)
 */
export const thermodynamicsBespokeArticlesMap: Record<
  string,
  (canonicalUrl: string, relatedTools: any[], relevantUnitCategories: any[]) => EngineeringArticleData
> = {
  ...thermodynamicsBespokeArticlesPart1,
  ...thermodynamicsBespokeArticlesPart2
};
