import { CustomArticleData } from "./types";

export const kilogramToOunce: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "ounce",
  seoTitle: "Kilogram to Ounce Converter - kg to oz",
  metaDescription: "Convert kilograms to ounces (kg to oz) instantly. Learn the 35.27396 conversion factor, formula, worked examples, grocery packaging math, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-ounce",
  h1: "Kilogram to Ounce Converter",
  introduction: [
    "The kilogram and the ounce are standard mass and weight units from the metric and avoirdupois systems. While the kilogram is the global SI standard for measuring heavier objects, human body mass, and freight, the ounce (oz) is the customary unit of choice in the United States and Britain for grocery food packaging, recipe ingredients, postal parcels, and baby birth weights.",
    "Converting kilograms to ounces provides the precision required when dividing bulk metric quantities into smaller customary retail portions. Because one avoirdupois ounce equals exactly 28.349523125 grams (0.0283495 kg), one kilogram contains approximately 35.274 ounces."
  ],
  quickAnswer: {
    text: "To convert kilograms to ounces, multiply the kilogram value by 35.27396195. For example, 2 kilograms is equal to approximately 70.55 ounces (or 4.41 pounds).",
    formulaDisplay: "1 kg ≈ 35.27396 oz",
    subtext: "Multiply any mass in kilograms by 35.27396 to find the exact equivalent in avoirdupois ounces (oz)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). Defined via the quantum Planck constant, the kilogram is the universally accepted standard for scientific research, international trade, manufacturing supply chains, and consumer goods worldwide."
  },
  aboutTargetUnit: {
    title: "Understanding the Ounce (oz)",
    text: "The avoirdupois ounce (symbol: oz) is a unit of mass in the US customary and British imperial systems. Standardized internationally in 1959, 1 ounce equals exactly 1/16 of a pound, 437.5 grains, or 28.349523125 grams. It is widely used for portioning foods, spices, coffee beans, postal letters, and sporting goods."
  },
  relationship: "Because 1 avoirdupois pound equals 16 ounces and 0.45359237 kg, one ounce equals $0.45359237 / 16 = 0.028349523125\\text{ kg}$. Inverting this value yields $1 / 0.028349523125 \\approx 35.2739619496$ ounces per kilogram.",
  relationshipTitle: "Kilogram to Ounce Mathematical Basis",
  relationshipItems: [
    { label: "1 Kilogram (kg)", value: "≈ 35.273962 Ounces (oz)" },
    { label: "1 Ounce (oz)", value: "0.02834952 Kilograms (28.35 g)" },
    { label: "0.5 Kilograms (kg)", value: "17.637 Ounces (oz)" },
    { label: "1 Pound (16 oz)", value: "0.453592 Kilograms (kg)" }
  ],
  formula: {
    text: "To convert mass from kilograms to avoirdupois ounces, multiply the kilogram amount by 35.27396195, or divide by 0.028349523125.",
    math: "Mass in Ounces (oz) = Mass in Kilograms (kg) × 35.27396195",
    subtext: "Or: oz = kg / 0.028349523"
  },
  formulaTitle: "Kilogram to Ounce Conversion Formula",
  practicalTip: {
    title: "Cooking & Portioning Tip",
    text: "For recipe portioning, remember that 1 kilogram is roughly 35 and a quarter ounces (35.27 oz). If dividing a 1 kg block of cheese into 4 oz hamburger topping portions, you will get approximately 8.8 servings."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Specialty Coffee Bean Packaging",
        subtitle: "A roaster imports a 5.0-kilogram bag of specialty green coffee beans. Convert this mass into ounces to package it into 12-ounce retail bags.",
        steps: [
          "Identify the weight in kilograms: 5.0 kg.",
          "Apply the conversion formula: oz = 5.0 × 35.27396195.",
          "Perform the calculation: 5.0 × 35.27396195 = 176.3698 oz.",
          "Divide by bag size: 176.3698 oz / 12 oz ≈ 14.7 bags.",
          "Conclude the calculation: 5.0 kg equals approximately 176.37 ounces (enough for 14 full 12-oz bags)."
        ]
      },
      {
        title: "Example 2: Newborn Baby Birth Weight",
        subtitle: "A newborn weighs 3.45 kilograms at birth in a European hospital. Convert the birth weight to ounces for an American family registry.",
        steps: [
          "Identify the infant's weight: 3.45 kg.",
          "Multiply by 35.273962: 3.45 × 35.273962 = 121.695 oz.",
          "Convert to pounds and ounces: 121.695 / 16 = 7 lbs with 9.695 oz remainder.",
          "Conclude the calculation: 3.45 kg is equivalent to 121.7 ounces (7 lbs 9.7 oz)."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Ounce Conversion Reference Table",
    headers: ["Kilograms (kg)", "Ounces (oz)", "Pounds Equivalent", "Common Practical Reference"],
    rows: [
      { fromVal: "0.1", toVal: "3.5274", extra: "0.22 lbs", extra2: "Small retail spice container" },
      { fromVal: "0.25", toVal: "8.8185", extra: "0.55 lbs", extra2: "One block of cream cheese" },
      { fromVal: "0.5", toVal: "17.6370", extra: "1.10 lbs", extra2: "Standard loaf of baker's bread" },
      { fromVal: "1.0", toVal: "35.2740", extra: "2.20 lbs", extra2: "1 liter of water / large bag of sugar" },
      { fromVal: "2.0", toVal: "70.5479", extra: "4.41 lbs", extra2: "Standard domestic bag of flour" },
      { fromVal: "3.0", toVal: "105.8219", extra: "6.61 lbs", extra2: "Average newborn baby birth weight" },
      { fromVal: "4.0", toVal: "141.0958", extra: "8.82 lbs", extra2: "Standard domestic bowling ball" },
      { fromVal: "5.0", toVal: "176.3698", extra: "11.02 lbs", extra2: "Large kitchen stand mixer" },
      { fromVal: "10.0", toVal: "352.7396", extra: "22.05 lbs", extra2: "Commercial postal parcel crate" }
    ]
  },
  expertNote: {
    title: "Avoirdupois Ounce vs. Troy Ounce",
    text: "Always confirm which ounce unit is required:\n• 1 Avoirdupois Ounce (food, postage, general weight) = 28.3495 g (1 kg ≈ 35.274 oz).\n• 1 Troy Ounce (gold, silver, platinum) = 31.1035 g (1 kg ≈ 32.151 ozt).\nNever use food ounces when calculating precious metals valuations."
  },
  applications: {
    title: "Primary Applications of kg to oz Conversions",
    items: [
      {
        title: "Commercial Food Service & Baking",
        text: "Wholesale bulk ingredients supplied in 10 kg, 20 kg, or 25 kg bags are converted to ounces for standardized recipe batching and single-portion controls."
      },
      {
        title: "Postal Freight & Package Shipping",
        text: "Domestic US postal rates for letters and small packages are tiered in ounce increments up to 13 or 16 ounces, requiring metric package weights to be converted to ounces."
      },
      {
        title: "Infant Care & Pediatric Nursing",
        text: "Pediatricians convert neonatal birth weights recorded on metric clinic scales into traditional pounds and ounces for parents' family birth announcements."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kg to oz",
    items: [
      "Confusing fluid ounces (fl oz) with dry weight ounces (oz): Fluid ounces measure volume (approx. 29.57 mL), whereas avoirdupois ounces measure mass (28.35 g).",
      "Confusing avoirdupois ounces with troy ounces: A kilogram yields 35.27 avoirdupois ounces for food and packages, but only 32.15 troy ounces for bullion gold.",
      "Dividing by 35.27 instead of multiplying: Because the ounce is a much smaller unit than the kilogram, converting kilograms to ounces must always result in a larger number."
    ]
  },
  faqs: [
    {
      question: "How many ounces are in one kilogram?",
      answer: "There are approximately 35.27396195 ounces in one kilogram (1 kg ≈ 35.274 oz)."
    },
    {
      question: "What is the formula to convert kg to oz?",
      answer: "The formula is: Mass in Ounces (oz) = Mass in Kilograms (kg) × 35.27396195."
    },
    {
      question: "How many ounces is 1 kg of gold vs 1 kg of flour?",
      answer: "1 kg of flour equals 35.27 avoirdupois ounces (standard food ounces), whereas 1 kg of gold equals 32.15 troy ounces (precious metal ounces)."
    },
    {
      question: "How many ounces is 0.5 kg?",
      answer: "0.5 kg (500 grams) equals approximately 17.64 ounces (0.5 × 35.27396 = 17.637 oz)."
    },
    {
      question: "How do I convert kilograms to pounds and ounces?",
      answer: "First multiply kg by 2.20462 to get total pounds. Take the decimal part and multiply by 16 to get the remaining ounces."
    },
    {
      question: "How do I convert ounces back to kilograms?",
      answer: "Divide the ounce value by 35.273962 (or multiply by 0.0283495) to find the weight in kilograms."
    },
    {
      question: "What is the abbreviation for ounce?",
      answer: "The official abbreviation for the avoirdupois ounce is 'oz'."
    },
    {
      question: "How many ounces is 2.5 kg?",
      answer: "2.5 kg equals approximately 88.18 ounces (2.5 × 35.273962 = 88.1849 oz or 5 lbs 8.18 oz)."
    }
  ],
  relatedList: [
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Kilogram to Stone", from: "kilogram", to: "stone" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "NIST Handbook 44 - Appendix C: General Tables of Units of Measurement",
    "ISO 80000-4: Quantities and Units - Mechanics",
    "U.S. Food and Drug Administration (FDA) - Food Labeling Guide: Net Quantity of Contents"
  ]
};
