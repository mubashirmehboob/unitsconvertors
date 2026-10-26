import { CustomArticleData } from "./types";

export const reaumurToRomer: CustomArticleData = {
  fromUnitId: "reaumur",
  toUnitId: "romer",
  seoTitle: "Réaumur to Rømer (Re to Ro) Temperature Converter",
  metaDescription: "Convert Réaumur to Rømer (°Ré to °Rø) accurately. Learn the exact formula °Rø = (°Ré × 21/32) + 7.5, Ole Rømer's 1701 scale, and tables.",
  h1: "Réaumur to Rømer Converter",
  introduction: [
    "Converting temperature between the Réaumur scale and the Rømer scale explores two foundational milestones in early 18th-century European thermometry. Devised by Danish astronomer Ole Christensen Rømer in 1701 and French naturalist René Antoine Ferchault de Réaumur in 1730, both systems established systematic physical reference points that directly influenced Daniel Gabriel Fahrenheit and Anders Celsius.",
    "On the Rømer scale, pure water freezes at 7.5 °Rø and boils at 60 °Rø, creating an interval of 52.5 degrees. On the Réaumur scale, pure water freezes at 0 °Ré and boils at 80 °Ré, an interval of 80 degrees. The ratio between these two spans simplifies to an exact irreducible fraction: 52.5 / 80 = 21/32 (or 0.65625). Accounting for the 7.5-degree freezing offset produces the exact conversion formula: <strong>°Rø = (°Ré × 21/32) + 7.5</strong>. This guide explains the historical calibration, step-by-step calculations, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Réaumur to Rømer, multiply the temperature in Réaumur by 21/32 (or 0.65625) and then add 7.5. For example, 0 °Ré equals 7.5 °Rø, and 80 °Ré equals 60 °Rø.",
    formulaDisplay: "°Rø = (°Ré × 21/32) + 7.5 = (°Ré × 0.65625) + 7.5",
    subtext: "Combines the 21/32 degree step ratio (52.5 / 80) with Rømer's water-freezing baseline offset of 7.5 °Rø."
  },
  aboutSourceUnit: {
    title: "Understanding the Réaumur Scale (°Ré)",
    text: "The Réaumur scale (°Ré or °Re) was introduced in 1730 by René Antoine Ferchault de Réaumur. Defined with 0 °Ré as the freezing point of water and 80 °Ré as the boiling point of water, it was constructed based on the 8% volumetric thermal expansion of diluted alcohol in glass."
  },
  aboutTargetUnit: {
    title: "Understanding the Rømer Scale (°Rø)",
    text: "Proposed in 1701 by Danish astronomer Ole Christensen Rømer (who famously first measured the speed of light in 1676), the Rømer scale (°Rø or °Ro) was one of the world's very first calibrated practical temperature scales. Rømer calibrated 0 °Rø using freezing ammonium chloride brine, 7.5 °Rø at the freezing point of pure water, and 60 °Rø at the boiling point of pure water."
  },
  relationship: "Water freezes at 0 °Ré and 7.5 °Rø. Water boils at 80 °Ré and 60 °Rø. The temperature interval between freezing and boiling is 80 degrees on the Réaumur scale and 52.5 degrees on the Rømer scale. Therefore, 1 °Ré = 52.5 / 80 °Rø = 21/32 °Rø = 0.65625 °Rø. Adding Rømer's baseline of 7.5 °Rø reconciles the starting zero offset.",
  relationshipTitle: "Degree Ratio and Freezing Offset",
  relationshipItems: [
    { label: "0 °Ré", value: "7.5 °Rø (Water freezing point at 1 atm)" },
    { label: "16 °Ré", value: "18.0 °Rø (Standard room temperature 20 °C)" },
    { label: "29.6 °Ré", value: "26.925 °Rø (Human body temperature ~27 °Rø)" },
    { label: "80 °Ré", value: "60.0 °Rø (Water boiling point at 1 atm)" },
    { label: "-218.52 °Ré", value: "-135.90 °Rø (Absolute zero)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Réaumur by 21/32 (or 0.65625) and add 7.5 to calculate the temperature in degrees Rømer.",
    math: "°Rø = (°Ré × 0.65625) + 7.5",
    subtext: "To convert degrees Rømer back to Réaumur, subtract 7.5 first, then multiply by 32/21 (approx. 1.52381): °Ré = (°Rø - 7.5) × (32 / 21)."
  },
  formulaTitle: "Réaumur to Rømer Formula",
  practicalTip: {
    title: "Two-Step Arithmetic Rule",
    text: "To convert manually, multiply the Réaumur reading by 21, divide by 32, and then add 7.5. For 16 °Ré: (16 × 21) / 32 = 336 / 32 = 10.5; 10.5 + 7.5 = 18 °Rø."
  },
  expertNote: {
    title: "Fahrenheit's Debt to Rømer",
    text: "In 1708, Daniel Gabriel Fahrenheit visited Rømer in Copenhagen. Fahrenheit adopted Rømer's reference points (freezing brine and body temperature) but multiplied the scale divisions by 4 to eliminate fractions and increase resolution, transforming Rømer's 7.5 into 30 (later refined to 32 °F) and 22.5 into 90 (later 96/98.6 °F)."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °Ré)",
        subtitle: "Convert the freezing point of water from Réaumur to Rømer.",
        steps: [
          "Identify temperature: 0 °Ré.",
          "Apply formula: °Rø = (0 × 0.65625) + 7.5.",
          "Calculate: 0 + 7.5 = 7.5 °Rø.",
          "Result: 0 °Ré equals exactly 7.5 °Rø."
        ]
      },
      {
        title: "Example 2: Standard Room Temperature (16 °Ré)",
        subtitle: "Convert 16 °Ré (20 °C) into degrees Rømer.",
        steps: [
          "Identify temperature: 16 °Ré.",
          "Multiply: 16 × 0.65625 = 10.5.",
          "Add 7.5: 10.5 + 7.5 = 18.0 °Rø.",
          "Result: 16 °Ré equals exactly 18.0 °Rø."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (80 °Ré)",
        subtitle: "Convert the boiling point of pure water to Rømer.",
        steps: [
          "Identify temperature: 80 °Ré.",
          "Multiply: 80 × 0.65625 = 52.5.",
          "Add 7.5: 52.5 + 7.5 = 60.0 °Rø.",
          "Result: 80 °Ré equals exactly 60.0 °Rø."
        ]
      }
    ]
  },
  table: {
    title: "Réaumur to Rømer Conversion Table",
    headers: ["Réaumur (°Ré)", "Rømer (°Rø)", "Physical Landmark"],
    rows: [
      { fromVal: "-218.52 °Ré", toVal: "-135.90 °Rø", extra: "Absolute zero (0 K)" },
      { fromVal: "-80.00 °Ré", toVal: "-45.00 °Rø", extra: "Cryogenic liquefied gas (-100 °C)" },
      { fromVal: "-40.00 °Ré", toVal: "-18.75 °Rø", extra: "Extreme polar cold (-50 °C)" },
      { fromVal: "-16.00 °Ré", toVal: "-3.00 °Rø", extra: "Commercial freezer temperature (-20 °C)" },
      { fromVal: "0.00 °Ré", toVal: "7.50 °Rø", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "8.00 °Ré", toVal: "12.75 °Rø", extra: "Chilly spring morning (10 °C / 50 °F)" },
      { fromVal: "16.00 °Ré", toVal: "18.00 °Rø", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "20.00 °Ré", toVal: "20.63 °Rø", extra: "Comfortable warm indoor (25 °C / 77 °F)" },
      { fromVal: "29.60 °Ré", toVal: "26.93 °Rø", extra: "Normal human core body temperature (37 °C)" },
      { fromVal: "40.00 °Ré", toVal: "33.75 °Rø", extra: "Hot bath / desert temperature (50 °C)" },
      { fromVal: "60.00 °Ré", toVal: "46.88 °Rø", extra: "Milk pasteurization heating (75 °C)" },
      { fromVal: "80.00 °Ré", toVal: "60.00 °Rø", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of Réaumur to Rømer Conversions",
    items: [
      {
        title: "Early Modern Scientific Correspondence",
        text: "Historians analyzing scientific letters between Danish astronomers and French Royal Academy scholars convert temperature readings to reconstruct early meteorological networks."
      },
      {
        title: "History of Scandinavian Weather Observations",
        text: "Researchers studying historical Scandinavian climatic records from Copenhagen and Tycho Brahe's observatories translate legacy Rømer logs into Réaumur and Celsius."
      },
      {
        title: "Educational Metrology & Thermometric Evolution",
        text: "Metrology courses use the Rømer-to-Réaumur conversion to demonstrate how 18th-century scientists experimented with differing zero points and degree subdividings before standardizing on decimal systems."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting to add 7.5; multiplying by 21/32 without adding 7.5 yields an answer that is offset by 7.5 °Rø.",
      "Confusing Rømer (°Rø / °Ro, 7.5 to 60 span) with Réaumur (°Ré / °Re, 0 to 80 span) or Rankine (°R, 491.67 to 671.67 span).",
      "Using the 15/8 ratio belonging to Delisle rather than the 21/32 ratio belonging to Rømer."
    ]
  },
  faqs: [
    {
      question: "How do you convert Réaumur to Rømer?",
      answer: "Multiply the temperature in Réaumur by 21/32 (or 0.65625) and then add 7.5: °Rø = (°Ré × 0.65625) + 7.5."
    },
    {
      question: "What is 0 °Ré in degrees Rømer?",
      answer: "0 °Ré is the freezing point of water, which corresponds to exactly 7.5 °Rø."
    },
    {
      question: "What is 80 °Ré in degrees Rømer?",
      answer: "80 °Ré is the boiling point of water, which corresponds to exactly 60.0 °Rø."
    },
    {
      question: "Why does water freeze at 7.5 degrees Rømer?",
      answer: "Ole Rømer wanted his thermometer to never read negative numbers in cold Danish winters, so he set 0 °Rø at the freezing point of an ammonium chloride salt brine mixture. On this scale, pure fresh water froze at 7.5 °Rø."
    },
    {
      question: "What is room temperature (16 °Ré) in degrees Rømer?",
      answer: "16 °Ré (20 °C) equals exactly 18.0 °Rø ((16 × 0.65625) + 7.5)."
    },
    {
      question: "What was Rømer's value for human body temperature?",
      answer: "Rømer calibrated human body temperature at 22.5 °Rø (later refined by Fahrenheit to roughly 26.9 °Rø, corresponding to 98.6 °F or 37 °C)."
    },
    {
      question: "How do you convert degrees Rømer back to Réaumur?",
      answer: "Subtract 7.5 from the Rømer temperature and multiply by 32/21 (approx. 1.52381): °Ré = (°Rø - 7.5) × (32 / 21)."
    },
    {
      question: "What is absolute zero in degrees Rømer?",
      answer: "Absolute zero (0 K / -273.15 °C) corresponds to approximately -135.90 °Rø."
    }
  ],
  relatedList: [
    { label: "Rømer to Réaumur", from: "romer", to: "reaumur" },
    { label: "Réaumur to Celsius", from: "reaumur", to: "celsius" },
    { label: "Rømer to Celsius", from: "romer", to: "celsius" }
  ],
  references: [
    "Ole Rømer - Adversaria (1701-1710), published by the Royal Danish Academy",
    "René-Antoine Ferchault de Réaumur - Règle pour dresser des thermomètres (1730)",
    "Kirstine Meyer - Ole Rømers Opdagelse af Lysets Tøven og Termometerets Historie"
  ]
};
