import { CustomArticleData } from "./types";

export const kilovoltToMicrovolt: CustomArticleData = {
  fromUnitId: "kilovolt",
  toUnitId: "microvolt",
  seoTitle: "Kilovolt to Microvolt Converter (kV to µV)",
  metaDescription: "Convert Kilovolts to Microvolts (kV to µV) instantly. Learn the 1,000,000,000 ratio conversion formula, extreme voltage scale examples, reference tables, and FAQs.",
  h1: "Kilovolt to Microvolt Converter",
  introduction: [
    "In electrical engineering and scientific measurement, potential difference spans an enormous range—from kilovolts (kV) used in power distribution down to microvolts (µV) detected by sensitive instrumentation. Converting between Kilovolts (kV) and Microvolts (µV) bridges nine orders of magnitude (10⁹) across the SI metric voltage scale.",
    "Because one kilovolt equals 1,000 volts (10³ V) and one microvolt equals one-millionth of a volt (10⁻⁶ V), one kilovolt contains exactly 1,000,000,000 microvolts (one billion microvolts). Converting kilovolts to microvolts requires multiplying the kilovolt value by 1,000,000,000.",
    "This technical guide explains the mathematical conversion, high-ratio attenuation calculations, reference tables, noise-isolation practices, and answers to common instrumentation FAQs."
  ],
  quickAnswer: {
    text: "To convert Kilovolts to Microvolts, multiply the voltage value in Kilovolts by 1,000,000,000 (10⁹). For example, 0.001 kV equals 1,000,000 µV, and 1 kV equals 1,000,000,000 µV.",
    formulaDisplay: "µV = kV × 1,000,000,000",
    subtext: "1 Kilovolt is equal to exactly 1,000,000,000 Microvolts."
  },
  aboutSourceUnit: {
    title: "Kilovolt (kV) Scientific Overview",
    text: "The Kilovolt (symbol: kV) is an SI metric multiple equal to 1,000 volts (10³ V). It is the standard unit for expressing industrial motor line voltages, power grid distribution feeders, dielectric breakdown limits, and x-ray tube potentials."
  },
  aboutTargetUnit: {
    title: "Microvolt (µV) Scientific Overview",
    text: "The Microvolt (symbol: µV) is an SI submultiple equal to one-millionth of a volt (10⁻⁶ V). Microvolts are used to measure biological brainwaves (EEG), strain gauge bridge unbalance, radio receiver sensitivity, and low-noise operational amplifier drift."
  },
  relationship: "The metric relationship between kilovolts and microvolts spans nine decimal orders of magnitude: 1 kV = 1,000,000,000 µV (10⁹ µV), and 1 µV = 0.000000001 kV (10⁻⁹ kV).",
  relationshipTitle: "Kilovolt vs Microvolt Scale Ratios",
  relationshipItems: [
    { label: "0.000000001 kV", value: "1 µV (Low-noise amplifier threshold)" },
    { label: "0.000001 kV", value: "1,000 µV (1 Millivolt baseline potential)" },
    { label: "0.001 kV", value: "1,000,000 µV (1 Volt standard reference)" },
    { label: "0.012 kV", value: "12,000,000 µV (12 V DC automotive potential)" },
    { label: "1.0 kV", value: "1,000,000,000 µV (1 Kilovolt high-voltage standard)" }
  ],
  formula: {
    text: "Multiply the electrical potential in Kilovolts by 1,000,000,000 to determine the value in Microvolts.",
    math: "µV = kV × 1000000000",
    subtext: "To convert microvolts back to kilovolts, divide the microvolt value by 1,000,000,000."
  },
  formulaTitle: "Kilovolt to Microvolt Conversion Formula",
  practicalTip: {
    title: "Scientific Notation Rule",
    text: "Due to the large number of zeros, use scientific notation when performing multi-order unit conversions: 1 kV = 1 × 10⁹ µV, and 0.005 kV = 5 × 10⁶ µV."
  },
  expertNote: {
    title: "High-Ratio Attenuator Probes",
    text: "High-voltage oscilloscope probes (e.g., 1000:1 attenuators) reduce kilovolt input signals to millivolt or microvolt sampling levels so digital storage oscilloscopes can record fast transient waveforms safely."
  },
  examples: {
    title: "Step-by-Step Kilovolt to Microvolt Worked Examples",
    items: [
      {
        title: "Example 1: Signal Generator Reference Output",
        subtitle: "Convert a 0.001 kV generator signal output into Microvolts.",
        steps: [
          "Identify voltage in Kilovolts: 0.001 kV.",
          "Apply formula: µV = 0.001 × 1,000,000,000.",
          "Calculate: 0.001 × 1,000,000,000 = 1,000,000.",
          "Result: 0.001 Kilovolts equals 1,000,000 Microvolts."
        ]
      },
      {
        title: "Example 2: Low-Voltage Logic Rail",
        subtitle: "Convert a 0.0033 kV logic supply potential into Microvolts.",
        steps: [
          "Identify voltage: 0.0033 kV.",
          "Multiply by 1,000,000,000: 0.0033 × 1,000,000,000 = 3,300,000.",
          "Result: 0.0033 Kilovolts equals 3,300,000 µV."
        ]
      },
      {
        title: "Example 3: Automotive DC Bus Potential",
        subtitle: "Convert a 0.012 kV automotive battery potential into Microvolts.",
        steps: [
          "Identify voltage: 0.012 kV.",
          "Multiply by 1,000,000,000: 0.012 × 1,000,000,000 = 12,000,000.",
          "Result: 0.012 Kilovolts equals 12,000,000 µV."
        ]
      }
    ]
  },
  table: {
    title: "Kilovolt to Microvolt Conversion Table",
    headers: ["Kilovolts (kV)", "Microvolts (µV)", "Scientific Notation (µV)"],
    rows: [
      { fromVal: "0.000000001 kV", toVal: "1 µV", extra: "1 × 10⁰ µV" },
      { fromVal: "0.00000005 kV", toVal: "50 µV", extra: "5 × 10¹ µV" },
      { fromVal: "0.000001 kV", toVal: "1,000 µV", extra: "1 × 10³ µV (1 mV)" },
      { fromVal: "0.001 kV", toVal: "1,000,000 µV", extra: "1 × 10⁶ µV (1 V)" },
      { fromVal: "0.0033 kV", toVal: "3,300,000 µV", extra: "3.3 × 10⁶ µV (3.3 V)" },
      { fromVal: "0.005 kV", toVal: "5,000,000 µV", extra: "5 × 10⁶ µV (5 V)" },
      { fromVal: "0.012 kV", toVal: "12,000,000 µV", extra: "1.2 × 10⁷ µV (12 V)" },
      { fromVal: "0.12 kV", toVal: "120,000,000 µV", extra: "1.2 × 10⁸ µV (120 V)" },
      { fromVal: "0.48 kV", toVal: "480,000,000 µV", extra: "4.8 × 10⁸ µV (480 V)" },
      { fromVal: "1.0 kV", toVal: "1,000,000,000 µV", extra: "1 × 10⁹ µV (1 kV)" }
    ]
  },
  applications: {
    title: "Applications of kV to µV Conversion",
    items: [
      {
        title: "Substation Noise & Electromagnetic Compatibility (EMC)",
        text: "EMC compliance engineers measure high-frequency electromagnetic interference (EMI) radiation from 13.8 kV equipment in microvolts per meter (µV/m) using antenna transducers."
      },
      {
        title: "Calibration Laboratory Metrology",
        text: "National metrology institutes calibrate precision voltage dividers that step down 10 kV reference standards to microvolt levels for Josephson junction array verification."
      },
      {
        title: "High-Voltage Isolation Amplifier Design",
        text: "Isolation amplifiers designed for industrial motor drives process microvolt-level current shunt signals while withstanding multi-kilovolt common-mode transient voltages."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls When Converting kV to µV",
    items: [
      "Dividing by 1,000,000,000 instead of multiplying: Converting from a larger unit (kV) to a smaller unit (µV) requires multiplying by 10⁹.",
      "Miscounting zeros in long decimal strings: Always double-check zero counts or use scientific notation to avoid factor-of-10 or factor-of-100 errors.",
      "Confusing Microvolts (µV) with Millivolts (mV): 1 mV = 1,000 µV; microvolts are 1,000 times smaller than millivolts."
    ]
  },
  faqs: [
    {
      question: "How many Microvolts are in 1 Kilovolt?",
      answer: "There are exactly 1,000,000,000 (1 billion) Microvolts in 1 Kilovolt."
    },
    {
      question: "What is the formula to convert Kilovolts to Microvolts?",
      answer: "The formula is: Microvolts = Kilovolts × 1,000,000,000 (or kV × 10⁹)."
    },
    {
      question: "How many Microvolts is 0.001 kV?",
      answer: "0.001 Kilovolts (1 Volt) equals 1,000,000 Microvolts."
    },
    {
      question: "What is 1 kV in scientific notation Microvolts?",
      answer: "1 Kilovolt equals 1 × 10⁹ µV."
    },
    {
      question: "How do I convert Microvolts back to Kilovolts?",
      answer: "Divide the Microvolt value by 1,000,000,000 (or multiply by 10⁻⁹)."
    },
    {
      question: "How many Microvolts is 0.012 kV?",
      answer: "0.012 Kilovolts equals 12,000,000 Microvolts (12 million µV)."
    },
    {
      question: "Why are microvolts used in bio-potential measurements?",
      answer: "Biological signals like brainwaves (EEG) produce extremely weak ion flow currents across skin resistance, resulting in microvolt-level potential differences."
    },
    {
      question: "Is 'uV' the same as 'µV'?",
      answer: "Yes, 'uV' is an ASCII approximation of 'µV' used when the Greek letter mu (µ) is unavailable."
    }
  ],
  relatedList: [
    { label: "Volt to Microvolt", from: "volt", to: "microvolt" },
    { label: "Kilovolt to Volt", from: "kilovolt", to: "volt" },
    { label: "Kilovolt to Millivolt", from: "kilovolt", to: "millivolt" },
    { label: "Kilovolt to Megavolt", from: "kilovolt", to: "megavolt" }
  ],
  references: [
    "BIPM Le Système international d'unités (SI Brochure, 9th Edition).",
    "IEEE Std 100: Authoritative Dictionary of IEEE Standards Terms.",
    "NIST Special Publication 811: Guide for the Use of the International System of Units (SI)."
  ]
};
