import { CustomArticleData } from "./types";

export const gramPerLiterToPoundPerCubicFoot: CustomArticleData = {
  fromUnitId: "gram-per-liter",
  toUnitId: "pound-per-cubic-foot",
  seoTitle: "Gram per Liter to Pound per Cubic Foot Converter (g/L to lb/ft³)",
  metaDescription: "Convert grams per liter to pounds per cubic foot (g/L to lb/ft³ or pcf) with precise conversion factors, formulas, tables, and engineering examples.",
  canonicalUrl: "https://unitsconvertors.com/gram-per-liter-to-pound-per-cubic-foot",
  h1: "Gram per Liter to Pound per Cubic Foot Converter",
  introduction: [
    "International civil engineers, chemical plant designers, and material procurement officers frequently convert fluid and bulk powder density specifications between metric laboratory standards and US Customary engineering units. Converting grams per liter (g/L) to pounds per cubic foot (lb/ft³ or pcf) is crucial when translating European technical data sheets for North American building codes and structural load calculations.",
    "Because one gram per liter equals exactly one kilogram per cubic meter, one gram per liter corresponds to approximately 0.062428 pounds per cubic foot. In reverse, one pound per cubic foot equals approximately 16.018463 grams per liter. This guide provides exact conversion formulas, step-by-step calculations, reference tables for common industrial materials, and practical engineering guidance."
  ],
  quickAnswer: {
    text: "To convert grams per liter to pounds per cubic foot, multiply the g/L value by 0.06242796, or divide by 16.018463. For example, 1,000 g/L (water) equals approximately 62.43 lb/ft³.",
    formulaDisplay: "1 g/L ≈ 0.06242796 lb/ft³",
    subtext: "Multiply by 0.06242796 (or divide by 16.018463) to convert g/L to lb/ft³."
  },
  aboutSourceUnit: {
    title: "Understanding Gram per Liter (g/L)",
    text: "The gram per liter (symbol: g/L) is a metric unit of density and mass concentration. Widely utilized in analytical chemistry, industrial liquid mixing, water treatment, and food science, it specifies the mass in grams contained within one liter of volume."
  },
  aboutTargetUnit: {
    title: "Understanding Pound per Cubic Foot (lb/ft³)",
    text: "The pound per cubic foot (symbol: lb/ft³, commonly called pcf) is the standard US Customary unit for bulk material density. It expresses the weight in avoirdupois pounds distributed over one cubic foot of volume and is standard across US structural load tables, geotechnical soil testing, and HVAC engineering."
  },
  relationship: "Because 1 g/L = 1 kg/m³, the relationship between g/L and lb/ft³ is identical to that between kg/m³ and lb/ft³. One pound equals 453.59237 grams and one cubic foot equals 28.316846592 liters. Dividing 28.316846592 L by 453.59237 g yields approximately 0.0624279606 lb/ft³ per g/L.",
  relationshipTitle: "Conversion Factors & Derivation",
  relationshipItems: [
    { label: "1 Gram per Liter (g/L)", value: "≈ 0.062428 lb/ft³" },
    { label: "1 Pound per Cubic Foot (lb/ft³)", value: "≈ 16.018463 g/L" }
  ],
  formula: {
    text: "To convert grams per liter to pounds per cubic foot, multiply by 0.06242796, or divide by 16.018463.",
    math: "Density (lb/ft³) = Density (g/L) × 0.06242796",
    subtext: "Equivalently: Density (lb/ft³) = Density (g/L) ÷ 16.018463"
  },
  formulaTitle: "g/L to lb/ft³ Formula",
  practicalTip: {
    title: "Mental Estimation Shortcut",
    text: "Divide the g/L value by 16 for a fast field estimate within 0.1% of the exact value. For example, 800 g/L ÷ 16 = 50 lb/ft³ (exact: 49.94 lb/ft³)."
  },
  expertNote: {
    title: "Structural Dead Load Calculations",
    text: "When converting concrete or masonry densities given on European metric datasheets (e.g., 2,400 g/L or kg/m³) to US structural dead load schedules, dividing by 16 gives 150 pcf."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Structural Concrete Density",
        subtitle: "Convert reinforced concrete density of 2,400 g/L into lb/ft³ (pcf).",
        steps: [
          "Identify the given density: 2,400 g/L.",
          "Apply the conversion factor: Multiply by 0.06242796 (or divide by 16.018463).",
          "Perform calculation: 2,400 × 0.06242796 = 149.8271 lb/ft³.",
          "Final result: The concrete density is approximately 149.83 lb/ft³ (~150 pcf)."
        ]
      },
      {
        title: "Example 2: Heavy Drilling Brine",
        subtitle: "Convert a calcium chloride brine solution of 1,320 g/L into lb/ft³.",
        steps: [
          "Identify the given density: 1,320 g/L.",
          "Apply the conversion factor: Multiply by 0.06242796.",
          "Perform calculation: 1,320 × 0.06242796 = 82.4049 lb/ft³.",
          "Final result: The brine density is approximately 82.40 lb/ft³."
        ]
      },
      {
        title: "Example 3: Atmospheric Air Density",
        subtitle: "Convert sea-level dry air density of 1.225 g/L into lb/ft³ for HVAC fan sizing.",
        steps: [
          "Identify the given density: 1.225 g/L.",
          "Apply the conversion factor: Multiply by 0.06242796.",
          "Perform calculation: 1.225 × 0.06242796 = 0.076474 lb/ft³.",
          "Final result: Standard air density is approximately 0.0765 lb/ft³."
        ]
      }
    ]
  },
  table: {
    title: "Grams per Liter to Pounds per Cubic Foot Reference Table",
    headers: ["Grams per Liter (g/L)", "Pounds per Cubic Foot (lb/ft³)", "Material / Substance"],
    rows: [
      { fromVal: "1.225 g/L", toVal: "0.0765 lb/ft³", extra: "Dry air at sea level (15 °C)" },
      { fromVal: "500.0 g/L", toVal: "31.21 lb/ft³", extra: "Softwood pine timber" },
      { fromVal: "789.0 g/L", toVal: "49.26 lb/ft³", extra: "Pure ethanol" },
      { fromVal: "850.0 g/L", toVal: "53.06 lb/ft³", extra: "Lubricating engine oil" },
      { fromVal: "1,000.0 g/L", toVal: "62.43 lb/ft³", extra: "Pure water (4 °C)" },
      { fromVal: "1,025.0 g/L", toVal: "63.99 lb/ft³", extra: "Standard seawater" },
      { fromVal: "1,400.0 g/L", toVal: "87.40 lb/ft³", extra: "Dry silica sand" },
      { fromVal: "1,900.0 g/L", toVal: "118.61 lb/ft³", extra: "Compacted clay soil" },
      { fromVal: "2,400.0 g/L", toVal: "149.83 lb/ft³", extra: "Reinforced structural concrete" },
      { fromVal: "2,700.0 g/L", toVal: "168.56 lb/ft³", extra: "Solid aluminum 6061" },
      { fromVal: "7,850.0 g/L", toVal: "490.06 lb/ft³", extra: "Structural carbon steel" },
      { fromVal: "11,340.0 g/L", toVal: "707.93 lb/ft³", extra: "Pure lead metal" }
    ]
  },
  applications: {
    title: "Practical Industrial Applications",
    items: [
      {
        title: "Civil & Structural Engineering",
        text: "Building codes across North America mandate load schedules in pcf (lb/ft³). When importing precast concrete or steel components manufactured to metric g/L specifications, engineers convert density values for load verification."
      },
      {
        title: "Chemical Logistics & Tank Farm Design",
        text: "Liquid chemical storage tank foundations must support total fluid weights. Tank capacity calculations convert supplier liquid density ratings in g/L into lb/ft³ to compute floor load distribution."
      },
      {
        title: "HVAC & Aerodynamic Duct Design",
        text: "Fan performance curves in the US utilize standard air density of 0.075–0.0765 lb/ft³, converted from atmospheric air density measurements recorded in g/L."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 16 instead of dividing: Multiplying by 16 is used for the reverse conversion (lb/ft³ to g/L). For g/L to lb/ft³, divide by 16.018 or multiply by 0.0624.",
      "Confusing g/L with g/cm³: A material with a density of 2.7 g/cm³ is 2,700 g/L, which converts to 168.56 lb/ft³.",
      "Overlooking bulk density vs true density: For granular materials (like sand or grain), loose bulk density in g/L is lower than solid crystal density."
    ]
  },
  faqs: [
    {
      question: "How do I convert g/L to lb/ft³?",
      answer: "Multiply the value in grams per liter (g/L) by 0.06242796, or divide it by 16.018463, to obtain pounds per cubic foot (lb/ft³)."
    },
    {
      question: "What is 1,000 g/L in lb/ft³?",
      answer: "1,000 g/L equals approximately 62.428 lb/ft³, which is the density of pure water."
    },
    {
      question: "What is the relation between g/L, kg/m³, and lb/ft³?",
      answer: "Because 1 g/L equals exactly 1 kg/m³, converting g/L to lb/ft³ uses the exact same factor as converting kg/m³ to lb/ft³ (multiply by 0.06242796)."
    },
    {
      question: "What is the density of steel in lb/ft³ if it is 7,850 g/L?",
      answer: "7,850 g/L converts to approximately 490.06 lb/ft³ (7,850 ÷ 16.018463)."
    },
    {
      question: "How do I convert lb/ft³ back to g/L?",
      answer: "Multiply the lb/ft³ value by 16.018463 to obtain grams per liter (g/L)."
    },
    {
      question: "What is the quick mental math trick for g/L to lb/ft³?",
      answer: "Divide the g/L value by 16. For example, 1,600 g/L ÷ 16 = 100 lb/ft³."
    },
    {
      question: "What is the density of air in lb/ft³?",
      answer: "Standard sea-level air at 1.225 g/L converts to approximately 0.0765 lb/ft³."
    },
    {
      question: "What does 'pcf' mean?",
      answer: "'pcf' stands for 'pounds per cubic foot' (lb/ft³), commonly used in North American construction and geotechnical engineering."
    }
  ],
  relatedList: [
    { label: "Pound per Cubic Foot to Gram per Liter", from: "pound-per-cubic-foot", to: "gram-per-liter" },
    { label: "Gram per Liter to Kilogram per Cubic Meter", from: "gram-per-liter", to: "kilogram-per-cubic-meter" },
    { label: "Gram per Liter to Gram per Cubic Centimeter", from: "gram-per-liter", to: "gram-per-cubic-centimeter" },
    { label: "Gram per Liter to Pound per Gallon (US)", from: "gram-per-liter", to: "pound-per-gallon-us" },
    { label: "Gram per Liter to Ounce per Cubic Inch", from: "gram-per-liter", to: "ounce-per-cubic-inch" }
  ],
  relatedArticles: [
    {
      title: "Pound per Cubic Foot to Gram per Liter Converter",
      description: "Convert US Customary density lb/ft³ to metric solution concentration g/L.",
      from: "pound-per-cubic-foot",
      to: "gram-per-liter"
    }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "ASTM E380 - Standard Practice for Use of the International System of Units.",
    "ISO 80000-4:2019 - Quantities and units — Part 4: Mechanics."
  ]
};
