import { CustomArticleData } from "./types";

export const kilometerToMile: CustomArticleData = {
  fromUnitId: "kilometer",
  toUnitId: "mile",
  seoTitle: "Kilometer to Mile Converter | km to mi",
  metaDescription: "Convert kilometers to miles (km to km) easily. See the official conversion factor, manual calculation tips, reference tables, and FAQs.",
  h1: "Kilometer to Mile Converter",
  introduction: [
    "Why do road distances and vehicle speed limits switch as you cross borders? Traveling from a country using the metric system to one using imperial measurements requires converting kilometers (km) into statute miles (mi). This translation is vital for road safety, logistics planning, international shipping, and flight navigation.",
    "This guide explains the mathematical relationship between the kilometer and the mile. We detail the exact conversion factors, step-by-step procedures for manual calculation, and common pitfalls to watch out for during travel."
  ],
  quickAnswer: {
    text: "One kilometer is equivalent to approximately 0.621371192 miles. Conversely, one standard international statute mile is defined as exactly 1.609344 kilometers.",
    formulaDisplay: "1 km ≈ 0.621371 mi",
    subtext: "To convert kilometers to miles manually, multiply the kilometer value by 0.621371, or divide by the constant 1.609344."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilometer (km)",
    text: "The kilometer is an officially recognized metric unit of length equal to exactly 1,000 meters. Symbolized by 'km', it is used internationally on road signs, vehicle speedometers, and geographical maps to list geographic distances."
  },
  aboutTargetUnit: {
    title: "Understanding the Mile (mi)",
    text: "The mile (statute mile) is an imperial unit of length common in the United States and the United Kingdom. Standardized under the International Yard and Pound Agreement of 1959, one international mile is defined as exactly 1,609.344 meters (or 1.609344 kilometers)."
  },
  relationship: "Because the mile belongs to the imperial system and the kilometer belongs to the metric system, their relationship is determined by international standard agreements. One statute mile contains exactly 1.609344 kilometers, which makes a kilometer equal to roughly 62% of a mile.",
  relationshipItems: [
    { label: "Kilometers to Miles", value: "1 km ≈ 0.621371 mi" },
    { label: "Miles to Kilometers", value: "1 mi = 1.609344 km" }
  ],
  formula: {
    text: "To convert kilometers to miles, divide your kilometer value by 1.609344. Alternatively, multiply the kilometer number by the decimal coefficient of 0.621371192.",
    math: "Miles (mi) = Kilometers (km) / 1.609344",
    subtext: "For rapid travel estimates, multiplying the kilometer value by 0.6 or 0.62 yields a sufficiently close approximation."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Driving Distance Planning",
        subtitle: "Convert a highway trip distance of 120 kilometers into miles.",
        steps: [
          "State the starting distance: 120 kilometers.",
          "Apply the formula: Divide the kilometer value by 1.609344.",
          "Perform the division: 120 / 1.609344 = 74.564543.",
          "State the final result: 120 kilometers is equivalent to approximately 74.56 miles."
        ]
      },
      {
        title: "Example 2: Analyzing Athletic Run",
        subtitle: "Convert a 10-kilometer marathon road race to miles.",
        steps: [
          "State the starting distance: 10 kilometers.",
          "Apply the formula: Multiply 10 by the decimal coefficient of 0.621371192.",
          "Complete the multiplication: 10 × 0.621371192 = 6.213712.",
          "State the final result: A 10-kilometer run is equivalent to approximately 6.21 miles."
        ]
      }
    ]
  },
  table: {
    title: "Kilometer to Mile Conversion Table",
    headers: ["Kilometers (km)", "Miles (mi)", "Practical Approximation"],
    rows: [
      { fromVal: "1", toVal: "0.6214", extra: "About 5/8 of a mile" },
      { fromVal: "5", toVal: "3.1069", extra: "Slightly over 3 miles" },
      { fromVal: "10", toVal: "6.2137", extra: "About 6 and 1/5 miles" },
      { fromVal: "20", toVal: "12.4274", extra: "About 12 and 2/5 miles" },
      { fromVal: "50", toVal: "31.0686", extra: "About 31 miles" },
      { fromVal: "100", toVal: "62.1371", extra: "About 62 miles" },
      { fromVal: "150", toVal: "93.2057", extra: "About 93 miles" },
      { fromVal: "200", toVal: "124.2742", extra: "About 124 miles" }
    ]
  },
  applications: {
    title: "Everyday Travel & Sport Applications",
    items: [
      {
        title: "Cross-Border Road Travel",
        text: "Drivers crossing from Canada or Mexico into the United States must convert signposted kilometer limits to miles to comply with local traffic laws."
      },
      {
        title: "Vehicle Speedometers",
        text: "Vehicles imported between metric and imperial markets require speed conversion calculations to help drivers accurately track speeds in mph."
      },
      {
        title: "Athletic Running Events",
        text: "Global runs are organized in kilometers (e.g., 5k, 10k, 21k half-marathons). Competitors from the US or UK convert these values into miles to pace their running split times."
      }
    ]
  },
  pitfalls: {
    title: "Common Travel Mistakes",
    items: [
      "Confusing statute miles with nautical miles: Nautical miles are longer than statute miles (1 nmi = 1.852 km vs. 1 mi = 1.609344 km). Miscalculating this can disrupt shipping navigation.",
      "Over-simplifying mental factors: Using a factor of 0.5 or 0.7 for mental conversion simplifies math but introduces significant planning errors on long road trips.",
      "Rounding conversion coordinates too early: In logistics planning, rounding the multiplier causes cumulative mileage discrepancies over large fleets."
    ]
  },
  faqs: [
    {
      question: "How many miles are in a kilometer?",
      answer: "A kilometer contains approximately 0.621371 miles. For simple estimation, it is roughly equal to five-eighths of a mile."
    },
    {
      question: "What is the formula to convert km to miles?",
      answer: "The formula is: Miles (mi) = Kilometers (km) / 1.609344. Alternatively, multiply the kilometer number by 0.621371."
    },
    {
      question: "How do I convert kilometers to miles manually?",
      answer: "Multiply the kilometer number by 0.62. For example, 50 kilometers multiplied by 0.62 equals 31 miles."
    },
    {
      question: "Is a mile longer than a kilometer?",
      answer: "Yes, a mile is significantly longer than a kilometer. One mile is equal to exactly 1.609344 kilometers, making a mile about 60% longer."
    },
    {
      question: "What is the abbreviation for kilometers and miles?",
      answer: "The standard abbreviation for kilometers is 'km', and the abbreviation for miles is 'mi'. Both are lowercase."
    },
    {
      question: "How many miles is 5 kilometers?",
      answer: "5 kilometers is equivalent to approximately 3.11 miles. This is a common race distance for recreational runners."
    },
    {
      question: "How many miles is 100 kilometers?",
      answer: "100 kilometers is equivalent to approximately 62.14 miles."
    },
    {
      question: "Why do different countries use miles and kilometers?",
      answer: "Most countries transitioned to the metric kilometer during international standardizations in the 19th and 20th centuries. The United States and a few others retained the imperial statute mile standard for road infrastructure."
    }
  ],
  relatedList: [
    { label: "Mile to Kilometer", from: "mile", to: "kilometer" },
    { label: "Kilometer to Meter", from: "kilometer", to: "meter" },
    { label: "Kilometer to Centimeter", from: "kilometer", to: "centimeter" },
    { label: "Kilometer to Millimeter", from: "kilometer", to: "millimeter" },
    { label: "Kilometer to Micrometer", from: "kilometer", to: "micrometer" },
    { label: "Kilometer to Nanometer", from: "kilometer", to: "nanometer" },
    { label: "Kilometer to Yard", from: "kilometer", to: "yard" },
    { label: "Kilometer to Foot", from: "kilometer", to: "foot" },
    { label: "Kilometer to Inch", from: "kilometer", to: "inch" },
    { label: "Kilometer to Nautical Mile", from: "kilometer", to: "nautical-mile" },
    { label: "Kilometer to Rod", from: "kilometer", to: "rod" },
    { label: "Kilometer to Chain", from: "kilometer", to: "chain" },
    { label: "Kilometer to Furlong", from: "kilometer", to: "furlong" },
    { label: "Kilometer to League", from: "kilometer", to: "league" },
    { label: "Kilometer to Hand", from: "kilometer", to: "hand" },
    { label: "Kilometer to Cubit", from: "kilometer", to: "cubit" }
  ],
  references: [
    "International Yard and Pound Agreement of 1959.",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units.",
    "Federal Highway Administration (US) - Road distance metrics."
  ]
};
