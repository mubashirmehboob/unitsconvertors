import { CustomArticleData } from "./types";

export const literToMilliliter: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "milliliter",
  seoTitle: "Liter to Milliliter Converter - L to mL",
  metaDescription: "Convert liters to milliliters (L to mL) with precision. Learn the simple 1,000x multiplication formula, step-by-step examples, and practical fluid measurements.",
  h1: "Liter to Milliliter Converter",
  introduction: [
    "The liter and the milliliter are the primary units for measuring liquid volume in the metric system. Used across science, medicine, culinary arts, and daily hydration tracking, these units offer an intuitive method for quantifying fluid capacities.",
    "Because both units belong to the decimal-based metric framework, converting liters to milliliters involves a simple multiplication by one thousand. This guide provides the exact formula, worked calculation examples, and a comprehensive reference table for fast lookups."
  ],
  quickAnswer: {
    text: "To convert liters to milliliters, multiply the liter value by 1,000. For example, 1.5 liters equals exactly 1,500 milliliters.",
    formulaDisplay: "1 L = 1,000 mL",
    subtext: "Simply shift the decimal point three positions to the right to move from liters to milliliters."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L or l) is a metric unit of volume equal to 1 cubic decimeter (dm³). Although it is not an official SI base unit, it is accepted for use with the SI. The liter is widely used globally for measuring beverages, fuel, automotive fluids, and everyday liquid capacities."
  },
  aboutTargetUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) represents one-thousandth of a liter (10⁻³ L). It is identical in volume to one cubic centimeter (1 cm³ or cc). Milliliters are standard in healthcare for medical dosages, in laboratories for reagent volumes, and in food packaging for precise portion sizes."
  },
  relationship: "The prefix 'milli-' signifies one-thousandth. Therefore, one liter contains exactly 1,000 milliliters. Converting from the larger unit (liter) to the smaller unit (milliliter) scales the numerical value up by a factor of 1,000.",
  relationshipTitle: "The Metric Volume Scale: Liter vs Milliliter",
  relationshipItems: [
    { label: "1 Liter (L)", value: "1,000 Milliliters (mL)" },
    { label: "1 Milliliter (mL)", value: "0.001 Liters (L)" }
  ],
  formula: {
    text: "Calculate the total volume in milliliters by multiplying the liter count by 1,000.",
    math: "Volume in Milliliters (mL) = Volume in Liters (L) × 1,000",
    subtext: "To convert in the opposite direction (mL to L), divide the milliliter value by 1,000."
  },
  formulaTitle: "The Liter to Milliliter Conversion Formula",
  practicalTip: {
    title: "Decimal Movement Shortcut",
    text: "When multiplying by 1,000, simply shift the decimal point three places to the right. For instance, 0.75 L becomes 750 mL."
  },
  expertNote: {
    title: "Direct Relationship to Cubic Centimeters",
    text: "In clinical and engineering contexts, 1 mL is strictly equivalent to 1 cm³ (or 1 cc). This 1:1 equivalency connects liquid capacity directly to geometric volume."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Water Bottle Capacity",
        subtitle: "Convert a 0.75-liter reusable water bottle into milliliters.",
        steps: [
          "Identify the volume in liters: 0.75 L.",
          "Apply the formula: mL = L × 1,000.",
          "Perform the multiplication: 0.75 × 1,000 = 750.",
          "Result: 0.75 liters is equal to 750 milliliters."
        ]
      },
      {
        title: "Example 2: Cooking Recipe Reagent",
        subtitle: "A culinary formula calls for 2.25 liters of vegetable broth. Calculate the amount in milliliters.",
        steps: [
          "Identify the volume: 2.25 L.",
          "Multiply by 1,000: 2.25 × 1,000 = 2,250.",
          "Result: 2.25 liters equals 2,250 milliliters."
        ]
      }
    ]
  },
  table: {
    title: "Liter to Milliliter Quick Reference Table",
    headers: ["Liters (L)", "Milliliters (mL)", "Common Reference Item"],
    rows: [
      { fromVal: "0.001 L", toVal: "1 mL", extra: "About 20 drops of water" },
      { fromVal: "0.005 L", toVal: "5 mL", extra: "One standard teaspoon" },
      { fromVal: "0.015 L", toVal: "15 mL", extra: "One standard tablespoon" },
      { fromVal: "0.25 L", toVal: "250 mL", extra: "A typical drinking glass" },
      { fromVal: "0.33 L", toVal: "330 mL", extra: "A standard aluminum beverage can" },
      { fromVal: "0.5 L", toVal: "500 mL", extra: "A standard bottled water size" },
      { fromVal: "1 L", toVal: "1,000 mL", extra: "One carton of milk" },
      { fromVal: "2 L", toVal: "2,000 mL", extra: "Large soda bottle" },
      { fromVal: "5 L", toVal: "5,000 mL", extra: "Engine coolant jug" }
    ]
  },
  applications: {
    title: "Practical Applications of L to mL",
    items: [
      {
        title: "Healthcare & Medicine",
        text: "Dosing intravenous fluids or liquid oral medications requires transforming bulk container volumes measured in liters into precise milliliter doses."
      },
      {
        title: "Food & Beverage Manufacturing",
        text: "Bottling plants purchase liquid ingredients by the liter or kiloliter, while consumer packaging labels list liquid volume in milliliters."
      },
      {
        title: "Laboratory Sciences",
        text: "Chemists prepare volumetric solutions by diluting liter-scale stock reagents into milliliter-scale aliquots for test tubes and flasks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Remember that milliliters are smaller, so the numerical value must increase.",
      "Misplacing the decimal point: Ensure you move three full places when converting manually.",
      "Confusing fluid ounces with milliliters: Fluid ounces require a factor of 29.5735, whereas metric milliliters use a strict 1,000 factor."
    ]
  },
  faqs: [
    {
      question: "How many milliliters are in one liter?",
      answer: "There are exactly 1,000 milliliters in 1 liter. This definition is exact within the metric system."
    },
    {
      question: "Is 500 mL equal to half a liter?",
      answer: "Yes, 500 milliliters is equal to 0.5 liters (500 / 1,000 = 0.5)."
    },
    {
      question: "Why does the metric system use 1,000 as the multiplier for L to mL?",
      answer: "The prefix 'milli-' comes from the Latin 'mille', meaning thousandth. Metric prefixes increase and decrease by factors of 10, 100, or 1,000."
    },
    {
      question: "Is 1 mL the same as 1 cc?",
      answer: "Yes, 1 milliliter is physically identical to 1 cubic centimeter (cc or cm³)."
    },
    {
      question: "How do I convert 0.25 liters to milliliters?",
      answer: "Multiply 0.25 by 1,000 to get 250 milliliters."
    },
    {
      question: "How many milliliters are in 2 liters?",
      answer: "There are 2,000 milliliters in 2 liters (2 × 1,000 = 2,000 mL)."
    },
    {
      question: "What is 750 mL expressed in liters?",
      answer: "Divide 750 by 1,000 to get 0.75 liters."
    },
    {
      question: "Does temperature affect the conversion between liters and milliliters?",
      answer: "No, the mathematical relationship between liters and milliliters remains fixed at 1 L = 1,000 mL regardless of temperature, because both are units of volume."
    }
  ],
  relatedList: [
    { label: "Liter to Cubic Meter", from: "liter", to: "cubic-meter" },
    { label: "Liter to Cubic Centimeter", from: "liter", to: "cubic-centimeter" },
    { label: "Liter to Gallon (US)", from: "liter", to: "gallon-us" },
    { label: "Liter to Quart", from: "liter", to: "quart-us" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) - The International System of Units (SI) Brochure",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
