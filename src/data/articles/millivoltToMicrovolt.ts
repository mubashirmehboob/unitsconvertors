import { CustomArticleData } from "./types";

export const millivoltToMicrovolt: CustomArticleData = {
  fromUnitId: "millivolt",
  toUnitId: "microvolt",
  seoTitle: "Millivolt to Microvolt Converter (mV to µV)",
  metaDescription: "Convert Millivolts to Microvolts (mV to µV) with real-time conversion, exact ×1,000 formula, instrumentation scaling steps, worked examples, and reference tables.",
  canonicalUrl: "https://unitsconvertors.com/millivolt-to-microvolt",
  h1: "Millivolt to Microvolt Converter",
  introduction: [
    "Precision electronic design, biomedical signal acquisition, and sensor telemetry systems frequently require translating electric potentials between the millivolt (mV) and microvolt (µV) regimes. While millivolts represent standard operating levels for industrial thermocouples, audio preamplifiers, and strain gauge bridges, microvolts quantify low-amplitude biological signals, thermal noise floors, and radio receiver sensitivity thresholds.",
    "Under the International System of Units (SI), metric prefixes define the scaling ratio between these two quantities. One millivolt represents one-thousandth of a volt (10⁻³ V), whereas one microvolt represents one-millionth of a volt (10⁻⁶ V). Because a millivolt is three orders of magnitude larger than a microvolt, one millivolt contains exactly 1,000 microvolts.",
    "This technical guide details the mathematical relationship between millivolts and microvolts, outlines step-by-step conversion techniques, presents practical instrumentation calibration examples, and provides an authoritative reference table for laboratory and field engineering."
  ],
  quickAnswer: {
    text: "To convert Millivolts to Microvolts, multiply the voltage value by 1,000. For example, a 2.5 mV sensor signal equals 2,500 µV, and 0.05 mV equals 50 µV.",
    formulaDisplay: "µV = mV × 1,000",
    subtext: "1 Millivolt (mV) is equal to exactly 1,000 Microvolts (µV)."
  },
  aboutSourceUnit: {
    title: "Understanding Millivolts (mV)",
    text: "The Millivolt (symbol: mV) is an SI decimal submultiple of the volt equal to 10⁻³ volts (0.001 V). Millivolts are widely used in low-voltage analog circuitry, battery cell characterization, audio line-level inputs, and temperature transducers like Type-K and Type-J thermocouples, which generate roughly 40 µV to 50 µV per degree Celsius (0.04 to 0.05 mV/°C)."
  },
  aboutTargetUnit: {
    title: "Understanding Microvolts (µV)",
    text: "The Microvolt (symbol: µV) is an SI decimal submultiple equal to 10⁻⁶ volts (0.000001 V or 0.001 mV). Microvolts are the primary unit of measurement in high-gain analog front-ends, electroencephalography (EEG brainwaves, 10–100 µV), electrocardiography (ECG heart potentials, 100–3000 µV), RF receiver front-end sensitivity ratings, and low-noise operational amplifier input offset specifications."
  },
  relationship: "The metric scaling ratio between millivolts and microvolts is fixed at 1 to 1,000: 1 mV = 1,000 µV, and 1 µV = 0.001 mV (10⁻³ mV).",
  relationshipTitle: "Millivolt vs Microvolt Magnitude Scales",
  relationshipItems: [
    { label: "0.001 mV", value: "1 µV (RF receiver noise floor benchmark)" },
    { label: "0.010 mV", value: "10 µV (Alpha wave EEG neuro-potential amplitude)" },
    { label: "0.041 mV", value: "41 µV (Type-K thermocouple output at 1°C elevation)" },
    { label: "1 mV", value: "1,000 µV (Standard 1.0 mV calibration reference)" },
    { label: "10 mV", value: "10,000 µV (Dynamic microphone cartridge output)" }
  ],
  formula: {
    text: "Multiply the electric potential in Millivolts by 1,000 to obtain the equivalent potential in Microvolts.",
    math: "µV = mV × 1000",
    subtext: "To perform the reverse conversion from microvolts to millivolts, divide the microvolt value by 1,000."
  },
  formulaTitle: "Millivolt to Microvolt Mathematical Formula",
  practicalTip: {
    title: "Mental Calculation & Decimal Shift Rule",
    text: "To convert millivolts to microvolts mentally, shift the decimal point three places to the right. For instance, 0.475 mV becomes 475 µV, and 12.3 mV becomes 12,300 µV."
  },
  expertNote: {
    title: "Instrumentation Ground Loops & Common-Mode Rejection",
    text: "When amplifying sub-millivolt signals into microvolt-resolution analog-to-digital converters (ADCs), common-mode noise and thermoelectric Seebeck voltages at PCB solder junctions can introduce dozens of microvolts of parasitic offset. Always use differential instrumentation amplifiers with high CMRR (>100 dB) to preserve signal fidelity."
  },
  examples: {
    title: "Step-by-Step Millivolt to Microvolt Worked Examples",
    items: [
      {
        title: "Example 1: Thermocouple Temperature Sensor Telemetry",
        subtitle: "Convert a Type-K thermocouple voltage reading of 8.438 Millivolts into Microvolts.",
        steps: [
          "Identify the source potential in Millivolts: 8.438 mV.",
          "Apply the conversion formula: µV = 8.438 × 1,000.",
          "Perform the multiplication: 8.438 × 1,000 = 8,438.",
          "Result: 8.438 Millivolts equals 8,438 Microvolts (corresponding to ~207°C)."
        ]
      },
      {
        title: "Example 2: Audio Dynamic Microphone Cartridge Output",
        subtitle: "Convert a microphone signal of 1.6 mV RMS into Microvolts for preamplifier noise analysis.",
        steps: [
          "Identify the voltage in Millivolts: 1.6 mV.",
          "Multiply by 1,000: µV = 1.6 × 1,000.",
          "Calculate: 1.6 × 1,000 = 1,600.",
          "Result: 1.6 Millivolts equals 1,600 Microvolts."
        ]
      },
      {
        title: "Example 3: Precision Voltage Reference Noise Ripple",
        subtitle: "Convert a power rail output ripple measurement of 0.025 mV into Microvolts.",
        steps: [
          "Identify the source value: 0.025 mV.",
          "Apply the multiplier: µV = 0.025 × 1,000.",
          "Compute the product: 0.025 × 1,000 = 25.",
          "Result: 0.025 Millivolts equals 25 Microvolts."
        ]
      }
    ]
  },
  table: {
    title: "Millivolt to Microvolt Conversion Reference Table",
    headers: ["Millivolts (mV)", "Microvolts (µV)", "Engineering & Physical Context"],
    rows: [
      { fromVal: "0.001 mV", toVal: "1 µV", extra: "RF communication receiver input sensitivity" },
      { fromVal: "0.01 mV", toVal: "10 µV", extra: "EEG neurological brainwave channel" },
      { fromVal: "0.05 mV", toVal: "50 µV", extra: "High-precision instrumentation amplifier offset" },
      { fromVal: "0.1 mV", toVal: "100 µV", extra: "High-gain photodiode transimpedance output" },
      { fromVal: "0.5 mV", toVal: "500 µV", extra: "Strain gauge Wheatstone bridge balance error" },
      { fromVal: "1.0 mV", toVal: "1,000 µV", extra: "Standard 1 mV laboratory calibration baseline" },
      { fromVal: "2.5 mV", toVal: "2,500 µV", extra: "Magnetic phono cartridge audio output" },
      { fromVal: "5.0 mV", toVal: "5,000 µV", extra: "Industrial pressure transmitter zero-point shift" },
      { fromVal: "10.0 mV", toVal: "10,000 µV", extra: "Current shunt resistor full-scale signal" },
      { fromVal: "50.0 mV", toVal: "50,000 µV", extra: "Type-K thermocouple output at 1200°C" }
    ]
  },
  applications: {
    title: "Applications of Millivolt to Microvolt Conversion",
    items: [
      {
        title: "Biomedical Instrumentation & Neural Interfaces",
        text: "Medical devices such as electromyographs (EMG), electroencephalographs (EEG), and electrocardiographs (ECG) translate raw skin-surface bioelectric potentials (0.01 mV to 5 mV) into microvolt scales for digital filtering and diagnostic waveform analysis."
      },
      {
        title: "Thermocouple Temperature Measurement Systems",
        text: "Industrial temperature monitoring hardware digitizes small thermoelectric Seebeck potentials in millivolts. Converting to microvolts allows high-resolution lookup in NIST ITS-90 polynomial tables with sub-tenth-degree Celsius precision."
      },
      {
        title: "Low-Noise Analog Circuit Design & Op-Amp Testing",
        text: "Design engineers evaluating operational amplifier input offset voltages, thermal drift coefficients (µV/°C), and 1/f flicker noise convert millivolt lab meter readouts to microvolts to verify compliance with precision data converter limits."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Dividing by 1,000 instead of multiplying: Because microvolts are smaller than millivolts, the numerical value must increase by a factor of 1,000 (e.g., 5 mV becomes 5,000 µV, not 0.005 µV).",
      "Confusing the Greek prefix 'micro' (µ) with 'nano' (n): Micro is 10⁻⁶ V, whereas nano is 10⁻⁹ V; mixing them up causes a 1,000-fold order-of-magnitude error.",
      "Overlooking lead wire resistance in four-wire Kelvin connections: Parasitic lead resistance can cause significant millivolt drops that distort sensitive microvolt calculations."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts are in 1 Millivolt?",
      answer: "There are exactly 1,000 Microvolts in 1 Millivolt (1 mV = 1,000 µV)."
    },
    {
      question: "What is the formula to convert Millivolts to Microvolts?",
      answer: "The formula is: Microvolts = Millivolts × 1,000. Simply multiply the millivolt value by one thousand."
    },
    {
      question: "How do I convert 0.25 mV to µV?",
      answer: "Multiply 0.25 by 1,000 to get 250 µV (0.25 mV × 1,000 = 250 µV)."
    },
    {
      question: "What is 5 mV in Microvolts?",
      answer: "5 Millivolts equals 5,000 Microvolts (5 × 1,000 = 5,000 µV)."
    },
    {
      question: "Why does converting mV to µV multiply by 1,000?",
      answer: "The SI prefix 'milli' denotes 10⁻³ (one-thousandth) and 'micro' denotes 10⁻⁶ (one-millionth). Dividing 10⁻³ by 10⁻⁶ yields 10³ = 1,000, meaning one millivolt is 1,000 times larger than a microvolt."
    },
    {
      question: "How do I convert Microvolts back to Millivolts?",
      answer: "Divide the Microvolt value by 1,000. For example, 3,500 µV ÷ 1,000 = 3.5 mV."
    },
    {
      question: "What is the difference between mV and µV in electronics?",
      answer: "A millivolt (mV) is 10⁻³ V, commonly seen in sensor outputs, audio signals, and thermocouple telemetry. A microvolt (µV) is 10⁻⁶ V, typically encountered in biological potentials, receiver noise floors, and amplifier offset specs."
    },
    {
      question: "How many Microvolts is a 12 mV signal?",
      answer: "A 12 Millivolt signal equals 12,000 Microvolts (12 × 1,000 = 12,000 µV)."
    }
  ],
  relatedList: [
    { label: "Microvolt to Millivolt", from: "microvolt", to: "millivolt" },
    { label: "Millivolt to Volt", from: "millivolt", to: "volt" },
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" },
    { label: "Millivolt to Kilovolt", from: "millivolt", to: "kilovolt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60050: International Electrotechnical Vocabulary (IEV) - Electric and magnetic circuits."
  ]
};
