import { CustomArticleData } from "./types";

export const kilowattToCaloriePerSecond: CustomArticleData = {
  fromUnitId: "kilowatt",
  toUnitId: "calorie-per-second",
  seoTitle: "Kilowatt to Calorie per Second Converter (kW to cal/s)",
  metaDescription: "Convert kilowatts to calories per second (kW to cal/s) with exact thermochemical precision. Heat transfer formulas, calculation examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/kilowatt-to-calorie-per-second",
  h1: "Kilowatt to Calorie per Second Converter",
  introduction: [
    "The kilowatt (kW) and the calorie per second (cal/s) are metric units of heat transfer rate and thermal power. While the kilowatt is the official International System of Units (SI) derived power unit used across modern physics and engineering, the calorie per second remains an essential calculation unit in chemical thermodynamics, combustion analysis, and physiological heat dissipation research.",
    "Converting kilowatts to calories per second translates SI mechanical and electrical power into thermochemical rate units. Under the internationally standardized thermochemical convention, one gram calorie equals exactly 4.184 Joules. Because one kilowatt represents 1,000 Joules per second (1,000 J/s), one kilowatt equals exactly 1,000 ÷ 4.184 ≈ 239.005736 calories per second (cal/s).",
    "This technical article details the conversion formula, provides step-by-step heat dissipation calculation examples, presents a detailed thermal science lookup table, explores practical engineering use cases, and answers common questions."
  ],
  quickAnswer: {
    text: "To convert kilowatts to calories per second (cal/s), multiply the kilowatt value by 1,000 and divide by 4.184 (or multiply by approximately 239.0057). For example, 1 kW equals approximately 239.01 cal/s.",
    formulaDisplay: "cal/s = (kW × 1,000) ÷ 4.184 = kW × 239.005736",
    subtext: "1 kilowatt is equal to approximately 239.0057 calories per second (thermochemical standard)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilowatt (kW)",
    text: "The kilowatt (symbol: kW) is an official decimal multiple of the SI unit of power, the Watt, representing 1,000 Joules of energy transferred per second (1 kJ/s). Widely utilized in thermal engineering, electrical generation, and industrial heating, it represents the rate of heat generation or mechanical work in a standardized, gravity-independent format."
  },
  aboutTargetUnit: {
    title: "Understanding Calorie per Second (cal/s)",
    text: "The calorie per second (symbol: cal/s or cal/sec) is a metric thermal rate unit defined as the heat transfer of one small thermochemical calorie (4.184 Joules) per second. In thermal physics, 1 cal/s is the heat power required to raise the temperature of one gram of water by one degree Celsius every second."
  },
  relationship: "Because 1 thermochemical calorie is defined as exactly 4.184 Joules, 1 cal/s equals 4.184 Watts (0.004184 kW). Consequently, 1 kilowatt equals 1,000 / 4.184 ≈ 239.005736 cal/s.",
  relationshipTitle: "Kilowatt to Calorie per Second Scale",
  relationshipItems: [
    { label: "0.004184 kW", value: "1.0 cal/s (Warm 1g water by 1°C per second)" },
    { label: "0.1 kW", value: "23.90 cal/s (Human resting metabolic heat dissipation)" },
    { label: "1.0 kW", value: "239.01 cal/s (Small domestic electric heater output)" },
    { label: "5.0 kW", value: "1,195.03 cal/s (Commercial laboratory thermal bath)" },
    { label: "10.0 kW", value: "2,390.06 cal/s (Industrial chemical reactor heater)" }
  ],
  formula: {
    text: "Multiply the power in kilowatts by 1,000 to convert to Watts, then divide by 4.184 to find calories per second.",
    math: "cal_per_s = (kW * 1000) / 4.184",
    subtext: "Alternatively: cal/s = kW × 239.005736"
  },
  formulaTitle: "Kilowatt to Calorie per Second Formula",
  practicalTip: {
    title: "Quick 240× Mental Shortcut",
    text: "Multiply the kilowatt value by 240 and subtract roughly 0.4% to calculate cal/s rapidly in your head (e.g., 2 kW × 240 = 480 cal/s; exact: 478.01 cal/s)."
  },
  expertNote: {
    title: "Small Calories vs Dietary Kilocalories",
    text: "This converter evaluates small gram calories per second (cal/s). If you need dietary kilocalories per second (kcal/s), divide the result by 1,000 (1 kW = 0.239006 kcal/s = 860.42 kcal/hr)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Thermal Bath Heater",
        subtitle: "Convert a 2.5 kW electric heating immersion element rating into calories per second.",
        steps: [
          "Identify power in kilowatts: 2.5 kW.",
          "Multiply by 1,000: 2,500 Watts (J/s).",
          "Apply formula: cal/s = 2,500 ÷ 4.184.",
          "Calculate: 2,500 ÷ 4.184 = 597.514 cal/s.",
          "Result: 2.5 kW equals approximately 597.51 calories per second."
        ]
      },
      {
        title: "Example 2: Exothermic Reactor Cooling Load",
        subtitle: "Convert an 8 kW chemical reaction heat release into cal/s.",
        steps: [
          "Identify value in kW: 8 kW.",
          "Multiply by 239.0057: 8 × 239.0057 = 1,912.05 cal/s.",
          "Result: 8 kW equals approximately 1,912.05 calories per second."
        ]
      },
      {
        title: "Example 3: Physiological Human Metabolic Power",
        subtitle: "Convert an athletic sprinting power output of 0.8 kW into cal/s.",
        steps: [
          "Identify power: 0.8 kW (800 W).",
          "Calculate: 800 ÷ 4.184 = 191.205 cal/s.",
          "Result: 0.8 kW equals approximately 191.21 calories per second."
        ]
      }
    ]
  },
  table: {
    title: "Kilowatt to Calorie per Second Conversion Table",
    headers: ["Kilowatts (kW)", "Calories per Second (cal/s)", "Watts (W)", "Thermal / Scientific Application"],
    rows: [
      { fromVal: "0.004184 kW", toVal: "1.00 cal/s", extra: "4.184 W", extra2: "Base cal/s unit definition" },
      { fromVal: "0.05 kW", toVal: "11.95 cal/s", extra: "50 W", extra2: "Soldering iron tip heat generation" },
      { fromVal: "0.10 kW", toVal: "23.90 cal/s", extra: "100 W", extra2: "Resting human body heat dissipation (~100 W)" },
      { fromVal: "0.50 kW", toVal: "119.50 cal/s", extra: "500 W", extra2: "Small laboratory hot plate" },
      { fromVal: "1.00 kW", toVal: "239.01 cal/s", extra: "1,000 W", extra2: "1 kW electric heater element benchmark" },
      { fromVal: "2.00 kW", toVal: "478.01 cal/s", extra: "2,000 W", extra2: "Domestic electric kettle heating rate" },
      { fromVal: "3.00 kW", toVal: "717.02 cal/s", extra: "3,000 W", extra2: "Instant electric water shower heater" },
      { fromVal: "5.00 kW", toVal: "1,195.03 cal/s", extra: "5,000 W", extra2: "Commercial kitchen deep fryer heating rate" },
      { fromVal: "10.00 kW", toVal: "2,390.06 cal/s", extra: "10,000 W", extra2: "Industrial plastic extrusion heater" },
      { fromVal: "25.00 kW", toVal: "5,975.14 cal/s", extra: "25,000 W", extra2: "Commercial sauna steam generator" },
      { fromVal: "50.00 kW", toVal: "11,950.29 cal/s", extra: "50,000 W", extra2: "District heating substation branch" },
      { fromVal: "100.00 kW", toVal: "23,900.57 cal/s", extra: "100,000 W", extra2: "Industrial metal induction furnace" }
    ]
  },
  applications: {
    title: "Practical Applications of kW to Calorie per Second Conversion",
    items: [
      {
        title: "Chemical Process Thermokinetics",
        text: "Physical chemists modeling reaction vessel jacket cooling calculate enthalpy generation rates in cal/s and convert to kilowatts to size industrial refrigeration compressors."
      },
      {
        title: "Exercise Physiology and Sports Science",
        text: "Human biometrics researchers convert instantaneous mechanical work measured on cycle ergometers (in Watts and kW) into metabolic calories burned per second."
      },
      {
        title: "Materials Science Thermal Conduction",
        text: "Engineers measuring Fourier's law thermal conductivity across metal specimens convert heat flux from calories/(cm²·s) to kW/m²."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 239 instead of multiplying: Because 1 kW is roughly 239 cal/s, the cal/s value is always much larger than the kW value.",
      "Confusing small cal/s with kcal/s (kilocalories per second): 1 kW = 239.01 cal/s = 0.23901 kcal/s.",
      "Forgetting the time component: Calorie per second measures power (rate), whereas calories measure total accumulated energy."
    ]
  },
  faqs: [
    {
      question: "How many calories per second are in 1 kilowatt?",
      answer: "There are approximately 239.0057 calories per second (cal/s) in 1 kilowatt."
    },
    {
      question: "What is the formula to convert kilowatts to calories per second?",
      answer: "The formula is: cal/s = (kilowatts × 1,000) ÷ 4.184 (or cal/s = kW × 239.005736)."
    },
    {
      question: "How many kilowatts are in 1 calorie per second?",
      answer: "There are exactly 0.004184 kilowatts (4.184 Watts) in 1 thermochemical calorie per second."
    },
    {
      question: "How do I convert 5 kW to cal/s?",
      answer: "5 kW × 239.0057 = 1,195.03 calories per second."
    },
    {
      question: "How do I convert cal/s to kcal/hour?",
      answer: "Multiply cal/s by 3.6 (e.g., 239.01 cal/s × 3.6 = 860.42 kcal/hr, which is the heat rate of 1 kW)."
    },
    {
      question: "How do I convert calories per second back to kilowatts?",
      answer: "Multiply the cal/s value by 0.004184 (or divide by 239.0057)."
    },
    {
      question: "Is calorie per second an SI unit?",
      answer: "No. The official SI unit of power is the Watt (1 W = 1 J/s). The calorie per second is a metric thermal unit based on the thermochemical calorie."
    },
    {
      question: "How many Watts are in 100 cal/s?",
      answer: "100 cal/s × 4.184 = 418.4 Watts (0.4184 kW)."
    }
  ],
  relatedList: [
    { label: "Calorie per Second to Kilowatt", from: "calorie-per-second", to: "kilowatt" },
    { label: "Kilowatt to BTU per Hour", from: "kilowatt", to: "btu-per-hour" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" },
    { label: "Kilowatt to Horsepower (Mechanical)", from: "kilowatt", to: "horsepower-mechanical" },
    { label: "Megawatt to Kilowatt", from: "megawatt", to: "kilowatt" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics."
  ]
};
