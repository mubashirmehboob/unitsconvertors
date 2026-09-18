import { CustomArticleData } from "./types";

export const kilocalorieToCalorie: CustomArticleData = {
  fromUnitId: "kilocalorie",
  toUnitId: "calorie",
  seoTitle: "Kilocalorie to Calorie Converter (kcal to cal)",
  metaDescription: "Convert kilocalories to small calories (kcal to cal) with exact precision. Learn the 1,000x conversion factor, food Calorie vs. gram calorie definitions, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilocalorie-to-calorie",
  h1: "Kilocalorie to Calorie Converter",
  introduction: [
    "The kilocalorie (kcal) and the small calorie (cal) represent two distinct metric magnitudes of thermal energy. While the small calorie—also known as the gram calorie—is the classical laboratory unit describing the heat needed to warm one gram of water by one degree Celsius, the kilocalorie represents 1,000 small calories and is the universal unit of human dietetics, food energy accounting, and metabolic physiology.",
    "Because the prefix kilo indicates an exact multiplication factor of 1,000, converting kilocalories to small calories requires multiplying the kilocalorie value by 1,000. For example, a single food Calorie (1 kcal) contains exactly 1,000 small laboratory calories, and an apple providing 95 kcal supplies 95,000 small calories.",
    "This guide explains the historical and scientific distinction between large and small calories, details the conversion formula with clear calculation steps, supplies a comprehensive reference table, highlights common terminology traps, and answers frequent questions."
  ],
  quickAnswer: {
    text: "To convert kilocalories (kcal) to small calories (cal), multiply the kilocalorie value by 1,000. For example, 5 kcal equals exactly 5,000 small calories, and 2,000 kcal equals 2,000,000 small calories.",
    formulaDisplay: "cal = kcal × 1,000",
    subtext: "1 kilocalorie equals exactly 1,000 small gram calories (1 kcal = 1,000 cal)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal), also referred to as the large Calorie (written with a capital C) or dietary calorie, is defined as the thermal energy required to raise the temperature of one kilogram of water by one degree Celsius under standard atmospheric pressure (101.325 kPa). Equivalent to 4,184 Joules (4.184 kJ), the kilocalorie is the worldwide standard for quantifying nutritional energy in food items, human daily caloric requirements, and exercise energy expenditure."
  },
  aboutTargetUnit: {
    title: "Understanding the Small Calorie (cal)",
    text: "The small calorie (symbol: cal), or gram calorie, is defined as the amount of thermal energy necessary to warm one gram of water by one degree Celsius under standard atmospheric pressure. Under the thermochemical scale, one small calorie is defined as exactly 4.184 Joules. Small calories remain standard in physical chemistry, thermochemical calorimetry, and micro-thermodynamics."
  },
  relationship: "One kilocalorie equals exactly 1,000 small calories by metric prefix definition (1 kcal = 1,000 cal). Multiplying kilocalories by 1,000 converts them to small calories, while dividing small calories by 1,000 converts them back to kilocalories.",
  relationshipTitle: "Kilocalorie to Calorie Mathematical Equivalence",
  relationshipItems: [
    { label: "1 kcal", value: "1,000 cal (4,184 J)" },
    { label: "10 kcal", value: "10,000 cal (41.84 kJ)" },
    { label: "100 kcal", value: "100,000 cal (418.4 kJ)" },
    { label: "500 kcal", value: "500,000 cal (2.092 MJ)" },
    { label: "2,000 kcal", value: "2,000,000 cal (8.368 MJ)" }
  ],
  formula: {
    text: "Multiply the energy in kilocalories by 1,000 to obtain the equivalent in small gram calories.",
    math: "cal = kcal * 1000",
    subtext: "To convert small calories back to kilocalories: kcal = cal ÷ 1,000."
  },
  formulaTitle: "Kilocalorie to Calorie Conversion Formula",
  practicalTip: {
    title: "Mental Shortcut: Add Three Zeros",
    text: "Because the conversion factor is exactly one thousand, simply shift the decimal point three places to the right (or add three zeros to an integer). For example, 15 kcal becomes 15,000 cal, and 2.45 kcal becomes 2,450 cal."
  },
  expertNote: {
    title: "The Historical Origin of the Two Calories",
    text: "French chemist Nicolas Clément introduced the calorie in 1824 as a kilogram-calorie (what we now call the kilocalorie). Decades later, Pierre Eugène Marcellin Berthelot introduced the gram-calorie for chemical laboratory work. The dual existence of both definitions has created confusion ever since, which is why SI authorities strongly recommend the Joule to eliminate ambiguity."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Nutritional Snack Conversion",
        subtitle: "Convert a 180 kcal energy bar into small gram calories.",
        steps: [
          "Identify the kilocalorie input: 180 kcal.",
          "Apply the formula: cal = 180 × 1,000.",
          "Calculate: 180 × 1,000 = 180,000 cal.",
          "Conclusion: 180 kcal equals exactly 180,000 small calories (753.12 kJ)."
        ]
      },
      {
        title: "Example 2: Small Metabolic Energy Portion",
        subtitle: "Convert 0.75 kcal into small calories.",
        steps: [
          "State value: 0.75 kcal.",
          "Multiply by 1,000: 0.75 × 1,000 = 750 cal.",
          "Conclusion: 0.75 kcal equals exactly 750 small calories."
        ]
      },
      {
        title: "Example 3: Daily Adult Diet in Small Calories",
        subtitle: "Convert a 2,200 kcal daily intake into small calories.",
        steps: [
          "State input: 2,200 kcal.",
          "Multiply: 2,200 × 1,000 = 2,200,000 cal.",
          "Conclusion: 2,200 kcal equals exactly 2,200,000 small calories."
        ]
      }
    ]
  },
  table: {
    title: "Kilocalorie to Calorie Conversion Table",
    headers: ["Kilocalories (kcal)", "Calories (cal)", "Joules (J)", "Physical / Nutritional Benchmark"],
    rows: [
      { fromVal: "0.1 kcal", toVal: "100 cal", extra: "418.4 J", extra2: "Energy to warm 100g of water by 1°C" },
      { fromVal: "0.5 kcal", toVal: "500 cal", extra: "2,092 J", extra2: "Micro-combustion of 0.12g sugar" },
      { fromVal: "1 kcal", toVal: "1,000 cal", extra: "4,184 J", extra2: "Base 1 food Calorie benchmark" },
      { fromVal: "5 kcal", toVal: "5,000 cal", extra: "20,920 J", extra2: "One piece of sugar-free chewing gum" },
      { fromVal: "10 kcal", toVal: "10,000 cal", extra: "41,840 J", extra2: "Single cherry tomato or cup of black tea" },
      { fromVal: "25 kcal", toVal: "25,000 cal", extra: "104,600 J", extra2: "One medium carrot" },
      { fromVal: "50 kcal", toVal: "50,000 cal", extra: "209,200 J", extra2: "One cup of raw sliced strawberries" },
      { fromVal: "100 kcal", toVal: "100,000 cal", extra: "418,400 J", extra2: "One medium banana or slice of white bread" },
      { fromVal: "250 kcal", toVal: "250,000 cal", extra: "1,046,000 J", extra2: "Standard commercial protein bar" },
      { fromVal: "500 kcal", toVal: "500,000 cal", extra: "2,092,000 J", extra2: "Nutritional energy in a typical lunch" },
      { fromVal: "1,000 kcal", toVal: "1,000,000 cal", extra: "4,184,000 J", extra2: "1 Megacalorie (4.184 MJ)" },
      { fromVal: "2,000 kcal", toVal: "2,000,000 cal", extra: "8,368,000 J", extra2: "Standard daily adult energy reference value" },
      { fromVal: "2,500 kcal", toVal: "2,500,000 cal", extra: "10,460,000 J", extra2: "Active adult daily energy expenditure" }
    ]
  },
  applications: {
    title: "Practical Applications of kcal to cal Conversion",
    items: [
      {
        title: "Bomb Calorimetry to Nutritional Labeling",
        text: "Food chemists burn dehydrated food samples inside bomb calorimeters that record water bath heating in small calories. Technicians convert results to kilocalories for dietary labeling and regulatory documentation."
      },
      {
        title: "Academic Chemistry Thermodynamics",
        text: "Biochemistry and physical chemistry textbooks occasionally express reaction heats in small calories per mole (cal/mol). Researchers convert these values to kcal/mol to align with standard enthalpy tables."
      },
      {
        title: "Metabolic and Respiration Chamber Studies",
        text: "Direct whole-room calorimeters measure small heat dissipations from experimental animals in small calories per minute, which researchers aggregate into daily kilocalories to determine basal metabolic efficiency."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small calories with dietary Calories: Believing that a 200-Calorie snack contains 200 small calories rather than 200,000 small calories leads to a 1,000-fold misconception of physical energy.",
      "Dividing instead of multiplying: When converting kilocalories to small calories, you must multiply by 1,000 because small calories are a smaller unit of measure.",
      "Assuming the calorie is an SI unit: Neither the small calorie nor the kilocalorie is an official SI unit; the Joule (J) is the universal SI unit of energy."
    ]
  },
  faqs: [
    {
      question: "How many small calories are in one kilocalorie?",
      answer: "There are exactly 1,000 small calories (gram calories) in one kilocalorie (1 kcal = 1,000 cal)."
    },
    {
      question: "Is a dietary Calorie a calorie or a kilocalorie?",
      answer: "A dietary food Calorie (capital C) is a kilocalorie. One food Calorie contains 1,000 small laboratory calories."
    },
    {
      question: "What is the formula to convert kilocalories to small calories?",
      answer: "Small calories = kilocalories × 1,000."
    },
    {
      question: "How do you convert 2,000 kcal into small calories?",
      answer: "2,000 × 1,000 = 2,000,000 small calories (2 million calories)."
    },
    {
      question: "Why do we use kilocalories instead of small calories for food?",
      answer: "If food labels used small calories, numbers would be unwieldy: a modest daily diet would read 2,000,000 calories instead of 2,000 Calories (kcal)."
    },
    {
      question: "How many Joules are in 1 kilocalorie?",
      answer: "One kilocalorie equals exactly 4,184 Joules (4.184 kJ) under the thermochemical standard."
    },
    {
      question: "How do you convert small calories back to kilocalories?",
      answer: "Divide the small calorie value by 1,000. For example, 35,000 small calories ÷ 1,000 = 35 kcal."
    },
    {
      question: "What is the abbreviation for kilocalories?",
      answer: "The standard international abbreviation is 'kcal'. In popular food contexts, it is also abbreviated as 'Cal'."
    }
  ],
  relatedList: [
    { label: "Calorie to Kilocalorie", from: "calorie", to: "kilocalorie" },
    { label: "Kilocalorie to Joule", from: "kilocalorie", to: "joule" },
    { label: "Kilocalorie to Kilojoule", from: "kilocalorie", to: "kilojoule" },
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Joule to Kilocalorie", from: "joule", to: "kilocalorie" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "Bureau International des Poids et Mesures (BIPM): The International System of Units (SI Brochure, 9th Edition).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
