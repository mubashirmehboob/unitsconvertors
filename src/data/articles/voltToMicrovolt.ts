import { CustomArticleData } from "./types";

export const voltToMicrovolt: CustomArticleData = {
  fromUnitId: "volt",
  toUnitId: "microvolt",
  seoTitle: "Volt to Microvolt Converter (V to µV)",
  metaDescription: "Convert Volts to Microvolts (V to µV) instantly. Learn the 1,000,000 ratio conversion formula, low-noise signal calculations, conversion tables, and FAQs.",
  h1: "Volt to Microvolt Converter",
  introduction: [
    "Precision scientific research, neurophysiology recordings, radio frequency (RF) communications, and ultra-low-noise instrumentation routinely measure electrical signals in microvolts (µV). When measuring microvolt-level electroencephalogram (EEG) brainwaves or sensitive antenna signal levels against standard equipment outputs, converting between Volts (V) and Microvolts (µV) is essential.",
    "Under the International System of Units (SI), the metric prefix 'micro' signifies one-millionth (10⁻⁶). Consequently, one volt contains exactly 1,000,000 microvolts. Converting volts to microvolts requires multiplying the value in volts by 1,000,000.",
    "This reference manual provides the exact mathematical conversion formula, practical engineering examples, reference tables, low-noise circuit tips, and answers to common instrumentation FAQs."
  ],
  quickAnswer: {
    text: "To convert Volts to Microvolts, multiply the voltage in Volts by 1,000,000. For example, 0.001 V equals 1,000 µV, and 0.00005 V equals 50 µV.",
    formulaDisplay: "µV = V × 1,000,000",
    subtext: "1 Volt is equal to exactly 1,000,000 Microvolts."
  },
  aboutSourceUnit: {
    title: "Volt (V) Overview",
    text: "The Volt (symbol: V) is the SI base unit for electrical potential difference, electromotive force, and electric voltage. Named after Alessandro Volta, one volt represents the energy transfer of one joule per coulomb of charge."
  },
  aboutTargetUnit: {
    title: "Microvolt (µV) Overview",
    text: "The Microvolt (symbol: µV) is a submultiple unit of voltage equal to one-millionth of a volt (10⁻⁶ V or 0.000001 V). Microvolts are the standard unit for recording neural electrophysiology (EEG), electromyography (EMG), piezoresistive strain gauge bridge outputs, and RF receiver sensitivity thresholds."
  },
  relationship: "The metric relationship between volts and microvolts is exact: 1 V = 1,000,000 µV (10⁶ µV), and 1 µV = 0.000001 V (10⁻⁶ V).",
  relationshipTitle: "Volt vs Microvolt Magnitude Scales",
  relationshipItems: [
    { label: "0.000001 V", value: "1 µV (Low-noise operational amplifier input noise floor)" },
    { label: "0.00005 V", value: "50 µV (Human scalp EEG alpha wave peak potential)" },
    { label: "0.001 V", value: "1,000 µV (1 Millivolt / Sensitive thermocouple output)" },
    { label: "0.1 V", value: "100,000 µV (Low-level line audio signal)" },
    { label: "1.0 V", value: "1,000,000 µV (1 Volt reference potential)" }
  ],
  formula: {
    text: "Multiply the electrical potential in Volts by 1,000,000 to obtain the equivalent in Microvolts.",
    math: "µV = V × 1000000",
    subtext: "To convert microvolts back to volts, divide the microvolt value by 1,000,000."
  },
  formulaTitle: "Volt to Microvolt Conversion Formula",
  practicalTip: {
    title: "Decimal Shift Rule for Microvolts",
    text: "To convert Volts to Microvolts mentally, shift the decimal point six places to the right. For example, 0.000012 V becomes 12 µV."
  },
  expertNote: {
    title: "Thermal Noise Floor Considerations",
    text: "At room temperature (298 K), Johnson-Nyquist thermal noise across a 1 kΩ resistor over a 10 kHz bandwidth is approximately 0.4 µV RMS. When working with microvolt signals, shielding, differential amplification, and low-pass filtering are essential to preserve signal-to-noise ratio (SNR)."
  },
  examples: {
    title: "Step-by-Step Volt to Microvolt Worked Examples",
    items: [
      {
        title: "Example 1: EEG Brainwave Signal Offset",
        subtitle: "Convert an amplifier output of 0.000035 Volts into Microvolts.",
        steps: [
          "Identify voltage in Volts: 0.000035 V.",
          "Apply conversion formula: µV = 0.000035 × 1,000,000.",
          "Calculate: 0.000035 × 1,000,000 = 35.",
          "Result: 0.000035 Volts equals 35 Microvolts."
        ]
      },
      {
        title: "Example 2: Precision Reference Voltage Drift",
        subtitle: "Convert a 0.00025 Volt voltage drift measurement into Microvolts.",
        steps: [
          "Identify voltage: 0.00025 V.",
          "Multiply by 1,000,000: 0.00025 × 1,000,000 = 250.",
          "Result: 0.00025 Volts equals 250 µV."
        ]
      },
      {
        title: "Example 3: RF Antenna Input Signal",
        subtitle: "Convert a 0.000002 Volt RF receiver signal to Microvolts.",
        steps: [
          "Identify voltage: 0.000002 V.",
          "Multiply by 1,000,000: 0.000002 × 1,000,000 = 2.",
          "Result: 0.000002 Volts equals 2 µV."
        ]
      }
    ]
  },
  table: {
    title: "Volt to Microvolt Reference Values",
    headers: ["Volts (V)", "Microvolts (µV)", "Scientific & Engineering Application"],
    rows: [
      { fromVal: "0.000001 V", toVal: "1 µV", extra: "RF receiver sensitivity benchmark level" },
      { fromVal: "0.00001 V", toVal: "10 µV", extra: "Evoked potential brainstem auditory response" },
      { fromVal: "0.00005 V", toVal: "50 µV", extra: "Standard human occipital EEG alpha rhythm signal" },
      { fromVal: "0.0001 V", toVal: "100 µV", extra: "Precision strain gauge bridge unbalance signal" },
      { fromVal: "0.001 V", toVal: "1,000 µV", extra: "1 Millivolt electrocardiogram (ECG) calibration wave" },
      { fromVal: "0.01 V", toVal: "10,000 µV", extra: "Piezoelectric vibration sensor output" },
      { fromVal: "0.1 V", toVal: "100,000 µV", extra: "Microphone preamplifier output level" },
      { fromVal: "1.0 V", toVal: "1,000,000 µV", extra: "1 Volt standard laboratory calibration reference" },
      { fromVal: "2.5 V", toVal: "2,500,000 µV", extra: "Precision Bandgap voltage reference IC output" },
      { fromVal: "5.0 V", toVal: "5,000,000 µV", extra: "TTL logic high-level threshold voltage" }
    ]
  },
  applications: {
    title: "Industry Applications of V to µV Conversion",
    items: [
      {
        title: "Neurophysiology & EEG Monitoring",
        text: "Electroencephalography records scalp electrical activity ranging from 10 µV to 100 µV. Converting digitizer data between volts and microvolts ensures accurate brainwave spectral analysis."
      },
      {
        title: "Radio Frequency Receiver Testing",
        text: "RF communication receiver sensitivity (e.g., -107 dBm across 50 Ω) corresponds to 1 µV RMS. Engineers convert test generator voltages to microvolts during signal-to-noise testing."
      },
      {
        title: "Semiconductor Noise Analysis",
        text: "Operational amplifier input offset voltage and 1/f noise spectral density are specified in microvolts (µV) or microvolts per root Hertz (µV/√Hz)."
      }
    ]
  },
  pitfalls: {
    title: "Common Conversion Pitfalls",
    items: [
      "Dividing by 1,000,000 instead of multiplying: Moving from a larger unit (V) to a smaller unit (µV) requires multiplying by 1,000,000.",
      "Confusing Microvolts (µV) with Millivolts (mV): 1 mV equals 1,000 µV; mistaking microvolts for millivolts introduces a 1,000-fold calculation error.",
      "Using 'uV' in formal documentation: While 'uV' is used in plain ASCII code, standard technical publishing requires the Greek symbol 'µV'."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts are in 1 Volt?",
      answer: "There are exactly 1,000,000 Microvolts in 1 Volt."
    },
    {
      question: "What is the formula to convert Volts to Microvolts?",
      answer: "The formula is: Microvolts = Volts × 1,000,000."
    },
    {
      question: "How many Microvolts is 0.001 Volts?",
      answer: "0.001 Volts (1 millivolt) equals 1,000 Microvolts."
    },
    {
      question: "What is 0.00005 V in Microvolts?",
      answer: "0.00005 Volts equals 50 Microvolts (0.00005 × 1,000,000 = 50 µV)."
    },
    {
      question: "Why is the symbol µV used for microvolts?",
      answer: "The symbol 'µ' is the Greek letter mu, which represents the SI metric prefix 'micro-' (10⁻⁶)."
    },
    {
      question: "How do I convert 5,000 µV to Volts?",
      answer: "Divide 5,000 by 1,000,000 to get 0.005 Volts."
    },
    {
      question: "Is EEG voltage measured in microvolts or millivolts?",
      answer: "Scalp EEG signals are extremely small and measured in microvolts (typically 10 µV to 100 µV)."
    },
    {
      question: "What is 1 Volt in scientific notation microvolts?",
      answer: "1 Volt is equal to 1 × 10⁶ µV."
    }
  ],
  relatedList: [
    { label: "Volt to Millivolt", from: "volt", to: "millivolt" },
    { label: "Volt to Kilovolt", from: "volt", to: "kilovolt" },
    { label: "Volt to Megavolt", from: "volt", to: "megavolt" },
    { label: "Millivolt to Volt", from: "millivolt", to: "volt" }
  ],
  references: [
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEEE Std 1100: IEEE Recommended Practice for Powering and Grounding Electronic Equipment.",
    "American Clinical Neurophysiology Society (ACNS) EEG Guidelines."
  ]
};
