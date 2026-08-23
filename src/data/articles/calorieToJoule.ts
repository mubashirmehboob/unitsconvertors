import { CustomArticleData } from "./types";

export const calorieToJoule: CustomArticleData = {
  fromUnitId: "calorie",
  toUnitId: "joule",
  seoTitle: "Calorie to Joule Converter (cal to J)",
  metaDescription: "Convert small calories to Joules (cal to J) with exact thermochemical precision. Step-by-step calculations, formulas, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/calorie-to-joule",
  h1: "Calorie to Joule Converter",
  introduction: [
    "The small calorie (cal) and the Joule (J) are fundamental units of energy, heat, and mechanical work. While the calorie was historically developed to quantify the heat capacity of water in chemistry and thermodynamics, the Joule is the universally recognized SI base-derived unit across all modern scientific disciplines.",
    "Converting calories to Joules connects legacy chemical data with the International System of Units. Under the internationally standardized thermochemical definition, one gram calorie equals exactly 4.184 Joules. Therefore, converting calories to Joules is performed by multiplying the calorie value by 4.184.",
    "This comprehensive guide details the conversion formula, provides step-by-step manual calculation examples, presents a practical chemistry and physics reference table, explores real-world applications, and answers frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert small calories (gram calories) to Joules, multiply the calorie value by 4.184. For example, 100 calories equals exactly 418.4 Joules, and 500 calories equals 2,092 Joules.",
    formulaDisplay: "J = cal × 4.184",
    subtext: "1 small calorie is equal to exactly 4.184 Joules (thermochemical standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The calorie (symbol: cal), often called the small calorie or gram calorie, is defined as the thermal energy required to raise the temperature of one gram of liquid water by one degree Celsius under standard atmospheric pressure. Under the modern thermochemical convention, 1 cal is defined as exactly 4.184 Joules. Note that 1 small calorie (cal) equals 0.001 dietary kilocalories (kcal)."
  },
  aboutTargetUnit: {
    title: "Understanding the Joule (J)",
    text: "The Joule (symbol: J) is the derived SI unit of energy, work, and heat, named after English physicist James Prescott Joule. In classical mechanics, one Joule is the work done by a force of one Newton acting over a distance of one meter (1 N·m = 1 kg·m²/s²), or the electrical energy dissipated when one ampere of current passes through a resistance of one ohm for one second (1 W·s)."
  },
  relationship: "The relationship between thermochemical calories and Joules is fixed by international standard: 1 cal = 4.184 J exactly. Multiplying the calorie count by 4.184 gives its precise energetic equivalent in Joules.",
  relationshipTitle: "Calorie to Joule Equivalence",
  relationshipItems: [
    { label: "1 cal", value: "4.184 J (energy to heat 1g water by 1°C)" },
    { label: "10 cal", value: "41.84 J" },
    { label: "100 cal", value: "418.4 J" },
    { label: "1,000 cal", value: "4,184 J (1 kilocalorie / 1 food Calorie)" },
    { label: "10,000 cal", value: "41,840 J (41.84 kJ)" }
  ],
  formula: {
    text: "Multiply the energy in small calories by 4.184 to find the equivalent in Joules.",
    math: "J = cal * 4.184",
    subtext: "To convert Joules back to calories, divide by 4.184."
  },
  formulaTitle: "Calorie to Joule Conversion Formula",
  practicalTip: {
    title: "Mental Calculation Shortcut",
    text: "To estimate Joules quickly from calories, multiply the calorie number by 4 and add about 4.5% (e.g., 50 cal × 4 = 200 + 9 = 209 J; exact: 209.2 J)."
  },
  expertNote: {
    title: "Thermochemical vs International Table Calorie",
    text: "The Thermochemical calorie (cal_th) is defined as exactly 4.184 J, while the International Steam Table calorie (cal_IT) is defined as exactly 4.1868 J. The difference is less than 0.07%, but the 4.184 J standard is dominant in chemistry and biochemistry."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Specific Heat Water Experiment",
        subtitle: "Convert 250 small calories of water heating into Joules.",
        steps: [
          "Identify the calorie input: 250 cal.",
          "Apply the formula: J = 250 × 4.184.",
          "Perform the calculation: 250 × 4.184 = 1,046 J.",
          "Result: 250 cal equals exactly 1,046 Joules (1.046 kJ)."
        ]
      },
      {
        title: "Example 2: Biochemical Enthalpy Yield",
        subtitle: "Convert a biochemical reaction heat of 1,200 calories into Joules.",
        steps: [
          "Identify value in cal: 1,200 cal.",
          "Multiply by 4.184: 1,200 × 4.184 = 5,020.8 J.",
          "Result: 1,200 cal equals 5,020.8 Joules."
        ]
      },
      {
        title: "Example 3: Micro-Calorimetry Sensor Reading",
        subtitle: "Convert 15 calories into Joules.",
        steps: [
          "Identify input: 15 cal.",
          "Multiply: 15 × 4.184 = 62.76 J.",
          "Result: 15 cal equals 62.76 Joules."
        ]
      }
    ]
  },
  table: {
    title: "Calorie to Joule Conversion Table",
    headers: ["Calories (cal)", "Joules (J)", "Kilojoules (kJ)", "Laboratory / Physical Context"],
    rows: [
      { fromVal: "1 cal", toVal: "4.184 J", extra: "0.004184 kJ", extra2: "Base calorie: heats 1g water 1°C" },
      { fromVal: "5 cal", toVal: "20.92 J", extra: "0.02092 kJ", extra2: "Small chemical solution mixing" },
      { fromVal: "10 cal", toVal: "41.84 J", extra: "0.04184 kJ", extra2: "Heat to warm 10g water 1°C" },
      { fromVal: "25 cal", toVal: "104.60 J", extra: "0.1046 kJ", extra2: "Mechanical work lifting 10kg by 1m" },
      { fromVal: "50 cal", toVal: "209.20 J", extra: "0.2092 kJ", extra2: "Small exothermic neutralization" },
      { fromVal: "100 cal", toVal: "418.40 J", extra: "0.4184 kJ", extra2: "Heats 100g water by 1°C" },
      { fromVal: "250 cal", toVal: "1,046.00 J", extra: "1.046 kJ", extra2: "Approx. 1 kilojoule mark" },
      { fromVal: "500 cal", toVal: "2,092.00 J", extra: "2.092 kJ", extra2: "Combustion of 0.1g organic sample" },
      { fromVal: "1,000 cal", toVal: "4,184.00 J", extra: "4.184 kJ", extra2: "1 food Calorie (1 kcal)" },
      { fromVal: "2,500 cal", toVal: "10,460.00 J", extra: "10.46 kJ", extra2: "10.46 kilojoules" },
      { fromVal: "5,000 cal", toVal: "20,920.00 J", extra: "20.92 kJ", extra2: "20.92 kilojoules" },
      { fromVal: "10,000 cal", toVal: "41,840.00 J", extra: "41.84 kJ", extra2: "41.84 kilojoules" }
    ]
  },
  applications: {
    title: "Practical Applications of cal to J Conversion",
    items: [
      {
        title: "Physical Chemistry and Solution Calorimetry",
        text: "Chemists analyzing specific heat capacities, heats of solution, and latent heats convert legacy data recorded in calories into standard SI Joules for publication."
      },
      {
        title: "Biophysics and Enzyme Kinetics",
        text: "Researchers studying molecular motor conformational changes and ATP binding translate micro-calorimetry data into Joules for thermodynamic modeling."
      },
      {
        title: "Materials Testing and Thermal Conductivity",
        text: "Engineers measuring heat transfer rates across polymer coatings convert thermal resistance values from cal/(cm·s·°C) to W/(m·K)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 4.184 instead of multiplying: Because Joules are smaller units than calories, the numeric value in Joules is always 4.184 times larger.",
      "Confusing small calories (cal) with dietary kilocalories (kcal / Cal): 1 food Calorie equals 4,184 Joules, not 4.184 Joules.",
      "Overlooking differences between thermochemical (4.184 J) and International Table (4.1868 J) standards when reproducing exact historical physical data."
    ]
  },
  faqs: [
    {
      question: "How many Joules are in 1 small calorie?",
      answer: "There are exactly 4.184 Joules in 1 thermochemical small calorie."
    },
    {
      question: "What is the formula to convert calories to Joules?",
      answer: "The formula is: Joules = calories × 4.184."
    },
    {
      question: "How many Joules are in 1 food Calorie (kcal)?",
      answer: "One dietary food Calorie (1 kcal) contains 1,000 small calories, which equals exactly 4,184 Joules (or 4.184 kilojoules)."
    },
    {
      question: "How do I convert 500 calories to Joules?",
      answer: "500 × 4.184 = 2,092 Joules (or 2.092 kJ)."
    },
    {
      question: "Why is 1 calorie equal to 4.184 Joules?",
      answer: "The thermochemical calorie is defined based on the mechanical equivalent of heat, which was experimentally measured and subsequently standardized as exactly 4.184 Joules per gram of water heated by 1°C."
    },
    {
      question: "How do I convert Joules back to calories?",
      answer: "Divide the Joule value by 4.184 (or multiply by approximately 0.239006)."
    },
    {
      question: "Is the calorie an official SI unit?",
      answer: "No. The Joule is the sole official SI derived unit for all forms of energy, work, and heat. The calorie is an older metric unit retained for specific chemistry and dietary applications."
    },
    {
      question: "How many Joules are in 100 calories?",
      answer: "100 × 4.184 = 418.4 Joules."
    }
  ],
  relatedList: [
    { label: "Joule to Calorie", from: "joule", to: "calorie" },
    { label: "Calorie to Kilojoule", from: "calorie", to: "kilojoule" },
    { label: "Kilojoule to Calorie", from: "kilojoule", to: "calorie" },
    { label: "Joule to Kilocalorie", from: "joule", to: "kilocalorie" },
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
