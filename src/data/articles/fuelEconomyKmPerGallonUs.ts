import { CustomArticleData } from "./types";

// 1. Kilometers per Gallon (US) to MPG (US)
export const kmPerGallonUsToMpgUs: CustomArticleData = {
  fromUnitId: "km-per-gallon-us",
  toUnitId: "mpg-us",
  seoTitle: "Kilometers per Gallon (US) to MPG (US) Converter (km/gal to MPG)",
  metaDescription: "Convert Kilometers per US Gallon to US Miles per Gallon (km/gal to MPG US) instantly. 0.621371 formula, step-by-step calculations, tables, and FAQs.",
  h1: "Kilometers per Gallon (US) to MPG (US) Converter",
  introduction: [
    "Kilometers per Gallon (US) and US Miles per Gallon (MPG US) both measure distance traveled per standard US liquid gallon (3.785411784 liters). While US MPG uses international statute miles, Kilometers per Gallon expresses travel in metric kilometers.",
    "Because both units use the exact same liquid gallon volume baseline, the conversion factor between them is strictly the relationship between kilometers and statute miles. Since 1 international statute mile is defined as exactly 1.609344 kilometers, dividing the km/gal (US) figure by 1.609344 (or multiplying by 0.621371192) yields exact US MPG.",
    "This reference explains the mathematical conversion, provides step-by-step vehicle calculation examples, offers comprehensive lookup tables, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (US) [km/gal (US)] to US Miles per Gallon [MPG (US)], divide by 1.609344 (or multiply by 0.621371). For example, 50 km/gal (US) equals approximately 31.07 US MPG.",
    formulaDisplay: "MPG (US) = km/gal (US) / 1.609344 = km/gal (US) × 0.621371192",
    subtext: "1 Kilometer per US Gallon equals approximately 0.621371 US Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) measures distance in metric kilometers per US liquid gallon (3.785411784 liters) of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding US MPG",
    text: "US Miles per Gallon (MPG) is the official automotive fuel economy rating established by the United States EPA, measuring statute miles per US liquid gallon."
  },
  relationship: "Because both units share the same 1 US liquid gallon volume base, 1 kilometer per gallon translates to 1 / 1.609344 miles per gallon. Therefore, MPG (US) = km/gal (US) / 1.609344.",
  relationshipTitle: "km/gal (US) to US MPG Benchmarks",
  relationshipItems: [
    { label: "25 km/gal (US)", value: "15.53 MPG (US) — Heavy-duty pickup / Full-size SUV" },
    { label: "40 km/gal (US)", value: "24.85 MPG (US) — Midsize crossover / SUV" },
    { label: "50 km/gal (US)", value: "31.07 MPG (US) — Compact family sedan" },
    { label: "70 km/gal (US)", value: "43.50 MPG (US) — Efficient hybrid vehicle" },
    { label: "90 km/gal (US)", value: "55.92 MPG (US) — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide Kilometers per Gallon (US) by 1.609344 or multiply by 0.621371192 to obtain US Miles per Gallon.",
    math: "MPG (US) = km/gal (US) × 0.621371192",
    subtext: "To convert back from US MPG to km/gal (US), multiply by 1.609344."
  },
  formulaTitle: "km/gal (US) to US MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate US MPG from km/gal (US) in your head, multiply by 0.62 (or divide by 1.6). For example, 50 km/gal × 0.62 ≈ 31 US MPG."
  },
  expertNote: {
    title: "Direct Proportionality",
    text: "Because both metrics represent distance over fuel volume, higher numbers indicate greater efficiency in both systems."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Crossover",
        subtitle: "Convert 45 km/gal (US) into US Miles per Gallon.",
        steps: [
          "Identify the input fuel rating: 45 km/gal (US).",
          "Apply formula: MPG (US) = 45 / 1.609344.",
          "Calculate: 45 × 0.621371192 = 27.9617.",
          "Result: 45 km/gal (US) equals approximately 27.96 US MPG."
        ]
      },
      {
        title: "Example 2: Hybrid Sedan",
        subtitle: "Convert 75 km/gal (US) into US MPG.",
        steps: [
          "Identify the rating: 75 km/gal (US).",
          "Multiply by 0.621371: 75 × 0.621371192 = 46.6028.",
          "Result: 75 km/gal (US) equals 46.60 US MPG."
        ]
      },
      {
        title: "Example 3: Commuter Car",
        subtitle: "Convert 55 km/gal (US) into US MPG.",
        steps: [
          "Identify the value: 55 km/gal (US).",
          "Calculate: 55 / 1.609344 = 34.1754.",
          "Result: 55 km/gal (US) equals 34.18 US MPG."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (US) to US MPG Conversion Table",
    headers: ["km/gal (US)", "MPG (US)", "Vehicle Class Performance"],
    rows: [
      { fromVal: "20 km/gal", toVal: "12.43 MPG", extra: "Commercial Freight Vehicle" },
      { fromVal: "30 km/gal", toVal: "18.64 MPG", extra: "Full-Size V8 SUV" },
      { fromVal: "40 km/gal", toVal: "24.85 MPG", extra: "Midsize Crossover" },
      { fromVal: "50 km/gal", toVal: "31.07 MPG", extra: "Compact Family Sedan" },
      { fromVal: "60 km/gal", toVal: "37.28 MPG", extra: "Efficient Subcompact" },
      { fromVal: "70 km/gal", toVal: "43.50 MPG", extra: "Mild Hybrid Vehicle" },
      { fromVal: "80 km/gal", toVal: "49.71 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "90 km/gal", toVal: "55.92 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "100 km/gal", toVal: "62.14 MPG", extra: "Plug-in Hybrid Vehicle" },
      { fromVal: "110 km/gal", toVal: "68.35 MPG", extra: "Eco Prototype Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (US) to US MPG",
    items: [
      {
        title: "Cross-Border Telematics Standardization",
        text: "Automotive telemetry units collecting metric odometer readings in US-gallon fuel markets convert data directly to EPA MPG."
      },
      {
        title: "Fleet Fuel Audits",
        text: "Logistics companies operating across the US-Mexico border normalize metric route distances against US gallon fuel billing."
      },
      {
        title: "Automotive Dyno Calibration",
        text: "Emissions testing laboratories validating roller dynamometer distance in kilometers against fuel mass in US liquid gallons."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing US gallons with Imperial gallons: 1 US gallon is 3.785412 L, whereas 1 Imperial gallon is 4.54609 L.",
      "Multiplying instead of dividing: Converting km/gal (US) to US MPG requires dividing by 1.609344.",
      "Confusing km/gal with km/L: km/gal values are 3.785412 times larger than km/L values."
    ]
  },
  faqs: [
    {
      question: "How many US MPG is 1 km/gal (US)?",
      answer: "1 Kilometer per US Gallon equals approximately 0.621371 US Miles per Gallon (1 / 1.609344)."
    },
    {
      question: "What is the formula to convert km/gal (US) to US MPG?",
      answer: "The formula is: MPG (US) = km/gal (US) / 1.609344 = km/gal (US) × 0.621371192."
    },
    {
      question: "How many US MPG is 50 km/gal (US)?",
      answer: "50 km/gal (US) equals approximately 31.07 US MPG (50 / 1.609344 = 31.0686)."
    },
    {
      question: "How many US MPG is 60 km/gal (US)?",
      answer: "60 km/gal (US) equals approximately 37.28 US MPG (60 × 0.621371 = 37.2823)."
    },
    {
      question: "How do I convert 80 km/gal (US) to US MPG?",
      answer: "Multiply 80 by 0.621371 to get 49.71 US MPG."
    },
    {
      question: "Why is the factor 0.621371?",
      answer: "Because 1 international statute mile is defined as exactly 1.609344 kilometers, and 1 / 1.609344 = 0.621371192."
    },
    {
      question: "How do I convert US MPG back to km/gal (US)?",
      answer: "Multiply the US MPG value by 1.609344."
    },
    {
      question: "Is 48 km/gal (US) close to 30 US MPG?",
      answer: "Yes, 48 km/gal (US) equals 29.83 US MPG, which is very close to 30 MPG."
    }
  ],
  relatedList: [
    { label: "MPG (US) to Kilometers per Gallon (US)", from: "mpg-us", to: "km-per-gallon-us" },
    { label: "Kilometers per Gallon (US) to MPG (UK)", from: "km-per-gallon-us", to: "mpg-uk" },
    { label: "Kilometers per Gallon (US) to km/L", from: "km-per-gallon-us", to: "km-per-liter" },
    { label: "Kilometers per Gallon (US) to L/100km", from: "km-per-gallon-us", to: "liters-per-100km" }
  ]
};

// 2. MPG (US) to Kilometers per Gallon (US)
export const mpgUsToKmPerGallonUs: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "km-per-gallon-us",
  seoTitle: "MPG (US) to Kilometers per Gallon (US) Converter (MPG to km/gal)",
  metaDescription: "Convert US Miles per Gallon to Kilometers per US Gallon (MPG to km/gal US) instantly. 1.609344 multiplier, step-by-step math, charts, and FAQs.",
  h1: "MPG (US) to Kilometers per Gallon (US) Converter",
  introduction: [
    "US Miles per Gallon (MPG US) and Kilometers per Gallon (US) quantify vehicle fuel efficiency using the same US liquid gallon (3.785411784 liters) volume standard. While the US EPA rates vehicles in statute miles per gallon, international engineers and fleet managers often need distance expressed in metric kilometers.",
    "Because both units share the exact same fuel volume baseline, converting from US MPG to km/gal (US) involves a direct multiplication by 1.609344 (the exact number of kilometers in a statute mile).",
    "This guide provides the exact conversion formula, worked calculation examples for common vehicle classes, reference tables, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon [MPG (US)] to Kilometers per Gallon (US) [km/gal (US)], multiply the US MPG value by 1.609344. For example, 30 US MPG equals approximately 48.28 km/gal (US).",
    formulaDisplay: "km/gal (US) = MPG (US) × 1.609344",
    subtext: "1 US MPG equals exactly 1.609344 Kilometers per US Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding US MPG",
    text: "US Miles per Gallon (MPG) is the standard automotive fuel efficiency metric in the United States, denoting statute miles per US liquid gallon."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) expresses distance traveled in kilometers per US liquid gallon (3.785411784 liters) of fuel consumed."
  },
  relationship: "Since 1 statute mile equals exactly 1.609344 kilometers, traveling 1 mile on 1 US gallon is identical to traveling 1.609344 kilometers on that same gallon. Therefore, km/gal (US) = MPG (US) × 1.609344.",
  relationshipTitle: "US MPG to km/gal (US) Benchmark Ratings",
  relationshipItems: [
    { label: "20 MPG (US)", value: "32.19 km/gal (US) — Midsize SUV / Crossover" },
    { label: "30 MPG (US)", value: "48.28 km/gal (US) — Compact family sedan" },
    { label: "40 MPG (US)", value: "64.37 km/gal (US) — Subcompact commuter car" },
    { label: "50 MPG (US)", value: "80.47 km/gal (US) — Full hybrid passenger vehicle" },
    { label: "60 MPG (US)", value: "96.56 km/gal (US) — Ultra-efficient plug-in hybrid" }
  ],
  formula: {
    text: "Multiply the US Miles per Gallon by 1.609344 to determine Kilometers per Gallon (US).",
    math: "km/gal (US) = MPG (US) × 1.609344",
    subtext: "To convert back from km/gal (US) to US MPG, divide by 1.609344 (or multiply by 0.621371)."
  },
  formulaTitle: "US MPG to km/gal (US) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (US) from US MPG in your head, multiply the MPG number by 1.6. For example, 30 MPG × 1.6 = 48 km/gal."
  },
  expertNote: {
    title: "Direct Scaling",
    text: "Because both metrics represent distance over fuel volume, higher ratings indicate better fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Highway Sedan",
        subtitle: "Convert 32 MPG (US) to Kilometers per Gallon (US).",
        steps: [
          "Identify the US MPG rating: 32 MPG.",
          "Apply formula: km/gal (US) = 32 × 1.609344.",
          "Calculate: 32 × 1.609344 = 51.499008.",
          "Result: 32 US MPG equals approximately 51.50 km/gal (US)."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 26 MPG (US) into km/gal (US).",
        steps: [
          "Identify the rating: 26 MPG.",
          "Multiply by 1.609344: 26 × 1.609344 = 41.842944.",
          "Result: 26 US MPG equals 41.84 km/gal (US)."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 54 MPG (US) into km/gal (US).",
        steps: [
          "Identify the value: 54 MPG.",
          "Calculate: 54 × 1.609344 = 86.904576.",
          "Result: 54 US MPG equals 86.90 km/gal (US)."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Kilometers per Gallon (US) Conversion Table",
    headers: ["MPG (US)", "km/gal (US)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "15 MPG", toVal: "24.14 km/gal", extra: "Full-Size V8 Truck" },
      { fromVal: "20 MPG", toVal: "32.19 km/gal", extra: "Midsize SUV" },
      { fromVal: "25 MPG", toVal: "40.23 km/gal", extra: "Compact Crossover" },
      { fromVal: "30 MPG", toVal: "48.28 km/gal", extra: "Family Sedan" },
      { fromVal: "35 MPG", toVal: "56.33 km/gal", extra: "Efficient Compact Car" },
      { fromVal: "40 MPG", toVal: "64.37 km/gal", extra: "Subcompact Commuter" },
      { fromVal: "45 MPG", toVal: "72.42 km/gal", extra: "Mild Hybrid Vehicle" },
      { fromVal: "50 MPG", toVal: "80.47 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "55 MPG", toVal: "88.51 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "60 MPG", toVal: "96.56 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of US MPG to km/gal (US)",
    items: [
      {
        title: "International Vehicle Logistics",
        text: "Car transport fleets operating in US gallon markets convert EPA window ratings for drivers who navigate using kilometer road signs."
      },
      {
        title: "Automotive Engineering Analysis",
        text: "Engineers comparing metric dynamometer rolling road test results against US federal fuel economy compliance standards."
      },
      {
        title: "Cross-Border Navigation Displays",
        text: "In-car software converting fuel efficiency statistics between imperial and metric trip computer settings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1.609344 instead of multiplying when converting US MPG to km/gal (US).",
      "Using the UK Imperial gallon volume (4.54609 L) instead of the US gallon (3.785412 L).",
      "Confusing km/gal with km/L."
    ]
  },
  faqs: [
    {
      question: "How many km/gal (US) is 1 US MPG?",
      answer: "1 US MPG equals exactly 1.609344 Kilometers per US Gallon."
    },
    {
      question: "What is the formula to convert US MPG to km/gal (US)?",
      answer: "The formula is: km/gal (US) = MPG (US) × 1.609344."
    },
    {
      question: "How many km/gal (US) is 30 US MPG?",
      answer: "30 US MPG equals exactly 48.28032 km/gal (US) (approximately 48.28 km/gal)."
    },
    {
      question: "How many km/gal (US) is 40 US MPG?",
      answer: "40 US MPG equals exactly 64.37376 km/gal (US) (approximately 64.37 km/gal)."
    },
    {
      question: "How do I convert 50 US MPG to km/gal (US)?",
      answer: "Multiply 50 by 1.609344 to get 80.4672 km/gal (US)."
    },
    {
      question: "Why is the factor 1.609344?",
      answer: "Because 1 international statute mile is defined as exactly 1.609344 kilometers."
    },
    {
      question: "How do I convert km/gal (US) back to US MPG?",
      answer: "Divide by 1.609344, or multiply by 0.621371."
    },
    {
      question: "How many km/gal (US) is 25 US MPG?",
      answer: "25 US MPG equals exactly 40.2336 km/gal (US)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (US) to MPG (US)", from: "km-per-gallon-us", to: "mpg-us" },
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" }
  ]
};

// 3. Kilometers per Gallon (US) to MPG (UK)
export const kmPerGallonUsToMpgUk: CustomArticleData = {
  fromUnitId: "km-per-gallon-us",
  toUnitId: "mpg-uk",
  seoTitle: "Kilometers per Gallon (US) to MPG (UK) Converter (km/gal to Imperial MPG)",
  metaDescription: "Convert Kilometers per US Gallon to UK Imperial Miles per Gallon (km/gal US to MPG UK). Exact 0.746241 factor, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Gallon (US) to MPG (UK) Converter",
  introduction: [
    "Kilometers per Gallon (US) and Imperial Miles per Gallon (UK MPG) differ in both distance and volume units. Kilometers per Gallon (US) uses metric kilometers with the US liquid gallon (3.785411784 liters), whereas UK MPG uses international statute miles with the British Imperial gallon (4.54609 liters).",
    "Converting from km/gal (US) to UK MPG involves converting kilometers to statute miles (dividing by 1.609344) and scaling from US gallons to Imperial gallons (multiplying by 4.54609 / 3.785411784). Combining these operations yields the exact multiplier 0.746241416.",
    "This reference explains the mathematical derivation, provides worked vehicle calculation examples, offers structured conversion tables, and answers common automotive fuel efficiency questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (US) [km/gal (US)] to UK Imperial Miles per Gallon [MPG (UK)], multiply the km/gal (US) value by 0.746241 (or divide by 1.340049). For example, 50 km/gal (US) equals approximately 37.31 UK MPG.",
    formulaDisplay: "MPG (UK) = km/gal (US) × (4.54609 / 3.785411784) / 1.609344 = km/gal (US) × 0.746241416",
    subtext: "1 Kilometer per US Gallon equals approximately 0.746241 UK Imperial Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) measures metric kilometers traveled per US liquid gallon (3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding UK Imperial MPG",
    text: "Imperial Miles per Gallon (UK MPG) is the official British fuel economy metric, measuring statute miles per Imperial gallon (4.54609 liters)."
  },
  relationship: "Converting km to miles multiplies by 1/1.609344, while converting per US gallon to per Imperial gallon multiplies by (4.54609 / 3.785411784 = 1.20095). Therefore, MPG (UK) = km/gal (US) × 1.20095 / 1.609344 = km/gal (US) × 0.746241416.",
  relationshipTitle: "km/gal (US) to UK MPG Benchmarks",
  relationshipItems: [
    { label: "30 km/gal (US)", value: "22.39 MPG (UK) — Full-size SUV / Heavy commercial vehicle" },
    { label: "45 km/gal (US)", value: "33.58 MPG (UK) — Midsize family saloon" },
    { label: "60 km/gal (US)", value: "44.77 MPG (UK) — Compact hatchback" },
    { label: "75 km/gal (US)", value: "55.97 MPG (UK) — Mild hybrid vehicle" },
    { label: "90 km/gal (US)", value: "67.16 MPG (UK) — Full hybrid passenger car" }
  ],
  formula: {
    text: "Multiply Kilometers per Gallon (US) by 0.746241416 to obtain UK Imperial Miles per Gallon.",
    math: "MPG (UK) = km/gal (US) × 0.746241416",
    subtext: "To convert back from UK MPG to km/gal (US), multiply by 1.340048866."
  },
  formulaTitle: "km/gal (US) to UK MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate UK MPG from km/gal (US) in your head, multiply by 0.75 (take three-quarters). For example, 60 km/gal × 0.75 = 45 UK MPG."
  },
  expertNote: {
    title: "Dual Transformation",
    text: "This conversion accounts for both the km-to-mile distance conversion and the 20.09% volume difference between US and UK gallons."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Hatchback",
        subtitle: "Convert 50 km/gal (US) to UK Imperial MPG.",
        steps: [
          "Identify the input fuel rating: 50 km/gal (US).",
          "Apply conversion formula: MPG (UK) = 50 × 0.746241416.",
          "Calculate: 50 × 0.746241416 = 37.312071.",
          "Result: 50 km/gal (US) equals approximately 37.31 UK MPG."
        ]
      },
      {
        title: "Example 2: Compact Sedan",
        subtitle: "Convert 65 km/gal (US) into UK MPG.",
        steps: [
          "Identify the rating: 65 km/gal (US).",
          "Multiply by 0.746241: 65 × 0.746241416 = 48.505692.",
          "Result: 65 km/gal (US) equals 48.51 UK MPG."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 85 km/gal (US) into UK MPG.",
        steps: [
          "Identify the value: 85 km/gal (US).",
          "Calculate: 85 × 0.746241416 = 63.430520.",
          "Result: 85 km/gal (US) equals 63.43 UK MPG."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (US) to UK MPG Conversion Table",
    headers: ["km/gal (US)", "MPG (UK)", "Vehicle Class Context"],
    rows: [
      { fromVal: "20 km/gal", toVal: "14.92 MPG", extra: "Commercial Freight Truck" },
      { fromVal: "30 km/gal", toVal: "22.39 MPG", extra: "Full-Size V8 SUV" },
      { fromVal: "40 km/gal", toVal: "29.85 MPG", extra: "Midsize Crossover" },
      { fromVal: "50 km/gal", toVal: "37.31 MPG", extra: "Compact Family Sedan" },
      { fromVal: "60 km/gal", toVal: "44.77 MPG", extra: "Efficient Hatchback" },
      { fromVal: "70 km/gal", toVal: "52.24 MPG", extra: "Mild Hybrid Saloon" },
      { fromVal: "80 km/gal", toVal: "59.70 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "90 km/gal", toVal: "67.16 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "100 km/gal", toVal: "74.62 MPG", extra: "Plug-in Hybrid Vehicle" },
      { fromVal: "110 km/gal", toVal: "82.09 MPG", extra: "Eco Prototype Car" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (US) to UK MPG",
    items: [
      {
        title: "Automotive Review Translations",
        text: "Translating international test dynamometer data recorded in km per US gallon into UK consumer magazine ratings."
      },
      {
        title: "Fleet Performance Benchmarking",
        text: "Multinational transport companies comparing US-gallon telemetry against UK Imperial fleet KPIs."
      },
      {
        title: "Cross-Market Vehicle Imports",
        text: "Evaluating fuel economy when importing vehicles between US and UK specification markets."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming US and UK gallons are equal in volume: 1 Imperial gallon is ~20.09% larger than a US gallon.",
      "Inverting the multiplier: Converting km/gal (US) to UK MPG requires multiplying by 0.746241.",
      "Confusing km/gal (US) with km/gal (Imperial)."
    ]
  },
  faqs: [
    {
      question: "How many UK MPG is 1 km/gal (US)?",
      answer: "1 Kilometer per US Gallon equals approximately 0.746241 UK Imperial Miles per Gallon."
    },
    {
      question: "What is the formula to convert km/gal (US) to UK MPG?",
      answer: "The formula is: MPG (UK) = km/gal (US) × 0.746241416."
    },
    {
      question: "How many UK MPG is 50 km/gal (US)?",
      answer: "50 km/gal (US) equals approximately 37.31 UK MPG (50 × 0.746241 = 37.3121)."
    },
    {
      question: "How many UK MPG is 60 km/gal (US)?",
      answer: "60 km/gal (US) equals approximately 44.77 UK MPG (60 × 0.746241 = 44.7745)."
    },
    {
      question: "How do I convert 80 km/gal (US) to UK MPG?",
      answer: "Multiply 80 by 0.746241 to get 59.70 UK MPG."
    },
    {
      question: "Why is the factor 0.746241?",
      answer: "It combines the distance conversion (1/1.609344) with the gallon volume ratio (4.54609 / 3.785411784 = 1.20095)."
    },
    {
      question: "How do I convert UK MPG back to km/gal (US)?",
      answer: "Multiply the UK MPG value by 1.340049 (or divide by 0.746241)."
    },
    {
      question: "Is 40 km/gal (US) equal to nearly 30 UK MPG?",
      answer: "Yes, 40 km/gal (US) equals 29.85 UK MPG."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to Kilometers per Gallon (US)", from: "mpg-uk", to: "km-per-gallon-us" },
    { label: "Kilometers per Gallon (US) to MPG (US)", from: "km-per-gallon-us", to: "mpg-us" },
    { label: "Kilometers per Gallon (US) to km/L", from: "km-per-gallon-us", to: "km-per-liter" },
    { label: "Kilometers per Gallon (US) to L/100km", from: "km-per-gallon-us", to: "liters-per-100km" }
  ]
};

// 4. MPG (UK) to Kilometers per Gallon (US)
export const mpgUkToKmPerGallonUs: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "km-per-gallon-us",
  seoTitle: "MPG (UK) to Kilometers per Gallon (US) Converter (Imperial MPG to km/gal)",
  metaDescription: "Convert UK Imperial Miles per Gallon to Kilometers per US Gallon (MPG UK to km/gal US). Exact 1.340049 multiplier, step-by-step math, tables, and FAQs.",
  h1: "MPG (UK) to Kilometers per Gallon (US) Converter",
  introduction: [
    "Imperial Miles per Gallon (UK MPG) and Kilometers per Gallon (US) are automotive efficiency units combining different distance and liquid volume definitions. UK MPG uses statute miles per British Imperial gallon (4.54609 liters), while Kilometers per Gallon (US) uses metric kilometers per US liquid gallon (3.785411784 liters).",
    "To convert from UK MPG to km/gal (US), multiply by 1.609344 (miles to kilometers) and scale by the volume ratio of US gallons to Imperial gallons (3.785411784 / 4.54609 = 0.832674184). Combining these factors produces the exact conversion multiplier 1.340048866.",
    "This guide provides the complete conversion derivation, worked calculation examples, structured lookup tables, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert UK Imperial Miles per Gallon [MPG (UK)] to Kilometers per Gallon (US) [km/gal (US)], multiply the UK MPG value by 1.340049. For example, 40 UK MPG equals approximately 53.60 km/gal (US).",
    formulaDisplay: "km/gal (US) = MPG (UK) × 1.609344 × (3.785411784 / 4.54609) = MPG (UK) × 1.340048866",
    subtext: "1 UK Imperial MPG equals approximately 1.340049 Kilometers per US Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding UK Imperial MPG",
    text: "Imperial Miles per Gallon (UK MPG) is the official British vehicle fuel economy metric, measuring statute miles per Imperial gallon (4.54609 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) measures metric kilometers traveled per US liquid gallon (3.785411784 liters)."
  },
  relationship: "Because 1 statute mile is 1.609344 km and 1 Imperial gallon contains 1.20095 US gallons, traveling 1 mile on 1 Imperial gallon equates to 1.609344 / 1.20095 = 1.340049 km per US gallon. Therefore, km/gal (US) = MPG (UK) × 1.340048866.",
  relationshipTitle: "UK MPG to km/gal (US) Benchmarks",
  relationshipItems: [
    { label: "30 MPG (UK)", value: "40.20 km/gal (US) — Large SUV / High-performance saloon" },
    { label: "40 MPG (UK)", value: "53.60 km/gal (US) — Family hatchback / Crossover" },
    { label: "50 MPG (UK)", value: "67.00 km/gal (US) — Efficient turbo diesel / petrol" },
    { label: "60 MPG (UK)", value: "80.40 km/gal (US) — Full hybrid passenger car" },
    { label: "70 MPG (UK)", value: "93.80 km/gal (US) — Plug-in hybrid vehicle" }
  ],
  formula: {
    text: "Multiply UK Miles per Gallon by 1.340048866 to determine Kilometers per Gallon (US).",
    math: "km/gal (US) = MPG (UK) × 1.340048866",
    subtext: "To convert back from km/gal (US) to UK MPG, multiply by 0.746241416."
  },
  formulaTitle: "UK MPG to km/gal (US) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (US) from UK MPG in your head, multiply by 1.34 (add one-third). For example, 45 UK MPG × 1.34 ≈ 60.3 km/gal (US)."
  },
  expertNote: {
    title: "Proportional Relationship",
    text: "Both metrics represent distance over fuel volume, so higher values indicate superior fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Saloon",
        subtitle: "Convert 42 MPG (UK) to Kilometers per Gallon (US).",
        steps: [
          "Identify the UK MPG rating: 42 MPG.",
          "Apply formula: km/gal (US) = 42 × 1.340048866.",
          "Calculate: 42 × 1.340048866 = 56.282052.",
          "Result: 42 UK MPG equals approximately 56.28 km/gal (US)."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 36 MPG (UK) into km/gal (US).",
        steps: [
          "Identify the rating: 36 MPG.",
          "Multiply by 1.340049: 36 × 1.340048866 = 48.241759.",
          "Result: 36 UK MPG equals 48.24 km/gal (US)."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 58 MPG (UK) into km/gal (US).",
        steps: [
          "Identify the value: 58 MPG.",
          "Calculate: 58 × 1.340048866 = 77.722834.",
          "Result: 58 UK MPG equals 77.72 km/gal (US)."
        ]
      }
    ]
  },
  table: {
    title: "UK MPG to Kilometers per Gallon (US) Conversion Table",
    headers: ["MPG (UK)", "km/gal (US)", "Typical Vehicle Category"],
    rows: [
      { fromVal: "20 MPG", toVal: "26.80 km/gal", extra: "High-Performance V8" },
      { fromVal: "30 MPG", toVal: "40.20 km/gal", extra: "Full-Size SUV" },
      { fromVal: "35 MPG", toVal: "46.90 km/gal", extra: "Midsize Crossover" },
      { fromVal: "40 MPG", toVal: "53.60 km/gal", extra: "Family Saloon" },
      { fromVal: "45 MPG", toVal: "60.30 km/gal", extra: "Compact Hatchback" },
      { fromVal: "50 MPG", toVal: "67.00 km/gal", extra: "Efficient Turbo Diesel" },
      { fromVal: "55 MPG", toVal: "73.70 km/gal", extra: "Mild Hybrid Hatchback" },
      { fromVal: "60 MPG", toVal: "80.40 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "65 MPG", toVal: "87.10 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "70 MPG", toVal: "93.80 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of UK MPG to km/gal (US)",
    items: [
      {
        title: "Cross-Market Vehicle Spec Analysis",
        text: "Translating official UK vehicle brochure specifications into metric kilometer distances per US gallon."
      },
      {
        title: "Automotive Engineering Research",
        text: "Comparing British chassis dynamometer emissions cycles against US liquid volume standards."
      },
      {
        title: "Fleet Telematics Integration",
        text: "Normalizing vehicle fleet telemetry between UK subsidiaries and US corporate fleet management systems."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using the standard 1.609344 multiplier without adjusting for the gallon volume difference.",
      "Dividing instead of multiplying when converting UK MPG to km/gal (US).",
      "Confusing km/gal (US) with km/gal (Imperial)."
    ]
  },
  faqs: [
    {
      question: "How many km/gal (US) is 1 UK MPG?",
      answer: "1 UK Imperial MPG equals approximately 1.340049 Kilometers per US Gallon."
    },
    {
      question: "What is the formula to convert UK MPG to km/gal (US)?",
      answer: "The formula is: km/gal (US) = MPG (UK) × 1.340048866."
    },
    {
      question: "How many km/gal (US) is 40 UK MPG?",
      answer: "40 UK MPG equals approximately 53.60 km/gal (US) (40 × 1.340049 = 53.6020)."
    },
    {
      question: "How many km/gal (US) is 50 UK MPG?",
      answer: "50 UK MPG equals approximately 67.00 km/gal (US) (50 × 1.340049 = 67.0024)."
    },
    {
      question: "How do I convert 60 UK MPG to km/gal (US)?",
      answer: "Multiply 60 by 1.340049 to get 80.40 km/gal (US)."
    },
    {
      question: "Why is the conversion factor 1.340049?",
      answer: "It combines the miles-to-kilometers factor (1.609344) with the US-to-UK gallon volume ratio (3.785411784 / 4.54609 = 0.832674)."
    },
    {
      question: "How do I convert km/gal (US) back to UK MPG?",
      answer: "Multiply by 0.746241 (or divide by 1.340049)."
    },
    {
      question: "How many km/gal (US) is 35 UK MPG?",
      answer: "35 UK MPG equals approximately 46.90 km/gal (US) (35 × 1.340049 = 46.9017)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (US) to MPG (UK)", from: "km-per-gallon-us", to: "mpg-uk" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" }
  ]
};

// 5. Kilometers per Gallon (US) to Kilometers per Liter
export const kmPerGallonUsToKmPerLiter: CustomArticleData = {
  fromUnitId: "km-per-gallon-us",
  toUnitId: "km-per-liter",
  seoTitle: "Kilometers per Gallon (US) to Kilometers per Liter Converter (km/gal to km/L)",
  metaDescription: "Convert Kilometers per US Gallon to Kilometers per Liter (km/gal US to km/L) instantly. Exact 0.264172 factor, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Gallon (US) to Kilometers per Liter Converter",
  introduction: [
    "Kilometers per Gallon (US) and Kilometers per Liter (km/L) are metric-distance fuel efficiency metrics that share the kilometer as their distance unit. The only distinction between them is the unit of liquid volume: the US liquid gallon versus the metric liter.",
    "Because 1 standard US liquid gallon is legally defined as exactly 3.785411784 liters, dividing any km/gal (US) figure by 3.785411784 (or multiplying by 0.264172052) converts it directly into Kilometers per Liter.",
    "This guide covers the exact mathematical relationship, step-by-step conversion examples for modern passenger vehicles, lookup tables, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (US) [km/gal (US)] to Kilometers per Liter [km/L], divide by 3.785412 (or multiply by 0.264172). For example, 50 km/gal (US) equals approximately 13.21 km/L.",
    formulaDisplay: "km/L = km/gal (US) / 3.785411784 = km/gal (US) × 0.264172052",
    subtext: "1 Kilometer per US Gallon equals approximately 0.264172 Kilometers per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) measures distance in kilometers per US liquid gallon (3.785411784 liters) of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is the primary metric fuel economy standard in Japan, India, Brazil, and Latin America, expressing kilometers traveled per liter of fuel."
  },
  relationship: "Since 1 US liquid gallon contains exactly 3.785411784 liters, traveling K kilometers on 1 gallon equals traveling K / 3.785411784 kilometers per liter. Therefore, km/L = km/gal (US) / 3.785411784.",
  relationshipTitle: "km/gal (US) to km/L Performance Ratings",
  relationshipItems: [
    { label: "30 km/gal (US)", value: "7.93 km/L — Full-size SUV / Heavy commercial vehicle" },
    { label: "45 km/gal (US)", value: "11.89 km/L — Midsize crossover / sedan" },
    { label: "60 km/gal (US)", value: "15.85 km/L — Compact commuter car" },
    { label: "75 km/gal (US)", value: "19.81 km/L — Modern hybrid vehicle" },
    { label: "90 km/gal (US)", value: "23.78 km/L — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide Kilometers per Gallon (US) by 3.785411784 or multiply by 0.264172052 to obtain Kilometers per Liter.",
    math: "km/L = km/gal (US) × 0.264172052",
    subtext: "To convert back from km/L to km/gal (US), multiply by 3.785411784."
  },
  formulaTitle: "km/gal (US) to km/L Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/L from km/gal (US) in your head, divide by 3.8 (or multiply by 0.26). For example, 50 km/gal / 3.8 ≈ 13.2 km/L."
  },
  expertNote: {
    title: "Pure Volume Conversion",
    text: "Because both metrics use kilometers as the distance baseline, the conversion factor is purely the ratio of liters in a US liquid gallon."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Crossover",
        subtitle: "Convert 48 km/gal (US) to Kilometers per Liter.",
        steps: [
          "Identify the fuel rating: 48 km/gal (US).",
          "Apply formula: km/L = 48 / 3.785411784.",
          "Calculate: 48 × 0.264172052 = 12.680259.",
          "Result: 48 km/gal (US) equals approximately 12.68 km/L."
        ]
      },
      {
        title: "Example 2: Family Sedan",
        subtitle: "Convert 55 km/gal (US) into km/L.",
        steps: [
          "Identify the rating: 55 km/gal (US).",
          "Multiply by 0.264172: 55 × 0.264172052 = 14.529463.",
          "Result: 55 km/gal (US) equals 14.53 km/L."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 80 km/gal (US) into km/L.",
        steps: [
          "Identify the value: 80 km/gal (US).",
          "Calculate: 80 / 3.785411784 = 21.133764.",
          "Result: 80 km/gal (US) equals 21.13 km/L."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (US) to km/L Conversion Table",
    headers: ["km/gal (US)", "Kilometers per Liter (km/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "20 km/gal", toVal: "5.28 km/L", extra: "Commercial Freight Truck" },
      { fromVal: "30 km/gal", toVal: "7.93 km/L", extra: "Full-Size V8 SUV" },
      { fromVal: "40 km/gal", toVal: "10.57 km/L", extra: "Midsize Crossover" },
      { fromVal: "50 km/gal", toVal: "13.21 km/L", extra: "Compact Family Sedan" },
      { fromVal: "60 km/gal", toVal: "15.85 km/L", extra: "Subcompact Car" },
      { fromVal: "70 km/gal", toVal: "18.49 km/L", extra: "Mild Hybrid Saloon" },
      { fromVal: "80 km/gal", toVal: "21.13 km/L", extra: "Full Hybrid Sedan" },
      { fromVal: "90 km/gal", toVal: "23.78 km/L", extra: "High-Efficiency Hybrid" },
      { fromVal: "100 km/gal", toVal: "26.42 km/L", extra: "Plug-in Hybrid Vehicle" },
      { fromVal: "110 km/gal", toVal: "29.06 km/L", extra: "Eco Prototype Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (US) to km/L",
    items: [
      {
        title: "International Fuel Log Reconciliation",
        text: "Drivers logging fuel purchases in liters against vehicle trip computers configured in US gallons convert seamlessly to km/L."
      },
      {
        title: "Automotive Powertrain Benchmarking",
        text: "Engineers comparing fuel flow meters calibrated in liters per second against dynamometer tests measuring distance per US gallon."
      },
      {
        title: "Fleet Telematics Standardization",
        text: "Converting Latin American and Asian fleet fuel consumption records into standardized global metrics."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting km/gal (US) to km/L requires dividing by 3.785412.",
      "Using the UK Imperial gallon volume (4.54609 L) instead of the US gallon (3.785412 L).",
      "Confusing km/L with L/100km."
    ]
  },
  faqs: [
    {
      question: "How many km/L is 1 km/gal (US)?",
      answer: "1 Kilometer per US Gallon equals approximately 0.264172 Kilometers per Liter (1 / 3.785411784)."
    },
    {
      question: "What is the formula to convert km/gal (US) to km/L?",
      answer: "The formula is: km/L = km/gal (US) / 3.785411784 = km/gal (US) × 0.264172052."
    },
    {
      question: "How many km/L is 50 km/gal (US)?",
      answer: "50 km/gal (US) equals approximately 13.21 km/L (50 / 3.785412 = 13.2086)."
    },
    {
      question: "How many km/L is 60 km/gal (US)?",
      answer: "60 km/gal (US) equals approximately 15.85 km/L (60 / 3.785412 = 15.8503)."
    },
    {
      question: "How do I convert 75 km/gal (US) to km/L?",
      answer: "Multiply 75 by 0.264172 to get 19.81 km/L."
    },
    {
      question: "Why is the factor 0.264172?",
      answer: "Because 0.264172052 is the reciprocal of 3.785411784, which is the exact number of liters in a US liquid gallon."
    },
    {
      question: "How do I convert km/L back to km/gal (US)?",
      answer: "Multiply the km/L value by 3.785411784."
    },
    {
      question: "How many km/L is 40 km/gal (US)?",
      answer: "40 km/gal (US) equals approximately 10.57 km/L (40 × 0.264172 = 10.5669)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Liter to Kilometers per Gallon (US)", from: "km-per-liter", to: "km-per-gallon-us" },
    { label: "Kilometers per Gallon (US) to MPG (US)", from: "km-per-gallon-us", to: "mpg-us" },
    { label: "Kilometers per Gallon (US) to MPG (UK)", from: "km-per-gallon-us", to: "mpg-uk" },
    { label: "Kilometers per Gallon (US) to L/100km", from: "km-per-gallon-us", to: "liters-per-100km" }
  ]
};

// 6. Kilometers per Liter to Kilometers per Gallon (US)
export const kmPerLiterToKmPerGallonUs: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "km-per-gallon-us",
  seoTitle: "Kilometers per Liter to Kilometers per Gallon (US) Converter (km/L to km/gal)",
  metaDescription: "Convert Kilometers per Liter to Kilometers per US Gallon (km/L to km/gal US) instantly. Exact 3.785412 multiplier, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Liter to Kilometers per Gallon (US) Converter",
  introduction: [
    "Kilometers per Liter (km/L) and Kilometers per Gallon (US) express vehicle fuel efficiency using metric kilometers over liquid fuel volume. While km/L uses the standard metric liter, Kilometers per Gallon (US) scales the measurement to the US liquid gallon (3.785411784 liters).",
    "Because 1 US liquid gallon contains exactly 3.785411784 liters, a vehicle that travels K kilometers on a single liter will travel exactly 3.785411784 × K kilometers on a full US gallon.",
    "This guide provides the exact conversion formula, worked examples for common passenger vehicles, lookup tables, and answers to frequently asked engineering questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter [km/L] to Kilometers per Gallon (US) [km/gal (US)], multiply the km/L value by 3.785412. For example, 15 km/L equals approximately 56.78 km/gal (US).",
    formulaDisplay: "km/gal (US) = km/L × 3.785411784",
    subtext: "1 Kilometer per Liter equals exactly 3.785411784 Kilometers per US Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is the standard automotive fuel efficiency metric in Japan, India, and Latin America, expressing kilometers traveled per liter of fuel."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) expresses distance traveled in metric kilometers per US liquid gallon (3.785411784 liters) of fuel consumed."
  },
  relationship: "Since 1 US liquid gallon equals 3.785411784 liters, traveling 1 kilometer on 1 liter means traveling 3.785411784 kilometers on 1 US gallon. Therefore, km/gal (US) = km/L × 3.785411784.",
  relationshipTitle: "km/L to km/gal (US) Benchmark Ratings",
  relationshipItems: [
    { label: "8 km/L", value: "30.28 km/gal (US) — Full-size SUV / Heavy commercial vehicle" },
    { label: "12 km/L", value: "45.42 km/gal (US) — Midsize family sedan / Crossover" },
    { label: "16 km/L", value: "60.57 km/gal (US) — Compact commuter car" },
    { label: "20 km/L", value: "75.71 km/gal (US) — Full hybrid passenger vehicle" },
    { label: "24 km/L", value: "90.85 km/gal (US) — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply Kilometers per Liter by 3.785411784 to determine Kilometers per Gallon (US).",
    math: "km/gal (US) = km/L × 3.785411784",
    subtext: "To convert back from km/gal (US) to km/L, divide by 3.785411784 (or multiply by 0.264172)."
  },
  formulaTitle: "km/L to km/gal (US) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (US) from km/L in your head, multiply by 3.8. For example, 10 km/L × 3.8 = 38 km/gal (US)."
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
        subtitle: "Convert a catalog rating of 17.5 km/L to Kilometers per Gallon (US).",
        steps: [
          "Identify the km/L rating: 17.5 km/L.",
          "Apply formula: km/gal (US) = 17.5 × 3.785411784.",
          "Calculate: 17.5 × 3.785411784 = 66.244706.",
          "Result: 17.5 km/L equals approximately 66.24 km/gal (US)."
        ]
      },
      {
        title: "Example 2: Compact Crossover",
        subtitle: "Convert 13.2 km/L into km/gal (US).",
        steps: [
          "Identify the rating: 13.2 km/L.",
          "Multiply by 3.785412: 13.2 × 3.785411784 = 49.967436.",
          "Result: 13.2 km/L equals 49.97 km/gal (US)."
        ]
      },
      {
        title: "Example 3: Hybrid Hatchback",
        subtitle: "Convert 22.0 km/L into km/gal (US).",
        steps: [
          "Identify the value: 22.0 km/L.",
          "Calculate: 22.0 × 3.785411784 = 83.279059.",
          "Result: 22.0 km/L equals 83.28 km/gal (US)."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to km/gal (US) Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "km/gal (US)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "6 km/L", toVal: "22.71 km/gal", extra: "Heavy Commercial Truck" },
      { fromVal: "8 km/L", toVal: "30.28 km/gal", extra: "Full-Size V8 SUV" },
      { fromVal: "10 km/L", toVal: "37.85 km/gal", extra: "Midsize Crossover" },
      { fromVal: "12 km/L", toVal: "45.42 km/gal", extra: "Family Sedan" },
      { fromVal: "14 km/L", toVal: "53.00 km/gal", extra: "Compact Hatchback" },
      { fromVal: "16 km/L", toVal: "60.57 km/gal", extra: "Subcompact Car" },
      { fromVal: "18 km/L", toVal: "68.14 km/gal", extra: "Mild Hybrid Car" },
      { fromVal: "20 km/L", toVal: "75.71 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "22 km/L", toVal: "83.28 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "25 km/L", toVal: "94.64 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/L to km/gal (US)",
    items: [
      {
        title: "Cross-Border Fleet Telematics",
        text: "Fleet operators tracking vehicles with metric odometers in US-gallon fuel distribution networks convert data to km/gal (US)."
      },
      {
        title: "Automotive Engine Benchmarking",
        text: "Engineers comparing metric flow sensor test cell outputs against US fuel tank capacity ratings."
      },
      {
        title: "Vehicle Import Analysis",
        text: "Comparing Japanese or Indian market domestic vehicle specifications against US gallon fuel volume benchmarks."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 3.785412 instead of multiplying when converting km/L to km/gal (US).",
      "Using the UK Imperial gallon factor (4.54609) instead of the US gallon factor (3.785412).",
      "Confusing km/gal (US) with MPG (US)."
    ]
  },
  faqs: [
    {
      question: "How many km/gal (US) is 1 km/L?",
      answer: "1 Kilometer per Liter equals exactly 3.785411784 Kilometers per US Gallon."
    },
    {
      question: "What is the formula to convert km/L to km/gal (US)?",
      answer: "The formula is: km/gal (US) = km/L × 3.785411784."
    },
    {
      question: "How many km/gal (US) is 10 km/L?",
      answer: "10 km/L equals exactly 37.854118 km/gal (US) (approximately 37.85 km/gal)."
    },
    {
      question: "How many km/gal (US) is 15 km/L?",
      answer: "15 km/L equals approximately 56.78 km/gal (US) (15 × 3.785412 = 56.7812)."
    },
    {
      question: "How do I convert 20 km/L to km/gal (US)?",
      answer: "Multiply 20 by 3.785412 to get 75.71 km/gal (US)."
    },
    {
      question: "Why is the conversion factor 3.785412?",
      answer: "Because 1 US liquid gallon contains exactly 3.785411784 metric liters."
    },
    {
      question: "How do I convert km/gal (US) back to km/L?",
      answer: "Divide the km/gal (US) value by 3.785411784, or multiply by 0.264172."
    },
    {
      question: "How many km/gal (US) is 12 km/L?",
      answer: "12 km/L equals approximately 45.42 km/gal (US) (12 × 3.785412 = 45.4249)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (US) to Kilometers per Liter", from: "km-per-gallon-us", to: "km-per-liter" },
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "km/L to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "km/L to L/100km", from: "km-per-liter", to: "liters-per-100km" }
  ]
};

// 7. Kilometers per Gallon (US) to Liters per 100km
export const kmPerGallonUsToLitersPer100km: CustomArticleData = {
  fromUnitId: "km-per-gallon-us",
  toUnitId: "liters-per-100km",
  seoTitle: "Kilometers per Gallon (US) to Liters per 100km Converter (km/gal to L/100km)",
  metaDescription: "Convert Kilometers per US Gallon to Liters per 100km (km/gal US to L/100km). Inverse 378.541 formula, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Gallon (US) to Liters per 100km Converter",
  introduction: [
    "Kilometers per Gallon (US) and Liters per 100 Kilometers (L/100km) represent reciprocal paradigms of automotive fuel rating. Kilometers per Gallon (US) is a distance-per-volume efficiency rating, whereas Liters per 100km is the international volume-per-distance consumption metric.",
    "Because efficiency and consumption are mathematically inverse, converting between them requires dividing the fundamental conversion constant (378.5411784) by the km/gal (US) figure.",
    "This guide provides the exact formula derivation, step-by-step calculation examples for modern vehicles, lookup tables, and answers to common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Gallon (US) [km/gal (US)] to Liters per 100km [L/100km], divide 378.541178 by the km/gal (US) value. For example, 50 km/gal (US) consumes approximately 7.57 L/100km.",
    formulaDisplay: "L/100km = 378.5411784 / km/gal (US)",
    subtext: "Inverse conversion: A higher km/gal (US) rating yields a lower, more efficient L/100km consumption value."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) measures distance in kilometers traveled per US liquid gallon (3.785411784 liters) of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) is the standard metric fuel consumption metric used throughout Europe, Canada, and Australia."
  },
  relationship: "Traveling K kilometers on 1 US gallon (3.785411784 L) means consuming 3.785411784 / K liters per kilometer. Multiplying by 100 gives (100 × 3.785411784) / K = 378.5411784 / K liters per 100 km. Therefore, L/100km = 378.5411784 / km/gal (US).",
  relationshipTitle: "km/gal (US) to L/100km Performance Comparisons",
  relationshipItems: [
    { label: "25 km/gal (US)", value: "15.14 L/100km — Heavy-duty pickup / Full-size SUV" },
    { label: "40 km/gal (US)", value: "9.46 L/100km — Midsize crossover / SUV" },
    { label: "50 km/gal (US)", value: "7.57 L/100km — Compact family sedan" },
    { label: "70 km/gal (US)", value: "5.41 L/100km — Modern hybrid vehicle" },
    { label: "90 km/gal (US)", value: "4.21 L/100km — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide 378.5411784 by the Kilometers per Gallon (US) value to obtain Liters per 100 Kilometers.",
    math: "L/100km = 378.5411784 / km/gal (US)",
    subtext: "To convert back from L/100km to km/gal (US), divide 378.5411784 by the L/100km value."
  },
  formulaTitle: "km/gal (US) to L/100km Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100km from km/gal (US) in your head, divide 378.5 by the km/gal (US) value. For example, 378.5 / 50 km/gal ≈ 7.57 L/100km."
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
        subtitle: "Convert 52 km/gal (US) to Liters per 100km.",
        steps: [
          "Identify the km/gal (US) rating: 52 km/gal (US).",
          "Apply inverse formula: L/100km = 378.5411784 / 52.",
          "Calculate: 378.5411784 / 52 = 7.279638.",
          "Result: 52 km/gal (US) equals approximately 7.28 L/100km."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 42 km/gal (US) into L/100km.",
        steps: [
          "Identify the rating: 42 km/gal (US).",
          "Divide 378.541178: 378.5411784 / 42 = 9.012885.",
          "Result: 42 km/gal (US) equals 9.01 L/100km."
        ]
      },
      {
        title: "Example 3: Full Hybrid Car",
        subtitle: "Convert 80 km/gal (US) into L/100km.",
        steps: [
          "Identify the value: 80 km/gal (US).",
          "Calculate: 378.5411784 / 80 = 4.731765.",
          "Result: 80 km/gal (US) equals 4.73 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Gallon (US) to L/100km Conversion Table",
    headers: ["km/gal (US)", "Liters per 100km (L/100km)", "Fuel Consumption Rating"],
    rows: [
      { fromVal: "20 km/gal", toVal: "18.93 L/100km", extra: "Very High Fuel Consumption" },
      { fromVal: "30 km/gal", toVal: "12.62 L/100km", extra: "High Consumption (Large SUV)" },
      { fromVal: "40 km/gal", toVal: "9.46 L/100km", extra: "Moderate (Midsize Crossover)" },
      { fromVal: "50 km/gal", toVal: "7.57 L/100km", extra: "Good (Family Sedan)" },
      { fromVal: "60 km/gal", toVal: "6.31 L/100km", extra: "Very Good (Compact Hatchback)" },
      { fromVal: "70 km/gal", toVal: "5.41 L/100km", extra: "Efficient (Mild Hybrid)" },
      { fromVal: "80 km/gal", toVal: "4.73 L/100km", extra: "Excellent (Full Hybrid)" },
      { fromVal: "90 km/gal", toVal: "4.21 L/100km", extra: "Superior (Plug-in Hybrid)" },
      { fromVal: "100 km/gal", toVal: "3.79 L/100km", extra: "Ultra-Low Consumption" },
      { fromVal: "110 km/gal", toVal: "3.44 L/100km", extra: "Eco Prototype Benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of km/gal (US) to L/100km",
    items: [
      {
        title: "International Emissions Compliance",
        text: "Automotive engineers converting dynamometer distance-per-gallon test results into metric L/100km to model tailpipe carbon dioxide emissions."
      },
      {
        title: "Multinational Fleet Auditing",
        text: "Corporate fleet managers converting US gallon fuel logs into European WLTP L/100km reporting benchmarks."
      },
      {
        title: "Cross-Border Journey Cost Estimation",
        text: "Estimating fuel requirements in liters for 100 km highway segments based on US-gallon vehicle fuel economy figures."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Because this is an inverse relationship, you must divide the constant 378.5411784 by km/gal (US).",
      "Confusing US gallons with Imperial gallons: The constant for Imperial gallons is 454.609, not 378.541.",
      "Assuming a higher L/100km indicates better efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert km/gal (US) to L/100km?",
      answer: "Divide 378.5411784 by the Kilometers per Gallon (US) value. For example, 378.541178 / 50 = 7.57 L/100km."
    },
    {
      question: "What is the formula to convert km/gal (US) to L/100km?",
      answer: "The formula is: L/100km = 378.5411784 / km/gal (US)."
    },
    {
      question: "Why is the numerator 378.5411784?",
      answer: "Because 100 kilometers multiplied by 3.785411784 liters per US gallon equals 378.5411784."
    },
    {
      question: "How many L/100km is 50 km/gal (US)?",
      answer: "50 km/gal (US) equals approximately 7.57 L/100km (378.541178 / 50 = 7.5708)."
    },
    {
      question: "How many L/100km is 60 km/gal (US)?",
      answer: "60 km/gal (US) equals approximately 6.31 L/100km (378.541178 / 60 = 6.3090)."
    },
    {
      question: "How many L/100km is 80 km/gal (US)?",
      answer: "80 km/gal (US) equals approximately 4.73 L/100km (378.541178 / 80 = 4.7318)."
    },
    {
      question: "How do I convert L/100km back to km/gal (US)?",
      answer: "Divide 378.5411784 by the L/100km value."
    },
    {
      question: "How many L/100km is 40 km/gal (US)?",
      answer: "40 km/gal (US) equals approximately 9.46 L/100km (378.541178 / 40 = 9.4635)."
    }
  ],
  relatedList: [
    { label: "Liters per 100km to Kilometers per Gallon (US)", from: "liters-per-100km", to: "km-per-gallon-us" },
    { label: "Kilometers per Gallon (US) to MPG (US)", from: "km-per-gallon-us", to: "mpg-us" },
    { label: "Kilometers per Gallon (US) to MPG (UK)", from: "km-per-gallon-us", to: "mpg-uk" },
    { label: "Kilometers per Gallon (US) to km/L", from: "km-per-gallon-us", to: "km-per-liter" }
  ]
};

// 8. Liters per 100km to Kilometers per Gallon (US)
export const litersPer100kmToKmPerGallonUs: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "km-per-gallon-us",
  seoTitle: "Liters per 100km to Kilometers per Gallon (US) Converter (L/100km to km/gal)",
  metaDescription: "Convert Liters per 100km to Kilometers per US Gallon (L/100km to km/gal US) instantly. Inverse 378.541 formula, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100km to Kilometers per Gallon (US) Converter",
  introduction: [
    "Liters per 100 Kilometers (L/100km) and Kilometers per Gallon (US) measure vehicle fuel economy from inverse mathematical frameworks. Liters per 100km is the global metric consumption metric (volume of fuel required per 100 kilometers), while Kilometers per Gallon (US) is an efficiency metric (distance traveled per US liquid gallon).",
    "Because volume per distance and distance per volume are reciprocal, converting from L/100km to km/gal (US) requires dividing the universal constant 378.5411784 by the L/100km consumption rate.",
    "This guide explains the inverse relationship, provides step-by-step calculations for passenger cars and commercial vehicles, offers structured lookup tables, and answers common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers [L/100km] to Kilometers per Gallon (US) [km/gal (US)], divide 378.541178 by the L/100km value. For example, a vehicle consuming 6.0 L/100km achieves approximately 63.09 km/gal (US).",
    formulaDisplay: "km/gal (US) = 378.5411784 / (L/100km)",
    subtext: "Inverse conversion: A lower L/100km consumption figure yields a higher km/gal (US) efficiency rating."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) measures fuel volume in liters consumed over 100 kilometers, standard throughout Europe, Australia, and Canada."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per Gallon (US) measures metric kilometers traveled per US liquid gallon (3.785411784 liters) of fuel consumed."
  },
  relationship: "Consuming L liters over 100 km means each liter provides 100 / L kilometers. Since 1 US gallon contains 3.785411784 liters, a full gallon yields (100 / L) × 3.785411784 = 378.5411784 / L kilometers. Therefore, km/gal (US) = 378.5411784 / (L/100km).",
  relationshipTitle: "L/100km to km/gal (US) Benchmarks",
  relationshipItems: [
    { label: "12.0 L/100km", value: "31.55 km/gal (US) — Full-size SUV / Heavy pickup" },
    { label: "8.0 L/100km", value: "47.32 km/gal (US) — Midsize crossover / sedan" },
    { label: "6.0 L/100km", value: "63.09 km/gal (US) — Compact commuter car" },
    { label: "4.5 L/100km", value: "84.12 km/gal (US) — Full hybrid passenger vehicle" },
    { label: "3.5 L/100km", value: "108.15 km/gal (US) — Plug-in hybrid / eco commuter" }
  ],
  formula: {
    text: "Divide 378.5411784 by the fuel consumption in Liters per 100km to calculate Kilometers per Gallon (US).",
    math: "km/gal (US) = 378.5411784 / (L/100km)",
    subtext: "To convert back from km/gal (US) to L/100km, divide 378.5411784 by the km/gal (US) value."
  },
  formulaTitle: "L/100km to km/gal (US) Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/gal (US) from L/100km in your head, divide 378.5 by the L/100km number. For example, 378.5 / 6.0 L/100km ≈ 63.1 km/gal (US)."
  },
  expertNote: {
    title: "Inverse Nature Reminder",
    text: "A 25% decrease in fuel consumption (L/100km) produces a 33.3% increase in distance per gallon (km/gal US)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Compact Hatchback",
        subtitle: "Convert a rating of 5.6 L/100km to Kilometers per Gallon (US).",
        steps: [
          "Identify the L/100km rating: 5.6 L/100km.",
          "Apply formula: km/gal (US) = 378.5411784 / 5.6.",
          "Calculate: 378.5411784 / 5.6 = 67.596639.",
          "Result: 5.6 L/100km equals approximately 67.60 km/gal (US)."
        ]
      },
      {
        title: "Example 2: Crossover SUV",
        subtitle: "Convert 7.5 L/100km into km/gal (US).",
        steps: [
          "Identify the rating: 7.5 L/100km.",
          "Divide 378.541178: 378.5411784 / 7.5 = 50.472157.",
          "Result: 7.5 L/100km equals 50.47 km/gal (US)."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid",
        subtitle: "Convert 4.0 L/100km into km/gal (US).",
        steps: [
          "Identify the value: 4.0 L/100km.",
          "Calculate: 378.5411784 / 4.0 = 94.635295.",
          "Result: 4.0 L/100km equals 94.64 km/gal (US)."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to km/gal (US) Conversion Table",
    headers: ["Liters per 100km (L/100km)", "km/gal (US)", "Vehicle Efficiency Context"],
    rows: [
      { fromVal: "14.0 L/100km", toVal: "27.04 km/gal", extra: "Heavy Commercial Freight Truck" },
      { fromVal: "12.0 L/100km", toVal: "31.55 km/gal", extra: "Full-Size V8 SUV" },
      { fromVal: "10.0 L/100km", toVal: "37.85 km/gal", extra: "Large Sedan / Crossover" },
      { fromVal: "8.0 L/100km", toVal: "47.32 km/gal", extra: "Family Hatchback" },
      { fromVal: "7.0 L/100km", toVal: "54.08 km/gal", extra: "Modern Compact Sedan" },
      { fromVal: "6.0 L/100km", toVal: "63.09 km/gal", extra: "Efficient Subcompact" },
      { fromVal: "5.0 L/100km", toVal: "75.71 km/gal", extra: "Mild Hybrid Car" },
      { fromVal: "4.5 L/100km", toVal: "84.12 km/gal", extra: "Full Hybrid Sedan" },
      { fromVal: "4.0 L/100km", toVal: "94.64 km/gal", extra: "High-Efficiency Hybrid" },
      { fromVal: "3.0 L/100km", toVal: "126.18 km/gal", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100km to km/gal (US)",
    items: [
      {
        title: "International Vehicle Specification Benchmarking",
        text: "Translating European WLTP fuel consumption figures into metric distance metrics per US gallon for automotive analysis."
      },
      {
        title: "Cross-Border Fleet Fuel Management",
        text: "Normalizing European vehicle consumption figures into US-gallon based fueling accounting software."
      },
      {
        title: "Trip Distance Planning",
        text: "Determining how many kilometers a vehicle can travel per US gallon based on dashboard L/100km consumption figures."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting L/100km to km/gal (US) requires dividing 378.5411784 by L/100km.",
      "Confusing US gallons with Imperial gallons: Imperial gallon conversions use 454.609, not 378.541.",
      "Assuming a higher L/100km rating indicates superior efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100km to km/gal (US)?",
      answer: "Divide 378.5411784 by the L/100km value. For example, 378.541178 / 6.0 = 63.09 km/gal (US)."
    },
    {
      question: "What is the formula to convert L/100km to km/gal (US)?",
      answer: "The formula is: km/gal (US) = 378.5411784 / (L/100km)."
    },
    {
      question: "How many km/gal (US) is 6.0 L/100km?",
      answer: "6.0 L/100km equals approximately 63.09 km/gal (US) (378.541178 / 6.0 = 63.0902)."
    },
    {
      question: "How many km/gal (US) is 5.0 L/100km?",
      answer: "5.0 L/100km equals approximately 75.71 km/gal (US) (378.541178 / 5.0 = 75.7082)."
    },
    {
      question: "How many km/gal (US) is 8.0 L/100km?",
      answer: "8.0 L/100km equals approximately 47.32 km/gal (US) (378.541178 / 8.0 = 47.3176)."
    },
    {
      question: "Why is the numerator 378.5411784?",
      answer: "Because 100 km multiplied by 3.785411784 liters per US gallon equals 378.5411784."
    },
    {
      question: "How many km/gal (US) is 4.0 L/100km?",
      answer: "4.0 L/100km equals approximately 94.64 km/gal (US) (378.541178 / 4.0 = 94.6353)."
    },
    {
      question: "How do I convert km/gal (US) back to L/100km?",
      answer: "Divide 378.5411784 by the km/gal (US) value."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (US) to Liters per 100km", from: "km-per-gallon-us", to: "liters-per-100km" },
    { label: "Liters per 100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "Liters per 100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "Liters per 100km to km/L", from: "liters-per-100km", to: "km-per-liter" }
  ]
};
