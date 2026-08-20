import { CustomArticleData } from "./types";

export const milliliterToPintUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "pint-us",
  seoTitle: "Milliliter to Pint (US) Converter - mL to pt",
  metaDescription: "Convert milliliters to US liquid pints (mL to pt). Exact conversion formula (1 pt = 473.176 mL), step-by-step calculations, culinary, and beverage tables.",
  h1: "Milliliter to Pint (US) Converter",
  introduction: [
    "From craft brewing, pub draught dispense, and beverage bottling to culinary baking, ice cream manufacturing, and clinical fluid intake monitoring, converting volume from milliliters (mL) to US liquid pints (pt) is an essential day-to-day calculation. While international liquid measurements, pharmaceutical dosing, and laboratory sciences rely on milliliters and liters, American culinary recipes, dairy containers, and bar beverages are traditionally served and measured in pints.",
    "One US liquid pint equals exactly 16 US fluid ounces or 473.176473 milliliters (approximately 0.473 liters). Because a half-liter (500 mL) water or beer bottle is only slightly larger than a US pint (1.0567 pt), understanding this exact conversion ensures precision in restaurant recipe scaling, accurate nutritional tracking, and seamless unit conversions. This comprehensive guide provides the conversion formula, practical estimation shortcuts, worked examples, reference conversion tables, and real-world culinary applications."
  ],
  quickAnswer: {
    text: "To convert milliliters to US liquid pints, divide the volume in milliliters by 473.176 (or multiply by 0.00211338). For example, 500 mL equals approximately 1.057 US liquid pints.",
    formulaDisplay: "1 US Pint = 473.176473 mL | Volume (pt) = Volume (mL) ÷ 473.176473",
    subtext: "One US liquid pint contains 16 US fluid ounces (2 US cups). Dividing 1 by 473.176 yields approximately 0.00211338 pints per milliliter."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of volume equal to one-thousandth of a liter (10⁻³ L) or 1 cubic centimeter (1 cm³ / cc). It is the premier international benchmark for pharmaceutical liquid dispensing, chemical reagents, consumer beverage packaging, and laboratory measurements."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Pint (pt)",
    text: "The US liquid pint (symbol: pt) is a customary unit of volume defined as exactly one-eighth of a US gallon (28.875 cubic inches), 16 US fluid ounces, 2 US cups, or 473.176473 milliliters (0.473176 L). It is the standard retail packaging size for dairy creams, ice cream containers, craft beers, and culinary liquids across the United States."
  },
  relationship: "One US liquid pint contains exactly 473.176473 milliliters. Converting from milliliters to US pints scales the numerical value down by a factor of approximately 473.18. Inversely, 1 milliliter represents approximately 0.002113376 US liquid pints, making 500 mL (half a liter) equal to roughly 1.057 US pints.",
  relationshipTitle: "Metric to US Fluid Scale: Milliliters vs US Pints",
  relationshipItems: [
    { label: "1 US Liquid Pint (pt)", value: "exactly 473.176473 Milliliters (mL)" },
    { label: "1 US Liquid Pint (pt)", value: "exactly 0.473176 Liters (L)" },
    { label: "500 Milliliters (0.5 L)", value: "approx. 1.056688 US Liquid Pints" },
    { label: "1 UK Imperial Pint", value: "568.261 mL (approx. 1.20095 US pints)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 473.176473 to convert to US liquid pints, or multiply by 0.002113376.",
    math: "Volume in US Pints (pt) = Volume in Milliliters (mL) ÷ 473.176473",
    subtext: "Alternatively: Volume in US Pints = (Volume in mL ÷ 1,000) × 2.113376"
  },
  formulaTitle: "Milliliter to US Pint Conversion Formula",
  practicalTip: {
    title: "The 475 mL Mental Rule",
    text: "For quick estimation in the kitchen or brewery, round 1 pint to roughly 475 mL (or 500 mL = 1 pint + 1 ounce). For example, 950 mL is almost exactly 2 pints (1 quart)."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Craft Beer Kegging & Can Filling",
        subtitle: "A brewery canning line fills specialty stout into 500 mL tallboy cans. Calculate this volume in US pints.",
        steps: [
          "State the given volume: Volume = 500 mL.",
          "Apply the conversion formula: Volume (pt) = Volume (mL) ÷ 473.176473.",
          "Substitute the value: Volume (pt) = 500 ÷ 473.176473.",
          "Perform the division: Volume (pt) = 1.0567 pt.",
          "Conclude: A 500 mL tallboy can holds approximately 1.06 US liquid pints (16.9 fl oz)."
        ]
      },
      {
        title: "Example 2: Commercial Pastry Heavy Cream Batch",
        subtitle: "A bakery recipe requires 2,500 mL of heavy whipping cream. Express this quantity in US pints.",
        steps: [
          "State the initial volume: Volume = 2,500 mL.",
          "Multiply by the factor: 2,500 × 0.002113376.",
          "Calculate the product: 2,500 × 0.002113376 = 5.2834 pt.",
          "Conclude: The bakery requires approximately 5.28 US liquid pints of heavy cream."
        ]
      },
      {
        title: "Example 3: Dairy Retail Packaging Sizing",
        subtitle: "An artisan dairy fills artisanal yogurt tubs with 946.35 mL of whole milk base. Find the volume in US pints.",
        steps: [
          "Identify the volume: Volume = 946.35 mL.",
          "Set up the equation: Volume (pt) = 946.35 ÷ 473.176473.",
          "Compute the result: 946.35 ÷ 473.176473 = 2.0000 pt.",
          "Conclude: The tub contains exactly 2.00 US liquid pints (1 quart)."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Pint Conversion Table",
    headers: ["Milliliters (mL)", "US Liquid Pints (pt)", "US Fluid Ounces (fl oz)", "Culinary & Beverage Benchmark"],
    rows: [
      { fromVal: "118.29 mL", toVal: "0.2500 pt", extra: "4.0 fl oz", extra2: "Half cup / standard yogurt snack cup" },
      { fromVal: "236.59 mL", toVal: "0.5000 pt", extra: "8.0 fl oz", extra2: "1 US Cup / school milk carton" },
      { fromVal: "355 mL", toVal: "0.7502 pt", extra: "12.0 fl oz", extra2: "Standard 12 oz aluminum soda / beer can" },
      { fromVal: "473.18 mL", toVal: "1.0000 pt", extra: "16.0 fl oz", extra2: "Exact definition of 1 US Liquid Pint (16 fl oz pint glass)" },
      { fromVal: "500 mL", toVal: "1.0567 pt", extra: "16.9 fl oz", extra2: "Standard 500 mL European beer can / water bottle" },
      { fromVal: "946.35 mL", toVal: "2.0000 pt", extra: "32.0 fl oz", extra2: "1 US Quart / medium milk carton" },
      { fromVal: "1,000 mL", toVal: "2.1134 pt", extra: "33.8 fl oz", extra2: "1 Liter standard beverage bottle" },
      { fromVal: "1,892.71 mL", toVal: "4.0000 pt", extra: "64.0 fl oz", extra2: "Half US Gallon / standard beer growler (64 fl oz)" },
      { fromVal: "3,785.41 mL", toVal: "8.0000 pt", extra: "128.0 fl oz", extra2: "1 US Gallon (8 pints)" },
      { fromVal: "4,731.76 mL", toVal: "10.0000 pt", extra: "160.0 fl oz", extra2: "5 US Quarts (10 pints)" }
    ]
  },
  applications: {
    title: "Culinary, Beverage & Dairy Applications",
    items: [
      {
        title: "Craft Brewing & Pub Glass Calibration",
        text: "Brewers convert metric tank batches (mL/L) into US pints (16 fl oz) to calculate exact pour yields per keg and audit draft line dispense efficiency."
      },
      {
        title: "Commercial Baking & Culinary Recipe Conversion",
        text: "Chefs scaling European pastry formulas (measured in mL) convert liquid ingredients to US pints when using standard American measuring pitchers."
      },
      {
        title: "Artisan Ice Cream & Dairy Packaging",
        text: "Dairy creameries convert bulk ice cream mix batches from liters/milliliters into retail pint containers (473 mL)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing US liquid pints with UK Imperial pints: 1 US liquid pint is 473.18 mL (16 US fl oz), whereas 1 UK Imperial pint is 568.26 mL (20 Imperial fl oz, ~20% larger).",
      "Confusing US liquid pints with US dry pints: 1 US dry pint equals 550.61 mL (used for berries and cherry tomatoes).",
      "Assuming 500 mL is exactly 1 pint: 500 mL is 1.057 US pints, meaning a 500 mL pour will overflow a standard 16 oz American pint glass if filled to the rim."
    ]
  },
  faqs: [
    {
      question: "How many milliliters are in 1 US liquid pint?",
      answer: "There are exactly 473.176473 milliliters (approximately 473.18 mL or 0.473 liters) in one US liquid pint."
    },
    {
      question: "What is the formula to convert mL to US pints?",
      answer: "The formula is: Volume in US Pints = Volume in mL ÷ 473.176473 (or Volume in mL × 0.002113376)."
    },
    {
      question: "Is 500 mL equal to 1 pint?",
      answer: "A 500 mL container is slightly larger than 1 US pint: 500 mL equals approximately 1.0567 US pints (about 16.9 fluid ounces vs 16.0 fluid ounces)."
    },
    {
      question: "How many US pints is 1,000 mL (1 liter)?",
      answer: "1,000 mL (1 liter) is equal to approximately 2.1134 US liquid pints (1,000 ÷ 473.176 = 2.113 pt)."
    },
    {
      question: "How many fluid ounces are in a US pint?",
      answer: "There are exactly 16 US fluid ounces in one US liquid pint (2 US cups)."
    },
    {
      question: "How do I convert US pints back to milliliters?",
      answer: "To convert US pints to milliliters, multiply the pint value by 473.176473 (for example, 2 pt × 473.176 = 946.35 mL)."
    },
    {
      question: "What is the difference between a US pint and a UK pint?",
      answer: "A US liquid pint is 473.18 mL (16 US fl oz), while a British Imperial pint is 568.26 mL (20 Imperial fl oz), making the UK pint roughly 20% larger."
    },
    {
      question: "How many US pints are in 250 mL?",
      answer: "250 mL equals approximately 0.5283 US liquid pints (just over half a pint or 1 cup)."
    }
  ],
  relatedList: [
    { label: "Pint (US) to Milliliter", from: "pint-us", to: "milliliter" },
    { label: "Milliliter to Quart (US)", from: "milliliter", to: "quart-us" },
    { label: "Milliliter to Gallon (US)", from: "milliliter", to: "gallon-us" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" }
  ],
  references: [
    "NIST Handbook 44 — Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "Brewers Association — Draught Beer Quality Manual & Standard Pour Sizes",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
