import { CustomArticleData } from "./types";

export const jouleToKilocalorie: CustomArticleData = {
  fromUnitId: "joule",
  toUnitId: "kilocalorie",
  seoTitle: "Joule to Kilocalorie Converter (J to kcal)",
  metaDescription: "Convert Joules to kilocalories (J to kcal / food Calories) with exact thermochemical precision. Learn the 4,184 J factor, formulas, tables, and FAQs.",
  h1: "Joule to Kilocalorie Converter",
  introduction: [
    "The Joule (J) and the kilocalorie (kcal)—often capitalized as the 'Calorie' on nutrition facts labels—are key units for quantifying heat energy, metabolic work, and food energy content. While the Joule is the official SI unit for all energy forms, the kilocalorie remains the most widely recognized unit in dietary science, exercise physiology, and clinical nutrition.",
    "Converting Joules to kilocalories requires applying the standard thermochemical conversion factor: one kilocalorie is equal to exactly 4,184 Joules (or 4.184 kilojoules). Therefore, to convert Joules to kilocalories, you divide the value in Joules by 4,184.",
    "This reference guide breaks down the definitions, provides the step-by-step conversion formula, presents practical nutrition and exercise examples, offers a clear conversion table, and addresses common measurement questions."
  ],
  quickAnswer: {
    text: "To convert Joules to kilocalories (kcal or food Calories), divide the Joule value by 4,184. For example, 8,368 Joules equals exactly 2 kcal, and 418,400 Joules equals exactly 100 kcal.",
    formulaDisplay: "kcal = J ÷ 4,184",
    subtext: "One Joule is equal to approximately 0.0002390057 kilocalories."
  },
  aboutSourceUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the base SI derived unit of energy, work, and quantity of heat. It is defined mechanically as one Newton applied over a distance of one meter (1 N·m). In electrical terms, one Joule is the work performed by one Watt of power over one second (1 W·s). Because one Joule is relatively small, metabolic calculations in human bodies often involve hundreds of thousands of Joules."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal) is defined as 1,000 small gram calories. It represents the heat energy needed to raise the temperature of 1 kilogram (1 liter) of water by 1°C at standard atmospheric pressure. In consumer food labeling, 1 kilocalorie is universally printed as 1 'Calorie' (with a capital C). One thermochemical kilocalorie is internationally defined as exactly 4,184 Joules."
  },
  relationship: "The relationship between Joules and kilocalories is fixed by thermochemical definition: 1 kcal = 4,184 J (or 4.184 kJ). Conversely, 1 J = 1 / 4,184 kcal ≈ 0.0002390057 kcal.",
  relationshipTitle: "Joule vs Kilocalorie Scale Comparison",
  relationshipItems: [
    { label: "1 J", value: "0.000239 kcal (Minimal mechanical energy)" },
    { label: "4,184 J", value: "1 kcal (1 Dietary Calorie / heat 1 kg water by 1°C)" },
    { label: "8,368 J", value: "2 kcal (Energy in ~0.5 gram of sugar)" },
    { label: "418,400 J", value: "100 kcal (Energy burned during a 1-mile walk)" },
    { label: "8,368,000 J", value: "2,000 kcal (Standard recommended daily adult intake)" }
  ],
  formula: {
    text: "Divide the energy in Joules by 4,184 to calculate the equivalent in kilocalories.",
    math: "kcal = J / 4184",
    subtext: "To convert kilocalories back to Joules, multiply the kcal value by 4,184."
  },
  formulaTitle: "Joule to Kilocalorie Formula",
  practicalTip: {
    title: "Kilojoule Shortcut",
    text: "If your energy is given in kilojoules (kJ), simply divide by 4.184 to get kilocalories (e.g., 83.68 kJ ÷ 4.184 = 20 kcal)."
  },
  expertNote: {
    title: "Food Labeling Standards",
    text: "The US FDA and European EFSA mandate that Atwater factors (4 kcal/g protein, 4 kcal/g carbohydrate, 9 kcal/g fat) be calculated using 4,184 Joules per kcal for international compliance."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Fitness Tracker Energy Output",
        subtitle: "Convert a workout energy expenditure of 1,046,000 Joules into kilocalories.",
        steps: [
          "Identify the energy in Joules: 1,046,000 J.",
          "Apply the formula: kcal = 1,046,000 ÷ 4,184.",
          "Calculate: 1,046,000 ÷ 4,184 = 250.",
          "Result: 1,046,000 Joules equals exactly 250 kcal (Calories)."
        ]
      },
      {
        title: "Example 2: Snack Bar Energy Value",
        subtitle: "Convert 627,600 Joules of food energy into dietary kilocalories.",
        steps: [
          "Identify the energy: 627,600 J.",
          "Divide by 4,184: 627,600 ÷ 4,184 = 150.",
          "Result: 627,600 J equals 150 kcal."
        ]
      },
      {
        title: "Example 3: Metabolic Rate Calculation",
        subtitle: "Convert a resting energy output of 20,920 Joules into kilocalories.",
        steps: [
          "Identify the energy: 20,920 J.",
          "Divide by 4,184: 20,920 ÷ 4,184 = 5.",
          "Result: 20,920 J equals 5 kcal."
        ]
      }
    ]
  },
  table: {
    title: "Joule to Kilocalorie Conversion Table",
    headers: ["Joules (J)", "Kilocalories (kcal / Cal)", "Nutritional / Physical Context"],
    rows: [
      { fromVal: "1 J", toVal: "0.000239 kcal", extra: "Lifting an apple by 1 meter" },
      { fromVal: "1,000 J", toVal: "0.239 kcal", extra: "1 Kilojoule (kJ)" },
      { fromVal: "4,184 J", toVal: "1.000 kcal", extra: "1 food Calorie (energy to heat 1 kg water 1°C)" },
      { fromVal: "10,000 J", toVal: "2.390 kcal", extra: "2.39 Calories" },
      { fromVal: "41,840 J", toVal: "10.00 kcal", extra: "10 food Calories" },
      { fromVal: "100,000 J", toVal: "23.90 kcal", extra: "Energy in 1 sugar cube (~6g)" },
      { fromVal: "209,200 J", toVal: "50.00 kcal", extra: "Energy in a small apple" },
      { fromVal: "418,400 J", toVal: "100.0 kcal", extra: "Energy in a medium banana" },
      { fromVal: "1,000,000 J", toVal: "239.0 kcal", extra: "1 Megajoule (~energy in 1 slice of pizza)" },
      { fromVal: "2,092,000 J", toVal: "500.0 kcal", extra: "Caloric content of a large meal" },
      { fromVal: "8,368,000 J", toVal: "2,000 kcal", extra: "Standard daily adult energy requirement" }
    ]
  },
  applications: {
    title: "Applications of J to kcal Conversion",
    items: [
      {
        title: "Dietetics & Clinical Nutrition",
        text: "Dietitians calculate total daily energy expenditure (TDEE) and basal metabolic rate (BMR) from indirect calorimetry equipment outputting Joules, converting to kcal for meal plan creation."
      },
      {
        title: "Sports Physiology & Fitness Hardware",
        text: "Treadmills, rowing machines, and stationary bikes compute mechanical work in Joules or Watt-seconds before displaying estimated calorie burn to athletes."
      },
      {
        title: "Food Manufacturing & International Export",
        text: "Food producers exporting goods between the USA (kcal) and the EU/Australia (kJ) rely on exact 4,184 J conversions to generate dual nutrition tables."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small calories (cal) with kilocalories (kcal): Dividing by 4.184 gives small calories; dividing by 4,184 gives kilocalories.",
      "Misunderstanding dietary 'Calories': Remember that 'Calorie' with a capital C on food labels is identical to 1 kilocalorie (kcal).",
      "Confusing Joules with kilojoules: Make sure your starting value is in Joules (J). If starting in kilojoules (kJ), divide by 4.184 rather than 4,184."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 kilocalorie?",
      answer: "There are exactly 4,184 Joules (or 4.184 kilojoules) in 1 thermochemical kilocalorie."
    },
    {
      question: "What is the formula to convert Joules to kilocalories?",
      answer: "The formula is: kcal = J ÷ 4,184."
    },
    {
      question: "Is 1 kcal the same as 1 food Calorie?",
      answer: "Yes, exactly. 1 kilocalorie (kcal) equals 1 dietary Calorie (capital C)."
    },
    {
      question: "How many kilocalories are in 1,000 Joules?",
      answer: "1,000 Joules equals approximately 0.239 kcal (1,000 ÷ 4,184)."
    },
    {
      question: "How do I convert kilocalories back to Joules?",
      answer: "To convert kilocalories to Joules, multiply the kcal value by 4,184 (e.g., 200 kcal × 4,184 = 836,800 J)."
    },
    {
      question: "Why does 1 kcal equal 4,184 Joules?",
      answer: "1 kcal is the energy required to raise 1 kg of water by 1°C. Water's specific heat capacity is 4.184 Joules per gram per °C; multiplying by 1,000 grams yields 4,184 Joules."
    }
  ],
  relatedList: [
    { label: "Joule to Calorie", from: "joule", to: "calorie" },
    { label: "Joule to Kilojoule", from: "joule", to: "kilojoule" },
    { label: "Joule to Kilowatt Hour", from: "joule", to: "kilowatt-hour" },
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" }
  ],
  references: [
    "U.S. Food and Drug Administration (FDA) - Code of Federal Regulations Title 21: Food Labeling.",
    "BIPM SI Brochure: Units for Quantities of Heat and Energy.",
    "FAO/WHO Human Energy Requirements Technical Report Series."
  ]
};
