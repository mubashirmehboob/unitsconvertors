import { CustomArticleData } from "./types";

export const kmPerLiterToMpgUs: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "mpg-us",
  seoTitle: "Kilometers per Liter to MPG (US) Converter (km/L to MPG)",
  metaDescription: "Convert Kilometers per Liter to US Miles per Gallon (km/L to MPG) instantly. Learn the 2.35215 conversion multiplier, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Liter to MPG (US) Converter",
  introduction: [
    "Kilometers per Liter (km/L) and Miles per Gallon (US) are direct distance-per-volume metrics used to state motor vehicle fuel economy. While automakers in Japan, India, Brazil, and Southeast Asia publish fuel efficiency specs in Kilometers per Liter, vehicles sold in the United States display EPA window ratings in Miles per Gallon (US).",
    "Because both metrics measure the distance a vehicle can travel on a single unit of fuel, their conversion relationship is directly proportional. One kilometer per liter equals approximately 2.352146 US Miles per Gallon. Multiplying any km/L rating by 2.35215 gives its exact equivalent in US MPG.",
    "This comprehensive reference guide details the mathematical derivation of the conversion factor, provides step-by-step calculation examples for different automobile categories, offers easy-to-read lookup tables, and answers common international automotive questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter [km/L] to US Miles per Gallon [MPG (US)], multiply the km/L value by 2.352146. For example, a vehicle getting 12 km/L achieves 28.23 US MPG.",
    formulaDisplay: "MPG (US) = km/L × 2.35214583",
    subtext: "1 Kilometer per Liter equals approximately 2.352146 US Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is a metric fuel efficiency unit indicating how many kilometers a vehicle can travel on one liter of fuel. It is widely used across Asia, Latin America, and parts of the Middle East."
  },
  aboutTargetUnit: {
    title: "Understanding MPG (US)",
    text: "Miles per Gallon (US) is the official US Environmental Protection Agency (EPA) rating used to state vehicle fuel economy in the United States. It measures statute miles (1,609.344 meters) traveled per US liquid gallon (3.785411784 liters)."
  },
  relationship: "Both km/L and US MPG measure distance per unit volume. Because 1 US gallon = 3.785411784 liters and 1 mile = 1.609344 kilometers, 1 km/L = 3.785411784 / 1.609344 = 2.35214583 US MPG.",
  relationshipTitle: "km/L vs US MPG Rating Comparison",
  relationshipItems: [
    { label: "8 km/L", value: "18.82 MPG (US) — Midsize SUV / Crossover" },
    { label: "12 km/L", value: "28.23 MPG (US) — Compact family sedan" },
    { label: "15 km/L", value: "35.28 MPG (US) — Efficient subcompact car" },
    { label: "20 km/L", value: "47.04 MPG (US) — Modern full hybrid sedan" },
    { label: "25 km/L", value: "58.80 MPG (US) — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in Kilometers per Liter by 2.35214583 to calculate US Miles per Gallon.",
    math: "MPG (US) = km/L × 2.35214583",
    subtext: "To convert back from US MPG to km/L, multiply the US MPG value by 0.4251437 (or divide by 2.352146)."
  },
  formulaTitle: "km/L to US MPG Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly estimate US MPG from km/L in your head, multiply the km/L number by 2.35. For example, 10 km/L × 2.35 = 23.5 US MPG."
  },
  expertNote: {
    title: "Direct Proportionality Advantage",
    text: "Because both km/L and MPG are distance-per-volume metrics, higher numbers in both systems indicate greater efficiency. Converting between them is a simple scalar multiplication."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Japanese Import Sedan",
        subtitle: "Convert a Japanese sedan fuel rating of 14 km/L into US MPG.",
        steps: [
          "Identify km/L rating: 14 km/L.",
          "Apply conversion formula: MPG (US) = 14 × 2.35214583.",
          "Calculate: 14 × 2.35214583 = 32.9300.",
          "Result: 14 km/L equals 32.93 US MPG."
        ]
      },
      {
        title: "Example 2: Subcompact Commuter Car",
        subtitle: "Convert a subcompact rating of 18 km/L into US MPG.",
        steps: [
          "Identify rating: 18 km/L.",
          "Multiply by factor: 18 × 2.35214583 = 42.3386.",
          "Result: 18 km/L equals 42.34 US MPG."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid",
        subtitle: "Convert a hybrid vehicle rating of 22 km/L for US market evaluation.",
        steps: [
          "Identify rating: 22 km/L.",
          "Apply formula: 22 × 2.35214583 = 51.7472.",
          "Result: 22 km/L equals 51.75 US MPG."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to US MPG Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "MPG (US)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "5 km/L", toVal: "11.76 MPG", extra: "Heavy Commercial Truck / Performance V8" },
      { fromVal: "8 km/L", toVal: "18.82 MPG", extra: "Full-size SUV / Pickup truck" },
      { fromVal: "10 km/L", toVal: "23.52 MPG", extra: "Midsize Crossover / AWD Sedan" },
      { fromVal: "12 km/L", toVal: "28.23 MPG", extra: "Family Sedan" },
      { fromVal: "14 km/L", toVal: "32.93 MPG", extra: "Compact Hatchback" },
      { fromVal: "16 km/L", toVal: "37.63 MPG", extra: "Efficient Subcompact Car" },
      { fromVal: "18 km/L", toVal: "42.34 MPG", extra: "Mild Hybrid Hatchback" },
      { fromVal: "20 km/L", toVal: "47.04 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "22 km/L", toVal: "51.75 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "25 km/L", toVal: "58.80 MPG", extra: "Plug-in Hybrid / Ultra-light commuter" }
    ]
  },
  applications: {
    title: "Practical Applications of km/L to US MPG Conversion",
    items: [
      {
        title: "Evaluating Japanese & Asian Car Specs",
        text: "Car buyers in North America importing Japanese domestic market (JDM) vehicles convert km/L catalog specifications into US EPA MPG equivalents."
      },
      {
        title: "Cross-Border Road Trip Budgeting",
        text: "US drivers traveling through countries using km/L convert rental car efficiency displays to compare against familiar US MPG benchmarks."
      },
      {
        title: "International Automotive Journalism",
        text: "Automotive writers convert overseas test-drive specs from Asian press events into US MPG for American readers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Conflating US MPG with UK MPG: Converting km/L to UK Imperial MPG requires a larger multiplier (2.82481) because an Imperial gallon is 20% larger.",
      "Dividing instead of multiplying: Converting km/L to US MPG requires multiplying by 2.35215, not dividing.",
      "Confusing km/L with L/100km: km/L measures distance per unit of fuel (higher is better), whereas L/100km measures fuel volume per distance (lower is better)."
    ]
  },
  faqs: [
    {
      question: "How many US MPG is 1 km/L?",
      answer: "1 Kilometer per Liter equals approximately 2.352146 US Miles per Gallon."
    },
    {
      question: "What is the formula to convert km/L to US MPG?",
      answer: "The formula is: MPG (US) = km/L × 2.35214583."
    },
    {
      question: "How many US MPG is 15 km/L?",
      answer: "15 km/L equals approximately 35.28 US MPG (15 × 2.352146 = 35.2822)."
    },
    {
      question: "Is 20 km/L considered good fuel economy?",
      answer: "Yes, 20 km/L equals 47.04 US MPG, which represents outstanding fuel economy typical of a modern hybrid vehicle."
    },
    {
      question: "How do I convert 10 km/L to US MPG?",
      answer: "Multiply 10 by 2.352146: 10 × 2.352146 = 23.52 US MPG."
    },
    {
      question: "Why is 2.35215 used as the conversion factor?",
      answer: "The factor is derived by dividing 3.785411784 liters per US gallon by 1.609344 kilometers per mile."
    },
    {
      question: "How many US MPG is 12 km/L?",
      answer: "12 km/L equals approximately 28.23 US MPG."
    },
    {
      question: "Does 25 km/L equal almost 60 US MPG?",
      answer: "Yes, 25 km/L equals 58.80 US MPG."
    }
  ],
  relatedList: [
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "km/L to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" }
  ],
  references: [
    "Japan Ministry of Land, Infrastructure, Transport and Tourism (MLIT) — Fuel Efficiency Standards",
    "US Environmental Protection Agency (EPA) — Light-Duty Vehicle Fuel Economy Documentation",
    "NIST Handbook 44 — Fundamental Units of Measurement"
  ]
};
