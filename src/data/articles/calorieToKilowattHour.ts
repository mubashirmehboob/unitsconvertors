import { CustomArticleData } from "./types";

export const calorieToKilowattHour: CustomArticleData = {
  fromUnitId: "calorie",
  toUnitId: "kilowatt-hour",
  seoTitle: "Calorie to Kilowatt Hour Converter (cal to kWh)",
  metaDescription: "Convert small calories to kilowatt-hours (cal to kWh). Detailed formulas, scientific notation conversions, lookup tables, and engineering examples.",
  canonicalUrl: "https://unitsconvertors.com/calorie-to-kilowatt-hour",
  h1: "Calorie to Kilowatt Hour Converter",
  introduction: [
    "The small calorie (cal) and the kilowatt-hour (kWh) span vastly different scales of energy measurement. While the small calorie quantifies microscopic thermal exchanges—such as warming a single gram of water by one degree Celsius—the kilowatt-hour measures large-scale utility electrical consumption, commercial power generation, and building HVAC thermal loads.",
    "Converting small calories to kilowatt-hours requires bridging the metric thermal baseline with standard industrial energy accounting. Because one calorie equals exactly 4.184 Joules and one kilowatt-hour contains 3,600,000 Joules, one small calorie equals 1.16222 × 10⁻⁶ kilowatt-hours. Conversely, one kilowatt-hour represents approximately 860,421 small calories (860.42 kcal).",
    "This comprehensive technical guide outlines the conversion formula, provides step-by-step mathematical examples, features a detailed conversion reference table, explores practical engineering applications, and answers common questions."
  ],
  quickAnswer: {
    text: "To convert small calories (cal) to kilowatt-hours (kWh), multiply the calorie value by 1.16222 × 10⁻⁶ (or multiply by 4.184 and divide by 3,600,000). For example, 1,000,000 small calories equal approximately 1.162 kWh.",
    formulaDisplay: "kWh = cal × (4.184 ÷ 3,600,000) ≈ cal × 1.16222 × 10⁻⁶",
    subtext: "1 small calorie ≈ 0.00000116222 kWh; 1 kWh ≈ 860,421 small calories (860.42 kcal)."
  },
  aboutSourceUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The small calorie (symbol: cal), or gram calorie, represents the quantity of heat necessary to raise the temperature of one gram of liquid water by 1°C at standard atmospheric pressure. Standardized internationally at 4.184 Joules under the thermochemical system, the calorie serves as a foundational unit in chemistry laboratories, thermochemical reaction kinetics, and micro-calorimetry."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilowatt Hour (kWh)",
    text: "The kilowatt-hour (symbol: kWh) is the universally recognized commercial unit of electrical and thermal energy, defined as the work performed or energy consumed by an apparatus operating at one kilowatt (1,000 Watts) continuously for one hour. Exactly equivalent to 3.6 megajoules (3,600,000 Joules), the kilowatt-hour is standard on electric utility bills, heat pump thermal ratings, and electric vehicle battery capacities."
  },
  relationship: "Because 1 cal = 4.184 J and 1 kWh = 3,600,000 J, the relationship is derived by dividing 4.184 by 3,600,000: 1 cal ≈ 1.162222 × 10⁻⁶ kWh. Conversely, 1 kWh contains approximately 860,420.65 small calories (or 860.42 kilocalories).",
  relationshipTitle: "Calorie to Kilowatt Hour Mathematical Equivalence",
  relationshipItems: [
    { label: "1 cal", value: "≈ 1.16222 × 10⁻⁶ kWh" },
    { label: "1,000 cal (1 kcal)", value: "≈ 0.00116222 kWh" },
    { label: "860,421 cal", value: "1.000 kWh (3.6 MJ)" },
    { label: "1,000,000 cal (1 Mcal)", value: "≈ 1.16222 kWh" },
    { label: "10,000,000 cal", value: "≈ 11.6222 kWh" }
  ],
  formula: {
    text: "Multiply the energy in small calories by 4.184 to obtain Joules, then divide by 3,600,000 to convert to kilowatt-hours.",
    math: "kWh = (cal * 4.184) / 3600000",
    subtext: "Scientific notation: kWh = cal × 1.162222 × 10⁻⁶."
  },
  formulaTitle: "Calorie to Kilowatt Hour Conversion Formula",
  practicalTip: {
    title: "Quick Estimation Using Megacalories",
    text: "Remember that 1,000,000 small calories (1 megacalorie or 1,000 kcal) is roughly 1.16 kWh. If you have 5 million calories, multiply 5 by 1.16 to get approximately 5.8 kWh."
  },
  expertNote: {
    title: "Thermal Kilowatt-Hours (kWh_th) vs Electric (kWh_e)",
    text: "In industrial cogeneration and district heating, engineers differentiate between thermal kilowatt-hours (kWh_th) produced from fuel combustion (often calculated from fuel calories) and electrical kilowatt-hours (kWh_e) generated at the turbine generator. Thermal efficiency dictates that only 30% to 50% of fuel calories convert into electrical kWh."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Industrial Water Heating Calorimetry",
        subtitle: "Convert 2,500,000 small calories of water heating into kilowatt-hours.",
        steps: [
          "State the initial calorie measurement: 2,500,000 cal.",
          "Multiply by 4.184 to get Joules: 2,500,000 × 4.184 = 10,460,000 J.",
          "Divide by 3,600,000: 10,460,000 ÷ 3,600,000 = 2.9056 kWh.",
          "Conclusion: 2,500,000 calories equals approximately 2.906 kilowatt-hours."
        ]
      },
      {
        title: "Example 2: Human Daily Diet Equivalent in Grid Power",
        subtitle: "Convert an adult daily dietary intake of 2,000,000 small calories (2,000 kcal) to kWh.",
        steps: [
          "Identify the calorie input: 2,000,000 cal.",
          "Apply the conversion factor: 2,000,000 × 1.162222 × 10⁻⁶.",
          "Calculate: 2.3244 kWh.",
          "Conclusion: 2,000 kcal represents 2.324 kWh of chemical potential energy."
        ]
      },
      {
        title: "Example 3: Chemical Fuel Capsule Energy",
        subtitle: "Convert 750,000 small calories into kilowatt-hours.",
        steps: [
          "State value: 750,000 cal.",
          "Compute: (750,000 × 4.184) ÷ 3,600,000 = 0.87167 kWh.",
          "Conclusion: 750,000 calories equals approximately 0.872 kilowatt-hours."
        ]
      }
    ]
  },
  table: {
    title: "Calorie to Kilowatt Hour Conversion Table",
    headers: ["Calories (cal)", "Kilowatt Hours (kWh)", "Megajoules (MJ)", "Practical / Industrial Benchmark"],
    rows: [
      { fromVal: "100,000 cal", toVal: "0.1162 kWh", extra: "0.4184 MJ", extra2: "Energy in ~11g of pure gasoline" },
      { fromVal: "250,000 cal", toVal: "0.2906 kWh", extra: "1.0460 MJ", extra2: "Heat to warm 2.5 liters of water to boiling" },
      { fromVal: "500,000 cal", toVal: "0.5811 kWh", extra: "2.0920 MJ", extra2: "Combustion energy of 12g propane" },
      { fromVal: "860,421 cal", toVal: "1.0000 kWh", extra: "3.6000 MJ", extra2: "Exactly 1 kWh equivalent baseline" },
      { fromVal: "1,000,000 cal", toVal: "1.1622 kWh", extra: "4.1840 MJ", extra2: "1 Megacalorie (1,000 kcal)" },
      { fromVal: "2,000,000 cal", toVal: "2.3244 kWh", extra: "8.3680 MJ", extra2: "Typical 2,000 kcal human daily food intake" },
      { fromVal: "5,000,000 cal", toVal: "5.8111 kWh", extra: "20.920 MJ", extra2: "Daily metabolic burn of elite cyclist" },
      { fromVal: "10,000,000 cal", toVal: "11.622 kWh", extra: "41.840 MJ", extra2: "Chemical energy in 1 kg of fuel oil" },
      { fromVal: "25,000,000 cal", toVal: "29.056 kWh", extra: "104.60 MJ", extra2: "Domestic hot water tank heat capacity" },
      { fromVal: "50,000,000 cal", toVal: "58.111 kWh", extra: "209.20 MJ", extra2: "Medium electric vehicle full battery charge" },
      { fromVal: "100,000,000 cal", toVal: "116.22 kWh", extra: "418.40 MJ", extra2: "Commercial kitchen natural gas hourly burn" },
      { fromVal: "500,000,000 cal", toVal: "581.11 kWh", extra: "2,092.0 MJ", extra2: "Monthly residential heating baseline" }
    ]
  },
  applications: {
    title: "Practical Applications of cal to kWh Conversion",
    items: [
      {
        title: "HVAC and Building Thermal Energy Auditing",
        text: "Facility managers calculating heating system fuel requirements convert combustion enthalpies expressed in calories or kilocalories into equivalent electrical grid kilowatt-hours to evaluate heat pump operating costs."
      },
      {
        title: "Renewable Energy and Biofuel Research",
        text: "Biomass researchers measure algal lipid heat values in bomb calorimeters (in cal/g). Converting these figures into kWh/kg allows direct economic comparisons against fossil fuels and solar photovoltaic generation."
      },
      {
        title: "Comparative Energy Storage Analysis",
        text: "Automotive engineers evaluate the energy density of chemical fuels against lithium-ion traction batteries by converting fuel combustion calories into equivalent battery pack kilowatt-hours."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Mistaking dietary Calories (kcal) for small calories (cal): A human diet of 2,500 kcal is 2,500,000 small calories (2.91 kWh). Entering 2,500 small calories would yield an erroneous 0.0029 kWh.",
      "Misplacing the decimal point in scientific notation: 1.16222 × 10⁻⁶ has five leading zeros after the decimal point (0.00000116222).",
      "Ignoring power conversion losses: 1 kWh of electrical input does not yield 1 kWh of chemical reaction heat due to thermal dissipation and impedance losses."
    ]
  },
  faqs: [
    {
      question: "How many kilowatt-hours are in one small calorie?",
      answer: "One small calorie equals approximately 1.16222 × 10⁻⁶ kilowatt-hours (0.00000116222 kWh)."
    },
    {
      question: "How many small calories are in one kilowatt-hour?",
      answer: "One kilowatt-hour contains approximately 860,421 small calories (or 860.42 kilocalories)."
    },
    {
      question: "How do you convert 1,000,000 calories to kWh?",
      answer: "Multiply 1,000,000 by 1.16222 × 10⁻⁶, which equals approximately 1.1622 kilowatt-hours."
    },
    {
      question: "How many kilowatt-hours is 2,000 food Calories (kcal)?",
      answer: "2,000 food Calories (2,000,000 small calories) equals 2,000,000 × (4.184 ÷ 3,600,000) ≈ 2.3244 kilowatt-hours."
    },
    {
      question: "What is the formula to convert calories to kWh?",
      answer: "Kilowatt-hours = (calories × 4.184) ÷ 3,600,000 = calories × 1.162222 × 10⁻⁶."
    },
    {
      question: "Why is 1 kWh equal to 860,421 calories?",
      answer: "One kWh is defined as 3,600,000 Joules. Dividing 3,600,000 J by 4.184 J/cal yields 860,420.65 calories."
    },
    {
      question: "What is the difference between a Watt Hour and a Kilowatt Hour?",
      answer: "A kilowatt-hour contains 1,000 Watt Hours. Therefore, 1 kWh is 1,000 times larger than 1 Wh."
    },
    {
      question: "Can calories be directly converted to kilowatts (kW)?",
      answer: "No. The calorie is a unit of energy, while the kilowatt is a unit of power (rate of energy flow per unit time). You must divide energy by time (such as seconds or hours) to determine power."
    }
  ],
  relatedList: [
    { label: "Calorie to Watt Hour", from: "calorie", to: "watt-hour" },
    { label: "Calorie to Kilocalorie", from: "calorie", to: "kilocalorie" },
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Joule to Kilowatt Hour", from: "joule", to: "kilowatt-hour" },
    { label: "Kilocalorie to Kilojoule", from: "kilocalorie", to: "kilojoule" }
  ],
  references: [
    "International Electrotechnical Commission (IEC) 60050: International Electrotechnical Vocabulary — Energy and Power.",
    "National Institute of Standards and Technology (NIST) Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
