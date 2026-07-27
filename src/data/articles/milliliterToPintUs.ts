import { CustomArticleData } from "./types";

export const milliliterToPintUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "pint-us",
  seoTitle: "Milliliter to Pint (US) Converter (mL to pt) - UnitsConvertors",
  metaDescription: "Convert milliliters to US pints (mL to pt) accurately. Learn the conversion formula (1 US pt ≈ 473.176 mL), beverage volume charts, and FAQs.",
  h1: "Milliliter to Pint (US) Converter",
  introduction: [
    "Converting liquid volume from milliliters to US liquid pints is an essential calculation in brewing, dairy processing, commercial food service, and beverage distribution. While international liquids and metric recipes express fluid volume in milliliters, North American beverage containers and culinary recipes frequently measure liquids in US pints.",
    "One standard US Customary liquid pint equals 473.176473 milliliters (16 US fluid ounces). To convert milliliters to US liquid pints, divide the milliliter value by 473.176473 (or multiply by 0.00211338).",
    "This technical conversion guide explains the mathematical relationship between milliliters and US pints, provides step-by-step calculation examples, offers clear reference tables, and answers common fluid measurement questions."
  ],
  quickAnswer: {
    text: "To convert milliliters to US liquid pints, divide the milliliter amount by 473.176473 (or multiply by 0.00211338). For example, 500 mL equals approximately 1.057 US liquid pints.",
    formulaDisplay: "Pints (US) = mL ÷ 473.176473",
    subtext: "1 US Liquid Pint = 473.176 mL (1 UK Imperial Pint = 568.261 mL)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) is a metric unit of volume representing one-thousandth of a liter (0.001 L) or 1 cubic centimeter (1 cm³). It is the standard unit for fluid measurement in science, healthcare, and global manufacturing."
  },
  aboutTargetUnit: {
    title: "Understanding the US Pint (pt)",
    text: "The US Customary liquid pint (symbol: pt) is a volume unit equal to 16 US fluid ounces, 2 US cups, or 1/8 of a US gallon. In exact metric units, 1 US liquid pint equals 473.176473 milliliters."
  },
  relationship: "Because 1 US liquid pint contains approximately 473.176 milliliters, converting from milliliters to US pints scales the numerical value down by roughly 473.18 times. 500 mL is slightly larger than 1 US liquid pint (1.057 pt).",
  relationshipTitle: "Milliliter vs US Pint Volume Scale",
  relationshipItems: [
    { label: "236.59 mL", value: "= 0.50 US Pint (1 US Cup)" },
    { label: "473.18 mL", value: "= 1.00 US Liquid Pint (16 fl oz)" },
    { label: "500 mL", value: "≈ 1.057 US Liquid Pints" },
    { label: "750 mL", value: "≈ 1.585 US Liquid Pints" },
    { label: "1,000 mL", value: "≈ 2.113 US Liquid Pints" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 473.176473 to determine the exact volume in US Customary liquid pints.",
    math: "Volume in US Pints = Volume in Milliliters (mL) ÷ 473.176473",
    subtext: "Alternatively: Pints = mL × 0.00211338. To convert US pints back to mL, multiply by 473.176."
  },
  formulaTitle: "Milliliter to US Pint Conversion Formula",
  practicalTip: {
    title: "Kitchen Mental Estimation",
    text: "Think of 500 mL as roughly 1 US pint plus 1.8 tablespoons (27 mL extra). 1 US pint is just under half a liter (473 mL)."
  },
  expertNote: {
    title: "US Pint vs UK Imperial Pint Distinction",
    text: "A US liquid pint is 473.176 mL (16 US fl oz), whereas a British/UK Imperial pint is 568.261 mL (20 Imperial fl oz). An Imperial pint is 20% larger than a US pint."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Craft Beer Bottling",
        subtitle: "Convert a European 500 mL craft beer bottle into US liquid pints.",
        steps: [
          "Identify volume in milliliters: 500 mL.",
          "Apply conversion formula: Pints = 500 ÷ 473.176473.",
          "Calculate: 500 ÷ 473.176473 = 1.05669.",
          "Result: 500 mL equals approximately 1.057 US liquid pints."
        ]
      },
      {
        title: "Example 2: Dairy Cream Volume",
        subtitle: "Convert 1,000 mL (1 liter) of heavy cream into US customary pints.",
        steps: [
          "Identify volume: 1,000 mL.",
          "Divide by 473.176: 1,000 ÷ 473.176 = 2.11338.",
          "Result: 1,000 mL equals approximately 2.11 US liquid pints."
        ]
      },
      {
        title: "Example 3: Ice Cream Production",
        subtitle: "Convert a batch of 2,500 mL of gelato mix into US pints.",
        steps: [
          "Identify volume: 2,500 mL.",
          "Divide by 473.176: 2,500 ÷ 473.176 = 5.2834.",
          "Result: 2,500 mL equals approximately 5.28 US liquid pints."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Pint Conversion Table",
    headers: ["Milliliters (mL)", "US Liquid Pints", "Commercial Packaging Reference"],
    rows: [
      { fromVal: "100 mL", toVal: "0.211 pt", extra: "About 1/5 US pint" },
      { fromVal: "236.59 mL", toVal: "0.500 pt", extra: "1 US cup (1/2 pint)" },
      { fromVal: "355 mL", toVal: "0.750 pt", extra: "Standard US soda can (12 oz)" },
      { fromVal: "473.18 mL", toVal: "1.000 pt", extra: "1 US Liquid Pint (16 oz)" },
      { fromVal: "500 mL", toVal: "1.057 pt", extra: "Standard water bottle" },
      { fromVal: "750 mL", toVal: "1.585 pt", extra: "Standard wine bottle" },
      { fromVal: "946.35 mL", toVal: "2.000 pt", extra: "1 US quart (2 pints)" },
      { fromVal: "1,000 mL", toVal: "2.113 pt", extra: "1 liter bottle" },
      { fromVal: "2,000 mL", toVal: "4.227 pt", extra: "2-liter soda bottle" }
    ]
  },
  applications: {
    title: "Practical Applications of mL to pt Conversion",
    items: [
      {
        title: "Microbrewing & Taprooms",
        text: "Brewers converting European metric fermentation batches into US pint taproom pours."
      },
      {
        title: "Dairy & Ice Cream Industry",
        text: "Dairy processing facilities packaging specialty milk, cream, and frozen desserts for US pint retailing."
      },
      {
        title: "Culinary Recipe Scaling",
        text: "Caterers translating European bulk liquid recipes in liters and milliliters into US pint containers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing US liquid pints (473.18 mL) with UK Imperial pints (568.26 mL): Ordering a pint in London gets you 20% more beer than in New York.",
      "Conflating liquid pints with dry pints: 1 US dry pint equals 550.61 mL, which is ~16.4% larger than a liquid pint.",
      "Dividing by 500 instead of 473.176: Estimating a pint as 500 mL introduces a 5.7% error."
    ]
  },
  faqs: [
    {
      question: "How many US pints is 500 mL?",
      answer: "500 mL equals approximately 1.057 US liquid pints."
    },
    {
      question: "How many mL is in 1 US pint?",
      answer: "1 US liquid pint equals exactly 473.176473 milliliters (commonly rounded to 473 mL)."
    },
    {
      question: "How many US pints is 1,000 mL (1 liter)?",
      answer: "1,000 mL equals approximately 2.113 US liquid pints."
    },
    {
      question: "Is 500 mL equal to 1 pint?",
      answer: "500 mL is slightly more than 1 US liquid pint (473.18 mL) and less than 1 UK Imperial pint (568.26 mL)."
    },
    {
      question: "How do I convert 750 mL to US pints?",
      answer: "Divide 750 by 473.176 to get approximately 1.585 US liquid pints."
    },
    {
      question: "What is 250 mL in US pints?",
      answer: "250 mL divided by 473.176 equals approximately 0.528 US liquid pints."
    },
    {
      question: "Why is a UK pint bigger than a US pint?",
      answer: "The US adopted the British wine gallon (231 cu in) in 1707, while Britain reformed its system in 1824 to adopt the Imperial gallon (277.42 cu in)."
    },
    {
      question: "How many US pints are in 2 liters?",
      answer: "2 liters (2,000 mL) equals approximately 4.227 US liquid pints."
    }
  ],
  relatedList: [
    { label: "Milliliter to Quart (US)", from: "milliliter", to: "quart-us" },
    { label: "Milliliter to Gallon (US)", from: "milliliter", to: "gallon-us" },
    { label: "Milliliter to Cup (US)", from: "milliliter", to: "cup-us" },
    { label: "Milliliter to Fluid Ounce (US)", from: "milliliter", to: "fluid-ounce-us" }
  ],
  references: [
    "NIST Handbook 44 — Units of Liquid Volume",
    "Brewers Association — Draught Beer Quality Manual Volume Standards"
  ]
};
