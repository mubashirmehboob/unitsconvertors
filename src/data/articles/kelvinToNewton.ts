import { CustomArticleData } from "./types";

export const kelvinToNewton: CustomArticleData = {
  fromUnitId: "kelvin",
  toUnitId: "newton",
  seoTitle: "Kelvin to Newton Converter (K to °N)",
  metaDescription: "Convert Kelvin to Newton (K to °N) with scientific precision. Explore Sir Isaac Newton's 1701 scale, thermodynamic calculations, and reference tables.",
  h1: "Kelvin to Newton Converter",
  introduction: [
    "Converting Kelvin to Newton (K to °N) links the modern SI base unit of thermodynamic temperature with the pioneering thermometric scale developed by Sir Isaac Newton in 1701. While the Kelvin scale underpins contemporary quantum mechanics, thermodynamics, and astrophysics, Newton's scale represents one of the very first attempts to quantify heat using reproducible physical phenomena.",
    "Because the Kelvin scale defines a 100-unit interval between the freezing and boiling points of pure water, while the Newton scale defines that same thermal span as exactly 33 degrees, the conversion ratio between the two scales is 33/100 (or 0.33). To convert a temperature from Kelvin to degrees Newton, subtract the 273.15 freezing offset to obtain Celsius and multiply by 0.33. This guide explains the mathematical derivation, worked examples, and comparative reference tables."
  ],
  quickAnswer: {
    text: "To convert Kelvin to Newton, subtract 273.15 from the Kelvin temperature and multiply the result by 0.33 (or 33/100). For example, 300 K converts to 8.86 °N.",
    formulaDisplay: "°N = (K - 273.15) × 0.33 = (K - 273.15) × (33 / 100)",
    subtext: "Absolute zero is 0 K (-90.14 °N), water freezes at 273.15 K (0 °N), and water boils at 373.15 K (33 °N)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Introduced in 1848 by William Thomson (Lord Kelvin), the Kelvin scale is the SI base unit for thermodynamic temperature. Written as 'K' without a degree sign, it begins at absolute zero (0 K), where classical thermal kinetic motion ceases. Defined via the fundamental Boltzmann constant ($1.380649 \\times 10^{-23}\\text{ J/K}$), Kelvin is the standard for cryogenic research, physical chemistry, and aerospace engineering."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton Scale (°N)",
    text: "Published anonymously by Sir Isaac Newton in 1701 in the Philosophical Transactions of the Royal Society, this historic scale utilized linseed oil as the thermometric fluid. Newton defined 0 °N as the temperature of freezing water and 33 °N as the temperature of boiling water, establishing an empirical scale to measure the cooling of heated metals and the melting points of alloys."
  },
  relationship: "The Kelvin scale spans 100 kelvins between the freezing point (273.15 K) and boiling point (373.15 K) of pure water, while the Newton scale spans 33 degrees across that exact physical interval. Therefore, 1 Kelvin equals 0.33 degrees Newton ($1\\text{ K} = 0.33\\text{ }^\\circ\\text{N}$). The conversion formula subtracts 273.15 to align with the freezing point of water and then scales by 33/100.",
  relationshipTitle: "Kelvin vs Newton Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 K = -90.14 °N" },
    { label: "Liquid Nitrogen Boiling Point", value: "77.36 K = -64.61 °N" },
    { label: "Water Freezing Point", value: "273.15 K = 0.00 °N" },
    { label: "Standard Room Temp (20 °C)", value: "293.15 K = 6.60 °N" },
    { label: "Normal Body Temperature", value: "310.15 K = 12.21 °N" },
    { label: "Water Boiling Point", value: "373.15 K = 33.00 °N" }
  ],
  formula: {
    text: "Subtract 273.15 from the Kelvin value, then multiply the result by 33/100 (0.33).",
    math: "°N = (K - 273.15) × 0.33",
    subtext: "Equivalent fractional formula: °N = (K - 273.15) × (33 / 100)"
  },
  formulaTitle: "Kelvin to Newton Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Trick",
    text: "To approximate °N from Kelvin in your head: subtract 273 to reach Celsius, divide by 3, and add 1% to that number (since 33/100 is almost 1/3). For example, 303 K - 273 = 30 °C; 30 / 3 = 10; 10 - 1% ≈ 9.9 °N (exact is 9.90 °N)."
  },
  expertNote: {
    title: "Absolute Zero in Degrees Newton",
    text: "Absolute zero (0 K) translates to exactly -90.1395 °N (-90.14 °N). This represents the theoretical lower limit of the Newton temperature scale."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Room Temperature (293.15 K)",
        subtitle: "Convert 293.15 K (20 °C) to degrees Newton.",
        steps: [
          "Start with the Kelvin temperature: 293.15 K.",
          "Subtract 273.15: 293.15 - 273.15 = 20.00.",
          "Multiply by 0.33: 20.00 × 0.33 = 6.60.",
          "Result: 293.15 K equals exactly 6.60 °N."
        ]
      },
      {
        title: "Example 2: Standard Ambient Laboratory State (298.15 K)",
        subtitle: "Convert 298.15 K (25 °C) to degrees Newton.",
        steps: [
          "Identify the Kelvin temperature: 298.15 K.",
          "Subtract 273.15: 298.15 - 273.15 = 25.00.",
          "Multiply by 33/100: 25.00 × 0.33 = 8.25.",
          "Result: 298.15 K is exactly 8.25 °N."
        ]
      },
      {
        title: "Example 3: Boiling Water (373.15 K)",
        subtitle: "Verify the boiling point of pure water in degrees Newton.",
        steps: [
          "Take the temperature: 373.15 K.",
          "Subtract 273.15: 373.15 - 273.15 = 100.00.",
          "Multiply by 0.33: 100.00 × 0.33 = 33.00.",
          "Result: 373.15 K is exactly 33.00 °N."
        ]
      }
    ]
  },
  table: {
    title: "Kelvin to Newton Reference Table",
    headers: ["Kelvin (K)", "Newton (°N)", "Physical & Thermodynamic Benchmark"],
    rows: [
      { fromVal: "0.00 K", toVal: "-90.14 °N", extra: "Absolute zero (complete kinetic cessation)" },
      { fromVal: "77.36 K", toVal: "-64.61 °N", extra: "Liquid nitrogen boiling point" },
      { fromVal: "194.65 K", toVal: "-25.91 °N", extra: "Dry ice sublimation temperature (-78.5 °C)" },
      { fromVal: "233.15 K", toVal: "-13.20 °N", extra: "Mercury freezing point (-40 °C / -40 °F)" },
      { fromVal: "273.15 K", toVal: "0.00 °N", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "283.15 K", toVal: "3.30 °N", extra: "Cool spring morning (10 °C)" },
      { fromVal: "293.15 K", toVal: "6.60 °N", extra: "Standard room temperature (20 °C)" },
      { fromVal: "298.15 K", toVal: "8.25 °N", extra: "NIST standard reference state (25 °C)" },
      { fromVal: "303.15 K", toVal: "9.90 °N", extra: "Warm summer day (30 °C)" },
      { fromVal: "310.15 K", toVal: "12.21 °N", extra: "Human core body temperature (37 °C)" },
      { fromVal: "323.15 K", toVal: "16.50 °N", extra: "Hot desert ambient temperature (50 °C)" },
      { fromVal: "373.15 K", toVal: "33.00 °N", extra: "Boiling point of pure water at 1 atm" }
    ]
  },
  applications: {
    title: "History of Science & Thermometry Education",
    items: [
      {
        title: "Newton's Law of Cooling Research",
        text: "In his 1701 treatise, Newton formulated his famous Law of Cooling ($dT/dt = -k(T - T_{\\text{env}})$) using his 33-degree thermometer, establishing principles still studied in modern thermal physics."
      },
      {
        title: "Early Modern Metallurgy & Phase Transitions",
        text: "Historians studying early European metallurgy analyze Newton's recorded melting points for tin, lead, and bismuth alloys, converting his linseed oil thermometer measurements to Kelvin."
      },
      {
        title: "Physics Curricula & Linear Scale Transformations",
        text: "Undergraduate thermodynamics courses use the K to °N conversion to demonstrate the derivation of empirical scales from SI base units."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the Newton temperature degree (°N) with the SI unit of force (N): Temperature uses the degree symbol '°N', while the force unit (Newton) is written without a degree symbol ('N').",
      "Multiplying before subtracting 273.15: The zero point of the Newton scale is water's freezing point, not absolute zero; 273.15 must be subtracted first.",
      "Approximating 33/100 as 1/3 in precision calculations: 1/3 (0.3333...) introduces an error of approximately 1% compared to the exact 0.33 ratio."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Kelvin to Newton?",
      answer: "The formula is °N = (K - 273.15) × 0.33 (or °N = (K - 273.15) × 33/100)."
    },
    {
      question: "What is 0 Kelvin in Newton?",
      answer: "0 K is equal to -90.14 °N (-90.1395 °N), representing absolute zero."
    },
    {
      question: "What is 273.15 K in Newton?",
      answer: "273.15 K is exactly 0.00 °N, which is the freezing point of pure water."
    },
    {
      question: "What is 300 K in Newton?",
      answer: "300 K equals 8.86 °N [(300 - 273.15) × 0.33 = 26.85 × 0.33 = 8.8605]."
    },
    {
      question: "What is 373.15 K in Newton?",
      answer: "373.15 K is exactly 33.00 °N, the boiling point of pure water at 1 atm."
    },
    {
      question: "What is body temperature (310.15 K) in Newton?",
      answer: "Normal human body temperature (310.15 K / 37 °C) converts to 12.21 °N [(310.15 - 273.15) × 0.33 = 12.21]."
    },
    {
      question: "Why does the Newton scale have 33 degrees between freezing and boiling?",
      answer: "Newton calibrated his linseed oil thermometer against natural phenomena; water expanded by roughly 33 parts across the range from freezing to boiling."
    },
    {
      question: "Is there a degree symbol on Kelvin or Newton?",
      answer: "Kelvin does not use a degree symbol ('K'), whereas the Newton temperature scale uses '°N'."
    }
  ],
  relatedList: [
    { label: "Newton to Kelvin", from: "newton", to: "kelvin" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" },
    { label: "Kelvin to Fahrenheit", from: "kelvin", to: "fahrenheit" },
    { label: "Celsius to Newton", from: "celsius", to: "newton" }
  ],
  references: [
    "Newton, Isaac (1701) - 'Scala graduum Caloris', Philosophical Transactions of the Royal Society",
    "BIPM SI Brochure - The International System of Units (9th Edition)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
