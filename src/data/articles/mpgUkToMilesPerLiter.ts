import { CustomArticleData } from "./types";

export const mpgUkToMilesPerLiter: CustomArticleData = {
  fromUnitId: "mpg-uk",
  toUnitId: "miles-per-liter",
  seoTitle: "MPG (UK) to Miles per Liter Converter (MPG Imp to mi/L)",
  metaDescription: "Convert Imperial MPG to Miles per Liter (MPG UK to mi/L). Step-by-step formula, 0.220 multiplier, British automotive tables, and practical FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mpg-uk-to-miles-per-liter",
  h1: "MPG (UK) to Miles per Liter Converter",
  introduction: [
    "Imperial miles per gallon (MPG UK or mpg Imp) and miles per liter (mi/L) quantify vehicle fuel efficiency in British motoring contexts. While the UK Driver and Vehicle Standards Agency (DVSA) and car manufacturers advertise vehicle fuel consumption in Imperial MPG, petrol filling stations across the UK have dispensed fuel exclusively in metric liters for decades.",
    "Converting UK Imperial MPG to miles per liter simplifies fuel budgeting and journey planning. Because both measures share statute miles in the numerator, the conversion depends entirely on the volume of the Imperial gallon. One UK Imperial gallon is defined by statute as exactly 4.54609 liters. Dividing your vehicle's UK MPG rating by 4.54609 (or multiplying by 0.219969) gives the exact distance in miles you can travel on each liter of fuel.",
    "This technical guide details the conversion formula, provides step-by-step calculations for popular UK passenger cars and commercial vans, features a structured conversion table, examines practical forecourt applications, and answers common questions."
  ],
  quickAnswer: {
    text: "To convert UK Imperial miles per gallon (MPG UK) to miles per liter (mi/L), divide the MPG value by 4.54609 (or multiply by 0.219969). For instance, a family car rated at 45 Imperial MPG achieves approximately 9.90 miles per liter.",
    formulaDisplay: "mi/L = MPG (UK) ÷ 4.54609 = MPG (UK) × 0.219969",
    subtext: "1 UK Imperial mile per gallon equals approximately 0.219969 miles per liter."
  },
  aboutSourceUnit: {
    title: "Understanding Imperial MPG (MPG UK)",
    text: "Imperial miles per gallon (symbol: MPG UK or mpg Imp) is the customary fuel economy metric in the United Kingdom. It specifies the number of statute miles a vehicle covers per UK Imperial gallon (defined as exactly 4.54609 liters). Because an Imperial gallon is roughly 20% larger than a US gallon, UK MPG numbers are correspondingly higher."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a hybrid metric measuring statute miles traveled per metric liter (0.001 m³) of fuel consumed. It provides British drivers with an intuitive bridge between dashboard mileage readouts and retail forecourt liter fuel pumps."
  },
  relationship: "Because one UK Imperial gallon equals exactly 4.54609 liters, covering one mile on one Imperial gallon is equivalent to covering 1 ÷ 4.54609 ≈ 0.219969 miles per liter. Therefore, mi/L = MPG (UK) ÷ 4.54609 = MPG (UK) × 0.219969248. Conversely, 1 mi/L = 4.54609 MPG (UK).",
  relationshipTitle: "UK MPG to Miles per Liter Equivalencies",
  relationshipItems: [
    { label: "25 MPG (UK)", value: "5.50 mi/L — Heavy commercial van or luxury 4x4" },
    { label: "35 MPG (UK)", value: "7.70 mi/L — Midsize crossover in urban driving" },
    { label: "45 MPG (UK)", value: "9.90 mi/L — Standard 1.5L turbo petrol family hatchback" },
    { label: "55 MPG (UK)", value: "12.10 mi/L — Efficient turbodiesel motorway estate" },
    { label: "65 MPG (UK)", value: "14.30 mi/L — Modern full-hybrid passenger car" }
  ],
  formula: {
    text: "Divide the fuel economy in UK MPG by 4.54609 (or multiply by 0.219969248) to calculate miles per liter.",
    math: "mi_per_L = MPG_UK / 4.54609",
    subtext: "Alternative multiplication form: mi/L = MPG (UK) × 0.219969248"
  },
  formulaTitle: "UK MPG to Miles per Liter Formula",
  practicalTip: {
    title: "The 0.22 Multiplication Rule",
    text: "To estimate miles per liter from UK MPG quickly on the road, multiply your MPG by 0.22. For example, 50 UK MPG × 0.22 = 11.0 mi/L (exact: 10.998 mi/L), giving near-perfect accuracy."
  },
  expertNote: {
    title: "HMRC Advisory Fuel Rate Reconciliation",
    text: "When reconciling business fuel claims under UK HMRC Advisory Fuel Rates (AFR), converting your car's manufacturer MPG to miles per liter lets you multiply directly by forecourt pump prices (in pence per liter) to calculate your true pence-per-mile operating cost."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Turbodiesel Motorway Commute",
        subtitle: "Convert a motorway rating of 52 Imperial MPG into miles per liter.",
        steps: [
          "State the fuel economy: 52 MPG (UK).",
          "Apply the formula: mi/L = 52 ÷ 4.54609.",
          "Calculate: 52 × 0.219969248 = 11.4384 mi/L.",
          "Result: 52 UK MPG equals approximately 11.44 miles per liter."
        ]
      },
      {
        title: "Example 2: Compact Petrol City Car",
        subtitle: "Convert 38 Imperial MPG into miles per liter.",
        steps: [
          "Identify the MPG rating: 38 MPG (UK).",
          "Multiply by 0.219969: 38 × 0.219969 = 8.3588 mi/L.",
          "Result: 38 UK MPG equals approximately 8.36 miles per liter."
        ]
      },
      {
        title: "Example 3: Self-Charging Hybrid Hatchback",
        subtitle: "Convert 64 Imperial MPG into miles per liter.",
        steps: [
          "State the figure: 64 MPG (UK).",
          "Divide by 4.54609: 64 ÷ 4.54609 = 14.0780 mi/L.",
          "Result: 64 UK MPG corresponds to approximately 14.08 miles per liter."
        ]
      }
    ]
  },
  table: {
    title: "UK MPG to Miles per Liter Conversion Table",
    headers: ["UK MPG (mpg Imp)", "Miles per Liter (mi/L)", "US MPG (mpg US)", "UK Vehicle Category"],
    rows: [
      { fromVal: "20 MPG", toVal: "4.40 mi/L", extra: "16.65 MPG", extra2: "Commercial heavy diesel dropside" },
      { fromVal: "25 MPG", toVal: "5.50 mi/L", extra: "20.82 MPG", extra2: "High-performance sports coupé" },
      { fromVal: "30 MPG", toVal: "6.60 mi/L", extra: "24.98 MPG", extra2: "Large SUV or all-wheel-drive estate" },
      { fromVal: "35 MPG", toVal: "7.70 mi/L", extra: "29.14 MPG", extra2: "Compact crossover in stop-start traffic" },
      { fromVal: "40 MPG", toVal: "8.80 mi/L", extra: "33.31 MPG", extra2: "Midsize petrol saloon" },
      { fromVal: "45 MPG", toVal: "9.90 mi/L", extra: "37.47 MPG", extra2: "Standard 1.0L/1.5L turbo petrol car" },
      { fromVal: "50 MPG", toVal: "11.00 mi/L", extra: "41.63 MPG", extra2: "Efficient 2.0L turbodiesel" },
      { fromVal: "55 MPG", toVal: "12.10 mi/L", extra: "45.80 MPG", extra2: "Mild hybrid family hatchback" },
      { fromVal: "60 MPG", toVal: "13.20 mi/L", extra: "49.96 MPG", extra2: "Full hybrid compact vehicle" },
      { fromVal: "65 MPG", toVal: "14.30 mi/L", extra: "54.12 MPG", extra2: "High-efficiency self-charging hybrid" },
      { fromVal: "70 MPG", toVal: "15.40 mi/L", extra: "58.29 MPG", extra2: "Ultra-aerodynamic hybrid eco run" },
      { fromVal: "80 MPG", toVal: "17.60 mi/L", extra: "66.61 MPG", extra2: "Plug-in hybrid electric eco mode" }
    ]
  },
  applications: {
    title: "Practical Applications of MPG (UK) to mi/L Conversion",
    items: [
      {
        title: "Forecourt Fuel Purchase Verification",
        text: "UK motorists converting their vehicle's dashboard MPG to miles per liter can determine precisely how many miles they will gain from pumping £20, £30, or a fixed number of liters into their tank."
      },
      {
        title: "Fleet Operating Cost Calculation",
        text: "Logistics managers calculate fleet fuel expenses by taking miles per liter and combining it with wholesale bulk diesel pricing in pence per liter to determine accurate running costs per mile."
      },
      {
        title: "Journey Fuel Estimation",
        text: "Drivers planning a long trip across England, Scotland, or Wales convert their vehicle's MPG rating to mi/L to calculate the exact volume of fuel needed for a 250-mile motorway drive."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Using the US gallon factor (3.785412) instead of the Imperial gallon (4.54609): Dividing by 3.785 overstates your miles per liter by roughly 20%.",
      "Multiplying instead of dividing: A vehicle travels fewer miles on a single liter than on a full 4.55-liter gallon; the mi/L figure must be smaller than the MPG figure.",
      "Confusing miles per liter with kilometers per liter: 1 mi/L equals 1.609344 km/L. Remember that a statute mile is longer than a kilometer."
    ]
  },
  faqs: [
    {
      question: "How many miles per liter is 1 UK MPG?",
      answer: "1 UK Imperial MPG equals approximately 0.219969 miles per liter (1 ÷ 4.54609)."
    },
    {
      question: "What is the formula to convert UK MPG to miles per liter?",
      answer: "The formula is: mi/L = UK MPG ÷ 4.54609 (or mi/L = UK MPG × 0.219969248)."
    },
    {
      question: "What is 45 UK MPG in miles per liter?",
      answer: "45 UK MPG ÷ 4.54609 = 9.8986 mi/L (approximately 9.90 miles per liter)."
    },
    {
      question: "What is 55 UK MPG in miles per liter?",
      answer: "55 UK MPG ÷ 4.54609 = 12.0983 mi/L (approximately 12.10 miles per liter)."
    },
    {
      question: "How many miles can I drive on 30 liters if my car averages 50 UK MPG?",
      answer: "At 50 UK MPG, your car achieves 50 ÷ 4.54609 ≈ 11.00 mi/L. On 30 liters, you can travel approximately 11.00 × 30 = 330 miles."
    },
    {
      question: "Why is 0.219969 used as a multiplier?",
      answer: "0.219969 is the mathematical reciprocal of 4.54609 (the number of liters in an Imperial gallon)."
    },
    {
      question: "How do I convert miles per liter back to UK MPG?",
      answer: "Multiply the miles per liter figure by 4.54609."
    },
    {
      question: "Is UK MPG different from US MPG?",
      answer: "Yes, an Imperial gallon is 4.546 liters, while a US liquid gallon is 3.785 liters. As a result, 50 UK MPG equals approximately 41.63 US MPG."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (UK) to Kilometers per Liter", from: "mpg-uk", to: "km-per-liter" },
    { label: "MPG (UK) to Liters per 100km", from: "mpg-uk", to: "liters-per-100km" },
    { label: "MPG (US) to Miles per Liter", from: "mpg-us", to: "miles-per-liter" }
  ],
  references: [
    "UK Department for Transport (DfT) - Vehicle Certification Agency (VCA) Data.",
    "UK Weights and Measures Act 1985.",
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time."
  ]
};
