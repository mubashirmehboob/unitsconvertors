import { CustomArticleData } from "./types";

export const microvoltToVolt: CustomArticleData = {
  fromUnitId: "microvolt",
  toUnitId: "volt",
  seoTitle: "Microvolt to Volt Converter (µV to V)",
  metaDescription: "Convert Microvolts to Volts (µV to V) with live calculations, exact ÷1,000,000 formula, amplifier scaling steps, reference tables, and technical FAQs.",
  canonicalUrl: "https://unitsconvertors.com/microvolt-to-volt",
  h1: "Microvolt to Volt Converter",
  introduction: [
    "Precision analog signal processing, instrumentation engineering, and electrophysiological diagnostics routinely convert signals from the microvolt (µV) domain into the standard volt (V) range. Microvolts characterize extremely weak electric potentials—such as human brainwave signals (EEG), strain gauge bridge imbalances, radio receiver RF front-ends, and quantum Hall resistance standards—which are amplified to volt-level signals for digital acquisition.",
    "The International System of Units (SI) defines the relationship through the metric prefix 'micro' (symbol: µ), representing one-millionth (10⁻⁶) of the base unit. Consequently, one volt equals exactly 1,000,000 microvolts (10⁶ µV), and one microvolt equals 0.000001 volts (10⁻⁶ V). Converting microvolts to volts requires dividing the microvolt value by 1,000,000.",
    "This reference guide explains the mathematical conversion, details amplifier gain calculations, presents worked engineering examples, provides a comprehensive conversion table, and answers key technical questions on microvolt-to-volt measurements."
  ],
  quickAnswer: {
    text: "To convert Microvolts to Volts, divide the potential value in Microvolts by 1,000,000 (or multiply by 10⁻⁶). For example, 500,000 µV equals 0.5 V, and 2,500,000 µV equals 2.5 V.",
    formulaDisplay: "V = µV ÷ 1,000,000",
    subtext: "1 Microvolt (µV) is equal to exactly 0.000001 Volts (V)."
  },
  aboutSourceUnit: {
    title: "Understanding Microvolts (µV)",
    text: "The Microvolt (symbol: µV) is an SI decimal submultiple of the volt equal to 10⁻⁶ volts (0.000001 V). It is the standard unit for low-level bioelectric potentials (EEG 10–100 µV, EMG 50–5000 µV), thermoelectric Seebeck offsets at metal junctions, RF receiver sensitivity ratings (e.g., 0.25 µV for 12 dB SINAD), and precision DC amplifier drift specs."
  },
  aboutTargetUnit: {
    title: "Understanding Volts (V)",
    text: "The Volt (symbol: V) is the SI base derived unit of electric potential difference and electromotive force. Defined as the potential difference across a conductor when a current of one ampere dissipates one watt of power (1 V = 1 W/A = 1 J/C), the volt is the universal reference for electronics, power supplies, logic levels, and battery cells."
  },
  relationship: "The metric relationship between microvolts and volts spans six orders of magnitude: 1 V = 1,000,000 µV (10⁶ µV), and 1 µV = 0.000001 V (10⁻⁶ V).",
  relationshipTitle: "Microvolt vs Volt Magnitude Scales",
  relationshipItems: [
    { label: "1 µV", value: "0.000001 V (10⁻⁶ V quantum metrology noise floor)" },
    { label: "50 µV", value: "0.00005 V (EEG brainwave signal amplitude)" },
    { label: "1,000 µV", value: "0.001 V (1.0 Millivolt calibration mark)" },
    { label: "100,000 µV", value: "0.1 V (100 mV line-level audio threshold)" },
    { label: "1,000,000 µV", value: "1.0 V (1.0 Volt SI base reference potential)" }
  ],
  formula: {
    text: "Divide the electric potential in Microvolts by 1,000,000 to convert to Volts.",
    math: "V = µV / 1000000",
    subtext: "To convert volts back to microvolts, multiply the volt value by 1,000,000."
  },
  formulaTitle: "Microvolt to Volt Mathematical Formula",
  practicalTip: {
    title: "Mental Calculation & Decimal Shift Rule",
    text: "To convert microvolts to volts manually, shift the decimal point six positions to the left. For example, 4,500 µV becomes 0.0045 V (4.5 mV)."
  },
  expertNote: {
    title: "Instrumentation Amplifier Gain Scaling",
    text: "In data acquisition, low-noise preamplifiers apply a fixed gain factor (e.g., Gain = 1,000 or 10,000) to elevate microvolt inputs into 0–5 V or ±10 V ADC dynamic ranges. An input of 500 µV with a gain of 10,000 yields: (500 × 10⁻⁶ V) × 10,000 = 5.0 V."
  },
  examples: {
    title: "Step-by-Step Microvolt to Volt Worked Examples",
    items: [
      {
        title: "Example 1: EEG Bioelectric Amplifier Output",
        subtitle: "Convert an amplified brainwave potential of 85,000 Microvolts into Volts.",
        steps: [
          "Identify source voltage: 85,000 µV.",
          "Apply conversion formula: V = 85,000 ÷ 1,000,000.",
          "Calculate: 85,000 ÷ 1,000,000 = 0.085.",
          "Result: 85,000 Microvolts equals 0.085 Volts (or 85 mV)."
        ]
      },
      {
        title: "Example 2: Precision Shunt Resistor Drop",
        subtitle: "Convert a 75,000 Microvolt drop across a 100 A current shunt into Volts.",
        steps: [
          "Identify voltage: 75,000 µV.",
          "Divide by 1,000,000: V = 75,000 ÷ 1,000,000.",
          "Perform calculation: 75,000 ÷ 10⁶ = 0.075.",
          "Result: 75,000 Microvolts equals 0.075 Volts (75 mV)."
        ]
      },
      {
        title: "Example 3: Strain Gauge Load Cell Sensor Output",
        subtitle: "Convert a 2,500 Microvolt bridge excitation output into Volts.",
        steps: [
          "Identify value: 2,500 µV.",
          "Apply division: V = 2,500 ÷ 1,000,000.",
          "Calculate: 2,500 ÷ 1,000,000 = 0.0025.",
          "Result: 2,500 Microvolts equals 0.0025 Volts (2.5 mV)."
        ]
      }
    ]
  },
  table: {
    title: "Microvolt to Volt Conversion Reference Table",
    headers: ["Microvolts (µV)", "Volts (V)", "Electronic & Measurement Context"],
    rows: [
      { fromVal: "1 µV", toVal: "0.000001 V", extra: "RF communication receiver sensitivity" },
      { fromVal: "10 µV", toVal: "0.00001 V", extra: "EEG alpha rhythm neurological potential" },
      { fromVal: "100 µV", toVal: "0.0001 V", extra: "ECG cardiac P-wave amplitude" },
      { fromVal: "500 µV", toVal: "0.0005 V", extra: "Wheatstone bridge strain gauge balance offset" },
      { fromVal: "1,000 µV", toVal: "0.001 V", extra: "1 Millivolt standard audio calibration" },
      { fromVal: "10,000 µV", toVal: "0.01 V", extra: "10 mV dynamic microphone output" },
      { fromVal: "100,000 µV", toVal: "0.1 V", extra: "100 mV line-level auxiliary audio" },
      { fromVal: "500,000 µV", toVal: "0.5 V", extra: "0.5 V silicon diode forward bias voltage" },
      { fromVal: "1,000,000 µV", toVal: "1.0 V", extra: "1.0 V standard SI base unit reference" },
      { fromVal: "3,300,000 µV", toVal: "3.3 V", extra: "3.3 V CMOS microcontroller logic rail" }
    ]
  },
  applications: {
    title: "Applications of Microvolt to Volt Conversion",
    items: [
      {
        title: "Medical Diagnostic Equipment Calibration",
        text: "Electrocardiogram (ECG) and electroencephalogram (EEG) monitors record biological microvolts and route them through multi-stage instrumentation amplifiers to generate standardized 1 V/mV chart recorder signals."
      },
      {
        title: "RF Communications & Receiver Sensitivity Testing",
        text: "Radio frequency (RF) engineers test receiver sensitivity by converting microvolt signal generator levels into decibel-volts (dBV) and volts RMS to establish signal-to-noise ratio (SNR) thresholds."
      },
      {
        title: "Metrology & Josephson Voltage Standards",
        text: "National measurement institutes calibrate secondary electronic voltage standards (Zener references) against Josephson junction arrays, resolving quantum step differences in microvolts to certify 10.000000 V lab standards."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Multiplying instead of dividing: Because the volt is one million times larger than a microvolt, converting µV to V must result in a smaller number (divide by 1,000,000).",
      "Confusing microvolts (µV) with millivolts (mV): 1 mV = 1,000 µV; confusing the two introduces a factor-of-1,000 error.",
      "Losing significant digits in floating-point software: Small fractional volts (e.g., 0.000015 V) require double-precision data types to prevent truncation in digital data loggers."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts make 1 Volt?",
      answer: "There are exactly 1,000,000 (one million) Microvolts in 1 Volt (1 V = 10⁶ µV)."
    },
    {
      question: "What is the formula to convert Microvolts to Volts?",
      answer: "The formula is: Volts = Microvolts ÷ 1,000,000 (or V = µV × 10⁻⁶)."
    },
    {
      question: "How do I convert 500,000 µV to Volts?",
      answer: "Divide 500,000 by 1,000,000 to get 0.5 Volts (500,000 ÷ 1,000,000 = 0.5 V)."
    },
    {
      question: "What is 1,000,000 µV in Volts?",
      answer: "1,000,000 Microvolts equals exactly 1.0 Volt."
    },
    {
      question: "How do I convert 25 µV to Volts?",
      answer: "Divide 25 by 1,000,000 to get 0.000025 Volts (2.5 × 10⁻⁵ V or 0.025 mV)."
    },
    {
      question: "Why does the conversion divide by 1,000,000?",
      answer: "The SI prefix 'micro' means one-millionth (10⁻⁶). Therefore, 1 µV = 1/1,000,000 V, requiring division by 1,000,000 to convert to base volts."
    },
    {
      question: "How do I convert Volts back to Microvolts?",
      answer: "Multiply the Volt value by 1,000,000. For example, 1.5 V × 1,000,000 = 1,500,000 µV."
    },
    {
      question: "What physical signals are measured in microvolts?",
      answer: "Microvolts measure human brainwaves (EEG), heart electric potentials (ECG), thermocouple temperature offsets, RF receiver antenna signals, and strain gauge bridge outputs."
    }
  ],
  relatedList: [
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" },
    { label: "Microvolt to Millivolt", from: "microvolt", to: "millivolt" },
    { label: "Millivolt to Volt", from: "millivolt", to: "volt" },
    { label: "Microvolt to Kilovolt", from: "microvolt", to: "kilovolt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60050: International Electrotechnical Vocabulary (IEV) - Measurements and measuring instruments."
  ]
};
