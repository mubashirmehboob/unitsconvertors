import { CustomArticleData } from "./types";

export const milliliterToCupUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "cup-us",
  seoTitle: "Milliliter to Cup (US) Converter (mL to Cup) - UnitsConvertors",
  metaDescription: "Convert milliliters to US cups (mL to cup) accurately. Learn the conversion formula (1 US Cup ≈ 236.588 mL), baking ratios, lookup tables, and FAQs.",
  h1: "Milliliter to Cup (US) Converter",
  introduction: [
    "Converting liquid volume from milliliters to US cups is essential for cooks, bakers, nutritionists, and food manufacturers navigating international recipes. While European and Asian recipes state liquid ingredients in milliliters, American cookbooks and nutrition labels list measurements in US cups.",
    "A standard US Customary cup equals approximately 236.588 milliliters (while FDA nutrition labels define 1 US Legal cup as exactly 240 mL). To convert milliliters to US customary cups, divide the milliliter value by 236.588 (or multiply by 0.00422675).",
    "This reference guide explains the mathematical conversion between milliliters and US cups, provides step-by-step worked baking examples, offers comprehensive conversion tables, and answers common kitchen questions."
  ],
  quickAnswer: {
    text: "To convert milliliters to US Customary cups, divide the milliliter amount by 236.588 (or multiply by 0.004227). For example, 500 mL equals approximately 2.11 US cups (or 2.08 cups if using the 240 mL FDA cup).",
    formulaDisplay: "Cups (US) = mL ÷ 236.5882365",
    subtext: "For standard kitchen baking: 236.59 mL = 1 US Cup."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) is a metric volume unit equal to one-thousandth of a liter (0.001 L) or one cubic centimeter (1 cm³). It is the global standard for liquid packaging, recipe development, and clinical pharmacology."
  },
  aboutTargetUnit: {
    title: "Understanding the US Cup (cup)",
    text: "The US Customary cup is a traditional unit of volume widely used in American cooking and baking. One US Customary cup is defined as 8 US fluid ounces, 16 US tablespoons, or 236.5882365 milliliters."
  },
  relationship: "Because 1 US Customary cup equals 236.588 milliliters, converting from milliliters (a smaller metric unit) to US cups yields a smaller numerical value. 100 mL equals roughly 0.4227 US cups.",
  relationshipTitle: "Milliliter vs US Cup Volume Scale",
  relationshipItems: [
    { label: "60 mL", value: "≈ 0.25 Cup (1/4 US cup)" },
    { label: "118 mL", value: "≈ 0.50 Cup (1/2 US cup)" },
    { label: "177 mL", value: "≈ 0.75 Cup (3/4 US cup)" },
    { label: "236.59 mL", value: "= 1.00 US Customary Cup" },
    { label: "500 mL", value: "≈ 2.11 US Customary Cups" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 236.5882365 to calculate the equivalent volume in US Customary cups.",
    math: "Volume in US Cups = Volume in Milliliters (mL) ÷ 236.5882365",
    subtext: "Alternatively: Cups = mL × 0.00422675. If using FDA nutrition cups (240 mL): Cups = mL ÷ 240."
  },
  formulaTitle: "Milliliter to US Cup Conversion Formula",
  practicalTip: {
    title: "Kitchen Rule of Thumb",
    text: "For general cooking, think of 250 mL as roughly 1 cup plus 1 tablespoon (or 240 mL as 1 cup). For precise baking, use 236.59 mL per US customary cup."
  },
  expertNote: {
    title: "US Customary vs Metric Cup Differences",
    text: "Be aware that an Australian/New Zealand metric cup is 250 mL, an FDA legal nutrition cup is 240 mL, and a US customary cup is 236.588 mL. Knowing which recipe standard you are using prevents baking errors."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Milk in Cake Batter",
        subtitle: "Convert a European recipe requirement of 350 mL of milk into US cups.",
        steps: [
          "Identify volume in milliliters: 350 mL.",
          "Apply formula: Cups = 350 ÷ 236.5882365.",
          "Calculate: 350 ÷ 236.5882365 = 1.4793.",
          "Result: 350 mL equals approximately 1.48 US cups (about 1 1/2 cups)."
        ]
      },
      {
        title: "Example 2: Broth for Soup",
        subtitle: "Convert 750 mL of stock into US customary cups.",
        steps: [
          "Identify volume: 750 mL.",
          "Divide by 236.588: 750 ÷ 236.588 = 3.1701.",
          "Result: 750 mL equals approximately 3.17 US cups (3 cups + 2.7 tablespoons)."
        ]
      },
      {
        title: "Example 3: Oil Measurement in Baking",
        subtitle: "Convert 120 mL of vegetable oil to US cups.",
        steps: [
          "Identify volume: 120 mL.",
          "Divide by 236.588: 120 ÷ 236.588 = 0.5072.",
          "Result: 120 mL equals approximately 0.51 US cups (slightly over 1/2 cup)."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Cup Conversion Table",
    headers: ["Milliliters (mL)", "US Customary Cups", "Fractional Kitchen Approximation"],
    rows: [
      { fromVal: "15 mL", toVal: "0.063 cups", extra: "1 tablespoon" },
      { fromVal: "30 mL", toVal: "0.127 cups", extra: "2 tablespoons (1/8 cup)" },
      { fromVal: "60 mL", toVal: "0.254 cups", extra: "1/4 cup" },
      { fromVal: "80 mL", toVal: "0.338 cups", extra: "1/3 cup" },
      { fromVal: "120 mL", toVal: "0.507 cups", extra: "1/2 cup" },
      { fromVal: "160 mL", toVal: "0.676 cups", extra: "2/3 cup" },
      { fromVal: "180 mL", toVal: "0.761 cups", extra: "3/4 cup" },
      { fromVal: "236.59 mL", toVal: "1.000 cup", extra: "1 US Customary Cup" },
      { fromVal: "250 mL", toVal: "1.057 cups", extra: "1 metric cup (~1 cup + 1 tbsp)" },
      { fromVal: "500 mL", toVal: "2.113 cups", extra: "2 cups + 2 tbsp" },
      { fromVal: "1,000 mL", toVal: "4.227 cups", extra: "4 1/4 cups" }
    ]
  },
  applications: {
    title: "Practical Applications of mL to Cup Conversion",
    items: [
      {
        title: "International Recipe Adaptation",
        text: "Home cooks adapting British, European, or Asian recipes listing liquids in milliliters into US measuring cups."
      },
      {
        title: "Nutritional Intake & Meal Tracking",
        text: "Dietitians calculating liquid intake convert packaging milliliter amounts into US cups for meal plans."
      },
      {
        title: "Commercial Baking Scale-Up",
        text: "Bakeries converting European metric formulations into US commercial kitchen equipment sizes."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing US Customary cups (236.59 mL) with Metric cups (250 mL): Using a metric cup instead of a US cup adds 13.4 mL extra per cup.",
      "Conflating liquid volume cups with dry ingredient weight: A cup measures volume, not weight in grams.",
      "Dividing by 240 vs 236.588: For nutrition labeling FDA uses 240 mL, but for exact US customary recipes use 236.588 mL."
    ]
  },
  faqs: [
    {
      question: "How many cups is 250 mL?",
      answer: "250 mL equals approximately 1.06 US Customary cups (or exactly 1 metric cup)."
    },
    {
      question: "How many mL is 1 US cup?",
      answer: "1 US Customary cup equals 236.5882365 milliliters (commonly rounded to 236.6 mL)."
    },
    {
      question: "How many cups is 500 mL?",
      answer: "500 mL equals approximately 2.11 US Customary cups (about 2 cups plus 1.8 tablespoons)."
    },
    {
      question: "Is 100 mL half a cup?",
      answer: "No, half a US cup is approximately 118.3 mL. 100 mL is about 0.42 cups (slightly less than 1/2 cup)."
    },
    {
      question: "How do I convert 750 mL to cups?",
      answer: "Divide 750 by 236.588 to get approximately 3.17 US cups."
    },
    {
      question: "How many cups is 1,000 mL (1 liter)?",
      answer: "1,000 mL equals approximately 4.23 US Customary cups."
    },
    {
      question: "What is 150 mL in US cups?",
      answer: "150 mL divided by 236.588 equals approximately 0.63 US cups (about 2/3 cup)."
    },
    {
      question: "Why do cup measurements vary between countries?",
      answer: "Historical standardizations created distinct sizes: US customary (236.59 mL), US legal nutrition (240 mL), Commonwealth metric (250 mL), and Japanese traditional (200 mL)."
    }
  ],
  relatedList: [
    { label: "Liter to Cup (US)", from: "liter", to: "cup-us" },
    { label: "Milliliter to Tablespoon (US)", from: "milliliter", to: "tablespoon-us" },
    { label: "Milliliter to Teaspoon (US)", from: "milliliter", to: "teaspoon-us" },
    { label: "Milliliter to Fluid Ounce (US)", from: "milliliter", to: "fluid-ounce-us" }
  ],
  references: [
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "USDA Household Measurement Tables — Food Data Central",
    "FDA Food Labeling Guide — Title 21 CFR 101.9 Reference Amounts Customarily Consumed (RACC)"
  ]
};
