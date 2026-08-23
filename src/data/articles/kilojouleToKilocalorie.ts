import { CustomArticleData } from "./types";

export const kilojouleToKilocalorie: CustomArticleData = {
  fromUnitId: "kilojoule",
  toUnitId: "kilocalorie",
  seoTitle: "Kilojoule to Kilocalorie Converter (kJ to kcal)",
  metaDescription: "Convert kilojoules to kilocalories (kJ to kcal / food Calories) accurately. Step-by-step nutrition formulas, lookup tables, and scientific FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilojoule-to-kilocalorie",
  h1: "Kilojoule to Kilocalorie Converter",
  introduction: [
    "The kilojoule (kJ) and the kilocalorie (kcal)—often referred to colloquially as the food Calorie—are the two primary units used globally to express the energy content of food and the metabolic expenditure of the human body. While international food safety authorities in Europe, Australia, and New Zealand mandate kilojoules on nutritional labels, countries such as the United States, Canada, and Japan predominantly display kilocalories.",
    "Converting kilojoules to kilocalories enables consumers, nutritionists, dietitians, and athletes to quickly evaluate dietary intake and exercise burn across different regional standards. Under the standard thermochemical conversion factor, one kilocalorie is defined as exactly 4.184 kilojoules. Therefore, converting kilojoules to kilocalories is performed by dividing the kilojoule value by 4.184.",
    "This comprehensive guide details the mathematical relationship between kJ and kcal, provides clear manual calculation steps, presents a practical reference table with common food items, highlights nutritional pitfalls, and answers common dietary energy questions."
  ],
  quickAnswer: {
    text: "To convert kilojoules to kilocalories, divide the energy in kilojoules by 4.184 (or multiply by 0.239006). For example, 2,000 kilojoules equals approximately 478 kilocalories.",
    formulaDisplay: "kcal = kJ ÷ 4.184",
    subtext: "1 kilojoule is equal to approximately 0.239006 kilocalories (kcal)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is the official SI metric unit of energy equal to 1,000 Joules. In human biology and food chemistry, kilojoules quantify the energy released when proteins, carbohydrates, fats, and alcohol undergo metabolic oxidation. One kilojoule represents the mechanical work of exerting 1,000 Newtons of force over one meter."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilocalorie (kcal / Cal)",
    text: "The kilocalorie (symbol: kcal), frequently labeled as a 'Calorie' (with a capital C) on consumer food packaging, is defined as the amount of thermal energy required to increase the temperature of one kilogram of water by one degree Celsius at standard atmospheric pressure. One kilocalorie equals exactly 1,000 small gram calories (4,184 Joules or 4.184 kilojoules)."
  },
  relationship: "The relationship between kilojoules and kilocalories is established by the thermochemical mechanical equivalent of heat: 1 kcal = 4.184 kJ. Dividing any kilojoule value by 4.184 yields its exact equivalent in dietary kilocalories.",
  relationshipTitle: "Kilojoule vs Kilocalorie Equivalence",
  relationshipItems: [
    { label: "4.184 kJ", value: "1 kcal (1 dietary Food Calorie)" },
    { label: "100 kJ", value: "23.90 kcal" },
    { label: "500 kJ", value: "119.50 kcal (typical healthy snack)" },
    { label: "2,000 kJ", value: "478.01 kcal (standard meal)" },
    { label: "8,700 kJ", value: "2,079.35 kcal (average adult daily intake target)" }
  ],
  formula: {
    text: "Divide the energy value in kilojoules by 4.184 to find the corresponding kilocalories.",
    math: "kcal = kJ / 4.184",
    subtext: "Alternatively: kcal = kJ × 0.2390057"
  },
  formulaTitle: "Kilojoule to Kilocalorie Conversion Formula",
  practicalTip: {
    title: "The 'Divide by 4' Rule of Thumb",
    text: "For rapid mental estimates when reading food labels in Australia or Europe, divide the kJ number by 4 and subtract roughly 5%. For example: 800 kJ ÷ 4 = 200, minus 5% ≈ 190 kcal (exact value: 191.2 kcal)."
  },
  expertNote: {
    title: "Global Nutrition Labeling Standards",
    text: "The European Union (Regulation EU 1169/2011) and Food Standards Australia New Zealand (FSANZ) mandate that energy must be declared in both kJ and kcal, with kJ listed first. The US FDA mandates Calories (kcal) as the primary metric."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting a Packaged Snack Energy Value",
        subtitle: "A protein bar in Australia states 850 kJ on the label. Calculate the kilocalories.",
        steps: [
          "Identify the kilojoule value: 850 kJ.",
          "Apply the formula: kcal = 850 ÷ 4.184.",
          "Perform the calculation: 850 ÷ 4.184 = 203.155 kcal.",
          "Result: 850 kJ is equivalent to approximately 203.2 kcal."
        ]
      },
      {
        title: "Example 2: Daily Reference Intake",
        subtitle: "Convert the Australian daily adult reference intake of 8,700 kJ into kcal.",
        steps: [
          "Identify the total kilojoules: 8,700 kJ.",
          "Divide by 4.184: 8,700 ÷ 4.184 = 2,079.35 kcal.",
          "Result: 8,700 kJ equals approximately 2,079 kcal (matching the ~2,000–2,100 kcal guideline)."
        ]
      },
      {
        title: "Example 3: Cardiovascular Fitness Tracker Output",
        subtitle: "A stationary exercise bike records a workout expenditure of 1,500 kJ. Convert to kcal.",
        steps: [
          "Identify the exercise energy: 1,500 kJ.",
          "Multiply by 0.2390057: 1,500 × 0.2390057 = 358.51 kcal.",
          "Result: 1,500 kJ burned during exercise equals approximately 358.5 kcal."
        ]
      }
    ]
  },
  table: {
    title: "Kilojoule to Kilocalorie Conversion Table",
    headers: ["Kilojoules (kJ)", "Kilocalories (kcal)", "Everyday Dietary Context"],
    rows: [
      { fromVal: "4.184 kJ", toVal: "1.00 kcal", extra: "1 single dietary Calorie" },
      { fromVal: "100 kJ", toVal: "23.90 kcal", extra: "1 cup of black coffee or cucumber slices" },
      { fromVal: "250 kJ", toVal: "59.75 kcal", extra: "Half a medium apple" },
      { fromVal: "500 kJ", toVal: "119.50 kcal", extra: "One large boiled egg" },
      { fromVal: "750 kJ", toVal: "179.25 kcal", extra: "A small banana or Greek yogurt cup" },
      { fromVal: "1,000 kJ", toVal: "239.01 kcal", extra: "A slice of whole-grain avocado toast" },
      { fromVal: "1,500 kJ", toVal: "358.51 kcal", extra: "A bowl of oatmeal with nuts and berries" },
      { fromVal: "2,000 kJ", toVal: "478.01 kcal", extra: "A standard chicken salad lunch" },
      { fromVal: "3,000 kJ", toVal: "717.02 kcal", extra: "Hearty dinner entree" },
      { fromVal: "5,000 kJ", toVal: "1,195.03 kcal", extra: "Half-day endurance athlete intake" },
      { fromVal: "8,700 kJ", toVal: "2,079.35 kcal", extra: "Standard adult recommended daily intake" },
      { fromVal: "10,000 kJ", toVal: "2,390.06 kcal", extra: "Active individual daily maintenance energy" }
    ]
  },
  applications: {
    title: "Practical Applications of kJ to kcal Conversion",
    items: [
      {
        title: "International Travel & Dietary Tracking",
        text: "Individuals logging meals in smartphone fitness apps while traveling abroad convert European or Australian food package kJ ratings into standard kcal targets."
      },
      {
        title: "Clinical Dietetics & Metabolic Calculations",
        text: "Dietitians calculating resting energy expenditure (REE) via indirect calorimetry switch between SI energy units and traditional kilocalorie macronutrient distributions."
      },
      {
        title: "Sports Science & Performance Nutrition",
        text: "Exercise physiologists translating ergometer power outputs (kilojoules of mechanical work) calculate athlete glycogen replenishment requirements in kcal."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Kilojoule to Kilocalorie Conversion",
    items: [
      "Multiplying by 4.184 instead of dividing: Kilojoules represent a smaller increment than kilocalories, so the kcal number is always smaller than the kJ number.",
      "Confusing small gram calories (cal) with kilocalories (kcal): 1,000 kJ equals 239.01 kcal, but 239,006 small calories.",
      "Assuming 1 kcal = 4.0 kJ flat: While useful as an approximation, using 4.0 creates an error of over 4.4% (e.g., 8,700 kJ / 4 = 2,175 kcal vs actual 2,079 kcal)."
    ]
  },
  faqs: [
    {
      question: "How many kilocalories are in 1 kilojoule?",
      answer: "There are approximately 0.239006 kilocalories (kcal) in 1 kilojoule."
    },
    {
      question: "What is the exact formula to convert kJ to kcal?",
      answer: "The formula is: kcal = kJ ÷ 4.184."
    },
    {
      question: "Why do Australian and European food packages use kilojoules instead of Calories?",
      answer: "The International System of Units (SI) adopted the Joule as the official standard unit for all forms of energy. Australia, New Zealand, and European regulatory bodies legally adopted kJ to standardize scientific and consumer measurements."
    },
    {
      question: "How many kilocalories is 8,700 kJ?",
      answer: "8,700 kJ divided by 4.184 equals approximately 2,079.35 kcal, which represents the standard average daily energy requirement for an adult."
    },
    {
      question: "Is 1 food Calorie equal to 1 kilocalorie?",
      answer: "Yes. In dietary contexts, a 'Calorie' (capital C) is identical to a kilocalorie (kcal). Both equal 4.184 kilojoules or 1,000 small calories."
    },
    {
      question: "How do I convert 1,200 kJ to kcal?",
      answer: "1,200 ÷ 4.184 = 286.81 kcal."
    },
    {
      question: "What is the fastest way to estimate kcal from kJ in my head?",
      answer: "Divide the kJ value by 4 and reduce the result slightly (by about 5%). For example, 400 kJ / 4 = 100 kcal - 5% = 95 kcal (actual: 95.6 kcal)."
    },
    {
      question: "How do I convert kcal back to kJ?",
      answer: "To convert kcal back to kJ, multiply the kilocalorie value by 4.184 (e.g., 500 kcal × 4.184 = 2,092 kJ)."
    }
  ],
  relatedList: [
    { label: "Kilocalorie to Kilojoule", from: "kilocalorie", to: "kilojoule" },
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" },
    { label: "Kilojoule to Joule", from: "kilojoule", to: "joule" },
    { label: "Kilojoule to Watt Hour", from: "kilojoule", to: "watt-hour" },
    { label: "Kilojoule to BTU", from: "kilojoule", to: "btu" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "Food Standards Australia New Zealand (FSANZ) - Food Standards Code: Standard 1.2.8 Nutrition Information.",
    "US FDA - Food Labeling Guide (21 CFR 101.9)."
  ]
};
