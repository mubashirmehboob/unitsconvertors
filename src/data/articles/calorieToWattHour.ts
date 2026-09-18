import { CustomArticleData } from "./types";

export const calorieToWattHour: CustomArticleData = {
  fromUnitId: "calorie",
  toUnitId: "watt-hour",
  seoTitle: "Calorie to Watt Hour Converter (cal to Wh)",
  metaDescription: "Convert small calories to Watt Hours (cal to Wh) with precise calculations. Explore thermal-to-electrical formulas, worked examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/calorie-to-watt-hour",
  h1: "Calorie to Watt Hour Converter",
  introduction: [
    "The small calorie (cal) and the Watt Hour (Wh) bridge the physical boundary between thermal energy and electrical work. While the calorie historically originated in thermodynamics to quantify heat capacities in aqueous chemistry, the Watt Hour measures cumulative electrical power delivered at a rate of one Watt continuously for one hour.",
    "Connecting thermal heat measurements with electrical battery storage and power consumption requires an exact energy conversion. Because one small calorie equals exactly 4.184 Joules and one Watt Hour contains 3,600 Joules, one calorie equals 4.184 / 3,600 Watt Hours, or approximately 0.00116222 Watt Hours.",
    "This guide presents the mathematical relationship connecting calories to Watt Hours, provides step-by-step conversion examples, supplies an extensive technical lookup table, and answers common questions regarding thermoelectric systems."
  ],
  quickAnswer: {
    text: "To convert small calories (cal) to Watt Hours (Wh), multiply the calorie value by 0.00116222 (or multiply by 4.184 and divide by 3,600). For example, 1,000 small calories equal approximately 1.162 Watt Hours.",
    formulaDisplay: "Wh = cal × (4.184 ÷ 3,600) ≈ cal × 0.00116222",
    subtext: "1 small calorie ≈ 0.00116222 Watt Hours; 1 Watt Hour ≈ 860.42 small calories."
  },
  aboutSourceUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The small calorie (symbol: cal), or gram calorie, is defined as the thermal energy required to increase the temperature of one gram of water by one degree Celsius under standard atmospheric pressure. Under the thermochemical scale, one small calorie is defined as exactly 4.184 Joules. It remains a standard unit in chemical calorimetry, reaction thermodynamics, and physical biochemistry."
  },
  aboutTargetUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The Watt Hour (symbol: Wh) is a unit of energy representing one Watt of power expended steadily over a duration of one hour. Because one Watt equals one Joule per second and one hour has 3,600 seconds, one Watt Hour is equivalent to exactly 3,600 Joules (3.6 kJ). Watt Hours are globally utilized to rate portable rechargeable batteries, micro-electronics power budgets, and localized solar generation."
  },
  relationship: "The relationship between thermochemical calories and Watt Hours is derived from their shared SI baseline in Joules: 1 cal = 4.184 J, and 1 Wh = 3,600 J. Dividing 4.184 by 3,600 yields the conversion ratio: 1 cal ≈ 0.001162222 Wh, and 1 Wh ≈ 860.42065 cal.",
  relationshipTitle: "Calorie to Watt Hour Equivalence Values",
  relationshipItems: [
    { label: "1 cal", value: "≈ 0.00116222 Wh (1.16222 mWh)" },
    { label: "100 cal", value: "≈ 0.116222 Wh (116.22 mWh)" },
    { label: "860.42 cal", value: "1.000 Wh (exactly 3,600 J)" },
    { label: "1,000 cal", value: "≈ 1.16222 Wh (1.162 Wh)" },
    { label: "10,000 cal", value: "≈ 11.6222 Wh" }
  ],
  formula: {
    text: "Multiply the energy in small calories by 4.184 to obtain Joules, then divide by 3,600 to find Watt Hours.",
    math: "Wh = (cal * 4.184) / 3600",
    subtext: "Simplified multiplier: Wh = cal × 0.001162222."
  },
  formulaTitle: "Calorie to Watt Hour Conversion Formula",
  practicalTip: {
    title: "Approximating with 860 Calories per Watt Hour",
    text: "To mentally convert calories to Watt Hours in field conditions, divide the calorie number by 860 (or multiply by 1.16 and divide by 1,000). For example, 1,720 calories divided by 860 equals approximately 2 Watt Hours."
  },
  expertNote: {
    title: "Thermoelectric Harvesting Efficiency",
    text: "When converting thermal energy from chemical reactions (measured in calories) to electrical energy in batteries (measured in Watt Hours) using Seebeck thermoelectric generators (TEGs), real-world efficiency rarely exceeds 5% to 8% due to Carnot cycle thermodynamic limits."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Micro-Combustion Heat to Electrical Equivalent",
        subtitle: "Convert 5,000 small calories of reaction heat into Watt Hours.",
        steps: [
          "Identify the calorie input: 5,000 cal.",
          "Convert calories to Joules: 5,000 × 4.184 = 20,920 J.",
          "Convert Joules to Watt Hours: 20,920 ÷ 3,600 = 5.8111 Wh.",
          "Result: 5,000 cal equals approximately 5.811 Watt Hours."
        ]
      },
      {
        title: "Example 2: Laser Pulse Thermal Absorption",
        subtitle: "Convert 850 calories absorbed by a calorimeter plate into Watt Hours.",
        steps: [
          "State the initial energy: 850 cal.",
          "Apply the direct multiplier: 850 × 0.001162222 = 0.98789 Wh.",
          "Result: 850 cal equals approximately 0.988 Watt Hours (987.9 mWh)."
        ]
      },
      {
        title: "Example 3: Chemical Hand Warmer Thermal Output",
        subtitle: "Convert 25,000 small calories of exothermic oxidation heat into Watt Hours.",
        steps: [
          "State the calorie value: 25,000 cal.",
          "Multiply: 25,000 × (4.184 / 3,600) = 29.0556 Wh.",
          "Result: 25,000 calories equals 29.056 Watt Hours."
        ]
      }
    ]
  },
  table: {
    title: "Calorie to Watt Hour Conversion Table",
    headers: ["Calories (cal)", "Watt Hours (Wh)", "Milliwatt Hours (mWh)", "Joules (J)"],
    rows: [
      { fromVal: "10 cal", toVal: "0.0116 Wh", extra: "11.62 mWh", extra2: "41.84 J" },
      { fromVal: "50 cal", toVal: "0.0581 Wh", extra: "58.11 mWh", extra2: "209.2 J" },
      { fromVal: "100 cal", toVal: "0.1162 Wh", extra: "116.22 mWh", extra2: "418.4 J" },
      { fromVal: "250 cal", toVal: "0.2906 Wh", extra: "290.56 mWh", extra2: "1,046 J" },
      { fromVal: "500 cal", toVal: "0.5811 Wh", extra: "581.11 mWh", extra2: "2,092 J" },
      { fromVal: "860.42 cal", toVal: "1.0000 Wh", extra: "1,000.0 mWh", extra2: "3,600 J" },
      { fromVal: "1,000 cal", toVal: "1.1622 Wh", extra: "1,162.2 mWh", extra2: "4,184 J" },
      { fromVal: "2,500 cal", toVal: "2.9056 Wh", extra: "2,905.6 mWh", extra2: "10,460 J" },
      { fromVal: "5,000 cal", toVal: "5.8111 Wh", extra: "5,811.1 mWh", extra2: "20,920 J" },
      { fromVal: "10,000 cal", toVal: "11.6222 Wh", extra: "11,622 mWh", extra2: "41,840 J" },
      { fromVal: "25,000 cal", toVal: "29.0556 Wh", extra: "29,056 mWh", extra2: "104,600 J" },
      { fromVal: "50,000 cal", toVal: "58.1111 Wh", extra: "58,111 mWh", extra2: "209,200 J" },
      { fromVal: "100,000 cal", toVal: "116.222 Wh", extra: "116,222 mWh", extra2: "418,400 J" }
    ]
  },
  applications: {
    title: "Practical Applications of cal to Wh Conversion",
    items: [
      {
        title: "Battery and Energy Storage Sizing",
        text: "Engineers comparing the chemical heat energy released during cell thermal runaway or exothermic degradation convert laboratory calorie numbers into equivalent battery discharge capacity in Watt Hours."
      },
      {
        title: "Thermoelectric Harvester Modeling",
        text: "IoT designers developing self-powered environmental sensors convert thermal ambient heat flux (measured in cal/cm²) into electrical energy stored in supercapacitors (measured in Wh or mWh)."
      },
      {
        title: "Calorimetric Laser Power Calibration",
        text: "Optical metrology labs use liquid water calorimeters to absorb continuous laser beams. Converting the captured heat (in calories) into Watt Hours determines the electrical power efficiency of the laser emitter."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small calories with dietary kilocalories: If your starting value is 2,000 food Calories (kcal), 2,000 kcal equals 2,324.4 Wh (2.324 kWh), not 2.32 Wh.",
      "Inverting the conversion ratio: Dividing calories by 0.00116222 instead of multiplying yields an erroneous answer that is nearly a million times too high.",
      "Neglecting energy dissipation when converting physical heat to electricity: A thermal energy of 100 Wh does not generate 100 Wh of electricity due to unavoidable thermodynamic efficiency losses."
    ]
  },
  faqs: [
    {
      question: "How many Watt Hours are in one small calorie?",
      answer: "One small calorie equals approximately 0.00116222 Watt Hours (1.16222 milliwatt hours)."
    },
    {
      question: "How many calories are in one Watt Hour?",
      answer: "One Watt Hour contains approximately 860.421 small calories (or 0.8604 kilocalories)."
    },
    {
      question: "What is the formula to convert calories to Watt Hours?",
      answer: "Watt Hours = calories × (4.184 ÷ 3,600) = calories × 0.001162222."
    },
    {
      question: "How do you convert 1,000 small calories to Watt Hours?",
      answer: "1,000 × 0.00116222 = 1.1622 Watt Hours."
    },
    {
      question: "How does 1 dietary food Calorie (kcal) compare to Watt Hours?",
      answer: "One dietary food Calorie (1 kcal = 1,000 cal) equals approximately 1.16222 Watt Hours."
    },
    {
      question: "Why do we divide by 3,600 when converting to Watt Hours?",
      answer: "Because one hour contains 3,600 seconds, one Watt Hour is equal to 3,600 Joules (Watt-seconds). Converting from Joules to Watt Hours requires dividing by 3,600."
    },
    {
      question: "Is Watt Hour an SI unit?",
      answer: "The Watt Hour is not an official base or derived SI unit (the Joule is the SI unit of energy), but it is accepted for use with SI units due to widespread utility in electrical power metering."
    },
    {
      question: "How many Watt Hours are in 50,000 calories?",
      answer: "50,000 × 0.00116222 = 58.111 Watt Hours."
    }
  ],
  relatedList: [
    { label: "Calorie to Kilowatt Hour", from: "calorie", to: "kilowatt-hour" },
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Joule to Watt Hour", from: "joule", to: "watt-hour" },
    { label: "Calorie to Kilocalorie", from: "calorie", to: "kilocalorie" },
    { label: "Kilocalorie to Kilojoule", from: "kilocalorie", to: "kilojoule" }
  ],
  references: [
    "International Electrotechnical Commission (IEC) 60050: International Electrotechnical Vocabulary — Energy and Power.",
    "National Institute of Standards and Technology (NIST) Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
