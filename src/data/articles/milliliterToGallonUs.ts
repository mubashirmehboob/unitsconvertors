import { CustomArticleData } from "./types";

export const milliliterToGallonUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "gallon-us",
  seoTitle: "Milliliter to Gallon (US) Converter - mL to gal (US)",
  metaDescription: "Convert milliliters to US liquid gallons (mL to gal). Exact conversion formula (1 gal = 3,785.41 mL), step-by-step calculations, chemical mixing, and fuel tables.",
  h1: "Milliliter to Gallon (US) Converter",
  introduction: [
    "From automotive fuel economy testing and fleet logistics to agricultural herbicide mixing, swimming pool chemical dosing, and industrial beverage bottling, converting volume between metric milliliters (mL) and US liquid gallons (gal) is a fundamental transatlantic fluid calculation. While scientific standards, laboratory research, and consumer packaging outside the US rely on milliliters and liters, bulk chemical distribution, fuel pumps, and fluid handling across the United States operate primarily in US liquid gallons.",
    "A standard US liquid gallon equals exactly 3,785.411784 milliliters (231 cubic inches or 128 US fluid ounces). Because industrial fluid batches and agricultural sprayers involve thousands of milliliters, precise conversion ensures chemical efficacy, avoids costly over-concentration, and guarantees regulatory compliance. This comprehensive guide provides the exact mathematical conversion ratio, practical mental shortcuts, step-by-step worked examples, reference conversion tables, and real-world industrial context."
  ],
  quickAnswer: {
    text: "To convert milliliters to US liquid gallons, divide the volume in milliliters by 3,785.412 (or multiply by 0.000264172). For example, 5,000 mL equals approximately 1.321 US liquid gallons.",
    formulaDisplay: "1 US Gallon = 3,785.411784 mL | Volume (gal) = Volume (mL) ÷ 3,785.411784",
    subtext: "One US liquid gallon equals 231 cubic inches (3.785411784 liters). Dividing 1,000 mL (1 L) by 3,785.412 mL yields approximately 0.264172 gallons per liter."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL or ml) is a metric unit of volume equal to one-thousandth of a liter (10⁻³ L) or 1 cubic centimeter (1 cm³ / cc). It is the universal benchmark for scientific laboratory assays, pharmaceutical medication dosing, consumer beverage packaging, and fine liquid handling."
  },
  aboutTargetUnit: {
    title: "Understanding the US Liquid Gallon (gal)",
    text: "The US liquid gallon (symbol: gal) is a customary unit of volume defined as exactly 231 cubic inches, 128 US fluid ounces, 4 US liquid quarts, or 3,785.411784 milliliters (3.785412 liters). Tracing its roots to the British 1707 Queen Anne wine gallon, it is the standard retail and commercial fluid measurement across the United States."
  },
  relationship: "One US liquid gallon contains exactly 3,785.411784 milliliters. Converting from milliliters (a small unit) to US gallons (a large bulk unit) scales the numerical value down by a factor of approximately 3,785.41. Inversely, 1 milliliter represents approximately 0.000264172 US liquid gallons.",
  relationshipTitle: "Metric to US Fluid Scale: Milliliters vs US Gallons",
  relationshipItems: [
    { label: "1 US Liquid Gallon (gal)", value: "exactly 3,785.411784 Milliliters (mL)" },
    { label: "1 US Liquid Gallon (gal)", value: "exactly 3.785411784 Liters (L)" },
    { label: "1,000 Milliliters (1 L)", value: "approx. 0.264172 US Liquid Gallons" },
    { label: "1 UK Imperial Gallon", value: "4,546.09 mL (approx. 1.20095 US gal)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 3,785.411784 to obtain US liquid gallons, or multiply by 0.000264172.",
    math: "Volume in US Gallons (gal) = Volume in Milliliters (mL) ÷ 3,785.411784",
    subtext: "Alternatively: Volume in US Gallons = (Volume in mL ÷ 1,000) ÷ 3.785412"
  },
  formulaTitle: "Milliliter to US Gallon Conversion Formula",
  practicalTip: {
    title: "The 3.8 Liters Mental Rule",
    text: "To convert quickly in your head, convert milliliters to liters (divide by 1,000), then divide the liters by 3.8. For example, 19,000 mL = 19 L; dividing 19 by 3.8 gives exactly 5.0 US gallons."
  },
  examples: {
    title: "Step-by-Step Worked Calculations",
    items: [
      {
        title: "Example 1: Motorcycle Fuel Tank Refill",
        subtitle: "A touring motorcycle fuel tank has a capacity of 18,500 mL of gasoline. Calculate this capacity in US gallons.",
        steps: [
          "State the given volume: Volume = 18,500 mL.",
          "Apply the conversion formula: Volume (gal) = Volume (mL) ÷ 3,785.411784.",
          "Substitute the value: Volume (gal) = 18,500 ÷ 3,785.411784.",
          "Perform the division: Volume (gal) = 4.8872 gal.",
          "Conclude: The motorcycle fuel tank holds approximately 4.89 US liquid gallons."
        ]
      },
      {
        title: "Example 2: Agricultural Crop Sprayer Tank Mix",
        subtitle: "An orchard farmer prepares a 75,000 mL batch of organic micronutrient solution. Express this tank volume in US gallons.",
        steps: [
          "State the initial volume: Volume = 75,000 mL.",
          "Multiply by the factor: 75,000 × 0.000264172.",
          "Calculate the product: 75,000 × 0.000264172 = 19.8129 gal.",
          "Conclude: The sprayer tank contains approximately 19.81 US gallons (roughly a 20-gallon sprayer batch)."
        ]
      },
      {
        title: "Example 3: Domestic Aquarium Water Treatment",
        subtitle: "An aquarium hobbyist tests an imported rimless glass tank with an interior water capacity of 113,562 mL. Find the volume in gallons.",
        steps: [
          "Identify the volume: Volume = 113,562 mL.",
          "Set up the equation: Volume (gal) = 113,562 ÷ 3,785.411784.",
          "Compute the result: 113,562 ÷ 3,785.411784 = 30.0000 gal.",
          "Conclude: The aquarium water volume equals exactly 30.00 US liquid gallons."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Gallon Conversion Table",
    headers: ["Milliliters (mL)", "US Liquid Gallons (gal)", "Liters (L)", "Everyday Commercial Benchmark"],
    rows: [
      { fromVal: "500 mL", toVal: "0.1321 gal", extra: "0.5 L", extra2: "Standard single-serve water bottle (16.9 fl oz)" },
      { fromVal: "1,000 mL", toVal: "0.2642 gal", extra: "1.0 L", extra2: "Standard 1-liter beverage bottle" },
      { fromVal: "2,000 mL", toVal: "0.5283 gal", extra: "2.0 L", extra2: "Standard 2-liter family soda bottle" },
      { fromVal: "3,785.41 mL", toVal: "1.0000 gal", extra: "3.785 L", extra2: "Exact definition of 1 Full US Liquid Gallon" },
      { fromVal: "5,000 mL", toVal: "1.3209 gal", extra: "5.0 L", extra2: "Small chemical carboy / tabletop jug" },
      { fromVal: "10,000 mL", toVal: "2.6417 gal", extra: "10.0 L", extra2: "Medium janitorial cleaning concentrate bottle" },
      { fromVal: "18,927 mL", toVal: "5.0000 gal", extra: "18.93 L", extra2: "Standard 5-gallon hardware store utility bucket / paint pail" },
      { fromVal: "37,854 mL", toVal: "10.0000 gal", extra: "37.85 L", extra2: "Standard 10-gallon residential aquarium" },
      { fromVal: "100,000 mL", toVal: "26.4172 gal", extra: "100.0 L", extra2: "Small industrial chemical drum" },
      { fromVal: "200,000 mL", toVal: "52.8344 gal", extra: "200.0 L", extra2: "Standard 55-gallon industrial steel drum capacity (~208 L)" }
    ]
  },
  applications: {
    title: "Agriculture, Automotive & Industrial Chemistry Applications",
    items: [
      {
        title: "Agricultural Sprayer Chemical Mixing Rates",
        text: "Farmers mix pesticide concentrates measured in milliliters per gallon of water in accordance with EPA pesticide labels to ensure correct pest control without crop damage."
      },
      {
        title: "Automotive Fuel Economy & Range Calculations",
        text: "Automotive engineers convert fuel injector discharge rates (mL/min) into miles per gallon (MPG) when calibrating digital electronic control units (ECU)."
      },
      {
        title: "Industrial Beverage Bottling & Syrup Blending",
        text: "Soft drink and brewing facilities blend concentrated flavor extracts (measured in mL) into bulk syrup mixing tanks calibrated in US gallons."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing US liquid gallons with UK Imperial gallons: 1 US liquid gallon is 3,785.41 mL, whereas 1 UK Imperial gallon is 4,546.09 mL (20% larger).",
      "Confusing US liquid gallons with US dry gallons: A US dry gallon equals 4,404.88 mL (used exclusively for dry agricultural produce like berries and grain).",
      "Approximating 1 gallon as 4 liters: Assuming 1 gallon = 4,000 mL introduces a 5.7% error, which creates significant discrepancies in large chemical or fuel batches."
    ]
  },
  faqs: [
    {
      question: "How many milliliters are in 1 US liquid gallon?",
      answer: "There are exactly 3,785.411784 milliliters (approximately 3,785.41 mL or 3.785 liters) in one US liquid gallon."
    },
    {
      question: "What is the formula to convert mL to US gallons?",
      answer: "The formula is: Volume in US Gallons = Volume in mL ÷ 3,785.411784 (or Volume in mL × 0.000264172)."
    },
    {
      question: "How many US gallons is 1,000 mL (1 liter)?",
      answer: "1,000 mL (1 liter) is equal to approximately 0.264172 US liquid gallons (roughly 0.264 gal)."
    },
    {
      question: "How many US gallons is 5,000 mL?",
      answer: "5,000 mL is equal to approximately 1.32086 US liquid gallons (5,000 ÷ 3,785.412 = 1.321 gal)."
    },
    {
      question: "How many milliliters are in a 5-gallon bucket?",
      answer: "A standard 5-gallon bucket contains approximately 18,927.06 milliliters (18.927 liters)."
    },
    {
      question: "How do I convert US gallons back to milliliters?",
      answer: "To convert US gallons to milliliters, multiply the gallon value by 3,785.411784 (for example, 3 gal × 3,785.412 = 11,356.24 mL)."
    },
    {
      question: "Why is a UK Imperial gallon larger than a US gallon?",
      answer: "The US retained the historical 1707 British Queen Anne wine gallon (231 cu in / 3.785 L), while the British Empire standardized in 1824 on the volume of 10 pounds of pure water (277.42 cu in / 4.546 L)."
    },
    {
      question: "How many fluid ounces are in 1 US gallon?",
      answer: "There are exactly 128 US fluid ounces in one US liquid gallon."
    }
  ],
  relatedList: [
    { label: "Gallon (US) to Milliliter", from: "gallon-us", to: "milliliter" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" },
    { label: "Milliliter to Gallon (UK)", from: "milliliter", to: "gallon-uk" },
    { label: "Milliliter to Quart (US)", from: "milliliter", to: "quart-us" }
  ],
  references: [
    "NIST Handbook 44 — Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "U.S. Environmental Protection Agency (EPA) — Liquid Measurement & Agricultural Mixing Standards",
    "ISO 80000-3:2019 — Quantities and Units (Space and Time)"
  ]
};
