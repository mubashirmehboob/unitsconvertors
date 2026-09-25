import { CustomArticleData } from "./types";

export const kmPerLiterToMilesPerLiter: CustomArticleData = {
  fromUnitId: "km-per-liter",
  toUnitId: "miles-per-liter",
  seoTitle: "Kilometers per Liter to Miles per Liter Converter (km/L to mi/L)",
  metaDescription: "Convert Kilometers per Liter to Miles per Liter (km/L to mi/L). Step-by-step formula, 0.621371 multiplier, international vehicle tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/km-per-liter-to-miles-per-liter",
  h1: "Kilometers per Liter to Miles per Liter Converter",
  introduction: [
    "Kilometers per liter (km/L) and miles per liter (mi/L) measure vehicle fuel efficiency across metric and imperial distance frameworks. While kilometers per liter is the predominant consumer efficiency rating throughout Japan, India, South America, and parts of Europe, miles per liter is frequently needed when evaluating international vehicle specs for drivers who track distance in statute miles.",
    "Converting kilometers per liter to miles per liter is a clean distance transformation because the volume denominator—the metric liter—is identical in both units. By international treaty, one kilometer equals exactly 1 ÷ 1.609344 ≈ 0.621371192 international statute miles. Therefore, dividing your km/L rating by 1.609344 (or multiplying by 0.621371) calculates the exact miles traveled per liter of fuel.",
    "This technical guide explains the conversion relationship, provides step-by-step automotive calculations, presents a vehicle benchmark table, reviews practical travel and import applications, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert kilometers per liter (km/L) to miles per liter (mi/L), divide the km/L value by 1.609344 (or multiply by 0.621371). For example, a vehicle achieving 16 km/L delivers approximately 9.94 miles per liter.",
    formulaDisplay: "mi/L = km/L ÷ 1.609344 = km/L × 0.621371192",
    subtext: "1 kilometer per liter equals approximately 0.621371 miles per liter."
  },
  aboutSourceUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per liter (symbol: km/L) is a standard metric fuel economy rating expressing the number of kilometers a vehicle travels per metric liter (0.001 m³) of fuel. It is the primary metric displayed on vehicle window stickers and digital instrument clusters across Japan, India, and Latin America."
  },
  aboutTargetUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a hybrid fuel efficiency measure indicating statute miles (1,609.344 meters) traveled per liter of fuel consumed. It is commonly used by British and international motorists to bridge statute vehicle odometers with liter fuel pumps."
  },
  relationship: "Because 1 kilometer equals 0.621371192 statute miles and both units share the same 1-liter fuel volume, covering 1 kilometer per liter corresponds to covering 0.621371 miles per liter: mi/L = km/L ÷ 1.609344 = km/L × 0.621371192. Conversely, 1 mi/L = 1.609344 km/L.",
  relationshipTitle: "Kilometers per Liter to mi/L Benchmarks",
  relationshipItems: [
    { label: "8.0 km/L", value: "4.97 mi/L — Heavy commercial truck or large 4x4" },
    { label: "12.0 km/L", value: "7.46 mi/L — Midsize all-wheel-drive crossover" },
    { label: "16.0 km/L", value: "9.94 mi/L — Standard 4-cylinder compact sedan" },
    { label: "20.0 km/L", value: "12.43 mi/L — Efficient full-hybrid passenger car" },
    { label: "25.0 km/L", value: "15.53 mi/L — Ultra-efficient plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide the fuel economy in kilometers per liter by 1.609344 (or multiply by 0.621371192) to obtain miles per liter.",
    math: "mi_per_L = km_per_L / 1.609344",
    subtext: "Alternative multiplication form: mi/L = km/L × 0.621371192"
  },
  formulaTitle: "Kilometers per Liter to Miles per Liter Formula",
  practicalTip: {
    title: "The 0.62 Mental Shortcut",
    text: "To quickly estimate miles per liter from km/L, multiply the km/L value by 0.62. For example, 15 km/L × 0.62 = 9.3 mi/L (exact: 9.32 mi/L), which gives rapid and accurate results."
  },
  expertNote: {
    title: "Direct Metric Comparison",
    text: "Because both km/L and mi/L measure distance per unit of volume, they have a direct linear correlation: higher numbers always indicate superior fuel efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Japanese Kei Car City Mileage",
        subtitle: "Convert 22.5 km/L into miles per liter.",
        steps: [
          "State the fuel economy: 22.5 km/L.",
          "Apply the conversion formula: mi/L = 22.5 ÷ 1.609344.",
          "Calculate: 22.5 × 0.621371192 = 13.9809 mi/L.",
          "Result: 22.5 km/L equals approximately 13.98 miles per liter."
        ]
      },
      {
        title: "Example 2: Compact Crossover Highway Run",
        subtitle: "Convert 14.8 km/L into miles per liter.",
        steps: [
          "Identify the km/L rating: 14.8 km/L.",
          "Multiply by 0.621371: 14.8 × 0.621371 = 9.1963 mi/L.",
          "Result: 14.8 km/L equals approximately 9.20 miles per liter."
        ]
      },
      {
        title: "Example 3: Light Commercial Pickup",
        subtitle: "Convert 9.6 km/L into miles per liter.",
        steps: [
          "State the value: 9.6 km/L.",
          "Divide by 1.609344: 9.6 ÷ 1.609344 = 5.9652 mi/L.",
          "Result: 9.6 km/L corresponds to approximately 5.97 miles per liter."
        ]
      }
    ]
  },
  table: {
    title: "Kilometers per Liter to Miles per Liter Conversion Table",
    headers: ["Kilometers per Liter (km/L)", "Miles per Liter (mi/L)", "US MPG (mpg US)", "Vehicle Category"],
    rows: [
      { fromVal: "6.0 km/L", toVal: "3.73 mi/L", extra: "14.11 MPG", extra2: "Commercial heavy freight vehicle" },
      { fromVal: "8.0 km/L", toVal: "4.97 mi/L", extra: "18.82 MPG", extra2: "Full-size V8 SUV or off-roader" },
      { fromVal: "10.0 km/L", toVal: "6.21 mi/L", extra: "23.52 MPG", extra2: "Midsize 6-cylinder crossover" },
      { fromVal: "12.0 km/L", toVal: "7.46 mi/L", extra: "28.23 MPG", extra2: "Compact SUV in mixed driving" },
      { fromVal: "14.0 km/L", toVal: "8.70 mi/L", extra: "32.93 MPG", extra2: "Midsize sedan highway cruising" },
      { fromVal: "16.0 km/L", toVal: "9.94 mi/L", extra: "37.63 MPG", extra2: "Efficient 4-cylinder compact" },
      { fromVal: "18.0 km/L", toVal: "11.18 mi/L", extra: "42.34 MPG", extra2: "Subcompact commuter car" },
      { fromVal: "20.0 km/L", toVal: "12.43 mi/L", extra: "47.04 MPG", extra2: "Modern full-hybrid vehicle" },
      { fromVal: "22.0 km/L", toVal: "13.67 mi/L", extra: "51.75 MPG", extra2: "Aerodynamic hybrid sedan" },
      { fromVal: "25.0 km/L", toVal: "15.53 mi/L", extra: "58.80 MPG", extra2: "Plug-in hybrid in eco mode" },
      { fromVal: "28.0 km/L", toVal: "17.40 mi/L", extra: "65.86 MPG", extra2: "High-efficiency micro-commuter" },
      { fromVal: "32.0 km/L", toVal: "19.88 mi/L", extra: "75.27 MPG", extra2: "Ultra-compact Japanese Kei car" }
    ]
  },
  applications: {
    title: "Practical Applications of km/L to mi/L Conversion",
    items: [
      {
        title: "Importing Japanese Domestic Market (JDM) Vehicles",
        text: "Automotive enthusiasts importing Japanese cars convert dashboard and brochure km/L ratings to mi/L and US/UK MPG to understand fuel efficiency on domestic highways."
      },
      {
        title: "International Rental Car Driving",
        text: "Travelers renting vehicles in India, Japan, or Latin America convert onboard km/L economy readings into mi/L to calculate journey range using statute road map distances."
      },
      {
        title: "Automotive Engineering Data Normalization",
        text: "Multinational automotive engineering teams harmonize engine dynamometer fuel maps between Japanese testing cycle standards (in km/L) and British/American fleet telematics (in mi/L)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: A kilometer is shorter than a statute mile, so a car covers fewer miles than kilometers on 1 liter. The mi/L figure must be smaller than the km/L figure.",
      "Confusing km/L with Liters per 100km: km/L measures distance per volume, whereas L/100km measures fuel consumed per distance.",
      "Confusing miles per liter with miles per gallon: mi/L represents distance on 1 liter, whereas MPG represents distance on nearly 3.8 or 4.5 liters."
    ]
  },
  faqs: [
    {
      question: "How many miles per liter is 1 km/L?",
      answer: "1 km/L equals approximately 0.621371 miles per liter (1 ÷ 1.609344)."
    },
    {
      question: "What is the formula to convert km/L to mi/L?",
      answer: "The formula is: mi/L = km/L ÷ 1.609344 (or mi/L = km/L × 0.621371192)."
    },
    {
      question: "What is 15 km/L in miles per liter?",
      answer: "15 km/L ÷ 1.609344 = 9.3206 mi/L (approximately 9.32 miles per liter)."
    },
    {
      question: "What is 20 km/L in miles per liter?",
      answer: "20 km/L ÷ 1.609344 = 12.4274 mi/L (approximately 12.43 miles per liter)."
    },
    {
      question: "How do I convert miles per liter back to km/L?",
      answer: "Multiply the miles per liter figure by 1.609344."
    },
    {
      question: "Why is 0.621371 used as a multiplier?",
      answer: "0.621371 is the reciprocal of 1.609344, representing the exact number of international statute miles in one kilometer."
    },
    {
      question: "How does 16 km/L translate to US MPG?",
      answer: "16 km/L equals approximately 9.94 mi/L, which converts to 9.94 × 3.785412 ≈ 37.63 US MPG."
    },
    {
      question: "Is km/L an official SI unit?",
      answer: "While the kilometer and liter are metric units accepted for use with the SI, the coherent SI unit for fuel consumption is cubic meters per meter (m³/m), which is practically expressed as km/L or L/100km."
    }
  ],
  relatedList: [
    { label: "Miles per Liter to Kilometers per Liter", from: "miles-per-liter", to: "km-per-liter" },
    { label: "Kilometers per Liter to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "Kilometers per Liter to MPG (UK)", from: "km-per-liter", to: "mpg-uk" },
    { label: "Kilometers per Liter to Liters per 100km", from: "km-per-liter", to: "liters-per-100km" },
    { label: "MPG (US) to Miles per Liter", from: "mpg-us", to: "miles-per-liter" }
  ],
  references: [
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time.",
    "BIPM - The International System of Units (SI), 9th Edition.",
    "JASO (Japanese Automotive Standards Organization) Fuel Economy Measurement."
  ]
};
