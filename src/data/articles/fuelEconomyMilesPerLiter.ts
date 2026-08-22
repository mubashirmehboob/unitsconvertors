import { CustomArticleData } from "./types";

// 1. Miles per Liter to MPG (US)
export const milesPerLiterToMpgUs: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "mpg-us",
  seoTitle: "Miles per Liter to MPG (US) Converter (mi/L to MPG)",
  metaDescription: "Convert Miles per Liter to US Miles per Gallon (mi/L to MPG US) with exact mathematical formulas, conversion tables, step-by-step examples, and FAQs.",
  h1: "Miles per Liter to MPG (US) Converter",
  introduction: [
    "Miles per Liter (mi/L) and Miles per Gallon (US MPG) are distance-per-volume measurements used to quantify automotive fuel efficiency. While Miles per Liter combines Imperial statute distance with metric liquid volume, US MPG is the standardized metric established by the United States Environmental Protection Agency (EPA) for window stickers and federal compliance.",
    "Because both metrics measure distance traveled per unit of fuel, they share a directly proportional relationship. Since one standard US liquid gallon is defined internationally as exactly 3.785411784 liters, one mile per liter equals exactly 3.785411784 US Miles per Gallon.",
    "This guide provides the exact mathematical foundation for converting mi/L to US MPG, step-by-step calculations for modern passenger cars and commercial vehicles, comprehensive reference tables, and answers to frequently asked engineering questions."
  ],
  quickAnswer: {
    text: "To convert Miles per Liter [mi/L] to US Miles per Gallon [MPG (US)], multiply the mi/L value by 3.785412. For example, a vehicle achieving 8 mi/L delivers approximately 30.28 US MPG.",
    formulaDisplay: "MPG (US) = mi/L × 3.785411784",
    subtext: "1 Mile per Liter equals exactly 3.785411784 US Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) is a hybrid fuel economy unit expressing the number of statute miles (1,609.344 meters) a vehicle travels using one metric liter (0.001 m³) of fuel. It is occasionally used in regions that have adopted metric fuel dispensing while retaining statute road distance markers."
  },
  aboutTargetUnit: {
    title: "Understanding MPG (US)",
    text: "Miles per Gallon (US MPG) is the official automotive fuel economy standard in the United States. It specifies the number of international statute miles a vehicle covers per US liquid gallon (defined as exactly 231 cubic inches or 3.785411784 liters)."
  },
  relationship: "Because 1 US liquid gallon contains exactly 3.785411784 liters, traveling 1 mile on 1 liter means traveling 3.785411784 miles on a full US gallon. Consequently, MPG (US) = mi/L × 3.785411784.",
  relationshipTitle: "mi/L vs US MPG Performance Benchmarks",
  relationshipItems: [
    { label: "4 mi/L", value: "15.14 MPG (US) — Heavy-duty pickup / Full-size SUV" },
    { label: "7 mi/L", value: "26.50 MPG (US) — Midsize crossover / All-wheel-drive sedan" },
    { label: "10 mi/L", value: "37.85 MPG (US) — Efficient compact commuter car" },
    { label: "13 mi/L", value: "49.21 MPG (US) — Modern hybrid electric vehicle" },
    { label: "16 mi/L", value: "60.57 MPG (US) — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in Miles per Liter by 3.785411784 to obtain US Miles per Gallon.",
    math: "MPG (US) = mi/L × 3.785411784",
    subtext: "To convert back from US MPG to mi/L, divide by 3.785411784 (or multiply by 0.264172)."
  },
  formulaTitle: "Miles per Liter to US MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate US MPG from mi/L in your head, multiply the mi/L value by 3.8. For example, 10 mi/L × 3.8 = 38 US MPG."
  },
  expertNote: {
    title: "Direct Scaling Principle",
    text: "Because both mi/L and MPG are distance-over-volume units, higher values indicate greater fuel efficiency in both systems."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Hatchback",
        subtitle: "Convert 8.5 mi/L into US Miles per Gallon.",
        steps: [
          "Identify the input fuel economy: 8.5 mi/L.",
          "Apply conversion formula: MPG (US) = 8.5 × 3.785411784.",
          "Calculate: 8.5 × 3.785411784 = 32.1760.",
          "Result: 8.5 mi/L equals approximately 32.18 US MPG."
        ]
      },
      {
        title: "Example 2: Hybrid Commuter",
        subtitle: "Convert 12.0 mi/L into US Miles per Gallon.",
        steps: [
          "Identify the input value: 12.0 mi/L.",
          "Multiply by 3.785411784: 12.0 × 3.785411784 = 45.4249.",
          "Result: 12.0 mi/L equals 45.42 US MPG."
        ]
      },
      {
        title: "Example 3: Light Commercial Van",
        subtitle: "Convert 6.2 mi/L into US Miles per Gallon.",
        steps: [
          "Identify the rating: 6.2 mi/L.",
          "Apply formula: 6.2 × 3.785411784 = 23.4696.",
          "Result: 6.2 mi/L equals 23.47 US MPG."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to US MPG Conversion Table",
    headers: ["Miles per Liter (mi/L)", "MPG (US)", "Vehicle Class Context"],
    rows: [
      { fromVal: "3 mi/L", toVal: "11.36 MPG", extra: "Commercial Freight Truck" },
      { fromVal: "5 mi/L", toVal: "18.93 MPG", extra: "Full-Size V8 SUV" },
      { fromVal: "7 mi/L", toVal: "26.50 MPG", extra: "Midsize Crossover" },
      { fromVal: "8 mi/L", toVal: "30.28 MPG", extra: "Compact Sedan" },
      { fromVal: "9 mi/L", toVal: "34.07 MPG", extra: "Efficient Subcompact" },
      { fromVal: "10 mi/L", toVal: "37.85 MPG", extra: "Modern Compact Car" },
      { fromVal: "12 mi/L", toVal: "45.42 MPG", extra: "Full Hybrid Sedan" },
      { fromVal: "14 mi/L", toVal: "53.00 MPG", extra: "Ultra-Efficient Hybrid" },
      { fromVal: "16 mi/L", toVal: "60.57 MPG", extra: "Plug-in Hybrid Eco Mode" },
      { fromVal: "18 mi/L", toVal: "68.14 MPG", extra: "Micro-Commuter Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to US MPG",
    items: [
      {
        title: "Automotive Telematics & Fleet Monitoring",
        text: "Fleet management systems combining GPS mileages with pump liter readings convert figures into US MPG for standardized US reporting."
      },
      {
        title: "Cross-Border Vehicle Evaluation",
        text: "US drivers calculating fuel efficiency from liters purchased at Canadian or Mexican border stations easily convert to familiar EPA MPG."
      },
      {
        title: "Powertrain Research & Benchmarking",
        text: "Engineers analyzing fuel flow rate sensors calibrated in liters per minute against vehicle dynamometer miles per hour calculate equivalent US MPG."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Confusing US gallons with Imperial gallons: 1 US gallon is 3.785 L, whereas 1 Imperial gallon is 4.546 L.",
      "Inverting the multiplier: Converting mi/L to US MPG requires multiplying by 3.785412, not dividing.",
      "Confusing mi/L with km/L: Miles per liter is 1.609344 times larger than kilometers per liter."
    ]
  },
  faqs: [
    {
      question: "How many US MPG is 1 mi/L?",
      answer: "1 Mile per Liter equals exactly 3.785411784 US Miles per Gallon."
    },
    {
      question: "What is the formula to convert mi/L to US MPG?",
      answer: "The formula is: MPG (US) = mi/L × 3.785411784."
    },
    {
      question: "How do I convert 10 mi/L to US MPG?",
      answer: "Multiply 10 by 3.785411784 to get 37.8541 US MPG (approximately 37.85 MPG)."
    },
    {
      question: "Why is the conversion factor 3.785412?",
      answer: "The conversion factor derives from the exact international definition of 1 US liquid gallon as 3.785411784 liters."
    },
    {
      question: "How many US MPG is 8 mi/L?",
      answer: "8 mi/L equals approximately 30.28 US MPG (8 × 3.785412 = 30.2833)."
    },
    {
      question: "Is 12 mi/L considered good fuel economy?",
      answer: "Yes, 12 mi/L equals 45.42 US MPG, which represents excellent efficiency typical of modern hybrid cars."
    },
    {
      question: "How do I convert US MPG back to mi/L?",
      answer: "Divide the US MPG value by 3.785411784, or multiply by 0.264172."
    },
    {
      question: "What is 15 mi/L in US MPG?",
      answer: "15 mi/L equals 56.78 US MPG (15 × 3.785411784 = 56.7812)."
    }
  ],
  relatedList: [
    { label: "MPG (US) to Miles per Liter", from: "mpg-us", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "Miles per Liter to km/L", from: "miles-per-liter", to: "km-per-liter" },
    { label: "Miles per Liter to L/100km", from: "miles-per-liter", to: "liters-per-100km" }
  ]
};

// 2. MPG (US) to Miles per Liter
export const mpgUsToMilesPerLiter: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "miles-per-liter",
  seoTitle: "MPG (US) to Miles per Liter Converter (MPG to mi/L)",
  metaDescription: "Convert US Miles per Gallon to Miles per Liter (MPG to mi/L) instantly. Learn the 0.264172 formula, calculations, tables, and automotive FAQs.",
  h1: "MPG (US) to Miles per Liter Converter",
  introduction: [
    "Miles per Gallon (US MPG) and Miles per Liter (mi/L) are distance-over-volume metrics used to measure automotive fuel efficiency. While the United States EPA rates passenger cars in US MPG, international drivers and engineers measuring fuel in metric liters often require efficiency stated in Miles per Liter.",
    "Because both units measure statute miles covered per unit of fuel, converting between them involves a direct linear transformation. Since 1 US gallon equals exactly 3.785411784 liters, dividing US MPG by 3.785411784 (or multiplying by 0.264172052) yields exact Miles per Liter.",
    "This reference explains the conversion mechanics, provides worked examples for everyday vehicle ratings, includes structured lookup tables, and answers common automotive fuel calculation questions."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon [MPG (US)] to Miles per Liter [mi/L], multiply the US MPG value by 0.264172 (or divide by 3.785412). For example, 30 US MPG equals approximately 7.93 mi/L.",
    formulaDisplay: "mi/L = MPG (US) / 3.785411784 = MPG (US) × 0.264172052",
    subtext: "1 US MPG equals approximately 0.264172 Miles per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding US MPG",
    text: "US Miles per Gallon (MPG) is the federal fuel economy standard in the United States, denoting statute miles covered per US gallon (3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) measures statute miles traveled per metric liter of fuel consumed, commonly referenced when combining odometer readings with metric pump volume."
  },
  relationship: "Since 1 US liquid gallon equals 3.785411784 liters, 1 US MPG represents traveling 1 mile on 3.785411784 liters. Therefore, 1 US MPG = 1 / 3.785411784 = 0.264172052 mi/L.",
  relationshipTitle: "US MPG to mi/L Equivalencies",
  relationshipItems: [
    { label: "20 MPG (US)", value: "5.28 mi/L — Midsize SUV / Crossover" },
    { label: "30 MPG (US)", value: "7.93 mi/L — Compact family sedan" },
    { label: "40 MPG (US)", value: "10.57 mi/L — Subcompact hatchback" },
    { label: "50 MPG (US)", value: "13.21 mi/L — Full hybrid vehicle" },
    { label: "60 MPG (US)", value: "15.85 mi/L — High-efficiency plug-in hybrid" }
  ],
  formula: {
    text: "Divide US Miles per Gallon by 3.785411784 or multiply by 0.264172052 to determine Miles per Liter.",
    math: "mi/L = MPG (US) × 0.264172052",
    subtext: "To convert back from mi/L to US MPG, multiply by 3.785411784."
  },
  formulaTitle: "US MPG to Miles per Liter Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly estimate mi/L from US MPG, divide the MPG number by 3.8 (or multiply by 0.26). For example, 38 MPG / 3.8 ≈ 10 mi/L."
  },
  expertNote: {
    title: "Proportional Conversion Benefit",
    text: "Because both units are distance-per-volume metrics, higher numbers always reflect superior fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Highway Sedan",
        subtitle: "Convert a highway rating of 34 MPG (US) to mi/L.",
        steps: [
          "Identify the US MPG rating: 34 MPG.",
          "Apply formula: mi/L = 34 / 3.785411784.",
          "Calculate: 34 × 0.264172052 = 8.9818.",
          "Result: 34 US MPG equals 8.98 mi/L."
        ]
      },
      {
        title: "Example 2: Compact SUV",
        subtitle: "Convert 25 MPG (US) into mi/L.",
        steps: [
          "Identify the rating: 25 MPG.",
          "Multiply by 0.264172: 25 × 0.264172052 = 6.6043.",
          "Result: 25 US MPG equals 6.60 mi/L."
        ]
      },
      {
        title: "Example 3: Hybrid Electric Car",
        subtitle: "Convert an EPA rating of 52 MPG (US) into mi/L.",
        steps: [
          "Identify the EPA rating: 52 MPG.",
          "Calculate: 52 / 3.785411784 = 13.7369.",
          "Result: 52 US MPG equals 13.74 mi/L."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Miles per Liter Conversion Table",
    headers: ["MPG (US)", "Miles per Liter (mi/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "15 MPG", toVal: "3.96 mi/L", extra: "Full-Size V8 Truck" },
      { fromVal: "20 MPG", toVal: "5.28 mi/L", extra: "Midsize SUV" },
      { fromVal: "25 MPG", toVal: "6.60 mi/L", extra: "Compact Crossover" },
      { fromVal: "30 MPG", toVal: "7.93 mi/L", extra: "Standard Family Sedan" },
      { fromVal: "35 MPG", toVal: "9.25 mi/L", extra: "Efficient Compact Car" },
      { fromVal: "40 MPG", toVal: "10.57 mi/L", extra: "Subcompact Commuter" },
      { fromVal: "45 MPG", toVal: "11.89 mi/L", extra: "Mild Hybrid Vehicle" },
      { fromVal: "50 MPG", toVal: "13.21 mi/L", extra: "Full Hybrid Sedan" },
      { fromVal: "55 MPG", toVal: "14.53 mi/L", extra: "Eco-Tuned Hybrid" },
      { fromVal: "60 MPG", toVal: "15.85 mi/L", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of US MPG to mi/L",
    items: [
      {
        title: "International Fuel Purchasing",
        text: "Drivers crossing international borders convert US EPA ratings to evaluate fuel requirements when purchasing fuel dispensed in liters."
      },
      {
        title: "Fleet Fuel Accounting",
        text: "Transportation companies track fleet fuel consumption against bulk metric fuel deliveries while utilizing statute mile routing."
      },
      {
        title: "Automotive Benchmarking",
        text: "Test engineers evaluate laboratory dynamometer emissions and metric fuel flow rates against US federal standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Converting US MPG to mi/L requires dividing by 3.785412 (or multiplying by 0.264172).",
      "Using Imperial gallon constants: An Imperial gallon contains 4.54609 liters, not 3.785412 liters.",
      "Confusing mi/L with km/L: km/L values are 1.609344 times larger than mi/L values."
    ]
  },
  faqs: [
    {
      question: "How many Miles per Liter is 1 US MPG?",
      answer: "1 US MPG equals approximately 0.264172 Miles per Liter (1 / 3.785411784)."
    },
    {
      question: "What is the formula to convert US MPG to mi/L?",
      answer: "The formula is: mi/L = MPG (US) / 3.785411784 (or MPG (US) × 0.264172052)."
    },
    {
      question: "How many mi/L is 30 US MPG?",
      answer: "30 US MPG equals approximately 7.93 mi/L (30 / 3.785412 = 7.9252)."
    },
    {
      question: "How many mi/L is 40 US MPG?",
      answer: "40 US MPG equals approximately 10.57 mi/L (40 / 3.785412 = 10.5669)."
    },
    {
      question: "How do I convert 50 US MPG to mi/L?",
      answer: "Multiply 50 by 0.264172 to get 13.21 mi/L."
    },
    {
      question: "Why is the factor 0.264172?",
      answer: "0.264172052 is the reciprocal of 3.785411784, which is the exact number of liters in a US liquid gallon."
    },
    {
      question: "Is 8 mi/L equivalent to 30 US MPG?",
      answer: "Yes, 8 mi/L is approximately 30.28 US MPG, so 30 US MPG is about 7.93 mi/L."
    },
    {
      question: "How many mi/L is 25 US MPG?",
      answer: "25 US MPG equals approximately 6.60 mi/L (25 × 0.264172 = 6.6043)."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" }
  ]
};

// 3. Miles per Liter to MPG (UK)
export const milesPerLiterToMpgUk: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "mpg-uk",
  seoTitle: "Miles per Liter to MPG (UK) Converter (mi/L to Imperial MPG)",
  metaDescription: "Convert Miles per Liter to UK Imperial Miles per Gallon (mi/L to MPG UK) instantly. Exact 4.54609 multiplier, worked examples, tables, and FAQs.",
  h1: "Miles per Liter to MPG (UK) Converter",
  introduction: [
    "Miles per Liter (mi/L) and Imperial Miles per Gallon (UK MPG) are distance-per-volume measurements used to state automotive fuel economy. In the United Kingdom and Commonwealth nations, road distances are signed in statute miles, but petrol and diesel are sold in metric liters, making Miles per Liter an intuitive operational measurement.",
    "Because the British Imperial gallon is legally defined as exactly 4.54609 liters, one mile traveled on one liter of fuel corresponds to exactly 4.54609 miles on a full Imperial gallon. Therefore, multiplying any mi/L figure by 4.54609 yields its exact UK MPG value.",
    "This comprehensive guide details the conversion mathematics, provides real-world vehicle examples, offers quick-reference lookup tables, and answers common questions regarding British automotive standards."
  ],
  quickAnswer: {
    text: "To convert Miles per Liter [mi/L] to UK Imperial Miles per Gallon [MPG (UK)], multiply the mi/L value by 4.54609. For example, 10 mi/L equals approximately 45.46 UK MPG.",
    formulaDisplay: "MPG (UK) = mi/L × 4.54609",
    subtext: "1 Mile per Liter equals exactly 4.54609 UK Imperial Miles per Gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) measures statute miles traveled per metric liter of fuel consumed, frequently used for direct pump-to-odometer calculations in the UK."
  },
  aboutTargetUnit: {
    title: "Understanding MPG (UK)",
    text: "Imperial Miles per Gallon (UK MPG) is the official vehicle fuel economy metric in the United Kingdom, defined using the Imperial gallon (4.54609 liters)."
  },
  relationship: "Because 1 Imperial gallon equals exactly 4.54609 liters, traveling 1 mile on 1 liter translates to 4.54609 miles per Imperial gallon. Thus, MPG (UK) = mi/L × 4.54609.",
  relationshipTitle: "mi/L to UK MPG Efficiency Comparisons",
  relationshipItems: [
    { label: "6 mi/L", value: "27.28 MPG (UK) — Full-size SUV / 4x4" },
    { label: "8 mi/L", value: "36.37 MPG (UK) — Family estate / Crossover" },
    { label: "10 mi/L", value: "45.46 MPG (UK) — Compact diesel / petrol hatchback" },
    { label: "12 mi/L", value: "54.55 MPG (UK) — Efficient mild hybrid" },
    { label: "15 mi/L", value: "68.19 MPG (UK) — Full hybrid / plug-in hybrid" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in Miles per Liter by 4.54609 to obtain UK Miles per Gallon.",
    math: "MPG (UK) = mi/L × 4.54609",
    subtext: "To convert back from UK MPG to mi/L, divide by 4.54609 (or multiply by 0.219969)."
  },
  formulaTitle: "Miles per Liter to UK MPG Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate UK MPG from mi/L in your head, multiply the mi/L number by 4.55. For example, 10 mi/L × 4.55 = 45.5 UK MPG."
  },
  expertNote: {
    title: "Imperial Gallon Disparity",
    text: "An Imperial gallon is approximately 20.09% larger than a US liquid gallon, which is why UK MPG figures are proportionally higher than US MPG."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Compact Hatchback",
        subtitle: "Convert a fuel rating of 11.2 mi/L to UK MPG.",
        steps: [
          "Identify the mi/L value: 11.2 mi/L.",
          "Apply formula: MPG (UK) = 11.2 × 4.54609.",
          "Calculate: 11.2 × 4.54609 = 50.9162.",
          "Result: 11.2 mi/L equals approximately 50.92 UK MPG."
        ]
      },
      {
        title: "Example 2: Family Crossover",
        subtitle: "Convert 8.5 mi/L into UK MPG.",
        steps: [
          "Identify the rating: 8.5 mi/L.",
          "Multiply by 4.54609: 8.5 × 4.54609 = 38.6418.",
          "Result: 8.5 mi/L equals 38.64 UK MPG."
        ]
      },
      {
        title: "Example 3: Diesel Saloon",
        subtitle: "Convert 13.0 mi/L to UK MPG.",
        steps: [
          "Identify the value: 13.0 mi/L.",
          "Calculate: 13.0 × 4.54609 = 59.0992.",
          "Result: 13.0 mi/L equals 59.10 UK MPG."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to UK MPG Conversion Table",
    headers: ["Miles per Liter (mi/L)", "MPG (UK)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "4 mi/L", toVal: "18.18 MPG", extra: "High-Performance V8" },
      { fromVal: "6 mi/L", toVal: "27.28 MPG", extra: "Large SUV / 4WD" },
      { fromVal: "8 mi/L", toVal: "36.37 MPG", extra: "Midsize Saloon" },
      { fromVal: "10 mi/L", toVal: "45.46 MPG", extra: "Standard Hatchback" },
      { fromVal: "11 mi/L", toVal: "50.01 MPG", extra: "Efficient Turbo Petrol" },
      { fromVal: "12 mi/L", toVal: "54.55 MPG", extra: "Clean Diesel Hatchback" },
      { fromVal: "13 mi/L", toVal: "59.10 MPG", extra: "Mild Hybrid Saloon" },
      { fromVal: "14 mi/L", toVal: "63.65 MPG", extra: "Full Hybrid Car" },
      { fromVal: "15 mi/L", toVal: "68.19 MPG", extra: "Ultra-Efficient Hybrid" },
      { fromVal: "16 mi/L", toVal: "72.74 MPG", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to UK MPG",
    items: [
      {
        title: "UK Trip Cost Calculations",
        text: "British motorists track miles covered on odometer against fuel bought in liters, converting directly to official UK MPG."
      },
      {
        title: "Commercial Fleet Management",
        text: "UK logistics companies convert metric fuel telemetry into Imperial MPG for driver efficiency incentive programs."
      },
      {
        title: "Automotive Review Publications",
        text: "British automotive journalists converting real-world test tank fills in liters to standard UK consumer ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using the US gallon factor (3.785412) instead of the UK Imperial gallon factor (4.54609).",
      "Dividing instead of multiplying when converting mi/L to MPG (UK).",
      "Confusing statute miles with kilometers."
    ]
  },
  faqs: [
    {
      question: "How many UK MPG is 1 mi/L?",
      answer: "1 Mile per Liter equals exactly 4.54609 UK Imperial Miles per Gallon."
    },
    {
      question: "What is the formula to convert mi/L to UK MPG?",
      answer: "The formula is: MPG (UK) = mi/L × 4.54609."
    },
    {
      question: "How many UK MPG is 10 mi/L?",
      answer: "10 mi/L equals exactly 45.4609 UK MPG (approximately 45.46 MPG)."
    },
    {
      question: "Why is an Imperial gallon 4.54609 liters?",
      answer: "The Imperial gallon was defined in British law as the volume of 10 pounds of distilled water at 62°F, equaling exactly 4.54609 liters."
    },
    {
      question: "How do I convert UK MPG back to mi/L?",
      answer: "Divide the UK MPG value by 4.54609, or multiply by 0.219969."
    },
    {
      question: "How many UK MPG is 12 mi/L?",
      answer: "12 mi/L equals approximately 54.55 UK MPG (12 × 4.54609 = 54.5531)."
    },
    {
      question: "Is 50 UK MPG good fuel economy?",
      answer: "Yes, 50 UK MPG (about 11 mi/L) is very good fuel economy for a petrol or diesel passenger car."
    },
    {
      question: "What is 8 mi/L in UK MPG?",
      answer: "8 mi/L equals approximately 36.37 UK MPG (8 × 4.54609 = 36.3687)."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to Miles per Liter", from: "mpg-uk", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "Miles per Liter to km/L", from: "miles-per-liter", to: "km-per-liter" },
    { label: "Miles per Liter to L/100km", from: "miles-per-liter", to: "liters-per-100km" }
  ]
};

// 4. MPG (UK) to Miles per Liter
export const mpgUkToMilesPerLiter: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "miles-per-liter",
  seoTitle: "MPG (UK) to Miles per Liter Converter (Imperial MPG to mi/L)",
  metaDescription: "Convert UK Imperial Miles per Gallon to Miles per Liter (MPG UK to mi/L) instantly. Learn the 0.219969 conversion formula, calculation steps, tables, and FAQs.",
  h1: "MPG (UK) to Miles per Liter Converter",
  introduction: [
    "Imperial Miles per Gallon (UK MPG) and Miles per Liter (mi/L) quantify motor vehicle fuel economy based on international statute miles. While official UK vehicle specifications display fuel economy in Imperial MPG, petrol and diesel are priced and sold exclusively in liters at British fuel stations.",
    "Converting from UK MPG to Miles per Liter requires accounting for the exact volume of the Imperial gallon, which is legally defined as 4.54609 liters. Dividing any UK MPG rating by 4.54609 (or multiplying by 0.219969) yields the vehicle's exact performance in Miles per Liter.",
    "This guide covers the exact conversion formulas, worked examples for popular vehicle categories, reference tables, and answers to common UK automotive calculation questions."
  ],
  quickAnswer: {
    text: "To convert UK Imperial Miles per Gallon [MPG (UK)] to Miles per Liter [mi/L], multiply the UK MPG value by 0.219969 (or divide by 4.54609). For example, 45 UK MPG equals approximately 9.90 mi/L.",
    formulaDisplay: "mi/L = MPG (UK) / 4.54609 = MPG (UK) × 0.219969248",
    subtext: "1 UK Imperial MPG equals approximately 0.219969 Miles per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding UK Imperial MPG",
    text: "UK MPG is the official fuel economy rating in Great Britain, measuring statute miles per Imperial gallon (4.54609 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) expresses distance traveled in statute miles per metric liter of fuel consumed, aligning directly with liter-based fuel station pumps."
  },
  relationship: "Because 1 Imperial gallon contains exactly 4.54609 liters, an efficiency of 1 UK MPG translates to 1 mile traveled on 4.54609 liters, or 0.219969 mi/L. Hence, mi/L = MPG (UK) / 4.54609.",
  relationshipTitle: "UK MPG to mi/L Performance Ratings",
  relationshipItems: [
    { label: "30 MPG (UK)", value: "6.60 mi/L — Large petrol SUV / Performance estate" },
    { label: "40 MPG (UK)", value: "8.80 mi/L — Midsize family saloon" },
    { label: "50 MPG (UK)", value: "11.00 mi/L — Efficient turbo diesel / petrol" },
    { label: "60 MPG (UK)", value: "13.20 mi/L — Full hybrid passenger car" },
    { label: "70 MPG (UK)", value: "15.40 mi/L — Ultra-efficient plug-in hybrid" }
  ],
  formula: {
    text: "Divide UK Miles per Gallon by 4.54609 or multiply by 0.219969248 to calculate Miles per Liter.",
    math: "mi/L = MPG (UK) × 0.219969248",
    subtext: "To convert back from mi/L to UK MPG, multiply by 4.54609."
  },
  formulaTitle: "UK MPG to Miles per Liter Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate mi/L from UK MPG in your head, divide the UK MPG number by 4.55. For example, 45 UK MPG / 4.55 ≈ 9.9 mi/L."
  },
  expertNote: {
    title: "Proportional Scaling",
    text: "Both UK MPG and mi/L measure distance per volume, so higher numbers always indicate better fuel economy."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Diesel Estate",
        subtitle: "Convert a catalog rating of 52 MPG (UK) to mi/L.",
        steps: [
          "Identify the UK MPG rating: 52 MPG.",
          "Apply formula: mi/L = 52 / 4.54609.",
          "Calculate: 52 × 0.219969248 = 11.4384.",
          "Result: 52 UK MPG equals approximately 11.44 mi/L."
        ]
      },
      {
        title: "Example 2: Petrol Crossover",
        subtitle: "Convert 38 MPG (UK) into mi/L.",
        steps: [
          "Identify the rating: 38 MPG.",
          "Multiply by 0.219969: 38 × 0.219969248 = 8.3588.",
          "Result: 38 UK MPG equals 8.36 mi/L."
        ]
      },
      {
        title: "Example 3: Self-Charging Hybrid",
        subtitle: "Convert an official rating of 64 MPG (UK) to mi/L.",
        steps: [
          "Identify the value: 64 MPG.",
          "Calculate: 64 / 4.54609 = 14.0780.",
          "Result: 64 UK MPG equals 14.08 mi/L."
        ]
      }
    ]
  },
  table: {
    title: "UK MPG to Miles per Liter Conversion Table",
    headers: ["MPG (UK)", "Miles per Liter (mi/L)", "Vehicle Category"],
    rows: [
      { fromVal: "20 MPG", toVal: "4.40 mi/L", extra: "High-Performance V8" },
      { fromVal: "30 MPG", toVal: "6.60 mi/L", extra: "Full-Size SUV" },
      { fromVal: "35 MPG", toVal: "7.70 mi/L", extra: "Midsize Petrol Crossover" },
      { fromVal: "40 MPG", toVal: "8.80 mi/L", extra: "Family Saloon" },
      { fromVal: "45 MPG", toVal: "9.90 mi/L", extra: "Compact Hatchback" },
      { fromVal: "50 MPG", toVal: "11.00 mi/L", extra: "Efficient Turbo Diesel" },
      { fromVal: "55 MPG", toVal: "12.10 mi/L", extra: "Mild Hybrid Hatchback" },
      { fromVal: "60 MPG", toVal: "13.20 mi/L", extra: "Full Hybrid Sedan" },
      { fromVal: "65 MPG", toVal: "14.30 mi/L", extra: "Eco Hybrid Vehicle" },
      { fromVal: "70 MPG", toVal: "15.40 mi/L", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of UK MPG to mi/L",
    items: [
      {
        title: "Pump-to-Trip Budgeting in the UK",
        text: "British drivers buying petrol in liters convert car dashboard UK MPG to know how many miles each liter purchased will deliver."
      },
      {
        title: "Fleet Fuel Consumption Audits",
        text: "UK commercial transport operators cross-reference bulk metric fuel storage tank levels with odometer mileage records."
      },
      {
        title: "Automotive Performance Validation",
        text: "Engineers conducting real-world driving emissions (RDE) testing verify fuel flow meters calibrated in liters per hour."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing the UK Imperial gallon (4.54609 L) with the US liquid gallon (3.785412 L).",
      "Multiplying instead of dividing when converting UK MPG to mi/L.",
      "Confusing Miles per Liter with Kilometers per Liter."
    ]
  },
  faqs: [
    {
      question: "How many Miles per Liter is 1 UK MPG?",
      answer: "1 UK MPG equals approximately 0.219969 Miles per Liter (1 / 4.54609)."
    },
    {
      question: "What is the formula to convert UK MPG to mi/L?",
      answer: "The formula is: mi/L = MPG (UK) / 4.54609 = MPG (UK) × 0.219969248."
    },
    {
      question: "How many mi/L is 45 UK MPG?",
      answer: "45 UK MPG equals approximately 9.90 mi/L (45 / 4.54609 = 9.8986)."
    },
    {
      question: "How many mi/L is 50 UK MPG?",
      answer: "50 UK MPG equals approximately 11.00 mi/L (50 / 4.54609 = 10.9985)."
    },
    {
      question: "How do I convert 60 UK MPG to mi/L?",
      answer: "Multiply 60 by 0.219969 to get 13.20 mi/L."
    },
    {
      question: "Why is the factor 0.219969?",
      answer: "0.219969248 is the reciprocal of 4.54609, which is the exact number of liters in an Imperial gallon."
    },
    {
      question: "How many mi/L is 35 UK MPG?",
      answer: "35 UK MPG equals approximately 7.70 mi/L (35 × 0.219969 = 7.6989)."
    },
    {
      question: "Is 10 mi/L roughly 45 UK MPG?",
      answer: "Yes, 10 mi/L equals exactly 45.46 UK MPG."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" }
  ]
};

// 5. Miles per Liter to Kilometers per Liter
export const milesPerLiterToKmPerLiter: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "km-per-liter",
  seoTitle: "Miles per Liter to Kilometers per Liter Converter (mi/L to km/L)",
  metaDescription: "Convert Miles per Liter to Kilometers per Liter (mi/L to km/L) instantly. Exact 1.609344 conversion factor, worked examples, tables, and FAQs.",
  h1: "Miles per Liter to Kilometers per Liter Converter",
  introduction: [
    "Miles per Liter (mi/L) and Kilometers per Liter (km/L) are distance-per-volume fuel efficiency measurements that share the exact same metric unit of volume (the liter). The only difference between them is the unit of distance: international statute miles versus metric kilometers.",
    "By international agreement (the 1959 International Yard and Pound Agreement), one statute mile is defined as exactly 1.609344 kilometers. Consequently, one mile per liter equals exactly 1.609344 kilometers per liter. Converting from mi/L to km/L is as simple as multiplying by 1.609344.",
    "This guide explains the mathematical relationship between statute miles and kilometers in fuel efficiency, provides step-by-step calculation examples, and includes lookup tables and FAQs."
  ],
  quickAnswer: {
    text: "To convert Miles per Liter [mi/L] to Kilometers per Liter [km/L], multiply the mi/L value by 1.609344. For example, 10 mi/L equals exactly 16.09344 km/L.",
    formulaDisplay: "km/L = mi/L × 1.609344",
    subtext: "1 Mile per Liter equals exactly 1.609344 Kilometers per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) measures statute miles traveled per metric liter of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is the standard metric fuel economy unit in Japan, India, Brazil, and Latin America, expressing kilometers traveled per liter of fuel."
  },
  relationship: "Because 1 international statute mile is defined as exactly 1.609344 kilometers, a vehicle that travels 1 mile on 1 liter travels 1.609344 kilometers on that same liter. Therefore, km/L = mi/L × 1.609344.",
  relationshipTitle: "mi/L to km/L Fuel Efficiency Ratings",
  relationshipItems: [
    { label: "5 mi/L", value: "8.05 km/L — Full-size SUV / Heavy pickup" },
    { label: "8 mi/L", value: "12.87 km/L — Midsize sedan / Crossover" },
    { label: "10 mi/L", value: "16.09 km/L — Compact commuter car" },
    { label: "12 mi/L", value: "19.31 km/L — Efficient hybrid vehicle" },
    { label: "15 mi/L", value: "24.14 km/L — Ultra-efficient plug-in hybrid" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in Miles per Liter by 1.609344 to determine Kilometers per Liter.",
    math: "km/L = mi/L × 1.609344",
    subtext: "To convert back from km/L to mi/L, divide by 1.609344 (or multiply by 0.621371)."
  },
  formulaTitle: "Miles per Liter to km/L Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly convert mi/L to km/L in your head, multiply by 1.6. For example, 10 mi/L × 1.6 = 16 km/L."
  },
  expertNote: {
    title: "Identical Volume Basis",
    text: "Because both units share the liter as the volume base, the conversion factor is purely the distance conversion between miles and kilometers."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Hatchback",
        subtitle: "Convert 9.5 mi/L into Kilometers per Liter.",
        steps: [
          "Identify the mi/L rating: 9.5 mi/L.",
          "Apply formula: km/L = 9.5 × 1.609344.",
          "Calculate: 9.5 × 1.609344 = 15.288768.",
          "Result: 9.5 mi/L equals approximately 15.29 km/L."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert 7.8 mi/L into km/L.",
        steps: [
          "Identify the rating: 7.8 mi/L.",
          "Multiply by 1.609344: 7.8 × 1.609344 = 12.552883.",
          "Result: 7.8 mi/L equals 12.55 km/L."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle",
        subtitle: "Convert 14.0 mi/L into km/L.",
        steps: [
          "Identify the value: 14.0 mi/L.",
          "Calculate: 14.0 × 1.609344 = 22.530816.",
          "Result: 14.0 mi/L equals 22.53 km/L."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to km/L Conversion Table",
    headers: ["Miles per Liter (mi/L)", "Kilometers per Liter (km/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "4 mi/L", toVal: "6.44 km/L", extra: "Commercial Freight Truck" },
      { fromVal: "6 mi/L", toVal: "9.66 km/L", extra: "Full-Size V8 SUV" },
      { fromVal: "8 mi/L", toVal: "12.87 km/L", extra: "Family Sedan" },
      { fromVal: "10 mi/L", toVal: "16.09 km/L", extra: "Compact Hatchback" },
      { fromVal: "11 mi/L", toVal: "17.70 km/L", extra: "Efficient Subcompact" },
      { fromVal: "12 mi/L", toVal: "19.31 km/L", extra: "Mild Hybrid Car" },
      { fromVal: "13 mi/L", toVal: "20.92 km/L", extra: "Full Hybrid Sedan" },
      { fromVal: "14 mi/L", toVal: "22.53 km/L", extra: "High-Efficiency Hybrid" },
      { fromVal: "15 mi/L", toVal: "24.14 km/L", extra: "Plug-in Hybrid" },
      { fromVal: "16 mi/L", toVal: "25.75 km/L", extra: "Ultra-Lightweight Eco Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to km/L",
    items: [
      {
        title: "International Automotive Spec Comparison",
        text: "Comparing vehicle fuel economy data from UK/US publications with Japanese or Indian domestic market ratings in km/L."
      },
      {
        title: "Cross-Border Navigation Systems",
        text: "In-car digital displays converting odometer fuel economy when transitioning between mile-based and kilometer-based road networks."
      },
      {
        title: "Engineering Telematics",
        text: "Standardizing global vehicle fleet telemetry into SI metric kilometers per liter."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing instead of multiplying: Converting mi/L to km/L requires multiplying by 1.609344.",
      "Confusing km/L with L/100km: km/L is distance per volume, whereas L/100km is volume per distance.",
      "Rounding the factor too early: Use 1.609344 for engineering precision."
    ]
  },
  faqs: [
    {
      question: "How many km/L is 1 mi/L?",
      answer: "1 Mile per Liter equals exactly 1.609344 Kilometers per Liter."
    },
    {
      question: "What is the formula to convert mi/L to km/L?",
      answer: "The formula is: km/L = mi/L × 1.609344."
    },
    {
      question: "How many km/L is 10 mi/L?",
      answer: "10 mi/L equals exactly 16.09344 km/L."
    },
    {
      question: "How do I convert 8 mi/L to km/L?",
      answer: "Multiply 8 by 1.609344 to get 12.874752 km/L (approximately 12.87 km/L)."
    },
    {
      question: "How do I convert km/L back to mi/L?",
      answer: "Divide the km/L value by 1.609344, or multiply by 0.621371."
    },
    {
      question: "How many km/L is 12 mi/L?",
      answer: "12 mi/L equals approximately 19.31 km/L (12 × 1.609344 = 19.3121)."
    },
    {
      question: "Is 15 mi/L equivalent to 24 km/L?",
      answer: "Yes, 15 mi/L equals 24.14016 km/L (approximately 24.14 km/L)."
    },
    {
      question: "Why is the conversion factor 1.609344?",
      answer: "Because 1 international statute mile is defined as exactly 1.609344 kilometers."
    }
  ],
  relatedList: [
    { label: "Kilometers per Liter to Miles per Liter", from: "km-per-liter", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "Miles per Liter to L/100km", from: "miles-per-liter", to: "liters-per-100km" }
  ]
};

// 6. Kilometers per Liter to Miles per Liter
export const kmPerLiterToMilesPerLiter: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "miles-per-liter",
  seoTitle: "Kilometers per Liter to Miles per Liter Converter (km/L to mi/L)",
  metaDescription: "Convert Kilometers per Liter to Miles per Liter (km/L to mi/L) instantly. Learn the 0.621371 multiplier, step-by-step math, tables, and FAQs.",
  h1: "Kilometers per Liter to Miles per Liter Converter",
  introduction: [
    "Kilometers per Liter (km/L) and Miles per Liter (mi/L) are distance-per-volume automotive fuel economy metrics that share the same unit of volume (the metric liter). While km/L is standard in Asian and South American vehicle markets, mi/L is frequently used in countries where road distances are measured in statute miles.",
    "Since one kilometer is defined as exactly 1 / 1.609344 miles (approximately 0.621371192 miles), converting from km/L to mi/L is achieved by dividing by 1.609344 (or multiplying by 0.621371192).",
    "This guide provides the mathematical formula, detailed calculation examples for various automotive categories, reference tables, and answers to common conversion questions."
  ],
  quickAnswer: {
    text: "To convert Kilometers per Liter [km/L] to Miles per Liter [mi/L], multiply the km/L value by 0.621371 (or divide by 1.609344). For example, 15 km/L equals approximately 9.32 mi/L.",
    formulaDisplay: "mi/L = km/L / 1.609344 = km/L × 0.621371192",
    subtext: "1 Kilometer per Liter equals approximately 0.621371 Miles per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is a metric fuel efficiency unit indicating how many kilometers a vehicle travels per liter of fuel, widely used across Japan, India, and Latin America."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) measures statute miles traveled per metric liter of fuel consumed, common for direct pump-to-mileage calculations in mile-based jurisdictions."
  },
  relationship: "Since 1 kilometer equals 0.621371192 statute miles, traveling 1 kilometer on 1 liter equals traveling 0.621371192 miles on that same liter. Therefore, mi/L = km/L / 1.609344.",
  relationshipTitle: "km/L to mi/L Benchmarks",
  relationshipItems: [
    { label: "10 km/L", value: "6.21 mi/L — Midsize crossover / AWD vehicle" },
    { label: "14 km/L", value: "8.70 mi/L — Compact family sedan" },
    { label: "18 km/L", value: "11.18 mi/L — Efficient subcompact car" },
    { label: "22 km/L", value: "13.67 mi/L — Modern full hybrid car" },
    { label: "26 km/L", value: "16.16 mi/L — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide Kilometers per Liter by 1.609344 or multiply by 0.621371192 to obtain Miles per Liter.",
    math: "mi/L = km/L × 0.621371192",
    subtext: "To convert back from mi/L to km/L, multiply by 1.609344."
  },
  formulaTitle: "Kilometers per Liter to mi/L Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate mi/L from km/L in your head, multiply the km/L number by 0.62. For example, 10 km/L × 0.62 ≈ 6.2 mi/L."
  },
  expertNote: {
    title: "Proportional Advantage",
    text: "Because both metrics are distance per volume, higher values always indicate greater fuel efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Japanese Import Sedan",
        subtitle: "Convert a catalog rating of 16.5 km/L to Miles per Liter.",
        steps: [
          "Identify the km/L rating: 16.5 km/L.",
          "Apply formula: mi/L = 16.5 / 1.609344.",
          "Calculate: 16.5 × 0.621371192 = 10.252625.",
          "Result: 16.5 km/L equals approximately 10.25 mi/L."
        ]
      },
      {
        title: "Example 2: Commuter Hatchback",
        subtitle: "Convert 20.0 km/L into mi/L.",
        steps: [
          "Identify the rating: 20.0 km/L.",
          "Multiply by 0.621371: 20.0 × 0.621371192 = 12.427424.",
          "Result: 20.0 km/L equals 12.43 mi/L."
        ]
      },
      {
        title: "Example 3: Compact SUV",
        subtitle: "Convert 12.4 km/L into mi/L.",
        steps: [
          "Identify the value: 12.4 km/L.",
          "Calculate: 12.4 / 1.609344 = 7.705003.",
          "Result: 12.4 km/L equals 7.71 mi/L."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to mi/L Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "Miles per Liter (mi/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "6 km/L", toVal: "3.73 mi/L", extra: "Heavy Commercial Truck" },
      { fromVal: "8 km/L", toVal: "4.97 mi/L", extra: "Full-Size V8 SUV" },
      { fromVal: "10 km/L", toVal: "6.21 mi/L", extra: "Midsize Crossover" },
      { fromVal: "12 km/L", toVal: "7.46 mi/L", extra: "Family Sedan" },
      { fromVal: "14 km/L", toVal: "8.70 mi/L", extra: "Compact Hatchback" },
      { fromVal: "16 km/L", toVal: "9.94 mi/L", extra: "Subcompact Car" },
      { fromVal: "18 km/L", toVal: "11.18 mi/L", extra: "Mild Hybrid Car" },
      { fromVal: "20 km/L", toVal: "12.43 mi/L", extra: "Full Hybrid Sedan" },
      { fromVal: "22 km/L", toVal: "13.67 mi/L", extra: "High-Efficiency Hybrid" },
      { fromVal: "25 km/L", toVal: "15.53 mi/L", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of km/L to mi/L",
    items: [
      {
        title: "Evaluating Japanese & Asian Vehicle Exports",
        text: "Car buyers in the UK and US importing vehicles from Japan or South Korea convert catalog km/L specs into Miles per Liter."
      },
      {
        title: "International Motoring Analysis",
        text: "Tourists and expats driving vehicles with metric dashboards in mile-signed countries convert efficiency metrics."
      },
      {
        title: "Automotive Benchmarking",
        text: "Engineers comparing fuel consumption models across international metric and statute test procedures."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1.609344 instead of dividing: Converting km/L to mi/L requires dividing by 1.609344.",
      "Confusing mi/L with MPG: mi/L is miles per single liter, whereas MPG is miles per gallon (3.785 L or 4.546 L).",
      "Confusing km/L with L/100km."
    ]
  },
  faqs: [
    {
      question: "How many Miles per Liter is 1 km/L?",
      answer: "1 Kilometer per Liter equals approximately 0.621371 Miles per Liter."
    },
    {
      question: "What is the formula to convert km/L to mi/L?",
      answer: "The formula is: mi/L = km/L / 1.609344 = km/L × 0.621371192."
    },
    {
      question: "How many mi/L is 15 km/L?",
      answer: "15 km/L equals approximately 9.32 mi/L (15 × 0.621371 = 9.32057)."
    },
    {
      question: "How many mi/L is 20 km/L?",
      answer: "20 km/L equals approximately 12.43 mi/L (20 × 0.621371 = 12.4274)."
    },
    {
      question: "How do I convert 10 km/L to mi/L?",
      answer: "Multiply 10 by 0.621371 to get 6.21 mi/L."
    },
    {
      question: "Why is the factor 0.621371?",
      answer: "0.621371192 is the reciprocal of 1.609344, which is the number of kilometers in one international statute mile."
    },
    {
      question: "How many mi/L is 12 km/L?",
      answer: "12 km/L equals approximately 7.46 mi/L (12 × 0.621371 = 7.4565)."
    },
    {
      question: "Does 16 km/L equal nearly 10 mi/L?",
      answer: "Yes, 16 km/L equals 9.94 mi/L, which is nearly 10 mi/L."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to Kilometers per Liter", from: "miles-per-liter", to: "km-per-liter" },
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "km/L to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "km/L to L/100km", from: "km-per-liter", to: "liters-per-100km" }
  ]
};

// 7. Miles per Liter to Liters per 100km
export const milesPerLiterToLitersPer100km: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "liters-per-100km",
  seoTitle: "Miles per Liter to Liters per 100km Converter (mi/L to L/100km)",
  metaDescription: "Convert Miles per Liter to Liters per 100 Kilometers (mi/L to L/100km) with the inverse 62.1371 formula, calculation steps, charts, and FAQs.",
  h1: "Miles per Liter to Liters per 100km Converter",
  introduction: [
    "Miles per Liter (mi/L) and Liters per 100 Kilometers (L/100km) represent two fundamentally different philosophies of vehicle fuel measurement. Miles per Liter is an efficiency metric (distance traveled per unit fuel), whereas Liters per 100km is a consumption metric (volume of fuel required to travel a standard 100-kilometer distance).",
    "Because efficiency and consumption are inversely related, converting between them requires an inverse reciprocal formula. Traveling 100 kilometers requires 100 / (mi/L × 1.609344) liters of fuel, which simplifies directly to the constant 62.13711922 divided by the mi/L value.",
    "This guide provides the mathematical derivation of the inverse conversion factor, step-by-step calculations for modern passenger cars, lookup tables, and answers to common engineering questions."
  ],
  quickAnswer: {
    text: "To convert Miles per Liter [mi/L] to Liters per 100km [L/100km], divide 62.137119 by the mi/L value. For example, a vehicle achieving 10 mi/L consumes approximately 6.21 L/100km.",
    formulaDisplay: "L/100km = 62.13711922 / mi/L",
    subtext: "Inverse conversion: Higher mi/L results in a lower, more efficient L/100km rating."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) is a distance-per-volume efficiency metric measuring statute miles traveled per metric liter of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) is the standard metric fuel consumption metric used throughout Europe, Canada, and Australia, indicating fuel volume consumed per 100 km."
  },
  relationship: "Since 1 mile = 1.609344 km, a vehicle achieving M mi/L travels 1.609344 × M kilometers per liter. To cover 100 km, it requires 100 / (1.609344 × M) = 62.13711922 / M liters. Thus, L/100km = 62.13711922 / mi/L.",
  relationshipTitle: "mi/L to L/100km Benchmark Comparisons",
  relationshipItems: [
    { label: "5 mi/L", value: "12.43 L/100km — Full-size SUV / Heavy commercial vehicle" },
    { label: "8 mi/L", value: "7.77 L/100km — Midsize family sedan" },
    { label: "10 mi/L", value: "6.21 L/100km — Compact passenger car" },
    { label: "12 mi/L", value: "5.18 L/100km — Efficient hybrid vehicle" },
    { label: "15 mi/L", value: "4.14 L/100km — Ultra-efficient plug-in hybrid" }
  ],
  formula: {
    text: "Divide 62.13711922 by the fuel efficiency in Miles per Liter to obtain Liters per 100 Kilometers.",
    math: "L/100km = 62.13711922 / mi/L",
    subtext: "To convert back from L/100km to mi/L, divide 62.13711922 by the L/100km value."
  },
  formulaTitle: "Miles per Liter to L/100km Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate L/100km from mi/L in your head, divide 62.1 by the mi/L value. For example, 62.1 / 10 mi/L = 6.21 L/100km."
  },
  expertNote: {
    title: "Inverse Relationship Caution",
    text: "Unlike distance-per-volume metrics where higher numbers are better, with L/100km lower numbers represent superior fuel efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Hatchback",
        subtitle: "Convert a rating of 9.2 mi/L to Liters per 100km.",
        steps: [
          "Identify the mi/L rating: 9.2 mi/L.",
          "Apply inverse formula: L/100km = 62.13711922 / 9.2.",
          "Calculate: 62.13711922 / 9.2 = 6.754035.",
          "Result: 9.2 mi/L equals approximately 6.75 L/100km."
        ]
      },
      {
        title: "Example 2: Efficient Hybrid Car",
        subtitle: "Convert 13.5 mi/L into L/100km.",
        steps: [
          "Identify the rating: 13.5 mi/L.",
          "Divide 62.137119: 62.13711922 / 13.5 = 4.602749.",
          "Result: 13.5 mi/L equals 4.60 L/100km."
        ]
      },
      {
        title: "Example 3: Heavy SUV",
        subtitle: "Convert 6.0 mi/L into L/100km.",
        steps: [
          "Identify the value: 6.0 mi/L.",
          "Calculate: 62.13711922 / 6.0 = 10.356186.",
          "Result: 6.0 mi/L equals 10.36 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to L/100km Conversion Table",
    headers: ["Miles per Liter (mi/L)", "Liters per 100km (L/100km)", "Fuel Consumption Rating"],
    rows: [
      { fromVal: "4 mi/L", toVal: "15.53 L/100km", extra: "Very High Fuel Consumption" },
      { fromVal: "6 mi/L", toVal: "10.36 L/100km", extra: "High Consumption (Large SUV)" },
      { fromVal: "8 mi/L", toVal: "7.77 L/100km", extra: "Moderate (Midsize Sedan)" },
      { fromVal: "10 mi/L", toVal: "6.21 L/100km", extra: "Good (Compact Car)" },
      { fromVal: "12 mi/L", toVal: "5.18 L/100km", extra: "Very Good (Mild Hybrid)" },
      { fromVal: "14 mi/L", toVal: "4.44 L/100km", extra: "Excellent (Full Hybrid)" },
      { fromVal: "16 mi/L", toVal: "3.88 L/100km", extra: "Superior (Plug-in Hybrid)" },
      { fromVal: "18 mi/L", toVal: "3.45 L/100km", extra: "Ultra-Low Consumption" },
      { fromVal: "20 mi/L", toVal: "3.11 L/100km", extra: "Eco Prototype / Supermini" },
      { fromVal: "25 mi/L", toVal: "2.49 L/100km", extra: "Plug-in Hybrid Eco Benchmark" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to L/100km",
    items: [
      {
        title: "European Vehicle Imports",
        text: "Comparing vehicle fuel economy figures from UK/US publications with European WLTP consumer consumption specifications."
      },
      {
        title: "International Fleet Fuel Budgeting",
        text: "Multinational logistics operators converting metric tank fuel flow data into standard L/100km reporting benchmarks."
      },
      {
        title: "Automotive Environmental Auditing",
        text: "Calculating direct tailpipe carbon dioxide emissions (g CO2/km), which are linearly proportional to L/100km consumption."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Because this is an inverse relationship, you must divide the constant 62.137119 by mi/L.",
      "Assuming higher L/100km is better: Lower L/100km values indicate lower fuel consumption and superior efficiency.",
      "Confusing L/100km with km/L."
    ]
  },
  faqs: [
    {
      question: "How do I convert mi/L to L/100km?",
      answer: "Divide 62.13711922 by the Miles per Liter value. For example, 62.137119 / 10 = 6.21 L/100km."
    },
    {
      question: "What is the formula to convert mi/L to L/100km?",
      answer: "The formula is: L/100km = 62.13711922 / mi/L."
    },
    {
      question: "Why is the conversion factor 62.137119?",
      answer: "Because 100 kilometers divided by 1.609344 kilometers per mile equals 62.13711922 miles."
    },
    {
      question: "How many L/100km is 10 mi/L?",
      answer: "10 mi/L equals approximately 6.21 L/100km (62.137119 / 10 = 6.2137)."
    },
    {
      question: "How many L/100km is 15 mi/L?",
      answer: "15 mi/L equals approximately 4.14 L/100km (62.137119 / 15 = 4.1425)."
    },
    {
      question: "How many L/100km is 8 mi/L?",
      answer: "8 mi/L equals approximately 7.77 L/100km (62.137119 / 8 = 7.7671)."
    },
    {
      question: "Is 5 L/100km better than 7 L/100km?",
      answer: "Yes, 5 L/100km represents lower fuel consumption and superior fuel efficiency compared to 7 L/100km."
    },
    {
      question: "How do I convert L/100km back to mi/L?",
      answer: "Divide 62.13711922 by the L/100km value."
    }
  ],
  relatedList: [
    { label: "Liters per 100km to Miles per Liter", from: "liters-per-100km", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "Miles per Liter to km/L", from: "miles-per-liter", to: "km-per-liter" }
  ]
};

// 8. Liters per 100km to Miles per Liter
export const litersPer100kmToMilesPerLiter: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "miles-per-liter",
  seoTitle: "Liters per 100km to Miles per Liter Converter (L/100km to mi/L)",
  metaDescription: "Convert Liters per 100 Kilometers to Miles per Liter (L/100km to mi/L) instantly. Inverse 62.1371 formula, step-by-step math, tables, and FAQs.",
  h1: "Liters per 100km to Miles per Liter Converter",
  introduction: [
    "Liters per 100 Kilometers (L/100km) and Miles per Liter (mi/L) measure automobile fuel performance from inverse mathematical viewpoints. Liters per 100km is the international metric consumption standard measuring fuel volume per fixed distance, while Miles per Liter expresses distance covered per unit volume of fuel.",
    "Because volume-per-distance and distance-per-volume are mathematically reciprocal, converting between them requires dividing the fundamental conversion constant (62.13711922) by the L/100km consumption rate.",
    "This guide provides complete formula derivations, step-by-step conversion examples for various car types, quick lookup tables, and answers to frequently asked automotive questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers [L/100km] to Miles per Liter [mi/L], divide 62.137119 by the L/100km value. For example, a car consuming 7.0 L/100km achieves approximately 8.88 mi/L.",
    formulaDisplay: "mi/L = 62.13711922 / (L/100km)",
    subtext: "Inverse conversion: A lower L/100km consumption rating yields a higher mi/L efficiency."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) measures the volume of fuel in liters needed to travel 100 kilometers, standard throughout Europe, Australia, and Canada."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per Liter (mi/L) measures statute miles covered per liter of fuel, combining statute distance with metric volume."
  },
  relationship: "Because 100 km equals 62.13711922 miles, consuming L liters over 100 km means traveling 62.13711922 miles on L liters, yielding 62.13711922 / L miles per liter. Therefore, mi/L = 62.13711922 / (L/100km).",
  relationshipTitle: "L/100km to mi/L Efficiency Ratings",
  relationshipItems: [
    { label: "12.0 L/100km", value: "5.18 mi/L — Large SUV / V8 truck" },
    { label: "8.0 L/100km", value: "7.77 mi/L — Midsize crossover / sedan" },
    { label: "6.0 L/100km", value: "10.36 mi/L — Compact commuter car" },
    { label: "4.5 L/100km", value: "13.81 mi/L — Full hybrid vehicle" },
    { label: "3.5 L/100km", value: "17.75 mi/L — Plug-in hybrid / eco commuter" }
  ],
  formula: {
    text: "Divide 62.13711922 by the fuel consumption in Liters per 100km to calculate Miles per Liter.",
    math: "mi/L = 62.13711922 / (L/100km)",
    subtext: "To convert back from mi/L to L/100km, divide 62.13711922 by the mi/L value."
  },
  formulaTitle: "L/100km to Miles per Liter Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To estimate mi/L from L/100km in your head, divide 62.1 by the L/100km number. For example, 62.1 / 6.0 L/100km ≈ 10.35 mi/L."
  },
  expertNote: {
    title: "Inverse Nature Reminder",
    text: "When comparing L/100km numbers, a 20% reduction in L/100km produces a 25% increase in mi/L efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Compact Car",
        subtitle: "Convert an official WLTP rating of 5.5 L/100km to Miles per Liter.",
        steps: [
          "Identify the L/100km rating: 5.5 L/100km.",
          "Apply formula: mi/L = 62.13711922 / 5.5.",
          "Calculate: 62.13711922 / 5.5 = 11.297658.",
          "Result: 5.5 L/100km equals approximately 11.30 mi/L."
        ]
      },
      {
        title: "Example 2: Crossover Vehicle",
        subtitle: "Convert a rating of 7.8 L/100km into mi/L.",
        steps: [
          "Identify the rating: 7.8 L/100km.",
          "Divide 62.137119: 62.13711922 / 7.8 = 7.966297.",
          "Result: 7.8 L/100km equals 7.97 mi/L."
        ]
      },
      {
        title: "Example 3: High-Efficiency Hybrid",
        subtitle: "Convert 4.2 L/100km into mi/L.",
        steps: [
          "Identify the value: 4.2 L/100km.",
          "Calculate: 62.13711922 / 4.2 = 14.794552.",
          "Result: 4.2 L/100km equals 14.79 mi/L."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to mi/L Conversion Table",
    headers: ["Liters per 100km (L/100km)", "Miles per Liter (mi/L)", "Vehicle Efficiency Context"],
    rows: [
      { fromVal: "14.0 L/100km", toVal: "4.44 mi/L", extra: "Heavy Duty Commercial Truck" },
      { fromVal: "12.0 L/100km", toVal: "5.18 mi/L", extra: "Full-Size V8 SUV" },
      { fromVal: "10.0 L/100km", toVal: "6.21 mi/L", extra: "Large Sedan / Crossover" },
      { fromVal: "8.0 L/100km", toVal: "7.77 mi/L", extra: "Family Hatchback" },
      { fromVal: "7.0 L/100km", toVal: "8.88 mi/L", extra: "Modern Compact Sedan" },
      { fromVal: "6.0 L/100km", toVal: "10.36 mi/L", extra: "Efficient Subcompact" },
      { fromVal: "5.0 L/100km", toVal: "12.43 mi/L", extra: "Mild Hybrid Car" },
      { fromVal: "4.5 L/100km", toVal: "13.81 mi/L", extra: "Full Hybrid Sedan" },
      { fromVal: "4.0 L/100km", toVal: "15.53 mi/L", extra: "High-Efficiency Hybrid" },
      { fromVal: "3.0 L/100km", toVal: "20.71 mi/L", extra: "Plug-in Hybrid Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100km to mi/L",
    items: [
      {
        title: "European Vehicle Evaluation",
        text: "Car buyers in mile-signed jurisdictions importing European cars convert WLTP L/100km window ratings into Miles per Liter."
      },
      {
        title: "Cross-Border Journey Planning",
        text: "Drivers traveling through continental Europe convert car consumption trip displays to estimate distance achievable per fuel tank refill."
      },
      {
        title: "Fleet Consumption Audits",
        text: "Fleet controllers converting standardized European consumption metrics into statute mile driver performance statistics."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 62.137119 instead of dividing: Converting L/100km to mi/L requires dividing 62.137119 by L/100km.",
      "Confusing L/100km with km/L: km/L is 100 / (L/100km), while mi/L is 62.137119 / (L/100km).",
      "Assuming a higher L/100km indicates better performance: Lower L/100km indicates lower consumption and greater efficiency."
    ]
  },
  faqs: [
    {
      question: "How do I convert L/100km to mi/L?",
      answer: "Divide 62.13711922 by the L/100km value. For example, 62.137119 / 6.0 = 10.36 mi/L."
    },
    {
      question: "What is the formula to convert L/100km to mi/L?",
      answer: "The formula is: mi/L = 62.13711922 / (L/100km)."
    },
    {
      question: "How many mi/L is 6.0 L/100km?",
      answer: "6.0 L/100km equals approximately 10.36 mi/L (62.137119 / 6.0 = 10.3562)."
    },
    {
      question: "How many mi/L is 5.0 L/100km?",
      answer: "5.0 L/100km equals approximately 12.43 mi/L (62.137119 / 5.0 = 12.4274)."
    },
    {
      question: "How many mi/L is 8.0 L/100km?",
      answer: "8.0 L/100km equals approximately 7.77 mi/L (62.137119 / 8.0 = 7.7671)."
    },
    {
      question: "Why is the numerator 62.137119?",
      answer: "Because 100 kilometers equals exactly 62.13711922 statute miles."
    },
    {
      question: "How many mi/L is 4.0 L/100km?",
      answer: "4.0 L/100km equals approximately 15.53 mi/L (62.137119 / 4.0 = 15.5343)."
    },
    {
      question: "Is 10 mi/L good compared to 6.0 L/100km?",
      answer: "Yes, 10 mi/L corresponds to 6.21 L/100km, which is very close to 6.0 L/100km and indicates great fuel economy."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to Liters per 100km", from: "miles-per-liter", to: "liters-per-100km" },
    { label: "Liters per 100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "Liters per 100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "Liters per 100km to km/L", from: "liters-per-100km", to: "km-per-liter" }
  ]
};
