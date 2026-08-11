import { CustomArticleData } from "./types";

export const cubicYardConcreteToBoardFoot: CustomArticleData = {
  fromUnitId: "cubic-yard-concrete",
  toUnitId: "board-foot",
  seoTitle: "Cubic Yard to Board Feet Converter (yd³ to FBM) | UnitsConvertors.com",
  metaDescription: "Convert cubic yards (yd³) to board feet (FBM) with high precision. Calculate bulk concrete or soil volumes into timber equivalents using 1 yd³ = 324 FBM.",
  h1: "Cubic Yard to Board Feet Converter",
  introduction: [
    "Converting cubic yards (yd³) to board feet (FBM) converts standard bulk construction volume—such as poured concrete, excavated soil, or ready-mix delivery—into timber board measure. One cubic yard represents a 3-foot by 3-foot by 3-foot cube (27 cubic feet), while a board foot measures 144 cubic inches (1/12 cubic foot).",
    "Whether you are determining how much timber formwork is required to encase a given yardage of poured concrete, or converting bulk material vessel capacities into equivalent lumber tallies, converting cubic yards to board feet ensures mathematical accuracy."
  ],
  quickAnswer: {
    text: "There are exactly 324 board feet in 1 cubic yard. To convert cubic yards to board feet, multiply the number of cubic yards by 324.",
    formulaDisplay: "Board Feet (FBM) = Cubic Yards (yd³) × 324",
    subtext: "Or divide cubic yards by 0.00308642 to determine board footage."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (symbol: yd³) is a customary and imperial unit of three-dimensional volume defined as a cube 1 yard (3 feet or 36 inches) on each side. A cubic yard equals 27 cubic feet (46,656 cubic inches or 0.764555 cubic meters). It is the primary trade unit for ordering ready-mix concrete, gravel, topsoil, and mulch."
  },
  aboutTargetUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (symbol: FBM) is the standard volume measure in the North American lumber industry representing a piece of wood 1 foot long, 1 foot wide, and 1 inch thick (144 cubic inches or 1/12 ft³)."
  },
  relationship: "Because 1 cubic yard contains 27 cubic feet, and each cubic foot contains 12 board feet, 1 cubic yard equals 27 × 12 = 324 board feet.",
  relationshipItems: [
    { label: "Cubic Yard in Board Feet", value: "1 yd³ = 324 FBM" },
    { label: "Board Foot in Cubic Yards", value: "1 FBM = 0.00308642 yd³" },
    { label: "Cubic Foot Intermediate", value: "1 ft³ = 12 FBM = 1/27 yd³" }
  ],
  formula: {
    text: "To convert cubic yards to board feet, multiply the volume in cubic yards by 324.",
    math: "Volume (FBM) = Volume (yd³) × 324",
    subtext: "Derivation: 1 yd³ = 27 ft³; 27 ft³ × 12 FBM/ft³ = 324 FBM"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Formwork Capacity Calculation",
        subtitle: "Convert 5 cubic yards of poured concrete volume into board feet equivalent.",
        steps: [
          "Identify volume in cubic yards: 5.0 yd³.",
          "Apply conversion formula: Multiply by 324.",
          "Perform calculation: 5.0 × 324 = 1,620 FBM.",
          "Final Result: 5 cubic yards equals exactly 1,620 board feet."
        ]
      },
      {
        title: "Example 2: Bulk Storage Container Assessment",
        subtitle: "Convert 2.5 cubic yards into board feet.",
        steps: [
          "Identify volume: 2.5 yd³.",
          "Apply conversion formula: 2.5 × 324 = 810 FBM.",
          "Final Result: 2.5 cubic yards equals 810 board feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Yards to Board Feet Reference Table",
    headers: ["Cubic Yards (yd³)", "Cubic Feet (ft³)", "Board Feet (FBM)", "Equivalent MBF"],
    rows: [
      { fromVal: "0.25 yd³", toVal: "6.75 ft³", extra: "81 FBM", extra2: "0.081 MBF" },
      { fromVal: "0.50 yd³", toVal: "13.50 ft³", extra: "162 FBM", extra2: "0.162 MBF" },
      { fromVal: "1.00 yd³", toVal: "27.00 ft³", extra: "324 FBM", extra2: "0.324 MBF" },
      { fromVal: "2.00 yd³", toVal: "54.00 ft³", extra: "648 FBM", extra2: "0.648 MBF" },
      { fromVal: "3.00 yd³", toVal: "81.00 ft³", extra: "972 FBM", extra2: "0.972 MBF" },
      { fromVal: "5.00 yd³", toVal: "135.00 ft³", extra: "1,620 FBM", extra2: "1.620 MBF" },
      { fromVal: "10.00 yd³", toVal: "270.00 ft³", extra: "3,240 FBM", extra2: "3.240 MBF" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Concrete Formwork Design",
        text: "Estimators determine the total timber volume required to contain a poured concrete batch specified in cubic yards."
      },
      {
        title: "Material Transport Planning",
        text: "Logistics planners convert vehicle payload capacity in cubic yards to equivalent board feet of packaged lumber."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Multiplying by 12 instead of 324: Multiplying cubic yards by 12 gives an incorrect number; you must multiply by 324 (27 × 12).",
      "Forgetting that board feet measure three-dimensional volume, not surface area."
    ]
  },
  faqs: [
    {
      question: "How many board feet are in 1 cubic yard?",
      answer: "There are exactly 324 board feet in 1 cubic yard. Multiply any cubic yard figure by 324 to convert to board feet."
    },
    {
      question: "How do you calculate board feet from cubic yards?",
      answer: "Use the formula: Board Feet = Cubic Yards × 324. For example, 10 cubic yards × 324 = 3,240 board feet."
    },
    {
      question: "Why are there 324 board feet in a cubic yard?",
      answer: "A cubic yard equals 27 cubic feet, and each cubic foot contains 12 board feet (since 1 board foot = 1/12 ft³). Therefore, 27 × 12 = 324 board feet per cubic yard."
    },
    {
      question: "How many board feet are in 5 cubic yards?",
      answer: "5 cubic yards multiplied by 324 yields exactly 1,620 board feet."
    },
    {
      question: "Can I convert cubic yards directly to board feet without going through cubic feet?",
      answer: "Yes, multiplying directly by 324 bypasses the cubic feet step while maintaining complete mathematical accuracy."
    },
    {
      question: "What is 1 cubic yard equal to in MBF (thousand board feet)?",
      answer: "One cubic yard equals 324 board feet, which is equivalent to 0.324 MBF (Thousand Board Feet)."
    }
  ],
  relatedList: [
    { label: "Board Feet to Cubic Yard", from: "board-foot", to: "cubic-yard-concrete" },
    { label: "Cubic Yard to Cubic Meter", from: "cubic-yard-concrete", to: "cubic-meter-concrete" },
    { label: "Board Feet to Cubic Meter", from: "board-foot", to: "cubic-meter-concrete" },
    { label: "Cubic Meter to Board Feet", from: "cubic-meter-concrete", to: "board-foot" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) Handbook 133.",
    "American Concrete Institute (ACI) 347R: Guide to Formwork for Concrete.",
    "American Wood Council (AWC) National Design Specification for Wood Construction."
  ]
};
