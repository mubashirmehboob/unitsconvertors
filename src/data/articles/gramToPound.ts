import { CustomArticleData } from "./types";

export const gramToPound: CustomArticleData = {
  fromUnitId: "gram",
  toUnitId: "pound",
  seoTitle: "Gram to Pound Converter - g to lb",
  metaDescription: "Easily convert grams to pounds (g to lb). Bridge the gap between metric and imperial weight measurements, use our formula, and view our handy comparison table.",
  h1: "Gram to Pound Converter",
  introduction: [
    "Navigating between different measurement standards is a daily task in our interconnected world. Shifting weight measurements between the metric gram (used internationally) and the imperial pound (used primarily in the United States and the United Kingdom) is a classic example of this bridge.",
    "Whether you are adapting an overseas culinary recipe, checking the weight of an imported product, or completing engineering specs, understanding how grams convert to pounds ensures accuracy and prevents logistical errors."
  ],
  quickAnswer: {
    text: "To convert grams to pounds, divide the gram value by 453.59237, or multiply it by 0.00220462. For quick estimation, 454 grams is roughly equal to one pound.",
    formulaDisplay: "1 g = 0.00220462 lb",
    subtext: "Simply divide the gram amount by 453.59237 to transition from the metric system to the US customary standard."
  },
  aboutSourceUnit: {
    title: "Understanding the Gram (g)",
    text: "The gram (symbol: g) is a metric unit of mass. Defined as one-thousandth of a kilogram, it is highly useful for measuring small weights such as portion sizes, jewelry, active cosmetic ingredients, and letter mail."
  },
  aboutTargetUnit: {
    title: "Understanding the Pound (lb)",
    text: "The pound (symbol: lb) is a standard unit of mass in the US customary and British imperial systems. The international avoirdupois pound is officially defined as exactly 0.45359237 kilograms (or 453.59237 grams)."
  },
  relationship: "Because one avoirdupois pound contains exactly 453.59237 grams, a gram is a much smaller unit of weight. Converting from grams to pounds requires scaling down the number by dividing by 453.59237.",
  relationshipTitle: "The Metric to Imperial Divide: Grams vs Pounds",
  relationshipItems: [
    { label: "1 Gram (g)", value: "0.00220462 Pounds (lb)" },
    { label: "1 Pound (lb)", value: "453.59237 Grams (g)" }
  ],
  formula: {
    text: "Convert weight by dividing the gram amount by the official international definition factor of 453.59237.",
    math: "Mass in Pounds (lb) = Mass in Grams (g) / 453.59237",
    subtext: "For quick calculations, dividing by 453.6 is commonly accepted in non-scientific settings."
  },
  formulaTitle: "The Gram to Pound Conversion Formula",
  practicalTip: {
    title: "The 450g Rule of Thumb",
    text: "When shopping or cooking without a calculator, you can estimate that 450 grams is slightly less than one pound, and 1,000 grams (1 kg) is equal to approximately 2.2 pounds."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Package of Coffee",
        subtitle: "A bag of premium Italian espresso beans lists a net weight of 500 grams. Convert this weight to pounds.",
        steps: [
          "Identify the weight in grams: 500 g.",
          "Write down the conversion formula: lb = g / 453.59237.",
          "Perform the division: 500 / 453.59237 ≈ 1.10231.",
          "Conclude the calculation: 500 grams of coffee is equivalent to approximately 1.10 pounds (or 1 lb 1.6 oz)."
        ]
      },
      {
        title: "Example 2: Cooking Ingredients",
        subtitle: "A cooking recipe requires 225 grams of unsalted butter. Calculate how many pounds of butter this represents.",
        steps: [
          "Identify the weight in grams: 225 g.",
          "Divide by the official factor: 225 / 453.59237.",
          "Calculate the quotient: 0.49604.",
          "Conclude the calculation: 225 grams of butter is extremely close to half a pound (0.5 lb)."
        ]
      }
    ]
  },
  table: {
    title: "Gram to Pound Reference Table",
    headers: ["Grams (g)", "Pounds (lb)", "Approximate Weight Reference"],
    rows: [
      { fromVal: "100", toVal: "0.220", extra: "A typical bar of bath soap" },
      { fromVal: "250", toVal: "0.551", extra: "About half a pound of ground coffee" },
      { fromVal: "453.59", toVal: "1.000", extra: "Exactly one pound" },
      { fromVal: "500", toVal: "1.102", extra: "A standard tub of spreadable margarine" },
      { fromVal: "1,000 (1 kg)", toVal: "2.205", extra: "A standard bag of granulated sugar" },
      { fromVal: "2,000", toVal: "4.409", extra: "A medium-sized cantaloupe melon" },
      { fromVal: "5,000", toVal: "11.023", extra: "A lightweight dumbbells pair" },
      { fromVal: "10,000", toVal: "22.046", extra: "A typical carry-on travel suitcase" }
    ]
  },
  expertNote: {
    title: "Definition of the Avoirdupois Pound",
    text: "The term 'pound' historically referred to various standards. The contemporary standard, known as the international avoirdupois pound, was legally agreed upon by the United States, United Kingdom, Canada, Australia, and New Zealand in 1959, fixing it directly to the metric kilogram."
  },
  applications: {
    title: "Real-World Customary Applications",
    items: [
      {
        title: "Global Recipe Adjustments",
        text: "European cooking books list ingredients strictly in grams, while American kitchens operate with ounces and pounds. Converting grams to decimal pounds makes recipe adaptation fluid."
      },
      {
        title: "International Air Freight",
        text: "Global courier services calculate payload and weight fees based on both metric kilograms and imperial pounds. Gram conversions ensure accurate pricing for lighter packages."
      },
      {
        title: "Consumer Electronics Specs",
        text: "Manufacturers design smartphones and tablets weighing under 300 grams. Review websites and retail listings translate these to pounds and ounces to inform US consumers."
      }
    ]
  },
  pitfalls: {
    title: "Common Weight Conversion Mistakes",
    items: [
      "Mixing up pounds and ounces: Remember that one pound consists of 16 ounces. A weight of 1.5 pounds does not mean 1 pound and 5 ounces (it actually represents 1 pound and 8 ounces).",
      "Using wrong decimal approximations: Rounding the factor too far (like dividing by 400 instead of 453.6) can introduce significant errors for larger product weights.",
      "Confusing Troy pounds with Avoirdupois: Troy pounds (used historically for precious metals) contain only 12 ounces, but all standard consumer weight conversions rely on the Avoirdupois standard (16 oz)."
    ]
  },
  faqs: [
    {
      question: "How do I convert grams to pounds?",
      answer: "Divide the gram value by 453.59237 to find the equivalent weight in pounds."
    },
    {
      question: "How many grams are in a pound?",
      answer: "There are exactly 453.59237 grams in one international avoirdupois pound."
    },
    {
      question: "What is the formula for converting g to lb?",
      answer: "The mathematical formula is: Pounds (lb) = Grams (g) / 453.59237."
    },
    {
      question: "Is 454 grams equal to one pound?",
      answer: "Yes, 454 grams is the standard rounded weight representing one pound in commercial packaging and household cooking."
    },
    {
      question: "How many pounds are in 1 kilogram?",
      answer: "One kilogram (1,000 grams) is equal to approximately 2.20462 pounds."
    },
    {
      question: "Why is 'lb' used as the symbol for pounds?",
      answer: "The abbreviation 'lb' stands for 'libra', the Latin word for scales and balance, which was the Roman unit of weight from which the modern pound evolved."
    },
    {
      question: "Can I convert fractional grams?",
      answer: "Yes, our online conversion engine processes fractional or decimal gram inputs instantly and outputs high-precision decimal pound values."
    },
    {
      question: "How do I convert pounds back to grams?",
      answer: "Multiply the pound value by 453.59237 to perform the reverse calculation."
    }
  ],
  relatedList: [
    { label: "Gram to Kilogram", from: "gram", to: "kilogram" },
    { label: "Gram to Ounce", from: "gram", to: "ounce" },
    { label: "Gram to Stone", from: "gram", to: "stone" },
    { label: "Pound to Gram", from: "pound", to: "gram" },
    { label: "Kilogram to Pound", from: "kilogram", to: "pound" }
  ],
  references: [
    "NIST Special Publication 811 - Guide for the Use of the International System of Units (SI)",
    "The United Kingdom Weights and Measures Act of 1985"
  ]
};
