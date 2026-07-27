import { CustomArticleData } from "./types";

export const mpgUkToLitersPerKm: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "liters-per-km",
  seoTitle: "MPG (UK) to Liters per Kilometer Converter (Imperial MPG to L/km)",
  metaDescription: "Convert UK (Imperial) Miles per Gallon to Liters per Kilometer (MPG to L/km) instantly. Learn the 2.82481 inverse constant formula, tables, and FAQs.",
  h1: "MPG (UK) to Liters per Kilometer Converter",
  introduction: [
    "UK Miles per Gallon (Imperial MPG) and Liters per Kilometer (L/km) analyze vehicle fuel economy from opposing structural perspectives. While Imperial Miles per Gallon measures the distance in statute miles achieved per UK gallon of fuel consumed, Liters per Kilometer measures the precise volume of fuel consumed per single kilometer.",
    "Liters per Kilometer is primarily used in commercial fleet telemetry, heavy transport logistics, and powertrain engineering simulations where direct fuel consumption per kilometer is required. The conversion between Imperial UK MPG and L/km follows an inverse mathematical formula governed by the constant 2.82480936.",
    "This technical guide explains the mathematical derivation of the 2.82481 constant, provides step-by-step conversion calculations, supplies comprehensive lookup tables, and answers common logistics and engineering questions."
  ],
  quickAnswer: {
    text: "To convert UK (Imperial) Miles per Gallon to Liters per Kilometer, divide the constant 2.824809 by the UK MPG rating. For example, a vehicle achieving 40 Imperial MPG consumes 0.0706 Liters per Kilometer.",
    formulaDisplay: "L/km = 2.82480936 ÷ MPG (UK)",
    subtext: "Note: Lower L/km figures indicate superior fuel economy."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (UK)",
    text: "Miles per Gallon (UK or Imperial) is the traditional distance-per-volume fuel rating system used in Great Britain. It states the distance in statute miles (1,609.344 meters) a vehicle travels per Imperial gallon (4.54609 liters) of fuel."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per Kilometer (L/km)",
    text: "Liters per Kilometer (L/km) is a metric volume-per-distance consumption unit indicating exact fuel consumption per single kilometer. It is equal to exactly 1/100th of the L/100km rating."
  },
  relationship: "Imperial MPG and L/km have an inverse relationship. The conversion constant is derived from: 4.54609 liters per Imperial gallon divided by 1.609344 kilometers per mile = 2.82480936.",
  relationshipTitle: "UK MPG vs L/km Scale Comparison",
  relationshipItems: [
    { label: "15 MPG (UK)", value: "0.1883 L/km — Heavy commercial vehicle / V8 performance" },
    { label: "25 MPG (UK)", value: "0.1130 L/km — Luxury SUV / Executive saloon" },
    { label: "35 MPG (UK)", value: "0.0807 L/km — Compact family crossover" },
    { label: "45 MPG (UK)", value: "0.0628 L/km — Efficient subcompact hatchback" },
    { label: "60 MPG (UK)", value: "0.0471 L/km — Full hybrid passenger car" }
  ],
  formula: {
    text: "Divide the constant 2.82480936 by the UK Imperial Miles per Gallon rating to calculate Liters per Kilometer.",
    math: "L/km = 2.82480936 / MPG (UK)",
    subtext: "To convert Liters per Kilometer back to UK Imperial MPG, divide 2.82480936 by the L/km value."
  },
  formulaTitle: "UK MPG to L/km Inverse Conversion Formula",
  practicalTip: {
    title: "Relationship to L/100km",
    text: "L/km is simply L/100km divided by 100. If a vehicle consumes 7.06 L/100km (equivalent to 40 UK MPG), its direct consumption is 0.0706 L/km."
  },
  expertNote: {
    title: "Commercial Route Budgeting",
    text: "Commercial transport managers in the UK evaluating international freight routes across Europe convert vehicle MPG specs to L/km to multiply directly by route distance in kilometers."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Commercial Van",
        subtitle: "Convert a UK van rating of 22 Imperial MPG into Liters per Kilometer.",
        steps: [
          "Identify UK MPG rating: 22 MPG (UK).",
          "Apply formula: L/km = 2.82480936 ÷ 22.",
          "Calculate: 2.82480936 ÷ 22 = 0.128400.",
          "Result: 22 UK MPG equals 0.1284 Liters per Kilometer."
        ]
      },
      {
        title: "Example 2: Executive Saloon Economy",
        subtitle: "Convert 38 UK MPG into L/km.",
        steps: [
          "Identify rating: 38 MPG (UK).",
          "Divide constant: 2.82480936 ÷ 38 = 0.074337.",
          "Result: 38 UK MPG equals 0.0743 L/km."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle Rating",
        subtitle: "Convert a 62 UK MPG hybrid rating for distance-based fuel calculations.",
        steps: [
          "Identify rating: 62 MPG (UK).",
          "Apply formula: 2.82480936 ÷ 62 = 0.045561.",
          "Result: 62 UK MPG equals 0.0456 L/km."
        ]
      }
    ]
  },
  table: {
    title: "UK Imperial MPG to Liters per Kilometer Conversion Table",
    headers: ["MPG (UK)", "Liters per Kilometer (L/km)", "Liters per 100km Equivalent"],
    rows: [
      { fromVal: "10 MPG", toVal: "0.2825 L/km", extra: "28.25 L/100km" },
      { fromVal: "15 MPG", toVal: "0.1883 L/km", extra: "18.83 L/100km" },
      { fromVal: "20 MPG", toVal: "0.1412 L/km", extra: "14.12 L/100km" },
      { fromVal: "25 MPG", toVal: "0.1130 L/km", extra: "11.30 L/100km" },
      { fromVal: "30 MPG", toVal: "0.0942 L/km", extra: "9.42 L/100km" },
      { fromVal: "35 MPG", toVal: "0.0807 L/km", extra: "8.07 L/100km" },
      { fromVal: "40 MPG", toVal: "0.0706 L/km", extra: "7.06 L/100km" },
      { fromVal: "50 MPG", toVal: "0.0565 L/km", extra: "5.65 L/100km" },
      { fromVal: "60 MPG", toVal: "0.0471 L/km", extra: "4.71 L/100km" },
      { fromVal: "70 MPG", toVal: "0.0404 L/km", extra: "4.04 L/100km" }
    ]
  },
  applications: {
    title: "Practical Applications of UK MPG to L/km Conversion",
    items: [
      {
        title: "Commercial Freight Route Calculation",
        text: "Logistics operators calculate exact fuel stops along European highway routes by multiplying route length in kilometers by the vehicle's L/km consumption rate."
      },
      {
        title: "Automotive Engine Calibration",
        text: "Engine control units (ECUs) calculate real-time fuel injector pulse widths based on target fuel burn per kilometer."
      },
      {
        title: "Fleet Emission Reporting",
        text: "Environmental auditors convert vehicle fleet mileage figures into L/km to assess direct fuel burn per kilometer traveled."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using US MPG constant (2.35215) instead of UK MPG constant (2.82481): Using US gallons underestimates fuel consumption by 20%.",
      "Confusing L/km with L/100km: L/km figures are 100 times smaller than L/100km figures.",
      "Multiplying instead of dividing: UK MPG to L/km requires dividing the constant 2.82481 by the MPG figure."
    ]
  },
  faqs: [
    {
      question: "How many Liters per Kilometer is 40 UK MPG?",
      answer: "40 UK Imperial MPG equals approximately 0.0706 Liters per Kilometer (2.824809 ÷ 40 = 0.07062)."
    },
    {
      question: "What is the formula to convert UK MPG to L/km?",
      answer: "The formula is: L/km = 2.82480936 ÷ MPG (UK)."
    },
    {
      question: "Why is the constant 2.824809 used for UK MPG to L/km?",
      answer: "The constant represents 4.54609 liters per Imperial gallon divided by 1.609344 kilometers per mile."
    },
    {
      question: "How do I convert L/km back to UK MPG?",
      answer: "Divide 2.82480936 by the L/km figure."
    },
    {
      question: "How many Liters per Kilometer is 50 UK MPG?",
      answer: "50 UK MPG equals approximately 0.0565 Liters per Kilometer."
    },
    {
      question: "Is 0.08 L/km good fuel economy?",
      answer: "Yes, 0.08 L/km (equivalent to 8.0 L/100km or ~35.3 UK MPG) represents good fuel economy for a crossover or family car."
    },
    {
      question: "How many UK MPG is 0.05 L/km?",
      answer: "0.05 L/km equals approximately 56.5 UK Imperial MPG (2.824809 ÷ 0.05 = 56.496)."
    },
    {
      question: "Does higher or lower L/km mean better fuel efficiency?",
      answer: "Lower L/km means better fuel efficiency because fewer liters are burned for every kilometer driven."
    }
  ],
  relatedList: [
    { label: "L/km to MPG (UK)", from: "liters-per-km", to: "mpg-uk" },
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" },
    { label: "MPG (UK) to km/L", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" }
  ],
  references: [
    "UK Department for Transport — Fleet Fuel Economy and Emissions Guidelines",
    "ISO 80000-3 — Quantities and Units of Space and Time",
    "SAE International Technical Guidelines on Vehicle Fuel Consumption Metrics"
  ]
};
