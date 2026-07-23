import { CustomArticleData } from "./types";

export const gramToUsTon: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "us-ton",
  seoTitle: "Gram to US Ton Converter - g to ton",
  metaDescription: "Easily convert grams to US short tons (g to ton). Translate metric weights into customary short tons using our step-by-step formula and reference table.",
  h1: "Gram to US Ton Converter",
  introduction: [
    "Navigating weight scales requires bridging different national standards. While global markets use metric grams for small measurements, the United States relies heavily on the US Short Ton for commerce, freight shipping, and heavy raw material weight calculations.",
    "Our gram to US short ton converter helps you easily translate weights from standard metric units to American customary tons with absolute mathematical accuracy."
  ],
  quickAnswer: {
    text: "To convert grams to US short tons, divide the gram value by 907,184.74. For example, 1,000,000 grams is equal to approximately 1.102 US short tons.",
    formulaDisplay: "1 g = 1.1023 × 10⁻⁶ US ton",
    subtext: "Simply divide the gram value by 907,184.74 to find the equivalent weight in US short tons."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass defined as one-thousandth of a kilogram. It is typically used for measuring lightweight products like consumer goods, retail ingredients, and laboratory compounds."
  },
  aboutTargetUnit: {
    title: "Understanding the US Short Ton (ton)",
    text: "The US short ton (often referred to simply as 'ton' in the United States, symbol: ton) is equal to exactly 2,000 avoirdupois pounds, which equates to exactly 907,184.74 grams (or 907.18474 kilograms)."
  },
  relationship: "Because one US short ton contains exactly 907,184.74 grams, the gram is a microscopic unit in comparison. Converting from grams to US tons requires dividing by this large customary factor.",
  relationshipTitle: "The Customary to Metric Scaling: Grams vs US Short Tons",
  relationshipItems: [
    { label: "1 Gram (g)", value: "1.10231 × 10⁻⁶ US Tons (ton)" },
    { label: "1 US Short Ton (ton)", value: "907,184.74 Grams (g)" }
  ],
  formula: {
    text: "Convert weight by dividing the gram amount by the official customary conversion factor of 907,184.74.",
    math: "Mass in US Short Tons (ton) = Mass in Grams (g) / 907,184.74",
    subtext: "For standard business reports, using 907,184.7 as your division factor yields sufficient accuracy."
  },
  formulaTitle: "The Gram to US Short Ton Conversion Formula",
  practicalTip: {
    title: "The Kilogram and Pound Intermediary",
    text: "If you are calculating by hand, first convert grams to pounds by dividing by 453.59. Then, divide the pounds by 2,000 to find the equivalent US short tons."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Cargo Pallet Weight",
        subtitle: "A shipping carrier processes a cargo crate weighing 1,500,000 grams. Convert this weight to US short tons.",
        steps: [
          "Identify the weight in grams: 1,500,000 g.",
          "Write down the conversion formula: US ton = g / 907,184.74.",
          "Perform the division: 1,500,000 / 907,184.74 ≈ 1.65346.",
          "Conclude the calculation: 1,500,000 grams is equal to approximately 1.65 US short tons."
        ]
      },
      {
        title: "Example 2: Industrial Metal Parts",
        subtitle: "An engineering company manufactures steel brackets with a total batch weight of 450,000 grams. Determine the weight in US short tons.",
        steps: [
          "Identify the total mass in grams: 450,000 g.",
          "Divide by the US short ton factor: 450,000 / 907,184.74.",
          "Calculate the quotient: 0.49604.",
          "Conclude the calculation: 450,000 grams is equivalent to approximately 0.50 US short tons (half a short ton)."
        ]
      }
    ]
  },
  table: {
    title: "Gram to US Short Ton Reference Table",
    headers: ["Grams (g)", "US Short Tons (ton)", "Typical Reference Load"],
    rows: [
      { fromVal: "10,000", toVal: "0.0110", extra: "A heavy suitcase" },
      { fromVal: "100,000", toVal: "0.1102", extra: "A lightweight utility trailer" },
      { fromVal: "453,592", toVal: "0.5000 (1,000 lb)", extra: "Exactly half a short ton" },
      { fromVal: "907,184.74", toVal: "1.0000 (2,000 lb)", extra: "Exactly one US short ton" },
      { fromVal: "1,000,000", toVal: "1.1023", extra: "One metric ton (tonne)" },
      { fromVal: "2,000,000", toVal: "2.2046", extra: "An average mid-size SUV vehicle" },
      { fromVal: "5,000,000", toVal: "5.5116", extra: "A medium cargo shipping container" },
      { fromVal: "10,000,000", toVal: "11.0231", extra: "A fully loaded concrete mixer truck" }
    ]
  },
  expertNote: {
    title: "Short Ton vs Long Ton vs Tonne",
    text: "The US Short Ton is exactly 2,000 pounds (907.18 kg), whereas the British Long Ton is 2,240 pounds (1016.05 kg) and the Metric Ton (tonne) is exactly 1,000 kilograms (2,204.62 pounds). US industrial logs use 'short ton' to maintain domestic compliance."
  },
  applications: {
    title: "Real-World Customary Applications",
    items: [
      {
        title: "Import-Export Cargo Verification",
        text: "Overseas manufacturers document product packaging in grams, which US customs agents and port warehouses convert to short tons to balance truck axle weights."
      },
      {
        title: "Construction Material Orders",
        text: "Raw gravel, sand, and aggregate materials are priced and shipped in US short tons, but precision concrete additive powders are measured in grams, necessitating precise conversion during mix design."
      },
      {
        title: "Waste Management Audits",
        text: "Recycling factories collect small electronic items weighed in grams and compile total processing quantities in US tons for municipal recycling credit logs."
      }
    ]
  },
  pitfalls: {
    title: "Common Customary Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Since a US ton is a massive unit, converting grams to tons must result in a tiny decimal. If your number gets larger, you multiplied instead of dividing.",
      "Confusing US short tons with metric tons: Using the metric factor of 1,000,000 instead of 907,184.74 will introduce a 10% error into your inventory logs.",
      "Losing track of precision: For large industrial shipping logs, ensure you retain several decimal places of the 907,184.74 factor to avoid losing weight credit."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to US short tons?",
      answer: "Divide the total value in grams by 907,184.74 to find the equivalent weight in US short tons."
    },
    {
      question: "How many grams are in a US short ton?",
      answer: "There are exactly 907,184.74 grams in one US short ton."
    },
    {
      question: "What is the difference between a short ton and a long ton?",
      answer: "A US short ton is exactly 2,000 pounds (907.18 kg), while a British long ton is exactly 2,240 pounds (1,016.05 kg)."
    },
    {
      question: "What is the formula for converting g to US ton?",
      answer: "The formula is: US Short Tons (ton) = Grams (g) / 907,184.74."
    },
    {
      question: "Is 1 kilogram equal to a US short ton?",
      answer: "No, one kilogram is only 1,000 grams. A US short ton is much larger, containing 907,184.74 grams."
    },
    {
      question: "What is the official symbol for a US short ton?",
      answer: "The standard abbreviation is 'ton' or 'sh tn' in commercial weight bills."
    },
    {
      question: "Can this converter process decimal values?",
      answer: "Yes, our engine handles fractional and decimal gram inputs instantly, providing highly accurate customary ton values."
    },
    {
      question: "How do I convert US short tons back to grams?",
      answer: "Multiply the US short ton value by 907,184.74 to perform the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Metric Ton", from: "gram", to: "metric-ton" },
    { label: "Gram to Imperial Ton", from: "gram", to: "imperial-ton" },
    { label: "US Ton to Gram", from: "us-ton", to: "gram" },
    { label: "Pound to US Ton", from: "pound", to: "us-ton" }
  ],
  references: [
    "NIST Handbook 44 - Specifications, Tolerances, and Other Technical Requirements for Weighing and Measuring Devices",
    "United States Government Printing Office - Customary Weights and Measures Standards"
  ]
};
