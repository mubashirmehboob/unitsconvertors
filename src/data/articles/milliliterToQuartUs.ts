import { CustomArticleData } from "./types";

export const milliliterToQuartUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "quart-us",
  seoTitle: "Milliliter to Quart (US) Converter (mL to qt) - UnitsConvertors",
  metaDescription: "Convert milliliters to US quarts (mL to qt) instantly. Learn the conversion formula (1 US qt ≈ 946.353 mL), volume reference charts, and FAQs.",
  h1: "Milliliter to Quart (US) Converter",
  introduction: [
    "Converting liquid volume from milliliters to US liquid quarts is a routine requirement in automotive fluid maintenance, culinary arts, dairy distribution, and chemical formulation. While international manufacturing and technical specifications record fluid capacities in milliliters, American recipes, motor oil bottles, and kitchen containers use US quarts.",
    "One standard US Customary liquid quart equals 946.352946 milliliters (32 US fluid ounces or 2 US pints). To convert milliliters to US liquid quarts, divide the milliliter value by 946.352946 (or multiply by 0.00105669).",
    "This technical guide details the exact mathematical conversion between milliliters and US liquid quarts, provides step-by-step calculation examples, offers clear reference tables, and answers common liquid measure questions."
  ],
  quickAnswer: {
    text: "To convert milliliters to US liquid quarts, divide the milliliter amount by 946.352946 (or multiply by 0.00105669). For example, 1,000 mL (1 liter) equals approximately 1.057 US liquid quarts.",
    formulaDisplay: "Quarts (US) = mL ÷ 946.352946",
    subtext: "1 US Liquid Quart = 946.353 mL (1 UK Imperial Quart = 1,136.523 mL)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) is a metric unit of volume equal to one-thousandth of a liter (0.001 L) or 1 cubic centimeter (1 cm³). It is the global standard for liquid measurements in science, medicine, and food production."
  },
  aboutTargetUnit: {
    title: "Understanding the US Quart (qt)",
    text: "The US Customary liquid quart (symbol: qt) is a volume unit equal to 32 US fluid ounces, 4 US cups, 2 US pints, or 1/4 of a US gallon. In exact metric units, 1 US liquid quart equals 946.352946 milliliters."
  },
  relationship: "Because 1 US liquid quart contains approximately 946.353 milliliters, 1 liter (1,000 mL) is slightly larger than 1 US quart (1.057 qt). Converting milliliters to US quarts divides the value by ~946.35.",
  relationshipTitle: "Milliliter vs US Quart Volume Scale",
  relationshipItems: [
    { label: "473.18 mL", value: "= 0.50 US Quart (1 US Pint)" },
    { label: "946.35 mL", value: "= 1.00 US Liquid Quart (32 fl oz)" },
    { label: "1,000 mL", value: "≈ 1.057 US Liquid Quarts (1 Liter)" },
    { label: "2,000 mL", value: "≈ 2.113 US Liquid Quarts" },
    { label: "3,785.41 mL", value: "= 4.000 US Liquid Quarts (1 Gallon)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 946.352946 to calculate the equivalent volume in US Customary liquid quarts.",
    math: "Volume in US Quarts = Volume in Milliliters (mL) ÷ 946.352946",
    subtext: "Alternatively: Quarts = mL × 0.00105669. To convert US quarts back to mL, multiply by 946.353."
  },
  formulaTitle: "Milliliter to US Quart Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Motor Oil & Liquids",
    text: "Think of 1 liter (1,000 mL) as 1 quart plus 3.6 tablespoons (53.6 mL extra). For automotive oil changes, 1 liter is roughly 1.06 quarts."
  },
  expertNote: {
    title: "US Liquid Quart vs UK Imperial Quart",
    text: "A US liquid quart is 946.353 mL, whereas a British Imperial quart is 1,136.523 mL. An Imperial quart is 20% larger than a US liquid quart."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Engine Oil Capacity",
        subtitle: "An engine manual specifies 4,500 mL of synthetic motor oil. Convert this to US quarts.",
        steps: [
          "Identify volume in milliliters: 4,500 mL.",
          "Apply conversion formula: Quarts = 4,500 ÷ 946.352946.",
          "Calculate: 4,500 ÷ 946.352946 = 4.7551.",
          "Result: 4,500 mL equals approximately 4.76 US liquid quarts."
        ]
      },
      {
        title: "Example 2: Commercial Cooking Stock",
        subtitle: "Convert a 3,000 mL batch of chicken stock into US quarts.",
        steps: [
          "Identify volume: 3,000 mL.",
          "Divide by 946.353: 3,000 ÷ 946.353 = 3.1701.",
          "Result: 3,000 mL equals approximately 3.17 US quarts."
        ]
      },
      {
        title: "Example 3: Dairy Packaging",
        subtitle: "Convert 1,500 mL of whole milk into US quarts.",
        steps: [
          "Identify volume: 1,500 mL.",
          "Divide by 946.353: 1,500 ÷ 946.353 = 1.5851.",
          "Result: 1,500 mL equals approximately 1.59 US quarts."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Quart Conversion Table",
    headers: ["Milliliters (mL)", "US Liquid Quarts", "Practical Reference Container"],
    rows: [
      { fromVal: "250 mL", toVal: "0.264 qt", extra: "1/4 quart (1 cup)" },
      { fromVal: "473.18 mL", toVal: "0.500 qt", extra: "1/2 quart (1 pint)" },
      { fromVal: "750 mL", toVal: "0.793 qt", extra: "Wine bottle" },
      { fromVal: "946.35 mL", toVal: "1.000 qt", extra: "1 US Liquid Quart bottle" },
      { fromVal: "1,000 mL", toVal: "1.057 qt", extra: "1 Liter bottle" },
      { fromVal: "1,500 mL", toVal: "1.585 qt", extra: "1.5 Liter jug" },
      { fromVal: "2,000 mL", toVal: "2.113 qt", extra: "2-Liter soda bottle" },
      { fromVal: "3,000 mL", toVal: "3.170 qt", extra: "3 Liters" },
      { fromVal: "3,785.41 mL", toVal: "4.000 qt", extra: "1 US Gallon" }
    ]
  },
  applications: {
    title: "Practical Applications of mL to qt Conversion",
    items: [
      {
        title: "Automotive Maintenance & Oil Refills",
        text: "Mechanics converting European vehicle engine oil capacities specified in liters/mL into US quart bottles."
      },
      {
        title: "Commercial Culinary Operations",
        text: "Chefs scaling up stockpot recipes from metric milliliters into standard US quart food storage containers."
      },
      {
        title: "Paint & Chemical Mixing",
        text: "Industrial technicians diluting concentrates from milliliter trial specs into US quart cans."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming 1 liter is exactly 1 quart: 1 liter (1,000 mL) is 1.057 quarts, so treating them as identical creates a 5.7% shortage when buying oil or ingredients.",
      "Confusing US liquid quarts (946.35 mL) with UK Imperial quarts (1,136.52 mL).",
      "Confusing US liquid quarts with US dry quarts (1,101.22 mL)."
    ]
  },
  faqs: [
    {
      question: "How many US quarts is 1,000 mL (1 liter)?",
      answer: "1,000 mL equals approximately 1.057 US liquid quarts."
    },
    {
      question: "How many mL is in 1 US quart?",
      answer: "1 US liquid quart equals exactly 946.352946 milliliters (commonly rounded to 946 mL)."
    },
    {
      question: "Is a quart bigger than a liter?",
      answer: "No, a liter (1,000 mL) is slightly bigger than a US liquid quart (946.35 mL) by about 53.6 mL (5.7%)."
    },
    {
      question: "How many US quarts is 2,000 mL?",
      answer: "2,000 mL equals approximately 2.113 US liquid quarts."
    },
    {
      question: "How do I convert 500 mL to US quarts?",
      answer: "Divide 500 by 946.353 to get approximately 0.528 US quarts."
    },
    {
      question: "How many quarts are in 3,785 mL?",
      answer: "3,785.41 mL equals exactly 4 US liquid quarts (1 US gallon)."
    },
    {
      question: "What is 750 mL in US quarts?",
      answer: "750 mL divided by 946.353 equals approximately 0.793 US quarts."
    },
    {
      question: "How many US quarts of oil is 4 liters?",
      answer: "4 liters (4,000 mL) equals approximately 4.227 US quarts of motor oil."
    }
  ],
  relatedList: [
    { label: "Milliliter to Gallon (US)", from: "milliliter", to: "gallon-us" },
    { label: "Milliliter to Pint (US)", from: "milliliter", to: "pint-us" },
    { label: "Milliliter to Cup (US)", from: "milliliter", to: "cup-us" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" }
  ],
  references: [
    "NIST Handbook 44 — Specifications and Tolerances for Liquid Capacity Measures",
    "Society of Automotive Engineers (SAE) — Fluid Capacity Measurement Guidelines"
  ]
};
