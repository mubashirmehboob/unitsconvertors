import { CustomArticleData } from "./types";

export const barToMillibar: CustomArticleData = {
  fromUnitId: "bar",
  toUnitId: "millibar",
  seoTitle: "Bar to Millibar Converter (bar to mbar)",
  metaDescription: "Convert bar to millibars (bar to mbar) with exact 1,000× precision. Explore the conversion formula, meteorological and vacuum calculations, tables, and FAQs.",
  h1: "Bar to Millibar Converter",
  introduction: [
    "Converting bar to millibars (mbar) is an intuitive metric calculation widely performed in meteorology, barometric weather forecasting, vacuum engineering, and atmospheric physics. While high-pressure hydraulic and process systems express bulk pressures in whole bars, weather charts, atmospheric altimetry, cleanroom differential monitoring, and rough vacuum processing use millibars.",
    "Because the prefix 'milli-' signifies one-thousandth ($10^{-3}$) in the International System of Units, one bar contains exactly 1,000 millibars. To convert bar into millibars, multiply the bar measurement by 1,000 (or shift the decimal point three digits to the right). Furthermore, because 1 millibar equals exactly 100 Pascals (1 hectopascal, or 1 hPa), millibar values directly correlate with official World Meteorological Organization (WMO) weather data.",
    "This technical guide provides the exact conversion formula, worked step-by-step examples from aviation and meteorology, an atmospheric pressure reference table, common practical pitfalls, and answers to frequently asked questions."
  ],
  quickAnswer: {
    text: "To convert bar to millibars, multiply the value in bar by 1,000. For example, standard atmospheric pressure of 1.01325 bar equals exactly 1,013.25 mbar (or 1,013.25 hPa).",
    formulaDisplay: "mbar = bar × 1,000",
    subtext: "Exact definition: 1 bar = 1,000 mbar = 100,000 Pa.\n1 mbar = 0.001 bar = 100 Pa = 1 hPa."
  },
  aboutSourceUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure defined as exactly 100,000 Pascals. Originally introduced by meteorologist William Napier Shaw in 1909, it represents roughly the average atmospheric pressure at sea level (1.01325 bar) and is the primary unit for industrial compressed air, diving tanks, and hydraulic systems."
  },
  aboutTargetUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a submultiple of the bar, representing one-thousandth of a bar (100 Pascals or 1 hectopascal). Widely used on television weather maps, aircraft altimeter setting dials (QNH), and vacuum processing chambers, it provides fine resolution for subtle atmospheric fluctuations."
  },
  relationship: "The relationship between bar and millibar is exact and defined by metric prefix standards: 1 bar equals exactly 1,000 millibars, and 1 millibar equals exactly 0.001 bar. Additionally, 1 millibar is numerically identical to 1 hectopascal (1 mbar = 1 hPa = 100 Pa).",
  relationshipTitle: "Bar to Millibar Atmospheric Benchmarks",
  relationshipItems: [
    { label: "0.001 bar", value: "1.00 mbar (Laboratory rough vacuum level)" },
    { label: "0.870 bar", value: "870.00 mbar (Lowest recorded sea-level pressure, Typhoon Tip)" },
    { label: "0.950 bar", value: "950.00 mbar (Category 3 hurricane eye core pressure)" },
    { label: "1.000 bar", value: "1,000.00 mbar (Metric standard atmospheric baseline)" },
    { label: "1.01325 bar", value: "1,013.25 mbar (Standard sea-level atmospheric pressure - 1 atm)" },
    { label: "1.084 bar", value: "1,084.80 mbar (Highest recorded sea-level pressure, Agata, Siberia)" }
  ],
  formula: {
    text: "Multiply the pressure in bar by 1,000 to obtain the equivalent pressure in millibars.",
    math: "\\text{mbar} = \\text{bar} \\times 1\\,000",
    subtext: "To convert millibars back to bar, divide the mbar value by 1,000 (or multiply by 0.001)."
  },
  formulaTitle: "Bar to Millibar Conversion Formula",
  practicalTip: {
    title: "The 3-Decimal Right Shift Rule",
    text: "Because 1 bar equals 1,000 mbar, converting bar to mbar is as simple as shifting the decimal point three places to the right (e.g., 1.025 bar becomes 1,025 mbar, and 0.04 bar becomes 40 mbar)."
  },
  expertNote: {
    title: "Equivalence with Hectopascals (hPa)",
    text: "1 millibar is identically equal to 1 hectopascal (1 mbar = 1 hPa). Aviation weather broadcasts (METAR/TAF) and modern barometers often use hPa, which requires zero mathematical conversion from mbar."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Standard Sea-Level Atmospheric Pressure (1.01325 bar)",
        subtitle: "Convert standard atmospheric pressure of 1.01325 bar into millibars for meteorological analysis.",
        steps: [
          "State starting pressure: 1.01325 bar.",
          "Apply conversion formula: mbar = 1.01325 × 1,000.",
          "Calculate: 1.01325 × 1,000 = 1,013.25.",
          "Result: 1.01325 bar equals exactly 1,013.25 mbar (or 1,013.25 hPa)."
        ]
      },
      {
        title: "Example 2: Severe Weather Low-Pressure System (0.982 bar)",
        subtitle: "A digital weather station logs a rapid drop in ambient barometric pressure to 0.982 bar as an intense low-pressure front approaches. Express this in millibars.",
        steps: [
          "Identify logged pressure: 0.982 bar.",
          "Multiply by 1,000: mbar = 0.982 × 1,000.",
          "Calculate: 0.982 × 1,000 = 982.0.",
          "Result: 0.982 bar corresponds to exactly 982.0 mbar."
        ]
      },
      {
        title: "Example 3: Low-Pressure Vacuum Packaging Chamber (0.015 bar)",
        subtitle: "An industrial food vacuum packing machine evacuates a sealing chamber to an absolute pressure of 0.015 bar. Convert this chamber pressure to millibars.",
        steps: [
          "Identify chamber pressure: 0.015 bar.",
          "Apply formula: mbar = 0.015 × 1,000.",
          "Calculate: 0.015 × 1,000 = 15.0.",
          "Result: 0.015 bar equals exactly 15.0 mbar."
        ]
      }
    ]
  },
  table: {
    title: "Bar to Millibar Conversion Table",
    headers: ["Bar (bar)", "Millibars (mbar)", "Hectopascals (hPa)", "Pascals (Pa)", "Context / Observation"],
    rows: [
      { fromVal: "0.001 bar", toVal: "1.0 mbar", extra: "1.0 hPa", extra2: "100 Pa", extra3: "Moderate mechanical vacuum" },
      { fromVal: "0.010 bar", toVal: "10.0 mbar", extra: "10.0 hPa", extra2: "1,000 Pa", extra3: "Industrial freeze drying baseline" },
      { fromVal: "0.050 bar", toVal: "50.0 mbar", extra: "50.0 hPa", extra2: "5,000 Pa", extra3: "High-altitude atmospheric condition (20 km)" },
      { fromVal: "0.200 bar", toVal: "200.0 mbar", extra: "200.0 hPa", extra2: "20,000 Pa", extra3: "Commercial airliner cruise altitude pressure (12 km)" },
      { fromVal: "0.500 bar", toVal: "500.0 mbar", extra: "500.0 hPa", extra2: "50,000 Pa", extra3: "Mid-troposphere reference level (5.5 km)" },
      { fromVal: "0.900 bar", toVal: "900.0 mbar", extra: "900.0 hPa", extra2: "90,000 Pa", extra3: "Severe tropical storm center" },
      { fromVal: "0.980 bar", toVal: "980.0 mbar", extra: "980.0 hPa", extra2: "98,000 Pa", extra3: "Typical low-pressure weather system" },
      { fromVal: "1.000 bar", toVal: "1,000.0 mbar", extra: "1,000.0 hPa", extra2: "100,000 Pa", extra3: "Metric nominal sea-level baseline" },
      { fromVal: "1.013 bar", toVal: "1,013.25 mbar", extra: "1,013.25 hPa", extra2: "101,325 Pa", extra3: "Standard international atmosphere" },
      { fromVal: "1.030 bar", toVal: "1,030.0 mbar", extra: "1,030.0 hPa", extra2: "103,000 Pa", extra3: "Strong winter anticyclone (high pressure)" },
      { fromVal: "1.500 bar", toVal: "1,500.0 mbar", extra: "1,500.0 hPa", extra2: "150,000 Pa", extra3: "Residential hydronic heating loop" },
      { fromVal: "2.000 bar", toVal: "2,000.0 mbar", extra: "2,000.0 hPa", extra2: "200,000 Pa", extra3: "Domestic water service supply" }
    ]
  },
  applications: {
    title: "Practical Applications Across Fields",
    items: [
      {
        title: "Meteorology and Weather Forecasting",
        text: "Synoptic weather charts illustrate atmospheric isobars connecting regions of equal air pressure labeled in millibars (e.g., 1,012 mbar, 1,016 mbar), providing meteorologists with immediate storm tracking data."
      },
      {
        title: "Aviation and Altimeter Calibration",
        text: "Pilots calibrate their barometric altimeters using current airport pressure settings known as QNH, given in millibars (or hectopascals) by air traffic control throughout Europe and international airspace."
      },
      {
        title: "Industrial Vacuum Processing and Packaging",
        text: "Food preservation, freeze-drying, and pharmaceutical lyophilization monitor intermediate rough vacuum chamber levels in millibars before sealing."
      },
      {
        title: "Cleanroom and Isolation Facility Monitoring",
        text: "Pharmaceutical cleanrooms and hospital airborne infection isolation rooms maintain slight positive or negative air pressure differentials measured in millibars or Pascals."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing millibar with megabar or megapascal: 'm' represents milli ($10^{-3}$), whereas 'M' represents mega ($10^6$). Confusing mbar with Mbar causes a billion-fold error.",
      "Conflating millibar with bar: Multiplying or dividing by 1,000 in the wrong direction can make a normal atmospheric pressure of 1 bar appear as 0.001 mbar.",
      "Ignoring local station pressure versus sea-level pressure: Altimeters and weather stations correct raw pressure readings to sea level. Make sure you know whether a value is station pressure or mean sea level pressure (MSLP).",
      "Overlooking hectopascal equality: Some technicians waste time looking up conversion factors between mbar and hPa, not realizing that 1 mbar is identically equal to 1 hPa."
    ]
  },
  faqs: [
    {
      question: "How many millibars are in 1 bar?",
      answer: "There are exactly 1,000 millibars in 1 bar (1 bar = 1,000 mbar)."
    },
    {
      question: "What is the formula to convert bar to millibars?",
      answer: "The formula is: mbar = bar × 1,000. For example, 1.01325 bar × 1,000 = 1,013.25 mbar."
    },
    {
      question: "How do you convert millibars back to bar?",
      answer: "Divide the mbar value by 1,000 (or multiply by 0.001). For example, 1,013.25 mbar ÷ 1,000 = 1.01325 bar."
    },
    {
      question: "Is 1 millibar equal to 1 hectopascal (hPa)?",
      answer: "Yes, exactly. 1 millibar = 100 Pascals = 1 hectopascal (1 mbar = 1 hPa). They are numerically identical."
    },
    {
      question: "What is standard atmospheric pressure in millibars?",
      answer: "Standard sea-level atmospheric pressure is exactly 1,013.25 mbar (or 1,013.25 hPa, which corresponds to 1.01325 bar or 1 atmosphere)."
    },
    {
      question: "What is a typical high-pressure weather system in millibars?",
      answer: "A strong high-pressure system (anticyclone) typically ranges between 1,025 mbar and 1,040 mbar, bringing clear, dry weather."
    },
    {
      question: "What pressure does a hurricane reach in millibars?",
      answer: "A severe hurricane or typhoon central eye pressure often drops to 900–940 mbar. The lowest recorded pressure was 870 mbar during Typhoon Tip in 1979."
    },
    {
      question: "What is 0.05 bar in millibars for vacuum systems?",
      answer: "0.05 bar equals exactly 50 mbar (0.05 × 1,000 = 50 mbar)."
    }
  ],
  relatedList: [
    { label: "Millibar to Bar", from: "millibar", to: "bar" },
    { label: "Bar to Pascal", from: "bar", to: "pascal" },
    { label: "Bar to Kilopascal", from: "bar", to: "kilopascal" },
    { label: "Bar to Atmosphere", from: "bar", to: "atmosphere" },
    { label: "Bar to PSI", from: "bar", to: "psi" }
  ],
  references: [
    "World Meteorological Organization (WMO) - Guide to Meteorological Instruments and Methods of Observation",
    "Bureau International des Poids et Mesures (BIPM) - The International System of Units (SI), 9th Edition",
    "ICAO Doc 9837: Manual on Automatic Meteorological Observing Systems at Aerodromes",
    "ISO 80000-4: Quantities and units — Part 4: Mechanics"
  ]
};
