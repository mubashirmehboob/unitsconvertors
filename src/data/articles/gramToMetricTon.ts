import { CustomArticleData } from "./types";

export const gramToMetricTon: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "metric-ton",
  seoTitle: "Gram to Metric Ton Converter - g to t",
  metaDescription: "Instantly convert grams to metric tons (g to t). Master the conversion mathematics with step-by-step examples, a reference table, and industrial weight insights.",
  h1: "Gram to Metric Ton Converter",
  introduction: [
    "Shifting weight measurements from a tiny metric gram to a massive metric ton (often called a tonne) involves moving across the entire scale of mass measurement. Both units are key components of the International System of Units (SI), allowing for smooth mathematical scaling.",
    "Whether you are analyzing bulk shipping cargo, translating agricultural crop yields, or calculating industrial waste statistics, understanding how grams convert to metric tons ensures accurate logging and report consistency."
  ],
  quickAnswer: {
    text: "To convert grams to metric tons, divide the gram value by 1,000,000 (one million). For example, 500,000 grams is equal to exactly 0.5 metric tons.",
    formulaDisplay: "1 g = 0.000001 t",
    subtext: "Simply divide the gram value by 1,000,000 to convert from the small base unit to the massive industrial standard."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass defined as one-thousandth of a kilogram. It is the standard for lighter objects like consumer goods, mail packages, and lab ingredients."
  },
  aboutTargetUnit: {
    title: "Understanding the Metric Ton (t)",
    text: "The metric ton (symbol: t), also commonly spelled as 'tonne', is equal to exactly 1,000 kilograms (or one million grams). It is the premier standard for global trade, shipping, raw material minerals, and vehicle weights."
  },
  relationship: "Because the prefix structure of the metric system is based on powers of ten, there are exactly one million grams in one metric ton. Moving from a smaller unit (gram) to a larger unit (metric ton) requires dividing by one million.",
  relationshipTitle: "The Industrial Metric Scale: Grams vs Metric Tons",
  relationshipItems: [
    { label: "1 Gram (g)", value: "0.000001 Metric Tons (t)" },
    { label: "1 Metric Ton (t)", value: "1,000,000 Grams (g)" }
  ],
  formula: {
    text: "Convert mass by dividing the total gram weight by the standard conversion factor of one million.",
    math: "Mass in Metric Tons (t) = Mass in Grams (g) / 1,000,000",
    subtext: "For scientific notation, you can multiply the gram value by 10⁻⁶."
  },
  formulaTitle: "The Gram to Metric Ton Formula",
  practicalTip: {
    title: "Shifting Six Decimal Places",
    text: "Since there are six zeros in one million, you can quickly find the metric ton equivalent by shifting the decimal point of your gram value six places to the left."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Factory Production Run",
        subtitle: "A processing plant manufactures a fine plastic component batch weighing 250,000 grams. Convert this to metric tons.",
        steps: [
          "Identify the weight in grams: 250,000 g.",
          "Write down the conversion formula: t = g / 1,000,000.",
          "Perform the division: 250,000 / 1,000,000 = 0.25.",
          "Conclude the calculation: 250,000 grams is exactly equal to 0.25 metric tons."
        ]
      },
      {
        title: "Example 2: Mineral Extraction Sample",
        subtitle: "A mining company drills a core sample containing 85,000 grams of copper concentrate. Determine its weight in metric tons.",
        steps: [
          "Identify the weight in grams: 85,000 g.",
          "Divide by the metric factor: 85,000 / 1,000,000.",
          "Calculate the quotient: 0.085.",
          "Conclude the calculation: The copper concentrate sample weighs equivalent to 0.085 metric tons."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Metric Ton Reference Table",
    headers: ["Grams (g)", "Metric Tons (t)", "Typical Reference Load"],
    rows: [
      { fromVal: "100", toVal: "0.0001", extra: "A medium-sized lemon" },
      { fromVal: "1,000 (1 kg)", toVal: "0.001", extra: "A standard liter of water" },
      { fromVal: "10,000", toVal: "0.01", extra: "A box of heavy office documents" },
      { fromVal: "100,000", toVal: "0.1", extra: "A medium-sized motorcycle" },
      { fromVal: "500,000", toVal: "0.5", extra: "A large grand piano" },
      { fromVal: "1,000,000", toVal: "1.000", extra: "Exactly one metric ton, a small car" },
      { fromVal: "2,500,000", toVal: "2.500", extra: "An adult female elephant" },
      { fromVal: "10,000,000", toVal: "10.000", extra: "A loaded delivery container truck" }
    ]
  },
  expertNote: {
    title: "A Tonne vs a Ton",
    text: "The metric ton (spelled 'tonne' in French/English and symbol 't') is exactly 1,000 kilograms (approx. 2,204.6 lbs). It should not be confused with the US Short Ton (2,000 lbs) or the British Long Ton (2,240 lbs), which belong to the imperial system."
  },
  applications: {
    title: "Real-World Mass Applications",
    items: [
      {
        title: "Global Supply Logistics",
        text: "Shipping container freight limits are stated in metric tons. Freight calculators translate grams and kilograms of individual products to verify that the cargo load does not exceed transport thresholds."
      },
      {
        title: "Mining and Metallurgy",
        text: "Geologists estimate mineral grade in grams per ton. When calculating total reserve yields, labs multiply these rates to project total raw metal extraction in metric tons."
      },
      {
        title: "Agricultural Crop Tracking",
        text: "Bulk grain weights are measured in grams during quality analysis but logged in metric tons for regional yield reporting and market price calculations."
      }
    ]
  },
  pitfalls: {
    title: "Common Metric Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Since a metric ton is a massive unit, converting grams to tons must yield a much smaller number. If your number gets larger, you multiplied by one million instead of dividing.",
      "Confusing with imperial tons: Ensure you are using the factor of 1,000,000 for metric tons, not the customary factors for US short tons or imperial long tons.",
      "Losing track of decimal places: Shifting the decimal six places requires absolute accuracy. Add leading zeros as placeholders carefully to ensure you do not make a tenfold calculation error."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to metric tons?",
      answer: "Divide the gram value by 1,000,000 to find the equivalent mass in metric tons."
    },
    {
      question: "How many grams are in a metric ton?",
      answer: "There are exactly 1,000,000 (one million) grams in one metric ton."
    },
    {
      question: "What is the difference between a tonne and a metric ton?",
      answer: "There is no difference. Both terms refer to the same unit of weight containing exactly 1,000 kilograms."
    },
    {
      question: "What is the formula for converting g to t?",
      answer: "The formula is: Metric Tons (t) = Grams (g) / 1,000,000."
    },
    {
      question: "Is 1,000 kilograms equal to one metric ton?",
      answer: "Yes, exactly 1,000 kilograms represents one metric ton."
    },
    {
      question: "What is the official symbol for metric tons?",
      answer: "The official SI symbol is a lowercase 't'."
    },
    {
      question: "Can this converter process decimal values?",
      answer: "Yes, our online conversion engine processes decimal gram weights instantly, providing high-precision outputs."
    },
    {
      question: "How do I convert metric tons back to grams?",
      answer: "Multiply the metric ton value by 1,000,000 to complete the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to US Ton", from: "gram", to: "us-ton" },
    { label: "Gram to Imperial Ton", from: "gram", to: "imperial-ton" },
    { label: "Metric Ton to Gram", from: "metric-ton", to: "gram" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "BIPM - SI Brochure: Section 4.1 - Non-SI units accepted for use with the SI",
    "NIST Guide to Mass and Density Measurements"
  ]
};
