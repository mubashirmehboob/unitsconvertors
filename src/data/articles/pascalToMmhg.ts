import { CustomArticleData } from "./types";

export const pascalToMmhg: CustomArticleData = {
  fromUnitId: "pascal",
  toUnitId: "mmhg",
  seoTitle: "Pascal to Millimeter of Mercury Converter (Pa to mmHg)",
  metaDescription: "Convert Pascals to millimeters of mercury (Pa to mmHg) with medical & scientific precision. Learn the 133.322 conversion factor, blood pressure formulas, tables, and FAQs.",
  h1: "Pascal to Millimeter of Mercury Converter",
  introduction: [
    "Converting Pascals (Pa) to millimeters of mercury (mmHg) is a standard calculation in medicine, cardiovascular physiology, respiratory care, meteorology, and barometric instrumentation. While the Pascal is the official SI unit for physical pressure, millimeters of mercury remain the universal clinical standard for expressing human blood pressure, intraocular pressure, and intracranial forces.",
    "A conventional millimeter of mercury represents the hydrostatic pressure exerted by a 1 mm high column of liquid mercury at 0 °C under standard gravity (9.80665 m/s²). Internationally defined as exactly 133.322387415 Pascals, converting Pascals to mmHg involves dividing the Pascal value by 133.322387 (or multiplying by 0.0075006158).",
    "This guide presents the exact mathematical formula, worked clinical and physiological calculation examples, a medical pressure reference table, healthcare and laboratory applications, and answers to frequently asked pressure conversion questions."
  ],
  quickAnswer: {
    text: "To convert Pascals to millimeters of mercury, divide the pressure value in Pascals by 133.322387 (or multiply by 0.0075006158). For example, 16,000 Pa equals approximately 120.01 mmHg (standard systolic blood pressure), and 10,666 Pa equals approximately 80.00 mmHg (standard diastolic blood pressure).",
    formulaDisplay: "mmHg = Pa ÷ 133.322387",
    subtext: "One Pascal is equal to approximately 0.0075006158 mmHg."
  },
  aboutSourceUnit: {
    title: "Understanding the Pascal (Pa)",
    text: "The Pascal (symbol: Pa) is the derived SI unit of pressure and stress, equal to one Newton per square meter (1 N/m²). Named after French mathematician Blaise Pascal, it provides the fundamental unit for physical pressure measurement across physics, materials science, and biomedical sensor technology."
  },
  aboutTargetUnit: {
    title: "Understanding Millimeters of Mercury (mmHg)",
    text: "The millimeter of mercury (symbol: mmHg) is a manometric unit of pressure defined as the hydrostatic pressure produced by a mercury column 1 millimeter high at 0 °C (mercury density = 13.5951 g/cm³) under standard gravity. Adopted worldwide for medical diagnostics, mmHg is the standard unit for blood pressure monitors (sphygmomanometers), arterial blood gas (ABG) analyzers, and intraocular tonometer readings."
  },
  relationship: "The exact physical relationship is derived from hydrostatic pressure (P = ρgh): 1 mmHg = 13.5951 g/cm³ × 9.80665 m/s² × 0.001 m = 133.322387415 Pa. Consequently, 1 Pa ≈ 0.00750061575 mmHg.",
  relationshipTitle: "Pascal vs Millimeter of Mercury Medical Benchmark Scale",
  relationshipItems: [
    { label: "1 Pa", value: "0.0075006 mmHg (Micro-sensor pressure delta)" },
    { label: "133.322 Pa", value: "1.000000 mmHg (Exact 1 mmHg clinical baseline)" },
    { label: "10,666 Pa", value: "80.0000 mmHg (Normal human diastolic blood pressure)" },
    { label: "16,000 Pa", value: "120.0000 mmHg (Normal human systolic blood pressure)" },
    { label: "101,325 Pa", value: "760.0000 mmHg (Standard Sea-Level Atmosphere)" }
  ],
  formula: {
    text: "Divide the pressure value in Pascals by 133.322387 to convert to millimeters of mercury.",
    math: "mmHg = Pa / 133.322387",
    subtext: "To convert millimeters of mercury back to Pascals, multiply the mmHg value by 133.322387."
  },
  formulaTitle: "Pascal to Millimeter of Mercury Formula",
  practicalTip: {
    title: "Clinical Mental Math Rule",
    text: "To estimate mmHg from kilopascals (kPa), multiply the kPa value by 7.5. For example, 16 kPa × 7.5 = 120 mmHg (systolic pressure)."
  },
  expertNote: {
    title: "mmHg vs Torr Technical Distinction",
    text: "1 Torr is defined as 101,325 / 760 Pa (~133.322368 Pa), whereas 1 mmHg is defined by mercury density (~133.322387 Pa). The difference is less than 0.000014%, so the two units are effectively interchangeable in medical practice."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Human Systolic Blood Pressure Reading",
        subtitle: "Convert a digital biomedical transducer pressure reading of 16,000 Pa to mmHg.",
        steps: [
          "Identify sensor pressure in Pascals: 16,000 Pa.",
          "Apply conversion formula: mmHg = Pa ÷ 133.322387.",
          "Calculate: 16,000 ÷ 133.322387 = 120.0097.",
          "Result: 16,000 Pa equals approximately 120 mmHg (normal systolic blood pressure)."
        ]
      },
      {
        title: "Example 2: Human Diastolic Blood Pressure Reading",
        subtitle: "Convert a arterial line sensor pressure reading of 10,666 Pa to mmHg.",
        steps: [
          "Identify pressure: 10,666 Pa.",
          "Divide by 133.322387: 10,666 ÷ 133.322387 = 80.0015.",
          "Result: 10,666 Pa equals approximately 80 mmHg (normal diastolic blood pressure)."
        ]
      },
      {
        title: "Example 3: Ophthalmic Intraocular Pressure Test",
        subtitle: "Convert an eye pressure reading of 2,133 Pa to mmHg.",
        steps: [
          "Identify starting pressure: 2,133 Pa.",
          "Apply formula: 2,133 ÷ 133.322387 = 15.9988.",
          "Result: 2,133 Pa equals approximately 16 mmHg (normal intraocular pressure)."
        ]
      }
    ]
  },
  table: {
    title: "Pascal to Millimeter of Mercury Conversion Table",
    headers: ["Pascals (Pa)", "Millimeters of Mercury (mmHg)", "Kilopascals (kPa)", "Clinical & Medical Context"],
    rows: [
      { fromVal: "133.32 Pa", toVal: "1.0 mmHg", extra: "0.133 kPa", extra2: "1 mmHg pressure benchmark" },
      { fromVal: "1,333.2 Pa", toVal: "10.0 mmHg", extra: "1.333 kPa", extra2: "Low intracranial pressure limit" },
      { fromVal: "2,000.0 Pa", toVal: "15.0 mmHg", extra: "2.000 kPa", extra2: "Normal intraocular eye pressure (~12-20 mmHg)" },
      { fromVal: "4,000.0 Pa", toVal: "30.0 mmHg", extra: "4.000 kPa", extra2: "Partial pressure of CO2 in blood (PaCO2 ~35-45 mmHg)" },
      { fromVal: "10,666 Pa", toVal: "80.0 mmHg", extra: "10.67 kPa", extra2: "Normal resting diastolic blood pressure" },
      { fromVal: "12,666 Pa", toVal: "95.0 mmHg", extra: "12.67 kPa", extra2: "Arterial oxygen partial pressure (PaO2 ~75-100 mmHg)" },
      { fromVal: "16,000 Pa", toVal: "120.0 mmHg", extra: "16.00 kPa", extra2: "Normal resting systolic blood pressure" },
      { fromVal: "18,665 Pa", toVal: "140.0 mmHg", extra: "18.67 kPa", extra2: "Stage 1 hypertension systolic threshold" },
      { fromVal: "24,000 Pa", toVal: "180.0 mmHg", extra: "24.00 kPa", extra2: "Hypertensive crisis warning threshold" },
      { fromVal: "101,325 Pa", toVal: "760.0 mmHg", extra: "101.33 kPa", extra2: "Standard atmospheric pressure at sea level" }
    ]
  },
  applications: {
    title: "Real-World Applications of Pa to mmHg Conversion",
    items: [
      {
        title: "Medical Diagnostics & Blood Pressure Monitoring",
        text: "Non-invasive sphygmomanometers and invasive arterial line monitors measure blood pressure. Digital piezoelectric sensors record raw readings in Pascals, which internal microprocessors convert to mmHg for physician displays."
      },
      {
        title: "Respiratory Care & Arterial Blood Gas (ABG)",
        text: "Blood gas analyzers evaluate oxygen (PaO2) and carbon dioxide (PaCO2) partial pressures in arterial blood. Values are converted from Pascals to mmHg to assist intensivists in managing ventilator settings."
      },
      {
        title: "Ophthalmology & Intraocular Pressure (IOP)",
        text: "Glaucoma screenings utilize tonometry to measure pressure inside the eye. Readings in Pascals are converted to mmHg, where normal range spans 10 to 21 mmHg."
      },
      {
        title: "Neurosurgery & Intracranial Pressure (ICP)",
        text: "Intracranial pressure monitors in intensive care units track cerebral fluid pressure. Sensor outputs in Pascals are scaled to mmHg to detect elevated ICP (>20 mmHg) and prevent brain injury."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid",
    items: [
      "Confusing mmHg with cmH2O: 1 mmHg ≈ 1.35951 cmH2O (centimeters of water). Airway pressure in mechanical ventilation often uses cmH2O rather than mmHg.",
      "Dividing by 100 instead of 133.322: Dividing Pascals by 100 gives millibars, not mmHg.",
      "Rounding the conversion factor excessively: Using 130 or 140 instead of 133.322 creates significant clinical errors in blood pressure monitoring.",
      "Conflating systolic and diastolic values during unit conversion: Always convert systolic and diastolic Pa measurements independently."
    ]
  },
  faqs: [
    {
      question: "How many Pascals are in 1 mmHg?",
      answer: "There are approximately 133.322387 Pascals in 1 millimeter of mercury (mmHg)."
    },
    {
      question: "What is the formula to convert Pascals to mmHg?",
      answer: "The formula is: mmHg = Pa ÷ 133.322387. Alternatively, multiply the Pascal value by 0.0075006158."
    },
    {
      question: "What is 120/80 mmHg blood pressure in Pascals?",
      answer: "A normal blood pressure of 120/80 mmHg translates to approximately 16,000 Pa (16 kPa) systolic and 10,666 Pa (10.67 kPa) diastolic."
    },
    {
      question: "How do I convert mmHg back to Pascals?",
      answer: "To convert mmHg back to Pascals, multiply the mmHg value by 133.322387 (e.g., 120 mmHg × 133.322387 = 15,998.69 Pa)."
    },
    {
      question: "Why does medicine use mmHg instead of Pascals?",
      answer: "Because early blood pressure gauges used actual liquid mercury columns. The medical field retains mmHg for historical continuity and global clinical standardization."
    },
    {
      question: "Is 1 mmHg exactly equal to 1 Torr?",
      answer: "For clinical and engineering work, yes. 1 Torr is defined as 101,325/760 Pa (~133.322368 Pa), while 1 mmHg is ~133.322387 Pa. The difference is under 0.000014%."
    },
    {
      question: "How many mmHg is standard atmospheric pressure?",
      answer: "Standard atmospheric pressure at sea level (101,325 Pa) equals exactly 760 mmHg."
    },
    {
      question: "Is mmHg an official SI unit?",
      answer: "No. The millimeter of mercury is a non-SI unit, but it is officially accepted for specialized medical and scientific applications."
    }
  ],
  relatedList: [
    { label: "Pascal to Torr", from: "pascal", to: "torr" },
    { label: "Pascal to Atmosphere", from: "pascal", to: "atmosphere" },
    { label: "Pascal to Bar", from: "pascal", to: "bar" },
    { label: "Pascal to Kilopascal", from: "pascal", to: "kilopascal" },
    { label: "Pascal to PSI", from: "pascal", to: "psi" }
  ],
  references: [
    "World Health Organization (WHO) - Clinical Practice Guidelines for Hypertension.",
    "BIPM - The International System of Units (SI), 9th Edition.",
    "ISO 80000-4:2019 Quantities and units — Part 4: Mechanics."
  ]
};
