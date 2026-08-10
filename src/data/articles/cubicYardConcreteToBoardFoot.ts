import { CustomArticleData } from "./types";

export const cubicYardConcreteToBoardFoot: CustomArticleData = {
  fromUnitId: "cubic-yard-concrete",
  toUnitId: "board-foot",
  seoTitle: "Cubic Yard to Board Feet Converter - yd³ to FBM",
  metaDescription: "Convert cubic yards (yd³) to board feet (FBM) with exact mathematical volume formulas, timber-to-concrete conversion tables, and step-by-step examples.",
  h1: "Cubic Yard to Board Feet Converter",
  introduction: [
    "Converting bulk volume from cubic yards (yd³) to timber volume in board feet (FBM) connects two foundational US customary volume units used across building construction. While ready-mix concrete, gravel, and earth excavation are purchased in cubic yards, heavy timber framing and dimensional lumber are priced in board feet.",
    "Because both units measure three-dimensional solid volume, converting cubic yards to board feet uses an exact mathematical ratio: 1 cubic yard equals exactly 324 board feet."
  ],
  quickAnswer: {
    text: "There are exactly 324 board feet in 1 cubic yard. To convert cubic yards to board feet, multiply the cubic yard value by 324.",
    formulaDisplay: "Board Feet (FBM) = Cubic Yards (yd³) × 324",
    subtext: "Since 1 cubic yard = 27 cubic feet, and 1 cubic foot = 12 board feet: 27 × 12 = 324 board feet."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (yd³) is a standard US customary volume unit equal to a cube measuring 3 feet on each edge (27 cubic feet, or 46,656 cubic inches). It is the standard purchasing unit for poured concrete, soil, and gravel."
  },
  aboutTargetUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (FBM) is a volume unit in the North American lumber trade equal to a 1-foot square board that is 1 inch thick (144 cubic inches, or 1/12 cubic foot). It measures raw and finished wood timber volume."
  },
  relationship: "Because 1 cubic yard contains 27 cubic feet and each cubic foot contains 12 board feet, 1 cubic yard equals exactly 27 × 12 = 324 board feet.",
  relationshipItems: [
    { label: "Cubic Yards to Board Feet", value: "1 yd³ = 324 FBM" },
    { label: "Board Feet to Cubic Yards", value: "1 FBM = 0.00308642 yd³ (1/324 yd³)" },
    { label: "Cubic Feet to Board Feet", value: "1 ft³ = 12 FBM" }
  ],
  formula: {
    text: "To convert cubic yards to board feet, multiply the volume in cubic yards by 324.",
    math: "Board Feet (FBM) = Cubic Yards (yd³) × 324",
    subtext: "Formula derivation: Cubic Yards × 27 ft³/yd³ × 12 FBM/ft³ = Cubic Yards × 324"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Formwork Lumber Volume vs Foundation Pour",
        subtitle: "Convert a 5 cubic yard foundation excavation volume into equivalent board feet of timber.",
        steps: [
          "Identify volume in cubic yards: 5 yd³.",
          "Apply formula: Multiply by 324.",
          "Perform calculation: 5 × 324 = 1,620 FBM.",
          "Final Result: 5 cubic yards of volume equals exactly 1,620 board feet."
        ]
      },
      {
        title: "Example 2: Heavy Timber Structure Batch Order",
        subtitle: "Convert 12.5 cubic yards of structural timber volume into board feet.",
        steps: [
          "Identify volume: 12.5 yd³.",
          "Apply formula: 12.5 × 324 = 4,050 FBM.",
          "Final Result: 12.5 cubic yards is equivalent to 4,050 board feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Yards to Board Feet Conversion Table",
    headers: ["Cubic Yards (yd³)", "Cubic Feet (ft³)", "Board Feet (FBM)", "Equivalent 1\" Board Area"],
    rows: [
      { fromVal: "0.25 yd³", toVal: "6.75 ft³", extra: "81 FBM", extra2: "81 sq ft at 1\" thick" },
      { fromVal: "0.50 yd³", toVal: "13.50 ft³", extra: "162 FBM", extra2: "162 sq ft at 1\" thick" },
      { fromVal: "1.00 yd³", toVal: "27.00 ft³", extra: "324 FBM", extra2: "324 sq ft at 1\" thick" },
      { fromVal: "2.00 yd³", toVal: "54.00 ft³", extra: "648 FBM", extra2: "648 sq ft at 1\" thick" },
      { fromVal: "5.00 yd³", toVal: "135.00 ft³", extra: "1,620 FBM", extra2: "1,620 sq ft at 1\" thick" },
      { fromVal: "10.00 yd³", toVal: "270.00 ft³", extra: "3,240 FBM", extra2: "3,240 sq ft at 1\" thick" },
      { fromVal: "25.00 yd³", toVal: "675.00 ft³", extra: "8,100 FBM", extra2: "8,100 sq ft at 1\" thick" }
    ]
  },
  applications: {
    title: "Construction & Timber Estimating Uses",
    items: [
      {
        title: "Material Substitution Analysis",
        text: "Engineers compare raw material volume when replacing heavy timber framing with poured reinforced concrete."
      },
      {
        title: "Formwork & Shoring Calculations",
        text: "Calculating total lumber board feet needed to construct formwork for a given cubic yard concrete pour."
      }
    ]
  },
  pitfalls: {
    title: "Common Calculation Errors to Avoid",
    items: [
      "Multiplying by 27 instead of 324: Multiplying by 27 converts cubic yards to cubic feet, not board feet.",
      "Forgetting that 1 cubic foot contains 12 board feet."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in 1 cubic yard?",
      answer: "There are exactly 324 board feet in 1 cubic yard."
    },
    {
      question: "How do I convert cubic yards to board feet?",
      answer: "Multiply total cubic yards by 324. For example, 2 cubic yards × 324 = 648 board feet."
    },
    {
      question: "How many board feet are in 10 cubic yards?",
      answer: "Ten cubic yards equal 3,240 board feet (10 × 324)."
    },
    {
      question: "Why does 1 cubic yard equal 324 board feet?",
      answer: "1 cubic yard = 27 cubic feet. Each cubic foot contains 12 board feet (12 inches × 12 inches × 1 inch = 144 cu in). 27 × 12 = 324."
    },
    {
      question: "Is this conversion exact or an approximation?",
      answer: "The conversion multiplier 324 is exact by definition."
    },
    {
      question: "How many board feet are in 0.5 cubic yards?",
      answer: "Half a cubic yard equals exactly 162 board feet (0.5 × 324)."
    },
    {
      question: "Can I convert cubic yards directly to square feet?",
      answer: "Converting volume (yd³) to surface area (sq ft) requires knowing the slab or board thickness."
    },
    {
      question: "Does wood species affect board feet per cubic yard?",
      answer: "No, board feet and cubic yards measure pure volume, which is independent of timber density or wood species."
    }
  ],
  relatedList: [
    { label: "Board Feet to Cubic Yard", from: "board-foot", to: "cubic-yard-concrete" },
    { label: "Board Feet to Cubic Meter", from: "board-foot", to: "cubic-meter-concrete" },
    { label: "Sq Foot to Sq Meter", from: "sq-foot-construction", to: "sq-meter-construction" },
    { label: "Sq Meter to Sq Foot", from: "sq-meter-construction", to: "sq-foot-construction" }
  ],
  references: [
    "NHLA. <em>Rules for the Measurement and Inspection of Hardwood and Cypress</em>.",
    "NIST Special Publication 811: <em>Guide for the Use of the International System of Units (SI)</em>."
  ]
};
