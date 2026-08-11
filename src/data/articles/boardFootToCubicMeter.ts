import { CustomArticleData } from "./types";

export const boardFootToCubicMeter: CustomArticleData = {
  fromUnitId: "board-foot",
  toUnitId: "cubic-meter",
  seoTitle: "Board Feet to Cubic Meters Converter (FBM to m³) | UnitsConvertors.com",
  metaDescription: "Convert board feet (FBM) to cubic meters (m³) accurately. Learn the exact 0.002359737 multiplier, conversion formula, worked examples, and timber volume tables.",
  h1: "Board Feet to Cubic Meters Converter",
  introduction: [
    "Converting board feet (FBM) to cubic meters (m³) bridges the gap between North American imperial lumber trade standards and international metric forestry and construction specifications. Board measure quantifies commercial lumber in North America, while cubic meters serve as the global SI standard for wood volume across Europe, Asia, and international shipping.",
    "Accurate conversion between board feet and cubic meters is essential for timber exporters, forestry researchers, customs clearance agents, and international construction firms managing global lumber supply chains."
  ],
  quickAnswer: {
    text: "1 board foot equals approximately 0.002359737 cubic meters (m³). Conversely, 1 cubic meter equals approximately 423.776 board feet. To convert board feet to cubic meters, multiply the board foot value by 0.002359737 (or divide by 423.776).",
    formulaDisplay: "Cubic Meters (m³) = Board Feet (FBM) × 0.002359737",
    subtext: "Or divide board feet by 423.776000657 to calculate volume in cubic meters."
  },
  aboutSourceUnit: {
    title: "Understanding Board Feet (FBM)",
    text: "A board foot (FBM) is a traditional unit of lumber volume in the United States and Canada representing a piece of wood 1 foot long, 1 foot wide, and 1 inch thick (144 cubic inches)."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters (m³)",
    text: "A cubic meter (m³) is the primary SI unit of volume defined as the volume enclosed by a cube with edges 1 meter in length. It equals 1,000 liters, approximately 35.3147 cubic feet, or 1.30795 cubic yards."
  },
  relationship: "Because 1 board foot equals 144 cubic inches and 1 cubic inch equals 0.000016387064 m³, multiplying 144 by 0.000016387064 yields exactly 0.002359737216 m³ per board foot.",
  relationshipItems: [
    { label: "Exact Metric Equivalent", value: "1 FBM = 0.002359737216 m³" },
    { label: "Inverse Board Feet Factor", value: "1 m³ = 423.776 FBM" },
    { label: "SI Base Relation", value: "1 FBM = 2.359737216 dm³ (liters)" }
  ],
  formula: {
    text: "To convert board feet to cubic meters, multiply the total board footage by 0.002359737.",
    math: "Volume (m³) = Volume (FBM) × 0.002359737",
    subtext: "Or: Volume (m³) = Volume (FBM) ÷ 423.776"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Export Timber Manifest",
        subtitle: "Convert 1,000 board feet of oak lumber into cubic meters.",
        steps: [
          "Identify board feet volume: 1,000 FBM.",
          "Apply conversion multiplier: 0.002359737.",
          "Perform calculation: 1,000 × 0.002359737 = 2.3597 m³.",
          "Final Result: 1,000 board feet equals approximately 2.36 cubic meters."
        ]
      },
      {
        title: "Example 2: Sawmill Container Load",
        subtitle: "Convert 8,475 board feet of softwood framing lumber into cubic meters.",
        steps: [
          "Identify board feet volume: 8,475 FBM.",
          "Apply conversion formula: 8,475 ÷ 423.776 = 20.00 m³.",
          "Final Result: 8,475 board feet equals 20.00 cubic meters."
        ]
      }
    ]
  },
  table: {
    title: "Board Feet to Cubic Meters Conversion Table",
    headers: ["Board Feet (FBM)", "Cubic Meters (m³)", "Liters (L)", "Cubic Feet (ft³)"],
    rows: [
      { fromVal: "1 FBM", toVal: "0.002360 m³", extra: "2.3597 L", extra2: "0.0833 ft³" },
      { fromVal: "10 FBM", toVal: "0.023597 m³", extra: "23.597 L", extra2: "0.8333 ft³" },
      { fromVal: "100 FBM", toVal: "0.235974 m³", extra: "235.97 L", extra2: "8.3333 ft³" },
      { fromVal: "423.78 FBM", toVal: "1.000000 m³", extra: "1,000 L", extra2: "35.315 ft³" },
      { fromVal: "1,000 FBM", toVal: "2.359737 m³", extra: "2,359.7 L", extra2: "83.333 ft³" },
      { fromVal: "5,000 FBM", toVal: "11.79869 m³", extra: "11,798.7 L", extra2: "416.67 ft³" },
      { fromVal: "10,000 FBM", toVal: "23.59737 m³", extra: "23,597.4 L", extra2: "833.33 ft³" }
    ]
  },
  applications: {
    title: "Global Industry Applications",
    items: [
      {
        title: "International Lumber Trade",
        text: "Exporters shipping North American timber to European or Asian markets convert board footage to cubic meters to comply with international freight tariffs and metric customs declarations."
      },
      {
        title: "Global Forestry Research",
        text: "Forestry scientists convert timber harvest reports from board feet to cubic meters to standardise global biomass and carbon accounting metrics."
      }
    ]
  },
  pitfalls: {
    title: "Common Errors to Avoid",
    items: [
      "Confusing square meters with cubic meters: Board feet represents 3D volume, so the target unit must be volumetric (m³).",
      "Using imprecise rounding for large shipments: Deviations in decimal places can accumulate into multi-cubic-meter discrepancies on bulk orders.",
      "Conflating log scaling rules (e.g. Doyle or Scribner board foot rules) with net sawn lumber volume."
    ]
  },
  faqs: [
    {
      question: "How many cubic meters are in 1 board foot?",
      answer: "1 board foot equals exactly 0.002359737216 cubic meters (approximately 0.00236 m³)."
    },
    {
      question: "How many board feet are in 1 cubic meter?",
      answer: "1 cubic meter equals approximately 423.776 board feet."
    },
    {
      question: "What is the formula to convert board feet to cubic meters?",
      answer: "Multiply board feet by 0.002359737, or divide board feet by 423.776."
    },
    {
      question: "How do I convert 1,000 board feet (1 MBF) to cubic meters?",
      answer: "Multiply 1,000 by 0.002359737 to get 2.3597 cubic meters."
    },
    {
      question: "Why is 1 cubic meter equal to ~424 board feet?",
      answer: "1 m³ equals 35.3147 cubic feet. Since 1 cubic foot equals 12 board feet, 35.3147 × 12 = 423.776 board feet."
    },
    {
      question: "What is the relation between board feet, cubic meters, and liters?",
      answer: "1 board foot equals 2.3597 liters, because 1 cubic meter contains 1,000 liters."
    },
    {
      question: "Is board foot to cubic meter a direct conversion?",
      answer: "Yes, both units measure 3D volume, allowing a direct mathematical conversion."
    },
    {
      question: "Why do European lumber buyers specify cubic meters?",
      answer: "European trade uses the SI metric system where cubic meters is the standard unit for all structural, industrial, and raw material volumes."
    }
  ]
};
