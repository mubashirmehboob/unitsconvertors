import { CustomArticleData } from "./types";

export const celsiusToRankine: CustomArticleData = {
  fromUnitId: "celsius",
  toUnitId: "rankine",
  seoTitle: "Celsius to Rankine Converter (°C to °R)",
  metaDescription: "Convert Celsius to Rankine (°C to °R) with accuracy. Learn the absolute thermodynamic formula, step-by-step examples, and engineering applications.",
  h1: "Celsius to Rankine Converter",
  introduction: [
    "The Celsius scale and the Rankine scale serve as essential temperature metrics across different regions and fields of engineering. While Celsius is the global metric standard for daily weather and general laboratory work, Rankine provides an absolute thermodynamic scale formatted in Fahrenheit-sized degree increments.",
    "Because Rankine sets its zero point at absolute zero (-273.15 °C) while utilizing degree intervals equal to Fahrenheit degrees, converting Celsius to Rankine requires both adding the absolute zero offset (273.15) and scaling by 1.8. This guide explains the exact formula, worked examples, and engineering context."
  ],
  quickAnswer: {
    text: "To convert Celsius to Rankine, add 273.15 to the Celsius temperature and then multiply the result by 1.8. For example, 0 °C converts to 491.67 °R.",
    formulaDisplay: "°R = (°C + 273.15) × 1.8",
    subtext: "0 °R represents absolute zero, which corresponds to -273.15 °C."
  },
  aboutSourceUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "The Celsius scale is defined by setting 0 °C at the freezing point of water and 100 °C at the boiling point under standard atmospheric pressure. It is used worldwide as the official temperature scale in science, industry, and daily life."
  },
  aboutTargetUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Proposed in 1859 by Scottish engineer William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic temperature scale. Like Kelvin, 0 °R represents absolute zero; however, 1 degree Rankine is defined as equal in magnitude to 1 degree Fahrenheit rather than 1 degree Celsius."
  },
  relationship: "Rankine combines absolute zero baseline anchoring with Fahrenheit degree sizing. Converting Celsius to Rankine first converts Celsius to Kelvin (by adding 273.15) and then scales Kelvin to Rankine by multiplying by 1.8.",
  relationshipTitle: "Celsius vs Rankine Thermal Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-273.15 °C = 0 °R" },
    { label: "Water Freezing Point", value: "0 °C = 491.67 °R" },
    { label: "Standard Room Temp", value: "20 °C = 527.67 °R" },
    { label: "Water Boiling Point", value: "100 °C = 671.67 °R" }
  ],
  formula: {
    text: "Add 273.15 to the Celsius reading to obtain Kelvin, then multiply by 1.8 to convert to Rankine degrees.",
    math: "°R = (°C + 273.15) × 1.8",
    subtext: "Equivalently, °R = (°C × 1.8) + 491.67."
  },
  formulaTitle: "Celsius to Rankine Formula",
  practicalTip: {
    title: "Direct Fahrenheit Shortcut",
    text: "If you already know the temperature in Fahrenheit, simply add 459.67 to get Rankine (°R = °F + 459.67)."
  },
  expertNote: {
    title: "Aerospace & Mechanical Engineering Use",
    text: "In US engineering domains (thermodynamics, gas turbine modeling, and combustion engineering), Rankine is preferred over Kelvin when calculations involve imperial units like BTUs, pounds, and feet."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °C)",
        subtitle: "Convert the freezing temperature of water (0 °C) to Rankine.",
        steps: [
          "Start with the Celsius value: 0 °C.",
          "Add 273.15 to reach Kelvin: 0 + 273.15 = 273.15 K.",
          "Multiply by 1.8: 273.15 × 1.8 = 491.67.",
          "Result: 0 °C is equal to 491.67 °R."
        ]
      },
      {
        title: "Example 2: Room Temperature (20 °C)",
        subtitle: "Convert standard indoor room temperature of 20 °C to Rankine.",
        steps: [
          "Start with 20 °C.",
          "Add 273.15: 20 + 273.15 = 293.15.",
          "Multiply by 1.8: 293.15 × 1.8 = 527.67.",
          "Result: 20 °C corresponds to 527.67 °R."
        ]
      }
    ]
  },
  table: {
    title: "Celsius to Rankine Reference Table",
    headers: ["Celsius (°C)", "Rankine (°R)", "Physical Benchmark"],
    rows: [
      { fromVal: "-273.15 °C", toVal: "0 °R", extra: "Absolute zero" },
      { fromVal: "-40 °C", toVal: "419.67 °R", extra: "Common °C/°F intersection point" },
      { fromVal: "-17.78 °C", toVal: "459.67 °R", extra: "0 °F benchmark" },
      { fromVal: "0 °C", toVal: "491.67 °R", extra: "Water freezing point" },
      { fromVal: "10 °C", toVal: "509.67 °R", extra: "Cool ambient condition" },
      { fromVal: "20 °C", toVal: "527.67 °R", extra: "Standard room temperature" },
      { fromVal: "25 °C", toVal: "536.67 °R", extra: "Laboratory standard ambient" },
      { fromVal: "37 °C", toVal: "558.27 °R", extra: "Human body temperature" },
      { fromVal: "100 °C", toVal: "671.67 °R", extra: "Water boiling point at 1 atm" }
    ]
  },
  applications: {
    title: "Engineering Applications of Celsius to Rankine",
    items: [
      {
        title: "Thermodynamic Heat Engines",
        text: "Engineers in North America analyze thermal efficiency in power generation cycles using Rankine to align with Imperial heat capacities (BTU/lb·°R)."
      },
      {
        title: "Aerodynamics & Propulsion Systems",
        text: "Jet engine fluid dynamics and high-speed combustion gas equations utilize Rankine absolute temperature inputs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.8 before adding 273.15: If using the addition first method, ensure parenthetical grouping before multiplying.",
      "Confusing Rankine with Réaumur: Rankine uses symbol °R or °Ra and is an absolute scale, whereas Réaumur uses °Ré.",
      "Forgetting that Rankine degree steps are smaller than Kelvin degree steps (1 K = 1.8 °R)."
    ]
  },
  faqs: [
    {
      question: "How do you convert Celsius to Rankine?",
      answer: "Add 273.15 to the Celsius temperature and multiply the total by 1.8."
    },
    {
      question: "What is 0 °C in Rankine?",
      answer: "0 °C is equal to 491.67 °R."
    },
    {
      question: "What is absolute zero in Rankine?",
      answer: "Absolute zero is 0 °R, which equals -273.15 °C."
    },
    {
      question: "What is 100 °C in Rankine?",
      answer: "100 °C is equal to 671.67 °R."
    },
    {
      question: "How is Rankine related to Kelvin?",
      answer: "Both are absolute thermodynamic scales starting at absolute zero, but 1 Kelvin equals 1.8 Rankine."
    },
    {
      question: "What is 20 °C in Rankine?",
      answer: "20 °C is equal to 527.67 °R."
    }
  ],
  relatedList: [
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" },
    { label: "Celsius to Kelvin", from: "celsius", to: "kelvin" },
    { label: "Fahrenheit to Rankine", from: "fahrenheit", to: "rankine" }
  ],
  references: [
    "ASME Thermal Physics & Engineering Standards",
    "NIST Guide for the Use of International Units"
  ]
};
