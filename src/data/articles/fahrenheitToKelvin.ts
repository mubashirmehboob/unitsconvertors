import { CustomArticleData } from "./types";

export const fahrenheitToKelvin: CustomArticleData = {
  fromUnitId: "fahrenheit",
  toUnitId: "kelvin",
  seoTitle: "Fahrenheit to Kelvin Converter (°F to K)",
  metaDescription: "Convert Fahrenheit to Kelvin (°F to K) accurately. Learn the thermodynamic formula, step-by-step examples, calculation methods, and reference tables.",
  h1: "Fahrenheit to Kelvin Converter",
  introduction: [
    "The Fahrenheit scale and the Kelvin scale represent two widely used temperature systems from different contexts. Fahrenheit is a customary temperature scale widely used in the United States, whereas Kelvin is the absolute thermodynamic base unit of the International System of Units (SI).",
    "Because Fahrenheit and Kelvin differ in both their zero point baseline (32 °F for water freezing vs 273.15 K) and their degree interval magnitude (1 K = 1.8 °F), converting Fahrenheit to Kelvin requires subtracting 32, dividing by 1.8, and adding 273.15. This guide explains the exact formula, step-by-step calculations, and scientific reference data."
  ],
  quickAnswer: {
    text: "To convert Fahrenheit to Kelvin, subtract 32 from the Fahrenheit temperature, divide by 1.8, and then add 273.15. For example, 32 °F converts to 273.15 K.",
    formulaDisplay: "K = ((°F - 32) / 1.8) + 273.15",
    subtext: "0 K represents absolute zero (-459.67 °F)."
  },
  aboutSourceUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Developed by Daniel Gabriel Fahrenheit in 1724, this scale sets 32 °F at the freezing point of water and 212 °F at the boiling point at 1 atmosphere of pressure. It is primarily used in consumer, meteorological, and medical applications in the United States."
  },
  aboutTargetUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Formulated by William Thomson (Lord Kelvin) in 1848, the Kelvin scale is the primary unit of temperature in physical chemistry, thermodynamics, and astrophysics. It sets 0 K at absolute zero, the state where particles possess minimal thermodynamic kinetic energy."
  },
  relationship: "Converting Fahrenheit to Kelvin first transforms Fahrenheit to Celsius (by subtracting 32 and dividing by 1.8) and then converts Celsius to Kelvin (by adding 273.15).",
  relationshipTitle: "Fahrenheit vs Kelvin Thermal Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-459.67 °F = 0 K" },
    { label: "Water Freezing Point", value: "32 °F = 273.15 K" },
    { label: "Room Temperature", value: "68 °F = 293.15 K" },
    { label: "Water Boiling Point", value: "212 °F = 373.15 K" }
  ],
  formula: {
    text: "Subtract 32 from Fahrenheit, divide by 1.8 to convert to Celsius degrees, then add 273.15.",
    math: "K = ((°F - 32) / 1.8) + 273.15",
    subtext: "Equivalently, K = ((°F - 32) × 5/9) + 273.15."
  },
  formulaTitle: "Fahrenheit to Kelvin Formula",
  practicalTip: {
    title: "Two-Step Calculation Method",
    text: "Break the calculation into two simple steps: 1) Convert °F to °C by calculating (°F - 32) / 1.8. 2) Add 273.15 to the result."
  },
  expertNote: {
    title: "The Rankine Bridge",
    text: "An alternative shortcut uses the Rankine scale: add 459.67 to Fahrenheit to get Rankine, then divide Rankine by 1.8 to obtain Kelvin [K = (°F + 459.67) / 1.8]."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Freezing Water (32 °F)",
        subtitle: "Convert the freezing temperature of water (32 °F) to Kelvin.",
        steps: [
          "Start with 32 °F.",
          "Subtract 32: 32 - 32 = 0.",
          "Divide by 1.8: 0 / 1.8 = 0.",
          "Add 273.15: 0 + 273.15 = 273.15.",
          "Result: 32 °F is equal to 273.15 K."
        ]
      },
      {
        title: "Example 2: Room Temperature (68 °F)",
        subtitle: "Convert standard room temperature of 68 °F to Kelvin.",
        steps: [
          "Start with 68 °F.",
          "Subtract 32: 68 - 32 = 36.",
          "Divide by 1.8: 36 / 1.8 = 20.",
          "Add 273.15: 20 + 273.15 = 293.15.",
          "Result: 68 °F equals 293.15 K."
        ]
      }
    ]
  },
  table: {
    title: "Fahrenheit to Kelvin Reference Table",
    headers: ["Fahrenheit (°F)", "Kelvin (K)", "Scientific Benchmark"],
    rows: [
      { fromVal: "-459.67 °F", toVal: "0 K", extra: "Absolute zero" },
      { fromVal: "-320.44 °F", toVal: "77.36 K", extra: "Boiling point of liquid nitrogen" },
      { fromVal: "-40 °F", toVal: "233.15 K", extra: "Intersection point of °F and °C" },
      { fromVal: "0 °F", toVal: "255.37 K", extra: "Fahrenheit's zero brine baseline" },
      { fromVal: "32 °F", toVal: "273.15 K", extra: "Freezing point of pure water" },
      { fromVal: "68 °F", toVal: "293.15 K", extra: "Standard room temperature" },
      { fromVal: "77 °F", toVal: "298.15 K", extra: "Laboratory standard ambient" },
      { fromVal: "98.6 °F", toVal: "310.15 K", extra: "Human body temperature" },
      { fromVal: "212 °F", toVal: "373.15 K", extra: "Boiling point of water at 1 atm" }
    ]
  },
  applications: {
    title: "Scientific Applications of °F to K",
    items: [
      {
        title: "Aerospace & Engineering Research",
        text: "Engineers working with American Imperial engineering data convert temperature inputs into Kelvin for SI thermodynamic modeling."
      },
      {
        title: "Atmospheric & Environmental Science",
        text: "US weather station temperature records in Fahrenheit are converted to Kelvin for global climate simulation models."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting to subtract 32 before dividing by 1.8.",
      "Including a degree symbol with Kelvin (write 293.15 K, not 293.15 °K).",
      "Confusing Kelvin with Rankine (Rankine uses Fahrenheit degree sizes, whereas Kelvin uses Celsius degree sizes)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Fahrenheit to Kelvin?",
      answer: "Subtract 32 from Fahrenheit, divide by 1.8, and add 273.15."
    },
    {
      question: "What is 32 °F in Kelvin?",
      answer: "32 °F is equal to 273.15 K."
    },
    {
      question: "What is 0 °F in Kelvin?",
      answer: "0 °F is equal to approximately 255.37 K."
    },
    {
      question: "What is 212 °F in Kelvin?",
      answer: "212 °F is equal to 373.15 K."
    },
    {
      question: "Is there an easier way to convert °F to K using Rankine?",
      answer: "Yes: add 459.67 to the Fahrenheit temperature to get Rankine, then divide by 1.8 to get Kelvin."
    }
  ],
  relatedList: [
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" },
    { label: "Fahrenheit to Rankine", from: "fahrenheit", to: "rankine" },
    { label: "Celsius to Kelvin", from: "celsius", to: "kelvin" }
  ],
  references: [
    "BIPM - The International System of Units (SI) Guide",
    "NIST Thermodynamic Standards"
  ]
};
