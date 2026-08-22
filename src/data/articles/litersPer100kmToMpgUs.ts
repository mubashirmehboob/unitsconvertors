import { CustomArticleData } from "./types";

export const litersPer100kmToMpgUs: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "mpg-us",
  seoTitle: "Liters per 100km to MPG (US) Converter (L/100km to MPG)",
  metaDescription: "Convert Liters per 100 Kilometers to US Miles per Gallon (L/100km to MPG US) instantly. Master the 235.215 inverse formula, worked examples, tables, and FAQs.",
  h1: "Liters per 100km to MPG (US) Converter",
  introduction: [
    "Liters per 100 kilometers (L/100km) and US Miles per Gallon (MPG US) represent two distinct measurement philosophies in the automotive industry. Liters per 100km is the standard metric consumption benchmark used across Europe, Canada, and Australia, measuring how much fuel is burned over 100 km. US Miles per Gallon is the primary distance-per-volume efficiency rating used by the United States EPA.",
    "Because these units are reciprocals of each other—one measuring fuel burned over fixed distance, and the other measuring distance covered on a fixed volume of fuel—their mathematical conversion is inverse. Converting between them requires dividing the fundamental conversion constant of 235.214583 by the known value.",
    "Whether comparing international automotive specifications, importing an overseas vehicle, or understanding fuel economy readouts while traveling, mastering this conversion allows direct and accurate comparisons between global vehicle efficiency standards."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers (L/100km) to US Miles per Gallon (MPG US), divide 235.215 by the L/100km value. For example, a car consuming 8.0 L/100km achieves approximately 29.40 MPG (US).",
    formulaDisplay: "MPG (US) = 235.214583 ÷ (L/100km)",
    subtext: "Note: This is an inverse relationship. A lower L/100km rating produces a higher (better) MPG (US) rating."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Kilometers (L/100km)",
    text: "Liters per 100 kilometers (L/100km) is the standardized metric fuel consumption rating defined under UNECE and ISO protocols. It measures the total volume of fuel burned to drive 100 kilometers. Lower figures indicate superior fuel economy and lower operating costs."
  },
  aboutTargetUnit: {
    title: "Understanding US Miles per Gallon (MPG US)",
    text: "Miles per Gallon (US) is the statutory fuel economy standard established by the US Environmental Protection Agency (EPA). It indicates how many statute miles (1,609.344 meters) a vehicle travels using one US liquid gallon (3.785411784 liters). Higher values denote superior economy."
  },
  relationship: "Because L/100km is a consumption unit (volume/distance) and MPG is an economy unit (distance/volume), they are inversely proportional. The conversion constant is mathematically derived as: (100 km / 1.609344 km per mile) × 3.785411784 liters per gallon = 235.214583.",
  relationshipTitle: "L/100km to US MPG Benchmark Comparison",
  relationshipItems: [
    { label: "15.0 L/100km", value: "15.68 MPG (US) — Heavy-duty pickup / High-performance V8" },
    { label: "10.0 L/100km", value: "23.52 MPG (US) — Midsize crossover SUV / V6 sedan" },
    { label: "8.0 L/100km", value: "29.40 MPG (US) — Standard 4-cylinder passenger car" },
    { label: "6.0 L/100km", value: "39.20 MPG (US) — Efficient compact commuter / Turbocharged 3-cylinder" },
    { label: "4.5 L/100km", value: "52.27 MPG (US) — Modern gasoline-electric hybrid" }
  ],
  formula: {
    text: "Divide the mathematical conversion constant 235.214583 by the fuel consumption value in liters per 100 kilometers.",
    math: "MPG (US) = 235.214583 / (L/100km)",
    subtext: "To convert in reverse from US MPG to L/100km, use the exact same constant: L/100km = 235.214583 / MPG (US)."
  },
  formulaTitle: "L/100km to MPG (US) Inverse Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb Benchmarks",
    text: "Keep a few common conversion anchors in mind: 10 L/100km = 23.5 MPG, 8 L/100km = 29.4 MPG, 6 L/100km = 39.2 MPG, and 5 L/100km = 47.0 MPG."
  },
  expertNote: {
    title: "The MPG Illusion vs. L/100km",
    text: "Behavioral economists highlight the 'MPG Illusion': improving fuel economy from 10 to 15 MPG saves 33.3 gallons over 1,000 miles, whereas improving from 30 to 35 MPG saves only 4.8 gallons. L/100km prevents this misunderstanding because it represents fuel volume directly and linearly."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Compact Hatchback",
        subtitle: "Convert a European rating of 6.5 L/100km to US MPG.",
        steps: [
          "Identify the fuel consumption rating: 6.5 L/100km.",
          "Apply the conversion formula: MPG (US) = 235.214583 ÷ 6.5.",
          "Perform the calculation: 235.214583 ÷ 6.5 = 36.18686...",
          "Result: 6.5 L/100km equals approximately 36.19 MPG (US)."
        ]
      },
      {
        title: "Example 2: All-Wheel Drive SUV",
        subtitle: "Convert a Canadian city consumption rating of 9.2 L/100km to US MPG.",
        steps: [
          "Identify the fuel consumption rating: 9.2 L/100km.",
          "Apply the conversion formula: MPG (US) = 235.214583 ÷ 9.2.",
          "Perform the calculation: 235.214583 ÷ 9.2 = 25.5668...",
          "Result: 9.2 L/100km equals approximately 25.57 MPG (US)."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid",
        subtitle: "Convert a highway rating of 4.2 L/100km into US MPG.",
        steps: [
          "Identify the fuel consumption rating: 4.2 L/100km.",
          "Apply the conversion formula: MPG (US) = 235.214583 ÷ 4.2.",
          "Perform the calculation: 235.214583 ÷ 4.2 = 56.00347...",
          "Result: 4.2 L/100km equals approximately 56.00 MPG (US)."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to US MPG Conversion Table",
    headers: ["Liters per 100km (L/100km)", "US Miles per Gallon (MPG US)", "Vehicle Class Profile"],
    rows: [
      { fromVal: "3.5 L/100km", toVal: "67.20 MPG", extra: "Ultra-Efficient Hybrid / Compact Diesel" },
      { fromVal: "4.0 L/100km", toVal: "58.80 MPG", extra: "Modern Full Hybrid (Prius / Ioniq class)" },
      { fromVal: "5.0 L/100km", toVal: "47.04 MPG", extra: "Subcompact / Turbo Diesel" },
      { fromVal: "6.0 L/100km", toVal: "39.20 MPG", extra: "Efficient Compact Sedan" },
      { fromVal: "7.0 L/100km", toVal: "33.60 MPG", extra: "Midsize 4-Cylinder Sedan" },
      { fromVal: "8.0 L/100km", toVal: "29.40 MPG", extra: "Compact Crossover / Small SUV" },
      { fromVal: "9.0 L/100km", toVal: "26.13 MPG", extra: "Midsize All-Wheel Drive SUV" },
      { fromVal: "10.0 L/100km", toVal: "23.52 MPG", extra: "Full-Size Crossover / V6 Sedan" },
      { fromVal: "12.0 L/100km", toVal: "19.60 MPG", extra: "Full-Size SUV / Light Truck" },
      { fromVal: "15.0 L/100km", toVal: "15.68 MPG", extra: "Heavy-Duty Truck / Performance V8" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Vehicle Import Compliance",
        text: "Importers bringing European or Canadian market vehicles to the United States convert window sticker L/100km ratings to EPA MPG ratings for Department of Transportation registration."
      },
      {
        title: "International Automotive Journalism",
        text: "Automotive journalists and test drivers translate European WLTP test cycle consumption data (L/100km) into familiar US MPG values for North American readers."
      },
      {
        title: "Rental Car Expense Tracking",
        text: "US business travelers driving abroad in Canada or Europe convert onboard trip computer readouts (L/100km) to estimate mileage reimbursement in US currency."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Multiplying L/100km by 235.215 produces incorrect figures because the metrics are inverse reciprocals.",
      "Confusing US MPG with UK MPG: The UK Imperial gallon is 20% larger than the US gallon, requiring a constant of 282.481 instead of 235.215.",
      "Rounding the conversion constant prematurely: Using 235 instead of 235.215 introduces rounding inaccuracies on high-efficiency ratings."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100km to US MPG?",
      answer: "Divide 235.215 by your L/100km figure: MPG (US) = 235.214583 ÷ (L/100km). For instance, 7.5 L/100km converted is 235.215 ÷ 7.5 = 31.36 MPG."
    },
    {
      question: "What is 8 L/100km in US MPG?",
      answer: "8 L/100km equals approximately 29.40 US MPG (235.215 ÷ 8 = 29.4018)."
    },
    {
      question: "What is 6 L/100km in US MPG?",
      answer: "6 L/100km equals approximately 39.20 US MPG (235.215 ÷ 6 = 39.2024)."
    },
    {
      question: "What is 10 L/100km in US MPG?",
      answer: "10 L/100km equals approximately 23.52 US MPG (235.215 ÷ 10 = 23.5215)."
    },
    {
      question: "Is 5 L/100km good fuel economy in US MPG?",
      answer: "Yes, 5 L/100km equals 47.04 US MPG, which is considered outstanding fuel economy typical of modern hybrids."
    },
    {
      question: "Why does US MPG increase when L/100km decreases?",
      answer: "Because L/100km measures fuel consumed (where less fuel is better), while MPG measures distance traveled (where more miles is better)."
    },
    {
      question: "How does 4.5 L/100km compare to US MPG?",
      answer: "4.5 L/100km equals approximately 52.27 US MPG."
    },
    {
      question: "Can I use the 235.215 constant for UK gallons?",
      answer: "No. For UK Imperial MPG, you must use 282.481 because the Imperial gallon contains 4.546 liters compared to 3.785 liters for the US gallon."
    }
  ],
  relatedList: [
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "L/100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "L/100km to km/L", from: "liters-per-100km", to: "km-per-liter" },
    { label: "L/100km to L/km", from: "liters-per-100km", to: "liters-per-km" }
  ],
  references: [
    "US Environmental Protection Agency (EPA) — Regulations on Fuel Economy Labeling",
    "United Nations Economic Commission for Europe (UNECE) — Worldwide Harmonised Light Vehicle Test Procedure (WLTP)",
    "Society of Automotive Engineers (SAE J1082) — Fuel Economy Measurement Procedures"
  ]
};
