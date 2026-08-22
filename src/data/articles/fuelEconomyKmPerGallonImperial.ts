import { CustomArticleData } from "./types";

// 1. Kilometers per Gallon (Imperial) to MPG (UK)
export const kmPerGallonImperialToMpgUk: CustomArticleData = {
  fromUnitId: "km-per-gallon-imperial",
  toUnitId: "mpg-uk",
  seoTitle: "Kilometers per Gallon (Imperial) to MPG (UK) Converter",
  metaDescription: "Convert Kilometers per Imperial Gallon to UK MPG (km/gal Imp to MPG UK) instantly. 0.621371 formula, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Gallon (Imperial) to MPG (UK) Converter",
  introduction: [
    "Kilometers per Gallon (Imperial) and UK Imperial Miles per Gallon (MPG UK) measure vehicle fuel economy using the British Imperial gallon (legally defined as exactly 4.54609 liters). The only difference between them is the unit of distance: metric kilometers versus international statute miles.",
    "Because both units share the exact same Imperial gallon volume baseline, the conversion factor is purely the relationship between kilometers and statute miles. Since 1 international statute mile is defined as exactly 1.609344 kilometers, dividing the km/gal (Imp) value by 1.609344 (or multiplying by 0.621371192) yields exact UK MPG.",
    "This reference explains the mathematical conversion, provides step-by-step vehicle calculation examples, offers structured lookup tables, and answers common automotive fuel efficiency questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (Imperial) [km/gal (Imp)] to UK Imperial Miles per Gallon [MPG (UK)], divide by 1.609344 (or multiply by 0.621371). For example, 60 km/gal (Imp) equals approximately 37.28 UK MPG.",
    formulaDisplay: "MPG (UK) = km/gal (Imp) / 1.609344 = km/gal (Imp) × 0.621371192",
    subtext: "1 Kilometer per Imperial Gallon equals approximately 0.621371 UK Imperial Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) measures distance in kilometers traveled per British Imperial gallon (4.54609 liters) of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding UK Imperial MPG",
    text: "Imperial Miles per Gallon (UK MPG) is the official British vehicle fuel economy metric, measuring statute miles per Imperial gallon (4.54609 liters)."
  },
  relationship: "Because both units share the same 1 Imperial gallon volume base, 1 kilometer per Imperial gallon translates to 1 / 1.609344 miles per Imperial gallon. Therefore, MPG (UK) = km/gal (Imp) / 1.609344.",
  relationshipTitle: "km/gal (Imp) to UK MPG Benchmarks",
  relationshipItems: [
    { label: "30 km/gal (Imp)", value: "18.64 MPG (UK) — High-performance V8 / Large 4x4" },
    { label: "50 km/gal (Imp)", value: "31.07 MPG (UK) — Midsize family estate" },
    { label: "70 km/gal (Imp)", value: "43.50 MPG (UK) — Compact hatchback" },
    { label: "90 km/gal (Imp)", value: "55.92 MPG (UK) — Efficient diesel / mild hybrid" },
    { label: "110 km/gal (Imp)", value: "68.35 MPG (UK) — Full hybrid passenger vehicle" }
  ],
  formula: {
    text: "Divide Kilometers per Gallon (Imperial) by 1.609344 or multiply by 0.621371192 to obtain UK Miles per Gallon.",
    math: "MPG (UK) = km/gal (Imp) × 0.621371192",
    subtext: "To convert back from UK MPG to km/gal (Imp), multiply by 1.609344."
  },
  formulaTitle: "km/gal (Imp) to UK MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate UK MPG from km/gal (Imp) in your head, multiply by 0.62 (or divide by 1.6). For example, 60 km/gal (Imp) × 0.62 ≈ 37.2 UK MPG."
  },
  expertNote: {
    title: "Direct Proportionality",
    text: "Because both metrics measure distance over fuel volume, higher ratings indicate superior fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Diesel Saloon",
        subtitle: "Convert 85 km/gal (Imp) to UK Imperial MPG.",
        steps: [
          "Identify the input fuel rating: 85 km/gal (Imp).",
          "Apply formula: MPG (UK) = 85 / 1.609344.",
          "Calculate: 85 × 0.621371192 = 52.816551.",
          "Result: 85 km/gal (Imp) equals approximately 52.82 UK MPG."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 65 km/gal (Imp) into UK MPG.",
        steps: [
          "Identify the rating: 65 km/gal (Imp).",
          "Multiply by 0.621371: 65 × 0.621371192 = 40.389127.",
          "Result: 65 km/gal (Imp) equals 40.39 UK MPG."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 100 km/gal (Imp) into UK MPG.",
        steps: [
          "Identify the value: 100 km/gal (Imp).",
          "Calculate: 100 / 1.609344 = 62.137119.",
          "Result: 100 km/gal (Imp) equals 62.14 UK MPG."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (Imperial) to UK MPG Conversion Table",
    headers: ["km/gal (Imp)", "MPG (UK)", "Vehicle Category Context"],
    rows: [
      { fromVal: "30 km/gal", toVal: "18.64 MPG", extra: "Commercial Freight Truck" },
      { fromVal: "45 km/gal", toVal: "27.96 MPG", extra: "Full-Size SUV" },
      { fromVal: "60 km/gal", toVal: "37.28 MPG", extra: "Midsize Saloon" },
      { fromVal: "70 km/gal", toVal: "43.50 MPG", extra: "Compact Hatchback" },
      { fromVal: "80 km/gal", toVal: "49.71 MPG", extra: "Efficient Turbo Diesel" },
      { fromVal: "90 km/gal", toVal: "55.92 MPG", extra: "Mild Hybrid Hatchback" },
      { fromVal: "100 km/gal", toVal: "62.14 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "110 km/gal", toVal: "68.35 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "120 km/gal", toVal: "74.56 MPG", extra: "Plug-in Hybrid Vehicle" },
      { fromVal: "130 km/gal", toVal: "80.78 MPG", extra: "Eco Prototype Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (Imp) to UK MPG",
    items: [
      {
        title: "UK Fleet Telematics Standardization",
        text: "Logistics fleets in the UK tracking metric vehicle odometer telemetry convert distances to Imperial MPG for official reporting."
      },
      {
        title: "Cross-Market Vehicle Testing",
        text: "European test dynamometers configured in metric kilometers converting to UK consumer brochure MPG ratings."
      },
      {
        title: "Automotive Engine Benchmarking",
        text: "Engineers comparing fuel consumption models across international metric and statute test procedures."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing Imperial gallons (4.54609 L) with US liquid gallons (3.785412 L).",
      "Multiplying by 1.609344 instead of dividing when converting km/gal (Imp) to UK MPG.",
      "Confusing km/gal (Imp) with km/L."
    ]
  },
  faqs: [
    {
      question: "How many UK MPG is 1 km/gal (Imp)?",
      answer: "1 Kilometer per Imperial Gallon equals approximately 0.621371 UK Imperial Miles per Gallon (1 / 1.609344)."
    },
    {
      question: "What is the formula to convert km/gal (Imp) to UK MPG?",
      answer: "The formula is: MPG (UK) = km/gal (Imp) / 1.609344 = km/gal (Imp) × 0.621371192."
    },
    {
      question: "How many UK MPG is 70 km/gal (Imp)?",
      answer: "70 km/gal (Imp) equals approximately 43.50 UK MPG (70 / 1.609344 = 43.4960)."
    },
    {
      question: "How many UK MPG is 80 km/gal (Imp)?",
      answer: "80 km/gal (Imp) equals approximately 49.71 UK MPG (80 × 0.621371 = 49.7097)."
    },
    {
      question: "How do I convert 100 km/gal (Imp) to UK MPG?",
      answer: "Multiply 100 by 0.621371 to get 62.14 UK MPG."
    },
    {
      question: "Why is the factor 0.621371?",
      answer: "Because 1 international statute mile is defined as exactly 1.609344 kilometers, and 1 / 1.609344 = 0.621371192."
    },
    {
      question: "How do I convert UK MPG back to km/gal (Imp)?",
      answer: "Multiply the UK MPG value by 1.609344."
    },
    {
      question: "How many UK MPG is 50 km/gal (Imp)?",
      answer: "50 km/gal (Imp) equals approximately 31.07 UK MPG (50 / 1.609344 = 31.0686)."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to Kilometers per Gallon (Imperial)", from: "mpg-uk", to: "km-per-gallon-imperial" },
    { label: "Kilometers per Gallon (Imperial) to MPG (US)", from: "km-per-gallon-imperial", to: "mpg-us" },
    { label: "Kilometers per Gallon (Imperial) to km/L", from: "km-per-gallon-imperial", to: "km-per-liter" },
    { label: "Kilometers per Gallon (Imperial) to L/100km", from: "km-per-gallon-imperial", to: "liters-per-100km" }
  ]
};

// 2. MPG (UK) to Kilometers per Gallon (Imperial)
export const mpgUkToKmPerGallonImperial: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "km-per-gallon-imperial",
  seoTitle: "MPG (UK) to Kilometers per Gallon (Imperial) Converter",
  metaDescription: "Convert UK Imperial MPG to Kilometers per Imperial Gallon (MPG UK to km/gal Imp). Exact 1.609344 multiplier, step-by-step math, tables, and FAQs.",
  h1: "MPG (UK) to Kilometers per Gallon (Imperial) Converter",
  introduction: [
    "UK Imperial Miles per Gallon (MPG UK) and Kilometers per Gallon (Imperial) quantify vehicle fuel efficiency using the British Imperial gallon (4.54609 liters). While UK vehicle brochures use statute miles per gallon, international transport operators and researchers often require distance expressed in metric kilometers.",
    "Because both units use the exact same Imperial gallon volume baseline, converting from UK MPG to km/gal (Imp) is accomplished by multiplying directly by 1.609344 (the exact number of kilometers in an international statute mile).",
    "This reference explains the mathematical conversion, provides step-by-step vehicle calculation examples, offers comprehensive lookup tables, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert UK Imperial Miles per Gallon [MPG (UK)] to Kilometers per Gallon (Imperial) [km/gal (Imp)], multiply the UK MPG value by 1.609344. For example, 40 UK MPG equals approximately 64.37 km/gal (Imp).",
    formulaDisplay: "km/gal (Imp) = MPG (UK) × 1.609344",
    subtext: "1 UK Imperial MPG equals exactly 1.609344 Kilometers per Imperial Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding UK Imperial MPG",
    text: "Imperial Miles per Gallon (UK MPG) is the official British automotive fuel economy metric, measuring statute miles per Imperial gallon (4.54609 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) expresses distance in metric kilometers traveled per British Imperial gallon (4.54609 liters) of fuel consumed."
  },
  relationship: "Since 1 statute mile equals exactly 1.609344 kilometers, traveling 1 mile on 1 Imperial gallon is identical to traveling 1.609344 kilometers on that same gallon. Therefore, km/gal (Imp) = MPG (UK) × 1.609344.",
  relationshipTitle: "UK MPG to km/gal (Imp) Benchmark Ratings",
  relationshipItems: [
    { label: "25 MPG (UK)", value: "40.23 km/gal (Imp) — Full-size SUV / Performance estate" },
    { label: "35 MPG (UK)", value: "56.33 km/gal (Imp) — Midsize family saloon" },
    { label: "45 MPG (UK)", value: "72.42 km/gal (Imp) — Compact hatchback" },
    { label: "55 MPG (UK)", value: "88.51 km/gal (Imp) — Efficient turbo diesel / mild hybrid" },
    { label: "65 MPG (UK)", value: "104.61 km/gal (Imp) — Full hybrid passenger vehicle" }
  ],
  formula: {
    text: "Multiply UK Miles per Gallon by 1.609344 to determine Kilometers per Gallon (Imperial).",
    math: "km/gal (Imp) = MPG (UK) × 1.609344",
    subtext: "To convert back from km/gal (Imp) to UK MPG, divide by 1.609344 (or multiply by 0.621371)."
  },
  formulaTitle: "UK MPG to km/gal (Imp) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (Imp) from UK MPG in your head, multiply the MPG number by 1.6. For example, 40 UK MPG × 1.6 = 64 km/gal (Imp)."
  },
  expertNote: {
    title: "Direct Scaling",
    text: "Because both metrics represent distance over fuel volume, higher ratings indicate better fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Hatchback",
        subtitle: "Convert 48 MPG (UK) to Kilometers per Gallon (Imperial).",
        steps: [
          "Identify the UK MPG rating: 48 MPG.",
          "Apply formula: km/gal (Imp) = 48 × 1.609344.",
          "Calculate: 48 × 1.609344 = 77.248512.",
          "Result: 48 UK MPG equals approximately 77.25 km/gal (Imp)."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 38 MPG (UK) into km/gal (Imp).",
        steps: [
          "Identify the rating: 38 MPG.",
          "Multiply by 1.609344: 38 × 1.609344 = 61.155072.",
          "Result: 38 UK MPG equals 61.16 km/gal (Imp)."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 62 MPG (UK) into km/gal (Imp).",
        steps: [
          "Identify the value: 62 MPG.",
          "Calculate: 62 × 1.609344 = 99.779328.",
          "Result: 62 UK MPG equals 99.78 km/gal (Imp)."
        ]
      }
    ]
  },
  table: {
    title: "UK MPG to Kilometers per Gallon (Imperial) Conversion Table",
    headers: ["MPG (UK)", "km/gal (Imp)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "20 MPG", toVal: "32.19 km/gal", extra: "High-Performance V8" },
      { fromVal: "30 MPG", toVal: "48.28 km/gal", extra: "Full-Size SUV" },
      { fromVal: "35 MPG", toVal: "56.33 km/gal", extra: "Midsize Crossover" },
      { fromVal: "40 MPG", toVal: "64.37 km/gal", extra: "Family Saloon" },
      { fromVal: "45 MPG", toVal: "72.42 km/gal", extra: "Compact Hatchback" },
      { fromVal: "50 MPG", toVal: "80.47 km/gal", extra: "Efficient Turbo Diesel" },
      { fromVal: "55 MPG", toVal: "88.51 km/gal", extra: "Mild Hybrid Hatchback" },
      { fromVal: "60 MPG", toVal: "96.56 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "65 MPG", toVal: "104.61 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "70 MPG", toVal: "112.65 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of UK MPG to km/gal (Imp)",
    items: [
      {
        title: "Fleet Route Efficiency Audits",
        text: "UK commercial transport operators converting standard Imperial MPG statistics against kilometer-based route telematics."
      },
      {
        title: "Automotive Dyno Testing",
        text: "Validation testing on chassis roller dynamometers configured in metric distance units."
      },
      {
        title: "Cross-Market Brochure Translation",
        text: "Converting UK official vehicle brochure data for international markets operating on metric distances."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1.609344 instead of multiplying when converting UK MPG to km/gal (Imp).",
      "Using the US liquid gallon volume (3.785412 L) instead of the Imperial gallon (4.54609 L).",
      "Confusing km/gal (Imp) with km/L."
    ]
  },
  faqs: [
    {
      question: "How many km/gal (Imp) is 1 UK MPG?",
      answer: "1 UK Imperial MPG equals exactly 1.609344 Kilometers per Imperial Gallon."
    },
    {
      question: "What is the formula to convert UK MPG to km/gal (Imp)?",
      answer: "The formula is: km/gal (Imp) = MPG (UK) × 1.609344."
    },
    {
      question: "How many km/gal (Imp) is 40 UK MPG?",
      answer: "40 UK MPG equals exactly 64.37376 km/gal (Imp) (approximately 64.37 km/gal)."
    },
    {
      question: "How many km/gal (Imp) is 50 UK MPG?",
      answer: "50 UK MPG equals exactly 80.4672 km/gal (Imp) (approximately 80.47 km/gal)."
    },
    {
      question: "How do I convert 60 UK MPG to km/gal (Imp)?",
      answer: "Multiply 60 by 1.609344 to get 96.56 km/gal (Imp)."
    },
    {
      question: "Why is the conversion factor 1.609344?",
      answer: "Because 1 international statute mile is defined as exactly 1.609344 kilometers."
    },
    {
      question: "How do I convert km/gal (Imp) back to UK MPG?",
      answer: "Divide by 1.609344, or multiply by 0.621371."
    },
    {
      question: "How many km/gal (Imp) is 45 UK MPG?",
      answer: "45 UK MPG equals exactly 72.42048 km/gal (Imp) (approximately 72.42 km/gal)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (Imperial) to MPG (UK)", from: "km-per-gallon-imperial", to: "mpg-uk" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" }
  ]
};

// 3. Kilometers per Gallon (Imperial) to MPG (US)
export const kmPerGallonImperialToMpgUs: CustomArticleData = {
  fromUnitId: "km-per-gallon-imperial",
  toUnitId: "mpg-us",
  seoTitle: "Kilometers per Gallon (Imperial) to MPG (US) Converter",
  metaDescription: "Convert Kilometers per Imperial Gallon to US Miles per Gallon (km/gal Imp to MPG US). Exact 0.517398 factor, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Gallon (Imperial) to MPG (US) Converter",
  introduction: [
    "Kilometers per Gallon (Imperial) and US Miles per Gallon (MPG US) differ in both distance and fuel volume measurements. Kilometers per Gallon (Imperial) uses metric kilometers with the British Imperial gallon (4.54609 liters), whereas US MPG uses statute miles with the US liquid gallon (3.785411784 liters).",
    "To convert from km/gal (Imp) to US MPG, we convert kilometers to statute miles (dividing by 1.609344) and adjust for the volume ratio between US and Imperial gallons (multiplying by 3.785411784 / 4.54609). Combining these factors yields the exact conversion multiplier 0.517397732.",
    "This reference explains the mathematical conversion, provides worked vehicle calculation examples, offers structured lookup tables, and answers common automotive fuel efficiency questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (Imperial) [km/gal (Imp)] to US Miles per Gallon [MPG (US)], multiply the km/gal (Imp) value by 0.517398 (or divide by 1.932739). For example, 60 km/gal (Imp) equals approximately 31.04 US MPG.",
    formulaDisplay: "MPG (US) = km/gal (Imp) × (3.785411784 / 4.54609) / 1.609344 = km/gal (Imp) × 0.517397732",
    subtext: "1 Kilometer per Imperial Gallon equals approximately 0.517398 US Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) measures metric kilometers traveled per British Imperial gallon (4.54609 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding US MPG",
    text: "US Miles per Gallon (MPG) is the official automotive fuel economy rating in the United States, measuring statute miles per US liquid gallon (3.785411784 liters)."
  },
  relationship: "Converting km to miles multiplies by 1/1.609344, while scaling per Imperial gallon to per US gallon multiplies by (3.785411784 / 4.54609 = 0.832674). Therefore, MPG (US) = km/gal (Imp) × 0.832674 / 1.609344 = km/gal (Imp) × 0.517397732.",
  relationshipTitle: "km/gal (Imp) to US MPG Benchmarks",
  relationshipItems: [
    { label: "40 km/gal (Imp)", value: "20.70 MPG (US) — Full-size SUV / Heavy commercial vehicle" },
    { label: "60 km/gal (Imp)", value: "31.04 MPG (US) — Midsize family saloon / Crossover" },
    { label: "80 km/gal (Imp)", value: "41.39 MPG (US) — Compact hatchback" },
    { label: "100 km/gal (Imp)", value: "51.74 MPG (US) — Efficient hybrid vehicle" },
    { label: "120 km/gal (Imp)", value: "62.09 MPG (US) — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply Kilometers per Gallon (Imperial) by 0.517397732 to obtain US Miles per Gallon.",
    math: "MPG (US) = km/gal (Imp) × 0.517397732",
    subtext: "To convert back from US MPG to km/gal (Imp), multiply by 1.932738713."
  },
  formulaTitle: "km/gal (Imp) to US MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate US MPG from km/gal (Imp) in your head, multiply by 0.52 (roughly divide by 2). For example, 60 km/gal (Imp) × 0.52 ≈ 31.2 US MPG."
  },
  expertNote: {
    title: "Combined Distance and Volume Conversion",
    text: "This conversion accounts for both the km-to-mile distance reduction and the smaller volume of the US gallon relative to the Imperial gallon."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Hatchback",
        subtitle: "Convert 70 km/gal (Imp) to US Miles per Gallon.",
        steps: [
          "Identify the input fuel rating: 70 km/gal (Imp).",
          "Apply conversion formula: MPG (US) = 70 × 0.517397732.",
          "Calculate: 70 × 0.517397732 = 36.217841.",
          "Result: 70 km/gal (Imp) equals approximately 36.22 US MPG."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 50 km/gal (Imp) into US MPG.",
        steps: [
          "Identify the rating: 50 km/gal (Imp).",
          "Multiply by 0.517398: 50 × 0.517397732 = 25.869887.",
          "Result: 50 km/gal (Imp) equals 25.87 US MPG."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 95 km/gal (Imp) into US MPG.",
        steps: [
          "Identify the value: 95 km/gal (Imp).",
          "Calculate: 95 × 0.517397732 = 49.152785.",
          "Result: 95 km/gal (Imp) equals 49.15 US MPG."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (Imperial) to US MPG Conversion Table",
    headers: ["km/gal (Imp)", "MPG (US)", "Vehicle Class Context"],
    rows: [
      { fromVal: "30 km/gal", toVal: "15.52 MPG", extra: "Commercial Freight Truck" },
      { fromVal: "40 km/gal", toVal: "20.70 MPG", extra: "Full-Size V8 SUV" },
      { fromVal: "50 km/gal", toVal: "25.87 MPG", extra: "Midsize Crossover" },
      { fromVal: "60 km/gal", toVal: "31.04 MPG", extra: "Compact Family Sedan" },
      { fromVal: "70 km/gal", toVal: "36.22 MPG", extra: "Efficient Hatchback" },
      { fromVal: "80 km/gal", toVal: "41.39 MPG", extra: "Mild Hybrid Saloon" },
      { fromVal: "90 km/gal", toVal: "46.57 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "100 km/gal", toVal: "51.74 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "110 km/gal", toVal: "56.91 MPG", extra: "Plug-in Hybrid Vehicle" },
      { fromVal: "120 km/gal", toVal: "62.09 MPG", extra: "Eco Prototype Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (Imp) to US MPG",
    items: [
      {
        title: "Cross-Market Vehicle Imports",
        text: "Evaluating European or UK-tested vehicle fuel economy data for compliance with US EPA window sticker metrics."
      },
      {
        title: "Automotive Telematics Normalization",
        text: "Standardizing global vehicle fleet telemetry between UK subsidiaries and US corporate reporting systems."
      },
      {
        title: "Powertrain Research",
        text: "Converting dynamometer tests recorded in km per Imperial gallon into standard US regulatory fuel efficiency ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming Imperial and US gallons are identical in volume (1 Imp gal = 1.20095 US gal).",
      "Inverting the multiplier: Converting km/gal (Imp) to US MPG requires multiplying by 0.517398.",
      "Confusing km/gal (Imp) with km/gal (US)."
    ]
  },
  faqs: [
    {
      question: "How many US MPG is 1 km/gal (Imp)?",
      answer: "1 Kilometer per Imperial Gallon equals approximately 0.517398 US Miles per Gallon."
    },
    {
      question: "What is the formula to convert km/gal (Imp) to US MPG?",
      answer: "The formula is: MPG (US) = km/gal (Imp) × 0.517397732."
    },
    {
      question: "How many US MPG is 60 km/gal (Imp)?",
      answer: "60 km/gal (Imp) equals approximately 31.04 US MPG (60 × 0.517398 = 31.0439)."
    },
    {
      question: "How many US MPG is 80 km/gal (Imp)?",
      answer: "80 km/gal (Imp) equals approximately 41.39 US MPG (80 × 0.517398 = 41.3918)."
    },
    {
      question: "How do I convert 100 km/gal (Imp) to US MPG?",
      answer: "Multiply 100 by 0.517398 to get 51.74 US MPG."
    },
    {
      question: "Why is the conversion factor 0.517398?",
      answer: "It combines the kilometers-to-miles conversion (1 / 1.609344) with the US-to-Imperial gallon volume ratio (3.785411784 / 4.54609 = 0.832674)."
    },
    {
      question: "How do I convert US MPG back to km/gal (Imp)?",
      answer: "Multiply the US MPG value by 1.932739 (or divide by 0.517398)."
    },
    {
      question: "How many US MPG is 50 km/gal (Imp)?",
      answer: "50 km/gal (Imp) equals approximately 25.87 US MPG (50 × 0.517398 = 25.8699)."
    }
  ],
  relatedList: [
    { label: "MPG (US) to Kilometers per Gallon (Imperial)", from: "mpg-us", to: "km-per-gallon-imperial" },
    { label: "Kilometers per Gallon (Imperial) to MPG (UK)", from: "km-per-gallon-imperial", to: "mpg-uk" },
    { label: "Kilometers per Gallon (Imperial) to km/L", from: "km-per-gallon-imperial", to: "km-per-liter" },
    { label: "Kilometers per Gallon (Imperial) to L/100km", from: "km-per-gallon-imperial", to: "liters-per-100km" }
  ]
};

// 4. MPG (US) to Kilometers per Gallon (Imperial)
export const mpgUsToKmPerGallonImperial: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "km-per-gallon-imperial",
  seoTitle: "MPG (US) to Kilometers per Gallon (Imperial) Converter",
  metaDescription: "Convert US Miles per Gallon to Kilometers per Imperial Gallon (MPG US to km/gal Imp). Exact 1.932739 multiplier, step-by-step math, tables, and FAQs.",
  h1: "MPG (US) to Kilometers per Gallon (Imperial) Converter",
  introduction: [
    "US Miles per Gallon (MPG US) and Kilometers per Gallon (Imperial) represent fuel efficiency measurements using different distance standards and gallon definitions. US MPG uses statute miles per US liquid gallon (3.785411784 liters), while Kilometers per Gallon (Imperial) uses metric kilometers per British Imperial gallon (4.54609 liters).",
    "To convert from US MPG to km/gal (Imp), multiply by 1.609344 (miles to kilometers) and scale by the volume ratio of Imperial gallons to US gallons (4.54609 / 3.785411784 = 1.200949925). Combining these factors produces the exact multiplier 1.932738713.",
    "This guide provides the complete conversion derivation, worked calculation examples, structured lookup tables, and answers to frequently asked automotive questions."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon [MPG (US)] to Kilometers per Gallon (Imperial) [km/gal (Imp)], multiply the US MPG value by 1.932739. For example, 30 US MPG equals approximately 57.98 km/gal (Imp).",
    formulaDisplay: "km/gal (Imp) = MPG (US) × 1.609344 × (4.54609 / 3.785411784) = MPG (US) × 1.932738713",
    subtext: "1 US MPG equals approximately 1.932739 Kilometers per Imperial Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding US MPG",
    text: "US Miles per Gallon (MPG) is the official federal fuel economy standard in the United States, measuring statute miles per US liquid gallon (3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) measures metric kilometers traveled per British Imperial gallon (4.54609 liters)."
  },
  relationship: "Because 1 statute mile is 1.609344 km and 1 Imperial gallon is 1.20095 US gallons, traveling 1 mile on 1 US gallon equals traveling 1.609344 × 1.20095 = 1.932739 km per Imperial gallon. Therefore, km/gal (Imp) = MPG (US) × 1.932738713.",
  relationshipTitle: "US MPG to km/gal (Imp) Benchmarks",
  relationshipItems: [
    { label: "20 MPG (US)", value: "38.65 km/gal (Imp) — Midsize SUV / Crossover" },
    { label: "30 MPG (US)", value: "57.98 km/gal (Imp) — Compact family sedan" },
    { label: "40 MPG (US)", value: "77.31 km/gal (Imp) — Subcompact commuter car" },
    { label: "50 MPG (US)", value: "96.64 km/gal (Imp) — Full hybrid passenger vehicle" },
    { label: "60 MPG (US)", value: "115.96 km/gal (Imp) — Ultra-efficient plug-in hybrid" }
  ],
  formula: {
    text: "Multiply US Miles per Gallon by 1.932738713 to determine Kilometers per Gallon (Imperial).",
    math: "km/gal (Imp) = MPG (US) × 1.932738713",
    subtext: "To convert back from km/gal (Imp) to US MPG, multiply by 0.517397732."
  },
  formulaTitle: "US MPG to km/gal (Imp) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (Imp) from US MPG in your head, multiply by 1.93 (roughly double the number). For example, 30 US MPG × 1.93 ≈ 58 km/gal (Imp)."
  },
  expertNote: {
    title: "Proportional Relationship",
    text: "Because both metrics represent distance over fuel volume, higher ratings reflect superior fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Highway Sedan",
        subtitle: "Convert 34 MPG (US) to Kilometers per Gallon (Imperial).",
        steps: [
          "Identify the US MPG rating: 34 MPG.",
          "Apply formula: km/gal (Imp) = 34 × 1.932738713.",
          "Calculate: 34 × 1.932738713 = 65.713116.",
          "Result: 34 US MPG equals approximately 65.71 km/gal (Imp)."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 28 MPG (US) into km/gal (Imp).",
        steps: [
          "Identify the rating: 28 MPG.",
          "Multiply by 1.932739: 28 × 1.932738713 = 54.116684.",
          "Result: 28 US MPG equals 54.12 km/gal (Imp)."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 52 MPG (US) into km/gal (Imp).",
        steps: [
          "Identify the value: 52 MPG.",
          "Calculate: 52 × 1.932738713 = 100.502413.",
          "Result: 52 US MPG equals 100.50 km/gal (Imp)."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Kilometers per Gallon (Imperial) Conversion Table",
    headers: ["MPG (US)", "km/gal (Imp)", "Typical Vehicle Category"],
    rows: [
      { fromVal: "15 MPG", toVal: "28.99 km/gal", extra: "Full-Size V8 Truck" },
      { fromVal: "20 MPG", toVal: "38.65 km/gal", extra: "Midsize SUV" },
      { fromVal: "25 MPG", toVal: "48.32 km/gal", extra: "Compact Crossover" },
      { fromVal: "30 MPG", toVal: "57.98 km/gal", extra: "Family Sedan" },
      { fromVal: "35 MPG", toVal: "67.65 km/gal", extra: "Efficient Compact Car" },
      { fromVal: "40 MPG", toVal: "77.31 km/gal", extra: "Subcompact Commuter" },
      { fromVal: "45 MPG", toVal: "86.97 km/gal", extra: "Mild Hybrid Vehicle" },
      { fromVal: "50 MPG", toVal: "96.64 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "55 MPG", toVal: "106.30 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "60 MPG", toVal: "115.96 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of US MPG to km/gal (Imp)",
    items: [
      {
        title: "International Vehicle Spec Comparison",
        text: "Translating US EPA window sticker figures into metric kilometer distances per Imperial gallon."
      },
      {
        title: "Automotive Engineering Research",
        text: "Comparing US federal test dynamometer results with British chassis test cycles."
      },
      {
        title: "Fleet Telematics Integration",
        text: "Normalizing vehicle fleet telemetry between North American operations and UK corporate headquarters."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using the 1.609344 factor alone without adjusting for the 20.09% difference in gallon volume.",
      "Dividing instead of multiplying when converting US MPG to km/gal (Imp).",
      "Confusing km/gal (Imp) with km/gal (US)."
    ]
  },
  faqs: [
    {
      question: "How many km/gal (Imp) is 1 US MPG?",
      answer: "1 US MPG equals approximately 1.932739 Kilometers per Imperial Gallon."
    },
    {
      question: "What is the formula to convert US MPG to km/gal (Imp)?",
      answer: "The formula is: km/gal (Imp) = MPG (US) × 1.932738713."
    },
    {
      question: "How many km/gal (Imp) is 30 US MPG?",
      answer: "30 US MPG equals approximately 57.98 km/gal (Imp) (30 × 1.932739 = 57.9822)."
    },
    {
      question: "How many km/gal (Imp) is 40 US MPG?",
      answer: "40 US MPG equals approximately 77.31 km/gal (Imp) (40 × 1.932739 = 77.3095)."
    },
    {
      question: "How do I convert 50 US MPG to km/gal (Imp)?",
      answer: "Multiply 50 by 1.932739 to get 96.64 km/gal (Imp)."
    },
    {
      question: "Why is the conversion factor 1.932739?",
      answer: "It combines the miles-to-kilometers factor (1.609344) with the Imperial-to-US gallon volume ratio (4.54609 / 3.785411784 = 1.20095)."
    },
    {
      question: "How do I convert km/gal (Imp) back to US MPG?",
      answer: "Multiply by 0.517398 (or divide by 1.932739)."
    },
    {
      question: "How many km/gal (Imp) is 25 US MPG?",
      answer: "25 US MPG equals approximately 48.32 km/gal (Imp) (25 × 1.932739 = 48.3185)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (Imperial) to MPG (US)", from: "km-per-gallon-imperial", to: "mpg-us" },
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" }
  ]
};

// 5. Kilometers per Gallon (Imperial) to Kilometers per Liter
export const kmPerGallonImperialToKmPerLiter: CustomArticleData = {
  fromUnitId: "km-per-gallon-imperial",
  toUnitId: "km-per-liter",
  seoTitle: "Kilometers per Gallon (Imperial) to Kilometers per Liter Converter",
  metaDescription: "Convert Kilometers per Imperial Gallon to Kilometers per Liter (km/gal Imp to km/L) instantly. 0.219969 factor, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Gallon (Imperial) to Kilometers per Liter Converter",
  introduction: [
    "Kilometers per Gallon (Imperial) and Kilometers per Liter (km/L) are metric-distance fuel efficiency metrics that share the kilometer as their distance unit. The only distinction between them is the unit of liquid volume: the British Imperial gallon versus the metric liter.",
    "Because 1 standard British Imperial gallon is legally defined as exactly 4.54609 liters, dividing any km/gal (Imp) figure by 4.54609 (or multiplying by 0.219969248) converts it directly into Kilometers per Liter.",
    "This guide covers the exact mathematical relationship, step-by-step conversion examples for modern passenger vehicles, lookup tables, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (Imperial) [km/gal (Imp)] to Kilometers per Liter [km/L], divide by 4.54609 (or multiply by 0.219969). For example, 60 km/gal (Imp) equals approximately 13.20 km/L.",
    formulaDisplay: "km/L = km/gal (Imp) / 4.54609 = km/gal (Imp) × 0.219969248",
    subtext: "1 Kilometer per Imperial Gallon equals approximately 0.219969 Kilometers per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) measures distance in kilometers per British Imperial gallon (4.54609 liters) of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is the primary metric fuel economy standard in Japan, India, Brazil, and Latin America, expressing kilometers traveled per liter of fuel."
  },
  relationship: "Since 1 Imperial gallon contains exactly 4.54609 liters, traveling K kilometers on 1 Imperial gallon equals traveling K / 4.54609 kilometers per liter. Therefore, km/L = km/gal (Imp) / 4.54609.",
  relationshipTitle: "km/gal (Imp) to km/L Performance Ratings",
  relationshipItems: [
    { label: "40 km/gal (Imp)", value: "8.80 km/L — Full-size SUV / Heavy commercial vehicle" },
    { label: "60 km/gal (Imp)", value: "13.20 km/L — Midsize crossover / sedan" },
    { label: "80 km/gal (Imp)", value: "17.60 km/L — Compact commuter car" },
    { label: "100 km/gal (Imp)", value: "22.00 km/L — Modern hybrid vehicle" },
    { label: "120 km/gal (Imp)", value: "26.40 km/L — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide Kilometers per Gallon (Imperial) by 4.54609 or multiply by 0.219969248 to obtain Kilometers per Liter.",
    math: "km/L = km/gal (Imp) × 0.219969248",
    subtext: "To convert back from km/L to km/gal (Imp), multiply by 4.54609."
  },
  formulaTitle: "km/gal (Imp) to km/L Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/L from km/gal (Imp) in your head, divide by 4.55. For example, 60 km/gal (Imp) / 4.55 ≈ 13.2 km/L."
  },
  expertNote: {
    title: "Pure Volume Conversion",
    text: "Because both metrics use kilometers as the distance baseline, the conversion factor is purely the ratio of liters in an Imperial gallon."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Diesel Estate",
        subtitle: "Convert 75 km/gal (Imp) to Kilometers per Liter.",
        steps: [
          "Identify the fuel rating: 75 km/gal (Imp).",
          "Apply formula: km/L = 75 / 4.54609.",
          "Calculate: 75 × 0.219969248 = 16.497694.",
          "Result: 75 km/gal (Imp) equals approximately 16.50 km/L."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 55 km/gal (Imp) into km/L.",
        steps: [
          "Identify the rating: 55 km/gal (Imp).",
          "Multiply by 0.219969: 55 × 0.219969248 = 12.098309.",
          "Result: 55 km/gal (Imp) equals 12.10 km/L."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 90 km/gal (Imp) into km/L.",
        steps: [
          "Identify the value: 90 km/gal (Imp).",
          "Calculate: 90 / 4.54609 = 19.797232.",
          "Result: 90 km/gal (Imp) equals 19.80 km/L."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (Imperial) to km/L Conversion Table",
    headers: ["km/gal (Imp)", "Kilometers per Liter (km/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "30 km/gal", toVal: "6.60 km/L", extra: "Commercial Freight Truck" },
      { fromVal: "40 km/gal", toVal: "8.80 km/L", extra: "Full-Size V8 SUV" },
      { fromVal: "50 km/gal", toVal: "11.00 km/L", extra: "Midsize Crossover" },
      { fromVal: "60 km/gal", toVal: "13.20 km/L", extra: "Compact Family Sedan" },
      { fromVal: "70 km/gal", toVal: "15.40 km/L", extra: "Subcompact Car" },
      { fromVal: "80 km/gal", toVal: "17.60 km/L", extra: "Mild Hybrid Saloon" },
      { fromVal: "90 km/gal", toVal: "19.80 km/L", extra: "Full Hybrid Sedan" },
      { fromVal: "100 km/gal", toVal: "22.00 km/L", extra: "High-Efficiency Hybrid" },
      { fromVal: "110 km/gal", toVal: "24.20 km/L", extra: "Plug-in Hybrid Vehicle" },
      { fromVal: "120 km/gal", toVal: "26.40 km/L", extra: "Eco Prototype Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (Imp) to km/L",
    items: [
      {
        title: "International Fuel Log Reconciliation",
        text: "Drivers logging fuel purchases in liters against vehicle trip computers configured in Imperial gallons convert seamlessly to km/L."
      },
      {
        title: "Automotive Powertrain Benchmarking",
        text: "Engineers comparing fuel flow meters calibrated in liters per hour against dynamometer tests measuring distance per Imperial gallon."
      },
      {
        title: "Fleet Telematics Standardization",
        text: "Converting UK and Commonwealth fleet fuel consumption records into standardized global metric formats."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting km/gal (Imp) to km/L requires dividing by 4.54609.",
      "Using the US gallon volume (3.785412 L) instead of the Imperial gallon (4.54609 L).",
      "Confusing km/L with L/100km."
    ]
  },
  faqs: [
    {
      question: "How many km/L is 1 km/gal (Imp)?",
      answer: "1 Kilometer per Imperial Gallon equals approximately 0.219969 Kilometers per Liter (1 / 4.54609)."
    },
    {
      question: "What is the formula to convert km/gal (Imp) to km/L?",
      answer: "The formula is: km/L = km/gal (Imp) / 4.54609 = km/gal (Imp) × 0.219969248."
    },
    {
      question: "How many km/L is 60 km/gal (Imp)?",
      answer: "60 km/gal (Imp) equals approximately 13.20 km/L (60 / 4.54609 = 13.1982)."
    },
    {
      question: "How many km/L is 80 km/gal (Imp)?",
      answer: "80 km/gal (Imp) equals approximately 17.60 km/L (80 / 4.54609 = 17.5975)."
    },
    {
      question: "How do I convert 100 km/gal (Imp) to km/L?",
      answer: "Multiply 100 by 0.219969 to get 22.00 km/L."
    },
    {
      question: "Why is the factor 0.219969?",
      answer: "Because 0.219969248 is the reciprocal of 4.54609, which is the exact number of liters in an Imperial gallon."
    },
    {
      question: "How do I convert km/L back to km/gal (Imp)?",
      answer: "Multiply the km/L value by 4.54609."
    },
    {
      question: "How many km/L is 50 km/gal (Imp)?",
      answer: "50 km/gal (Imp) equals approximately 11.00 km/L (50 × 0.219969 = 10.9985)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Liter to Kilometers per Gallon (Imperial)", from: "km-per-liter", to: "km-per-gallon-imperial" },
    { label: "Kilometers per Gallon (Imperial) to MPG (UK)", from: "km-per-gallon-imperial", to: "mpg-uk" },
    { label: "Kilometers per Gallon (Imperial) to MPG (US)", from: "km-per-gallon-imperial", to: "mpg-us" },
    { label: "Kilometers per Gallon (Imperial) to L/100km", from: "km-per-gallon-imperial", to: "liters-per-100km" }
  ]
};

// 6. Kilometers per Liter to Kilometers per Gallon (Imperial)
export const kmPerLiterToKmPerGallonImperial: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "km-per-gallon-imperial",
  seoTitle: "Kilometers per Liter to Kilometers per Gallon (Imperial) Converter",
  metaDescription: "Convert Kilometers per Liter to Kilometers per Imperial Gallon (km/L to km/gal Imp) instantly. Exact 4.54609 multiplier, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Liter to Kilometers per Gallon (Imperial) Converter",
  introduction: [
    "Kilometers per Liter (km/L) and Kilometers per Gallon (Imperial) express vehicle fuel efficiency using metric kilometers over liquid fuel volume. While km/L uses the standard metric liter, Kilometers per Gallon (Imperial) scales the measurement to the British Imperial gallon (4.54609 liters).",
    "Because 1 Imperial gallon contains exactly 4.54609 liters, a vehicle that travels K kilometers on a single liter will travel exactly 4.54609 × K kilometers on a full Imperial gallon.",
    "This guide provides the exact conversion formula, worked examples for common passenger vehicles, lookup tables, and answers to frequently asked engineering questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter [km/L] to Kilometers per Gallon (Imperial) [km/gal (Imp)], multiply the km/L value by 4.54609. For example, 15 km/L equals approximately 68.19 km/gal (Imp).",
    formulaDisplay: "km/gal (Imp) = km/L × 4.54609",
    subtext: "1 Kilometer per Liter equals exactly 4.54609 Kilometers per Imperial Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is the standard automotive fuel efficiency metric in Japan, India, and Latin America, expressing kilometers traveled per liter of fuel."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) expresses distance traveled in metric kilometers per British Imperial gallon (4.54609 liters) of fuel consumed."
  },
  relationship: "Since 1 Imperial gallon equals 4.54609 liters, traveling 1 kilometer on 1 liter means traveling 4.54609 kilometers on 1 Imperial gallon. Therefore, km/gal (Imp) = km/L × 4.54609.",
  relationshipTitle: "km/L to km/gal (Imp) Benchmark Ratings",
  relationshipItems: [
    { label: "8 km/L", value: "36.37 km/gal (Imp) — Full-size SUV / Heavy commercial vehicle" },
    { label: "12 km/L", value: "54.55 km/gal (Imp) — Midsize family sedan / Crossover" },
    { label: "16 km/L", value: "72.74 km/gal (Imp) — Compact commuter car" },
    { label: "20 km/L", value: "90.92 km/gal (Imp) — Full hybrid passenger vehicle" },
    { label: "24 km/L", value: "109.11 km/gal (Imp) — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply Kilometers per Liter by 4.54609 to determine Kilometers per Gallon (Imperial).",
    math: "km/gal (Imp) = km/L × 4.54609",
    subtext: "To convert back from km/gal (Imp) to km/L, divide by 4.54609 (or multiply by 0.219969)."
  },
  formulaTitle: "km/L to km/gal (Imp) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (Imp) from km/L in your head, multiply by 4.55. For example, 10 km/L × 4.55 = 45.5 km/gal (Imp)."
  },
  expertNote: {
    title: "Direct Proportional Scaling",
    text: "Because both metrics represent distance over fuel volume, higher values indicate superior fuel efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Japanese Import Sedan",
        subtitle: "Convert a catalog rating of 18.0 km/L to Kilometers per Gallon (Imperial).",
        steps: [
          "Identify the km/L rating: 18.0 km/L.",
          "Apply formula: km/gal (Imp) = 18.0 × 4.54609.",
          "Calculate: 18.0 × 4.54609 = 81.829620.",
          "Result: 18.0 km/L equals approximately 81.83 km/gal (Imp)."
        ]
      },
      {
        title: "Example 2: Compact Crossover",
        subtitle: "Convert 14.5 km/L into km/gal (Imp).",
        steps: [
          "Identify the rating: 14.5 km/L.",
          "Multiply by 4.54609: 14.5 × 4.54609 = 65.918305.",
          "Result: 14.5 km/L equals 65.92 km/gal (Imp)."
        ]
      },
      {
        title: "Example 3: Hybrid Hatchback",
        subtitle: "Convert 22.5 km/L into km/gal (Imp).",
        steps: [
          "Identify the value: 22.5 km/L.",
          "Calculate: 22.5 × 4.54609 = 102.287025.",
          "Result: 22.5 km/L equals 102.29 km/gal (Imp)."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to km/gal (Imp) Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "km/gal (Imp)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "6 km/L", toVal: "27.28 km/gal", extra: "Heavy Commercial Truck" },
      { fromVal: "8 km/L", toVal: "36.37 km/gal", extra: "Full-Size V8 SUV" },
      { fromVal: "10 km/L", toVal: "45.46 km/gal", extra: "Midsize Crossover" },
      { fromVal: "12 km/L", toVal: "54.55 km/gal", extra: "Family Sedan" },
      { fromVal: "14 km/L", toVal: "63.65 km/gal", extra: "Compact Hatchback" },
      { fromVal: "16 km/L", toVal: "72.74 km/gal", extra: "Subcompact Car" },
      { fromVal: "18 km/L", toVal: "81.83 km/gal", extra: "Mild Hybrid Car" },
      { fromVal: "20 km/L", toVal: "90.92 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "22 km/L", toVal: "100.01 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "25 km/L", toVal: "113.65 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/L to km/gal (Imp)",
    items: [
      {
        title: "UK Fleet Telematics",
        text: "Fleet operators tracking vehicles with metric odometers in UK Imperial-gallon fuel environments convert data to km/gal (Imp)."
      },
      {
        title: "Automotive Engine Benchmarking",
        text: "Engineers comparing metric flow sensor test cell outputs against Imperial fuel tank capacity ratings."
      },
      {
        title: "Vehicle Import Analysis",
        text: "Comparing Japanese or Indian market domestic vehicle specifications against UK Imperial gallon benchmarks."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 4.54609 instead of multiplying when converting km/L to km/gal (Imp).",
      "Using the US liquid gallon factor (3.785412) instead of the Imperial gallon factor (4.54609).",
      "Confusing km/gal (Imp) with UK MPG."
    ]
  },
  faqs: [
    {
      question: "How many km/gal (Imp) is 1 km/L?",
      answer: "1 Kilometer per Liter equals exactly 4.54609 Kilometers per Imperial Gallon."
    },
    {
      question: "What is the formula to convert km/L to km/gal (Imp)?",
      answer: "The formula is: km/gal (Imp) = km/L × 4.54609."
    },
    {
      question: "How many km/gal (Imp) is 10 km/L?",
      answer: "10 km/L equals exactly 45.4609 km/gal (Imp) (approximately 45.46 km/gal)."
    },
    {
      question: "How many km/gal (Imp) is 15 km/L?",
      answer: "15 km/L equals approximately 68.19 km/gal (Imp) (15 × 4.54609 = 68.1914)."
    },
    {
      question: "How do I convert 20 km/L to km/gal (Imp)?",
      answer: "Multiply 20 by 4.54609 to get 90.92 km/gal (Imp)."
    },
    {
      question: "Why is the conversion factor 4.54609?",
      answer: "Because 1 British Imperial gallon contains exactly 4.54609 metric liters."
    },
    {
      question: "How do I convert km/gal (Imp) back to km/L?",
      answer: "Divide the km/gal (Imp) value by 4.54609, or multiply by 0.219969."
    },
    {
      question: "How many km/gal (Imp) is 12 km/L?",
      answer: "12 km/L equals approximately 54.55 km/gal (Imp) (12 × 4.54609 = 54.5531)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (Imperial) to Kilometers per Liter", from: "km-per-gallon-imperial", to: "km-per-liter" },
    { label: "km/L to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "km/L to L/100km", from: "km-per-liter", to: "liters-per-100km" }
  ]
};

// 7. Kilometers per Gallon (Imperial) to Liters per 100km
export const kmPerGallonImperialToLitersPer100km: CustomArticleData = {
  fromUnitId: "km-per-gallon-imperial",
  toUnitId: "liters-per-100km",
  seoTitle: "Kilometers per Gallon (Imperial) to Liters per 100km Converter",
  metaDescription: "Convert Kilometers per Imperial Gallon to Liters per 100km (km/gal Imp to L/100km). Inverse 454.609 formula, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Gallon (Imperial) to Liters per 100km Converter",
  introduction: [
    "Kilometers per Gallon (Imperial) and Liters per 100 Kilometers (L/100km) represent reciprocal paradigms of automotive fuel rating. Kilometers per Gallon (Imperial) is a distance-per-volume efficiency rating, whereas Liters per 100km is the international volume-per-distance consumption metric.",
    "Because efficiency and consumption are mathematically inverse, converting between them requires dividing the fundamental conversion constant (454.609) by the km/gal (Imp) figure.",
    "This guide provides the exact formula derivation, step-by-step calculation examples for modern vehicles, lookup tables, and answers to common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (Imperial) [km/gal (Imp)] to Liters per 100km [L/100km], divide 454.609 by the km/gal (Imp) value. For example, 60 km/gal (Imp) consumes approximately 7.58 L/100km.",
    formulaDisplay: "L/100km = 454.609 / km/gal (Imp)",
    subtext: "Inverse conversion: A higher km/gal (Imp) rating yields a lower, more efficient L/100km consumption value."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) measures distance in kilometers traveled per British Imperial gallon (4.54609 liters) of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) is the standard metric fuel consumption metric used throughout Europe, Canada, and Australia."
  },
  relationship: "Traveling K kilometers on 1 Imperial gallon (4.54609 L) means consuming 4.54609 / K liters per kilometer. Multiplying by 100 gives (100 × 4.54609) / K = 454.609 / K liters per 100 km. Therefore, L/100km = 454.609 / km/gal (Imp).",
  relationshipTitle: "km/gal (Imp) to L/100km Performance Comparisons",
  relationshipItems: [
    { label: "30 km/gal (Imp)", value: "15.15 L/100km — Heavy-duty pickup / Full-size SUV" },
    { label: "50 km/gal (Imp)", value: "9.09 L/100km — Midsize crossover / SUV" },
    { label: "70 km/gal (Imp)", value: "6.49 L/100km — Compact family sedan" },
    { label: "90 km/gal (Imp)", value: "5.05 L/100km — Modern hybrid vehicle" },
    { label: "110 km/gal (Imp)", value: "4.13 L/100km — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide 454.609 by the Kilometers per Gallon (Imperial) value to obtain Liters per 100 Kilometers.",
    math: "L/100km = 454.609 / km/gal (Imp)",
    subtext: "To convert back from L/100km to km/gal (Imp), divide 454.609 by the L/100km value."
  },
  formulaTitle: "km/gal (Imp) to L/100km Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100km from km/gal (Imp) in your head, divide 454.6 by the km/gal (Imp) value. For example, 454.6 / 60 km/gal ≈ 7.58 L/100km."
  },
  expertNote: {
    title: "Inverse Nature Reminder",
    text: "Remember that in L/100km, lower values indicate lower fuel consumption and greater vehicle efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Hatchback",
        subtitle: "Convert 65 km/gal (Imp) to Liters per 100km.",
        steps: [
          "Identify the km/gal (Imp) rating: 65 km/gal (Imp).",
          "Apply inverse formula: L/100km = 454.609 / 65.",
          "Calculate: 454.609 / 65 = 6.993985.",
          "Result: 65 km/gal (Imp) equals approximately 6.99 L/100km."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 52 km/gal (Imp) into L/100km.",
        steps: [
          "Identify the rating: 52 km/gal (Imp).",
          "Divide 454.609: 454.609 / 52 = 8.742481.",
          "Result: 52 km/gal (Imp) equals 8.74 L/100km."
        ]
      },
      {
        title: "Example 3: Full Hybrid Car",
        subtitle: "Convert 95 km/gal (Imp) into L/100km.",
        steps: [
          "Identify the value: 95 km/gal (Imp).",
          "Calculate: 454.609 / 95 = 4.785358.",
          "Result: 95 km/gal (Imp) equals 4.79 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (Imperial) to L/100km Conversion Table",
    headers: ["km/gal (Imp)", "Liters per 100km (L/100km)", "Fuel Consumption Rating"],
    rows: [
      { fromVal: "25 km/gal", toVal: "18.18 L/100km", extra: "Very High Fuel Consumption" },
      { fromVal: "35 km/gal", toVal: "12.99 L/100km", extra: "High Consumption (Large SUV)" },
      { fromVal: "50 km/gal", toVal: "9.09 L/100km", extra: "Moderate (Midsize Crossover)" },
      { fromVal: "60 km/gal", toVal: "7.58 L/100km", extra: "Good (Family Sedan)" },
      { fromVal: "70 km/gal", toVal: "6.49 L/100km", extra: "Very Good (Compact Hatchback)" },
      { fromVal: "80 km/gal", toVal: "5.68 L/100km", extra: "Efficient (Mild Hybrid)" },
      { fromVal: "90 km/gal", toVal: "5.05 L/100km", extra: "Excellent (Full Hybrid)" },
      { fromVal: "100 km/gal", toVal: "4.55 L/100km", extra: "Superior (Plug-in Hybrid)" },
      { fromVal: "115 km/gal", toVal: "3.95 L/100km", extra: "Ultra-Low Consumption" },
      { fromVal: "130 km/gal", toVal: "3.50 L/100km", extra: "Eco Prototype Benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (Imp) to L/100km",
    items: [
      {
        title: "International Emissions Compliance",
        text: "Automotive engineers converting dynamometer distance-per-gallon test results into metric L/100km to model tailpipe carbon dioxide emissions."
      },
      {
        title: "UK & European Fleet Auditing",
        text: "Corporate fleet managers converting UK Imperial gallon fuel logs into European WLTP L/100km reporting benchmarks."
      },
      {
        title: "Cross-Border Journey Cost Estimation",
        text: "Estimating fuel requirements in liters for 100 km continental driving based on Imperial gallon fuel economy figures."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Because this is an inverse relationship, you must divide the constant 454.609 by km/gal (Imp).",
      "Confusing Imperial gallons with US gallons: The constant for US gallons is 378.541, not 454.609.",
      "Assuming a higher L/100km indicates better efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert km/gal (Imp) to L/100km?",
      answer: "Divide 454.609 by the Kilometers per Gallon (Imperial) value. For example, 454.609 / 60 = 7.58 L/100km."
    },
    {
      question: "What is the formula to convert km/gal (Imp) to L/100km?",
      answer: "The formula is: L/100km = 454.609 / km/gal (Imp)."
    },
    {
      question: "Why is the numerator 454.609?",
      answer: "Because 100 kilometers multiplied by 4.54609 liters per Imperial gallon equals 454.609."
    },
    {
      question: "How many L/100km is 60 km/gal (Imp)?",
      answer: "60 km/gal (Imp) equals approximately 7.58 L/100km (454.609 / 60 = 7.5768)."
    },
    {
      question: "How many L/100km is 70 km/gal (Imp)?",
      answer: "70 km/gal (Imp) equals approximately 6.49 L/100km (454.609 / 70 = 6.4944)."
    },
    {
      question: "How many L/100km is 90 km/gal (Imp)?",
      answer: "90 km/gal (Imp) equals approximately 5.05 L/100km (454.609 / 90 = 5.0512)."
    },
    {
      question: "How do I convert L/100km back to km/gal (Imp)?",
      answer: "Divide 454.609 by the L/100km value."
    },
    {
      question: "How many L/100km is 50 km/gal (Imp)?",
      answer: "50 km/gal (Imp) equals approximately 9.09 L/100km (454.609 / 50 = 9.0922)."
    }
  ],
  relatedList: [
    { label: "Liters per 100km to Kilometers per Gallon (Imperial)", from: "liters-per-100km", to: "km-per-gallon-imperial" },
    { label: "Kilometers per Gallon (Imperial) to MPG (UK)", from: "km-per-gallon-imperial", to: "mpg-uk" },
    { label: "Kilometers per Gallon (Imperial) to MPG (US)", from: "km-per-gallon-imperial", to: "mpg-us" },
    { label: "Kilometers per Gallon (Imperial) to km/L", from: "km-per-gallon-imperial", to: "km-per-liter" }
  ]
};

// 8. Liters per 100km to Kilometers per Gallon (Imperial)
export const litersPer100kmToKmPerGallonImperial: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "km-per-gallon-imperial",
  seoTitle: "Liters per 100km to Kilometers per Gallon (Imperial) Converter",
  metaDescription: "Convert Liters per 100km to Kilometers per Imperial Gallon (L/100km to km/gal Imp) instantly. Inverse 454.609 formula, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100km to Kilometers per Gallon (Imperial) Converter",
  introduction: [
    "Liters per 100 Kilometers (L/100km) and Kilometers per Gallon (Imperial) measure vehicle fuel economy from inverse mathematical frameworks. Liters per 100km is the global metric consumption metric (volume of fuel required per 100 kilometers), while Kilometers per Gallon (Imperial) is an efficiency metric (distance traveled per British Imperial gallon).",
    "Because volume per distance and distance per volume are reciprocal, converting from L/100km to km/gal (Imp) requires dividing the universal constant 454.609 by the L/100km consumption rate.",
    "This guide explains the inverse relationship, provides step-by-step calculations for passenger cars and commercial vehicles, offers structured lookup tables, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers [L/100km] to Kilometers per Gallon (Imperial) [km/gal (Imp)], divide 454.609 by the L/100km value. For example, a vehicle consuming 6.0 L/100km achieves approximately 75.77 km/gal (Imp).",
    formulaDisplay: "km/gal (Imp) = 454.609 / (L/100km)",
    subtext: "Inverse conversion: A lower L/100km consumption figure yields a higher km/gal (Imp) efficiency rating."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) measures fuel volume in liters consumed over 100 kilometers, standard throughout Europe, Australia, and Canada."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (Imperial)",
    text: "Kilometers per Gallon (Imperial) measures metric kilometers traveled per British Imperial gallon (4.54609 liters) of fuel consumed."
  },
  relationship: "Consuming L liters over 100 km means each liter provides 100 / L kilometers. Since 1 Imperial gallon contains 4.54609 liters, a full gallon yields (100 / L) × 4.54609 = 454.609 / L kilometers. Therefore, km/gal (Imp) = 454.609 / (L/100km).",
  relationshipTitle: "L/100km to km/gal (Imp) Benchmarks",
  relationshipItems: [
    { label: "12.0 L/100km", value: "37.88 km/gal (Imp) — Full-size SUV / Heavy pickup" },
    { label: "8.0 L/100km", value: "56.83 km/gal (Imp) — Midsize crossover / sedan" },
    { label: "6.0 L/100km", value: "75.77 km/gal (Imp) — Compact commuter car" },
    { label: "4.5 L/100km", value: "101.02 km/gal (Imp) — Full hybrid passenger vehicle" },
    { label: "3.5 L/100km", value: "129.89 km/gal (Imp) — Plug-in hybrid / eco commuter" }
  ],
  formula: {
    text: "Divide 454.609 by the fuel consumption in Liters per 100km to calculate Kilometers per Gallon (Imperial).",
    math: "km/gal (Imp) = 454.609 / (L/100km)",
    subtext: "To convert back from km/gal (Imp) to L/100km, divide 454.609 by the km/gal (Imp) value."
  },
  formulaTitle: "L/100km to km/gal (Imp) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (Imp) from L/100km in your head, divide 454.6 by the L/100km number. For example, 454.6 / 6.0 L/100km ≈ 75.8 km/gal (Imp)."
  },
  expertNote: {
    title: "Inverse Nature Reminder",
    text: "A 25% decrease in fuel consumption (L/100km) produces a 33.3% increase in distance per gallon (km/gal Imp)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Compact Hatchback",
        subtitle: "Convert a rating of 5.2 L/100km to Kilometers per Gallon (Imperial).",
        steps: [
          "Identify the L/100km rating: 5.2 L/100km.",
          "Apply formula: km/gal (Imp) = 454.609 / 5.2.",
          "Calculate: 454.609 / 5.2 = 87.424808.",
          "Result: 5.2 L/100km equals approximately 87.42 km/gal (Imp)."
        ]
      },
      {
        title: "Example 2: Crossover SUV",
        subtitle: "Convert 7.2 L/100km into km/gal (Imp).",
        steps: [
          "Identify the rating: 7.2 L/100km.",
          "Divide 454.609: 454.609 / 7.2 = 63.140139.",
          "Result: 7.2 L/100km equals 63.14 km/gal (Imp)."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid",
        subtitle: "Convert 4.1 L/100km into km/gal (Imp).",
        steps: [
          "Identify the value: 4.1 L/100km.",
          "Calculate: 454.609 / 4.1 = 110.880244.",
          "Result: 4.1 L/100km equals 110.88 km/gal (Imp)."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to km/gal (Imp) Conversion Table",
    headers: ["Liters per 100km (L/100km)", "km/gal (Imp)", "Vehicle Efficiency Context"],
    rows: [
      { fromVal: "14.0 L/100km", toVal: "32.47 km/gal", extra: "Heavy Commercial Freight Truck" },
      { fromVal: "12.0 L/100km", toVal: "37.88 km/gal", extra: "Full-Size V8 SUV" },
      { fromVal: "10.0 L/100km", toVal: "45.46 km/gal", extra: "Large Sedan / Crossover" },
      { fromVal: "8.0 L/100km", toVal: "56.83 km/gal", extra: "Family Hatchback" },
      { fromVal: "7.0 L/100km", toVal: "64.94 km/gal", extra: "Modern Compact Sedan" },
      { fromVal: "6.0 L/100km", toVal: "75.77 km/gal", extra: "Efficient Subcompact" },
      { fromVal: "5.0 L/100km", toVal: "90.92 km/gal", extra: "Mild Hybrid Car" },
      { fromVal: "4.5 L/100km", toVal: "101.02 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "4.0 L/100km", toVal: "113.65 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "3.0 L/100km", toVal: "151.54 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100km to km/gal (Imp)",
    items: [
      {
        title: "International Vehicle Specification Benchmarking",
        text: "Translating European WLTP fuel consumption figures into metric distance metrics per Imperial gallon for automotive analysis."
      },
      {
        title: "UK & Commonwealth Fleet Fuel Management",
        text: "Normalizing European vehicle consumption figures into Imperial-gallon based fueling accounting software."
      },
      {
        title: "Trip Distance Planning",
        text: "Determining how many kilometers a vehicle can travel per Imperial gallon based on dashboard L/100km consumption figures."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting L/100km to km/gal (Imp) requires dividing 454.609 by L/100km.",
      "Confusing Imperial gallons with US gallons: US gallon conversions use 378.541, not 454.609.",
      "Assuming a higher L/100km rating indicates superior efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100km to km/gal (Imp)?",
      answer: "Divide 454.609 by the L/100km value. For example, 454.609 / 6.0 = 75.77 km/gal (Imp)."
    },
    {
      question: "What is the formula to convert L/100km to km/gal (Imp)?",
      answer: "The formula is: km/gal (Imp) = 454.609 / (L/100km)."
    },
    {
      question: "How many km/gal (Imp) is 6.0 L/100km?",
      answer: "6.0 L/100km equals approximately 75.77 km/gal (Imp) (454.609 / 6.0 = 75.7682)."
    },
    {
      question: "How many km/gal (Imp) is 5.0 L/100km?",
      answer: "5.0 L/100km equals approximately 90.92 km/gal (Imp) (454.609 / 5.0 = 90.9218)."
    },
    {
      question: "How many km/gal (Imp) is 8.0 L/100km?",
      answer: "8.0 L/100km equals approximately 56.83 km/gal (Imp) (454.609 / 8.0 = 56.8261)."
    },
    {
      question: "Why is the numerator 454.609?",
      answer: "Because 100 km multiplied by 4.54609 liters per Imperial gallon equals 454.609."
    },
    {
      question: "How many km/gal (Imp) is 4.0 L/100km?",
      answer: "4.0 L/100km equals approximately 113.65 km/gal (Imp) (454.609 / 4.0 = 113.6523)."
    },
    {
      question: "How do I convert km/gal (Imp) back to L/100km?",
      answer: "Divide 454.609 by the km/gal (Imp) value."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (Imperial) to Liters per 100km", from: "km-per-gallon-imperial", to: "liters-per-100km" },
    { label: "Liters per 100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "Liters per 100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "Liters per 100km to km/L", from: "liters-per-100km", to: "km-per-liter" }
  ]
};
