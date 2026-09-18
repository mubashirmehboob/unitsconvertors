import { CustomArticleData } from "./types";

export const calorieToKilocalorie: CustomArticleData = {
  fromUnitId: "calorie",
  toUnitId: "kilocalorie",
  seoTitle: "Calorie to Kilocalorie Converter (cal to kcal)",
  metaDescription: "Convert small calories to kilocalories (cal to kcal) instantly. Learn the mathematical formula, small vs. large calorie definitions, calculations, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/calorie-to-kilocalorie",
  h1: "Calorie to Kilocalorie Converter",
  introduction: [
    "The small calorie (cal) and the kilocalorie (kcal) represent two distinct scales of thermal energy widely used in chemistry, thermal physics, physiology, and nutrition. In laboratory calorimetry, small calories quantify tiny amounts of thermal exchange, whereas kilocalories measure substantial thermodynamic yields and dietary fuel values.",
    "Because the metric prefix kilo denotes a factor of one thousand, converting small calories to kilocalories requires dividing the calorie value by 1,000 (or multiplying by 0.001). For instance, 4,500 small calories equal exactly 4.5 kilocalories.",
    "This reference explains the distinction between gram calories and dietary Calories, details the conversion formula with worked calculation examples, provides a comprehensive lookup table, reviews common conversion mistakes, and answers practical questions."
  ],
  quickAnswer: {
    text: "To convert small calories (cal) to kilocalories (kcal), divide the calorie value by 1,000 or multiply by 0.001. For example, 2,500 small calories equal exactly 2.5 kilocalories.",
    formulaDisplay: "kcal = cal ÷ 1,000",
    subtext: "1 kilocalorie equals exactly 1,000 small gram calories (1 kcal = 1,000 cal)."
  },
  aboutSourceUnit: {
    title: "Understanding the Small Calorie (cal)",
    text: "The small calorie (symbol: cal), also known as the gram calorie or standard calorie, is defined as the amount of thermal energy required to raise the temperature of one gram of air-free water by one degree Celsius under standard atmospheric pressure (101.325 kPa). Under the thermochemical definition adopted by the National Bureau of Standards, one calorie is defined as exactly 4.184 Joules. Small calories are standard units in chemistry research, bomb calorimetry, and micro-thermodynamics."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal), frequently referred to in nutritional science as the large Calorie (written with a capital C) or food calorie, represents 1,000 small calories. One kilocalorie warms one kilogram of liquid water by one degree Celsius under standard conditions and equals exactly 4,184 Joules (4.184 kJ). Kilocalories serve as the global benchmark for expressing human basal metabolic rates, physical energy expenditure, and food nutritional labeling."
  },
  relationship: "One kilocalorie equals exactly 1,000 small calories. To convert small calories into kilocalories, divide the number of calories by 1,000. Conversely, multiplying kilocalories by 1,000 yields small calories.",
  relationshipTitle: "Calorie to Kilocalorie Mathematical Relationship",
  relationshipItems: [
    { label: "1 cal", value: "0.001 kcal (10⁻³ kcal)" },
    { label: "100 cal", value: "0.1 kcal" },
    { label: "500 cal", value: "0.5 kcal" },
    { label: "1,000 cal", value: "1.0 kcal (1 food Calorie)" },
    { label: "10,000 cal", value: "10.0 kcal" }
  ],
  formula: {
    text: "Divide the energy in small calories by 1,000 to obtain the equivalent in kilocalories.",
    math: "kcal = cal / 1000",
    subtext: "Equivalent multiplication: kcal = cal × 0.001."
  },
  formulaTitle: "Calorie to Kilocalorie Conversion Formula",
  practicalTip: {
    title: "Shift the Decimal Point Three Places Left",
    text: "Because the conversion factor is exactly 1,000, you can convert any small calorie number to kilocalories in your head by moving the decimal point three positions to the left: 750 cal becomes 0.75 kcal, and 35,000 cal becomes 35 kcal."
  },
  expertNote: {
    title: "The Capital C Convention in Food Science",
    text: "Nutrition panels in the United States and Canada often write 'Calories' with a capital C to signify kilocalories (1 Cal = 1 kcal = 1,000 cal). When reviewing laboratory chemistry papers or European dietary tables, look carefully at unit symbols to prevent a 1,000-fold order of magnitude error."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Analytical Bomb Calorimeter Reading",
        subtitle: "Convert 8,400 small calories released during organic combustion into kilocalories.",
        steps: [
          "Identify the small calorie value: 8,400 cal.",
          "Apply the formula: kcal = 8,400 ÷ 1,000.",
          "Compute the result: 8,400 / 1,000 = 8.4 kcal.",
          "Conclusion: 8,400 calories equals 8.4 kilocalories (35.1456 kJ)."
        ]
      },
      {
        title: "Example 2: Small Chemical Neutralization",
        subtitle: "Convert 650 calories of acid-base reaction heat into kilocalories.",
        steps: [
          "State the measured heat: 650 cal.",
          "Divide by 1,000: 650 ÷ 1,000 = 0.65 kcal.",
          "Conclusion: 650 calories equals exactly 0.65 kilocalories."
        ]
      },
      {
        title: "Example 3: Metabolic Respiration Sample",
        subtitle: "Convert 125,000 small calories measured over an experimental period into kilocalories.",
        steps: [
          "Record initial energy: 125,000 cal.",
          "Divide by 1,000: 125,000 ÷ 1,000 = 125 kcal.",
          "Conclusion: 125,000 calories equals 125 kilocalories."
        ]
      }
    ]
  },
  table: {
    title: "Calorie to Kilocalorie Conversion Table",
    headers: ["Calories (cal)", "Kilocalories (kcal)", "Joules (J)", "Representative Physical / Dietary Context"],
    rows: [
      { fromVal: "100 cal", toVal: "0.10 kcal", extra: "418.4 J", extra2: "Heat to raise 100g water by 1°C" },
      { fromVal: "250 cal", toVal: "0.25 kcal", extra: "1,046 J", extra2: "Dissolving small salt aliquot in water" },
      { fromVal: "500 cal", toVal: "0.50 kcal", extra: "2,092 J", extra2: "Micro-combustion analysis of sucrose" },
      { fromVal: "750 cal", toVal: "0.75 kcal", extra: "3,138 J", extra2: "Low-power laser thermal dissipation" },
      { fromVal: "1,000 cal", toVal: "1.00 kcal", extra: "4,184 J", extra2: "Standard 1 dietary Calorie baseline" },
      { fromVal: "2,500 cal", toVal: "2.50 kcal", extra: "10,460 J", extra2: "Energy content in ~0.6g of table sugar" },
      { fromVal: "5,000 cal", toVal: "5.00 kcal", extra: "20,920 J", extra2: "Energy in approximately 1.25g carbohydrates" },
      { fromVal: "10,000 cal", toVal: "10.00 kcal", extra: "41,840 J", extra2: "Energy in roughly 1.1g of dietary fat" },
      { fromVal: "25,000 cal", toVal: "25.00 kcal", extra: "104,600 J", extra2: "Small raw fruit slice metabolic value" },
      { fromVal: "50,000 cal", toVal: "50.00 kcal", extra: "209,200 J", extra2: "Half glass of unsweetened almond milk" },
      { fromVal: "100,000 cal", toVal: "100.00 kcal", extra: "418,400 J", extra2: "One medium-sized apple (dietary)" },
      { fromVal: "500,000 cal", toVal: "500.00 kcal", extra: "2,092,000 J", extra2: "Nutritional content of a standard meal" },
      { fromVal: "2,000,000 cal", toVal: "2,000.00 kcal", extra: "8,368,000 J", extra2: "Standard adult daily caloric guideline" }
    ]
  },
  applications: {
    title: "Practical Applications of Calorie to Kilocalorie Conversion",
    items: [
      {
        title: "Translating Laboratory Calorimetry into Nutritional Data",
        text: "Food science laboratories burn dehydrated food samples inside oxygen bomb calorimeters to measure gross energy in small calories. Technicians divide results by 1,000 to report compliant kilocalories for consumer nutrition labels."
      },
      {
        title: "Metabolic Research and Indirect Calorimetry",
        text: "Physiology sensors measure instantaneous respiratory gas exchange in small calories per minute. Exercise physiologists convert these rates into kilocalories per hour to calculate endurance pacing and substrate utilization."
      },
      {
        title: "Academic Chemistry Thermodynamics",
        text: "Thermochemistry textbooks frequently state bond enthalpies or heats of combustion in small calories per mole. Instructors and students convert these quantities to kilocalories per mole or kilojoules per mole for standard thermodynamic tables."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small calories with food Calories: Writing 2,000 calories for daily food intake without specifying kilocalories leads to a 1,000-fold numerical error.",
      "Multiplying instead of dividing: Kilocalories are 1,000 times larger than small calories, meaning the numerical value in kilocalories must always be smaller.",
      "Overlooking international table variants: In specialized thermodynamic steam tables, the International Table calorie (4.1868 J) is occasionally used instead of the standard thermochemical calorie (4.184 J)."
    ]
  },
  faqs: [
    {
      question: "How many kilocalories are in one small calorie?",
      answer: "There are exactly 0.001 kilocalories (1/1,000 kcal) in one small gram calorie."
    },
    {
      question: "What is the difference between a calorie and a kilocalorie?",
      answer: "A small calorie (cal) heats one gram of water by 1°C, while a kilocalorie (kcal) heats one kilogram (1,000 grams) of water by 1°C. Therefore, one kilocalorie contains exactly 1,000 small calories."
    },
    {
      question: "Is a dietary Calorie the same as a kilocalorie?",
      answer: "Yes. The dietary Calorie (capitalized) used on food packaging is identical to one kilocalorie (1 Cal = 1 kcal = 1,000 cal)."
    },
    {
      question: "How do you convert 5,000 calories to kilocalories?",
      answer: "Divide 5,000 by 1,000 to get exactly 5 kilocalories (kcal)."
    },
    {
      question: "Why does food packaging use Calories instead of small calories?",
      answer: "Using small calories would require unwieldy numbers; an average daily diet would be listed as 2,000,000 calories instead of a clean 2,000 Calories (kcal)."
    },
    {
      question: "How many Joules are in 1 kilocalorie?",
      answer: "One kilocalorie contains exactly 4,184 Joules (4.184 kilojoules) under the thermochemical standard."
    },
    {
      question: "Can I convert calories to kilocalories by moving the decimal point?",
      answer: "Yes. Shift the decimal point three places to the left. For example, 1,250 cal becomes 1.25 kcal."
    },
    {
      question: "What is the official SI unit for energy?",
      answer: "The official SI derived unit for all energy and heat is the Joule (J). Both the calorie and kilocalorie are non-SI metric units retained for specialized applications."
    }
  ],
  relatedList: [
    { label: "Kilocalorie to Calorie", from: "kilocalorie", to: "calorie" },
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Kilocalorie to Kilojoule", from: "kilocalorie", to: "kilojoule" },
    { label: "Kilocalorie to Joule", from: "kilocalorie", to: "joule" },
    { label: "Calorie to Kilojoule", from: "calorie", to: "kilojoule" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI brochure, 9th edition).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
