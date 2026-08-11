import { CustomArticleData } from "./types";

export const cubicYardConcreteToCubicMeterConcrete: CustomArticleData = {
  fromUnitId: "cubic-yard-concrete",
  toUnitId: "cubic-meter-concrete",
  seoTitle: "Cubic Yard to Cubic Meter Converter (yd³ to m³) | UnitsConvertors.com",
  metaDescription: "Convert cubic yards (yd³) to cubic meters (m³) for international construction estimates. Calculate ready-mix concrete and soil volumes using 1 yd³ = 0.764555 m³.",
  h1: "Cubic Yard to Cubic Meter Converter",
  introduction: [
    "Converting cubic yards (yd³) to cubic meters (m³) bridges US customary bulk construction measurements with international metric building standards. While American ready-mix suppliers, earthmoving contractors, and aggregate quarries quote volume in cubic yards, global engineering codes and international project tenders specify volume in cubic meters.",
    "Accurately converting cubic yards to cubic meters is essential when submitting cross-border engineering tenders, ordering concrete for international projects, or reporting material volumes in metric civil engineering units."
  ],
  quickAnswer: {
    text: "1 cubic yard equals exactly 0.764554857984 cubic meters (commonly rounded to 0.764555 m³). To convert cubic yards to cubic meters, multiply the cubic yard total by 0.764555.",
    formulaDisplay: "Cubic Meters (m³) = Cubic Yards (yd³) × 0.764555",
    subtext: "Or divide cubic yards by 1.307951 to calculate cubic meters."
  },
  aboutSourceUnit: {
    title: "Understanding Cubic Yards (yd³)",
    text: "A cubic yard (symbol: yd³) is a US customary and imperial unit of three-dimensional volume equal to a cube measuring 3 feet (36 inches or 0.9144 meters) on each side. A single cubic yard contains 27 cubic feet (46,656 cubic inches). It is the standard unit for buying ready-mix concrete, sand, gravel, topsoil, and mulch in North America."
  },
  aboutTargetUnit: {
    title: "Understanding Cubic Meters (m³)",
    text: "A cubic meter (symbol: m³) is the SI base derived unit of volume representing a cube 1 meter on each edge (1 m × 1 m × 1 m = 1,000 liters or 35.31467 cubic feet). It is the primary metric measurement for structural concrete, earthwork excavation, and industrial volumetric capacity worldwide."
  },
  relationship: "Because 1 yard equals exactly 0.9144 meters, 1 cubic yard equals (0.9144)³ = 0.764554857984 cubic meters.",
  relationshipItems: [
    { label: "Cubic Yard in Cubic Meters", value: "1 yd³ = 0.764555 m³" },
    { label: "Cubic Meter in Cubic Yards", value: "1 m³ = 1.307951 yd³" },
    { label: "10 Cubic Yards Batch", value: "10 yd³ = 7.64555 m³" }
  ],
  formula: {
    text: "To convert cubic yards to cubic meters, multiply the cubic yard value by 0.764555, or divide by 1.307951.",
    math: "Volume (m³) = Volume (yd³) × 0.764555",
    subtext: "Derivation: 1 yd³ = (0.9144 m)³ = 0.764554857984 m³"
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Ready-Mix Concrete Order Translation",
        subtitle: "Convert a 10 cubic yard ready-mix concrete truck load into metric cubic meters.",
        steps: [
          "Identify volume in cubic yards: 10 yd³.",
          "Apply conversion formula: Multiply by 0.764555.",
          "Perform calculation: 10 × 0.764555 = 7.64555 m³.",
          "Final Result: A 10 cubic yard truck delivery equals 7.65 cubic meters of concrete."
        ]
      },
      {
        title: "Example 2: Foundation Excavation Volume",
        subtitle: "Convert 250 cubic yards of soil excavation into cubic meters.",
        steps: [
          "Identify volume: 250 yd³.",
          "Apply conversion formula: 250 × 0.764555 = 191.13875 m³.",
          "Final Result: 250 cubic yards of excavation equals 191.14 cubic meters."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Yards to Cubic Meters Reference Table",
    headers: ["Cubic Yards (yd³)", "Cubic Feet (ft³)", "Cubic Meters (m³)", "Liters (L)"],
    rows: [
      { fromVal: "1 yd³", toVal: "27 ft³", extra: "0.765 m³", extra2: "764.55 L" },
      { fromVal: "5 yd³", toVal: "135 ft³", extra: "3.823 m³", extra2: "3,822.77 L" },
      { fromVal: "10 yd³", toVal: "270 ft³", extra: "7.646 m³", extra2: "7,645.55 L" },
      { fromVal: "20 yd³", toVal: "540 ft³", extra: "15.291 m³", extra2: "15,291.10 L" },
      { fromVal: "50 yd³", toVal: "1,350 ft³", extra: "38.228 m³", extra2: "38,227.74 L" },
      { fromVal: "100 yd³", toVal: "2,700 ft³", extra: "76.455 m³", extra2: "76,455.49 L" },
      { fromVal: "500 yd³", toVal: "13,500 ft³", extra: "382.277 m³", extra2: "382,277.43 L" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "International Civil Engineering",
        text: "Translating US building plans and material estimates into metric SI units for international project bidding."
      },
      {
        title: "Ready-Mix Concrete Batching",
        text: "Converting concrete plant batch computer inputs when operating metric batching machinery with imperial site orders."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes to Avoid",
    items: [
      "Confusing cubic yards with cubic feet: 1 cubic yard equals 27 cubic feet; dividing cubic feet directly by 0.764555 causes massive volume errors.",
      "Using imprecise rounding (e.g. 0.75 or 0.8) on large pours; on a 1,000 yd³ pour, using 0.75 instead of 0.764555 underestimates volume by 14.5 m³."
    ]
  },
  faqs: [
    {
      question: "How many cubic meters are in 1 cubic yard?",
      answer: "One cubic yard contains exactly 0.764554858 cubic meters (commonly rounded to 0.764555 m³). To convert cubic yards to cubic meters, multiply by 0.764555."
    },
    {
      question: "How do I convert cubic yards to cubic meters?",
      answer: "To convert cubic yards to cubic meters, multiply the cubic yard figure by 0.764555. For example, 10 cubic yards × 0.764555 = 7.64555 cubic meters."
    },
    {
      question: "What is 10 cubic yards of concrete in cubic meters?",
      answer: "10 cubic yards of concrete equals 7.64555 cubic meters (or approximately 7.65 m³)."
    },
    {
      question: "Is a cubic yard bigger or smaller than a cubic meter?",
      answer: "A cubic yard is smaller than a cubic meter. One cubic yard is equal to about 0.765 cubic meters, while 1 cubic meter equals about 1.308 cubic yards."
    },
    {
      question: "How many liters are in 1 cubic yard?",
      answer: "Since 1 cubic meter contains 1,000 liters, 1 cubic yard equals 0.764555 cubic meters, which corresponds to exactly 764.555 liters."
    },
    {
      question: "What is the inverse factor from cubic meters to cubic yards?",
      answer: "To convert from cubic meters back to cubic yards, multiply by 1.307951 (or divide by 0.764555)."
    }
  ],
  relatedList: [
    { label: "Cubic Meter to Cubic Yard", from: "cubic-meter-concrete", to: "cubic-yard-concrete" },
    { label: "Board Feet to Cubic Yard", from: "board-foot", to: "cubic-yard-concrete" },
    { label: "Board Feet to Cubic Meter", from: "board-foot", to: "cubic-meter-concrete" },
    { label: "Cubic Yard to Board Feet", from: "cubic-yard-concrete", to: "board-foot" }
  ],
  references: [
    "BIPM - International Bureau of Weights and Measures: SI Brochure 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "American Concrete Institute (ACI) Concrete Terminology."
  ]
};
