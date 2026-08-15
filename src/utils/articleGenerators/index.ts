import { Category, Unit } from "../../types";
import { FormatOptions, SEOArticle } from "../conversionEngine";
import { generateDataTransferContent } from "./dataTransferGenerator";
import { generateSolidAngleContent } from "./solidAngleGenerator";

export type CategoryContentGenerator = (
  category: Category,
  fromUnit: Unit,
  toUnit: Unit,
  formatOpts: FormatOptions
) => SEOArticle;

export const categoryGenerators: Record<string, CategoryContentGenerator> = {
  "data-transfer": generateDataTransferContent,
  "solid-angle": generateSolidAngleContent,
};

export { generateDataTransferContent, generateSolidAngleContent };
