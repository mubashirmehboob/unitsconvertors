import { CustomArticleData } from "./types";

export const kilopascalToTorr: CustomArticleData = {
  fromUnitId: "kilopascal",
  toUnitId: "torr",
  seoTitle: "Kilopascal to Torr Converter (kPa to Torr)",
  metaDescription: "Convert kilopascals to Torr (kPa to Torr) with exact vacuum physics precision. Learn the 7.500617 multiplier ratio, formula, vacuum pump examples, tables, and FAQs.",
  h1: "Kilopascal to Torr Converter",
  introduction: [
    "Converting kilopascals (kPa) to Torr is an essential conversion across vacuum physics, semiconductor wafer fabrication, thin-film physical vapor deposition (PVD), mass spectrometry, and lyophilization (freeze-drying). While modern international engineering standards and SI laboratory instrumentation record chamber pressures in kilopascals or Pascals, vacuum pump specifications, Pirani gauges, and low-pressure physics literature historically and widely utilize the Torr.",
    "By international metrological definition, one Torr is defined as exactly 1/760th of a standard atmosphere ($101,325 / 760\\text{ Pa} \\approx 133.322368\\text{ Pa}$). Because one kilopascal equals 1,000 Pascals, one kilopascal equals exactly $760,000 / 101,325\\text{ Torr}$ (or approximately 7.500617 Torr). To convert kilopascals into Torr, multiply the pressure value by 7.500617 (or divide by 0.1333224).",
    "This comprehensive guide explains the exact mathematical derivation between the SI Pascal system and the Torr, provides step-by-step vacuum calculation examples, details a high-to-rough vacuum reference chart, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert kilopascals to Torr, multiply the pressure in kilopascals by 7.500617 (or divide by 0.133322). For example, 10 kPa equals approximately 75.01 Torr, and standard atmospheric pressure of 101.325 kPa equals exactly 760.0 Torr.",
    formulaDisplay: "Torr = kPa × \\frac{760}{101.325} ≈ kPa × 7.500617",
    subtext: "Exact ratio: 1 kPa = 760,000 / 101,325 Torr ≈ 7.5006168 Torr.\n1 Torr = 101.325 / 760 kPa ≈ 0.1333224 kPa (133.322 Pa)."
  },
  aboutSourceUnit: {
    title: "Understanding the Kilopascal (kPa)",
    text: "The kilopascal (symbol: kPa) is an official decimal multiple of the Pascal, representing 1,000 Newtons per square meter (10³ Pa). It is the recognized SI unit for measuring atmospheric pressure, gas storage pressures, and fluid flow dynamics in science and industry."
  },
  aboutTargetUnit: {
    title: "Understanding the Torr (Torr)",
    text: "Named after Italian physicist Evangelista Torricelli (inventor of the mercury barometer in 1643), the Torr (symbol: Torr) is a non-SI unit of pressure defined as exactly 1/760 of a standard atmosphere (101,325 / 760 Pa ≈ 133.322 Pa). It is the standard unit in rough, medium, and high-vacuum technology."
  },
  relationship: "The relationship between kilopascals and Torr is derived from the standard atmosphere: 1 atm = 101.325 kPa = 760 Torr. Thus, 1 kPa = 760 / 101.325 Torr ≈ 7.500617 Torr, and 1 Torr = 0.1333224 kPa.",
  relationshipTitle: "Kilopascal to Torr Vacuum Milestones",
  relationshipItems: [
    { label: "0.1333 kPa", value: "1.000 Torr (Rough vacuum threshold)" },
    { label: "1.0000 kPa", value: "7.5006 Torr (Laboratory rotary vane pump limit)" },
    { label: "10.000 kPa", value: "75.006 Torr (Industrial vacuum freeze dryer)" },
    { label: "50.000 kPa", value: "375.03 Torr (Sub-atmospheric chamber pressure)" },
    { label: "100.00 kPa", value: "750.06 Torr (1 bar metric baseline)" },
    { label: "101.325 kPa", value: "760.00 Torr (Exact standard sea-level atmosphere)" }
  ],
  formula: {
    text: "Multiply the pressure in kilopascals by 760 / 101.325 (approximately 7.500617) to obtain the pressure in Torr.",
    math: "\\text{Torr} = \\text{kPa} \\times \\frac{760}{101.325} \\approx \\text{kPa} \\times 7.500617",
    subtext: "To convert Torr back to kilopascals, multiply the Torr value by 101.325 / 760 (approximately 0.1333224)."
  },
  formulaTitle: "Kilopascal to Torr Formula",
  practicalTip: {
    title: "The 7.5× Multiplication Mental Rule",
    text: "To approximate Torr quickly in your head: multiply the kilopascal value by 7.5 (e.g., 20 kPa × 7.5 = 150 Torr, virtually identical to the exact 150.01 Torr)."
  },
  expertNote: {
    title: "Difference Between Torr and mmHg",
    text: "While 1 Torr was historically treated as 1 mmHg, modern metrology defines 1 Torr as exactly $101,325 / 760\\text{ Pa} \\approx 133.322368\\text{ Pa}$, whereas conventional $1\\text{ mmHg} = 133.322387\\text{ Pa}$. The difference is less than 0.000015% and negligible in standard engineering."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Laboratory Rotary Vane Vacuum Pump (2.5 kPa)",
        subtitle: "A chemistry vacuum filtration pump reaches an ultimate pressure of 2.5 kPa. Convert this vacuum level to Torr.",
        steps: [
          "State starting pressure: 2.5 kPa.",
          "Apply conversion ratio: Torr = 2.5 × (760 / 101.325).",
          "Calculate: 2.5 × 7.500617 = 18.7515.",
          "Result: 2.5 kPa equals approximately 18.75 Torr."
        ]
      },
      {
        title: "Example 2: Freeze-Drying Sublimation Chamber (0.05 kPa)",
        subtitle: "A pharmaceutical lyophilizer maintains chamber pressure at 0.05 kPa (50 Pa). Convert to Torr for process batch records.",
        steps: [
          "Identify chamber pressure: 0.05 kPa.",
          "Apply formula: Torr = 0.05 × 7.500617.",
          "Calculate: 0.05 × 7.500617 = 0.37503.",
          "Result: 0.05 kPa corresponds to approximately 0.375 Torr (375 mTorr / microns of Hg)."
        ]
      },
      {
        title: "Example 3: Low-Pressure Chemical Vapor Deposition (LPCVD) (15 kPa)",
        subtitle: "A semiconductor furnace operates at a process gas pressure of 15 kPa. Convert to Torr.",
        steps: [
          "State pressure: 15 kPa.",
          "Apply conversion: Torr = 15 × 7.500617.",
          "Calculate: 15 × 7.500617 = 112.509.",
          "Result: 15 kPa equals approximately 112.51 Torr."
        ]
      }
    ]
  },
  table: {
    title: "Kilopascal to Torr Vacuum Scale Table",
    headers: ["Kilopascals (kPa)", "Torr (Torr)", "Millibar (mbar)", "Vacuum Level / Engineering Context"],
    rows: [
      { fromVal: "0.001 kPa (1 Pa)", toVal: "0.00750 Torr", extra: "0.010 mbar", extra2: "Medium vacuum / Sputter coating baseline" },
      { fromVal: "0.01 kPa (10 Pa)", toVal: "0.07501 Torr", extra: "0.100 mbar", extra2: "Lyophilization (freeze-drying) chamber" },
      { fromVal: "0.1333 kPa", toVal: "1.00000 Torr", extra: "1.333 mbar", extra2: "1 Torr rough vacuum reference" },
      { fromVal: "1.0 kPa", toVal: "7.50062 Torr", extra: "10.000 mbar", extra2: "Mechanical diaphragm pump vacuum" },
      { fromVal: "5.0 kPa", toVal: "37.5031 Torr", extra: "50.000 mbar", extra2: "Industrial vacuum distillation" },
      { fromVal: "10.0 kPa", toVal: "75.0062 Torr", extra: "100.000 mbar", extra2: "Rough vacuum holding tank" },
      { fromVal: "25.0 kPa", toVal: "187.515 Torr", extra: "250.000 mbar", extra2: "Commercial aircraft cruise altitude pressure" },
      { fromVal: "50.0 kPa", toVal: "375.031 Torr", extra: "500.000 mbar", extra2: "Half standard atmospheric pressure" },
      { fromVal: "100.0 kPa", toVal: "750.062 Torr", extra: "1,000.00 mbar", extra2: "1 Bar exact metric baseline" },
      { fromVal: "101.325 kPa", toVal: "760.000 Torr", extra: "1,013.25 mbar", extra2: "Standard sea-level atmospheric baseline" }
    ]
  },
  applications: {
    title: "Key Vacuum Technology Applications",
    items: [
      {
        title: "Semiconductor Thin-Film Deposition",
        text: "In chemical vapor deposition (CVD) and plasma etching, mass flow controllers meter gas in standard sccm while chamber pressure gauges display readouts in Torr, converted from kPa system calibrations."
      },
      {
        title: "Pharmaceutical Freeze-Drying (Lyophilization)",
        text: "Process engineers convert condenser and drying chamber pressures between kPa and Torr (or milliTorr) to ensure water sublimates below the triple-point boundary."
      },
      {
        title: "Vacuum Metallurgy and Heat Treating",
        text: "Vacuum induction melting (VIM) furnaces monitor protective argon atmospheres by converting sensor readings in kPa into Torr."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Dividing by 7.5006 instead of multiplying: Converting kPa to Torr increases the numerical value by ~7.5 times.",
      "Confusing Torr with milliTorr (mTorr): 1 Torr = 1,000 mTorr (1 kPa = 7,500.62 mTorr).",
      "Using 7.5 as an exact multiplier in high-precision metrology: Always use 760 / 101.325 (7.500617) for rigorous calculations."
    ]
  },
  faqs: [
    {
      question: "How do you convert kilopascals to Torr?",
      answer: "Multiply the pressure in kilopascals by 7.500617 (or multiply by 760 and divide by 101.325)."
    },
    {
      question: "How many Torr are in 1 kilopascal?",
      answer: "There are approximately 7.500617 Torr in 1 kilopascal (exact ratio 760,000 / 101,325 Torr)."
    },
    {
      question: "What is 101.325 kPa in Torr?",
      answer: "101.325 kPa equals exactly 760.0 Torr (standard atmospheric pressure)."
    },
    {
      question: "What is 10 kPa in Torr?",
      answer: "10 kPa equals approximately 75.0062 Torr (10 × 7.500617 ≈ 75.01 Torr)."
    },
    {
      question: "How do you convert Torr back to kPa?",
      answer: "Multiply the pressure in Torr by 0.1333224 (or multiply by 101.325 and divide by 760). For example, 760 Torr × 0.1333224 = 101.325 kPa."
    },
    {
      question: "What is 1 kPa in Torr?",
      answer: "1 kPa equals approximately 7.50062 Torr."
    },
    {
      question: "Is Torr the same as millimeter of mercury (mmHg)?",
      answer: "They are virtually identical for almost all practical purposes. 1 Torr is defined as 101,325/760 Pa (≈ 133.322368 Pa), while 1 mmHg is defined as 133.322387 Pa (a difference under 0.000015%)."
    },
    {
      question: "What is 100 kPa in Torr?",
      answer: "100 kPa equals approximately 750.062 Torr (100 × 7.500617 = 750.062 Torr)."
    }
  ],
  relatedList: [
    { label: "Torr to Kilopascal", from: "torr", to: "kilopascal" },
    { label: "Pascal to Torr", from: "pascal", to: "torr" },
    { label: "Kilopascal to Millimeter of Mercury", from: "kilopascal", to: "mmhg" },
    { label: "Kilopascal to Atmosphere", from: "kilopascal", to: "atmosphere" },
    { label: "Kilopascal to Bar", from: "kilopascal", to: "bar" }
  ],
  references: [
    "American Vacuum Society (AVS): Recommended Vacuum Terminology and Standards.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
