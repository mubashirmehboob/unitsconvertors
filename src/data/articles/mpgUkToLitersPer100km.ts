import { CustomArticleData } from "./types";

export const mpgUkToLitersPer100km: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "liters-per-100km",
  seoTitle: "MPG (UK) to Liters per 100km Converter (Imperial MPG to L/100km)",
  metaDescription: "Convert UK (Imperial) Miles per Gallon to Liters per 100km (MPG to L/100km) instantly. Learn the 282.481 inverse constant formula, tables, and FAQs.",
  h1: "MPG (UK) to Liters per 100km Converter",
  introduction: [
    "UK Miles per Gallon (Imperial MPG) and Liters per 100 Kilometers (L/100km) are two primary fuel consumption metrics utilized across the United Kingdom and continental Europe. While British drivers traditionally evaluate fuel economy using Imperial MPG (distance-per-volume), official European Union regulations and modern car displays state consumption in Liters per 100km (volume-per-distance).",
    "Because these metrics have reciprocal relationships, converting between UK Imperial MPG and L/100km requires an inverse division formula. The exact mathematical constant for Imperial gallons and statute miles is 282.480936. Dividing 282.481 by your UK MPG figure gives the exact equivalent in Liters per 100 Kilometers.",
    "This technical guide explains the mathematical origin of the 282.481 constant, provides step-by-step conversion examples across passenger car classes, supplies comprehensive lookup tables, and answers common European automotive questions."
  ],
  quickAnswer: {
    text: "To convert UK (Imperial) Miles per Gallon [MPG (UK)] to Liters per 100 Kilometers [L/100km], divide 282.481 by the UK MPG rating. For example, a car getting 40 Imperial MPG consumes 7.06 L/100km.",
    formulaDisplay: "L/100km = 282.480936 ÷ MPG (UK)",
    subtext: "Note: This is an inverse formula. Higher UK MPG means lower (better) L/100km."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (UK)",
    text: "Miles per Gallon (UK or Imperial) is the fuel efficiency metric traditionally used in Great Britain. It measures how many statute miles (1,609.344 meters) a vehicle travels per Imperial gallon (4.54609 liters) of fuel."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) is the standardized metric fuel consumption unit used across continental Europe, Canada, Australia, and New Zealand. It measures fuel volume consumed over a 100-kilometer distance."
  },
  relationship: "Imperial MPG and L/100km are inversely proportional. The formula constant is calculated as: (100 km / 1.609344 km/mi) × 4.54609 L/gal = 282.480936.",
  relationshipTitle: "UK MPG vs L/100km Scale Comparison",
  relationshipItems: [
    { label: "20 MPG (UK)", value: "14.12 L/100km — High-performance sports car / Large SUV" },
    { label: "30 MPG (UK)", value: "9.42 L/100km — Executive sedan / Crossover" },
    { label: "40 MPG (UK)", value: "7.06 L/100km — Compact family hatchback" },
    { label: "50 MPG (UK)", value: "5.65 L/100km — Efficient subcompact / Mild hybrid" },
    { label: "60 MPG (UK)", value: "4.71 L/100km — Full hybrid passenger car" }
  ],
  formula: {
    text: "Divide the constant 282.480936 by the UK Imperial Miles per Gallon value to get Liters per 100 Kilometers.",
    math: "L/100km = 282.480936 / MPG (UK)",
    subtext: "To convert from L/100km back to UK MPG, divide 282.480936 by the L/100km value."
  },
  formulaTitle: "UK MPG to L/100km Inverse Conversion Formula",
  practicalTip: {
    title: "Quick Reference Benchmarks",
    text: "Memorize key points: 30 UK MPG ≈ 9.4 L/100km; 40 UK MPG ≈ 7.1 L/100km; 50 UK MPG ≈ 5.7 L/100km; 60 UK MPG ≈ 4.7 L/100km."
  },
  expertNote: {
    title: "UK Transition to Metric Displays",
    text: "Although UK petrol stations sell fuel strictly in liters, UK trip computers often allow switching between Imperial MPG and L/100km. Driver assistance systems use 282.481 internally to toggle display metrics."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Hatchback Rating",
        subtitle: "Convert a UK hatchback rating of 45 Imperial MPG into L/100km.",
        steps: [
          "Identify UK fuel economy: 45 MPG (UK).",
          "Apply constant formula: L/100km = 282.480936 ÷ 45.",
          "Calculate: 282.480936 ÷ 45 = 6.27735.",
          "Result: 45 UK MPG equals approximately 6.28 L/100km."
        ]
      },
      {
        title: "Example 2: Executive Diesel Saloon",
        subtitle: "Convert a British turbodiesel saloon rating of 58 UK MPG into L/100km.",
        steps: [
          "Identify rating: 58 MPG (UK).",
          "Divide constant: 282.480936 ÷ 58 = 4.87036.",
          "Result: 58 UK MPG equals 4.87 L/100km."
        ]
      },
      {
        title: "Example 3: SUV Consumption Rate",
        subtitle: "Convert an SUV rating of 28 Imperial MPG into L/100km for European travel.",
        steps: [
          "Identify rating: 28 MPG (UK).",
          "Apply formula: 282.480936 ÷ 28 = 10.0886.",
          "Result: 28 UK MPG equals 10.09 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "UK Imperial MPG to Liters per 100km Conversion Table",
    headers: ["MPG (UK)", "Liters per 100km (L/100km)", "Efficiency Profile"],
    rows: [
      { fromVal: "15 MPG", toVal: "18.83 L/100km", extra: "Very High Consumption (Performance V8)" },
      { fromVal: "20 MPG", toVal: "14.12 L/100km", extra: "High Consumption (Luxury SUV)" },
      { fromVal: "25 MPG", toVal: "11.30 L/100km", extra: "Moderate Consumption (Large Crossover)" },
      { fromVal: "30 MPG", toVal: "9.42 L/100km", extra: "Average Consumption (Family Saloon)" },
      { fromVal: "35 MPG", toVal: "8.07 L/100km", extra: "Good Efficiency (Compact Crossover)" },
      { fromVal: "40 MPG", toVal: "7.06 L/100km", extra: "Very Good Efficiency (Compact Hatchback)" },
      { fromVal: "45 MPG", toVal: "6.28 L/100km", extra: "Great Efficiency (Subcompact / Turbo)" },
      { fromVal: "50 MPG", toVal: "5.65 L/100km", extra: "Excellent Efficiency (Mild Hybrid)" },
      { fromVal: "60 MPG", toVal: "4.71 L/100km", extra: "Exceptional Efficiency (Full Hybrid)" },
      { fromVal: "70 MPG", toVal: "4.04 L/100km", extra: "Ultra Efficient (Plug-in Hybrid / Diesel)" }
    ]
  },
  applications: {
    title: "Practical Applications of UK MPG to L/100km Conversion",
    items: [
      {
        title: "Driving in Continental Europe",
        text: "British motorists driving through France, Spain, or Germany convert dashboard MPG into L/100km to evaluate trip fuel costs against local metric fuel station prices."
      },
      {
        title: "Automotive Import/Export Compliance",
        text: "Importing a UK vehicle into EU member states requires stating official WLTP fuel economy figures in L/100km for registration and carbon tax calculations."
      },
      {
        title: "Cross-Border Fleet Management",
        text: "Logistics companies operating delivery fleets across the English Channel standardize fuel consumption logs into L/100km."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using the US MPG constant (235.215) instead of the UK MPG constant (282.481): Using 235.215 produces a 20% error because a US gallon is smaller than an Imperial gallon.",
      "Multiplying instead of dividing: Because the relationship is inverse, multiplying UK MPG by 282.481 yields invalid numbers.",
      "Confusing L/100km direction: Lower numbers in L/100km mean better fuel efficiency, whereas higher numbers in MPG mean better fuel efficiency."
    ]
  },
  faqs: [
    {
      question: "What is 40 UK MPG in L/100km?",
      answer: "40 UK Imperial MPG equals approximately 7.06 L/100km (282.481 ÷ 40 = 7.062)."
    },
    {
      question: "What constant is used to convert UK MPG to L/100km?",
      answer: "The constant factor is 282.480936 (commonly rounded to 282.481)."
    },
    {
      question: "Why is the UK MPG constant (282.481) different from the US MPG constant (235.215)?",
      answer: "The constants differ because an Imperial (UK) gallon is roughly 20% larger than a US fluid gallon (4.546 L vs 3.785 L)."
    },
    {
      question: "How many L/100km is 50 UK MPG?",
      answer: "50 UK MPG equals approximately 5.65 L/100km."
    },
    {
      question: "How do I convert L/100km back to UK MPG?",
      answer: "Divide 282.480936 by the L/100km figure (e.g., 282.481 ÷ 5.65 = 50 UK MPG)."
    },
    {
      question: "Is 6 L/100km good in UK MPG terms?",
      answer: "Yes, 6 L/100km equals approximately 47.08 UK Imperial MPG, representing excellent fuel economy."
    },
    {
      question: "What is 30 UK MPG in L/100km?",
      answer: "30 UK MPG equals approximately 9.42 L/100km."
    },
    {
      question: "What is 60 UK MPG in L/100km?",
      answer: "60 UK MPG equals approximately 4.71 L/100km."
    }
  ],
  relatedList: [
    { label: "L/100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (UK) to L/km", from: "mpg-uk", to: "liters-per-km" }
  ],
  references: [
    "UK Department for Transport — Fuel Consumption Testing Regulations and Conversion Constants",
    "European Environment Agency (EEA) — CO2 Emissions and Fuel Consumption Monitoring",
    "International Organization for Standardization (ISO) 80000-3 — Space and Time Quantities"
  ]
};
