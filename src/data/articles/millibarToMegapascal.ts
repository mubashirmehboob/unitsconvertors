import { CustomArticleData } from "./types";

export const millibarToMegapascal: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "megapascal",
  seoTitle: "Millibar to Megapascal Converter (mbar to MPa)",
  metaDescription: "Convert millibar to megapascal (mbar to MPa) with exact scientific precision. Explore formulas, industrial engineering examples, conversion charts, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-megapascal",
  h1: "Millibar to Megapascal Converter",
  introduction: [
    "Converting millibar to megapascal (MPa) connects sensitive barometric and low-pressure instrumentation with high-pressure fluid power, structural geology, material testing, and heavy hydraulic machinery. While the millibar is suited for atmospheric and slight differential pressures, the megapascal is the SI standard for expressing tens of millions of Pascals in rock mechanics, concrete compression strength, and high-pressure hydraulics.",
    "Because both units belong to the coherent metric system, their relationship is an exact decimal power. One millibar equals 100 Pascals (10² Pa). One megapascal equals 1,000,000 Pascals (10⁶ Pa). Therefore, one millibar equals 100 ÷ 1,000,000 = 0.0001 megapascal (10⁻⁴ MPa). To convert millibars to megapascals, divide the value by 10,000 (or multiply by 0.0001).",
    "This technical guide explains the 10,000-fold conversion relationship, provides step-by-step calculations for pressure vessels and deep oceanic geology, presents a comprehensive conversion table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to megapascal (MPa), divide the millibar value by 10,000 (or multiply by 0.0001). For example, 10,000 mbar equals exactly 1 MPa, and standard atmospheric pressure of 1,013.25 mbar equals approximately 0.101325 MPa.",
    formulaDisplay: "MPa = mbar ÷ 10,000",
    subtext: "1 mbar = 0.0001 MPa (10⁻⁴ MPa) | 1 MPa = 10,000 mbar | Exact metric conversion"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) represents 1/1,000 of a bar or 100 Pascals. It is the classic unit of weather barometry and subtle gas line pressures, matching the hectopascal (hPa) exactly."
  },
  aboutTargetUnit: {
    title: "Understanding the Megapascal (MPa)",
    text: "The megapascal (symbol: MPa) is an SI-derived multiple unit equal to one million Pascals (1,000,000 N/m² or 1 N/mm²). It is the universal standard for mechanical stress, yield strength, concrete compressive strength, hydraulic pressures, and petroleum reservoir engineering."
  },
  relationship: "The relationship between millibar and megapascal is an exact power-of-ten ratio: 1 millibar equals exactly 0.0001 megapascal (10⁻⁴ MPa). Conversely, 1 megapascal equals exactly 10,000 millibars (10⁴ mbar).",
  relationshipTitle: "Millibar to Megapascal Scale Benchmarks",
  relationshipItems: [
    { label: "1 mbar", value: "0.0001 MPa (100 Pa - Exact base ratio)" },
    { label: "100 mbar", value: "0.0100 MPa (10 kPa - Low-pressure testing)" },
    { label: "1,000 mbar", value: "0.1000 MPa (100 kPa / 1 bar exact)" },
    { label: "1,013.25 mbar", value: "0.101325 MPa (Standard sea-level atmosphere)" },
    { label: "10,000 mbar", value: "1.0000 MPa (10 bar - Industrial plant air header)" },
    { label: "50,000 mbar", value: "5.0000 MPa (50 bar - Medium hydraulic system)" },
    { label: "100,000 mbar", value: "10.0000 MPa (100 bar - High-pressure steam turbine)" },
    { label: "1,000,000 mbar", value: "100.0000 MPa (1,000 bar - Hydrostatic deep-sea simulation)" }
  ],
  formula: {
    text: "Divide the pressure in millibar by 10,000 (or multiply by 0.0001) to obtain megapascals.",
    math: "\\text{MPa} = \\frac{\\text{mbar}}{10\\,000} = \\text{mbar} \\times 0.0001",
    subtext: "To convert megapascals back to millibar: multiply MPa by 10,000."
  },
  formulaTitle: "Millibar to Megapascal Conversion Formula",
  practicalTip: {
    title: "Four-Decimal Shift Rule",
    text: "To convert from millibar to MPa, simply shift the decimal point four places to the left. For example: 50,000 mbar becomes 5.0 MPa, and 1,013.25 mbar becomes 0.101325 MPa."
  },
  expertNote: {
    title: "Span Across Nine Orders of Magnitude",
    text: "Engineers regularly encounter millibars when calculating atmospheric buoyancy or vacuum chamber pump-down, while analyzing the yield strength of the chamber's steel walls in MPa. Bridging these scales accurately prevents catastrophic structural failures during pressure vessel certification."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Pressure Vessel Proof Testing",
        subtitle: "A pneumatic accumulator is proof-tested at 35,000 mbar. Express this test pressure in megapascals for compliance documentation.",
        steps: [
          "State starting pressure: 35,000 mbar.",
          "Apply conversion: MPa = mbar ÷ 10,000.",
          "Calculate: 35,000 ÷ 10,000 = 3.5 MPa.",
          "Result: 35,000 mbar equals exactly 3.5 MPa (35 bar)."
        ]
      },
      {
        title: "Example 2: Atmospheric Pressure in SI Stress Units",
        subtitle: "Convert standard sea-level atmospheric pressure of 1,013.25 mbar into megapascals.",
        steps: [
          "Record pressure: 1,013.25 mbar.",
          "Multiply: 1,013.25 × 0.0001 = 0.101325 MPa.",
          "Conclusion: 1,013.25 mbar equals exactly 0.101325 MPa."
        ]
      },
      {
        title: "Example 3: Deep Submersible External Pressure",
        subtitle: "An oceanographic probe descends to an ocean depth where external hydrostatic pressure reaches 450,000 mbar. Calculate the pressure in MPa.",
        steps: [
          "Record value: 450,000 mbar.",
          "Divide by 10,000: 450,000 ÷ 10,000 = 45 MPa.",
          "Result: 450,000 mbar equals 45 MPa."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to Megapascal Conversion Table",
    headers: ["Millibar (mbar)", "Megapascal (MPa)", "Kilopascal (kPa)", "Bar (bar)", "Application Domain"],
    rows: [
      { fromVal: "10 mbar", toVal: "0.001 MPa", extra: "1.0 kPa", extra2: "0.01 bar", extra3: "Building ventilation airflow" },
      { fromVal: "100 mbar", toVal: "0.010 MPa", extra: "10.0 kPa", extra2: "0.10 bar", extra3: "Industrial blower discharge" },
      { fromVal: "500 mbar", toVal: "0.050 MPa", extra: "50.0 kPa", extra2: "0.50 bar", extra3: "Moderate vacuum drying chamber" },
      { fromVal: "1,000 mbar", toVal: "0.100 MPa", extra: "100.0 kPa", extra2: "1.00 bar", extra3: "1 bar exact metric milestone" },
      { fromVal: "1,013.25 mbar", toVal: "0.1013 MPa", extra: "101.325 kPa", extra2: "1.013 bar", extra3: "Standard atmospheric sea level" },
      { fromVal: "5,000 mbar", toVal: "0.500 MPa", extra: "500.0 kPa", extra2: "5.00 bar", extra3: "Commercial fire protection line" },
      { fromVal: "10,000 mbar", toVal: "1.000 MPa", extra: "1,000 kPa", extra2: "10.0 bar", extra3: "Pneumatic shop air system" },
      { fromVal: "25,000 mbar", toVal: "2.500 MPa", extra: "2,500 kPa", extra2: "25.0 bar", extra3: "Industrial steam header" },
      { fromVal: "100,000 mbar", toVal: "10.000 MPa", extra: "10,000 kPa", extra2: "100.0 bar", extra3: "Heavy hydraulic power unit" },
      { fromVal: "250,000 mbar", toVal: "25.000 MPa", extra: "25,000 kPa", extra2: "250.0 bar", extra3: "Mobile crane hydraulic circuit" },
      { fromVal: "500,000 mbar", toVal: "50.000 MPa", extra: "50,000 kPa", extra2: "500.0 bar", extra3: "Waterjet cutting intensifier pump" },
      { fromVal: "1,000,000 mbar", toVal: "100.000 MPa", extra: "100,000 kPa", extra2: "1,000 bar", extra3: "Ultra-high pressure isostatic press" }
    ]
  },
  applications: {
    title: "Engineering Applications",
    items: [
      {
        title: "Pressure Vessel & Piping Design",
        text: "ASME and EN standards govern pressure vessel design by comparing internal fluid pressures against material yield strengths expressed in MPa."
      },
      {
        title: "Petroleum & Geothermal Reservoirs",
        text: "Downhole formation pressures measured during exploration often translate between surface wellhead barometers (mbar) and deep lithostatic stresses (MPa)."
      },
      {
        title: "Hydraulics & Fluid Power Systems",
        text: "Heavy excavators and industrial presses operate at pressures exceeding 20 to 35 MPa (200,000 to 350,000 mbar), requiring clear unit translation for pump control valves."
      },
      {
        title: "High-Pressure Gas Cylinder Storage",
        text: "Hydrogen and compressed natural gas (CNG) cylinders rated for 20 to 70 MPa (200,000 to 700,000 mbar) require careful unit conversion across refueling interfaces."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls",
    items: [
      "Misplacing the decimal: dividing by 1,000 instead of 10,000 (which would yield kPa, not MPa).",
      "Treating 1 mbar as 0.001 MPa instead of 0.0001 MPa.",
      "Conflating megapascals (MPa) with millipascals (mPa, a tiny fraction of a Pascal).",
      "Confusing gauge pressure (barg / MPag) with absolute pressure (bara / MPaa)."
    ]
  },
  faqs: [
      {
        question: "How many megapascals are in 1 millibar?",
        answer: "There are exactly 0.0001 megapascals (10⁻⁴ MPa) in 1 millibar. Conversely, 1 megapascal equals 10,000 millibars."
      },
      {
        question: "How do you convert millibar to megapascal?",
        answer: "To convert millibar to megapascal, divide the millibar value by 10,000 (or multiply by 0.0001): <strong>MPa = mbar ÷ 10,000</strong>."
      },
      {
        question: "How many millibars are in 1 MPa?",
        answer: "There are exactly 10,000 millibars in 1 MPa (which also equals 10 bar or 1,000,000 Pascals)."
      },
      {
        question: "What is standard atmospheric pressure in MPa?",
        answer: "Standard sea-level atmospheric pressure (1,013.25 mbar) equals exactly 0.101325 MPa (or approximately 0.1 MPa)."
      },
      {
        question: "Is MPa larger than mbar?",
        answer: "Yes, 1 megapascal is 10,000 times larger than 1 millibar. Megapascals measure high industrial pressures, while millibars measure low barometric pressures."
      },
      {
        question: "What is 100,000 mbar in MPa?",
        answer: "One hundred thousand millibars equals exactly 10 MPa (100,000 ÷ 10,000 = 10 MPa or 100 bar)."
      },
      {
        question: "What is the difference between MPa and mPa?",
        answer: "Capital 'M' denotes mega (1,000,000), so MPa is one million Pascals. Lowercase 'm' denotes milli (0.001), so mPa is one-thousandth of a Pascal."
      },
      {
        question: "Why do structural engineers use MPa instead of mbar?",
        answer: "Steel yield strength, concrete compression ratings, and soil bearing capacities are in the millions of Pascals. Using MPa avoids handling cumbersome numbers with seven or eight digits."
      }
    ],
  references: [
    "BIPM: The International System of Units (SI Brochure, 9th Edition)",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "ASME Boiler and Pressure Vessel Code (BPVC), Section VIII",
    "NIST Special Publication 811: Guide for the Use of the SI"
  ]
};
