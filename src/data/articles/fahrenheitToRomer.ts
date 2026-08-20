import { CustomArticleData } from "./types";

export const fahrenheitToRomer: CustomArticleData = {
  fromUnitId: "fahrenheit",
  toUnitId: "romer",
  seoTitle: "Fahrenheit to Rømer Converter (°F to °Rø)",
  metaDescription: "Convert Fahrenheit to Rømer (°F to °Rø) with historical and mathematical accuracy. Learn how Ole Rømer's 1701 scale inspired Fahrenheit, with step-by-step formulas.",
  h1: "Fahrenheit to Rømer Converter",
  introduction: [
    "Converting Fahrenheit to Rømer (°F to °Rø) explores one of the most direct historical lineages in the development of temperature measurement. In 1708, Daniel Gabriel Fahrenheit visited Danish astronomer Ole Christensen Rømer in Copenhagen and adopted Rømer's innovative calibration methodology as the foundational blueprint for the Fahrenheit scale.",
    "On the Fahrenheit scale, pure water freezes at 32 °F and boils at 212 °F (a 180-degree interval). On Rømer's original scale, water freezes at 7.5 °Rø and boils at 60 °Rø (a 52.5-degree interval). Converting from °F to °Rø involves subtracting the 32-degree Fahrenheit freezing offset, multiplying by the scaling ratio 7/24 (0.291667), and adding Rømer's 7.5 °Rø freezing offset. This article provides the complete derivation, practical calculations, comparative charts, and historical background."
  ],
  quickAnswer: {
    text: "To convert Fahrenheit to Rømer, subtract 32 from the Fahrenheit temperature, multiply by 7/24 (or 0.29167), and add 7.5. For example, 68 °F converts to 18 °Rø.",
    formulaDisplay: "°Rø = (°F - 32) × (7 / 24) + 7.5",
    subtext: "Water freezes at 32 °F (7.5 °Rø) and boils at 212 °F (60 °Rø) under standard atmospheric conditions."
  },
  aboutSourceUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Engineered in 1724 by Daniel Gabriel Fahrenheit, this scale revolutionized thermometry by employing purified mercury inside precision glass capillary tubes. With key calibration points at 32 °F (ice-water equilibrium), 98.6 °F (body temperature), and 212 °F (steam point), the Fahrenheit system remains the primary everyday temperature standard across the United States."
  },
  aboutTargetUnit: {
    title: "Understanding the Rømer Scale (°Rø)",
    text: "Created in 1701 by Danish astronomer Ole Christensen Rømer (who also famously made the first quantitative measurement of the speed of light), the Rømer scale used red wine as its thermometric fluid. Rømer defined 0 °Rø using an ammonium chloride ice-brine mixture, set water's freezing point at 7.5 °Rø (one-eighth of the boiling point), and set water's boiling point at 60 °Rø."
  },
  relationship: "The Fahrenheit scale has 180 degrees between the freezing and boiling points of pure water (212 - 32 = 180), whereas the Rømer scale defines that exact physical range as 52.5 degrees (60 - 7.5 = 52.5). The ratio of 52.5 to 180 simplifies to 7/24 (0.291666...). Because Rømer places the freezing point of water at 7.5 °Rø rather than zero, the conversion requires adding 7.5 after multiplying by 7/24.",
  relationshipTitle: "Fahrenheit vs Rømer Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-459.67 °F = -135.90 °Rø" },
    { label: "Water Freezing Point", value: "32 °F = 7.50 °Rø" },
    { label: "Room Temperature (68 °F)", value: "68 °F = 18.00 °Rø" },
    { label: "Normal Body Temperature", value: "98.6 °F = 26.93 °Rø" },
    { label: "Water Boiling Point", value: "212 °F = 60.00 °Rø" }
  ],
  formula: {
    text: "Subtract 32 from the Fahrenheit temperature, multiply by 7/24 (52.5 / 180), and add 7.5 to align with Rømer's freezing baseline.",
    math: "°Rø = (°F - 32) × (7 / 24) + 7.5",
    subtext: "Expressed via Celsius intermediate: °Rø = (°C × 21 / 40) + 7.5, where °C = (°F - 32) / 1.8"
  },
  formulaTitle: "Fahrenheit to Rømer Conversion Formula",
  practicalTip: {
    title: "How Fahrenheit Derived His Scale from Rømer",
    text: "When Fahrenheit visited Rømer in 1708, he disliked fractions and multiplied Rømer's numbers by 4 (turning 7.5 into 30, and 60 into 240). Later, Fahrenheit recalibrated his scale to give exactly 64 degrees between ice melting (32) and body heat (96), which placed boiling water at 212."
  },
  expertNote: {
    title: "Mathematical Intersection Point",
    text: "Fahrenheit and Rømer scales intersect at approximately -2.59° (meaning -2.59 °F = -2.59 °Rø), derived algebraically from F = (F - 32) × (7/24) + 7.5."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Room Temperature (68 °F)",
        subtitle: "Convert a standard room temperature of 68 °F to degrees Rømer.",
        steps: [
          "Start with the Fahrenheit temperature: 68 °F.",
          "Subtract 32: 68 - 32 = 36.",
          "Multiply by 7/24: 36 × (7 / 24) = 252 / 24 = 10.5.",
          "Add Rømer's 7.5 freezing offset: 10.5 + 7.5 = 18.0.",
          "Result: 68 °F is exactly 18 °Rø."
        ]
      },
      {
        title: "Example 2: Warm Summer Afternoon (86 °F)",
        subtitle: "Convert 86 °F into degrees Rømer.",
        steps: [
          "Identify the starting temperature: 86 °F.",
          "Subtract 32: 86 - 32 = 54.",
          "Multiply by 7/24: 54 × (7 / 24) = 378 / 24 = 15.75.",
          "Add 7.5: 15.75 + 7.5 = 23.25.",
          "Result: 86 °F corresponds exactly to 23.25 °Rø."
        ]
      },
      {
        title: "Example 3: Boiling Water (212 °F)",
        subtitle: "Verify the boiling point of pure water in degrees Rømer.",
        steps: [
          "Take the boiling point: 212 °F.",
          "Subtract 32: 212 - 32 = 180.",
          "Multiply by 7/24: 180 × 7 / 24 = 1260 / 24 = 52.5.",
          "Add 7.5: 52.5 + 7.5 = 60.0.",
          "Result: 212 °F equals exactly 60 °Rø."
        ]
      }
    ]
  },
  table: {
    title: "Fahrenheit to Rømer Reference Table",
    headers: ["Fahrenheit (°F)", "Rømer (°Rø)", "Thermal Milestone"],
    rows: [
      { fromVal: "-459.67 °F", toVal: "-135.90 °Rø", extra: "Absolute zero (thermodynamic lower bound)" },
      { fromVal: "-40.00 °F", toVal: "-13.50 °Rø", extra: "Mercury solidification benchmark" },
      { fromVal: "-2.59 °F", toVal: "-2.59 °Rø", extra: "Exact intersection of °F and °Rø" },
      { fromVal: "0.00 °F", toVal: "-1.83 °Rø", extra: "Fahrenheit original brine zero" },
      { fromVal: "32.00 °F", toVal: "7.50 °Rø", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "50.00 °F", toVal: "12.75 °Rø", extra: "Mild outdoor morning (10 °C)" },
      { fromVal: "68.00 °F", toVal: "18.00 °Rø", extra: "Standard room temperature (20 °C)" },
      { fromVal: "77.00 °F", toVal: "20.63 °Rø", extra: "Comfortable indoor temperature (25 °C)" },
      { fromVal: "86.00 °F", toVal: "23.25 °Rø", extra: "Warm summer day (30 °C)" },
      { fromVal: "98.60 °F", toVal: "26.93 °Rø", extra: "Human internal body temperature" },
      { fromVal: "122.00 °F", toVal: "33.75 °Rø", extra: "Hot desert climate (50 °C)" },
      { fromVal: "212.00 °F", toVal: "60.00 °Rø", extra: "Boiling point of pure water at 1 atm" }
    ]
  },
  applications: {
    title: "Historical Significance & Modern Scientific Value",
    items: [
      {
        title: "History of Science & Thermometry Genealogy",
        text: "Studying Rømer's thermometer provides critical insight into the direct lineage of early modern thermometry and the personal collaboration between Ole Rømer and Daniel Gabriel Fahrenheit."
      },
      {
        title: "Danish Astronomical & Meteorological Archives",
        text: "Eighteenth-century weather logs recorded at the Round Tower observatory in Copenhagen used Rømer's scale, requiring modern climatologists to convert entries to Fahrenheit and Celsius."
      },
      {
        title: "Educational Physics Laboratory Curricula",
        text: "Physics departments use two-point affine temperature transformations between Fahrenheit and Rømer to demonstrate linear calibration and non-zero baseline algebra."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting to add 7.5 at the end: Because water freezes at 7.5 °Rø rather than 0 °Rø, omitting the final addition produces incorrect negative or deflated values.",
      "Inverting the slope: Multiplying by 24/7 instead of 7/24 expands the temperature range rather than contracting it to Rømer's 52.5-degree span.",
      "Confusing Rømer (°Rø / °Ro) with Réaumur (°Ré) or Rankine (°R): Ensure the correct historical symbol and scale parameters are used."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Fahrenheit to Rømer?",
      answer: "The formula is °Rø = (°F - 32) × (7 / 24) + 7.5."
    },
    {
      question: "What is 32 °F in Rømer?",
      answer: "32 °F is exactly 7.5 °Rø, which is the freezing point of pure water on the Rømer scale."
    },
    {
      question: "What is 212 °F in Rømer?",
      answer: "212 °F is exactly 60 °Rø, the boiling point of pure water."
    },
    {
      question: "What is 68 °F in Rømer?",
      answer: "68 °F equals exactly 18 °Rø [(68 - 32) × 7/24 + 7.5 = 10.5 + 7.5 = 18]."
    },
    {
      question: "What is human body temperature in Rømer?",
      answer: "Normal body temperature (98.6 °F) is 26.93 °Rø [(98.6 - 32) × 7/24 + 7.5 = 19.425 + 7.5 = 26.925]."
    },
    {
      question: "How did Ole Rømer establish his temperature scale?",
      answer: "Ole Rømer built alcohol thermometers in 1701 with two calibration benchmarks: an ice-salt brine freezing point (0 °Rø) and boiling water (60 °Rø), which placed plain water freezing at 7.5 °Rø."
    },
    {
      question: "At what point do Fahrenheit and Rømer read the same number?",
      answer: "The Fahrenheit and Rømer scales intersect at approximately -2.59° (-2.59 °F = -2.59 °Rø)."
    },
    {
      question: "Did Fahrenheit copy Rømer's scale?",
      answer: "Daniel Gabriel Fahrenheit visited Rømer in 1708, adopted his calibration method, and multiplied Rømer's values by 4 before further subdividing degrees to eliminate fractions."
    }
  ],
  relatedList: [
    { label: "Rømer to Fahrenheit", from: "romer", to: "fahrenheit" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" },
    { label: "Fahrenheit to Newton", from: "fahrenheit", to: "newton" },
    { label: "Celsius to Rømer", from: "celsius", to: "romer" }
  ],
  references: [
    "Meyer, Kirstine (1910) - 'Ole Rømers Instrumenter og Opfindelser' (Ole Rømer's Instruments and Inventions)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "BIPM - Thermometric Scales & Measurement History"
  ]
};
