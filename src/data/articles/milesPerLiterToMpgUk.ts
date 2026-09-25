import { CustomArticleData } from "./types";

export const milesPerLiterToMpgUk: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "mpg-uk",
  seoTitle: "Miles per Liter to MPG (UK) Converter (mi/L to MPG Imp)",
  metaDescription: "Convert Miles per Liter to Imperial MPG (mi/L to MPG UK). Official 4.54609 multiplier, UK fuel economy tables, step-by-step calculations, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/miles-per-liter-to-mpg-uk",
  h1: "Miles per Liter to MPG (UK) Converter",
  introduction: [
    "Miles per liter (mi/L) and Imperial miles per gallon (MPG UK or mpg Imp) measure automotive fuel efficiency in markets influenced by British measurement standards. In the United Kingdom, petrol and diesel have been priced and dispensed exclusively in liters since the mid-1990s, yet road speed limits remain in miles per hour and consumer vehicle efficiency is officially rated in Imperial MPG.",
    "Converting miles per liter to UK MPG is a direct volumetric calculation. Because both units share identical statute miles (1,609.344 meters) in the numerator, the conversion relies entirely on the definition of the Imperial gallon. Defined legally by the Weights and Measures Act, one Imperial gallon equals exactly 4.54609 liters. Consequently, traveling one mile on one liter means you will travel 4.54609 miles on a full Imperial gallon.",
    "This technical guide explains the conversion relationship, provides practical vehicle calculation examples, features a detailed British automotive lookup table, explores fleet use cases, and answers common calculation questions."
  ],
  quickAnswer: {
    text: "To convert miles per liter (mi/L) to UK Imperial miles per gallon (MPG UK), multiply the mi/L value by 4.54609. For example, a car that achieves 10 mi/L delivers approximately 45.46 Imperial MPG.",
    formulaDisplay: "MPG (UK) = mi/L × 4.54609",
    subtext: "1 mile per liter equals exactly 4.54609 Imperial miles per gallon."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a hybrid fuel economy unit indicating how many statute miles a vehicle travels on one metric liter (1,000 cm³) of fuel. It is widely used by British motorists to calculate actual fuel economy directly from forecourt fuel receipts and trip odometers."
  },
  aboutTargetUnit: {
    title: "Understanding Imperial MPG (MPG UK)",
    text: "Imperial miles per gallon (symbol: MPG UK or mpg Imp) is the official consumer fuel economy metric in the United Kingdom. It specifies the number of statute miles traveled per Imperial gallon (defined as exactly 4.54609 liters). It is approximately 20.09% larger than the US gallon."
  },
  relationship: "Because one Imperial gallon contains exactly 4.54609 liters, a vehicle traveling a given distance on one liter covers 4.54609 times that distance on an Imperial gallon: MPG (UK) = mi/L × 4.54609. Conversely, 1 MPG (UK) = 1 ÷ 4.54609 ≈ 0.219969 mi/L.",
  relationshipTitle: "Miles per Liter to UK MPG Benchmarks",
  relationshipItems: [
    { label: "6.0 mi/L", value: "27.28 MPG (UK) — Full-size 4x4 or commercial transit van" },
    { label: "8.0 mi/L", value: "36.37 MPG (UK) — Compact crossover in urban stop-start traffic" },
    { label: "10.0 mi/L", value: "45.46 MPG (UK) — Standard 1.5L turbo petrol family hatchback" },
    { label: "12.0 mi/L", value: "54.55 MPG (UK) — Modern self-charging hybrid passenger car" },
    { label: "15.0 mi/L", value: "68.19 MPG (UK) — Ultra-efficient diesel or plug-in hybrid" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in miles per liter by 4.54609 to obtain Imperial miles per gallon.",
    math: "MPG_UK = mi_per_L * 4.54609",
    subtext: "To convert back: mi/L = MPG (UK) ÷ 4.54609 (or MPG × 0.219969)"
  },
  formulaTitle: "Miles per Liter to UK MPG Formula",
  practicalTip: {
    title: "The 4.55 Multiplier Shortcut",
    text: "For quick estimates while filling up at a UK petrol station, multiply your calculated miles per liter by 4.55 (e.g., 8 mi/L × 4.55 = 36.4 UK MPG; exact: 36.37 UK MPG)."
  },
  expertNote: {
    title: "The UK Forecourt Paradox",
    text: "British drivers buy fuel in liters but think in MPG. Because forecourt pumps dispense in liters while road speedometers display miles per hour, miles per liter is the natural mathematical step when verifying vehicle dashboard MPG claims."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Family Estate Motorway Driving",
        subtitle: "Convert 10.8 mi/L into Imperial miles per gallon.",
        steps: [
          "Identify the fuel economy: 10.8 mi/L.",
          "Apply the conversion formula: MPG (UK) = 10.8 × 4.54609.",
          "Compute: 10.8 × 4.54609 = 49.0978 MPG.",
          "Result: 10.8 mi/L equals approximately 49.10 Imperial MPG."
        ]
      },
      {
        title: "Example 2: Self-Charging Hybrid Hatchback",
        subtitle: "Convert 13.2 mi/L into Imperial miles per gallon.",
        steps: [
          "State the fuel economy: 13.2 mi/L.",
          "Multiply by 4.54609: 13.2 × 4.54609 = 60.0084 MPG.",
          "Result: 13.2 mi/L equals approximately 60.01 Imperial MPG."
        ]
      },
      {
        title: "Example 3: Light Commercial Courier Van",
        subtitle: "Convert 7.5 mi/L into Imperial miles per gallon.",
        steps: [
          "State the fuel rating: 7.5 mi/L.",
          "Calculate: 7.5 × 4.54609 = 34.0957 MPG.",
          "Result: 7.5 mi/L corresponds to approximately 34.10 Imperial MPG."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to UK MPG Conversion Table",
    headers: ["Miles per Liter (mi/L)", "UK MPG (mpg Imp)", "US MPG (mpg US)", "UK Vehicle Context"],
    rows: [
      { fromVal: "4.0 mi/L", toVal: "18.18 MPG", extra: "15.14 MPG", extra2: "Large commercial diesel tipper" },
      { fromVal: "5.0 mi/L", toVal: "22.73 MPG", extra: "18.93 MPG", extra2: "Performance sports saloon" },
      { fromVal: "6.0 mi/L", toVal: "27.28 MPG", extra: "22.71 MPG", extra2: "Full-size SUV or luxury 4x4" },
      { fromVal: "7.0 mi/L", toVal: "31.82 MPG", extra: "26.50 MPG", extra2: "Midsize crossover in town" },
      { fromVal: "8.0 mi/L", toVal: "36.37 MPG", extra: "30.28 MPG", extra2: "Compact petrol hatchback mixed" },
      { fromVal: "9.0 mi/L", toVal: "40.91 MPG", extra: "34.07 MPG", extra2: "1.2L turbocharged city car" },
      { fromVal: "10.0 mi/L", toVal: "45.46 MPG", extra: "37.85 MPG", extra2: "Efficient 1.5L family hatchback" },
      { fromVal: "11.0 mi/L", toVal: "50.01 MPG", extra: "41.64 MPG", extra2: "Diesel motorway cruiser" },
      { fromVal: "12.0 mi/L", toVal: "54.55 MPG", extra: "45.42 MPG", extra2: "Full hybrid compact car" },
      { fromVal: "13.0 mi/L", toVal: "59.10 MPG", extra: "49.21 MPG", extra2: "High-efficiency self-charging hybrid" },
      { fromVal: "14.0 mi/L", toVal: "63.65 MPG", extra: "53.00 MPG", extra2: "Modern aerodynamic hybrid" },
      { fromVal: "16.0 mi/L", toVal: "72.74 MPG", extra: "60.57 MPG", extra2: "Plug-in hybrid in eco mode" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to UK MPG Conversion",
    items: [
      {
        title: "Forecourt Fuel Cost Verification",
        text: "UK drivers calculate their vehicle's true economy by resetting trip counters, pumping an exact number of liters, and multiplying trip miles per liter by 4.54609 to audit dashboard trip computer accuracy."
      },
      {
        title: "Fleet Fuel Card Audit and Mileage Reimbursement",
        text: "UK business fleet operators convert driver fuel card receipts (billed in liters) against business mileage claims (logged in miles) to verify compliance with HMRC advisory fuel rates."
      },
      {
        title: "Used Vehicle Evaluation",
        text: "Prospective vehicle buyers test-drive second-hand cars, record fuel consumption in liters, and convert to Imperial MPG to compare against official Vehicle Certification Agency (VCA) published ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Confusing UK Imperial gallons with US gallons: An Imperial gallon is 4.54609 L, while a US gallon is 3.785412 L. UK MPG ratings are roughly 20% higher than US MPG ratings for the same vehicle.",
      "Dividing instead of multiplying: Because 1 gallon contains over 4.5 liters, the vehicle travels over 4.5 times further on a gallon. The MPG figure must always be larger than the mi/L figure.",
      "Confusing mi/L with km/L: 1 mi/L equals 1.609344 km/L. Converting km/L to Imperial MPG requires multiplying by 2.82481, not 4.54609."
    ]
  },
  faqs: [
    {
      question: "How many UK MPG is 1 mile per liter?",
      answer: "1 mile per liter equals exactly 4.54609 Imperial miles per gallon."
    },
    {
      question: "What is the formula to convert mi/L to UK MPG?",
      answer: "The formula is: MPG (UK) = miles per liter × 4.54609."
    },
    {
      question: "How do I convert 10 mi/L to UK MPG?",
      answer: "Multiply 10 by 4.54609 to get 45.4609 Imperial MPG (approximately 45.46 MPG)."
    },
    {
      question: "Why is the UK conversion factor 4.54609?",
      answer: "4.54609 represents the exact statutory volume of one Imperial gallon in liters under the UK Weights and Measures Act."
    },
    {
      question: "What is 8 mi/L in UK MPG?",
      answer: "8 mi/L × 4.54609 = 36.3687 Imperial MPG (approximately 36.37 MPG)."
    },
    {
      question: "Why is UK MPG higher than US MPG?",
      answer: "An Imperial gallon (4.546 L) is approximately 20.09% larger than a US liquid gallon (3.785 L). Therefore, a vehicle travels more miles on an Imperial gallon than on a US gallon."
    },
    {
      question: "How do I convert UK MPG back to mi/L?",
      answer: "Divide the UK MPG figure by 4.54609 (or multiply by 0.219969)."
    },
    {
      question: "How many miles can I drive on 20 liters if my car does 50 UK MPG?",
      answer: "50 UK MPG equals 50 ÷ 4.54609 ≈ 11.00 mi/L. On 20 liters, you can drive 11.00 × 20 ≈ 220 miles."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to Miles per Liter", from: "mpg-uk", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "Miles per Liter to Kilometers per Liter", from: "miles-per-liter", to: "km-per-liter" },
    { label: "Miles per Liter to Liters per 100km", from: "miles-per-liter", to: "liters-per-100km" },
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" }
  ],
  references: [
    "UK Department for Transport (DfT) - Vehicle Certification Agency (VCA) Fuel Consumption Database.",
    "UK Weights and Measures Act 1985 (as amended) - Units of Measurement Regulations.",
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time."
  ]
};
