import { CustomArticleData } from "./types";

export const milesPerLiterToKmPerLiter: CustomArticleData = {
  fromUnitId: "miles-per-liter",
  toUnitId: "km-per-liter",
  seoTitle: "Miles per Liter to Kilometers per Liter Converter (mi/L to km/L)",
  metaDescription: "Convert Miles per Liter to Kilometers per Liter (mi/L to km/L). Exact 1.609344 multiplier, step-by-step conversion examples, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/miles-per-liter-to-km-per-liter",
  h1: "Miles per Liter to Kilometers per Liter Converter",
  introduction: [
    "Miles per liter (mi/L) and kilometers per liter (km/L) are distance-over-volume metrics used to measure vehicular fuel efficiency. While kilometers per liter is the standard consumer metric in Japan, India, Latin America, and parts of Europe, miles per liter is frequently calculated by motorists in the UK and US territories when evaluating mileage against metric fuel pumps.",
    "Converting miles per liter to kilometers per liter is an elegant distance conversion because the volume unit—the metric liter—is identical in both measurements. Under the international agreement of 1959, one international statute mile is defined as exactly 1.609344 kilometers. Consequently, every mile a car travels on a liter translates directly to exactly 1.609344 kilometers on that same liter of fuel.",
    "This technical guide explains the conversion formula, provides step-by-step automotive calculations, presents a vehicle benchmark table, explores international motoring applications, and answers common fuel economy questions."
  ],
  quickAnswer: {
    text: "To convert miles per liter (mi/L) to kilometers per liter (km/L), multiply the mi/L value by 1.609344 (or roughly 1.61). For example, a car that achieves 10 mi/L delivers exactly 16.09 km/L.",
    formulaDisplay: "km/L = mi/L × 1.609344",
    subtext: "1 mile per liter equals exactly 1.609344 kilometers per liter."
  },
  aboutSourceUnit: {
    title: "Understanding Miles per Liter (mi/L)",
    text: "Miles per liter (symbol: mi/L) is a hybrid fuel efficiency metric indicating the number of statute miles (1,609.344 meters) a vehicle travels using one metric liter (1,000 cm³) of fuel. It combines statute distance odometers with metric retail fuel dispensers."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per liter (symbol: km/L) is a fully metric fuel efficiency metric indicating the number of kilometers a vehicle travels per liter of fuel. It is widely used on vehicle window stickers, advertising, and dashboard displays in Japan, South America, India, and Southeast Asia."
  },
  relationship: "Because 1 statute mile equals exactly 1.609344 kilometers and both units are based on one liter of fuel, 1 mi/L = 1.609344 km/L. Conversely, 1 km/L = 1 ÷ 1.609344 ≈ 0.621371 mi/L.",
  relationshipTitle: "Miles per Liter to km/L Benchmarks",
  relationshipItems: [
    { label: "5.0 mi/L", value: "8.05 km/L — Heavy commercial truck or full-size V8 SUV" },
    { label: "7.0 mi/L", value: "11.27 km/L — Midsize all-wheel-drive crossover" },
    { label: "10.0 mi/L", value: "16.09 km/L — Efficient 4-cylinder compact sedan" },
    { label: "13.0 mi/L", value: "20.92 km/L — Full hybrid passenger vehicle" },
    { label: "16.0 mi/L", value: "25.75 km/L — Modern high-efficiency hybrid in eco mode" }
  ],
  formula: {
    text: "Multiply the fuel efficiency in miles per liter by 1.609344 to determine kilometers per liter.",
    math: "km_per_L = mi_per_L * 1.609344",
    subtext: "To reverse the conversion: mi/L = km/L ÷ 1.609344 (or km/L × 0.621371)"
  },
  formulaTitle: "Miles per Liter to Kilometers per Liter Formula",
  practicalTip: {
    title: "The 1.6 Shortcut Factor",
    text: "For rapid mental estimates, multiply the miles per liter value by 1.6. For example, 10 mi/L × 1.6 = 16 km/L (exact: 16.09 km/L), which gives an error under 0.6%."
  },
  expertNote: {
    title: "Identical Volume Basis",
    text: "Because liters are identical in both denominators, this conversion is mathematically identical to converting statute miles per hour (mph) to kilometers per hour (km/h)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Compact Hatchback Road Trip",
        subtitle: "Convert 8.5 mi/L into kilometers per liter.",
        steps: [
          "State the fuel economy: 8.5 mi/L.",
          "Apply the formula: km/L = 8.5 × 1.609344.",
          "Calculate: 8.5 × 1.609344 = 13.6794 km/L.",
          "Result: 8.5 mi/L equals approximately 13.68 km/L."
        ]
      },
      {
        title: "Example 2: Full Hybrid City Commuter",
        subtitle: "Convert 12.4 mi/L into kilometers per liter.",
        steps: [
          "Identify the fuel economy: 12.4 mi/L.",
          "Multiply by 1.609344: 12.4 × 1.609344 = 19.9559 km/L.",
          "Result: 12.4 mi/L equals approximately 19.96 km/L."
        ]
      },
      {
        title: "Example 3: Light Commercial Delivery Van",
        subtitle: "Convert 6.8 mi/L into kilometers per liter.",
        steps: [
          "State the rating: 6.8 mi/L.",
          "Compute: 6.8 × 1.609344 = 10.9435 km/L.",
          "Result: 6.8 mi/L corresponds to approximately 10.94 km/L."
        ]
      }
    ]
  },
  table: {
    title: "Miles per Liter to Kilometers per Liter Conversion Table",
    headers: ["Miles per Liter (mi/L)", "Kilometers per Liter (km/L)", "US MPG (mpg US)", "Vehicle Category"],
    rows: [
      { fromVal: "3.0 mi/L", toVal: "4.83 km/L", extra: "11.36 MPG", extra2: "Commercial freight truck" },
      { fromVal: "4.0 mi/L", toVal: "6.44 km/L", extra: "15.14 MPG", extra2: "Full-size V8 pickup or SUV" },
      { fromVal: "5.0 mi/L", toVal: "8.05 km/L", extra: "18.93 MPG", extra2: "Midsize crossover utility" },
      { fromVal: "6.0 mi/L", toVal: "9.66 km/L", extra: "22.71 MPG", extra2: "Compact SUV in city driving" },
      { fromVal: "7.0 mi/L", toVal: "11.27 km/L", extra: "26.50 MPG", extra2: "Midsize sedan mixed driving" },
      { fromVal: "8.0 mi/L", toVal: "12.87 km/L", extra: "30.28 MPG", extra2: "Compact commuter hatchback" },
      { fromVal: "9.0 mi/L", toVal: "14.48 km/L", extra: "34.07 MPG", extra2: "Subcompact highway commuter" },
      { fromVal: "10.0 mi/L", toVal: "16.09 km/L", extra: "37.85 MPG", extra2: "Efficient 4-cylinder car" },
      { fromVal: "11.0 mi/L", toVal: "17.70 km/L", extra: "41.64 MPG", extra2: "Mild hybrid family saloon" },
      { fromVal: "12.0 mi/L", toVal: "19.31 km/L", extra: "45.42 MPG", extra2: "Full hybrid compact car" },
      { fromVal: "14.0 mi/L", toVal: "22.53 km/L", extra: "53.00 MPG", extra2: "Aerodynamic hybrid sedan" },
      { fromVal: "16.0 mi/L", toVal: "25.75 km/L", extra: "60.57 MPG", extra2: "Plug-in hybrid eco run" }
    ]
  },
  applications: {
    title: "Practical Applications of mi/L to km/L Conversion",
    items: [
      {
        title: "International Automotive Relocation",
        text: "Drivers importing UK-specification vehicles to countries such as Japan, New Zealand, or India convert their dashboard mi/L calculations to local km/L standards."
      },
      {
        title: "Global Powertrain Benchmarking",
        text: "Automotive testing teams compare fuel consumption logged in statute miles and liters against published Japanese JC08 and WLTC metric cycle ratings in km/L."
      },
      {
        title: "Motorcycle and Scooter Economy Ratings",
        text: "Two-wheeler enthusiasts worldwide often benchmark small-displacement commuter motorcycle economy in km/L against imperial trip odometer measurements."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: 1 statute mile equals 1.609 km, meaning the vehicle travels more kilometers than miles on 1 liter. The km/L figure is always larger than the mi/L figure.",
      "Confusing km/L with Liters per 100km: km/L is distance per volume (higher is better), whereas L/100km is volume per distance (lower is better).",
      "Approximating with 1.6 instead of 1.609344 in legal or engineering audits: For precision compliance, always use the full six-decimal international factor."
    ]
  },
  faqs: [
    {
      question: "How many kilometers per liter are in 1 mile per liter?",
      answer: "There are exactly 1.609344 kilometers per liter in 1 mile per liter."
    },
    {
      question: "What is the formula to convert mi/L to km/L?",
      answer: "The formula is: km/L = miles per liter × 1.609344."
    },
    {
      question: "What is 10 mi/L in kilometers per liter?",
      answer: "10 mi/L × 1.609344 = 16.09344 km/L (approximately 16.09 km/L)."
    },
    {
      question: "What is 8 mi/L in km/L?",
      answer: "8 mi/L × 1.609344 = 12.8748 km/L (approximately 12.87 km/L)."
    },
    {
      question: "How do I convert km/L back to mi/L?",
      answer: "Divide the km/L value by 1.609344 (or multiply by 0.621371192)."
    },
    {
      question: "Is km/L better or worse if the number is higher?",
      answer: "Higher is better. Like mi/L and MPG, km/L measures distance traveled per unit of fuel, so a higher number represents better fuel economy."
    },
    {
      question: "Where is km/L commonly used?",
      answer: "Kilometers per liter is the standard consumer fuel economy unit in Japan, India, Latin America, Southeast Asia, and parts of Europe."
    },
    {
      question: "How does 12 mi/L compare to km/L and US MPG?",
      answer: "12 mi/L equals approximately 19.31 km/L and 45.42 US MPG."
    }
  ],
  relatedList: [
    { label: "Kilometers per Liter to Miles per Liter", from: "km-per-liter", to: "miles-per-liter" },
    { label: "Miles per Liter to MPG (US)", from: "miles-per-liter", to: "mpg-us" },
    { label: "Miles per Liter to MPG (UK)", from: "miles-per-liter", to: "mpg-uk" },
    { label: "Miles per Liter to Liters per 100km", from: "miles-per-liter", to: "liters-per-100km" },
    { label: "Kilometers per Liter to MPG (US)", from: "km-per-liter", to: "mpg-us" }
  ],
  references: [
    "ISO 80000-3:2019 Quantities and units — Part 3: Space and time.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI).",
    "JASO (Japanese Automotive Standards Organization) Fuel Economy Testing Procedures."
  ]
};
