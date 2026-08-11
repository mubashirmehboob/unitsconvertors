import { CustomArticleData } from "./types";

export const boardFootToCubicFoot: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-foot",
  seoTitle: "Board Feet to Cubic Feet Converter (FBM to ft³) | UnitsConvertors.com",
  metaDescription: "Convert board feet (FBM) to cubic feet (ft³) with absolute scientific accuracy. Learn the exact 1/12 conversion ratio, formula, step-by-step examples, and timber volume tables.",
  h1: "Board Feet to Cubic Feet Converter",
  introduction: [
    "Converting board feet (FBM) to cubic feet (ft³) establishes a direct mathematical relationship between traditional lumber volume measurement used primarily in the United States and Canada and fundamental imperial volumetric units. Board measure quantifies raw timber, framing lumber, and joinery stock based on nominal dimensions. Cubic feet measure physical 3D space across architecture, HVAC design, freight transport, and general physics.",
    "Understanding the exact conversion from board feet to cubic feet allows lumber buyers, sawmills, woodworkers, timber estimators, and construction professionals to calculate lumber volumes accurately, estimate timber shipping weight when combined with wood species density data, and verify material billings without dimensional errors."
  ],
  quickAnswer: {
    text: "There are exactly 12 board feet in 1 cubic foot. Therefore, 1 board foot equals exactly 1/12 of a cubic foot (or 0.083333333 ft³ when formatted to 9 decimal places). To convert board feet to cubic feet, divide the total board foot value by 12.",
    formulaDisplay: "Cubic Feet (ft³) = Board Feet (FBM) ÷ 12",
    subtext: "Or multiply board feet by 0.083333333 (1/12) to calculate volume in cubic feet."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (symbol: FBM, for Foot Board Measure) is a specialized unit of volumetric measure in the timber and lumber industries in the United States and Canada. By definition, 1 board foot represents the nominal volume of a piece of wood 1 foot long, 1 foot wide, and 1 inch thick. This equals 144 cubic inches (0.002359737216 m³)."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Feet (ft³)",
    text: "A cubic foot (symbol: ft³) is an imperial and US customary unit of volume defined as the volume of a cube with sides 1 foot in length. It equals 1,728 cubic inches, 0.028316846592 cubic meters, or approximately 7.48 US liquid gallons."
  },
  relationship: "Since 1 cubic foot measures 12 inches by 12 inches by 12 inches (1,728 cubic inches) and 1 board foot measures 12 inches by 12 inches by 1 inch (144 cubic inches), dividing 1,728 by 144 yields exactly 12 board feet per cubic foot.",
  relationshipItems: [
    { label: "Exact Volumetric Ratio", value: "1 ft³ = 12 FBM" },
    { label: "Single Board Foot Value", value: "1 FBM = 1/12 ft³ (0.083333333 ft³)" },
    { label: "Cubic Inch Equivalents", value: "1 FBM = 144 in³ | 1 ft³ = 1,728 in³" }
  ],
  formula: {
    text: "To calculate cubic feet from a known board feet measurement, divide the total number of board feet by 12.",
    math: "Volume (ft³) = Volume (FBM) ÷ 12",
    subtext: "Mathematical derivation: 144 in³ ÷ 1,728 in³ = 1/12 = 0.083333333..."
  },
  expertNote: {
    title: "Log Scaling Rules vs. Direct Unit Conversion",
    text: "Board-foot unit conversion (1 FBM = 1/12 ft³) is mathematically exact based on nominal timber dimensions. However, when estimating board footage from standing timber or unprocessed round logs, forestry professionals use log scaling rules (such as Doyle, Scribner, or International 1/4-inch rules) that estimate net sawn lumber yield while accounting for saw kerf, slabbing, edging waste, and wood shrinkage."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Hardwood Lumber Batch",
        subtitle: "Convert 240 board feet of oak lumber into cubic feet.",
        steps: [
          "Identify board feet volume: 240 FBM.",
          "Apply conversion formula: Divide by 12.",
          "Perform calculation: 240 ÷ 12 = 20 ft³.",
          "Final Result: 240 board feet equals exactly 20 cubic feet."
        ]
      },
      {
        title: "Example 2: Sawmill Timber Order",
        subtitle: "Convert 1,500 board feet of Douglas fir framing timber into cubic feet.",
        steps: [
          "Identify board feet volume: 1,500 FBM.",
          "Apply conversion formula: 1,500 ÷ 12 = 125 ft³.",
          "Final Result: 1,500 board feet equals 125 cubic feet."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Feet Conversion Table",
    headers: ["Board Feet (FBM)", "Cubic Feet (ft³)", "Cubic Inches (in³)", "Exact Fraction"],
    rows: [
      { fromVal: "1 FBM", toVal: "0.0833 ft³", extra: "144 in³", extra2: "1/12 cubic foot" },
      { fromVal: "6 FBM", toVal: "0.5000 ft³", extra: "864 in³", extra2: "1/2 cubic foot" },
      { fromVal: "12 FBM", toVal: "1.0000 ft³", extra: "1,728 in³", extra2: "1 cubic foot" },
      { fromVal: "60 FBM", toVal: "5.0000 ft³", extra: "8,640 in³", extra2: "5 cubic feet" },
      { fromVal: "120 FBM", toVal: "10.000 ft³", extra: "17,280 in³", extra2: "10 cubic feet" },
      { fromVal: "240 FBM", toVal: "20.000 ft³", extra: "34,560 in³", extra2: "20 cubic feet" },
      { fromVal: "1,200 FBM", toVal: "100.00 ft³", extra: "172,800 in³", extra2: "100 cubic feet" }
    ]
  },
  applications: {
    title: "Real-World Industrial & Woodworking Uses",
    items: [
      {
        title: "Freight Weight Estimation",
        text: "Logistics planners convert lumber board footage into cubic feet, which are then multiplied by wood species density data (lbs/ft³) and moisture content factors to calculate accurate freight shipping weight."
      },
      {
        title: "Kiln Drying Capacity Planning",
        text: "Kiln operators can use board-foot volume estimates alongside stack dimensions and packing factors when planning kiln loads and capacity to ensure even airflow and controlled drying."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Multiplying by 12 instead of dividing: Remember that cubic feet are larger units than board feet.",
      "Confusing nominal dimensions with dressed/surfaced board dimensions when calculating original board feet.",
      "Treating board feet as square feet: Board feet represents 3D volume, not surface coverage."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in 1 cubic foot?",
      answer: "There are exactly 12 board feet in 1 cubic foot. This is because 1 cubic foot equals 1,728 cubic inches, and 1 board foot equals 144 cubic inches (1,728 ÷ 144 = 12)."
    },
    {
      question: "What is the formula to convert board feet to cubic feet?",
      answer: "Divide the number of board feet by 12. For example, 120 board feet divided by 12 equals 10 cubic feet."
    },
    {
      question: "Why does the timber industry use board feet instead of cubic feet?",
      answer: "Board feet was developed specifically to measure lumber in commercial trade based on board thickness, width, and length, making price estimation simpler for sawmills and carpenters."
    },
    {
      question: "Is 1 board foot smaller than 1 cubic foot?",
      answer: "Yes, 1 board foot is 1/12th the volume of 1 cubic foot."
    },
    {
      question: "How do you convert board feet to cubic yards using cubic feet?",
      answer: "First convert board feet to cubic feet by dividing by 12, then convert cubic feet to cubic yards by dividing by 27 (total divisor: 12 × 27 = 324)."
    },
    {
      question: "Does lumber drying change the cubic foot calculation?",
      answer: "Board feet is traditionally based on nominal green dimensions, whereas physical cubic volume decreases slightly after kiln drying due to shrinkage."
    },
    {
      question: "How many cubic feet are in 1,000 board feet?",
      answer: "1,000 board feet equals 83.333 cubic feet (1,000 ÷ 12 = 83.3333 ft³)."
    },
    {
      question: "Can I convert board feet directly to cubic meters?",
      answer: "Yes, 1 board foot equals 0.002359737216 cubic meters. Multiply board feet by 0.002359737216."
    }
  ],
  references: [
    "USDA Forest Service (USFS) Wood Handbook — Wood as an Engineering Material",
    "Virginia Department of Forestry — Measurement of Wood Products and Lumber Terms",
    "NIST Handbook 133 — Checking the Net Contents of Packaged Goods (Lumber Standards)"
  ]
};

