/**
 * Architecture & Data Registry for UnitsConvertors.com Educational Guides
 * 
 * Rules for guides:
 * - Slugs: lowercase, hyphen-separated, short & descriptive, no dates, no file extensions
 * - Published guides automatically:
 *   1. Appear on the /guides hub index page
 *   2. Become eligible for inclusion in sitemap.xml
 *   3. Generate valid Schema.org Article / BlogPosting structured data
 *   4. Link reciprocally with relevant converters
 */

export interface GuideItem {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  publishedAt?: string;
  updatedAt?: string;
  category?: string;
  readTimeMinutes?: number;
  relatedConverterSlugs?: string[];
  content?: string;
}

import { whatIsUnitConversionGuide } from "./guides/whatIsUnitConversion";
import { howToConvertUnitsGuide } from "./guides/howToConvertUnits";
import { unitConversionExplainedGuide } from "./guides/unitConversionExplained";
import { howUnitConversionFormulasWorkGuide } from "./guides/howUnitConversionFormulasWork";
import { metricVsImperialUnitsGuide } from "./guides/metricVsImperialUnits";
import { siUnitsExplainedGuide } from "./guides/siUnitsExplained";
import { commonMeasurementUnitsConversionFactorsGuide } from "./guides/commonMeasurementUnitsConversionFactors";
import { unitConversionFactorsGuide } from "./guides/unitConversionFactors";
import { howToConvertBetweenUnitSystemsGuide } from "./guides/howToConvertBetweenUnitSystems";
import { commonUnitConversionMistakesGuide } from "./guides/commonUnitConversionMistakes";

export {
  whatIsUnitConversionGuide,
  howToConvertUnitsGuide,
  unitConversionExplainedGuide,
  howUnitConversionFormulasWorkGuide,
  metricVsImperialUnitsGuide,
  siUnitsExplainedGuide,
  commonMeasurementUnitsConversionFactorsGuide,
  unitConversionFactorsGuide,
  howToConvertBetweenUnitSystemsGuide,
  commonUnitConversionMistakesGuide
};

/**
 * Current published guides list.
 */
export const publishedGuides: GuideItem[] = [
  commonUnitConversionMistakesGuide,
  commonMeasurementUnitsConversionFactorsGuide,
  unitConversionFactorsGuide,
  howToConvertBetweenUnitSystemsGuide,
  howUnitConversionFormulasWorkGuide,
  metricVsImperialUnitsGuide,
  siUnitsExplainedGuide,
  whatIsUnitConversionGuide,
  howToConvertUnitsGuide,
  unitConversionExplainedGuide
];

/**
 * Metadata for the /guides hub index page
 */
export const GUIDES_HUB_META = {
  title: "Guides | Unit Conversion & Measurement Resources",
  description: "Practical guides to unit conversion, measurement systems, SI units, conversion formulas, and related reference topics from UnitsConvertors.com.",
  canonicalUrl: "https://unitsconvertors.com/guides"
};

/**
 * Helper to retrieve a published guide by its URL slug (/guides/{guide-slug})
 */
export function getGuideBySlug(slug: string): GuideItem | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.toLowerCase().trim();
  return publishedGuides.find(g => g.slug.toLowerCase() === cleanSlug);
}
