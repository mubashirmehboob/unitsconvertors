import { CustomArticleData } from "./types";

export const cubicInchToCubicYard: CustomArticleData = {
  fromUnitId: "cubic-inch",
  toUnitId: "cubic-yard",
  seoTitle: "Cubic Inches to Cubic Yards Converter (in³ to yd³) | UnitsConvertors.com",
  metaDescription: "Convert cubic inches to cubic yards (in³ to yd³) accurately. Learn the exact 1/46,656 formula, bulk material worked examples, and conversion tables.",
  h1: "Cubic Inches to Cubic Yards Converter",
  introduction: [
    "Converting cubic inches to cubic yards transforms small-scale dimensional measurements from architectural blueprints and custom manufacturing into commercial bulk material quantities.",
    "A cubic inch (in³ or cu in) is a fundamental imperial and US customary unit of volume defined by a cube with one-inch edges. A cubic yard (yd³ or cu yd) represents a large macroscopic volume defined by a cube measuring one yard (3 feet or 36 inches) on each side.",
    "Because one yard equals 36 inches, cubing this dimension proves that 1 cubic yard equals exactly $36 \\times 36 \\times 36 = 46,656$ cubic inches (or $27 \\times 1,728\\text{ in}^3$). To convert cubic inches to cubic yards, divide the cubic inch volume by 46,656 (or multiply by approximately $0.0000214335$). This conversion is vital for calculating concrete formwork volume from detailed inch dimensions, estimating landscape trench backfills, and ordering bulk aggregate. This guide details the mathematical derivation, worked construction examples, quick conversion tables, and common errors to avoid."
  ],
  quickAnswer: {
    text: "To convert cubic inches to cubic yards, divide the cubic inch value by 46,656 (or multiply by 0.0000214335). For example, 93,312 cubic inches equals exactly 2.0 cubic yards.",
    formulaDisplay: "\\text{Cubic Yards (yd}^3\\text{)} = \\frac{\\text{Cubic Inches (in}^3\\text{)}}{46,656} = \\text{Cubic Inches} \\times 0.00002143347",
    subtext: "1 yd³ = 46,656 in³ | 1 in³ ≈ 0.00002143 yd³ | 1 yd³ = 27 ft³ | 1 yd³ ≈ 0.76455 m³"
  },
  aboutSourceUnit: {
    title: "Understanding the Cubic Inch (in³)",
    text: "The cubic inch (symbol: in³) is a US customary and imperial volume unit equal to a cube with 1-inch sides ($16.387064\\text{ cm}^3$). It is used across North America for detailed mechanical part drawings, precision mold dimensions, internal combustion engine displacements, and small structural component calculations."
  },
  aboutTargetUnit: {
    title: "Understanding the Cubic Yard (yd³)",
    text: "The cubic yard (symbol: yd³ or cu yd) is an imperial and US customary unit of volume equal to a cube with 3-foot (36-inch) sides ($46,656\\text{ in}^3$ or $0.764554858\\text{ m}^3$). It is the primary commercial standard for ordering ready-mix concrete, gravel, sand, topsoil, mulch, and calculating bulk excavation hauling."
  },
  relationship: "Because 1 yard equals 36 inches, one cubic yard contains $36\\text{ in} \\times 36\\text{ in} \\times 36\\text{ in} = 46,656\\text{ in}^3$. Dividing cubic inches by 46,656 gives the exact equivalent in cubic yards. Multiplying cubic yards by 46,656 converts them back into cubic inches.",
  relationshipTitle: "Cubic Inch vs Cubic Yard Volumetric Comparison",
  relationshipItems: [
    { label: "1,728 Cubic Inches (1 ft³)", value: "≈ 0.037037 yd³" },
    { label: "11,664 Cubic Inches (0.25 yd³)", value: "0.250000 yd³" },
    { label: "23,328 Cubic Inches (0.5 yd³)", value: "0.500000 yd³" },
    { label: "46,656 Cubic Inches (1 yd³)", value: "1.000000 yd³" },
    { label: "93,312 Cubic Inches (2 yd³)", value: "2.000000 yd³" },
    { label: "233,280 Cubic Inches (5 yd³)", value: "5.000000 yd³" }
  ],
  formula: {
    text: "Divide the volume in cubic inches by 46,656, or multiply by 0.0000214334705.",
    math: "\\text{Volume (yd}^3\\text{)} = \\frac{\\text{Volume (in}^3\\text{)}}{46,656} = \\frac{\\text{Length (in)} \\times \\text{Width (in)} \\times \\text{Depth (in)}}{46,656}",
    subtext: "Inverse formula: Volume (in³) = Volume (yd³) × 46,656"
  },
  formulaTitle: "Cubic Inch to Cubic Yard Conversion Formula",
  practicalTip: {
    title: "Slab Concrete Volume Shortcut in Inches",
    text: "When pouring a concrete slab with thickness measured in inches ($T_{\\text{in}}$) and surface area in square feet ($A_{\\text{sq ft}}$), calculate cubic yards directly by: $\\text{Cubic Yards} = (A_{\\text{sq ft}} \\times T_{\\text{in}}) / 324$ (since $27 \\times 12 = 324$)."
  },
  expertNote: {
    title: "Precision Takeoffs vs Real-World Bulk Orders",
    text: "While mathematical conversion from detailed CAD inch dimensions provides exact theoretical volume down to decimal yards, commercial aggregate yards and concrete batches are typically rounded up to the nearest 0.25 or 0.5 cubic yard, plus 5% to 10% waste contingency."
  },
  examples: {
    title: "Step-by-Step Practical Calculation Examples",
    items: [
      {
        title: "Example 1: Concrete Footing Formwork",
        subtitle: "A series of perimeter foundation footings measures 140,000 cubic inches in total internal formwork capacity. Calculate the concrete volume in cubic yards.",
        steps: [
          "State volume: 140,000 in³.",
          "Apply conversion formula: Volume (yd³) = 140,000 ÷ 46,656.",
          "Perform calculation: 140,000 ÷ 46,656 = 3.00068 yd³.",
          "Add 5% spillage allowance: 3.00 × 1.05 = 3.15 yd³.",
          "Final Order: Order approximately 3.25 cubic yards from the ready-mix batch plant."
        ]
      },
      {
        title: "Example 2: Garden Raised Bed Planter Soil",
        subtitle: "A custom cedar raised garden bed measures 96 inches long, 48 inches wide, and 18 inches deep (82,944 cubic inches). Determine how many cubic yards of soil blend to purchase.",
        steps: [
          "Calculate cubic inches: 96 × 48 × 18 = 82,944 in³.",
          "Divide by 46,656: 82,944 ÷ 46,656 = 1.7778 yd³.",
          "Final Result: The garden bed requires approximately 1.78 cubic yards of bulk soil (or round to 2 yards)."
        ]
      },
      {
        title: "Example 3: Precast Concrete Stair Unit",
        subtitle: "A precast concrete manufacturer casts an architectural entryway stair unit with an internal displacement of 23,328 cubic inches. Convert this volume to cubic yards.",
        steps: [
          "State volume: 23,328 in³.",
          "Divide by 46,656: 23,328 ÷ 46,656 = 0.5000 yd³.",
          "Final Result: The precast unit volume is exactly 0.5 cubic yards."
        ]
      }
    ]
  },
  table: {
    title: "Cubic Inch to Cubic Yard Conversion Reference Table",
    headers: ["Cubic Inches (in³)", "Cubic Yards (yd³)", "Cubic Feet (ft³)", "Cubic Meters (m³)", "Typical Construction Scenario"],
    rows: [
      { fromVal: "1,728 in³", toVal: "0.0370 yd³", extra: "1.00 ft³", extra2: "0.0283 m³", extra3: "1 cubic foot sample box" },
      { fromVal: "5,832 in³", toVal: "0.1250 yd³ (1/8)", extra: "3.375 ft³", extra2: "0.0956 m³", extra3: "Small post hole concrete fill" },
      { fromVal: "11,664 in³", toVal: "0.2500 yd³ (1/4)", extra: "6.75 ft³", extra2: "0.1911 m³", extra3: "Quarter-yard utility wheelbarrow" },
      { fromVal: "23,328 in³", toVal: "0.5000 yd³ (1/2)", extra: "13.50 ft³", extra2: "0.3823 m³", extra3: "Half-yard aggregate bucket scoop" },
      { fromVal: "46,656 in³", toVal: "1.0000 yd³", extra: "27.00 ft³", extra2: "0.7646 m³", extra3: "Exactly 1 cubic yard (3 ft × 3 ft × 3 ft)" },
      { fromVal: "93,312 in³", toVal: "2.0000 yd³", extra: "54.00 ft³", extra2: "1.5291 m³", extra3: "Standard pickup truck bed mulch capacity" },
      { fromVal: "139,968 in³", toVal: "3.0000 yd³", extra: "81.00 ft³", extra2: "2.2937 m³", extra3: "Small concrete walkway pour" },
      { fromVal: "233,280 in³", toVal: "5.0000 yd³", extra: "135.00 ft³", extra2: "3.8228 m³", extra3: "Residential patio slab (10 ft × 15 ft × 4 in)" },
      { fromVal: "466,560 in³", toVal: "10.0000 yd³", extra: "270.00 ft³", extra2: "7.6455 m³", extra3: "Full commercial ready-mix truck load" },
      { fromVal: "933,120 in³", toVal: "20.0000 yd³", extra: "540.00 ft³", extra2: "15.2911 m³", extra3: "Heavy highway dump trailer payload" }
    ]
  },
  applications: {
    title: "Concrete Construction, Excavation, & Landscape Architecture",
    items: [
      {
        title: "Ready-Mix Concrete Ordering",
        text: "Converting detailed footing and foundation slab measurements from blueprint inches into cubic yards for ready-mix batch plants."
      },
      {
        title: "Bulk Landscape Material Delivery",
        text: "Estimating bulk mulch, gravel, and organic garden soil quantities in yards from planter box dimensions in inches."
      },
      {
        title: "Trench Backfill & Utility Construction",
        text: "Translating pipe trench excavations measured in inches (width × depth × length) into cubic yard truckload hauling estimates."
      },
      {
        title: "Precast Concrete Manufacturing",
        text: "Calculating raw concrete batch mix weights from 3D CAD part volumes modeled in cubic inches."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in in³ to yd³ Conversions",
    items: [
      "Dividing by 1,728 instead of 46,656, which calculates cubic feet rather than cubic yards (resulting in a 27× overestimation).",
      "Dividing by 36 instead of 36³ (46,656), confusing linear inches with cubic volume.",
      "Failing to account for soil compaction (settling) or concrete over-excavation wastage (5%–10%).",
      "Confusing square yards (surface area) with cubic yards (volume)."
    ]
  },
  faqs: [
    {
      question: "How do I convert cubic inches to cubic yards?",
      answer: "Divide the volume in cubic inches by 46,656 (or multiply by 0.0000214335). For example, 46,656 in³ ÷ 46,656 = 1.0 yd³."
    },
    {
      question: "How many cubic inches are in 1 cubic yard?",
      answer: "There are exactly 46,656 cubic inches in 1 cubic yard (36 inches × 36 inches × 36 inches)."
    },
    {
      question: "Why is 1 cubic yard equal to 46,656 cubic inches?",
      answer: "Because 1 yard equals 3 feet or 36 inches. Cubing 36 gives 36 × 36 × 36 = 46,656 cubic inches (or 27 cubic feet × 1,728 in³/ft³ = 46,656 in³)."
    },
    {
      question: "How many cubic yards is 100,000 cubic inches?",
      answer: "100,000 cubic inches divided by 46,656 equals approximately 2.143 cubic yards."
    },
    {
      question: "How do I calculate cubic yards from dimensions in inches?",
      answer: "Multiply (Length in inches × Width in inches × Height in inches), then divide the result by 46,656."
    },
    {
      question: "How many cubic feet are in a cubic yard?",
      answer: "There are exactly 27 cubic feet in 1 cubic yard (3 ft × 3 ft × 3 ft)."
    },
    {
      question: "How much does 1 cubic yard of concrete weigh?",
      answer: "Standard normal-weight concrete weighs approximately 4,050 pounds (about 2 tons or 1,840 kg) per cubic yard."
    },
    {
      question: "What is 1 cubic yard in liters and cubic meters?",
      answer: "One cubic yard equals approximately 0.764555 cubic meters, or 764.555 liters."
    }
  ],
  relatedList: [
    { label: "Cubic Yards to Cubic Inches", from: "cubic-yard", to: "cubic-inch" },
    { label: "Cubic Inches to Cubic Feet", from: "cubic-inch", to: "cubic-foot" },
    { label: "Cubic Feet to Cubic Yards", from: "cubic-foot", to: "cubic-yard" },
    { label: "Cubic Inches to Cubic Meters", from: "cubic-inch", to: "cubic-meter" }
  ],
  references: [
    "NIST Handbook 44: Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "American Concrete Institute (ACI): ACI 301 — Specifications for Structural Concrete.",
    "ASTM C94 / C94M: Standard Specification for Ready-Mixed Concrete."
  ]
};
