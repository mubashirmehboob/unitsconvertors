import { CustomArticleData } from "./types";

export const litersPerKmToMpgUs: CustomArticleData = {
  fromUnitId: "liters-per-km",
  toUnitId: "mpg-us",
  seoTitle: "Liters per Kilometer to MPG (US) Converter (L/km to MPG US)",
  metaDescription: "Convert Liters per Kilometer to US Miles per Gallon (L/km to MPG US) accurately. Understand the 2.35215 inverse formula, step-by-step math, tables, and FAQs.",
  h1: "Liters per Kilometer to MPG (US) Converter",
  introduction: [
    "Liters per kilometer (L/km) and US Miles per Gallon (MPG US) represent two fundamentally distinct approaches to measuring vehicle fuel efficiency across different measurement systems. Liters per kilometer is a metric fuel consumption unit commonly used in engineering calculations and telemetry, measuring fuel volume consumed per unit distance. US Miles per Gallon is the customary distance-per-volume rating established by the US Environmental Protection Agency (EPA).",
    "Because L/km measures fuel burned per unit distance (where lower values denote better efficiency) and US MPG measures distance covered per unit volume (where higher numbers denote better efficiency), they share an inverse relationship. Converting between them requires dividing the mathematical constant 2.35214583 by the known value.",
    "This guide explains the derivation of the 2.35215 conversion factor, provides clear step-by-step examples for passenger and commercial vehicle calculations, includes comprehensive lookup tables, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert Liters per Kilometer (L/km) to US Miles per Gallon (MPG US), divide 2.35214583 by the L/km value. For example, a vehicle consuming 0.08 L/km achieves approximately 29.40 MPG (US).",
    formulaDisplay: "MPG (US) = 2.35214583 ÷ (L/km)",
    subtext: "Note: This is an inverse relationship. Lower fuel consumption in L/km results in higher (better) US MPG."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per kilometer (L/km) is the base metric unit of fuel consumption. It quantifies the precise volume of liquid fuel in liters burned to travel one kilometer. Primarily utilized in automotive engineering, powertrain testing, and telemetry simulations, lower values reflect superior fuel economy."
  },
  aboutTargetUnit: {
    title: "Understanding US Miles per Gallon (MPG US)",
    text: "Miles per Gallon (US) is the statutory consumer fuel economy metric used across the United States. Regulated by the US EPA and National Highway Traffic Safety Administration (NHTSA), it indicates the number of statute miles (1,609.344 meters) a vehicle travels per US liquid gallon (3.785411784 liters)."
  },
  relationship: "Because L/km represents fuel volume consumed per unit distance and MPG represents distance traveled per unit volume, they are inverse reciprocals. The conversion factor 2.35214583 is derived from: (1 mi / 1.609344 km) × (3.785411784 L / 1 gal) = 2.35214583 (L·mi)/(km·gal).",
  relationshipTitle: "L/km to US MPG Benchmark Scale",
  relationshipItems: [
    { label: "0.150 L/km (150 mL/km)", value: "15.68 MPG (US) — Heavy-duty pickup / Performance V8" },
    { label: "0.100 L/km (100 mL/km)", value: "23.52 MPG (US) — Full-size crossover / Midsize SUV" },
    { label: "0.080 L/km (80 mL/km)", value: "29.40 MPG (US) — Standard 4-cylinder passenger sedan" },
    { label: "0.060 L/km (60 mL/km)", value: "39.20 MPG (US) — Efficient compact commuter car" },
    { label: "0.040 L/km (40 mL/km)", value: "58.80 MPG (US) — High-efficiency full hybrid" }
  ],
  formula: {
    text: "Divide the constant 2.35214583 by the fuel consumption value in liters per kilometer to find US Miles per Gallon.",
    math: "MPG (US) = 2.35214583 / (L/km)",
    subtext: "To convert in reverse from US MPG to L/km, use the exact same constant: L/km = 2.35214583 / MPG (US)."
  },
  formulaTitle: "L/km to MPG (US) Inverse Formula",
  practicalTip: {
    title: "Converting via L/100km",
    text: "If you find 2.35215 tricky to calculate mentally, multiply L/km by 100 first to get L/100km, then divide 235.215 by that number: 0.08 L/km × 100 = 8.0 L/100km; 235.215 ÷ 8.0 = 29.40 MPG."
  },
  expertNote: {
    title: "Engineering Telemetry to Consumer Metrics",
    text: "Automotive test rigs measure instantaneous fuel injector volume per millisecond to calculate real-time fuel consumption in L/km. Converting this data directly to US MPG allows powertrain engineers to validate EPA window sticker targets during early dyno testing."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Midsize Sedan Consumption",
        subtitle: "Convert a telemetry reading of 0.075 L/km into US MPG.",
        steps: [
          "State the fuel consumption rate: 0.075 L/km.",
          "Apply the conversion formula: MPG (US) = 2.35214583 ÷ 0.075.",
          "Perform the calculation: 2.35214583 ÷ 0.075 = 31.3619...",
          "Result: 0.075 L/km equals approximately 31.36 MPG (US)."
        ]
      },
      {
        title: "Example 2: Commercial Delivery Van",
        subtitle: "Convert an urban route consumption rate of 0.12 L/km to US MPG.",
        steps: [
          "State the fuel consumption rate: 0.12 L/km.",
          "Apply the formula: MPG (US) = 2.35214583 ÷ 0.12.",
          "Perform the calculation: 2.35214583 ÷ 0.12 = 19.6012...",
          "Result: 0.12 L/km equals approximately 19.60 MPG (US)."
        ]
      },
      {
        title: "Example 3: Compact Gasoline-Electric Hybrid",
        subtitle: "Convert a fuel consumption rate of 0.045 L/km into US MPG.",
        steps: [
          "State the fuel consumption rate: 0.045 L/km.",
          "Apply the formula: MPG (US) = 2.35214583 ÷ 0.045.",
          "Perform the calculation: 2.35214583 ÷ 0.045 = 52.2699...",
          "Result: 0.045 L/km equals approximately 52.27 MPG (US)."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Kilometer to US MPG Conversion Table",
    headers: ["Liters per Kilometer (L/km)", "US Miles per Gallon (MPG US)", "Efficiency Category"],
    rows: [
      { fromVal: "0.035 L/km", toVal: "67.20 MPG", extra: "Ultra Efficient (Plug-in Hybrid / Micro Diesel)" },
      { fromVal: "0.040 L/km", toVal: "58.80 MPG", extra: "Outstanding (Full Hybrid Compact)" },
      { fromVal: "0.050 L/km", toVal: "47.04 MPG", extra: "Excellent (Subcompact / Mild Hybrid)" },
      { fromVal: "0.060 L/km", toVal: "39.20 MPG", extra: "Very Good (Compact Sedan)" },
      { fromVal: "0.070 L/km", toVal: "33.60 MPG", extra: "Good (Midsize Sedan / Small Crossover)" },
      { fromVal: "0.080 L/km", toVal: "29.40 MPG", extra: "Average (Family Crossover AWD)" },
      { fromVal: "0.090 L/km", toVal: "26.13 MPG", extra: "Moderate (Midsize All-Wheel Drive SUV)" },
      { fromVal: "0.100 L/km", toVal: "23.52 MPG", extra: "Moderate-High (Large SUV / V6 Engine)" },
      { fromVal: "0.120 L/km", toVal: "19.60 MPG", extra: "High Consumption (Full-Size 4x4 / Light Truck)" },
      { fromVal: "0.150 L/km", toVal: "15.68 MPG", extra: "Very High Consumption (Heavy Commercial Vehicle)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Automotive Dynamometer Testing",
        text: "Engineers logging fuel flow rates in milliliters per second and vehicle speed in kilometers per hour translate raw L/km data directly into US MPG to verify EPA certification targets."
      },
      {
        title: "Fleet Operating Telematics",
        text: "Commercial fleet analytics systems converting GPS kilometer tracking data and fuel flow sensor metrics in L/km translate performance into US MPG for executive reporting."
      },
      {
        title: "Cross-Border Vehicle Importation",
        text: "Vehicle converters translating metric engineering documentation and ECU parameter maps into US EPA window sticker formats use this direct conversion."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Using 235.215 instead of 2.35215: The constant 235.215 is for L/100km; because L/km is 100 times larger, the constant must be divided by 100 to 2.35215.",
      "Confusing US MPG with UK Imperial MPG: UK MPG requires a constant of 2.82481 because the Imperial gallon is approximately 20% larger than the US gallon.",
      "Multiplying instead of dividing: Because the relationship is inverse, multiplying L/km by the constant generates incorrect numbers."
    ]
  },
  faqs: [
    {
      question: "How do you convert L/km to US MPG?",
      answer: "Divide 2.35214583 by the L/km rating: MPG (US) = 2.35214583 ÷ (L/km). For example, 0.08 L/km equals 2.35214583 ÷ 0.08 ≈ 29.40 MPG (US)."
    },
    {
      question: "What is 0.10 L/km in US MPG?",
      answer: "0.10 L/km equals approximately 23.52 US MPG (2.35214583 ÷ 0.10 = 23.5215)."
    },
    {
      question: "What is 0.05 L/km in US MPG?",
      answer: "0.05 L/km equals approximately 47.04 US MPG (2.35214583 ÷ 0.05 = 47.0429)."
    },
    {
      question: "Why is the constant 2.35215 rather than 235.215?",
      answer: "Because L/km measures fuel per single kilometer, whereas L/100km measures fuel per 100 kilometers. Dividing the standard 235.215 factor by 100 gives 2.35214583."
    },
    {
      question: "What is 0.08 L/km in US MPG?",
      answer: "0.08 L/km equals approximately 29.40 US MPG."
    },
    {
      question: "Is a lower L/km value better in US MPG?",
      answer: "Yes, because lower L/km means less fuel is burned per kilometer, resulting in a higher and more efficient US MPG rating."
    },
    {
      question: "What is 0.04 L/km in US MPG?",
      answer: "0.04 L/km equals approximately 58.80 US MPG."
    },
    {
      question: "How do I convert 30 US MPG back into L/km?",
      answer: "Divide 2.35214583 by 30: 2.35214583 ÷ 30 ≈ 0.0784 L/km (or 78.4 mL/km)."
    }
  ],
  relatedList: [
    { label: "MPG (US) to L/km", from: "mpg-us", to: "liters-per-km" },
    { label: "L/km to MPG (UK)", from: "liters-per-km", to: "mpg-uk" },
    { label: "L/km to L/100km", from: "liters-per-km", to: "liters-per-100km" },
    { label: "L/km to km/L", from: "liters-per-km", to: "km-per-liter" }
  ],
  references: [
    "US Environmental Protection Agency (EPA) — Fuel Economy and Greenhouse Gas Regulations",
    "Society of Automotive Engineers (SAE J1082) — Fuel Economy Measurement Procedures",
    "National Highway Traffic Safety Administration (NHTSA) — CAFE Standards and Metrics"
  ]
};
