import { CustomArticleData } from "./types";

// 1. Liters per 100 Miles to MPG (US)
export const litersPer100MilesToMpgUs: CustomArticleData = {
  fromUnitId: "liters-per-100-miles",
  toUnitId: "mpg-us",
  seoTitle: "Liters per 100 Miles to MPG (US) Converter (L/100mi to MPG)",
  metaDescription: "Convert Liters per 100 Miles to US Miles per Gallon (L/100mi to MPG US) instantly. Inverse 378.541 formula, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100 Miles to MPG (US) Converter",
  introduction: [
    "Liters per 100 Miles (L/100mi) and US Miles per Gallon (MPG US) measure vehicle fuel economy from complementary perspectives. While Liters per 100 Miles is a fuel consumption metric (liters of fuel needed to travel 100 miles), US MPG is an efficiency metric (statute miles traveled per US liquid gallon).",
    "Because fuel consumption and fuel efficiency are inverse mathematical concepts, converting between them requires dividing the fundamental conversion constant (378.5411784) by the Liters per 100 Miles value.",
    "This reference explains the mathematical conversion, provides step-by-step vehicle calculation examples, offers structured lookup tables, and answers common automotive fuel efficiency questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Miles [L/100mi] to US Miles per Gallon [MPG (US)], divide 378.541178 by the L/100mi value. For example, 12.0 L/100mi equals approximately 31.55 US MPG.",
    formulaDisplay: "MPG (US) = 378.5411784 / (L/100mi)",
    subtext: "Inverse conversion: A lower L/100mi consumption figure yields a higher, more efficient US MPG rating."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  aboutTargetUnit: {
    title: "Understanding US MPG",
    text: "US Miles per Gallon (MPG) is the official federal fuel economy standard in the United States, measuring statute miles per US liquid gallon (3.785411784 liters)."
  },
  relationship: "Traveling 100 miles on L liters of fuel requires L / 3.785411784 US gallons. The vehicle travels 100 miles on this volume, yielding 100 / (L / 3.785411784) = 378.5411784 / L miles per gallon. Therefore, MPG (US) = 378.5411784 / (L/100mi).",
  relationshipTitle: "L/100mi to US MPG Benchmarks",
  relationshipItems: [
    { label: "20.0 L/100mi", value: "18.93 MPG (US) — Full-size V8 truck / Large SUV" },
    { label: "15.0 L/100mi", value: "25.24 MPG (US) — Midsize crossover / SUV" },
    { label: "12.0 L/100mi", value: "31.55 MPG (US) — Compact family sedan" },
    { label: "8.0 L/100mi", value: "47.32 MPG (US) — Efficient hybrid vehicle" },
    { label: "6.0 L/100mi", value: "63.09 MPG (US) — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide 378.5411784 by the Liters per 100 Miles value to determine US Miles per Gallon.",
    math: "MPG (US) = 378.5411784 / (L/100mi)",
    subtext: "To convert back from US MPG to L/100mi, divide 378.5411784 by the US MPG value."
  },
  formulaTitle: "L/100mi to US MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate US MPG from L/100mi in your head, divide 378.5 by the L/100mi number. For example, 378.5 / 12 L/100mi ≈ 31.5 US MPG."
  },
  expertNote: {
    title: "Inverse Relationship",
    text: "Because L/100mi measures consumption and MPG measures efficiency, lower L/100mi values indicate better fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Sedan",
        subtitle: "Convert a rating of 11.5 L/100mi to US Miles per Gallon.",
        steps: [
          "Identify the fuel consumption rating: 11.5 L/100mi.",
          "Apply inverse formula: MPG (US) = 378.5411784 / 11.5.",
          "Calculate: 378.5411784 / 11.5 = 32.916624.",
          "Result: 11.5 L/100mi equals approximately 32.92 US MPG."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 14.0 L/100mi into US MPG.",
        steps: [
          "Identify the rating: 14.0 L/100mi.",
          "Divide 378.541178: 378.5411784 / 14.0 = 27.038656.",
          "Result: 14.0 L/100mi equals 27.04 US MPG."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 7.5 L/100mi into US MPG.",
        steps: [
          "Identify the value: 7.5 L/100mi.",
          "Calculate: 378.5411784 / 7.5 = 50.472157.",
          "Result: 7.5 L/100mi equals 50.47 US MPG."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100 Miles to US MPG Conversion Table",
    headers: ["Liters per 100 Miles (L/100mi)", "MPG (US)", "Typical Vehicle Category"],
    rows: [
      { fromVal: "25.0 L/100mi", toVal: "15.14 MPG", extra: "Commercial Freight Truck" },
      { fromVal: "20.0 L/100mi", toVal: "18.93 MPG", extra: "Full-Size V8 SUV" },
      { fromVal: "16.0 L/100mi", toVal: "23.66 MPG", extra: "Midsize Crossover" },
      { fromVal: "13.0 L/100mi", toVal: "29.12 MPG", extra: "Family Sedan" },
      { fromVal: "11.0 L/100mi", toVal: "34.41 MPG", extra: "Compact Hatchback" },
      { fromVal: "9.5 L/100mi", toVal: "39.85 MPG", extra: "Subcompact Commuter" },
      { fromVal: "8.0 L/100mi", toVal: "47.32 MPG", extra: "Mild Hybrid Vehicle" },
      { fromVal: "7.0 L/100mi", toVal: "54.08 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "6.0 L/100mi", toVal: "63.09 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "5.0 L/100mi", toVal: "75.71 MPG", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100mi to US MPG",
    items: [
      {
        title: "US Fleet Liters Billing Conversion",
        text: "Converting fuel purchase invoices in liters against vehicle trip computers recording distances in statute miles."
      },
      {
        title: "Cross-Border Journey Cost Estimation",
        text: "Estimating fuel cost when traveling across the US while tracking fuel in liters."
      },
      {
        title: "Automotive Dyno Test Analysis",
        text: "Converting test cell liter consumption measurements over 100-mile dyno cycles into EPA MPG ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting L/100mi to US MPG requires dividing 378.5411784 by L/100mi.",
      "Confusing US gallons with Imperial gallons: Imperial gallon conversions use 454.609, not 378.541.",
      "Assuming a higher L/100mi number indicates better efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100mi to US MPG?",
      answer: "Divide 378.5411784 by the Liters per 100 Miles value. For example, 378.541178 / 12 = 31.55 US MPG."
    },
    {
      question: "What is the formula to convert L/100mi to US MPG?",
      answer: "The formula is: MPG (US) = 378.5411784 / (L/100mi)."
    },
    {
      question: "How many US MPG is 10 L/100mi?",
      answer: "10 L/100mi equals exactly 37.854118 US MPG (approximately 37.85 US MPG)."
    },
    {
      question: "How many US MPG is 15 L/100mi?",
      answer: "15 L/100mi equals approximately 25.24 US MPG (378.541178 / 15 = 25.2361)."
    },
    {
      question: "How do I convert 8.0 L/100mi to US MPG?",
      answer: "Divide 378.5411784 by 8.0 to get 47.32 US MPG."
    },
    {
      question: "Why is the numerator 378.5411784?",
      answer: "Because 100 miles multiplied by 3.785411784 liters per US gallon equals 378.5411784."
    },
    {
      question: "How do I convert US MPG back to L/100mi?",
      answer: "Divide 378.5411784 by the US MPG value."
    },
    {
      question: "How many US MPG is 12 L/100mi?",
      answer: "12 L/100mi equals approximately 31.55 US MPG (378.541178 / 12 = 31.5451)."
    }
  ],
  relatedList: [
    { label: "MPG (US) to Liters per 100 Miles", from: "mpg-us", to: "liters-per-100-miles" },
    { label: "Liters per 100 Miles to MPG (UK)", from: "liters-per-100-miles", to: "mpg-uk" },
    { label: "Liters per 100 Miles to km/L", from: "liters-per-100-miles", to: "km-per-liter" },
    { label: "Liters per 100 Miles to L/100km", from: "liters-per-100-miles", to: "liters-per-100km" }
  ]
};

// 2. MPG (US) to Liters per 100 Miles
export const mpgUsToLitersPer100Miles: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "liters-per-100-miles",
  seoTitle: "MPG (US) to Liters per 100 Miles Converter (MPG to L/100mi)",
  metaDescription: "Convert US Miles per Gallon to Liters per 100 Miles (MPG US to L/100mi) instantly. Inverse 378.541 formula, step-by-step math, tables, and FAQs.",
  h1: "MPG (US) to Liters per 100 Miles Converter",
  introduction: [
    "US Miles per Gallon (MPG US) and Liters per 100 Miles (L/100mi) quantify vehicle fuel performance using different mathematical frameworks. While US MPG measures distance traveled per gallon of fuel, Liters per 100 Miles expresses the exact volume of fuel in liters required to complete a 100-mile journey.",
    "Because efficiency and consumption are reciprocal concepts, converting from US MPG to Liters per 100 Miles requires dividing the constant 378.5411784 by the US MPG rating.",
    "This guide provides the complete conversion derivation, worked calculation examples, structured lookup tables, and answers to frequently asked automotive questions."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon [MPG (US)] to Liters per 100 Miles [L/100mi], divide 378.541178 by the US MPG value. For example, 30 US MPG consumes approximately 12.62 L/100mi.",
    formulaDisplay: "L/100mi = 378.5411784 / MPG (US)",
    subtext: "Inverse conversion: A higher US MPG rating yields a lower, more efficient L/100mi consumption figure."
  },
  aboutSourceUnit: {
    title: "Understanding US MPG",
    text: "US Miles per Gallon (MPG) is the official federal fuel efficiency standard in the United States, measuring statute miles per US liquid gallon (3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  relationship: "A vehicle achieving M miles per gallon requires 100 / M US gallons to travel 100 miles. Multiplying by 3.785411784 liters per gallon gives (100 / M) × 3.785411784 = 378.5411784 / M liters per 100 miles. Therefore, L/100mi = 378.5411784 / MPG (US).",
  relationshipTitle: "US MPG to L/100mi Benchmarks",
  relationshipItems: [
    { label: "15 MPG (US)", value: "25.24 L/100mi — Full-size V8 truck / Large SUV" },
    { label: "25 MPG (US)", value: "15.14 L/100mi — Midsize crossover / SUV" },
    { label: "35 MPG (US)", value: "10.82 L/100mi — Compact family sedan" },
    { label: "45 MPG (US)", value: "8.41 L/100mi — Efficient hybrid vehicle" },
    { label: "55 MPG (US)", value: "6.88 L/100mi — Plug-in hybrid vehicle" }
  ],
  formula: {
    text: "Divide 378.5411784 by the US Miles per Gallon value to determine Liters per 100 Miles.",
    math: "L/100mi = 378.5411784 / MPG (US)",
    subtext: "To convert back from L/100mi to US MPG, divide 378.5411784 by the L/100mi value."
  },
  formulaTitle: "US MPG to L/100mi Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100mi from US MPG in your head, divide 378.5 by the MPG rating. For example, 378.5 / 30 MPG ≈ 12.6 L/100mi."
  },
  expertNote: {
    title: "Consumption Metric Advantage",
    text: "Liters per 100 Miles provides a linear metric for fuel consumption: saving 2 L/100mi saves the exact same amount of fuel regardless of starting efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Highway Sedan",
        subtitle: "Convert 32 MPG (US) to Liters per 100 Miles.",
        steps: [
          "Identify the US MPG rating: 32 MPG.",
          "Apply formula: L/100mi = 378.5411784 / 32.",
          "Calculate: 378.5411784 / 32 = 11.829412.",
          "Result: 32 US MPG consumes approximately 11.83 L/100mi."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 26 MPG (US) into L/100mi.",
        steps: [
          "Identify the rating: 26 MPG.",
          "Divide 378.541178: 378.5411784 / 26 = 14.559276.",
          "Result: 26 US MPG consumes 14.56 L/100mi."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 50 MPG (US) into L/100mi.",
        steps: [
          "Identify the value: 50 MPG.",
          "Calculate: 378.5411784 / 50 = 7.570824.",
          "Result: 50 US MPG consumes 7.57 L/100mi."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Liters per 100 Miles Conversion Table",
    headers: ["MPG (US)", "Liters per 100 Miles (L/100mi)", "Typical Vehicle Context"],
    rows: [
      { fromVal: "15 MPG", toVal: "25.24 L/100mi", extra: "Full-Size V8 Truck" },
      { fromVal: "20 MPG", toVal: "18.93 L/100mi", extra: "Midsize SUV" },
      { fromVal: "25 MPG", toVal: "15.14 L/100mi", extra: "Compact Crossover" },
      { fromVal: "30 MPG", toVal: "12.62 L/100mi", extra: "Family Sedan" },
      { fromVal: "35 MPG", toVal: "10.82 L/100mi", extra: "Efficient Compact Car" },
      { fromVal: "40 MPG", toVal: "9.46 L/100mi", extra: "Subcompact Commuter" },
      { fromVal: "45 MPG", toVal: "8.41 L/100mi", extra: "Mild Hybrid Vehicle" },
      { fromVal: "50 MPG", toVal: "7.57 L/100mi", extra: "Full Hybrid Sedan" },
      { fromVal: "55 MPG", toVal: "6.88 L/100mi", extra: "High-Efficiency Hybrid" },
      { fromVal: "60 MPG", toVal: "6.31 L/100mi", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of US MPG to L/100mi",
    items: [
      {
        title: "Fuel Expense Budgeting",
        text: "Calculating fuel requirements in liters for 100-mile highway commutes based on US EPA window sticker MPG."
      },
      {
        title: "International Driver Trip Planning",
        text: "Helping international drivers used to metric liters estimate fuel needs when driving US rental cars rated in MPG."
      },
      {
        title: "Fleet Fuel Audits",
        text: "Converting vehicle efficiency ratings into direct volumetric fuel purchase forecasts."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting US MPG to L/100mi requires dividing 378.5411784 by MPG.",
      "Using the UK Imperial gallon factor (454.609) instead of the US gallon factor (378.541).",
      "Assuming a higher L/100mi indicates superior efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert US MPG to L/100mi?",
      answer: "Divide 378.5411784 by the US MPG value. For example, 378.541178 / 30 = 12.62 L/100mi."
    },
    {
      question: "What is the formula to convert US MPG to L/100mi?",
      answer: "The formula is: L/100mi = 378.5411784 / MPG (US)."
    },
    {
      question: "How many L/100mi is 30 US MPG?",
      answer: "30 US MPG consumes approximately 12.62 L/100mi (378.541178 / 30 = 12.6180)."
    },
    {
      question: "How many L/100mi is 40 US MPG?",
      answer: "40 US MPG consumes approximately 9.46 L/100mi (378.541178 / 40 = 9.4635)."
    },
    {
      question: "How do I convert 50 US MPG to L/100mi?",
      answer: "Divide 378.5411784 by 50 to get 7.57 L/100mi."
    },
    {
      question: "Why is the numerator 378.5411784?",
      answer: "Because 100 miles multiplied by 3.785411784 liters per US gallon equals 378.5411784."
    },
    {
      question: "How do I convert L/100mi back to US MPG?",
      answer: "Divide 378.5411784 by the L/100mi value."
    },
    {
      question: "How many L/100mi is 25 US MPG?",
      answer: "25 US MPG consumes approximately 15.14 L/100mi (378.541178 / 25 = 15.1416)."
    }
  ],
  relatedList: [
    { label: "Liters per 100 Miles to MPG (US)", from: "liters-per-100-miles", to: "mpg-us" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" }
  ]
};

// 3. Liters per 100 Miles to MPG (UK)
export const litersPer100MilesToMpgUk: CustomArticleData = {
  fromUnitId: "liters-per-100-miles",
  toUnitId: "mpg-uk",
  seoTitle: "Liters per 100 Miles to MPG (UK) Converter (L/100mi to Imperial MPG)",
  metaDescription: "Convert Liters per 100 Miles to UK Imperial Miles per Gallon (L/100mi to MPG UK). Inverse 454.609 formula, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100 Miles to MPG (UK) Converter",
  introduction: [
    "Liters per 100 Miles (L/100mi) and UK Imperial Miles per Gallon (MPG UK) represent fuel measurement from complementary perspectives. Liters per 100 Miles expresses fuel consumption (liters of fuel required to drive 100 miles), while UK MPG measures efficiency (statute miles traveled per British Imperial gallon).",
    "Because consumption and efficiency are reciprocal, converting between them requires dividing the fundamental Imperial constant (454.609) by the Liters per 100 Miles value.",
    "This reference explains the mathematical conversion, provides step-by-step vehicle calculation examples, offers structured lookup tables, and answers common automotive fuel efficiency questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Miles [L/100mi] to UK Imperial Miles per Gallon [MPG (UK)], divide 454.609 by the L/100mi value. For example, 12.0 L/100mi equals approximately 37.88 UK MPG.",
    formulaDisplay: "MPG (UK) = 454.609 / (L/100mi)",
    subtext: "Inverse conversion: A lower L/100mi consumption figure yields a higher, more efficient UK MPG rating."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  aboutTargetUnit: {
    title: "Understanding UK Imperial MPG",
    text: "Imperial Miles per Gallon (UK MPG) is the official British vehicle fuel economy metric, measuring statute miles per Imperial gallon (4.54609 liters)."
  },
  relationship: "Traveling 100 miles on L liters of fuel requires L / 4.54609 Imperial gallons. The vehicle travels 100 miles on this volume, yielding 100 / (L / 4.54609) = 454.609 / L miles per gallon. Therefore, MPG (UK) = 454.609 / (L/100mi).",
  relationshipTitle: "L/100mi to UK MPG Benchmarks",
  relationshipItems: [
    { label: "20.0 L/100mi", value: "22.73 MPG (UK) — Full-size SUV / Heavy commercial vehicle" },
    { label: "15.0 L/100mi", value: "30.31 MPG (UK) — Midsize family saloon" },
    { label: "12.0 L/100mi", value: "37.88 MPG (UK) — Compact hatchback" },
    { label: "8.0 L/100mi", value: "56.83 MPG (UK) — Efficient diesel / mild hybrid" },
    { label: "6.0 L/100mi", value: "75.77 MPG (UK) — Full hybrid passenger vehicle" }
  ],
  formula: {
    text: "Divide 454.609 by the Liters per 100 Miles value to determine UK Imperial Miles per Gallon.",
    math: "MPG (UK) = 454.609 / (L/100mi)",
    subtext: "To convert back from UK MPG to L/100mi, divide 454.609 by the UK MPG value."
  },
  formulaTitle: "L/100mi to UK MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate UK MPG from L/100mi in your head, divide 454.6 by the L/100mi number. For example, 454.6 / 12 L/100mi ≈ 37.9 UK MPG."
  },
  expertNote: {
    title: "Inverse Nature Reminder",
    text: "Because L/100mi measures consumption and MPG measures efficiency, lower L/100mi values indicate better fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Saloon",
        subtitle: "Convert a rating of 10.5 L/100mi to UK Imperial MPG.",
        steps: [
          "Identify the fuel consumption rating: 10.5 L/100mi.",
          "Apply inverse formula: MPG (UK) = 454.609 / 10.5.",
          "Calculate: 454.609 / 10.5 = 43.296095.",
          "Result: 10.5 L/100mi equals approximately 43.30 UK MPG."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 13.0 L/100mi into UK MPG.",
        steps: [
          "Identify the rating: 13.0 L/100mi.",
          "Divide 454.609: 454.609 / 13.0 = 34.969923.",
          "Result: 13.0 L/100mi equals 34.97 UK MPG."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 6.5 L/100mi into UK MPG.",
        steps: [
          "Identify the value: 6.5 L/100mi.",
          "Calculate: 454.609 / 6.5 = 69.939846.",
          "Result: 6.5 L/100mi equals 69.94 UK MPG."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100 Miles to UK MPG Conversion Table",
    headers: ["Liters per 100 Miles (L/100mi)", "MPG (UK)", "Typical Vehicle Context"],
    rows: [
      { fromVal: "25.0 L/100mi", toVal: "18.18 MPG", extra: "Commercial Freight Truck" },
      { fromVal: "20.0 L/100mi", toVal: "22.73 MPG", extra: "Full-Size V8 SUV" },
      { fromVal: "16.0 L/100mi", toVal: "28.41 MPG", extra: "Midsize Crossover" },
      { fromVal: "13.0 L/100mi", toVal: "34.97 MPG", extra: "Family Saloon" },
      { fromVal: "11.0 L/100mi", toVal: "41.33 MPG", extra: "Compact Hatchback" },
      { fromVal: "9.5 L/100mi", toVal: "47.85 MPG", extra: "Efficient Turbo Diesel" },
      { fromVal: "8.0 L/100mi", toVal: "56.83 MPG", extra: "Mild Hybrid Hatchback" },
      { fromVal: "7.0 L/100mi", toVal: "64.94 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "6.0 L/100mi", toVal: "75.77 MPG", extra: "High-Efficiency Hybrid" },
      { fromVal: "5.0 L/100mi", toVal: "90.92 MPG", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100mi to UK MPG",
    items: [
      {
        title: "UK Fuel Log Analysis",
        text: "Converting fuel fill-up logs recorded in liters against vehicle odometers measuring miles into official UK MPG."
      },
      {
        title: "Fleet Fuel Audits",
        text: "Standardizing corporate vehicle consumption records across British and Commonwealth logistics routes."
      },
      {
        title: "Automotive Dyno Testing",
        text: "Translating test cell volumetric flow rate per 100 miles into UK consumer brochure ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting L/100mi to UK MPG requires dividing 454.609 by L/100mi.",
      "Confusing Imperial gallons (4.54609 L) with US gallons (3.785412 L).",
      "Assuming a higher L/100mi indicates superior efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100mi to UK MPG?",
      answer: "Divide 454.609 by the Liters per 100 Miles value. For example, 454.609 / 12 = 37.88 UK MPG."
    },
    {
      question: "What is the formula to convert L/100mi to UK MPG?",
      answer: "The formula is: MPG (UK) = 454.609 / (L/100mi)."
    },
    {
      question: "How many UK MPG is 10 L/100mi?",
      answer: "10 L/100mi equals exactly 45.4609 UK MPG (approximately 45.46 UK MPG)."
    },
    {
      question: "How many UK MPG is 12 L/100mi?",
      answer: "12 L/100mi equals approximately 37.88 UK MPG (454.609 / 12 = 37.8841)."
    },
    {
      question: "How do I convert 8.0 L/100mi to UK MPG?",
      answer: "Divide 454.609 by 8.0 to get 56.83 UK MPG."
    },
    {
      question: "Why is the numerator 454.609?",
      answer: "Because 100 miles multiplied by 4.54609 liters per Imperial gallon equals 454.609."
    },
    {
      question: "How do I convert UK MPG back to L/100mi?",
      answer: "Divide 454.609 by the UK MPG value."
    },
    {
      question: "How many UK MPG is 15 L/100mi?",
      answer: "15 L/100mi equals approximately 30.31 UK MPG (454.609 / 15 = 30.3073)."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to Liters per 100 Miles", from: "mpg-uk", to: "liters-per-100-miles" },
    { label: "Liters per 100 Miles to MPG (US)", from: "liters-per-100-miles", to: "mpg-us" },
    { label: "Liters per 100 Miles to km/L", from: "liters-per-100-miles", to: "km-per-liter" },
    { label: "Liters per 100 Miles to L/100km", from: "liters-per-100-miles", to: "liters-per-100km" }
  ]
};

// 4. MPG (UK) to Liters per 100 Miles
export const mpgUkToLitersPer100Miles: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "liters-per-100-miles",
  seoTitle: "MPG (UK) to Liters per 100 Miles Converter (Imperial MPG to L/100mi)",
  metaDescription: "Convert UK Imperial MPG to Liters per 100 Miles (MPG UK to L/100mi) instantly. Inverse 454.609 formula, step-by-step math, tables, and FAQs.",
  h1: "MPG (UK) to Liters per 100 Miles Converter",
  introduction: [
    "UK Imperial Miles per Gallon (MPG UK) and Liters per 100 Miles (L/100mi) quantify vehicle fuel performance using different mathematical frameworks. While UK MPG measures distance traveled per British Imperial gallon, Liters per 100 Miles expresses the exact volume of fuel in liters required to complete a 100-mile journey.",
    "Because efficiency and consumption are reciprocal concepts, converting from UK MPG to Liters per 100 Miles requires dividing the constant 454.609 by the UK MPG rating.",
    "This guide provides the complete conversion derivation, worked calculation examples, structured lookup tables, and answers to frequently asked automotive questions."
  ],
  quickAnswer: {
    text: "To convert UK Imperial Miles per Gallon [MPG (UK)] to Liters per 100 Miles [L/100mi], divide 454.609 by the UK MPG value. For example, 40 UK MPG consumes approximately 11.37 L/100mi.",
    formulaDisplay: "L/100mi = 454.609 / MPG (UK)",
    subtext: "Inverse conversion: A higher UK MPG rating yields a lower, more efficient L/100mi consumption figure."
  },
  aboutSourceUnit: {
    title: "Understanding UK Imperial MPG",
    text: "Imperial Miles per Gallon (UK MPG) is the official British automotive fuel economy metric, measuring statute miles per Imperial gallon (4.54609 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  relationship: "A vehicle achieving M miles per Imperial gallon requires 100 / M Imperial gallons to travel 100 miles. Multiplying by 4.54609 liters per gallon gives (100 / M) × 4.54609 = 454.609 / M liters per 100 miles. Therefore, L/100mi = 454.609 / MPG (UK).",
  relationshipTitle: "UK MPG to L/100mi Benchmarks",
  relationshipItems: [
    { label: "20 MPG (UK)", value: "22.73 L/100mi — High-performance V8 / Large 4x4" },
    { label: "30 MPG (UK)", value: "15.15 L/100mi — Midsize crossover / estate" },
    { label: "40 MPG (UK)", value: "11.37 L/100mi — Family saloon / hatchback" },
    { label: "50 MPG (UK)", value: "9.09 L/100mi — Efficient turbo diesel / mild hybrid" },
    { label: "60 MPG (UK)", value: "7.58 L/100mi — Full hybrid passenger vehicle" }
  ],
  formula: {
    text: "Divide 454.609 by the UK Miles per Gallon value to determine Liters per 100 Miles.",
    math: "L/100mi = 454.609 / MPG (UK)",
    subtext: "To convert back from L/100mi to UK MPG, divide 454.609 by the L/100mi value."
  },
  formulaTitle: "UK MPG to L/100mi Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100mi from UK MPG in your head, divide 454.6 by the UK MPG rating. For example, 454.6 / 40 MPG ≈ 11.4 L/100mi."
  },
  expertNote: {
    title: "Consumption Metric Advantage",
    text: "Liters per 100 Miles provides a linear metric for fuel consumption: saving 2 L/100mi saves the exact same amount of fuel regardless of starting efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Saloon",
        subtitle: "Convert 42 MPG (UK) to Liters per 100 Miles.",
        steps: [
          "Identify the UK MPG rating: 42 MPG.",
          "Apply formula: L/100mi = 454.609 / 42.",
          "Calculate: 454.609 / 42 = 10.824024.",
          "Result: 42 UK MPG consumes approximately 10.82 L/100mi."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 35 MPG (UK) into L/100mi.",
        steps: [
          "Identify the rating: 35 MPG.",
          "Divide 454.609: 454.609 / 35 = 12.988829.",
          "Result: 35 UK MPG consumes 12.99 L/100mi."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 58 MPG (UK) into L/100mi.",
        steps: [
          "Identify the value: 58 MPG.",
          "Calculate: 454.609 / 58 = 7.838086.",
          "Result: 58 UK MPG consumes 7.84 L/100mi."
        ]
      }
    ]
  },
  table: {
    title: "UK MPG to Liters per 100 Miles Conversion Table",
    headers: ["MPG (UK)", "Liters per 100 Miles (L/100mi)", "Typical Vehicle Context"],
    rows: [
      { fromVal: "20 MPG", toVal: "22.73 L/100mi", extra: "High-Performance V8" },
      { fromVal: "25 MPG", toVal: "18.18 L/100mi", extra: "Full-Size SUV" },
      { fromVal: "30 MPG", toVal: "15.15 L/100mi", extra: "Midsize Crossover" },
      { fromVal: "35 MPG", toVal: "12.99 L/100mi", extra: "Family Saloon" },
      { fromVal: "40 MPG", toVal: "11.37 L/100mi", extra: "Compact Hatchback" },
      { fromVal: "45 MPG", toVal: "10.10 L/100mi", extra: "Efficient Turbo Diesel" },
      { fromVal: "50 MPG", toVal: "9.09 L/100mi", extra: "Mild Hybrid Hatchback" },
      { fromVal: "55 MPG", toVal: "8.27 L/100mi", extra: "Full Hybrid Sedan" },
      { fromVal: "60 MPG", toVal: "7.58 L/100mi", extra: "High-Efficiency Hybrid" },
      { fromVal: "65 MPG", toVal: "6.99 L/100mi", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of UK MPG to L/100mi",
    items: [
      {
        title: "UK Fleet Liters Billing Conversion",
        text: "Converting fuel purchase invoices in liters against vehicle trip computers recording distances in statute miles."
      },
      {
        title: "British Journey Planning",
        text: "Estimating total fuel requirements in liters for 100-mile motorway trips based on UK official brochure MPG."
      },
      {
        title: "Fleet Telematics Reporting",
        text: "Standardizing UK fleet fuel efficiency data into volumetric consumption metrics."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting UK MPG to L/100mi requires dividing 454.609 by MPG.",
      "Using the US liquid gallon factor (378.541) instead of the Imperial gallon factor (454.609).",
      "Assuming a higher L/100mi indicates superior efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert UK MPG to L/100mi?",
      answer: "Divide 454.609 by the UK MPG value. For example, 454.609 / 40 = 11.37 L/100mi."
    },
    {
      question: "What is the formula to convert UK MPG to L/100mi?",
      answer: "The formula is: L/100mi = 454.609 / MPG (UK)."
    },
    {
      question: "How many L/100mi is 40 UK MPG?",
      answer: "40 UK MPG consumes approximately 11.37 L/100mi (454.609 / 40 = 11.3652)."
    },
    {
      question: "How many L/100mi is 50 UK MPG?",
      answer: "50 UK MPG consumes approximately 9.09 L/100mi (454.609 / 50 = 9.0922)."
    },
    {
      question: "How do I convert 60 UK MPG to L/100mi?",
      answer: "Divide 454.609 by 60 to get 7.58 L/100mi."
    },
    {
      question: "Why is the numerator 454.609?",
      answer: "Because 100 miles multiplied by 4.54609 liters per Imperial gallon equals 454.609."
    },
    {
      question: "How do I convert L/100mi back to UK MPG?",
      answer: "Divide 454.609 by the L/100mi value."
    },
    {
      question: "How many L/100mi is 30 UK MPG?",
      answer: "30 UK MPG consumes approximately 15.15 L/100mi (454.609 / 30 = 15.1536)."
    }
  ],
  relatedList: [
    { label: "Liters per 100 Miles to MPG (UK)", from: "liters-per-100-miles", to: "mpg-uk" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" }
  ]
};

// 5. Liters per 100 Miles to Kilometers per Liter
export const litersPer100MilesToKmPerLiter: CustomArticleData = {
  fromUnitId: "liters-per-100-miles",
  toUnitId: "km-per-liter",
  seoTitle: "Liters per 100 Miles to Kilometers per Liter Converter (L/100mi to km/L)",
  metaDescription: "Convert Liters per 100 Miles to Kilometers per Liter (L/100mi to km/L) instantly. Inverse 160.934 formula, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100 Miles to Kilometers per Liter Converter",
  introduction: [
    "Liters per 100 Miles (L/100mi) and Kilometers per Liter (km/L) evaluate vehicle fuel consumption from inverse perspectives across different distance units. Liters per 100 Miles is a fuel consumption metric (liters required to travel 100 miles), whereas Kilometers per Liter is a metric distance-per-volume efficiency rating.",
    "Because 100 international statute miles equals exactly 160.9344 kilometers, a vehicle consuming L liters per 100 miles achieves exactly 160.9344 / L kilometers per liter.",
    "This reference explains the mathematical conversion, provides worked vehicle calculation examples, offers structured lookup tables, and answers common automotive fuel efficiency questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Miles [L/100mi] to Kilometers per Liter [km/L], divide 160.9344 by the L/100mi value. For example, 12.0 L/100mi equals approximately 13.41 km/L.",
    formulaDisplay: "km/L = 160.9344 / (L/100mi)",
    subtext: "Inverse conversion: A lower L/100mi consumption figure yields a higher km/L efficiency rating."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is the primary metric fuel economy standard in Japan, India, Brazil, and Latin America, expressing kilometers traveled per liter of fuel."
  },
  relationship: "Since 100 statute miles equals 160.9344 kilometers, consuming L liters to cover 100 miles means traveling 160.9344 kilometers on L liters. Dividing distance by volume yields 160.9344 / L km/L. Therefore, km/L = 160.9344 / (L/100mi).",
  relationshipTitle: "L/100mi to km/L Benchmarks",
  relationshipItems: [
    { label: "20.0 L/100mi", value: "8.05 km/L — Full-size SUV / Heavy commercial vehicle" },
    { label: "15.0 L/100mi", value: "10.73 km/L — Midsize crossover / sedan" },
    { label: "12.0 L/100mi", value: "13.41 km/L — Compact family car" },
    { label: "8.0 L/100mi", value: "20.12 km/L — Modern hybrid vehicle" },
    { label: "6.0 L/100mi", value: "26.82 km/L — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide 160.9344 by the Liters per 100 Miles value to obtain Kilometers per Liter.",
    math: "km/L = 160.9344 / (L/100mi)",
    subtext: "To convert back from km/L to L/100mi, divide 160.9344 by the km/L value."
  },
  formulaTitle: "L/100mi to km/L Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate km/L from L/100mi in your head, divide 161 by the L/100mi number. For example, 161 / 12 L/100mi ≈ 13.4 km/L."
  },
  expertNote: {
    title: "Inverse Nature Reminder",
    text: "Because L/100mi measures consumption and km/L measures efficiency, lower L/100mi values indicate better fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Hatchback",
        subtitle: "Convert a rating of 11.0 L/100mi to Kilometers per Liter.",
        steps: [
          "Identify the fuel consumption rating: 11.0 L/100mi.",
          "Apply inverse formula: km/L = 160.9344 / 11.0.",
          "Calculate: 160.9344 / 11.0 = 14.630400.",
          "Result: 11.0 L/100mi equals approximately 14.63 km/L."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 13.5 L/100mi into km/L.",
        steps: [
          "Identify the rating: 13.5 L/100mi.",
          "Divide 160.9344: 160.9344 / 13.5 = 11.921067.",
          "Result: 13.5 L/100mi equals 11.92 km/L."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 7.0 L/100mi into km/L.",
        steps: [
          "Identify the value: 7.0 L/100mi.",
          "Calculate: 160.9344 / 7.0 = 22.990629.",
          "Result: 7.0 L/100mi equals 22.99 km/L."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100 Miles to km/L Conversion Table",
    headers: ["Liters per 100 Miles (L/100mi)", "Kilometers per Liter (km/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "25.0 L/100mi", toVal: "6.44 km/L", extra: "Commercial Freight Truck" },
      { fromVal: "20.0 L/100mi", toVal: "8.05 km/L", extra: "Full-Size V8 SUV" },
      { fromVal: "16.0 L/100mi", toVal: "10.06 km/L", extra: "Midsize Crossover" },
      { fromVal: "13.0 L/100mi", toVal: "12.38 km/L", extra: "Family Sedan" },
      { fromVal: "11.0 L/100mi", toVal: "14.63 km/L", extra: "Compact Hatchback" },
      { fromVal: "9.5 L/100mi", toVal: "16.94 km/L", extra: "Subcompact Commuter" },
      { fromVal: "8.0 L/100mi", toVal: "20.12 km/L", extra: "Mild Hybrid Saloon" },
      { fromVal: "7.0 L/100mi", toVal: "22.99 km/L", extra: "Full Hybrid Sedan" },
      { fromVal: "6.0 L/100mi", toVal: "26.82 km/L", extra: "High-Efficiency Hybrid" },
      { fromVal: "5.0 L/100mi", toVal: "32.19 km/L", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100mi to km/L",
    items: [
      {
        title: "International Telematics Normalization",
        text: "Converting fuel consumption recorded per 100 miles into standard km/L metrics for Asian and Latin American fleet systems."
      },
      {
        title: "Automotive Engine Benchmarking",
        text: "Translating dyno fuel flow rate per 100 miles into direct km/L efficiency curves."
      },
      {
        title: "Cross-Market Vehicle Imports",
        text: "Comparing vehicle fuel consumption specifications between mile-based and km/L-based markets."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting L/100mi to km/L requires dividing 160.9344 by L/100mi.",
      "Confusing L/100mi with L/100km.",
      "Assuming a higher L/100mi indicates superior efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100mi to km/L?",
      answer: "Divide 160.9344 by the Liters per 100 Miles value. For example, 160.9344 / 12 = 13.41 km/L."
    },
    {
      question: "What is the formula to convert L/100mi to km/L?",
      answer: "The formula is: km/L = 160.9344 / (L/100mi)."
    },
    {
      question: "How many km/L is 10 L/100mi?",
      answer: "10 L/100mi equals exactly 16.09344 km/L (approximately 16.09 km/L)."
    },
    {
      question: "How many km/L is 12 L/100mi?",
      answer: "12 L/100mi equals approximately 13.41 km/L (160.9344 / 12 = 13.4112)."
    },
    {
      question: "How do I convert 8.0 L/100mi to km/L?",
      answer: "Divide 160.9344 by 8.0 to get 20.12 km/L."
    },
    {
      question: "Why is the numerator 160.9344?",
      answer: "Because 100 international statute miles equals exactly 160.9344 kilometers."
    },
    {
      question: "How do I convert km/L back to L/100mi?",
      answer: "Divide 160.9344 by the km/L value."
    },
    {
      question: "How many km/L is 15 L/100mi?",
      answer: "15 L/100mi equals approximately 10.73 km/L (160.9344 / 15 = 10.7290)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Liter to Liters per 100 Miles", from: "km-per-liter", to: "liters-per-100-miles" },
    { label: "Liters per 100 Miles to MPG (US)", from: "liters-per-100-miles", to: "mpg-us" },
    { label: "Liters per 100 Miles to MPG (UK)", from: "liters-per-100-miles", to: "mpg-uk" },
    { label: "Liters per 100 Miles to L/100km", from: "liters-per-100-miles", to: "liters-per-100km" }
  ]
};

// 6. Kilometers per Liter to Liters per 100 Miles
export const kmPerLiterToLitersPer100Miles: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "liters-per-100-miles",
  seoTitle: "Kilometers per Liter to Liters per 100 Miles Converter (km/L to L/100mi)",
  metaDescription: "Convert Kilometers per Liter to Liters per 100 Miles (km/L to L/100mi) instantly. Inverse 160.934 formula, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Liter to Liters per 100 Miles Converter",
  introduction: [
    "Kilometers per Liter (km/L) and Liters per 100 Miles (L/100mi) measure vehicle fuel performance from reciprocal perspectives. While km/L is the metric distance achieved per liter of fuel, Liters per 100 Miles quantifies the volumetric fuel requirement in liters to cover 100 statute miles.",
    "Because 100 statute miles equals exactly 160.9344 kilometers, a vehicle rated at K kilometers per liter will require exactly 160.9344 / K liters to complete a 100-mile journey.",
    "This guide provides the exact conversion formula, worked examples for common passenger vehicles, lookup tables, and answers to frequently asked engineering questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter [km/L] to Liters per 100 Miles [L/100mi], divide 160.9344 by the km/L value. For example, 15 km/L consumes approximately 10.73 L/100mi.",
    formulaDisplay: "L/100mi = 160.9344 / (km/L)",
    subtext: "Inverse conversion: A higher km/L rating yields a lower, more efficient L/100mi consumption figure."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is the standard automotive fuel efficiency metric in Japan, India, and Latin America, expressing kilometers traveled per liter of fuel."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  relationship: "Traveling 100 statute miles (160.9344 km) in a vehicle achieving K km/L requires 160.9344 / K liters of fuel. Therefore, L/100mi = 160.9344 / (km/L).",
  relationshipTitle: "km/L to L/100mi Benchmark Ratings",
  relationshipItems: [
    { label: "8 km/L", value: "20.12 L/100mi — Full-size SUV / Heavy commercial vehicle" },
    { label: "12 km/L", value: "13.41 L/100mi — Midsize family sedan / Crossover" },
    { label: "16 km/L", value: "10.06 L/100mi — Compact commuter car" },
    { label: "20 km/L", value: "8.05 L/100mi — Full hybrid passenger vehicle" },
    { label: "24 km/L", value: "6.71 L/100mi — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide 160.9344 by the Kilometers per Liter value to determine Liters per 100 Miles.",
    math: "L/100mi = 160.9344 / (km/L)",
    subtext: "To convert back from L/100mi to km/L, divide 160.9344 by the L/100mi value."
  },
  formulaTitle: "km/L to L/100mi Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100mi from km/L in your head, divide 161 by the km/L number. For example, 161 / 15 km/L ≈ 10.7 L/100mi."
  },
  expertNote: {
    title: "Inverse Proportionality",
    text: "A vehicle with twice the km/L efficiency consumes exactly half the liters of fuel per 100 miles."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Japanese Sedan",
        subtitle: "Convert a rating of 16.5 km/L to Liters per 100 Miles.",
        steps: [
          "Identify the km/L rating: 16.5 km/L.",
          "Apply formula: L/100mi = 160.9344 / 16.5.",
          "Calculate: 160.9344 / 16.5 = 9.753600.",
          "Result: 16.5 km/L consumes approximately 9.75 L/100mi."
        ]
      },
      {
        title: "Example 2: Compact Crossover",
        subtitle: "Convert 13.0 km/L into L/100mi.",
        steps: [
          "Identify the rating: 13.0 km/L.",
          "Divide 160.9344: 160.9344 / 13.0 = 12.379569.",
          "Result: 13.0 km/L consumes 12.38 L/100mi."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 21.0 km/L into L/100mi.",
        steps: [
          "Identify the value: 21.0 km/L.",
          "Calculate: 160.9344 / 21.0 = 7.663543.",
          "Result: 21.0 km/L consumes 7.66 L/100mi."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to L/100mi Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "Liters per 100 Miles (L/100mi)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "6 km/L", toVal: "26.82 L/100mi", extra: "Heavy Commercial Truck" },
      { fromVal: "8 km/L", toVal: "20.12 L/100mi", extra: "Full-Size V8 SUV" },
      { fromVal: "10 km/L", toVal: "16.09 L/100mi", extra: "Midsize Crossover" },
      { fromVal: "12 km/L", toVal: "13.41 L/100mi", extra: "Family Sedan" },
      { fromVal: "14 km/L", toVal: "11.50 L/100mi", extra: "Compact Hatchback" },
      { fromVal: "16 km/L", toVal: "10.06 L/100mi", extra: "Subcompact Car" },
      { fromVal: "18 km/L", toVal: "8.94 L/100mi", extra: "Mild Hybrid Car" },
      { fromVal: "20 km/L", toVal: "8.05 L/100mi", extra: "Full Hybrid Sedan" },
      { fromVal: "22 km/L", toVal: "7.32 L/100mi", extra: "High-Efficiency Hybrid" },
      { fromVal: "25 km/L", toVal: "6.44 L/100mi", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/L to L/100mi",
    items: [
      {
        title: "International Fleet Budgeting",
        text: "Converting vehicle fuel ratings from km/L into volumetric consumption per 100 miles for cross-border logistics routes."
      },
      {
        title: "Trip Fuel Planning",
        text: "Estimating liters needed to travel 100-mile highway stretches for vehicles manufactured and tested in km/L standards."
      },
      {
        title: "Automotive Engine Benchmarking",
        text: "Comparing vehicle flow test outcomes between metric distance-per-volume and volumetric consumption models."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting km/L to L/100mi requires dividing 160.9344 by km/L.",
      "Confusing L/100mi with L/100km.",
      "Assuming a higher L/100mi rating indicates superior efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert km/L to L/100mi?",
      answer: "Divide 160.9344 by the Kilometers per Liter value. For example, 160.9344 / 15 = 10.73 L/100mi."
    },
    {
      question: "What is the formula to convert km/L to L/100mi?",
      answer: "The formula is: L/100mi = 160.9344 / (km/L)."
    },
    {
      question: "How many L/100mi is 10 km/L?",
      answer: "10 km/L consumes exactly 16.09344 L/100mi (approximately 16.09 L/100mi)."
    },
    {
      question: "How many L/100mi is 15 km/L?",
      answer: "15 km/L consumes approximately 10.73 L/100mi (160.9344 / 15 = 10.7290)."
    },
    {
      question: "How do I convert 20 km/L to L/100mi?",
      answer: "Divide 160.9344 by 20 to get 8.05 L/100mi."
    },
    {
      question: "Why is the numerator 160.9344?",
      answer: "Because 100 international statute miles equals exactly 160.9344 kilometers."
    },
    {
      question: "How do I convert L/100mi back to km/L?",
      answer: "Divide 160.9344 by the L/100mi value."
    },
    {
      question: "How many L/100mi is 12 km/L?",
      answer: "12 km/L consumes approximately 13.41 L/100mi (160.9344 / 12 = 13.4112)."
    }
  ],
  relatedList: [
    { label: "Liters per 100 Miles to Kilometers per Liter", from: "liters-per-100-miles", to: "km-per-liter" },
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "km/L to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "km/L to L/100km", from: "km-per-liter", to: "liters-per-100km" }
  ]
};

// 7. Liters per 100 Miles to Liters per 100km
export const litersPer100MilesToLitersPer100km: CustomArticleData = {
  fromUnitId: "liters-per-100-miles",
  toUnitId: "liters-per-100km",
  seoTitle: "Liters per 100 Miles to Liters per 100km Converter (L/100mi to L/100km)",
  metaDescription: "Convert Liters per 100 Miles to Liters per 100km (L/100mi to L/100km) instantly. 0.621371 factor, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100 Miles to Liters per 100km Converter",
  introduction: [
    "Liters per 100 Miles (L/100mi) and Liters per 100 Kilometers (L/100km) are direct volumetric fuel consumption metrics that share the metric liter as their volume unit. The only difference between them is the distance over which consumption is measured: 100 statute miles versus 100 kilometers.",
    "Because 100 statute miles equals exactly 160.9344 kilometers (which is 1.609344 times 100 km), traveling 100 km consumes proportionally less fuel than traveling 100 miles. Dividing the L/100mi figure by 1.609344 (or multiplying by 0.621371192) yields the exact consumption in Liters per 100km.",
    "This guide covers the exact mathematical relationship, step-by-step conversion examples for modern passenger vehicles, lookup tables, and answers to common technical questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Miles [L/100mi] to Liters per 100 Kilometers [L/100km], divide by 1.609344 (or multiply by 0.621371). For example, 12.0 L/100mi equals approximately 7.46 L/100km.",
    formulaDisplay: "L/100km = (L/100mi) / 1.609344 = (L/100mi) × 0.621371192",
    subtext: "1 Liter per 100 Miles equals approximately 0.621371 Liters per 100 Kilometers."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) is the global metric fuel consumption standard used throughout Europe, Canada, and Australia."
  },
  relationship: "Because both metrics express fuel volume (liters) over distance, their relationship is directly proportional to distance. Since 100 miles = 160.9344 km, fuel consumed per 100 km is L / 1.609344. Therefore, L/100km = (L/100mi) / 1.609344.",
  relationshipTitle: "L/100mi to L/100km Consumption Comparisons",
  relationshipItems: [
    { label: "20.0 L/100mi", value: "12.43 L/100km — Full-size SUV / Heavy commercial vehicle" },
    { label: "15.0 L/100mi", value: "9.32 L/100km — Midsize crossover / sedan" },
    { label: "12.0 L/100mi", value: "7.46 L/100km — Compact family car" },
    { label: "8.0 L/100mi", value: "4.97 L/100km — Modern hybrid vehicle" },
    { label: "6.0 L/100mi", value: "3.73 L/100km — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide Liters per 100 Miles by 1.609344 or multiply by 0.621371192 to obtain Liters per 100 Kilometers.",
    math: "L/100km = (L/100mi) × 0.621371192",
    subtext: "To convert back from L/100km to L/100mi, multiply by 1.609344."
  },
  formulaTitle: "L/100mi to L/100km Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100km from L/100mi in your head, multiply by 0.62 (or divide by 1.6). For example, 10 L/100mi × 0.62 ≈ 6.2 L/100km."
  },
  expertNote: {
    title: "Direct Proportionality",
    text: "Because both metrics measure fuel consumption (volume per distance), lower values indicate superior efficiency in both systems."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Hatchback",
        subtitle: "Convert a rating of 11.5 L/100mi to Liters per 100 Kilometers.",
        steps: [
          "Identify the fuel consumption rating: 11.5 L/100mi.",
          "Apply formula: L/100km = 11.5 / 1.609344.",
          "Calculate: 11.5 × 0.621371192 = 7.145769.",
          "Result: 11.5 L/100mi equals approximately 7.15 L/100km."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 14.0 L/100mi into L/100km.",
        steps: [
          "Identify the rating: 14.0 L/100mi.",
          "Multiply by 0.621371: 14.0 × 0.621371192 = 8.699197.",
          "Result: 14.0 L/100mi equals 8.70 L/100km."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 8.5 L/100mi into L/100km.",
        steps: [
          "Identify the value: 8.5 L/100mi.",
          "Calculate: 8.5 / 1.609344 = 5.281655.",
          "Result: 8.5 L/100mi equals 5.28 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100 Miles to L/100km Conversion Table",
    headers: ["Liters per 100 Miles (L/100mi)", "Liters per 100km (L/100km)", "Fuel Consumption Rating"],
    rows: [
      { fromVal: "25.0 L/100mi", toVal: "15.53 L/100km", extra: "Very High Fuel Consumption" },
      { fromVal: "20.0 L/100mi", toVal: "12.43 L/100km", extra: "High Consumption (Large SUV)" },
      { fromVal: "16.0 L/100mi", toVal: "9.94 L/100km", extra: "Moderate (Midsize Crossover)" },
      { fromVal: "13.0 L/100mi", toVal: "8.08 L/100km", extra: "Good (Family Sedan)" },
      { fromVal: "11.0 L/100mi", toVal: "6.84 L/100km", extra: "Very Good (Compact Hatchback)" },
      { fromVal: "9.5 L/100mi", toVal: "5.90 L/100km", extra: "Efficient (Subcompact)" },
      { fromVal: "8.0 L/100mi", toVal: "4.97 L/100km", extra: "Excellent (Mild Hybrid)" },
      { fromVal: "7.0 L/100mi", toVal: "4.35 L/100km", extra: "Superior (Full Hybrid)" },
      { fromVal: "6.0 L/100mi", toVal: "3.73 L/100km", extra: "Ultra-Low Consumption" },
      { fromVal: "5.0 L/100mi", toVal: "3.11 L/100km", extra: "Eco Prototype Benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100mi to L/100km",
    items: [
      {
        title: "International Fleet Normalization",
        text: "Translating fleet vehicle telemetry recorded in liters per 100 miles into European WLTP L/100km compliance reports."
      },
      {
        title: "Cross-Border Journey Planning",
        text: "Comparing fuel consumption rates between US highway segments and continental European routes."
      },
      {
        title: "Automotive Dyno Emissions Modeling",
        text: "Converting test cell volumetric fuel rates directly between mile-based and metric-distance testing protocols."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1.609344 instead of dividing when converting L/100mi to L/100km.",
      "Treating this as an inverse relationship: both L/100mi and L/100km are consumption units and scale directly.",
      "Confusing L/100mi with MPG."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100mi to L/100km?",
      answer: "Divide the Liters per 100 Miles value by 1.609344 (or multiply by 0.621371). For example, 12 / 1.609344 = 7.46 L/100km."
    },
    {
      question: "What is the formula to convert L/100mi to L/100km?",
      answer: "The formula is: L/100km = (L/100mi) / 1.609344 = (L/100mi) × 0.621371192."
    },
    {
      question: "How many L/100km is 10 L/100mi?",
      answer: "10 L/100mi equals approximately 6.21 L/100km (10 / 1.609344 = 6.2137)."
    },
    {
      question: "How many L/100km is 15 L/100mi?",
      answer: "15 L/100mi equals approximately 9.32 L/100km (15 / 1.609344 = 9.3206)."
    },
    {
      question: "How do I convert 8.0 L/100mi to L/100km?",
      answer: "Multiply 8.0 by 0.621371 to get 4.97 L/100km."
    },
    {
      question: "Why is the factor 0.621371?",
      answer: "Because 1 kilometer is 0.621371192 miles (the reciprocal of 1.609344)."
    },
    {
      question: "How do I convert L/100km back to L/100mi?",
      answer: "Multiply the L/100km value by 1.609344."
    },
    {
      question: "How many L/100km is 12 L/100mi?",
      answer: "12 L/100mi equals approximately 7.46 L/100km (12 × 0.621371 = 7.4565)."
    }
  ],
  relatedList: [
    { label: "Liters per 100km to Liters per 100 Miles", from: "liters-per-100km", to: "liters-per-100-miles" },
    { label: "Liters per 100 Miles to MPG (US)", from: "liters-per-100-miles", to: "mpg-us" },
    { label: "Liters per 100 Miles to MPG (UK)", from: "liters-per-100-miles", to: "mpg-uk" },
    { label: "Liters per 100 Miles to km/L", from: "liters-per-100-miles", to: "km-per-liter" }
  ]
};

// 8. Liters per 100km to Liters per 100 Miles
export const litersPer100kmToLitersPer100Miles: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "liters-per-100-miles",
  seoTitle: "Liters per 100km to Liters per 100 Miles Converter (L/100km to L/100mi)",
  metaDescription: "Convert Liters per 100km to Liters per 100 Miles (L/100km to L/100mi) instantly. 1.609344 multiplier, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100km to Liters per 100 Miles Converter",
  introduction: [
    "Liters per 100 Kilometers (L/100km) and Liters per 100 Miles (L/100mi) are both volumetric fuel consumption metrics measuring fuel volume in liters over standardized distances. While L/100km is the international standard across Europe, Canada, and Australia, Liters per 100 Miles is used in hybrid metric/imperial fuel tracking systems.",
    "Because 100 statute miles equals exactly 160.9344 kilometers, driving 100 miles is 1.609344 times farther than driving 100 kilometers. Therefore, converting from L/100km to L/100mi requires a direct multiplication by 1.609344.",
    "This guide provides the complete conversion derivation, worked calculation examples, structured lookup tables, and answers to frequently asked automotive questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers [L/100km] to Liters per 100 Miles [L/100mi], multiply the L/100km value by 1.609344. For example, 6.0 L/100km equals approximately 9.66 L/100mi.",
    formulaDisplay: "L/100mi = (L/100km) × 1.609344",
    subtext: "1 Liter per 100 Kilometers equals exactly 1.609344 Liters per 100 Miles."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) measures fuel volume in liters consumed over 100 kilometers, standard throughout Europe, Australia, and Canada."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100 Miles (L/100mi)",
    text: "Liters per 100 Miles (L/100mi) measures fuel consumption in metric liters over a distance of 100 statute miles."
  },
  relationship: "Because 100 statute miles equals 160.9344 kilometers, a vehicle consuming C liters per 100 km will consume C × 1.609344 liters over 100 miles. Therefore, L/100mi = (L/100km) × 1.609344.",
  relationshipTitle: "L/100km to L/100mi Consumption Benchmarks",
  relationshipItems: [
    { label: "12.0 L/100km", value: "19.31 L/100mi — Full-size SUV / Heavy pickup" },
    { label: "8.0 L/100km", value: "12.87 L/100mi — Midsize crossover / sedan" },
    { label: "6.0 L/100km", value: "9.66 L/100mi — Compact commuter car" },
    { label: "4.5 L/100km", value: "7.24 L/100mi — Full hybrid passenger vehicle" },
    { label: "3.5 L/100km", value: "5.63 L/100mi — Plug-in hybrid / eco commuter" }
  ],
  formula: {
    text: "Multiply the fuel consumption in Liters per 100km by 1.609344 to calculate Liters per 100 Miles.",
    math: "L/100mi = (L/100km) × 1.609344",
    subtext: "To convert back from L/100mi to L/100km, divide by 1.609344 (or multiply by 0.621371)."
  },
  formulaTitle: "L/100km to L/100mi Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100mi from L/100km in your head, multiply the L/100km number by 1.6. For example, 6.0 L/100km × 1.6 ≈ 9.6 L/100mi."
  },
  expertNote: {
    title: "Direct Scaling",
    text: "Because both metrics represent fuel consumption (volume per distance), lower values indicate superior fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Hatchback",
        subtitle: "Convert a rating of 5.5 L/100km to Liters per 100 Miles.",
        steps: [
          "Identify the L/100km rating: 5.5 L/100km.",
          "Apply formula: L/100mi = 5.5 × 1.609344.",
          "Calculate: 5.5 × 1.609344 = 8.851392.",
          "Result: 5.5 L/100km equals approximately 8.85 L/100mi."
        ]
      },
      {
        title: "Example 2: Crossover SUV",
        subtitle: "Convert 7.5 L/100km into L/100mi.",
        steps: [
          "Identify the rating: 7.5 L/100km.",
          "Multiply by 1.609344: 7.5 × 1.609344 = 12.070080.",
          "Result: 7.5 L/100km equals 12.07 L/100mi."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 4.2 L/100km into L/100mi.",
        steps: [
          "Identify the value: 4.2 L/100km.",
          "Calculate: 4.2 × 1.609344 = 6.759245.",
          "Result: 4.2 L/100km equals 6.76 L/100mi."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to L/100mi Conversion Table",
    headers: ["Liters per 100km (L/100km)", "Liters per 100 Miles (L/100mi)", "Fuel Consumption Context"],
    rows: [
      { fromVal: "14.0 L/100km", toVal: "22.53 L/100mi", extra: "Commercial Freight Truck" },
      { fromVal: "12.0 L/100km", toVal: "19.31 L/100mi", extra: "Full-Size V8 SUV" },
      { fromVal: "10.0 L/100km", toVal: "16.09 L/100mi", extra: "Midsize Crossover" },
      { fromVal: "8.0 L/100km", toVal: "12.87 L/100mi", extra: "Family Sedan" },
      { fromVal: "7.0 L/100km", toVal: "11.27 L/100mi", extra: "Compact Hatchback" },
      { fromVal: "6.0 L/100km", toVal: "9.66 L/100mi", extra: "Subcompact Commuter" },
      { fromVal: "5.0 L/100km", toVal: "8.05 L/100mi", extra: "Mild Hybrid Saloon" },
      { fromVal: "4.5 L/100km", toVal: "7.24 L/100mi", extra: "Full Hybrid Sedan" },
      { fromVal: "4.0 L/100km", toVal: "6.44 L/100mi", extra: "High-Efficiency Hybrid" },
      { fromVal: "3.0 L/100km", toVal: "4.83 L/100mi", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100km to L/100mi",
    items: [
      {
        title: "International Fleet Fuel Auditing",
        text: "Translating European WLTP fuel consumption figures into 100-mile volumetric fuel consumption metrics."
      },
      {
        title: "Trip Distance Planning",
        text: "Estimating total fuel liters required for 100-mile highway journeys based on dashboard L/100km consumption ratings."
      },
      {
        title: "Automotive Dyno Test Analysis",
        text: "Standardizing fuel consumption test protocols between 100 km and 100 mile chassis dynamometer procedures."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1.609344 instead of multiplying when converting L/100km to L/100mi.",
      "Treating this as an inverse relationship: both metrics are consumption metrics and scale directly.",
      "Confusing L/100mi with MPG."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100km to L/100mi?",
      answer: "Multiply the Liters per 100km value by 1.609344. For example, 6.0 × 1.609344 = 9.66 L/100mi."
    },
    {
      question: "What is the formula to convert L/100km to L/100mi?",
      answer: "The formula is: L/100mi = (L/100km) × 1.609344."
    },
    {
      question: "How many L/100mi is 6.0 L/100km?",
      answer: "6.0 L/100km equals approximately 9.66 L/100mi (6.0 × 1.609344 = 9.656064)."
    },
    {
      question: "How many L/100mi is 5.0 L/100km?",
      answer: "5.0 L/100km equals exactly 8.04672 L/100mi (approximately 8.05 L/100mi)."
    },
    {
      question: "How many L/100mi is 8.0 L/100km?",
      answer: "8.0 L/100km equals approximately 12.87 L/100mi (8.0 × 1.609344 = 12.874752)."
    },
    {
      question: "Why is the conversion factor 1.609344?",
      answer: "Because 100 statute miles equals exactly 160.9344 kilometers (1.609344 × 100 km)."
    },
    {
      question: "How do I convert L/100mi back to L/100km?",
      answer: "Divide the L/100mi value by 1.609344, or multiply by 0.621371."
    },
    {
      question: "How many L/100mi is 4.0 L/100km?",
      answer: "4.0 L/100km equals approximately 6.44 L/100mi (4.0 × 1.609344 = 6.437376)."
    }
  ],
  relatedList: [
    { label: "Liters per 100 Miles to Liters per 100km", from: "liters-per-100-miles", to: "liters-per-100km" },
    { label: "Liters per 100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "Liters per 100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "Liters per 100km to km/L", from: "liters-per-100km", to: "km-per-liter" }
  ]
};
