import { CustomArticleData } from "./types";

export const mpgUsToLitersPerKm: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "liters-per-km",
  seoTitle: "MPG (US) to Liters per Kilometer Converter (MPG to L/km)",
  metaDescription: "Convert US Miles per Gallon to Liters per Kilometer (MPG to L/km) instantly. Learn the 2.35215 inverse formula, step-by-step math, conversion tables, and FAQs.",
  h1: "MPG (US) to Liters per Kilometer Converter",
  introduction: [
    "Miles per Gallon (US) and Liters per Kilometer (L/km) express automotive energy consumption from inverse analytical perspectives. While Miles per Gallon measures the distance covered per US gallon of fuel consumed, Liters per Kilometer indicates the exact volume of fuel expended over a single kilometer.",
    "Because Liters per Kilometer operates on a unit-distance scale (1 kilometer rather than 100 kilometers), it is frequently utilized in precision fleet logistics, automotive engineering power-plant modeling, and heavy transport fuel calculations. Converting from US MPG to L/km involves an inverse relationship governed by the constant 2.35214583.",
    "This technical guide explains the mathematical conversion between US MPG and Liters per Kilometer, provides step-by-step worked examples, offers comprehensive reference tables, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon to Liters per Kilometer, divide the constant 2.352146 by the US MPG value. For example, a vehicle getting 25 MPG (US) consumes 0.0941 Liters per Kilometer.",
    formulaDisplay: "L/km = 2.35214583 ÷ MPG (US)",
    subtext: "Note: Lower L/km values signify superior fuel efficiency."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (US)",
    text: "Miles per Gallon (US) is the standard distance-per-volume fuel rating regulated by the US EPA. It measures how many statute miles (1,609.344 meters) a motor vehicle travels per US fluid gallon (3.785411784 liters) of fuel."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per Kilometer (L/km) is a direct metric consumption unit indicating fuel volume required per kilometer traveled. It is exactly 1/100th of the L/100km rating and is used in heavy transport, industrial machinery, and automotive physics calculations."
  },
  relationship: "MPG (US) and L/km have an inverse mathematical relationship. The conversion constant is derived as: 3.785411784 liters per gallon divided by 1.609344 kilometers per mile = 2.35214583.",
  relationshipTitle: "US MPG vs L/km Scale Comparison",
  relationshipItems: [
    { label: "10 MPG (US)", value: "0.2352 L/km — Heavy industrial truck / Heavy equipment" },
    { label: "20 MPG (US)", value: "0.1176 L/km — Full-size SUV / Pickup truck" },
    { label: "30 MPG (US)", value: "0.0784 L/km — Compact family sedan" },
    { label: "40 MPG (US)", value: "0.0588 L/km — Efficient subcompact car" },
    { label: "50 MPG (US)", value: "0.0470 L/km — High-efficiency hybrid" }
  ],
  formula: {
    text: "Divide the constant 2.35214583 by the US Miles per Gallon value to get Liters per Kilometer.",
    math: "L/km = 2.35214583 / MPG (US)",
    subtext: "To convert Liters per Kilometer back to US MPG, divide 2.35214583 by the L/km value."
  },
  formulaTitle: "MPG (US) to L/km Inverse Conversion Formula",
  practicalTip: {
    title: "Relationship to L/100km",
    text: "L/km is simply L/100km divided by 100. If you already know a vehicle consumes 7.84 L/100km, its fuel consumption per single kilometer is 0.0784 L/km."
  },
  expertNote: {
    title: "Precision in Heavy Logistics",
    text: "Commercial haulage operators tracking 1,000-kilometer freight routes rely on L/km to calculate instantaneous fuel burn per kilometer, facilitating exact fuel stop planning."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Delivery Van Efficiency",
        subtitle: "Convert a US delivery van rating of 18 MPG (US) into Liters per Kilometer.",
        steps: [
          "Identify US MPG rating: 18 MPG (US).",
          "Apply formula: L/km = 2.35214583 ÷ 18.",
          "Calculate: 2.35214583 ÷ 18 = 0.130675.",
          "Result: 18 US MPG equals 0.1307 Liters per Kilometer."
        ]
      },
      {
        title: "Example 2: Compact Sedan Economy",
        subtitle: "Convert a 32 MPG (US) rating into L/km.",
        steps: [
          "Identify rating: 32 MPG (US).",
          "Divide constant: 2.35214583 ÷ 32 = 0.073505.",
          "Result: 32 US MPG equals 0.0735 L/km."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle Consumption",
        subtitle: "Convert 50 MPG (US) for a 500-km trip fuel estimation.",
        steps: [
          "Identify rating: 50 MPG (US).",
          "Apply formula: 2.35214583 ÷ 50 = 0.047043.",
          "Result: 50 US MPG equals 0.0470 L/km."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Liters per Kilometer Conversion Table",
    headers: ["MPG (US)", "Liters per Kilometer (L/km)", "Liters per 100km Equivalent"],
    rows: [
      { fromVal: "10 MPG", toVal: "0.2352 L/km", extra: "23.52 L/100km" },
      { fromVal: "15 MPG", toVal: "0.1568 L/km", extra: "15.68 L/100km" },
      { fromVal: "20 MPG", toVal: "0.1176 L/km", extra: "11.76 L/100km" },
      { fromVal: "25 MPG", toVal: "0.0941 L/km", extra: "9.41 L/100km" },
      { fromVal: "30 MPG", toVal: "0.0784 L/km", extra: "7.84 L/100km" },
      { fromVal: "35 MPG", toVal: "0.0672 L/km", extra: "6.72 L/100km" },
      { fromVal: "40 MPG", toVal: "0.0588 L/km", extra: "5.88 L/100km" },
      { fromVal: "50 MPG", toVal: "0.0470 L/km", extra: "4.70 L/100km" },
      { fromVal: "60 MPG", toVal: "0.0392 L/km", extra: "3.92 L/100km" },
      { fromVal: "70 MPG", toVal: "0.0336 L/km", extra: "3.36 L/100km" }
    ]
  },
  applications: {
    title: "Applications of US MPG to L/km Conversion",
    items: [
      {
        title: "Route Fuel Estimation in Logistics",
        text: "Logistics managers multiply L/km by exact GPS trip kilometer distances to forecast total liters required for long-haul routes."
      },
      {
        title: "Engine Powertrain Simulation",
        text: "Automotive engine development software simulates instantaneous fuel mass flow rates per unit distance in L/km."
      },
      {
        title: "Heavy Equipment & Commercial Transport",
        text: "Fleets running diesel equipment evaluate engine efficiency per kilometer to detect mechanical wear or excessive idling."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing L/km with L/100km: L/km values are 100 times smaller than L/100km values (e.g., 0.0784 L/km vs 7.84 L/100km).",
      "Multiplying instead of dividing: MPG to L/km requires dividing the constant 2.352146 by the MPG value.",
      "Using Imperial gallons by mistake: Using UK MPG requires a constant of 2.824809 instead of 2.352146."
    ]
  },
  faqs: [
    {
      question: "How many Liters per Kilometer is 25 MPG (US)?",
      answer: "25 US MPG equals approximately 0.0941 Liters per Kilometer (2.352146 ÷ 25 = 0.094086)."
    },
    {
      question: "What is the formula to convert US MPG to L/km?",
      answer: "The formula is: L/km = 2.35214583 ÷ MPG (US)."
    },
    {
      question: "How does L/km relate to L/100km?",
      answer: "L/km is simply L/100km divided by 100. For example, 7.84 L/100km equals 0.0784 L/km."
    },
    {
      question: "Is a smaller or larger L/km number better?",
      answer: "A smaller L/km number is better because it means less fuel is burned per kilometer driven."
    },
    {
      question: "How many Liters per Kilometer is 50 MPG (US)?",
      answer: "50 US MPG equals approximately 0.0470 Liters per Kilometer."
    },
    {
      question: "What constant is used for US MPG to L/km conversion?",
      answer: "The constant factor is 2.35214583."
    },
    {
      question: "How many US MPG is 0.1 L/km?",
      answer: "0.1 L/km equals 23.52 US MPG (2.352146 ÷ 0.1 = 23.5215)."
    },
    {
      question: "Why use L/km instead of L/100km?",
      answer: "L/km is preferred when calculating exact fuel volumes for custom trip lengths directly by multiplying distance in kilometers by L/km."
    }
  ],
  relatedList: [
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "L/km to MPG (US)", from: "liters-per-km", to: "mpg-us" }
  ],
  references: [
    "NIST Special Publication 811 — Guide for the Use of the International System of Units (SI)",
    "SAE International Technical Paper J1312 — Automotive Fuel Economy Testing Procedures",
    "ISO 14064 — Greenhouse Gas Emissions Accounting for Transport Fleets"
  ]
};
