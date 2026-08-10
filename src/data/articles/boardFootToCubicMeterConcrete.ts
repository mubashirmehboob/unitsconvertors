import { CustomArticleData } from "./types";

export const boardFootToCubicMeterConcrete: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-meter-concrete",
  seoTitle: "Board Feet to Cubic Meter Converter - FBM to m³",
  metaDescription: "Convert board feet (FBM) to cubic meters (m³) for international timber shipping and structural engineering. Includes exact volume formulas, metric tables, and worked examples.",
  h1: "Board Feet to Cubic Meter Converter",
  introduction: [
    "Converting board feet (FBM) to cubic meters (m³) bridges US timber trade volume standards with international metric building codes. While North America buys and sells lumber by board feet, global freight logistics, scientific forestry, and European building regulations quantify wood volume in cubic meters.",
    "This reference guide provides exact scientific conversion ratios, step-by-step arithmetic examples, and reference tables for converting North American board feet into metric cubic meters."
  ],
  quickAnswer: {
    text: "One board foot equals exactly 0.002359737216 cubic meters (approximately 0.00236 m³). Conversely, one cubic meter contains approximately 423.776 board feet.",
    formulaDisplay: "Cubic Meters (m³) = Board Feet (FBM) × 0.002359737",
    subtext: "To convert board feet to cubic meters, multiply the board feet value by 0.002359737 (or divide by 423.776)."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (FBM) is a unit of volume in the North American lumber industry equal to 1 foot wide, 1 foot long, and 1 inch thick (144 cubic inches). It measures raw timber and processed lumber volumes."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters (m³)",
    text: "A cubic meter (m³) is the SI base unit of volume, defined by a cube with 1-meter dimensions on all edges (~35.3147 cubic feet). It is the standard unit for global freight logistics, concrete batching, and European timber accounting."
  },
  relationship: "Because 1 inch = 0.0254 m and 1 foot = 0.3048 m, 1 board foot = 0.3048 × 0.3048 × 0.0254 = 0.002359737216 m³. One cubic meter contains 423.776 board feet.",
  relationshipItems: [
    { label: "Board Feet to Cubic Meters", value: "1 FBM = 0.002359737 m³" },
    { label: "Cubic Meters to Board Feet", value: "1 m³ = 423.776 FBM" }
  ],
  formula: {
    text: "To convert board feet to cubic meters, multiply the volume in board feet by 0.002359737, or divide by 423.776.",
    math: "Cubic Meters (m³) = Board Feet (FBM) × 0.002359737",
    subtext: "For division: Cubic Meters = Board Feet / 423.776"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Exporting Softwood Lumber Container",
        subtitle: "Convert a shipping order of 15,000 board feet of Douglas Fir into cubic meters.",
        steps: [
          "Identify volume in board feet: 15,000 FBM.",
          "Apply formula: Multiply by 0.002359737.",
          "Perform calculation: 15,000 × 0.002359737 = 35.396055 m³.",
          "Final Result: 15,000 board feet equals approximately 35.40 cubic meters."
        ]
      },
      {
        title: "Example 2: Hardwood Furniture Batch Order",
        subtitle: "Convert 848 board feet of kiln-dried maple lumber into cubic meters.",
        steps: [
          "Identify volume: 848 FBM.",
          "Apply formula: Divide by 423.776.",
          "Calculate: 848 / 423.776 = 2.001 m³.",
          "Final Result: 848 board feet is equivalent to approximately 2.00 cubic meters."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Meters Reference Table",
    headers: ["Board Feet (FBM)", "Cubic Feet (ft³)", "Cubic Meters (m³)", "Logistics Volume"],
    rows: [
      { fromVal: "100", toVal: "8.33 ft³", extra: "0.236 m³", extra2: "Small retail pallet" },
      { fromVal: "250", toVal: "20.83 ft³", extra: "0.590 m³", extra2: "Workshop batch" },
      { fromVal: "423.78", toVal: "35.31 ft³", extra: "1.000 m³", extra2: "Exactly 1 cubic meter" },
      { fromVal: "1,000", toVal: "83.33 ft³", extra: "2.360 m³", extra2: "Standard lumber lift" },
      { fromVal: "5,000", toVal: "416.67 ft³", extra: "11.799 m³", extra2: "Flatbed truck parcel" },
      { fromVal: "10,000", toVal: "833.33 ft³", extra: "23.597 m³", extra2: "Half ocean container" },
      { fromVal: "20,000", toVal: "1,666.67 ft³", extra: "47.195 m³", extra2: "Full 40ft High-Cube container" }
    ]
  },
  applications: {
    title: "Global Forestry & Freight Uses",
    items: [
      {
        title: "International Timber Shipping",
        text: "Customs declaration forms for overseas lumber trade require reporting net solid volume in cubic meters."
      },
      {
        title: "Carbon Accounting & Forestry Research",
        text: "Environmental research models convert harvested timber volumes from board feet into cubic meters to calculate biomass carbon storage."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing nominal wood board feet with actual solid net wood volume after planing.",
      "Using simple approximations like 400 FBM/m³ instead of the exact 423.776 factor when calculating large shipping container volumes."
    ]
  },
  faqs: [
    {
      question: "How many cubic meters are in 1 board foot?",
      answer: "One board foot equals exactly 0.002359737216 cubic meters (~0.00236 m³)."
    },
    {
      question: "How many board feet are in 1 cubic meter?",
      answer: "One cubic meter contains approximately 423.776 board feet."
    },
    {
      question: "What is the formula to convert board feet to cubic meters?",
      answer: "Multiply total board feet by 0.002359737, or divide total board feet by 423.776."
    },
    {
      question: "How many cubic meters are in 1,000 board feet (1 MBF)?",
      answer: "One thousand board feet (1 MBF) equals approximately 2.3597 cubic meters."
    },
    {
      question: "Why does international trade use cubic meters for lumber?",
      answer: "The cubic meter is the standard SI metric unit recognized worldwide by customs agencies, ISO standards, and shipping lines."
    },
    {
      question: "How do I convert MBF (thousand board feet) to cubic meters?",
      answer: "Multiply MBF by 2.359737. For example, 10 MBF = 23.597 cubic meters."
    },
    {
      question: "Does log scale board feet equal lumber board feet in cubic meters?",
      answer: "Log scale rules (Scribner, Doyle) estimate usable lumber volume, not total log cylinder volume. When converting raw logs, kerf loss must be factored in."
    },
    {
      question: "How many board feet fit in a standard 40-foot shipping container?",
      answer: "A 40-foot High-Cube shipping container holds ~65 to 70 m³ gross space, which translates to roughly 20,000 to 25,000 board feet of packaged lumber."
    }
  ],
  relatedList: [
    { label: "Board Feet to Cubic Yard", from: "board-foot", to: "cubic-yard-concrete" },
    { label: "Cubic Yard to Board Feet", from: "cubic-yard-concrete", to: "board-foot" },
    { label: "Sq Foot to Sq Meter", from: "sq-foot-construction", to: "sq-meter-construction" },
    { label: "Sq Meter to Sq Foot", from: "sq-meter-construction", to: "sq-foot-construction" }
  ],
  references: [
    "FAO Forestry Department. <em>Forest Products Conversion Factors</em>, Food and Agriculture Organization of the United Nations.",
    "BIPM. <em>The International System of Units (SI Brochure)</em>, 9th edition."
  ]
};
