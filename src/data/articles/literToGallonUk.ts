import { CustomArticleData } from "./types";

export const literToGallonUk: CustomArticleData = {
  fromUnitId: "liter",
  toUnitId: "gallon-uk",
  seoTitle: "Liter to Gallon (UK) Converter - L to Imp gal",
  metaDescription: "Convert liters to UK Imperial gallons (L to Imp gal) accurately. Learn the 4.54609 division formula, UK fuel calculations, and Imperial conversion charts.",
  h1: "Liter to Gallon (UK / Imperial) Converter",
  introduction: [
    "Converting liters to UK Imperial gallons is essential for motorists, sailors, aviators, and trade professionals across the United Kingdom, Canada, Ireland, Australia, and Commonwealth nations. Although petrol and diesel in the UK are sold in liters at gas stations, fuel efficiency is still widely discussed in miles per gallon (MPG) based on the Imperial gallon.",
    "Because one UK Imperial gallon is legally defined as exactly 4.54609 liters, converting liters to UK gallons requires dividing the liter count by 4.54609 (or multiplying by 0.219969). This article explains the Imperial definition, conversion steps, and practical reference tables."
  ],
  quickAnswer: {
    text: "To convert liters to UK Imperial gallons, divide the number of liters by 4.54609 (or multiply by 0.219969). For example, 50 liters is equal to approximately 11.00 UK Imperial gallons.",
    formulaDisplay: "1 L ≈ 0.219969 gal (UK)",
    subtext: "1 UK Imperial gallon contains exactly 4.54609 liters."
  },
  aboutSourceUnit: {
    title: "Understanding the Liter (L)",
    text: "The liter (symbol: L) is a metric unit of volume equal to 1 cubic decimeter (dm³). It is the standard legal unit for liquid measurements in the UK, Europe, Canada, and Australia."
  },
  aboutTargetUnit: {
    title: "Understanding the UK Imperial Gallon (Imp gal)",
    text: "The UK Imperial gallon (symbol: gal or Imp gal) was established by the British Weights and Measures Act of 1824, defined as the volume of 10 pounds of distilled water at 62°F. It is legally standardized as exactly 4.54609 liters, making it about 20% larger than the US gallon."
  },
  relationship: "The Imperial gallon is based on 10 pounds of water, resulting in 277.419 cubic inches or exactly 4.54609 liters. Consequently, 1 liter represents 1 / 4.54609 ≈ 0.219969248 UK Imperial gallons.",
  relationshipTitle: "UK Imperial Gallon vs Metric Liter Scale",
  relationshipItems: [
    { label: "1 Liter (L)", value: "≈ 0.219969 UK Gallons (Imp gal)" },
    { label: "1 UK Gallon (Imp gal)", value: "= 4.54609 Liters (L)" }
  ],
  formula: {
    text: "Calculate volume in UK Imperial gallons by dividing liters by 4.54609.",
    math: "Volume in UK Gallons (Imp gal) = Volume in Liters (L) / 4.54609",
    subtext: "Alternatively: Imp gal = Liters × 0.219969248."
  },
  formulaTitle: "The Liter to UK Imperial Gallon Formula",
  practicalTip: {
    title: "The UK 50-Liter Rule",
    text: "In the UK, filling a standard 50-liter car fuel tank gives almost exactly 11 Imperial gallons (50 / 4.546 = 10.999 Imp gal)."
  },
  expertNote: {
    title: "Imperial vs US Gallon Distinction",
    text: "A UK Imperial gallon is 4.54609 L, whereas a US liquid gallon is 3.78541 L. Therefore, UK MPG figures are naturally higher than US MPG figures for the same fuel efficiency."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: British Car Fuel Refill",
        subtitle: "A British driver pumps 60 liters of unleaded petrol at a UK service station. Convert this volume to Imperial gallons.",
        steps: [
          "Identify the volume in liters: 60 L.",
          "Apply the formula: Imp gal = L / 4.54609.",
          "Perform the division: 60 / 4.54609 = 13.198.",
          "Result: 60 liters is equal to approximately 13.20 UK Imperial gallons."
        ]
      },
      {
        title: "Example 2: Marine Fuel Reservoir",
        subtitle: "A yacht fuel tank in Canada holds 180 liters of diesel. Calculate its capacity in Imperial gallons.",
        steps: [
          "Identify the volume: 180 L.",
          "Multiply by 0.219969: 180 × 0.219969 = 39.594.",
          "Result: 180 liters equals approximately 39.59 UK Imperial gallons."
        ]
      }
    ]
  },
  table: {
    title: "Liter to UK Imperial Gallon Reference Table",
    headers: ["Liters (L)", "UK Imperial Gallons (Imp gal)", "UK Driving / Industrial Context"],
    rows: [
      { fromVal: "4.546 L", toVal: "1.00 Imp gal", extra: "1 UK Imperial gallon of water" },
      { fromVal: "10 L", toVal: "2.20 Imp gal", extra: "Portable fuel jerrycan" },
      { fromVal: "20 L", toVal: "4.40 Imp gal", extra: "Standard metal fuel canister" },
      { fromVal: "40 L", toVal: "8.80 Imp gal", extra: "Supermini hatchback tank" },
      { fromVal: "45.46 L", toVal: "10.00 Imp gal", extra: "10 Imperial gallons benchmark" },
      { fromVal: "50 L", toVal: "11.00 Imp gal", extra: "Standard UK family car tank" },
      { fromVal: "65 L", toVal: "14.30 Imp gal", extra: "Executive saloon / SUV tank" },
      { fromVal: "100 L", toVal: "22.00 Imp gal", extra: "Large commercial van tank" }
    ]
  },
  applications: {
    title: "Real-World Applications",
    items: [
      {
        title: "UK & Canadian Fuel Economy",
        text: "Drivers calculating UK MPG from liter pump receipts divide the fuel purchased in liters by 4.54609 before dividing distance travelled in miles."
      },
      {
        title: "Brewing & Distilling Industries",
        text: "Traditional British breweries and cider makers measure cask conditioning in Imperial gallons while logging official metric production in liters."
      },
      {
        title: "Maritime & Agricultural Equipment",
        text: "Legacy British farm equipment and marine vessels feature tank badges in Imperial gallons but are fueled at modern metric docks."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing UK Imperial gallons (4.546 L) with US liquid gallons (3.785 L).",
      "Calculating UK MPG using the US conversion factor, leading to an incorrect 20% underestimation of fuel efficiency.",
      "Multiplying by 4.54609 instead of dividing when converting from liters to gallons."
    ]
  },
  faqs: [
    {
      question: "How many UK Imperial gallons are in 1 liter?",
      answer: "There are approximately 0.219969 UK Imperial gallons in 1 liter."
    },
    {
      question: "How many liters are in 1 UK Imperial gallon?",
      answer: "There are exactly 4.54609 liters in 1 UK Imperial gallon."
    },
    {
      question: "How do I convert 50 liters to UK gallons?",
      answer: "Divide 50 by 4.54609 to get almost exactly 11.00 UK Imperial gallons."
    },
    {
      question: "Why is a UK gallon bigger than a US gallon?",
      answer: "In 1824, Britain standardized the Imperial gallon based on 10 pounds of water (277.42 cu in), whereas the US kept the older British wine gallon of 231 cu in."
    },
    {
      question: "What is 40 liters in UK gallons?",
      answer: "40 liters divided by 4.54609 equals approximately 8.80 UK Imperial gallons."
    },
    {
      question: "How do I convert L/100km to UK Imperial MPG?",
      answer: "Divide 282.481 by the L/100km figure. For example, 8 L/100km = 282.481 / 8 ≈ 35.3 UK MPG."
    },
    {
      question: "Is petrol in the UK sold in liters or gallons?",
      answer: "Petrol and diesel in the UK have been legally sold exclusively in liters since 1995."
    },
    {
      question: "What is 100 liters in UK Imperial gallons?",
      answer: "100 liters divided by 4.54609 equals approximately 22.00 UK Imperial gallons."
    }
  ],
  relatedList: [
    { label: "Liter to Gallon (US)", from: "liter", to: "gallon-us" },
    { label: "Liter to Quart", from: "liter", to: "quart-us" },
    { label: "Liter to Pint", from: "liter", to: "pint-us" },
    { label: "Liter to Milliliter", from: "liter", to: "milliliter" }
  ],
  references: [
    "UK Weights and Measures Act 1985 - Schedule 1: Units of Measurement",
    "National Physical Laboratory (NPL UK) - Imperial and Metric Units of Volume"
  ]
};
