import { CustomArticleData } from "./types";

export const belToSoundPressure: CustomArticleData = {
  fromUnitId: "bel",
  toUnitId: "sound-pressure",
  seoTitle: "Bel to Sound Pressure Converter (B to Pa) | UnitsConvertors.com",
  metaDescription: "Convert Bels to Sound Pressure in Pascals (B to Pa) with scientific accuracy. Learn acoustic field pressure scaling, 20 µPa reference baselines, formulas, and examples.",
  h1: "Bel to Sound Pressure Converter",
  introduction: [
    "Sound pressure measures the local dynamic pressure variation above and below static atmospheric pressure caused by acoustic wave propagation. While European noise standards and equipment declarations express sound emission logarithmically in Bels (B), physical transducer engineering requires evaluating sound pressure directly in Pascals (Pa).",
    "Because 1 Bel equals 10 decibels, converting sound pressure level in Bels to physical RMS sound pressure in Pascals follows the equation p = p₀ × 10^(10B / 20) = p₀ × 10^(0.5B), where p₀ = 20 micropascals (0.00002 Pa). On this logarithmic-to-linear scale, 6.0 Bels corresponds to 0.02 Pa, and 9.4 Bels equals 1.0 Pa.",
    "This guide explains the physical principles governing acoustic pressure, logarithmic-to-linear conversion equations, practical sound pressure benchmarks, and step-by-step worked examples."
  ],
  quickAnswer: {
    text: "To convert Bels to Sound Pressure in Pascals, calculate: p = 0.00002 × 10^(0.5 × B). For example, 8 Bels yields 0.2 Pascals of sound pressure.",
    formulaDisplay: "p (Pa) = 0.00002 × 10^(0.5 × B)",
    subtext: "Based on international reference pressure p₀ = 20 µPa."
  },
  aboutSourceUnit: {
    title: "What is a Bel (B)?",
    text: "The bel (symbol: B) is the fundamental logarithmic unit created by Bell System engineers to quantify power ratios. One bel corresponds to an order of magnitude (10:1) power ratio or a 10 dB level."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Pressure (Pa)",
    text: "Sound pressure (symbol: p) is the RMS dynamic pressure fluctuation caused by acoustic waves, measured in Pascals (Pa). One Pascal equals one Newton per square meter (1 N/m²)."
  },
  relationship: "Sound pressure level in Bels relates to physical sound pressure p in pascals through L_p = 2 log₁₀(p / p₀) in field terms (or 0.1 × 20 log₁₀(p/p₀)). Inverting yields p = p₀ × 10^(0.5 × B), with p₀ = 20 µPa.",
  relationshipTitle: "Bel to Sound Pressure Mapping",
  relationshipItems: [
    { label: "0.0 B", value: "0.00002 Pa (20 µPa / threshold of hearing)" },
    { label: "4.0 B", value: "0.002 Pa (Quiet residential background)" },
    { label: "6.0 B", value: "0.02 Pa (Normal spoken conversational voice)" },
    { label: "9.4 B", value: "1.0 Pa (Acoustic calibrator reference)" },
    { label: "12.0 B", value: "20.0 Pa (Threshold of physical ear discomfort)" }
  ],
  formula: {
    text: "Multiply the baseline acoustic reference pressure p₀ (0.00002 Pa) by 10 raised to the power of (0.5 × B).",
    math: "p = 0.00002 × 10^(0.5 × B)",
    subtext: "Where p is sound pressure in pascals, and p₀ = 0.00002 Pa."
  },
  formulaTitle: "Bel to Sound Pressure Conversion Formula",
  practicalTip: {
    title: "Every 2 Bels Multiplies Pressure by 10",
    text: "Because sound pressure is a field amplitude quantity, every 2 Bels (20 dB) increase multiplies physical sound pressure in Pascals by exactly 10."
  },
  expertNote: {
    title: "ISO 80000-8 Field Quantity Rules",
    text: "Under ISO 80000-8 specifications, sound pressure is a field quantity. Converting Bels to pressure involves using the 0.5 multiplier in the exponent because power is proportional to pressure squared (p²)."
  },
  examples: {
    title: "Step-by-Step Bel to Sound Pressure Worked Examples",
    items: [
      {
        title: "Example 1: Office Computer Noise Emission (5.0 Bels)",
        subtitle: "Convert a declared computer fan noise level of 5.0 Bels to sound pressure in Pascals.",
        steps: [
          "Identify sound level in bels: 5.0 B.",
          "Apply formula: p = 0.00002 × 10^(0.5 × 5.0).",
          "Calculate exponent: 0.5 × 5.0 = 2.5.",
          "Compute 10^2.5 ≈ 316.2277.",
          "Multiply: 0.00002 × 316.2277 ≈ 0.006325 Pa.",
          "Final Result: 5.0 Bels yields approximately 0.006325 Pascals."
        ]
      },
      {
        title: "Example 2: Industrial Compressor Output (8.0 Bels)",
        subtitle: "Find sound pressure in Pascals for an industrial compressor reading 8.0 Bels.",
        steps: [
          "Identify sound level: 8.0 B.",
          "Apply formula: p = 0.00002 × 10^(0.5 × 8.0) = 0.00002 × 10⁴.",
          "Calculate 10⁴ = 10,000.",
          "Multiply: 0.00002 × 10,000 = 0.2 Pa.",
          "Final Result: 8.0 Bels corresponds to 0.2 Pascals."
        ]
      },
      {
        title: "Example 3: Stadium PA Horn Output (11.0 Bels)",
        subtitle: "Calculate sound pressure in Pascals for a stadium PA horn at 11.0 Bels.",
        steps: [
          "Identify sound level: 11.0 B.",
          "Apply formula: p = 0.00002 × 10^(0.5 × 11.0) = 0.00002 × 10^5.5.",
          "Compute 10^5.5 ≈ 316,227.77.",
          "Multiply: 0.00002 × 316,227.77 ≈ 6.3245 Pa.",
          "Final Result: 11.0 Bels yields approximately 6.3245 Pascals."
        ]
      }
    ]
  },
  table: {
    title: "Bel to Sound Pressure Conversion Reference Table",
    headers: ["Sound Level (Bels)", "Decibels (dB)", "Sound Pressure (Pa)", "Environmental Acoustic Context"],
    rows: [
      { fromVal: "0.0 B", toVal: "0 dB", extra: "0.00002 Pa", extra2: "Threshold of human hearing" },
      { fromVal: "2.0 B", toVal: "20 dB", extra: "0.0002 Pa", extra2: "Whisper in a quiet bedroom" },
      { fromVal: "4.0 B", toVal: "40 dB", extra: "0.002 Pa", extra2: "Quiet residential living room" },
      { fromVal: "6.0 B", toVal: "60 dB", extra: "0.02 Pa", extra2: "Normal spoken conversation" },
      { fromVal: "8.0 B", toVal: "80 dB", extra: "0.2 Pa", extra2: "Busy city traffic street" },
      { fromVal: "9.4 B", toVal: "94 dB", extra: "1.0 Pa", extra2: "Standard microphone calibration (1 Pa)" },
      { fromVal: "10.0 B", toVal: "100 dB", extra: "2.0 Pa", extra2: "Pneumatic jackhammer at 1m" },
      { fromVal: "12.0 B", toVal: "120 dB", extra: "20.0 Pa", extra2: "Threshold of human ear discomfort" }
    ]
  },
  applications: {
    title: "Applications of Bel to Sound Pressure Conversion",
    items: [
      {
        title: "ISO 9296 IT Equipment Noise Declarations",
        text: "Computer hardware manufacturers report sound power levels in Bels, which audio engineers convert into Pascals to model office acoustic environments."
      },
      {
        title: "Building Partition Acoustic Insulation",
        text: "Architectural acousticians analyze structural transmission loss by converting Bel noise levels into physical acoustic pressure."
      },
      {
        title: "Transducer Test Calibration",
        text: "Acoustic labs evaluate test microphone sensitivity against standardized Bel acoustic signals."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Forgetting the 0.5 multiplier in the exponent when converting Bels directly to pressure.",
      "Confusing sound pressure in Pascals with sound intensity in Watts per square meter."
    ]
  },
  faqs: [
    {
      question: "How do you convert Bels to Sound Pressure in Pascals?",
      answer: "Use the formula p = 0.00002 × 10^(0.5 × B), where B is the sound level in Bels."
    },
    {
      question: "What is 6 Bels in Pascals?",
      answer: "6 Bels corresponds to 0.02 Pascals (20,000 µPa)."
    },
    {
      question: "What is 8 Bels in Pascals?",
      answer: "8 Bels corresponds to 0.2 Pascals (200,000 µPa)."
    },
    {
      question: "Why is 0.5 used in the exponent for Bels to pressure?",
      answer: "Because 1 Bel equals 10 dB, and pressure conversion uses dB/20. Therefore, (10 × B) / 20 = 0.5 × B."
    },
    {
      question: "What sound level in Bels corresponds to 1 Pascal?",
      answer: "1.0 Pascal corresponds to 9.4 Bels (94 dB)."
    },
    {
      question: "What is 10 Bels in Pascals?",
      answer: "10 Bels corresponds to 2.0 Pascals."
    },
    {
      question: "What is 0 Bels in Pascals?",
      answer: "0 Bels corresponds to 0.00002 Pascals (20 µPa)."
    },
    {
      question: "Is Sound Pressure in Pascals scalar or vector?",
      answer: "Sound pressure is a scalar field quantity."
    }
  ],
  relatedList: [
    { label: "Bel to Decibel", from: "bel", to: "decibel" },
    { label: "Bel to Decibel SPL", from: "bel", to: "decibel-spl" },
    { label: "Decibel to Sound Pressure", from: "decibel", to: "sound-pressure" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "ISO 9296:2017 Acoustics — Declared noise emission values of IT equipment.",
    "Bies, D. A., & Hansen, C. H. (2009). Engineering Noise Control. Spon Press."
  ]
};
