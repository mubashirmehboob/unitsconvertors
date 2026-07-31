import { CustomArticleData } from "./types";

export const voltToMillivolt: CustomArticleData = {
  fromUnitId: "volt",
  toUnitId: "millivolt",
  seoTitle: "Volt to Millivolt Converter (V to mV)",
  metaDescription: "Convert Volts to Millivolts (V to mV) instantly. Learn the 1,000 ratio multiplication formula, sensor signal calculations, conversion tables, and FAQs.",
  h1: "Volt to Millivolt Converter",
  introduction: [
    "The Volt (V) and Millivolt (mV) are fundamental electrical units used to quantify electric potential difference across power supplies, signal instrumentation, and electronic circuits. In precision electronics, telemetry sensors, strain gauges, and medical equipment, small analog signals are frequently expressed in millivolts.",
    "Because the SI prefix 'milli' designates one-thousandth of a base unit, one volt contains exactly 1,000 millivolts. Converting volts to millivolts requires multiplying the potential value in volts by 1,000.",
    "This practical guide explains the mathematical conversion between V and mV, sensor signal scaling examples, reference tables, circuit debugging applications, and technical FAQs."
  ],
  quickAnswer: {
    text: "To convert Volts to Millivolts, multiply the voltage value by 1,000. For instance, 1.5 V converts to 1,500 mV, and 0.05 V equals 50 mV.",
    formulaDisplay: "mV = V × 1,000",
    subtext: "1 Volt is equal to exactly 1,000 Millivolts."
  },
  aboutSourceUnit: {
    title: "What is a Volt (V)?",
    text: "The Volt (symbol: V) is the International System of Units (SI) derived unit of electric potential difference and electromotive force. One volt represents the electric potential necessary to drive one ampere of current through a resistance of one ohm (1 V = 1 A × 1 Ω)."
  },
  aboutTargetUnit: {
    title: "Understanding Millivolts (mV)",
    text: "The Millivolt (symbol: mV) is a fractional submultiple of the volt equal to 0.001 volts (10⁻³ V). Millivolts are widely used in biomedical engineering (ECG/EEG recording), thermocouple temperature sensing, audio line levels, and analog-to-digital converter (ADC) reference scaling."
  },
  relationship: "The metric relationship between volts and millivolts is fixed by SI standards: 1 V = 1,000 mV, and 1 mV = 0.001 V (10⁻³ V).",
  relationshipTitle: "Volt vs Millivolt Scale Ratios",
  relationshipItems: [
    { label: "0.001 V", value: "1 mV (Thermocouple output signal)" },
    { label: "0.01 V", value: "10 mV (Bio-potential baseline signal)" },
    { label: "0.1 V", value: "100 mV (Low-level audio line signal)" },
    { label: "1.0 V", value: "1,000 mV (Standard AA alkaline battery nominal cell voltage fraction)" },
    { label: "3.3 V", value: "3,300 mV (Standard microcontroller logic supply voltage)" }
  ],
  formula: {
    text: "Multiply the electric potential in Volts by 1,000 to determine the equivalent value in Millivolts.",
    math: "mV = V × 1000",
    subtext: "To convert millivolts back to volts, divide the millivolt value by 1,000."
  },
  formulaTitle: "Volt to Millivolt Formula",
  practicalTip: {
    title: "Decimal Movement Rule",
    text: "To convert volts to millivolts mentally, move the decimal point three positions to the right. For example, 0.025 V becomes 25 mV."
  },
  expertNote: {
    title: "Analog Sensor Resolution",
    text: "Modern 12-bit Analog-to-Digital Converters (ADCs) operating on a 3.3 V (3,300 mV) reference voltage have a resolution of 3,300 mV / 4,096 ≈ 0.805 mV per count. Expressing reference voltages in millivolts simplifies quantizing step calculations."
  },
  examples: {
    title: "Step-by-Step V to mV Worked Examples",
    items: [
      {
        title: "Example 1: Microcontroller Supply Rail",
        subtitle: "Convert a 3.3 Volt power rail into Millivolts.",
        steps: [
          "Identify voltage in Volts: 3.3 V.",
          "Apply conversion formula: mV = 3.3 × 1,000.",
          "Calculate: 3.3 × 1,000 = 3,300.",
          "Result: 3.3 Volts equals 3,300 Millivolts."
        ]
      },
      {
        title: "Example 2: Lithium-Ion Battery Cell Voltage",
        subtitle: "Convert a 3.7 Volt nominal cell voltage to Millivolts.",
        steps: [
          "Identify voltage: 3.7 V.",
          "Multiply by 1,000: 3.7 × 1,000 = 3,700.",
          "Result: 3.7 Volts equals 3,700 mV."
        ]
      },
      {
        title: "Example 3: Low-Noise Sensor Bias Potential",
        subtitle: "Convert a 0.015 Volt sensor bias signal to Millivolts.",
        steps: [
          "Identify voltage: 0.015 V.",
          "Multiply by 1,000: 0.015 × 1,000 = 15.",
          "Result: 0.015 Volts equals 15 mV."
        ]
      }
    ]
  },
  table: {
    title: "Volt to Millivolt Conversion Reference Table",
    headers: ["Volts (V)", "Millivolts (mV)", "Electronics & Sensor Context"],
    rows: [
      { fromVal: "0.001 V", toVal: "1 mV", extra: "Type K thermocouple ambient temperature signal" },
      { fromVal: "0.005 V", toVal: "5 mV", extra: "ECG peak QRS electrocardiogram voltage" },
      { fromVal: "0.05 V", toVal: "50 mV", extra: "Industrial current shunt drop voltage" },
      { fromVal: "0.1 V", toVal: "100 mV", extra: "Consumer audio line-level signal amplitude" },
      { fromVal: "0.7 V", toVal: "700 mV", extra: "Silicon PN junction diode forward voltage drop" },
      { fromVal: "1.2 V", toVal: "1,200 mV", extra: "NiMH rechargeable cell nominal voltage" },
      { fromVal: "1.5 V", toVal: "1,500 mV", extra: "Standard AA/AAA alkaline battery voltage" },
      { fromVal: "3.3 V", toVal: "3,300 mV", extra: "ARM Cortex / ESP32 digital logic supply rail" },
      { fromVal: "5.0 V", toVal: "5,000 mV", extra: "USB power supply line voltage" },
      { fromVal: "12.0 V", toVal: "12,000 mV", extra: "Automotive DC electrical bus" }
    ]
  },
  applications: {
    title: "Practical Applications of V to mV Conversions",
    items: [
      {
        title: "Biomedical Instrumentation Design",
        text: "Electrocardiogram (ECG) and electroencephalogram (EEG) signals measure heart and brain activity in millivolts or microvolts, requiring precise conversion from amplifier output voltages."
      },
      {
        title: "Thermocouple Temperature Telemetry",
        text: "Thermocouple sensors produce small millivolt outputs (e.g., 41 µV/°C) proportional to thermal gradient differences, which engineers scale to standard system volts."
      },
      {
        title: "Embedded System Firmware Development",
        text: "Firmware developers convert ADC voltage calculations between volts and millivolts when calibrating battery monitoring algorithms and sensor gain stages."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting Volts to Millivolts",
    items: [
      "Dividing by 1,000 instead of multiplying: Moving from a larger unit (V) to a smaller unit (mV) requires multiplication by 1,000.",
      "Confusing Millivolts (mV) with Megavolts (MV): Capitalization matters—'mV' represents 10⁻³ V, whereas 'MV' represents 10⁶ V.",
      "Forgetting sensor offset voltages: When calculating net signal in millivolts, account for system ground offsets and amplifier bias voltages."
    ]
  },
  faqs: [
    {
      question: "How many Millivolts are in 1 Volt?",
      answer: "There are exactly 1,000 Millivolts in 1 Volt."
    },
    {
      question: "What is the formula to convert Volts to Millivolts?",
      answer: "The formula is: Millivolts = Volts × 1,000."
    },
    {
      question: "How many Millivolts is a 1.5 V AA battery?",
      answer: "A 1.5 Volt battery equals 1,500 Millivolts (1.5 × 1,000 = 1,500 mV)."
    },
    {
      question: "What is 0.05 V in Millivolts?",
      answer: "0.05 Volts equals 50 Millivolts (0.05 × 1,000 = 50 mV)."
    },
    {
      question: "Why do sensor datasheets list sensitivity in mV/V?",
      answer: "Sensitivity in millivolts per volt (mV/V) expresses output millivolts produced per volt of excitation supply voltage applied to a bridge sensor."
    },
    {
      question: "How do I convert 500 mV to Volts?",
      answer: "Divide 500 by 1,000 to obtain 0.5 Volts."
    },
    {
      question: "What is 3.3 V in Millivolts?",
      answer: "3.3 Volts equals 3,300 Millivolts."
    },
    {
      question: "Is mV an SI unit?",
      answer: "Yes, the millivolt is an official SI unit formed by combining the prefix 'milli-' (10⁻³) with the base derived unit 'volt'."
    }
  ],
  relatedList: [
    { label: "Millivolt to Volt", from: "millivolt", to: "volt" },
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" },
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" },
    { label: "Volt to Megavolt", from: "volt", to: "megavolt" }
  ],
  references: [
    "NIST Special Publication 330: The International System of Units (SI).",
    "IEEE Standard 1241: IEEE Standard for Terminology and Test Methods for Analog-to-Digital Converters.",
    "BIPM Metric System Standards Documentation."
  ]
};
