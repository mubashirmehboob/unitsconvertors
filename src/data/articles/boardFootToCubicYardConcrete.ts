import { CustomArticleData } from "./types";

export const boardFootToCubicYardConcrete: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-yard-concrete",
  seoTitle: "Board Feet to Cubic Yard Converter - FBM to yd³",
  metaDescription: "Convert board feet (FBM) to cubic yards (yd³) with exact volume formulas, lumber-to-concrete formwork estimation tables, and step-by-step math examples.",
  h1: "Board Feet to Cubic Yard Converter",
  introduction: [
    "Converting board feet (FBM) to cubic yards (yd³) links two primary US customary volume measurements. Board feet measure timber volume, while cubic yards serve as the standard purchase unit for ready-mix concrete, excavation soil, gravel, and bulk aggregates.",
    "When constructing concrete formwork or comparing structural wood frames to poured concrete foundations, converting board feet to cubic yards establishes precise volume equivalencies across building trades."
  ],
  quickAnswer: {
    text: "There are exactly 324 board feet in 1 cubic yard. Therefore, 1 board foot equals 1/324 of a cubic yard (approximately 0.00308642 yd³).",
    formulaDisplay: "Cubic Yards (yd³) = Board Feet (FBM) / 324",
    subtext: "To convert board feet to cubic yards, divide the board feet value by 324."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (FBM) is a unit of volume in the North American lumber industry equal to a 1-foot square board that is 1 inch thick (144 cubic inches, or 1/12 cubic foot). It measures raw and finished wood timber volume."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (yd³) is a standard volume measurement equal to a cube measuring 3 feet (36 inches) on each side, spanning 27 cubic feet (46,656 cubic inches). In construction, concrete, soil, mulch, and gravel are bought and placed in cubic yards."
  },
  relationship: "Because 1 cubic foot contains 12 board feet and 1 cubic yard contains 27 cubic feet, 1 cubic yard equals 27 × 12 = 324 board feet.",
  relationshipItems: [
    { label: "Board Feet to Cubic Yards", value: "1 FBM = 0.00308642 yd³ (1/324 yd³)" },
    { label: "Cubic Yards to Board Feet", value: "1 yd³ = 324 FBM" },
    { label: "Cubic Feet to Board Feet", value: "1 ft³ = 12 FBM" }
  ],
  formula: {
    text: "To convert board feet to cubic yards, divide the total board feet value by 324, or multiply by 0.00308642.",
    math: "Cubic Yards (yd³) = Board Feet (FBM) / 324",
    subtext: "Or: Cubic Yards = Board Feet × 0.00308641975"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Timber Frame Volume vs Concrete Foundation",
        subtitle: "Convert 1,620 board feet of framing lumber to cubic yards.",
        steps: [
          "Identify volume in board feet: 1,620 FBM.",
          "Apply formula: Divide by 324.",
          "Perform calculation: 1,620 / 324 = 5.0 yd³.",
          "Final Result: 1,620 board feet equals exactly 5 cubic yards."
        ]
      },
      {
        title: "Example 2: Concrete Formwork Lumber Inventory",
        subtitle: "Convert 972 board feet of concrete forming lumber into cubic yards.",
        steps: [
          "Identify volume: 972 FBM.",
          "Apply formula: 972 / 324 = 3.0 yd³.",
          "Final Result: 972 board feet is equivalent to 3 cubic yards of raw volume."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Yards Conversion Reference Table",
    headers: ["Board Feet (FBM)", "Cubic Feet (ft³)", "Cubic Yards (yd³)", "Exact Fractional Yard"],
    rows: [
      { fromVal: "81", toVal: "6.75 ft³", extra: "0.25 yd³", extra2: "1/4 cubic yard" },
      { fromVal: "162", toVal: "13.50 ft³", extra: "0.50 yd³", extra2: "1/2 cubic yard" },
      { fromVal: "324", toVal: "27.00 ft³", extra: "1.00 yd³", extra2: "1 cubic yard" },
      { fromVal: "648", toVal: "54.00 ft³", extra: "2.00 yd³", extra2: "2 cubic yards" },
      { fromVal: "1,000", toVal: "83.33 ft³", extra: "3.086 yd³", extra2: "3 7/81 cubic yards" },
      { fromVal: "1,620", toVal: "135.00 ft³", extra: "5.00 yd³", extra2: "5 cubic yards" },
      { fromVal: "3,240", toVal: "270.00 ft³", extra: "10.00 yd³", extra2: "10 cubic yards" }
    ]
  },
  applications: {
    title: "Construction Applications",
    items: [
      {
        title: "Formwork & Concrete Estimating",
        text: "Engineers compare timber formwork material volume in board feet with concrete batch volumes ordered in cubic yards."
      },
      {
        title: "Structural Material Balance",
        text: "Estimators evaluate total building mass when replacing heavy timber frames with reinforced concrete structures."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing cubic feet with cubic yards: Dividing by 12 gives cubic feet, not cubic yards.",
      "Forgetting that 1 cubic yard contains 27 cubic feet or 324 board feet."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in 1 cubic yard?",
      answer: "There are exactly 324 board feet in 1 cubic yard (27 cubic feet × 12 board feet per cubic foot)."
    },
    {
      question: "How do I convert board feet to cubic yards?",
      answer: "Divide total board feet by 324. For example, 648 board feet divided by 324 equals 2 cubic yards."
    },
    {
      question: "How many cubic yards are in 100 board feet?",
      answer: "100 board feet equals approximately 0.3086 cubic yards (100 / 324)."
    },
    {
      question: "How many cubic yards are in 1,000 board feet?",
      answer: "1,000 board feet equals approximately 3.086 cubic yards (1,000 / 324)."
    },
    {
      question: "What is the relationship between cubic feet and board feet?",
      answer: "One cubic foot contains 12 board feet."
    },
    {
      question: "Why is 324 the magic number for board feet to cubic yards?",
      answer: "Because 1 cubic yard = 27 cubic feet, and 1 cubic foot = 12 board feet. Multiplying 27 × 12 = 324."
    },
    {
      question: "Is a cubic yard of wood lighter than a cubic yard of concrete?",
      answer: "Yes. Concrete weighs roughly 4,050 lbs per cubic yard, while typical softwood timber weighs 700–1,100 lbs per cubic yard (324 FBM)."
    },
    {
      question: "Can this formula be used for all wood species?",
      answer: "Yes, board feet and cubic yards measure volume, which is independent of wood density or species."
    }
  ],
  relatedList: [
    { label: "Board Feet to Cubic Meter", from: "board-foot", to: "cubic-meter-concrete" },
    { label: "Cubic Yard to Board Feet", from: "cubic-yard-concrete", to: "board-foot" },
    { label: "Sq Foot to Sq Meter", from: "sq-foot-construction", to: "sq-meter-construction" },
    { label: "Sq Meter to Sq Foot", from: "sq-meter-construction", to: "sq-foot-construction" }
  ],
  references: [
    "American Concrete Institute (ACI). <em>ACI 347R-14: Guide to Formwork for Concrete</em>.",
    "NIST Special Publication 811: <em>Guide for the Use of the International System of Units (SI)</em>."
  ]
};
