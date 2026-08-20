import { CustomArticleData } from "./types";

export const kelvinToFahrenheit: CustomArticleData = {
  fromUnitId: "kelvin",
  toUnitId: "fahrenheit",
  seoTitle: "Kelvin to Fahrenheit Converter (K to °F)",
  metaDescription: "Convert Kelvin to Fahrenheit (K to °F) with precision formulas. Learn thermodynamic relationships, step-by-step calculations, cryogenic facts, and reference tables.",
  h1: "Kelvin to Fahrenheit Converter",
  introduction: [
    "Converting Kelvin to Fahrenheit (K to °F) links the primary absolute temperature unit of modern science with the customary temperature scale used across the United States. While scientific research, astronomy, thermodynamics, and aerospace engineering rely on Kelvin to measure fundamental thermal energy, domestic engineering, meteorology, and heating systems in the US present data in degrees Fahrenheit.",
    "The conversion between Kelvin and Fahrenheit involves both a scale difference (1 Kelvin equals 1.8 degrees Fahrenheit in increment size) and an origin offset (absolute zero sits at 0 K or -459.67 °F). To convert K to °F, you can either subtract 273.15 to reach Celsius and multiply by 1.8 before adding 32, or multiply Kelvin directly by 1.8 and subtract 459.67. This guide provides the complete derivation, practical worked examples, cryogenic reference points, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert Kelvin to Fahrenheit, multiply the Kelvin temperature by 1.8 and subtract 459.67 (or subtract 273.15, multiply by 1.8, and add 32). For example, 300 K converts to 80.33 °F.",
    formulaDisplay: "°F = (K - 273.15) × 1.8 + 32 = K × 1.8 - 459.67",
    subtext: "Absolute zero is 0 K (-459.67 °F), water freezes at 273.15 K (32 °F), and water boils at 373.15 K (212 °F)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Established in 1848 by William Thomson (Lord Kelvin), the Kelvin scale is the base unit of temperature in the International System of Units (SI). Written as 'K' without a degree symbol, it measures absolute thermodynamic temperature from absolute zero (0 K), where classical particle kinetic motion reaches its theoretical minimum. It is defined in the SI system by the fixed numerical value of the Boltzmann constant."
  },
  aboutTargetUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Formulated in 1724 by Daniel Gabriel Fahrenheit, the Fahrenheit scale is standard in the United States, its territories, and the Bahamas. It defines 32 °F as the freezing point of water and 212 °F as the boiling point under one standard atmosphere, dividing the fundamental range into exactly 180 equal degrees."
  },
  relationship: "The Fahrenheit scale has 180 degrees between the freezing and boiling points of water, whereas the Kelvin scale spans 100 kelvins across the same physical interval. Therefore, 1 Kelvin equals exactly 1.8 degrees Fahrenheit ($\Delta 1\\text{ K} = 1.8\\text{ }^\\circ\\text{F}$). Because 0 K corresponds to -459.67 °F, the direct algebraic conversion is $^\\circ\\text{F} = (\\text{K} \\times 1.8) - 459.67$.",
  relationshipTitle: "Kelvin vs Fahrenheit Thermal Benchmarks",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 K = -459.67 °F" },
    { label: "Liquid Nitrogen Boiling Point", value: "77.36 K = -320.42 °F" },
    { label: "Water Freezing Point", value: "273.15 K = 32.00 °F" },
    { label: "Standard Room Temp (20 °C)", value: "293.15 K = 68.00 °F" },
    { label: "Normal Body Temperature", value: "310.15 K = 98.60 °F" },
    { label: "Water Boiling Point", value: "373.15 K = 212.00 °F" }
  ],
  formula: {
    text: "Multiply the Kelvin temperature by 1.8 (or 9/5) and subtract the absolute zero offset of 459.67.",
    math: "°F = (K × 1.8) - 459.67",
    subtext: "Alternatively: °F = [(K - 273.15) × 1.8] + 32"
  },
  formulaTitle: "Kelvin to Fahrenheit Conversion Formula",
  practicalTip: {
    title: "Two-Step Mental Calculation Method",
    text: "For quick calculations: first convert K to Celsius by subtracting 273 (e.g., 300 K - 273 = 27 °C). Then double the Celsius value and add 30 (27 × 2 + 30 = 84 °F, close to the exact 80.33 °F)."
  },
  expertNote: {
    title: "The Scale Intersection Point",
    text: "Kelvin and Fahrenheit scales intersect at exactly 574.59 (574.5875 K = 574.5875 °F), which corresponds to 301.44 °C, derived from T = T × 1.8 - 459.67."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Room Temperature (293.15 K)",
        subtitle: "Convert a laboratory ambient reading of 293.15 K into degrees Fahrenheit.",
        steps: [
          "Start with the Kelvin temperature: 293.15 K.",
          "Subtract 273.15 to find Celsius: 293.15 - 273.15 = 20.00 °C.",
          "Multiply by 1.8: 20.00 × 1.8 = 36.00.",
          "Add 32: 36.00 + 32 = 68.00.",
          "Result: 293.15 K is exactly 68.00 °F."
        ]
      },
      {
        title: "Example 2: Deep Cryogenic Storage (77.36 K)",
        subtitle: "Convert the boiling temperature of liquid nitrogen from Kelvin to Fahrenheit.",
        steps: [
          "Identify the Kelvin temperature: 77.36 K.",
          "Apply the direct formula: °F = (77.36 × 1.8) - 459.67.",
          "Multiply: 77.36 × 1.8 = 139.248.",
          "Subtract 459.67: 139.248 - 459.67 = -320.422.",
          "Result: 77.36 K equals -320.42 °F."
        ]
      },
      {
        title: "Example 3: Warm Outdoor Air (305.15 K)",
        subtitle: "Convert a summer weather model output of 305.15 K into Fahrenheit.",
        steps: [
          "Take the temperature: 305.15 K.",
          "Subtract 273.15: 305.15 - 273.15 = 32.00 °C.",
          "Multiply by 1.8: 32.00 × 1.8 = 57.60.",
          "Add 32: 57.60 + 32 = 89.60.",
          "Result: 305.15 K corresponds to 89.60 °F."
        ]
      }
    ]
  },
  table: {
    title: "Kelvin to Fahrenheit Thermal Reference Table",
    headers: ["Kelvin (K)", "Fahrenheit (°F)", "Physical & Astronomical Benchmark"],
    rows: [
      { fromVal: "0.00 K", toVal: "-459.67 °F", extra: "Absolute zero (complete absence of thermal kinetic energy)" },
      { fromVal: "4.22 K", toVal: "-452.07 °F", extra: "Liquid helium boiling point (superconductivity)" },
      { fromVal: "77.36 K", toVal: "-320.42 °F", extra: "Liquid nitrogen boiling point" },
      { fromVal: "194.65 K", toVal: "-109.30 °F", extra: "Dry ice sublimation point (solid CO₂)" },
      { fromVal: "233.15 K", toVal: "-40.00 °F", extra: "Mercury freezing point / °F equals °C" },
      { fromVal: "255.37 K", toVal: "0.00 °F", extra: "Fahrenheit original brine calibration point" },
      { fromVal: "273.15 K", toVal: "32.00 °F", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "293.15 K", toVal: "68.00 °F", extra: "Standard room temperature (20 °C)" },
      { fromVal: "298.15 K", toVal: "77.00 °F", extra: "NIST standard thermodynamic ambient (25 °C)" },
      { fromVal: "310.15 K", toVal: "98.60 °F", extra: "Normal human core body temperature" },
      { fromVal: "373.15 K", toVal: "212.00 °F", extra: "Boiling point of pure water at sea level" },
      { fromVal: "574.59 K", toVal: "574.59 °F", extra: "Exact mathematical intersection of K and °F" }
    ]
  },
  applications: {
    title: "Engineering, Aerospace & Thermal Science Applications",
    items: [
      {
        title: "Aerospace Propulsion & Re-entry Modeling",
        text: "Aerodynamic heating codes in NASA and US defense contractors calculate hypersonic stagnation temperatures in Kelvin, which thermal engineers convert to Fahrenheit to check thermal protection tile limits."
      },
      {
        title: "Liquefied Natural Gas (LNG) & Cryogenics",
        text: "US industrial gas plants operating methane liquefaction trains at 111 K translate temperature sensor data to °F for facility operations and pipeline compliance."
      },
      {
        title: "Astrophysics & Solar Physics",
        text: "Researchers calculating stellar blackbody spectra and solar coronal temperatures in Kelvin convert data to Fahrenheit for American popular science publications."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Forgetting to multiply by 1.8: Subtracting 273.15 only converts Kelvin to Celsius, not Fahrenheit.",
      "Using +459.67 instead of -459.67: When multiplying K directly by 1.8, you must subtract 459.67, because 0 K is -459.67 °F.",
      "Adding degree symbols to Kelvin: Kelvin is designated 'K' without a degree sign.",
      "Converting temperature intervals incorrectly: An interval $\Delta T$ of 1 K equals an interval of 1.8 °F (do not add or subtract 459.67 or 32 when converting temperature differences)."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Kelvin to Fahrenheit?",
      answer: "The formula is °F = (K - 273.15) × 1.8 + 32, or directly °F = (K × 1.8) - 459.67."
    },
    {
      question: "What is 0 Kelvin in Fahrenheit?",
      answer: "0 K is equal to -459.67 °F, the lowest possible temperature in the universe (absolute zero)."
    },
    {
      question: "What is 273.15 K in Fahrenheit?",
      answer: "273.15 K is exactly 32.00 °F, which is the freezing point of pure water."
    },
    {
      question: "What is 300 K in Fahrenheit?",
      answer: "300 K equals 80.33 °F [(300 × 1.8) - 459.67 = 540 - 459.67 = 80.33]."
    },
    {
      question: "What is 373.15 K in Fahrenheit?",
      answer: "373.15 K is exactly 212.00 °F, representing the boiling point of pure water at sea level."
    },
    {
      question: "At what temperature do Kelvin and Fahrenheit have the same value?",
      answer: "Kelvin and Fahrenheit are numerically identical at 574.59 (574.5875 K = 574.5875 °F)."
    },
    {
      question: "Why does 1 K equal 1.8 °F?",
      answer: "The boiling and freezing points of water are separated by 100 units on the Kelvin scale and 180 units on the Fahrenheit scale; 180 / 100 = 1.8."
    },
    {
      question: "What is room temperature in Kelvin and Fahrenheit?",
      answer: "A standard room temperature of 20 °C equals 293.15 K or 68 °F; a 25 °C room temperature equals 298.15 K or 77 °F."
    }
  ],
  relatedList: [
    { label: "Fahrenheit to Kelvin", from: "fahrenheit", to: "kelvin" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" },
    { label: "Kelvin to Rankine", from: "kelvin", to: "rankine" },
    { label: "Celsius to Fahrenheit", from: "celsius", to: "fahrenheit" }
  ],
  references: [
    "NIST Special Publication 811 - Guide for the Use of the International System of Units",
    "BIPM SI Brochure - The International System of Units (9th Edition)",
    "ASME Steam Tables & Thermodynamic Properties"
  ]
};
