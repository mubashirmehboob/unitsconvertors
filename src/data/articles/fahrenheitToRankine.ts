import { CustomArticleData } from "./types";

export const fahrenheitToRankine: CustomArticleData = {
  fromUnitId: "fahrenheit",
  toUnitId: "rankine",
  seoTitle: "Fahrenheit to Rankine Converter (°F to °R)",
  metaDescription: "Convert Fahrenheit to Rankine (°F to °R) instantly. Learn the direct +459.67 thermodynamic formula, step-by-step examples, and engineering applications.",
  h1: "Fahrenheit to Rankine Converter",
  introduction: [
    "The Fahrenheit scale and the Rankine scale share a direct structural relationship in engineering thermodynamics. While Fahrenheit is a relative temperature scale setting water freezing at 32 °F, Rankine is an absolute thermodynamic temperature scale setting its zero point at absolute zero (-459.67 °F).",
    "Because both scales use identical degree increments (1 °F = 1 °R), converting Fahrenheit to Rankine requires no scaling multiplication—only adding a constant offset of 459.67. This guide provides the formula, calculation steps, and practical engineering reference tables."
  ],
  quickAnswer: {
    text: "To convert Fahrenheit to Rankine, add 459.67 to the Fahrenheit temperature. For example, 32 °F converts to 491.67 °R.",
    formulaDisplay: "°R = °F + 459.67",
    subtext: "0 °R corresponds to absolute zero (-459.67 °F)."
  },
  aboutSourceUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Formulated in 1724 by Daniel Gabriel Fahrenheit, this scale defines 32 °F as the freezing point of water and 212 °F as its boiling point. It is widely used in consumer, commercial, and engineering applications across the United States."
  },
  aboutTargetUnit: {
    title: "Understanding the Rankine Scale (°R)",
    text: "Proposed in 1859 by Scottish engineer William John Macquorn Rankine, the Rankine scale is an absolute thermodynamic scale. Like Kelvin, 0 °R represents absolute zero; however, 1 degree Rankine is defined as equal in size to 1 degree Fahrenheit."
  },
  relationship: "Degree intervals on both scales are identical in size: a temperature change of 1 °F equals a change of 1 °R. The Rankine scale is offset from Fahrenheit by 459.67 units, placing absolute zero at 0 °R (-459.67 °F).",
  relationshipTitle: "Fahrenheit vs Rankine Thermal Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-459.67 °F = 0 °R" },
    { label: "Zero Fahrenheit Baseline", value: "0 °F = 459.67 °R" },
    { label: "Water Freezing Point", value: "32 °F = 491.67 °R" },
    { label: "Water Boiling Point", value: "212 °F = 671.67 °R" }
  ],
  formula: {
    text: "Add 459.67 to the Fahrenheit reading to shift the zero reference from 0 °F to absolute zero.",
    math: "°R = °F + 459.67",
    subtext: "To convert in reverse (°R to °F), subtract 459.67."
  },
  formulaTitle: "Fahrenheit to Rankine Formula",
  practicalTip: {
    title: "Quick Mental Addition",
    text: "Because 1 °F interval equals 1 °R interval, converting temperature differences requires no calculation at all (e.g., a temperature rise of 15 °F equals a rise of 15 °R)."
  },
  expertNote: {
    title: "US Imperial Thermodynamics Standard",
    text: "Rankine is the default absolute temperature scale utilized in US chemical engineering, HVAC load calculations, heat transfer textbooks, and aerospace gas dynamics."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (32 °F)",
        subtitle: "Convert the freezing temperature of water (32 °F) to Rankine.",
        steps: [
          "Start with the Fahrenheit value: 32 °F.",
          "Apply the formula: °R = °F + 459.67.",
          "Calculate: 32 + 459.67 = 491.67.",
          "Result: 32 °F is equal to 491.67 °R."
        ]
      },
      {
        title: "Example 2: Room Temperature (68 °F)",
        subtitle: "Convert standard room temperature of 68 °F to Rankine.",
        steps: [
          "Start with 68 °F.",
          "Add 459.67: 68 + 459.67 = 527.67.",
          "Result: 68 °F corresponds to 527.67 °R."
        ]
      }
    ]
  },
  table: {
    title: "Fahrenheit to Rankine Reference Table",
    headers: ["Fahrenheit (°F)", "Rankine (°R)", "Engineering Benchmark"],
    rows: [
      { fromVal: "-459.67 °F", toVal: "0 °R", extra: "Absolute zero" },
      { fromVal: "-40 °F", toVal: "419.67 °R", extra: "Common °F/°C intersection point" },
      { fromVal: "0 °F", toVal: "459.67 °R", extra: "Fahrenheit zero baseline" },
      { fromVal: "32 °F", toVal: "491.67 °R", extra: "Freezing point of pure water" },
      { fromVal: "50 °F", toVal: "509.67 °R", extra: "Cool ambient condition" },
      { fromVal: "68 °F", toVal: "527.67 °R", extra: "Standard room temperature" },
      { fromVal: "77 °F", toVal: "536.67 °R", extra: "Laboratory standard ambient" },
      { fromVal: "98.6 °F", toVal: "558.27 °R", extra: "Normal human body temperature" },
      { fromVal: "212 °F", toVal: "671.67 °R", extra: "Boiling point of water at 1 atm" }
    ]
  },
  applications: {
    title: "Engineering Applications of °F to °R",
    items: [
      {
        title: "Mechanical & Chemical Engineering",
        text: "Rankine is used in ideal gas equations and enthalpy calculations when working with US Customary units (BTU, lbf, ft³)."
      },
      {
        title: "Refrigeration & Power Plants",
        text: "Rankine absolute temperatures prevent negative values in thermodynamic efficiency calculations (Carnot cycle) in American power station designs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1.8: Scaling is unnecessary because Fahrenheit and Rankine degrees are identical in size.",
      "Subtracting 459.67 instead of adding when converting from °F to °R."
    ]
  },
  faqs: [
    {
      question: "How do you convert Fahrenheit to Rankine?",
      answer: "Add 459.67 to the Fahrenheit temperature."
    },
    {
      question: "What is 0 °F in Rankine?",
      answer: "0 °F is equal to 459.67 °R."
    },
    {
      question: "What is 32 °F in Rankine?",
      answer: "32 °F is equal to 491.67 °R."
    },
    {
      question: "What is 212 °F in Rankine?",
      answer: "212 °F is equal to 671.67 °R."
    },
    {
      question: "Is 1 degree Fahrenheit equal to 1 degree Rankine in size?",
      answer: "Yes, both scales use identical degree intervals."
    }
  ],
  relatedList: [
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" },
    { label: "Fahrenheit to Kelvin", from: "fahrenheit", to: "kelvin" },
    { label: "Celsius to Rankine", from: "celsius", to: "rankine" }
  ],
  references: [
    "ASME Steam Tables & Thermodynamic Properties",
    "NIST Guide for Customary Unit Conversions"
  ]
};
