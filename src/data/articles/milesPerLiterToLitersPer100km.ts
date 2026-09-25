import { CustomArticleData } from "./types";

export const milesPerLiterToLitersPer100km: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "liters-per-100km",
  seoTitle: "Miles per Liter to Liters per 100km Converter (mi/L to L/100km)",
  metaDescription: "Convert Miles per Liter to Liters per 100km (mi/L to L/100km). Reciprocal 62.1371 formula, step-by-step calculations, vehicle lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/miles-per-liter-to-liters-per-100km",
  h1: "Miles per Liter to Liters per 100km Converter",
  introduction: [
    "Miles per liter (mi/L) and Liters per 100 kilometers (L/100km) represent two fundamentally distinct philosophies for measuring vehicular fuel efficiency. While miles per liter is a distance-per-volume metric (measuring how far a car travels on a unit of fuel), Liters per 100km is a volume-per-distance consumption metric (measuring the amount of fuel burned over a fixed 100-kilometer distance).",
    "Because these units have an inverse mathematical relationship, converting between them requires a reciprocal calculation. Since 100 kilometers equals exactly 100 ÷ 1.609344 ≈ 62.1371192 statute miles, calculating the liters consumed over 100 km simply requires dividing 62.1371192 by your miles-per-liter rating: L/100km = 62.1371192 ÷ mi/L.",
    "This technical guide explains the inverse relationship, provides step-by-step conversion examples for various passenger cars, features a comprehensive automotive lookup table, explores international fuel consumption standards, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert miles per liter (mi/L) to Liters per 100km (L/100km), divide 62.1371192 by the mi/L value. For example, a vehicle achieving 10 mi/L consumes approximately 6.21 L/100km. In L/100km, a lower number indicates better fuel economy.",
    formulaDisplay: "L/100km = 62.1371192 ÷ mi/L",
    subtext: "Inverse formula: mi/L and L/100km are reciprocals connected by the constant 62.1371192."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a distance-over-volume fuel economy metric indicating how many statute miles (1,609.344 meters) a vehicle travels per metric liter (0.001 m³) of fuel. A higher number reflects greater efficiency."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 kilometers (symbol: L/100km) is the standard metric fuel consumption unit mandated across continental Europe, Canada, Australia, and New Zealand. It measures the volume of fuel required to travel 100 kilometers. Lower values represent superior fuel efficiency."
  },
  relationship: "Because 100 kilometers equals 62.1371192 statute miles, the volume of fuel needed to drive 100 km at an efficiency of mi/L is given by L/100km = 62.1371192 ÷ mi/L. Because the relationship is inverse, doubling fuel efficiency halves the L/100km consumption rate.",
  relationshipTitle: "Miles per Liter to L/100km Benchmarks",
  relationshipItems: [
    { label: "4.0 mi/L", value: "15.53 L/100km — Heavy commercial van or full-size V8 SUV" },
    { label: "6.0 mi/L", value: "10.36 L/100km — Midsize crossover in city traffic" },
    { label: "8.0 mi/L", value: "7.77 L/100km — Compact 4-cylinder passenger car" },
    { label: "10.0 mi/L", value: "6.21 L/100km — Efficient modern compact sedan" },
    { label: "14.0 mi/L", value: "4.44 L/100km — Dedicated full-hybrid vehicle" }
  ],
  formula: {
    text: "Divide 62.1371192 by the fuel economy in miles per liter to calculate Liters per 100km.",
    math: "L_per_100km = 62.1371192 / mi_per_L",
    subtext: "To reverse the conversion: mi/L = 62.1371192 ÷ L/100km"
  },
  formulaTitle: "Miles per Liter to Liters per 100km Formula",
  practicalTip: {
    title: "The 62 Division Shortcut",
    text: "To estimate L/100km in your head, divide 62 by your miles-per-liter value. For example, 10 mi/L yields 62 ÷ 10 = 6.2 L/100km (exact: 6.21 L/100km)."
  },
  expertNote: {
    title: "The Reciprocal Non-Linear Paradox",
    text: "Because L/100km is an inverse measure, fuel savings are linear with L/100km reductions, whereas increasing MPG or mi/L yields diminishing returns. Improving from 5 to 6 mi/L saves 2.07 L/100km, while improving from 12 to 13 mi/L saves only 0.40 L/100km."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Family Hatchback",
        subtitle: "Convert a fuel economy rating of 8.2 mi/L into Liters per 100km.",
        steps: [
          "State the fuel economy figure: 8.2 mi/L.",
          "Apply the reciprocal formula: L/100km = 62.1371192 ÷ 8.2.",
          "Compute: 62.1371192 ÷ 8.2 = 7.5777 L/100km.",
          "Result: 8.2 mi/L equals approximately 7.58 L/100km."
        ]
      },
      {
        title: "Example 2: Dedicated Full Hybrid",
        subtitle: "Convert an eco rating of 13.5 mi/L into Liters per 100km.",
        steps: [
          "Identify the fuel economy: 13.5 mi/L.",
          "Divide 62.1371192 by 13.5: 62.1371192 ÷ 13.5 = 4.6027 L/100km.",
          "Result: 13.5 mi/L equals approximately 4.60 L/100km."
        ]
      },
      {
        title: "Example 3: Commercial Delivery Van",
        subtitle: "Convert 5.5 mi/L into Liters per 100km.",
        steps: [
          "State the rating: 5.5 mi/L.",
          "Calculate: 62.1371192 ÷ 5.5 = 11.2977 L/100km.",
          "Result: 5.5 mi/L corresponds to approximately 11.30 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to Liters per 100km Conversion Table",
    headers: ["Miles per Liter (mi/L)", "Liters per 100km (L/100km)", "US MPG (mpg US)", "Vehicle Class"],
    rows: [
      { fromVal: "3.0 mi/L", toVal: "20.71 L/100km", extra: "11.36 MPG", extra2: "Commercial heavy freight truck" },
      { fromVal: "4.0 mi/L", toVal: "15.53 L/100km", extra: "15.14 MPG", extra2: "Full-size V8 SUV or pickup" },
      { fromVal: "5.0 mi/L", toVal: "12.43 L/100km", extra: "18.93 MPG", extra2: "Midsize crossover in city traffic" },
      { fromVal: "6.0 mi/L", toVal: "10.36 L/100km", extra: "22.71 MPG", extra2: "Compact SUV mixed driving" },
      { fromVal: "7.0 mi/L", toVal: "8.88 L/100km", extra: "26.50 MPG", extra2: "Midsize sedan mixed driving" },
      { fromVal: "8.0 mi/L", toVal: "7.77 L/100km", extra: "30.28 MPG", extra2: "Compact commuter hatchback" },
      { fromVal: "9.0 mi/L", toVal: "6.90 L/100km", extra: "34.07 MPG", extra2: "Subcompact highway commuter" },
      { fromVal: "10.0 mi/L", toVal: "6.21 L/100km", extra: "37.85 MPG", extra2: "Efficient 4-cylinder car" },
      { fromVal: "12.0 mi/L", toVal: "5.18 L/100km", extra: "45.42 MPG", extra2: "Mild hybrid family saloon" },
      { fromVal: "14.0 mi/L", toVal: "4.44 L/100km", extra: "53.00 MPG", extra2: "Dedicated full hybrid car" },
      { fromVal: "16.0 mi/L", toVal: "3.88 L/100km", extra: "60.57 MPG", extra2: "High-efficiency plug-in hybrid" },
      { fromVal: "20.0 mi/L", toVal: "3.11 L/100km", extra: "75.71 MPG", extra2: "Ultra-aerodynamic eco vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to L/100km Conversion",
    items: [
      {
        title: "European and Canadian Vehicle Certification",
        text: "Automotive manufacturers test vehicle fuel economy under WLTP laboratory protocols in Liters per 100km, converting metrics to mi/L for UK and international technical evaluations."
      },
      {
        title: "International Motoring and Rental Fleets",
        text: "British tourists driving in mainland Europe convert their familiar trip computer mi/L readings to local L/100km road signage to budget fuel costs across France, Germany, or Spain."
      },
      {
        title: "Fleet Carbon Footprint Modeling",
        text: "Environmental auditors convert vehicle fleet efficiency in mi/L to L/100km to multiply by fuel carbon emission factors (e.g., 2.31 kg CO₂ per liter of petrol) for corporate sustainability reports."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: mi/L and L/100km have an inverse relationship. Multiplying 62.1371 by mi/L gives a nonsensical result.",
      "Assuming a higher L/100km value is better: In L/100km, smaller numbers indicate greater efficiency (less fuel consumed per 100 km).",
      "Using the US MPG constant (235.215) instead of the mi/L constant (62.1371): US MPG is based on gallons, not liters."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert miles per liter to Liters per 100km?",
      answer: "The formula is: L/100km = 62.1371192 ÷ miles per liter."
    },
    {
      question: "What is 10 mi/L in Liters per 100km?",
      answer: "62.1371192 ÷ 10 = 6.2137 L/100km (approximately 6.21 L/100km)."
    },
    {
      question: "What is 8 mi/L in Liters per 100km?",
      answer: "62.1371192 ÷ 8 = 7.7671 L/100km (approximately 7.77 L/100km)."
    },
    {
      question: "Why is 62.1371 used in the formula?",
      answer: "62.1371192 represents the exact number of international statute miles in 100 kilometers (100 ÷ 1.609344)."
    },
    {
      question: "How do I convert L/100km back to miles per liter?",
      answer: "Divide 62.1371192 by the L/100km value. For instance, 6.21 L/100km gives 62.1371192 ÷ 6.21 ≈ 10.0 mi/L."
    },
    {
      question: "In L/100km, is a higher or lower number better?",
      answer: "A lower number is better. L/100km measures fuel consumed, so 4.5 L/100km is more efficient than 9.0 L/100km."
    },
    {
      question: "What is 14 mi/L in Liters per 100km?",
      answer: "62.1371192 ÷ 14 = 4.4384 L/100km (approximately 4.44 L/100km)."
    },
    {
      question: "Which countries officially use Liters per 100km?",
      answer: "Liters per 100km is the official standard in the European Union, Canada, Australia, New Zealand, China, and South Africa."
    }
  ],
  relatedList: [
    { label: "Liters per 100km to Miles per Liter", from: "liters-per-100km", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "Miles per Liter to Kilometers per Liter", from: "miles-per-liter", to: "km-per-liter" },
    { label: "Liters per 100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" }
  ],
  references: [
    "UNECE Regulation No 101 - Measurement of fuel consumption and carbon dioxide emissions.",
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time.",
    "WLTP (Worldwide Harmonised Light Vehicles Test Procedure) Official Protocols."
  ]
};
