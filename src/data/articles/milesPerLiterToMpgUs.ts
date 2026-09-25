import { CustomArticleData } from "./types";

export const milesPerLiterToMpgUs: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "mpg-us",
  seoTitle: "Miles per Liter to MPG (US) Converter (mi/L to MPG)",
  metaDescription: "Convert Miles per Liter to US Miles per Gallon (mi/L to MPG US). Exact 3.785412 multiplier, step-by-step calculations, vehicle tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/miles-per-liter-to-mpg-us",
  h1: "Miles per Liter to MPG (US) Converter",
  introduction: [
    "Miles per liter (mi/L) and US miles per gallon (MPG US) quantify automotive fuel economy by measuring the distance a vehicle travels on a specific quantity of fuel. While miles per liter combines statute miles with metric liter pump volumes, US MPG remains the federal benchmark established by the Environmental Protection Agency (EPA) for window stickers and fuel economy standards.",
    "Converting miles per liter to US MPG involves a direct linear calculation because both metrics share statute miles in the numerator. Under international standards, one US liquid gallon equals exactly 231 cubic inches or 3.785411784 liters. Therefore, traveling one mile on one liter means you can cover 3.785411784 miles on a full US gallon.",
    "This guide explains the mathematical conversion between mi/L and US MPG, provides worked examples across various passenger vehicles, features an exhaustive reference table, explores practical automotive applications, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert miles per liter (mi/L) to US miles per gallon (MPG US), multiply the mi/L figure by 3.785412. For instance, a vehicle that achieves 8 mi/L delivers approximately 30.28 MPG (US).",
    formulaDisplay: "MPG (US) = mi/L × 3.785411784",
    subtext: "1 mile per liter equals exactly 3.785411784 US miles per gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a hybrid fuel efficiency metric indicating the number of international statute miles (1,609.344 meters) a vehicle travels per metric liter (0.001 m³) of fuel. It is frequently calculated by motorists in countries where speed limits are posted in miles per hour but service stations dispense fuel in liters."
  },
  aboutTargetUnit: {
    title: "Understanding US Miles per Gallon (MPG US)",
    text: "US miles per gallon (symbol: MPG or mpg US) is the official automotive fuel economy rating in the United States. It specifies statute miles covered per standard US liquid gallon (3.785411784 liters). Higher numerical ratings indicate superior fuel economy."
  },
  relationship: "Because one US liquid gallon contains exactly 3.785411784 liters, a vehicle traveling a certain distance on one liter will travel 3.785411784 times that distance on one full US gallon. Consequently, MPG (US) = mi/L × 3.785411784. Conversely, 1 MPG (US) = 0.264172 mi/L.",
  relationshipTitle: "Miles per Liter to US MPG Benchmarks",
  relationshipItems: [
    { label: "4.0 mi/L", value: "15.14 MPG (US) — Full-size commercial van / V8 pickup" },
    { label: "7.0 mi/L", value: "26.50 MPG (US) — Midsize all-wheel-drive crossover" },
    { label: "9.0 mi/L", value: "34.07 MPG (US) — Compact 4-cylinder commuter sedan" },
    { label: "12.0 mi/L", value: "45.42 MPG (US) — Modern full hybrid passenger car" },
    { label: "15.0 mi/L", value: "56.78 MPG (US) — High-efficiency plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in miles per liter by 3.785411784 to find US miles per gallon.",
    math: "MPG_US = mi_per_L * 3.785411784",
    subtext: "To reverse the conversion: mi/L = MPG (US) ÷ 3.785411784 (or MPG × 0.264172)"
  },
  formulaTitle: "Miles per Liter to US MPG Formula",
  practicalTip: {
    title: "The 3.8 Mental Estimation Factor",
    text: "For quick calculations at the pump, multiply the miles per liter figure by 3.8. For example, 10 mi/L × 3.8 = 38 MPG (US), which is within 0.4% of the exact figure of 37.85 MPG."
  },
  expertNote: {
    title: "Direct Distance Proportionality",
    text: "Unlike Liters per 100km where lower numbers mean better economy, both mi/L and US MPG are distance-over-volume metrics. A higher number always signifies superior fuel efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Hatchback Highway Mileage",
        subtitle: "Convert 8.4 mi/L into US miles per gallon.",
        steps: [
          "Identify the fuel economy figure: 8.4 mi/L.",
          "Apply the conversion factor: MPG (US) = 8.4 × 3.785411784.",
          "Compute: 8.4 × 3.785411784 = 31.7975 MPG.",
          "Result: 8.4 mi/L equals approximately 31.80 US MPG."
        ]
      },
      {
        title: "Example 2: Full Hybrid Commuter Sedan",
        subtitle: "Convert 13.5 mi/L into US miles per gallon.",
        steps: [
          "State the fuel economy: 13.5 mi/L.",
          "Multiply by 3.785412: 13.5 × 3.785411784 = 51.1031 MPG.",
          "Result: 13.5 mi/L equals approximately 51.10 US MPG."
        ]
      },
      {
        title: "Example 3: Light Commercial Delivery Van",
        subtitle: "Convert 6.2 mi/L into US miles per gallon.",
        steps: [
          "Identify the rating: 6.2 mi/L.",
          "Calculate: 6.2 × 3.785411784 = 23.4696 MPG.",
          "Result: 6.2 mi/L corresponds to approximately 23.47 US MPG."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to US MPG Conversion Table",
    headers: ["Miles per Liter (mi/L)", "US MPG (mpg US)", "UK MPG (mpg Imp)", "Typical Vehicle Category"],
    rows: [
      { fromVal: "3.0 mi/L", toVal: "11.36 MPG", extra: "13.64 MPG", extra2: "Heavy commercial truck" },
      { fromVal: "4.0 mi/L", toVal: "15.14 MPG", extra: "18.18 MPG", extra2: "Full-size V8 SUV or pickup" },
      { fromVal: "5.0 mi/L", toVal: "18.93 MPG", extra: "22.73 MPG", extra2: "Midsize 6-cylinder crossover" },
      { fromVal: "6.0 mi/L", toVal: "22.71 MPG", extra: "27.28 MPG", extra2: "Compact SUV in city traffic" },
      { fromVal: "7.0 mi/L", toVal: "26.50 MPG", extra: "31.82 MPG", extra2: "Midsize sedan mixed driving" },
      { fromVal: "8.0 mi/L", toVal: "30.28 MPG", extra: "36.37 MPG", extra2: "Compact commuter hatchback" },
      { fromVal: "9.0 mi/L", toVal: "34.07 MPG", extra: "40.91 MPG", extra2: "Subcompact highway commuter" },
      { fromVal: "10.0 mi/L", toVal: "37.85 MPG", extra: "45.46 MPG", extra2: "Modern efficient 4-cylinder car" },
      { fromVal: "11.0 mi/L", toVal: "41.64 MPG", extra: "50.01 MPG", extra2: "Mild hybrid family sedan" },
      { fromVal: "12.0 mi/L", toVal: "45.42 MPG", extra: "54.55 MPG", extra2: "Dedicated full hybrid vehicle" },
      { fromVal: "14.0 mi/L", toVal: "53.00 MPG", extra: "63.65 MPG", extra2: "Aerodynamic hybrid on flat highway" },
      { fromVal: "16.0 mi/L", toVal: "60.57 MPG", extra: "72.74 MPG", extra2: "Plug-in hybrid electric eco mode" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to US MPG Conversion",
    items: [
      {
        title: "Cross-Border Driving and Fuel Receipts",
        text: "Motorists driving US-registered vehicles in Mexico or Canada can divide odometer trip miles by the liters pumped, then convert to US MPG to verify fuel economy against their vehicle window sticker."
      },
      {
        title: "Fleet Telematics and Fuel Accounting",
        text: "Logistics companies operating cross-border commercial fleets reconcile fuel tank sensor telemetry measured in liters against GPS mileage logs to report EPA-compliant US MPG metrics."
      },
      {
        title: "Automotive Dyno Testing and Engine Mapping",
        text: "Dyno test benches measure gravimetric fuel mass flow in liters per minute. Test engineers convert output into mi/L and scale to US MPG to evaluate combustion efficiency under EPA drive cycles."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Confusing US gallons with UK Imperial gallons: 1 US gallon is 3.785412 L, while 1 UK gallon is 4.54609 L. Using the UK factor overstates US fuel economy by roughly 20%.",
      "Dividing instead of multiplying: 1 US gallon contains nearly 3.8 liters, so the MPG figure must always be larger than the mi/L figure.",
      "Confusing miles per liter with kilometers per liter: 1 mi/L equals 1.609344 km/L. Never treat miles and kilometers as interchangeable distance units."
    ]
  },
  faqs: [
    {
      question: "How many US MPG are in 1 mile per liter?",
      answer: "There are exactly 3.785411784 US miles per gallon in 1 mile per liter."
    },
    {
      question: "What is the formula to convert mi/L to US MPG?",
      answer: "The formula is: MPG (US) = miles per liter × 3.785411784."
    },
    {
      question: "How do I convert 10 mi/L to US MPG?",
      answer: "Multiply 10 by 3.785412 to get 37.8541 US MPG (approximately 37.85 MPG)."
    },
    {
      question: "Why is the conversion factor 3.785412?",
      answer: "The factor represents the exact legal volume of one US liquid gallon in liters (231 cubic inches = 3.785411784 liters)."
    },
    {
      question: "What is 8 mi/L in US MPG?",
      answer: "8 mi/L × 3.785412 = 30.2833 US MPG (approximately 30.28 MPG)."
    },
    {
      question: "How do I convert US MPG back to mi/L?",
      answer: "Divide the US MPG value by 3.785412, or multiply by 0.264172."
    },
    {
      question: "Is 12 mi/L considered good fuel economy?",
      answer: "Yes, 12 mi/L equals approximately 45.42 US MPG, which indicates outstanding fuel economy typical of modern full-hybrid vehicles."
    },
    {
      question: "How does mi/L compare to UK MPG?",
      answer: "Because an Imperial gallon is larger (4.54609 L vs 3.785412 L), 1 mi/L equals 4.54609 UK MPG, compared to 3.785412 US MPG."
    }
  ],
  relatedList: [
    { label: "MPG (US) to Miles per Liter", from: "mpg-us", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "Miles per Liter to Kilometers per Liter", from: "miles-per-liter", to: "km-per-liter" },
    { label: "Miles per Liter to Liters per 100km", from: "miles-per-liter", to: "liters-per-100km" },
    { label: "Kilometers per Gallon (US) to MPG (US)", from: "km-per-gallon-us", to: "mpg-us" }
  ],
  references: [
    "EPA (U.S. Environmental Protection Agency) - Regulations for Fuel Economy Labeling.",
    "NIST Handbook 44 - Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices.",
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time."
  ]
};
