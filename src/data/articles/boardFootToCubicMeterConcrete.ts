import { CustomArticleData } from "./types";

export const boardFootToCubicMeterConcrete: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-meter-concrete",
  seoTitle: "Board Feet to Cubic Meter Converter (FBM to m³) | UnitsConvertors.com",
  metaDescription: "Convert board feet (FBM) to cubic meters (m³) instantly. Master the 0.002359737 conversion factor, formula, worked calculations, and lumber export tables.",
  h1: "Board Feet to Cubic Meter Converter",
  introduction: [
    "Converting board feet (FBM) to cubic meters (m³) connects traditional North American lumber specifications with international metric timber trade standards. While sawmills in the United States and Canada quote hardwood and softwood lumber volumes in board feet, European, Asian, and global construction markets operate exclusively in cubic meters.",
    "Accurately translating board footage into metric cubic meters is essential for timber export invoices, international shipping container planning, and cross-border structural engineering calculations."
  ],
  quickAnswer: {
    text: "1 board foot equals exactly 0.002359737216 cubic meters. Conversely, 1 cubic meter contains approximately 423.776 board feet. To convert board feet to cubic meters, multiply the board foot total by 0.002359737.",
    formulaDisplay: "Cubic Meters (m³) = Board Feet (FBM) × 0.002359737",
    subtext: "Or divide board feet by 423.776 to obtain cubic meters."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (symbol: FBM) is the standard volume measure in the North American lumber industry. It equals a nominal piece of wood measuring 1 foot long by 1 foot wide by 1 inch thick, corresponding to 144 cubic inches (1/12 ft³)."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters (m³)",
    text: "A cubic meter (symbol: m³) is the coherent SI derived unit of volume. It represents a cube measuring 1 meter on every side (1 m × 1 m × 1 m = 1,000 liters = 35.3147 ft³). It is the global standard for timber, concrete, and soil volume measurement."
  },
  relationship: "1 board foot corresponds to 1/12 of a cubic foot. Since 1 cubic foot equals 0.028316846592 cubic meters, dividing 0.028316846592 by 12 gives exactly 0.002359737216 m³ per board foot.",
  relationshipItems: [
    { label: "Exact Board Foot in Metric", value: "1 FBM = 0.002359737 m³" },
    { label: "Cubic Meter in Board Feet", value: "1 m³ ≈ 423.776 FBM" },
    { label: "Thousand Board Feet (MBF)", value: "1 MBF ≈ 2.359737 m³" }
  ],
  formula: {
    text: "To convert board feet to cubic meters, multiply the board feet by 0.002359737, or divide by 423.776.",
    math: "Volume (m³) = Volume (FBM) × 0.002359737",
    subtext: "Mathematical derivation: 1 FBM = 144 in³; 144 × 0.000016387064 m³/in³ = 0.002359737 m³"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Timber Export Shipment",
        subtitle: "Convert a load of 5,000 board feet of oak lumber into cubic meters.",
        steps: [
          "Identify volume in board feet: 5,000 FBM.",
          "Apply conversion formula: Multiply by 0.002359737.",
          "Perform calculation: 5,000 × 0.002359737 = 11.798685 m³.",
          "Final Result: 5,000 board feet equals approximately 11.80 cubic meters."
        ]
      },
      {
        title: "Example 2: Milled Beam Volume Calculation",
        subtitle: "Convert 424 board feet of Douglas fir timber to metric cubic meters.",
        steps: [
          "Identify volume: 424 FBM.",
          "Apply conversion formula: 424 ÷ 423.776 = 1.0005 m³.",
          "Final Result: 424 board feet is virtually identical to 1.00 cubic meter."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Meters Conversion Reference Table",
    headers: ["Board Feet (FBM)", "Equivalent MBF", "Cubic Meters (m³)", "Liters (L)"],
    rows: [
      { fromVal: "100 FBM", toVal: "0.1 MBF", extra: "0.236 m³", extra2: "235.97 L" },
      { fromVal: "423.78 FBM", toVal: "0.424 MBF", extra: "1.000 m³", extra2: "1,000.00 L" },
      { fromVal: "500 FBM", toVal: "0.5 MBF", extra: "1.180 m³", extra2: "1,179.87 L" },
      { fromVal: "1,000 FBM", toVal: "1.0 MBF", extra: "2.360 m³", extra2: "2,359.74 L" },
      { fromVal: "2,500 FBM", toVal: "2.5 MBF", extra: "5.899 m³", extra2: "5,899.34 L" },
      { fromVal: "5,000 FBM", toVal: "5.0 MBF", extra: "11.799 m³", extra2: "11,798.69 L" },
      { fromVal: "10,000 FBM", toVal: "10.0 MBF", extra: "23.597 m³", extra2: "23,597.37 L" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "International Timber Commerce",
        text: "Exporters converting US lumber tallies (MBF) into metric cubic meters for customs declarations and European import documentation."
      },
      {
        title: "Structural Engineering & Mass Timber",
        text: "Design teams integrating North American sawn lumber specs into international finite element modeling software operating in SI units."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Confusing MBF (Thousand Board Feet) with single board feet: 1 MBF equals 2.3597 m³, not 0.00236 m³.",
      "Conflating nominal lumber dimensions with actual dressed timber sizes during initial volume tallying.",
      "Rounding the conversion factor too aggressively (e.g. using 0.0024) on large industrial shipments."
    ]
  },
  faqs: [
    {
      question: "How many cubic meters are in a board foot?",
      answer: "One board foot contains exactly 0.002359737216 cubic meters. To convert board feet to cubic meters, multiply the board feet by 0.002359737."
    },
    {
      question: "How many board feet are in 1 cubic meter?",
      answer: "There are approximately 423.776 board feet in 1 cubic meter. To convert cubic meters to board feet, multiply the cubic meter value by 423.776."
    },
    {
      question: "What is 1,000 board feet (1 MBF) in cubic meters?",
      answer: "One thousand board feet (1 MBF) equals approximately 2.3597 cubic meters (or about 2.36 m³)."
    },
    {
      question: "What is the exact formula for converting board feet to cubic meters?",
      answer: "The formula is: Cubic Meters = Board Feet × 0.002359737. Alternatively, Cubic Meters = Board Feet ÷ 423.776."
    },
    {
      question: "Why do lumber traders use board feet instead of cubic meters in the US?",
      answer: "The North American timber industry historically standardized on board footage because it directly reflects 1-inch thick board measure, whereas global markets adopted the metric cubic meter under the SI system."
    },
    {
      question: "How do I calculate board feet from board dimensions in inches?",
      answer: "Multiply Length (feet) × Width (inches) × Thickness (inches) and divide by 12. Once you have total board feet, multiply by 0.002359737 to convert to cubic meters."
    }
  ],
  relatedList: [
    { label: "Board Feet to Cubic Yard", from: "board-foot", to: "cubic-yard-concrete" },
    { label: "Cubic Meter to Board Feet", from: "cubic-meter-concrete", to: "board-foot" },
    { label: "Cubic Meter to Cubic Yard", from: "cubic-meter-concrete", to: "cubic-yard-concrete" },
    { label: "Cubic Yard to Board Feet", from: "cubic-yard-concrete", to: "board-foot" }
  ],
  references: [
    "BIPM - International Bureau of Weights and Measures: The International System of Units (SI).",
    "USDA Forest Service Forest Products Laboratory: Wood Handbook—Wood as an Engineering Material.",
    "Food and Agriculture Organization (FAO) Timber Bulletin: Forest Products Conversion Factors."
  ]
};
