import { CustomArticleData } from "./types";

export const gramToKilogram: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "kilogram",
  seoTitle: "Gram to Kilogram Converter - g to kg",
  metaDescription: "Easily convert grams to kilograms (g to kg). Learn the difference between metric units, use the step-by-step conversion formula, and view our handy reference table.",
  h1: "Gram to Kilogram Converter",
  introduction: [
    "The gram and the kilogram are core building blocks of the metric system's weight and mass measurements. Adopted worldwide for scientific, commercial, and daily tasks, these units make scaling measurements straightforward.",
    "Understanding how to shift between grams and kilograms is crucial for cooking, shipping parcel calculations, scientific research, and industrial manufacturing. Since both units belong to the same metric system, converting between them is simple and relies on a clean factor of one thousand."
  ],
  quickAnswer: {
    text: "To convert grams to kilograms, divide the gram value by 1,000. For example, 500 grams is equal to exactly 0.5 kilograms.",
    formulaDisplay: "1 g = 0.001 kg",
    subtext: "Simply divide the mass value by 1,000 to convert from a smaller unit to a larger metric standard."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass originally defined as the absolute weight of one cubic centimeter of pure water at its maximum density temperature. Today, it serves as a practical measure for lighter objects like spices, ingredients, letters, and small laboratory samples."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilogram (kg)",
    text: "The kilogram (symbol: kg) is the base unit of mass in the International System of Units (SI). It is defined by taking the fixed numerical value of the Planck constant. As the standard unit of mass for larger items, it is used worldwide for measuring body weight, groceries, freight, and building materials."
  },
  relationship: "Because the prefix 'kilo' means one thousand, one kilogram is exactly equal to one thousand grams. Moving from a smaller unit (gram) to a larger unit (kilogram) requires dividing the total count by one thousand.",
  relationshipTitle: "The Metric Scaling: Grams vs Kilograms",
  relationshipItems: [
    { label: "1 Gram (g)", value: "0.001 Kilograms (kg)" },
    { label: "1 Kilogram (kg)", value: "1,000 Grams (g)" }
  ],
  formula: {
    text: "Convert mass by dividing the gram amount by the standard metric factor of one thousand.",
    math: "Mass in Kilograms (kg) = Mass in Grams (g) / 1,000",
    subtext: "Alternatively, you can multiply the gram value by 0.001 to find the equivalent kilograms."
  },
  formulaTitle: "The Gram to Kilogram Formula",
  practicalTip: {
    title: "Shifting the Decimal Point",
    text: "When dividing a number by 1,000, you can quickly find the answer by shifting the decimal point three places to the left. For example, 250.0 grams becomes 0.250 kilograms."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Baking Flour Recipe",
        subtitle: "A professional pastry recipe requires 450 grams of pastry flour. Convert this weight to kilograms.",
        steps: [
          "Identify the weight in grams: 450 g.",
          "Apply the conversion formula: kg = g / 1,000.",
          "Perform the calculation: 450 / 1,000 = 0.45.",
          "Conclude the calculation: 450 grams of flour is exactly equal to 0.45 kilograms."
        ]
      },
      {
        title: "Example 2: Shipping a Parcel",
        subtitle: "A small package weighs 2,850 grams. Determine its weight in kilograms for postal registry.",
        steps: [
          "Identify the package weight: 2,850 g.",
          "Divide by the metric factor: 2,850 / 1,000.",
          "Calculate the quotient: 2.85.",
          "Conclude the calculation: The parcel weight is equivalent to 2.85 kilograms."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Kilogram Reference Table",
    headers: ["Grams (g)", "Kilograms (kg)", "Typical Reference Object"],
    rows: [
      { fromVal: "1", toVal: "0.001", extra: "A single paperclip or small thumbtack" },
      { fromVal: "50", toVal: "0.05", extra: "A standard chicken egg" },
      { fromVal: "100", toVal: "0.1", extra: "A medium-sized lemon" },
      { fromVal: "250", toVal: "0.25", extra: "One pack of butter" },
      { fromVal: "500", toVal: "0.5", extra: "A typical loaf of bread" },
      { fromVal: "1,000", toVal: "1.0", extra: "One liter of pure water" },
      { fromVal: "2,500", toVal: "2.5", extra: "A standard laptop computer" },
      { fromVal: "5,000", toVal: "5.0", extra: "A heavy bag of cat food" }
    ]
  },
  expertNote: {
    title: "Why Metric Conversions are Consistent",
    text: "Unlike the imperial system, which uses complex factors like 16 ounces per pound, the metric system relies entirely on powers of ten. This makes mental calculations and scaling incredibly reliable across scientific and commercial applications."
  },
  applications: {
    title: "Real-World Mass Applications",
    items: [
      {
        title: "Culinary Arts & Baking",
        text: "Professional baking recipes use weight rather than volume for consistency. Converting ingredients from grams to kilograms helps chefs scale up recipes for large banquets."
      },
      {
        title: "Postal & Logistics Services",
        text: "Shipping carriers establish weight classes using kilograms. Small parcels measured in grams must be converted to kilograms to calculate precise shipping costs and fuel loads."
      },
      {
        title: "Scientific Research",
        text: "Laboratory chemical agents are weighed in small gram increments, but chemical yields and bulk mixtures are documented in kilograms to facilitate manufacturing scales."
      }
    ]
  },
  pitfalls: {
    title: "Common Metric Conversion Mistakes",
    items: [
      "Multiplying instead of dividing: Because the kilogram is a much larger unit, a gram value should result in a smaller number when converted. If your number gets bigger, you multiplied by 1,000 instead of dividing.",
      "Misplacing the decimal: Moving the decimal two places instead of three is a common slip. Always double-check that you shifted exactly three positions to represent division by 1,000.",
      "Confusing symbols: Ensure you write lowercase 'g' for grams and lowercase 'kg' for kilograms. Capital 'G' is used for physics constants like gravitational acceleration."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to kilograms?",
      answer: "Divide the total value in grams by 1,000 to get the weight in kilograms."
    },
    {
      question: "How many grams are in a kilogram?",
      answer: "There are exactly 1,000 grams in one kilogram."
    },
    {
      question: "Why do I divide by 1,000 to convert grams to kilograms?",
      answer: "The metric prefix 'kilo' represents 1,000. Therefore, a kilogram is 1,000 times larger than a gram, requiring division to scale up."
    },
    {
      question: "What is the formula for converting g to kg?",
      answer: "The formula is: Kilograms (kg) = Grams (g) / 1,000."
    },
    {
      question: "Is 500 grams equal to half a kilogram?",
      answer: "Yes, 500 divided by 1,000 is exactly 0.5, which represents half of a kilogram."
    },
    {
      question: "What is the official symbol for grams and kilograms?",
      answer: "The symbol for grams is 'g' and the symbol for kilograms is 'kg'. Both must be written in lowercase."
    },
    {
      question: "Can this converter handle decimals?",
      answer: "Yes, our converter processes fractional and decimal gram values instantly, maintaining perfect decimal accuracy."
    },
    {
      question: "How do I convert kilograms back to grams?",
      answer: "Multiply the kilogram value by 1,000 to complete the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Milligram", from: "gram", to: "milligram" },
    { label: "Gram to Microgram", from: "gram", to: "microgram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Kilogram to Gram", from: "kilogram", to: "gram" }
  ],
  references: [
    "International Bureau of Weights and Measures (BIPM) - The International System of Units (SI)",
    "National Institute of Standards and Technology (NIST) - Metric Mass Guidelines"
  ]
};
