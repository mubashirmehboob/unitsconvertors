import { CustomArticleData } from "./types";

export const cubicYardToBoardFoot: CustomArticleData = {
  fromUnitId: "cubic-yard",
  toUnitId: "board-foot",
  seoTitle: "Cubic Yards to Board Feet Converter (yd³ to FBM) | UnitsConvertors.com",
  metaDescription: "Convert cubic yards (yd³) to board feet (FBM) accurately. Learn the exact 324x multiplier formula, worked examples, and bulk timber volume reference tables.",
  h1: "Cubic Yards to Board Feet Converter",
  introduction: [
    "Converting cubic yards (yd³) to board feet (FBM) converts bulk volumetric specs from heavy construction and civil engineering into commercial board measure used in North American lumber trading. Civil contractors, bridge builders, sawmills, and timber framers use this conversion when translating bulk timber excavation or retaining wall volume specifications into billable board footage.",
    "Understanding the exact 324-multiplier conversion between cubic yards and board feet ensures precise purchasing, accurate cost estimation, and reliable material tracking across heavy timber construction projects."
  ],
  quickAnswer: {
    text: "There are exactly 324 board feet in 1 cubic yard. To convert cubic yards to board feet, multiply the cubic yard value by 324.",
    formulaDisplay: "Board Feet (FBM) = Cubic Yards (yd³) × 324",
    subtext: "Example: 2 cubic yards × 324 = 648 board feet."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (symbol: yd³) is a US customary and imperial unit of volume defined as a cube measuring 1 yard (3 feet, or 36 inches) on each side. It equals 27 cubic feet, 46,656 cubic inches, or approximately 0.764555 cubic meters."
  },
  aboutTargetUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (symbol: FBM) is the standard commercial lumber measure in the US and Canada representing a piece of wood 1 foot long, 1 foot wide, and 1 inch thick (144 cubic inches)."
  },
  relationship: "Because 1 cubic yard contains 27 cubic feet and 1 cubic foot contains 12 board feet, multiplying 27 by 12 yields exactly 324 board feet per cubic yard.",
  relationshipItems: [
    { label: "Exact Volumetric Ratio", value: "1 yd³ = 324 FBM" },
    { label: "Inverse Relationship", value: "1 FBM = 0.0030864 yd³ (1/324 yd³)" },
    { label: "Cubic Inches Relation", value: "1 yd³ = 46,656 in³ | 1 FBM = 144 in³" }
  ],
  formula: {
    text: "To convert cubic yards to board feet, multiply the volume in cubic yards by 324.",
    math: "Volume (FBM) = Volume (yd³) × 324",
    subtext: "Derivation: 27 ft³/yd³ × 12 FBM/ft³ = 324 FBM per yd³."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Timber Retaining Wall Material",
        subtitle: "Convert 5 cubic yards of heavy timber volume into board feet.",
        steps: [
          "Identify volume in cubic yards: 5 yd³.",
          "Apply conversion formula: Multiply by 324.",
          "Perform calculation: 5 × 324 = 1,620 FBM.",
          "Final Result: 5 cubic yards equals 1,620 board feet."
        ]
      },
      {
        title: "Example 2: Sawmill Timber Purchase Order",
        subtitle: "Convert 12.5 cubic yards of milled timber into board feet.",
        steps: [
          "Identify volume in cubic yards: 12.5 yd³.",
          "Apply conversion multiplier: 12.5 × 324 = 4,050 FBM.",
          "Final Result: 12.5 cubic yards equals 4,050 board feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Yards to Board Feet Reference Table",
    headers: ["Cubic Yards (yd³)", "Board Feet (FBM)", "Cubic Feet (ft³)", "Cubic Meters (m³)"],
    rows: [
      { fromVal: "0.25 yd³", toVal: "81 FBM", extra: "6.75 ft³", extra2: "0.1911 m³" },
      { fromVal: "0.50 yd³", toVal: "162 FBM", extra: "13.5 ft³", extra2: "0.3823 m³" },
      { fromVal: "1.00 yd³", toVal: "324 FBM", extra: "27.0 ft³", extra2: "0.7646 m³" },
      { fromVal: "2.00 yd³", toVal: "648 FBM", extra: "54.0 ft³", extra2: "1.5291 m³" },
      { fromVal: "5.00 yd³", toVal: "1,620 FBM", extra: "135.0 ft³", extra2: "3.8228 m³" },
      { fromVal: "10.0 yd³", toVal: "3,240 FBM", extra: "270.0 ft³", extra2: "7.6455 m³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Heavy Civil Timber Structures",
        text: "Engineers specifying timber piling or bridge trestle decking convert total project yardage into board feet for sawmill procurement contracts."
      },
      {
        title: "Bulk Timber Freight Logistics",
        text: "Freight haulers convert bulk truck bed capacities from cubic yards into commercial board feet to estimate lumber payload density."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Errors to Avoid",
    items: [
      "Multiplying by 27 instead of 324: 27 converts cubic yards to cubic feet, not board feet.",
      "Dividing by 324 when converting cubic yards to board feet instead of multiplying.",
      "Confusing nominal board footage with dressed board physical volume."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in 1 cubic yard?",
      answer: "There are exactly 324 board feet in 1 cubic yard."
    },
    {
      question: "What is the formula to convert cubic yards to board feet?",
      answer: "Multiply the cubic yard value by 324. For example, 3 cubic yards × 324 = 972 board feet."
    },
    {
      question: "Why are there 324 board feet in a cubic yard?",
      answer: "1 cubic yard equals 27 cubic feet, and each cubic foot contains 12 board feet. 27 × 12 = 324."
    },
    {
      question: "What is 10 cubic yards in board feet?",
      answer: "10 cubic yards multiplied by 324 equals 3,240 board feet."
    },
    {
      question: "How do you convert board feet back to cubic yards?",
      answer: "Divide total board feet by 324. For example, 1,620 board feet ÷ 324 = 5 cubic yards."
    },
    {
      question: "How many cubic inches are in 1 cubic yard?",
      answer: "There are 46,656 cubic inches in 1 cubic yard (36 in × 36 in × 36 in)."
    },
    {
      question: "Is 1 cubic yard larger than 100 board feet?",
      answer: "Yes, 1 cubic yard equals 324 board feet, which is over three times larger than 100 board feet."
    },
    {
      question: "Does species density affect the board foot conversion?",
      answer: "No, the volumetric conversion (1 yd³ = 324 FBM) is purely spatial and independent of wood species or density."
    }
  ]
};
