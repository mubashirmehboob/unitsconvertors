import { CalculatorCategoryArticleTemplate } from "./types";
import { electricalArticleTemplate } from "./electricalTemplate";
import { mechanicalArticleTemplate } from "./mechanicalTemplate";
import { chemistryArticleTemplate } from "./chemistryTemplate";
import { fluidMechanicsArticleTemplate } from "./fluidMechanicsTemplate";

/**
 * Category Template Registry
 * Central repository for all category-specific calculator article templates.
 */
const categoryTemplateRegistry: Record<string, CalculatorCategoryArticleTemplate> = {};

/**
 * Register a category-specific article template
 */
export function registerCategoryTemplate(template: CalculatorCategoryArticleTemplate): void {
  categoryTemplateRegistry[template.categoryId.toLowerCase()] = template;
}

// Auto-register built-in category templates
registerCategoryTemplate(electricalArticleTemplate);
categoryTemplateRegistry["electrical-calculators"] = electricalArticleTemplate;
categoryTemplateRegistry["electrical-calculators-calc"] = electricalArticleTemplate;

// Register electrical template as secondary for electronics-calc
categoryTemplateRegistry["electronics-calc"] = electricalArticleTemplate;
categoryTemplateRegistry["electronics-calculators"] = electricalArticleTemplate;
categoryTemplateRegistry["electronics-calculators-calc"] = electricalArticleTemplate;

registerCategoryTemplate(mechanicalArticleTemplate);

// Register chemistry template
registerCategoryTemplate(chemistryArticleTemplate);
categoryTemplateRegistry["chemistry-calculators"] = chemistryArticleTemplate;
categoryTemplateRegistry["chemistry-calculators-calc"] = chemistryArticleTemplate;

// Register fluid mechanics template
registerCategoryTemplate(fluidMechanicsArticleTemplate);
categoryTemplateRegistry["fluid-mechanics-calculators"] = fluidMechanicsArticleTemplate;
categoryTemplateRegistry["fluid-mechanics-calculators-calc"] = fluidMechanicsArticleTemplate;
categoryTemplateRegistry["fluid-calc"] = fluidMechanicsArticleTemplate;
categoryTemplateRegistry["fluid-calculators"] = fluidMechanicsArticleTemplate;

/**
 * Retrieve a registered category article template by category/discipline ID
 */
export function getCategoryTemplate(categoryId: string): CalculatorCategoryArticleTemplate | undefined {
  const key = categoryId.toLowerCase();
  const normalizedKey = key.endsWith("-calc") ? key : `${key}-calc`;
  return categoryTemplateRegistry[key] || categoryTemplateRegistry[normalizedKey];
}

/**
 * Check if a category template exists for the given ID
 */
export function hasCategoryTemplate(categoryId: string): boolean {
  return !!getCategoryTemplate(categoryId);
}

/**
 * Get all registered category templates
 */
export function getAllRegisteredTemplates(): CalculatorCategoryArticleTemplate[] {
  return Object.values(categoryTemplateRegistry);
}

