import { CustomArticleData } from "./types";

export const mpgUsToMpgUk: CustomArticleData = {
  fromUnitId: "mpg-us",
  toUnitId: "mpg-uk",
  seoTitle: "MPG (US) to MPG (UK) Converter - Miles per Gallon",
  metaDescription: "Convert US Miles per Gallon to UK (Imperial) Miles per Gallon instantly. Learn the 1.20095 ratio formula, volume difference explanations, tables, and FAQs.",
  h1: "MPG (US) to MPG (UK) Converter",
  introduction: [
    "Miles per Gallon (MPG) measures how many miles a motor vehicle can travel on one gallon of fuel. While both the United States and the United Kingdom express automobile efficiency using the term 'Miles per Gallon', their ratings are not identical because the US liquid gallon and the Imperial (UK) gallon represent different liquid volumes.",
    "One Imperial gallon equals approximately 4.546 liters, whereas one US liquid gallon equals exactly 3.785 liters. Because the Imperial gallon is roughly 20.095% larger in volume, a vehicle running on UK gallons will travel farther per gallon than on US gallons. Consequently, a vehicle rated at 30 MPG in the United States achieves approximately 36.03 MPG in Great Britain.",
    "This conversion guide explains the exact mathematical relationship between US and UK fuel economy ratings, provides step-by-step conversion calculations, offers real-world automotive examples, and answers common questions regarding trans-Atlantic car specs."
  ],
  quickAnswer: {
    text: "To convert US Miles per Gallon [MPG (US)] to UK Miles per Gallon [MPG (UK)], multiply the US MPG value by 1.20095. For example, a car getting 25 MPG (US) achieves 30.02 MPG (UK).",
    formulaDisplay: "MPG (UK) = MPG (US) × 1.20095",
    subtext: "1 US MPG equals exactly 1.200949925 Imperial MPG."
  },
  aboutSourceUnit: {
    title: "Understanding MPG (US)",
    text: "Miles per Gallon (US) is the standard measurement unit used by the United States Environmental Protection Agency (EPA) and American automakers to state vehicle fuel economy. It measures distance in standard statute miles (1,609.344 meters) traveled per US fluid gallon (3.785411784 liters)."
  },
  aboutTargetUnit: {
    title: "Understanding MPG (UK)",
    text: "Miles per Gallon (UK or Imperial) is the fuel consumption metric traditionally used in the United Kingdom, Canada, and Ireland. It measures miles traveled per Imperial gallon (4.54609 liters), which was standardized by the British Imperial Weights and Measures Act of 1824."
  },
  relationship: "The Imperial gallon contains exactly 1.200949925 US gallons. Because the unit of distance (statute mile) is identical in both countries, UK MPG is always exactly 20.095% higher than US MPG for the same physical fuel consumption rate.",
  relationshipTitle: "US vs UK Fuel Rating Comparison",
  relationshipItems: [
    { label: "15 MPG (US)", value: "18.01 MPG (UK) — Full-size American pickup" },
    { label: "25 MPG (US)", value: "30.02 MPG (UK) — Midsize passenger sedan" },
    { label: "35 MPG (US)", value: "42.03 MPG (UK) — Compact commuter car" },
    { label: "50 MPG (US)", value: "60.05 MPG (UK) — Hybrid electric sedan" },
    { label: "70 MPG (US)", value: "84.07 MPG (UK) — Ultra-efficient plug-in hybrid" }
  ],
  formula: {
    text: "Multiply the US Miles per Gallon figure by 1.20095 to get the equivalent UK Imperial Miles per Gallon.",
    math: "MPG (UK) = MPG (US) × 1.2009499",
    subtext: "To convert back from UK MPG to US MPG, divide by 1.20095 (or multiply by 0.832674)."
  },
  formulaTitle: "US to UK MPG Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To quickly convert US MPG to UK MPG in your head, add 20% to the US number. For example, 30 US MPG + 6 (which is 20% of 30) = 36 UK MPG."
  },
  expertNote: {
    title: "EPA vs WLTP Testing Cycles",
    text: "Differences in official published ratings between US and UK car brochures stem from both unit definitions and testing methods. The US EPA test procedure is generally more demanding than Europe's WLTP cycle, making real-world differences slightly wider than the unit conversion alone suggests."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting a US SUV Rating",
        subtitle: "Convert an American SUV rated at 22 MPG (US) to British Imperial MPG.",
        steps: [
          "Identify US fuel economy: 22 MPG (US).",
          "Apply conversion factor: MPG (UK) = 22 × 1.20095.",
          "Perform multiplication: 22 × 1.20095 = 26.4209.",
          "Result: 22 US MPG equals 26.42 UK MPG."
        ]
      },
      {
        title: "Example 2: Compact Sedan Efficiency",
        subtitle: "A US compact sedan achieves 32 MPG on the highway. What is its UK equivalent?",
        steps: [
          "Identify US rating: 32 MPG (US).",
          "Apply formula: 32 × 1.20095.",
          "Calculate: 32 × 1.20095 = 38.4304.",
          "Result: 32 US MPG equals 38.43 UK MPG."
        ]
      },
      {
        title: "Example 3: Hybrid Vehicle Benchmark",
        subtitle: "Convert a 54 US MPG hybrid rating for UK vehicle comparisons.",
        steps: [
          "Identify rating: 54 MPG (US).",
          "Multiply by factor: 54 × 1.20095 = 64.8513.",
          "Result: 54 US MPG equals 64.85 UK MPG."
        ]
      }
    ]
  },
  table: {
    title: "US MPG to UK Imperial MPG Conversion Table",
    headers: ["MPG (US)", "MPG (UK)", "Typical Vehicle Category"],
    rows: [
      { fromVal: "10 MPG", toVal: "12.01 MPG", extra: "Heavy-duty truck / V8 sports car" },
      { fromVal: "15 MPG", toVal: "18.01 MPG", extra: "Full-size SUV / Commercial van" },
      { fromVal: "20 MPG", toVal: "24.02 MPG", extra: "Crossover SUV / Full-size sedan" },
      { fromVal: "25 MPG", toVal: "30.02 MPG", extra: "Midsize family sedan" },
      { fromVal: "30 MPG", toVal: "36.03 MPG", extra: "Compact commuter car" },
      { fromVal: "35 MPG", toVal: "42.03 MPG", extra: "Efficient subcompact car" },
      { fromVal: "40 MPG", toVal: "48.04 MPG", extra: "Mild hybrid hatchback" },
      { fromVal: "50 MPG", toVal: "60.05 MPG", extra: "Full hybrid vehicle" },
      { fromVal: "60 MPG", toVal: "72.06 MPG", extra: "Plug-in hybrid (sustained mode)" },
      { fromVal: "70 MPG", toVal: "84.07 MPG", extra: "Ultra-efficient diesel / PHEV" }
    ]
  },
  applications: {
    title: "Practical Applications of US to UK MPG Conversion",
    items: [
      {
        title: "Vehicle Import Compliance",
        text: "Automotive enthusiasts importing American cars to the UK or vice versa must convert fuel efficiency specs to compare running costs and local road tax classifications."
      },
      {
        title: "International Automotive Journalism",
        text: "Car reviewers and motoring publications convert figures when reviewing US-market vehicles for British readers or comparing automotive specs globally."
      },
      {
        title: "Cross-Border Fleet Management",
        text: "Logistics companies operating fleets across international borders use standardized fuel conversions to evaluate driver efficiency and fuel consumption budgets."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Assuming US and UK gallons are identical: An Imperial gallon is 20% larger than a US gallon, making UK MPG numbers noticeably higher.",
      "Conflating statute miles with nautical miles: Both US and UK MPG use standard statute miles (1,609.34 meters), not nautical miles.",
      "Ignoring test cycle variations: Converting numbers mathematically does not account for differences between EPA and European WLTP testing procedures."
    ]
  },
  faqs: [
    {
      question: "Why is UK MPG higher than US MPG for the same car?",
      answer: "UK MPG is higher because a UK (Imperial) gallon is roughly 20% larger than a US gallon (4.546 liters vs 3.785 liters). Traveling on a larger volume of fuel yields more miles per gallon."
    },
    {
      question: "What is the exact multiplier to convert US MPG to UK MPG?",
      answer: "The exact multiplier is 1.200949925 (commonly rounded to 1.20095 or 1.201)."
    },
    {
      question: "How many UK MPG is 30 US MPG?",
      answer: "30 US MPG equals 36.03 UK MPG (30 × 1.20095 = 36.0285)."
    },
    {
      question: "Is a mile the same length in the US and the UK?",
      answer: "Yes, both the US and UK use the international statute mile, defined as exactly 1,609.344 meters."
    },
    {
      question: "Which gallon is bigger: US or Imperial?",
      answer: "The Imperial (UK) gallon is bigger. It contains 4.54609 liters, whereas the US gallon contains 3.78541 liters."
    },
    {
      question: "Does 50 US MPG mean 60 UK MPG?",
      answer: "Yes, 50 US MPG converts to approximately 60.05 UK Imperial MPG."
    },
    {
      question: "Why does Canada use Liters per 100km instead of MPG?",
      answer: "Canada officially switched to the metric system in the 1970s, adopting Liters per 100 kilometers (L/100km) as its official fuel consumption metric, though Imperial MPG is still understood colloquially."
    },
    {
      question: "How do I calculate UK MPG from US fuel figures?",
      answer: "Multiply your US MPG figure by 1.20095. Alternatively, divide your trip miles by US gallons used, then multiply the result by 1.20095."
    }
  ],
  relatedList: [
    { label: "MPG (UK) to MPG (US)", from: "mpg-uk", to: "mpg-us" },
    { label: "MPG (US) to km/L", from: "mpg-us", to: "km-per-liter" },
    { label: "MPG (US) to L/100km", from: "mpg-us", to: "liters-per-100km" },
    { label: "MPG (US) to L/km", from: "mpg-us", to: "liters-per-km" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) Handbook 44 — Units of Measurement",
    "UK Department for Transport — Fuel Consumption Testing Regulations",
    "US Environmental Protection Agency (EPA) — Fuel Economy Testing and Labeling"
  ]
};
