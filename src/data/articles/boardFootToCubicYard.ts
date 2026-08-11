import { CustomArticleData } from "./types";

export const boardFootToCubicYard: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-yard",
  seoTitle: "Board Feet to Cubic Yards Converter (FBM to yd³) | UnitsConvertors.com",
  metaDescription: "Convert board feet (FBM) to cubic yards (yd³) with exact timber mathematical accuracy. Learn the 1/324 ratio, formula, step-by-step examples, and conversion tables.",
  h1: "Board Feet to Cubic Yards Converter",
  introduction: [
    "Converting board feet (FBM) to cubic yards (yd³) translates raw timber measurements into large-scale bulk volumetric units used in civil construction, site preparation, and large-scale lumber supply. A board foot is the traditional North American unit for pricing and sizing commercial lumber, whereas cubic yards measure major spatial volumes such as concrete pours, soil excavation, and bulk freight containers.",
    "Understanding how to convert board feet to cubic yards allows timber brokers, sawmill managers, and civil contractors to reconcile lumber purchase orders with heavy transport capacities and bulk site volume requirements without estimation errors."
  ],
  quickAnswer: {
    text: "There are exactly 324 board feet in 1 cubic yard. Therefore, 1 board foot equals 1/324 of a cubic yard (approximately 0.0030864 yd³). To convert board feet to cubic yards, divide the board foot quantity by 324.",
    formulaDisplay: "Cubic Yards (yd³) = Board Feet (FBM) ÷ 324",
    subtext: "Equivalently, multiply board feet by 0.00308641975 to determine volume in cubic yards."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (FBM) measures timber volume based on nominal board dimensions. One board foot represents a piece of wood 1 foot long, 1 foot wide, and 1 inch thick, yielding a nominal physical volume of 144 cubic inches (0.002359737 m³)."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (yd³) is a US customary and imperial unit of volume defined as a cube measuring 3 feet (36 inches) on each side. It equals 27 cubic feet, 46,656 cubic inches, or approximately 0.764555 cubic meters."
  },
  relationship: "Because 1 cubic yard contains 46,656 cubic inches and 1 board foot contains 144 cubic inches, dividing 46,656 by 144 yields exactly 324 board feet per cubic yard (or 27 cubic feet × 12 board feet/cubic foot).",
  relationshipItems: [
    { label: "Exact Volumetric Ratio", value: "1 yd³ = 324 FBM" },
    { label: "Single Board Foot Value", value: "1 FBM = 0.0030864 yd³ (1/324 yd³)" },
    { label: "Cubic Inch Comparison", value: "1 FBM = 144 in³ | 1 yd³ = 46,656 in³" }
  ],
  formula: {
    text: "To convert board feet to cubic yards, divide the total board foot value by 324.",
    math: "Volume (yd³) = Volume (FBM) ÷ 324",
    subtext: "Derivation: (FBM × 144 in³) ÷ 46,656 in³ = FBM ÷ 324."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Timber Shipment Batch",
        subtitle: "Convert 3,240 board feet of framing lumber into cubic yards.",
        steps: [
          "Identify total board feet: 3,240 FBM.",
          "Apply conversion formula: Divide by 324.",
          "Perform calculation: 3,240 ÷ 324 = 10 yd³.",
          "Final Result: 3,240 board feet equals exactly 10 cubic yards."
        ]
      },
      {
        title: "Example 2: Heavy Construction Framing",
        subtitle: "Convert 1,620 board feet of timber trestle beams into cubic yards.",
        steps: [
          "Identify total board feet: 1,620 FBM.",
          "Apply conversion formula: 1,620 ÷ 324 = 5 yd³.",
          "Final Result: 1,620 board feet equals 5 cubic yards."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Yards Conversion Table",
    headers: ["Board Feet (FBM)", "Cubic Yards (yd³)", "Cubic Feet (ft³)", "Exact Fraction"],
    rows: [
      { fromVal: "1 FBM", toVal: "0.003086 yd³", extra: "0.0833 ft³", extra2: "1/324 cubic yard" },
      { fromVal: "81 FBM", toVal: "0.2500 yd³", extra: "6.75 ft³", extra2: "1/4 cubic yard" },
      { fromVal: "162 FBM", toVal: "0.5000 yd³", extra: "13.5 ft³", extra2: "1/2 cubic yard" },
      { fromVal: "324 FBM", toVal: "1.0000 yd³", extra: "27.0 ft³", extra2: "1 cubic yard" },
      { fromVal: "648 FBM", toVal: "2.0000 yd³", extra: "54.0 ft³", extra2: "2 cubic yards" },
      { fromVal: "1,620 FBM", toVal: "5.0000 yd³", extra: "135.0 ft³", extra2: "5 cubic yards" },
      { fromVal: "3,240 FBM", toVal: "10.000 yd³", extra: "270.0 ft³", extra2: "10 cubic yards" }
    ]
  },
  applications: {
    title: "Practical Industry Applications",
    items: [
      {
        title: "Commercial Sawmill Logistics",
        text: "Sawmills use cubic yards to evaluate truck bed loading capacities when exporting large orders of structural timbers."
      },
      {
        title: "Heavy Timber Construction",
        text: "Civil engineers convert timber specifications into cubic yards to compare timber volume directly against earthwork and concrete volumes."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes & Pitfalls",
    items: [
      "Dividing by 27 instead of 324: Dividing by 27 converts board feet to a value 12 times too large because board feet are 1/12 of a cubic foot.",
      "Confusing cubic yards with square yards when evaluating material requirements.",
      "Ignoring the difference between nominal rough-sawn dimensions and finished lumber dimensions."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in 1 cubic yard?",
      answer: "There are exactly 324 board feet in 1 cubic yard. This is calculated as 27 cubic feet per cubic yard multiplied by 12 board feet per cubic foot."
    },
    {
      question: "What is the formula to convert board feet to cubic yards?",
      answer: "Divide the total board feet by 324. For instance, 648 board feet divided by 324 equals 2 cubic yards."
    },
    {
      question: "Why is the conversion factor 324?",
      answer: "1 cubic yard equals 46,656 cubic inches. 1 board foot equals 144 cubic inches. Dividing 46,656 by 144 equals 324."
    },
    {
      question: "How do I convert 1,000 board feet to cubic yards?",
      answer: "Divide 1,000 by 324 to get approximately 3.086 cubic yards."
    },
    {
      question: "Is 1 board foot larger or smaller than 1 cubic yard?",
      answer: "A board foot is significantly smaller—1 board foot represents only 1/324th (0.3086%) of a cubic yard."
    },
    {
      question: "Can I convert board feet to cubic feet first before converting to cubic yards?",
      answer: "Yes. Divide board feet by 12 to get cubic feet, then divide cubic feet by 27 to get cubic yards. The result is identical."
    },
    {
      question: "What is 324 board feet in cubic feet?",
      answer: "324 board feet equals exactly 27 cubic feet, which equals 1 cubic yard."
    },
    {
      question: "Why do civil contractors use cubic yards for timber volume?",
      answer: "Cubic yards provide a standard volume metric across civil site materials like concrete, gravel, and bulk timber retaining structures."
    }
  ]
};
