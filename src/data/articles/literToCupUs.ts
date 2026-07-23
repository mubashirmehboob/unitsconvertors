import { CustomArticleData } from "./types";

export const literToCupUs: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "cup-us",
  seoTitle: "Liter to Cup Converter - L to cup",
  metaDescription: "Convert liters to cups (L to cup) accurately. Learn the conversion formula (1 L ≈ 4.16667 cups), culinary baking measurements, and conversion charts.",
  h1: "Liter to Cup Converter",
  introduction: [
    "Converting volume between metric liters and cups is a fundamental calculation in cooking, baking, nutrition tracking, and food manufacturing. While European and international recipes list liquid ingredients in liters and milliliters, North American recipes rely on cups.",
    "Depending on the cup standard, one metric liter contains approximately 4.16667 cups (using the standard 240 mL metric/customary cup factor) or 4.22675 cups (using the US legal 236.588 mL cup). To convert liters to cups using the standard 240 mL cup factor, multiply the liter volume by 4.16667 (or divide by 0.24)."
  ],
  quickAnswer: {
    text: "To convert liters to cups, multiply the volume in liters by 4.16667 (or divide by 0.24). For example, 1 liter equals approximately 4.17 cups.",
    formulaDisplay: "1 L ≈ 4.16667 cups",
    subtext: "1 cup is standardized as 240 mL (0.24 L) in practical culinary measurements."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L) is a metric unit of volume equal to 1 cubic decimeter (dm³) or 1,000 milliliters (mL). It is the standard unit for measuring liquids across the globe."
  },
  aboutTargetUnit: {
    title: "Understanding the Cup (cp)",
    text: "The cup is a customary volume unit used in cooking and baking. In practical culinary and nutrition labeling, a standard measuring cup equals 240 milliliters (0.24 liters), while a US customary cup equals 236.588 milliliters."
  },
  relationship: "Since one cup equals 240 milliliters (0.24 L), one liter contains 1,000 / 240 = 4.166666667 cups. Converting liters to cups scales the volume value up by roughly 4.17 times.",
  relationshipTitle: "Liter vs Cup Culinary Volume Scale",
  relationshipItems: [
    { label: "1 Liter (L)", value: "≈ 4.16667 Cups (cp)" },
    { label: "1 Cup (240 mL)", value: "= 0.24 Liters (L)" }
  ],
  formula: {
    text: "To find volume in cups, divide the liter count by 0.24 (or multiply by 4.166667).",
    math: "Volume in Cups = Volume in Liters (L) / 0.24",
    subtext: "Alternatively: Cups = Liters × 4.166667."
  },
  formulaTitle: "The Liter to Cup Conversion Formula",
  practicalTip: {
    title: "Kitchen Rule of Thumb",
    text: "Think of 1 liter as 4 cups plus a little splash (about 2 tablespoons or 40 mL extra)."
  },
  expertNote: {
    title: "Baking vs General Cooking Precision",
    text: "For general cooking, treating 1 liter as 4 cups works well. However, in delicate baking recipes like soufflés or macaroons, measure liquids in milliliters using a digital kitchen scale for perfect results."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Cake Batter Recipe",
        subtitle: "A European baking recipe requires 0.75 liters of whole milk. Convert this to cups.",
        steps: [
          "Identify the volume in liters: 0.75 L.",
          "Apply the conversion formula: Cups = L / 0.24.",
          "Perform the calculation: 0.75 / 0.24 = 3.125.",
          "Result: 0.75 liters is equal to exactly 3.125 (3 1/8) cups."
        ]
      },
      {
        title: "Example 2: Soup Broth Preparation",
        subtitle: "A chef needs 2.5 liters of chicken stock for a large soup recipe. Calculate how many cups to measure.",
        steps: [
          "Identify the volume: 2.5 L.",
          "Multiply by 4.166667: 2.5 × 4.166667 = 10.4167.",
          "Result: 2.5 liters equals approximately 10.42 cups (10 cups plus 6 tablespoons)."
        ]
      }
    ]
  },
  table: {
    title: "Liter to Cup Reference Table",
    headers: ["Liters (L)", "Cups (cp)", "Kitchen Equivalent"],
    rows: [
      { fromVal: "0.06 L (60 mL)", toVal: "0.25 cp", extra: "1/4 cup" },
      { fromVal: "0.12 L (120 mL)", toVal: "0.50 cp", extra: "1/2 cup" },
      { fromVal: "0.24 L (240 mL)", toVal: "1.00 cp", extra: "1 standard cup" },
      { fromVal: "0.48 L (480 mL)", toVal: "2.00 cp", extra: "2 cups (1 pint)" },
      { fromVal: "0.50 L (500 mL)", toVal: "2.08 cp", extra: "2 cups + 1 tbsp" },
      { fromVal: "0.75 L (750 mL)", toVal: "3.13 cp", extra: "3 1/8 cups" },
      { fromVal: "1.00 L (1,000 mL)", toVal: "4.17 cp", extra: "4 cups + 2 tbsp" },
      { fromVal: "2.00 L (2,000 mL)", toVal: "8.33 cp", extra: "8 1/3 cups" }
    ]
  },
  applications: {
    title: "Real-World Culinary Applications",
    items: [
      {
        title: "Recipe Translation & Adaptation",
        text: "Home cooks translating international cookbooks from metric liters into American measuring cups."
      },
      {
        title: "Commercial Food Catering",
        text: "Caterers scaling up batch punch, soup stocks, and salad dressings from liters to kitchen cup scoops."
      },
      {
        title: "Nutritional Meal Planning",
        text: "Dietitians calculating daily hydration intake, converting 2-liter water goals into 8-oz cup equivalents."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Assuming 1 liter is exactly 4 cups: 1 liter contains 4.17 cups, so ignoring the extra 40 mL per liter can throw off baking formulas.",
      "Confusing fluid volume cups with dry ingredient cups weighed on a scale.",
      "Dividing by 4.16667 instead of multiplying when converting from liters to cups."
    ]
  },
  faqs: [
    {
      question: "How many cups are in 1 liter?",
      answer: "There are approximately 4.17 cups in 1 liter (4 cups plus about 2 tablespoons)."
    },
    {
      question: "Is 4 cups equal to 1 liter?",
      answer: "4 standard 240 mL cups equal 960 mL, which is slightly less than 1 liter (1,000 mL)."
    },
    {
      question: "How do I convert 2 liters to cups?",
      answer: "Multiply 2 by 4.16667 to get approximately 8.33 cups (8 1/3 cups)."
    },
    {
      question: "How many cups is 500 mL (0.5 liters)?",
      answer: "500 mL equals approximately 2.08 cups (2 cups plus 1 tablespoon)."
    },
    {
      question: "What is 1.5 liters in cups?",
      answer: "1.5 liters multiplied by 4.16667 equals approximately 6.25 cups (6 1/4 cups)."
    },
    {
      question: "How many cups is 750 mL (0.75 liters)?",
      answer: "750 mL divided by 240 mL equals exactly 3.125 cups (3 1/8 cups)."
    },
    {
      question: "Why do different countries have different cup sizes?",
      answer: "The US legal cup is 236.588 mL, the standard metric/customary culinary cup is 240 mL, and the Commonwealth metric cup (Australia/NZ) is 250 mL."
    },
    {
      question: "What is 3 liters in cups?",
      answer: "3 liters multiplied by 4.16667 equals 12.5 cups."
    }
  ],
  relatedList: [
    { label: "Liter to Pint", from: "liter", to: "pint-us" },
    { label: "Liter to Quart", from: "liter", to: "quart-us" },
    { label: "Liter to Gallon (US)", from: "liter", to: "gallon-us" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "USDA National Nutrient Database for Standard Reference - Household Measurement Tables",
    "Culinary Institute of America (CIA) - Professional Baking and Pastry Measurement Standards"
  ]
};
