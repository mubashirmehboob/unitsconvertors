import { CustomArticleData } from "./types";

export const calorieToKilojoule: CustomArticleData = {
  fromUnitId: "calorie",
  toUnitId: "kilojoule",
  seoTitle: "Calorie to Kilojoule Converter (cal to kJ)",
  metaDescription: "Convert small calories to kilojoules (cal to kJ) with exact SI thermochemical precision. Step-by-step formulas, calculation examples, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/calorie-to-kilojoule",
  h1: "Calorie to Kilojoule Converter",
  introduction: [
    "The small calorie (cal) and the kilojoule (kJ) are two metric units of energy used to quantify heat exchange, chemical enthalpy, and metabolic energy expenditure. While small gram calories are primarily utilized in laboratory calorimetry and biophysical research, the kilojoule is the official International System of Units (SI) metric standard for energy reporting.",
    "Converting small calories to kilojoules requires calculating the SI equivalent across metric prefixes. Because one thermochemical calorie equals exactly 4.184 Joules, and one kilojoule contains 1,000 Joules, one small calorie equals exactly 0.004184 kilojoules (4.184 × 10⁻³ kJ). Therefore, converting calories to kilojoules is accomplished by multiplying the calorie count by 0.004184 (or multiplying by 4.184 and dividing by 1,000).",
    "This comprehensive guide details the conversion formula, provides clear step-by-step manual calculation examples, presents a detailed laboratory reference table, highlights common conversion pitfalls, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert small calories (gram calories) to kilojoules, multiply the calorie value by 4.184 and divide by 1,000 (or multiply by 0.004184). For example, 1,000 small calories equals exactly 4.184 kilojoules.",
    formulaDisplay: "kJ = (cal × 4.184) ÷ 1,000 = cal × 0.004184",
    subtext: "1 small calorie is equal to exactly 0.004184 kilojoules (thermochemical standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The calorie (symbol: cal), specifically the small calorie or gram calorie, represents the thermal energy required to increase the temperature of one gram of air-free water by one degree Celsius under standard atmospheric pressure. Under the internationally standardized thermochemical convention, 1 small calorie equals exactly 4.184 Joules (0.004184 kJ). It is exactly 1/1,000th of a dietary kilocalorie (kcal)."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilojoule (kJ)",
    text: "The kilojoule (symbol: kJ) is an official decimal multiple of the SI derived unit of energy, the Joule, defined as 1,000 Joules (10³ J). Widely adopted across global food labeling standards, thermodynamics tables, mechanical engineering, and chemical physics, the kilojoule represents 1,000 Newtons of force exerted over a distance of one meter."
  },
  relationship: "Because 1 small calorie equals 4.184 Joules and 1 kilojoule equals 1,000 Joules, 1 cal = 4.184 / 1,000 = 0.004184 kJ exactly. Conversely, 1 kilojoule contains approximately 239.0057 small calories.",
  relationshipTitle: "Calorie to Kilojoule Scale Comparison",
  relationshipItems: [
    { label: "1 cal", value: "0.004184 kJ (heats 1g water 1°C)" },
    { label: "100 cal", value: "0.4184 kJ" },
    { label: "239.01 cal", value: "1 kJ (1,000 Joules)" },
    { label: "1,000 cal", value: "4.184 kJ (1 kilocalorie / 1 food Calorie)" },
    { label: "10,000 cal", value: "41.84 kJ" }
  ],
  formula: {
    text: "Multiply the energy in small calories by 4.184, then divide by 1,000 to determine the kilojoules.",
    math: "kJ = (cal * 4.184) / 1000",
    subtext: "Alternatively: kJ = cal × 0.004184"
  },
  formulaTitle: "Calorie to Kilojoule Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert small calories to kJ in your head, multiply by 4.2 and move the decimal point three spots to the left (e.g., 500 cal × 4.2 = 2,100 → 2.1 kJ; exact: 2.092 kJ)."
  },
  expertNote: {
    title: "Food Calories vs Laboratory Small Calories",
    text: "If you are converting food nutrition data labeled 'Calories' (capital C), you are working with kilocalories (kcal). In that case, 1 food Calorie = 4.184 kJ directly, rather than 0.004184 kJ."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Chemical Solution Neutralization Heat",
        subtitle: "Convert 750 small calories of reaction heat into kilojoules.",
        steps: [
          "Identify the energy in small calories: 750 cal.",
          "Apply the formula: kJ = (750 × 4.184) ÷ 1,000.",
          "Calculate numerator: 750 × 4.184 = 3,138 J.",
          "Divide by 1,000: 3,138 ÷ 1,000 = 3.138 kJ.",
          "Result: 750 cal equals exactly 3.138 kilojoules."
        ]
      },
      {
        title: "Example 2: Biochemical Respiration Reaction",
        subtitle: "Convert 2,500 small calories into kilojoules.",
        steps: [
          "Identify input: 2,500 cal.",
          "Multiply by 0.004184: 2,500 × 0.004184 = 10.46 kJ.",
          "Result: 2,500 cal equals exactly 10.46 kilojoules."
        ]
      },
      {
        title: "Example 3: Micro-Calorimetry Sample Combustion",
        subtitle: "Convert 120 calories into kilojoules.",
        steps: [
          "Identify value: 120 cal.",
          "Calculate: 120 × 0.004184 = 0.50208 kJ.",
          "Result: 120 cal equals approximately 0.5021 kJ."
        ]
      }
    ]
  },
  table: {
    title: "Calorie to Kilojoule Conversion Table",
    headers: ["Calories (cal)", "Kilojoules (kJ)", "Joules (J)", "Scientific & Practical Context"],
    rows: [
      { fromVal: "1 cal", toVal: "0.004184 kJ", extra: "4.184 J", extra2: "Energy to warm 1g water 1°C" },
      { fromVal: "10 cal", toVal: "0.04184 kJ", extra: "41.84 J", extra2: "Small chemical micro-dissolution" },
      { fromVal: "50 cal", toVal: "0.2092 kJ", extra: "209.2 J", extra2: "Micro-calorimeter test baseline" },
      { fromVal: "100 cal", toVal: "0.4184 kJ", extra: "418.4 J", extra2: "Warm 100g water by 1°C" },
      { fromVal: "239.01 cal", toVal: "1.0000 kJ", extra: "1,000 J", extra2: "Exactly 1 kilojoule" },
      { fromVal: "500 cal", toVal: "2.0920 kJ", extra: "2,092 J", extra2: "Exothermic reaction heat release" },
      { fromVal: "1,000 cal", toVal: "4.1840 kJ", extra: "4,184 J", extra2: "1 kilocalorie (1 food Calorie)" },
      { fromVal: "2,000 cal", toVal: "8.3680 kJ", extra: "8,368 J", extra2: "2 kilocalories" },
      { fromVal: "5,000 cal", toVal: "20.9200 kJ", extra: "20,920 J", extra2: "5 kilocalories" },
      { fromVal: "10,000 cal", toVal: "41.8400 kJ", extra: "41,840 J", extra2: "10 kilocalories" },
      { fromVal: "50,000 cal", toVal: "209.2000 kJ", extra: "209,200 J", extra2: "50 kilocalories" },
      { fromVal: "100,000 cal", toVal: "418.4000 kJ", extra: "418,400 J", extra2: "100 kilocalories" }
    ]
  },
  applications: {
    title: "Practical Applications of cal to kJ Conversion",
    items: [
      {
        title: "Analytical Bomb Calorimetry",
        text: "Research chemists measuring fuel pellet combustion in small calories convert their experimental data into kilojoules for standard thermodynamic enthalpy tables."
      },
      {
        title: "Biological Energetics and Respiration",
        text: "Biologists evaluating cellular respiration and ATP conversion rates translate heat measurements from small calories into SI kilojoules."
      },
      {
        title: "Chemical Process Safety Engineering",
        text: "Process safety engineers modeling runaway exothermic reactions convert runaway heat rates from calories per gram into kJ/kg to design reactor cooling systems."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small calories (cal) with food Calories (kcal): 1 food Calorie = 4.184 kJ, whereas 1 small calorie = 0.004184 kJ (a 1,000-fold difference).",
      "Multiplying by 1,000 instead of dividing: Small calories represent a much smaller energy amount than kilojoules, so the kJ number is always smaller.",
      "Using the International Table factor (0.0041868) when thermochemical factor (0.004184) is specified."
    ]
  },
  faqs: [
    {
      question: "How many kilojoules are in 1 small calorie?",
      answer: "There are exactly 0.004184 kilojoules in 1 thermochemical small calorie."
    },
    {
      question: "What is the formula to convert calories to kilojoules?",
      answer: "The formula is: kJ = (calories × 4.184) ÷ 1,000 (or kJ = calories × 0.004184)."
    },
    {
      question: "How many small calories are in 1 kilojoule?",
      answer: "There are approximately 239.0057 small calories in 1 kilojoule."
    },
    {
      question: "How many kilojoules are in 1,000 small calories?",
      answer: "1,000 small calories equal exactly 4.184 kilojoules (which is also equal to 1 dietary kilocalorie)."
    },
    {
      question: "How do I convert 5,000 calories to kJ?",
      answer: "5,000 × 0.004184 = 20.92 kJ."
    },
    {
      question: "Why is there a factor of 1,000 in the conversion?",
      answer: "The SI prefix 'kilo-' signifies 1,000. Because 1 calorie = 4.184 Joules and 1 kilojoule = 1,000 Joules, 1 calorie = 4.184 ÷ 1,000 = 0.004184 kilojoules."
    },
    {
      question: "How do I convert kilojoules back to small calories?",
      answer: "Divide the kilojoule value by 0.004184 (or multiply by approximately 239.0057)."
    },
    {
      question: "What is the difference between cal, kcal, and kJ?",
      answer: "A calorie (cal) heats 1g of water by 1°C (4.184 J). A kilocalorie (kcal or food Calorie) heats 1kg of water by 1°C (4,184 J = 4.184 kJ). A kilojoule (kJ) is the SI standard equal to 1,000 Joules (~239 cal or ~0.239 kcal)."
    }
  ],
  relatedList: [
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" },
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Kilocalorie to Kilojoule", from: "kilocalorie", to: "kilojoule" },
    { label: "Kilojoule to Kilocalorie", from: "kilojoule", to: "kilocalorie" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
