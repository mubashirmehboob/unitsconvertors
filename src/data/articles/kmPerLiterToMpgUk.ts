import { CustomArticleData } from "./types";

export const kmPerLiterToMpgUk: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "mpg-uk",
  seoTitle: "Kilometers per Liter to MPG (UK) Converter (km/L to Imperial MPG)",
  metaDescription: "Convert Kilometers per Liter to UK Imperial Miles per Gallon (km/L to MPG) instantly. Learn the 2.82481 conversion multiplier, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Liter to MPG (UK) Converter",
  introduction: [
    "Kilometers per Liter (km/L) and UK Imperial Miles per Gallon (MPG UK) are distance-per-volume fuel efficiency metrics used across different global markets. While motorists in Japan, India, Brazil, and Southeast Asia measure vehicle economy in Kilometers per Liter, drivers and motoring publications in Great Britain evaluate fuel mileage in Imperial Miles per Gallon.",
    "Because both metrics measure distance achieved per unit of fuel, their conversion relationship is directly proportional. One kilometer per liter equals approximately 2.824809 UK Imperial Miles per Gallon. Multiplying any km/L rating by 2.82481 yields its exact equivalent in Imperial MPG.",
    "This reference guide details the mathematical derivation of the 2.82481 conversion multiplier, provides step-by-step calculation examples for various automobile categories, supplies comprehensive lookup tables, and answers common international automotive questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter [km/L] to UK Imperial Miles per Gallon [MPG (UK)], multiply the km/L value by 2.824809. For example, a vehicle getting 15 km/L achieves 42.37 Imperial MPG.",
    formulaDisplay: "MPG (UK) = km/L × 2.82480936",
    subtext: "1 Kilometer per Liter equals approximately 2.824809 UK Imperial Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is a metric fuel efficiency unit indicating how many kilometers a vehicle can travel on one liter of fuel. It is widely used across Asia, Latin America, and parts of Africa."
  },
  aboutTargetUnit: {
    title: "Understanding MPG (UK)",
    text: "Miles per Gallon (UK or Imperial) is the fuel efficiency rating system traditionally used in the United Kingdom. It measures statute miles (1,609.344 meters) traveled per Imperial gallon (4.54609 liters)."
  },
  relationship: "Both km/L and UK Imperial MPG measure distance per unit volume. Because 1 Imperial gallon = 4.54609 liters and 1 statute mile = 1.609344 kilometers, 1 km/L = 4.54609 / 1.609344 = 2.82480936 UK MPG.",
  relationshipTitle: "km/L vs UK Imperial MPG Scale Comparison",
  relationshipItems: [
    { label: "8 km/L", value: "22.60 MPG (UK) — Performance SUV / Luxury saloon" },
    { label: "12 km/L", value: "33.90 MPG (UK) — Midsize family crossover" },
    { label: "15 km/L", value: "42.37 MPG (UK) — Compact family hatchback" },
    { label: "20 km/L", value: "56.50 MPG (UK) — Full hybrid passenger vehicle" },
    { label: "25 km/L", value: "70.62 MPG (UK) — Plug-in hybrid / Ultra-efficient vehicle" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in Kilometers per Liter by 2.82480936 to obtain UK Imperial Miles per Gallon.",
    math: "MPG (UK) = km/L × 2.82480936",
    subtext: "To convert back from UK Imperial MPG to km/L, multiply the UK MPG value by 0.35400619 (or divide by 2.824809)."
  },
  formulaTitle: "km/L to UK MPG Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate UK MPG from km/L in your head, multiply the km/L number by 2.8. For example, 10 km/L × 2.8 = 28 UK MPG."
  },
  expertNote: {
    title: "Why the UK Factor (2.825) is Larger than the US Factor (2.352)",
    text: "Because a British Imperial gallon is larger than a US liquid gallon (4.546 L vs 3.785 L), a vehicle gets more miles out of an Imperial gallon. Consequently, 1 km/L equals 2.825 UK MPG compared to 2.352 US MPG."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Asian Compact Import",
        subtitle: "Convert a Japanese hatchback rating of 16 km/L into UK Imperial MPG.",
        steps: [
          "Identify km/L rating: 16 km/L.",
          "Apply conversion formula: MPG (UK) = 16 × 2.82480936.",
          "Calculate: 16 × 2.82480936 = 45.19695.",
          "Result: 16 km/L equals 45.20 UK Imperial MPG."
        ]
      },
      {
        title: "Example 2: Subcompact Economy Car",
        subtitle: "Convert 18 km/L into UK Imperial MPG.",
        steps: [
          "Identify rating: 18 km/L.",
          "Multiply by factor: 18 × 2.82480936 = 50.84657.",
          "Result: 18 km/L equals 50.85 UK Imperial MPG."
        ]
      },
      {
        title: "Example 3: Modern Hybrid Vehicle",
        subtitle: "Convert a hybrid rating of 22 km/L for UK driver comparisons.",
        steps: [
          "Identify rating: 22 km/L.",
          "Apply formula: 22 × 2.82480936 = 62.1458.",
          "Result: 22 km/L equals 62.15 UK Imperial MPG."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to UK Imperial MPG Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "MPG (UK)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "5 km/L", toVal: "14.12 MPG", extra: "Heavy Commercial Van / Performance V8" },
      { fromVal: "8 km/L", toVal: "22.60 MPG", extra: "Luxury SUV / Executive Saloon" },
      { fromVal: "10 km/L", toVal: "28.25 MPG", extra: "Midsize Crossover / AWD Saloon" },
      { fromVal: "12 km/L", toVal: "33.90 MPG", extra: "Family Saloon" },
      { fromVal: "14 km/L", toVal: "39.55 MPG", extra: "Compact Hatchback" },
      { fromVal: "16 km/L", toVal: "45.20 MPG", extra: "Subcompact / Turbodiesel" },
      { fromVal: "18 km/L", toVal: "50.85 MPG", extra: "Mild Hybrid Hatchback" },
      { fromVal: "20 km/L", toVal: "56.50 MPG", extra: "Full Hybrid Saloon" },
      { fromVal: "22 km/L", toVal: "62.15 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "25 km/L", toVal: "70.62 MPG", extra: "Plug-in Hybrid / Ultra-light commuter" }
    ]
  },
  applications: {
    title: "Practical Applications of km/L to UK MPG Conversion",
    items: [
      {
        title: "Comparing Asian Vehicle Specs in Great Britain",
        text: "British automotive buyers comparing Asian domestic market imports convert catalog km/L specs into familiar UK Imperial MPG."
      },
      {
        title: "UK Travelers Driving in Asian & Latin American Countries",
        text: "British tourists renting cars in Japan, India, or Brazil convert km/L trip computer readouts into Imperial MPG to evaluate fuel economy."
      },
      {
        title: "Powertrain Performance Benchmarking",
        text: "UK automotive journalists reviewing Asian automotive press releases convert km/L figures into Imperial MPG for British readers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using US MPG multiplier (2.352) by mistake: Converting to UK Imperial MPG requires multiplying by 2.82481 because an Imperial gallon is 20% larger than a US gallon.",
      "Dividing instead of multiplying: Converting km/L to UK MPG requires multiplying by 2.82481, not dividing.",
      "Confusing km/L with L/100km: km/L measures distance per volume (higher is better), whereas L/100km measures volume per distance (lower is better)."
    ]
  },
  faqs: [
    {
      question: "How many UK Imperial MPG is 1 km/L?",
      answer: "1 Kilometer per Liter equals approximately 2.824809 UK Imperial Miles per Gallon."
    },
    {
      question: "What is the formula to convert km/L to UK MPG?",
      answer: "The formula is: MPG (UK) = km/L × 2.82480936."
    },
    {
      question: "How many UK MPG is 15 km/L?",
      answer: "15 km/L equals approximately 42.37 UK Imperial MPG (15 × 2.824809 = 42.3721)."
    },
    {
      question: "Why is 2.82481 used as the conversion multiplier for UK MPG?",
      answer: "The multiplier is calculated by dividing 4.54609 liters per Imperial gallon by 1.609344 kilometers per mile."
    },
    {
      question: "How do I convert 20 km/L to UK Imperial MPG?",
      answer: "Multiply 20 by 2.824809: 20 × 2.824809 = 56.50 UK MPG."
    },
    {
      question: "Is 18 km/L good fuel economy in UK MPG terms?",
      answer: "Yes, 18 km/L equals 50.85 UK Imperial MPG, representing excellent fuel economy for a compact hatchback or mild hybrid."
    },
    {
      question: "How many UK MPG is 10 km/L?",
      answer: "10 km/L equals approximately 28.25 UK Imperial MPG."
    },
    {
      question: "What is 25 km/L in Imperial UK MPG?",
      answer: "25 km/L equals approximately 70.62 Imperial UK MPG."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" }
  ],
  references: [
    "UK Department for Transport — Fuel Consumption Regulations and Official Conversion Factors",
    "Japan Automobile Manufacturers Association (JAMA) — Fuel Efficiency Test Standards",
    "NIST Handbook 44 — Units of Measurement"
  ]
};
