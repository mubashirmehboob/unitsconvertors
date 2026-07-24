import { CustomArticleData } from "./types";

export const pascalToAtmosphere: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "atmosphere",
  seoTitle: "Pascal to Atmosphere Converter (Pa to atm)",
  metaDescription: "Convert Pascals to standard atmospheres (Pa to atm) with absolute scientific precision. Learn the exact 101,325 Pa definition, formula, physics examples, tables, and FAQs.",
  h1: "Pascal to Atmosphere Converter",
  introduction: [
    "Converting Pascals (Pa) to standard atmospheres (atm) is a core calculation in thermodynamics, chemistry, meteorology, oceanography, and chemical engineering. The Pascal is the coherent derived unit of pressure in the International System of Units (SI), whereas the standard atmosphere is a reference baseline equal to mean atmospheric pressure at sea level.",
    "By international agreement established by the 10th General Conference on Weights and Measures (CGPM) in 1954, one standard atmosphere is defined as exactly 101,325 Pascals. Converting Pascals to atmospheres is an exact mathematical process: simply divide the pressure in Pascals by 101,325.",
    "This guide covers the historical definition of the standard atmosphere, the exact conversion formula, step-by-step physical chemistry calculations, a pressure reference table across atmospheric regimes, real-world scientific applications, and answers to common conversion questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to standard atmospheres, divide the pressure value in Pascals by 101,325. For example, 202,650 Pa equals exactly 2 atm, and 50,000 Pa equals approximately 0.4935 atm.",
    formulaDisplay: "atm = Pa ÷ 101,325",
    subtext: "One Pascal is equal to exactly 1 / 101,325 standard atmosphere (≈ 0.00000986923 atm)."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the SI base derived unit of pressure and mechanical stress, defined as one Newton of force applied perpendicularly over an area of one square meter (1 N/m²). Named in honor of Blaise Pascal, it provides a precise unit for measuring pressure across all scientific disciplines."
  },
  aboutTargetUnit: {
    title: "Understanding the Standard Atmosphere (atm)",
    text: "The standard atmosphere (symbol: atm) is an international reference unit of pressure defined as exactly 101,325 Pascals (101.325 kPa or 1.01325 bar). Historically established to represent mean sea-level air pressure at a temperature of 0 °C under standard gravity (9.80665 m/s²), the standard atmosphere remains the standard reference point for gas phase reactions, thermodynamics, industrial gas storage, and deep-sea diving calculations."
  },
  relationship: "The relationship between Pascals and atmospheres is defined as an exact mathematical constant: 1 atm = 101,325 Pa, which yields 1 Pa = 1 / 101,325 atm ≈ 0.000009869232667 atm.",
  relationshipTitle: "Pascal vs Standard Atmosphere Benchmark Scale",
  relationshipItems: [
    { label: "1 Pa", value: "0.000009869 atm (Minimal SI pressure unit)" },
    { label: "10,000 Pa", value: "0.0986923 atm (High-altitude atmospheric level)" },
    { label: "101,325 Pa", value: "1.000000 atm (Standard sea-level atmospheric baseline)" },
    { label: "202,650 Pa", value: "2.000000 atm (Double sea-level ambient pressure)" },
    { label: "1,013,250 Pa", value: "10.000000 atm (Subsurface water depth pressure at ~90m)" }
  ],
  formula: {
    text: "Divide the pressure value in Pascals by 101,325 to convert to standard atmospheres.",
    math: "atm = Pa / 101325",
    subtext: "To convert standard atmospheres back to Pascals, multiply the atm value by 101,325."
  },
  formulaTitle: "Pascal to Atmosphere Formula",
  practicalTip: {
    title: "Quick Estimation Rule",
    text: "For rapid mental estimates, divide the pressure in Pascals by 100,000 (which gives bars), as 1 bar (100,000 Pa) is within 1.3% of 1 atmosphere (101,325 Pa)."
  },
  expertNote: {
    title: "IUPAC Standard Temperature & Pressure Note",
    text: "In 1982, IUPAC redefined Standard Pressure for chemical thermodynamics from 1 atm (101,325 Pa) to exactly 1 bar (100,000 Pa). Always confirm whether your protocol specifies standard atmosphere (1 atm) or standard baric state (1 bar)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Deep Scuba Diving Ambient Pressure",
        subtitle: "Convert a total hydrostatic pressure reading of 405,300 Pa at 30 meters water depth to atmospheres.",
        steps: [
          "Identify total pressure in Pascals: 405,300 Pa.",
          "Apply conversion formula: atm = Pa ÷ 101,325.",
          "Calculate: 405,300 ÷ 101,325 = 4.0.",
          "Result: 405,300 Pa equals exactly 4.0 atm (1 atm air + 3 atm water)."
        ]
      },
      {
        title: "Example 2: Commercial Airliner Cruise Altitude",
        subtitle: "Convert an outside ambient pressure reading of 22,000 Pa at 11,000 meters altitude to atmospheres.",
        steps: [
          "Identify pressure: 22,000 Pa.",
          "Divide by 101,325: 22,000 ÷ 101,325 = 0.217123.",
          "Result: 22,000 Pa equals approximately 0.217 atm."
        ]
      },
      {
        title: "Example 3: Chemical Autoclave Pressure Rating",
        subtitle: "Convert an industrial reactor vessel pressure of 1,500,000 Pa to atmospheres.",
        steps: [
          "Identify vessel pressure: 1,500,000 Pa.",
          "Apply formula: 1,500,000 ÷ 101,325 = 14.80385.",
          "Result: 1,500,000 Pa equals approximately 14.80 atm."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to Atmosphere Conversion Table",
    headers: ["Pascals (Pa)", "Atmospheres (atm)", "Kilopascals (kPa)", "Real-World Scientific Context"],
    rows: [
      { fromVal: "1,000 Pa", toVal: "0.00987 atm", extra: "1 kPa", extra2: "Low-pressure laboratory vacuum" },
      { fromVal: "10,000 Pa", toVal: "0.09869 atm", extra: "10 kPa", extra2: "Atmospheric pressure at 16 km altitude" },
      { fromVal: "50,000 Pa", toVal: "0.49346 atm", extra: "50 kPa", extra2: "Summit of Mount Everest pressure (~0.33-0.5 atm)" },
      { fromVal: "100,000 Pa", toVal: "0.98692 atm", extra: "100 kPa", extra2: "1 bar pressure (IUPAC STP baseline)" },
      { fromVal: "101,325 Pa", toVal: "1.00000 atm", extra: "101.325 kPa", extra2: "Standard atmosphere at sea level" },
      { fromVal: "200,000 Pa", toVal: "1.97385 atm", extra: "200 kPa", extra2: "10m water column hydrostatic depth" },
      { fromVal: "500,000 Pa", toVal: "4.93462 atm", extra: "500 kPa", extra2: "Industrial compressed gas supply" },
      { fromVal: "1,013,250 Pa", toVal: "10.0000 atm", extra: "1,013.25 kPa", extra2: "90m ocean water depth pressure" },
      { fromVal: "10,132,500 Pa", toVal: "100.000 atm", extra: "10,132.5 kPa", extra2: "Surface atmospheric pressure of Venus (~92 atm)" },
      { fromVal: "108,000,000 Pa", toVal: "1,065.88 atm", extra: "108,000 kPa", extra2: "Mariana Trench ocean floor pressure (~1,070 atm)" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to atm Conversion",
    items: [
      {
        title: "Physical Chemistry & Gas Laws",
        text: "The Ideal Gas Law (PV = nRT) frequently uses the gas constant R = 0.08206 L·atm/(mol·K). Converting pressure data from laboratory sensors in Pascals into atmospheres is essential for gas stoichiometry."
      },
      {
        title: "Diving & Hyperbaric Medicine",
        text: "Haldane decompression models calculate nitrogen tissue absorption based on ambient pressure in atmospheres absolute (ATA). Converting sensor depth logs in Pascals to atmospheres prevents decompression sickness."
      },
      {
        title: "Aeronautics & Meteorology",
        text: "Aerospace engineers compare cabin pressurization systems against sea-level atmospheric standards (1 atm) to ensure passenger safety at cruising altitudes where external pressure drops below 0.25 atm."
      },
      {
        title: "High-Pressure Industrial Autoclaves",
        text: "Chemical synthesis vessels and food sterilization autoclaves operate at multiples of atmospheric pressure. Converting sensor signals in Pascals to atmospheres provides clear operator monitoring."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing standard atmosphere (atm) with technical atmosphere (at): 1 atm = 101,325 Pa, whereas 1 at = 1 kgf/cm² = 98,066.5 Pa.",
      "Confusing standard atmosphere (atm) with bar: 1 atm = 101,325 Pa, while 1 bar = 100,000 Pa exact.",
      "Dividing by 100,000 instead of 101,325: Dividing by 100,000 gives bars, which causes a 1.325% error when computing atmospheres.",
      "Ignoring IUPAC standard pressure updates: Remember that modern chemistry STP uses 1 bar (100 kPa), while classical chemistry used 1 atm (101.325 kPa)."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in 1 standard atmosphere?",
      answer: "There are exactly 101,325 Pascals in 1 standard atmosphere (atm), as established by international standard CGPM definition."
    },
    {
      question: "What is the formula to convert Pascals to atmospheres?",
      answer: "The formula is: atm = Pa ÷ 101,325. Alternatively, multiply the Pascal value by 0.00000986923."
    },
    {
      question: "Why is 1 atm defined as 101,325 Pa?",
      answer: "In 1954, the 10th CGPM defined 1 atm as exactly 1,013,250 dynes per square centimeter (101,325 N/m² or Pa) to establish an immutable international baseline independent of local weather fluctuations."
    },
    {
      question: "How do I convert atmospheres back to Pascals?",
      answer: "To convert atmospheres back to Pascals, multiply the atm value by 101,325 (e.g., 2.5 atm × 101,325 = 253,312.5 Pa)."
    },
    {
      question: "What is the difference between bar and atm?",
      answer: "One bar equals exactly 100,000 Pa, whereas 1 atm equals exactly 101,325 Pa. Thus, 1 atm is slightly greater than 1 bar (1 atm = 1.01325 bar)."
    },
    {
      question: "How many PSI is 1 atm?",
      answer: "One standard atmosphere (101,325 Pa) equals approximately 14.6959 pounds per square inch (PSI)."
    },
    {
      question: "How many Torr are in 1 atm?",
      answer: "There are exactly 760 Torr in 1 standard atmosphere (760 mmHg)."
    },
    {
      question: "Is the atmosphere an official SI unit?",
      answer: "No. The standard atmosphere is a non-SI unit, though it remains widely used in chemistry, oceanography, and thermodynamics alongside SI units."
    }
  ],
  relatedList: [
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" },
    { label: "Pascal to Torr", from: "pascal", to: "torr" },
    { label: "Pascal to Millibar", from: "pascal", to: "millibar" }
  ],
  references: [
    "10th General Conference on Weights and Measures (CGPM) 1954, Resolution 4.",
    "BIPM - The International System of Units (SI), 9th Edition.",
    "IUPAC Compendium of Chemical Terminology (Gold Book) - Standard Pressure."
  ]
};
