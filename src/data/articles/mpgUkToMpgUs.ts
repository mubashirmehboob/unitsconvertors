import { CustomArticleData } from "./types";

export const mpgUkToMpgUs: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "mpg-us",
  seoTitle: "MPG (UK) to MPG (US) Converter - Imperial to US Miles per Gallon",
  metaDescription: "Convert UK (Imperial) Miles per Gallon to US Miles per Gallon instantly. Learn the 0.83267 ratio formula, volume difference explanations, tables, and FAQs.",
  h1: "MPG (UK) to MPG (US) Converter",
  introduction: [
    "Vehicle fuel efficiency in both the United Kingdom and the United States is traditionally expressed in Miles per Gallon (MPG). However, because an Imperial (UK) gallon is significantly larger than a US fluid gallon (4.546 liters vs 3.785 liters), published MPG ratings in British motoring brochures cannot be directly compared to American EPA window stickers without unit conversion.",
    "Because the UK Imperial gallon contains 20.095% more fuel than a US gallon, a vehicle rated at 36 MPG in Great Britain only achieves 30 MPG under equivalent testing in the United States. To convert UK Imperial MPG to US MPG, you multiply the UK figure by approximately 0.832674 (or divide by 1.20095).",
    "This comprehensive conversion guide details the mathematical relationship between Imperial and US fuel consumption figures, provides step-by-step conversion examples, supplies easy-to-use lookup tables, and answers common questions regarding trans-Atlantic automotive specifications."
  ],
  quickAnswer: {
    text: "To convert UK Miles per Gallon [MPG (UK)] to US Miles per Gallon [MPG (US)], multiply the UK MPG rating by 0.832674 (or divide by 1.20095). For example, 36 Imperial MPG equals 30.00 US MPG.",
    formulaDisplay: "MPG (US) = MPG (UK) × 0.832674",
    subtext: "1 Imperial MPG equals approximately 0.832674 US MPG."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (UK)",
    text: "Miles per Gallon (UK or Imperial) is the fuel consumption metric used in British motoring media and legacy specification sheets. It measures the distance in statute miles (1,609.344 meters) traveled per Imperial gallon (4.54609 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding MPG (US)",
    text: "Miles per Gallon (US) is the official fuel efficiency rating system regulated by the US Environmental Protection Agency (EPA). It measures statute miles traveled per US fluid gallon (3.785411784 liters)."
  },
  relationship: "An Imperial gallon equals 1.20095 US gallons. Consequently, 1 US gallon equals 0.832674 Imperial gallons. Since the unit of distance (statute mile) is identical in both countries, US MPG is always 16.73% lower numerically than UK MPG for the same fuel consumption.",
  relationshipTitle: "UK vs US MPG Comparison Scale",
  relationshipItems: [
    { label: "20 MPG (UK)", value: "16.65 MPG (US) — Luxury V8 / Performance SUV" },
    { label: "30 MPG (UK)", value: "24.98 MPG (US) — Midsize family saloon" },
    { label: "40 MPG (UK)", value: "33.31 MPG (US) — Efficient hatchback / Turbodiesel" },
    { label: "50 MPG (UK)", value: "41.63 MPG (US) — Compact hybrid" },
    { label: "60 MPG (UK)", value: "49.96 MPG (US) — High-efficiency full hybrid" }
  ],
  formula: {
    text: "Multiply the UK Imperial Miles per Gallon figure by 0.83267418 to obtain the equivalent US Miles per Gallon.",
    math: "MPG (US) = MPG (UK) × 0.83267418",
    subtext: "Alternatively, divide the UK MPG value by 1.200949925."
  },
  formulaTitle: "UK to US MPG Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly convert UK MPG to US MPG in your head, subtract one-sixth (about 16.7%) from the UK number. For example, 36 UK MPG minus 6 = 30 US MPG."
  },
  expertNote: {
    title: "Why UK Diesel Brochure Ratings Look So High",
    text: "British car buyers comparing European turbodiesels often see impressive ratings like '65 MPG'. When converted to US gallons, 65 UK MPG equals about 54.1 US MPG. Factoring in EPA test differences makes real-world US figures around 48–50 MPG."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Saloon Ratings",
        subtitle: "Convert a British executive car rated at 42 MPG (UK) into US MPG.",
        steps: [
          "Identify UK fuel economy: 42 MPG (UK).",
          "Apply conversion factor: MPG (US) = 42 × 0.83267418.",
          "Calculate: 42 × 0.83267418 = 34.9723.",
          "Result: 42 UK MPG equals 34.97 US MPG."
        ]
      },
      {
        title: "Example 2: European Turbodiesel Hatchback",
        subtitle: "Convert a UK turbodiesel rating of 55 MPG (UK) to US EPA equivalent.",
        steps: [
          "Identify UK rating: 55 MPG (UK).",
          "Multiply by factor: 55 × 0.83267418 = 45.7971.",
          "Result: 55 UK MPG equals 45.80 US MPG."
        ]
      },
      {
        title: "Example 3: British Sports Car Consumption",
        subtitle: "Convert a sports car rating of 24 Imperial MPG into US MPG.",
        steps: [
          "Identify rating: 24 MPG (UK).",
          "Apply formula: 24 × 0.83267418 = 19.9842.",
          "Result: 24 UK MPG equals 19.98 US MPG."
        ]
      }
    ]
  },
  table: {
    title: "UK Imperial MPG to US MPG Conversion Table",
    headers: ["MPG (UK)", "MPG (US)", "Vehicle Class Profile"],
    rows: [
      { fromVal: "15 MPG", toVal: "12.49 MPG", extra: "Heavy luxury SUV / Supercar" },
      { fromVal: "20 MPG", toVal: "16.65 MPG", extra: "Full-size SUV / Performance saloon" },
      { fromVal: "25 MPG", toVal: "20.82 MPG", extra: "Crossover SUV / V6 sedan" },
      { fromVal: "30 MPG", toVal: "24.98 MPG", extra: "Midsize family car" },
      { fromVal: "35 MPG", toVal: "29.14 MPG", extra: "Compact hatchback" },
      { fromVal: "40 MPG", toVal: "33.31 MPG", extra: "Efficient subcompact car" },
      { fromVal: "45 MPG", toVal: "37.47 MPG", extra: "Mild hybrid hatchback" },
      { fromVal: "50 MPG", toVal: "41.63 MPG", extra: "Full hybrid vehicle" },
      { fromVal: "60 MPG", toVal: "49.96 MPG", extra: "High-efficiency plug-in hybrid" },
      { fromVal: "70 MPG", toVal: "58.29 MPG", extra: "Ultra-efficient diesel / PHEV" }
    ]
  },
  applications: {
    title: "Practical Applications of UK to US MPG Conversion",
    items: [
      {
        title: "Importing European Vehicles to the United States",
        text: "American car collectors importing classic or modern British and European models convert UK brochure figures into US EPA equivalents for federal compliance and fuel budget planning."
      },
      {
        title: "Automotive Journalism & Trans-Atlantic Reviews",
        text: "US car enthusiasts reading British automotive reviews (such as Top Gear or Autocar) convert Imperial MPG figures to understand real-world efficiency in US terms."
      },
      {
        title: "Cross-Border Vehicle Comparisons",
        text: "Automotive researchers comparing global platform variants convert efficiency metrics to evaluate powertrain tuning differences across markets."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1.20095 instead of 0.83267: Multiplying by 1.20095 is used for US to UK conversion. Converting UK to US requires multiplying by 0.83267 or dividing by 1.20095.",
      "Assuming British MPG is lower than US MPG: British MPG figures are always higher numerically because the Imperial gallon contains more volume.",
      "Ignoring EPA vs WLTP testing cycle differences: Mathematical unit conversion accounts for gallon sizes, but official EPA test procedures are generally stricter than European WLTP cycles."
    ]
  },
  faqs: [
    {
      question: "Why is US MPG lower than UK MPG for the exact same vehicle?",
      answer: "US MPG is lower numerically because a US gallon is smaller than a UK Imperial gallon (3.785 liters vs 4.546 liters). Running on a smaller gallon yields fewer miles per gallon."
    },
    {
      question: "What is the exact multiplier to convert UK MPG to US MPG?",
      answer: "The multiplier is 0.83267418 (or divide by 1.2009499)."
    },
    {
      question: "How many US MPG is 36 UK MPG?",
      answer: "36 UK Imperial MPG equals exactly 30.00 US MPG (36 × 0.832674 = 29.976, or 36 ÷ 1.20095 = 29.976)."
    },
    {
      question: "Is 50 UK MPG good fuel economy in US terms?",
      answer: "Yes, 50 UK MPG converts to 41.63 US MPG, which represents excellent fuel economy equivalent to a modern compact hybrid."
    },
    {
      question: "What is 60 Imperial MPG in US MPG?",
      answer: "60 Imperial MPG equals approximately 49.96 US MPG."
    },
    {
      question: "How many liters are in a UK gallon vs a US gallon?",
      answer: "A UK Imperial gallon contains 4.54609 liters, while a US fluid gallon contains 3.78541 liters."
    },
    {
      question: "How do I calculate US MPG from UK fuel mileage?",
      answer: "Multiply your UK MPG figure by 0.832674 (or divide by 1.20095)."
    },
    {
      question: "Why does the UK use Imperial gallons for car mileage?",
      answer: "The UK standardized the Imperial gallon in 1824. Although the UK adopted the metric system for fuel sales in liters in 1995, road distance remains in miles and drivers still evaluate mileage in MPG."
    }
  ],
  relatedList: [
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" },
    { label: "MPG (UK) to L/km", from: "mpg-uk", to: "liters-per-km" }
  ],
  references: [
    "UK Weights and Measures Act 1985 — Imperial Units of Measurement",
    "US NIST Handbook 44 — Fundamental Units of Liquid Measure",
    "US Environmental Protection Agency (EPA) — Fuel Economy Guide"
  ]
};
