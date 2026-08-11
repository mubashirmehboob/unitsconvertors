import { CustomArticleData } from "./types";

export const cubicMeterConcreteToCubicYardConcrete: CustomArticleData = {
  fromUnitId: "cubic-meter-concrete",
  toUnitId: "cubic-yard-concrete",
  seoTitle: "Cubic Meter to Cubic Yard Converter (m³ to yd³) | UnitsConvertors.com",
  metaDescription: "Convert cubic meters (m³) to cubic yards (yd³) accurately. Learn the 1.30795 conversion multiplier, formula, step-by-step examples, and concrete purchasing tables.",
  h1: "Cubic Meter to Cubic Yard Converter",
  introduction: [
    "Converting cubic meters (m³) to cubic yards (yd³) translates metric volume specifications into US customary bulk construction units. While international architectural plans, civil engineering blueprints, and European material lists quantify concrete, gravel, and earthworks in cubic meters, North American ready-mix batch plants and aggregate suppliers invoice in cubic yards.",
    "Converting cubic meters to cubic yards guarantees that ready-mix concrete truck orders, foundation pours, and earthmoving subcontracts match exact site specifications without costly volume shortages or overages."
  ],
  quickAnswer: {
    text: "1 cubic meter equals approximately 1.30795062 cubic yards (commonly rounded to 1.30795 yd³). To convert cubic meters to cubic yards, multiply the cubic meter volume by 1.307951.",
    formulaDisplay: "Cubic Yards (yd³) = Cubic Meters (m³) × 1.307951",
    subtext: "Or divide cubic meters by 0.764555 to obtain cubic yards."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Meters (m³)",
    text: "A cubic meter (symbol: m³) is the derived SI metric unit of volume equal to a cube 1 meter (3.28084 feet or 39.3701 inches) on each side. A cubic meter contains 1,000 liters (35.31467 cubic feet). It is the global standard unit for civil engineering, structural concrete, and bulk material transport."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (symbol: yd³) is a US customary unit of volume representing a cube 3 feet (36 inches) on each edge. A single cubic yard contains 27 cubic feet (0.764555 m³). It is the universal trading unit for buying ready-mix concrete, topsoil, crushed stone, and excavation in the United States."
  },
  relationship: "Because 1 meter equals 1.0936133 yards, 1 cubic meter equals (1.0936133 yd)³ = 1.30795062 cubic yards.",
  relationshipItems: [
    { label: "Cubic Meter in Cubic Yards", value: "1 m³ = 1.307951 yd³" },
    { label: "Cubic Yard in Cubic Meters", value: "1 yd³ = 0.764555 m³" },
    { label: "10 m³ Batch in Cubic Yards", value: "10 m³ = 13.07951 yd³" }
  ],
  formula: {
    text: "To convert cubic meters to cubic yards, multiply the volume in cubic meters by 1.307951, or divide by 0.764555.",
    math: "Volume (yd³) = Volume (m³) × 1.307951",
    subtext: "Derivation: 1 m³ = (1 / 0.764554857984) yd³ = 1.30795062 yd³"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Metric Foundation Plan Conversion",
        subtitle: "Convert a metric foundation requirement of 15 cubic meters into cubic yards for US ready-mix ordering.",
        steps: [
          "Identify volume in cubic meters: 15.0 m³.",
          "Apply conversion formula: Multiply by 1.307951.",
          "Perform calculation: 15.0 × 1.307951 = 19.619265 yd³.",
          "Final Result: 15 cubic meters requires ordering 19.62 cubic yards of concrete (round up to 20 yd³ for site waste)."
        ]
      },
      {
        title: "Example 2: Trench Excavation Quantity",
        subtitle: "Convert 100 cubic meters of excavated trench soil into cubic yards.",
        steps: [
          "Identify volume: 100 m³.",
          "Apply conversion formula: 100 × 1.307951 = 130.7951 yd³.",
          "Final Result: 100 cubic meters equals 130.80 cubic yards."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Meters to Cubic Yards Reference Table",
    headers: ["Cubic Meters (m³)", "Liters (L)", "Cubic Feet (ft³)", "Cubic Yards (yd³)"],
    rows: [
      { fromVal: "1 m³", toVal: "1,000 L", extra: "35.31 ft³", extra2: "1.308 yd³" },
      { fromVal: "5 m³", toVal: "5,000 L", extra: "176.57 ft³", extra2: "6.540 yd³" },
      { fromVal: "10 m³", toVal: "10,000 L", extra: "353.15 ft³", extra2: "13.080 yd³" },
      { fromVal: "20 m³", toVal: "20,000 L", extra: "706.29 ft³", extra2: "26.159 yd³" },
      { fromVal: "50 m³", toVal: "50,000 L", extra: "1,765.73 ft³", extra2: "65.398 yd³" },
      { fromVal: "100 m³", toVal: "100,000 L", extra: "3,531.47 ft³", extra2: "130.795 yd³" },
      { fromVal: "500 m³", toVal: "500,000 L", extra: "17,657.33 ft³", extra2: "653.975 yd³" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Ready-Mix Concrete Ordering",
        text: "Contractors working from European engineering drawings convert metric structural pour schedules into US concrete truck yardages."
      },
      {
        title: "Heavy Civil Earthworks",
        text: "Site managers converting international cut-and-fill balances into imperial truckload yards for US hauling subcontractors."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Forgetting to add standard concrete waste factor (typically 5–10%) after converting exact mathematical volume.",
      "Conflating linear meters to linear yards (1.0936) with volume cubic meters to cubic yards (1.30795)."
    ]
  },
  faqs: [
    {
      question: "How many cubic yards are in 1 cubic meter?",
      answer: "There are approximately 1.30795062 cubic yards in 1 cubic meter. To convert cubic meters to cubic yards, multiply the cubic meter figure by 1.307951."
    },
    {
      question: "What is the formula to convert cubic meters to cubic yards?",
      answer: "The formula is: Cubic Yards = Cubic Meters × 1.307951. Alternatively, Cubic Yards = Cubic Meters ÷ 0.764555."
    },
    {
      question: "What is 10 cubic meters in cubic yards?",
      answer: "10 cubic meters equals 13.0795 cubic yards (or approximately 13.08 yd³)."
    },
    {
      question: "Why is a cubic meter larger than a cubic yard?",
      answer: "A meter (39.37 inches) is longer than a yard (36 inches). Cubing both measurements makes 1 m³ (35.315 ft³) roughly 30.8% larger than 1 yd³ (27 ft³)."
    },
    {
      question: "How do I calculate concrete truck loads from metric plans?",
      answer: "Convert your concrete volume in m³ to yd³ by multiplying by 1.307951. Then divide by the truck capacity (usually 9 or 10 yd³ per truck)."
    },
    {
      question: "How many cubic feet are in 1 cubic meter?",
      answer: "There are exactly 35.3146667 cubic feet in 1 cubic meter. Dividing 35.3146667 by 27 gives 1.30795062 cubic yards."
    }
  ],
  relatedList: [
    { label: "Cubic Yard to Cubic Meter", from: "cubic-yard-concrete", to: "cubic-meter-concrete" },
    { label: "Board Feet to Cubic Meter", from: "board-foot", to: "cubic-meter-concrete" },
    { label: "Cubic Meter to Board Feet", from: "cubic-meter-concrete", to: "board-foot" },
    { label: "Board Feet to Cubic Yard", from: "board-foot", to: "cubic-yard-concrete" }
  ],
  references: [
    "BIPM - International Bureau of Weights and Measures: SI Units.",
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "American Concrete Institute (ACI) Manual of Concrete Practice."
  ]
};
