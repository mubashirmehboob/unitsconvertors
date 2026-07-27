import { CustomArticleData } from "./types";

export const mpgUsToKmPerLiter: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "km-per-liter",
  seoTitle: "MPG (US) to Kilometers per Liter Converter (MPG to km/L)",
  metaDescription: "Convert US Miles per Gallon to Kilometers per Liter (MPG to km/L) instantly. Learn the exact 0.42514 conversion factor, step-by-step math, tables, and FAQs.",
  h1: "MPG (US) to Kilometers per Liter Converter",
  introduction: [
    "Miles per Gallon (US) and Kilometers per Liter (km/L) are both distance-per-volume fuel economy metrics. While the United States relies on Miles per Gallon (US) for automotive ratings, many regions across Latin America, Asia, and parts of Europe use Kilometers per Liter (km/L) to express how far a vehicle can travel on one liter of fuel.",
    "Converting from US MPG to km/L involves converting both the distance unit (miles to kilometers) and the volume unit (US gallons to liters). One mile equals 1.609344 kilometers, and one US gallon equals 3.78541 liters. Dividing 1.609344 by 3.78541 yields the direct conversion factor: 1 MPG (US) equals approximately 0.42514 km/L.",
    "This comprehensive reference guide covers the mathematical derivation of the conversion factor, provides step-by-step calculation examples for various vehicle classes, presents easy-to-read lookup tables, and addresses frequently asked automotive questions."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon to Kilometers per Liter, multiply the MPG value by 0.42514. For example, a car getting 30 MPG (US) achieves 12.75 km/L.",
    formulaDisplay: "km/L = MPG (US) × 0.4251437",
    subtext: "1 US MPG is equal to approximately 0.42514 Kilometers per Liter."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (US)",
    text: "Miles per Gallon (US) is the standard fuel economy rating used by the US Environmental Protection Agency (EPA). It represents the number of statute miles (1.609344 km) a motor vehicle travels for every US liquid gallon (3.785412 L) of fuel consumed."
  },
  aboutTargetUnit: {
    title: "Understanding Kilometers per Liter (km/L)",
    text: "Kilometers per Liter (km/L) is a metric unit of fuel efficiency used widely in countries like Japan, India, Brazil, and Southeast Asia. It indicates how many kilometers a vehicle can travel on a single liter of gasoline or diesel fuel."
  },
  relationship: "Both MPG (US) and km/L measure efficiency directly (higher values indicate greater efficiency). Because 1 mile is 1.609344 km and 1 US gallon is 3.785412 L, 1 MPG (US) = 1.609344 / 3.785412 ≈ 0.4251437 km/L.",
  relationshipTitle: "US MPG vs km/L Efficiency Benchmark",
  relationshipItems: [
    { label: "15 MPG (US)", value: "6.38 km/L — Full-size truck / V8 engine" },
    { label: "25 MPG (US)", value: "10.63 km/L — Midsize sedan / Crossover" },
    { label: "35 MPG (US)", value: "14.88 km/L — Compact economy car" },
    { label: "45 MPG (US)", value: "19.13 km/L — Highly efficient hybrid" },
    { label: "55 MPG (US)", value: "23.38 km/L — Advanced plug-in hybrid" }
  ],
  formula: {
    text: "Multiply the US Miles per Gallon rating by 0.4251437 to obtain Kilometers per Liter.",
    math: "km/L = MPG (US) × 0.4251437",
    subtext: "To convert from km/L back to US MPG, multiply the km/L value by 2.352146."
  },
  formulaTitle: "MPG (US) to km/L Conversion Formula",
  practicalTip: {
    title: "Quick Estimation Shortcut",
    text: "To approximate km/L from US MPG in your head, divide the MPG number by 2, then subtract about 15% from the result. For instance, 30 MPG ÷ 2 = 15; subtract 15% (2.25) ≈ 12.75 km/L."
  },
  expertNote: {
    title: "Distance-Per-Volume vs Volume-Per-Distance",
    text: "Unlike Liters per 100km (L/100km), which is an inverse consumption metric, both MPG and km/L are distance-per-volume metrics. Therefore, higher values in both units mean superior fuel efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Sedan Highway Rating",
        subtitle: "Convert a highway rating of 32 US MPG to Kilometers per Liter.",
        steps: [
          "Identify US MPG rating: 32 MPG (US).",
          "Apply conversion factor: km/L = 32 × 0.4251437.",
          "Calculate: 32 × 0.4251437 = 13.6046.",
          "Result: 32 US MPG equals 13.60 km/L."
        ]
      },
      {
        title: "Example 2: Pickup Truck Fuel Economy",
        subtitle: "Convert a truck rating of 18 US MPG into km/L.",
        steps: [
          "Identify rating: 18 MPG (US).",
          "Multiply by factor: 18 × 0.4251437 = 7.6526.",
          "Result: 18 US MPG equals 7.65 km/L."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle Benchmark",
        subtitle: "Convert a 50 US MPG hybrid rating to km/L for international comparison.",
        steps: [
          "Identify rating: 50 MPG (US).",
          "Apply formula: 50 × 0.4251437 = 21.2572.",
          "Result: 50 US MPG equals 21.26 km/L."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Kilometers per Liter Conversion Table",
    headers: ["MPG (US)", "Kilometers per Liter (km/L)", "Typical Vehicle Performance"],
    rows: [
      { fromVal: "10 MPG", toVal: "4.25 km/L", extra: "Heavy commercial truck / Performance V8" },
      { fromVal: "15 MPG", toVal: "6.38 km/L", extra: "Large SUV / Pickup truck" },
      { fromVal: "20 MPG", toVal: "8.50 km/L", extra: "Midsize SUV / All-wheel drive sedan" },
      { fromVal: "25 MPG", toVal: "10.63 km/L", extra: "Standard family sedan" },
      { fromVal: "30 MPG", toVal: "12.75 km/L", extra: "Compact hatchback / Crossover" },
      { fromVal: "35 MPG", toVal: "14.88 km/L", extra: "Efficient subcompact sedan" },
      { fromVal: "40 MPG", toVal: "17.01 km/L", extra: "Mild hybrid / Turbo 3-cylinder" },
      { fromVal: "45 MPG", toVal: "19.13 km/L", extra: "Full hybrid compact" },
      { fromVal: "50 MPG", toVal: "21.26 km/L", extra: "High-efficiency hybrid" },
      { fromVal: "60 MPG", toVal: "25.51 km/L", extra: "Plug-in hybrid / Ultra-light commuter" }
    ]
  },
  applications: {
    title: "Applications of US MPG to km/L Conversion",
    items: [
      {
        title: "Comparing US Imports in km/L Regions",
        text: "Drivers in Asia, Latin America, and the Middle East importing US vehicles convert EPA window sticker MPG specs into km/L to understand local fuel costs."
      },
      {
        title: "International Rental Car Driving",
        text: "Travelers from North America driving in countries where fuel is sold in liters and distance is posted in kilometers convert trip computer displays to maintain budgeting."
      },
      {
        title: "Automotive Engineering Benchmarking",
        text: "Global powertrain engineers convert regional efficiency data between EPA MPG and Japanese JC08 or WLTC km/L standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using UK MPG factor instead of US MPG factor: UK MPG uses 4.546 L, making 1 UK MPG equal to 0.354 km/L, whereas 1 US MPG equals 0.425 km/L.",
      "Confusing km/L with L/100km: km/L measures distance per unit fuel (higher is better), whereas L/100km measures fuel volume per distance (lower is better).",
      "Inaccurate rounding: Truncating 0.42514 to 0.4 introduces a 6% error in fuel efficiency calculations over long distances."
    ]
  },
  faqs: [
    {
      question: "How many km/L is 1 US MPG?",
      answer: "1 US MPG equals approximately 0.42514 Kilometers per Liter."
    },
    {
      question: "What is the formula to convert US MPG to km/L?",
      answer: "The formula is: km/L = MPG (US) × 0.4251437."
    },
    {
      question: "How many km/L is 30 US MPG?",
      answer: "30 US MPG equals 12.75 km/L (30 × 0.4251437 = 12.7543)."
    },
    {
      question: "Is higher km/L better or worse?",
      answer: "Higher km/L is better. It means your vehicle travels more kilometers on a single liter of fuel."
    },
    {
      question: "How do I convert km/L back to US MPG?",
      answer: "Multiply the km/L value by 2.352146 (or divide by 0.4251437)."
    },
    {
      question: "Why do some countries use km/L instead of L/100km?",
      answer: "Countries like Japan and India prefer km/L because it retains the intuitive 'distance per unit fuel' concept similar to MPG, making it easy to calculate how far you can drive on a full tank."
    },
    {
      question: "How many km/L is 25 MPG?",
      answer: "25 US MPG equals approximately 10.63 km/L."
    },
    {
      question: "Does 50 MPG equal 21 km/L?",
      answer: "Yes, 50 US MPG equals 21.26 km/L."
    }
  ],
  relatedList: [
    { label: "km/L to MPG (US)", from: "km-per-liter", to: "mpg-us" },
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (US) to L/km", from: "mpg-us", to: "liters-per-km" }
  ],
  references: [
    "International Organization for Standardization (ISO) 80000-3 — Quantities and Units",
    "US Environmental Protection Agency (EPA) — Light-Duty Automotive Technology, Carbon Dioxide Emissions, and Fuel Economy Trends",
    "Japan Ministry of Land, Infrastructure, Transport and Tourism (MLIT) — Fuel Consumption Test Methods"
  ]
};
