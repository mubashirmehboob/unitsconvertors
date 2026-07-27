import { CustomArticleData } from "./types";

export const mpgUsToLitersPer100km: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "liters-per-100km",
  seoTitle: "MPG (US) to Liters per 100km Converter (MPG to L/100km)",
  metaDescription: "Convert US Miles per Gallon to Liters per 100 Kilometers (MPG to L/100km) instantly. Learn the 235.215 inverse formula, real-world examples, tables, and FAQs.",
  h1: "MPG (US) to Liters per 100km Converter",
  introduction: [
    "Miles per Gallon (US) and Liters per 100 Kilometers (L/100km) represent two fundamentally different approaches to measuring automotive fuel efficiency. While Miles per Gallon measures distance traveled per unit of fuel consumed (distance-per-volume), Liters per 100km measures the volume of fuel required to cover a standardized distance of 100 kilometers (volume-per-distance).",
    "Because these metrics use reciprocal dimensions, their mathematical conversion involves an inverse relationship: as Miles per Gallon increases, Liters per 100km decreases. The constant conversion factor for US liquid gallons and statute miles is 235.214583. Dividing 235.215 by the US MPG figure yields the exact equivalent in Liters per 100km.",
    "This detailed guide explains the mathematics behind reciprocal fuel conversions, provides step-by-step calculations for common fuel efficiency benchmarks, includes comprehensive lookup tables, and answers essential automotive questions."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon [MPG (US)] to Liters per 100 Kilometers [L/100km], divide 235.215 by the US MPG rating. For example, a car getting 30 MPG (US) consumes 7.84 L/100km.",
    formulaDisplay: "L/100km = 235.214583 ÷ MPG (US)",
    subtext: "Note: This is an inverse relationship. Higher MPG means lower (better) L/100km."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (US)",
    text: "Miles per Gallon (US) is the primary fuel efficiency rating used in the United States. Regulated by the US Environmental Protection Agency (EPA), it expresses the distance in statute miles (1,609.344 meters) a vehicle can travel on one US fluid gallon (3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding Liters per 100km (L/100km)",
    text: "Liters per 100 Kilometers (L/100km) is the official metric fuel consumption rating used throughout Europe, Canada, Australia, New Zealand, and South Africa. It directly measures how many liters of fuel a vehicle burns over a 100-kilometer trip."
  },
  relationship: "Because MPG measures distance per volume (higher is better) and L/100km measures volume per distance (lower is better), they are inversely proportional. The formula constant is derived from: (100 km / 1.609344 km/mi) × 3.785411784 L/gal = 235.214583.",
  relationshipTitle: "US MPG vs L/100km Benchmark Scale",
  relationshipItems: [
    { label: "15 MPG (US)", value: "15.68 L/100km — Heavy truck / High-performance V8" },
    { label: "25 MPG (US)", value: "9.41 L/100km — Midsize crossover / All-wheel drive" },
    { label: "35 MPG (US)", value: "6.72 L/100km — Compact commuter hatchback" },
    { label: "45 MPG (US)", value: "5.23 L/100km — Efficient full hybrid" },
    { label: "60 MPG (US)", value: "3.92 L/100km — Plug-in hybrid in eco mode" }
  ],
  formula: {
    text: "Divide the constant 235.214583 by the US Miles per Gallon value to calculate Liters per 100 Kilometers.",
    math: "L/100km = 235.214583 / MPG (US)",
    subtext: "To convert from L/100km back to US MPG, use the exact same formula: MPG (US) = 235.214583 / (L/100km)."
  },
  formulaTitle: "MPG (US) to L/100km Inverse Conversion Formula",
  practicalTip: {
    title: "Quick Mental Check",
    text: "Memorize a couple of key reference points: 20 MPG ≈ 11.8 L/100km; 30 MPG ≈ 7.8 L/100km; 40 MPG ≈ 5.9 L/100km. Doubling fuel efficiency in MPG cuts L/100km in half."
  },
  expertNote: {
    title: "Why European Drivers Prefer L/100km",
    text: "L/100km makes calculating fuel expense linear. A reduction from 12 L/100km to 10 L/100km saves the exact same amount of fuel (2 liters per 100km) as a reduction from 8 L/100km to 6 L/100km. In contrast, improving from 10 to 12 MPG saves far more fuel than improving from 30 to 32 MPG."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Sedan Highway Economy",
        subtitle: "Convert a US highway fuel rating of 32 MPG into L/100km.",
        steps: [
          "Identify US fuel efficiency: 32 MPG (US).",
          "Apply constant formula: L/100km = 235.214583 ÷ 32.",
          "Calculate: 235.214583 ÷ 32 = 7.35045.",
          "Result: 32 US MPG equals approximately 7.35 L/100km."
        ]
      },
      {
        title: "Example 2: Pickup Truck Consumption",
        subtitle: "Convert a city rating of 16 US MPG into L/100km.",
        steps: [
          "Identify rating: 16 MPG (US).",
          "Divide constant: 235.214583 ÷ 16 = 14.7009.",
          "Result: 16 US MPG equals 14.70 L/100km."
        ]
      },
      {
        title: "Example 3: Modern Hybrid Sedan",
        subtitle: "Convert a 52 US MPG hybrid EPA rating to European L/100km standards.",
        steps: [
          "Identify rating: 52 MPG (US).",
          "Apply formula: 235.214583 ÷ 52 = 4.52335.",
          "Result: 52 US MPG equals 4.52 L/100km."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to Liters per 100km Conversion Table",
    headers: ["MPG (US)", "Liters per 100km (L/100km)", "Efficiency Profile"],
    rows: [
      { fromVal: "10 MPG", toVal: "23.52 L/100km", extra: "Very High Consumption (Heavy Truck)" },
      { fromVal: "15 MPG", toVal: "15.68 L/100km", extra: "High Consumption (Full-size SUV)" },
      { fromVal: "20 MPG", toVal: "11.76 L/100km", extra: "Moderate-High Consumption (Large Crossover)" },
      { fromVal: "25 MPG", toVal: "9.41 L/100km", extra: "Average Consumption (Midsize Sedan)" },
      { fromVal: "30 MPG", toVal: "7.84 L/100km", extra: "Good Efficiency (Compact Sedan)" },
      { fromVal: "35 MPG", toVal: "6.72 L/100km", extra: "Very Good Efficiency (Subcompact / Turbo)" },
      { fromVal: "40 MPG", toVal: "5.88 L/100km", extra: "Excellent Efficiency (Mild Hybrid)" },
      { fromVal: "50 MPG", toVal: "4.70 L/100km", extra: "Exceptional Efficiency (Full Hybrid)" },
      { fromVal: "60 MPG", toVal: "3.92 L/100km", extra: "Outstanding Efficiency (PHEV)" },
      { fromVal: "70 MPG", toVal: "3.36 L/100km", extra: "Ultra Efficient (Diesel / Advanced PHEV)" }
    ]
  },
  applications: {
    title: "Practical Applications of US MPG to L/100km Conversion",
    items: [
      {
        title: "International Travel & Road Trips",
        text: "American tourists driving rental vehicles in Canada or Europe use this conversion to understand dashboard fuel consumption figures and estimate refueling costs."
      },
      {
        title: "Vehicle Importation & Registration",
        text: "Importing a US-market vehicle into a metric country (such as Germany, Canada, or Australia) requires declaring official fuel consumption in L/100km for emissions taxes."
      },
      {
        title: "Global Fleet Operations",
        text: "Multinational corporate fleets convert performance data to standardize carbon footprint calculations across American and European operating divisions."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying instead of dividing: Because the units are inversely related, multiplying MPG by 235.215 produces completely invalid figures.",
      "Confusing US MPG with UK MPG: UK Imperial MPG requires a different constant (282.481) because an Imperial gallon is 20% larger than a US gallon.",
      "Misinterpreting direction: Lower L/100km values indicate superior fuel economy, whereas higher MPG values indicate superior fuel economy."
    ]
  },
  faqs: [
    {
      question: "What is 30 MPG (US) in L/100km?",
      answer: "30 US MPG equals approximately 7.84 L/100km (235.215 ÷ 30 = 7.8405)."
    },
    {
      question: "Why is the conversion formula for MPG to L/100km inverse?",
      answer: "It is inverse because MPG measures distance per unit of fuel (higher is better), whereas L/100km measures fuel volume consumed over a set distance (lower is better)."
    },
    {
      question: "What is the constant number used to convert US MPG to L/100km?",
      answer: "The constant factor is 235.214583 (commonly rounded to 235.215)."
    },
    {
      question: "Is 5 L/100km good fuel economy?",
      answer: "Yes, 5 L/100km is excellent fuel economy, equivalent to approximately 47.04 US MPG."
    },
    {
      question: "How do I convert 40 US MPG to L/100km?",
      answer: "Divide 235.215 by 40: 235.215 ÷ 40 = 5.88 L/100km."
    },
    {
      question: "Can I use the 235.215 factor for UK MPG?",
      answer: "No. UK Imperial MPG uses a different constant of 282.481 because the UK Imperial gallon is larger than the US liquid gallon."
    },
    {
      question: "How many L/100km is 25 US MPG?",
      answer: "25 US MPG equals approximately 9.41 L/100km."
    },
    {
      question: "How many MPG is 10 L/100km?",
      answer: "10 L/100km equals 23.52 US MPG (235.215 ÷ 10 = 23.5215)."
    }
  ],
  relatedList: [
    { label: "L/100km to MPG (US)", from: "liters-per-100km", to: "mpg-us" },
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to MPG (UK)", from: "mpg-us", to: "mpg-uk" },
    { label: "MPG (US) to L/km", from: "mpg-us", to: "liters-per-km" }
  ],
  references: [
    "International System of Units (SI) Guide — Fuel Efficiency Metric Standards",
    "US Environmental Protection Agency (EPA) — Fuel Economy Labeling Technical Guidelines",
    "European Environment Agency (EEA) — Monitoring CO2 Emissions from Passenger Cars"
  ]
};
