import { CustomArticleData } from "./types";

export const microvoltToKilovolt: CustomArticleData = {
  fromUnitId: "microvolt",
  toUnitId: "kilovolt",
  seoTitle: "Microvolt to Kilovolt Converter (µV to kV)",
  metaDescription: "Convert Microvolts to Kilovolts (µV to kV) with exact 10⁻⁹ ratio formulas, high-voltage divider scaling, worked examples, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/microvolt-to-kilovolt",
  h1: "Microvolt to Kilovolt Converter",
  introduction: [
    "Electrical engineering and metrology encompass an immense span of voltage magnitudes—from microvolt (µV) transducer noise and EMI shielding leakages up to kilovolt (kV) medium- and high-voltage power distribution grids. Converting Microvolts (µV) to Kilovolts (kV) bridges nine decimal orders of magnitude (10⁹), linking sensitive sensor readings with high-voltage industrial equipment ratings.",
    "Under the International System of Units (SI), one microvolt represents one-millionth of a volt (10⁻⁶ V), while one kilovolt equals one thousand volts (10³ V). Consequently, one kilovolt contains exactly one billion microvolts (10⁹ µV = 1 kV). Converting microvolts to kilovolts requires dividing the microvolt potential by 1,000,000,000.",
    "This engineering reference explains the 10⁹ conversion ratio, provides step-by-step calculations for instrument transformers and electromagnetic compatibility (EMC) testing, includes a high-voltage reference table, and details common conversion pitfalls."
  ],
  quickAnswer: {
    text: "To convert Microvolts to Kilovolts, divide the potential value in Microvolts by 1,000,000,000 (or multiply by 10⁻⁹). For example, 13,800,000,000 µV equals 13.8 kV, and 1,000,000,000 µV equals 1.0 kV.",
    formulaDisplay: "kV = µV ÷ 1,000,000,000",
    subtext: "1 Microvolt (µV) is equal to exactly 0.000000001 Kilovolts (10⁻⁹ kV)."
  },
  aboutSourceUnit: {
    title: "Understanding Microvolts (µV)",
    text: "The Microvolt (symbol: µV) is an SI decimal submultiple equal to 10⁻⁶ volts (0.000001 V). Microvolts quantify minute electric potential differences in biomedical electronics, thermoelectric junction Seebeck voltages, RF antenna field-strength measurements, and electromagnetic interference (EMI) radiation testing."
  },
  aboutTargetUnit: {
    title: "Understanding Kilovolts (kV)",
    text: "The Kilovolt (symbol: kV) is an SI decimal multiple equal to 10³ volts (1,000 V). Kilovolts are universally utilized in industrial power distribution systems (e.g., 4.16 kV, 13.8 kV, 34.5 kV), medical diagnostic X-ray tube generators (40–150 kVp), and electrical transmission substation switchgear."
  },
  relationship: "The metric scaling ratio between microvolts and kilovolts spans nine orders of magnitude: 1 kV = 1,000,000,000 µV (10⁹ µV), and 1 µV = 0.000000001 kV (10⁻⁹ kV).",
  relationshipTitle: "Microvolt vs Kilovolt Magnitude Scales",
  relationshipItems: [
    { label: "1 µV", value: "10⁻⁹ kV (RF receiver antenna input floor)" },
    { label: "1,000,000 µV", value: "0.001 kV (1.0 Volt SI reference standard)" },
    { label: "480,000,000 µV", value: "0.48 kV (480 V 3-phase industrial power)" },
    { label: "1,000,000,000 µV", value: "1.0 kV (1.0 Kilovolt distribution threshold)" },
    { label: "13,800,000,000 µV", value: "13.8 kV (Standard substation distribution feeder)" }
  ],
  formula: {
    text: "Divide the electric potential in Microvolts by 1,000,000,000 (or multiply by 10⁻⁹) to compute Kilovolts.",
    math: "kV = µV / 1000000000",
    subtext: "To convert kilovolts back to microvolts, multiply the kilovolt value by 1,000,000,000."
  },
  formulaTitle: "Microvolt to Kilovolt Mathematical Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Kilovolts",
    text: "To convert microvolts to kilovolts manually, shift the decimal point nine places to the left. For example, 4,160,000,000 µV becomes 4.16 kV."
  },
  expertNote: {
    title: "Potential Transformer Ratio Calculations",
    text: "High-voltage instrument potential transformers (PTs) scale 13.8 kV grid lines down to 120 V secondary circuits, which telemetry transducers then digitize down to microvolt-level resolution. A 13.8 kV line produces 13,800,000,000 µV of primary potential."
  },
  examples: {
    title: "Step-by-Step Microvolt to Kilovolt Worked Examples",
    items: [
      {
        title: "Example 1: Utility Substation Feeder Line",
        subtitle: "Convert a 13,800,000,000 Microvolt primary distribution potential into Kilovolts.",
        steps: [
          "Identify voltage in Microvolts: 13,800,000,000 µV.",
          "Apply conversion formula: kV = 13,800,000,000 ÷ 1,000,000,000.",
          "Perform division: 13,800,000,000 ÷ 10⁹ = 13.8.",
          "Result: 13,800,000,000 Microvolts equals 13.8 Kilovolts."
        ]
      },
      {
        title: "Example 2: Industrial Medium-Voltage Motor Feed",
        subtitle: "Convert 4,160,000,000 Microvolts into Kilovolts.",
        steps: [
          "Identify voltage: 4,160,000,000 µV.",
          "Divide by 1,000,000,000: 4,160,000,000 ÷ 10⁹ = 4.16.",
          "Result: 4,160,000,000 Microvolts equals 4.16 Kilovolts."
        ]
      },
      {
        title: "Example 3: Medical X-Ray Tube Acceleration Potential",
        subtitle: "Convert an 80,000,000,000 Microvolt diagnostic peak potential into Kilovolts.",
        steps: [
          "Identify potential: 80,000,000,000 µV.",
          "Apply division: kV = 80,000,000,000 ÷ 1,000,000,000.",
          "Calculate: 80,000,000,000 ÷ 10⁹ = 80.",
          "Result: 80,000,000,000 Microvolts equals 80 Kilovolts (80 kVp)."
        ]
      }
    ]
  },
  table: {
    title: "Microvolt to Kilovolt Conversion Reference Table",
    headers: ["Microvolts (µV)", "Kilovolts (kV)", "Industrial & Power System Context"],
    rows: [
      { fromVal: "1,000,000 µV", toVal: "0.001 kV", extra: "1 Volt standard potential" },
      { fromVal: "120,000,000 µV", toVal: "0.12 kV", extra: "120 V residential mains branch" },
      { fromVal: "240,000,000 µV", toVal: "0.24 kV", extra: "240 V split-phase appliance service" },
      { fromVal: "480,000,000 µV", toVal: "0.48 kV", extra: "480 V industrial 3-phase building power" },
      { fromVal: "1,000,000,000 µV", toVal: "1.0 kV", extra: "1 kV medium-voltage baseline" },
      { fromVal: "2,400,000,000 µV", toVal: "2.4 kV", extra: "2.4 kV mining distribution feeder" },
      { fromVal: "4,160,000,000 µV", toVal: "4.16 kV", extra: "4.16 kV industrial motor driver feed" },
      { fromVal: "13,800,000,000 µV", toVal: "13.8 kV", extra: "13.8 kV municipal distribution grid" },
      { fromVal: "34,500,000,000 µV", toVal: "34.5 kV", extra: "34.5 kV regional sub-transmission line" },
      { fromVal: "69,000,000,000 µV", toVal: "69.0 kV", extra: "69 kV high-voltage utility transmission" }
    ]
  },
  applications: {
    title: "Applications of Microvolt to Kilovolt Conversion",
    items: [
      {
        title: "High-Voltage Isolation Amplifier Telemetry",
        text: "Industrial current shunts placed in series with 13.8 kV power lines generate microvolt-level sense voltages that are digitized across optical isolation barriers and converted to line kilovolts."
      },
      {
        title: "EMC Radiated Emission Compliance Testing",
        text: "Electromagnetic compatibility engineers measure microvolt-per-meter (µV/m) radiated fields from high-voltage switchgear operating at 34.5 kV to ensure compliance with FCC and CISPR limits."
      },
      {
        title: "Dielectric Breakdown & Partial Discharge Testing",
        text: "High-voltage test laboratories apply 50 kV stress voltages while detecting tiny microvolt partial discharge pulses inside transformer oil insulation."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Confusing Microvolts (µV, 10⁻⁶ V) with Millivolts (mV, 10⁻³ V): Confusing microvolts with millivolts creates a 1,000-fold error when converting to kilovolts.",
      "Miscounting zeros across nine decimal places: Ensure 10⁹ (1,000,000,000) is used rather than 10⁶ (1,000,000).",
      "Multiplying instead of dividing: Converting from microvolts (small) to kilovolts (large) requires dividing by one billion."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts are in 1 Kilovolt?",
      answer: "There are exactly 1,000,000,000 (one billion) Microvolts in 1 Kilovolt (1 kV = 10⁹ µV)."
    },
    {
      question: "What is the formula to convert Microvolts to Kilovolts?",
      answer: "The formula is: Kilovolts = Microvolts ÷ 1,000,000,000 (or kV = µV × 10⁻⁹)."
    },
    {
      question: "How do I convert 13,800,000,000 µV to Kilovolts?",
      answer: "Divide 13,800,000,000 by 1,000,000,000 to get 13.8 Kilovolts (13.8 kV)."
    },
    {
      question: "What is 1,000,000,000 µV in Kilovolts?",
      answer: "1,000,000,000 Microvolts equals exactly 1.0 Kilovolt."
    },
    {
      question: "How many decimal places separate µV and kV?",
      answer: "Nine decimal places (10⁹) separate microvolts (10⁻⁶ V) and kilovolts (10³ V)."
    },
    {
      question: "How do I convert Kilovolts back to Microvolts?",
      answer: "Multiply the Kilovolt value by 1,000,000,000. For example, 4.16 kV × 10⁹ = 4,160,000,000 µV."
    },
    {
      question: "Why do engineers convert between microvolts and kilovolts?",
      answer: "Engineers convert between µV and kV when analyzing high-voltage sensor telemetry, measuring partial discharge insulation pulses, and performing EMC radiated noise testing on power grids."
    },
    {
      question: "What is 480,000,000 µV in Kilovolts?",
      answer: "480,000,000 Microvolts equals 0.48 Kilovolts (or 480 Volts)."
    }
  ],
  relatedList: [
    { label: "Kilovolt to Microvolt", from: "kilovolt", to: "microvolt" },
    { label: "Microvolt to Volt", from: "microvolt", to: "volt" },
    { label: "Microvolt to Millivolt", from: "microvolt", to: "millivolt" },
    { label: "Millivolt to Kilovolt", from: "millivolt", to: "kilovolt" },
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEEE Std C57.13: IEEE Standard Requirements for Instrument Transformers."
  ]
};
