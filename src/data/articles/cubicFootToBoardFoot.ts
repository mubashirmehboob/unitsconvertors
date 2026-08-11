import { CustomArticleData } from "./types";

export const cubicFootToBoardFoot: CustomArticleData = {
  fromUnitId: "cubic-foot",
  toUnitId: "board-foot",
  seoTitle: "Cubic Feet to Board Feet Converter (ft³ to FBM) | UnitsConvertors.com",
  metaDescription: "Convert cubic feet (ft³) to board feet (FBM) accurately. Learn the exact 12x multiplier formula, step-by-step examples, and timber volume reference tables.",
  h1: "Cubic Feet to Board Feet Converter",
  introduction: [
    "Converting cubic feet (ft³) to board feet (FBM) converts standard 3D volumetric space into specialized North American lumber measure. Sawmills, timber suppliers, architects, and woodworkers frequently need to convert timber volume specs from architectural drawings or freight manifests into board footage for purchasing and milling.",
    "Understanding how to convert cubic feet to board feet guarantees accurate lumber ordering, cost estimation, and inventory control for building projects."
  ],
  quickAnswer: {
    text: "There are exactly 12 board feet in 1 cubic foot. To convert cubic feet to board feet, multiply the cubic foot value by 12.",
    formulaDisplay: "Board Feet (FBM) = Cubic Feet (ft³) × 12",
    subtext: "Example: 10 cubic feet × 12 = 120 board feet."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Feet (ft³)",
    text: "A cubic foot (symbol: ft³) is an imperial unit of volume equal to a cube with sides measuring 1 foot (12 inches). It contains 1,728 cubic inches or 0.0283168 cubic meters."
  },
  aboutTargetUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (symbol: FBM) measures lumber volume. One board foot represents a piece of wood 1 foot long, 1 foot wide, and 1 inch thick (144 cubic inches)."
  },
  relationship: "Because 1 cubic foot contains 1,728 cubic inches and 1 board foot equals 144 cubic inches, dividing 1,728 by 144 yields exactly 12 board feet per cubic foot.",
  relationshipItems: [
    { label: "Exact Conversion Factor", value: "1 ft³ = 12 FBM" },
    { label: "Inverse Conversion", value: "1 FBM = 0.083333 ft³" },
    { label: "Cubic Inches", value: "1 ft³ = 1,728 in³ | 1 FBM = 144 in³" }
  ],
  formula: {
    text: "To convert cubic feet to board feet, multiply the volume in cubic feet by 12.",
    math: "Volume (FBM) = Volume (ft³) × 12",
    subtext: "Derivation: 1,728 in³ ÷ 144 in³ = 12 FBM per ft³"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Timber Volume Specification",
        subtitle: "Convert 15 cubic feet of solid oak timber into board feet.",
        steps: [
          "Identify volume in cubic feet: 15 ft³.",
          "Apply formula: Multiply by 12.",
          "Calculate: 15 × 12 = 180 FBM.",
          "Result: 15 cubic feet equals 180 board feet."
        ]
      },
      {
        title: "Example 2: Shipping Container Lumber Load",
        subtitle: "Convert 500 cubic feet of milled lumber into board feet.",
        steps: [
          "Identify volume: 500 ft³.",
          "Apply formula: 500 × 12 = 6,000 FBM.",
          "Result: 500 cubic feet equals 6,000 board feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Feet to Board Feet Reference Table",
    headers: ["Cubic Feet (ft³)", "Board Feet (FBM)", "Cubic Inches (in³)", "Cubic Yards (yd³)"],
    rows: [
      { fromVal: "1 ft³", toVal: "12 FBM", extra: "1,728 in³", extra2: "0.0370 yd³" },
      { fromVal: "5 ft³", toVal: "60 FBM", extra: "8,640 in³", extra2: "0.1852 yd³" },
      { fromVal: "10 ft³", toVal: "120 FBM", extra: "17,280 in³", extra2: "0.3704 yd³" },
      { fromVal: "25 ft³", toVal: "300 FBM", extra: "43,200 in³", extra2: "0.9259 yd³" },
      { fromVal: "50 ft³", toVal: "600 FBM", extra: "86,400 in³", extra2: "1.8519 yd³" },
      { fromVal: "100 ft³", toVal: "1,200 FBM", extra: "172,800 in³", extra2: "3.7037 yd³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Timber Ordering from Architectural Drawings",
        text: "Architects often specify total wood volume in cubic feet, which sawmills convert to board feet to issue commercial price quotes."
      },
      {
        title: "Log Yield Estimation",
        text: "Sawmill operators estimate board foot yields from round log volumes measured in cubic feet."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Dividing by 12 instead of multiplying when converting cubic feet to board feet.",
      "Forgetting that board feet accounts for 1-inch thickness rather than full 1-foot thickness."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in a cubic foot?",
      answer: "There are exactly 12 board feet in 1 cubic foot."
    },
    {
      question: "How do I convert cubic feet to board feet?",
      answer: "Multiply the cubic foot value by 12. For example, 5 cubic feet × 12 = 60 board feet."
    },
    {
      question: "What is 100 cubic feet in board feet?",
      answer: "100 cubic feet equals 1,200 board feet (100 × 12)."
    },
    {
      question: "Is board foot a unit of volume?",
      answer: "Yes, board foot is a measure of wood volume equal to 144 cubic inches."
    },
    {
      question: "How do cubic feet convert to cubic yards?",
      answer: "Divide cubic feet by 27 to get cubic yards."
    },
    {
      question: "Can I use this formula for hardwood and softwood?",
      answer: "Yes, the volumetric formula (1 ft³ = 12 FBM) applies equally to all wood species."
    },
    {
      question: "What is 1 cubic yard in board feet?",
      answer: "1 cubic yard contains 27 cubic feet, which equals 324 board feet (27 × 12)."
    },
    {
      question: "How many cubic inches are in a board foot?",
      answer: "There are 144 cubic inches in 1 board foot."
    }
  ]
};
