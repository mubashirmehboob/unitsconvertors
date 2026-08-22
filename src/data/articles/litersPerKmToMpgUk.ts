import { CustomArticleData } from "./types";

export const litersPerKmToMpgUk: CustomArticleData = {
  fromUnitId: "liters-per-km",
  toUnitId: "mpg-uk",
  seoTitle: "Liters per Kilometer to MPG (UK) Converter (L/km to MPG Imperial)",
  metaDescription: "Convert Liters per Kilometer to UK Miles per Gallon (L/km to MPG UK Imperial) instantly. Learn the 2.82481 constant formula, worked steps, tables, and FAQs.",
  h1: "Liters per Kilometer to MPG (UK) Converter",
  introduction: [
    "Liters per kilometer (L/km) and UK Miles per Gallon (MPG Imperial) are automotive efficiency measures used across engineering, commercial transport, and consumer motoring in the United Kingdom and Europe. Liters per kilometer represents a direct metric fuel consumption rate (liters burned per kilometer traveled), whereas UK Miles per Gallon is the statutory consumer fuel economy metric in Britain (miles traveled per Imperial gallon).",
    "Because L/km is a consumption metric (where lower numbers represent superior efficiency) and UK MPG is an economy metric (where higher numbers represent superior efficiency), their relationship is mathematically reciprocal. Converting between them requires dividing the Imperial conversion constant 2.82480936 by the known value.",
    "This guide covers the mathematical derivation of the 2.82481 constant, provides detailed step-by-step conversion examples for various passenger vehicles and commercial haulage fleets, provides comprehensive conversion tables, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert Liters per Kilometer (L/km) to UK Miles per Gallon (MPG UK), divide 2.82480936 by the L/km value. For example, a car consuming 0.07 L/km achieves approximately 40.35 MPG (UK).",
    formulaDisplay: "MPG (UK) = 2.82480936 ÷ (L/km)",
    subtext: "Note: This is an inverse conversion. An Imperial gallon equals 4.54609 liters, making UK MPG figures ~20% higher than US MPG."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per kilometer (L/km) is the base metric engineering unit for fuel consumption. It quantifies the decimal volume of fuel in liters burned to cover a distance of one kilometer. Widely applied in automotive powertrain engineering, dynamometer logging, and vehicle modeling, lower values denote higher fuel efficiency."
  },
  aboutTargetUnit: {
    title: "Understanding UK Miles per Gallon (MPG UK)",
    text: "UK Miles per Gallon (MPG Imperial) is the traditional consumer fuel economy rating used throughout Great Britain and Northern Ireland. It defines the number of statute miles (1,609.344 meters) a vehicle travels per Imperial gallon (exactly 4.54609 liters under the UK Weights and Measures Act)."
  },
  relationship: "Because L/km measures fuel volume consumed per unit distance and UK MPG measures distance covered per unit volume, they are inverse reciprocals. The conversion factor is derived as: (1 mi / 1.609344 km) × (4.54609 L / 1 gal UK) = 2.82480936 (L·mi)/(km·gal UK).",
  relationshipTitle: "L/km to UK MPG Benchmark Comparison",
  relationshipItems: [
    { label: "0.150 L/km (150 mL/km)", value: "18.83 MPG (UK) — Heavy commercial transport / Performance V8" },
    { label: "0.100 L/km (100 mL/km)", value: "28.25 MPG (UK) — Full-size 4x4 / Large petrol SUV" },
    { label: "0.070 L/km (70 mL/km)", value: "40.35 MPG (UK) — Standard family saloon / 1.5L Petrol" },
    { label: "0.050 L/km (50 mL/km)", value: "56.50 MPG (UK) — Efficient turbodiesel / Modern compact" },
    { label: "0.040 L/km (40 mL/km)", value: "70.62 MPG (UK) — Full hybrid / Eco subcompact" }
  ],
  formula: {
    text: "Divide the Imperial constant 2.82480936 by the fuel consumption value in liters per kilometer.",
    math: "MPG (UK) = 2.82480936 / (L/km)",
    subtext: "To convert in reverse from UK MPG to L/km, use the exact same constant: L/km = 2.82480936 / MPG (UK)."
  },
  formulaTitle: "L/km to UK Imperial MPG Inverse Formula",
  practicalTip: {
    title: "Mental Calculation Method",
    text: "If you know your vehicle's L/100km rating, divide 282.481 by that number to get UK MPG directly, or multiply L/km by 100 first: 0.06 L/km × 100 = 6.0 L/100km; 282.481 ÷ 6.0 = 47.08 MPG (UK)."
  },
  expertNote: {
    title: "British Fleet Telemetry",
    text: "Commercial telematics providers in the UK track fleet CAN bus fuel injector pulses in liters per kilometer. Translating raw L/km data into Imperial MPG allows fleet managers to produce driver league tables and track fuel efficiency bonuses against UK industry benchmarks."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Family Estate",
        subtitle: "Convert a telemetry fuel consumption rate of 0.058 L/km to UK Imperial MPG.",
        steps: [
          "State the fuel consumption rate: 0.058 L/km.",
          "Apply the formula: MPG (UK) = 2.82480936 ÷ 0.058.",
          "Perform the calculation: 2.82480936 ÷ 0.058 = 48.7036...",
          "Result: 0.058 L/km equals approximately 48.70 MPG (UK)."
        ]
      },
      {
        title: "Example 2: Commercial Delivery Van",
        subtitle: "Convert an urban route consumption rate of 0.095 L/km to UK MPG.",
        steps: [
          "State the fuel consumption rate: 0.095 L/km.",
          "Apply the formula: MPG (UK) = 2.82480936 ÷ 0.095.",
          "Perform the calculation: 2.82480936 ÷ 0.095 = 29.7348...",
          "Result: 0.095 L/km equals approximately 29.73 MPG (UK)."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid Hatchback",
        subtitle: "Convert a consumption rate of 0.042 L/km to UK Imperial MPG.",
        steps: [
          "State the fuel consumption rate: 0.042 L/km.",
          "Apply the formula: MPG (UK) = 2.82480936 ÷ 0.042.",
          "Perform the calculation: 2.82480936 ÷ 0.042 = 67.2573...",
          "Result: 0.042 L/km equals approximately 67.26 MPG (UK)."
        ]
      }
    ]
  },
  table: {
    title: "Liters per Kilometer to UK MPG Conversion Table",
    headers: ["Liters per Kilometer (L/km)", "UK Miles per Gallon (MPG UK)", "Vehicle Efficiency Profile"],
    rows: [
      { fromVal: "0.035 L/km", toVal: "80.71 MPG", extra: "Ultra Efficient (Plug-in Hybrid / Micro Diesel)" },
      { fromVal: "0.040 L/km", toVal: "70.62 MPG", extra: "Outstanding (Full Hybrid B-Segment)" },
      { fromVal: "0.045 L/km", toVal: "62.77 MPG", extra: "Excellent (Modern Turbodiesel Saloon)" },
      { fromVal: "0.050 L/km", toVal: "56.50 MPG", extra: "Very Good (Compact Hatchback)" },
      { fromVal: "0.060 L/km", toVal: "47.08 MPG", extra: "Good (Family Crossover / 1.5L Turbo Petrol)" },
      { fromVal: "0.070 L/km", toVal: "40.35 MPG", extra: "Average (Midsize Petrol Saloon)" },
      { fromVal: "0.080 L/km", toVal: "35.31 MPG", extra: "Moderate (Compact All-Wheel Drive SUV)" },
      { fromVal: "0.100 L/km", toVal: "28.25 MPG", extra: "Moderate-High (Large SUV / 6-Cylinder)" },
      { fromVal: "0.120 L/km", toVal: "23.54 MPG", extra: "High Consumption (Performance Saloon / 4x4)" },
      { fromVal: "0.150 L/km", toVal: "18.83 MPG", extra: "Very High Consumption (Heavy Commercial Van)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "UK Commercial Fleet Telematics",
        text: "Telematics software converts real-time fuel meter flow data recorded in L/km into UK MPG reports to monitor driver performance and reduce fleet emissions."
      },
      {
        title: "British Cross-Channel Freight Operations",
        text: "Haulage operators traveling between continental Europe and the UK translate telemetry consumption metrics into UK MPG for accounting and compliance with British road transport standards."
      },
      {
        title: "Vehicle Dyno and Engine Calibration",
        text: "Automotive test engineers convert test-bench fuel consumption rates in L/km directly into UK Imperial MPG to verify UK VCA certification requirements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Using the US factor (2.35215): The UK Imperial gallon is 20% larger than the US gallon, requiring 2.82481 rather than 2.35215.",
      "Confusing L/km with L/100km: 1 L/km equals 100 L/100km; make sure to use 2.82481 for L/km and 282.481 for L/100km.",
      "Inverting calculation direction: Multiplying instead of dividing leads to nonsensical figures."
    ]
  },
  faqs: [
    {
      question: "How do you convert L/km to UK MPG?",
      answer: "Divide 2.82480936 by the L/km value: MPG (UK) = 2.82480936 ÷ (L/km). For example, 0.06 L/km equals 2.82480936 ÷ 0.06 = 47.08 MPG (UK)."
    },
    {
      question: "What is 0.08 L/km in UK MPG?",
      answer: "0.08 L/km equals approximately 35.31 UK MPG (2.82480936 ÷ 0.08 = 35.3101)."
    },
    {
      question: "What is 0.05 L/km in UK MPG?",
      answer: "0.05 L/km equals approximately 56.50 UK MPG (2.82480936 ÷ 0.05 = 56.4962)."
    },
    {
      question: "What is 0.10 L/km in UK MPG?",
      answer: "0.10 L/km equals approximately 28.25 UK MPG (2.82480936 ÷ 0.10 = 28.2481)."
    },
    {
      question: "Why is UK MPG higher than US MPG for the same L/km value?",
      answer: "Because an Imperial gallon contains 4.546 liters, which is 20.09% more fuel than a US gallon (3.785 liters). A vehicle travels further on a larger gallon."
    },
    {
      question: "What is 0.04 L/km in UK MPG?",
      answer: "0.04 L/km equals approximately 70.62 UK MPG."
    },
    {
      question: "How do I convert 50 UK MPG back to L/km?",
      answer: "Divide 2.82480936 by 50: 2.82480936 ÷ 50 ≈ 0.0565 L/km (56.5 mL of fuel per kilometer)."
    },
    {
      question: "What is the exact constant used for L/km to UK MPG?",
      answer: "The exact conversion constant is 2.82480936 (derived from 4.54609 ÷ 1.609344)."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to L/km", from: "mpg-uk", to: "liters-per-km" },
    { label: "L/km to MPG (US)", from: "liters-per-km", to: "mpg-us" },
    { label: "L/km to L/100km", from: "liters-per-km", to: "liters-per-100km" },
    { label: "L/km to km/L", from: "liters-per-km", to: "km-per-liter" }
  ],
  references: [
    "UK Vehicle Certification Agency (VCA) — Fuel Consumption Guidelines",
    "UK Weights and Measures Act 1985 — Imperial Gallon Standards",
    "Society of Automotive Engineers (SAE J1312) — Procedures for Fuel Economy"
  ]
};
