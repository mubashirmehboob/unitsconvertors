import { CustomArticleData } from "./types";

export const belToPascalSound: CustomArticleData = {
  fromUnitId: "bel",
  toUnitId: "pascal-sound",
  seoTitle: "Bel to Pascal (Sound) Converter (B to Pa) | UnitsConvertors.com",
  metaDescription: "Convert Bels to Pascals acoustic pressure (B to Pa) with scientific precision. Calculate sound pressure in Pascals using p = 20 µPa × 10^B with formulas and examples.",
  h1: "Bel to Pascal (Sound) Converter",
  introduction: [
    "In acoustics and audio engineering, sound level measurements can be expressed logarithmically in Bels (B) or directly as physical root-mean-square (RMS) acoustic pressure in Pascals (Pa). One bel represents an order of magnitude (10:1) power ratio. Because 1 Bel equals 10 decibels, converting sound level in bels to physical sound pressure in pascals uses the exponential equation p = p₀ × 10^B.",
    "The international standard reference sound pressure in air is p₀ = 20 micropascals (2.0 × 10⁻⁵ Pa), representing the nominal human hearing threshold at 1 kHz. On this scale, 0 Bels corresponds to 0.00002 Pa, 6 Bels (60 dB) equals 0.02 Pa, and 10 Bels (100 dB) equals 2.0 Pa.",
    "This guide provides exact logarithmic-to-linear conversion equations, physical acoustic reference thresholds, step-by-step worked examples, and conversion tables to convert bels to pascals."
  ],
  quickAnswer: {
    text: "To convert Bels to Pascals (Sound), use the exponential formula: p = 0.00002 × 10^B. For example, 6 Bels yields 0.02 Pascals of acoustic pressure.",
    formulaDisplay: "p (Pa) = 2.0 × 10⁻⁵ × 10^B",
    subtext: "Based on international reference pressure p₀ = 20 µPa (0.00002 Pa)."
  },
  aboutSourceUnit: {
    title: "What is a Bel (B in Acoustics)?",
    text: "The bel (symbol: B) is the base logarithmic unit introduced by Bell System engineers to express signal and sound ratios. One bel corresponds to a tenfold (10:1) power ratio or a √10 (~3.162:1) pressure ratio."
  },
  aboutTargetUnit: {
    title: "Understanding Pascal in Acoustics (Pa)",
    text: "The pascal (symbol: Pa) is the SI derived unit of pressure (1 N/m²). In acoustics, pascal measures RMS pressure oscillations caused by sound waves above and below static atmospheric pressure (~101,325 Pa)."
  },
  relationship: "Sound pressure level L_p in bels relates to sound pressure p in pascals via L_p = log₁₀(p / p₀) in power terms, or p = p₀ × 10^L_p when converting directly from bels to pressure, where p₀ = 20 µPa.",
  relationshipTitle: "Bel to Pascal Acoustic Pressure Mapping",
  relationshipItems: [
    { label: "0.0 B", value: "0.00002 Pa (20 µPa / human hearing threshold)" },
    { label: "4.0 B", value: "0.002 Pa (Quiet residential background)" },
    { label: "6.0 B", value: "0.02 Pa (Normal conversational speech)" },
    { label: "9.0 B", value: "0.6325 Pa (Heavy traffic / noisy industrial floor)" },
    { label: "12.0 B", value: "20.0 Pa (Threshold of physical ear discomfort)" }
  ],
  formula: {
    text: "Multiply the acoustic reference pressure p₀ (0.00002 Pa) by 10 raised to the power of B (bels).",
    math: "p = 2.0 × 10⁻⁵ × 10^B",
    subtext: "Where p is RMS sound pressure in pascals, and p₀ = 20 µPa."
  },
  formulaTitle: "Bel to Pascal Conversion Formula",
  practicalTip: {
    title: "Simple Exponential Rule",
    text: "Every 1 Bel increase multiplies physical sound pressure in pascals by 10. For instance, 4 B = 0.002 Pa, 5 B = 0.02 Pa, and 6 B = 0.2 Pa."
  },
  expertNote: {
    title: "ISO 80000-8 Coherent Logarithmic Quantities",
    text: "Under ISO 80000-8, L_p = lg(p/p₀) B. Because bel is the base logarithmic unit without the 'deci-' multiplier, the power of 10 directly equals the bel value."
  },
  examples: {
    title: "Step-by-Step Bel to Pascal Worked Calculations",
    items: [
      {
        title: "Example 1: Converting Spoken Speech (6 Bels) to Pascals",
        subtitle: "Calculate acoustic pressure in Pascals for a 6 Bel (60 dB) conversational voice.",
        steps: [
          "Identify sound level in bels: 6 B.",
          "Apply formula: p = 0.00002 × 10⁶.",
          "Calculate 10⁶ = 1,000.",
          "Multiply: 0.00002 × 1,000 = 0.02 Pa.",
          "Final Result: 6 Bels produces 0.02 Pascals of acoustic pressure."
        ]
      },
      {
        title: "Example 2: Industrial Workshop Machinery (9.5 Bels)",
        subtitle: "Find RMS pressure for an industrial machine noise reading of 9.5 Bels.",
        steps: [
          "Identify sound level in bels: 9.5 B.",
          "Apply formula: p = 0.00002 × 10^9.5.",
          "Calculate 10^9.5 ≈ 3,162,277.66.",
          "Multiply: 0.00002 × 3,162,277.66 ≈ 63.245 Pa / 10 = 3.162 Pa.",
          "Final Result: 9.5 Bels corresponds to approximately 3.162 Pascals."
        ]
      },
      {
        title: "Example 3: Acoustic Calibrator Signal (9.4 Bels)",
        subtitle: "Convert a microphone calibrator output of 9.4 Bels (94 dB) to pascals.",
        steps: [
          "Identify sound level: 9.4 B.",
          "Apply formula: p = 0.00002 × 10^4.7 (since 9.4 B = 94 dB / 20 = 4.7 exponent).",
          "Calculate 10^4.7 ≈ 50,118.72.",
          "Multiply: 0.00002 × 50,118.72 = 1.0 Pa.",
          "Final Result: 9.4 Bels equals 1.0 Pascal."
        ]
      }
    ]
  },
  table: {
    title: "Bel to Pascal Acoustic Pressure Reference Table",
    headers: ["Sound Level (Bels)", "Decibels (dB)", "Sound Pressure (Pa)", "Acoustic Context"],
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
    title: "Applications of Bel to Pascal Conversions",
    items: [
      {
        title: "IT Equipment Noise Emission Labeling",
        text: "ISO 9296 declares server and computer sound power levels in Bels, which engineers convert to physical Pascals for structural enclosure calculations."
      },
      {
        title: "Transducer Sensitivity Calibration",
        text: "Acoustic testing labs convert Bel levels to physical Pascals when evaluating hydrophones and test microphones."
      },
      {
        title: "Aeroacoustic Noise Analysis",
        text: "Aerospace engineers compute physical pressure amplitudes in pascals from acoustic wave measurements in Bels."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Bel to Pascal Calculation",
    items: [
      "Forgetting that 0 Bels corresponds to 0.00002 Pa (20 µPa) rather than 0 Pa.",
      "Confusing Bel sound power levels with Bel sound pressure levels."
    ]
  },
  faqs: [
    {
      question: "How do you convert Bels to Pascals?",
      answer: "Use the formula p = 0.00002 × 10^(B / 2 for field levels) or convert Bels to dB (B × 10) and calculate p = 0.00002 × 10^(dB / 20)."
    },
    {
      question: "What is 0 Bels in Pascals?",
      answer: "0 Bels corresponds to 0.00002 Pascals (20 micropascals)."
    },
    {
      question: "What is 6 Bels in Pascals?",
      answer: "6 Bels (60 dB) corresponds to 0.02 Pascals."
    },
    {
      question: "What is 9.4 Bels in Pascals?",
      answer: "9.4 Bels (94 dB) corresponds to exactly 1.0 Pascal."
    },
    {
      question: "Why does sound pressure increase tenfold every 2 Bels?",
      answer: "Because Bels represent power ratios (10 log₁₀). Pressure is proportional to the square root of power, so a 2 Bel increase multiplies pressure by 10."
    },
    {
      question: "What is 10 Bels in Pascals?",
      answer: "10 Bels (100 dB) corresponds to 2.0 Pascals."
    },
    {
      question: "Is Pascal an SI unit?",
      answer: "Yes, the Pascal (Pa) is the official SI derived unit of pressure."
    },
    {
      question: "What sound level in Bels corresponds to 20 Pascals?",
      answer: "20 Pascals corresponds to 12.0 Bels (120 dB SPL)."
    }
  ],
  relatedList: [
    { label: "Bel to Decibel", from: "bel", to: "decibel" },
    { label: "Bel to Decibel SPL", from: "bel", to: "decibel-spl" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "ISO 9296:2017 Acoustics — Declared noise emission values of IT equipment.",
    "Bies, D. A., & Hansen, C. H. (2009). Engineering Noise Control. Spon Press."
  ]
};
