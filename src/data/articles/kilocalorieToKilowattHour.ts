import { CustomArticleData } from "./types";

export const kilocalorieToKilowattHour: CustomArticleData = {
  fromUnitId: "kilocalorie",
  toUnitId: "kilowatt-hour",
  seoTitle: "Kilocalorie to Kilowatt Hour Converter (kcal to kWh)",
  metaDescription: "Convert kilocalories to kilowatt hours (kcal to kWh) accurately. Discover exact formulas, worked calculation examples, lookup tables, and engineering guides.",
  canonicalUrl: "https://unitsconvertors.com/kilocalorie-to-kilowatt-hour",
  h1: "Kilocalorie to Kilowatt Hour Converter",
  introduction: [
    "The kilocalorie (kcal) and the kilowatt hour (kWh) serve as benchmark energy metrics across distinct engineering and scientific disciplines. While nutritional science and heating industries measure chemical thermal energy in kilocalories, power grids, utilities, and commercial equipment specify electrical work in kilowatt hours.",
    "Evaluating energy equivalence between combustion or dietary intake and electrical utility consumption requires converting between these systems. Because one thermochemical kilocalorie contains 4,184 Joules and one kilowatt hour equals 3,600,000 Joules, one kilocalorie equals exactly 4,184 / 3,600,000 kWh, or approximately 0.001162222 kilowatt hours.",
    "This guide provides the mathematical formula, detailed step-by-step calculation examples, an expansive conversion table, and answers to the most frequently asked questions regarding energy planning."
  ],
  quickAnswer: {
    text: "To convert kilocalories (kcal) to kilowatt hours (kWh), multiply the kilocalorie value by 0.001162222 (or divide by 860.421). For example, 2,000 kcal equals approximately 2.324 kWh.",
    formulaDisplay: "kWh = kcal × (4,184 ÷ 3,600,000) ≈ kcal × 0.001162222",
    subtext: "1 kilocalorie ≈ 0.001162222 kWh; 1 kilowatt hour ≈ 860.421 kilocalories."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilocalorie (kcal)",
    text: "The kilocalorie (symbol: kcal), also referred to in everyday language as a food Calorie (with an uppercase C), is defined as the thermal energy required to raise the temperature of one kilogram of water by one degree Celsius under standard atmospheric pressure. Under the thermochemical scale standardized by NIST, 1 kcal equals 4,184 Joules (4.184 kJ). It is universally applied across dietary metabolism, boiler heat output, and chemical fuels."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt Hour (kWh)",
    text: "The kilowatt hour (symbol: kWh) is a non-SI unit of energy accepted for use with the International System of Units. It represents one kilowatt (1,000 Watts) of continuous electrical power delivered for one full hour. Since 1 kW equals 1,000 Joules per second and one hour equals 3,600 seconds, one kilowatt hour contains exactly 3.6 megajoules (3,600,000 Joules). It serves as the worldwide billing standard for electric utilities."
  },
  relationship: "Both units share a direct baseline in SI Joules: 1 kcal equals 4,184 J, and 1 kWh equals 3,600,000 J. Dividing 4,184 by 3,600,000 gives the conversion ratio: 1 kcal ≈ 0.001162222 kWh, and 1 kWh ≈ 860.42065 kcal.",
  relationshipTitle: "Kilocalorie to Kilowatt Hour Equivalence Values",
  relationshipItems: [
    { label: "1 kcal", value: "≈ 0.00116222 kWh" },
    { label: "100 kcal", value: "≈ 0.116222 kWh" },
    { label: "860.42 kcal", value: "1.000000 kWh (exactly 3.6 MJ)" },
    { label: "1,000 kcal", value: "≈ 1.162222 kWh" },
    { label: "2,500 kcal", value: "≈ 2.905556 kWh" },
    { label: "10,000 kcal", value: "≈ 11.62222 kWh" }
  ],
  formula: {
    text: "Multiply the energy in kilocalories by 4,184 to convert to Joules, then divide by 3,600,000 to obtain kilowatt hours.",
    math: "kWh = (kcal * 4184) / 3600000",
    subtext: "Simplified multiplier: kWh = kcal × 0.001162222."
  },
  formulaTitle: "Kilocalorie to Kilowatt Hour Conversion Formula",
  practicalTip: {
    title: "Quick Mental Division Method",
    text: "To approximate kWh from kilocalories without a calculator, divide the kcal number by 860. For example, 1,720 kcal divided by 860 equals approximately 2 kWh."
  },
  expertNote: {
    title: "Grid Heating vs. Thermal Equivalent",
    text: "While 860.42 kcal equals 1 kWh of electricity in pure physical energy, heating a building with an electric resistance heater consumes exactly 1 kWh of electricity to deliver 860.42 kcal of heat. In contrast, an air-source heat pump with a Coefficient of Performance (COP) of 3.5 requires only 0.286 kWh of electricity to deliver that same 860.42 kcal."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Daily Nutritional Energy to Electric Grid Units",
        subtitle: "Convert an adult daily diet of 2,400 kcal into equivalent kilowatt hours.",
        steps: [
          "State the starting energy: 2,400 kcal.",
          "Multiply by the conversion factor: 2,400 × 0.001162222 = 2.78933 kWh.",
          "Round to sensible precision: 2.79 kWh.",
          "Result: 2,400 kcal of food energy contains 2.79 kWh of potential chemical energy."
        ]
      },
      {
        title: "Example 2: Natural Gas Water Heater Daily Heat Release",
        subtitle: "Convert 35,000 kcal of combustion heat into kilowatt hours.",
        steps: [
          "State the heat output: 35,000 kcal.",
          "Convert to Joules: 35,000 × 4,184 = 146,440,000 J.",
          "Convert Joules to kWh: 146,440,000 ÷ 3,600,000 = 40.6778 kWh.",
          "Result: 35,000 kcal equals approximately 40.68 kWh."
        ]
      },
      {
        title: "Example 3: High-Intensity Workout Energy Output",
        subtitle: "Convert 650 kcal burned during a run into kilowatt hours.",
        steps: [
          "State the metabolic energy: 650 kcal.",
          "Apply the direct multiplier: 650 × 0.001162222 = 0.75544 kWh.",
          "Result: 650 kcal equals approximately 0.755 kWh."
        ]
      }
    ]
  },
  table: {
    title: "Kilocalorie to Kilowatt Hour Conversion Table",
    headers: ["Kilocalories (kcal)", "Kilowatt Hours (kWh)", "Watt Hours (Wh)", "Megajoules (MJ)"],
    rows: [
      { fromVal: "10 kcal", toVal: "0.0116 kWh", extra: "11.62 Wh", extra2: "0.0418 MJ" },
      { fromVal: "50 kcal", toVal: "0.0581 kWh", extra: "58.11 Wh", extra2: "0.2092 MJ" },
      { fromVal: "100 kcal", toVal: "0.1162 kWh", extra: "116.22 Wh", extra2: "0.4184 MJ" },
      { fromVal: "250 kcal", toVal: "0.2906 kWh", extra: "290.56 Wh", extra2: "1.0460 MJ" },
      { fromVal: "500 kcal", toVal: "0.5811 kWh", extra: "581.11 Wh", extra2: "2.0920 MJ" },
      { fromVal: "860.42 kcal", toVal: "1.0000 kWh", extra: "1,000.0 Wh", extra2: "3.6000 MJ" },
      { fromVal: "1,000 kcal", toVal: "1.1622 kWh", extra: "1,162.2 Wh", extra2: "4.1840 MJ" },
      { fromVal: "2,000 kcal", toVal: "2.3244 kWh", extra: "2,324.4 Wh", extra2: "8.3680 MJ" },
      { fromVal: "5,000 kcal", toVal: "5.8111 kWh", extra: "5,811.1 Wh", extra2: "20.920 MJ" },
      { fromVal: "10,000 kcal", toVal: "11.622 kWh", extra: "11,622 Wh", extra2: "41.840 MJ" },
      { fromVal: "50,000 kcal", toVal: "58.111 kWh", extra: "58,111 Wh", extra2: "209.20 MJ" },
      { fromVal: "100,000 kcal", toVal: "116.22 kWh", extra: "116,222 Wh", extra2: "418.40 MJ" }
    ]
  },
  applications: {
    title: "Practical Applications of kcal to kWh Conversion",
    items: [
      {
        title: "HVAC and Building Energy Audits",
        text: "Building services engineers convert heating loads calculated from thermal losses (in kcal/h) to seasonal electric power demands (in kWh) to select heat pump capacities."
      },
      {
        title: "Biomass and District Heating Plants",
        text: "Power plant operators measure wood pellet or municipal fuel heat content in kcal/kg and calculate the electrical output in kWh generated per metric ton burned."
      },
      {
        title: "Human Energetics and Microgrid Design",
        text: "Researchers modeling life support systems in space stations or remote polar research habitats convert human caloric heat outputs into HVAC cooling kWh loads."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing power with energy: Kilowatt (kW) is an instantaneous rate of work, whereas kilowatt hour (kWh) and kilocalorie (kcal) are quantities of total energy.",
      "Misidentifying small calories: If an engineering specification lists small calories (cal), dividing by 860,000 rather than 860 is required.",
      "Assuming 100% thermal-to-electric conversion in engines: Converting 10,000 kcal of fuel energy through a generator yields only 3.5 to 4.5 kWh of electricity due to thermodynamic heat engine limits."
    ]
  },
  faqs: [
    {
      question: "How many kilowatt hours are in one kilocalorie?",
      answer: "One kilocalorie equals approximately 0.001162222 kilowatt hours."
    },
    {
      question: "How many kilocalories equal 1 kWh?",
      answer: "One kilowatt hour equals approximately 860.421 kilocalories (or 860,421 small calories)."
    },
    {
      question: "What is the formula to convert kcal to kWh?",
      answer: "kWh = kcal × 0.001162222 (or kWh = kcal ÷ 860.421)."
    },
    {
      question: "How many kilowatt hours are in 2,000 kcal?",
      answer: "2,000 kcal × 0.001162222 = 2.3244 kWh."
    },
    {
      question: "How many kWh does an average adult consume daily in food?",
      answer: "An adult eating 2,000 to 2,500 kcal per day consumes roughly 2.32 to 2.91 kWh of chemical food energy per day."
    },
    {
      question: "Why does 1 kWh equal 860 kilocalories?",
      answer: "Because 1 kWh contains 3,600,000 Joules and 1 kcal contains 4,184 Joules. Dividing 3,600,000 by 4,184 gives 860.421 kcal."
    },
    {
      question: "How many kWh are in 10,000 kcal?",
      answer: "10,000 kcal × 0.001162222 = 11.622 kWh."
    },
    {
      question: "Is there a difference between dietary Calories and kcal?",
      answer: "No. The dietary Calorie (capital C) used on food packaging is identical in value to one scientific kilocalorie (1,000 small calories)."
    }
  ],
  relatedList: [
    { label: "Kilocalorie to Watt Hour", from: "kilocalorie", to: "watt-hour" },
    { label: "Kilocalorie to Joule", from: "kilocalorie", to: "joule" },
    { label: "Kilowatt Hour to Kilocalorie", from: "kilowatt-hour", to: "kilocalorie" },
    { label: "Kilocalorie to BTU", from: "kilocalorie", to: "btu" },
    { label: "Kilowatt Hour to Megajoule", from: "kilowatt-hour", to: "megajoule" }
  ],
  references: [
    "International Electrotechnical Commission (IEC) 60050: International Electrotechnical Vocabulary — Electromagnetism.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
