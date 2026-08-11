import { CustomArticleData } from "./types";

export const cubicInchToBoardFoot: CustomArticleData = {
  fromUnitId: "cubic-inch",
  toUnitId: "board-foot",
  seoTitle: "Cubic Inches to Board Feet Converter (in³ to FBM) | UnitsConvertors.com",
  metaDescription: "Convert cubic inches (in³) to board feet (FBM) accurately. Learn the exact 1/144 division formula, step-by-step examples, and conversion tables.",
  h1: "Cubic Inches to Board Feet Converter",
  introduction: [
    "Converting cubic inches (in³) to board feet (FBM) converts precise CAD/CAM volume measurements or detailed component dimensions into standard lumber trade board footage."
  ],
  quickAnswer: {
    text: "There are 144 cubic inches in 1 board foot. To convert cubic inches to board feet, divide the cubic inch value by 144.",
    formulaDisplay: "Board Feet (FBM) = Cubic Inches (in³) ÷ 144",
    subtext: "Example: 288 cubic inches ÷ 144 = 2 board feet."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Inches (in³)",
    text: "A cubic inch is a US customary unit of volume equal to 1 inch × 1 inch × 1 inch."
  },
  aboutTargetUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot is a lumber industry volume unit equal to 144 cubic inches (12 in × 12 in × 1 in)."
  },
  relationship: "Because 1 board foot equals 144 cubic inches, dividing cubic inches by 144 yields board feet.",
  relationshipItems: [
    { label: "Exact Conversion Factor", value: "1 FBM = 144 in³" },
    { label: "Single Cubic Inch Value", value: "1 in³ = 0.006944 FBM" }
  ],
  formula: {
    text: "Divide cubic inches by 144 to obtain board feet.",
    math: "Volume (FBM) = Volume (in³) ÷ 144",
    subtext: "Derivation: Volume in in³ ÷ 144 in³/FBM"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Timber Component Volume",
        subtitle: "Convert 576 cubic inches of teak wood into board feet.",
        steps: [
          "Identify volume: 576 in³.",
          "Divide by 144: 576 ÷ 144 = 4 FBM.",
          "Result: 576 cubic inches equals 4 board feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Inches to Board Feet Reference Table",
    headers: ["Cubic Inches (in³)", "Board Feet (FBM)", "Cubic Feet (ft³)", "Cubic Meters (m³)"],
    rows: [
      { fromVal: "144 in³", toVal: "1.00 FBM", extra: "0.0833 ft³", extra2: "0.00236 m³" },
      { fromVal: "288 in³", toVal: "2.00 FBM", extra: "0.1667 ft³", extra2: "0.00472 m³" },
      { fromVal: "576 in³", toVal: "4.00 FBM", extra: "0.3333 ft³", extra2: "0.00944 m³" },
      { fromVal: "1,440 in³", toVal: "10.0 FBM", extra: "0.8333 ft³", extra2: "0.02360 m³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "CAD Model Material Takeoffs",
        text: "Engineers exporting 3D CAD parts in cubic inches divide by 144 to establish lumber purchasing orders in board feet."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Multiplying by 144 instead of dividing when converting cubic inches to board feet."
    ]
  },
  faqs: [
    {
      question: "How do I convert cubic inches to board feet?",
      answer: "Divide the cubic inch value by 144."
    },
    {
      question: "How many cubic inches are in 1 board foot?",
      answer: "There are exactly 144 cubic inches in 1 board foot."
    },
    {
      question: "What is 1,000 cubic inches in board feet?",
      answer: "1,000 cubic inches divided by 144 equals 6.94 board feet."
    },
    {
      question: "Is board foot larger than a cubic inch?",
      answer: "Yes, 1 board foot equals 144 cubic inches."
    },
    {
      question: "Why do we divide by 144?",
      answer: "Because 1 board foot measures 12 in × 12 in × 1 in = 144 in³."
    },
    {
      question: "How many board feet are in a cubic foot?",
      answer: "1 cubic foot contains 1,728 cubic inches, which equals 12 board feet (1,728 ÷ 144)."
    },
    {
      question: "Can I use this for both rough and surfaced lumber?",
      answer: "Yes, the volumetric calculation is mathematically exact for any wood dimension."
    },
    {
      question: "What is 500 cubic inches in board feet?",
      answer: "500 cubic inches divided by 144 equals 3.47 board feet."
    }
  ]
};
