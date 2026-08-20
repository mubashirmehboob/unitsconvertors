import { CustomArticleData } from "./types";

export const fahrenheitToNewton: CustomArticleData = {
  fromUnitId: "fahrenheit",
  toUnitId: "newton",
  seoTitle: "Fahrenheit to Newton Converter (°F to °N)",
  metaDescription: "Convert Fahrenheit to Newton (°F to °N) with scientific accuracy. Explore Sir Isaac Newton's early thermometric scale, formulas, calculation steps, and tables.",
  h1: "Fahrenheit to Newton Converter",
  introduction: [
    "Converting Fahrenheit to Newton (°F to °N) connects modern temperature measurements with one of the earliest quantitative temperature scales in the history of thermodynamics. Devised around the year 1701 by Sir Isaac Newton, the Newton scale laid essential conceptual groundwork for subsequent temperature scales developed by Daniel Gabriel Fahrenheit and Anders Celsius.",
    "On the Fahrenheit scale, the freezing point of water is designated as 32 °F and the boiling point as 212 °F (a fundamental 180-degree interval). On Newton's original scale, water freezes at 0 °N and boils at 33 °N (a 33-degree interval). Converting between the two requires subtracting the 32-degree Fahrenheit freezing offset and scaling by a factor of 33/180 (which simplifies to 11/60, or approximately 0.18333). This guide provides the complete mathematical framework, worked examples, and comparative reference tables."
  ],
  quickAnswer: {
    text: "To convert Fahrenheit to Newton, subtract 32 from the Fahrenheit temperature and multiply the result by 11/60 (or multiply by 33/180). For example, 68 °F converts to 6.6 °N.",
    formulaDisplay: "°N = (°F - 32) × 11/60 = (°F - 32) × 0.18333...",
    subtext: "Pure water freezes at 32 °F (0 °N) and boils at 212 °F (33 °N) at standard atmospheric pressure."
  },
  aboutSourceUnit: {
    title: "Understanding the Fahrenheit Scale (°F)",
    text: "Established in 1724 by Daniel Gabriel Fahrenheit, this scale was a breakthrough in eighteenth-century instrumentation due to its use of mercury thermometric bulbs. Calibrated initially with an ice-brine bath (0 °F), pure water freezing (32 °F), and body heat (96 °F, later standardized to 98.6 °F), the Fahrenheit scale remains the primary measurement system in the United States and several associated territories."
  },
  aboutTargetUnit: {
    title: "Understanding the Newton Scale (°N)",
    text: "Published anonymously by Sir Isaac Newton in 1701 under the title 'Scala graduum Caloris' in the Philosophical Transactions of the Royal Society, this early scale used linseed oil thermometers. Newton defined 0 °N as the temperature of freezing water and calibrated key natural phenomena against this zero, establishing 33 °N as the boiling point of pure water and roughly 12 °N as human body heat."
  },
  relationship: "The Fahrenheit scale defines 180 degrees between the freezing and boiling points of pure water (212 - 32 = 180), whereas the Newton scale defines that identical physical span as 33 degrees. The conversion ratio between the two intervals is 33/180, which simplifies to the rational fraction 11/60 (0.18333...). To convert from °F to °N, the 32-degree freezing offset is subtracted from the Fahrenheit reading before multiplying by 11/60.",
  relationshipTitle: "Fahrenheit vs Newton Scale Comparison",
  relationshipItems: [
    { label: "Absolute Zero", value: "-459.67 °F = -90.14 °N" },
    { label: "Water Freezing Point", value: "32 °F = 0 °N" },
    { label: "Comfortable Room Temp", value: "68 °F = 6.60 °N" },
    { label: "Normal Body Temperature", value: "98.6 °F = 12.21 °N" },
    { label: "Water Boiling Point", value: "212 °F = 33 °N" }
  ],
  formula: {
    text: "Subtract 32 from the Fahrenheit temperature to remove the freezing baseline offset, then multiply by 11/60 (or 33/180).",
    math: "°N = (°F - 32) × (11 / 60)",
    subtext: "In terms of Celsius intermediate: °N = °C × 0.33, where °C = (°F - 32) / 1.8"
  },
  formulaTitle: "Fahrenheit to Newton Conversion Formula",
  practicalTip: {
    title: "Practical Approximation Technique",
    text: "To approximate °N from °F quickly, subtract 32 from °F, divide by 6, and then divide by 10 (or multiply by 1.1). For example: 86 °F - 32 = 54; 54 / 6 = 9; 9 × 1.1 ≈ 9.9 °N (exact value is 9.90 °N)."
  },
  expertNote: {
    title: "Newton's Linseed Oil Thermometer",
    text: "Newton chose linseed oil over water or alcohol because of its relatively large and uniform thermal expansion coefficient across high temperatures, allowing him to measure the melting points of lead, tin, and bismuth alloys."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Indoor Temperature (68 °F)",
        subtitle: "Convert a common residential room temperature of 68 °F to degrees Newton.",
        steps: [
          "Start with the Fahrenheit temperature: 68 °F.",
          "Subtract the freezing point offset: 68 - 32 = 36.",
          "Multiply by 11/60: 36 × (11 / 60) = 396 / 60 = 6.6.",
          "Result: 68 °F is exactly 6.6 °N."
        ]
      },
      {
        title: "Example 2: Warm Summer Afternoon (86 °F)",
        subtitle: "Determine the Newton equivalent of an 86 °F summer day.",
        steps: [
          "Identify the starting temperature: 86 °F.",
          "Subtract 32: 86 - 32 = 54.",
          "Multiply by 11/60: 54 × (11 / 60) = 594 / 60 = 9.9.",
          "Result: 86 °F corresponds exactly to 9.9 °N."
        ]
      },
      {
        title: "Example 3: Baking Oven Temperature (350 °F)",
        subtitle: "Convert a standard baking temperature of 350 °F to degrees Newton.",
        steps: [
          "Take the oven temperature: 350 °F.",
          "Subtract 32: 350 - 32 = 318.",
          "Multiply by 11/60: 318 × 11 / 60 = 3498 / 60 = 58.30.",
          "Result: 350 °F equals 58.30 °N."
        ]
      }
    ]
  },
  table: {
    title: "Fahrenheit to Newton Thermal Reference Table",
    headers: ["Fahrenheit (°F)", "Newton (°N)", "Thermodynamic Benchmark"],
    rows: [
      { fromVal: "-459.67 °F", toVal: "-90.14 °N", extra: "Absolute zero (0 K)" },
      { fromVal: "-40.00 °F", toVal: "-13.20 °N", extra: "Mercury solidification threshold" },
      { fromVal: "-7.18 °F", toVal: "-7.18 °N", extra: "Mathematical intersection point of °F and °N" },
      { fromVal: "0.00 °F", toVal: "-5.87 °N", extra: "Fahrenheit ammonium chloride freezing point" },
      { fromVal: "32.00 °F", toVal: "0.00 °N", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "50.00 °F", toVal: "3.30 °N", extra: "Cool spring weather (10 °C)" },
      { fromVal: "68.00 °F", toVal: "6.60 °N", extra: "Standard room temperature (20 °C)" },
      { fromVal: "77.00 °F", toVal: "8.25 °N", extra: "Warm laboratory reference (25 °C)" },
      { fromVal: "86.00 °F", toVal: "9.90 °N", extra: "Hot day (30 °C)" },
      { fromVal: "98.60 °F", toVal: "12.21 °N", extra: "Standard human body temperature" },
      { fromVal: "122.00 °F", toVal: "16.50 °N", extra: "Extreme desert air temperature (50 °C)" },
      { fromVal: "212.00 °F", toVal: "33.00 °N", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Historical & Scientific Applications of °F to °N",
    items: [
      {
        title: "History of Physics & Thermometry Curriculum",
        text: "University physics history courses analyze Sir Isaac Newton's original 1701 papers on thermal expansion and cooling laws, translating his observations into modern Fahrenheit and Celsius metrics."
      },
      {
        title: "Metallurgical History & Early Alloy Research",
        text: "Newton's thermometer was among the first instruments used to document the liquidus points of fusible alloys, providing historical data that researchers convert to modern units."
      },
      {
        title: "Scientific Instrument Conservation & Museum Exhibits",
        text: "Museum curators documenting antique scientific instruments built in early eighteenth-century Britain convert calibrated scales to contemporary temperature readings for public educational displays."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing the Newton temperature scale (°N) with the Newton unit of force (N): The unit symbol '°N' denotes a historical temperature degree, while 'N' (without a degree symbol) represents the SI unit of force (kg·m/s²).",
      "Omitting the freezing offset subtraction: Multiplying Fahrenheit directly by 11/60 produces incorrect results because the zero point of the Fahrenheit scale does not align with the freezing point of water.",
      "Using rounded decimals too early: Rounding 11/60 (0.18333...) to 0.18 creates noticeable cumulative rounding errors in high-temperature calculations."
    ]
  },
  faqs: [
    {
      question: "What is the formula to convert Fahrenheit to Newton?",
      answer: "The formula is °N = (°F - 32) × 11/60 (or °N = (°F - 32) × 33/180)."
    },
    {
      question: "What is 32 °F in Newton?",
      answer: "32 °F equals exactly 0 °N, which is the freezing point of pure water."
    },
    {
      question: "What is 212 °F in Newton?",
      answer: "212 °F equals exactly 33 °N, which represents the boiling point of pure water at standard atmospheric pressure."
    },
    {
      question: "What is 68 °F in Newton?",
      answer: "68 °F equals exactly 6.6 °N [(68 - 32) × 11/60 = 36 × 11/60 = 6.6]."
    },
    {
      question: "What is human body temperature (98.6 °F) in Newton?",
      answer: "98.6 °F converts to 12.21 °N [(98.6 - 32) × 11/60 = 66.6 × 11/60 = 12.21]."
    },
    {
      question: "At what temperature do Fahrenheit and Newton scales intersect?",
      answer: "Fahrenheit and Newton intersect at approximately -7.18° (meaning -7.18 °F = -7.18 °N)."
    },
    {
      question: "Who invented the Newton temperature scale?",
      answer: "Sir Isaac Newton invented the scale in 1701 using a linseed oil thermometer to study cooling rates and melting points of metals."
    },
    {
      question: "Why did Newton choose 33 degrees for the boiling point of water?",
      answer: "Newton calibrated his linseed oil thermometer against natural phenomena; water expanded by roughly 33 parts across the range from freezing to boiling."
    }
  ],
  relatedList: [
    { label: "Newton to Fahrenheit", from: "newton", to: "fahrenheit" },
    { label: "Fahrenheit to Celsius", from: "fahrenheit", to: "celsius" },
    { label: "Fahrenheit to Réaumur", from: "fahrenheit", to: "reaumur" },
    { label: "Celsius to Newton", from: "celsius", to: "newton" }
  ],
  references: [
    "Newton, Isaac (1701) - 'Scala graduum Caloris', Philosophical Transactions of the Royal Society",
    "BIPM - Historical Temperature Scales Archive",
    "NIST Special Publication 811 - Guide for the Use of the International System of Units"
  ]
};
