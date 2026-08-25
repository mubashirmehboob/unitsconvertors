import { CustomArticleData } from "./types";

export const cupUsToMilliliter: CustomArticleData = {
  fromUnitId: "cup-us",
  toUnitId: "milliliter",
  seoTitle: "Cup (US) to Milliliter Converter (cup to mL) - UnitsConvertors",
  metaDescription: "Convert US Customary cups to milliliters (cup to mL) accurately. Learn the exact formula (1 cup = 236.588 mL), baking conversion charts, and FAQs.",
  h1: "Cup (US) to Milliliter Converter",
  introduction: [
    "Converting liquid volume from US Customary cups to metric milliliters is one of the most fundamental calculations in baking, culinary recipe scaling, international cooking, dietary tracking, and nutrition science. While American cookbooks, measuring glassware, and recipes rely almost exclusively on US Customary cups, international culinary publications and modern digital kitchen scales measure liquids in milliliters.",
    "One standard US Customary cup is legally defined as exactly 8 US fluid ounces, 16 US tablespoons, 48 US teaspoons, or 236.5882365 milliliters. To convert US Customary cups to milliliters, multiply the number of cups by 236.5882365 (often rounded to 236.6 mL or 240 mL in home cooking).",
    "This technical guide explains the mathematical conversion between US cups and milliliters, compares the three primary international cup standards (US Customary, US FDA Legal, and Commonwealth Metric), provides step-by-step worked examples, and presents an extensive culinary reference table."
  ],
  quickAnswer: {
    text: "To convert US Customary cups to milliliters, multiply the cup value by 236.58824. For example, 1 US cup equals approximately 236.59 mL, and 1/2 cup equals approximately 118.29 mL.",
    formulaDisplay: "Milliliters (mL) = US Cups × 236.5882365",
    subtext: "1 US Customary Cup = 8 US fl oz = 236.5882365 mL (1 mL ≈ 0.004227 US cups)."
  },
  aboutSourceUnit: {
    title: "Understanding the US Customary Cup (cup)",
    text: "The US Customary cup (symbol: cup) is a traditional unit of volume widely used across American culinary and household applications. Defined as 1/16 of a US liquid gallon, 1/4 of a US liquid quart, 1/2 of a US pint, or 8 US fluid ounces, it equals exactly 236.5882365 milliliters (approx. 14.4375 cubic inches)."
  },
  aboutTargetUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of volume equal to one-thousandth of a liter (0.001 L) or exactly 1 cubic centimeter (cm³ / cc). Accepted alongside the International System of Units (SI), the milliliter is the universal standard for precise liquid measurement across science, baking, medicine, and food manufacturing."
  },
  relationship: "One US Customary cup equals exactly 8 US fluid ounces. Because 1 US fluid ounce is defined as 29.5735295625 mL, 1 US Customary cup equals 8 × 29.5735295625 = 236.5882365 milliliters. Inversely, 1 milliliter represents approximately 0.0042267528 US Customary cups.",
  relationshipTitle: "US Cup to Milliliter Fractional Breakdown",
  relationshipItems: [
    { label: "1/8 US Cup (2 tbsp)", value: "= 29.5735 mL" },
    { label: "1/4 US Cup (4 tbsp)", value: "= 59.1471 mL" },
    { label: "1/3 US Cup (5 tbsp + 1 tsp)", value: "= 78.8627 mL" },
    { label: "1/2 US Cup (8 tbsp)", value: "= 118.2941 mL" },
    { label: "2/3 US Cup (10 tbsp + 2 tsp)", value: "= 157.7255 mL" },
    { label: "3/4 US Cup (12 tbsp)", value: "= 177.4412 mL" },
    { label: "1.00 US Cup (16 tbsp)", value: "= 236.5882 mL" }
  ],
  formula: {
    text: "Multiply the volume in US Customary cups by 236.5882365 to find the equivalent volume in milliliters.",
    math: "Volume (mL) = Volume (cups) × 236.5882365",
    subtext: "For quick estimation: Volume (mL) ≈ Volume (cups) × 236.6 (or 240 for FDA nutrition cups)"
  },
  formulaTitle: "US Cup to Milliliter Conversion Formula",
  practicalTip: {
    title: "Kitchen Mental Conversion Rules",
    text: "For fast mental math in cooking, remember: 1/4 cup is ~60 mL, 1/2 cup is ~120 mL, 3/4 cup is ~180 mL, and 1 full cup is ~240 mL (exact: 236.6 mL). 1 cup of water weighs approximately 236.6 grams."
  },
  expertNote: {
    title: "US Customary Cup vs US Legal Cup vs Metric Cup",
    text: "Ensure you use the correct cup standard: The US Customary Cup (used in recipes and measuring sets) is 236.588 mL. The US Legal Nutrition Cup (used on FDA nutrition fact labels) is rounded to exactly 240 mL. The Commonwealth Metric Cup (used in Australia, New Zealand, and Canada) is exactly 250 mL. Using a 250 mL metric cup for a US recipe adds about 13.4 mL of liquid per cup."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Cake Hydration Recipe Scaling",
        subtitle: "A classic American sponge cake recipe specifies 1 3/4 cups (1.75 cups) of buttermilk. Convert to milliliters for a European pastry chef.",
        steps: [
          "State the given volume: Volume = 1.75 cups.",
          "Apply the conversion formula: mL = 1.75 × 236.5882365.",
          "Perform the multiplication: 1.75 × 236.5882365 = 414.0294 mL.",
          "Result: 1.75 US cups equals approximately 414.03 mL (about 414 mL)."
        ]
      },
      {
        title: "Example 2: Sourdough Bread Hydration",
        subtitle: "A baker measures 2.50 cups of water for artisan bread dough. Calculate the exact milliliter volume.",
        steps: [
          "State the initial volume: Volume = 2.50 cups.",
          "Multiply by 236.5882365: 2.50 × 236.5882365 = 591.4706 mL.",
          "Result: 2.50 US cups equals approximately 591.47 mL (about 591.5 grams of water at room temperature)."
        ]
      },
      {
        title: "Example 3: Small Sauce Volume (1/3 Cup)",
        subtitle: "Convert 1/3 cup of heavy cream into milliliters for a precision pastry scale.",
        steps: [
          "Convert fraction to decimal: 1/3 ≈ 0.333333 cups.",
          "Set up the equation: mL = (1/3) × 236.5882365 = 78.8627 mL.",
          "Result: 1/3 US cup equals approximately 78.86 mL."
        ]
      }
    ]
  },
  table: {
    title: "US Cup to Milliliter Culinary Conversion Table",
    headers: ["US Cups (cup)", "Tablespoons (tbsp)", "Fluid Ounces (fl oz)", "Milliliters (mL)"],
    rows: [
      { fromVal: "1/8 cup (0.125)", toVal: "2 tbsp", extra: "1.00 fl oz", extra2: "29.57 mL" },
      { fromVal: "1/4 cup (0.250)", toVal: "4 tbsp", extra: "2.00 fl oz", extra2: "59.15 mL" },
      { fromVal: "1/3 cup (0.333)", toVal: "5.33 tbsp", extra: "2.67 fl oz", extra2: "78.86 mL" },
      { fromVal: "1/2 cup (0.500)", toVal: "8 tbsp", extra: "4.00 fl oz", extra2: "118.29 mL" },
      { fromVal: "2/3 cup (0.667)", toVal: "10.67 tbsp", extra: "5.33 fl oz", extra2: "157.73 mL" },
      { fromVal: "3/4 cup (0.750)", toVal: "12 tbsp", extra: "6.00 fl oz", extra2: "177.44 mL" },
      { fromVal: "1 cup (1.000)", toVal: "16 tbsp", extra: "8.00 fl oz", extra2: "236.59 mL" },
      { fromVal: "1 1/4 cups (1.250)", toVal: "20 tbsp", extra: "10.00 fl oz", extra2: "295.74 mL" },
      { fromVal: "1 1/2 cups (1.500)", toVal: "24 tbsp", extra: "12.00 fl oz", extra2: "354.88 mL" },
      { fromVal: "2 cups (2.000)", toVal: "32 tbsp", extra: "16.00 fl oz (1 pt)", extra2: "473.18 mL" }
    ]
  },
  applications: {
    title: "Practical Applications of Cup to Milliliter Conversion",
    items: [
      {
        title: "International Baking & Recipe Translation",
        text: "Home bakers and pastry chefs translating American volume recipes into metric grams and milliliters to use digital kitchen scales for repeatable crumb structure."
      },
      {
        title: "Clinical Nutrition & Dietary Meal Planning",
        text: "Dietitians converting portion sizes from US measuring cups into milliliters for medical fluid logs and nutrition software databases."
      },
      {
        title: "Food Manufacturing & Packaging Compliance",
        text: "Culinary product developers converting kitchen test recipes recorded in cups into metric manufacturing batch formulas in liters and milliliters."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing US Customary cups (236.59 mL) with Commonwealth Metric cups (250 mL): Using a 250 mL cup adds roughly 5.7% excess liquid, altering delicate pastry textures.",
      "Confusing US Customary cups (236.59 mL) with FDA Nutrition cups (240 mL): Commercial food labels use 240 mL for serving size definitions.",
      "Measuring dry ingredients by liquid cup volume: 1 cup of all-purpose flour weighs approximately 120–125 grams, while 1 cup of water weighs 236.6 grams."
    ]
  },
  faqs: [
    {
      question: "How many mL are in 1 US Customary cup?",
      answer: "There are exactly 236.5882365 milliliters in 1 US Customary cup (commonly rounded to 236.6 mL or 240 mL in casual cooking)."
    },
    {
      question: "What is 1/2 cup in mL?",
      answer: "1/2 US cup equals exactly 118.2941 milliliters (commonly rounded to 118 mL or 120 mL)."
    },
    {
      question: "What is 1/4 cup in mL?",
      answer: "1/4 US cup equals exactly 59.1471 milliliters (commonly rounded to 60 mL)."
    },
    {
      question: "What is 1/3 cup in mL?",
      answer: "1/3 US cup equals approximately 78.8627 milliliters (commonly rounded to 80 mL)."
    },
    {
      question: "What is 3/4 cup in mL?",
      answer: "3/4 US cup equals exactly 177.4412 milliliters (commonly rounded to 175 mL or 180 mL)."
    },
    {
      question: "Is 1 cup equal to 240 mL or 250 mL?",
      answer: "A US Customary cup is 236.59 mL. The US FDA defines a 'legal cup' for nutrition labels as 240 mL. In Australia, the UK, and New Zealand, a standard metric cup is 250 mL."
    },
    {
      question: "How do I convert cups to mL?",
      answer: "Multiply the number of US cups by 236.588. For example, 2 cups multiplied by 236.588 equals 473.18 mL."
    },
    {
      question: "How many mL is 2 cups?",
      answer: "2 US cups equals exactly 473.1765 milliliters (which is 1 US liquid pint or 16 US fluid ounces)."
    }
  ],
  relatedList: [
    { label: "Cup (US) to Liter", from: "cup-us", to: "liter" },
    { label: "Cup (US) to Tablespoon (US)", from: "cup-us", to: "tablespoon-us" },
    { label: "Cup (US) to Teaspoon (US)", from: "cup-us", to: "teaspoon-us" },
    { label: "Milliliter to Cup (US)", from: "milliliter", to: "cup-us" },
    { label: "Liter to Cup (US)", from: "liter", to: "cup-us" }
  ],
  references: [
    "NIST Handbook 44 - Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "U.S. FDA 21 CFR § 101.9 - Nutrition Labeling of Food (Legal Cup definition)",
    "BIPM SI Brochure: The International System of Units (SI)"
  ]
};
