import { categoriesData } from "../data/convertersData";

/**
 * Standardized SEO Category Route Mapping
 * 
 * Maps internal category IDs to clean, top-level SEO friendly route slugs:
 * e.g., 'speed' -> 'speed-conversion'
 *       'length' -> 'length-conversion'
 *       'weight-mass' -> 'weight-conversion'
 */

export const CATEGORY_ROUTE_SLUGS: Record<string, string> = {
  "length": "length-conversion",
  "weight-mass": "weight-conversion",
  "area": "area-conversion",
  "volume": "volume-conversion",
  "temperature": "temperature-conversion",
  "time": "time-conversion",
  "speed": "speed-conversion",
  "pressure": "pressure-conversion",
  "energy": "energy-conversion",
  "power": "power-conversion",
  "fuel-economy": "fuel-economy-conversion",
  "cooking": "cooking-conversion",
  "data-storage": "data-storage-conversion",
  "density": "density-conversion",
  "voltage": "voltage-conversion",
  "amount-of-substance": "amount-of-substance-conversion",
  "light": "light-conversion",
  "sound": "sound-conversion",
  "force": "force-conversion",
  "flow": "flow-conversion",
  "angle": "angle-conversion",
  "electricity": "electricity-conversion",
  "construction": "construction-conversion",
  "data-transfer": "data-transfer-conversion",
  "solid-angle": "solid-angle-conversion",
  "torque": "torque-conversion",
  "acceleration": "acceleration-conversion",
  "electric-resistance": "electric-resistance-conversion",
  "capacitance": "capacitance-conversion",
  "inductance": "inductance-conversion",
  "electric-charge": "electric-charge-conversion",
  "radioactivity": "radioactivity-conversion"
};

// Aliases mapping alternate URL forms or legacy slugs to internal category ID
export const CATEGORY_SLUG_ALIASES: Record<string, string> = {
  // Direct -conversion slugs
  "length-conversion": "length",
  "weight-conversion": "weight-mass",
  "weight-mass-conversion": "weight-mass",
  "mass-conversion": "weight-mass",
  "area-conversion": "area",
  "volume-conversion": "volume",
  "temperature-conversion": "temperature",
  "time-conversion": "time",
  "speed-conversion": "speed",
  "pressure-conversion": "pressure",
  "energy-conversion": "energy",
  "power-conversion": "power",
  "fuel-economy-conversion": "fuel-economy",
  "cooking-conversion": "cooking",
  "data-storage-conversion": "data-storage",
  "density-conversion": "density",
  "voltage-conversion": "voltage",
  "amount-of-substance-conversion": "amount-of-substance",
  "substance-conversion": "amount-of-substance",
  "light-conversion": "light",
  "illumination-conversion": "light",
  "sound-conversion": "sound",
  "force-conversion": "force",
  "flow-conversion": "flow",
  "angle-conversion": "angle",
  "electricity-conversion": "electricity",
  "electric-current-conversion": "electricity",
  "construction-conversion": "construction",
  "data-transfer-conversion": "data-transfer",
  "solid-angle-conversion": "solid-angle",
  "torque-conversion": "torque",
  "acceleration-conversion": "acceleration",
  "electric-resistance-conversion": "electric-resistance",
  "resistance-conversion": "electric-resistance",
  "capacitance-conversion": "capacitance",
  "inductance-conversion": "inductance",
  "electric-charge-conversion": "electric-charge",
  "charge-conversion": "electric-charge",
  "radioactivity-conversion": "radioactivity"
};

/**
 * Get the canonical URL slug for a category ID.
 * Defaults to `${categoryId}-conversion` if not explicitly in mapping.
 */
export function getCategoryRouteSlug(categoryId: string): string {
  if (CATEGORY_ROUTE_SLUGS[categoryId]) {
    return CATEGORY_ROUTE_SLUGS[categoryId];
  }
  return `${categoryId}-conversion`;
}

/**
 * Get the canonical route path for a category (e.g. '/speed-conversion')
 */
export function getCategoryRouteUrl(categoryId: string): string {
  return `/${getCategoryRouteSlug(categoryId)}`;
}

/**
 * Identify if a URL segment or path corresponds to a category hub.
 * Returns the matching internal category ID or null if not found.
 */
export function getCategoryFromRouteSlug(slugOrPath: string): string | null {
  if (!slugOrPath) return null;
  // Clean leading/trailing slashes and hashes
  const clean = slugOrPath.replace(/^\/+/, "").replace(/\/+$/, "").replace(/^#+/, "");

  // 1. Direct alias match (e.g. 'speed-conversion' -> 'speed')
  if (CATEGORY_SLUG_ALIASES[clean]) {
    return CATEGORY_SLUG_ALIASES[clean];
  }

  // 2. Direct ID match (e.g. 'speed' -> 'speed')
  const directCat = categoriesData.find(c => c.id === clean);
  if (directCat) {
    return directCat.id;
  }

  // 3. Trailing '-conversion' pattern matching
  if (clean.endsWith("-conversion")) {
    const base = clean.replace(/-conversion$/, "");
    const matched = categoriesData.find(c => c.id === base);
    if (matched) return matched.id;
  }

  return null;
}

/**
 * Identify and return the Category object by route slug or URL segment.
 * Returns the Category object or undefined if not found.
 */
export function getCategoryByRouteSlug(slugOrPath: string) {
  const catId = getCategoryFromRouteSlug(slugOrPath);
  if (!catId) return undefined;
  return categoriesData.find(c => c.id === catId);
}

/**
 * Generate SEO title, description, and canonical URL for a category page.
 */
export function getCategorySeoMeta(categoryId: string, siteUrl: string = "https://unitsconvertors.com"): {
  title: string;
  description: string;
  canonicalUrl: string;
  heading: string;
} {
  const cat = categoriesData.find(c => c.id === categoryId);
  const canonicalSlug = getCategoryRouteSlug(categoryId);
  const canonicalUrl = `${siteUrl}/${canonicalSlug}`;

  if (!cat) {
    return {
      title: "Unit Converters | Free Online Unit Conversion Tools | UnitsConvertors",
      description: "Explore free online unit converters. Convert units instantly with high precision on UnitsConvertors.com.",
      canonicalUrl,
      heading: "Unit Converters"
    };
  }

  if (categoryId === "speed") {
    return {
      title: "Speed Conversion | Free Online Speed Unit Converter | UnitsConvertors",
      description: "Convert speed units online including meters per second, kilometers per hour, miles per hour, knots, feet per second, and more with UnitsConvertors.",
      canonicalUrl,
      heading: "Speed Conversion"
    };
  }

  const sampleUnits = cat.units.slice(0, 6).map(u => u.plural.toLowerCase()).join(", ");
  const title = `${cat.name} Conversion | Free Online ${cat.name} Unit Converter | UnitsConvertors`;
  const description = `Convert ${cat.name.toLowerCase()} units online including ${sampleUnits}, and more with UnitsConvertors. Instant calculations, formulas, and conversion tables.`;

  return {
    title,
    description,
    canonicalUrl,
    heading: `${cat.name} Conversion`
  };
}
