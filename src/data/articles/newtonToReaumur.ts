import { CustomArticleData } from "./types";

export const newtonToReaumur: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "reaumur",
  seoTitle: "Newton to Réaumur (N to Re) Temperature Converter",
  metaDescription: "Convert Newton to Réaumur (°N to °Ré) with exact precision. Learn the direct 80/33 ratio (2.424242), historical 18th-century thermometry, and tables.",
  h1: "Newton to Réaumur Converter",
  introduction: [
    "Converting temperature from the Newton scale to the Réaumur scale compares two of the earliest calibrated thermometric scales in European history. Devised by English polymath Sir Isaac Newton in 1701 and French naturalist René Antoine Ferchault de Réaumur in 1730, both systems established systematic physical reference points that shaped the development of Enlightenment thermometry.",
    "Remarkably, both Newton and Réaumur chose the exact same starting point: zero is defined as the freezing point of pure water (0 °N = 0 °Ré). However, while Newton set the boiling point of water at 33 °N using a linseed oil thermometer, Réaumur set it at 80 °Ré using diluted alcohol expansion. Because both scales share an identical zero origin, no additive offset is required—the conversion is a direct scaling ratio: <strong>°Ré = °N × (80 / 33) ≈ °N × 2.424242</strong>. This guide explains their historical origins, step-by-step calculations, worked examples, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert degrees Newton to degrees Réaumur, multiply the Newton value by 80/33 (or approximately 2.424242). For example, 0 °N equals exactly 0 °Ré, and 33 °N equals exactly 80 °Ré.",
    formulaDisplay: "°Ré = °N × (80 / 33) ≈ °N × 2.424242",
    subtext: "A direct ratio calculation because both scales define 0 as the freezing point of pure water."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton Temperature Scale (°N)",
    text: "Devised around 1701 by Sir Isaac Newton, the Newton scale calibrated 0 °N at the melting point of snow and 33 °N at the boiling point of water. Using linseed oil as the thermometric fluid, Newton documented the cooling rates of iron bars and the melting points of various metallic alloys."
  },
  aboutTargetUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "The Réaumur scale (°Ré or °Re) was introduced in 1730 by René Antoine Ferchault de Réaumur. Defined with 0 °Ré as the freezing point of water and 80 °Ré as the boiling point of water, it was constructed based on the 8% volumetric thermal expansion of diluted alcohol in glass."
  },
  relationship: "Because both scales define the ice melting point of pure water as zero, their zero points align perfectly (0 °N = 0 °Ré). The interval between freezing and boiling is divided into 33 degrees on the Newton scale and 80 degrees on the Réaumur scale. Thus, 1 °N = 80 / 33 °Ré ≈ 2.424242 °Ré. No additive shift is needed.",
  relationshipTitle: "Direct Proportional Ratio",
  relationshipItems: [
    { label: "0 °N", value: "0.00 °Ré (Freezing point of pure water at 1 atm)" },
    { label: "6.6 °N", value: "16.00 °Ré (Standard room temperature 20 °C)" },
    { label: "12 °N", value: "29.09 °Ré (Newton's human body milestone ~36.4 °C)" },
    { label: "33 °N", value: "80.00 °Ré (Boiling point of pure water at 1 atm)" },
    { label: "-90.14 °N", value: "-218.52 °Ré (Absolute zero 0 K)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Newton by 80 and divide by 33 (or multiply by approximately 2.424242) to calculate the temperature in degrees Réaumur.",
    math: "°Ré = °N × (80 / 33)",
    subtext: "To convert degrees Réaumur back to Newton, multiply by 33 and divide by 80 (or multiply by 0.4125): °N = °Ré × 0.4125."
  },
  formulaTitle: "Newton to Réaumur Formula",
  practicalTip: {
    title: "Calculation Workflow Shortcut",
    text: "To convert easily, multiply the Newton value by 80 and divide by 33. For 6.6 °N: (6.6 × 80) / 33 = 528 / 33 = 16 °Ré."
  },
  expertNote: {
    title: "Thermometric Working Fluids",
    text: "Newton chose linseed oil for its wide liquid range without boiling, while Réaumur chose an alcohol-water mixture because its thermal expansion was precisely measurable. Both independent approaches converged on identical freezing reference points."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °N)",
        subtitle: "Convert the freezing point of water to degrees Réaumur.",
        steps: [
          "Identify temperature: 0 °N.",
          "Apply formula: °Ré = 0 × (80 / 33).",
          "Calculate: 0 × 2.4242 = 0 °Ré.",
          "Result: 0 °N equals exactly 0 °Ré."
        ]
      },
      {
        title: "Example 2: Standard Room Temperature (6.6 °N)",
        subtitle: "Convert 6.6 °N (20 °C / 68 °F) into degrees Réaumur.",
        steps: [
          "Identify temperature: 6.6 °N.",
          "Apply formula: °Ré = (6.6 × 80) / 33.",
          "Calculate: 528 / 33 = 16.0 °Ré.",
          "Result: 6.6 °N equals exactly 16.0 °Ré."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (33 °N)",
        subtitle: "Convert the boiling point of pure water to Réaumur.",
        steps: [
          "Identify temperature: 33 °N.",
          "Multiply: 33 × (80 / 33) = 80 °Ré.",
          "Result: 33 °N equals exactly 80 °Ré."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Réaumur Conversion Table",
    headers: ["Newton (°N)", "Réaumur (°Ré)", "Physical Landmark"],
    rows: [
      { fromVal: "-90.14 °N", toVal: "-218.52 °Ré", extra: "Absolute zero (0 K / -273.15 °C)" },
      { fromVal: "-33.00 °N", toVal: "-80.00 °Ré", extra: "Cryogenic research cold (-100 °C)" },
      { fromVal: "-16.50 °N", toVal: "-40.00 °Ré", extra: "Extreme Siberian winter cold (-50 °C)" },
      { fromVal: "-6.60 °N", toVal: "-16.00 °Ré", extra: "Commercial freezer temperature (-20 °C)" },
      { fromVal: "0.00 °N", toVal: "0.00 °Ré", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "3.30 °N", toVal: "8.00 °Ré", extra: "Chilly spring morning (10 °C / 50 °F)" },
      { fromVal: "6.60 °N", toVal: "16.00 °Ré", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "8.25 °N", toVal: "20.00 °Ré", extra: "Comfortable warm room (25 °C / 77 °F)" },
      { fromVal: "12.00 °N", toVal: "29.09 °Ré", extra: "Newton's human body heat benchmark (~36.4 °C)" },
      { fromVal: "16.50 °N", toVal: "40.00 °Ré", extra: "Hot bath / desert temperature (50 °C)" },
      { fromVal: "24.75 °N", toVal: "60.00 °Ré", extra: "Milk pasteurization heat (75 °C)" },
      { fromVal: "33.00 °N", toVal: "80.00 °Ré", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of Newton to Réaumur Conversions",
    items: [
      {
        title: "History of Enlightenment Physics & Metrology",
        text: "Historians studying correspondence between British and French scientific academies compare experimental data on thermal conductivity and metallurgy recorded in °N and °Ré."
      },
      {
        title: "Educational Metrology & Ratio Transformations",
        text: "Physics curricula use the Newton-to-Réaumur conversion to teach scale proportionality where zero baselines coincide, eliminating the need for affine offsets."
      },
      {
        title: "Antique Instrument Calibration Verification",
        text: "Museum curators evaluate vintage 18th-century European glass thermoscopes engraved with dual English Newton and continental Réaumur divisions."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Adding an offset to the calculation; because both scales define 0 as the freezing point of water, no additive offset is required.",
      "Inverting the conversion factor (using 33/80 = 0.4125 instead of 80/33 ≈ 2.424242).",
      "Confusing the Newton temperature scale (°N) with the SI unit of force, the newton (N)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees Newton to Réaumur?",
      answer: "Multiply the temperature in degrees Newton by 80/33 (or approximately 2.424242): °Ré = °N × (80 / 33)."
    },
    {
      question: "Why do Newton and Réaumur share the exact same zero point?",
      answer: "Both Sir Isaac Newton (1701) and René Antoine de Réaumur (1730) independently selected the melting point of ice / freezing point of pure water as their stable lower reference milestone (0 °N = 0 °Ré)."
    },
    {
      question: "What is 33 °N in degrees Réaumur?",
      answer: "33 °N is the boiling point of pure water, which corresponds to exactly 80.0 °Ré."
    },
    {
      question: "What is room temperature (6.6 °N) in degrees Réaumur?",
      answer: "6.6 °N equals exactly 16.0 °Ré ((6.6 × 80) / 33 = 528 / 33 = 16.0)."
    },
    {
      question: "What was Newton's body temperature benchmark in Réaumur?",
      answer: "Newton calibrated human body heat at roughly 12 °N, which converts to approximately 29.09 °Ré (equivalent to ~36.36 °C)."
    },
    {
      question: "How do you convert degrees Réaumur back to Newton?",
      answer: "Multiply the Réaumur temperature by 33/80 (or 0.4125): °N = °Ré × 0.4125. For example, 80 °Ré × 0.4125 = 33 °N."
    },
    {
      question: "What is absolute zero in degrees Newton and Réaumur?",
      answer: "Absolute zero (0 K / -273.15 °C) corresponds to approximately -90.14 °N and -218.52 °Ré."
    },
    {
      question: "Is degrees Newton related to the SI newton of force?",
      answer: "No. The degree Newton (°N) measures temperature on a scale devised by Sir Isaac Newton in 1701, whereas the newton (N) is the modern SI coherent unit of force (1 N = 1 kg·m/s²)."
    }
  ],
  relatedList: [
    { label: "Réaumur to Newton", from: "reaumur", to: "newton" },
    { label: "Newton to Celsius", from: "newton", to: "celsius" },
    { label: "Newton to Fahrenheit", from: "newton", to: "fahrenheit" }
  ],
  references: [
    "Isaac Newton - Scala graduum Caloris (Philosophical Transactions of the Royal Society, 1701)",
    "René-Antoine Ferchault de Réaumur - Mémoires de l'Académie Royale des Sciences (1730)",
    "W. E. Knowles Middleton - A History of the Thermometer and Its Uses in Meteorology"
  ]
};
