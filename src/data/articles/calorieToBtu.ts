import { CustomArticleData } from "./types";

export const calorieToBtu: CustomArticleData = {
  fromUnitId: "calorie",
  toUnitId: "btu",
  seoTitle: "Calorie to BTU Converter (cal to BTU)",
  metaDescription: "Convert small calories to British Thermal Units (cal to BTU). Accurate thermodynamic formulas, manual calculation examples, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/calorie-to-btu",
  h1: "Calorie to BTU Converter",
  introduction: [
    "The small calorie (cal) and the British Thermal Unit (BTU) are the historical metric and imperial benchmarks for quantifying heat. While the calorie is rooted in metric laboratory chemistry as the energy required to warm one gram of water by one degree Celsius, the BTU represents the imperial heating standard defined as the energy required to warm one pound of water by one degree Fahrenheit.",
    "Converting calories to BTUs is essential when comparing European laboratory calorimetric measurements or fuel specifications with North American HVAC equipment ratings, combustion burner specifications, and natural gas heat outputs. Standardizing through the International System of Units reveals that one small calorie equals approximately 0.00396567 BTU, and one BTU contains roughly 252.164 small calories.",
    "This guide provides the exact conversion formula, walks through step-by-step calculation examples, features a practical conversion table, highlights common conversion errors, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert small calories (cal) to British Thermal Units (BTU), multiply the calorie value by 0.00396567 (or divide by 252.164). For example, 1,000 small calories equal approximately 3.966 BTUs.",
    formulaDisplay: "BTU = cal × (4.184 ÷ 1,055.05585) ≈ cal × 0.00396567",
    subtext: "1 small calorie ≈ 0.00396567 BTU; 1 BTU ≈ 252.164 small calories."
  },
  aboutSourceUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The small calorie (symbol: cal), or gram calorie, is the metric unit of heat defined as the thermal energy required to raise the temperature of one gram of liquid water by 1°C under standard atmospheric conditions. Under the international thermochemical convention, one small calorie is defined as exactly 4.184 Joules. It remains widespread in physical chemistry, chemical thermodynamics, and laboratory bomb calorimetry."
  },
  aboutTargetUnit: {
    title: "Understanding the British Thermal Unit (BTU)",
    text: "The British Thermal Unit (symbol: BTU) is an imperial unit of heat defined as the quantity of thermal energy needed to raise the temperature of one avoirdupois pound (0.453592 kg) of liquid water by 1°F under standard atmospheric pressure. Under the ISO standard and International Steam Table definition, one BTU equals approximately 1,055.056 Joules. The BTU is widely used throughout North America in furnace heating capacities, air conditioner cooling ratings, and fuel trade."
  },
  relationship: "Because 1 cal = 4.184 J and 1 BTU ≈ 1,055.05585 J (ISO), dividing 4.184 by 1,055.05585 gives 1 cal ≈ 0.00396567 BTU. In reverse, dividing 1,055.05585 by 4.184 demonstrates that 1 BTU is equal to approximately 252.164 small calories.",
  relationshipTitle: "Calorie to BTU Equivalence Benchmarks",
  relationshipItems: [
    { label: "1 cal", value: "≈ 0.00396567 BTU" },
    { label: "100 cal", value: "≈ 0.396567 BTU" },
    { label: "252.16 cal", value: "1.000 BTU (approx. 1,055 J)" },
    { label: "1,000 cal (1 kcal)", value: "≈ 3.96567 BTU" },
    { label: "10,000 cal", value: "≈ 39.6567 BTU" }
  ],
  formula: {
    text: "Multiply the energy in small calories by 4.184 to convert to Joules, then divide by 1,055.05585 to obtain British Thermal Units.",
    math: "BTU = (cal * 4.184) / 1055.05585",
    subtext: "Direct multiplication factor: BTU = cal × 0.003965667."
  },
  formulaTitle: "Calorie to BTU Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb: 252 Calories per BTU",
    text: "HVAC and mechanical engineers frequently use the handy benchmark that 1 BTU is roughly 252 small calories (or 0.252 kcal). To convert calories to BTUs on the fly, simply divide the calorie count by 252."
  },
  expertNote: {
    title: "Different BTU Definitions",
    text: "Like the calorie, multiple definitions of the BTU exist: the International Steam Table BTU (1,055.056 J), the thermochemical BTU (1,054.35 J), and the 60°F BTU (1,054.68 J). While modern industrial standards default to the ISO/IT value (1,055.056 J), the variations differ by less than 0.1%."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Chemical Heat of Combustion",
        subtitle: "Convert 50,000 small calories of reaction heat into BTUs.",
        steps: [
          "State the small calorie value: 50,000 cal.",
          "Apply the formula: BTU = 50,000 × (4.184 ÷ 1,055.05585).",
          "Compute the result: 50,000 × 0.00396567 = 198.283 BTU.",
          "Conclusion: 50,000 calories equals approximately 198.28 BTUs."
        ]
      },
      {
        title: "Example 2: Lab Water Bath Heating",
        subtitle: "Convert 252,164 small calories into BTUs.",
        steps: [
          "State the input: 252,164 cal.",
          "Divide by the equivalence factor 252.164: 252,164 ÷ 252.164 = 1,000 BTU.",
          "Conclusion: 252,164 small calories (252.164 kcal) equals exactly 1,000 BTUs."
        ]
      },
      {
        title: "Example 3: Dietary Energy in Heating Terms",
        subtitle: "Convert a snack containing 250,000 small calories (250 kcal) to BTUs.",
        steps: [
          "Identify calorie input: 250,000 cal.",
          "Multiply: 250,000 × 0.00396567 = 991.42 BTU.",
          "Conclusion: 250 kcal is equivalent to approximately 991.4 BTUs of thermal energy."
        ]
      }
    ]
  },
  table: {
    title: "Calorie to BTU Conversion Table",
    headers: ["Calories (cal)", "BTUs (BTU)", "Joules (J)", "Heating / Energy Context"],
    rows: [
      { fromVal: "100 cal", toVal: "0.3966 BTU", extra: "418.4 J", extra2: "Heat to warm 100g water by 1°C" },
      { fromVal: "252.16 cal", toVal: "1.0000 BTU", extra: "1,055.1 J", extra2: "Energy to heat 1 lb water by 1°F" },
      { fromVal: "500 cal", toVal: "1.9828 BTU", extra: "2,092.0 J", extra2: "Heat released by small wax candle in 30s" },
      { fromVal: "1,000 cal", toVal: "3.9657 BTU", extra: "4,184.0 J", extra2: "1 food Calorie (1 kcal)" },
      { fromVal: "2,500 cal", toVal: "9.9142 BTU", extra: "10,460 J", extra2: "Heat to boil 15 ml of cold water" },
      { fromVal: "5,000 cal", toVal: "19.828 BTU", extra: "20,920 J", extra2: "Small solvent evaporation heat" },
      { fromVal: "10,000 cal", toVal: "39.657 BTU", extra: "41,840 J", extra2: "10 kcal thermal yield" },
      { fromVal: "25,000 cal", toVal: "99.142 BTU", extra: "104,600 J", extra2: "Approx. 100 BTU benchmark" },
      { fromVal: "50,000 cal", toVal: "198.28 BTU", extra: "209,200 J", extra2: "Combustion heat of 4.5g butane" },
      { fromVal: "100,000 cal", toVal: "396.57 BTU", extra: "418,400 J", extra2: "Energy in a slice of white bread" },
      { fromVal: "250,000 cal", toVal: "991.42 BTU", extra: "1,046,000 J", extra2: "Approx. 1,000 BTU (1 MBTU / 1 kBTU)" },
      { fromVal: "1,000,000 cal", toVal: "3,965.7 BTU", extra: "4,184,000 J", extra2: "1 Megacalorie (1,000 kcal)" },
      { fromVal: "2,521,644 cal", toVal: "10,000 BTU", extra: "10,550,559 J", extra2: "10,000 BTU room air conditioner load" }
    ]
  },
  applications: {
    title: "Practical Applications of cal to BTU Conversion",
    items: [
      {
        title: "HVAC Thermal Sizing and Burner Selection",
        text: "Mechanical contractors working with European boiler specifications (often stated in kcal/h or cal/s) convert these measurements to BTU/h to match North American ductwork, radiators, and natural gas orifices."
      },
      {
        title: "Fuel Calorimetry and Energy Commodities",
        text: "Petroleum and coal testing laboratories determine gross calorific values in small calories per gram (cal/g). Marketers convert these figures into BTU per pound (BTU/lb) for trade across Anglo-American energy markets."
      },
      {
        title: "Food Processing Thermal Pasteurization",
        text: "Commercial food equipment engineers convert dietary food energy and retort steam heat values from kilocalories into BTUs to size commercial steam boilers and heat exchangers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small calories with food Calories: 1 food Calorie (kcal) equals 3.966 BTUs, whereas 1 small calorie is only 0.003966 BTU—a 1,000-fold discrepancy.",
      "Conflating energy (BTU) with power (BTU/hour): Equipment labels that state '12,000 BTU' usually mean a cooling rate of 12,000 BTU per hour (1 ton of refrigeration).",
      "Using the wrong BTU definition: The International Table BTU (1,055.056 J) differs slightly from the thermochemical BTU (1,054.35 J), so precision contracts should specify which standard applies."
    ]
  },
  faqs: [
    {
      question: "How many BTUs are in one small calorie?",
      answer: "One small calorie equals approximately 0.00396567 British Thermal Units (BTU)."
    },
    {
      question: "How many calories are in one BTU?",
      answer: "One BTU is equal to approximately 252.164 small calories (or 0.252164 kilocalories)."
    },
    {
      question: "What is the formula to convert calories to BTUs?",
      answer: "BTU = calories × (4.184 ÷ 1,055.05585) ≈ calories × 0.00396567."
    },
    {
      question: "How many BTUs are in 1 food Calorie (kcal)?",
      answer: "One food Calorie (1 kcal = 1,000 small calories) equals approximately 3.96567 BTUs."
    },
    {
      question: "How do you convert 100,000 calories to BTUs?",
      answer: "100,000 × 0.00396567 = 396.567 BTUs."
    },
    {
      question: "Why are there roughly 252 calories in a BTU?",
      answer: "A calorie heats 1 gram of water by 1°C, while a BTU heats 1 pound (453.592 grams) of water by 1°F (5/9 of 1°C). Multiplying 453.592 by 5/9 gives 251.996, which rounds to approximately 252 calories."
    },
    {
      question: "Is BTU an SI unit?",
      answer: "No. The BTU is an imperial unit. The official SI unit of energy and heat is the Joule (J)."
    },
    {
      question: "How many BTUs are in 1,000,000 calories?",
      answer: "1,000,000 calories (1 Mcal or 1,000 kcal) equals approximately 3,965.67 BTUs."
    }
  ],
  relatedList: [
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Calorie to Kilocalorie", from: "calorie", to: "kilocalorie" },
    { label: "Calorie to Kilowatt Hour", from: "calorie", to: "kilowatt-hour" },
    { label: "Joule to BTU", from: "joule", to: "btu" },
    { label: "Kilojoule to BTU", from: "kilojoule", to: "btu" }
  ],
  references: [
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics.",
    "ASHRAE Handbook — Fundamentals (SI & I-P Editions).",
    "National Institute of Standards and Technology (NIST) Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
