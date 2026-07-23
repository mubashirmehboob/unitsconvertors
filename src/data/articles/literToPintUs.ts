import { CustomArticleData } from "./types";

export const literToPintUs: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "pint-us",
  seoTitle: "Liter to Pint Converter - L to pt (US)",
  metaDescription: "Convert liters to US liquid pints (L to pt) accurately. Learn the conversion formula (1 L ≈ 2.11338 pt), beverage and ice cream sizing, and reference charts.",
  h1: "Liter to Pint Converter",
  introduction: [
    "Converting volume from metric liters to US liquid pints is frequently needed in food service, brewing, dairy production, ice cream manufacturing, and culinary arts. While international beverage packaging relies on liters and milliliters, US recipes and food retail rely on pints.",
    "Because one US liquid pint equals exactly 0.473176473 liters (473.176 mL), one liter contains approximately 2.113376 US liquid pints. To convert liters to US liquid pints, multiply the volume in liters by 2.11338 (or divide by 0.473176)."
  ],
  quickAnswer: {
    text: "To convert liters to US liquid pints, multiply the number of liters by 2.11338 (or divide by 0.473176). For example, 1 liter equals approximately 2.11 US liquid pints.",
    formulaDisplay: "1 L ≈ 2.11338 pt (US)",
    subtext: "1 US liquid pint equals exactly 0.473176473 liters (473.176 mL)."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L) is a metric unit of volume equal to 1 cubic decimeter (dm³). It is used globally as the primary measure for commercial beverages, dairy products, and liquid food ingredients."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Pint (pt)",
    text: "The US liquid pint (symbol: pt) is a US customary unit equal to one-eighth of a US gallon, half a US quart, or 16 US fluid ounces. It is legally defined as 0.473176473 liters."
  },
  relationship: "There are 8 US pints in 1 US gallon (3.785411784 L). Dividing 3.785411784 by 8 gives 1 US pint = 0.473176473 liters. Inverting this factor gives 1 liter = 1 / 0.473176473 ≈ 2.113376419 US liquid pints.",
  relationshipTitle: "Liter vs US Pint Volume Scale",
  relationshipItems: [
    { label: "1 Liter (L)", value: "≈ 2.11338 US Pints (pt)" },
    { label: "1 US Pint (pt)", value: "= 0.473176 Liters (L)" }
  ],
  formula: {
    text: "To convert liters to US liquid pints, multiply the liter measurement by 2.1133764.",
    math: "Volume in US Pints (pt) = Volume in Liters (L) × 2.1133764",
    subtext: "Alternatively: Pints = Liters / 0.473176473."
  },
  formulaTitle: "The Liter to US Pint Formula",
  practicalTip: {
    title: "Quick Double-Plus Estimation",
    text: "To quickly estimate pints from liters, double the number of liters and add 10%. For instance, 2 liters doubled is 4, plus 10% (0.4) is ~4.2 pints (actual: 4.226 pt)."
  },
  expertNote: {
    title: "US Pint vs UK Imperial Pint",
    text: "A US liquid pint is 16 US fl oz (473.18 mL), while a UK Imperial pint is 20 UK fl oz (568.26 mL). An Imperial pint is about 20% larger than a US pint."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Craft Brewery Batch",
        subtitle: "A microbrewery fills a 15-liter keg sample. Convert this volume into US liquid pints.",
        steps: [
          "Identify the volume in liters: 15 L.",
          "Apply the formula: pt = L × 2.1133764.",
          "Perform the multiplication: 15 × 2.1133764 = 31.7006.",
          "Result: 15 liters is equal to approximately 31.70 US liquid pints."
        ]
      },
      {
        title: "Example 2: Gourmet Ice Cream Mix",
        subtitle: "An ice cream manufacturer prepares 3.5 liters of vanilla base. Calculate how many US pints this yields.",
        steps: [
          "Identify the volume: 3.5 L.",
          "Multiply by 2.1133764: 3.5 × 2.1133764 = 7.3968.",
          "Result: 3.5 liters equals approximately 7.40 US pints."
        ]
      }
    ]
  },
  table: {
    title: "Liter to US Pint Reference Table",
    headers: ["Liters (L)", "US Pints (pt)", "Practical Culinary / Beverage Context"],
    rows: [
      { fromVal: "0.473 L", toVal: "1.00 pt", extra: "1 US pint glass (16 fl oz)" },
      { fromVal: "0.5 L", toVal: "1.06 pt", extra: "European 500 mL beer bottle" },
      { fromVal: "0.946 L", toVal: "2.00 pt", extra: "1 US quart" },
      { fromVal: "1.0 L", toVal: "2.11 pt", extra: "1 liter carton of milk" },
      { fromVal: "1.5 L", toVal: "3.17 pt", extra: "Standard magnum bottle of wine" },
      { fromVal: "2.0 L", toVal: "4.23 pt", extra: "2-liter soda bottle" },
      { fromVal: "3.785 L", toVal: "8.00 pt", extra: "1 US gallon" },
      { fromVal: "5.0 L", toVal: "10.57 pt", extra: "5-liter party mini-keg" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "Brewing & Taproom Management",
        text: "Draft beer systems import keg sizes rated in liters (e.g., 50L DIN kegs) and calculate pint yields for point-of-sale inventory tracking."
      },
      {
        title: "Dairy & Ice Cream Production",
        text: "Specialty creameries package premium ice cream in 1-pint containers, converting batch volumes from liters."
      },
      {
        title: "Culinary Recipes",
        text: "Professional chefs scale up liquid ingredients from metric liters into US pints for kitchen staff training."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing US liquid pints (473.18 mL) with British Imperial pints (568.26 mL).",
      "Dividing by 2.11338 instead of multiplying when converting from liters to pints.",
      "Mistaking US liquid pints for US dry pints (1 US dry pt = 550.61 mL)."
    ]
  },
  faqs: [
    {
      question: "How many US pints are in 1 liter?",
      answer: "There are approximately 2.113376 US liquid pints in 1 liter."
    },
    {
      question: "How many mL are in a US pint?",
      answer: "A US liquid pint contains exactly 473.176473 milliliters."
    },
    {
      question: "How do I convert 2 liters to US pints?",
      answer: "Multiply 2 by 2.113376 to get approximately 4.23 US liquid pints."
    },
    {
      question: "Is 500 mL bigger than a US pint?",
      answer: "Yes, 500 mL (0.5 L) is slightly larger than a US liquid pint (473.18 mL) by about 26.8 mL."
    },
    {
      question: "What is 5 liters in US pints?",
      answer: "5 liters multiplied by 2.113376 equals approximately 10.57 US liquid pints."
    },
    {
      question: "How many pints are in a 50-liter keg?",
      answer: "A 50-liter keg contains approximately 105.67 US liquid pints (or 88.0 Imperial pints)."
    },
    {
      question: "Why is a British pint larger than a US pint?",
      answer: "A British Imperial pint contains 20 Imperial fluid ounces (568.26 mL), while a US pint contains 16 US fluid ounces (473.18 mL)."
    },
    {
      question: "What is 10 liters in US pints?",
      answer: "10 liters multiplied by 2.113376 equals approximately 21.13 US liquid pints."
    }
  ],
  relatedList: [
    { label: "Liter to Quart", from: "liter", to: "quart-us" },
    { label: "Liter to Cup", from: "liter", to: "cup-us" },
    { label: "Liter to Gallon (US)", from: "liter", to: "gallon-us" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "NIST Handbook 133 - Checking the Net Contents of Packaged Goods",
    "Brewers Association - Beer Volume Unit Equivalencies and Keg Sizing"
  ]
};
