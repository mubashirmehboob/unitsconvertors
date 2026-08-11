import { CustomArticleData } from "./types";

export const cubicYardToCubicInch: CustomArticleData = {
  fromUnitId: "cubic-yard",
  toUnitId: "cubic-inch",
  seoTitle: "Cubic Yards to Cubic Inches Converter (yd³ to in³) | UnitsConvertors.com",
  metaDescription: "Convert cubic yards (yd³) to cubic inches (in³) accurately. Learn the exact 46,656 multiplier formula, worked examples, and conversion tables.",
  h1: "Cubic Yards to Cubic Inches Converter",
  introduction: [
    "Converting cubic yards (yd³) to cubic inches (in³) converts large bulk construction volume into exact imperial cubic inches for manufacturing and CAD calculations."
  ],
  quickAnswer: {
    text: "There are exactly 46,656 cubic inches in 1 cubic yard. To convert cubic yards to cubic inches, multiply the cubic yard value by 46,656.",
    formulaDisplay: "Cubic Inches (in³) = Cubic Yards (yd³) × 46,656",
    subtext: "Example: 2 cubic yards × 46,656 = 93,312 cubic inches."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard is a US customary volume unit equal to a cube 3 feet (36 inches) on each side."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Inches (in³)",
    text: "A cubic inch is a US customary volume unit equal to a cube 1 inch on each side."
  },
  relationship: "Because 1 yard equals 36 inches, 1 cubic yard equals 36 in × 36 in × 36 in = 46,656 cubic inches.",
  relationshipItems: [
    { label: "Exact Volumetric Ratio", value: "1 yd³ = 46,656 in³" },
    { label: "Single Cubic Inch Value", value: "1 in³ = 0.000021433 yd³" }
  ],
  formula: {
    text: "Multiply cubic yards by 46,656.",
    math: "Volume (in³) = Volume (yd³) × 46,656",
    subtext: "36 in × 36 in × 36 in = 46,656 in³ per yd³"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Bulk Industrial Volume",
        subtitle: "Convert 1.5 cubic yards into cubic inches.",
        steps: [
          "Identify volume: 1.5 yd³.",
          "Multiply by 46,656: 1.5 × 46,656 = 69,984 in³.",
          "Result: 1.5 cubic yards equals 69,984 cubic inches."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Yards to Cubic Inches Reference Table",
    headers: ["Cubic Yards (yd³)", "Cubic Inches (in³)", "Cubic Feet (ft³)", "Board Feet (FBM)"],
    rows: [
      { fromVal: "1 yd³", toVal: "46,656 in³", extra: "27 ft³", extra2: "324 FBM" },
      { fromVal: "2 yd³", toVal: "93,312 in³", extra: "54 ft³", extra2: "648 FBM" },
      { fromVal: "5 yd³", toVal: "233,280 in³", extra: "135 ft³", extra2: "1,620 FBM" },
      { fromVal: "10 yd³", toVal: "466,560 in³", extra: "270 ft³", extra2: "3,240 FBM" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Engineering and Precision Modeling",
        text: "Engineers converting bulk site volumes to small component manufacturing specifications use this conversion."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Multiplying by 1,728 instead of 46,656: 1,728 is cubic inches per cubic foot."
    ]
  },
  faqs: [
    {
      question: "How many cubic inches are in a cubic yard?",
      answer: "There are exactly 46,656 cubic inches in 1 cubic yard."
    },
    {
      question: "How do I convert cubic yards to cubic inches?",
      answer: "Multiply the cubic yard value by 46,656."
    },
    {
      question: "Why is 1 cubic yard equal to 46,656 cubic inches?",
      answer: "Because 1 yard = 36 inches, and 36 × 36 × 36 = 46,656."
    },
    {
      question: "What is 0.5 cubic yards in cubic inches?",
      answer: "0.5 cubic yards equals 23,328 cubic inches (0.5 × 46,656)."
    },
    {
      question: "How many board feet are in 46,656 cubic inches?",
      answer: "46,656 cubic inches divided by 144 equals 324 board feet."
    },
    {
      question: "What is 10 cubic yards in cubic inches?",
      answer: "10 cubic yards equals 466,560 cubic inches."
    },
    {
      question: "Can I convert cubic inches back to cubic yards?",
      answer: "Yes, divide cubic inches by 46,656."
    },
    {
      question: "How many cubic feet are in a cubic yard?",
      answer: "There are 27 cubic feet in 1 cubic yard."
    }
  ]
};
