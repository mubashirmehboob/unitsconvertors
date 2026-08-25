import { CustomArticleData } from "./types";

export const literToGallonUs: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "gallon-us",
  seoTitle: "Liter to Gallon (US) Converter (L to gal) - UnitsConvertors",
  metaDescription: "Convert liters to US liquid gallons (L to gal) accurately. Discover the conversion formula (1 L ≈ 0.264172 gal), fuel economy tables, aquarium calculations, and FAQs.",
  h1: "Liter to Gallon (US) Converter",
  introduction: [
    "Converting volume from metric liters to US liquid gallons is one of the most critical fluid conversions in automotive fuel economy tracking, international travel, marine refueling, commercial chemical transport, and aquarium management. While nearly all nations price and pump automotive fuel by the metric liter, the United States, Belize, and several Caribbean nations measure and distribute liquid fuels in US liquid gallons.",
    "One standard US Customary liquid gallon is legally defined as exactly 231 cubic inches, which equals 3.785411784 liters (3,785.411784 milliliters). Consequently, 1 metric liter represents approximately 0.264172052 US liquid gallons. To convert liters to US liquid gallons, divide the volume in liters by 3.785411784 (or multiply by 0.264172052).",
    "This guide provides the exact mathematical relationship between liters and US gallons, details the distinction between US liquid gallons, US dry gallons, and British Imperial gallons, provides step-by-step worked calculations, and presents comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert liters to US liquid gallons, divide the volume in liters by 3.7854118 (or multiply by 0.264172). For example, 50 liters equals approximately 13.21 US liquid gallons.",
    formulaDisplay: "US Gallons (gal) = Liters (L) ÷ 3.785411784",
    subtext: "1 US liquid gallon = 3.785411784 L. 1 Liter = 0.264172052 US gal."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L or l) is a metric unit of volume equal to 1 cubic decimeter (dm³), 1,000 cubic centimeters (cm³), or 1,000 milliliters (0.001 m³). It is the global standard unit for automotive retail fuels, bulk industrial chemicals, municipal water supplies, and packaged consumer drinks."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Gallon (gal)",
    text: "The US Customary liquid gallon (symbol: gal) is a traditional unit of volume legally defined in the United States as exactly 231 cubic inches (3.785411784 liters). It contains 4 US quarts, 8 US pints, 16 US cups, or 128 US fluid ounces."
  },
  relationship: "The US liquid gallon is historically derived from the Queen Anne English wine gallon of 1706 (231 cubic inches). In metric terms, 231 cubic inches converts to exactly 3.785411784 liters. Therefore, 1 metric liter equals 1 ÷ 3.785411784 ≈ 0.264172052358 US liquid gallons.",
  relationshipTitle: "Liter to US Gallon Scale Hierarchy",
  relationshipItems: [
    { label: "1 Liter (1,000 mL)", value: "≈ 0.264172 US Gallons (gal)" },
    { label: "1 US Liquid Gallon (gal)", value: "= 3.785412 Liters (L)" },
    { label: "1 US Liquid Gallon", value: "= 4 Quarts = 8 Pints = 128 Fluid Ounces" },
    { label: "1 US Dry Gallon", value: "= 4.404884 L (0.22702 dry gal per liter)" },
    { label: "1 UK Imperial Gallon", value: "= 4.546090 L (0.21997 Imp gal per liter)" }
  ],
  formula: {
    text: "Divide the volume in liters by 3.785411784 to obtain the volume in US liquid gallons, or multiply the volume in liters by 0.264172052.",
    math: "Volume (gal) = Volume (L) ÷ 3.785411784",
    subtext: "Alternative formula: Volume (gal) = Volume (L) × 0.2641720524"
  },
  formulaTitle: "Liter to US Gallon Conversion Formula",
  practicalTip: {
    title: "Quick Gas Station Estimation",
    text: "For quick mental math at a gas station abroad, divide the number of liters by 4 and add about 5%. For example, 40 liters ÷ 4 = 10, plus 5% (0.5) is ~10.5 gallons (exact: 10.57 gal)."
  },
  expertNote: {
    title: "US Liquid Gallon vs UK Imperial Gallon",
    text: "Never interchange US liquid gallons (3.785 L) with British Imperial gallons (4.546 L). The British Imperial gallon is approximately 20.09% larger than the US gallon. Using the wrong gallon factor causes significant errors in vehicle mileage calculations and marine fuel planning."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Rental Vehicle Fuel Tank Fill",
        subtitle: "A rental car refueled in Europe takes 45.0 liters of gasoline. Convert this fuel volume to US gallons.",
        steps: [
          "State the given volume: Volume = 45.0 L.",
          "Apply the conversion formula: gal = 45.0 ÷ 3.785411784.",
          "Perform the division: 45.0 ÷ 3.785411784 = 11.88774 gal.",
          "Result: 45 liters is equal to approximately 11.89 US liquid gallons."
        ]
      },
      {
        title: "Example 2: Imported Reef Aquarium Volume",
        subtitle: "A German-manufactured custom glass aquarium holds 300 liters of saltwater. Find its volume in US gallons.",
        steps: [
          "State the initial volume: Volume = 300.0 L.",
          "Multiply by 0.264172052: 300.0 × 0.264172052 = 79.25162 gal.",
          "Result: 300 liters equals approximately 79.25 US liquid gallons."
        ]
      },
      {
        title: "Example 3: Commercial Water Delivery Bottle",
        subtitle: "Calculate how many liters are contained in a standard American 5-gallon office water cooler bottle.",
        steps: [
          "State the given volume: Volume = 5.0 gal (US).",
          "Set up the reverse equation: L = 5.0 × 3.785411784.",
          "Calculate the product: 5.0 × 3.785411784 = 18.92706 L.",
          "Result: A standard 5-gallon water bottle contains approximately 18.93 liters."
        ]
      }
    ]
  },
  table: {
    title: "Liter to US Liquid Gallon Conversion Table",
    headers: ["Liters (L)", "US Gallons (gal)", "Practical Fuel & Fluid Benchmark"],
    rows: [
      { fromVal: "1.000 L", toVal: "0.264 gal", extra: "1-liter reusable water bottle" },
      { fromVal: "3.785 L", toVal: "1.000 gal", extra: "Standard US retail milk jug (128 fl oz)" },
      { fromVal: "10.000 L", toVal: "2.642 gal", extra: "Portable emergency gas canister (2.5-gal class)" },
      { fromVal: "18.927 L", toVal: "5.000 gal", extra: "Standard 5-gallon office water cooler bottle" },
      { fromVal: "20.000 L", toVal: "5.283 gal", extra: "European military jerrycan (20 L)" },
      { fromVal: "40.000 L", toVal: "10.567 gal", extra: "Compact passenger car fuel tank" },
      { fromVal: "50.000 L", toVal: "13.209 gal", extra: "Mid-size sedan fuel tank" },
      { fromVal: "60.000 L", toVal: "15.850 gal", extra: "Crossover SUV fuel tank" },
      { fromVal: "75.000 L", toVal: "19.813 gal", extra: "Full-size SUV fuel tank (approx. 20 gal)" },
      { fromVal: "100.000 L", toVal: "26.417 gal", extra: "Commercial chemical storage drum" }
    ]
  },
  applications: {
    title: "Practical Applications of Liter to Gallon Conversion",
    items: [
      {
        title: "Automotive Fuel Economy & International Travel",
        text: "Travelers and automotive engineers convert fuel pumped in liters to US gallons to calculate vehicle miles per gallon (MPG) and compare transatlantic driving costs."
      },
      {
        title: "Aquarium Filtration & Chemical Dosing",
        text: "Aquarists converting European tank specs (liters) into US gallons to accurately administer medications, water conditioners, and salt mixes."
      },
      {
        title: "Aviation & Marine Refueling Calculations",
        text: "General aviation pilots and boat captains converting metric fuel meter readouts into US gallons for weight and balance and flight planning calculations."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Using the UK Imperial gallon factor (4.546 L) instead of the US liquid gallon factor (3.785 L): The Imperial gallon is 20% larger, distorting fuel consumption and capacity.",
      "Multiplying by 3.78541 instead of dividing: Because a gallon is almost 4 times larger than a liter, the numeric gallon result must always be smaller than the starting liter value.",
      "Confusing US liquid gallons (3.785 L) with US dry gallons (4.405 L): US dry gallons are used exclusively for dry commodities (grains, fruits) and not for liquids."
    ]
  },
  faqs: [
    {
      question: "How many US gallons are in 1 liter?",
      answer: "There are approximately 0.264172 US liquid gallons in 1 liter."
    },
    {
      question: "How many liters are in 1 US liquid gallon?",
      answer: "There are exactly 3.785411784 liters in 1 US liquid gallon."
    },
    {
      question: "How do I convert liters to US gallons?",
      answer: "Divide the number of liters by 3.785412 (or multiply by 0.264172). For example, 50 liters divided by 3.785412 equals approximately 13.21 US gallons."
    },
    {
      question: "Is 4 liters equal to 1 gallon?",
      answer: "4 liters is slightly more than 1 US liquid gallon. Since 1 US gallon equals 3.7854 liters, 4 liters equals approximately 1.057 US gallons."
    },
    {
      question: "How many US gallons is 20 liters?",
      answer: "20 liters divided by 3.785412 equals approximately 5.28 US liquid gallons."
    },
    {
      question: "What is 100 liters in US gallons?",
      answer: "100 liters divided by 3.785412 equals approximately 26.42 US liquid gallons."
    },
    {
      question: "Why is a US gallon different from a British gallon?",
      answer: "The US liquid gallon is based on the historic 1706 Queen Anne wine gallon (231 cubic inches), while the British Imperial gallon was defined in 1824 as 10 pounds of distilled water (277.42 cubic inches or 4.546 liters)."
    },
    {
      question: "How do I convert L/100km to US miles per gallon (MPG)?",
      answer: "Divide 235.215 by the liters per 100 km value. For example, 7.0 L/100km converts to 235.215 ÷ 7.0 ≈ 33.6 US MPG."
    }
  ],
  relatedList: [
    { label: "Gallon (US) to Liter", from: "gallon-us", to: "liter" },
    { label: "Liter to Gallon (UK)", from: "liter", to: "gallon-uk" },
    { label: "Liter to Quart (US)", from: "liter", to: "quart-us" },
    { label: "Liter to Pint (US)", from: "liter", to: "pint-us" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "NIST Handbook 44 - Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "U.S. Energy Information Administration (EIA) - Volume and Fuel Economy Equivalents",
    "BIPM SI Brochure: The International System of Units (SI)"
  ]
};
