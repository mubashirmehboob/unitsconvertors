import { CustomArticleData } from "./types";

export const pascalToKilopascal: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "kilopascal",
  seoTitle: "Pascal to Kilopascal Converter (Pa to kPa)",
  metaDescription: "Convert Pascals to kilopascals (Pa to kPa) with exact SI precision. Learn the conversion factor, formula, step-by-step examples, reference tables, and FAQs.",
  h1: "Pascal to Kilopascal Converter",
  introduction: [
    "The Pascal (Pa) and kilopascal (kPa) are both standard units of pressure within the International System of Units (SI). While the Pascal measures baseline force per unit area in fundamental scientific work, the kilopascal is widely used in weather forecasting, HVAC engineering, automotive tire monitoring, and material stress analysis to handle larger numerical values comfortably.",
    "Converting Pascals to kilopascals is straightforward because both units belong to the decimal metric system. Since one kilopascal contains exactly 1,000 Pascals, converting Pa to kPa simply requires dividing the Pascal value by 1,000 or shifting the decimal point three places to the left.",
    "This guide provides the exact mathematical formula, detailed step-by-step calculation examples, an intuitive conversion lookup table, practical industry applications, and answers to common measurement questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to kilopascals, divide the pressure value in Pascals by 1,000. For instance, 5,000 Pa equals 5 kPa, and standard atmospheric pressure of 101,325 Pa equals 101.325 kPa.",
    formulaDisplay: "kPa = Pa ÷ 1,000",
    subtext: "One Pascal is equal to exactly 0.001 kilopascal."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "Named in honor of the French mathematician and physicist Blaise Pascal, the Pascal (symbol: Pa) is the coherent SI unit of pressure and stress. It is defined as a force of one Newton applied uniformly over an area of one square meter (1 Pa = 1 N/m²). Because one Pascal represents a very small pressure—roughly equivalent to the weight of a single sheet of paper resting on a flat table—larger metric multiples like the kilopascal are commonly used for practical applications."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is a decimal multiple of the Pascal, defined as 1,000 Pascals (10³ Pa). In SI terminology, the prefix 'kilo-' denotes a factor of one thousand. Kilopascals serve as a convenient unit for everyday engineering and scientific tasks, such as recording barometric air pressure, vehicle tire inflation, pipe pressure ratings, and architectural load calculations."
  },
  relationship: "The relationship between Pascals and kilopascals is strictly linear and exact: 1 kPa = 1,000 Pa, or 1 Pa = 0.001 kPa. No empirical approximations or rounding factors are involved.",
  relationshipTitle: "Pascal vs Kilopascal Pressure Scale Comparison",
  relationshipItems: [
    { label: "1 Pa", value: "0.001 kPa (Minimal acoustic sound threshold)" },
    { label: "100 Pa", value: "0.1 kPa (1 mbar / gentle breeze pressure)" },
    { label: "1,000 Pa", value: "1 kPa (Low-pressure HVAC ducting)" },
    { label: "101,325 Pa", value: "101.325 kPa (1 Standard Atmosphere)" },
    { label: "250,000 Pa", value: "250 kPa (Standard car tire inflation pressure)" }
  ],
  formula: {
    text: "Divide the pressure in Pascals by 1,000 to obtain the equivalent value in kilopascals.",
    math: "kPa = Pa / 1000",
    subtext: "To convert kilopascals back to Pascals, multiply the kPa value by 1,000."
  },
  formulaTitle: "Pascal to Kilopascal Formula",
  practicalTip: {
    title: "Decimal Shift Shortcut",
    text: "Because the metric prefix 'kilo' equals 1,000, you can convert Pa to kPa instantly by moving the decimal point three positions to the left (e.g., 2,500.0 Pa becomes 2.5 kPa)."
  },
  expertNote: {
    title: "SI Standardization Note",
    text: "According to ISO 80000-4 standards for quantities and units, the Pascal is defined as 1 N/m². Using metric prefixes like 'kilo-' eliminates trailing zeros in technical documentation and reduces transcription errors."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting Standard Atmospheric Pressure",
        subtitle: "Convert standard sea-level pressure of 101,325 Pa into kilopascals.",
        steps: [
          "Identify the starting pressure: 101,325 Pa.",
          "Apply the conversion formula: kPa = Pa ÷ 1,000.",
          "Calculate: 101,325 ÷ 1,000 = 101.325.",
          "Result: 101,325 Pa is equal to exactly 101.325 kPa."
        ]
      },
      {
        title: "Example 2: Industrial HVAC Duct Pressure",
        subtitle: "Convert a duct static pressure reading of 2,400 Pa to kilopascals.",
        steps: [
          "Identify the starting pressure: 2,400 Pa.",
          "Apply the formula: 2,400 ÷ 1,000 = 2.4.",
          "Result: 2,400 Pa equals 2.4 kPa."
        ]
      },
      {
        title: "Example 3: Low Acoustic Sound Pressure Level",
        subtitle: "Convert an acoustic pressure pulse of 20 Pa to kilopascals.",
        steps: [
          "Identify the starting pressure: 20 Pa.",
          "Divide by 1,000: 20 ÷ 1,000 = 0.02.",
          "Result: 20 Pa equals 0.02 kPa."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to Kilopascal Conversion Table",
    headers: ["Pascals (Pa)", "Kilopascals (kPa)", "Real-World Context"],
    rows: [
      { fromVal: "1 Pa", toVal: "0.001 kPa", extra: "Weight of 1 sheet of paper on a table" },
      { fromVal: "10 Pa", toVal: "0.01 kPa", extra: "Audible sound threshold background" },
      { fromVal: "100 Pa", toVal: "0.1 kPa", extra: "1 millibar atmospheric pressure increment" },
      { fromVal: "500 Pa", toVal: "0.5 kPa", extra: "Residential ventilation fan pressure" },
      { fromVal: "1,000 Pa", toVal: "1 kPa", extra: "Low-pressure commercial HVAC duct" },
      { fromVal: "5,000 Pa", toVal: "5 kPa", extra: "Sub-surface water column (approx 0.5 m depth)" },
      { fromVal: "10,000 Pa", toVal: "10 kPa", extra: "10% of standard atmospheric pressure" },
      { fromVal: "50,000 Pa", toVal: "50 kPa", extra: "Atmospheric pressure at ~5,500 m altitude" },
      { fromVal: "101,325 Pa", toVal: "101.325 kPa", extra: "Standard sea-level atmospheric pressure" },
      { fromVal: "200,000 Pa", toVal: "200 kPa", extra: "Passenger car tire pressure (~29 psi)" },
      { fromVal: "500,000 Pa", toVal: "500 kPa", extra: "Municipal water supply pipeline pressure" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to kPa Conversion",
    items: [
      {
        title: "Meteorology & Weather Forecasting",
        text: "Barometric pressure measurements recorded in Pascals by weather sensor arrays are converted to kilopascals or hectopascals for public weather maps and altimeter setting broadcasts."
      },
      {
        title: "HVAC & Building Ventilation",
        text: "Engineers measure fan differential static pressures in Pascals to ensure delicate air balance, then convert larger system totals to kilopascals when sizing commercial chillers."
      },
      {
        title: "Civil & Materials Engineering",
        text: "Tensile stress testing equipment records minute force variations in Pascals, which structural software scales to kilopascals or megapascals for building code compliance."
      },
      {
        title: "Automotive Diagnostics",
        text: "Manifold absolute pressure (MAP) sensors send signal voltages in Pascals that engine control units (ECUs) interpret as kilopascals to manage fuel injection."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of dividing: Remember that a kilopascal is a larger unit than a Pascal, so the numeric value in kPa must be smaller.",
      "Confusing kPa with bar: One bar equals 100 kPa (100,000 Pa), not 1 kPa.",
      "Misplacing the decimal point: Always double-check that you shifted the decimal point three places to the left when converting Pa to kPa.",
      "Uppercase vs lowercase symbols: The symbol for Pascal is 'Pa' (capital P, lowercase a) and kilopascal is 'kPa' (lowercase k, capital P, lowercase a)."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in one kilopascal?",
      answer: "There are exactly 1,000 Pascals in one kilopascal. The prefix 'kilo-' is a standard metric prefix denoting a factor of 1,000."
    },
    {
      question: "What is the formula to convert Pa to kPa?",
      answer: "The formula is: kPa = Pa ÷ 1,000. Alternatively, you can multiply the Pascal value by 0.001."
    },
    {
      question: "Is 100,000 Pa equal to 100 kPa?",
      answer: "Yes, exactly. Dividing 100,000 by 1,000 yields 100 kPa, which also happens to equal 1 bar."
    },
    {
      question: "Why do we convert Pascals to kilopascals?",
      answer: "A single Pascal is very small. Using kilopascals makes numbers more manageable and easier to read in engineering, weather reports, and industrial applications."
    },
    {
      question: "What is standard atmospheric pressure in kPa?",
      answer: "Standard atmospheric pressure at sea level is defined as 101,325 Pascals, which converts to exactly 101.325 kPa (or 1.01325 bar)."
    },
    {
      question: "How do I convert kPa back to Pa?",
      answer: "To convert kilopascals back to Pascals, perform the inverse calculation by multiplying the kPa value by 1,000 (e.g., 50 kPa × 1,000 = 50,000 Pa)."
    },
    {
      question: "Is kPa an official SI unit?",
      answer: "Yes. While the Pascal (Pa) is the base derived SI unit for pressure, the kilopascal (kPa) is an officially recognized decimal multiple within the SI system."
    },
    {
      question: "How does 1 kPa compare to PSI?",
      answer: "One kilopascal equals approximately 0.145038 pounds per square inch (PSI). Conversely, 1 PSI equals approximately 6.89476 kPa."
    },
    {
      question: "Can I use hectopascals (hPa) instead of kilopascals?",
      answer: "Yes. One hectopascal (hPa) equals 100 Pascals, meaning 1 kPa equals 10 hPa. Meteorologists often use hPa or mbar interchangeably, as 1 hPa = 1 mbar."
    }
  ],
  relatedList: [
    { label: "Kilopascal to Pascal", from: "kilopascal", to: "pascal" },
    { label: "Pascal to Megapascal", from: "pascal", to: "megapascal" },
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "National Institute of Standards and Technology (NIST) Special Publication 330: The International System of Units.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
