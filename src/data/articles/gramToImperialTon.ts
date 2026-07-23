import { CustomArticleData } from "./types";

export const gramToImperialTon: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "imperial-ton",
  seoTitle: "Gram to Imperial Ton Converter - g to lton",
  metaDescription: "Quickly convert grams to Imperial long tons (g to lton). Learn the distinction between long, short, and metric tons, and apply our step-by-step formula.",
  h1: "Gram to Imperial Ton Converter",
  introduction: [
    "Translating mass units between modern metric standards and legacy British imperial standards is a frequent necessity in maritime shipping, historical research, and heavy metallurgy. The imperial ton (commonly known as the long ton) has deep institutional roots in the United Kingdom and global trade.",
    "Our gram to imperial long ton converter provides an accurate, instant conversion of weight measurements, helping you scale values between metric grams and classic British imperial tons."
  ],
  quickAnswer: {
    text: "To convert grams to imperial tons, divide the gram value by 1,016,046.91. For example, 1,000,000 grams is equal to approximately 0.9842 imperial long tons.",
    formulaDisplay: "1 g = 9.8421 × 10⁻⁷ lton",
    subtext: "Simply divide the gram value by 1,016,046.9088 to convert from the metric base to British imperial long tons."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass defined as one-thousandth of a kilogram. It is the primary standard for lighter measurements in chemistry, food packaging, and consumer merchandise."
  },
  aboutTargetUnit: {
    title: "Understanding the Imperial Ton (lton)",
    text: "The imperial ton (symbol: lton), also referred to as the 'long ton' or 'gross ton', is defined as exactly 2,240 avoirdupois pounds, which equates to exactly 1,016,046.9088 grams (or 1,016.0469088 kilograms)."
  },
  relationship: "Because one British imperial long ton contains exactly 1,016,046.9088 grams, the gram is a microscopic unit of mass. Converting from grams to imperial long tons requires dividing by this large factor.",
  relationshipTitle: "The Metric to British Imperial Scaling: Grams vs Long Tons",
  relationshipItems: [
    { label: "1 Gram (g)", value: "9.84207 × 10⁻⁷ Imperial Tons (lton)" },
    { label: "1 Imperial Ton (lton)", value: "1,016,046.9088 Grams (g)" }
  ],
  formula: {
    text: "Convert weight by dividing the gram value by the standard imperial conversion factor of 1,016,046.9088.",
    math: "Mass in Imperial Tons (lton) = Mass in Grams (g) / 1,016,046.9088",
    subtext: "For standard logs, dividing by 1,016,047 is commonly used in non-scientific trade paperwork."
  },
  formulaTitle: "The Gram to Imperial Ton Conversion Formula",
  practicalTip: {
    title: "Comparing the Ton Standards",
    text: "An imperial long ton (2,240 lb) is roughly 12% heavier than a US short ton (2,000 lb) and 1.6% heavier than a metric ton (2,204.6 lb). Keeping this hierarchy in mind helps double-check calculations."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Maritime Cargo Scale",
        subtitle: "A marine cargo manifest lists a bulk chemical ingredient package weighing 2,500,000 grams. Convert this weight to imperial long tons.",
        steps: [
          "Identify the weight in grams: 2,500,000 g.",
          "Write down the conversion formula: lton = g / 1,016,046.9088.",
          "Perform the division: 2,500,000 / 1,016,046.9088 ≈ 2.4605.",
          "Conclude the calculation: 2,500,000 grams of cargo is equal to approximately 2.46 imperial long tons."
        ]
      },
      {
        title: "Example 2: Historical Ship Castings",
        subtitle: "A shipyard database archives a metal casting weighing 500,000 grams. Determine its weight in imperial long tons.",
        steps: [
          "Identify the mass in grams: 500,000 g.",
          "Divide by the imperial long ton factor: 500,000 / 1,016,046.9088.",
          "Calculate the quotient: 0.4921.",
          "Conclude the calculation: 500,000 grams is equivalent to approximately 0.49 imperial long tons (slightly under half an imperial ton)."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Imperial Ton Reference Table",
    headers: ["Grams (g)", "Imperial Tons (lton)", "Typical Reference Load"],
    rows: [
      { fromVal: "10,000", toVal: "0.0098", extra: "A large desktop office scanner" },
      { fromVal: "100,000", toVal: "0.0984", extra: "A light utility garden trailer" },
      { fromVal: "508,023", toVal: "0.5000 (1,120 lb)", extra: "Exactly half an imperial long ton" },
      { fromVal: "1,016,046.91", toVal: "1.0000 (2,240 lb)", extra: "Exactly one imperial long ton" },
      { fromVal: "1,500,000", toVal: "1.4763", extra: "A mid-sized passenger car" },
      { fromVal: "3,000,000", toVal: "2.9526", extra: "An adult killer whale" },
      { fromVal: "5,000,000", toVal: "4.9210", extra: "A medium cargo storage vault" },
      { fromVal: "10,000,000", toVal: "9.8421", extra: "A small loaded shipping truck" }
    ]
  },
  expertNote: {
    title: "Legacy of the Long Ton",
    text: "While the UK switched to the metric system for most commercial transactions under the Weights and Measures Act, the long ton is still used in US petroleum cargo trade, international sulfur shipping, and historic warship displacement logs."
  },
  applications: {
    title: "Real-World Customary Applications",
    items: [
      {
        title: "Maritime Shipping Manifests",
        text: "Dry bulk cargo and international fuel loads are historically registered in long tons. Modern ports use gram-based sensors to calculate container weights, requiring digital conversions to log tons."
      },
      {
        title: "Defense Force Equipment Logs",
        text: "Naval records for large naval vessels list displacements in long tons. Modern maintenance components are weighted in grams and scaled to match historical technical manuals."
      },
      {
        title: "Commodity Trading Contracts",
        text: "Older trading agreements for sulfur, ore, and coal are denominated in long tons. Modern analytical testing labs supply chemical measurements in grams, which traders convert to long tons."
      }
    ]
  },
  pitfalls: {
    title: "Common Customary Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Since an imperial ton is a massive unit, converting grams to tons must result in a small decimal. If your number gets larger, you multiplied instead of dividing.",
      "Confusing with US short tons: Using the US short ton factor (907,184.74) instead of the imperial long ton factor (1,016,046.91) will introduce a 12% calculation error.",
      "Confusing with metric tonnes: Standard metric tons contain exactly 1,000,000 grams, while imperial tons are slightly heavier, requiring the 1,016,046.91 divisor."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to imperial tons?",
      answer: "Divide the gram value by 1,016,046.9088 to find the equivalent weight in imperial long tons."
    },
    {
      question: "How many grams are in an imperial ton?",
      answer: "There are exactly 1,016,046.9088 grams in one British imperial long ton."
    },
    {
      question: "Why is the imperial ton called a long ton?",
      answer: "It is called a 'long' ton because it is heavier (2,240 lb) than the US 'short' ton (2,000 lb), distinguishing the two historical English-speaking standards."
    },
    {
      question: "What is the formula for converting g to lton?",
      answer: "The formula is: Imperial Long Tons (lton) = Grams (g) / 1,016,046.9088."
    },
    {
      question: "Is 1 kilogram equal to an imperial ton?",
      answer: "No, one kilogram is only 1,000 grams. An imperial ton is much larger, containing 1,016,046.91 grams."
    },
    {
      question: "What is the official symbol for an imperial ton?",
      answer: "The commercial abbreviation is 'lton' or 'long ton' in shipping logs."
    },
    {
      question: "Can this converter process decimal values?",
      answer: "Yes, our converter handles fractional and decimal gram inputs instantly, providing highly accurate imperial long ton results."
    },
    {
      question: "How do I convert imperial tons back to grams?",
      answer: "Multiply the imperial ton value by 1,016,046.9088 to complete the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Metric Ton", from: "gram", to: "metric-ton" },
    { label: "Gram to US Ton", from: "gram", to: "us-ton" },
    { label: "Imperial Ton to Gram", from: "imperial-ton", to: "gram" },
    { label: "Pound to Imperial Ton", from: "pound", to: "imperial-ton" }
  ],
  references: [
    "UK Weights and Measures Act of 1985",
    "BIPM Historical Conversion Tables"
  ]
};
