import { CustomArticleData } from "./types";

export const celsiusToKelvin: CustomArticleData = {
  fromUnitId: "celsius",
  toUnitId: "kelvin",
  seoTitle: "Celsius to Kelvin Converter (°C to K)",
  metaDescription: "Convert Celsius to Kelvin (°C to K) instantly. Learn the precise SI thermodynamic temperature formula (+273.15), step-by-step examples, and scientific reference data.",
  h1: "Celsius to Kelvin Converter",
  introduction: [
    "The Celsius scale and the Kelvin scale are fundamentally linked in modern physical science. Celsius provides a convenient everyday scale based on the physical behavior of water, while Kelvin serves as the official base unit of thermodynamic temperature in the International System of Units (SI).",
    "Because both scales share identical degree interval sizes, converting Celsius to Kelvin requires no scale multiplication—only a constant baseline shift of 273.15 units. This guide details the thermodynamic conversion formula, step-by-step calculations, and essential scientific reference benchmarks."
  ],
  quickAnswer: {
    text: "To convert Celsius to Kelvin, add 273.15 to the Celsius temperature. For example, 25 °C equals 298.15 K.",
    formulaDisplay: "K = °C + 273.15",
    subtext: "Because one degree Celsius equals exactly one Kelvin in interval size, the conversion is a simple additive shift."
  },
  aboutSourceUnit: {
    title: "Understanding the Celsius Scale (°C)",
    text: "The Celsius scale anchors its baseline to water's freezing point (0 °C) and boiling point (100 °C) at 1 standard atmosphere. It is the international standard for meteorological forecasts, chemical labs, and general public temperature reporting in nearly every country."
  },
  aboutTargetUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Named after Lord Kelvin (William Thomson), the Kelvin scale is the primary unit of temperature measurement in physical science and thermodynamics. Zero Kelvin (0 K) represents absolute zero, the theoretical point at which all classical atomic kinetic motion ceases. Notice that the Kelvin unit is written without a degree symbol (°)."
  },
  relationship: "The degree intervals on both scales are identical: a temperature increase of 1 °C is identical to an increase of 1 K. The Kelvin scale is offset from Celsius by 273.15 units, placing absolute zero at -273.15 °C.",
  relationshipTitle: "Celsius vs Kelvin Thermodynamic Relationship",
  relationshipItems: [
    { label: "Absolute Zero", value: "-273.15 °C = 0 K" },
    { label: "Water Freezing Point", value: "0 °C = 273.15 K" },
    { label: "Standard Ambient Temp", value: "25 °C = 298.15 K" },
    { label: "Water Boiling Point", value: "100 °C = 373.15 K" }
  ],
  formula: {
    text: "Add 273.15 to the Celsius temperature reading to shift the origin to absolute zero.",
    math: "K = °C + 273.15",
    subtext: "To reverse the calculation (K to °C), subtract 273.15 from the Kelvin value."
  },
  formulaTitle: "Celsius to Kelvin Formula",
  practicalTip: {
    title: "Quick Approximation in Physics",
    text: "In rough classroom physics calculations where precision beyond whole numbers is not required, rounding 273.15 to 273 allows quick mental calculations (e.g., 20 °C + 273 = 293 K)."
  },
  expertNote: {
    title: "SI Definition & Degree Symbols",
    text: "Since the 13th General Conference on Weights and Measures (CGPM), 'Kelvin' is the official SI name and symbol 'K' is used without the degree symbol (°). Writing '°K' is scientifically incorrect."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Laboratory Temperature (25 °C)",
        subtitle: "Convert standard ambient laboratory temperature of 25 °C to Kelvin.",
        steps: [
          "Identify the Celsius value: 25 °C.",
          "Apply the formula: K = °C + 273.15.",
          "Calculate: 25 + 273.15 = 298.15.",
          "Result: 25 °C is equal to 298.15 K."
        ]
      },
      {
        title: "Example 2: Cryogenic Nitrogen Boiling Point (-195.79 °C)",
        subtitle: "Convert the boiling point of liquid nitrogen into Kelvin.",
        steps: [
          "Identify the Celsius value: -195.79 °C.",
          "Add 273.15: -195.79 + 273.15 = 77.36.",
          "Result: Liquid nitrogen boils at 77.36 K."
        ]
      }
    ]
  },
  table: {
    title: "Celsius to Kelvin Reference Table",
    headers: ["Celsius (°C)", "Kelvin (K)", "Scientific Relevance"],
    rows: [
      { fromVal: "-273.15 °C", toVal: "0 K", extra: "Absolute zero (zero particle kinetic energy)" },
      { fromVal: "-195.79 °C", toVal: "77.36 K", extra: "Liquid nitrogen boiling point" },
      { fromVal: "-78.5 °C", toVal: "194.65 K", extra: "Sublimation point of dry ice (CO2)" },
      { fromVal: "0 °C", toVal: "273.15 K", extra: "Freezing point of pure water" },
      { fromVal: "20 °C", toVal: "293.15 K", extra: "Standard room temperature" },
      { fromVal: "25 °C", toVal: "298.15 K", extra: "Standard IUPAC ambient temperature" },
      { fromVal: "37 °C", toVal: "310.15 K", extra: "Normal human body temperature" },
      { fromVal: "100 °C", toVal: "373.15 K", extra: "Boiling point of water at 1 atm" },
      { fromVal: "1000 °C", toVal: "1273.15 K", extra: "Red-hot glowing steel temperature" }
    ]
  },
  applications: {
    title: "Scientific Applications of Celsius to Kelvin",
    items: [
      {
        title: "Thermodynamics & Ideal Gas Law",
        text: "Calculations involving gas volume, pressure, and temperature (PV = nRT) strictly require temperature in Kelvin to avoid mathematical division by zero."
      },
      {
        title: "Astrophysics & Space Science",
        text: "Cosmic microwave background radiation (2.73 K) and stellar core conditions are measured exclusively using absolute Kelvin scales."
      },
      {
        title: "Cryogenics & Material Physics",
        text: "Superconductivity experiments and quantum computing hardware operation rely on Kelvin measurements near absolute zero."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Including a degree symbol with Kelvin: Write 300 K, never 300 °K.",
      "Multiplying by 1.8: Scaling factors are unnecessary because 1 °C interval equals 1 K interval.",
      "Subtracting 273.15 instead of adding when moving from °C to K."
    ]
  },
  faqs: [
    {
      question: "How do you convert Celsius to Kelvin?",
      answer: "Add 273.15 to the temperature in Celsius to find the value in Kelvin."
    },
    {
      question: "Why is 273.15 added to Celsius to get Kelvin?",
      answer: "The value 273.15 represents the exact difference between 0 °C (water freezing point) and 0 K (absolute zero)."
    },
    {
      question: "What is 0 °C in Kelvin?",
      answer: "0 °C is equal to 273.15 K."
    },
    {
      question: "What is 100 °C in Kelvin?",
      answer: "100 °C is equal to 373.15 K."
    },
    {
      question: "Is 1 Kelvin the same size as 1 degree Celsius?",
      answer: "Yes, the magnitude of 1 Kelvin is identical to 1 degree Celsius. Only their zero baseline points differ."
    },
    {
      question: "Can a Kelvin temperature be negative?",
      answer: "No, in standard classical physics Kelvin cannot be negative because 0 K represents absolute zero."
    },
    {
      question: "What is room temperature (20 °C) in Kelvin?",
      answer: "20 °C equals 293.15 K (20 + 273.15)."
    },
    {
      question: "Do you write a degree symbol with Kelvin?",
      answer: "No, Kelvin is an absolute scale and is written simply with 'K' without a degree symbol."
    }
  ],
  relatedList: [
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" },
    { label: "Celsius to Rankine", from: "celsius", to: "rankine" },
    { label: "Fahrenheit to Kelvin", from: "fahrenheit", to: "kelvin" }
  ],
  references: [
    "BIPM - SI Brochure: The Kelvin (K)",
    "NIST Handbook 44 - Fundamental Units and Constants"
  ]
};
