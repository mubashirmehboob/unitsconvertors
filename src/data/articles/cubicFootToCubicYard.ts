import { CustomArticleData } from "./types";

export const cubicFootToCubicYard: CustomArticleData = {
  fromUnitId: "cubic-foot",
  toUnitId: "cubic-yard",
  seoTitle: "Cubic Feet to Cubic Yards Converter (ft³ to yd³) | UnitsConvertors.com",
  metaDescription: "Convert cubic feet (ft³) to cubic yards (yd³) with exact mathematical accuracy. Learn the 1/27 division formula, step-by-step examples, and construction material ordering tables.",
  h1: "Cubic Feet to Cubic Yards Converter",
  introduction: [
    "Converting cubic feet (ft³) to cubic yards (yd³) translates site dimensions and small-scale structural volume measurements into commercial bulk ordering units. Civil engineers, concrete contractors, landscapers, and excavators regularly calculate job site excavations, foundation footings, and trench volumes in cubic feet before converting the totals into cubic yards for ready-mix concrete, gravel, topsoil, or mulch ordering.",
    "Understanding the exact 1/27th conversion relationship between cubic feet and cubic yards ensures accurate material estimates, eliminates job-site shortages, and prevents costly excess material disposal charges."
  ],
  quickAnswer: {
    text: "There are exactly 27 cubic feet in 1 cubic yard. Therefore, 1 cubic foot equals 1/27 of a cubic yard (approximately 0.037037 yd³). To convert cubic feet to cubic yards, divide the cubic foot value by 27.",
    formulaDisplay: "Cubic Yards (yd³) = Cubic Feet (ft³) ÷ 27",
    subtext: "Or multiply cubic feet by 0.037037037 to determine volume in cubic yards."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Feet (ft³)",
    text: "A cubic foot (symbol: ft³) is a standard imperial and US customary unit of volume defined as the volume of a cube measuring 1 foot (12 inches) on each side. It equals 1,728 cubic inches or approximately 0.0283168 cubic meters."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (symbol: yd³) is a US customary bulk unit of volumetric measurement defined as the volume contained within a cube measuring 1 yard (3 feet, or 36 inches) on each side. It equals 27 cubic feet, 46,656 cubic inches, or approximately 0.764555 cubic meters."
  },
  relationship: "Because 1 yard equals 3 feet, a cubic yard contains 3 ft × 3 ft × 3 ft = 27 cubic feet. Dividing any cubic foot value by 27 yields the equivalent volume in cubic yards.",
  relationshipItems: [
    { label: "Exact Ratio", value: "1 yd³ = 27 ft³" },
    { label: "Single Cubic Foot Factor", value: "1 ft³ = 0.037037 yd³ (1/27 yd³)" },
    { label: "Linear Dimensional Basis", value: "1 yd = 3 ft | (1 yd)³ = (3 ft)³ = 27 ft³" }
  ],
  formula: {
    text: "To convert cubic feet to cubic yards, divide the total volume in cubic feet by 27.",
    math: "Volume (yd³) = Volume (ft³) ÷ 27",
    subtext: "Derivation: 1 ft³ ÷ 27 ft³/yd³ = 1/27 = 0.037037037... yd³."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Ready-Mix Concrete Pour",
        subtitle: "Convert 135 cubic feet of concrete slab volume into cubic yards.",
        steps: [
          "Identify total volume in cubic feet: 135 ft³.",
          "Apply conversion formula: Divide by 27.",
          "Perform calculation: 135 ÷ 27 = 5 yd³.",
          "Final Result: 135 cubic feet equals exactly 5 cubic yards of concrete."
        ]
      },
      {
        title: "Example 2: Landscape Mulch Delivery",
        subtitle: "Convert 270 cubic feet of shredded bark mulch into cubic yards.",
        steps: [
          "Identify volume in cubic feet: 270 ft³.",
          "Apply formula: 270 ÷ 27 = 10 yd³.",
          "Final Result: 270 cubic feet equals 10 cubic yards."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Feet to Cubic Yards Reference Table",
    headers: ["Cubic Feet (ft³)", "Cubic Yards (yd³)", "Board Feet (FBM)", "Cubic Meters (m³)"],
    rows: [
      { fromVal: "1 ft³", toVal: "0.0370 yd³", extra: "12 FBM", extra2: "0.0283 m³" },
      { fromVal: "9 ft³", toVal: "0.3333 yd³", extra: "108 FBM", extra2: "0.2549 m³" },
      { fromVal: "27 ft³", toVal: "1.0000 yd³", extra: "324 FBM", extra2: "0.7646 m³" },
      { fromVal: "54 ft³", toVal: "2.0000 yd³", extra: "648 FBM", extra2: "1.5292 m³" },
      { fromVal: "81 ft³", toVal: "3.0000 yd³", extra: "972 FBM", extra2: "2.2937 m³" },
      { fromVal: "135 ft³", toVal: "5.0000 yd³", extra: "1,620 FBM", extra2: "3.8228 m³" },
      { fromVal: "270 ft³", toVal: "10.000 yd³", extra: "3,240 FBM", extra2: "7.6455 m³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Ready-Mix Concrete Ordering",
        text: "Contractors calculate footing trench volumes in cubic feet and convert to cubic yards to match ready-mix batch plant truck billing units."
      },
      {
        title: "Earthwork Excavation",
        text: "Site managers convert foundation excavation dimensions (ft³) to cubic yards to budget haul-off dump truck loads."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Dividing by 9 instead of 27: 9 is the factor for converting square feet to square yards (2D area), whereas 27 is required for 3D volume.",
      "Forgetting to add a standard 5% to 10% waste factor when ordering bulk materials like concrete or gravel.",
      "Confusing fluid volume or board footage with soil/aggregate cubic yardage."
    ]
  },
  faqs: [
    {
      question: "How many cubic feet are in 1 cubic yard?",
      answer: "There are exactly 27 cubic feet in 1 cubic yard."
    },
    {
      question: "What is the formula to convert cubic feet to cubic yards?",
      answer: "Divide the volume in cubic feet by 27. For example, 54 cubic feet ÷ 27 = 2 cubic yards."
    },
    {
      question: "Why do you divide by 27 to get cubic yards?",
      answer: "Because 1 yard equals 3 feet. Cubing both sides gives 1 cubic yard = 3 ft × 3 ft × 3 ft = 27 cubic feet."
    },
    {
      question: "How many cubic yards is 100 cubic feet?",
      answer: "100 cubic feet divided by 27 equals approximately 3.70 cubic yards."
    },
    {
      question: "How many cubic yards is 200 cubic feet?",
      answer: "200 cubic feet divided by 27 equals approximately 7.41 cubic yards."
    },
    {
      question: "What is 27 cubic feet in cubic yards?",
      answer: "27 cubic feet equals exactly 1 cubic yard."
    },
    {
      question: "How do you convert square feet to cubic yards?",
      answer: "Multiply square feet by the depth in feet to get cubic feet, then divide by 27 to get cubic yards."
    },
    {
      question: "How many board feet are in 27 cubic feet?",
      answer: "27 cubic feet (1 cubic yard) contains exactly 324 board feet (27 × 12 = 324)."
    }
  ]
};
