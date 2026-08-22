import { CustomArticleData } from "./types";

export const litersPer100kmToLitersPerKm: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "liters-per-km",
  seoTitle: "Liters per 100km to Liters per Kilometer Converter (L/100km to L/km)",
  metaDescription: "Convert Liters per 100 Kilometers to Liters per Kilometer (L/100km to L/km) directly. Learn the simple division formula (L/100km ÷ 100), examples, conversion table, and FAQs.",
  h1: "Liters per 100km to Liters per Kilometer Converter",
  introduction: [
    "Liters per 100 kilometers (L/100km) and liters per kilometer (L/km) are both direct metric measurements of fuel consumption. Unlike conversions between metric and Imperial units or between consumption and economy ratings, these two units share the exact same mathematical dimensions: volume of fuel consumed per unit distance.",
    "The only difference between them is the distance denominator. Liters per 100km measures fuel burned over a standardized 100-kilometer baseline, whereas liters per kilometer measures fuel burned over a single kilometer. Converting from L/100km to L/km simply requires dividing by 100 (or moving the decimal point two places to the left).",
    "Automotive engineers, powertrain calibrators, telemetry analysts, and fleet managers regularly perform this calculation to determine the exact fuel mass required per kilometer of travel for precise fuel budgeting and route modeling."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers (L/100km) to Liters per Kilometer (L/km), divide the L/100km rating by 100. For example, a vehicle consuming 7.5 L/100km uses exactly 0.075 L/km.",
    formulaDisplay: "L/km = (L/100km) ÷ 100",
    subtext: "Note: This is a direct linear conversion. Both units measure fuel consumption (lower is better)."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Kilometers (L/100km)",
    text: "Liters per 100 kilometers (L/100km) is the standard consumer metric for fuel consumption across Europe, Canada, Australia, and New Zealand. It defines the volume of liquid fuel in liters needed to propel a vehicle for 100 kilometers under standardized testing cycles (such as the WLTP)."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per kilometer (L/km) is the base SI engineering unit for vehicle fuel consumption. It represents the decimal portion of a liter consumed per single kilometer traveled. It is the fundamental metric used in computerized vehicle telemetry and mathematical simulations."
  },
  relationship: "Because both units measure volume per distance, the relationship is directly proportional with a constant scaling factor of 100. 1 L/km equals exactly 100 L/100km, and 1 L/100km equals exactly 0.01 L/km.",
  relationshipTitle: "L/100km to L/km Benchmark Scale",
  relationshipItems: [
    { label: "15.0 L/100km", value: "0.150 L/km (150 mL/km) — Heavy-duty truck / Commercial haulage" },
    { label: "10.0 L/100km", value: "0.100 L/km (100 mL/km) — Full-size SUV / V6 passenger vehicle" },
    { label: "7.5 L/100km", value: "0.075 L/km (75 mL/km) — Average midsize family sedan" },
    { label: "5.0 L/100km", value: "0.050 L/km (50 mL/km) — Modern compact car / Subcompact" },
    { label: "3.5 L/100km", value: "0.035 L/km (35 mL/km) — High-efficiency full hybrid" }
  ],
  formula: {
    text: "Divide the liters per 100 kilometers value by 100 to obtain liters per kilometer.",
    math: "L/km = (L/100km) / 100",
    subtext: "To convert from L/km back to L/100km, multiply by 100: L/100km = (L/km) × 100."
  },
  formulaTitle: "L/100km to L/km Direct Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "You can convert L/100km to L/km instantly by moving the decimal point two places to the left: 8.5 L/100km becomes 0.085 L/km; 6.2 L/100km becomes 0.062 L/km."
  },
  expertNote: {
    title: "Trip Calculation Simplicity",
    text: "Having fuel consumption in L/km allows you to calculate total fuel consumption instantly by multiplying your trip distance in kilometers by your L/km rating. For a 320 km drive at 0.065 L/km: 320 × 0.065 = 20.8 liters of fuel."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Hatchback",
        subtitle: "Convert a highway consumption rating of 5.6 L/100km into L/km.",
        steps: [
          "Identify the fuel consumption: 5.6 L/100km.",
          "Apply the formula: L/km = 5.6 ÷ 100.",
          "Perform the calculation: 5.6 ÷ 100 = 0.056.",
          "Result: 5.6 L/100km equals exactly 0.056 L/km (or 56 milliliters per kilometer)."
        ]
      },
      {
        title: "Example 2: All-Wheel Drive SUV",
        subtitle: "Convert a combined rating of 8.9 L/100km into L/km.",
        steps: [
          "Identify the fuel consumption: 8.9 L/100km.",
          "Apply the formula: L/km = 8.9 ÷ 100.",
          "Perform the calculation: 8.9 ÷ 100 = 0.089.",
          "Result: 8.9 L/100km equals exactly 0.089 L/km."
        ]
      },
      {
        title: "Example 3: Heavy Commercial Bus",
        subtitle: "Convert a transit bus consumption rating of 28.0 L/100km into L/km.",
        steps: [
          "Identify the fuel consumption: 28.0 L/100km.",
          "Apply the formula: L/km = 28.0 ÷ 100.",
          "Perform the calculation: 28.0 ÷ 100 = 0.28.",
          "Result: 28.0 L/100km equals exactly 0.28 L/km."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to Liters per Kilometer Table",
    headers: ["Liters per 100km (L/100km)", "Liters per Kilometer (L/km)", "Volume in Milliliters per km"],
    rows: [
      { fromVal: "3.0 L/100km", toVal: "0.0300 L/km", extra: "30.0 mL/km (Plug-in Hybrid / Micro Diesel)" },
      { fromVal: "4.0 L/100km", toVal: "0.0400 L/km", extra: "40.0 mL/km (Full Hybrid)" },
      { fromVal: "5.0 L/100km", toVal: "0.0500 L/km", extra: "50.0 mL/km (Efficient Subcompact)" },
      { fromVal: "6.0 L/100km", toVal: "0.0600 L/km", extra: "60.0 mL/km (Compact Sedan)" },
      { fromVal: "7.0 L/100km", toVal: "0.0700 L/km", extra: "70.0 mL/km (Midsize Sedan)" },
      { fromVal: "8.0 L/100km", toVal: "0.0800 L/km", extra: "80.0 mL/km (Compact SUV)" },
      { fromVal: "9.0 L/100km", toVal: "0.0900 L/km", extra: "90.0 mL/km (Midsize SUV)" },
      { fromVal: "10.0 L/100km", toVal: "0.1000 L/km", extra: "100.0 mL/km (Large SUV / V6)" },
      { fromVal: "12.0 L/100km", toVal: "0.1200 L/km", extra: "120.0 mL/km (Full-Size 4x4)" },
      { fromVal: "15.0 L/100km", toVal: "0.1500 L/km", extra: "150.0 mL/km (Heavy Commercial Van)" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Exact Route Fuel Budgeting",
        text: "GPS fleet routing engines convert L/100km vehicle profiles into L/km to compute exact fuel consumption along turn-by-turn road networks."
      },
      {
        title: "Emissions Telemetry Integration",
        text: "Automotive test rigs measure emissions per kilometer by multiplying fuel rate in L/km by fuel density and carbon intensity constants."
      },
      {
        title: "Onboard Vehicle Computer Programming",
        text: "Vehicle instrument clusters convert trip consumption data into L/km internally to display remaining driving distance based on current fuel tank levels in liters."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Multiplying L/100km by 100 produces an inflated number that is 10,000 times larger than the true value.",
      "Misplacing the decimal: Shifting the decimal one place instead of two places gives 0.8 L/km instead of the correct 0.08 L/km for an 8 L/100km vehicle.",
      "Confusing consumption with efficiency: Both L/100km and L/km are consumption metrics where lower values represent superior economy."
    ]
  },
  faqs: [
    {
      question: "How do you convert L/100km to L/km?",
      answer: "Divide the L/100km number by 100: L/km = (L/100km) ÷ 100. For example, 8.0 L/100km equals 8.0 ÷ 100 = 0.08 L/km."
    },
    {
      question: "What is 7 L/100km in L/km?",
      answer: "7 L/100km equals exactly 0.07 L/km (or 70 mL of fuel per kilometer)."
    },
    {
      question: "What is 5.5 L/100km in L/km?",
      answer: "5.5 L/100km equals exactly 0.055 L/km (55 mL of fuel per kilometer)."
    },
    {
      question: "What is 10 L/100km in L/km?",
      answer: "10 L/100km equals exactly 0.10 L/km (100 mL of fuel per kilometer)."
    },
    {
      question: "How many milliliters per kilometer is 6 L/100km?",
      answer: "6 L/100km equals 0.06 L/km, which is exactly 60 milliliters of fuel per kilometer."
    },
    {
      question: "Why are L/100km and L/km directly proportional?",
      answer: "Because both units measure the volume of fuel consumed per distance, differing only by a scale factor of 100."
    },
    {
      question: "How do I calculate total fuel needed for a 500 km trip with an 8 L/100km rating?",
      answer: "Convert 8 L/100km to 0.08 L/km, then multiply by 500 km: 0.08 × 500 = 40 liters of fuel."
    },
    {
      question: "How do I convert L/km back to L/100km?",
      answer: "Multiply the L/km value by 100: L/100km = (L/km) × 100."
    }
  ],
  relatedList: [
    { label: "L/km to L/100km", from: "liters-per-km", to: "liters-per-100km" },
    { label: "L/100km to km/L", from: "liters-per-100km", to: "km-per-liter" },
    { label: "L/100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "L/km to km/L", from: "liters-per-km", to: "km-per-liter" }
  ],
  references: [
    "International Organization for Standardization (ISO 80000-1) — Quantities and Units",
    "Bureau International des Poids et Mesures (BIPM) — The International System of Units (SI)",
    "Society of Automotive Engineers (SAE J1312) — Fuel Economy Measurement Procedures"
  ]
};
