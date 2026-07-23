import { CustomArticleData } from "./types";

export const gramToOunce: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "ounce",
  seoTitle: "Gram to Ounce Converter - g to oz",
  metaDescription: "Quickly convert grams to ounces (g to oz). Learn how to translate between metric grams and imperial ounces, apply the formula, and view our handy comparison tables.",
  h1: "Gram to Ounce Converter",
  introduction: [
    "Shifting weight measurements between metric grams and imperial ounces is a frequent requirement in cooking, postal shipping, jewelry grading, and laboratory science. These systems are used concurrently in different parts of the world, making quick and precise conversions valuable.",
    "Our gram to ounce converter provides an instant translation of mass values, helping you confidently scale ingredients, weigh parcels, or verify product specifications without complicated manual arithmetic."
  ],
  quickAnswer: {
    text: "To convert grams to ounces, divide the gram value by 28.34952, or multiply it by 0.03527. For a quick household estimate, 28 grams is roughly equal to one ounce.",
    formulaDisplay: "1 g = 0.03527396 oz",
    subtext: "Simply divide the metric gram value by 28.34952 to find the equivalent weight in US customary avoirdupois ounces."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass defined as one-thousandth of a kilogram. It is the international standard for weighing small quantities like spices, postage letters, coins, and nutritional ingredients."
  },
  aboutTargetUnit: {
    title: "Understanding the Ounce (oz)",
    text: "The ounce (symbol: oz) is a customary unit of mass used primarily in the United States and the United Kingdom. Specifically, the standard avoirdupois ounce is defined as exactly 1/16 of an avoirdupois pound, which equates to exactly 28.349523125 grams."
  },
  relationship: "Because one avoirdupois ounce contains approximately 28.35 grams, the gram is a much smaller unit of weight. Converting from grams to ounces requires scaling the value down by dividing by 28.349523125.",
  relationshipTitle: "The Metric to Customary Ratio: Grams vs Ounces",
  relationshipItems: [
    { label: "1 Gram (g)", value: "0.03527396 Ounces (oz)" },
    { label: "1 Ounce (oz)", value: "28.349523125 Grams (g)" }
  ],
  formula: {
    text: "Convert weight by dividing the gram amount by the official avoirdupois ounce definition factor.",
    math: "Mass in Ounces (oz) = Mass in Grams (g) / 28.349523125",
    subtext: "For standard household cooking and mailing, dividing by 28.35 is highly accurate."
  },
  formulaTitle: "The Gram to Ounce Conversion Formula",
  practicalTip: {
    title: "The 28g Rule in the Kitchen",
    text: "When baking or cooking, chefs often memorize the 28-gram approximation. Converting recipes on the fly is simpler when you round 1 ounce to 28 grams, and 100 grams to 3.5 ounces."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Baking Chocolate",
        subtitle: "A luxury baking recipe requires 150 grams of dark chocolate. Convert this weight to ounces.",
        steps: [
          "Identify the weight in grams: 150 g.",
          "Write down the conversion formula: oz = g / 28.349523125.",
          "Perform the division: 150 / 28.349523125 ≈ 5.291.",
          "Conclude the calculation: 150 grams of chocolate is equal to approximately 5.29 ounces."
        ]
      },
      {
        title: "Example 2: Mailing an Envelope",
        subtitle: "A greeting card weighs 45 grams. Determine its weight in ounces to select the correct postage stamp category.",
        steps: [
          "Identify the weight in grams: 45 g.",
          "Divide by the standard factor: 45 / 28.349523125.",
          "Calculate the quotient: 1.587.",
          "Conclude the calculation: The letter weighs approximately 1.59 ounces."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Ounce Reference Table",
    headers: ["Grams (g)", "Ounces (oz)", "Common Reference Items"],
    rows: [
      { fromVal: "1", toVal: "0.035", extra: "A single standard paperclip" },
      { fromVal: "10", toVal: "0.353", extra: "A standard metal house key" },
      { fromVal: "28.35", toVal: "1.000", extra: "Exactly one avoirdupois ounce" },
      { fromVal: "50", toVal: "1.764", extra: "A standard box of matches" },
      { fromVal: "100", toVal: "3.527", extra: "A medium-sized apple" },
      { fromVal: "200", toVal: "7.055", extra: "A standard glass of water" },
      { fromVal: "453.59", toVal: "16.000", extra: "Exactly one pound" },
      { fromVal: "1,000 (1 kg)", toVal: "35.274", extra: "Two pints of milk" }
    ]
  },
  expertNote: {
    title: "Avoirdupois vs Troy Ounces",
    text: "Be aware that two different ounce standards exist. The everyday 'avoirdupois' ounce is 28.35 grams, whereas the 'troy' ounce (used strictly for precious metals like gold and silver) is heavier, weighing exactly 31.103 grams."
  },
  applications: {
    title: "Real-World Customary Applications",
    items: [
      {
        title: "Culinary Arts & Baking",
        text: "Converting dry ingredients from grams to ounces is a standard task when using recipe books published across different markets (e.g. converting European gram recipes for US home bakers)."
      },
      {
        title: "Postal Weight Inquiries",
        text: "Postal organizations charge mail fees based on ounce thresholds (e.g. under 1 ounce, under 2 ounces). Converting gram weight values ensures correct stamp application."
      },
      {
        title: "Coffee Brewing Metrics",
        text: "Specialty coffee beans are sold globally in bags of 250g or 500g, which baristas and retail sellers convert to ounces (approx. 8.8 oz and 17.6 oz) for domestic labeling."
      }
    ]
  },
  pitfalls: {
    title: "Common Weight Conversion Mistakes",
    items: [
      "Confusing fluid ounces with weight ounces: A fluid ounce is a unit of liquid volume, whereas an avoirdupois ounce is a unit of solid weight. They are not interchangeable.",
      "Using Troy ounces for food: Accidentally using the 31.1g precious metals factor for food ingredients will lead to incorrect culinary proportions.",
      "Multiplying instead of dividing: Since an ounce is much larger than a gram, your numerical value should become smaller when converting from grams to ounces."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to ounces?",
      answer: "Divide the weight value in grams by 28.349523125 to get the equivalent weight in ounces."
    },
    {
      question: "How many grams are in an ounce?",
      answer: "There are exactly 28.349523125 grams in one standard avoirdupois ounce."
    },
    {
      question: "What is the formula for converting g to oz?",
      answer: "The formula is: Ounces (oz) = Grams (g) / 28.349523125."
    },
    {
      question: "Is 28 grams exactly equal to 1 ounce?",
      answer: "No, 28 grams is a rounded approximation used for convenience in cooking. The exact value is 28.349523125 grams."
    },
    {
      question: "What is the difference between a dry ounce and a fluid ounce?",
      answer: "A dry (weight) ounce measures mass, while a fluid ounce measures liquid volume. They are completely different measurement standards."
    },
    {
      question: "What is the symbol for ounces?",
      answer: "The official symbol for the ounce is 'oz'."
    },
    {
      question: "Can this converter process decimal values?",
      answer: "Yes, our tool handles decimal gram quantities instantly and outputs accurate, high-precision decimal ounce weights."
    },
    {
      question: "How do I convert ounces back to grams?",
      answer: "To perform the reverse conversion, multiply the ounce value by 28.349523125."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Pound", from: "gram", to: "pound" },
    { label: "Gram to Stone", from: "gram", to: "stone" },
    { label: "Ounce to Gram", from: "ounce", to: "gram" },
    { label: "Kilogram to Ounce", from: "kilogram", to: "ounce" }
  ],
  references: [
    "NIST Guide to Metric and Imperial Conversions",
    "ISO 80000-4 - Quantities and Units of Mass"
  ]
};
