import { CustomArticleData } from "./types";

export const kilogramToGram: CustomArticleData = {
  fromUnitId: "kilogram",
  toUnitId: "gram",
  seoTitle: "Kilogram to Gram Converter - kg to g",
  metaDescription: "Convert kilograms to grams (kg to g) instantly. Learn the metric conversion formula, step-by-step calculation steps, worked examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/kilogram-to-gram",
  h1: "Kilogram to Gram Converter",
  introduction: [
    "The kilogram and the gram are the two most fundamental units of mass in the International System of Units (SI). Used worldwide across science, engineering, international commerce, and everyday life, they allow seamless scaling between bulk materials and fine laboratory quantities.",
    "Because the metric system is structured on decimal powers of ten, converting kilograms to grams is straightforward and exact. Since the prefix 'kilo' denotes one thousand, one kilogram contains exactly one thousand grams. Mastering this conversion is essential for culinary recipes, pharmaceutical compounding, shipping logistics, and laboratory chemistry."
  ],
  quickAnswer: {
    text: "To convert kilograms to grams, multiply the kilogram value by 1,000. For example, 2.5 kilograms is equal to exactly 2,500 grams.",
    formulaDisplay: "1 kg = 1,000 g",
    subtext: "Multiply the mass in kilograms by 1,000 (or shift the decimal point three places to the right) to get the mass in grams."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). Defined by the 26th General Conference on Weights and Measures (CGPM) in terms of the fundamental Planck constant ($h = 6.62607015 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$), the kilogram represents the international standard for measuring human body weight, bulk groceries, cargo freight, and industrial raw materials."
  },
  aboutTargetUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass defined as one-thousandth of a kilogram ($10^{-3}\\text{ kg}$). Originally defined in 1795 as the mass of one cubic centimeter of water at its melting point, the gram provides an intuitive, high-resolution scale for cooking ingredients, postal letters, spices, active pharmaceutical ingredients, and precious metals."
  },
  relationship: "The relationship between kilograms and grams is defined by the SI prefix 'kilo-', which means $10^3$ (1,000). Therefore, one kilogram is identically equal to 1,000 grams, and one gram is identically equal to 0.001 kilograms.",
  relationshipTitle: "The Metric Scaling: Kilograms vs. Grams",
  relationshipItems: [
    { label: "1 Kilogram (kg)", value: "1,000 Grams (g)" },
    { label: "1 Gram (g)", value: "0.001 Kilograms (kg)" },
    { label: "0.5 Kilograms (kg)", value: "500 Grams (g)" },
    { label: "1 Metric Ton (t)", value: "1,000 Kilograms = 1,000,000 Grams" }
  ],
  formula: {
    text: "To convert mass from kilograms to grams, multiply the mass in kilograms by 1,000.",
    math: "Mass in Grams (g) = Mass in Kilograms (kg) × 1,000",
    subtext: "Or: g = kg × 10³"
  },
  formulaTitle: "Kilogram to Gram Conversion Formula",
  practicalTip: {
    title: "Quick Mental Math: Decimal Shift",
    text: "To quickly convert kilograms to grams without a calculator, simply move the decimal point three places to the right. For example, 4.75 kg becomes 4,750 g."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Baking Ingredient Scaling",
        subtitle: "A bakery batch recipe specifies 3.25 kilograms of organic baker's flour. Calculate the flour weight in grams.",
        steps: [
          "Identify the weight in kilograms: 3.25 kg.",
          "Apply the conversion formula: g = kg × 1,000.",
          "Perform the calculation: 3.25 × 1,000 = 3,250 g.",
          "Conclude the calculation: 3.25 kilograms of flour equals exactly 3,250 grams."
        ]
      },
      {
        title: "Example 2: Laboratory Chemical Preparation",
        subtitle: "A chemist needs to weigh 0.045 kilograms of sodium chloride for a saline solution. Determine the equivalent mass in grams.",
        steps: [
          "Identify the mass in kilograms: 0.045 kg.",
          "Multiply by 1,000: 0.045 × 1,000 = 45 g.",
          "Conclude the calculation: The chemist must weigh exactly 45 grams of sodium chloride."
        ]
      }
    ]
  },
  table: {
    title: "Kilogram to Gram Conversion Reference Table",
    headers: ["Kilograms (kg)", "Grams (g)", "Everyday Reference Object"],
    rows: [
      { fromVal: "0.001", toVal: "1", extra: "A single paperclip or standard postage stamp" },
      { fromVal: "0.01", toVal: "10", extra: "A standard metal ballpoint pen" },
      { fromVal: "0.05", toVal: "50", extra: "A medium chicken egg" },
      { fromVal: "0.1", toVal: "100", extra: "A standard chocolate candy bar" },
      { fromVal: "0.25", toVal: "250", extra: "A standard package of butter" },
      { fromVal: "0.5", toVal: "500", extra: "A standard loaf of sandwich bread" },
      { fromVal: "1", toVal: "1,000", extra: "One liter of pure water at 4°C" },
      { fromVal: "2.5", toVal: "2,500", extra: "A standard lightweight laptop computer" },
      { fromVal: "5", toVal: "5,000", extra: "A medium sack of flour or sugar" },
      { fromVal: "10", toVal: "10,000", extra: "A loaded travel backpack" },
      { fromVal: "50", toVal: "50,000", extra: "A standard bag of commercial dry cement" }
    ]
  },
  expertNote: {
    title: "SI Decimal Consistency",
    text: "The relationship between kilograms and grams is exact by definition. Because both are SI units connected by a base-10 prefix ($10^3$), there are no rounding discrepancies, making the conversion 100% exact in all scientific and legal contexts."
  },
  applications: {
    title: "Everyday & Industrial Applications of kg to g",
    items: [
      {
        title: "Culinary Arts & Commercial Food Production",
        text: "Wholesale food supplies purchased in bulk kilograms (e.g., 25 kg sugar sacks) must be converted into gram portions for recipe formulations and nutritional labeling."
      },
      {
        title: "Pharmaceuticals & Clinical Medicine",
        text: "Active drug substances manufactured in kilogram batches are subdivided into precise gram, milligram, or microgram dosages for patient capsules and syrups."
      },
      {
        title: "Postal & Freight Logistics",
        text: "Postal carriers calculate tariffs based on kilograms, but exact tare weights and packaging materials are measured in grams to ensure regulatory compliance."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes When Converting kg to g",
    items: [
      "Dividing instead of multiplying: Because the gram is a smaller unit, converting from kilograms to grams must always result in a larger numerical value. If your number decreases, you divided by 1,000 by mistake.",
      "Decimal placement error: Shifting the decimal two places instead of three (e.g., writing 1.5 kg = 150 g instead of 1,500 g) results in a 90% deficit.",
      "Confusing kg with pounds: Remember that 1 kg is approximately 2.20462 pounds; ensure scale readings are set to kilograms before multiplying by 1,000."
    ]
  },
  faqs: [
    {
      question: "How many grams are in one kilogram?",
      answer: "There are exactly 1,000 grams in one kilogram (1 kg = 1,000 g)."
    },
    {
      question: "What is the formula to convert kg to g?",
      answer: "The formula is: Mass in Grams (g) = Mass in Kilograms (kg) × 1,000."
    },
    {
      question: "How do I convert 2.5 kg to grams?",
      answer: "Multiply 2.5 by 1,000: 2.5 × 1,000 = 2,500 grams."
    },
    {
      question: "How many grams is 0.75 kg?",
      answer: "0.75 kg equals 750 grams (0.75 × 1,000 = 750 g)."
    },
    {
      question: "What is the symbol for kilogram and gram?",
      answer: "The official symbol for the kilogram is 'kg' (lowercase) and for the gram is 'g' (lowercase)."
    },
    {
      question: "Why is 1,000 grams equal to 1 kilogram?",
      answer: "The prefix 'kilo-' comes from the Greek word 'chilioi' meaning thousand. Thus, a kilogram literally means one thousand grams."
    },
    {
      question: "How do I convert grams back to kilograms?",
      answer: "Divide the gram value by 1,000 (or multiply by 0.001) to find the weight in kilograms."
    },
    {
      question: "How many grams are in a half kilogram?",
      answer: "A half kilogram (0.5 kg) is exactly equal to 500 grams."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Kilogram to Milligram", from: "kilogram", to: "milligram" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" },
    { label: "Kilogram to Ounce", from: "kilogram", to: "ounce" },
    { label: "Kilogram to Metric Ton", from: "kilogram", to: "metric-ton" }
  ],
  references: [
    "BIPM (Bureau International des Poids et Mesures) - The International System of Units (SI)",
    "NIST Special Publication 330 - The International System of Units (SI)",
    "ISO 80000-1: General Principles Concerning Quantities and Units"
  ]
};
