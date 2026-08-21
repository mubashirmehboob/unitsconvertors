import { CustomArticleData } from "./types";

export const kilopascalToAtmosphere: CustomArticleData = {
  fromUnitId: "kilopascal",
  toUnitId: "atmosphere",
  seoTitle: "Kilopascal to Atmosphere Converter (kPa to atm)",
  metaDescription: "Convert kilopascals to standard atmospheres (kPa to atm) with exact scientific precision. Learn the 101.325 divisor formula, physics & chemistry examples, tables, and FAQs.",
  h1: "Kilopascal to Atmosphere Converter",
  introduction: [
    "Converting kilopascals (kPa) to standard atmospheres (atm) is a foundational calculation across physical chemistry, chemical thermodynamics, deep-sea diving physiology, meteorology, and high-pressure gas storage. While modern international standards, building safety codes, and laboratory instrumentation record pressures in metric kilopascals, theoretical gas laws, chemical equilibrium phase diagrams, and diving decompression models are traditionally formulated in standard atmospheres.",
    "By international agreement established at the 10th General Conference on Weights and Measures (CGPM) in 1954, one standard atmosphere is defined as exactly 101,325 Pascals (101.325 kPa). To convert kilopascals into standard atmospheres, divide the pressure in kilopascals by 101.325 (or multiply by approximately 0.00986923). This provides an exact conversion grounded directly in international SI constants.",
    "This comprehensive guide details the definition of standard pressure, step-by-step calculation examples for chemistry and diving, a full pressure reference table across atmospheric depths and altitudes, and answers to frequently asked scientific questions."
  ],
  quickAnswer: {
    text: "To convert kilopascals to standard atmospheres, divide the pressure value in kilopascals by 101.325 (or multiply by 0.00986923). For example, 202.65 kPa equals exactly 2.0 atm, and 100 kPa equals approximately 0.9869 atm.",
    formulaDisplay: "atm = kPa ÷ 101.325 ≈ kPa × 0.00986923",
    subtext: "Exact definition: 1 atm = 101.325 kPa = 101,325 Pa.\n1 kPa = 1 / 101.325 atm ≈ 0.00986923 atm."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an official decimal multiple of the Pascal, defined as 1,000 Newtons per square meter (1,000 Pa). It is the recognized SI unit for atmospheric pressure reporting, building HVAC systems, material compressive stress tests, and fluid hydraulics."
  },
  aboutTargetUnit: {
    title: "Understanding the Standard Atmosphere (atm)",
    text: "The standard atmosphere (symbol: atm) is an international non-SI reference unit of pressure defined as exactly 101,325 Pascals (101.325 kPa). Established to represent mean sea-level atmospheric pressure at 0 °C under standard gravity (9.80665 m/s²), it serves as the baseline for Ideal Gas Law calculations, chemical standard states, and scuba diving depths."
  },
  relationship: "The relationship between kilopascals and standard atmospheres is exact: 1 atm = 101.325 kPa, and 1 kPa = 1 / 101.325 atm ≈ 0.009869232667 atm. Dividing any kilopascal value by 101.325 produces its exact equivalent in standard atmospheres.",
  relationshipTitle: "Kilopascal to Atmosphere Benchmark Scale",
  relationshipItems: [
    { label: "10.1325 kPa", value: "0.1000 atm (Stratospheric flight altitude ~16 km)" },
    { label: "50.6625 kPa", value: "0.5000 atm (Mt. Everest summit atmospheric level)" },
    { label: "100.0 kPa", value: "0.9869 atm (1 bar metric reference baseline)" },
    { label: "101.325 kPa", value: "1.0000 atm (Standard sea-level atmosphere baseline)" },
    { label: "202.65 kPa", value: "2.0000 atm (Ambient pressure at 10m seawater depth)" },
    { label: "1,013.25 kPa", value: "10.0000 atm (Hyperbaric / 90m underwater pressure)" }
  ],
  formula: {
    text: "Divide the pressure in kilopascals by 101.325 to calculate the equivalent value in standard atmospheres.",
    math: "\\text{atm} = \\frac{\\text{kPa}}{101.325} \\approx \\text{kPa} \\times 0.00986923",
    subtext: "To convert standard atmospheres back to kilopascals, multiply the atm value by 101.325."
  },
  formulaTitle: "Kilopascal to Atmosphere Formula",
  practicalTip: {
    title: "Divide by 100 Approximate Mental Rule",
    text: "Because 101.325 is very close to 100, you can approximate atmospheres quickly by dividing kPa by 100 and subtracting ~1.3% (e.g., 500 kPa ÷ 100 = 5, minus 1.3% ≈ 4.935 atm vs true 4.9346 atm)."
  },
  expertNote: {
    title: "Standard Temperature and Pressure (STP) Standards",
    text: "Note the IUPAC vs. classical STP difference: IUPAC standard ambient pressure is defined as exactly 100 kPa (1 bar = 0.986923 atm), whereas classical NIST standard pressure is 101.325 kPa (exactly 1.0000 atm)."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Scuba Diving Ambient Pressure (303.975 kPa)",
        subtitle: "A diver's computer at 20 meters sea depth records an absolute ambient pressure of 303.975 kPa. Convert this to standard atmospheres.",
        steps: [
          "State starting ambient pressure: 303.975 kPa.",
          "Apply conversion formula: atm = 303.975 ÷ 101.325.",
          "Calculate: 303.975 ÷ 101.325 = 3.0.",
          "Result: 303.975 kPa equals exactly 3.00 atm (1 atm surface air + 2 atm hydrostatic water pressure)."
        ]
      },
      {
        title: "Example 2: Chemical Autoclave Reaction Vessel (450 kPa)",
        subtitle: "An industrial synthesis autoclave operates at an absolute pressure of 450 kPa. Express this pressure in atmospheres for a thermodynamic phase equilibrium study.",
        steps: [
          "Identify vessel pressure: 450 kPa.",
          "Apply formula: atm = 450 / 101.325.",
          "Calculate: 450 ÷ 101.325 = 4.44115.",
          "Result: 450 kPa equals approximately 4.44 atm."
        ]
      },
      {
        title: "Example 3: High-Altitude Atmospheric Pressure (55 kPa)",
        subtitle: "At an alpine research station, barometric pressure reads 55 kPa. Convert to atmospheres.",
        steps: [
          "State pressure: 55 kPa.",
          "Apply conversion: atm = 55 × 0.00986923.",
          "Calculate: 55 × 0.00986923 = 0.5428.",
          "Result: 55 kPa corresponds to approximately 0.543 atm."
        ]
      }
    ]
  },
  table: {
    title: "Kilopascal to Atmosphere Conversion Table",
    headers: ["Kilopascals (kPa)", "Atmospheres (atm)", "Bar Equivalent", "Scientific / Physical Environment"],
    rows: [
      { fromVal: "10 kPa", toVal: "0.09869 atm", extra: "0.100 bar", extra2: "Stratospheric weather balloon altitude" },
      { fromVal: "25 kPa", toVal: "0.24673 atm", extra: "0.250 bar", extra2: "Commercial aircraft cruise (~10.5 km)" },
      { fromVal: "50 kPa", toVal: "0.49346 atm", extra: "0.500 bar", extra2: "Mount Everest summit atmospheric pressure" },
      { fromVal: "75 kPa", toVal: "0.74019 atm", extra: "0.750 bar", extra2: "High-altitude city (La Paz, Bolivia)" },
      { fromVal: "100 kPa", toVal: "0.98692 atm", extra: "1.000 bar", extra2: "IUPAC standard pressure reference" },
      { fromVal: "101.325 kPa", toVal: "1.00000 atm", extra: "1.013 bar", extra2: "Standard international sea-level atmosphere" },
      { fromVal: "150 kPa", toVal: "1.48039 atm", extra: "1.500 bar", extra2: "Moderate hyperbaric oxygen therapy" },
      { fromVal: "200 kPa", toVal: "1.97385 atm", extra: "2.000 bar", extra2: "Scuba depth at ~10 meters (33 ft)" },
      { fromVal: "300 kPa", toVal: "2.96077 atm", extra: "3.000 bar", extra2: "Scuba depth at ~20 meters (66 ft)" },
      { fromVal: "500 kPa", toVal: "4.93462 atm", extra: "5.000 bar", extra2: "Commercial deep diving chamber" },
      { fromVal: "1,000 kPa", toVal: "9.86923 atm", extra: "10.000 bar", extra2: "Industrial gas cylinder intermediate regulator" }
    ]
  },
  applications: {
    title: "Primary Scientific & Engineering Applications",
    items: [
      {
        title: "Chemical Thermodynamics & Gas Laws",
        text: "Physical chemists use atmospheres when applying the Ideal Gas constant $R = 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$. Pressure sensor outputs measured in kPa are converted to atm before calculation."
      },
      {
        title: "Hyperbaric Medicine & Decompression",
        text: "Hyperbaric oxygen therapy (HBOT) chambers regulate pressures in kilopascals while medical treatment protocols dictate therapeutic exposures in atmospheres absolute (ATA)."
      },
      {
        title: "Oceanography & Submersible Engineering",
        text: "Marine researchers calculate total hydrostatic force on deep-sea submersibles by converting sensor pressure from kPa into atmospheres (where each 10 meters of water adds roughly 1 atm)."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 101.325 instead of dividing: Converting kPa to atm reduces the numeric value, requiring division by 101.325.",
      "Confusing standard atmosphere (atm) with technical atmosphere (at): 1 at = $1\\text{ kgf/cm}^2 = 98.0665\\text{ kPa}$, while 1 atm = $101.325\\text{ kPa}$.",
      "Confusing bar with atmosphere: 1 bar = 100 kPa = 0.986923 atm; 1 atm = 1.01325 bar."
    ]
  },
  faqs: [
    {
      question: "How do you convert kilopascals to atmospheres?",
      answer: "Divide the pressure value in kilopascals by 101.325 (or multiply by approximately 0.00986923)."
    },
    {
      question: "How many kilopascals are in 1 standard atmosphere?",
      answer: "There are exactly 101.325 kilopascals in 1 standard atmosphere (1 atm = 101.325 kPa = 101,325 Pa)."
    },
    {
      question: "What is 100 kPa in atmospheres?",
      answer: "100 kPa equals approximately 0.986923 atm (100 ÷ 101.325 ≈ 0.986923 atm)."
    },
    {
      question: "What is 200 kPa in atmospheres?",
      answer: "200 kPa equals approximately 1.97385 atm (200 ÷ 101.325 ≈ 1.97385 atm)."
    },
    {
      question: "How do you convert atmospheres back to kilopascals?",
      answer: "Multiply the pressure in atmospheres by 101.325. For example, 3 atm × 101.325 = 303.975 kPa."
    },
    {
      question: "Is 1 bar the same as 1 atm?",
      answer: "No. 1 bar equals exactly 100 kPa (0.986923 atm), whereas 1 atm equals exactly 101.325 kPa (1.01325 bar). An atmosphere is about 1.325% larger than a bar."
    },
    {
      question: "What is 500 kPa in atmospheres?",
      answer: "500 kPa equals approximately 4.9346 atm (500 ÷ 101.325 ≈ 4.9346 atm)."
    },
    {
      question: "Why is 101.325 kPa chosen as standard atmosphere?",
      answer: "It represents the historical international average atmospheric air pressure at mean sea level at 0 °C under standard gravity (9.80665 m/s²), formally standardized by the 10th CGPM in 1954."
    }
  ],
  relatedList: [
    { label: "Atmosphere to Kilopascal", from: "atmosphere", to: "kilopascal" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" },
    { label: "Kilopascal to Bar", from: "kilopascal", to: "bar" },
    { label: "Kilopascal to PSI", from: "kilopascal", to: "psi" },
    { label: "Kilopascal to Torr", from: "kilopascal", to: "torr" }
  ],
  references: [
    "Bureau International des Poids et Mesures (BIPM): Resolutions of the 10th CGPM (1954).",
    "IUPAC Compendium of Chemical Terminology (Gold Book): Standard Pressure.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
