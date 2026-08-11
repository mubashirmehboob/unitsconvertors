import { CustomArticleData } from "./types";

export const cubicFootToCubicInch: CustomArticleData = {
  fromUnitId: "cubic-foot",
  toUnitId: "cubic-inch",
  seoTitle: "Cubic Feet to Cubic Inches Converter (ft³ to in³) | UnitsConvertors.com",
  metaDescription: "Convert cubic feet (ft³) to cubic inches (in³) accurately. Learn the exact 1,728 multiplier, conversion formula, step-by-step examples, and volume reference tables.",
  h1: "Cubic Feet to Cubic Inches Converter",
  introduction: [
    "Converting cubic feet (ft³) to cubic inches (in³) translates bulk US customary volume into small-scale high-precision volumetric dimensions. Mechanical engineers, automotive engine designers, packaging specialists, and fluid dynamics technicians convert cubic feet to cubic inches when calculating internal engine displacements, vessel capacities, and molded part volumes.",
    "Understanding the exact 1,728-multiplier relationship between cubic feet and cubic inches ensures accurate volumetric modeling across industrial engineering and manufacturing workflows."
  ],
  quickAnswer: {
    text: "There are exactly 1,728 cubic inches in 1 cubic foot. To convert cubic feet to cubic inches, multiply the cubic foot value by 1,728.",
    formulaDisplay: "Cubic Inches (in³) = Cubic Feet (ft³) × 1,728",
    subtext: "Example: 2 cubic feet × 1,728 = 3,456 cubic inches."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Feet (ft³)",
    text: "A cubic foot (symbol: ft³) is a standard imperial and US customary unit of volume defined as a cube measuring 1 foot (12 inches) on each side. It equals 1,728 cubic inches, 0.0283168 cubic meters, or 28.3168 liters."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Inches (in³)",
    text: "A cubic inch (symbol: in³) is a small imperial and US customary unit of volume defined as the volume contained within a cube measuring 1 inch on each side. It equals 1/1,728 of a cubic foot or 16.387064 cubic centimeters."
  },
  relationship: "Because 1 foot equals 12 inches, cubing 12 (12 in × 12 in × 12 in) gives exactly 1,728 cubic inches per cubic foot.",
  relationshipItems: [
    { label: "Exact Ratio", value: "1 ft³ = 1,728 in³" },
    { label: "Inverse Cubic Foot Value", value: "1 in³ = 0.0005787 ft³ (1/1,728 ft³)" },
    { label: "Board Foot Relation", value: "1 ft³ = 12 FBM (1 FBM = 144 in³)" }
  ],
  formula: {
    text: "To convert cubic feet to cubic inches, multiply the total cubic feet by 1,728.",
    math: "Volume (in³) = Volume (ft³) × 1,728",
    subtext: "Derivation: 12 in × 12 in × 12 in = 1,728 in³."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Internal Enclosure Volume",
        subtitle: "Convert 2.5 cubic feet of electrical cabinet space into cubic inches.",
        steps: [
          "Identify volume in cubic feet: 2.5 ft³.",
          "Apply conversion multiplier: Multiply by 1,728.",
          "Perform calculation: 2.5 × 1,728 = 4,320 in³.",
          "Final Result: 2.5 cubic feet equals 4,320 cubic inches."
        ]
      },
      {
        title: "Example 2: Automotive Trunk Storage",
        subtitle: "Convert 15 cubic feet of trunk volume into cubic inches.",
        steps: [
          "Identify volume in cubic feet: 15 ft³.",
          "Apply conversion formula: 15 × 1,728 = 25,920 in³.",
          "Final Result: 15 cubic feet equals 25,920 cubic inches."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Feet to Cubic Inches Reference Table",
    headers: ["Cubic Feet (ft³)", "Cubic Inches (in³)", "Board Feet (FBM)", "Cubic Meters (m³)"],
    rows: [
      { fromVal: "0.1 ft³", toVal: "172.8 in³", extra: "1.2 FBM", extra2: "0.00283 m³" },
      { fromVal: "0.5 ft³", toVal: "864.0 in³", extra: "6.0 FBM", extra2: "0.01416 m³" },
      { fromVal: "1 ft³", toVal: "1,728 in³", extra: "12 FBM", extra2: "0.02832 m³" },
      { fromVal: "2 ft³", toVal: "3,456 in³", extra: "24 FBM", extra2: "0.05663 m³" },
      { fromVal: "5 ft³", toVal: "8,640 in³", extra: "60 FBM", extra2: "0.14158 m³" },
      { fromVal: "10 ft³", toVal: "17,280 in³", extra: "120 FBM", extra2: "0.28317 m³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Engine Displacement & Combustion Engineering",
        text: "Automotive engineers convert cylinder bank dimensions from cubic feet to cubic inches when modeling total engine stroke displacement."
      },
      {
        title: "Precision Mold & Container Manufacturing",
        text: "Plastic injection molding technicians convert bulk shipping container specs in cubic feet into cubic inches for mold cavity tooling design."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Errors to Avoid",
    items: [
      "Multiplying by 144 instead of 1,728: 144 is the square inch conversion factor for square feet, whereas 1,728 is required for cubic volume.",
      "Dividing by 1,728 when converting cubic feet to cubic inches instead of multiplying.",
      "Confusing cubic inches with fluid ounces or liquid volume measures."
    ]
  },
  faqs: [
    {
      question: "How many cubic inches are in 1 cubic foot?",
      answer: "There are exactly 1,728 cubic inches in 1 cubic foot."
    },
    {
      question: "What is the formula to convert cubic feet to cubic inches?",
      answer: "Multiply the cubic foot value by 1,728."
    },
    {
      question: "Why are there 1,728 cubic inches in a cubic foot?",
      answer: "Because 1 foot equals 12 inches. A cubic foot measures 12 in × 12 in × 12 in = 1,728 in³."
    },
    {
      question: "What is 5 cubic feet in cubic inches?",
      answer: "5 cubic feet multiplied by 1,728 equals 8,640 cubic inches."
    },
    {
      question: "How do you convert cubic inches back to cubic feet?",
      answer: "Divide the total cubic inches by 1,728. For example, 3,456 in³ ÷ 1,728 = 2 ft³."
    },
    {
      question: "How many board feet are in 1,728 cubic inches?",
      answer: "1,728 cubic inches (1 cubic foot) equals exactly 12 board feet."
    },
    {
      question: "What is 0.5 cubic feet in cubic inches?",
      answer: "0.5 cubic feet multiplied by 1,728 equals 864 cubic inches."
    },
    {
      question: "Is 1,728 cubic inches equal to 1 cubic foot?",
      answer: "Yes, exactly."
    }
  ]
};
