import { CustomArticleData } from "./types";

export const literToGallonUs: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "gallon-us",
  seoTitle: "Liter to Gallon (US) Converter - L to gal (US)",
  metaDescription: "Convert liters to US liquid gallons (L to gal) accurately. Learn the conversion formula (1 L ≈ 0.264172 gal), fuel economy calculations, and reference charts.",
  h1: "Liter to Gallon (US) Converter",
  introduction: [
    "Converting liters to US liquid gallons is one of the most frequent volume conversions, essential for international travel, automotive fuel economy tracking, aviation, and beverage packaging. While most countries sell gasoline and beverages by the liter, the United States measures liquid volumes in US liquid gallons.",
    "Because one US liquid gallon is defined as exactly 3.785411784 liters, converting liters to US gallons requires dividing the liter value by 3.78541 (or multiplying by 0.264172). This guide provides step-by-step conversion instructions, worked examples, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert liters to US liquid gallons, divide the number of liters by 3.78541 (or multiply by 0.264172). For example, 50 liters equals approximately 13.21 US gallons.",
    formulaDisplay: "1 L ≈ 0.264172 gal (US)",
    subtext: "1 US liquid gallon contains exactly 3.785411784 liters."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L) is a metric unit of volume equal to 1 cubic decimeter (dm³). It is used internationally for fuel sales, beverage packaging, milk sales, and chemical measurements."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Gallon (gal)",
    text: "The US liquid gallon (symbol: gal) is a US customary unit of volume legally defined as 231 cubic inches, which equals exactly 3.785411784 liters. It is used in the United States and several Caribbean and Latin American countries for fuel, milk, water, and paint."
  },
  relationship: "The US liquid gallon was originally based on the British wine gallon of 231 cubic inches. In the metric system, 231 cubic inches corresponds to exactly 3.785411784 liters. Therefore, 1 liter represents 1 / 3.785411784 ≈ 0.264172052 US gallons.",
  relationshipTitle: "US Gallon vs Metric Liter Relationship",
  relationshipItems: [
    { label: "1 Liter (L)", value: "≈ 0.264172 US Gallons (gal)" },
    { label: "1 US Gallon (gal)", value: "= 3.785412 Liters (L)" }
  ],
  formula: {
    text: "To find volume in US liquid gallons, divide the volume in liters by 3.785411784.",
    math: "Volume in US Gallons (gal) = Volume in Liters (L) / 3.785411784",
    subtext: "Alternatively: US Gallons = Liters × 0.264172052."
  },
  formulaTitle: "The Liter to US Gallon Formula",
  practicalTip: {
    title: "Quick Gas Station Estimation",
    text: "For a rough estimate when filling a gas tank overseas, divide the liters by 3.8, or multiply by 0.26. 40 liters is about 10.5 gallons."
  },
  expertNote: {
    title: "US Gallon vs UK Imperial Gallon",
    text: "Be careful not to confuse the US liquid gallon (3.785 L) with the UK Imperial gallon (4.546 L). The Imperial gallon is approximately 20% larger than the US gallon."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Vehicle Fuel Tank Refill",
        subtitle: "A rental car in Europe takes 45 liters of fuel. Calculate how many US gallons were pumped.",
        steps: [
          "Identify the volume in liters: 45 L.",
          "Apply the formula: gal = L / 3.785412.",
          "Perform the division: 45 / 3.785412 = 11.8877.",
          "Result: 45 liters is equal to approximately 11.89 US gallons."
        ]
      },
      {
        title: "Example 2: Aquarium Capacity",
        subtitle: "An imported fish tank holds 200 liters of water. Convert its capacity to US gallons.",
        steps: [
          "Identify the volume: 200 L.",
          "Multiply by 0.264172: 200 × 0.264172 = 52.8344.",
          "Result: 200 liters equals approximately 52.83 US gallons."
        ]
      }
    ]
  },
  table: {
    title: "Liter to US Gallon Reference Table",
    headers: ["Liters (L)", "US Gallons (gal)", "Practical Fuel / Household Context"],
    rows: [
      { fromVal: "1 L", toVal: "0.26 gal", extra: "1 liter water bottle" },
      { fromVal: "3.785 L", toVal: "1.00 gal", extra: "Standard US milk jug" },
      { fromVal: "10 L", toVal: "2.64 gal", extra: "Portable gas canister" },
      { fromVal: "20 L", toVal: "5.28 gal", extra: "5-gallon water cooler jug" },
      { fromVal: "40 L", toVal: "10.57 gal", extra: "Compact car fuel tank" },
      { fromVal: "50 L", toVal: "13.21 gal", extra: "Mid-size sedan fuel tank" },
      { fromVal: "60 L", toVal: "15.85 gal", extra: "Crossover SUV fuel tank" },
      { fromVal: "80 L", toVal: "21.13 gal", extra: "Full-size pickup truck fuel tank" },
      { fromVal: "100 L", toVal: "26.42 gal", extra: "Large commercial fuel tank" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "International Automotive Travel",
        text: "Drivers converting European gas prices (Euros per liter) to US metrics calculate fuel volume in US gallons to compare fuel costs."
      },
      {
        title: "Aquarium Care & Dosing",
        text: "Fish hobbyists converting water conditioner dosages between European liters and US aquarium gallon ratings."
      },
      {
        title: "Aviation & Marine Refueling",
        text: "Pilots and boaters verify fuel tank capacity conversions between liter fuel pump meters and gallon flight planners."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Using the UK Imperial gallon conversion factor (4.546 L) instead of the US gallon factor (3.785 L).",
      "Multiplying by 3.78541 instead of dividing: Since a gallon is larger than a liter, the gallon value will always be smaller.",
      "Confusing US liquid gallons with US dry gallons (1 US dry gal = 4.404 L)."
    ]
  },
  faqs: [
    {
      question: "How many US gallons are in 1 liter?",
      answer: "There are approximately 0.264172 US liquid gallons in 1 liter."
    },
    {
      question: "How many liters are in 1 US gallon?",
      answer: "There are exactly 3.785411784 liters in 1 US liquid gallon."
    },
    {
      question: "How do I convert 50 liters to US gallons?",
      answer: "Divide 50 by 3.785412 to get approximately 13.21 US gallons."
    },
    {
      question: "Is 4 liters equal to 1 gallon?",
      answer: "4 liters is slightly more than 1 US gallon. 1 US gallon is 3.785 liters, so 4 liters is about 1.057 US gallons."
    },
    {
      question: "How many US gallons is 20 liters?",
      answer: "20 liters divided by 3.785412 equals approximately 5.28 US gallons."
    },
    {
      question: "What is 100 liters in US gallons?",
      answer: "100 liters divided by 3.785412 equals approximately 26.42 US gallons."
    },
    {
      question: "Why is a US gallon different from a UK gallon?",
      answer: "The US gallon is based on the 18th-century British wine gallon (231 cu in), whereas the UK adopted the larger Imperial gallon (277.42 cu in) in 1824."
    },
    {
      question: "How do I convert liters per 100 km (L/100km) to US miles per gallon (MPG)?",
      answer: "Divide 235.215 by the L/100km value. For example, 8 L/100km = 235.215 / 8 ≈ 29.4 US MPG."
    }
  ],
  relatedList: [
    { label: "Liter to Gallon (UK)", from: "liter", to: "gallon-uk" },
    { label: "Liter to Quart", from: "liter", to: "quart-us" },
    { label: "Liter to Pint", from: "liter", to: "pint-us" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "NIST Handbook 44 - Appendix C: General Tables of Units of Measurement",
    "U.S. Energy Information Administration (EIA) - Gasoline Unit Conversions"
  ]
};
