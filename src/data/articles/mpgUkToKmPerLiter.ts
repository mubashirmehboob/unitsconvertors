import { CustomArticleData } from "./types";

export const mpgUkToKmPerLiter: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "km-per-liter",
  seoTitle: "MPG (UK) to Kilometers per Liter Converter (Imperial MPG to km/L)",
  metaDescription: "Convert UK (Imperial) Miles per Gallon to Kilometers per Liter (MPG to km/L) instantly. Learn the 0.35401 conversion factor, formulas, tables, and FAQs.",
  h1: "MPG (UK) to Kilometers per Liter Converter",
  introduction: [
    "UK Miles per Gallon (Imperial MPG) and Kilometers per Liter (km/L) are both direct fuel economy metrics where higher numerical values indicate superior fuel efficiency. While British motorists traditionally discuss vehicle economy using Imperial MPG, many international markets across Asia, Latin America, and Africa measure vehicle efficiency in Kilometers per Liter.",
    "Converting Imperial UK MPG to Kilometers per Liter requires accounting for both distance and volume units. One statute mile equals 1.609344 kilometers, and one UK Imperial gallon equals 4.54609 liters. Dividing 1.609344 by 4.54609 yields the exact conversion factor: 1 UK MPG equals approximately 0.354006 km/L.",
    "This reference guide explains the mathematical relationship between UK MPG and km/L, provides step-by-step conversion examples for various automobile categories, supplies comprehensive lookup tables, and addresses common international automotive queries."
  ],
  quickAnswer: {
    text: "To convert UK (Imperial) Miles per Gallon to Kilometers per Liter, multiply the UK MPG rating by 0.354006. For example, a car achieving 35 UK MPG gets 12.39 km/L.",
    formulaDisplay: "km/L = MPG (UK) × 0.354006",
    subtext: "1 UK Imperial MPG is equal to approximately 0.354006 Kilometers per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (UK)",
    text: "Miles per Gallon (UK or Imperial) is the fuel economy metric traditionally used in the United Kingdom. It measures the distance in statute miles (1,609.344 meters) a vehicle travels per Imperial gallon (4.54609 liters) of fuel."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is a metric distance-per-volume fuel efficiency unit used extensively in Japan, India, Brazil, Southeast Asia, and the Middle East. It states how many kilometers a vehicle can drive on one liter of fuel."
  },
  relationship: "Both UK MPG and km/L measure distance traveled per unit of fuel. Because 1 statute mile = 1.609344 km and 1 Imperial gallon = 4.54609 L, the conversion factor is 1.609344 / 4.54609 ≈ 0.35400619 km/L per UK MPG.",
  relationshipTitle: "UK Imperial MPG vs km/L Scale Comparison",
  relationshipItems: [
    { label: "20 MPG (UK)", value: "7.08 km/L — Performance V8 / Luxury SUV" },
    { label: "30 MPG (UK)", value: "10.62 km/L — Midsize saloon / Crossover" },
    { label: "40 MPG (UK)", value: "14.16 km/L — Compact hatchback / Turbodiesel" },
    { label: "50 MPG (UK)", value: "17.70 km/L — Subcompact car / Mild hybrid" },
    { label: "60 MPG (UK)", value: "21.24 km/L — Full hybrid passenger vehicle" }
  ],
  formula: {
    text: "Multiply the UK Imperial Miles per Gallon rating by 0.35400619 to obtain Kilometers per Liter.",
    math: "km/L = MPG (UK) × 0.35400619",
    subtext: "To convert from km/L back to UK Imperial MPG, multiply the km/L value by 2.824809."
  },
  formulaTitle: "UK MPG to km/L Conversion Formula",
  practicalTip: {
    title: "Quick Mental Shortcut",
    text: "To approximate km/L from UK MPG, divide the UK MPG number by 3, then add about 6% to the result. For instance, 30 UK MPG ÷ 3 = 10; 10 + 0.6 = 10.6 km/L."
  },
  expertNote: {
    title: "Comparing UK MPG to Japanese JC08 Standard",
    text: "When comparing British car reviews to Japanese domestic market (JDM) specs in km/L, remember that Japanese testing standards (such as JC08 and WLTC) differ from European testing cycles, alongside the unit difference."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Saloon Economy",
        subtitle: "Convert a British car rating of 42 UK MPG into Kilometers per Liter.",
        steps: [
          "Identify UK MPG rating: 42 MPG (UK).",
          "Apply conversion factor: km/L = 42 × 0.35400619.",
          "Calculate: 42 × 0.35400619 = 14.86826.",
          "Result: 42 UK MPG equals 14.87 km/L."
        ]
      },
      {
        title: "Example 2: European Turbodiesel Car",
        subtitle: "Convert a turbodiesel economy rating of 52 UK MPG into km/L.",
        steps: [
          "Identify rating: 52 MPG (UK).",
          "Multiply by factor: 52 × 0.35400619 = 18.40832.",
          "Result: 52 UK MPG equals 18.41 km/L."
        ]
      },
      {
        title: "Example 3: Modern Hybrid Hatchback",
        subtitle: "Convert a 65 UK MPG hybrid rating to km/L for Asian market comparison.",
        steps: [
          "Identify rating: 65 MPG (UK).",
          "Apply formula: 65 × 0.35400619 = 23.0104.",
          "Result: 65 UK MPG equals 23.01 km/L."
        ]
      }
    ]
  },
  table: {
    title: "UK Imperial MPG to Kilometers per Liter Conversion Table",
    headers: ["MPG (UK)", "Kilometers per Liter (km/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "15 MPG", toVal: "5.31 km/L", extra: "V8 SUV / Performance sports car" },
      { fromVal: "20 MPG", toVal: "7.08 km/L", extra: "Large executive saloon" },
      { fromVal: "25 MPG", toVal: "8.85 km/L", extra: "Midsize crossover" },
      { fromVal: "30 MPG", toVal: "10.62 km/L", extra: "Family saloon" },
      { fromVal: "35 MPG", toVal: "12.39 km/L", extra: "Compact hatchback" },
      { fromVal: "40 MPG", toVal: "14.16 km/L", extra: "Subcompact car" },
      { fromVal: "45 MPG", toVal: "15.93 km/L", extra: "Efficient turbodiesel" },
      { fromVal: "50 MPG", toVal: "17.70 km/L", extra: "Mild hybrid hatchback" },
      { fromVal: "60 MPG", toVal: "21.24 km/L", extra: "Full hybrid vehicle" },
      { fromVal: "70 MPG", toVal: "24.78 km/L", extra: "Plug-in hybrid / Ultra-efficient vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of UK MPG to km/L Conversion",
    items: [
      {
        title: "Vehicle Importation to km/L Markets",
        text: "Automotive dealers importing UK-spec vehicles to Asian, African, or Latin American countries convert UK MPG window specs into km/L for customer transparency."
      },
      {
        title: "Global Driving & Expatriate Budgeting",
        text: "UK drivers relocating to countries like Japan, India, or Singapore convert familiar Imperial MPG figures into km/L to compare local vehicle running costs."
      },
      {
        title: "Powertrain Engineering Comparisons",
        text: "Engineers compare European turbodiesel and hybrid performance data against Asian domestic market km/L benchmarks."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing US MPG with UK MPG factor: 1 US MPG equals 0.425 km/L, whereas 1 UK MPG equals 0.354 km/L because a UK gallon is 20% larger.",
      "Confusing km/L with L/100km: km/L measures distance per volume (higher is better), whereas L/100km measures volume per distance (lower is better).",
      "Using truncated conversion factors: Rounding 0.354006 to 0.35 introduces a 1.1% calculation error over long distance logs."
    ]
  },
  faqs: [
    {
      question: "How many km/L is 1 UK MPG?",
      answer: "1 UK Imperial MPG equals approximately 0.354006 Kilometers per Liter."
    },
    {
      question: "What is the formula to convert UK MPG to km/L?",
      answer: "The formula is: km/L = MPG (UK) × 0.35400619."
    },
    {
      question: "How many km/L is 40 UK MPG?",
      answer: "40 UK MPG equals 14.16 km/L (40 × 0.3540062 = 14.1602)."
    },
    {
      question: "Why is the factor for UK MPG to km/L different from US MPG to km/L?",
      answer: "It is different because a UK Imperial gallon contains 4.546 liters, whereas a US gallon contains 3.785 liters. A larger gallon yields a different km/L conversion factor."
    },
    {
      question: "How do I convert km/L back to UK MPG?",
      answer: "Multiply the km/L value by 2.824809 (or divide by 0.354006)."
    },
    {
      question: "How many km/L is 50 Imperial MPG?",
      answer: "50 Imperial UK MPG equals approximately 17.70 km/L."
    },
    {
      question: "Is 15 km/L good in UK MPG terms?",
      answer: "Yes, 15 km/L equals approximately 42.37 UK MPG, which represents very good fuel economy for a compact passenger car."
    },
    {
      question: "What is 60 UK MPG in km/L?",
      answer: "60 UK MPG equals approximately 21.24 Kilometers per Liter."
    }
  ],
  relatedList: [
    { label: "km/L to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" },
    { label: "MPG (UK) to L/km", from: "mpg-uk", to: "liters-per-km" }
  ],
  references: [
    "UK Department for Transport — Vehicle Certification Agency Fuel Consumption Data",
    "International Organization for Standardization (ISO) 80000-3 — Quantities and Units",
    "Japan Automobile Manufacturers Association (JAMA) — Fuel Efficiency Standards"
  ]
};
