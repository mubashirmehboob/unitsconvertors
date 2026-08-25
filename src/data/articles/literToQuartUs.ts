import { CustomArticleData } from "./types";

export const literToQuartUs: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "quart-us",
  seoTitle: "Liter to Quart (US) Converter (L to qt) - UnitsConvertors",
  metaDescription: "Convert liters to US liquid quarts (L to qt) accurately. Learn the conversion formula (1 L ≈ 1.05669 qt), engine oil jug sizing, recipe scaling, and FAQs.",
  h1: "Liter to Quart (US) Converter",
  introduction: [
    "Converting volume between metric liters and US liquid quarts is one of the most practical fluid conversions in automotive maintenance, food service, dairy packaging, and consumer chemical handling. Because a US liquid quart represents one-quarter of a US gallon, its volume is remarkably close to a metric liter—making mental comparisons straightforward, yet requiring precise math for engine oil fills and bakery formulas.",
    "One standard US Customary liquid quart equals exactly 32 US fluid ounces, 2 US pints, 4 US cups, or 0.946352946 liters (946.352946 milliliters). As a result, 1 metric liter contains approximately 1.0566882 US liquid quarts. To convert liters to US liquid quarts, multiply the volume in liters by 1.0566882 (or divide by 0.9463529).",
    "This guide covers the exact mathematical conversion between liters and US quarts, explains distinctions between US liquid, US dry, and British Imperial quarts, provides step-by-step worked calculations, and presents quick-reference lookup tables."
  ],
  quickAnswer: {
    text: "To convert liters to US liquid quarts, multiply the volume in liters by 1.05669 (or divide by 0.946353). For example, 1 liter equals approximately 1.06 US liquid quarts (1 quart plus 3.6 tablespoons).",
    formulaDisplay: "US Quarts (qt) = Liters (L) × 1.0566882",
    subtext: "1 US liquid quart = 0.946353 L (946.353 mL). 1 Liter = 1 ÷ 0.946353 ≈ 1.05669 qt."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L or l) is a metric unit of volume equal to 1 cubic decimeter (dm³), 1,000 cubic centimeters (cm³), or 1,000 milliliters (0.001 m³). Accepted alongside the International System of Units (SI), the liter is the worldwide benchmark for consumer beverages, motor oil, dairy distribution, and chemical reagents."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Quart (qt)",
    text: "The US Customary liquid quart (symbol: qt) is a traditional fluid unit equal to 1/4 of a US liquid gallon, 2 US pints, 4 US cups, 32 US fluid ounces, or exactly 0.946352946 liters. It is widely used across the United States for motor oil jugs, milk cartons, and cooking recipes."
  },
  relationship: "Because 1 US liquid gallon contains exactly 3.785411784 liters and comprises 4 quarts, 1 US liquid quart equals 3.785411784 ÷ 4 = 0.946352946 liters (946.352946 mL). Inverting this value yields 1 ÷ 0.946352946 ≈ 1.0566882094 US liquid quarts per metric liter.",
  relationshipTitle: "Liter to US Liquid Quart Relationship",
  relationshipItems: [
    { label: "1 Liter (1,000 mL)", value: "≈ 1.05669 US Liquid Quarts (qt)" },
    { label: "1 US Liquid Quart (qt)", value: "= 0.946353 Liters (946.353 mL)" },
    { label: "1 US Liquid Quart", value: "= 2 US Pints = 4 US Cups = 32 US fl oz" },
    { label: "1 US Dry Quart", value: "= 1.101221 L (0.90808 dry qt per liter)" },
    { label: "1 UK Imperial Quart", value: "= 1.136523 L (0.87988 Imp qt per liter)" }
  ],
  formula: {
    text: "Multiply the volume in liters by 1.0566882 to obtain the volume in US liquid quarts, or divide the volume in liters by 0.94635295.",
    math: "Volume (qt) = Volume (L) × 1.0566882",
    subtext: "Alternative formula: Volume (qt) = Volume (L) ÷ 0.946352946"
  },
  formulaTitle: "Liter to US Quart Conversion Formula",
  practicalTip: {
    title: "The 5-Liter Engine Oil Rule of Thumb",
    text: "Since 1 liter equals approximately 1.057 quarts, a standard 5-liter motor oil jug contains 5.28 US quarts—comfortably covering standard 5-quart engine crankcase capacities."
  },
  expertNote: {
    title: "Culinary Substitution Accuracy",
    text: "In casual stovetop cooking, substituting 1 liter for 1 quart introduces only a 5.67% difference (about 3.6 tablespoons extra). However, in commercial baking or chemical mixing, failing to apply the 1.05669 conversion factor alters hydration ratios significantly."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Automotive Synthetic Engine Oil Fill",
        subtitle: "A vehicle workshop manual specifies an engine oil capacity of 4.50 liters. Convert this capacity to US liquid quarts.",
        steps: [
          "State the given volume: Volume = 4.50 L.",
          "Apply the conversion formula: qt = 4.50 × 1.0566882.",
          "Perform the multiplication: 4.50 × 1.0566882 = 4.75510 qt.",
          "Result: 4.50 liters is equal to approximately 4.76 US liquid quarts (4 quarts plus 24 fluid ounces)."
        ]
      },
      {
        title: "Example 2: Commercial Soup Stock Scaling",
        subtitle: "A French culinary stock recipe calls for 8.00 liters of veal broth. Convert to US quarts for kitchen preparation.",
        steps: [
          "State the initial volume: Volume = 8.00 L.",
          "Multiply by 1.0566882: 8.00 × 1.0566882 = 8.45351 qt.",
          "Break down into quarts and cups: 8.45 qt = 8 quarts + 1.8 cups.",
          "Result: 8 liters equals approximately 8.45 US quarts (just under 8 1/2 quarts)."
        ]
      },
      {
        title: "Example 3: European 5-Liter Motor Oil Jug",
        subtitle: "Determine the exact volume in US quarts of an imported 5.00-liter synthetic oil container.",
        steps: [
          "State the given volume: Volume = 5.00 L.",
          "Set up the equation: qt = 5.00 × 1.0566882.",
          "Calculate the product: 5.00 × 1.0566882 = 5.28344 qt.",
          "Result: A 5-liter jug contains approximately 5.28 US quarts (5 quarts plus 9 fluid ounces)."
        ]
      }
    ]
  },
  table: {
    title: "Liter to US Liquid Quart Conversion Table",
    headers: ["Liters (L)", "Milliliters (mL)", "US Liquid Quarts (qt)", "Practical Automotive / Culinary Context"],
    rows: [
      { fromVal: "0.946 L", toVal: "946.35 mL", extra: "1.00 qt", extra2: "Standard 1-quart motor oil bottle" },
      { fromVal: "1.000 L", toVal: "1,000.0 mL", extra: "1.06 qt", extra2: "1-liter beverage carton (1 qt + 3.6 tbsp)" },
      { fromVal: "1.893 L", toVal: "1,892.7 mL", extra: "2.00 qt", extra2: "Half US gallon pitcher" },
      { fromVal: "2.000 L", toVal: "2,000.0 mL", extra: "2.11 qt", extra2: "Standard 2-liter soda bottle" },
      { fromVal: "3.785 L", toVal: "3,785.4 mL", extra: "4.00 qt", extra2: "1 full US liquid gallon (4 US quarts)" },
      { fromVal: "4.000 L", toVal: "4,000.0 mL", extra: "4.23 qt", extra2: "Compact 4-cylinder engine oil fill" },
      { fromVal: "4.732 L", toVal: "4,731.8 mL", extra: "5.00 qt", extra2: "Standard American 5-quart motor oil jug" },
      { fromVal: "5.000 L", toVal: "5,000.0 mL", extra: "5.28 qt", extra2: "Standard European 5-liter motor oil jug" },
      { fromVal: "8.000 L", toVal: "8,000.0 mL", extra: "8.45 qt", extra2: "Large kitchen stockpot batch" },
      { fromVal: "10.000 L", toVal: "10,000.0 mL", extra: "10.57 qt", extra2: "Commercial food prep container" }
    ]
  },
  applications: {
    title: "Practical Applications of Liter to Quart Conversion",
    items: [
      {
        title: "Automotive Maintenance & Oil Service",
        text: "Mechanics and DIY drivers cross-reference engine oil and coolant fill specifications between European vehicle manuals (liters) and American oil bottles (quarts)."
      },
      {
        title: "Commercial Culinary Arts & Baking",
        text: "Chefs scaling European metric stocks, sauces, and dough hydration recipes into standard US quart food storage and measuring containers."
      },
      {
        title: "Dairy Packaging & Retail Beverage Bottling",
        text: "Dairies and juice bottlers converting metric processing vats into standard 1-quart and half-gallon consumer retail packages."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming 1 liter equals 1 quart exactly: A liter is 5.67% larger than a US liquid quart (1,000 mL vs 946.35 mL).",
      "Confusing US liquid quarts (0.946 L) with British Imperial quarts (1.137 L) or US dry quarts (1.101 L): Imperial quarts are 20% larger than US liquid quarts.",
      "Dividing by 1.05669 instead of multiplying: Because a quart is smaller than a liter, the numeric quart value must always be larger than the liter value."
    ]
  },
  faqs: [
    {
      question: "How many US quarts are in 1 liter?",
      answer: "There are approximately 1.056688 US liquid quarts in 1 liter (commonly rounded to 1.057 quarts)."
    },
    {
      question: "Is 1 liter bigger than 1 quart?",
      answer: "Yes, 1 liter (1,000 mL) is slightly larger than 1 US liquid quart (946.35 mL) by approximately 53.65 mL (about 1.81 US fluid ounces)."
    },
    {
      question: "How do I convert liters to quarts?",
      answer: "Multiply the volume in liters by 1.056688. For example, 5 liters multiplied by 1.056688 equals approximately 5.28 US quarts."
    },
    {
      question: "How many liters are in a 5-quart motor oil jug?",
      answer: "A 5-quart jug contains approximately 4.732 liters (5 × 0.946353 = 4.73176 L)."
    },
    {
      question: "What is 2 liters in US quarts?",
      answer: "2 liters multiplied by 1.056688 equals approximately 2.11 US liquid quarts."
    },
    {
      question: "How many quarts is 4 liters?",
      answer: "4 liters multiplied by 1.056688 equals approximately 4.23 US liquid quarts."
    },
    {
      question: "What is the difference between a US quart and an Imperial quart?",
      answer: "A US liquid quart equals 0.946353 liters, whereas a British Imperial quart equals 1.136523 liters. An Imperial quart is approximately 20.1% larger than a US quart."
    },
    {
      question: "How many quarts are in 1 US gallon?",
      answer: "There are exactly 4 US liquid quarts in 1 US liquid gallon (equal to 3.78541 liters)."
    }
  ],
  relatedList: [
    { label: "Liter to Gallon (US)", from: "liter", to: "gallon-us" },
    { label: "Liter to Pint (US)", from: "liter", to: "pint-us" },
    { label: "Liter to Cup (US)", from: "liter", to: "cup-us" },
    { label: "Liter to Fluid Ounce (US)", from: "liter", to: "fluid-ounce-us" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "NIST Special Publication 330 - The International System of Units (SI)",
    "U.S. Department of Agriculture (USDA) - Standard Fluid Volume Specifications",
    "ISO 80000-4: Quantities and Units — Mechanics"
  ]
};
