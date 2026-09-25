import { CustomArticleData } from "./types";

export const mpgUsToMilesPerLiter: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "miles-per-liter",
  seoTitle: "MPG (US) to Miles per Liter Converter (MPG to mi/L)",
  metaDescription: "Convert US Miles per Gallon to Miles per Liter (MPG to mi/L). Step-by-step formula, 0.264172 multiplier, automotive efficiency tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mpg-us-to-miles-per-liter",
  h1: "MPG (US) to Miles per Liter Converter",
  introduction: [
    "US miles per gallon (MPG US) and miles per liter (mi/L) quantify vehicle fuel economy by expressing distance traveled per unit of fuel consumed. While US MPG is the mandatory standard on EPA window stickers across the United States, miles per liter is commonly needed when traveling internationally where fuel pumps dispense fuel in liters while speedometers and odometers continue to register statute miles.",
    "Converting US MPG to miles per liter requires a direct volume conversion. Because distance in statute miles is identical in both units, the conversion hinges solely on the relationship between US liquid gallons and liters. One US liquid gallon equals exactly 3.785411784 liters. Dividing your US MPG figure by 3.785412 (or multiplying by 0.264172) gives the exact distance your car travels on one liter of fuel.",
    "This technical guide details the conversion formula, walks through step-by-step automotive calculations, provides a comprehensive lookup table, explains real-world driving use cases, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert US miles per gallon (MPG US) to miles per liter (mi/L), divide the MPG value by 3.785412 (or multiply by 0.264172). For example, a car rated at 30 MPG (US) covers approximately 7.93 miles per liter.",
    formulaDisplay: "mi/L = MPG (US) ÷ 3.785411784 = MPG (US) × 0.264172",
    subtext: "1 US mile per gallon equals approximately 0.264172 miles per liter."
  },
  aboutSourceUnit: {
    title: "Understanding US Miles per Gallon (MPG US)",
    text: "US miles per gallon (symbol: MPG or mpg US) is the primary automotive fuel economy measurement in the United States. It specifies the number of statute miles a vehicle travels on one US liquid gallon (defined as exactly 231 cubic inches or 3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a hybrid fuel efficiency measure indicating how many statute miles (1,609.344 meters) a vehicle travels per metric liter (1,000 cm³) of fuel. It connects statute vehicle odometers with metric retail fuel dispensers."
  },
  relationship: "Because one US liquid gallon contains 3.785411784 liters, traveling one mile on one US gallon is equivalent to covering 1 ÷ 3.785411784 ≈ 0.264172 miles per liter. Therefore, mi/L = MPG (US) ÷ 3.785411784 = MPG (US) × 0.264172052.",
  relationshipTitle: "US MPG to Miles per Liter Benchmarks",
  relationshipItems: [
    { label: "15 MPG (US)", value: "3.96 mi/L — Heavy commercial truck or full-size V8 SUV" },
    { label: "25 MPG (US)", value: "6.60 mi/L — Midsize all-wheel-drive crossover" },
    { label: "35 MPG (US)", value: "9.25 mi/L — Efficient 4-cylinder compact sedan" },
    { label: "45 MPG (US)", value: "11.89 mi/L — Dedicated full-hybrid passenger car" },
    { label: "55 MPG (US)", value: "14.53 mi/L — High-efficiency plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide the fuel economy in US MPG by 3.785411784 (or multiply by 0.264172052) to determine miles per liter.",
    math: "mi_per_L = MPG_US / 3.785411784",
    subtext: "Alternative multiplication form: mi/L = MPG (US) × 0.264172052"
  },
  formulaTitle: "US MPG to Miles per Liter Formula",
  practicalTip: {
    title: "The Quarter-Gallon Mental Shortcut",
    text: "Since 1 liter is roughly one-quarter of a US gallon (about 0.264 gal), divide your MPG rating by 4 and add a slight fraction (roughly 5%) to estimate miles per liter in your head (e.g., 32 MPG ÷ 4 = 8; + 5% ≈ 8.4 mi/L; exact: 8.45 mi/L)."
  },
  expertNote: {
    title: "Linear Scaling Principle",
    text: "Because both MPG and mi/L measure distance per volume, they scale linearly. Doubling your MPG from 20 to 40 exactly doubles your miles per liter from 5.28 to 10.57 mi/L."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Midsize Sedan Highway Rating",
        subtitle: "Convert an EPA rating of 32 US MPG into miles per liter.",
        steps: [
          "State the fuel economy: 32 MPG (US).",
          "Apply the formula: mi/L = 32 ÷ 3.785411784.",
          "Calculate: 32 × 0.264172052 = 8.4535 mi/L.",
          "Result: 32 US MPG equals approximately 8.45 miles per liter."
        ]
      },
      {
        title: "Example 2: Full Hybrid Commuter",
        subtitle: "Convert an EPA city rating of 52 US MPG into miles per liter.",
        steps: [
          "Identify the MPG value: 52 MPG (US).",
          "Multiply by 0.264172: 52 × 0.264172 = 13.7369 mi/L.",
          "Result: 52 US MPG equals approximately 13.74 miles per liter."
        ]
      },
      {
        title: "Example 3: Full-Size Commercial Pickup",
        subtitle: "Convert 18 US MPG into miles per liter.",
        steps: [
          "State the MPG figure: 18 MPG (US).",
          "Divide by 3.785412: 18 ÷ 3.785411784 = 4.7551 mi/L.",
          "Result: 18 US MPG corresponds to approximately 4.76 miles per liter."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Miles per Liter Conversion Table",
    headers: ["US MPG (mpg US)", "Miles per Liter (mi/L)", "Kilometers per Liter (km/L)", "Vehicle Segment"],
    rows: [
      { fromVal: "10 MPG", toVal: "2.64 mi/L", extra: "4.25 km/L", extra2: "Heavy-duty commercial freight truck" },
      { fromVal: "15 MPG", toVal: "3.96 mi/L", extra: "6.38 km/L", extra2: "Full-size V8 SUV or off-road vehicle" },
      { fromVal: "20 MPG", toVal: "5.28 mi/L", extra: "8.50 km/L", extra2: "Midsize crossover utility vehicle" },
      { fromVal: "25 MPG", toVal: "6.60 mi/L", extra: "10.63 km/L", extra2: "Standard all-wheel-drive sedan" },
      { fromVal: "30 MPG", toVal: "7.93 mi/L", extra: "12.75 km/L", extra2: "Compact family sedan" },
      { fromVal: "35 MPG", toVal: "9.25 mi/L", extra: "14.88 km/L", extra2: "Efficient 4-cylinder hatchback" },
      { fromVal: "40 MPG", toVal: "10.57 mi/L", extra: "17.01 km/L", extra2: "Subcompact commuter car" },
      { fromVal: "45 MPG", toVal: "11.89 mi/L", extra: "19.13 km/L", extra2: "Entry-level hybrid sedan" },
      { fromVal: "50 MPG", toVal: "13.21 mi/L", extra: "21.26 km/L", extra2: "Modern dedicated full hybrid" },
      { fromVal: "55 MPG", toVal: "14.53 mi/L", extra: "23.38 km/L", extra2: "Ultra-aerodynamic hybrid sedan" },
      { fromVal: "60 MPG", toVal: "15.85 mi/L", extra: "25.51 km/L", extra2: "Plug-in hybrid electric eco mode" },
      { fromVal: "70 MPG", toVal: "18.49 mi/L", extra: "29.76 km/L", extra2: "Ultra-lightweight eco vehicle" }
    ]
  },
  applications: {
    title: "Practical Applications of MPG (US) to mi/L Conversion",
    items: [
      {
        title: "International Road Trips and Fuel Budgeting",
        text: "US motorists driving across the Canadian or Mexican border convert their vehicle's dashboard MPG to mi/L to calculate how many miles they can drive on a 40-liter or 50-liter fuel fill-up."
      },
      {
        title: "Commercial Fleet Fuel Management",
        text: "Cross-border logistics operators convert US EPA certified fleet MPG ratings into mi/L to reconcile liter fuel purchases against odometer trip logs."
      },
      {
        title: "Automotive Telematics Software Integration",
        text: "Software developers configure onboard diagnostics (OBD-II) scan tools to display real-time fuel efficiency in mi/L for drivers who prefer statute miles alongside metric fuel tank volumes."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: 1 liter is much smaller than a gallon, so your car travels fewer miles on a liter than on a gallon. The mi/L value must always be smaller than the MPG value.",
      "Confusing US gallons with UK Imperial gallons: 1 UK gallon is 4.54609 liters, while 1 US gallon is 3.785412 liters. Dividing by 4.54609 understates US fuel economy.",
      "Confusing miles per liter with kilometers per liter: 1 mi/L is approximately 1.609 km/L. Remember that a statute mile is longer than a kilometer."
    ]
  },
  faqs: [
    {
      question: "How many miles per liter is 1 US MPG?",
      answer: "1 US MPG equals approximately 0.264172 miles per liter (1 ÷ 3.785411784)."
    },
    {
      question: "What is the formula to convert US MPG to miles per liter?",
      answer: "The formula is: mi/L = US MPG ÷ 3.785411784 (or mi/L = US MPG × 0.264172052)."
    },
    {
      question: "What is 30 US MPG in miles per liter?",
      answer: "30 US MPG ÷ 3.785412 = 7.9252 mi/L (approximately 7.93 miles per liter)."
    },
    {
      question: "What is 40 US MPG in miles per liter?",
      answer: "40 US MPG ÷ 3.785412 = 10.5669 mi/L (approximately 10.57 miles per liter)."
    },
    {
      question: "How do I convert miles per liter back to US MPG?",
      answer: "Multiply the miles per liter figure by 3.785411784."
    },
    {
      question: "Why is 0.264172 used in this calculation?",
      answer: "0.264172 is the reciprocal of 3.785411784 (the number of liters in one US liquid gallon)."
    },
    {
      question: "How many miles can I travel on 10 liters at 25 US MPG?",
      answer: "At 25 US MPG, your vehicle achieves 25 × 0.264172 = 6.60 mi/L. On 10 liters, you can travel 6.60 × 10 = 66.0 miles."
    },
    {
      question: "Is US MPG the same as Imperial MPG?",
      answer: "No, a US liquid gallon is 3.785 liters, whereas an Imperial gallon is 4.546 liters. Consequently, 30 US MPG equals 36.03 UK MPG."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "MPG (US) to Kilometers per Liter", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to Liters per 100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (US) to Kilometers per Gallon (US)", from: "mpg-us", to: "km-per-gallon-us" }
  ],
  references: [
    "EPA (U.S. Environmental Protection Agency) - Fuel Economy Guide and Testing Protocols.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI).",
    "SAE J1312 - Measuring Fuel Consumption of Motor Vehicles."
  ]
};
