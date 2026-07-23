import { CustomArticleData } from "./types";

export const gramToMilligram: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "milligram",
  seoTitle: "Gram to Milligram Converter - g to mg",
  metaDescription: "Instantly convert grams to milligrams (g to mg). Learn the difference between these metric units, use the step-by-step conversion formula, and view our handy reference table.",
  h1: "Gram to Milligram Converter",
  introduction: [
    "The gram and the milligram are metric units of mass widely used in medicine, chemistry, biology, and nutrition. Scaling between these measurements is essential when dealing with small, precise weights.",
    "Understanding how to convert grams to milligrams is particularly vital for healthcare practitioners, scientific researchers, jewelers, and anyone calculating ingredient percentages. Since both units belong to the same metric system, converting between them is reliable and relies on a factor of one thousand."
  ],
  quickAnswer: {
    text: "To convert grams to milligrams, multiply the gram value by 1,000. For example, 0.25 grams is equal to exactly 250 milligrams.",
    formulaDisplay: "1 g = 1,000 mg",
    subtext: "Simply multiply the mass value by 1,000 to convert from a larger metric unit to a smaller one."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a standard unit of mass in the metric system. Originally defined as the mass of one cubic centimeter of water, today it is a fundamental unit for measuring everyday small objects like a single paperclip, spices, envelope letters, or vitamins."
  },
  aboutTargetUnit: {
    title: "Understanding the Milligram (mg)",
    text: "The milligram (symbol: mg) represents one-thousandth of a gram. It is an extremely light unit of measurement primarily utilized for specifying dosage levels of pharmaceutical medications, nutritional values on food labels, and chemical trace elements."
  },
  relationship: "Because the prefix 'milli' means one-thousandth, there are exactly one thousand milligrams in one gram. Shifting from a larger unit (gram) to a smaller unit (milligram) requires multiplying the value by one thousand.",
  relationshipTitle: "The Metric Scaling: Grams vs Milligrams",
  relationshipItems: [
    { label: "1 Gram (g)", value: "1,000 Milligrams (mg)" },
    { label: "1 Milligram (mg)", value: "0.001 Grams (g)" }
  ],
  formula: {
    text: "Convert mass by multiplying the gram amount by the standard metric factor of one thousand.",
    math: "Mass in Milligrams (mg) = Mass in Grams (g) × 1,000",
    subtext: "For scientific work, this multiplication is exact and does not require rounding."
  },
  formulaTitle: "The Gram to Milligram Formula",
  practicalTip: {
    title: "Shifting the Decimal Point",
    text: "When multiplying a number by 1,000, you can find the result by moving the decimal point three places to the right. For example, 0.075 grams becomes 75.0 milligrams."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Vitamin Dosage",
        subtitle: "A dietary supplement capsule contains 0.5 grams of Vitamin C. Convert this weight to milligrams.",
        steps: [
          "Identify the weight in grams: 0.5 g.",
          "Apply the conversion formula: mg = g × 1,000.",
          "Perform the calculation: 0.5 × 1,000 = 500.",
          "Conclude the calculation: 0.5 grams of Vitamin C is exactly equal to 500 milligrams."
        ]
      },
      {
        title: "Example 2: Chemical Solution",
        subtitle: "A laboratory researcher measures 0.012 grams of a chemical reagent. Determine its weight in milligrams.",
        steps: [
          "Identify the chemical weight: 0.012 g.",
          "Multiply by the metric factor: 0.012 × 1,000.",
          "Calculate the product: 12.",
          "Conclude the calculation: The chemical agent weighs equivalent to 12 milligrams."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Milligram Reference Table",
    headers: ["Grams (g)", "Milligrams (mg)", "Typical Reference Content"],
    rows: [
      { fromVal: "0.001", toVal: "1", extra: "A single grain of fine sand" },
      { fromVal: "0.01", toVal: "10", extra: "A tiny pinch of table salt" },
      { fromVal: "0.05", toVal: "50", extra: "A small droplet of water" },
      { fromVal: "0.1", toVal: "100", extra: "Low-dose daily aspirin tablet" },
      { fromVal: "0.5", toVal: "500", extra: "A standard strength paracetamol pill" },
      { fromVal: "1", toVal: "1,000", extra: "A standard metal paperclip" },
      { fromVal: "5", toVal: "5,000", extra: "A US nickel coin" },
      { fromVal: "10", toVal: "10,000", extra: "Two sheets of standard office paper" }
    ]
  },
  expertNote: {
    title: "Accuracy in Pharmaceutics",
    text: "In healthcare settings, mixing up grams and milligrams is a critical error. Meds are often dosed in milligrams, while base compounds are stored in grams, requiring absolute diligence during calculations."
  },
  applications: {
    title: "Real-World Mass Applications",
    items: [
      {
        title: "Healthcare & Pharmacology",
        text: "Doctors prescribe tablets based on milligram measurements, while chemical synthesis of active compounds is tracked in bulk grams, making this calculation standard in drug formulation."
      },
      {
        title: "Nutritional Labeling",
        text: "Food packaging displays sodium, cholesterol, and vitamin counts in milligrams per serving, which dieticians convert to grams to analyze overall daily macronutrient ratios."
      },
      {
        title: "Analytical Chemistry",
        text: "Researchers weigh out fine powder reactants in sub-gram units but document chemical solutions in milligrams per milliliter for precise concentration measurements."
      }
    ]
  },
  pitfalls: {
    title: "Common Metric Conversion Mistakes",
    items: [
      "Dividing instead of multiplying: Grams are larger than milligrams. Therefore, a gram value converted to milligrams must result in a much larger number. If your result is smaller, you divided by 1,000 instead of multiplying.",
      "Miscounting decimal digits: Moving the decimal point incorrectly can result in a tenfold error. Always count three decimal spaces to the right when multiplying by 1,000.",
      "Using wrong symbols: Ensure you represent milligrams with 'mg' and grams with 'g'. Avoid using 'mgm' or 'gr' which stands for grain, a non-metric unit."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to milligrams?",
      answer: "Multiply the value in grams by 1,000 to find the equivalent weight in milligrams."
    },
    {
      question: "How many milligrams are in a gram?",
      answer: "There are exactly 1,000 milligrams in one gram."
    },
    {
      question: "Why do I multiply by 1,000 to convert grams to milligrams?",
      answer: "The metric prefix 'milli' represents one-thousandth. This means that a gram is 1,000 times larger than a milligram, requiring multiplication to scale down to the smaller unit."
    },
    {
      question: "What is the formula for converting g to mg?",
      answer: "The formula is: Milligrams (mg) = Grams (g) × 1,000."
    },
    {
      question: "Is 0.25 grams equal to 250 milligrams?",
      answer: "Yes, 0.25 multiplied by 1,000 is exactly 250 milligrams."
    },
    {
      question: "What is the official symbol for grams and milligrams?",
      answer: "The symbol for grams is 'g' and the symbol for milligrams is 'mg'."
    },
    {
      question: "Can this converter process decimal values?",
      answer: "Yes, our tool handles fractional and decimal gram entries instantly, providing precise milligram values."
    },
    {
      question: "How do I convert milligrams back to grams?",
      answer: "To perform the reverse conversion, divide the milligram value by 1,000."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Microgram", from: "gram", to: "microgram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Milligram to Gram", from: "milligram", to: "gram" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) - Metric prefixes and units",
    "National Institute of Standards and Technology (NIST) - Mass Conversion Tables"
  ]
};
