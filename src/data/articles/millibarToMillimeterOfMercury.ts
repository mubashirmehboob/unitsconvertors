import { CustomArticleData } from "./types";

export const millibarToMillimeterOfMercury: CustomArticleData = {
  fromUnitId: "millibar",
  toUnitId: "mmhg",
  seoTitle: "Millibar to Millimeter of Mercury Converter (mbar to mmHg)",
  metaDescription: "Convert millibar to millimeters of mercury (mbar to mmHg) with medical & meteorological accuracy. Learn formulas, clinical examples, tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/millibar-to-millimeter-of-mercury",
  h1: "Millibar to Millimeter of Mercury Converter",
  introduction: [
    "Converting millibar to millimeters of mercury (mmHg) is a daily necessity in medical instrumentation, respiratory care, blood pressure monitor (sphygmomanometer) testing, cardiovascular physiology, and barometric meteorology. While weather stations, aviation barometers, and digital gas transducers measure pressure in millibars (or hectopascals), medical diagnosis and clinical monitoring worldwide remain anchored to millimeters of mercury.",
    "A conventional millimeter of mercury represents the hydrostatic pressure exerted by a 1 mm high column of liquid mercury at 0 °C under standard gravitational acceleration (9.80665 m/s²), which international metrology defines as approximately 133.322387415 Pascals. Because one millibar equals exactly 100 Pascals, one millibar equals 100 ÷ 133.322387415 ≈ 0.75006156 mmHg (roughly 3/4 of a mmHg). To convert millibars to millimeters of mercury, multiply by 0.75006156.",
    "This technical guide explains the conversion derivation, provides step-by-step examples across clinical medicine and respiratory ventilators, presents a comprehensive conversion table, and answers common technical questions."
  ],
  quickAnswer: {
    text: "To convert millibar to millimeters of mercury (mmHg), multiply the pressure value in millibar by 0.75006156 (or divide by 1.3332239). For example, standard atmospheric pressure of 1,013.25 mbar equals approximately 760.00 mmHg, and 160 mbar equals approximately 120.01 mmHg (normal systolic blood pressure).",
    formulaDisplay: "mmHg = mbar × 0.75006156",
    subtext: "1 mbar = 0.75006156 mmHg | 1 mmHg = 1.33322387 mbar | Medical & barometric standard"
  },
  aboutSourceUnit: {
    title: "Understanding the Millibar (mbar)",
    text: "The millibar (symbol: mbar) is a metric unit of pressure equal to 1/1,000 of a bar (100 Pascals or 1 hectopascal). Widely used on weather maps, digital barometers, and medical gas pipeline pressure gauges, it provides convenient human-scale values."
  },
  aboutTargetUnit: {
    title: "Understanding the Millimeter of Mercury (mmHg)",
    text: "The millimeter of mercury (symbol: mmHg) is a manometric unit of pressure defined by the hydrostatic pressure produced by a 1 mm vertical column of mercury at 0 °C (133.322 Pa). It is the universal standard for clinical blood pressure, intracranial pressure, pulmonary capillary wedge pressure, and blood gas partial pressures."
  },
  relationship: "One millibar equals 100 Pascals, while 1 conventional mmHg equals 133.322387415 Pascals. Therefore, 1 millibar equals approximately 0.75006156 mmHg (about 3/4 of a mmHg). Conversely, 1 mmHg equals approximately 1.33322387 millibars (about 4/3 of a millibar).",
  relationshipTitle: "Millibar to mmHg Clinical & Barometric Benchmarks",
  relationshipItems: [
    { label: "1 mbar", value: "0.750 mmHg (Base scaling ratio)" },
    { label: "13.33 mbar", value: "10.00 mmHg (Normal intracranial pressure benchmark)" },
    { label: "26.66 mbar", value: "20.00 mmHg (Intraocular pressure upper limit)" },
    { label: "106.66 mbar", value: "80.00 mmHg (Healthy adult diastolic blood pressure)" },
    { label: "160.00 mbar", value: "120.01 mmHg (Healthy adult systolic blood pressure)" },
    { label: "500.00 mbar", value: "375.03 mmHg (Half an atmosphere)" },
    { label: "1,000.00 mbar", value: "750.06 mmHg (1 bar metric milestone)" },
    { label: "1,013.25 mbar", value: "760.00 mmHg (Standard atmospheric sea level)" }
  ],
  formula: {
    text: "Multiply the pressure in millibar by 0.75006156 to calculate millimeters of mercury (mmHg).",
    math: "\\text{mmHg} = \\text{mbar} \\times 0.75006156 = \\frac{\\text{mbar}}{1.33322387}",
    subtext: "To convert mmHg to millibar: multiply by 1.33322387 (or divide by 0.75006156)."
  },
  formulaTitle: "Millibar to mmHg Conversion Formula",
  practicalTip: {
    title: "Three-Quarter Clinical Rule",
    text: "For quick bedside clinical evaluations, multiply the millibar value by 3 and divide by 4 (or multiply by 0.75). For example, 40 mbar on an endotracheal cuff inflator corresponds to 40 × 0.75 = 30 mmHg (exact is 30.002 mmHg). This quick rule is accurate within 0.008%."
  },
  expertNote: {
    title: "Calibration of Electronic Blood Pressure Monitors",
    text: "Hospital biomedical equipment maintenance kits utilize pneumatic calibration pumps with digital digital readouts calibrated in mbar. Technicians cross-reference the mbar reading against the patient monitor's display in mmHg using the exact factor 1.333224 mbar/mmHg to verify transducer linearity across 0 to 300 mmHg."
  },
  examples: {
    title: "Worked Conversion Examples",
    items: [
      {
        title: "Example 1: Endotracheal Tube Cuff Pressure",
        subtitle: "A respiratory therapist checks a tracheal cuff pressure gauge displaying 33.3 mbar. Convert this to mmHg to ensure tracheal mucosal capillary perfusion is maintained.",
        steps: [
          "State starting pressure: 33.3 mbar.",
          "Apply conversion: mmHg = mbar × 0.75006156.",
          "Calculate: 33.3 × 0.75006156 = 24.977 mmHg.",
          "Clinical conclusion: 33.3 mbar equals approximately 25 mmHg, within the safe recommended range of 20 to 30 mmHg."
        ]
      },
      {
        title: "Example 2: Medical Suction Regulator Setting",
        subtitle: "A surgical airway suction regulator is set to 160 mbar below ambient pressure. Express this suction level in mmHg.",
        steps: [
          "Record suction pressure: 160 mbar.",
          "Calculate: 160 × 0.75006156 = 120.01 mmHg.",
          "Result: 160 mbar equals 120 mmHg suction."
        ]
      },
      {
        title: "Example 3: Sea-Level Atmospheric Pressure Conversion",
        subtitle: "Convert standard barometric sea-level pressure of 1,013.25 mbar into mmHg.",
        steps: [
          "State value: 1,013.25 mbar.",
          "Multiply: 1,013.25 × 0.75006156 = 760.000 mmHg.",
          "Result: 1,013.25 mbar equals exactly 760.00 mmHg."
        ]
      }
    ]
  },
  table: {
    title: "Millibar to Millimeter of Mercury Reference Table",
    headers: ["Millibar (mbar)", "Millimeters of Mercury (mmHg)", "Kilopascals (kPa)", "Torr (Torr)", "Clinical & Physiological Context"],
    rows: [
      { fromVal: "5 mbar", toVal: "3.75 mmHg", extra: "0.50 kPa", extra2: "3.75 Torr", extra3: "Central venous pressure lower boundary" },
      { fromVal: "10 mbar", toVal: "7.50 mmHg", extra: "1.00 kPa", extra2: "7.50 Torr", extra3: "Normal intracranial pressure (ICP)" },
      { fromVal: "20 mbar", toVal: "15.00 mmHg", extra: "2.00 kPa", extra2: "15.00 Torr", extra3: "Normal intraocular eye pressure (IOP)" },
      { fromVal: "33.3 mbar", toVal: "25.00 mmHg", extra: "3.33 kPa", extra2: "25.00 Torr", extra3: "Endotracheal cuff recommended inflation" },
      { fromVal: "50 mbar", toVal: "37.50 mmHg", extra: "5.00 kPa", extra2: "37.50 Torr", extra3: "Mild surgical suction setting" },
      { fromVal: "80 mbar", toVal: "60.00 mmHg", extra: "8.00 kPa", extra2: "60.01 Torr", extra3: "Mean arterial pressure lower safe limit" },
      { fromVal: "106.7 mbar", toVal: "80.01 mmHg", extra: "10.67 kPa", extra2: "80.01 Torr", extra3: "Standard adult diastolic blood pressure" },
      { fromVal: "160 mbar", toVal: "120.01 mmHg", extra: "16.00 kPa", extra2: "120.01 Torr", extra3: "Standard adult systolic blood pressure" },
      { fromVal: "200 mbar", toVal: "150.01 mmHg", extra: "20.00 kPa", extra2: "150.01 Torr", extra3: "Moderate arterial hypertension level" },
      { fromVal: "500 mbar", toVal: "375.03 mmHg", extra: "50.00 kPa", extra2: "375.03 Torr", extra3: "High altitude barometric pressure" },
      { fromVal: "1,000 mbar", toVal: "750.06 mmHg", extra: "100.00 kPa", extra2: "750.06 Torr", extra3: "1 bar exact metric benchmark" },
      { fromVal: "1,013.25 mbar", toVal: "760.00 mmHg", extra: "101.325 kPa", extra2: "760.00 Torr", extra3: "Standard atmospheric sea level" }
    ]
  },
  applications: {
    title: "Healthcare & Physiological Applications",
    items: [
      {
        title: "Cardiovascular Blood Pressure Monitoring",
        text: "Arterial lines and digital cuff monitors record systolic, diastolic, and mean arterial pressures in mmHg, requiring calibration against electronic pressure testers calibrated in millibars."
      },
      {
        title: "Intubation & Airway Management",
        text: "Endotracheal and tracheostomy cuff pressures are maintained between 20 and 30 mmHg (approx. 27 to 40 mbar) to seal the trachea without compromising capillary perfusion."
      },
      {
        title: "Blood Gas Analysis (ABG)",
        text: "Clinical analyzers report partial pressures of oxygen (PaO2) and carbon dioxide (PaCO2) in mmHg, derived from sensor membranes exposed to barometric air measured in mbar."
      },
      {
        title: "Barometric Weather Recording",
        text: "Historical weather records preserved in inches or millimeters of mercury are translated into modern synoptic millibars and hectopascals for long-term climate trend studies."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes",
    items: [
      "Confusing centimeters of water (cmH2O) with mmHg (1 mmHg ≈ 1.36 cmH2O; ventilator airway pressures often use cmH2O).",
      "Treating 1 mbar as 1 mmHg (1 mbar is roughly 0.75 mmHg, causing a 25% underestimation if assumed equal).",
      "Conflating atmospheric pressure (1,013.25 mbar) with 1,000 mbar when converting to 760 mmHg.",
      "Overlooking gauge pressure vs. absolute pressure when measuring clinical physiological parameters."
    ]
  },
  faqs: [
      {
        question: "How many mmHg are in 1 millibar?",
        answer: "There are approximately 0.75006156 mmHg in 1 millibar (about 3/4 of a mmHg). Conversely, 1 mmHg equals approximately 1.33322387 millibars (about 4/3 of a millibar)."
      },
      {
        question: "How do you convert millibar to mmHg?",
        answer: "To convert millibar to mmHg, multiply the millibar value by 0.75006156: <strong>mmHg = mbar × 0.75006156</strong>. For example, 100 mbar equals approximately 75.01 mmHg."
      },
      {
        question: "How do you convert mmHg to millibar?",
        answer: "Multiply the mmHg value by 1.33322387 (or divide by 0.75006156): <strong>mbar = mmHg × 1.33322387</strong>. For example, 120 mmHg equals approximately 160.0 mbar."
      },
      {
        question: "What is blood pressure 120/80 mmHg in millibar?",
        answer: "A standard blood pressure reading of 120/80 mmHg corresponds to approximately 160.0 mbar systolic and 106.7 mbar diastolic."
      },
      {
        question: "What is standard atmospheric pressure in mbar and mmHg?",
        answer: "Standard sea-level atmospheric pressure is defined as exactly 1,013.25 mbar, which corresponds to exactly 760.00 mmHg."
      },
      {
        question: "Why does healthcare use mmHg instead of millibar?",
        answer: "Centuries of cardiovascular clinical data and the direct physics of mercury sphygmomanometers established mmHg as the clinical gold standard worldwide."
      },
      {
        question: "What is the difference between mmHg and cmH2O?",
        answer: "Both are manometric fluid pressure units. Because mercury is 13.6 times denser than water, 1 mmHg equals approximately 1.36 cmH2O. Airway pressures are often reported in cmH2O, while vascular pressures use mmHg."
      },
      {
        question: "What is 1,000 mbar in mmHg?",
        answer: "One thousand millibars (1 bar) equals approximately 750.062 mmHg."
      }
    ],
  references: [
    "ISO 81060-1: Non-invasive sphygmomanometers — Part 1: Requirements and test methods",
    "American Heart Association (AHA): Recommendations for Blood Pressure Measurement",
    "BIPM: The International System of Units (SI Brochure, 9th Edition)",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
