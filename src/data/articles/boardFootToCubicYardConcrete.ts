import { CustomArticleData } from "./types";

export const boardFootToCubicYardConcrete: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-yard-concrete",
  seoTitle: "Board Feet to Cubic Yard Converter (FBM to yd³) | UnitsConvertors.com",
  metaDescription: "Convert board feet (FBM) to cubic yards (yd³) accurately. Learn the exact 1/324 conversion factor, mathematical formula, step-by-step examples, and timber volume tables.",
  h1: "Board Feet to Cubic Yard Converter",
  introduction: [
    "Converting board feet (FBM) to cubic yards (yd³) establishes a direct volumetric bridge between two major North American customary measurement standards. Board measure is the standard unit for quantifying raw timber, milled framing lumber, and joinery stock. Cubic yards serve as a universal bulk purchasing and storage measure across construction and material supply.",
    "When managing commercial lumber inventories, estimating sawmill production, purchasing large timber quantities, or calculating wood-volume metrics for heavy construction projects, converting board feet to cubic yards guarantees accurate material accounting and consistent volume comparisons across customary measurement standards."
  ],
  quickAnswer: {
    text: "There are exactly 324 board feet in 1 cubic yard. Therefore, 1 board foot equals 1/324 of a cubic yard (approximately 0.00308642 yd³). To convert board feet to cubic yards, divide the board foot total by 324.",
    formulaDisplay: "Cubic Yards (yd³) = Board Feet (FBM) ÷ 324",
    subtext: "Or multiply board feet by 0.00308641975 to determine cubic yards."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (symbol: FBM, for Foot Board Measure) is a specialized unit of volumetric measure in the timber and lumber industries across the United States and Canada. By definition, 1 board foot represents the nominal volume of a piece of wood 1 foot long, 1 foot wide, and 1 inch thick. This translates to 144 cubic inches, or exactly 1/12 of a cubic foot (0.08333 ft³ / 0.002359737 m³)."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (symbol: yd³) is an imperial and US customary unit of volume representing a three-dimensional space measuring 3 feet on each edge (3 ft × 3 ft × 3 ft). A single cubic yard contains 27 cubic feet (46,656 cubic inches or 0.764554858 m³). It is a standard bulk volume unit for large-scale material ordering, timber stock calculations, and civil site engineering."
  },
  relationship: "Because 1 cubic foot equals 12 board feet and 1 cubic yard contains 27 cubic feet, multiplying 27 cubic feet by 12 board feet per cubic foot yields exactly 324 board feet per cubic yard.",
  relationshipItems: [
    { label: "Exact Volumetric Ratio", value: "1 yd³ = 324 FBM" },
    { label: "Single Board Foot Value", value: "1 FBM = 0.00308642 yd³ (1/324 yd³)" },
    { label: "Intermediate Cubic Foot Bridge", value: "1 ft³ = 12 FBM = 0.037037 yd³" }
  ],
  formula: {
    text: "To calculate cubic yards from a known board feet measurement, divide the total number of board feet by 324, or multiply by the conversion factor 0.00308641975.",
    math: "Volume (yd³) = Volume (FBM) ÷ 324",
    subtext: "Mathematical derivation: 1 FBM = (1/12) ft³; (1/12) ÷ 27 = 1/324 yd³"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Timber Frame Volume Calculation",
        subtitle: "Convert 1,620 board feet of structural heavy timber into cubic yards.",
        steps: [
          "Identify the volume in board feet: 1,620 FBM.",
          "Apply the conversion formula: Divide by 324.",
          "Perform calculation: 1,620 ÷ 324 = 5.0 yd³.",
          "Final Result: 1,620 board feet equals exactly 5 cubic yards."
        ]
      },
      {
        title: "Example 2: Sawmill Stock Estimation",
        subtitle: "Convert 972 board feet of milled lumber into cubic yards.",
        steps: [
          "Identify the lumber volume: 972 FBM.",
          "Apply the conversion formula: 972 ÷ 324 = 3.0 yd³.",
          "Final Result: 972 board feet occupies a physical bulk volume of 3 cubic yards."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Yards Reference Table",
    headers: ["Board Feet (FBM)", "Cubic Feet (ft³)", "Cubic Yards (yd³)", "Exact Fraction"],
    rows: [
      { fromVal: "81 FBM", toVal: "6.75 ft³", extra: "0.25 yd³", extra2: "1/4 cubic yard" },
      { fromVal: "162 FBM", toVal: "13.50 ft³", extra: "0.50 yd³", extra2: "1/2 cubic yard" },
      { fromVal: "324 FBM", toVal: "27.00 ft³", extra: "1.00 yd³", extra2: "1 cubic yard" },
      { fromVal: "648 FBM", toVal: "54.00 ft³", extra: "2.00 yd³", extra2: "2 cubic yards" },
      { fromVal: "972 FBM", toVal: "81.00 ft³", extra: "3.00 yd³", extra2: "3 cubic yards" },
      { fromVal: "1,620 FBM", toVal: "135.00 ft³", extra: "5.00 yd³", extra2: "5 cubic yards" },
      { fromVal: "3,240 FBM", toVal: "270.00 ft³", extra: "10.00 yd³", extra2: "10 cubic yards" }
    ]
  },
  applications: {
    title: "Practical Timber & Construction Applications",
    items: [
      {
        title: "Commercial Lumber Inventory & Sawmill Production",
        text: "Sawmills, lumber yards, and timber suppliers convert large board footage tallies into cubic yards for bulk inventory management and storage allocation."
      },
      {
        title: "Timber Purchasing & Bulk Material Estimates",
        text: "Construction estimators and wood procurement buyers convert raw timber lists from board feet to cubic yards to compare bulk material pricing and manage large-scale architectural orders."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Dividing by 12 instead of 324: Dividing board feet by 12 yields cubic feet, not cubic yards.",
      "Confusing nominal and actual lumber dimensions when calculating initial board feet.",
      "Assuming board feet measure surface area: Board feet is strictly a three-dimensional volume measurement."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in 1 cubic yard?",
      answer: "There are exactly 324 board feet in 1 cubic yard. This is derived because 1 cubic yard contains 27 cubic feet, and each cubic foot consists of 12 board feet (27 × 12 = 324)."
    },
    {
      question: "What is the formula to convert board feet to cubic yards?",
      answer: "To convert board feet to cubic yards, use the formula: Cubic Yards = Board Feet ÷ 324. Alternatively, you can multiply the number of board feet by 0.00308642 to achieve the same result."
    },
    {
      question: "Why do estimators convert board feet to cubic yards?",
      answer: "Sawmills, timber buyers, and construction estimators convert board feet to cubic yards when managing commercial lumber inventories, pricing bulk timber orders, or translating timber specs into customary bulk volume units."
    },
    {
      question: "Is a board foot a measure of area or volume?",
      answer: "A board foot is strictly a measurement of volume, equal to 144 cubic inches (1 foot long × 1 foot wide × 1 inch thick). It represents solid three-dimensional material, not surface area."
    },
    {
      question: "How do I convert board feet to cubic feet first?",
      answer: "To convert board feet to cubic feet, divide by 12. For example, 324 board feet divided by 12 equals 27 cubic feet, which then equals exactly 1 cubic yard."
    },
    {
      question: "What is 1,000 board feet in cubic yards?",
      answer: "To convert 1,000 board feet to cubic yards, divide 1,000 by 324. This yields approximately 3.0864 cubic yards (or roughly 3.09 yd³)."
    }
  ],
  relatedList: [
    { label: "Board Feet to Cubic Meter", from: "board-foot", to: "cubic-meter" },
    { label: "Cubic Yard to Board Feet", from: "cubic-yard", to: "board-foot" },
    { label: "Cubic Yard to Cubic Meter", from: "cubic-yard", to: "cubic-meter" },
    { label: "Square Foot to Square Meter", from: "square-foot", to: "square-meter" }
  ],
  references: [
    "American Wood Council (AWC) - Wood Design Standards & Volumetric Conversion Factors (0.002359737 m³ per board foot).",
    "ASTM D9-20 — Standard Terminology Relating to Wood and Wood-Based Products."
  ]
};
