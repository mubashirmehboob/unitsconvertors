import { CustomArticleData } from "./types";

export const mpgUsToKmPerGallonUs: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "km-per-gallon-us",
  seoTitle: "MPG (US) to Kilometers per Gallon (US) Converter",
  metaDescription: "Convert US MPG to Kilometers per Gallon (US) (MPG to km/gal). Exact 1.609344 multiplier, step-by-step calculations, vehicle tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/mpg-us-to-km-per-gallon-us",
  h1: "MPG (US) to Kilometers per Gallon (US) Converter",
  introduction: [
    "US miles per gallon (MPG US) and kilometers per gallon US (km/gal US) measure vehicular fuel efficiency based on the legal US liquid gallon (3.785411784 liters). While US MPG is the familiar standard displayed on EPA window stickers across the United States, kilometers per gallon is used in international fleet telemetry, cross-border commercial logistics, and technical research where metric distances are tracked alongside US fuel purchases.",
    "Converting US MPG to kilometers per gallon is an exact distance calculation because the volume denominator—the US gallon—remains constant. Under the international treaty of 1959, one international statute mile is defined as exactly 1.609344 kilometers. Consequently, every mile your vehicle travels on a US gallon translates directly to 1.609344 kilometers on that same gallon of fuel.",
    "This technical guide explains the conversion relationship, provides step-by-step automotive calculations, presents a vehicle benchmark table, explores fleet telematics use cases, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert US miles per gallon (MPG US) to kilometers per gallon (US), multiply the MPG value by 1.609344 (or roughly 1.61). For example, a car rated at 30 US MPG delivers approximately 48.28 km/gal (US).",
    formulaDisplay: "km/gal (US) = MPG (US) × 1.609344",
    subtext: "1 US mile per gallon equals exactly 1.609344 kilometers per US gallon."
  },
  aboutSourceUnit: {
    title: "Understanding US Miles per Gallon (MPG US)",
    text: "US miles per gallon (symbol: MPG or mpg US) is the official automotive fuel economy rating in the United States. It specifies the number of statute miles a vehicle travels on one standard US liquid gallon (defined as exactly 231 cubic inches or 3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Gallon (US)",
    text: "Kilometers per gallon US (symbol: km/gal US) is a hybrid fuel efficiency metric indicating the number of kilometers a vehicle travels per US liquid gallon. It is commonly utilized by cross-border logistics operators and fleet telematics systems."
  },
  relationship: "Because 1 statute mile equals exactly 1.609344 kilometers and both units are based on one US liquid gallon, km/gal (US) = MPG (US) × 1.609344. Conversely, 1 km/gal (US) = 1 ÷ 1.609344 ≈ 0.621371 MPG (US).",
  relationshipTitle: "US MPG to km/gal (US) Benchmarks",
  relationshipItems: [
    { label: "15 MPG (US)", value: "24.14 km/gal (US) — Heavy commercial truck or full-size V8 SUV" },
    { label: "25 MPG (US)", value: "40.23 km/gal (US) — Midsize all-wheel-drive crossover" },
    { label: "35 MPG (US)", value: "56.33 km/gal (US) — Efficient 4-cylinder compact sedan" },
    { label: "45 MPG (US)", value: "72.42 km/gal (US) — Full hybrid passenger vehicle" },
    { label: "55 MPG (US)", value: "88.51 km/gal (US) — Modern plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in US MPG by 1.609344 to calculate kilometers per gallon (US).",
    math: "km_per_gal_US = MPG_US * 1.609344",
    subtext: "To reverse the conversion: MPG (US) = km/gal (US) ÷ 1.609344 (or km/gal × 0.621371)"
  },
  formulaTitle: "US MPG to Kilometers per Gallon (US) Formula",
  practicalTip: {
    title: "The 1.6 Mental Shortcut",
    text: "For quick calculations, multiply your US MPG rating by 1.6. For example, 30 MPG × 1.6 = 48 km/gal (exact: 48.28 km/gal), which provides an estimate within 0.6%."
  },
  expertNote: {
    title: "Direct Linear Scaling",
    text: "Because both units measure distance per volume, they have a direct linear correlation: doubling your MPG from 20 to 40 exactly doubles your km/gal from 32.19 to 64.37 km/gal."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Midsize Sedan Highway Mileage",
        subtitle: "Convert 34 US MPG into kilometers per gallon (US).",
        steps: [
          "State the fuel economy: 34 MPG (US).",
          "Apply the formula: km/gal = 34 × 1.609344.",
          "Calculate: 34 × 1.609344 = 54.7177 km/gal.",
          "Result: 34 US MPG equals approximately 54.72 km/gal (US)."
        ]
      },
      {
        title: "Example 2: Dedicated Full Hybrid",
        subtitle: "Convert an EPA rating of 48 US MPG into kilometers per gallon (US).",
        steps: [
          "Identify the fuel economy: 48 MPG (US).",
          "Multiply by 1.609344: 48 × 1.609344 = 77.2485 km/gal.",
          "Result: 48 US MPG equals approximately 77.25 km/gal (US)."
        ]
      },
      {
        title: "Example 3: Heavy Duty Pickup Truck",
        subtitle: "Convert 16 US MPG into kilometers per gallon (US).",
        steps: [
          "State the rating: 16 MPG (US).",
          "Compute: 16 × 1.609344 = 25.7495 km/gal.",
          "Result: 16 US MPG corresponds to approximately 25.75 km/gal (US)."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Kilometers per Gallon (US) Conversion Table",
    headers: ["US MPG (mpg US)", "Kilometers per Gallon (US)", "Kilometers per Liter (km/L)", "Vehicle Category"],
    rows: [
      { fromVal: "10 MPG", toVal: "16.09 km/gal", extra: "4.25 km/L", extra2: "Commercial freight truck" },
      { fromVal: "15 MPG", toVal: "24.14 km/gal", extra: "6.38 km/L", extra2: "Full-size V8 SUV or pickup" },
      { fromVal: "20 MPG", toVal: "32.19 km/gal", extra: "8.50 km/L", extra2: "Midsize crossover in town" },
      { fromVal: "25 MPG", toVal: "40.23 km/gal", extra: "10.63 km/L", extra2: "Standard all-wheel-drive sedan" },
      { fromVal: "30 MPG", toVal: "48.28 km/gal", extra: "12.75 km/L", extra2: "Compact family sedan" },
      { fromVal: "35 MPG", toVal: "56.33 km/gal", extra: "14.88 km/L", extra2: "Efficient 4-cylinder hatchback" },
      { fromVal: "40 MPG", toVal: "64.37 km/gal", extra: "17.01 km/L", extra2: "Subcompact commuter car" },
      { fromVal: "45 MPG", toVal: "72.42 km/gal", extra: "19.13 km/L", extra2: "Entry-level hybrid car" },
      { fromVal: "50 MPG", toVal: "80.47 km/gal", extra: "21.26 km/L", extra2: "Modern dedicated full hybrid" },
      { fromVal: "55 MPG", toVal: "88.51 km/gal", extra: "23.38 km/L", extra2: "Aerodynamic hybrid sedan" },
      { fromVal: "60 MPG", toVal: "96.56 km/gal", extra: "25.51 km/L", extra2: "Plug-in hybrid eco mode" },
      { fromVal: "70 MPG", toVal: "112.65 km/gal", extra: "29.76 km/L", extra2: "Ultra-compact eco commuter" }
    ]
  },
  applications: {
    title: "Practical Applications of US MPG to km/gal (US) Conversion",
    items: [
      {
        title: "Cross-Border Commercial Fleet Management",
        text: "Logistics companies operating between the US and Canada or Mexico convert EPA certified vehicle MPG ratings to km/gal to align fuel consumption data with metric route planning software."
      },
      {
        title: "Automotive Dyno Testing and Engine Mapping",
        text: "Vehicle test laboratories mapping engine torque curves against fuel consumption convert US MPG targets into metric distance kilometers per gallon for international engineering partners."
      },
      {
        title: "GPS Navigation and Trip Computer Setup",
        text: "Software engineers developing navigation telematics configure digital instrument clusters to display fuel economy in kilometers per gallon when vehicles operate with US fuel tanks and metric odometers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: 1 statute mile equals 1.609 km, so the car travels more kilometers than miles on a gallon. The km/gal figure must be larger than the MPG figure.",
      "Confusing US gallons with UK Imperial gallons: 1 Imperial gallon is 4.54609 liters, while 1 US gallon is 3.785412 liters. Using the wrong gallon factor causes a 20% error.",
      "Confusing km/gal with km/L: A US gallon contains 3.785412 liters. 1 km/gal is roughly one-quarter of 1 km/L."
    ]
  },
  faqs: [
    {
      question: "How many kilometers per gallon (US) is 1 US MPG?",
      answer: "1 US MPG equals exactly 1.609344 kilometers per US gallon."
    },
    {
      question: "What is the formula to convert US MPG to km/gal (US)?",
      answer: "The formula is: km/gal (US) = US MPG × 1.609344."
    },
    {
      question: "What is 30 US MPG in kilometers per gallon?",
      answer: "30 US MPG × 1.609344 = 48.2803 km/gal (approximately 48.28 km/gal)."
    },
    {
      question: "What is 40 US MPG in kilometers per gallon?",
      answer: "40 US MPG × 1.609344 = 64.3738 km/gal (approximately 64.37 km/gal)."
    },
    {
      question: "How do I convert kilometers per gallon back to US MPG?",
      answer: "Divide the km/gal figure by 1.609344 (or multiply by 0.621371192)."
    },
    {
      question: "Why is 1.609344 used in the calculation?",
      answer: "1.609344 is the exact international standard definition of one statute mile in kilometers."
    },
    {
      question: "How does km/gal (US) relate to km/L?",
      answer: "Because 1 US gallon contains 3.785412 liters, dividing km/gal (US) by 3.785412 gives km/L (e.g., 48.28 km/gal ÷ 3.785412 ≈ 12.75 km/L)."
    },
    {
      question: "What is 50 US MPG in kilometers per gallon?",
      answer: "50 US MPG × 1.609344 = 80.4672 km/gal (approximately 80.47 km/gal)."
    }
  ],
  relatedList: [
    { label: "Kilometers per Gallon (US) to MPG (US)", from: "km-per-gallon-us", to: "mpg-us" },
    { label: "MPG (US) to Kilometers per Liter", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to Liters per 100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (US) to Miles per Liter", from: "mpg-us", to: "miles-per-liter" }
  ],
  references: [
    "EPA (U.S. Environmental Protection Agency) - Fuel Economy Guide.",
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time.",
    "SAE J1312 - Measuring Fuel Consumption of Motor Vehicles."
  ]
};
