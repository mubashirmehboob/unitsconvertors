import { CustomArticleData } from "./types";

export const pascalToMillibar: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "millibar",
  seoTitle: "Pascal to Millibar Converter (Pa to mbar)",
  metaDescription: "Convert Pascals to millibars (Pa to mbar) instantly. Learn the exact 1 mbar = 100 Pa conversion factor, formula, meteorology examples, tables, and FAQs.",
  h1: "Pascal to Millibar Converter",
  introduction: [
    "The Pascal (Pa) and the millibar (mbar) are key pressure units heavily utilized in meteorology, barometric weather tracking, aviation altimetry, and vacuum technology. While the Pascal is the fundamental SI unit for force per unit area, the millibar provides a practical decimal scale for atmospheric readings.",
    "Converting Pascals to millibars is mathematically straightforward because 1 millibar is defined as exactly 1/1,000th of a bar, which equals 100 Pascals (or 1 hectopascal, hPa). To convert Pa to mbar, simply divide the pressure value in Pascals by 100 or shift the decimal point two places to the left.",
    "This guide provides the exact mathematical conversion formula, step-by-step weather calculation examples, a detailed barometric conversion table, meteorology applications, and answers to common pressure questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to millibars, divide the pressure value in Pascals by 100. For example, 1,000 Pa equals 10 mbar, and standard sea-level atmospheric pressure of 101,325 Pa equals 1013.25 mbar.",
    formulaDisplay: "mbar = Pa ÷ 100",
    subtext: "One Pascal is equal to exactly 0.01 millibar (1 Pa = 1/100 mbar)."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the base derived unit of pressure in the International System of Units (SI). Defined as 1 Newton per square meter (1 N/m²), it measures mechanical force on a surface. Because 1 Pascal represents a very small pressure delta, environmental sensors and weather stations record atmospheric measurements in hundreds of Pascals (hectopascals) or millibars."
  },
  aboutTargetUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a metric unit of pressure equal to 1/1,000th of a bar, or 100 Pascals (100 Pa). In weather forecasting, the millibar has been the international standard unit for reporting barometric pressure and cyclone intensity since the early 20th century. Notably, 1 millibar is numerically identical to 1 hectopascal (1 mbar = 1 hPa)."
  },
  relationship: "The mathematical relationship between Pascals and millibars is exact: 1 mbar = 100 Pa, meaning 1 Pa = 0.01 mbar. Because 1 hPa also equals 100 Pa, 1 mbar is 100% equivalent to 1 hPa.",
  relationshipTitle: "Pascal vs Millibar Weather Scale Benchmark",
  relationshipItems: [
    { label: "1 Pa", value: "0.01 mbar (Micro-barometric fluctuation)" },
    { label: "100 Pa", value: "1 mbar (1 hectopascal / 1 hPa)" },
    { label: "1,000 Pa", value: "10 mbar (Low-level pressure differential)" },
    { label: "100,000 Pa", value: "1,000 mbar (1 bar / near sea-level pressure)" },
    { label: "101,325 Pa", value: "1,013.25 mbar (Standard Sea-Level Atmosphere)" }
  ],
  formula: {
    text: "Divide the pressure value in Pascals by 100 to convert to millibars.",
    math: "mbar = Pa / 100",
    subtext: "To convert millibars back to Pascals, multiply the mbar value by 100."
  },
  formulaTitle: "Pascal to Millibar Formula",
  practicalTip: {
    title: "2-Decimal Shift Rule",
    text: "Converting Pa to mbar is effortless: simply shift the decimal point two places to the left (e.g., 98,500 Pa becomes 985.0 mbar)."
  },
  expertNote: {
    title: "Equivalence to Hectopascals (hPa)",
    text: "The World Meteorological Organization (WMO) officially uses hectopascals (hPa) in SI documentation. Because 1 hPa = 100 Pa = 1 mbar, millibar and hectopascal readings are 100% identical."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Sea-Level Barometric Pressure",
        subtitle: "Convert standard atmospheric pressure of 101,325 Pa to millibars.",
        steps: [
          "Identify pressure in Pascals: 101,325 Pa.",
          "Apply conversion formula: mbar = Pa ÷ 100.",
          "Calculate: 101,325 ÷ 100 = 1,013.25.",
          "Result: 101,325 Pa equals exactly 1,013.25 mbar."
        ]
      },
      {
        title: "Example 2: Tropical Cyclone Central Pressure",
        subtitle: "Convert a hurricane core pressure reading of 92,000 Pa to millibars.",
        steps: [
          "Identify pressure: 92,000 Pa.",
          "Divide by 100: 92,000 ÷ 100 = 920.",
          "Result: 92,000 Pa equals 920 mbar (Category 4 hurricane core)."
        ]
      },
      {
        title: "Example 3: High-Altitude Aircraft Cabin Pressure",
        subtitle: "Convert a cabin pressure reading of 75,000 Pa to millibars.",
        steps: [
          "Identify starting pressure: 75,000 Pa.",
          "Apply formula: 75,000 ÷ 100 = 750.",
          "Result: 75,000 Pa equals 750 mbar."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to Millibar Conversion Table",
    headers: ["Pascals (Pa)", "Millibars (mbar / hPa)", "Meteorological Context"],
    rows: [
      { fromVal: "10 Pa", toVal: "0.1 mbar", extra: "Micro-barometric wind noise pulse" },
      { fromVal: "100 Pa", toVal: "1 mbar", extra: "1 hectopascal (1 hPa) benchmark" },
      { fromVal: "500 Pa", toVal: "5 mbar", extra: "Diurnal atmospheric tide variation" },
      { fromVal: "1,000 Pa", toVal: "10 mbar", extra: "Severe storm pressure drop amplitude" },
      { fromVal: "87,000 Pa", toVal: "870 mbar", extra: "Lowest recorded sea-level pressure (Typhoon Tip)" },
      { fromVal: "95,000 Pa", toVal: "950 mbar", extra: "Category 3 hurricane eye pressure" },
      { fromVal: "100,000 Pa", toVal: "1,000 mbar", extra: "1 bar benchmark pressure" },
      { fromVal: "101,325 Pa", toVal: "1,013.25 mbar", extra: "Standard sea-level atmospheric baseline" },
      { fromVal: "104,000 Pa", toVal: "1,040 mbar", extra: "Strong Siberian high-pressure weather system" },
      { fromVal: "200,000 Pa", toVal: "2,000 mbar", extra: "Low-pressure industrial pneumatic line" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to mbar Conversion",
    items: [
      {
        title: "Meteorology & Weather Reporting",
        text: "Weather maps display isobar lines in millibars (or hPa). Converting automated weather station pressure readings in Pascals to millibars allows meteorologists to spot high and low-pressure fronts."
      },
      {
        title: "Aviation & Altimeter Calibration",
        text: "Pilots adjust their barometric altimeters using QNH settings broadcast in millibars (or inches of mercury). Sensor chips measure ambient air in Pascals and convert to mbar."
      },
      {
        title: "HVAC & Cleanroom Differential Pressure",
        text: "Isolation rooms in hospitals and pharmaceutical cleanrooms maintain positive or negative pressures measured in Pascals or fractional millibars to prevent airborne contamination."
      },
      {
        title: "Laboratory Vacuum Systems",
        text: "Rough vacuum systems and freeze dryers monitor chamber evacuation from atmospheric pressure (1013 mbar) down to low millibar levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of 100: Dividing Pa by 1,000 gives kilopascals (kPa), whereas dividing by 100 gives millibars (mbar).",
      "Assuming 1 mbar is different from 1 hPa: 1 millibar equals 1 hectopascal exactly (1 mbar = 1 hPa = 100 Pa).",
      "Confusing millibar (mbar) with bar: 1 bar = 1,000 mbar = 100,000 Pa.",
      "Forgetting decimal places for precision readings: Standard atmosphere is 1,013.25 mbar, not 1,013 mbar."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in 1 millibar?",
      answer: "There are exactly 100 Pascals in 1 millibar. One millibar is also identical to 1 hectopascal (1 hPa)."
    },
    {
      question: "What is the formula to convert Pa to mbar?",
      answer: "The formula is: mbar = Pa ÷ 100. Alternatively, multiply the Pascal value by 0.01."
    },
    {
      question: "Is 1 millibar the same as 1 hectopascal?",
      answer: "Yes, exactly. Both 1 mbar and 1 hPa equal 100 Pascals. Meteorologists use the terms interchangeably."
    },
    {
      question: "What is standard sea-level pressure in millibars?",
      answer: "Standard atmospheric pressure at sea level is 101,325 Pascals, which equals 1,013.25 mbar (or hPa)."
    },
    {
      question: "How do I convert millibars back to Pascals?",
      answer: "To convert millibars back to Pascals, multiply the mbar value by 100 (e.g., 1013.25 mbar × 100 = 101,325 Pa)."
    },
    {
      question: "How many millibars are in 1 bar?",
      answer: "There are exactly 1,000 millibars in 1 bar (since 'milli-' means one-thousandth)."
    },
    {
      question: "Why do meteorologists use millibars instead of Pascals?",
      answer: "Because atmospheric pressure around 100,000 Pa translates to four-digit numbers around 1,000 mbar, making weather charts cleaner and easier to read."
    },
    {
      question: "How does 1 mbar compare to PSI?",
      answer: "One millibar equals approximately 0.0145038 PSI (pounds per square inch)."
    }
  ],
  relatedList: [
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" },
    { label: "Pascal to Torr", from: "pascal", to: "torr" }
  ],
  references: [
    "World Meteorological Organization (WMO) - Guide to Meteorological Instruments and Methods of Observation.",
    "BIPM - The International System of Units (SI), 9th Edition.",
    "NOAA National Weather Service - Barometric Pressure Conversion Standards."
  ]
};
