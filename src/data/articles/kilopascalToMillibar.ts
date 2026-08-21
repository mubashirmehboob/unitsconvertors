import { CustomArticleData } from "./types";

export const kilopascalToMillibar: CustomArticleData = {
  fromUnitId: "kilopascal",
  toUnitId: "millibar",
  seoTitle: "Kilopascal to Millibar Converter (kPa to mbar)",
  metaDescription: "Convert kilopascals to millibars (kPa to mbar) with exact metric precision. Learn the 10× multiplier formula, meteorology and barometric examples, tables, and FAQs.",
  h1: "Kilopascal to Millibar Converter",
  introduction: [
    "Converting kilopascals (kPa) to millibars (mbar) is an essential daily calculation in meteorology, aviation weather forecasting, atmospheric science, and oceanography. While national meteorological agencies and building codes report environmental pressures in kilopascals or hectopascals, synoptic weather charts, aviation altimeter settings, and barometric altimeters have historically relied on millibars.",
    "Because both units belong to the metric measurement hierarchy, the conversion between kilopascals and millibars is clean, direct, and exact. One bar equals 100,000 Pascals (100 kPa), and one millibar is one-thousandth of a bar (100 Pascals or 1 hPa). Consequently, one kilopascal (1,000 Pascals) equals exactly 10 millibars. To convert kilopascals to millibars, simply multiply the value in kilopascals by 10 (or move the decimal point one place to the right).",
    "This comprehensive guide details the conversion formula, step-by-step meteorological calculations, an atmospheric pressure reference table, practical applications in climate modeling and avionics, and answers to common conversion questions."
  ],
  quickAnswer: {
    text: "To convert kilopascals to millibars, multiply the pressure value in kilopascals by 10. For example, standard atmospheric pressure of 101.325 kPa equals exactly 1,013.25 mbar, and 100 kPa equals 1,000 mbar.",
    formulaDisplay: "mbar = kPa × 10",
    subtext: "Exact relationship: 1 kPa = 10 mbar = 10 hPa.\n1 mbar = 0.1 kPa = 100 Pa."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an official SI decimal multiple equal to 1,000 Pascals (10³ N/m²). It is the modern international standard for reporting atmospheric pressures, fluid mechanics specifications, HVAC static pressures, and material compression limits."
  },
  aboutTargetUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar or mb) is a metric unit of pressure equal to one-thousandth of a bar (100 Pascals or 1 hectopascal). Widely used in international weather reporting, barographs, and marine navigation since the early 20th century, 1 mbar exactly equals 1 hPa."
  },
  relationship: "The relationship between kilopascals and millibars is exact: 1 kPa = 10 mbar, and 1 mbar = 0.1 kPa. Converting from kPa to mbar is accomplished by scaling the value by a factor of 10.",
  relationshipTitle: "Kilopascal to Millibar Atmospheric Milestones",
  relationshipItems: [
    { label: "1 kPa", value: "10.0 mbar (Local HVAC duct static level)" },
    { label: "10 kPa", value: "100.0 mbar (Upper troposphere cruise altitude)" },
    { label: "95 kPa", value: "950.0 mbar (Severe tropical cyclone eye pressure)" },
    { label: "100 kPa", value: "1,000.0 mbar (Standard metric bar baseline)" },
    { label: "101.325 kPa", value: "1,013.25 mbar (Standard sea-level atmospheric baseline)" },
    { label: "104 kPa", value: "1,040.0 mbar (Intense winter high-pressure system)" }
  ],
  formula: {
    text: "Multiply the pressure in kilopascals by 10 to obtain the equivalent pressure in millibars.",
    math: "\\text{mbar} = \\text{kPa} \\times 10",
    subtext: "To convert millibars back to kilopascals, divide the mbar value by 10 (or multiply by 0.1)."
  },
  formulaTitle: "Kilopascal to Millibar Formula",
  practicalTip: {
    title: "The 1-Decimal Right Shift Rule",
    text: "Because 1 kPa equals 10 mbar, simply move the decimal point one position to the right to convert kPa to mbar (e.g., 102.4 kPa becomes 1,024.0 mbar)."
  },
  expertNote: {
    title: "Equivalence of Millibar (mbar) and Hectopascal (hPa)",
    text: "In modern meteorology, the hectopascal (hPa) has replaced the millibar in official WMO documents, but both units are numerically identical: $1\\text{ mbar} = 1\\text{ hPa} = 0.1\\text{ kPa} = 100\\text{ Pa}$. A reading of 101.325 kPa equals 1,013.25 mbar and 1,013.25 hPa."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting Sea-Level Barometric Pressure",
        subtitle: "A modern digital weather station measures ambient sea-level pressure at 102.15 kPa. Convert this reading to millibars for a synoptic chart.",
        steps: [
          "State the initial pressure reading: 102.15 kPa.",
          "Apply the conversion formula: mbar = kPa × 10.",
          "Calculate: 102.15 × 10 = 1,021.5.",
          "Result: 102.15 kPa equals exactly 1,021.5 mbar."
        ]
      },
      {
        title: "Example 2: Severe Hurricane Central Pressure",
        subtitle: "A hurricane reconnaissance aircraft detects a minimum central pressure of 92.4 kPa in the eye of a storm. Convert to millibars.",
        steps: [
          "Identify central pressure: 92.4 kPa.",
          "Multiply by 10: 92.4 × 10 = 924.",
          "Result: 92.4 kPa equals 924.0 mbar (indicating a major Category 4/5 hurricane)."
        ]
      },
      {
        title: "Example 3: High-Altitude Aircraft Cabin Pressure",
        subtitle: "An airliner cabin is pressurized to an equivalent atmospheric altitude pressure of 75.3 kPa. Convert this setting to millibars.",
        steps: [
          "State starting cabin pressure: 75.3 kPa.",
          "Apply formula: mbar = 75.3 × 10.",
          "Calculate: 75.3 × 10 = 753.",
          "Result: 75.3 kPa equals exactly 753.0 mbar."
        ]
      }
    ]
  },
  table: {
    title: "Kilopascal to Millibar Reference Table",
    headers: ["Kilopascals (kPa)", "Millibars (mbar)", "Hectopascals (hPa)", "Atmospheric / Engineering Context"],
    rows: [
      { fromVal: "10 kPa", toVal: "100.0 mbar", extra: "100.0 hPa", extra2: "Stratospheric boundary (~16 km altitude)" },
      { fromVal: "30 kPa", toVal: "300.0 mbar", extra: "300.0 hPa", extra2: "Commercial jet cruising level (~9 km)" },
      { fromVal: "50 kPa", toVal: "500.0 mbar", extra: "500.0 hPa", extra2: "Mid-troposphere 500 hPa weather chart" },
      { fromVal: "70 kPa", toVal: "700.0 mbar", extra: "700.0 hPa", extra2: "High mountain passes (~3,000 m elevation)" },
      { fromVal: "85 kPa", toVal: "850.0 mbar", extra: "850.0 hPa", extra2: "Boundary layer synoptic forecast level" },
      { fromVal: "90 kPa", toVal: "900.0 mbar", extra: "900.0 hPa", extra2: "Extreme Category 5 hurricane eye" },
      { fromVal: "98 kPa", toVal: "980.0 mbar", extra: "980.0 hPa", extra2: "Intense low-pressure coastal storm" },
      { fromVal: "100 kPa", toVal: "1,000.0 mbar", extra: "1,000.0 hPa", extra2: "1 Bar exact metric baseline" },
      { fromVal: "101.325 kPa", toVal: "1,013.25 mbar", extra: "1,013.25 hPa", extra2: "Standard international sea-level atmosphere" },
      { fromVal: "103 kPa", toVal: "1,030.0 mbar", extra: "1,030.0 hPa", extra2: "Strong continental anticyclone (high pressure)" }
    ]
  },
  applications: {
    title: "Key Meteorological and Aviation Applications",
    items: [
      {
        title: "Synoptic Meteorology & Surface Weather Analysis",
        text: "Meteorologists draw isobars (lines of equal barometric pressure) on surface charts in intervals of 4 mbar (or 0.4 kPa) to identify cyclones, anticyclones, and frontal boundaries."
      },
      {
        title: "Aviation Altimetry & QNH Calibration",
        text: "Pilots adjust their barometric altimeter sub-scale (Kollsman window) to local QNH values reported in millibars (or hPa) to ensure accurate altitude readings above mean sea level."
      },
      {
        title: "Tropical Cyclone Intensity Tracking",
        text: "Global hurricane and typhoon warning centers categorize storm intensity by tracking the central pressure in millibars, converted from automated dropsonde sensor readings recorded in kPa."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 10 instead of multiplying: Converting from kPa to mbar increases the numeric value by tenfold.",
      "Confusing millibars with bars: 1 bar = 100 kPa (1,000 mbar), whereas 1 mbar = 0.1 kPa (10 mbar = 1 kPa).",
      "Treating millibar and hectopascal as different values: 1 mbar is exactly identical to 1 hPa."
    ]
  },
  faqs: [
    {
      question: "How many millibars are in one kilopascal?",
      answer: "There are exactly 10 millibars in one kilopascal (1 kPa = 10 mbar)."
    },
    {
      question: "What is the formula to convert kPa to mbar?",
      answer: "The formula is: mbar = kPa × 10."
    },
    {
      question: "What is standard atmospheric pressure in millibars and kilopascals?",
      answer: "Standard sea-level atmospheric pressure is 101.325 kPa, which equals exactly 1,013.25 mbar (and 1,013.25 hPa)."
    },
    {
      question: "Is a millibar the same as a hectopascal?",
      answer: "Yes, 1 millibar (mbar) equals exactly 1 hectopascal (hPa). Both represent exactly 100 Pascals or 0.1 kPa."
    },
    {
      question: "How do you convert 100 kPa to millibars?",
      answer: "Multiply 100 by 10: 100 × 10 = 1,000 mbar (which equals 1 bar)."
    },
    {
      question: "How do you convert millibars back to kilopascals?",
      answer: "Divide the millibar value by 10 (or multiply by 0.1). For example, 1,020 mbar ÷ 10 = 102.0 kPa."
    },
    {
      question: "What is 95 kPa in millibars?",
      answer: "95 kPa equals exactly 950 mbar (95 × 10 = 950)."
    },
    {
      question: "Why do meteorologists use millibars instead of Pascals?",
      answer: "Base Pascals yield large six-figure numbers (e.g., 101,325 Pa). Millibars (and hectopascals) provide convenient four-digit values (e.g., 1,013.25 mbar) ideal for weather charts and public bulletins."
    }
  ],
  relatedList: [
    { label: "Kilopascal to Bar", from: "kilopascal", to: "bar" },
    { label: "Pascal to Millibar", from: "pascal", to: "millibar" },
    { label: "Kilopascal to Atmosphere", from: "kilopascal", to: "atmosphere" },
    { label: "Kilopascal to PSI", from: "kilopascal", to: "psi" },
    { label: "Megapascal to Millibar", from: "megapascal", to: "millibar" }
  ],
  references: [
    "World Meteorological Organization (WMO): Guide to Meteorological Instruments and Methods of Observation (WMO-No. 8).",
    "International Civil Aviation Organization (ICAO): Manual of Aeronautical Meteorological Practice (Doc 8896).",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
