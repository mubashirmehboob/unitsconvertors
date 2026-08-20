import { CustomArticleData } from "./types";

export const kelvinToRomer: CustomArticleData = {
  fromUnitId: "kelvin",
  toUnitId: "romer",
  seoTitle: "Kelvin to Rømer Converter (K to °Rø)",
  metaDescription: "Convert Kelvin to Rømer (K to °Rø) with thermodynamic and historical precision. Learn Ole Rømer's 1701 scale calibration, conversion formulas, and tables.",
  h1: "Kelvin to Rømer Converter",
  introduction: [
    "Converting Kelvin to Rømer (K to °Rø) bridges the modern SI thermodynamic temperature scale with one of the most historically significant early thermometers ever constructed. Conceived in 1701 by the celebrated Danish astronomer Ole Christensen Rømer, the Rømer scale introduced the concept of dual-point calibration that directly influenced Daniel Gabriel Fahrenheit and Anders Celsius.",
    "On the Kelvin scale, absolute zero is anchored at 0 K, pure water freezes at 273.15 K, and water boils at 373.15 K (a 100-kelvin span). On the Rømer scale, water freezes at 7.5 °Rø and boils at 60 °Rø (a 52.5-degree span). Converting between the two requires subtracting 273.15 to reach Celsius, multiplying by the 52.5/100 ratio (which simplifies to 21/40 or 0.525), and adding Rømer's 7.5-degree freezing offset. This guide outlines the mathematical derivation, worked calculations, and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert Kelvin to Rømer, subtract 273.15 from the Kelvin temperature, multiply by 21/40 (or 0.525), and add 7.5. For example, 300 K converts to 21.60 °Rø.",
    formulaDisplay: "°Rø = (K - 273.15) × (21 / 40) + 7.5",
    subtext: "Absolute zero is 0 K (-135.90 °Rø), water freezes at 273.15 K (7.5 °Rø), and water boils at 373.15 K (60 °Rø)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Established in 1848 by William Thomson (Lord Kelvin), the Kelvin scale is the base unit of thermodynamic temperature in the International System of Units (SI). Written without a degree symbol as 'K', it begins at absolute zero (0 K)—the physical baseline of zero thermal kinetic energy. It is defined in modern physics by fixing the numerical value of the Boltzmann constant."
  },
  aboutTargetUnit: {
    title: "Understanding the Rømer Scale (°Rø)",
    text: "Devised in 1701 by Danish astronomer Ole Christensen Rømer (famed for calculating the finite speed of light in 1676), this scale was calibrated using red wine inside glass tubes. Rømer defined 0 °Rø as the freezing point of an ammonium chloride ice-brine bath, water's freezing point as 7.5 °Rø (one-eighth of boiling), and water's boiling point as 60 °Rø."
  },
  relationship: "The Kelvin scale has 100 kelvins between the freezing and boiling points of pure water, whereas the Rømer scale defines that exact physical range as 52.5 degrees (60 - 7.5 = 52.5). The ratio of degree sizes is 52.5/100 = 21/40 = 0.525. Because Rømer places the freezing point of water at 7.5 °Rø, the conversion formula first subtracts 273.15 to find Celsius, multiplies by 0.525, and adds 7.5.",
  relationshipTitle: "Kelvin vs Rømer Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 K = -135.90 °Rø" },
    { label: "Liquid Nitrogen Boiling Point", value: "77.36 K = -95.29 °Rø" },
    { label: "Water Freezing Point", value: "273.15 K = 7.50 °Rø" },
    { label: "Standard Room Temp (20 °C)", value: "293.15 K = 18.00 °Rø" },
    { label: "Normal Body Temperature", value: "310.15 K = 26.93 °Rø" },
    { label: "Water Boiling Point", value: "373.15 K = 60.00 °Rø" }
  ],
  formula: {
    text: "Subtract 273.15 from the Kelvin temperature, multiply by 21/40 (0.525), and add 7.5.",
    math: "°Rø = (K - 273.15) × (21 / 40) + 7.5",
    subtext: "Equivalent decimal formula: °Rø = (K - 273.15) × 0.525 + 7.5"
  },
  formulaTitle: "Kelvin to Rømer Conversion Formula",
  practicalTip: {
    title: "Quick Mental Estimation Rule",
    text: "To approximate °Rø from Kelvin in your head: subtract 273 to get Celsius, divide that number in half, and add 7.5 (since 0.525 is roughly 0.5). For example: 303 K - 273 = 30 °C; 30 / 2 = 15; 15 + 7.5 = 22.5 °Rø (exact is 23.25 °Rø)."
  },
  expertNote: {
    title: "Absolute Zero in Degrees Rømer",
    text: "Absolute zero (0 K) translates to exactly -135.90375 °Rø (-135.90 °Rø), calculated as (-273.15 × 0.525) + 7.5 = -143.40375 + 7.5 = -135.90375."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Room Temperature (293.15 K)",
        subtitle: "Convert a standard room temperature of 293.15 K (20 °C) into degrees Rømer.",
        steps: [
          "Start with the Kelvin temperature: 293.15 K.",
          "Subtract 273.15: 293.15 - 273.15 = 20.00.",
          "Multiply by 21/40: 20.00 × (21 / 40) = 420 / 40 = 10.50.",
          "Add Rømer's 7.5 freezing offset: 10.50 + 7.50 = 18.00.",
          "Result: 293.15 K is exactly 18.00 °Rø."
        ]
      },
      {
        title: "Example 2: Standard IUPAC Laboratory Ambient (298.15 K)",
        subtitle: "Convert the standard reference temperature of 298.15 K (25 °C) to Rømer.",
        steps: [
          "Identify the Kelvin temperature: 298.15 K.",
          "Subtract 273.15: 298.15 - 273.15 = 25.00.",
          "Multiply by 0.525: 25.00 × 0.525 = 13.125.",
          "Add 7.5: 13.125 + 7.5 = 20.625.",
          "Result: 298.15 K corresponds to 20.63 °Rø."
        ]
      },
      {
        title: "Example 3: Boiling Water (373.15 K)",
        subtitle: "Verify the boiling point of pure water in degrees Rømer.",
        steps: [
          "Take the temperature: 373.15 K.",
          "Subtract 273.15: 373.15 - 273.15 = 100.00.",
          "Multiply by 0.525: 100.00 × 0.525 = 52.50.",
          "Add 7.5: 52.50 + 7.50 = 60.00.",
          "Result: 373.15 K equals exactly 60.00 °Rø."
        ]
      }
    ]
  },
  table: {
    title: "Kelvin to Rømer Scientific Reference Table",
    headers: ["Kelvin (K)", "Rømer (°Rø)", "Physical & Thermodynamic Benchmark"],
    rows: [
      { fromVal: "0.00 K", toVal: "-135.90 °Rø", extra: "Absolute zero (complete thermodynamic minimum)" },
      { fromVal: "77.36 K", toVal: "-95.29 °Rø", extra: "Liquid nitrogen boiling point" },
      { fromVal: "194.65 K", toVal: "-33.71 °Rø", extra: "Dry ice sublimation point (-78.5 °C)" },
      { fromVal: "233.15 K", toVal: "-13.50 °Rø", extra: "Mercury freezing point (-40 °C / -40 °F)" },
      { fromVal: "273.15 K", toVal: "7.50 °Rø", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "283.15 K", toVal: "12.75 °Rø", extra: "Cool spring morning (10 °C)" },
      { fromVal: "293.15 K", toVal: "18.00 °Rø", extra: "Standard room temperature (20 °C)" },
      { fromVal: "298.15 K", toVal: "20.63 °Rø", extra: "NIST standard reference state (25 °C)" },
      { fromVal: "303.15 K", toVal: "23.25 °Rø", extra: "Warm summer day (30 °C)" },
      { fromVal: "310.15 K", toVal: "26.93 °Rø", extra: "Normal human core body temperature (37 °C)" },
      { fromVal: "323.15 K", toVal: "33.75 °Rø", extra: "Hot desert ambient temperature (50 °C)" },
      { fromVal: "373.15 K", toVal: "60.00 °Rø", extra: "Boiling point of pure water at 1 atm" }
    ]
  },
  applications: {
    title: "History of Science & Astronomy Archives",
    items: [
      {
        title: "Danish Astronomical Observatory Records",
        text: "Archivists transcribing eighteenth-century astronomical and meteorological logs from the Rundetaarn in Copenhagen convert Ole Rømer's original temperature logs into Kelvin for modern atmospheric datasets."
      },
      {
        title: "Early Modern Thermometer History Research",
        text: "Historians studying how thermometer calibration spread across Europe examine Rømer's notebooks, tracking how his scale served as the direct precursor to Fahrenheit's work."
      },
      {
        title: "Physics Educational Demonstrations",
        text: "University physics instructors use the transformation from Kelvin to Rømer to teach students how multi-point scale calibrations with non-zero offsets are mathematically derived."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Omitting the +7.5 offset: Because water freezes at 7.5 °Rø rather than 0 °Rø, forgetting to add 7.5 results in an incorrect reading.",
      "Multiplying before subtracting 273.15: The 273.15 offset must be subtracted first to align with the Celsius scale before multiplying by 21/40.",
      "Confusing Rømer (°Rø / °Ro) with Réaumur (°Ré): Rømer spans from 7.5 to 60, whereas Réaumur spans from 0 to 80."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Kelvin to Rømer?",
      answer: "The formula is °Rø = (K - 273.15) × (21 / 40) + 7.5 (or °Rø = (K - 273.15) × 0.525 + 7.5)."
    },
    {
      question: "What is 0 Kelvin in Rømer?",
      answer: "0 K is equal to -135.90 °Rø (-135.90375 °Rø), which is absolute zero."
    },
    {
      question: "What is 273.15 K in Rømer?",
      answer: "273.15 K is exactly 7.50 °Rø, the freezing point of pure water on the Rømer scale."
    },
    {
      question: "What is 300 K in Rømer?",
      answer: "300 K equals 21.60 °Rø [(300 - 273.15) × 0.525 + 7.5 = 14.09625 + 7.5 = 21.59625]."
    },
    {
      question: "What is 373.15 K in Rømer?",
      answer: "373.15 K is exactly 60.00 °Rø, the boiling point of pure water at 1 atm."
    },
    {
      question: "What is body temperature (310.15 K) in Rømer?",
      answer: "Normal human core body temperature (310.15 K / 37 °C) converts to 26.93 °Rø [(310.15 - 273.15) × 0.525 + 7.5 = 19.425 + 7.5 = 26.925]."
    },
    {
      question: "Why does the Rømer scale set water's freezing point at 7.5 degrees?",
      answer: "Ole Rømer chose an ice-brine bath as 0 °Rø and boiling water as 60 °Rø, which naturally positioned the freezing point of plain water at 7.5 °Rø (one-eighth of the total boiling scale)."
    },
    {
      question: "Is there a degree symbol on Kelvin or Rømer?",
      answer: "Kelvin is written without a degree symbol ('K'), while Rømer is written with a degree symbol ('°Rø' or '°Ro')."
    }
  ],
  relatedList: [
    { label: "Rømer to Kelvin", from: "romer", to: "kelvin" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" },
    { label: "Kelvin to Fahrenheit", from: "kelvin", to: "fahrenheit" },
    { label: "Celsius to Rømer", from: "celsius", to: "romer" }
  ],
  references: [
    "Meyer, Kirstine (1910) - 'Ole Rømers Instrumenter og Opfindelser' (Copenhagen)",
    "BIPM SI Brochure - The International System of Units (9th Edition)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
