import { CustomArticleData } from "./types";

export const litersPer100kmToMpgUk: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "mpg-uk",
  seoTitle: "Liters per 100km to MPG (UK) Converter (L/100km to MPG Imperial)",
  metaDescription: "Convert Liters per 100 Kilometers to UK Miles per Gallon (L/100km to MPG UK Imperial) instantly. Learn the 282.481 constant formula, worked calculations, tables, and FAQs.",
  h1: "Liters per 100km to MPG (UK) Converter",
  introduction: [
    "Liters per 100 kilometers (L/100km) and UK Miles per Gallon (MPG Imperial) are widely used across Europe and the British Isles to evaluate vehicle fuel consumption. While mainland European nations rely strictly on L/100km, the United Kingdom continues to display roadside distance in miles and consumer vehicle economy in UK Miles per Gallon, despite selling fuel at the pump in liters.",
    "Because Liters per 100km measures volume consumed over a fixed distance and UK MPG measures distance traveled on a fixed volume, they share an inverse relationship. Converting between them requires the Imperial fuel constant of 282.480936. Dividing 282.481 by the L/100km figure gives the exact equivalent in UK Miles per Gallon.",
    "This guide explains the derivation of the Imperial fuel constant, details step-by-step conversion examples for various passenger and commercial vehicles, provides full conversion charts, and addresses common automotive questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100 Kilometers (L/100km) to UK Miles per Gallon (MPG UK), divide 282.481 by the L/100km value. For example, a car consuming 7.0 L/100km achieves approximately 40.35 MPG (UK).",
    formulaDisplay: "MPG (UK) = 282.480936 ÷ (L/100km)",
    subtext: "Note: An Imperial gallon (4.546 L) is approximately 20.09% larger than a US gallon (3.785 L), making UK MPG figures higher than US MPG."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100 Kilometers (L/100km)",
    text: "Liters per 100 kilometers (L/100km) is the standardized metric fuel consumption rating used throughout the European Union and international automotive regulatory frameworks. It quantifies the number of liters of petrol or diesel required to travel 100 kilometers. Lower figures indicate superior fuel economy."
  },
  aboutTargetUnit: {
    title: "Understanding UK Miles per Gallon (MPG UK)",
    text: "UK Miles per Gallon (MPG Imperial) is the traditional fuel economy unit used in the United Kingdom. It measures how many statute miles (1,609.344 meters) a vehicle travels per Imperial gallon (defined legally as exactly 4.54609 liters under the UK Weights and Measures Act)."
  },
  relationship: "Because L/100km and UK MPG represent inverse dimensions (volume-per-distance versus distance-per-volume), they are inversely proportional. The constant 282.480936 is derived from: (100 km / 1.609344 km/mi) × 4.54609 L/gal (UK) = 282.480936.",
  relationshipTitle: "L/100km to UK MPG Benchmark Comparisons",
  relationshipItems: [
    { label: "12.0 L/100km", value: "23.54 MPG (UK) — Full-size 4x4 / Luxury performance SUV" },
    { label: "9.0 L/100km", value: "31.39 MPG (UK) — Midsize petrol crossover" },
    { label: "7.0 L/100km", value: "40.35 MPG (UK) — Family hatchback / Compact estate" },
    { label: "5.5 L/100km", value: "51.36 MPG (UK) — Efficient diesel saloon / Mild hybrid" },
    { label: "4.0 L/100km", value: "70.62 MPG (UK) — Full hybrid / Ultra-efficient turbodiesel" }
  ],
  formula: {
    text: "Divide the Imperial constant 282.480936 by the fuel consumption value in liters per 100 kilometers.",
    math: "MPG (UK) = 282.480936 / (L/100km)",
    subtext: "To convert in reverse from UK MPG back to L/100km, use the exact same formula: L/100km = 282.480936 / MPG (UK)."
  },
  formulaTitle: "L/100km to UK Imperial MPG Inverse Formula",
  practicalTip: {
    title: "UK vs. US MPG Comparison",
    text: "UK MPG is always roughly 20% higher than US MPG for the exact same vehicle because the UK Imperial gallon (4.546 L) contains more fuel than the US gallon (3.785 L). To convert UK MPG to US MPG directly, divide by 1.20095."
  },
  expertNote: {
    title: "UK Dual-System Reality",
    text: "British drivers buy petrol in liters at filling stations, but vehicle brochures and road test reviews report economy in Imperial MPG. Converting between L/100km and UK MPG helps motorists directly calculate real fuel expenditures per liter pumped."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Turbocharged Family Hatchback",
        subtitle: "Convert a manufacturer European rating of 5.8 L/100km to UK Imperial MPG.",
        steps: [
          "Identify the fuel consumption: 5.8 L/100km.",
          "Apply the Imperial constant: MPG (UK) = 282.480936 ÷ 5.8.",
          "Perform the division: 282.480936 ÷ 5.8 = 48.7036...",
          "Result: 5.8 L/100km equals approximately 48.70 MPG (UK)."
        ]
      },
      {
        title: "Example 2: Executive Diesel Saloon",
        subtitle: "Convert an estate car highway rating of 4.5 L/100km to UK MPG.",
        steps: [
          "Identify the fuel consumption: 4.5 L/100km.",
          "Apply the formula: MPG (UK) = 282.480936 ÷ 4.5.",
          "Perform the division: 282.480936 ÷ 4.5 = 62.7735...",
          "Result: 4.5 L/100km equals approximately 62.77 MPG (UK)."
        ]
      },
      {
        title: "Example 3: Heavy All-Terrain Vehicle",
        subtitle: "Convert a 4x4 combined rating of 11.5 L/100km to UK MPG.",
        steps: [
          "Identify the fuel consumption: 11.5 L/100km.",
          "Apply the formula: MPG (UK) = 282.480936 ÷ 11.5.",
          "Perform the division: 282.480936 ÷ 11.5 = 24.5635...",
          "Result: 11.5 L/100km equals approximately 24.56 MPG (UK)."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to UK MPG Conversion Table",
    headers: ["Liters per 100km (L/100km)", "UK Miles per Gallon (MPG UK)", "Typical Vehicle Category"],
    rows: [
      { fromVal: "3.5 L/100km", toVal: "80.71 MPG", extra: "Advanced Plug-in Hybrid / Supermini Diesel" },
      { fromVal: "4.0 L/100km", toVal: "70.62 MPG", extra: "Full Hybrid (B-Segment / C-Segment)" },
      { fromVal: "4.5 L/100km", toVal: "62.77 MPG", extra: "Efficient Turbodiesel Estate" },
      { fromVal: "5.0 L/100km", toVal: "56.50 MPG", extra: "Modern Compact Hatchback" },
      { fromVal: "6.0 L/100km", toVal: "47.08 MPG", extra: "Family Crossover / 1.5L Turbo Petrol" },
      { fromVal: "7.0 L/100km", toVal: "40.35 MPG", extra: "Midsize Petrol Saloon" },
      { fromVal: "8.0 L/100km", toVal: "35.31 MPG", extra: "Compact All-Wheel Drive SUV" },
      { fromVal: "10.0 L/100km", toVal: "28.25 MPG", extra: "Large SUV / 6-Cylinder Petrol" },
      { fromVal: "12.0 L/100km", toVal: "23.54 MPG", extra: "High-Performance Saloon / Large 4x4" },
      { fromVal: "15.0 L/100km", toVal: "18.83 MPG", extra: "Commercial Van / Heavy Duty Vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "UK Vehicle Imports from Mainland Europe",
        text: "Motor traders importing cars from Germany, France, or the Netherlands convert manufacturer Certificate of Conformity L/100km figures into UK MPG for advertising and DVLA registration."
      },
      {
        title: "Fleet Fuel Management across the English Channel",
        text: "Logistics companies operating cross-channel freight routes between the UK and continental Europe convert between L/100km and UK MPG to audit cross-border driver efficiency."
      },
      {
        title: "British Automotive Media Road Tests",
        text: "Automotive magazines and video reviews convert standardized WLTP test cycle L/100km data into Imperial MPG for British consumers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Using the US constant (235.215): Using the US factor instead of 282.481 understates the vehicle's UK fuel economy by approximately 20%.",
      "Multiplying rather than dividing: Because of the reciprocal nature of the units, multiplication gives incorrect figures.",
      "Assuming UK petrol stations sell gallons: The UK sells road fuel strictly in liters, making L/100km directly useful for fuel volume budgeting."
    ]
  },
  faqs: [
    {
      question: "How do you convert L/100km to UK MPG?",
      answer: "Divide the Imperial constant 282.481 by the L/100km value: MPG (UK) = 282.480936 ÷ (L/100km). For example, 6 L/100km equals 282.481 ÷ 6 = 47.08 MPG (UK)."
    },
    {
      question: "What is 7 L/100km in UK MPG?",
      answer: "7 L/100km equals approximately 40.35 UK MPG (282.481 ÷ 7 = 40.3544)."
    },
    {
      question: "Why is UK MPG higher than US MPG?",
      answer: "A UK Imperial gallon is 4.546 liters, which is 20.09% larger than a US liquid gallon (3.785 liters). Because the gallon has more fuel, the car travels further on one UK gallon."
    },
    {
      question: "What is 5 L/100km in UK MPG?",
      answer: "5 L/100km equals approximately 56.50 UK MPG (282.481 ÷ 5 = 56.4962)."
    },
    {
      question: "What is 10 L/100km in UK MPG?",
      answer: "10 L/100km equals approximately 28.25 UK MPG (282.481 ÷ 10 = 28.2481)."
    },
    {
      question: "What is 4 L/100km in UK MPG?",
      answer: "4 L/100km equals approximately 70.62 UK MPG (282.481 ÷ 4 = 70.6202)."
    },
    {
      question: "How do I convert 50 UK MPG back to L/100km?",
      answer: "Divide 282.481 by 50: 282.481 ÷ 50 = 5.65 L/100km."
    },
    {
      question: "Which constant should I use for UK Imperial conversions?",
      answer: "Always use 282.480936 (commonly rounded to 282.481) for UK Imperial MPG conversions."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to L/100km", from: "mpg-uk", to: "liters-per-100km" },
    { label: "L/100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "L/100km to km/L", from: "liters-per-100km", to: "km-per-liter" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" }
  ],
  references: [
    "UK Department for Transport (DfT) — Vehicle Certification Agency (VCA) Fuel Consumption Database",
    "UK Weights and Measures Act 1985 — Definition of the Imperial Gallon",
    "European Environment Agency (EEA) — Monitoring CO2 Emissions from Passenger Cars"
  ]
};
