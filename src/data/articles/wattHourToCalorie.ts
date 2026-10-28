import { CustomArticleData } from "./types";

export const wattHourToCalorie: CustomArticleData = {
  fromUnitId: "watt-hour",
  toUnitId: "calorie",
  seoTitle: "Watt Hour to Calorie Converter (Wh to cal)",
  metaDescription: "Convert Watt Hours to small calories (Wh to cal) with exact calculations. Explore electrical-to-thermal formulas, worked examples, and conversion tables.",
  canonicalUrl: "https://unitsconvertors.com/watt-hour-to-calorie",
  h1: "Watt Hour to Calorie Converter",
  introduction: [
    "The Watt Hour (Wh) and the small calorie (cal) bridge electrical work and microscopic thermal science. While the Watt Hour quantifies electrical power expended or stored over time in batteries and circuits, the calorie measures the heat needed to change water temperature in physical chemistry, calorimetry, and material thermodynamics.",
    "Connecting electrical current with laboratory heating requires a direct energetic conversion. Because one Watt Hour equals exactly 3,600 Joules and one small thermochemical calorie equals exactly 4.184 Joules, one Watt Hour equals 3,600 divided by 4.184, or approximately 860.421 small calories.",
    "This reference explains the thermodynamic relationship between electrical energy and calories, provides step-by-step conversion examples, supplies an extensive reference lookup table, and answers key engineering and laboratory questions."
  ],
  quickAnswer: {
    text: "To convert Watt Hours (Wh) to small calories (cal), multiply the Watt Hour value by 860.421 (or multiply by 3,600 and divide by 4.184). For example, 1 Watt Hour equals approximately 860.42 small calories.",
    formulaDisplay: "cal = Wh × (3,600 ÷ 4.184) ≈ Wh × 860.421",
    subtext: "1 Watt Hour ≈ 860.421 small calories; 1 small calorie ≈ 0.00116222 Watt Hours."
  },
  aboutSourceUnit: {
    title: "Understanding the Watt Hour (Wh)",
    text: "The Watt Hour (symbol: Wh) is an energy unit representing one Watt of power expended steadily for one hour. Since one Watt equals one Joule per second and one hour contains 3,600 seconds, one Watt Hour equals exactly 3,600 Joules (3.6 kJ). It is globally used to rate battery packs, consumer electronic power budgets, and solar power generation."
  },
  aboutTargetUnit: {
    title: "Understanding the Calorie (cal)",
    text: "The small calorie (symbol: cal), or gram calorie, is defined as the thermal heat energy needed to raise the temperature of one gram of pure water by one degree Celsius under standard atmospheric pressure. Under the thermochemical definition recognized by NIST and IUPAC, one small calorie equals exactly 4.184 Joules. It remains standard in aqueous solution chemistry, reaction thermodynamics, and micro-calorimetry."
  },
  relationship: "The exact conversion between Watt Hours and thermochemical calories derives from their common baseline in SI Joules: 1 Wh = 3,600 J, and 1 cal = 4.184 J. Dividing 3,600 by 4.184 gives 860.42065 cal per Watt Hour. Inversely, 1 small calorie equals approximately 0.001162222 Wh (or 1.16222 milliwatt hours).",
  relationshipTitle: "Watt Hour to Calorie Equivalence Values",
  relationshipItems: [
    { label: "0.1 Wh (100 mWh)", value: "≈ 86.042 cal" },
    { label: "1 Wh", value: "≈ 860.421 cal" },
    { label: "2 Wh", value: "≈ 1,720.84 cal" },
    { label: "5 Wh", value: "≈ 4,302.10 cal" },
    { label: "10 Wh", value: "≈ 8,604.21 cal" },
    { label: "1.1622 Wh", value: "1,000.00 cal (1.00 kcal)" }
  ],
  formula: {
    text: "Multiply the energy in Watt Hours by 3,600 to find total Joules, then divide by 4.184 to calculate small calories.",
    math: "cal = (Wh * 3600) / 4.184",
    subtext: "Simplified multiplier: cal = Wh × 860.421."
  },
  formulaTitle: "Watt Hour to Calorie Conversion Formula",
  practicalTip: {
    title: "Rule of Thumb for Rapid Mental Estimates",
    text: "For quick calculations in laboratory testing, multiply the Watt Hour figure by 860. For example, a 5 Wh sensor battery delivers 5 × 860 = 4,300 calories of electrical heat equivalent."
  },
  expertNote: {
    title: "Joule Heating and Water Calorimetry",
    text: "When an electrical immersion resistor dissipates energy inside a water calorimeter, every Watt Hour of electrical energy dissipated produces exactly 860.42 calories of thermal heat. In a container holding 860.4 grams of water, 1 Wh of electrical energy raises the water temperature by exactly 1.0°C (assuming zero thermal losses)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Small Resistor Heat Dissipation in Water",
        subtitle: "Convert 2.5 Wh of dissipated electrical energy into small calories.",
        steps: [
          "State the energy in Watt Hours: 2.5 Wh.",
          "Multiply by the conversion factor: 2.5 × 860.421 = 2,151.05 cal.",
          "Result: 2.5 Wh equals approximately 2,151.1 small calories."
        ]
      },
      {
        title: "Example 2: Microcontroller Power Draw Thermal Load",
        subtitle: "Convert 0.15 Wh (150 mWh) consumed by a circuit board into calories.",
        steps: [
          "State the energy value: 0.15 Wh.",
          "Convert to Joules: 0.15 × 3,600 = 540 J.",
          "Convert Joules to calories: 540 ÷ 4.184 = 129.06 cal.",
          "Result: 0.15 Wh produces approximately 129.1 small calories of heat."
        ]
      },
      {
        title: "Example 3: Smartphone Battery Total Caloric Equivalent",
        subtitle: "Convert a 12 Wh smartphone battery capacity into small calories.",
        steps: [
          "State the battery capacity: 12 Wh.",
          "Multiply: 12 × 860.421 = 10,325.05 cal.",
          "Result: 12 Wh contains approximately 10,325 small calories (or 10.325 kcal)."
        ]
      }
    ]
  },
  table: {
    title: "Watt Hour to Calorie Conversion Table",
    headers: ["Watt Hours (Wh)", "Calories (cal)", "Kilocalories (kcal)", "Joules (J)"],
    rows: [
      { fromVal: "0.01 Wh", toVal: "8.60 cal", extra: "0.0086 kcal", extra2: "36.0 J" },
      { fromVal: "0.05 Wh", toVal: "43.02 cal", extra: "0.0430 kcal", extra2: "180.0 J" },
      { fromVal: "0.1 Wh", toVal: "86.04 cal", extra: "0.0860 kcal", extra2: "360.0 J" },
      { fromVal: "0.5 Wh", toVal: "430.21 cal", extra: "0.4302 kcal", extra2: "1,800 J" },
      { fromVal: "1 Wh", toVal: "860.42 cal", extra: "0.8604 kcal", extra2: "3,600 J" },
      { fromVal: "2 Wh", toVal: "1,720.8 cal", extra: "1.7208 kcal", extra2: "7,200 J" },
      { fromVal: "5 Wh", toVal: "4,302.1 cal", extra: "4.3021 kcal", extra2: "18,000 J" },
      { fromVal: "10 Wh", toVal: "8,604.2 cal", extra: "8.6042 kcal", extra2: "36,000 J" },
      { fromVal: "20 Wh", toVal: "17,208 cal", extra: "17.208 kcal", extra2: "72,000 J" },
      { fromVal: "50 Wh", toVal: "43,021 cal", extra: "43.021 kcal", extra2: "180,000 J" },
      { fromVal: "100 Wh", toVal: "86,042 cal", extra: "86.042 kcal", extra2: "360,000 J" },
      { fromVal: "250 Wh", toVal: "215,105 cal", extra: "215.11 kcal", extra2: "900,000 J" }
    ]
  },
  applications: {
    title: "Practical Applications of Wh to cal Conversion",
    items: [
      {
        title: "Calorimetric Heating Calibration",
        text: "Physical chemistry researchers calibrate bomb calorimeters by passing a measured electrical current through a known precision resistor, converting electrical Watt Hours into standard calibration calories."
      },
      {
        title: "Thermal Management of Electronic Enclosures",
        text: "Hardware engineers convert standby electrical draw in Watt Hours into calories to model heat convection inside sealed IoT sensor enclosures."
      },
      {
        title: "Biochemical Micro-Devices and Lab-on-a-Chip",
        text: "Biomedical engineers design microfluidic PCR thermal cyclers that deliver localized thermal pulses, converting electrical energy pulses in milliwatt-hours into required thermal calories."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Confusing small gram calories (cal) with dietary kilocalories (kcal or Cal): 1 Wh equals 860.42 small calories, but only 0.8604 kilocalories. Multiplying by 860 when calculating food values results in a thousand-fold error.",
      "Dividing by 860.42 instead of multiplying: Dividing converts calories back to Watt Hours, producing a number far too small.",
      "Ignoring thermal convection and radiation losses: In practical calorimetry, not all electrical energy remains trapped in the sample as heat without vacuum insulation."
    ]
  },
  faqs: [
    {
      question: "How many small calories are in 1 Watt Hour?",
      answer: "One Watt Hour equals approximately 860.421 small calories (or 0.860421 kilocalories)."
    },
    {
      question: "How many Watt Hours are in 1 small calorie?",
      answer: "One small calorie equals approximately 0.00116222 Watt Hours (or 1.16222 milliwatt hours)."
    },
    {
      question: "What is the formula to convert Wh to cal?",
      answer: "cal = Wh × (3,600 ÷ 4.184) ≈ Wh × 860.421."
    },
    {
      question: "Why does 1 Wh equal roughly 860 calories?",
      answer: "One Watt Hour contains 3,600 Joules, and one small calorie contains 4.184 Joules. Dividing 3,600 by 4.184 gives 860.421."
    },
    {
      question: "How many small calories are in 10 Watt Hours?",
      answer: "10 Wh × 860.421 = 8,604.21 small calories (or 8.604 kcal)."
    },
    {
      question: "What is the difference between a small calorie and a food Calorie?",
      answer: "A small calorie (cal) is the heat needed to warm 1 gram of water by 1°C. A food Calorie (kcal) is 1,000 small calories and warms 1 kilogram of water by 1°C."
    },
    {
      question: "How many small calories are in 100 Wh?",
      answer: "100 Wh × 860.421 = 86,042.1 small calories (86.042 kcal)."
    },
    {
      question: "How do you convert small calories to Watt Hours?",
      answer: "Multiply the calorie value by 0.00116222 (or divide by 860.421)."
    }
  ],
  relatedList: [
    { label: "Calorie to Watt Hour", from: "calorie", to: "watt-hour" },
    { label: "Watt Hour to Kilocalorie", from: "watt-hour", to: "kilocalorie" },
    { label: "Watt Hour to Joule", from: "watt-hour", to: "joule" },
    { label: "Calorie to Joule", from: "calorie", to: "joule" },
    { label: "Watt Hour to Kilowatt Hour", from: "watt-hour", to: "kilowatt-hour" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "ISO 80000-5: Quantities and Units — Part 5: Thermodynamics.",
    "BIPM: The International System of Units (SI Brochure, 9th edition)."
  ]
};
