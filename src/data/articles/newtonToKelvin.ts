import { CustomArticleData } from "./types";

export const newtonToKelvin: CustomArticleData = {
  fromUnitId: "newton",
  toUnitId: "kelvin",
  seoTitle: "Newton to Kelvin (N to K) Temperature Converter",
  metaDescription: "Convert Newton to Kelvin (°N to K) with exact precision. Learn the formula K = (°N × 100/33) + 273.15, absolute zero calibration, history, and tables.",
  h1: "Newton to Kelvin Converter",
  introduction: [
    "Converting temperature from the historic Newton scale to thermodynamic Kelvin connects the 1701 linseed-oil thermometry of Sir Isaac Newton with the modern coherent SI unit of absolute temperature. Formulated over 150 years before Lord Kelvin calculated absolute zero, Newton's scale established some of the earliest quantitative benchmarks for physical heat transfer.",
    "Because the Newton scale spans 33 degrees between the freezing and boiling points of pure water (0 °N to 33 °N) while the Kelvin scale spans 100 kelvins between the exact same physical milestones (273.15 K to 373.15 K), each Newton degree equals exactly 100/33 (approximately 3.030303) kelvins. Combining this step ratio with the absolute zero offset produces the exact conversion formula: <strong>K = (°N × 100/33) + 273.15</strong>. This comprehensive guide covers mathematical derivations, worked examples, formulas, and conversion tables."
  ],
  quickAnswer: {
    text: "To convert degrees Newton to Kelvin, multiply the Newton value by 100/33 (or approximately 3.030303) and then add 273.15. For example, 0 °N equals 273.15 K, and 33 °N equals 373.15 K.",
    formulaDisplay: "K = (°N × 100 / 33) + 273.15 ≈ (°N × 3.030303) + 273.15",
    subtext: "Combines the 100/33 degree scaling ratio with the water-freezing thermodynamic baseline offset (273.15 K)."
  },
  aboutSourceUnit: {
    title: "Understanding the Newton Temperature Scale (°N)",
    text: "Devised around 1701 by Sir Isaac Newton, the Newton scale calibrated 0 °N at the melting point of snow and 33 °N at the boiling point of water. Using linseed oil as the thermometric fluid, Newton documented the cooling rates of iron bars and the melting points of various metallic alloys."
  },
  aboutTargetUnit: {
    title: "Understanding the Kelvin Scale (K)",
    text: "The kelvin (symbol: K, never °K) is the SI base unit of thermodynamic temperature. Defined since 2019 by fixing the Boltzmann constant (k = 1.380649 × 10⁻²³ J/K), the scale begins at absolute zero (0 K), the theoretical point where microscopic thermal energy reaches its quantum mechanical minimum."
  },
  relationship: "Water freezes at 0 °N and 273.15 K. Water boils at 33 °N and 373.15 K. Because 33 Newton degrees span the exact same physical interval as 100 kelvins, 1 °N = 100 / 33 K ≈ 3.030303 K. Adding 273.15 shifts the baseline origin from water's freezing point to absolute zero.",
  relationshipTitle: "Degree Ratio and Thermodynamic Offset",
  relationshipItems: [
    { label: "0 °N", value: "273.15 K (Water freezing point at 1 atm)" },
    { label: "6.6 °N", value: "293.15 K (Standard room temperature 20 °C)" },
    { label: "12 °N", value: "309.51 K (Newton's body heat benchmark ~36.4 °C)" },
    { label: "33 °N", value: "373.15 K (Water boiling point at 1 atm)" },
    { label: "-90.14 °N", value: "0 K (Absolute zero)" }
  ],
  formula: {
    text: "Multiply the temperature in degrees Newton by 100, divide by 33 (or multiply by approx. 3.030303), and add 273.15 to obtain the temperature in kelvins.",
    math: "K = (°N × 100 / 33) + 273.15",
    subtext: "To convert kelvins back to degrees Newton, subtract 273.15 first, then multiply by 33/100 (or 0.33): °N = (K - 273.15) × 0.33."
  },
  formulaTitle: "Newton to Kelvin Formula",
  practicalTip: {
    title: "Mental Estimation Shortcut",
    text: "To estimate Kelvin in your head from degrees Newton, multiply by 3 and add 273. For example, 10 °N: 10 × 3 = 30; 30 + 273 = 303 K (exact is 303.45 K)."
  },
  expertNote: {
    title: "Thermodynamic Linearity",
    text: "Because linseed oil exhibits nearly linear volumetric expansion across the liquid water range, Newton's early calibration corresponds remarkably well to modern thermodynamic Kelvin temperatures."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Water Freezing Point (0 °N)",
        subtitle: "Convert the freezing point of water from Newton to Kelvin.",
        steps: [
          "Identify temperature: 0 °N.",
          "Apply formula: K = (0 × 100/33) + 273.15.",
          "Calculate: 0 + 273.15 = 273.15 K.",
          "Result: 0 °N equals exactly 273.15 K."
        ]
      },
      {
        title: "Example 2: Standard Room Temperature (6.6 °N)",
        subtitle: "Convert 6.6 °N (20 °C) into Kelvin.",
        steps: [
          "Identify temperature: 6.6 °N.",
          "Multiply by 100/33: (6.6 × 100) / 33 = 660 / 33 = 20.",
          "Add 273.15: 20 + 273.15 = 293.15 K.",
          "Result: 6.6 °N equals exactly 293.15 K."
        ]
      },
      {
        title: "Example 3: Water Boiling Point (33 °N)",
        subtitle: "Convert the boiling point of pure water to Kelvin.",
        steps: [
          "Identify temperature: 33 °N.",
          "Multiply by 100/33: (33 × 100) / 33 = 100.",
          "Add 273.15: 100 + 273.15 = 373.15 K.",
          "Result: 33 °N equals exactly 373.15 K."
        ]
      }
    ]
  },
  table: {
    title: "Newton to Kelvin Conversion Table",
    headers: ["Newton (°N)", "Kelvin (K)", "Physical Context"],
    rows: [
      { fromVal: "-90.14 °N", toVal: "0.00 K", extra: "Absolute zero (complete cessation of thermal motion)" },
      { fromVal: "-33.00 °N", toVal: "173.15 K", extra: "Cryogenic research cold (-100 °C)" },
      { fromVal: "-16.50 °N", toVal: "223.15 K", extra: "Extreme Siberian winter (-50 °C)" },
      { fromVal: "-6.60 °N", toVal: "253.15 K", extra: "Commercial freezer temperature (-20 °C)" },
      { fromVal: "0.00 °N", toVal: "273.15 K", extra: "Freezing point of pure water at 1 atm" },
      { fromVal: "3.30 °N", toVal: "283.15 K", extra: "Cool spring morning (10 °C)" },
      { fromVal: "6.60 °N", toVal: "293.15 K", extra: "Standard room temperature (20 °C / 68 °F)" },
      { fromVal: "8.25 °N", toVal: "298.15 K", extra: "Comfortable warm room (25 °C / 77 °F)" },
      { fromVal: "12.00 °N", toVal: "309.51 K", extra: "Newton's human body temperature benchmark" },
      { fromVal: "16.50 °N", toVal: "323.15 K", extra: "Hot bath / desert temperature (50 °C)" },
      { fromVal: "24.75 °N", toVal: "348.15 K", extra: "Milk pasteurization heat (75 °C)" },
      { fromVal: "33.00 °N", toVal: "373.15 K", extra: "Boiling point of pure water at sea level" }
    ]
  },
  applications: {
    title: "Practical Applications of Newton to Kelvin Conversions",
    items: [
      {
        title: "Thermodynamics & Heat Transfer History",
        text: "Historians and physicists converting 18th-century English thermal dissipation data into SI kelvins to model early industrial heat flow calculations."
      },
      {
        title: "Reconstruction of Newton's Alloy Melting Points",
        text: "Metallurgists studying Newton's pioneering experiments with bismuth, lead, and tin eutectic solder alloys convert his recorded Newton degrees into Kelvin to analyze phase diagrams."
      },
      {
        title: "Academic Metrology Demonstrations",
        text: "University physics lectures use the Newton-to-Kelvin transformation to demonstrate linear affine temperature mappings combining scaling fractions (100/33) with zero offsets (+273.15)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Writing '°K' instead of 'K'; the degree symbol for Kelvin was officially eliminated by the CGPM in 1967.",
      "Adding 273.15 before multiplying by 100/33; order of operations requires multiplying the Newton value first, then adding 273.15.",
      "Confusing the degree Newton (°N) of temperature with the SI unit of force, the newton (N)."
    ]
  },
  faqs: [
    {
      question: "How do you convert degrees Newton to Kelvin?",
      answer: "Multiply the temperature in degrees Newton by 100/33 (or approx. 3.030303) and add 273.15: K = (°N × 100 / 33) + 273.15."
    },
    {
      question: "What is 0 °N in Kelvin?",
      answer: "0 °N is the freezing point of water, which corresponds to exactly 273.15 K."
    },
    {
      question: "What is 33 °N in Kelvin?",
      answer: "33 °N is the boiling point of water at 1 atm, which corresponds to exactly 373.15 K."
    },
    {
      question: "What is room temperature (6.6 °N) in Kelvin?",
      answer: "6.6 °N (20 °C / 68 °F) equals exactly 293.15 K ((6.6 × 100/33) + 273.15 = 20 + 273.15 = 293.15 K)."
    },
    {
      question: "What is absolute zero in degrees Newton?",
      answer: "Absolute zero (0 K) equals approximately -90.14 °N (-273.15 × 0.33)."
    },
    {
      question: "Why does the conversion factor use 100/33?",
      answer: "Because the interval between pure water freezing and boiling covers 33 degrees on the Newton scale and 100 kelvins on the Kelvin scale. 100 / 33 simplifies to roughly 3.030303."
    },
    {
      question: "How do you convert Kelvin back to degrees Newton?",
      answer: "Subtract 273.15 from the Kelvin temperature and multiply by 0.33 (or 33/100): °N = (K - 273.15) × 0.33."
    },
    {
      question: "Did Isaac Newton know about absolute zero?",
      answer: "No. The concept of absolute zero was not formalized until Guillaume Amontons in 1702 and later refined by Lord Kelvin in 1848, long after Newton's 1701 publication."
    }
  ],
  relatedList: [
    { label: "Kelvin to Newton", from: "kelvin", to: "newton" },
    { label: "Newton to Celsius", from: "newton", to: "celsius" },
    { label: "Newton to Fahrenheit", from: "newton", to: "fahrenheit" }
  ],
  references: [
    "Isaac Newton - Scala graduum Caloris (Philosophical Transactions of the Royal Society, 1701)",
    "BIPM - SI Brochure: The Kelvin, Base Unit of Thermodynamic Temperature",
    "Lord Kelvin (William Thomson) - On an Absolute Thermometric Scale (1848)"
  ]
};
