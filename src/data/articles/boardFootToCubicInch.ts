import { CustomArticleData } from "./types";

export const boardFootToCubicInch: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-inch",
  seoTitle: "Board Feet to Cubic Inches Converter (FBM to in³) | UnitsConvertors.com",
  metaDescription: "Convert board feet (FBM) to cubic inches (in³) with absolute accuracy. Learn the exact 144 multiplier, conversion formula, step-by-step examples, and volume reference tables.",
  h1: "Board Feet to Cubic Inches Converter",
  introduction: [
    "Converting board feet (FBM) to cubic inches (in³) translates specialized commercial lumber volume into fundamental imperial linear volume units. Woodworkers, luthiers, CNC machinists, and product designers routinely calculate volume in cubic inches to determine precise raw material requirements, epoxy resin quantities for slab filling, and detailed component weight calculations.",
    "Understanding the exact 144-multiplier conversion from board feet to cubic inches eliminates measurement errors when converting board footage estimates into detailed CAD models or resin pour volume calculations."
  ],
  quickAnswer: {
    text: "There are exactly 144 cubic inches in 1 board foot. To convert board feet to cubic inches, multiply the board foot value by 144.",
    formulaDisplay: "Cubic Inches (in³) = Board Feet (FBM) × 144",
    subtext: "Example: 10 board feet × 144 = 1,440 cubic inches."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (symbol: FBM) is a North American unit of lumber measurement defined as a piece of wood 12 inches long, 12 inches wide, and 1 inch thick (or any equivalent volume of 144 cubic inches)."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Inches (in³)",
    text: "A cubic inch (symbol: in³) is a standard US customary and imperial unit of volume defined as the volume contained within a cube measuring 1 inch on each side. It equals 1/1,728 of a cubic foot or 16.387064 cubic centimeters."
  },
  relationship: "Because a board foot represents a nominal board measuring 12 inches by 12 inches by 1 inch, calculating the product (12 × 12 × 1) gives exactly 144 cubic inches per board foot.",
  relationshipItems: [
    { label: "Exact Ratio", value: "1 FBM = 144 in³" },
    { label: "Inverse Relationship", value: "1 in³ = 0.006944 FBM (1/144 FBM)" },
    { label: "Cubic Foot Relationship", value: "12 FBM = 1,728 in³ = 1 ft³" }
  ],
  formula: {
    text: "To convert board feet to cubic inches, multiply the total board foot value by 144.",
    math: "Volume (in³) = Volume (FBM) × 144",
    subtext: "Derivation: 12 in (length) × 12 in (width) × 1 in (thickness) = 144 in³."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Walnut Slab Resin Infill",
        subtitle: "Convert 3.5 board feet of black walnut wood into cubic inches.",
        steps: [
          "Identify total board feet: 3.5 FBM.",
          "Apply conversion multiplier: Multiply by 144.",
          "Perform calculation: 3.5 × 144 = 504 in³.",
          "Final Result: 3.5 board feet equals exactly 504 cubic inches."
        ]
      },
      {
        title: "Example 2: Custom Cabinet Fabrication",
        subtitle: "Convert 12.5 board feet of cherry lumber into cubic inches.",
        steps: [
          "Identify total board feet: 12.5 FBM.",
          "Apply conversion multiplier: 12.5 × 144 = 1,800 in³.",
          "Final Result: 12.5 board feet equals 1,800 cubic inches."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Inches Reference Table",
    headers: ["Board Feet (FBM)", "Cubic Inches (in³)", "Cubic Feet (ft³)", "Cubic Meters (m³)"],
    rows: [
      { fromVal: "1 FBM", toVal: "144 in³", extra: "0.0833 ft³", extra2: "0.00236 m³" },
      { fromVal: "2 FBM", toVal: "288 in³", extra: "0.1667 ft³", extra2: "0.00472 m³" },
      { fromVal: "5 FBM", toVal: "720 in³", extra: "0.4167 ft³", extra2: "0.01180 m³" },
      { fromVal: "10 FBM", toVal: "1,440 in³", extra: "0.8333 ft³", extra2: "0.02360 m³" },
      { fromVal: "25 FBM", toVal: "3,600 in³", extra: "2.0833 ft³", extra2: "0.05899 m³" },
      { fromVal: "50 FBM", toVal: "7,200 in³", extra: "4.1667 ft³", extra2: "0.11799 m³" },
      { fromVal: "100 FBM", toVal: "14,400 in³", extra: "8.3333 ft³", extra2: "0.23597 m³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Epoxy Resin and Void Filling",
        text: "Fine furniture makers convert wood slab board feet to cubic inches to determine liquid resin casting volumes needed to fill natural voids."
      },
      {
        title: "Precision Wood CNC Machining",
        text: "CAD/CAM programmers convert lumber stock board feet to cubic inches when setting up 3D tooling paths and material removal simulations."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Errors to Avoid",
    items: [
      "Dividing by 144 instead of multiplying when converting board feet to cubic inches.",
      "Confusing board feet with square inches: Board feet measures 3D volume, whereas square inches measures 2D surface area.",
      "Applying nominal lumber dimensions without accounting for planing/surfacing thickness loss when estimating net cubic inches."
    ]
  },
  faqs: [
    {
      question: "How many cubic inches are in 1 board foot?",
      answer: "There are exactly 144 cubic inches in 1 board foot (12 inches × 12 inches × 1 inch)."
    },
    {
      question: "How do I convert board feet to cubic inches?",
      answer: "Multiply the total board foot value by 144. For example, 5 board feet × 144 = 720 cubic inches."
    },
    {
      question: "What is 10 board feet in cubic inches?",
      answer: "10 board feet equals 1,440 cubic inches (10 × 144 = 1,440)."
    },
    {
      question: "Why is 1 board foot equal to 144 cubic inches?",
      answer: "A board foot is defined as 1 foot long by 1 foot wide by 1 inch thick. Since 1 foot equals 12 inches, 12 in × 12 in × 1 in = 144 in³."
    },
    {
      question: "How many cubic inches are in 1 cubic foot?",
      answer: "There are 1,728 cubic inches in 1 cubic foot (12 in × 12 in × 12 in = 1,728 in³)."
    },
    {
      question: "Is 1 board foot smaller than 1 cubic foot in cubic inches?",
      answer: "Yes, 1 board foot is 144 cubic inches, which is 1/12th of a cubic foot (1,728 cubic inches)."
    },
    {
      question: "How do I convert cubic inches back to board feet?",
      answer: "Divide the total cubic inches by 144. For example, 288 cubic inches ÷ 144 = 2 board feet."
    },
    {
      question: "What is 100 cubic inches in board feet?",
      answer: "100 cubic inches equals approximately 0.694 board feet (100 ÷ 144)."
    }
  ]
};
