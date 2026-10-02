import { CustomArticleData } from "./types";

export const poundPerGallonUsToPoundPerCubicFoot: CustomArticleData = {
  fromUnitId: "pound-per-gallon-us",
  toUnitId: "pound-per-cubic-foot",
  seoTitle: "Pound per Gallon (US) to Pound per Cubic Foot (lb/gal to lb/ft³)",
  metaDescription: "Convert pounds per US gallon to pounds per cubic foot (lb/gal to lb/ft³) with exact mathematical ratios, conversion tables, calculation steps, and civil engineering FAQs.",
  canonicalUrl: "https://unitsconvertors.com/pound-per-gallon-us-to-pound-per-cubic-foot",
  h1: "Pound per Gallon (US) to Pound per Cubic Foot Converter",
  introduction: [
    "Hydraulic engineers, water utility operators, and commercial HVAC designers regularly convert fluid density measurements between piping capacity volumes and structural enclosure volumes. Converting pounds per US gallon (lb/gal) to pounds per cubic foot (lb/ft³, often abbreviated as pcf) bridges liquid storage vessel ratings with civil structural load calculations.",
    "Because both units share the standard avoirdupois pound as their mass unit, the conversion depends entirely on the geometric ratio between a cubic foot and a US liquid gallon. With exactly 7.48052 US gallons fitting inside one cubic foot, one pound per gallon equals approximately 7.48052 pounds per cubic foot. This guide explains the exact volumetric derivation, practical structural examples, quick-reference lookup tables, and essential engineering FAQs."
  ],
  quickAnswer: {
    text: "To convert pounds per US gallon to pounds per cubic foot, multiply the lb/gal value by 7.4805195, or divide it by 0.1336806. For example, water at 8.3454 lb/gal equals approximately 62.428 lb/ft³.",
    formulaDisplay: "1 lb/gal (US) ≈ 7.4805195 lb/ft³",
    subtext: "Multiply density in lb/gal (US) by 7.48052 to find density in lb/ft³."
  },
  aboutSourceUnit: {
    title: "Understanding Pound per Gallon (US) (lb/gal)",
    text: "The pound per US liquid gallon (symbol: lb/gal) is the customary volumetric mass unit used across North American piping, municipal fluid distribution, chemical drums, and liquid fuel logistics. Defined as the mass of one avoirdupois pound within 231 cubic inches of liquid, it provides direct operational measurements for pumping systems and fluid metering."
  },
  aboutTargetUnit: {
    title: "Understanding Pound per Cubic Foot (lb/ft³)",
    text: "The pound per cubic foot (symbol: lb/ft³ or pcf) is the foundational density unit in American structural and geotechnical engineering. It specifies the weight in pounds contained within a volume of one cubic foot (1,728 cubic inches). Building codes, floor load specifications, foundation soil bearing tests, and retaining wall hydrodynamics rely directly on pcf."
  },
  relationship: "Because the mass unit (the pound) is identical in both measures, the conversion derives strictly from the volume ratio of a cubic foot to a US gallon. One cubic foot contains 1,728 cubic inches (12³ in³), and one US liquid gallon is defined as exactly 231 cubic inches. Dividing 1,728 by 231 gives exactly 576/77, or 7.4805194805... gallons per cubic foot. Thus, 1 lb/gal = 7.48051948 lb/ft³.",
  relationshipTitle: "Pure Volumetric Geometric Derivation",
  relationshipItems: [
    { label: "1 Pound per US Gallon (lb/gal)", value: "≈ 7.4805195 lb/ft³ (exact: 576/77)" },
    { label: "1 Pound per Cubic Foot (lb/ft³)", value: "≈ 0.1336806 lb/gal (exact: 77/576)" }
  ],
  formula: {
    text: "To convert pounds per US gallon to pounds per cubic foot, multiply the density in lb/gal by 7.48051948, or multiply by the exact fraction 576/77.",
    math: "Density (lb/ft³) = Density (lb/gal) × 7.48051948",
    subtext: "Equivalently: Density (lb/ft³) = Density (lb/gal) ÷ 0.13368056"
  },
  formulaTitle: "lb/gal to lb/ft³ Formula",
  practicalTip: {
    title: "7.5 Rule of Thumb for Field Estimations",
    text: "For quick job-site math, multiplying fluid weight in lb/gal by 7.5 gives structural weight in pcf within 0.26% accuracy. For example, 8.34 lb/gal water × 7.5 ≈ 62.55 lb/ft³, very close to the true 62.43 lb/ft³ benchmark."
  },
  expertNote: {
    title: "Exact Rational Fraction",
    text: "Because 1,728 and 231 share a common divisor of 3, the exact conversion ratio is 576/77. Using this exact fraction in finite element software or automated engineering spreadsheets eliminates floating-point rounding errors."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Rooftop Cooling Tower Water Load",
        subtitle: "Convert standard cooling water weighing 8.33 lb/gal into structural lb/ft³.",
        steps: [
          "Identify the starting liquid density: 8.33 lb/gal.",
          "Apply the conversion factor: Multiply by 7.4805195.",
          "Calculate: 8.33 × 7.4805195 = 62.3127 lb/ft³.",
          "Final result: The water density is approximately 62.31 lb/ft³."
        ]
      },
      {
        title: "Example 2: Fuel Storage Tank Sump Load",
        subtitle: "Convert diesel fuel weighing 7.15 lb/gal into floor load density in lb/ft³.",
        steps: [
          "Identify the starting liquid density: 7.15 lb/gal.",
          "Apply the conversion factor: Multiply by 7.4805195.",
          "Calculate: 7.15 × 7.4805195 = 53.4857 lb/ft³.",
          "Final result: Diesel fuel exerts a structural density of approximately 53.49 lb/ft³."
        ]
      },
      {
        title: "Example 3: Brine Injection Fluid in Geothermal Wells",
        subtitle: "Convert concentrated calcium chloride brine weighing 11.6 lb/gal to lb/ft³.",
        steps: [
          "Identify the starting liquid density: 11.6 lb/gal.",
          "Apply the conversion factor: Multiply by 7.4805195.",
          "Calculate: 11.6 × 7.4805195 = 86.7740 lb/ft³.",
          "Final result: The brine density is approximately 86.77 lb/ft³."
        ]
      }
    ]
  },
  table: {
    title: "Pounds per US Gallon to Pounds per Cubic Foot Table",
    headers: ["Pound per Gallon (lb/gal)", "Pound per Cubic Foot (lb/ft³)", "Representative Liquid"],
    rows: [
      { fromVal: "5.8 lb/gal", toVal: "43.39 lb/ft³", extra: "Aviation gasoline (AvGas 100LL)" },
      { fromVal: "6.0 lb/gal", toVal: "44.88 lb/ft³", extra: "Automotive regular unleaded gasoline" },
      { fromVal: "6.7 lb/gal", toVal: "50.12 lb/ft³", extra: "Commercial jet kerosene (Jet-A)" },
      { fromVal: "7.1 lb/gal", toVal: "53.11 lb/ft³", extra: "Diesel fuel (No. 2 distillate)" },
      { fromVal: "7.5 lb/gal", toVal: "56.10 lb/ft³", extra: "Lubricating motor oil (SAE 30)" },
      { fromVal: "8.345 lb/gal", toVal: "62.43 lb/ft³", extra: "Freshwater at 60 °F" },
      { fromVal: "8.55 lb/gal", toVal: "63.96 lb/ft³", extra: "Seawater (3.5% salinity)" },
      { fromVal: "9.2 lb/gal", toVal: "68.82 lb/ft³", extra: "Latex architectural primer paint" },
      { fromVal: "10.0 lb/gal", toVal: "74.81 lb/ft³", extra: "Sodium chloride drilling brine" },
      { fromVal: "11.5 lb/gal", toVal: "86.03 lb/ft³", extra: "Commercial liquid corn syrup" },
      { fromVal: "12.0 lb/gal", toVal: "89.77 lb/ft³", extra: "Weighted drilling mud fluid" },
      { fromVal: "15.3 lb/gal", toVal: "114.45 lb/ft³", extra: "Concentrated sulfuric acid (98%)" },
      { fromVal: "113.4 lb/gal", toVal: "848.29 lb/ft³", extra: "Elemental liquid mercury" }
    ]
  },
  applications: {
    title: "Key Industry Applications",
    items: [
      {
        title: "Structural & Civil Engineering",
        text: "Structural engineers calculate building foundation loads and mezzanine dead weights for tanks containing liquids measured in gallons by converting fluid weight into pcf to verify slab deflection limits."
      },
      {
        title: "Hydraulic Piping & Tank Sizing",
        text: "Piping designers size municipal holding reservoirs and pump station wet wells by converting gallon capacities into cubic feet of water storage to compute hydrostatic wall pressures."
      },
      {
        title: "Oilfield Hydrostatic Pressure Calculations",
        text: "Drilling engineers convert mud weight in ppg to pcf when modeling borehole stability and downhole casing collapse pressure alongside surrounding rock densities measured in pcf."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes",
    items: [
      "Confusing with Imperial gallons: An Imperial gallon contains 277.42 cubic inches (approx. 6.2288 Imperial gallons per cubic foot), yielding a conversion factor of 6.2288 rather than 7.4805.",
      "Dividing instead of multiplying: Dividing by 7.4805 instead of multiplying yields an answer roughly 56 times smaller than the true density.",
      "Assuming the pound definition differs: Both units use the identical avoirdupois pound (0.45359237 kg), so no mass adjustment is necessary."
    ]
  },
  faqs: [
    {
      question: "How do you convert lb/gal to lb/ft³?",
      answer: "Multiply the pounds per US gallon (lb/gal) value by 7.48051948. For example, 8.34 lb/gal multiplied by 7.48051948 equals 62.39 lb/ft³."
    },
    {
      question: "How many lb/ft³ are in 1 lb/gal?",
      answer: "One pound per US gallon is equal to exactly 576/77, or approximately 7.4805195 pounds per cubic foot."
    },
    {
      question: "Why is the conversion factor 7.48052?",
      answer: "A cubic foot contains 1,728 cubic inches, and a US liquid gallon is defined as 231 cubic inches. Dividing 1,728 by 231 produces exactly 7.48051948 US gallons per cubic foot."
    },
    {
      question: "What is water density in lb/gal and lb/ft³?",
      answer: "Freshwater has a density of approximately 8.3454 lb/gal, which translates directly to 62.428 lb/ft³ (pcf) at 60 °F."
    },
    {
      question: "How do I convert lb/ft³ back to lb/gal?",
      answer: "To convert pounds per cubic foot back into pounds per US gallon, divide the lb/ft³ figure by 7.4805195, or multiply by 0.1336806."
    },
    {
      question: "What is the exact fraction for this conversion?",
      answer: "The exact fraction is 576/77 (derived from 1,728 / 231 reduced by a factor of 3). Multiplying by 576/77 eliminates rounding error."
    },
    {
      question: "What is the difference between pcf and lb/ft³?",
      answer: "There is no difference; 'pcf' stands for 'pounds per cubic foot' and is commonly used in structural engineering and soil mechanics."
    },
    {
      question: "How do Imperial gallons compare?",
      answer: "One cubic foot equals approximately 6.2288 Imperial gallons. Therefore, 1 lb/gal (Imperial) equals approximately 6.2288 lb/ft³."
    }
  ],
  relatedList: [
    { label: "Pound per Cubic Foot to Pound per Gallon (US)", from: "pound-per-cubic-foot", to: "pound-per-gallon-us" },
    { label: "Pound per Gallon (US) to Kilogram per Cubic Meter", from: "pound-per-gallon-us", to: "kilogram-per-cubic-meter" },
    { label: "Pound per Gallon (US) to Gram per Cubic Centimeter", from: "pound-per-gallon-us", to: "gram-per-cubic-centimeter" },
    { label: "Pound per Gallon (US) to Gram per Liter", from: "pound-per-gallon-us", to: "gram-per-liter" },
    { label: "Pound per Gallon (US) to Ounce per Cubic Inch", from: "pound-per-gallon-us", to: "ounce-per-cubic-inch" }
  ],
  relatedArticles: [
    {
      title: "Pound per Cubic Foot to Pound per Gallon (US) Converter",
      description: "Convert structural material density in pcf back into liquid container capacity in pounds per US gallon.",
      from: "pound-per-cubic-foot",
      to: "pound-per-gallon-us"
    }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "ASCE 7: Minimum Design Loads and Associated Criteria for Buildings and Other Structures.",
    "Crane Technical Paper No. 410: Flow of Fluids Through Valves, Fittings, and Pipe."
  ]
};
