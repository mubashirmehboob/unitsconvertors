import { CustomArticleData } from "./types";

export const wattToCaloriePerSecond: CustomArticleData = {
  fromUnitId: "watt",
  toUnitId: "calorie-per-second",
  seoTitle: "Watt to Calorie per Second Converter (W to cal/s)",
  metaDescription: "Convert Watts to Calories per Second (W to cal/s) accurately. Learn the 4.184 conversion factor, thermodynamic heat flow formulas, examples, and FAQs.",
  h1: "Watt to Calorie per Second Converter",
  introduction: [
    "The Watt (W) and Calorie per second (cal/s) are metric units used to measure heat transfer rate, thermal power flow, and thermodynamic dissipation. The Watt is the fundamental SI derived unit of power, defined as one Joule per second (1 J/s).",
    "The Calorie per second is a metric CGS-based unit of thermal power commonly used in chemistry, thermodynamics, physical chemistry laboratory studies, and physiological heat rate calculations.",
    "Converting Watts to Calories per second connects general electrical and mechanical power values with thermal calorie metrics. By international thermochemical agreement, 1 calorie (thermochemical calorie) equals exactly 4.184 Joules. Therefore, 1 Calorie per second equals 4.184 Watts. Converting Watts to Calories per second requires dividing the wattage by 4.184 (or multiplying by approximately 0.238846).",
    "This technical guide explains the conversion formula, provides step-by-step laboratory calculation examples, presents structured conversion tables, and answers thermodynamics thermal rate questions."
  ],
  quickAnswer: {
    text: "To convert Watts to Calories per Second (cal/s), divide the power value in Watts by 4.184 (or multiply by 0.238846). For example, 100 Watts equals approximately 23.88 cal/s.",
    formulaDisplay: "cal/s = W ÷ 4.184",
    subtext: "1 Watt is equal to approximately 0.2388459 Calories per second."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt (W)",
    text: "The Watt (symbol: W) is the universal SI unit of power, quantifying energy transfer at a rate of one Joule per second (1 W = 1 J/s). It applies across electrical, mechanical, optical, and thermal systems."
  },
  aboutTargetUnit: {
    title: "Understanding Calorie per Second (cal/s)",
    text: "Calorie per second (symbol: cal/s) is a CGS metric power unit defined as the heat energy transfer rate required to raise the temperature of one gram of liquid water by 1°C per second. Standardized as 1 cal/s = 4.184 W based on the thermochemical calorie."
  },
  relationship: "The exact relationship between watts and calories per second is established by the thermochemical calorie definition: 1 cal/s = 4.184 W = 4.184 J/s. Conversely, 1 W = 1/4.184 cal/s ≈ 0.2388458966 cal/s.",
  relationshipTitle: "Watt vs Calorie per Second Scale",
  relationshipItems: [
    { label: "1 W", value: "0.2388 cal/s (Small thermal dissipation)" },
    { label: "4.184 W", value: "1.0 cal/s (Baseline 1 calorie per second heat rate)" },
    { label: "41.84 W", value: "10.0 cal/s (Small laboratory heating mantle output)" },
    { label: "100 W", value: "23.88 cal/s (Human metabolic heat output at rest)" },
    { label: "1,000 W", value: "238.85 cal/s (1 kW electric immersion heater rate)" }
  ],
  formula: {
    text: "Divide the power in Watts by 4.184 to calculate the equivalent thermal rate in Calories per Second.",
    math: "cal/s = W / 4.184",
    subtext: "To convert Calories per Second back to Watts, multiply the cal/s value by 4.184."
  },
  formulaTitle: "Watt to Calorie per Second Conversion Formula",
  practicalTip: {
    title: "Multiplication Shortcut",
    text: "You can convert Watts to cal/s by multiplying the Watt value by 0.23885 (e.g., 50 W × 0.23885 ≈ 11.94 cal/s)."
  },
  expertNote: {
    title: "Thermochemical vs. IT Calorie",
    text: "The thermochemical calorie (4.184 J) is standard in chemical dynamics, whereas the International Table (IT) calorie (4.1868 J) is used in steam tables. 1 W = 0.238846 cal/s (thermochemical) vs 0.238685 cal/s (IT)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Water Bath Heater",
        subtitle: "Convert a 500 Watt immersion heater power rating to Calories per Second.",
        steps: [
          "Identify power in Watts: 500 W.",
          "Apply formula: cal/s = 500 ÷ 4.184.",
          "Calculate: 500 ÷ 4.184 = 119.5028.",
          "Result: 500 Watts equals approximately 119.50 cal/s."
        ]
      },
      {
        title: "Example 2: Human Metabolic Basal Rate",
        subtitle: "Convert a resting human body heat output of 80 Watts to Calories per Second.",
        steps: [
          "Identify power: 80 W.",
          "Divide by 4.184: 80 ÷ 4.184 = 19.12046.",
          "Result: 80 Watts equals approximately 19.12 cal/s."
        ]
      },
      {
        title: "Example 3: Chemical Reactor Exothermic Rate",
        subtitle: "Convert 2,500 Watts of exothermic heat generation into Calories per Second.",
        steps: [
          "Identify power: 2,500 W.",
          "Divide by 4.184: 2,500 ÷ 4.184 = 597.5143.",
          "Result: 2,500 Watts equals approximately 597.51 cal/s."
        ]
      }
    ]
  },
  table: {
    title: "Watt to Calorie per Second Conversion Table",
    headers: ["Watts (W)", "Calories per Second (cal/s)", "Thermal / Laboratory Context"],
    rows: [
      { fromVal: "1 W", toVal: "0.2388 cal/s", extra: "0.001 kW" },
      { fromVal: "4.184 W", toVal: "1.0000 cal/s", extra: "Baseline 1 cal/s heat flow" },
      { fromVal: "10 W", toVal: "2.3885 cal/s", extra: "Small soldering iron idle heat" },
      { fromVal: "50 W", toVal: "11.942 cal/s", extra: "Micro-flask heating mantle" },
      { fromVal: "80 W", toVal: "19.120 cal/s", extra: "Resting adult human metabolic rate" },
      { fromVal: "100 W", toVal: "23.885 cal/s", extra: "Incandescent bulb thermal emission" },
      { fromVal: "500 W", toVal: "119.50 cal/s", extra: "Lab water bath heater" },
      { fromVal: "1,000 W", toVal: "238.85 cal/s", extra: "1 kW electric element output" },
      { fromVal: "2,000 W", toVal: "477.69 cal/s", extra: "High-capacity laboratory boiler" },
      { fromVal: "5,000 W", toVal: "1,194.2 cal/s", extra: "Industrial chemical reactor heater" }
    ]
  },
  applications: {
    title: "Applications of W to cal/s Conversion",
    items: [
      {
        title: "Calorimetry & Chemical Thermodynamics",
        text: "Physical chemists measure reaction heat evolution rates in Watts using differential scanning calorimeters (DSC) and convert values to cal/s for kinetic modeling."
      },
      {
        title: "Exercise Physiology & Biomechanics",
        text: "Researchers measure human mechanical power output on ergometers in Watts and convert values to cal/s or kcal/h to analyze metabolic energy expenditure."
      },
      {
        title: "Thermal Physics Experiments",
        text: "Laboratory instruction experiments calculating specific heat capacity and latent heat rate use cal/s measurements alongside electric heater Watt meters."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small calories (cal) with dietary Kilocalories (kcal or Calorie): 1 kcal/s = 1,000 cal/s = 4,184 Watts.",
      "Multiplying by 4.184 instead of dividing: Moving from Watts to cal/s requires dividing by 4.184 because 1 cal is greater than 1 Joule.",
      "Conflating Calorie per second (power) with Calorie (energy)."
    ]
  },
  faqs: [
    {
      question: "How many Calories per second are in 1 Watt?",
      answer: "There are approximately 0.238846 Calories per second in 1 Watt (1 ÷ 4.184)."
    },
    {
      question: "How many Watts equal 1 Calorie per second?",
      answer: "Exactly 4.184 Watts equal 1 Calorie per second (thermochemical)."
    },
    {
      question: "What is the formula to convert Watts to cal/s?",
      answer: "The formula is: cal/s = Watts ÷ 4.184 (or Watts × 0.238846)."
    },
    {
      question: "How many cal/s is 100 Watts?",
      answer: "100 Watts equals approximately 23.885 Calories per second (100 ÷ 4.184)."
    },
    {
      question: "How do I convert cal/s back to Watts?",
      answer: "Multiply the cal/s value by 4.184 (e.g., 50 cal/s × 4.184 = 209.2 Watts)."
    },
    {
      question: "What is the difference between cal/s and kcal/h?",
      answer: "1 cal/s equals 3.6 kcal/h (since 3,600 seconds = 1 hour and 1,000 cal = 1 kcal)."
    },
    {
      question: "Why is 4.184 used as the conversion factor?",
      answer: "4.184 Joules per calorie is the defined thermochemical calorie equivalent standard (ISO 80000-5)."
    },
    {
      question: "How many cal/s is a 1,000 Watt (1 kW) heater?",
      answer: "A 1,000 Watt heater generates approximately 238.85 Calories per second of heat flow."
    }
  ],
  relatedList: [
    { label: "Watt to Kilowatt", from: "watt", to: "kilowatt" },
    { label: "Watt to BTU per Hour", from: "watt", to: "btu-per-hour" },
    { label: "Watt to Horsepower (Mechanical)", from: "watt", to: "horsepower-mechanical" },
    { label: "Kilowatt to Watt", from: "kilowatt", to: "watt" }
  ],
  references: [
    "ISO 80000-5:2019 Quantities and units — Part 5: Thermodynamics.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units.",
    "IUPAC Gold Book: Thermochemical Calorie and Units of Heat."
  ]
};
