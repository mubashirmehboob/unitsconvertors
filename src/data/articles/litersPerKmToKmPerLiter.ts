import { CustomArticleData } from "./types";

export const litersPerKmToKmPerLiter: CustomArticleData = {
  fromUnitId: "liters-per-km",
  toUnitId: "km-per-liter",
  seoTitle: "Liters per Kilometer to Kilometers per Liter Converter (L/km to km/L)",
  metaDescription: "Convert Liters per Kilometer to Kilometers per Liter (L/km to km/L) instantly. Learn the reciprocal formula (1 / L/km), step-by-step examples, tables, and FAQs.",
  h1: "Liters per Kilometer to Kilometers per Liter Converter",
  introduction: [
    "Liters per kilometer (L/km) and kilometers per liter (km/L) are metric units that evaluate motor vehicle fuel efficiency from opposite mathematical perspectives. Both units are rooted strictly in International System of Units (SI) measures—liters for liquid volume and kilometers for linear distance.",
    "Liters per kilometer is a fuel consumption metric stating the volume of fuel burned to drive a single kilometer. In contrast, kilometers per liter is an efficiency metric stating how many kilometers a vehicle can travel using one liter of fuel. Because one is the direct inverted fraction of the other, converting between them requires taking the reciprocal: dividing 1 by the known value.",
    "Engineers, fleet managers, and automotive data analysts frequently perform this conversion when translating low-level fuel flow telemetry and ECU log data into consumer-facing fuel economy ratings."
  ],
  quickAnswer: {
    text: "To convert Liters per Kilometer (L/km) to Kilometers per Liter (km/L), divide 1 by the L/km value. For example, a fuel consumption rate of 0.08 L/km equals exactly 12.5 km/L.",
    formulaDisplay: "km/L = 1 ÷ (L/km)",
    subtext: "Note: This is an exact inverse conversion. A lower L/km consumption results in a higher (better) km/L economy."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per kilometer (L/km) is the base metric engineering unit for automotive fuel consumption. It represents the decimal fraction of a liter consumed per single kilometer traveled. Commonly used in vehicle telemetry, dynamometer testing, and powertrain modeling, lower values denote superior efficiency."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per liter (km/L) is a popular consumer fuel economy standard used across Japan, India, Latin America, and Southeast Asia. It represents distance traveled per unit volume of fuel; higher values indicate greater driving range per liter."
  },
  relationship: "Because L/km measures fuel volume consumed per unit distance and km/L measures distance traveled per unit volume, they are exact mathematical reciprocals: km/L = 1 / (L/km).",
  relationshipTitle: "L/km to km/L Benchmark Scale",
  relationshipItems: [
    { label: "0.200 L/km (200 mL/km)", value: "5.00 km/L — Heavy commercial truck / Off-highway vehicle" },
    { label: "0.100 L/km (100 mL/km)", value: "10.00 km/L — Full-size SUV / V6 passenger vehicle" },
    { label: "0.080 L/km (80 mL/km)", value: "12.50 km/L — Standard midsize family car" },
    { label: "0.0625 L/km (62.5 mL/km)", value: "16.00 km/L — Efficient compact hatchback" },
    { label: "0.050 L/km (50 mL/km)", value: "20.00 km/L — Modern gasoline-electric hybrid" },
    { label: "0.040 L/km (40 mL/km)", value: "25.00 km/L — Ultra-efficient full hybrid / Subcompact" }
  ],
  formula: {
    text: "Divide 1 by the fuel consumption value in liters per kilometer to calculate kilometers per liter.",
    math: "km/L = 1 / (L/km)",
    subtext: "To convert in reverse from km/L back to L/km, use the exact same reciprocal: L/km = 1 / (km/L)."
  },
  formulaTitle: "L/km to km/L Inverse Formula",
  practicalTip: {
    title: "Mental Reciprocal Tip",
    text: "Think in round numbers: 0.10 L/km is 10 km/L; 0.05 L/km is 20 km/L; 0.04 L/km is 25 km/L; 0.08 L/km is 12.5 km/L."
  },
  expertNote: {
    title: "Telemetry Data Translation",
    text: "Vehicle onboard diagnostics (OBD-II) scanners often output fuel consumption in grams/sec or milliliters/km. Dividing 1,000 by milliliters per kilometer gives km/L directly (e.g., 50 mL/km = 1,000 ÷ 50 = 20 km/L)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Urban Passenger Sedan",
        subtitle: "Convert a telemetry consumption rate of 0.072 L/km to km/L.",
        steps: [
          "State the fuel consumption: 0.072 L/km.",
          "Apply the reciprocal formula: km/L = 1 ÷ 0.072.",
          "Perform the calculation: 1 ÷ 0.072 = 13.8888...",
          "Result: 0.072 L/km equals approximately 13.89 km/L."
        ]
      },
      {
        title: "Example 2: Commercial Delivery Van",
        subtitle: "Convert a route fuel consumption of 0.11 L/km to km/L.",
        steps: [
          "State the fuel consumption: 0.11 L/km.",
          "Apply the formula: km/L = 1 ÷ 0.11.",
          "Perform the calculation: 1 ÷ 0.11 = 9.0909...",
          "Result: 0.11 L/km equals approximately 9.09 km/L."
        ]
      },
      {
        title: "Example 3: Modern Hybrid Vehicle",
        subtitle: "Convert an eco-mode consumption of 0.044 L/km to km/L.",
        steps: [
          "State the fuel consumption: 0.044 L/km.",
          "Apply the formula: km/L = 1 ÷ 0.044.",
          "Perform the calculation: 1 ÷ 0.044 = 22.7272...",
          "Result: 0.044 L/km equals approximately 22.73 km/L."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Kilometer to Kilometers per Liter Table",
    headers: ["Liters per Kilometer (L/km)", "Kilometers per Liter (km/L)", "Vehicle Efficiency Profile"],
    rows: [
      { fromVal: "0.0333 L/km", toVal: "30.00 km/L", extra: "Ultra Efficient (Plug-in Hybrid / Micro Diesel)" },
      { fromVal: "0.0400 L/km", toVal: "25.00 km/L", extra: "Outstanding (Full Hybrid Compact)" },
      { fromVal: "0.0500 L/km", toVal: "20.00 km/L", extra: "Excellent (Subcompact / Mild Hybrid)" },
      { fromVal: "0.0556 L/km", toVal: "18.00 km/L", extra: "Very Good (Modern Turbo Petrol)" },
      { fromVal: "0.0625 L/km", toVal: "16.00 km/L", extra: "Good (Compact Sedan)" },
      { fromVal: "0.0714 L/km", toVal: "14.00 km/L", extra: "Above Average (Midsize Sedan)" },
      { fromVal: "0.0833 L/km", toVal: "12.00 km/L", extra: "Average (Family Crossover AWD)" },
      { fromVal: "0.1000 L/km", toVal: "10.00 km/L", extra: "Moderate (Large SUV / V6 Engine)" },
      { fromVal: "0.1250 L/km", toVal: "8.00 km/L", extra: "Low Efficiency (Commercial Van)" },
      { fromVal: "0.2000 L/km", toVal: "5.00 km/L", extra: "High Consumption (Heavy Duty Truck)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Automotive Telemetry Dashboards",
        text: "In-vehicle telematics platforms convert low-level fuel flow sensor data in L/km into user-friendly km/L figures for digital cluster displays in Asian and Latin American markets."
      },
      {
        title: "Fleet Fuel Consumption Audits",
        text: "Corporate fleet managers convert fuel purchase volumes per kilometer traveled into standard km/L vehicle performance benchmarks."
      },
      {
        title: "Engine Dyno Calibration",
        text: "Calibration engineers translate test-cell fuel mass measurements in L/km into km/L to verify compliance with national fuel economy labeling requirements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Multiplying 1 by L/km instead of dividing 1 by L/km produces an inverted error.",
      "Confusing L/km with L/100km: 0.08 L/km is 8 L/100km; dividing 1 by 8 instead of 1 by 0.08 produces an incorrect result of 0.125 instead of 12.5 km/L.",
      "Misinterpreting efficiency direction: Lower L/km represents better efficiency, which translates into higher km/L."
    ]
  },
  faqs: [
    {
      question: "How do you convert L/km to km/L?",
      answer: "Divide 1 by the L/km value: km/L = 1 ÷ (L/km). For example, 0.05 L/km equals 1 ÷ 0.05 = 20.0 km/L."
    },
    {
      question: "What is 0.08 L/km in km/L?",
      answer: "0.08 L/km equals exactly 12.50 km/L (1 ÷ 0.08 = 12.5)."
    },
    {
      question: "What is 0.10 L/km in km/L?",
      answer: "0.10 L/km equals exactly 10.00 km/L (1 ÷ 0.10 = 10)."
    },
    {
      question: "What is 0.04 L/km in km/L?",
      answer: "0.04 L/km equals exactly 25.00 km/L (1 ÷ 0.04 = 25)."
    },
    {
      question: "What is 0.0625 L/km in km/L?",
      answer: "0.0625 L/km equals exactly 16.00 km/L (1 ÷ 0.0625 = 16)."
    },
    {
      question: "Why is the relationship between L/km and km/L inverse?",
      answer: "Because L/km measures fuel volume consumed per unit distance, whereas km/L measures distance traveled per unit of fuel volume."
    },
    {
      question: "Is 0.05 L/km better than 0.08 L/km?",
      answer: "Yes, 0.05 L/km equals 20 km/L, which uses less fuel per kilometer than 0.08 L/km (12.5 km/L)."
    },
    {
      question: "How do I convert 15 km/L back to L/km?",
      answer: "Divide 1 by 15: 1 ÷ 15 ≈ 0.0667 L/km (or 66.7 mL/km)."
    }
  ],
  relatedList: [
    { label: "km/L to L/km", from: "km-per-liter", to: "liters-per-km" },
    { label: "L/km to L/100km", from: "liters-per-km", to: "liters-per-100km" },
    { label: "L/km to MPG (US)", from: "liters-per-km", to: "mpg-us" },
    { label: "L/km to MPG (UK)", from: "liters-per-km", to: "mpg-uk" }
  ],
  references: [
    "International Organization for Standardization (ISO 80000-3) — Space and Time Quantities",
    "Japanese Ministry of Land, Infrastructure, Transport and Tourism (MLIT) — WLTC Vehicle Testing Protocols",
    "Society of Automotive Engineers (SAE J1082) — Fuel Economy Measurement Procedures"
  ]
};
