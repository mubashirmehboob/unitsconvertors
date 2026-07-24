import { CustomArticleData } from "./types";

export const pascalToPsi: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "psi",
  seoTitle: "Pascal to PSI Converter (Pa to psi)",
  metaDescription: "Convert Pascals to PSI (Pa to pounds per square inch) with exact precision. Learn the 6,894.757 conversion factor, formula, worked examples, pressure tables, and FAQs.",
  h1: "Pascal to PSI Converter",
  introduction: [
    "Converting Pascals (Pa) to Pounds per Square Inch (PSI) bridges the gap between international SI metric standards and the U.S. Customary unit system. While scientific equipment, building codes, and European engineering operate in Pascals or kilopascals, automotive specifications, tire pressure gauges, and industrial hydraulics in North America rely heavily on PSI.",
    "Because the pound per square inch is defined using gravitational force and imperial area standards, 1 PSI equals exactly 6,894.757293168 Pascals. Converting Pascals to PSI involves dividing the pressure in Pascals by 6,894.757293 (or multiplying by 0.0001450377).",
    "This guide provides the exact mathematical conversion formula, step-by-step automotive and industrial examples, a comprehensive pressure lookup table, practical cross-system applications, and answers to frequently asked pressure conversion questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to PSI, divide the pressure value in Pascals by 6,894.757 (or multiply by 0.000145038). For example, 200,000 Pa equals approximately 29.01 PSI, and standard atmospheric pressure of 101,325 Pa equals approximately 14.70 PSI.",
    formulaDisplay: "PSI = Pa ÷ 6,894.757",
    subtext: "One Pascal is equal to approximately 0.0001450377 PSI."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the derived SI unit of pressure and mechanical stress, equal to one Newton per square meter (1 N/m²). Named after French philosopher and mathematician Blaise Pascal, it measures force applied uniformly across a surface. Because 1 Pascal represents a very small pressure, technical measurements frequently scale to kilopascals (kPa), megapascals (MPa), or PSI."
  },
  aboutTargetUnit: {
    title: "Understanding Pounds per Square Inch (PSI)",
    text: "Pounds per square inch (symbol: psi or lbf/in²) is an imperial and U.S. customary unit of pressure representing a force of one pound-force applied to an area of one square inch. PSI is the dominant unit for measuring vehicle tire inflation, scuba tank pressure, compressed gas cylinders, water supply pressure, and hydraulic systems across North America."
  },
  relationship: "The exact mathematical relationship is based on standard gravity (9.80665 m/s²) and imperial unit conversions (1 lb = 0.45359237 kg, 1 in = 0.0254 m): 1 PSI = 6,894.757293168 Pa, making 1 Pa ≈ 0.0001450377377 PSI.",
  relationshipTitle: "Pascal vs PSI Pressure Scale Comparison",
  relationshipItems: [
    { label: "1 Pa", value: "0.000145038 PSI (Base SI pressure)" },
    { label: "1,000 Pa", value: "0.145038 PSI (1 kPa / light suction)" },
    { label: "6,894.76 Pa", value: "1.000000 PSI (Exact 1 PSI threshold)" },
    { label: "101,325 Pa", value: "14.6959 PSI (1 Standard Atmosphere)" },
    { label: "240,000 Pa", value: "34.8091 PSI (Standard automobile tire pressure)" }
  ],
  formula: {
    text: "Divide the pressure value in Pascals by 6,894.757 to convert to pounds per square inch.",
    math: "PSI = Pa / 6894.757",
    subtext: "To convert PSI back to Pascals, multiply the PSI value by 6,894.757."
  },
  formulaTitle: "Pascal to PSI Conversion Formula",
  practicalTip: {
    title: "Quick Mental Math Estimation",
    text: "To quickly estimate PSI from kilopascals (kPa), divide kPa by 7 (since 1 PSI ≈ 6.895 kPa). For example, 140 kPa ÷ 7 ≈ 20 PSI."
  },
  expertNote: {
    title: "Gauge Pressure vs Absolute Pressure",
    text: "Pressure sensors often measure gauge pressure (PSIG), which excludes atmospheric pressure. To convert absolute Pascals to PSIG, subtract 101,325 Pa before dividing by 6,894.757."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Automotive Passenger Vehicle Tire Pressure",
        subtitle: "Convert a European vehicle tire specification of 220,000 Pa to PSI.",
        steps: [
          "Identify pressure in Pascals: 220,000 Pa.",
          "Apply conversion formula: PSI = Pa ÷ 6,894.757.",
          "Calculate: 220,000 ÷ 6,894.757 = 31.9083.",
          "Result: 220,000 Pa equals approximately 31.91 PSI (32 PSI)."
        ]
      },
      {
        title: "Example 2: Standard Sea-Level Atmospheric Pressure",
        subtitle: "Convert standard atmospheric pressure of 101,325 Pa to PSI.",
        steps: [
          "Identify starting pressure: 101,325 Pa.",
          "Divide by 6,894.757: 101,325 ÷ 6,894.757 = 14.6959.",
          "Result: 101,325 Pa equals approximately 14.70 PSI."
        ]
      },
      {
        title: "Example 3: Residential Water Pipe System",
        subtitle: "Convert a municipal water main pressure reading of 400,000 Pa to PSI.",
        steps: [
          "Identify pressure: 400,000 Pa.",
          "Apply formula: 400,000 ÷ 6,894.757 = 58.0151.",
          "Result: 400,000 Pa equals approximately 58.02 PSI."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to PSI Conversion Reference Table",
    headers: ["Pascals (Pa)", "Pounds per Sq. Inch (PSI)", "Kilopascals (kPa)", "Real-World Context"],
    rows: [
      { fromVal: "1,000 Pa", toVal: "0.145 PSI", extra: "1 kPa", extra2: "HVAC duct pressure" },
      { fromVal: "6,895 Pa", toVal: "1.000 PSI", extra: "6.895 kPa", extra2: "1 PSI pressure threshold" },
      { fromVal: "50,000 Pa", toVal: "7.252 PSI", extra: "50 kPa", extra2: "High-altitude atmospheric pressure" },
      { fromVal: "100,000 Pa", toVal: "14.504 PSI", extra: "100 kPa", extra2: "1 bar pressure baseline" },
      { fromVal: "101,325 Pa", toVal: "14.696 PSI", extra: "101.325 kPa", extra2: "Standard atmosphere (1 atm)" },
      { fromVal: "200,000 Pa", toVal: "29.008 PSI", extra: "200 kPa", extra2: "Passenger car tire pressure" },
      { fromVal: "250,000 Pa", toVal: "36.259 PSI", extra: "250 kPa", extra2: "SUV / crossover vehicle tire" },
      { fromVal: "500,000 Pa", toVal: "72.519 PSI", extra: "500 kPa", extra2: "Road bicycle tire / truck tire" },
      { fromVal: "1,000,000 Pa", toVal: "145.038 PSI", extra: "1,000 kPa (1 MPa)", extra2: "High-pressure air compressor" },
      { fromVal: "20,000,000 Pa", toVal: "2,900.75 PSI", extra: "20,000 kPa (20 MPa)", extra2: "Scuba diving air tank (3,000 psi)" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to PSI Conversion",
    items: [
      {
        title: "Automotive Import / Export Specifications",
        text: "European automobile manuals state tire pressures in kilopascals or bar, while North American air pumps display PSI. Mechanics convert Pa or kPa to PSI to ensure safe tire inflation."
      },
      {
        title: "Industrial & Hydraulic Machinery",
        text: "Hydraulic pumps imported from metric manufacturers specify pressure limits in Pascals or megapascals. U.S. technicians convert these figures to PSI for compatibility with local pressure gauges."
      },
      {
        title: "HVAC & Commercial Plumbing",
        text: "Plumbing codes set maximum household water main pressures in PSI (typically 50-80 PSI). Digital flow meters recording in Pascals convert values to PSI for municipal inspection reports."
      },
      {
        title: "Scuba Diving Equipment Calibration",
        text: "Aluminum scuba tanks in the U.S. are rated at 3,000 PSI (~20.7 MPa or 20,684,271 Pa). Converting international depth and cylinder sensor logs between Pa and PSI maintains diver safety."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing Pascals with kilopascals: 1 PSI = 6,894.76 Pa = 6.89476 kPa. Make sure your input value is in Pascals, not kilopascals.",
      "Conflating absolute pressure (PSIA) and gauge pressure (PSIG): Gauge pressure excludes atmospheric pressure (~14.7 PSI).",
      "Using rounded conversion factors in high-pressure engineering: Using 7,000 instead of 6,894.757 introduces a 1.5% calculation error.",
      "Confusing PSI with bar: 1 bar = 14.5038 PSI, but 1 bar = 100,000 Pa."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in 1 PSI?",
      answer: "There are exactly 6,894.757293168 Pascals in 1 Pound per Square Inch (PSI). In everyday engineering, this is rounded to 6,894.76 Pa or 6.895 kPa."
    },
    {
      question: "What is the formula to convert Pascals to PSI?",
      answer: "The formula is: PSI = Pa ÷ 6,894.757. Alternatively, multiply the Pascal value by 0.0001450377."
    },
    {
      question: "How many PSI is standard atmospheric pressure?",
      answer: "Standard atmospheric pressure at sea level (101,325 Pa) equals approximately 14.6959 PSI (commonly rounded to 14.7 PSI)."
    },
    {
      question: "How do I convert PSI back to Pascals?",
      answer: "To convert PSI back to Pascals, multiply the PSI value by 6,894.757 (e.g., 30 PSI × 6,894.757 = 206,842.71 Pa)."
    },
    {
      question: "How many PSI is 100 kPa?",
      answer: "Since 100 kPa equals 100,000 Pa, dividing by 6,894.757 yields approximately 14.5038 PSI."
    },
    {
      question: "What does PSI stand for?",
      answer: "PSI stands for Pounds per Square Inch, an imperial unit representing pounds-force applied to one square inch of surface area."
    },
    {
      question: "Is PSI an SI metric unit?",
      answer: "No. PSI is an imperial and U.S. Customary unit. The official SI unit for pressure is the Pascal (Pa)."
    },
    {
      question: "How many PSI is 1 bar?",
      answer: "One bar (100,000 Pa) equals approximately 14.5038 PSI."
    }
  ],
  relatedList: [
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" },
    { label: "Pascal to Megapascal", from: "pascal", to: "megapascal" },
    { label: "Pascal to Millibar", from: "pascal", to: "millibar" }
  ],
  references: [
    "National Institute of Standards and Technology (NIST) - Guide for the Use of the International System of Units (SI).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "Society of Automotive Engineers (SAE) - Pressure Measurement Standards."
  ]
};
