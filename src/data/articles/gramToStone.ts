import { CustomArticleData } from "./types";

export const gramToStone: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "stone",
  seoTitle: "Gram to Stone Converter - g to st",
  metaDescription: "Quickly convert grams to stones (g to st). Bridging the gap between metric grams and British stone weight standards with detailed formulas and worked examples.",
  h1: "Gram to Stone Converter",
  introduction: [
    "The stone is an imperial unit of mass historically used across northwestern Europe and still heavily utilized in Great Britain and Ireland for expressing human body weight. On the other hand, the gram is the standard metric unit for expressing smaller mass values.",
    "Understanding how to convert grams to stones is helpful when analyzing fitness weights, reviewing historical British records, or assessing postal weight classes across metric and traditional systems."
  ],
  quickAnswer: {
    text: "To convert grams to stones, divide the gram value by 6,350.29318. For quick reference, 6,350 grams is approximately equivalent to one stone.",
    formulaDisplay: "1 g = 0.00015747 st",
    subtext: "Simply divide the metric gram value by 6,350.29318 to get the weight in imperial stones."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass representing one-thousandth of a kilogram. It is the international standard for lighter items like spices, office supplies, and small scientific materials."
  },
  aboutTargetUnit: {
    title: "Understanding the Stone (st)",
    text: "The stone (symbol: st) is an imperial unit defined as exactly 14 avoirdupois pounds, which equates to exactly 6.35029318 kilograms (or 6,350.29318 grams). It is commonly used in clinical and domestic settings in the UK to track body weight."
  },
  relationship: "Because one imperial stone is equal to 14 pounds, and each pound is 453.59237 grams, one stone contains exactly 6,350.29318 grams. Converting from grams to stones requires dividing by this large factor, which results in a small fraction for standard gram values.",
  relationshipTitle: "The Metric to Imperial Scale: Grams vs Stones",
  relationshipItems: [
    { label: "1 Gram (g)", value: "0.00015747 Stones (st)" },
    { label: "1 Stone (st)", value: "6,350.29318 Grams (g)" }
  ],
  formula: {
    text: "Convert weight by dividing the gram value by the standard definition factor of 6,350.29318.",
    math: "Mass in Stones (st) = Mass in Grams (g) / 6,350.29318",
    subtext: "For scientific calculators, you can also multiply the gram value by 1.57473 × 10⁻⁴."
  },
  formulaTitle: "The Gram to Stone Conversion Formula",
  practicalTip: {
    title: "The Kilogram Intermediary",
    text: "Since a stone is approximately 6.35 kilograms, it is often simpler to first divide your gram value by 1,000 to get kilograms, and then divide the kilograms by 6.35 to find the stones."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Health Center Measurement",
        subtitle: "A clinical scale registers a medical sample mass of 9,500 grams. Convert this to stones.",
        steps: [
          "Identify the weight in grams: 9,500 g.",
          "Write down the conversion formula: st = g / 6,350.29318.",
          "Perform the division: 9,500 / 6,350.29318 ≈ 1.49599.",
          "Conclude the calculation: 9,500 grams is equal to approximately 1.50 stones."
        ]
      },
      {
        title: "Example 2: Small Freight Package",
        subtitle: "An air freight package weighs 25,000 grams. Determine its weight in stones.",
        steps: [
          "Identify the weight in grams: 25,000 g.",
          "Divide by the standard factor: 25,000 / 6,350.29318.",
          "Calculate the quotient: 3.9368.",
          "Conclude the calculation: 25,000 grams is equivalent to approximately 3.94 stones."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Stone Reference Table",
    headers: ["Grams (g)", "Stones (st)", "Typical Reference Object"],
    rows: [
      { fromVal: "1,000", toVal: "0.157", extra: "One liter bottle of water" },
      { fromVal: "3,000", toVal: "0.472", extra: "A standard newborn baby weight" },
      { fromVal: "6,350.29", toVal: "1.000", extra: "Exactly one imperial stone" },
      { fromVal: "10,000 (10 kg)", toVal: "1.575", extra: "A large watermelon" },
      { fromVal: "20,000", toVal: "3.149", extra: "A typical desktop computer tower" },
      { fromVal: "50,000", toVal: "7.874", extra: "A lightweight adult human" },
      { fromVal: "70,000", toVal: "11.023", extra: "An average adult human weight" },
      { fromVal: "100,000", toVal: "15.747", extra: "A heavy-duty washing machine" }
    ]
  },
  expertNote: {
    title: "Why the Stone Unit Persists",
    text: "The stone was officially removed from commercial use in the UK in 1985 under metrication laws. However, it remains deeply embedded in British culture, where body weights are commonly cited in 'stones and pounds' (e.g. 11st 4lb)."
  },
  applications: {
    title: "Real-World Customary Applications",
    items: [
      {
        title: "Athletic Weight Categorization",
        text: "Combat sports and horse racing in the UK and Ireland historically classified fighters and jockeys in stones. Gym databases convert metric grams to stones for historical records."
      },
      {
        title: "Clinical Medical Records",
        text: "Medical records in Britain are modernizing to metric grams and kilograms, but legacy software converts hospital mass logs to stones to help older practitioners interpret patient records."
      },
      {
        title: "Agricultural Yield Reports",
        text: "Historic agricultural logs in Ireland recorded crops like potatoes and oats in stones, which modern historians convert to grams and tonnes to write comparative research."
      }
    ]
  },
  pitfalls: {
    title: "Common Weight Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Because the stone is a very large unit, converting grams to stones should result in a much smaller number. If your number gets larger, you multiplied instead of dividing.",
      "Conflating stones and pounds: One stone is exactly 14 pounds. If you have a decimal like 0.5 stones, that is exactly 7 pounds, not 5 pounds.",
      "Over-rounding the division factor: Using 6,000 instead of 6,350.29 can introduce massive calculation errors for larger weights."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to stones?",
      answer: "Divide the gram value by 6,350.29318 to get the equivalent weight in stones."
    },
    {
      question: "How many grams are in a stone?",
      answer: "There are exactly 6,350.29318 grams in one imperial stone."
    },
    {
      question: "What is the formula for converting g to st?",
      answer: "The formula is: Stones (st) = Grams (g) / 6,350.29318."
    },
    {
      question: "Is 6.35 kilograms equal to one stone?",
      answer: "Yes, 6.35 kilograms (6,350 grams) is the standard metric equivalent of one stone."
    },
    {
      question: "Why is the unit called a stone?",
      answer: "Historically, standard polished stones were used as balance weights in ancient agricultural markets, which eventually became formalized as the 14-pound imperial stone."
    },
    {
      question: "What is the symbol for stones?",
      answer: "The official symbol for the stone unit is 'st'."
    },
    {
      question: "Can this tool calculate decimal weights?",
      answer: "Yes, our engine processes fractional and decimal gram inputs instantly, providing accurate, high-precision stone values."
    },
    {
      question: "How do I convert stones back to grams?",
      answer: "Multiply the stone value by 6,350.29318 to complete the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Stone to Gram", from: "stone", to: "gram" },
    { label: "Kilogram to Stone", from: "kilogram", to: "stone" }
  ],
  references: [
    "UK Weights and Measures Act of 1985",
    "National Physical Laboratory (UK) - Units of Mass Guide"
  ]
};
