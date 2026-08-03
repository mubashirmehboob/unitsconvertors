import { CustomArticleData } from "./types";

export const decibelToDecibelSpl: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "decibel-spl",
  seoTitle: "Decibel to Decibel SPL Converter (dB to dB SPL) | UnitsConvertors.com",
  metaDescription: "Convert generic Decibels to Decibels SPL (dB to dB SPL) with precision. Learn sound pressure level reference standards, 20 µPa baseline, acoustic measurement, formulas, and worked examples.",
  h1: "Decibel to Decibel SPL Converter",
  introduction: [
    "The decibel (dB) is a general logarithmic ratio unit used to compare physical quantities such as power, voltage, or sound pressure. However, in acoustic engineering and noise control, a decibel reading is meaningful only when tied to a specific physical reference baseline.",
    "Decibel SPL (Sound Pressure Level, symbol: dB SPL) is the dedicated acoustic unit that explicitly references the international standard threshold of human hearing: 20 micropascals (20 µPa = 2 × 10⁻⁵ Pa) measured at 1,000 Hz in air.",
    "When a decibel value represents airborne sound pressure level relative to 20 µPa, the conversion from dB to dB SPL is a 1:1 direct level mapping. This guide explains acoustic sound pressure level definitions, measurement techniques, microphone calibration, and environmental noise standards."
  ],
  quickAnswer: {
    text: "When converting a sound pressure level from general decibels (dB) to Decibels SPL (dB SPL), the numerical value remains identical (1 dB = 1 dB SPL) because dB SPL explicitly specifies the standard 20 µPa reference baseline.",
    formulaDisplay: "dB SPL = dB",
    subtext: "Explicitly defines acoustic sound pressure referenced to p₀ = 20 µPa (2 × 10⁻⁵ Pa)."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustics?",
    text: "In general physics, a decibel (dB) expresses a logarithmic ratio between two quantities. Without a specified suffix or reference value (like dBm, dBu, or dBV), a standalone 'dB' represents a relative level rather than an absolute sound pressure measurement."
  },
  aboutTargetUnit: {
    title: "Understanding Decibel SPL (dB SPL)",
    text: "Decibel SPL (Sound Pressure Level) is the official acoustic unit measuring sound pressure relative to p₀ = 20 micropascals (20 µPa). Defined as L_p = 20 log₁₀(p / p₀), 0 dB SPL corresponds to the quietest sound a healthy human ear can detect at 1 kHz."
  },
  relationship: "A sound level expressed in generic decibels (dB) maps directly 1:1 to dB SPL when the sound pressure reference p₀ is assumed to be 20 µPa. dB SPL specifies the physical reference that grounds relative decibels to absolute Pascals.",
  relationshipTitle: "Sound Level Reference Comparison",
  relationshipItems: [
    { label: "0 dB SPL", value: "20 µPa (0.00002 Pa / Human auditory threshold at 1 kHz)" },
    { label: "40 dB SPL", value: "2,000 µPa (0.002 Pa / Quiet residential neighborhood ambient)" },
    { label: "60 dB SPL", value: "20,000 µPa (0.02 Pa / Normal face-to-face conversation)" },
    { label: "94 dB SPL", value: "1,000,000 µPa (1.0 Pa / Standard sound calibrator reference)" },
    { label: "120 dB SPL", value: "20,000,000 µPa (20.0 Pa / Threshold of human pain)" }
  ],
  formula: {
    text: "For sound pressure level measurements in air, dB SPL equals the decibel reading referenced to 20 µPa.",
    math: "L_{p} \\text{ (dB SPL)} = L \\text{ (dB)}",
    subtext: "Derived from L_p = 20 log₁0(p / 20 µPa)."
  },
  formulaTitle: "Decibel to Decibel SPL Mapping Formula",
  practicalTip: {
    title: "Acoustician's Calibration Rule",
    text: "Sound level meters display 'dB' on screen, but unless weighted (like dBA or dBC), the unweighted sound pressure reading is formally dB SPL (Z-weighted)."
  },
  expertNote: {
    title: "ANSI S1.4 and IEC 61672 Sound Level Meter Standards",
    text: "Under IEC 61672-1 standards for Class 1 and Class 2 sound level meters, 'dB SPL' indicates flat/unweighted (dB Z) RMS sound pressure level referenced to 20 µPa."
  },
  examples: {
    title: "Step-by-Step dB to dB SPL Worked Examples",
    items: [
      {
        title: "Example 1: Recording Studio Ambient Noise Level",
        subtitle: "Convert an acoustic room noise level reading of 25 dB to dB SPL.",
        steps: [
          "Identify acoustic sound pressure measurement: 25 dB.",
          "Verify standard air sound reference baseline: p₀ = 20 µPa.",
          "Map 1:1 to dB SPL: 25 dB = 25 dB SPL.",
          "Final Result: The studio noise level is 25 dB SPL."
        ]
      },
      {
        title: "Example 2: Acoustic Calibrator Signal Audit",
        subtitle: "Convert a microphone calibration pressure level of 94 dB to dB SPL.",
        steps: [
          "Identify calibrator output level: 94 dB.",
          "Confirm reference acoustic pressure is 1.0 Pa (1,000,000 µPa).",
          "Apply formula: 94 dB = 94 dB SPL (equivalent to 1.0 Pa RMS pressure).",
          "Final Result: The calibrator output is 94 dB SPL."
        ]
      },
      {
        title: "Example 3: Industrial OSHA Workplace Safety Audit",
        subtitle: "Convert a factory floor continuous sound pressure reading of 88 dB to dB SPL.",
        steps: [
          "Identify unweighted workplace sound reading: 88 dB.",
          "Confirm baseline is referenced to 20 µPa.",
          "Map level: 88 dB = 88 dB SPL.",
          "Final Result: Workplace sound level is 88 dB SPL."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Decibel SPL Engineering Reference Table",
    headers: ["Decibels (dB)", "Decibels SPL (dB SPL)", "RMS Sound Pressure (Pascals)", "Acoustic Environment / Source"],
    rows: [
      { fromVal: "0 dB", toVal: "0 dB SPL", extra: "0.00002 Pa", extra2: "Human hearing threshold at 1 kHz" },
      { fromVal: "20 dB", toVal: "20 dB SPL", extra: "0.0002 Pa", extra2: "Quiet broadcast recording booth" },
      { fromVal: "40 dB", toVal: "40 dB SPL", extra: "0.002 Pa", extra2: "Quiet suburban bedroom at night" },
      { fromVal: "60 dB", toVal: "60 dB SPL", extra: "0.02 Pa", extra2: "Conversational speech at 1 meter" },
      { fromVal: "80 dB", toVal: "80 dB SPL", extra: "0.2 Pa", extra2: "Freight train passing at 15 meters" },
      { fromVal: "94 dB", toVal: "94 dB SPL", extra: "1.0 Pa", extra2: "Standard microphone calibrator tone" },
      { fromVal: "100 dB", toVal: "100 dB SPL", extra: "2.0 Pa", extra2: "Loud motorcycle at 5 meters" },
      { fromVal: "120 dB", toVal: "120 dB SPL", extra: "20.0 Pa", extra2: "Threshold of human physical pain" },
      { fromVal: "130 dB", toVal: "130 dB SPL", extra: "63.2 Pa", extra2: "Jet engine operation at 50 meters" },
      { fromVal: "194 dB", toVal: "194 dB SPL", extra: "101,325 Pa", extra2: "Theoretical max undistorted sound in air at 1 atm" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to dB SPL Conversion",
    items: [
      {
        title: "Audio Engineering & Studio Microphone Calibration",
        text: "Audio engineers use dB SPL to calibrate microphone sensitivity ratings (e.g. mV/Pa at 94 dB SPL) and monitor speaker listening levels in mixing rooms."
      },
      {
        title: "Occupational Safety & Noise Hearing Conservation",
        text: "OSHA and NIOSH regulatory compliance officers monitor workplace noise exposures in dB SPL to enforce permissible exposure limits (PEL) and prevent noise-induced hearing loss."
      },
      {
        title: "Environmental & Architectural Acoustics",
        text: "Acoustical consultants measure sound isolation performance (STC/DNT) and traffic noise propagation in terms of dB SPL."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Decibel and dB SPL Measurements",
    items: [
      "Confusing unweighted acoustic pressure (dB SPL / dB Z) with frequency-weighted curves like dBA or dBC.",
      "Assuming airborne sound pressure reference (20 µPa) applies to underwater acoustics (which uses 1 µPa reference).",
      "Adding dB SPL values linearly (e.g. 60 dB SPL + 60 dB SPL = 63 dB SPL, not 120 dB SPL).",
      "Mixing up sound pressure level (dB SPL) with sound power level (dB L_W)."
    ]
  },
  faqs: [
    {
      question: "Is 0 dB SPL complete silence?",
      answer: "No. 0 dB SPL corresponds to 20 micropascals of sound pressure, which is the average human threshold of hearing at 1 kHz. Sounds can be negative in dB SPL."
    },
    {
      question: "What is the difference between dB and dB SPL?",
      answer: "dB is a generic logarithmic ratio. dB SPL specifies that the ratio compares acoustic sound pressure in air to a reference of 20 micropascals."
    },
    {
      question: "What is 94 dB SPL equal to in Pascals?",
      answer: "94 dB SPL corresponds to exactly 1.0 Pascal (1 Pa RMS) of sound pressure."
    },
    {
      question: "What is the maximum sound pressure level in Earth's atmosphere?",
      answer: "In Earth's atmosphere at standard sea-level pressure (101.325 kPa), an undistorted sinusoidal sound wave reaches a theoretical maximum of 194 dB SPL."
    },
    {
      question: "Why is 20 micropascals chosen as the reference for dB SPL?",
      answer: "20 µPa was standardized because it represents the quietest 1,000 Hz sound detectable by a young adult with healthy hearing."
    },
    {
      question: "Are dB and dB SPL numerically identical?",
      answer: "Yes, when 'dB' refers to unweighted acoustic sound pressure level in air."
    },
    {
      question: "What sound level causes immediate hearing damage?",
      answer: "Unprotected exposure to sound levels above 120 dB SPL can cause immediate acoustic trauma or permanent hearing damage."
    },
    {
      question: "How do two equal sound sources combine in dB SPL?",
      answer: "Combining two identical incoherent sound sources increases the total sound pressure level by 3 dB SPL (e.g. 70 dB SPL + 70 dB SPL = 73 dB SPL)."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" },
    { label: "Decibel to Sound Pressure", from: "decibel", to: "sound-pressure" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "IEC 61672-1:2013 Electroacoustics — Sound level meters — Part 1: Specifications.",
    "ANSI/ASA S1.4-2014 American National Standard Specification for Sound Level Meters.",
    "ISO 1996-1:2016 Acoustics — Description, measurement and assessment of environmental noise."
  ]
};
