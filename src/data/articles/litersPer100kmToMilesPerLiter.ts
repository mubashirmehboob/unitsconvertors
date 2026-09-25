import { CustomArticleData } from "./types";

export const litersPer100kmToMilesPerLiter: CustomArticleData = {
  fromUnitId: "liters-per-100km",
  toUnitId: "miles-per-liter",
  seoTitle: "Liters per 100km to Miles per Liter Converter (L/100km to mi/L)",
  metaDescription: "Convert Liters per 100km to Miles per Liter (L/100km to mi/L). Reciprocal 62.1371 formula, step-by-step calculations, European vehicle tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/liters-per-100km-to-miles-per-liter",
  h1: "Liters per 100km to Miles per Liter Converter",
  introduction: [
    "Liters per 100 kilometers (L/100km) and miles per liter (mi/L) quantify automotive efficiency using inverted measurement models. While Liters per 100km is the statutory fuel consumption metric in the European Union, Canada, Australia, and New Zealand (tracking fuel volume burned over a fixed 100-kilometer distance), miles per liter measures distance traveled per unit of fuel.",
    "Converting from Liters per 100km to miles per liter requires a reciprocal calculation. Because 100 kilometers corresponds to exactly 100 ÷ 1.609344 ≈ 62.1371192 international statute miles, dividing 62.1371192 by your vehicle's L/100km consumption rating yields the exact miles covered on one liter of fuel: mi/L = 62.1371192 ÷ (L/100km).",
    "This engineering reference explains the mathematical conversion, provides worked examples for European and international vehicles, presents a comprehensive efficiency lookup table, explores practical road travel applications, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert Liters per 100km (L/100km) to miles per liter (mi/L), divide 62.1371192 by the L/100km figure. For example, a European vehicle consuming 6.0 L/100km achieves approximately 10.36 miles per liter.",
    formulaDisplay: "mi/L = 62.1371192 ÷ (L/100km)",
    subtext: "Reciprocal relationship: higher L/100km results in fewer miles per liter."
  },
  aboutSourceUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 kilometers (symbol: L/100km) is the standardized metric fuel consumption unit used across Europe, Australia, Canada, and parts of Asia. It indicates the volume of fuel required to drive 100 kilometers. Lower numerical ratings represent superior fuel economy."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a distance-over-volume fuel economy metric measuring statute miles (1,609.344 meters) covered per metric liter (0.001 m³) of fuel. Higher numerical values indicate greater vehicle efficiency."
  },
  relationship: "Because 100 kilometers equals 62.1371192 statute miles, burning L liters over 100 km means covering 62.1371192 miles with L liters: mi/L = 62.1371192 ÷ L/100km. Conversely, L/100km = 62.1371192 ÷ mi/L.",
  relationshipTitle: "L/100km to Miles per Liter Equivalencies",
  relationshipItems: [
    { label: "12.0 L/100km", value: "5.18 mi/L — Heavy commercial van or full-size SUV" },
    { label: "8.0 L/100km", value: "7.77 mi/L — Midsize crossover in mixed urban driving" },
    { label: "6.0 L/100km", value: "10.36 mi/L — Standard 4-cylinder compact sedan" },
    { label: "4.5 L/100km", value: "13.81 mi/L — Dedicated full-hybrid passenger vehicle" },
    { label: "3.5 L/100km", value: "17.75 mi/L — Modern plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide 62.1371192 by the fuel consumption in Liters per 100km to calculate miles per liter.",
    math: "mi_per_L = 62.1371192 / L_per_100km",
    subtext: "To reverse the conversion: L/100km = 62.1371192 ÷ mi/L"
  },
  formulaTitle: "Liters per 100km to Miles per Liter Formula",
  practicalTip: {
    title: "The 62 Division Shortcut",
    text: "For quick mental estimation, divide 62 by the L/100km figure. For instance, a vehicle consuming 5.0 L/100km delivers 62 ÷ 5 = 12.4 mi/L (exact: 12.43 mi/L)."
  },
  expertNote: {
    title: "Linear Fuel Burn vs Non-Linear Distance",
    text: "In L/100km, reducing consumption from 10 to 8 L/100km saves exactly 2 liters for every 100 km driven. In miles per liter, the corresponding increase (from 6.21 to 7.77 mi/L) looks smaller numerically, illustrating why engineers prefer L/100km for linear emissions tracking."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: European Compact Diesel",
        subtitle: "Convert a combined WLTP rating of 4.8 L/100km into miles per liter.",
        steps: [
          "Identify the fuel consumption: 4.8 L/100km.",
          "Apply the reciprocal formula: mi/L = 62.1371192 ÷ 4.8.",
          "Calculate: 62.1371192 ÷ 4.8 = 12.9452 mi/L.",
          "Result: 4.8 L/100km equals approximately 12.95 miles per liter."
        ]
      },
      {
        title: "Example 2: Midsize Petrol Estate",
        subtitle: "Convert 6.5 L/100km into miles per liter.",
        steps: [
          "State the consumption rating: 6.5 L/100km.",
          "Divide 62.1371192 by 6.5: 62.1371192 ÷ 6.5 = 9.5596 mi/L.",
          "Result: 6.5 L/100km equals approximately 9.56 miles per liter."
        ]
      },
      {
        title: "Example 3: Heavy All-Wheel-Drive SUV",
        subtitle: "Convert an urban consumption rate of 11.2 L/100km into miles per liter.",
        steps: [
          "Identify the value: 11.2 L/100km.",
          "Calculate: 62.1371192 ÷ 11.2 = 5.5480 mi/L.",
          "Result: 11.2 L/100km corresponds to approximately 5.55 miles per liter."
        ]
      }
    ]
  },
  table: {
    title: "Liters per 100km to Miles per Liter Conversion Table",
    headers: ["Liters per 100km (L/100km)", "Miles per Liter (mi/L)", "US MPG (mpg US)", "Vehicle Category"],
    rows: [
      { fromVal: "14.0 L/100km", toVal: "4.44 mi/L", extra: "16.80 MPG", extra2: "Full-size commercial freight truck" },
      { fromVal: "12.0 L/100km", toVal: "5.18 mi/L", extra: "19.60 MPG", extra2: "Large V8 SUV or performance car" },
      { fromVal: "10.0 L/100km", toVal: "6.21 mi/L", extra: "23.52 MPG", extra2: "Midsize crossover in town" },
      { fromVal: "9.0 L/100km", toVal: "6.90 mi/L", extra: "26.14 MPG", extra2: "Midsize petrol saloon" },
      { fromVal: "8.0 L/100km", toVal: "7.77 mi/L", extra: "29.40 MPG", extra2: "Standard compact SUV" },
      { fromVal: "7.0 L/100km", toVal: "8.88 mi/L", extra: "33.60 MPG", extra2: "Compact petrol hatchback" },
      { fromVal: "6.0 L/100km", toVal: "10.36 mi/L", extra: "39.20 MPG", extra2: "Efficient 4-cylinder car" },
      { fromVal: "5.0 L/100km", toVal: "12.43 mi/L", extra: "47.04 MPG", extra2: "Mild hybrid family saloon" },
      { fromVal: "4.5 L/100km", toVal: "13.81 mi/L", extra: "52.27 MPG", extra2: "Dedicated full hybrid car" },
      { fromVal: "4.0 L/100km", toVal: "15.53 mi/L", extra: "58.80 MPG", extra2: "Aerodynamic hybrid sedan" },
      { fromVal: "3.5 L/100km", toVal: "17.75 mi/L", extra: "67.21 MPG", extra2: "Plug-in hybrid eco mode" },
      { fromVal: "3.0 L/100km", toVal: "20.71 mi/L", extra: "78.41 MPG", extra2: "Ultra-compact eco commuter" }
    ]
  },
  applications: {
    title: "Practical Applications of L/100km to mi/L Conversion",
    items: [
      {
        title: "International Rental Vehicle Journey Planning",
        text: "Motorists renting vehicles in mainland Europe or Canada convert dashboard L/100km consumption ratings to mi/L to calculate how far they can drive on a 40-liter or 50-liter tank."
      },
      {
        title: "European Vehicle Import Verification",
        text: "Importers bringing European-specification cars into the UK or British Overseas Territories convert official COC (Certificate of Conformity) L/100km ratings to mi/L and UK/US MPG."
      },
      {
        title: "Emissions and Fuel Economy Harmonization",
        text: "Automotive researchers standardize vehicle dynamometer test results from European WLTP cycles (in L/100km) to English distance-per-volume metrics for comparative research."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: L/100km and mi/L are reciprocals. Multiplying 62.1371 by L/100km produces an incorrect result.",
      "Assuming higher L/100km numbers mean more miles per liter: Because L/100km measures fuel consumed, a higher L/100km number results in fewer miles per liter.",
      "Using the US MPG constant (235.215) instead of the mi/L constant (62.1371): US MPG is based on US gallons, not metric liters."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Liters per 100km to miles per liter?",
      answer: "The formula is: mi/L = 62.1371192 ÷ L/100km."
    },
    {
      question: "What is 5 L/100km in miles per liter?",
      answer: "62.1371192 ÷ 5 = 12.4274 mi/L (approximately 12.43 miles per liter)."
    },
    {
      question: "What is 7 L/100km in miles per liter?",
      answer: "62.1371192 ÷ 7 = 8.8767 mi/L (approximately 8.88 miles per liter)."
    },
    {
      question: "What is 10 L/100km in miles per liter?",
      answer: "62.1371192 ÷ 10 = 6.2137 mi/L (approximately 6.21 miles per liter)."
    },
    {
      question: "How do I convert miles per liter back to L/100km?",
      answer: "Divide 62.1371192 by the miles per liter figure."
    },
    {
      question: "Why does the constant 62.1371 appear in the formula?",
      answer: "62.1371192 is the exact number of international statute miles in 100 kilometers (100 ÷ 1.609344)."
    },
    {
      question: "How many miles can I drive on 20 liters if my car consumes 6.0 L/100km?",
      answer: "At 6.0 L/100km, your car achieves 62.1371 ÷ 6.0 ≈ 10.36 mi/L. On 20 liters, you can travel 10.36 × 20 ≈ 207 miles."
    },
    {
      question: "Is 4.5 L/100km considered good fuel economy?",
      answer: "Yes, 4.5 L/100km is equivalent to 13.81 mi/L (and 52.27 US MPG), which represents outstanding efficiency typical of modern full-hybrid passenger cars."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to Liters per 100km", from: "miles-per-liter", to: "liters-per-100km" },
    { label: "Liters per 100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "Liters per 100km to MPG (UK)", from: "liters-per-100km", to: "mpg-uk" },
    { label: "Liters per 100km to Kilometers per Liter", from: "liters-per-100km", to: "km-per-liter" },
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" }
  ],
  references: [
    "UNECE Regulation No 101 - Fuel Consumption and Emissions.",
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time.",
    "WLTP Worldwide Harmonised Light Vehicles Test Procedure."
  ]
};
