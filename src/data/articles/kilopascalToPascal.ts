import { CustomArticleData } from "./types";

export const kilopascalToPascal: CustomArticleData = {
  fromUnitId: "kilopascal",
  toUnitId: "pascal",
  seoTitle: "Kilopascal to Pascal Converter (kPa to Pa)",
  metaDescription: "Convert kilopascals to Pascals (kPa to Pa) with exact SI metric precision. Learn the × 1000 multiplier formula, worked calculation examples, lookup tables, and FAQs.",
  h1: "Kilopascal to Pascal Converter",
  introduction: [
    "Converting kilopascals (kPa) to Pascals (Pa) is a fundamental reverse unit conversion in engineering, physics, acoustics, HVAC system modeling, and fluid mechanics. While engineering specifications and barometric weather reports use kilopascals for readable numbers, core physical formulas (such as the Ideal Gas Law and Bernoulli's equation) require pressure in base SI Pascals.",
    "Because both units belong to the International System of Units (SI), converting kilopascals to Pascals is exact and simple. Since the prefix 'kilo-' represents a factor of one thousand (1,000), converting kPa to Pa requires multiplying the pressure in kilopascals by 1,000 or moving the decimal point three places to the right.",
    "This guide provides the exact mathematical formula, step-by-step calculation examples, an intuitive conversion lookup table, practical scientific applications, and answers to common metric pressure questions."
  ],
  quickAnswer: {
    text: "To convert kilopascals to Pascals, multiply the pressure value in kilopascals by 1,000. For example, 5 kPa equals 5,000 Pa, and standard atmospheric pressure of 101.325 kPa equals 101,325 Pa.",
    formulaDisplay: "Pa = kPa × 1,000",
    subtext: "One kilopascal is equal to exactly 1,000 Pascals."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is a standard decimal multiple of the Pascal, defined as 1,000 Pascals (10³ Pa). The prefix 'kilo-' signifies one thousand. Kilopascals are the standard unit for reporting barometric air pressure in meteorology outside the U.S., automobile tire inflation, building HVAC fan static pressure, and municipal water line ratings."
  },
  aboutTargetUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "Named after French scientist and philosopher Blaise Pascal, the Pascal (symbol: Pa) is the coherent derived SI unit of pressure, defined as a perpendicular force of one Newton exerted over an area of one square meter (1 N/m²). It is the foundational unit used in thermodynamic equations, physics simulations, and acoustic sound pressure level calculations."
  },
  relationship: "The relationship between kilopascals and Pascals is exact by SI metric definition: 1 kPa = 1,000 Pa, and 1 Pa = 0.001 kPa. There is zero approximation involved in this conversion.",
  relationshipTitle: "Kilopascal vs Pascal Pressure Scale Comparison",
  relationshipItems: [
    { label: "0.001 kPa", value: "1 Pa (Base SI pressure unit)" },
    { label: "0.1 kPa", value: "100 Pa (1 mbar / 1 hPa)" },
    { label: "1 kPa", value: "1,000 Pa (Low-pressure HVAC ducting)" },
    { label: "101.325 kPa", value: "101,325 Pa (Standard Sea-Level Atmosphere)" },
    { label: "250 kPa", value: "250,000 Pa (Standard car tire pressure)" }
  ],
  formula: {
    text: "Multiply the pressure in kilopascals by 1,000 to obtain the equivalent value in Pascals.",
    math: "Pa = kPa × 1000",
    subtext: "To convert Pascals back to kilopascals, divide the Pa value by 1,000."
  },
  formulaTitle: "Kilopascal to Pascal Formula",
  practicalTip: {
    title: "3-Decimal Shift Shortcut",
    text: "You can convert kPa to Pa instantly without a calculator by shifting the decimal point three positions to the right (e.g., 12.5 kPa becomes 12,500.0 Pa)."
  },
  expertNote: {
    title: "Thermodynamic Formula Input Rule",
    text: "When calculating gas parameters using PV = nRT or fluids using P + ½ρv² + ρgh = constant, pressure must be entered in base Pascals (N/m²), not kilopascals. Always convert kPa to Pa before plugging values into physics formulas."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting Standard Atmospheric Pressure",
        subtitle: "Convert standard sea-level pressure of 101.325 kPa to base Pascals for a thermodynamics problem.",
        steps: [
          "Identify starting pressure: 101.325 kPa.",
          "Apply conversion formula: Pa = kPa × 1,000.",
          "Calculate: 101.325 × 1,000 = 101,325.",
          "Result: 101.325 kPa is equal to exactly 101,325 Pa."
        ]
      },
      {
        title: "Example 2: Passenger Vehicle Tire Pressure",
        subtitle: "Convert a car tire pressure rating of 220 kPa into Pascals.",
        steps: [
          "Identify starting pressure: 220 kPa.",
          "Multiply by 1,000: 220 × 1,000 = 220,000.",
          "Result: 220 kPa equals 220,000 Pa."
        ]
      },
      {
        title: "Example 3: Building Ventilation Fan Pressure",
        subtitle: "Convert an HVAC static pressure reading of 1.5 kPa to Pascals.",
        steps: [
          "Identify pressure: 1.5 kPa.",
          "Apply formula: 1.5 × 1,000 = 1,500.",
          "Result: 1.5 kPa equals 1,500 Pa."
        ]
      }
    ]
  },
  table: {
    title: "Kilopascal to Pascal Conversion Table",
    headers: ["Kilopascals (kPa)", "Pascals (Pa)", "Real-World Engineering Context"],
    rows: [
      { fromVal: "0.001 kPa", toVal: "1 Pa", extra: "Base SI pressure benchmark" },
      { fromVal: "0.01 kPa", toVal: "10 Pa", extra: "Acoustic sound pressure threshold" },
      { fromVal: "0.1 kPa", toVal: "100 Pa", extra: "1 hectopascal / 1 millibar" },
      { fromVal: "0.5 kPa", toVal: "500 Pa", extra: "Residential ventilation fan static pressure" },
      { fromVal: "1 kPa", toVal: "1,000 Pa", extra: "Commercial HVAC duct pressure" },
      { fromVal: "10 kPa", toVal: "10,000 Pa", extra: "10% of atmospheric pressure" },
      { fromVal: "50 kPa", toVal: "50,000 Pa", extra: "Atmospheric pressure at 5,500m elevation" },
      { fromVal: "100 kPa", toVal: "100,000 Pa", extra: "1 bar metric baseline" },
      { fromVal: "101.325 kPa", toVal: "101,325 Pa", extra: "Standard sea-level atmospheric pressure" },
      { fromVal: "200 kPa", toVal: "200,000 Pa", extra: "Automobile tire pressure (~29 psi)" },
      { fromVal: "500 kPa", toVal: "500,000 Pa", extra: "Municipal water supply pipeline rating" }
    ]
  },
  applications: {
    title: "Real-World Applications of kPa to Pa Conversion",
    items: [
      {
        title: "Academic & Research Physics",
        text: "Physics textbooks and lab assignments state pressure conditions in kilopascals. Students convert these values to Pascals before solving Ideal Gas Law (PV = nRT) calculations."
      },
      {
        title: "Fluid Mechanics & Pipe Hydraulics",
        text: "Engineers calculate head loss and friction factors using Pascal units. Converting pressure drops from kilopascals to Pascals ensures correct Reynolds number and flow rate outputs."
      },
      {
        title: "Acoustics & Environmental Noise Control",
        text: "Sound pressure levels are calculated in Pascals relative to the human hearing threshold (20 μPa = 0.00002 Pa). Converting microphone sensor data in kPa back to Pa allows decibel (dB SPL) calculations."
      },
      {
        title: "Automotive Engine Control Units (ECUs)",
        text: "Manifold Absolute Pressure (MAP) sensors send voltage signals representing pressure in kilopascals. ECUs convert these to Pascals to calculate air mass flow and fuel injection timing."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of multiplying: Converting kPa to Pa increases the numerical value, so you must multiply by 1,000.",
      "Miscounting zeros when shifting decimal places: Shift three places to the right when converting kPa to Pa.",
      "Confusing kPa with MPa: 1 MPa = 1,000 kPa = 1,000,000 Pa.",
      "Mixing up symbols: Kilopascal is written 'kPa' (lowercase k) and Pascal is 'Pa' (capital P)."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in one kilopascal?",
      answer: "There are exactly 1,000 Pascals in one kilopascal."
    },
    {
      question: "What is the formula to convert kPa to Pa?",
      answer: "The formula is: Pa = kPa × 1,000."
    },
    {
      question: "Is 100 kPa equal to 100,000 Pa?",
      answer: "Yes, exactly. Multiplying 100 kPa by 1,000 equals 100,000 Pa (which also equals 1 bar)."
    },
    {
      question: "What is standard atmospheric pressure in Pascals?",
      answer: "Standard atmospheric pressure is 101.325 kPa, which converts to exactly 101,325 Pascals."
    },
    {
      question: "Why do physics formulas require pressure in Pascals instead of kPa?",
      answer: "Because the Pascal is the coherent base derived SI unit (1 N/m²). Using non-base units in dimensional equations like PV = nRT leads to incorrect magnitude errors unless scaling constants are added."
    },
    {
      question: "How do I convert Pa back to kPa?",
      answer: "To convert Pascals back to kilopascals, divide the Pascal value by 1,000 (e.g., 50,000 Pa ÷ 1,000 = 50 kPa)."
    },
    {
      question: "Is kPa an official SI unit?",
      answer: "Yes. The kilopascal is an officially recognized decimal multiple of the SI base derived unit for pressure (the Pascal)."
    },
    {
      question: "How many Pascals is 1 PSI?",
      answer: "One PSI equals approximately 6.89476 kPa, which equals approximately 6,894.76 Pascals."
    }
  ],
  relatedList: [
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" },
    { label: "Kilopascal to Megapascal", from: "kilopascal", to: "megapascal" },
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition.",
    "NIST Special Publication 330: The International System of Units.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
