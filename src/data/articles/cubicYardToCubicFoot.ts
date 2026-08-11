import { CustomArticleData } from "./types";

export const cubicYardToCubicFoot: CustomArticleData = {
  fromUnitId: "cubic-yard",
  toUnitId: "cubic-foot",
  seoTitle: "Cubic Yards to Cubic Feet Converter (yd³ to ft³) | UnitsConvertors.com",
  metaDescription: "Convert cubic yards (yd³) to cubic feet (ft³) with 100% mathematical precision. Learn the exact 27x multiplier formula, worked examples, and bulk volume tables.",
  h1: "Cubic Yards to Cubic Feet Converter",
  introduction: [
    "Converting cubic yards (yd³) to cubic feet (ft³) converts bulk volume units used in civil engineering, landscaping, and concrete construction into finer imperial spatial measurements. Ready-mix concrete, soil, mulch, gravel, and sand are delivered in cubic yards, but individual formwork dimensions, foundation footing trenches, and planter boxes are measured in feet and cubic feet."
  ],
  quickAnswer: {
    text: "There are exactly 27 cubic feet in 1 cubic yard. To convert cubic yards to cubic feet, multiply the cubic yard value by 27.",
    formulaDisplay: "Cubic Feet (ft³) = Cubic Yards (yd³) × 27",
    subtext: "Example: 3 cubic yards × 27 = 81 cubic feet."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard is a US customary unit of volume equal to a cube measuring 3 feet (36 inches or 1 yard) on each edge."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Feet (ft³)",
    text: "A cubic foot is a unit of volume equal to a cube measuring 1 foot (12 inches) on each side."
  },
  relationship: "Because 1 yard equals 3 feet, a cubic yard equals 3 ft × 3 ft × 3 ft = 27 cubic feet.",
  relationshipItems: [
    { label: "Exact Volumetric Ratio", value: "1 yd³ = 27 ft³" },
    { label: "Inverse Conversion", value: "1 ft³ = 0.037037 yd³ (1/27 yd³)" }
  ],
  formula: {
    text: "To convert cubic yards to cubic feet, multiply by 27.",
    math: "Volume (ft³) = Volume (yd³) × 27",
    subtext: "3 ft × 3 ft × 3 ft = 27 ft³ per yd³"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Topsoil Order Breakdown",
        subtitle: "Convert 4.5 cubic yards of topsoil into cubic feet.",
        steps: [
          "Identify volume: 4.5 yd³.",
          "Multiply by 27: 4.5 × 27 = 121.5 ft³.",
          "Result: 4.5 cubic yards equals 121.5 cubic feet."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Yards to Cubic Feet Reference Table",
    headers: ["Cubic Yards (yd³)", "Cubic Feet (ft³)", "Board Feet (FBM)", "Cubic Meters (m³)"],
    rows: [
      { fromVal: "1 yd³", toVal: "27 ft³", extra: "324 FBM", extra2: "0.7646 m³" },
      { fromVal: "2 yd³", toVal: "54 ft³", extra: "648 FBM", extra2: "1.5291 m³" },
      { fromVal: "5 yd³", toVal: "135 ft³", extra: "1,620 FBM", extra2: "3.8228 m³" },
      { fromVal: "10 yd³", toVal: "270 ft³", extra: "3,240 FBM", extra2: "7.6455 m³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Concrete and Landscaping Material Planning",
        text: "Contractors buying bulk concrete or mulch in cubic yards multiply by 27 to calculate how many wheelbarrows or planter boxes (measured in cubic feet) can be filled."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Multiplying by 9 instead of 27: 9 is square feet per square yard, whereas 27 is cubic feet per cubic yard."
    ]
  },
  faqs: [
    {
      question: "How many cubic feet are in 1 cubic yard?",
      answer: "There are exactly 27 cubic feet in 1 cubic yard."
    },
    {
      question: "Why is 1 cubic yard equal to 27 cubic feet?",
      answer: "Because 1 yard equals 3 feet, so a cube 1 yard on each side is 3 ft × 3 ft × 3 ft = 27 ft³."
    },
    {
      question: "How do I convert cubic yards to cubic feet?",
      answer: "Multiply the cubic yard value by 27."
    },
    {
      question: "What is 5 cubic yards in cubic feet?",
      answer: "5 cubic yards equals 135 cubic feet (5 × 27)."
    },
    {
      question: "How many board feet are in 1 cubic yard?",
      answer: "There are 324 board feet in 1 cubic yard (27 ft³ × 12 FBM/ft³)."
    },
    {
      question: "Is cubic yard bigger than cubic foot?",
      answer: "Yes, 1 cubic yard is 27 times larger than 1 cubic foot."
    },
    {
      question: "How many cubic meters are in 1 cubic yard?",
      answer: "1 cubic yard equals approximately 0.764555 cubic meters."
    },
    {
      question: "What is 10 cubic yards in cubic feet?",
      answer: "10 cubic yards equals 270 cubic feet."
    }
  ]
};
