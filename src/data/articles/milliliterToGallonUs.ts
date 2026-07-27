import { CustomArticleData } from "./types";

export const milliliterToGallonUs: CustomArticleData = {
  fromUnitId: "milliliter",
  toUnitId: "gallon-us",
  seoTitle: "Milliliter to Gallon (US) Converter (mL to gal) - UnitsConvertors",
  metaDescription: "Convert milliliters to US gallons (mL to gal) instantly. Learn the conversion formula (1 US gal ≈ 3,785.41 mL), fuel & chemical charts, and FAQs.",
  h1: "Milliliter to Gallon (US) Converter",
  introduction: [
    "Converting liquid volume from milliliters to US liquid gallons is a fundamental calculation in fuel economy tracking, agricultural chemical mixing, industrial liquid packaging, and water treatment engineering. While technical standards and international products express fluid volumes in milliliters or liters, American commercial operations and fuel pumps use US gallons.",
    "One standard US Customary liquid gallon equals 3,785.411784 milliliters (128 US fluid ounces or 4 US liquid quarts). To convert milliliters to US liquid gallons, divide the milliliter value by 3,785.411784 (or multiply by 0.000264172).",
    "This technical guide details the exact mathematical conversion between milliliters and US liquid gallons, provides step-by-step calculation examples, offers clear lookup tables, and answers common fluid measurement questions."
  ],
  quickAnswer: {
    text: "To convert milliliters to US liquid gallons, divide the milliliter amount by 3,785.411784 (or multiply by 0.000264172). For example, 5,000 mL equals approximately 1.321 US liquid gallons.",
    formulaDisplay: "Gallons (US) = mL ÷ 3,785.411784",
    subtext: "1 US Liquid Gallon = 3,785.412 mL (1 UK Imperial Gallon = 4,546.09 mL)."
  },
  aboutSourceUnit: {
    title: "Understanding the Milliliter (mL)",
    text: "The milliliter (symbol: mL) is a metric unit of liquid volume equal to one-thousandth of a liter (0.001 L) or 1 cubic centimeter (1 cm³). It is the global benchmark for liquid measurement in science, healthcare, and chemical manufacturing."
  },
  aboutTargetUnit: {
    title: "Understanding the US Gallon (gal)",
    text: "The US Customary liquid gallon (symbol: gal) is a unit of volume defined as 231 cubic inches, 128 US fluid ounces, or 4 US liquid quarts. In exact metric terms, 1 US liquid gallon equals 3,785.411784 milliliters."
  },
  relationship: "Because 1 US liquid gallon contains 3,785.41 milliliters, converting from milliliters (a small metric unit) to US gallons yields a significantly smaller numerical value. 1,000 mL (1 liter) equals roughly 0.2642 US gallons.",
  relationshipTitle: "Milliliter vs US Gallon Volume Scale",
  relationshipItems: [
    { label: "1,000 mL", value: "≈ 0.2642 US Gallon (1 Liter)" },
    { label: "3,785.41 mL", value: "= 1.0000 US Liquid Gallon (128 fl oz)" },
    { label: "5,000 mL", value: "≈ 1.3209 US Liquid Gallons" },
    { label: "10,000 mL", value: "≈ 2.6417 US Liquid Gallons" },
    { label: "18,927 mL", value: "≈ 5.0000 US Liquid Gallons (5-gal pail)" }
  ],
  formula: {
    text: "Divide the volume in milliliters by 3,785.411784 to calculate the exact equivalent volume in US Customary liquid gallons.",
    math: "Volume in US Gallons = Volume in Milliliters (mL) ÷ 3,785.411784",
    subtext: "Alternatively: Gallons = mL × 0.000264172. To convert US gallons back to mL, multiply by 3,785.412."
  },
  formulaTitle: "Milliliter to US Gallon Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Bulk Liquids",
    text: "Divide liters by 3.785 (or milliliters by 3,785) to get US gallons. Remember that a 5-gallon jug holds approximately 18.9 liters (18,927 mL)."
  },
  expertNote: {
    title: "US Liquid Gallon vs UK Imperial Gallon",
    text: "A US liquid gallon is 3,785.41 mL, whereas a UK Imperial gallon is 4,546.09 mL. An Imperial gallon is 20% larger than a US liquid gallon."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Fuel Tank Capacity",
        subtitle: "A European motorcycle fuel tank holds 15,000 mL of petrol. Convert this capacity to US gallons.",
        steps: [
          "Identify volume in milliliters: 15,000 mL.",
          "Apply conversion formula: Gallons = 15,000 ÷ 3,785.411784.",
          "Calculate: 15,000 ÷ 3,785.411784 = 3.96258.",
          "Result: 15,000 mL equals approximately 3.96 US liquid gallons."
        ]
      },
      {
        title: "Example 2: Agricultural Liquid Fertilizer",
        subtitle: "Convert a 20,000 mL batch of hydroponic fertilizer solution into US gallons.",
        steps: [
          "Identify volume: 20,000 mL.",
          "Divide by 3,785.412: 20,000 ÷ 3,785.412 = 5.28344.",
          "Result: 20,000 mL equals approximately 5.28 US liquid gallons."
        ]
      },
      {
        title: "Example 3: Aquarium Water Capacity",
        subtitle: "Convert 37,854 mL of water into US gallons for an aquarium setup.",
        steps: [
          "Identify volume: 37,854 mL.",
          "Divide by 3,785.412: 37,854 ÷ 3,785.412 = 10.0000.",
          "Result: 37,854 mL equals exactly 10 US liquid gallons."
        ]
      }
    ]
  },
  table: {
    title: "Milliliter to US Gallon Conversion Table",
    headers: ["Milliliters (mL)", "US Liquid Gallons", "Commercial Volume Reference"],
    rows: [
      { fromVal: "500 mL", toVal: "0.1321 gal", extra: "Half liter bottle" },
      { fromVal: "1,000 mL", toVal: "0.2642 gal", extra: "1 Liter bottle" },
      { fromVal: "2,000 mL", toVal: "0.5283 gal", extra: "2-Liter soda bottle" },
      { fromVal: "3,785.41 mL", toVal: "1.0000 gal", extra: "1 US Gallon milk jug" },
      { fromVal: "5,000 mL", toVal: "1.3209 gal", extra: "5 Liters" },
      { fromVal: "10,000 mL", toVal: "2.6417 gal", extra: "10 Liters" },
      { fromVal: "18,927 mL", toVal: "5.0000 gal", extra: "5 US Gallon bucket/pail" },
      { fromVal: "20,000 mL", toVal: "5.2834 gal", extra: "20 Liters" },
      { fromVal: "50,000 mL", toVal: "13.2086 gal", extra: "50 Liters (~13.2 gallons)" }
    ]
  },
  applications: {
    title: "Practical Applications of mL to gal Conversion",
    items: [
      {
        title: "Fuel Economy & Automotive Logistics",
        text: "Engineers converting vehicle fuel consumption and tank volumes from metric milliliters and liters into US gallons."
      },
      {
        title: "Agricultural Sprayer Calibration",
        text: "Farmers calculating pesticide and fertilizer application rates when mixing concentrate in milliliters per US gallon."
      },
      {
        title: "Industrial Beverage Bottling",
        text: "Commercial bottling plants converting international batch production logs from milliliters into US gallons."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing US liquid gallons (3,785.41 mL) with UK Imperial gallons (4,546.09 mL): Imperial gallons are 20% larger.",
      "Confusing US liquid gallons with US dry gallons (4,404.88 mL): Dry gallons measure bulk agricultural produce.",
      "Rounding 3,785.41 mL to 4,000 mL: Off by 5.7%, creating noticeable error in large industrial batches."
    ]
  },
  faqs: [
    {
      question: "How many US gallons is 1,000 mL (1 liter)?",
      answer: "1,000 mL equals approximately 0.2642 US liquid gallons."
    },
    {
      question: "How many mL is in 1 US gallon?",
      answer: "1 US liquid gallon equals exactly 3,785.411784 milliliters (commonly rounded to 3,785 mL)."
    },
    {
      question: "How many US gallons is 5,000 mL?",
      answer: "5,000 mL equals approximately 1.321 US liquid gallons."
    },
    {
      question: "How many mL is in a 5-gallon jug?",
      answer: "A 5-gallon water jug contains approximately 18,927 milliliters (18.927 liters)."
    },
    {
      question: "How do I convert 2,000 mL to US gallons?",
      answer: "Divide 2,000 by 3,785.412 to get approximately 0.528 US gallons."
    },
    {
      question: "What is 10,000 mL in US gallons?",
      answer: "10,000 mL divided by 3,785.412 equals approximately 2.642 US gallons."
    },
    {
      question: "Why is an Imperial gallon bigger than a US gallon?",
      answer: "The US kept the 1707 Queen Anne wine gallon (231 cu in), while the UK standardized in 1824 on the volume of 10 lbs of water (277.42 cu in)."
    },
    {
      question: "How many US gallons are in 50 liters (50,000 mL)?",
      answer: "50 liters (50,000 mL) equals approximately 13.209 US liquid gallons."
    }
  ],
  relatedList: [
    { label: "Milliliter to Quart (US)", from: "milliliter", to: "quart-us" },
    { label: "Milliliter to Pint (US)", from: "milliliter", to: "pint-us" },
    { label: "Milliliter to Cup (US)", from: "milliliter", to: "cup-us" },
    { label: "Milliliter to Liter", from: "milliliter", to: "liter" }
  ],
  references: [
    "NIST Special Publication 811 — Guide for the Use of the International System of Units",
    "EPA Fuel Economy & Vehicle Capacity Measurement Standards"
  ]
};
