import { CustomArticleData } from "./types";

export const millivoltToKilovolt: CustomArticleData = {
  fromUnitId: "millivolt",
  toUnitId: "kilovolt",
  seoTitle: "Millivolt to Kilovolt Converter (mV to kV)",
  metaDescription: "Convert Millivolts to Kilovolts (mV to kV) instantly. Learn the 1,000,000 ratio division formula, sensor scaling, reference tables, and FAQs.",
  h1: "Millivolt to Kilovolt Converter",
  introduction: [
    "Electrical power system telemetry, sensor calibration laboratories, and high-voltage substation monitoring systems routinely process voltages across six orders of magnitude—from small millivolt (mV) sensor signals up to kilovolt (kV) power grid transmission potentials. Converting Millivolts (mV) to Kilovolts (kV) relates low-voltage sensor readings directly to high-voltage equipment ratings.",
    "Under the International System of Units (SI), 1,000 millivolts equal 1 volt, and 1,000 volts equal 1 kilovolt. Consequently, one kilovolt contains exactly 1,000,000 millivolts (10⁶ mV). Converting millivolts to kilovolts requires dividing the voltage in millivolts by 1,000,000.",
    "This technical guide explains the mathematical conversion between mV and kV, transducer voltage divider calculations, reference conversion tables, signal conditioning context, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Millivolts to Kilovolts, divide the potential value in Millivolts by 1,000,000. For example, 12,000 mV equals 0.012 kV, and 1,000,000 mV equals 1.0 kV.",
    formulaDisplay: "kV = mV ÷ 1,000,000",
    subtext: "1 Millivolt is equal to exactly 0.000001 Kilovolts."
  },
  aboutSourceUnit: {
    title: "Understanding Millivolts (mV)",
    text: "The Millivolt (symbol: mV) is an SI submultiple equal to 0.001 volts (10⁻³ V). Millivolts are standard in electronic signal processing, thermocouple temperature telemetry, audio equipment, and sensor transducers."
  },
  aboutTargetUnit: {
    title: "Understanding Kilovolts (kV)",
    text: "The Kilovolt (symbol: kV) is an SI multiple unit equal to 1,000 volts (10³ V). Kilovolts are used worldwide to rate utility power grids, industrial distribution feeders, commercial step-down transformers, and high-voltage insulation systems."
  },
  relationship: "The metric ratio between millivolts and kilovolts spans six decimal orders of magnitude: 1 kV = 1,000,000 mV (10⁶ mV), and 1 mV = 0.000001 kV (10⁻⁶ kV).",
  relationshipTitle: "Millivolt vs Kilovolt Magnitude Scales",
  relationshipItems: [
    { label: "1 mV", value: "0.000001 kV (Thermocouple baseline signal)" },
    { label: "1,000 mV", value: "0.001 kV (1 Volt reference potential)" },
    { label: "12,000 mV", value: "0.012 kV (12 V DC car battery potential)" },
    { label: "120,000 mV", value: "0.12 kV (120 V household supply line)" },
    { label: "1,000,000 mV", value: "1.0 kV (1 Kilovolt high-voltage standard)" }
  ],
  formula: {
    text: "Divide the potential difference in Millivolts by 1,000,000 to convert to Kilovolts.",
    math: "kV = mV / 1000000",
    subtext: "To convert kilovolts back to millivolts, multiply the kilovolt value by 1,000,000."
  },
  formulaTitle: "Millivolt to Kilovolt Conversion Formula",
  practicalTip: {
    title: "Decimal Movement Rule for Kilovolts",
    text: "Shift the decimal point six positions to the left to convert millivolts to kilovolts. For example, 13,800,000 mV becomes 13.8 kV."
  },
  expertNote: {
    title: "Voltage Transducer Scaling Ratios",
    text: "High-voltage transducers (e.g., potential transformers or capacitive voltage dividers) reduce 13.8 kV grid signals to 13,800,000 mV internally before outputting safe low-voltage feedback signals (e.g., 5,000 mV) for telemetry digital meters."
  },
  examples: {
    title: "Step-by-Step Millivolt to Kilovolt Worked Examples",
    items: [
      {
        title: "Example 1: Primary Distribution Grid Feeder",
        subtitle: "Convert a 13,800,000 Millivolt feeder potential into Kilovolts.",
        steps: [
          "Identify voltage in Millivolts: 13,800,000 mV.",
          "Apply conversion formula: kV = 13,800,000 ÷ 1,000,000.",
          "Perform division: 13,800,000 ÷ 1,000,000 = 13.8.",
          "Result: 13,800,000 Millivolts equals 13.8 Kilovolts."
        ]
      },
      {
        title: "Example 2: Industrial 3-Phase Supply Line",
        subtitle: "Convert a 480,000 Millivolt service voltage into Kilovolts.",
        steps: [
          "Identify voltage: 480,000 mV.",
          "Divide by 1,000,000: 480,000 ÷ 1,000,000 = 0.48.",
          "Result: 480,000 Millivolts equals 0.48 kV."
        ]
      },
      {
        title: "Example 3: Automotive Electrical System",
        subtitle: "Convert a 12,000 Millivolt vehicle battery potential to Kilovolts.",
        steps: [
          "Identify voltage: 12,000 mV.",
          "Divide by 1,000,000: 12,000 ÷ 1,000,000 = 0.012.",
          "Result: 12,000 Millivolts equals 0.012 kV."
        ]
      }
    ]
  },
  table: {
    title: "Millivolt to Kilovolt Conversion Table",
    headers: ["Millivolts (mV)", "Kilovolts (kV)", "Electrical System Context"],
    rows: [
      { fromVal: "1,000 mV", toVal: "0.001 kV", extra: "1 Volt standard potential" },
      { fromVal: "3,300 mV", toVal: "0.0033 kV", extra: "3.3 V microcontroller system rail" },
      { fromVal: "5,000 mV", toVal: "0.005 kV", extra: "5 V USB supply voltage" },
      { fromVal: "12,000 mV", toVal: "0.012 kV", extra: "12 V automotive battery potential" },
      { fromVal: "120,000 mV", toVal: "0.12 kV", extra: "120 V household AC line voltage" },
      { fromVal: "480,000 mV", toVal: "0.48 kV", extra: "480 V industrial 3-phase building supply" },
      { fromVal: "1,000,000 mV", toVal: "1.0 kV", extra: "1 Kilovolt medium-voltage threshold" },
      { fromVal: "4,160,000 mV", toVal: "4.16 kV", extra: "Medium-voltage industrial motor feed" },
      { fromVal: "13,800,000 mV", toVal: "13.8 kV", extra: "Standard neighborhood distribution feeder line" },
      { fromVal: "115,000,000 mV", toVal: "115.0 kV", extra: "High-voltage regional transmission grid" }
    ]
  },
  applications: {
    title: "Applications of mV to kV Conversion",
    items: [
      {
        title: "Substation Monitoring Transducers",
        text: "Grid instrumentation transducers scale millivolt-level current shunt drops and potential transformer outputs up to kilovolt line units for SCADA control systems."
      },
      {
        title: "Medical X-Ray Generator Calibration",
        text: "Diagnostic imaging technicians convert low-voltage telemetry feedback signals in millivolts to kilovolts peak (kVp) to calibrate tube potential controls."
      },
      {
        title: "Electrical Equipment Dielectric Testing",
        text: "Automated insulation test sets record leakage millivolts while applying kilovolt stress signals to calculate high-voltage insulation resistance."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000,000 instead of dividing: Converting from a smaller unit (mV) to a larger unit (kV) requires dividing by 1,000,000.",
      "Confusing Millivolts (mV) with Microvolts (µV): 1 mV equals 1,000 µV; confusing millivolts with microvolts causes a 1,000-fold error.",
      "Decimal placement error: Shifting decimal places across six positions requires careful zero counting or scientific notation."
    ]
  },
  faqs: [
    {
      question: "How many Millivolts make 1 Kilovolt?",
      answer: "There are exactly 1,000,000 Millivolts in 1 Kilovolt."
    },
    {
      question: "What is the formula to convert Millivolts to Kilovolts?",
      answer: "The formula is: Kilovolts = Millivolts ÷ 1,000,000."
    },
    {
      question: "How many Kilovolts is 13,800,000 mV?",
      answer: "13,800,000 Millivolts equals 13.8 Kilovolts (13,800,000 ÷ 1,000,000 = 13.8 kV)."
    },
    {
      question: "What is 1,000,000 mV in Kilovolts?",
      answer: "1,000,000 Millivolts equals exactly 1 Kilovolt."
    },
    {
      question: "How do I convert 12,000 mV to Kilovolts?",
      answer: "Divide 12,000 by 1,000,000 to get 0.012 Kilovolts."
    },
    {
      question: "What is 480,000 mV in Kilovolts?",
      answer: "480,000 Millivolts equals 0.48 Kilovolts."
    },
    {
      question: "Why does converting mV to kV require dividing by 1,000,000?",
      answer: "Because 1 Volt = 1,000 Millivolts and 1 Kilovolt = 1,000 Volts, combining both steps gives 1,000 × 1,000 = 1,000,000."
    },
    {
      question: "How do I convert Kilovolts back to Millivolts?",
      answer: "Multiply the Kilovolt value by 1,000,000."
    }
  ],
  relatedList: [
    { label: "Kilovolt to Millivolt", from: "kilovolt", to: "millivolt" },
    { label: "Millivolt to Volt", from: "millivolt", to: "volt" },
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition)."
  ]
};
