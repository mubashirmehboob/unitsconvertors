import { CustomArticleData } from "./types";

export const decibelSplToPascalSound: CustomArticleData = {
  fromUnitId: "decibel-spl",
  toUnitId: "pascal-sound",
  seoTitle: "Decibel SPL to Pascal (Sound) Converter (dB SPL to Pa) | UnitsConvertors.com",
  metaDescription: "Convert Decibel Sound Pressure Level to Pascals acoustic pressure (dB SPL to Pa) with scientific precision. Learn the p = 20 µPa × 10^(dB/20) formula, acoustic thresholds, and examples.",
  h1: "Decibel SPL to Pascal (Sound) Converter",
  introduction: [
    "Acoustic sound waves propagate through the atmosphere as rapid oscillatory compression and rarefaction cycles. In acoustics and environmental noise control, sound levels are commonly stated logarithmically in decibel sound pressure level (dB SPL), whereas the actual physical root-mean-square (RMS) acoustic pressure is measured linearly in pascals (Pa) or micropascals (µPa).",
    "Converting dB SPL to pascals allows acousticians, transducer designers, and structural engineers to determine the real physical force exerted by sound waves on microphone diaphragms, building facades, and the human eardrum. Because the decibel scale is logarithmic, converting dB SPL to pascals requires an exponential formula based on the standardized auditory reference pressure of 20 micropascals (p₀ = 2.0 × 10⁻⁵ Pa).",
    "This guide provides the complete physical derivation, mathematical formulas, step-by-step calculation examples, acoustic reference comparisons, and comprehensive conversion tables."
  ],
  quickAnswer: {
    text: "To convert Decibel SPL to Pascals (Sound), use the formula: p = 2.0 × 10⁻⁵ × 10^(dB SPL / 20). For example, a 94 dB SPL calibrator tone produces exactly 1.0 Pascal (1 Pa) of RMS acoustic pressure.",
    formulaDisplay: "p (Pa) = 0.00002 × 10^(dB SPL / 20)",
    subtext: "Where p₀ = 20 µPa (0.00002 Pa) is the internationally standardized hearing threshold."
  },
  aboutSourceUnit: {
    title: "What is Decibel SPL (dB SPL)?",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is a logarithmic measure of root-mean-square sound pressure relative to the standard airborne reference threshold p₀ = 20 µPa (2.0 × 10⁻⁵ Pa). Governed by ISO 80000-8, 0 dB SPL corresponds to the quietest sound audible to an average human ear at 1 kHz, while 120 dB SPL to 140 dB SPL indicates the threshold of pain and immediate acoustic trauma."
  },
  aboutTargetUnit: {
    title: "Understanding Pascal (Sound) (Pa)",
    text: "The pascal (symbol: Pa) is the SI derived unit of pressure, defined as one newton of force per square meter (1 N/m²). In acoustics, 'Pascal (Sound)' refers specifically to the dynamic AC pressure wave deviation superimposed on static ambient atmospheric pressure (~101,325 Pa). Human auditory detection spans an immense pressure range from 0.00002 Pa (hearing threshold) to over 200 Pa (jet engine proximity)."
  },
  relationship: "The relationship between decibel sound pressure level L_p and physical sound pressure p in pascals is given by L_p = 20 log₁₀(p / p₀). Inverting this equation yields the exponential relationship: p = p₀ × 10^(L_p / 20), where p₀ = 0.00002 Pa.",
  relationshipTitle: "Decibel SPL to Pascal Pressure Scale",
  relationshipItems: [
    { label: "0 dB SPL", value: "0.00002 Pa (20 µPa / hearing threshold)" },
    { label: "40 dB SPL", value: "0.002 Pa (Quiet living room / library)" },
    { label: "60 dB SPL", value: "0.02 Pa (Normal spoken conversation)" },
    { label: "74 dB SPL", value: "0.1 Pa (Busy restaurant / passenger car interior)" },
    { label: "94 dB SPL", value: "1.0 Pa (Standard microphone calibrator tone)" },
    { label: "114 dB SPL", value: "10.0 Pa (Loud rock concert / secondary calibrator level)" },
    { label: "120 dB SPL", value: "20.0 Pa (Threshold of acoustic pain)" },
    { label: "134 dB SPL", value: "100.0 Pa (Pneumatic riveting hammer / siren proximity)" }
  ],
  formula: {
    text: "Multiply the acoustic reference baseline p₀ (0.00002 Pa) by 10 raised to the power of (dB SPL / 20).",
    math: "p = 2.0 × 10⁻⁵ × 10^(dB SPL / 20)",
    subtext: "Where p is RMS acoustic pressure in pascals (Pa) and dB SPL is the input sound level."
  },
  formulaTitle: "Decibel SPL to Pascal Conversion Formula",
  practicalTip: {
    title: "The 20 dB Decoupling Rule (Factor of 10)",
    text: "In acoustics, every 20 dB SPL increase multiplies the physical pressure in pascals by exactly 10. For example: 34 dB SPL = 0.01 Pa, 54 dB SPL = 0.1 Pa, 74 dB SPL = 1.0 Pa (approx.), and 94 dB SPL = 1.0 Pa (exact)."
  },
  expertNote: {
    title: "The 94 dB SPL Acoustic Calibration Benchmark",
    text: "Standard acoustic field calibrators (IEC 60942 Class 1 and Class 2) emit a pure 1,000 Hz sine wave at exactly 94.0 dB SPL because 94.0 dB SPL corresponds precisely to 1.0000 Pascal RMS of sound pressure (p = 0.00002 × 10^(94/20) = 1.002 Pa ≈ 1.00 Pa)."
  },
  examples: {
    title: "Step-by-Step dB SPL to Pascal Worked Calculations",
    items: [
      {
        title: "Example 1: Converting 94 dB SPL Calibration Tone to Pascals",
        subtitle: "Determine the exact RMS pressure produced by an acoustic microphone calibrator.",
        steps: [
          "Identify sound level: 94 dB SPL.",
          "Apply conversion formula: p = 0.00002 × 10^(94 / 20).",
          "Calculate exponent: 94 / 20 = 4.7.",
          "Compute power of 10: 10^4.7 ≈ 50,118.72.",
          "Multiply by reference pressure: 0.00002 × 50,118.72 ≈ 1.00237 Pa.",
          "Final Result: 94 dB SPL corresponds to 1.00 Pa of RMS sound pressure."
        ]
      },
      {
        title: "Example 2: Spoken Conversation (60 dB SPL) to Pascals",
        subtitle: "Calculate the physical acoustic pressure of conversational speech.",
        steps: [
          "Identify sound level: 60 dB SPL.",
          "Apply formula: p = 0.00002 × 10^(60 / 20).",
          "Simplify exponent: 60 / 20 = 3.",
          "Compute power: 10³ = 1,000.",
          "Multiply: 0.00002 × 1,000 = 0.02 Pa.",
          "Final Result: 60 dB SPL equals exactly 0.02 Pascals (20 mPa)."
        ]
      },
      {
        title: "Example 3: Heavy Industrial Press (100 dB SPL)",
        subtitle: "Find the physical pressure wave exerted on workers' ears.",
        steps: [
          "Identify input level: 100 dB SPL.",
          "Divide by 20: 100 / 20 = 5.",
          "Calculate power of 10: 10⁵ = 100,000.",
          "Multiply by p₀: 0.00002 × 100,000 = 2.0 Pa.",
          "Final Result: 100 dB SPL equals 2.0 Pascals of sound pressure."
        ]
      }
    ]
  },
  table: {
    title: "Decibel SPL to Pascal (Sound) Conversion Table",
    headers: ["Sound Level (dB SPL)", "Sound Pressure (Pa)", "Environmental Reference & Magnitude"],
    rows: [
      { fromVal: "0 dB SPL", toVal: "0.00002 Pa", extra: "20 µPa - Threshold of human hearing at 1 kHz" },
      { fromVal: "20 dB SPL", toVal: "0.00020 Pa", extra: "200 µPa - Quiet whisper, rustling autumn leaves" },
      { fromVal: "40 dB SPL", toVal: "0.00200 Pa", extra: "2 mPa - Quiet bedroom at night, library study room" },
      { fromVal: "50 dB SPL", toVal: "0.00632 Pa", extra: "6.32 mPa - Quiet residential office, gentle rain" },
      { fromVal: "60 dB SPL", toVal: "0.02000 Pa", extra: "20 mPa - Normal conversational voice at 1 meter" },
      { fromVal: "70 dB SPL", toVal: "0.06325 Pa", extra: "63.25 mPa - Passenger car interior at 100 km/h" },
      { fromVal: "80 dB SPL", toVal: "0.20000 Pa", extra: "200 mPa - Curbside of busy urban street, loud alarm" },
      { fromVal: "85 dB SPL", toVal: "0.35566 Pa", extra: "355.66 mPa - OSHA 8-hour occupational noise action limit" },
      { fromVal: "90 dB SPL", toVal: "0.63246 Pa", extra: "632.46 mPa - Heavy diesel truck at 10 m, lawnmower" },
      { fromVal: "94 dB SPL", toVal: "1.00237 Pa", extra: "1.002 Pa (≈ 1 Pa) - Standard microphone calibrator" },
      { fromVal: "100 dB SPL", toVal: "2.00000 Pa", extra: "2,000 mPa (2 Pa) - Pneumatic jackhammer, dance club" },
      { fromVal: "110 dB SPL", toVal: "6.32456 Pa", extra: "6.325 Pa - Live amplified rock concert, chainsaw" },
      { fromVal: "114 dB SPL", toVal: "10.0237 Pa", extra: "10.02 Pa (≈ 10 Pa) - Secondary calibrator reference point" },
      { fromVal: "120 dB SPL", toVal: "20.0000 Pa", extra: "20 Pa - Human threshold of acoustic pain, ambulance siren" },
      { fromVal: "130 dB SPL", toVal: "63.2456 Pa", extra: "63.25 Pa - Pneumatic rivet gun, airport tarmac" },
      { fromVal: "140 dB SPL", toVal: "200.000 Pa", extra: "200 Pa - Jet engine takeoff at 30 m (immediate trauma)" }
    ]
  },
  applications: {
    title: "Industry Applications of Decibel SPL to Pascal Conversions",
    items: [
      {
        title: "Microphone Sensitivity & Calibration",
        text: "Testing microphone capsule voltage output per pascal of acoustic force (specified in mV/Pa) under IEC 61094 standards."
      },
      {
        title: "Structural Acoustics & Building Isolation",
        text: "Calculating dynamic mechanical surface loads and structural vibration caused by intense sound pressure fields on building facades."
      },
      {
        title: "Loudspeaker Transducer Modeling",
        text: "Simulating diaphragm displacement, voice coil force, and acoustic radiating impedance in speaker cabinet design."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Decibel SPL to Pascal Conversions",
    items: [
      "Using 10 log₁₀ instead of 20 log₁₀ (forgetting that sound pressure is a field quantity, not an energy/power quantity).",
      "Confusing static barometric air pressure (~101.3 kPa) with dynamic acoustic pressure oscillations (0.00002 to 20 Pa).",
      "Assuming linear scaling (e.g., believing 80 dB SPL has twice the pressure of 40 dB SPL instead of 100 times).",
      "Forgetting to multiply the power of 10 by the 20 µPa reference constant."
    ]
  },
  faqs: [
    {
      question: "Why do we use decibels instead of pascals for sound measurements?",
      answer: "Human hearing detects sound pressures spanning six orders of magnitude—from 0.00002 Pa to over 200 Pa. Expressing this vast dynamic range on a linear scale of pascals is unwieldy, whereas the logarithmic decibel scale compresses it into a manageable range of 0 to 140 dB SPL."
    },
    {
      question: "What is the exact reference pressure p₀ for sound in air?",
      answer: "The international standard reference pressure p₀ for airborne sound is 20 micropascals (20 µPa), which equals 0.00002 Pa or 2.0 × 10⁻⁵ N/m². It corresponds to the average auditory threshold of young adults at 1,000 Hz."
    },
    {
      question: "How many pascals equal 94 dB SPL?",
      answer: "Exactly 94 dB SPL corresponds to 1.0 Pascal (1.002 Pa) of RMS sound pressure. This is why 94 dB SPL at 1 kHz is chosen as the universal calibration standard for sound level meters."
    },
    {
      question: "Does 120 dB SPL equal double the pressure of 60 dB SPL in pascals?",
      answer: "No. Because the decibel scale is logarithmic, a 60 dB difference represents a 1,000-fold increase in acoustic pressure. 60 dB SPL equals 0.02 Pa, while 120 dB SPL equals 20.0 Pa (1,000 times greater pressure)."
    },
    {
      question: "Is acoustic sound pressure the same as atmospheric barometric pressure?",
      answer: "No. Atmospheric barometric pressure is a massive static pressure (about 101,325 Pa at sea level). Acoustic sound pressure consists of microscopic, rapid AC oscillations around this static baseline (typically 0.00002 Pa to 20 Pa)."
    },
    {
      question: "What is the formula to convert pascals back into dB SPL?",
      answer: "To convert acoustic pressure in pascals back to dB SPL, use: L_p = 20 × log₁₀(p / 0.00002)."
    },
    {
      question: "How do microphone sensitivity ratings use pascals?",
      answer: "Microphone sensitivity is standardized as the open-circuit output voltage (in millivolts) generated when exposed to a 1 Pascal acoustic pressure field at 1 kHz (94 dB SPL), typically specified in mV/Pa or dBV/Pa."
    },
    {
      question: "What happens to the pressure in pascals when sound level drops by 6 dB?",
      answer: "A decrease of 6 dB SPL reduces the physical acoustic pressure in pascals by approximately half (50% reduction). Conversely, an increase of 6 dB SPL doubles the sound pressure."
    }
  ]
};
