import { CustomArticleData } from "./types";

export const millibarToBar: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "bar",
  seoTitle: "Millibar to Bar Converter (mbar to bar)",
  metaDescription: "Convert millibar to bar (mbar to bar) with exact 1,000÷ metric precision. Review formulas, HVAC and diving examples, conversion tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-bar",
  h1: "Millibar to Bar Converter",
  introduction: [
    "Converting millibar to bar is one of the most common everyday pressure calculations in European process engineering, compressed air systems, heating and plumbing installations, SCUBA diving, and meteorology. While the bar is the standard scale on industrial dials and regulators, the millibar provides precision for subtle differentials, atmospheric variations, and vacuum leak testing.",
    "The conversion between millibar and bar is based on the standard metric prefix 'milli-', which represents one-thousandth (1/1,000). Therefore, one millibar equals exactly 0.001 bar (10⁻³ bar), and one bar equals exactly 1,000 millibars. To convert millibar to bar, simply divide by 1,000 (or shift the decimal point three places to the left).",
    "This technical guide details the 1,000÷ conversion relationship, demonstrates worked calculations across compressed air manifolds and barometric stations, provides a comprehensive lookup chart, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to bar, divide the value in millibar by 1,000 (or multiply by 0.001). For example, 1,000 mbar equals exactly 1 bar, and standard atmospheric pressure of 1,013.25 mbar equals exactly 1.01325 bar.",
    formulaDisplay: "bar = mbar ÷ 1,000",
    subtext: "1 mbar = 0.001 bar (exact) | 1 bar = 1,000 mbar | Shift decimal three places left"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a metric subunit of pressure equal to 1/1,000 of a bar (100 Pascals). Commonly used on barometers, aircraft altimeter setting subscales, and natural gas line gauges, it is identical in magnitude to the hectopascal (hPa)."
  },
  aboutTargetUnit: {
    title: "Understanding the Bar (bar)",
    text: "The bar (symbol: bar) is a metric unit of pressure equal to exactly 100,000 Pascals (100 kPa). Originally formulated by meteorologist William Napier Shaw in 1909, it represents roughly the atmospheric pressure at sea level (1.01325 bar) and is the dominant dial pressure unit across European and global industry."
  },
  relationship: "The relationship between millibar and bar is fixed by the metric definition of the prefix 'milli': 1 millibar equals exactly 0.001 bar (1 mbar = 0.001 bar). Conversely, 1 bar equals exactly 1,000 millibars (1 bar = 1,000 mbar).",
  relationshipTitle: "Millibar to Bar Scale Benchmarks",
  relationshipItems: [
    { label: "1 mbar", value: "0.001 bar (Base metric ratio)" },
    { label: "50 mbar", value: "0.050 bar (Residential natural gas appliance pressure)" },
    { label: "200 mbar", value: "0.200 bar (Low-pressure industrial blower)" },
    { label: "500 mbar", value: "0.500 bar (Half an atmosphere)" },
    { label: "1,000 mbar", value: "1.000 bar (1 bar exact metric milestone)" },
    { label: "1,013.25 mbar", value: "1.01325 bar (Standard sea-level atmospheric pressure)" },
    { label: "2,500 mbar", value: "2.500 bar (Passenger car tire gauge pressure)" },
    { label: "6,000 mbar", value: "6.000 bar (Standard workshop pneumatic supply)" }
  ],
  formula: {
    text: "Divide the pressure in millibar by 1,000, or multiply by 0.001, to obtain bar.",
    math: "\\text{bar} = \\frac{\\text{mbar}}{1\\,000} = \\text{mbar} \\times 0.001",
    subtext: "To convert bar back to millibar: multiply bar by 1,000."
  },
  formulaTitle: "Millibar to Bar Conversion Formula",
  practicalTip: {
    title: "The Three-Decimal Left Shift",
    text: "Because 1 bar contains 1,000 mbar, converting from mbar to bar is accomplished by moving the decimal point three positions to the left (e.g., 2,450 mbar = 2.45 bar; 1,013.25 mbar = 1.01325 bar)."
  },
  expertNote: {
    title: "Dial Gauges vs. Digital Sensors",
    text: "Technicians frequently inspect mechanical Bourdon tube gauges calibrated in whole bar (with 0.1 bar graduations) alongside digital sensor readouts configured in millibars. Dividing digital mbar readings by 1,000 enables immediate visual cross-verification against analog dials."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Boiler Expansion Vessel Pre-charge",
        subtitle: "A hydronic heating technician checks an expansion vessel pre-charge pressure reading 1,500 mbar. What is this value in bar?",
        steps: [
          "State starting pressure: 1,500 mbar.",
          "Apply conversion: bar = mbar ÷ 1,000.",
          "Calculate: 1,500 ÷ 1,000 = 1.5 bar.",
          "Result: 1,500 mbar equals exactly 1.5 bar."
        ]
      },
      {
        title: "Example 2: Weather Barometer Conversion",
        subtitle: "A digital barometric weather station records 984.5 mbar during an approaching storm front. Express this in bar.",
        steps: [
          "Record pressure: 984.5 mbar.",
          "Calculate: 984.5 × 0.001 = 0.9845 bar.",
          "Conclusion: 984.5 mbar equals 0.9845 bar."
        ]
      },
      {
        title: "Example 3: Industrial Compressor Line Test",
        subtitle: "A pneumatic air line operates at 7,850 mbar. Convert this to bar for piping stress documentation.",
        steps: [
          "State value: 7,850 mbar.",
          "Divide by 1,000: 7,850 ÷ 1,000 = 7.85 bar.",
          "Result: 7,850 mbar equals 7.85 bar."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to Bar Conversion Table",
    headers: ["Millibar (mbar)", "Bar (bar)", "Kilopascals (kPa)", "PSI (psi)", "Typical Operational Context"],
    rows: [
      { fromVal: "10 mbar", toVal: "0.010 bar", extra: "1.0 kPa", extra2: "0.145 psi", extra3: "Plenum ventilation differential" },
      { fromVal: "50 mbar", toVal: "0.050 bar", extra: "5.0 kPa", extra2: "0.725 psi", extra3: "Gas appliance burner inlet" },
      { fromVal: "100 mbar", toVal: "0.100 bar", extra: "10.0 kPa", extra2: "1.450 psi", extra3: "Industrial blower discharge" },
      { fromVal: "250 mbar", toVal: "0.250 bar", extra: "25.0 kPa", extra2: "3.626 psi", extra3: "Low-pressure leak decay test" },
      { fromVal: "500 mbar", toVal: "0.500 bar", extra: "50.0 kPa", extra2: "7.252 psi", extra3: "Vacuum packaging hold level" },
      { fromVal: "800 mbar", toVal: "0.800 bar", extra: "80.0 kPa", extra2: "11.603 psi", extra3: "Mountain weather station" },
      { fromVal: "1,000 mbar", toVal: "1.000 bar", extra: "100.0 kPa", extra2: "14.504 psi", extra3: "Standard metric baseline" },
      { fromVal: "1,013.25 mbar", toVal: "1.01325 bar", extra: "101.325 kPa", extra2: "14.696 psi", extra3: "Standard sea-level atmosphere" },
      { fromVal: "1,500 mbar", toVal: "1.500 bar", extra: "150.0 kPa", extra2: "21.756 psi", extra3: "Residential hydronic boiler loop" },
      { fromVal: "2,200 mbar", toVal: "2.200 bar", extra: "220.0 kPa", extra2: "31.908 psi", extra3: "Automobile tire cold inflation" },
      { fromVal: "6,000 mbar", toVal: "6.000 bar", extra: "600.0 kPa", extra2: "87.023 psi", extra3: "Workshop compressed air ring" },
      { fromVal: "10,000 mbar", toVal: "10.000 bar", extra: "1,000 kPa", extra2: "145.038 psi", extra3: "Commercial high-pressure compressor" }
    ]
  },
  applications: {
    title: "Practical Industrial Applications",
    items: [
      {
        title: "Heating, Ventilation & Air Conditioning (HVAC)",
        text: "Hydronic heating circuits maintain filling pressures between 1.0 and 2.5 bar (1,000 to 2,500 mbar) to guarantee circulation to upper radiator levels."
      },
      {
        title: "SCUBA Diving & Hyperbaric Systems",
        text: "Diving cylinders filled to 200 or 300 bar (200,000 to 300,000 mbar) pass through first-stage regulators reducing pressure to intermediate levels (around 9 to 10 bar)."
      },
      {
        title: "Compressed Air Distribution",
        text: "Pneumatic tools require regulated delivery pressures of 6 to 8 bar (6,000 to 8,000 mbar) for proper torque output and seal longevity."
      },
      {
        title: "Automotive Tire Pressure Management",
        text: "European vehicle tire placards state recommended tire pressures in bar (e.g. 2.2 to 2.5 bar), corresponding to 2,200 to 2,500 mbar."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes",
    items: [
      "Multiplying by 1,000 instead of dividing when converting from mbar to bar.",
      "Misplacing the decimal: converting 50 mbar to 0.5 bar instead of 0.05 bar.",
      "Confusing gauge pressure (barg) with absolute pressure (bara).",
      "Treating standard atmosphere (1.01325 bar) as exactly 1 bar."
    ]
  },
  faqs: [
      {
        question: "How many bar are in 1 millibar?",
        answer: "There is exactly 0.001 bar in 1 millibar (1/1,000 of a bar). Conversely, 1 bar contains exactly 1,000 millibars."
      },
      {
        question: "How do you convert millibar to bar?",
        answer: "To convert millibar to bar, divide the value by 1,000 (or multiply by 0.001): <strong>bar = mbar ÷ 1,000</strong>. For example, 2,500 mbar divided by 1,000 equals 2.5 bar."
      },
      {
        question: "How do you convert bar to millibar?",
        answer: "Multiply the bar value by 1,000: <strong>mbar = bar × 1,000</strong>. For instance, 1.6 bar equals 1,600 mbar."
      },
      {
        question: "What is standard atmospheric pressure in bar and mbar?",
        answer: "Standard sea-level atmospheric pressure is exactly 1,013.25 mbar, which equals exactly 1.01325 bar."
      },
      {
        question: "Is 1 bar equal to 1,000 mbar?",
        answer: "Yes, exactly. The metric prefix 'milli-' means one-thousandth, so 1 bar equals exactly 1,000 millibars."
      },
      {
        question: "What is 100 mbar in bar?",
        answer: "One hundred millibars equals exactly 0.1 bar (100 ÷ 1,000 = 0.1 bar)."
      },
      {
        question: "Why do barometers use mbar instead of bar?",
        answer: "Atmospheric pressure fluctuations are small (typically within 960 to 1,040 mbar). Expressing them in millibar uses convenient four-digit integers rather than three or four decimal places in bar."
      },
      {
        question: "What is 2.5 bar in millibar?",
        answer: "Two point five bar equals exactly 2,500 millibars (2.5 × 1,000 = 2,500 mbar)."
      }
    ],
  references: [
    "BIPM: The International System of Units (SI Brochure)",
    "ISO 80000-4: Quantities and Units — Mechanics",
    "NIST Special Publication 811: Guide for the Use of the International System of Units",
    "World Meteorological Organization (WMO) Technical Regulations"
  ]
};
