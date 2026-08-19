import { CustomArticleData } from "./types";

export const squareKilometerToHectare: CustomArticleData = {
  fromUnitId: "square-kilometer",
  toUnitId: "hectare",
  seoTitle: "Square Kilometer to Hectare Converter - km² to ha",
  metaDescription: "Convert square kilometers to hectares (km² to ha). Learn the exact metric conversion formula, step-by-step calculations, conversion tables, and real-world examples.",
  h1: "Square Kilometer to Hectare Converter",
  introduction: [
    "In agricultural planning, forestry management, environmental conservation, and global land governance, translating between square kilometers and hectares is one of the most common and elegant conversions in the metric system. Because both units are directly accepted for use alongside the International System of Units (SI), their mathematical relationship is exact, clean, and based on simple powers of ten.",
    "A square kilometer provides the macro-scale perspective for national parks, administrative territories, and watershed basins, while the hectare is the standard international metric unit for agricultural parcels, crop fields, and urban parks. This guide provides the exact conversion formula, quick decimal calculation rules, worked examples, and comprehensive reference tables to help you convert km² to ha effortlessly."
  ],
  quickAnswer: {
    text: "To convert square kilometers to hectares, multiply the area in square kilometers by 100 (or shift the decimal point two places to the right). For example, a 3.5 square kilometer nature reserve equals exactly 350 hectares.",
    formulaDisplay: "1 km² = 100 ha | Area (ha) = Area (km²) × 100",
    subtext: "Since 1 square kilometer equals 1,000,000 square meters and 1 hectare equals 10,000 square meters, exactly 100 hectares fit into one square kilometer."
  },
  aboutSourceUnit: {
    title: "Understanding the Square Kilometer (km²)",
    text: "The square kilometer (symbol: km²) is an SI derived unit of surface area. Defined as the area of a square measuring exactly 1,000 meters on each side (1,000,000 square meters), it is the premier international standard for geographical mapping, territorial administration, and climate science."
  },
  aboutTargetUnit: {
    title: "Understanding the Hectare (ha)",
    text: "The hectare (symbol: ha) is a non-SI unit officially accepted for use with the International System of Units. Defined as the area of a square measuring 100 meters on each side, one hectare equals exactly 10,000 square meters (or 0.01 square kilometers, roughly 2.471 acres). It is the universal standard for international agriculture, land ownership, forestry, and zoning."
  },
  relationship: "The hectare and square kilometer are directly linked through SI metric area definitions. One hectare equals 10,000 square meters (1 hm² or hectometer squared). Since one square kilometer equals 1,000,000 square meters, dividing 1,000,000 by 10,000 proves that exactly 100 hectares equal one square kilometer. Inversely, 1 hectare equals 0.01 square kilometers.",
  relationshipTitle: "Metric Area Hierarchy: km² vs Hectares",
  relationshipItems: [
    { label: "1 Square Kilometer (km²)", value: "exactly 100 Hectares (ha)" },
    { label: "1 Hectare (ha)", value: "exactly 0.01 Square Kilometers (km²)" },
    { label: "1 Hectare (ha)", value: "exactly 10,000 Square Meters (m²)" },
    { label: "1 Hectare (ha)", value: "approx. 2.47105 Acres (ac)" }
  ],
  formula: {
    text: "Convert square kilometers to hectares by multiplying the square kilometer value by 100, or by moving the decimal point two places to the right.",
    math: "Area in Hectares (ha) = Area in Square Kilometers (km²) × 100",
    subtext: "In reverse: Area in Square Kilometers (km²) = Area in Hectares (ha) / 100"
  },
  formulaTitle: "Square Kilometer to Hectare Conversion Formula",
  practicalTip: {
    title: "The Two-Digit Decimal Shift",
    text: "To convert km² to ha instantly in your head, simply move the decimal point two places to the right. For example, 0.48 km² becomes 48 ha, and 12.3 km² becomes 1,230 ha."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: National Forest Management Sector",
        subtitle: "A forestry department designates a 14.5 square kilometer woodland tract for sustainable timber harvesting. Calculate the area in hectares.",
        steps: [
          "State the given area: Area = 14.5 km².",
          "Apply the metric formula: Area (ha) = Area (km²) × 100.",
          "Substitute the value: Area (ha) = 14.5 × 100.",
          "Perform the multiplication: Area (ha) = 1,450 ha.",
          "Conclude: The forestry tract spans exactly 1,450 hectares."
        ]
      },
      {
        title: "Example 2: Regional Vineyard Estate",
        subtitle: "An agricultural cooperative owns a wine-growing parcel measuring 0.72 square kilometers. Find the parcel size in hectares.",
        steps: [
          "Identify the given area: Area = 0.72 km².",
          "Multiply by 100: 0.72 × 100 = 72 ha.",
          "Conclude: The vineyard estate covers exactly 72 hectares."
        ]
      },
      {
        title: "Example 3: Lake Catchment Water Surface",
        subtitle: "An environmental study records a freshwater lake surface area of 38.6 square kilometers. Express this surface in hectares.",
        steps: [
          "State the initial value: Area = 38.6 km².",
          "Set up the equation: Area (ha) = 38.6 × 100.",
          "Compute the product: 38.6 × 100 = 3,860 ha.",
          "Conclude: The lake surface area equals exactly 3,860 hectares."
        ]
      }
    ]
  },
  table: {
    title: "Square Kilometer to Hectare Conversion Table",
    headers: ["Square Kilometers (km²)", "Hectares (ha)", "Square Meters (m²)", "Acres (Approx.)"],
    rows: [
      { fromVal: "0.01 km²", toVal: "1 ha", extra: "10,000 m²", extra2: "2.471 ac" },
      { fromVal: "0.05 km²", toVal: "5 ha", extra: "50,000 m²", extra2: "12.355 ac" },
      { fromVal: "0.10 km²", toVal: "10 ha", extra: "100,000 m²", extra2: "24.711 ac" },
      { fromVal: "0.25 km²", toVal: "25 ha", extra: "250,000 m²", extra2: "61.776 ac" },
      { fromVal: "0.50 km²", toVal: "50 ha", extra: "500,000 m²", extra2: "123.553 ac" },
      { fromVal: "1.00 km²", toVal: "100 ha", extra: "1,000,000 m²", extra2: "247.105 ac" },
      { fromVal: "2.50 km²", toVal: "250 ha", extra: "2,500,000 m²", extra2: "617.763 ac" },
      { fromVal: "5.00 km²", toVal: "500 ha", extra: "5,000,000 m²", extra2: "1,235.527 ac" },
      { fromVal: "10.00 km²", toVal: "1,000 ha", extra: "10,000,000 m²", extra2: "2,471.054 ac" },
      { fromVal: "50.00 km²", toVal: "5,000 ha", extra: "50,000,000 m²", extra2: "12,355.269 ac" }
    ]
  },
  applications: {
    title: "Agriculture, Forestry & Environmental Applications",
    items: [
      {
        title: "International Agricultural Statistics (FAO)",
        text: "The Food and Agriculture Organization (FAO) and European agricultural ministries report national crop production, arable land reserves, and irrigation coverage in hectares, translating regional satellite data (km²) into hectares."
      },
      {
        title: "Forestry Stewardship & Wildfire Containment",
        text: "Forest rangers and emergency response teams report wildfire burn scars, reforestation planting goals, and timber quotas in hectares derived from square kilometer perimeter maps."
      },
      {
        title: "Protected Natural Areas & Biosphere Reserves",
        text: "UNESCO World Heritage natural sites and national conservation parks categorize core protection zones and buffer belts in hectares to manage ecological carrying capacities."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing instead of multiplying: Because a hectare is smaller than a square kilometer, the number of hectares must be larger (multiply by 100, do not divide).",
      "Confusing hectares with acres: 1 km² = 100 hectares, but 1 km² ≈ 247.11 acres. One hectare contains approximately 2.471 acres.",
      "Confusing linear hectometers with square hectometers: 1 hectometer is 100 meters, but 1 hectare is 100 m × 100 m = 10,000 m²."
    ]
  },
  faqs: [
    {
      question: "How many hectares are in 1 square kilometer?",
      answer: "There are exactly 100 hectares in 1 square kilometer."
    },
    {
      question: "What is the formula to convert km² to ha?",
      answer: "The formula is: Area in Hectares (ha) = Area in Square Kilometers (km²) × 100."
    },
    {
      question: "How do I convert hectares back to square kilometers?",
      answer: "To convert hectares to square kilometers, divide the number of hectares by 100 (or multiply by 0.01)."
    },
    {
      question: "Why does 1 km² equal exactly 100 hectares?",
      answer: "A square kilometer is 1,000,000 square meters. A hectare is defined as 10,000 square meters. Dividing 1,000,000 m² by 10,000 m² yields exactly 100."
    },
    {
      question: "How many hectares are in 0.5 square kilometers?",
      answer: "0.5 square kilometers is equal to exactly 50 hectares (0.5 × 100 = 50 ha)."
    },
    {
      question: "What is the difference between a hectare and an acre?",
      answer: "A hectare is a metric unit equal to 10,000 m² (about 2.471 acres). An acre is an imperial/customary unit equal to 4,046.856 m² (43,560 sq ft)."
    },
    {
      question: "What is the symbol for hectares and square kilometers?",
      answer: "The official symbol for hectare is 'ha', and for square kilometer is 'km²'."
    },
    {
      question: "How many square meters are in 1 hectare?",
      answer: "There are exactly 10,000 square meters in one hectare."
    }
  ],
  relatedList: [
    { label: "Hectare to Square Kilometer", from: "hectare", to: "square-kilometer" },
    { label: "Square Kilometer to Acre", from: "square-kilometer", to: "acre" },
    { label: "Square Kilometer to Square Meter", from: "square-kilometer", to: "square-meter" },
    { label: "Square Meter to Hectare", from: "square-meter", to: "hectare" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) — Non-SI Units Accepted for Use with the SI",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)",
    "Food and Agriculture Organization of the United Nations (FAO) — Statistical Yearbook on Land Use"
  ]
};
