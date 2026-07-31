import { CustomArticleData } from "./types";

export const millivoltToVolt: CustomArticleData = {
  fromUnitId: "millivolt",
  toUnitId: "volt",
  seoTitle: "Millivolt to Volt Converter (mV to V)",
  metaDescription: "Convert Millivolts to Volts (mV to V) instantly. Learn the 1,000 ratio division formula, sensor signal calculations, reference tables, and FAQs.",
  h1: "Millivolt to Volt Converter",
  introduction: [
    "Electrical engineers, electronic technicians, and biomedical researchers frequently convert voltage measurements from Millivolts (mV) to standard Volts (V). When scaling low-level sensor outputs, thermocouple signals, audio line levels, and operational amplifier gains up to system power supply specifications, converting millivolts to volts is essential.",
    "The millivolt is an SI metric submultiple of the volt. Because the prefix 'milli' represents one-thousandth (10⁻³), one volt contains exactly 1,000 millivolts. To convert a voltage value from millivolts to volts, divide the potential in millivolts by 1,000.",
    "This technical guide explains the mathematical relationship between mV and V, step-by-step sensor scaling examples, reference conversion tables, signal conditioning rules, and FAQs."
  ],
  quickAnswer: {
    text: "To convert Millivolts to Volts, divide the potential value in Millivolts by 1,000. For example, 1,500 mV equals 1.5 V, and 500 mV equals 0.5 V.",
    formulaDisplay: "V = mV ÷ 1,000",
    subtext: "1 Millivolt is equal to exactly 0.001 Volts."
  },
  aboutSourceUnit: {
    title: "Understanding the Millivolt (mV)",
    text: "The Millivolt (symbol: mV) is an SI submultiple equal to one-thousandth of a volt (0.001 V or 10⁻³ V). Millivolts are the standard unit for recording thermocouple electromotive force, strain gauge transducer signals, electrocardiogram (ECG) heart activity, and low-level microphone line signals."
  },
  aboutTargetUnit: {
    title: "Understanding the Volt (V)",
    text: "The Volt (symbol: V) is the SI base derived unit of electrical potential difference, electromotive force, and voltage. Named after Alessandro Volta, one volt represents the potential required to drive one ampere of electric current through a resistance of one ohm (1 V = 1 A × 1 Ω)."
  },
  relationship: "The metric ratio between millivolts and volts is exact by SI standards: 1 V = 1,000 mV, and 1 mV = 0.001 V (10⁻³ V).",
  relationshipTitle: "Millivolt vs Volt Scale Comparison",
  relationshipItems: [
    { label: "1 mV", value: "0.001 V (Thermocouple signal amplitude)" },
    { label: "100 mV", value: "0.1 V (Consumer audio line signal level)" },
    { label: "700 mV", value: "0.7 V (Silicon diode forward voltage drop)" },
    { label: "1,500 mV", value: "1.5 V (Standard AA alkaline battery voltage)" },
    { label: "3,300 mV", value: "3.3 V (Standard digital microcontroller supply rail)" }
  ],
  formula: {
    text: "Divide the electrical potential in Millivolts by 1,000 to determine the equivalent voltage in Volts.",
    math: "V = mV / 1000",
    subtext: "To convert volts back to millivolts, multiply the volt value by 1,000."
  },
  formulaTitle: "Millivolt to Volt Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Volts",
    text: "Shift the decimal point three positions to the left to convert millivolts to volts. For example, 2,500 mV becomes 2.5 V."
  },
  expertNote: {
    title: "Preamplifier Gain Calculation",
    text: "When an instrumentation amplifier scales a 20 mV sensor output up to a 2.0 V analog input for an Analog-to-Digital Converter (ADC), the required amplifier voltage gain (A_v) is calculated as: A_v = V_out / V_in = 2,000 mV / 20 mV = 100."
  },
  examples: {
    title: "Step-by-Step Millivolt to Volt Worked Examples",
    items: [
      {
        title: "Example 1: Microcontroller Supply Rail",
        subtitle: "Convert a 3,300 Millivolt power rail measurement into Volts.",
        steps: [
          "Identify voltage in Millivolts: 3,300 mV.",
          "Apply conversion formula: V = 3,300 ÷ 1,000.",
          "Calculate: 3,300 ÷ 1,000 = 3.3.",
          "Result: 3,300 Millivolts equals 3.3 Volts."
        ]
      },
      {
        title: "Example 2: Lithium-Ion Battery Nominal Voltage",
        subtitle: "Convert a 3,700 Millivolt battery potential into Volts.",
        steps: [
          "Identify voltage: 3,700 mV.",
          "Divide by 1,000: 3,700 ÷ 1,000 = 3.7.",
          "Result: 3,700 Millivolts equals 3.7 V."
        ]
      },
      {
        title: "Example 3: Silicon Junction Diode Drop",
        subtitle: "Convert a 700 Millivolt diode forward voltage drop to Volts.",
        steps: [
          "Identify voltage: 700 mV.",
          "Divide by 1,000: 700 ÷ 1,000 = 0.7.",
          "Result: 700 Millivolts equals 0.7 V."
        ]
      }
    ]
  },
  table: {
    title: "Millivolt to Volt Reference Table",
    headers: ["Millivolts (mV)", "Volts (V)", "Electronics & Sensor Context"],
    rows: [
      { fromVal: "1 mV", toVal: "0.001 V", extra: "Thermocouple ambient temperature output signal" },
      { fromVal: "10 mV", toVal: "0.01 V", extra: "Bio-potential baseline signal" },
      { fromVal: "50 mV", toVal: "0.05 V", extra: "Industrial current shunt voltage drop" },
      { fromVal: "100 mV", toVal: "0.1 V", extra: "Consumer audio line signal amplitude" },
      { fromVal: "500 mV", toVal: "0.5 V", extra: "Consumer audio peak line signal level" },
      { fromVal: "700 mV", toVal: "0.7 V", extra: "Silicon PN junction diode forward drop" },
      { fromVal: "1,200 mV", toVal: "1.2 V", extra: "NiMH rechargeable battery cell nominal voltage" },
      { fromVal: "1,500 mV", toVal: "1.5 V", extra: "Standard AA/AAA alkaline cell potential" },
      { fromVal: "3,300 mV", toVal: "3.3 V", extra: "Microcontroller digital power rail" },
      { fromVal: "5,000 mV", toVal: "5.0 V", extra: "Standard USB 5 V DC supply line" }
    ]
  },
  applications: {
    title: "Engineering Applications of mV to V Conversion",
    items: [
      {
        title: "Analog Sensor Conditioning Circuits",
        text: "Thermocouple, strain gauge, and pressure transducer signals output millivolt signals that operational amplifiers convert to 0–5 V or 0–10 V industry-standard control loops."
      },
      {
        title: "Digital Multimeter (DMM) Voltage Range Selection",
        text: "Automated test equipment auto-ranges between millivolt ranges (e.g., 400.0 mV) and volt ranges (e.g., 4.000 V) during circuit diagnostics."
      },
      {
        title: "Current Shunt Measurement",
        text: "Precision current shunts produce a 50 mV or 100 mV drop at rated full-scale current. Metering circuits convert these drops into equivalent system voltage signals."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Multiplying by 1,000 instead of dividing: Converting from a smaller unit (mV) to a larger unit (V) requires dividing by 1,000.",
      "Confusing Millivolts (mV) with Microvolts (µV): 1 mV equals 1,000 µV; dividing microvolts instead of millivolts introduces a 1,000-fold error.",
      "Confusing Millivolts (mV) with Megavolts (MV): Capitalization matters—'mV' represents 10⁻³ V, whereas 'MV' represents 10⁶ V."
    ]
  },
  faqs: [
    {
      question: "How many Millivolts are in 1 Volt?",
      answer: "There are exactly 1,000 Millivolts in 1 Volt."
    },
    {
      question: "What is the formula to convert Millivolts to Volts?",
      answer: "The formula is: Volts = Millivolts ÷ 1,000."
    },
    {
      question: "How many Volts is 1,500 mV?",
      answer: "1,500 Millivolts equals 1.5 Volts (1,500 ÷ 1,000 = 1.5 V)."
    },
    {
      question: "What is 500 mV in Volts?",
      answer: "500 Millivolts equals 0.5 Volts (500 ÷ 1,000 = 0.5 V)."
    },
    {
      question: "How do I convert 3,300 mV to Volts?",
      answer: "Divide 3,300 by 1,000 to get 3.3 Volts."
    },
    {
      question: "What is 700 mV in Volts?",
      answer: "700 Millivolts equals 0.7 Volts."
    },
    {
      question: "Is 1,000 mV equal to 1 V?",
      answer: "Yes, 1,000 Millivolts is equal to exactly 1 Volt."
    },
    {
      question: "How do I convert Volts back to Millivolts?",
      answer: "Multiply the Volt value by 1,000."
    }
  ],
  relatedList: [
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" },
    { label: "Millivolt to Kilovolt", from: "millivolt", to: "kilovolt" },
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" },
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 1241: IEEE Standard for Terminology and Test Methods for Analog-to-Digital Converters.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition)."
  ]
};
