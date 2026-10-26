import { CustomArticleData } from "./types";

export const reaumurToNewton: CustomArticleData = {
  fromUnitId: "reaumur",
  toUnitId: "newton",
  seoTitle: "Réaumur to Newton (Re to N) Temperature Converter",
  metaDescription: "Convert Réaumur to Newton (°Ré to °N) with exact precision. Learn the direct 33/80 ratio (0.4125), historical 18th-century thermometry, and tables.",
  h1: "Réaumur to Newton Converter",
  introduction: [
    "Converting temperature between the Réaumur scale and the Newton temperature scale connects two of the earliest calibrated thermometric systems in the history of science. Devised by French naturalist René Antoine Ferchault de Réaumur in 1730 and English polymath Sir Isaac Newton in 1701, both systems were developed during the dawn of precision thermometry prior to the widespread adoption of Celsius and Fahrenheit.",
    "Remarkably, both scales share the exact same starting baseline: zero is defined as the freezing point of pure water (0 °Ré = 0 °N). However, while Réaumur placed the boiling point of water at 80 °Ré, Newton placed it at 33 °N. Because their zero points coincide, no additive offset is needed—the conversion is a pure ratio: <strong>°N = °Ré × (33 / 80) = °Ré × 0.4125</strong>. This guide explains their historical origins, step-by-step calculations, worked examples, and reference conversion tables."
  ],
  quickAnswer: {
    text: "To convert Réaumur to Newton, multiply the Réaumur value by 0.4125 (or 33/80). For example, 0 °Ré equals exactly 0 °N, and 80 °Ré equals exactly 33 °N.",
    formulaDisplay: "°N = °Ré × (33 / 80) = °Ré × 0.4125",
    subtext: "A direct ratio calculation because both scales set zero at the freezing point of pure water."
  },
  aboutSourceUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "The Réaumur scale (°Ré) was introduced in 1730 by René Antoine Ferchault de Réaumur. Calibrated so that 0 °Ré represents the freezing point of water and 80 °Ré represents the boiling point of water, it was constructed based on the 8% volumetric thermal expansion of diluted ethanol in glass tubes."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton Temperature Scale (°N)",
    text: "Devised around 1701 by Sir Isaac Newton and published anonymously in the Royal Society's Philosophical Transactions, the Newton temperature scale was an early attempt to quantify heat using linseed oil thermometry. Newton set 0 °N at the temperature of melting snow and 33 °N at the temperature of boiling water, establishing body temperature near 12 °N."
  },
  relationship: "Because both scales define the ice melting point of pure water as zero, their zero points align perfectly (0 °Ré = 0 °N). The interval between freezing and boiling is divided into 80 degrees on the Réaumur scale and 33 degrees on the Newton scale. Thus, 1 °Ré = 33 / 80 °N = 0.4125 °N exactly.",
  relationshipTitle: "Exact Zero Alignment and Scaling",
  relationshipItems: [
    { label: "0 °Ré", value: "0 °N (Freezing point of pure water)" },
    { label: "16 °Ré", value: "6.6 °N (Standard room temperature 20 °C)" },
    { label: "29.6 °Ré", value: "12.21 °N (Newton's human body milestone ~12 °N)" },
    { label: "80 °Ré", value: "33 °N (Boiling point of pure water at 1 atm)" },
    { label: "-218.52 °Ré", value: "-90.14 °N (Absolute zero)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Réaumur by 0.4125 (or multiply by 33 and divide by 80) to calculate the temperature in degrees Newton.",
    math: "°N = °Ré × 0.4125",
    subtext: "To convert degrees Newton back into degrees Réaumur, divide by 0.4125 (or multiply by 80 / 33 ≈ 2.424242)."
  },
  formulaTitle: "Réaumur to Newton Formula",
  practicalTip: {
    title: "Mental Estimation Shortcut",
    text: "Because 0.4125 is very close to 0.4 (40%), you can estimate Newton degrees by taking 40% of the Réaumur value and adding a tiny fraction (1%). For example, 40 °Ré × 0.4 = 16 °N (exact is 16.5 °N)."
  },
  expertNote: {
    title: "Newton's Linseed Oil Thermometer",
    text: "Newton chose linseed oil because its boiling point is far higher than water and it remains liquid across an enormous range. His scale served as the empirical foundation for his famous Law of Cooling, which established that heat loss rate is proportional to temperature difference."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °Ré)",
        subtitle: "Convert the freezing point of water to degrees Newton.",
        steps: [
          "Identify temperature: 0 °Ré.",
          "Apply formula: °N = 0 × 0.4125.",
          "Calculate: 0 × 0.4125 = 0 °N.",
          "Result: 0 °Ré equals exactly 0 °N."
        ]
      },
      {
        title: "Example 2: Room Temperature (16 °Ré)",
        subtitle: "Convert 16 °Ré (20 °C) into degrees Newton.",
        steps: [
          "Identify temperature: 16 °Ré.",
          "Apply formula: °N = 16 × 0.4125.",
          "Calculate: 16 × (33 / 80) = 528 / 80 = 6.6 °N.",
          "Result: 16 °Ré equals exactly 6.6 °N."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (80 °Ré)",
        subtitle: "Convert the boiling point of pure water to degrees Newton.",
        steps: [
          "Identify temperature: 80 °Ré.",
          "Multiply: 80 × 0.4125 = 33 °N.",
          "Result: 80 °Ré equals exactly 33 °N."
        ]
      }
    ]
  },
  table: {
    title: "Réaumur to Newton Conversion Table",
    headers: ["Réaumur (°Ré)", "Newton (°N)", "Physical Phenomenon"],
    rows: [
      { fromVal: "-218.52 °Ré", toVal: "-90.14 °N", extra: "Absolute zero (0 K)" },
      { fromVal: "-80.00 °Ré", toVal: "-33.00 °N", extra: "Severe cryogenic cold (-100 °C)" },
      { fromVal: "-40.00 °Ré", toVal: "-16.50 °N", extra: "Extreme polar cold (-50 °C)" },
      { fromVal: "-16.00 °Ré", toVal: "-6.60 °N", extra: "Freezer storage (-20 °C)" },
      { fromVal: "0.00 °Ré", toVal: "0.00 °N", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "8.00 °Ré", toVal: "3.30 °N", extra: "Chilly morning (10 °C / 50 °F)" },
      { fromVal: "16.00 °Ré", toVal: "6.60 °N", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "20.00 °Ré", toVal: "8.25 °N", extra: "Warm indoor temperature (25 °C / 77 °F)" },
      { fromVal: "29.60 °Ré", toVal: "12.21 °N", extra: "Normal human body temperature (37 °C)" },
      { fromVal: "40.00 °Ré", toVal: "16.50 °N", extra: "Hot bath / desert temperature (50 °C)" },
      { fromVal: "60.00 °Ré", toVal: "24.75 °N", extra: "High-temperature pasteurization (75 °C)" },
      { fromVal: "80.00 °Ré", toVal: "33.00 °N", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of Réaumur to Newton Conversions",
    items: [
      {
        title: "Enlightenment Science & Physics History",
        text: "Historians studying correspondence between 18th-century French Royal Academy academicians and the Royal Society of London convert thermometric readings to compare French Réaumur data with English Newton manuscripts."
      },
      {
        title: "Validation of Newton's Law of Cooling",
        text: "Physics students recreate Newton's classic 1701 cooling rate experiments using historical laboratory values, converting between °N and other historical systems like °Ré."
      },
      {
        title: "Antiquarian Thermometer Cataloging",
        text: "Museum curators cataloging early 18th-century glass thermoscopes verify engraved scales against both Newton's 33-degree scale and Réaumur's 80-degree scale."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the Newton temperature scale (°N) with the SI unit of force, the newton (N).",
      "Adding an offset to the calculation; because both scales define 0 as the freezing point of water, no additive offset is required.",
      "Inverting the conversion factor (using 80/33 ≈ 2.424 instead of 33/80 = 0.4125)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Réaumur to Newton?",
      answer: "Multiply the temperature in Réaumur by 0.4125 (or 33/80): °N = °Ré × 0.4125."
    },
    {
      question: "Why do Réaumur and Newton share the same zero point?",
      answer: "Both Sir Isaac Newton (in 1701) and René Antoine de Réaumur (in 1730) independently chose the melting point of ice / freezing point of pure water as their stable lower reference milestone (0 °Ré = 0 °N)."
    },
    {
      question: "What is 80 °Ré in degrees Newton?",
      answer: "80 °Ré is the boiling point of water, which corresponds to exactly 33 °N."
    },
    {
      question: "What is room temperature (16 °Ré) in degrees Newton?",
      answer: "16 °Ré (20 °C) equals exactly 6.6 °N (16 × 0.4125 = 6.6)."
    },
    {
      question: "What was Newton's benchmark for human body temperature?",
      answer: "Newton calibrated the heat of the human body at roughly 12 °N, which corresponds to approximately 29.1 °Ré (or 36.4 °C)."
    },
    {
      question: "How do you convert degrees Newton back to Réaumur?",
      answer: "Divide the Newton temperature by 0.4125 (or multiply by 80 / 33): °Ré = °N × (80 / 33) ≈ °N × 2.424242."
    },
    {
      question: "Is degrees Newton related to the SI newton of force?",
      answer: "No. The degree Newton (°N) measures temperature on a scale devised by Sir Isaac Newton in 1701, whereas the newton (N) is the modern SI coherent unit of force (1 N = 1 kg·m/s²)."
    },
    {
      question: "What is absolute zero in degrees Newton?",
      answer: "Absolute zero (0 K / -273.15 °C) corresponds to approximately -90.14 °N."
    }
  ],
  relatedList: [
    { label: "Newton to Réaumur", from: "newton", to: "reaumur" },
    { label: "Réaumur to Celsius", from: "reaumur", to: "celsius" },
    { label: "Newton to Celsius", from: "newton", to: "celsius" }
  ],
  references: [
    "Isaac Newton - Scala graduum Caloris (Philosophical Transactions of the Royal Society, 1701)",
    "René-Antoine Ferchault de Réaumur - Mémoires de l'Académie Royale des Sciences (1730)",
    "W. E. Knowles Middleton - A History of the Thermometer and Its Uses in Meteorology"
  ]
};
