import { CustomArticleData } from "./types";

export const kilovoltToMillivolt: CustomArticleData = {
  fromUnitId: "kilovolt",
  toUnitId: "millivolt",
  seoTitle: "Kilovolt to Millivolt Converter (kV to mV)",
  metaDescription: "Convert Kilovolts to Millivolts (kV to mV) instantly. Learn the 1,000,000 ratio multiplication formula, sensor scaling, reference tables, and technical FAQs.",
  h1: "Kilovolt to Millivolt Converter",
  introduction: [
    "Electrical potential spans vast orders of magnitude, from kilovolts (kV) used in power grid substations to millivolts (mV) measured by instrumentation sensors and diagnostic telemetry circuits. When converting high-voltage power transformer outputs down to analog-to-digital converter (ADC) voltage divider inputs, converting directly between Kilovolts (kV) and Millivolts (mV) is required.",
    "Under the International System of Units (SI), 1 kilovolt equals 1,000 volts, and 1 volt equals 1,000 millivolts. Consequently, one kilovolt contains exactly 1,000,000 millivolts (10⁶ mV). Converting kilovolts to millivolts requires multiplying the value in kilovolts by 1,000,000.",
    "This guide provides the mathematical derivation for kV to mV conversion, step-by-step voltage divider scaling examples, reference tables, signal conditioning context, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Kilovolts to Millivolts, multiply the voltage value in Kilovolts by 1,000,000. For example, 0.012 kV equals 12,000 mV, and 1 kV equals 1,000,000 mV.",
    formulaDisplay: "mV = kV × 1,000,000",
    subtext: "1 Kilovolt is equal to exactly 1,000,000 Millivolts."
  },
  aboutSourceUnit: {
    title: "Kilovolt (kV) Definition",
    text: "The Kilovolt (symbol: kV) is an SI unit multiple equal to 1,000 volts (10³ V). It is used worldwide to specify utility distribution networks, x-ray generators, high-voltage motor drives, and insulation rating limits."
  },
  aboutTargetUnit: {
    title: "Millivolt (mV) Definition",
    text: "The Millivolt (symbol: mV) is an SI fractional submultiple equal to 0.001 volts (10⁻³ V). Millivolts are used to measure sensor signal outputs, thermocouple electromotive force, biomedical ECG signals, and low-level electronic circuit potentials."
  },
  relationship: "The metric relationship between kilovolts and millivolts spans six decimal orders of magnitude: 1 kV = 1,000,000 mV (10⁶ mV), and 1 mV = 0.000001 kV (10⁻⁶ kV).",
  relationshipTitle: "Kilovolt to Millivolt Scale Ratios",
  relationshipItems: [
    { label: "0.000001 kV", value: "1 mV (Thermocouple output potential)" },
    { label: "0.001 kV", value: "1,000 mV (1 Volt baseline reference)" },
    { label: "0.012 kV", value: "12,000 mV (Standard 12 V automotive battery potential)" },
    { label: "0.12 kV", value: "120,000 mV (Standard 120 V residential supply line)" },
    { label: "1.0 kV", value: "1,000,000 mV (1 Kilovolt high-voltage threshold)" }
  ],
  formula: {
    text: "Multiply the voltage in Kilovolts by 1,000,000 to determine the equivalent value in Millivolts.",
    math: "mV = kV × 1000000",
    subtext: "To convert millivolts back to kilovolts, divide the millivolt value by 1,000,000."
  },
  formulaTitle: "Kilovolt to Millivolt Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Millivolts",
    text: "Shift the decimal point six positions to the right to convert kilovolts to millivolts. For example, 0.0033 kV becomes 3,300 mV."
  },
  expertNote: {
    title: "Voltage Divider Scaling in Monitoring Circuits",
    text: "High-voltage sensing circuits use precision resistor dividers (e.g., a 1,000:1 ratio) to step down 13.8 kV grid signals down to millivolt levels compatible with microprocessor ADC inputs (e.g., 0 to 3,300 mV)."
  },
  examples: {
    title: "Step-by-Step Kilovolt to Millivolt Calculation Examples",
    items: [
      {
        title: "Example 1: Automotive Battery Potential",
        subtitle: "Convert a 0.012 kV car battery potential into Millivolts.",
        steps: [
          "Identify voltage in Kilovolts: 0.012 kV.",
          "Apply formula: mV = 0.012 × 1,000,000.",
          "Calculate: 0.012 × 1,000,000 = 12,000.",
          "Result: 0.012 Kilovolts equals 12,000 Millivolts."
        ]
      },
      {
        title: "Example 2: Residential Utility Line Potential",
        subtitle: "Convert a 0.24 kV split-phase residential voltage to Millivolts.",
        steps: [
          "Identify voltage: 0.24 kV.",
          "Multiply by 1,000,000: 0.24 × 1,000,000 = 240,000.",
          "Result: 0.24 Kilovolts equals 240,000 mV."
        ]
      },
      {
        title: "Example 3: Microcontroller Logic Supply",
        subtitle: "Convert a 0.0033 kV power rail potential to Millivolts.",
        steps: [
          "Identify voltage: 0.0033 kV.",
          "Multiply by 1,000,000: 0.0033 × 1,000,000 = 3,300.",
          "Result: 0.0033 Kilovolts equals 3,300 mV."
        ]
      }
    ]
  },
  table: {
    title: "Kilovolt to Millivolt Reference Values",
    headers: ["Kilovolts (kV)", "Millivolts (mV)", "Electrical & Electronics Context"],
    rows: [
      { fromVal: "0.000001 kV", toVal: "1 mV", extra: "1 Millivolt baseline signal level" },
      { fromVal: "0.000005 kV", toVal: "5 mV", extra: "ECG cardiac potential amplitude" },
      { fromVal: "0.00005 kV", toVal: "50 mV", extra: "Current shunt sense voltage" },
      { fromVal: "0.001 kV", toVal: "1,000 mV", extra: "1 Volt reference potential" },
      { fromVal: "0.0033 kV", toVal: "3,300 mV", extra: "3.3 V microcontroller system rail" },
      { fromVal: "0.005 kV", toVal: "5,000 mV", extra: "5 V USB bus voltage" },
      { fromVal: "0.012 kV", toVal: "12,000 mV", extra: "12 V vehicle battery voltage" },
      { fromVal: "0.12 kV", toVal: "120,000 mV", extra: "120 V household AC supply" },
      { fromVal: "0.48 kV", toVal: "480,000 mV", extra: "480 V industrial 3-phase power line" },
      { fromVal: "1.0 kV", toVal: "1,000,000 mV", extra: "1 Kilovolt high-voltage threshold" }
    ]
  },
  applications: {
    title: "Applications of kV to mV Conversion",
    items: [
      {
        title: "High-Voltage Telemetry & Data Acquisition",
        text: "Grid instrumentation transducers convert 13.8 kV utility line levels down to millivolt signals to feed remote terminal unit (RTU) microprocessors safely."
      },
      {
        title: "X-Ray Machine Control Electronics",
        text: "Diagnostic imaging equipment converts high-voltage generator feedback signals (e.g., 75 kV) into millivolt control loop feedback to regulate exposure power."
      },
      {
        title: "Insulation Leakage Measurement",
        text: "High-voltage insulation testers apply kilovolt stress signals while measuring minute leakage current drops across sensing resistors in millivolts."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000,000 instead of multiplying: Converting from a larger unit (kV) to a smaller unit (mV) requires multiplying by 1,000,000.",
      "Confusing Millivolts (mV) with Microvolts (µV): 1 mV equals 1,000 µV; confusing millivolts with microvolts causes a 1,000-fold error.",
      "Misinterpreting decimal point shifts: Double-check decimal placement when shifting six places across large unit jumps."
    ]
  },
  faqs: [
    {
      question: "How many Millivolts are in 1 Kilovolt?",
      answer: "There are exactly 1,000,000 Millivolts in 1 Kilovolt."
    },
    {
      question: "What is the formula to convert Kilovolts to Millivolts?",
      answer: "The formula is: Millivolts = Kilovolts × 1,000,000."
    },
    {
      question: "How many Millivolts is 0.012 kV?",
      answer: "0.012 Kilovolts equals 12,000 Millivolts (0.012 × 1,000,000 = 12,000 mV)."
    },
    {
      question: "What is 1 kV in Millivolts?",
      answer: "1 Kilovolt equals exactly 1,000,000 Millivolts."
    },
    {
      question: "How do I convert 0.005 kV to Millivolts?",
      answer: "Multiply 0.005 by 1,000,000 to get 5,000 Millivolts."
    },
    {
      question: "How many Millivolts is 0.12 kV?",
      answer: "0.12 Kilovolts equals 120,000 Millivolts."
    },
    {
      question: "Why does converting kV to mV involve a factor of 1,000,000?",
      answer: "Because 1 kV = 1,000 V and 1 V = 1,000 mV, combining the two metric steps yields 1,000 × 1,000 = 1,000,000."
    },
    {
      question: "How do I convert Millivolts back to Kilovolts?",
      answer: "Divide the Millivolt value by 1,000,000."
    }
  ],
  relatedList: [
    { label: "Millivolt to Kilovolt", from: "millivolt", to: "kilovolt" },
    { label: "Kilovolt to Volt", from: "kilovolt", to: "volt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" },
    { label: "Kilovolt to Microvolt", from: "kilovolt", to: "microvolt" }
  ],
  references: [
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEEE Std 1241: IEEE Standard for Terminology and Test Methods for Analog-to-Digital Converters.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
