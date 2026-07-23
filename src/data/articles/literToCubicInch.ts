import { CustomArticleData } from "./types";

export const literToCubicInch: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "cubic-inch",
  seoTitle: "Liter to Cubic Inch Converter - L to in³",
  metaDescription: "Convert liters to cubic inches (L to in³) accurately. Learn the conversion multiplier (1 L ≈ 61.0237 in³), engine displacement examples, and reference charts.",
  h1: "Liter to Cubic Inch Converter",
  introduction: [
    "Converting volume between metric liters and imperial cubic inches is essential in automotive engineering, engine rebuilds, hydraulics, and mechanical manufacturing. While modern vehicles often list engine displacement in liters (e.g., 5.0L), classic American muscle cars and industrial engines are traditionally rated in cubic inches (e.g., 302 cu in).",
    "Because one cubic inch equals exactly 0.016387064 liters, one liter contains approximately 61.0237 cubic inches. To convert liters to cubic inches, multiply the volume in liters by 61.0237."
  ],
  quickAnswer: {
    text: "To convert liters to cubic inches, multiply the liter value by 61.0237. For example, a 5.0-liter engine is equal to approximately 305 cubic inches.",
    formulaDisplay: "1 L ≈ 61.0237 in³",
    subtext: "1 cubic inch equals exactly 16.387064 milliliters (0.016387064 L)."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L) is a metric unit of volume equal to 1 cubic decimeter (dm³). It is standard globally for measuring liquid capacities, automotive engine displacements, and container volumes."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Inch (in³)",
    text: "The cubic inch (symbol: in³ or cu in) is an imperial and US customary unit representing a cube measuring 1 inch on each side. It is used extensively in manufacturing, engine cylinder sizing, hydraulic pump displacement, and pneumatic systems."
  },
  relationship: "One inch is legally defined as exactly 2.54 centimeters (0.254 decimeters). Cubing this dimension gives 1 in³ = (0.254 dm)³ = 0.016387064 liters. Inverting this factor yields 1 liter = 1 / 0.016387064 ≈ 61.02374409 cubic inches.",
  relationshipTitle: "Engine & Mechanical Volume Equivalency",
  relationshipItems: [
    { label: "1 Liter (L)", value: "≈ 61.0237 Cubic Inches (in³)" },
    { label: "1 Cubic Inch (in³)", value: "≈ 0.016387 Liters (L)" }
  ],
  formula: {
    text: "To convert liters to cubic inches, multiply the number of liters by 61.023744.",
    math: "Volume in Cubic Inches (in³) = Volume in Liters (L) × 61.023744",
    subtext: "To convert cubic inches back to liters, divide by 61.023744 or multiply by 0.016387."
  },
  formulaTitle: "The Liter to Cubic Inch Formula",
  practicalTip: {
    title: "Classic Engine Rule of Thumb",
    text: "For a fast mental estimation of engine size, multiply the displacement in liters by 61. A 3.0L engine is approximately 183 cubic inches."
  },
  expertNote: {
    title: "Iconic American Engine Conversions",
    text: "The famous Ford '5.0' engine was actually 4.942 liters (301.6 cu in, rounded up to 5.0L), while GM's 5.7-liter V8 corresponds to the legendary 350 cubic inch engine."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: V8 Engine Displacement",
        subtitle: "A modern sports car engine has a displacement of 5.7 liters. Convert this size to cubic inches.",
        steps: [
          "Identify the volume in liters: 5.7 L.",
          "Apply the formula: in³ = L × 61.023744.",
          "Perform the multiplication: 5.7 × 61.023744 = 347.835.",
          "Result: 5.7 liters is approximately 348 cubic inches (often rounded to 350 cu in)."
        ]
      },
      {
        title: "Example 2: Hydraulic Pump Reservoir",
        subtitle: "An industrial hydraulic power unit has a 12-liter fluid reservoir. Calculate its volume in cubic inches.",
        steps: [
          "Identify the volume: 12 L.",
          "Multiply by 61.023744: 12 × 61.023744 = 732.285.",
          "Result: 12 liters equals approximately 732.28 cubic inches."
        ]
      }
    ]
  },
  table: {
    title: "Liter to Cubic Inch Reference Table",
    headers: ["Liters (L)", "Cubic Inches (in³)", "Automotive / Mechanical Equivalent"],
    rows: [
      { fromVal: "1.0 L", toVal: "61.02 in³", extra: "1.0L 3-cylinder engine" },
      { fromVal: "1.6 L", toVal: "97.64 in³", extra: "1.6L compact engine" },
      { fromVal: "2.0 L", toVal: "122.05 in³", extra: "2.0L 4-cylinder engine" },
      { fromVal: "2.5 L", toVal: "152.56 in³", extra: "2.5L inline-4 engine" },
      { fromVal: "3.0 L", toVal: "183.07 in³", extra: "3.0L V6 engine" },
      { fromVal: "4.0 L", toVal: "244.09 in³", extra: "4.0L V8 engine" },
      { fromVal: "5.0 L", toVal: "305.12 in³", extra: "5.0L V8 Mustang / F-150" },
      { fromVal: "5.7 L", toVal: "347.84 in³", extra: "5.7L V8 (350 cu in Chevy)" },
      { fromVal: "6.2 L", toVal: "378.35 in³", extra: "6.2L V8 Corvette engine" },
      { fromVal: "7.0 L", toVal: "427.17 in³", extra: "7.0L V8 (427 cu in engine)" }
    ]
  },
  applications: {
    title: "Real-World Mechanical Applications",
    items: [
      {
        title: "Automotive Engine Restoration",
        text: "Mechanics rebuilding classic American cars convert modern crate engine liter specifications into traditional cubic inches to select matching carburetors and manifolds."
      },
      {
        title: "Hydraulics & Fluid Power",
        text: "Pump displacement ratings in cubic inches per revolution are matched against fluid tank capacities measured in liters."
      },
      {
        title: "Pneumatic & Compressed Gas Equipment",
        text: "Compressed air cylinders specified in liters are converted to cubic inches to calculate internal mechanical pressure ratios."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 61.0237 instead of multiplying: Since a cubic inch is smaller than a liter, the number of cubic inches will always be larger.",
      "Confusing cubic inches with square inches: Square inches measure area, while cubic inches measure 3D volume.",
      "Ignoring marketing rounding: Car manufacturers round liter badges (e.g., calling a 4,942 cc engine a '5.0L'), which creates minor discrepancies when converting back to cubic inches."
    ]
  },
  faqs: [
    {
      question: "How many cubic inches are in one liter?",
      answer: "One liter contains approximately 61.0237 cubic inches."
    },
    {
      question: "How do I convert 2.0 liters to cubic inches?",
      answer: "Multiply 2.0 by 61.023744 to get approximately 122.05 cubic inches."
    },
    {
      question: "What engine size is a 302 cubic inch engine in liters?",
      answer: "Divide 302 by 61.023744 to get approximately 4.95 liters (commonly rounded to 5.0L)."
    },
    {
      question: "What is 5.0 liters in cubic inches?",
      answer: "5.0 liters multiplied by 61.023744 equals approximately 305.12 cubic inches."
    },
    {
      question: "Is 1 cubic inch equal to 16.387 mL?",
      answer: "Yes, 1 cubic inch is equal to exactly 16.387064 milliliters (0.016387064 L)."
    },
    {
      question: "How many cubic inches is a 3.0-liter engine?",
      answer: "A 3.0-liter engine equals approximately 183.07 cubic inches."
    },
    {
      question: "Why did American cars switch from cubic inches to liters?",
      answer: "During the late 1970s and 1980s, American automakers aligned with global metric automotive standards, replacing cubic inch displacement badges with liter designations."
    },
    {
      question: "What is 10 liters in cubic inches?",
      answer: "10 liters multiplied by 61.023744 equals approximately 610.24 cubic inches."
    }
  ],
  relatedList: [
    { label: "Liter to Cubic Centimeter", from: "liter", to: "cubic-centimeter" },
    { label: "Liter to Cubic Foot", from: "liter", to: "cubic-foot" },
    { label: "Liter to Cubic Meter", from: "liter", to: "cubic-meter" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "Society of Automotive Engineers (SAE J604) - Engine Terminology and Specifications",
    "NIST Special Publication 1038 - The International System of Units (SI) for Automotive Engineering"
  ]
};
