import { CustomArticleData } from "./types";

export const millibarToKilopascal: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "kilopascal",
  seoTitle: "Millibar to Kilopascal Converter (mbar to kPa)",
  metaDescription: "Convert millibar to kilopascals (mbar to kPa) with exact 0.1× precision. Learn conversion formulas, weather examples, lookup tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-kilopascal",
  h1: "Millibar to Kilopascal Converter",
  introduction: [
    "Converting millibar to kilopascals (kPa) translates traditional weather and aviation barometry into modern international building codes, civil engineering documents, and mechanical design standards. While the millibar remains standard on barometers, the kilopascal is the preferred everyday metric unit for pressure across Canada, Australia, Europe, and ISO engineering documentation.",
    "The conversion between millibar and kilopascals is exact, rational, and simple. One millibar equals 100 Pascals. Because one kilopascal equals 1,000 Pascals, one millibar equals exactly 100 / 1,000 = 0.1 kilopascals (or 1/10 of a kPa). To convert millibar to kilopascal, simply divide by 10 (or multiply by 0.1).",
    "This guide provides the exact mathematical relationship, practical engineering calculation examples, a comprehensive conversion reference table, and answers to frequently asked technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to kilopascals (kPa), divide the millibar value by 10 (or multiply by 0.1). For example, standard atmospheric pressure of 1,013.25 mbar equals exactly 101.325 kPa, and 1,000 mbar equals exactly 100 kPa.",
    formulaDisplay: "kPa = mbar ÷ 10",
    subtext: "1 mbar = 0.1 kPa (exact) | 1 kPa = 10 mbar | Direct decimal division"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a metric unit representing 1/1,000 of a bar (100 Pa). Widely popularized in synoptic weather forecasting, it matches the hectopascal (hPa) exactly and provides intuitive numerical values for barometric readings."
  },
  aboutTargetUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an SI-derived multiple unit equal to 1,000 Pascals (1,000 N/m²). It is the primary metric unit for atmospheric air pressures, automobile tire ratings, pneumatic controls, and civil engineering load specifications."
  },
  relationship: "The relationship between millibar and kilopascals is an exact decimal ratio: 1 millibar equals 0.1 kilopascals (1 mbar = 0.1 kPa). Conversely, 1 kilopascal equals exactly 10 millibars (1 kPa = 10 mbar).",
  relationshipTitle: "Millibar to Kilopascal Scale Benchmarks",
  relationshipItems: [
    { label: "1 mbar", value: "0.10 kPa (Direct scaling factor)" },
    { label: "10 mbar", value: "1.00 kPa (Building HVAC duct static pressure)" },
    { label: "50 mbar", value: "5.00 kPa (Residential natural gas line)" },
    { label: "250 mbar", value: "25.00 kPa (Aircraft cabin differential limit)" },
    { label: "950 mbar", value: "95.00 kPa (Intense low-pressure weather system)" },
    { label: "1,000 mbar", value: "100.00 kPa (1 bar exact metric milestone)" },
    { label: "1,013.25 mbar", value: "101.325 kPa (Standard sea-level atmospheric pressure)" },
    { label: "2,500 mbar", value: "250.00 kPa (Automobile tire inflation benchmark)" }
  ],
  formula: {
    text: "Divide the pressure in millibar by 10, or multiply by 0.1, to obtain kilopascals.",
    math: "\\text{kPa} = \\frac{\\text{mbar}}{10} = \\text{mbar} \\times 0.1",
    subtext: "To convert kilopascals back to millibar: multiply kPa by 10."
  },
  formulaTitle: "Millibar to Kilopascal Conversion Formula",
  practicalTip: {
    title: "The One-Place Left Shift",
    text: "Converting millibar to kPa requires only moving the decimal point one position to the left. For example, 1013.25 mbar becomes 101.325 kPa, 980 mbar becomes 98.0 kPa, and 50 mbar becomes 5.0 kPa."
  },
  expertNote: {
    title: "Weather Broadcasts & Engineering Ingestion",
    text: "National meteorological bureaus in metric countries often report air pressures in hectopascals or millibars on television, while building ventilation systems and structural aerodynamic wind codes specify pressure loads in kilopascals. Remembering that 10 mbar = 1 kPa makes mental conversions instantaneous."
  },
  examples: {
    title: "Step-by-Step Worked Examples",
    items: [
      {
        title: "Example 1: Atmospheric Storm Tracking",
        subtitle: "A meteorologist tracks a coastal nor'easter whose central pressure falls to 972.0 mbar. Express this barometric pressure in kilopascals.",
        steps: [
          "State starting value: 972.0 mbar.",
          "Apply conversion: kPa = mbar ÷ 10.",
          "Calculate: 972.0 ÷ 10 = 97.2 kPa.",
          "Result: 972.0 mbar corresponds to exactly 97.2 kPa."
        ]
      },
      {
        title: "Example 2: Pneumatic Air Tank Certification",
        subtitle: "A workshop pneumatic regulator is set to 6,200 mbar. Convert this operating pressure into kilopascals.",
        steps: [
          "Record pressure: 6,200 mbar.",
          "Calculate: 6,200 × 0.1 = 620 kPa.",
          "Conclusion: 6,200 mbar equals 620 kPa (6.2 bar)."
        ]
      },
      {
        title: "Example 3: Low-Pressure Boiler Test",
        subtitle: "An industrial steam boiler safety relief valve is rated at 1,500 mbar. Find its rating in kPa.",
        steps: [
          "Identify pressure: 1,500 mbar.",
          "Divide by 10: 1,500 ÷ 10 = 150 kPa.",
          "State result: 1,500 mbar equals 150 kPa."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to Kilopascal Conversion Table",
    headers: ["Millibar (mbar)", "Kilopascal (kPa)", "Pascal (Pa)", "Bar (bar)", "Physical Context"],
    rows: [
      { fromVal: "1 mbar", toVal: "0.1 kPa", extra: "100 Pa", extra2: "0.001 bar", extra3: "Differential pressure increment" },
      { fromVal: "5 mbar", toVal: "0.5 kPa", extra: "500 Pa", extra2: "0.005 bar", extra3: "Medical isolation room boundary" },
      { fromVal: "10 mbar", toVal: "1.0 kPa", extra: "1,000 Pa", extra2: "0.010 bar", extra3: "Ventilation duct test pressure" },
      { fromVal: "50 mbar", toVal: "5.0 kPa", extra: "5,000 Pa", extra2: "0.050 bar", extra3: "Household gas appliance regulator" },
      { fromVal: "100 mbar", toVal: "10.0 kPa", extra: "10,000 Pa", extra2: "0.100 bar", extra3: "Industrial blower discharge" },
      { fromVal: "500 mbar", toVal: "50.0 kPa", extra: "50,000 Pa", extra2: "0.500 bar", extra3: "High altitude (approx. 5.5 km)" },
      { fromVal: "900 mbar", toVal: "90.0 kPa", extra: "90,000 Pa", extra2: "0.900 bar", extra3: "Extreme hurricane eye core" },
      { fromVal: "980 mbar", toVal: "98.0 kPa", extra: "98,000 Pa", extra2: "0.980 bar", extra3: "Low-pressure rainy front" },
      { fromVal: "1,000 mbar", toVal: "100.0 kPa", extra: "100,000 Pa", extra2: "1.000 bar", extra3: "Standard metric baseline" },
      { fromVal: "1,013.25 mbar", toVal: "101.325 kPa", extra: "101,325 Pa", extra2: "1.01325 bar", extra3: "Standard sea-level atmosphere" },
      { fromVal: "1,040 mbar", toVal: "104.0 kPa", extra: "104,000 Pa", extra2: "1.040 bar", extra3: "Strong continental cold anticyclone" },
      { fromVal: "2,000 mbar", toVal: "200.0 kPa", extra: "200,000 Pa", extra2: "2.000 bar", extra3: "Automobile tire pressure level" }
    ]
  },
  applications: {
    title: "Engineering & Field Applications",
    items: [
      {
        title: "Civil Engineering & Wind Load Design",
        text: "Structural engineers calculate building cladding wind pressure loads in kPa based on meteorological wind gusts recorded at barometric stations measuring in mbar."
      },
      {
        title: "Automotive Sensor Calibration",
        text: "Engine control modules (ECMs) read Manifold Absolute Pressure (MAP) sensors scaled in kPa, requiring conversion when interpreting technician diagnostic tools configured in millibar."
      },
      {
        title: "HVAC & Energy Efficiency Auditing",
        text: "Plenum static pressure and chimney draft measurements switch between mbar and kPa when validating building air-tightness against passive house standards."
      },
      {
        title: "Aviation Maintenance Testing",
        text: "Pitot-static test equipment verifies aircraft airspeed indicators and altimeters by generating precise differential test pressures calibrated in kPa and millibars."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes",
    items: [
      "Dividing by 100 instead of 10 (conflating the Pascal conversion with the kilopascal conversion).",
      "Forgetting that 10 mbar = 1 kPa, making 100 mbar equal 10 kPa rather than 1 kPa.",
      "Confusing hectopascals (hPa) with kilopascals (kPa): 1 mbar = 1 hPa, but 1 mbar = 0.1 kPa.",
      "Dropping decimal precision when converting fractional barometric values like 1,013.25 mbar to 101.325 kPa."
    ]
  },
  faqs: [
      {
        question: "How many kilopascals are in 1 millibar?",
        answer: "There are exactly 0.1 kilopascals (kPa) in 1 millibar. Conversely, 1 kilopascal equals 10 millibars."
      },
      {
        question: "How do you convert millibar to kilopascal?",
        answer: "To convert millibar to kilopascal, divide the millibar value by 10 (or multiply by 0.1): <strong>kPa = mbar ÷ 10</strong>. For example, 1,013.25 mbar becomes 101.325 kPa."
      },
      {
        question: "How do you convert kilopascal to millibar?",
        answer: "Multiply the pressure in kilopascals by 10: <strong>mbar = kPa × 10</strong>. For instance, 100 kPa equals 1,000 mbar."
      },
      {
        question: "What is standard atmospheric pressure in kPa and mbar?",
        answer: "Standard sea-level atmospheric pressure is exactly 101.325 kPa, which corresponds to 1,013.25 mbar."
      },
      {
        question: "Is kilopascal larger than millibar?",
        answer: "Yes, 1 kilopascal is exactly 10 times larger than 1 millibar (1 kPa = 1,000 Pa, while 1 mbar = 100 Pa)."
      },
      {
        question: "What is 1,000 mbar in kPa?",
        answer: "One thousand millibars equals exactly 100 kPa (which also equals 1 bar or 100,000 Pa)."
      },
      {
        question: "What is the difference between hPa and kPa?",
        answer: "One hectopascal (hPa) is 100 Pa, whereas 1 kilopascal (kPa) is 1,000 Pa. Therefore, 1 kPa equals 10 hPa (and 10 mbar)."
      },
      {
        question: "Why do tire gauges use kPa instead of mbar?",
        answer: "Automotive tires operate at high pressures (200 to 300 kPa). Kilopascals provide convenient two- or three-digit numbers, whereas millibar would require thousands."
      }
    ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI)",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "BIPM: SI Brochure Section on Derived Units with Special Names",
    "World Meteorological Organization (WMO) Barometry Guide"
  ]
};
