import { CustomArticleData } from "./types";

export const milliliterToQuartUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "quart-us",
  seoTitle: "Milliliter to Quart (US) Converter - mL to qt",
  metaDescription: "Convert milliliters to US liquid quarts (mL to qt). Exact conversion formula (1 qt = 946.353 mL), step-by-step calculations, culinary, and automotive oil tables.",
  h1: "Milliliter to Quart (US) Converter",
  introduction: [
    "From automotive engine oil service and transmission fluid top-offs to commercial culinary baking, beverage production, and dairy bottling, converting volume from milliliters (mL) to US liquid quarts (qt) is a routine measurement requirement. While international liquid measurements and laboratory chemistry operate exclusively in milliliters and liters, American consumer liquids, automotive lubricants, and commercial kitchen recipes frequently specify quarts.",
    "One US liquid quart equals exactly one-fourth of a US liquid gallon, which translates to 946.352946 milliliters (32 US fluid ounces). Because 1,000 milliliters (1 liter) is only slightly larger than a US quart (1.0567 qt), mastering this conversion ensures accurate fluid fills, proper culinary ingredient balance, and seamless international unit translation. This comprehensive guide explains the exact formula, practical mental estimation techniques, worked examples, reference conversion tables, and real-world applications."
  ],
  quickAnswer: {
    text: "To convert milliliters to US liquid quarts, divide the volume in milliliters by 946.353 (or multiply by 0.00105669). For example, 1,000 mL (1 liter) equals approximately 1.057 US liquid quarts.",
    formulaDisplay: "1 US Quart = 946.352946 mL | Volume (qt) = Volume (mL) ÷ 946.352946",
    subtext: "One US liquid quart contains 32 US fluid ounces (2 US pints). Dividing 1 by 946.353 yields approximately 0.00105669 quarts per milliliter."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of volume equal to one-thousandth of a liter (10⁻³ L) or 1 cubic centimeter (1 cm³ / cc). It is the premier international benchmark for pharmaceutical liquid dosing, laboratory chemical reagents, consumer beverage bottling, and fluid measurements."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Quart (qt)",
    text: "The US liquid quart (symbol: qt) is a customary unit of volume equal to one-quarter of a US gallon (57.75 cubic inches), 2 US liquid pints, 4 US cups, 32 US fluid ounces, or 946.352946 milliliters (0.946353 L). It is the standard retail packaging size for automotive motor oils, milk cartons, and commercial culinary stocks across the United States."
  },
  relationship: "One US liquid quart contains exactly 946.352946 milliliters. Converting from milliliters to US quarts scales the numerical value down by a factor of approximately 946.35. Inversely, 1 milliliter represents approximately 0.001056688 US liquid quarts, making 1 liter (1,000 mL) equivalent to roughly 1.057 quarts.",
  relationshipTitle: "Metric to US Fluid Scale: Milliliters vs US Quarts",
  relationshipItems: [
    { label: "1 US Liquid Quart (qt)", value: "exactly 946.352946 Milliliters (mL)" },
    { label: "1 US Liquid Quart (qt)", value: "exactly 0.946353 Liters (L)" },
    { label: "1 Liter (1,000 mL)", value: "approx. 1.056688 US Liquid Quarts" },
    { label: "1 US Liquid Quart", value: "32 US Fluid Ounces (2 US Pints)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 946.352946 to convert to US liquid quarts, or multiply by 0.001056688.",
    math: "Volume in US Quarts (qt) = Volume in Milliliters (mL) ÷ 946.352946",
    subtext: "Alternatively: Volume in US Quarts = (Volume in mL ÷ 1,000) × 1.056688"
  },
  formulaTitle: "Milliliter to US Quart Conversion Formula",
  practicalTip: {
    title: "The 950 mL Rule of Thumb",
    text: "For quick estimation in the garage or kitchen, think of 1 quart as roughly 950 mL (or 1 liter as approximately 1 quart plus a splash / 50 mL). For example, 4,750 mL is approximately 5 quarts of motor oil."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Automotive Engine Oil Service",
        subtitle: "A European vehicle engine specification calls for 4,500 mL of synthetic motor oil. Convert this oil capacity to US quarts.",
        steps: [
          "State the given volume: Volume = 4,500 mL.",
          "Apply the conversion formula: Volume (qt) = Volume (mL) ÷ 946.352946.",
          "Substitute the value: Volume (qt) = 4,500 ÷ 946.352946.",
          "Perform the division: Volume (qt) = 4.7551 qt.",
          "Conclude: The vehicle requires approximately 4.76 US quarts of engine oil."
        ]
      },
      {
        title: "Example 2: Commercial Soup Stock Preparation",
        subtitle: "A catering recipe calls for 15,000 mL of chicken broth. Express this quantity in US quarts.",
        steps: [
          "State the initial volume: Volume = 15,000 mL.",
          "Multiply by the factor: 15,000 × 0.001056688.",
          "Calculate the product: 15,000 × 0.001056688 = 15.8503 qt.",
          "Conclude: The recipe requires approximately 15.85 US liquid quarts of broth."
        ]
      },
      {
        title: "Example 3: Dairy Bottling Line Calibration",
        subtitle: "A dairy bottling line dispenses 2,839 mL of milk per family container. Find the volume in US quarts.",
        steps: [
          "Identify the volume: Volume = 2,839 mL.",
          "Set up the equation: Volume (qt) = 2,839 ÷ 946.352946.",
          "Compute the result: 2,839 ÷ 946.352946 = 2.9999 qt.",
          "Conclude: The container holds exactly 3.00 US liquid quarts."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Quart Conversion Table",
    headers: ["Milliliters (mL)", "US Liquid Quarts (qt)", "Liters (L)", "Automotive & Culinary Benchmark"],
    rows: [
      { fromVal: "236.59 mL", toVal: "0.2500 qt", extra: "0.237 L", extra2: "1 US Cup (8 fl oz)" },
      { fromVal: "473.18 mL", toVal: "0.5000 qt", extra: "0.473 L", extra2: "1 US Liquid Pint (16 fl oz)" },
      { fromVal: "500 mL", toVal: "0.5283 qt", extra: "0.500 L", extra2: "Half-liter bottle" },
      { fromVal: "946.35 mL", toVal: "1.0000 qt", extra: "0.946 L", extra2: "Exact definition of 1 US Liquid Quart (32 fl oz)" },
      { fromVal: "1,000 mL", toVal: "1.0567 qt", extra: "1.000 L", extra2: "1 Liter standard beverage bottle" },
      { fromVal: "1,892.71 mL", toVal: "2.0000 qt", extra: "1.893 L", extra2: "Half-gallon carton (64 fl oz / 2 quarts)" },
      { fromVal: "3,785.41 mL", toVal: "4.0000 qt", extra: "3.785 L", extra2: "1 US Gallon milk jug (4 quarts)" },
      { fromVal: "4,731.76 mL", toVal: "5.0000 qt", extra: "4.732 L", extra2: "Standard 5-quart motor oil jug" },
      { fromVal: "9,463.53 mL", toVal: "10.0000 qt", extra: "9.464 L", extra2: "Commercial stock pot volume (10 quarts)" },
      { fromVal: "18,927 mL", toVal: "20.0000 qt", extra: "18.927 L", extra2: "5-gallon utility bucket (20 quarts)" }
    ]
  },
  applications: {
    title: "Automotive, Culinary & HVAC Applications",
    items: [
      {
        title: "Automotive Engine Oil & Transmission Fluid Service",
        text: "Mechanics servicing imported European and Asian vehicles convert metric fluid capacities (mL) into US quarts to select the correct number of 1-quart and 5-quart oil bottles."
      },
      {
        title: "Commercial Kitchens & Food Service Recipes",
        text: "Professional chefs scaling international recipes convert ingredient volumes in milliliters to US liquid quarts when prepping soups, sauces, stocks, and batters in bulk."
      },
      {
        title: "HVAC & Refrigeration Compressor Lubricant Refill",
        text: "Cooling technicians calculate refrigeration oil charge amounts in milliliters and convert to US liquid quarts for compressor maintenance."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing US liquid quarts with UK Imperial quarts: 1 US liquid quart is 946.35 mL, whereas 1 UK Imperial quart is 1,136.52 mL (20% larger).",
      "Confusing US liquid quarts with US dry quarts: 1 US dry quart equals 1,101.22 mL (used exclusively for dry agricultural produce).",
      "Assuming 1 liter is identical to 1 quart: 1 liter (1,000 mL) is about 5.7% larger than 1 US liquid quart (946.35 mL)."
    ]
  },
  faqs: [
    {
      question: "How many milliliters are in 1 US liquid quart?",
      answer: "There are exactly 946.352946 milliliters (approximately 946.35 mL or 0.946 liters) in one US liquid quart."
    },
    {
      question: "What is the formula to convert mL to US quarts?",
      answer: "The formula is: Volume in US Quarts = Volume in mL ÷ 946.352946 (or Volume in mL × 0.001056688)."
    },
    {
      question: "Is 1 liter equal to 1 quart?",
      answer: "No, but they are very close. 1 liter (1,000 mL) is equal to approximately 1.0567 US liquid quarts (about 5.7% larger than a quart)."
    },
    {
      question: "How many US quarts is 500 mL?",
      answer: "500 mL is equal to approximately 0.5283 US liquid quarts (500 ÷ 946.353 = 0.528 qt)."
    },
    {
      question: "How many milliliters are in a 5-quart oil jug?",
      answer: "A standard 5-quart motor oil jug contains exactly 4,731.76 milliliters (4.732 liters)."
    },
    {
      question: "How do I convert US quarts back to milliliters?",
      answer: "To convert US quarts to milliliters, multiply the quart value by 946.352946 (for example, 4 qt × 946.353 = 3,785.41 mL)."
    },
    {
      question: "How many fluid ounces are in 1 US quart?",
      answer: "There are exactly 32 US fluid ounces in one US liquid quart (2 US pints)."
    },
    {
      question: "How many US quarts are in 2,000 mL?",
      answer: "2,000 mL (2 liters) equals approximately 2.1134 US liquid quarts (2,000 ÷ 946.353 = 2.113 qt)."
    }
  ],
  relatedList: [
    { label: "Quart (US) to Milliliter", from: "quart-us", to: "milliliter" },
    { label: "Milliliter to Gallon (US)", from: "milliliter", to: "gallon-us" },
    { label: "Milliliter to Pint (US)", from: "milliliter", to: "pint-us" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" }
  ],
  references: [
    "NIST Handbook 44 — Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "Society of Automotive Engineers (SAE) — Fluid Capacity & Measurement Standards",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
