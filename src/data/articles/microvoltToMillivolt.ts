import { CustomArticleData } from "./types";

export const microvoltToMillivolt: CustomArticleData = {
  fromUnitId: "microvolt",
  toUnitId: "millivolt",
  seoTitle: "Microvolt to Millivolt Converter (µV to mV)",
  metaDescription: "Convert Microvolts to Millivolts (µV to mV) with real-time conversion, exact ÷1,000 formula, biomedical sensor scaling steps, reference tables, and FAQs.",
  canonicalUrl: "https://unitsconvertors.com/microvolt-to-millivolt",
  h1: "Microvolt to Millivolt Converter",
  introduction: [
    "Precision electronic instrumentation, biomedical signal processing, and laboratory telemetry systems constantly translate voltage measurements between microvolts (µV) and millivolts (mV). While microvolts measure minute biopotentials (EEG brainwaves, ECG waves, EMG muscle twitches) and ultra-low-noise amplifier offsets, millivolts quantify thermocouple temperature sensors, dynamic microphone audio feeds, and standard analog-to-digital converter (ADC) input stages.",
    "Under the International System of Units (SI), one millivolt equals one-thousandth of a volt (10⁻³ V), and one microvolt equals one-millionth of a volt (10⁻⁶ V). Because a millivolt is 1,000 times larger than a microvolt, one microvolt equals exactly 0.001 millivolts. Converting microvolts to millivolts requires dividing the microvolt value by 1,000.",
    "This technical article explains the conversion relationship, provides worked examples from biomedical telemetry and instrumentation amplifier design, features an engineering reference table, and reviews practical design tips."
  ],
  quickAnswer: {
    text: "To convert Microvolts to Millivolts, divide the potential value in Microvolts by 1,000 (or multiply by 0.001). For example, 2,500 µV equals 2.5 mV, and 100 µV equals 0.1 mV.",
    formulaDisplay: "mV = µV ÷ 1,000",
    subtext: "1 Microvolt (µV) is equal to exactly 0.001 Millivolts (mV)."
  },
  aboutSourceUnit: {
    title: "Understanding Microvolts (µV)",
    text: "The Microvolt (symbol: µV) is an SI decimal submultiple equal to 10⁻⁶ volts (0.000001 V or 0.001 mV). Microvolts are the standard unit for recording neural electroencephalogram potentials (10–100 µV), electrocardiogram ST-segments, piezoelectric vibration sensor outputs, and low-noise operational amplifier input offset drift (µV/°C)."
  },
  aboutTargetUnit: {
    title: "Understanding Millivolts (mV)",
    text: "The Millivolt (symbol: mV) is an SI decimal submultiple equal to 10⁻³ volts (0.001 V). Millivolts are widely used in low-voltage analog circuits, thermocouple thermal tables (e.g., Type K ~41 µV/°C = 0.041 mV/°C), audio cartridge outputs, and battery electrochemical cell potentials."
  },
  relationship: "The metric scaling ratio between microvolts and millivolts is fixed at 1,000 to 1: 1 mV = 1,000 µV, and 1 µV = 0.001 mV (10⁻³ mV).",
  relationshipTitle: "Microvolt vs Millivolt Magnitude Scales",
  relationshipItems: [
    { label: "1 µV", value: "0.001 mV (RF communication receiver sensitivity limit)" },
    { label: "50 µV", value: "0.05 mV (EEG brainwave peak-to-peak amplitude)" },
    { label: "500 µV", value: "0.5 mV (ECG cardiac signal baseline)" },
    { label: "1,000 µV", value: "1.0 mV (Standard 1 mV medical calibration pulse)" },
    { label: "10,000 µV", value: "10.0 mV (Dynamic microphone full-scale output)" }
  ],
  formula: {
    text: "Divide the electric potential in Microvolts by 1,000 to obtain Millivolts.",
    math: "mV = µV / 1000",
    subtext: "To convert millivolts back to microvolts, multiply the millivolt value by 1,000."
  },
  formulaTitle: "Microvolt to Millivolt Mathematical Formula",
  practicalTip: {
    title: "Mental Calculation & Decimal Shift Rule",
    text: "To convert microvolts to millivolts mentally, move the decimal point three places to the left. For example, 750 µV becomes 0.75 mV, and 3,200 µV becomes 3.2 mV."
  },
  expertNote: {
    title: "Medical ECG Calibration Pulse Standard",
    text: "Standard clinical electrocardiographs (ECG/EKG) print a 1.0 cm vertical calibration bar representing exactly 1.0 mV (1,000 µV). This allows medical personnel to evaluate cardiac wave amplitudes calibrated in microvolts directly from grid paper."
  },
  examples: {
    title: "Step-by-Step Microvolt to Millivolt Worked Examples",
    items: [
      {
        title: "Example 1: Electrocardiogram (ECG) R-Wave Amplitude",
        subtitle: "Convert a cardiac R-wave peak measurement of 1,250 Microvolts into Millivolts.",
        steps: [
          "Identify the source voltage: 1,250 µV.",
          "Apply conversion formula: mV = 1,250 ÷ 1,000.",
          "Perform calculation: 1,250 ÷ 1,000 = 1.25.",
          "Result: 1,250 Microvolts equals 1.25 Millivolts."
        ]
      },
      {
        title: "Example 2: Type-K Thermocouple Output Potential",
        subtitle: "Convert a thermocouple reading of 4,096 Microvolts to Millivolts.",
        steps: [
          "Identify voltage: 4,096 µV.",
          "Divide by 1,000: mV = 4,096 ÷ 1,000.",
          "Compute result: 4,096 ÷ 1,000 = 4.096.",
          "Result: 4,096 Microvolts equals 4.096 Millivolts (corresponding to 100°C)."
        ]
      },
      {
        title: "Example 3: Operational Amplifier Input Offset Voltage",
        subtitle: "Convert a precision op-amp offset specification of 25 Microvolts into Millivolts.",
        steps: [
          "Identify input value: 25 µV.",
          "Apply division: mV = 25 ÷ 1,000.",
          "Calculate: 25 ÷ 1,000 = 0.025.",
          "Result: 25 Microvolts equals 0.025 Millivolts."
        ]
      }
    ]
  },
  table: {
    title: "Microvolt to Millivolt Conversion Reference Table",
    headers: ["Microvolts (µV)", "Millivolts (mV)", "Biomedical & Instrumentation Context"],
    rows: [
      { fromVal: "1 µV", toVal: "0.001 mV", extra: "RF communication receiver noise floor" },
      { fromVal: "10 µV", toVal: "0.01 mV", extra: "Neurological EEG alpha rhythm amplitude" },
      { fromVal: "50 µV", toVal: "0.05 mV", extra: "Precision op-amp input offset ceiling" },
      { fromVal: "100 µV", toVal: "0.1 mV", extra: "Cardiac ECG P-wave average amplitude" },
      { fromVal: "250 µV", toVal: "0.25 mV", extra: "EMG muscle contraction baseline signal" },
      { fromVal: "500 µV", toVal: "0.5 mV", extra: "Wheatstone bridge strain sensor offset" },
      { fromVal: "1,000 µV", toVal: "1.0 mV", extra: "Standard 1 mV ECG diagnostic calibration mark" },
      { fromVal: "2,500 µV", toVal: "2.5 mV", extra: "Magnetic phono turntable cartridge output" },
      { fromVal: "5,000 µV", toVal: "5.0 mV", extra: "Dynamic moving-coil microphone level" },
      { fromVal: "10,000 µV", toVal: "10.0 mV", extra: "Current shunt resistor full-scale signal" }
    ]
  },
  applications: {
    title: "Applications of Microvolt to Millivolt Conversion",
    items: [
      {
        title: "Clinical Electrophysiology (ECG, EEG, EMG)",
        text: "Diagnostic patient monitoring hardware captures microvolt-level biological signals from surface electrodes and scales them into standardized millivolt waveform traces for cardiologists and neurologists."
      },
      {
        title: "Thermocouple Temperature Instrumentation",
        text: "Industrial temperature transmitters process microvolt thermoelectric outputs and convert them to millivolt linearization curves to calculate process temperatures in furnaces and chemical reactors."
      },
      {
        title: "Wheatstone Bridge Strain Gauge Telemetry",
        text: "Load cells, torque sensors, and pressure transducers generate microvolt-per-volt sensitivity signals (e.g., 2 mV/V excitation = 2,000 µV/V) that require conversion to millivolts for signal conditioning amplifiers."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Mistakes to Avoid",
    items: [
      "Multiplying by 1,000 instead of dividing: Converting from a smaller unit (µV) to a larger unit (mV) requires dividing by 1,000 (e.g., 500 µV is 0.5 mV, not 500,000 mV).",
      "Confusing microvolts (µV) with microamperes (µA): µV measures electric potential difference, whereas µA measures electric current.",
      "Decimal placement error: Shifting the decimal point in the wrong direction creates a 1,000,000-fold discrepancy."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts make 1 Millivolt?",
      answer: "There are exactly 1,000 Microvolts in 1 Millivolt (1 mV = 1,000 µV)."
    },
    {
      question: "What is the formula to convert Microvolts to Millivolts?",
      answer: "The formula is: Millivolts = Microvolts ÷ 1,000 (or mV = µV × 0.001)."
    },
    {
      question: "How do I convert 1,500 µV to Millivolts?",
      answer: "Divide 1,500 by 1,000 to get 1.5 Millivolts (1,500 ÷ 1,000 = 1.5 mV)."
    },
    {
      question: "What is 100 µV in Millivolts?",
      answer: "100 Microvolts equals 0.1 Millivolts (100 ÷ 1,000 = 0.1 mV)."
    },
    {
      question: "Why do we divide by 1,000 when converting µV to mV?",
      answer: "Because 1 millivolt is 10⁻³ V and 1 microvolt is 10⁻⁶ V. Dividing 10⁻⁶ by 10⁻³ gives 10⁻³ = 1/1,000, meaning one microvolt is 1/1,000 of a millivolt."
    },
    {
      question: "How do I convert Millivolts back to Microvolts?",
      answer: "Multiply the Millivolt value by 1,000. For example, 4.5 mV × 1,000 = 4,500 µV."
    },
    {
      question: "What is 25 µV in Millivolts?",
      answer: "25 Microvolts equals 0.025 Millivolts (25 ÷ 1,000 = 0.025 mV)."
    },
    {
      question: "What is the difference between µV and mV in biomedical engineering?",
      answer: "Microvolts (µV) measure ultra-low amplitude raw neural and muscle potentials (EEG, EMG), while millivolts (mV) are used for cardiac ECG signals, thermocouple outputs, and amplifier input channels."
    }
  ],
  relatedList: [
    { label: "Millivolt to Microvolt", from: "millivolt", to: "microvolt" },
    { label: "Microvolt to Volt", from: "microvolt", to: "volt" },
    { label: "Millivolt to Volt", from: "millivolt", to: "volt" },
    { label: "Microvolt to Kilovolt", from: "microvolt", to: "kilovolt" },
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" }
  ],
  references: [
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEC 60601-2-25: Medical electrical equipment - Particular requirements for the basic safety and essential performance of electrocardiographs."
  ]
};
