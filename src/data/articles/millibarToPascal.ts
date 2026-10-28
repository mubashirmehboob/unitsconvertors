import { CustomArticleData } from "./types";

export const millibarToPascal: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "pascal",
  seoTitle: "Millibar to Pascal Converter (mbar to Pa)",
  metaDescription: "Convert millibar to Pascal (mbar to Pa) with exact 100× precision. Discover formulas, meteorology examples, conversion charts, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-pascal",
  h1: "Millibar to Pascal Converter",
  introduction: [
    "Converting millibar to Pascal (Pa) is a fundamental calculation in meteorology, aerodynamics, HVAC engineering, and atmospheric physics. Weather forecasters and barometric instruments frequently measure pressure in millibars (mbar), while structural fluid calculations, scientific modeling, and ISO engineering specifications require the coherent SI unit, the Pascal.",
    "Because both units belong directly to the metric system, their relationship is exact and defined by international convention. One millibar equals one-thousandth of a bar (10⁻³ bar) and exactly 100 Pascals (100 N/m²). It is also identically equal to one hectopascal (1 mbar = 1 hPa). To convert millibar to Pascal, simply multiply the value by 100.",
    "This technical guide details the 100× metric conversion factor, presents step-by-step calculations for hurricane barometry and duct static pressure, provides an engineering conversion table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to Pascal, multiply the pressure value in millibar by 100. For example, standard atmospheric pressure of 1,013.25 mbar equals exactly 101,325 Pa, and a hurricane eye pressure of 950 mbar equals 95,000 Pa.",
    formulaDisplay: "Pa = mbar × 100",
    subtext: "1 mbar = 100 Pa (exact) | 1 Pa = 0.01 mbar | 1 mbar = 1 hPa"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar or mb) is a metric unit of pressure equal to 1/1,000 of a bar or exactly 100 Pascals. Introduced into operational weather forecasting in the early 20th century, it remains familiar on synoptic weather maps, aviation barometers, and marine weather bulletins."
  },
  aboutTargetUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the derived SI base unit of pressure, named after French scientist Blaise Pascal. Defined as a perpendicular force of one Newton exerted over an area of one square meter (1 N/m²), it is the mandatory standard across physics, thermodynamic tables, and computational fluid dynamics."
  },
  relationship: "The conversion between millibar and Pascal is exact: 1 millibar equals exactly 100 Pascals (1 mbar = 100 Pa). Conversely, 1 Pascal equals exactly 0.01 millibar (1 Pa = 0.01 mbar). Because 1 hectopascal (hPa) also equals 100 Pa, 1 mbar is identically equal to 1 hPa.",
  relationshipTitle: "Millibar to Pascal Physical Benchmarks",
  relationshipItems: [
    { label: "1 mbar", value: "100 Pa (1 hectopascal - Base scaling increment)" },
    { label: "2.5 mbar", value: "250 Pa (Residential clean room positive pressure)" },
    { label: "25 mbar", value: "2,500 Pa (HVAC commercial supply duct pressure)" },
    { label: "870 mbar", value: "87,000 Pa (Lowest recorded hurricane eye pressure: Typhoon Tip)" },
    { label: "1,000 mbar", value: "100,000 Pa (Exact 1 bar / 100 kPa metric threshold)" },
    { label: "1,013.25 mbar", value: "101,325 Pa (Standard sea-level atmospheric pressure)" },
    { label: "1,085 mbar", value: "108,500 Pa (Highest recorded Siberian high-pressure system)" },
    { label: "2,000 mbar", value: "200,000 Pa (2 bar absolute compressed air supply)" }
  ],
  formula: {
    text: "Multiply the pressure in millibar by 100 to obtain Pascals.",
    math: "\\text{Pa} = \\text{mbar} \\times 100",
    subtext: "To convert Pascals to millibar: divide by 100 (or multiply by 0.01)."
  },
  formulaTitle: "Millibar to Pascal Conversion Formula",
  practicalTip: {
    title: "The Two-Decimal Shift",
    text: "Because 1 mbar = 100 Pa, converting from millibar to Pascal simply requires moving the decimal point two places to the right (e.g., 1013.25 mbar becomes 101325 Pa). For integer values, append two zeros (e.g., 50 mbar becomes 5,000 Pa)."
  },
  expertNote: {
    title: "Millibar and Hectopascal Equivalence",
    text: "In the 1980s, the World Meteorological Organization (WMO) formally adopted the hectopascal (hPa) to conform with SI nomenclature. Because 'hecto' denotes a multiplier of 100, 1 hPa = 100 Pa. Consequently, numeric values in millibar and hectopascal are 100% interchangeable without any conversion factor."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Severe Weather Barometer Reading",
        subtitle: "A marine weather station records a barometric pressure drop to 965.40 mbar during a tropical storm. Convert this value to Pascals.",
        steps: [
          "State starting value: 965.40 mbar.",
          "Apply formula: Pa = mbar × 100.",
          "Calculate: 965.40 × 100 = 96,540 Pa.",
          "Result: 965.40 mbar equals exactly 96,540 Pa (96.54 kPa)."
        ]
      },
      {
        title: "Example 2: Commercial HVAC Fan Static Pressure",
        subtitle: "An air handling unit fan creates a static pressure head of 3.25 mbar in a supply plenum. Express this pressure in Pascals.",
        steps: [
          "Record pressure: 3.25 mbar.",
          "Calculate: 3.25 × 100 = 325 Pa.",
          "Result: 3.25 mbar equals exactly 325 Pa."
        ]
      },
      {
        title: "Example 3: Altimeter Setting Conversion",
        subtitle: "An aircraft flight management computer receives an altimeter setting (QNH) of 1,024 mbar. Convert this to Pascals for aerodynamic drag computations.",
        steps: [
          "State QNH: 1,024 mbar.",
          "Apply formula: 1,024 × 100 = 102,400 Pa.",
          "Conclusion: 1,024 mbar equals 102,400 Pa (102.40 kPa)."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to Pascal Lookup Table",
    headers: ["Millibar (mbar)", "Pascal (Pa)", "Hectopascal (hPa)", "Kilopascal (kPa)", "Environmental Benchmark"],
    rows: [
      { fromVal: "0.1 mbar", toVal: "10 Pa", extra: "0.1 hPa", extra2: "0.01 kPa", extra3: "Clean room differential pressure" },
      { fromVal: "1 mbar", toVal: "100 Pa", extra: "1 hPa", extra2: "0.1 kPa", extra3: "Light breeze dynamic pressure" },
      { fromVal: "10 mbar", toVal: "1,000 Pa", extra: "10 hPa", extra2: "1.0 kPa", extra3: "Commercial building duct pressure" },
      { fromVal: "100 mbar", toVal: "10,000 Pa", extra: "100 hPa", extra2: "10.0 kPa", extra3: "Stratospheric altitude (approx. 16 km)" },
      { fromVal: "500 mbar", toVal: "50,000 Pa", extra: "500 hPa", extra2: "50.0 kPa", extra3: "Mid-troposphere 5,500 m altitude" },
      { fromVal: "900 mbar", toVal: "90,000 Pa", extra: "900 hPa", extra2: "90.0 kPa", extra3: "Category 5 hurricane eye core" },
      { fromVal: "950 mbar", toVal: "95,000 Pa", extra: "950 hPa", extra2: "95.0 kPa", extra3: "Deep low-pressure extratropical cyclone" },
      { fromVal: "1,000 mbar", toVal: "100,000 Pa", extra: "1,000 hPa", extra2: "100.0 kPa", extra3: "1 bar exact reference" },
      { fromVal: "1,013.25 mbar", toVal: "101,325 Pa", extra: "1,013.25 hPa", extra2: "101.325 kPa", extra3: "Standard atmosphere at sea level" },
      { fromVal: "1,020 mbar", toVal: "102,000 Pa", extra: "1,020 hPa", extra2: "102.0 kPa", extra3: "Fair weather anticyclone ridge" },
      { fromVal: "1,050 mbar", toVal: "105,000 Pa", extra: "1,050 hPa", extra2: "105.0 kPa", extra3: "Strong polar winter high" },
      { fromVal: "2,000 mbar", toVal: "200,000 Pa", extra: "2,000 hPa", extra2: "200.0 kPa", extra3: "Industrial compressor receiver level" }
    ]
  },
  applications: {
    title: "Practical Applications",
    items: [
      {
        title: "Meteorological Data Processing",
        text: "Numerical weather prediction models ingest raw barometric data in mbar and calculate thermodynamic equations of state strictly in Pascals."
      },
      {
        title: "Aviation & Avionics Engineering",
        text: "Air data computers translate barometric altimeter subscale inputs from mbar into Pascals to compute calibrated airspeed and pressure altitude."
      },
      {
        title: "Building Pressurization Control",
        text: "Isolation rooms in hospitals and pharmaceutical clean rooms maintain pressure differentials between 1 and 5 mbar (100 to 500 Pa) to prevent airborne contamination."
      },
      {
        title: "Natural Gas Distribution",
        text: "Low-pressure utility gas lines operate between 20 and 50 mbar (2,000 to 5,000 Pa) before delivery to residential appliance burners."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of 100 (confusing millibar with the 1,000× factor from bar to millibar).",
      "Confusing Pascals with kilopascals: 1 mbar is 100 Pa, but 0.1 kPa.",
      "Assuming a conversion factor is needed between millibar and hectopascal; 1 mbar is identically 1 hPa.",
      "Forgetting that 1 standard atmosphere is 1,013.25 mbar, not 1,000 mbar."
    ]
  },
  faqs: [
      {
        question: "How many Pascals are in 1 millibar?",
        answer: "There are exactly 100 Pascals in 1 millibar. By definition, 1 bar is 100,000 Pascals, so 1 millibar (one-thousandth of a bar) equals 100,000 ÷ 1,000 = 100 Pa."
      },
      {
        question: "Is 1 millibar the same as 1 hectopascal?",
        answer: "Yes, exactly. The prefix 'hecto' signifies 100, meaning 1 hectopascal (hPa) equals 100 Pascals. Because 1 millibar also equals 100 Pascals, 1 mbar = 1 hPa."
      },
      {
        question: "How do you convert millibar to Pascal?",
        answer: "To convert millibar to Pascal, multiply the millibar value by 100: <strong>Pa = mbar × 100</strong>. For example, 10 mbar equals 1,000 Pa."
      },
      {
        question: "How do you convert Pascals to millibar?",
        answer: "Divide the Pascal value by 100 (or multiply by 0.01). For instance, 101,325 Pa divided by 100 equals 1,013.25 mbar."
      },
      {
        question: "What is sea level atmospheric pressure in mbar and Pa?",
        answer: "Standard sea-level atmospheric pressure is defined as exactly 1,013.25 millibar, which equals exactly 101,325 Pascals (101.325 kPa)."
      },
      {
        question: "Why do meteorologists use millibar and hectopascal instead of Pascal?",
        answer: "Normal atmospheric pressures are around 100,000 Pa. Using millibar or hectopascal yields manageable four-digit numbers like 1,013 rather than six-digit values."
      },
      {
        question: "How many millibars are in 1 kilopascal (kPa)?",
        answer: "There are 10 millibars in 1 kilopascal. Because 1 kPa = 1,000 Pa and 1 mbar = 100 Pa, dividing 1,000 by 100 gives 10 mbar."
      },
      {
        question: "What is 50 millibar in Pascal?",
        answer: "Fifty millibars equals exactly 5,000 Pascals (5 kPa). Multiply 50 by 100 to get 5,000 Pa."
      }
    ],
  references: [
    "World Meteorological Organization (WMO) Technical Regulations No. 49",
    "BIPM: The International System of Units (SI)",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "ISO 80000-4: Quantities and Units — Mechanics"
  ]
};
