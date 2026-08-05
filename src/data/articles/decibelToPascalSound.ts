import { CustomArticleData } from "./types";

export const decibelToPascalSound: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "pascal-sound",
  seoTitle: "Decibel to Pascal (Sound) Converter (dB to Pa) | UnitsConvertors.com",
  metaDescription: "Convert Decibels to Pascals acoustic pressure (dB to Pa) with scientific precision. Calculate sound pressure from decibels using p = 20 µPa × 10^(dB/20) with formulas and examples.",
  h1: "Decibel to Pascal (Sound) Converter",
  introduction: [
    "Sound waves traveling through air create microscopic rapid pressure fluctuations above and below ambient atmospheric pressure. In acoustics, sound pressure level is expressed logarithmically in decibels (dB), while the physical root-mean-square (RMS) pressure amplitude is measured directly in pascals (Pa) or micropascals (µPa).",
    "To convert a sound pressure level in decibels (dB SPL) to effective acoustic pressure in pascals, scientists and audio engineers use the exponential formula derived from the standardized hearing threshold p₀ = 20 micropascals (2.0 × 10⁻⁵ Pa). For instance, 0 dB corresponds to 0.00002 Pa, whereas a loud 100 dB sound produces 2.0 Pa of RMS sound pressure.",
    "This guide provides the exact logarithmic-to-linear conversion equations, acoustic reference thresholds, step-by-step worked examples, and comprehensive engineering tables to convert decibels into pascals."
  ],
  quickAnswer: {
    text: "To convert Decibels to Pascals (Sound), use the exponential formula: p = 0.00002 × 10^(dB / 20). For example, 90 dB corresponds to 0.6325 Pascals of RMS acoustic pressure.",
    formulaDisplay: "p (Pa) = 2.0 × 10⁻⁵ × 10^(dB / 20)",
    subtext: "Based on international acoustic reference pressure p₀ = 20 µPa (0.00002 Pa)."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB in Acoustics)?",
    text: "The decibel (symbol: dB) is a dimensionless logarithmic unit used to express sound pressure level relative to the human auditory threshold. By converting vast pressure ranges (from 0.00002 Pa to over 200 Pa) into a convenient 0–140 dB scale, decibels simplify acoustic engineering calculations."
  },
  aboutTargetUnit: {
    title: "Understanding Pascal in Acoustics (Pa)",
    text: "The pascal (symbol: Pa) is the SI derived unit of pressure, defined as one newton per square meter (1 N/m²). In acoustics, pascal measures the peak or RMS AC pressure fluctuation superimposed upon static atmospheric pressure (~101,325 Pa). Human hearing detects acoustic pressures as small as 0.00002 Pa (20 µPa)."
  },
  relationship: "The relationship between sound pressure level L_p in decibels and acoustic pressure p in pascals is governed by L_p = 20 log₁₀(p / p₀), where p₀ = 20 µPa. Reversing this formula yields p = p₀ × 10^(L_p / 20).",
  relationshipTitle: "Decibel to Pascal Sound Pressure Scale",
  relationshipItems: [
    { label: "0 dB", value: "0.00002 Pa (20 µPa / human hearing threshold)" },
    { label: "40 dB", value: "0.002 Pa (Quiet residential background)" },
    { label: "60 dB", value: "0.02 Pa (Normal conversational voice)" },
    { label: "90 dB", value: "0.6325 Pa (Heavy traffic / noisy industrial floor)" },
    { label: "120 dB", value: "20.0 Pa (Threshold of physical ear discomfort)" }
  ],
  formula: {
    text: "Multiply the acoustic reference pressure p₀ (0.00002 Pa) by 10 raised to the power of (dB / 20).",
    math: "p = 2.0 × 10⁻⁵ × 10^(dB / 20)",
    subtext: "Where p is RMS sound pressure in pascals, and p₀ = 20 µPa."
  },
  formulaTitle: "Decibel to Pascal Conversion Formula",
  practicalTip: {
    title: "The 20 dB Rule of Thumb",
    text: "Every 20 dB increase multiplies the acoustic pressure in pascals by exactly 10. For instance, 20 dB = 0.0002 Pa, 40 dB = 0.002 Pa, 60 dB = 0.02 Pa, 80 dB = 0.2 Pa, and 100 dB = 2.0 Pa."
  },
  expertNote: {
    title: "ISO 80000-8 Physical Acoustics Definition",
    text: "Under ISO 80000-8 specifications, sound pressure p refers strictly to the acoustic pressure component (total instantaneous pressure minus ambient static atmospheric pressure). The reference pressure p₀ = 20 µPa is universally adopted for airborne acoustics."
  },
  examples: {
    title: "Step-by-Step dB to Pascal Worked Calculations",
    items: [
      {
        title: "Example 1: Converting Normal Conversation (60 dB) to Pascals",
        subtitle: "Calculate the physical RMS acoustic pressure of a 60 dB spoken conversation.",
        steps: [
          "Identify sound pressure level: 60 dB.",
          "Apply formula: p = 0.00002 × 10^(60 / 20).",
          "Simplify exponent: 60 / 20 = 3.",
          "Calculate power of 10: 10³ = 1,000.",
          "Multiply: 0.00002 × 1,000 = 0.02 Pa.",
          "Final Result: 60 dB produces an acoustic pressure of 0.02 Pascals."
        ]
      },
      {
        title: "Example 2: Industrial Concert Speaker Output (110 dB)",
        subtitle: "Find the RMS pressure generated near a live concert loudspeaker at 110 dB.",
        steps: [
          "Identify sound level: 110 dB.",
          "Apply formula: p = 0.00002 × 10^(110 / 20).",
          "Simplify exponent: 110 / 20 = 5.5.",
          "Calculate 10^5.5 ≈ 316,227.77.",
          "Multiply: 0.00002 × 316,227.77 ≈ 6.3246 Pa.",
          "Final Result: 110 dB corresponds to approximately 6.325 Pascals."
        ]
      },
      {
        title: "Example 3: Studio Recording Noise Floor (26 dB)",
        subtitle: "Convert a ultra-quiet recording studio ambient floor of 26 dB to pascals.",
        steps: [
          "Identify noise level: 26 dB.",
          "Apply formula: p = 0.00002 × 10^(26 / 20) = 0.00002 × 10^1.3.",
          "Calculate 10^1.3 ≈ 19.9526.",
          "Multiply: 0.00002 × 19.9526 ≈ 0.000399 Pa.",
          "Final Result: 26 dB equals approximately 0.000399 Pascals (399 µPa)."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Pascal Acoustic Pressure Conversion Table",
    headers: ["Sound Level (dB)", "Sound Pressure (Pa)", "MicroPascals (µPa)", "Acoustic Context"],
    rows: [
      { fromVal: "0 dB", toVal: "0.00002 Pa", extra: "20 µPa", extra2: "Threshold of human hearing" },
      { fromVal: "20 dB", toVal: "0.0002 Pa", extra: "200 µPa", extra2: "Whisper in a quiet library" },
      { fromVal: "40 dB", toVal: "0.002 Pa", extra: "2,000 µPa", extra2: "Quiet urban residential night" },
      { fromVal: "60 dB", toVal: "0.02 Pa", extra: "20,000 µPa", extra2: "Normal conversational speech" },
      { fromVal: "80 dB", toVal: "0.2 Pa", extra: "200,000 µPa", extra2: "Loud traffic / food blender" },
      { fromVal: "94 dB", toVal: "1.0 Pa", extra: "1,000,000 µPa", extra2: "Microphone calibration reference (1 Pa)" },
      { fromVal: "100 dB", toVal: "2.0 Pa", extra: "2,000,000 µPa", extra2: "Pneumatic jackhammer at 1m" },
      { fromVal: "120 dB", toVal: "20.0 Pa", extra: "20,000,000 µPa", extra2: "Threshold of human ear discomfort" },
      { fromVal: "140 dB", toVal: "200.0 Pa", extra: "200,000,000 µPa", extra2: "Jet engine takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Applications of dB to Pascal Conversions",
    items: [
      {
        title: "Microphone Sensitivity & Transducer Design",
        text: "Microphone specifications cite sensitivity in millivolts per pascal (mV/Pa) at a 94 dB SPL (1.0 Pa) reference tone."
      },
      {
        title: "Building Acoustics & Structural Vibration",
        text: "Architectural acousticians convert sound pressure levels into physical Pascals to calculate acoustic forces acting on windows, partitions, and sound barrier walls."
      },
      {
        title: "Aeroacoustics & Compressible Flow Analysis",
        text: "Aerospace engineers use physical sound pressure amplitudes in pascals when auditing aerodynamic noise generated by aircraft wings and turbine blades."
      }
    ]
  },
  pitfalls: {
    title: "Common Errors in dB to Pascal Calculation",
    items: [
      "Dividing by 10 instead of 20 in the exponent (sound pressure is a field quantity using 20, whereas sound intensity uses 10).",
      "Forgetting that 0 dB does not mean 0 Pascals (0 dB corresponds to the reference baseline 0.00002 Pa).",
      "Confusing acoustic RMS sound pressure in Pascals with static ambient barometric pressure (~101,325 Pa)."
    ]
  },
  faqs: [
    {
      question: "How do you convert dB to Pascals?",
      answer: "Use the formula p = 0.00002 × 10^(dB / 20), where 0.00002 Pa is the reference threshold of hearing."
    },
    {
      question: "What is 94 dB in Pascals?",
      answer: "94 dB corresponds to exactly 1.0 Pascal of RMS sound pressure (0.00002 × 10^4.7 ≈ 1.0 Pa)."
    },
    {
      question: "Why does the formula use 20 in the exponent instead of 10?",
      answer: "Sound pressure is an amplitude (field) quantity. Since acoustic power is proportional to pressure squared (p²), logarithmic pressure levels use 20 log₁₀(p/p₀)."
    },
    {
      question: "What is 0 dB in Pascals?",
      answer: "0 dB corresponds to 0.00002 Pascals (20 micropascals)."
    },
    {
      question: "What sound level equals 20 Pascals?",
      answer: "20 Pascals of sound pressure corresponds to 120 dB SPL (the threshold of pain)."
    },
    {
      question: "Can sound pressure in Pascals be zero?",
      answer: "In a total vacuum where no air molecules exist, sound pressure is 0 Pa. In air, 0 Pa corresponds to logarithmic level minus infinity."
    },
    {
      question: "What is the microphone standard reference 1 Pa in dB?",
      answer: "1 Pascal of RMS sound pressure equals exactly 94 dB SPL."
    },
    {
      question: "How does 100 dB convert to Pascals?",
      answer: "100 dB corresponds to 0.00002 × 10^(100/20) = 0.00002 × 10⁵ = 2.0 Pascals."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, International Organization for Standardization.",
    "IEC 61672-1:2013 Electroacoustics — Sound level meters — Part 1: Specifications.",
    "Bies, D. A., & Hansen, C. H. (2009). Engineering Noise Control (4th ed.). Spon Press."
  ]
};
