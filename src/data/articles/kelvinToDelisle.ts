import { CustomArticleData } from "./types";

export const kelvinToDelisle: CustomArticleData = {
  fromUnitId: "kelvin",
  toUnitId: "delisle",
  seoTitle: "Kelvin to Delisle Converter (K to °De)",
  metaDescription: "Convert Kelvin to Delisle (K to °De) with thermodynamic accuracy. Explore the inverted Russian thermometric scale, formulas, calculation steps, and tables.",
  h1: "Kelvin to Delisle Converter",
  introduction: [
    "Converting Kelvin to Delisle (K to °De) combines the modern SI base unit of absolute thermodynamic temperature with one of the most distinctive inverted measurement scales in scientific history. Devised in 1732 by French astronomer Joseph-Nicolas Delisle, this historic scale served as the primary scientific and meteorological standard throughout the Russian Empire for over a century.",
    "Unlike standard thermodynamic scales where values rise with thermal energy, the Delisle scale is inverted: pure water boils at 0 °De (373.15 K) and freezes at 150 °De (273.15 K). Because the 100-kelvin span between freezing and boiling corresponds to a 150-degree span in Delisle, the conversion scaling ratio is 1.5 (or 3/2). Converting from Kelvin to Delisle involves measuring the distance downward from water's boiling point (373.15 K) and multiplying by 1.5. This guide provides the exact inverted equations, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Kelvin to Delisle, subtract the Kelvin temperature from 373.15 and multiply the result by 1.5 (or 3/2). For example, 300 K converts to 109.73 °De.",
    formulaDisplay: "°De = (373.15 - K) × 1.5 = (373.15 - K) × (3 / 2)",
    subtext: "On the inverted Delisle scale, water boils at 0 °De (373.15 K), freezes at 150 °De (273.15 K), and absolute zero reaches 559.73 °De (0 K)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "Established in 1848 by William Thomson (Lord Kelvin), the Kelvin scale is the base unit of thermodynamic temperature in the International System of Units (SI). Written as 'K' without a degree symbol, it begins at absolute zero (0 K), where classical thermal kinetic motion ceases. It is defined in contemporary physics by the exact numerical value of the Boltzmann constant ($1.380649 \\times 10^{-23}\\text{ J/K}$)."
  },
  aboutTargetUnit: {
    title: "Understanding the Delisle Scale (°De)",
    text: "Devised in 1732 by French astronomer Joseph-Nicolas Delisle, this scale was calibrated by measuring the contraction of mercury from boiling water downwards. In 1738, Josias Weitbrecht standardized the scale by fixing pure water freezing at exactly 150 °De. It remained in widespread scientific and domestic use across Imperial Russia until the mid-nineteenth century."
  },
  relationship: "The Kelvin scale spans 100 kelvins between the freezing (273.15 K) and boiling (373.15 K) points of water, while the Delisle scale spans 150 degrees across the identical physical interval. The ratio of degree sizes is 150/100 = 1.5. Because 0 °De corresponds to the boiling point of pure water (373.15 K), the conversion formula calculates the thermal distance downward from 373.15 K and multiplies by 1.5.",
  relationshipTitle: "Kelvin vs Delisle Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "0 K = 559.73 °De" },
    { label: "Liquid Nitrogen Boiling Point", value: "77.36 K = 443.69 °De" },
    { label: "Water Freezing Point", value: "273.15 K = 150.00 °De" },
    { label: "Standard Room Temp (20 °C)", value: "293.15 K = 120.00 °De" },
    { label: "Normal Body Temperature", value: "310.15 K = 94.50 °De" },
    { label: "Water Boiling Point", value: "373.15 K = 0.00 °De" }
  ],
  formula: {
    text: "Subtract the Kelvin temperature from 373.15 (the boiling point of water), then multiply by 1.5 (or 3/2).",
    math: "°De = (373.15 - K) × 1.5",
    subtext: "Expressed in terms of Celsius intermediate: °De = (100 - °C) × 1.5, where °C = K - 273.15"
  },
  formulaTitle: "Kelvin to Delisle Conversion Formula",
  practicalTip: {
    title: "Understanding Inverted Scale Dynamics",
    text: "Always remember that larger Delisle numbers signify colder temperatures. If thermal energy decreases toward absolute zero, the Delisle reading climbs up to 559.73 °De. For temperatures hotter than boiling water, Delisle readings become negative."
  },
  expertNote: {
    title: "Scale Intersection Point",
    text: "Kelvin and Delisle scales intersect at exactly 223.89 (meaning 223.89 K = 223.89 °De), corresponding to -49.26 °C, derived from T = (373.15 - T) × 1.5 → 2.5T = 559.725 → T = 223.89."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Room Temperature (293.15 K)",
        subtitle: "Convert 293.15 K (20 °C) into degrees Delisle.",
        steps: [
          "Start with the Kelvin temperature: 293.15 K.",
          "Subtract from the boiling reference: 373.15 - 293.15 = 80.00.",
          "Multiply by 1.5: 80.00 × 1.5 = 120.00.",
          "Result: 293.15 K equals exactly 120.00 °De."
        ]
      },
      {
        title: "Example 2: Standard Ambient Laboratory State (298.15 K)",
        subtitle: "Convert the standard reference temperature of 298.15 K (25 °C) to Delisle.",
        steps: [
          "Identify the Kelvin temperature: 298.15 K.",
          "Subtract from 373.15: 373.15 - 298.15 = 75.00.",
          "Multiply by 1.5: 75.00 × 1.5 = 112.50.",
          "Result: 298.15 K corresponds to 112.50 °De."
        ]
      },
      {
        title: "Example 3: Deep Cryogenic State of Liquid Nitrogen (77.36 K)",
        subtitle: "Convert the boiling point of liquid nitrogen from Kelvin to Delisle.",
        steps: [
          "Take the temperature: 77.36 K.",
          "Subtract from 373.15: 373.15 - 77.36 = 295.79.",
          "Multiply by 1.5: 295.79 × 1.5 = 443.685.",
          "Result: 77.36 K equals approximately 443.69 °De."
        ]
      }
    ]
  },
  table: {
    title: "Kelvin to Delisle Scientific Reference Table",
    headers: ["Kelvin (K)", "Delisle (°De)", "Thermodynamic Benchmark"],
    rows: [
      { fromVal: "0.00 K", toVal: "559.73 °De", extra: "Absolute zero (complete thermodynamic minimum)" },
      { fromVal: "77.36 K", toVal: "443.69 °De", extra: "Liquid nitrogen atmospheric boiling point" },
      { fromVal: "194.65 K", toVal: "267.75 °De", extra: "Dry ice sublimation point (-78.5 °C)" },
      { fromVal: "223.89 K", toVal: "223.89 °De", extra: "Exact mathematical intersection of K and °De" },
      { fromVal: "233.15 K", toVal: "210.00 °De", extra: "Mercury freezing point (-40 °C / -40 °F)" },
      { fromVal: "273.15 K", toVal: "150.00 °De", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "283.15 K", toVal: "135.00 °De", extra: "Cool spring morning (10 °C)" },
      { fromVal: "293.15 K", toVal: "120.00 °De", extra: "Standard room temperature (20 °C)" },
      { fromVal: "298.15 K", toVal: "112.50 °De", extra: "NIST standard reference state (25 °C)" },
      { fromVal: "310.15 K", toVal: "94.50 °De", extra: "Normal human core body temperature (37 °C)" },
      { fromVal: "323.15 K", toVal: "75.00 °De", extra: "Hot desert ambient temperature (50 °C)" },
      { fromVal: "373.15 K", toVal: "0.00 °De", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Historical Climatology, Cryogenics & Metrology",
    items: [
      {
        title: "Russian Imperial Climatological Digitization",
        text: "Climate historians analyzing meteorological logs kept across the Russian Empire from the 1730s to the 1850s convert historic Delisle records into Kelvin for modern atmospheric temperature reconstructions."
      },
      {
        title: "Historical Scientific Instrument Restoration",
        text: "Museum curators documenting Russian Academy of Sciences thermometric artifacts calibrate glass capillary tube markings by converting Delisle graduations to Kelvin."
      },
      {
        title: "Thermodynamic Pedagogy & Coordinate Transformations",
        text: "University physics lectures use the K to °De transformation to demonstrate how inverted linear coordinate systems function in thermodynamic modeling."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Subtracting from 273.15 instead of 373.15: 0 °De corresponds to boiling water (373.15 K); subtracting from 273.15 introduces a 150-degree error.",
      "Assuming larger numbers mean hotter temperatures: In the Delisle scale, values increase as the temperature becomes colder.",
      "Misinterpreting negative Delisle values: Negative values (e.g., -30 °De) correspond to temperatures hotter than boiling water (e.g., 393.15 K or 120 °C)."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Kelvin to Delisle?",
      answer: "The formula is °De = (373.15 - K) × 1.5 (or °De = (373.15 - K) × 3/2)."
    },
    {
      question: "What is 0 Kelvin in Delisle?",
      answer: "0 K is equal to 559.73 °De (559.725 °De), representing absolute zero on the inverted scale."
    },
    {
      question: "What is 273.15 K in Delisle?",
      answer: "273.15 K is exactly 150.00 °De, which is the freezing point of pure water."
    },
    {
      question: "What is 300 K in Delisle?",
      answer: "300 K equals 109.73 °De [(373.15 - 300) × 1.5 = 73.15 × 1.5 = 109.725]."
    },
    {
      question: "What is 373.15 K in Delisle?",
      answer: "373.15 K is exactly 0.00 °De, representing the boiling point of pure water at 1 atm."
    },
    {
      question: "What is body temperature (310.15 K) in Delisle?",
      answer: "Normal human core body temperature of 310.15 K (37 °C) converts to 94.50 °De [(373.15 - 310.15) × 1.5 = 63 × 1.5 = 94.50]."
    },
    {
      question: "Why is the Delisle scale inverted compared to Kelvin?",
      answer: "Delisle calibrated his thermometer by measuring the contraction of mercury from boiling water (set as 0 °De) down to colder temperatures, counting units of contraction in a downward direction."
    },
    {
      question: "At what point are Kelvin and Delisle numerically equal?",
      answer: "Kelvin and Delisle intersect at approximately 223.89 (meaning 223.89 K = 223.89 °De or -49.26 °C)."
    }
  ],
  relatedList: [
    { label: "Delisle to Kelvin", from: "delisle", to: "kelvin" },
    { label: "Kelvin to Celsius", from: "kelvin", to: "celsius" },
    { label: "Kelvin to Fahrenheit", from: "kelvin", to: "fahrenheit" },
    { label: "Celsius to Delisle", from: "celsius", to: "delisle" }
  ],
  references: [
    "Weitbrecht, Josias (1738) - 'De Thermometris', Commentarii Academiae Petropolitanae",
    "BIPM SI Brochure - The International System of Units (9th Edition)",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
