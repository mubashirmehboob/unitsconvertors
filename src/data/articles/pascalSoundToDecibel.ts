import { CustomArticleData } from "./types";

export const pascalSoundToDecibel: CustomArticleData = {
  fromUnitId: "pascal-sound",
  toUnitId: "decibel",
  seoTitle: "Pascal (Sound) to Decibel Converter (Pa to dB) | UnitsConvertors.com",
  metaDescription: "Convert Pascal acoustic pressure to Decibels (Pa to dB) with scientific accuracy. Master the dB = 20 log10(p / 20 µPa) formula, hearing baselines, worked examples, and tables.",
  h1: "Pascal (Sound) to Decibel Converter",
  introduction: [
    "Sound in air travels as dynamic acoustic pressure fluctuations superimposed on static atmospheric pressure. In scientific sensor measurement, microphone laboratory testing, and fluid dynamics simulations, acoustic pressure is measured linearly in pascals (Pa or N/m²). However, because human hearing responds logarithmically over a dynamic range of more than 10,000,000 to 1, acoustic levels are universally reported in decibels (dB re 20 µPa).",
    "Converting sound pressure in pascals to decibels allows researchers and engineers to translate linear mechanical pressure wave amplitudes into standard sound pressure levels (dB SPL). The conversion utilizes the international auditory reference baseline of 20 micropascals (p₀ = 2.0 × 10⁻⁵ Pa), which defines 0 dB.",
    "This guide explains the logarithmic derivation, mathematical formulas, step-by-step conversion examples, microphone calibration standards, and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert Pascal (Sound) to Decibels, use the formula: dB = 20 × log₁₀(p / 0.00002). For example, a sound pressure of 1.0 Pascal (1 Pa) equals approximately 94 dB (exact: 93.98 dB re 20 µPa).",
    formulaDisplay: "dB = 20 × log₁₀(p / 0.00002)",
    subtext: "Where p is RMS acoustic pressure in pascals (Pa) and p₀ = 0.00002 Pa (20 µPa in air)."
  },
  aboutSourceUnit: {
    title: "What is Pascal (Sound) (Pa)?",
    text: "The pascal (symbol: Pa) is the SI derived unit of pressure, defined as one newton per square meter (1 N/m²). In acoustics, 'Pascal (Sound)' refers to the root-mean-square (RMS) dynamic pressure deviation caused by an acoustic wave. Audible airborne sound pressures range from 0.00002 Pa (hearing threshold) to 20 Pa (pain threshold) and up to 200 Pa near jet engines."
  },
  aboutTargetUnit: {
    title: "Understanding the Decibel (dB) in Acoustics",
    text: "The decibel (symbol: dB) is a dimensionless logarithmic unit expressing the ratio of a physical quantity to a specified reference level. In airborne acoustics, 'dB' without qualification denotes sound pressure level referenced to 20 micropascals (20 µPa), matching 0 dB to the human threshold of hearing at 1 kHz."
  },
  relationship: "The relationship between sound pressure p (in pascals) and sound level L_p (in decibels) is governed by the base-10 logarithmic equation L_p = 20 log₁₀(p / p₀), where p₀ = 20 µPa = 0.00002 Pa. Every tenfold increase in sound pressure adds exactly 20 dB to the decibel level.",
  relationshipTitle: "Pascal Sound Pressure to Decibel Scale",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "0 dB (Auditory threshold of human hearing)" },
    { label: "0.0002 Pa (200 µPa)", value: "20 dB (Rustling leaves, quiet whisper)" },
    { label: "0.002 Pa (2 mPa)", value: "40 dB (Quiet library, residential bedroom)" },
    { label: "0.02 Pa (20 mPa)", value: "60 dB (Normal conversational speech at 1 m)" },
    { label: "0.2 Pa (200 mPa)", value: "80 dB (Loud alarm clock, curbside traffic)" },
    { label: "1.0 Pa (1,000 mPa)", value: "93.98 dB (~94 dB / standard acoustic calibrator)" },
    { label: "2.0 Pa", value: "100 dB (Pneumatic jackhammer, dance club)" },
    { label: "20.0 Pa", value: "120 dB (Threshold of acoustic discomfort and pain)" },
    { label: "200.0 Pa", value: "140 dB (Jet aircraft takeoff at 30 m / acoustic trauma)" }
  ],
  formula: {
    text: "Divide the sound pressure in pascals by 0.00002 Pa, take the base-10 logarithm, and multiply by 20.",
    math: "dB = 20 × log₁₀(p / 0.00002)",
    subtext: "Where p is RMS acoustic pressure in pascals and reference pressure p₀ = 2.0 × 10⁻⁵ Pa."
  },
  formulaTitle: "Pascal (Sound) to Decibel Formula",
  practicalTip: {
    title: "The 20 dB Rule for Pressure Decades",
    text: "Moving the decimal place of sound pressure by one position (a factor of 10) adds exactly 20 dB: 0.002 Pa = 40 dB, 0.02 Pa = 60 dB, 0.2 Pa = 80 dB, 2 Pa = 100 dB, 20 Pa = 120 dB."
  },
  expertNote: {
    title: "Microphone Sensitivity: dBV/Pa to dB SPL",
    text: "Microphone sensitivity is standardized against 1 Pascal of sound pressure (94 dB SPL). A microphone with a sensitivity of -38 dBV/Pa outputs 12.6 mV RMS when subjected to a 1 Pa (94 dB) acoustic tone at 1 kHz."
  },
  examples: {
    title: "Step-by-Step Pascal to Decibel Worked Examples",
    items: [
      {
        title: "Example 1: Converting 1.0 Pascal (Calibrator Tone) to Decibels",
        subtitle: "Calculate the decibel sound pressure level for a 1 Pa acoustic calibrator.",
        steps: [
          "Identify sound pressure: p = 1.0 Pa.",
          "Divide by reference pressure: 1.0 / 0.00002 = 50,000.",
          "Calculate base-10 logarithm: log₁₀(50,000) ≈ 4.69897.",
          "Multiply by 20: 20 × 4.69897 = 93.9794 dB.",
          "Final Result: 1.0 Pascal produces 93.98 dB (commonly standardized as 94 dB)."
        ]
      },
      {
        title: "Example 2: Conversational Speech (0.02 Pa) to Decibels",
        subtitle: "Find the decibel level for an RMS pressure of 0.02 Pascals.",
        steps: [
          "Identify sound pressure: p = 0.02 Pa.",
          "Divide by p₀: 0.02 / 0.00002 = 1,000.",
          "Compute log₁₀(1,000) = 3.",
          "Multiply by 20: 20 × 3 = 60 dB.",
          "Final Result: 0.02 Pascals equals exactly 60 dB."
        ]
      },
      {
        title: "Example 3: Pain Threshold (20.0 Pa) to Decibels",
        subtitle: "Calculate the decibel rating for a sound wave exerting 20 Pascals of pressure.",
        steps: [
          "Identify sound pressure: p = 20.0 Pa.",
          "Divide by p₀: 20.0 / 0.00002 = 1,000,000.",
          "Compute log₁₀(1,000,000) = 6.",
          "Multiply: 20 × 6 = 120 dB.",
          "Final Result: 20.0 Pascals equals exactly 120 dB."
        ]
      }
    ]
  },
  table: {
    title: "Pascal (Sound) to Decibel (dB re 20 µPa) Reference Table",
    headers: ["Sound Pressure (Pa)", "Level in Decibels (dB)", "Everyday Acoustic Context & Sensation"],
    rows: [
      { fromVal: "0.00002 Pa (20 µPa)", toVal: "0.00 dB", extra: "Threshold of human hearing at 1 kHz" },
      { fromVal: "0.000063 Pa", toVal: "10.00 dB", extra: "Calm breathing, quiet anechoic room" },
      { fromVal: "0.0002 Pa", toVal: "20.00 dB", extra: "Quiet whisper, rustling autumn leaves" },
      { fromVal: "0.000632 Pa", toVal: "30.00 dB", extra: "Quiet bedroom at night, rural ambient" },
      { fromVal: "0.002 Pa (2 mPa)", toVal: "40.00 dB", extra: "Quiet library study hall, suburban home" },
      { fromVal: "0.006325 Pa", toVal: "50.00 dB", extra: "Moderate rainfall, quiet commercial office" },
      { fromVal: "0.02 Pa (20 mPa)", toVal: "60.00 dB", extra: "Normal spoken conversation at 1 meter" },
      { fromVal: "0.06325 Pa", toVal: "70.00 dB", extra: "Busy restaurant, passenger car interior" },
      { fromVal: "0.2 Pa (200 mPa)", toVal: "80.00 dB", extra: "Curbside city traffic, noisy food blender" },
      { fromVal: "0.3557 Pa", toVal: "85.00 dB", extra: "OSHA 8-hour hearing conservation threshold" },
      { fromVal: "0.6325 Pa", toVal: "90.00 dB", extra: "Heavy diesel truck at 10 m, lawnmower" },
      { fromVal: "1.0 Pa (1,000 mPa)", toVal: "93.98 dB", extra: "Standard microphone acoustic calibrator (94 dB)" },
      { fromVal: "2.0 Pa", toVal: "100.00 dB", extra: "Pneumatic jackhammer, nightclub dance floor" },
      { fromVal: "6.325 Pa", toVal: "110.00 dB", extra: "Live amplified concert, car horn at 1 m" },
      { fromVal: "10.0 Pa", toVal: "113.98 dB", extra: "Secondary calibrator level (114 dB tone)" },
      { fromVal: "20.0 Pa", toVal: "120.00 dB", extra: "Human threshold of acoustic pain, ambulance siren" },
      { fromVal: "63.25 Pa", toVal: "130.00 dB", extra: "Pneumatic riveter at operator ear" },
      { fromVal: "200.0 Pa", toVal: "140.00 dB", extra: "Jet aircraft at 30 m (immediate acoustic trauma)" }
    ]
  },
  applications: {
    title: "Industry Applications of Pascal to Decibel Conversions",
    items: [
      {
        title: "Aeroacoustic & Wind Tunnel Testing",
        text: "Translating piezoelectric pressure sensor data on aircraft wings and automotive bodies into aerodynamic noise decibel spectrums."
      },
      {
        title: "Microphone Transducer Characterization",
        text: "Converting microphone diaphragm pressure loads into standard decibel sound pressure levels (dB SPL) for sensitivity calibration."
      },
      {
        title: "Environmental & Industrial Noise Compliance",
        text: "Converting raw sound sensor pressure recordings into standard OSHA/NIOSH occupational exposure decibel levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Pascal to Decibel Conversions",
    items: [
      "Using 10 log₁₀ instead of 20 log₁₀ (sound pressure is a field quantity, not a power quantity).",
      "Using an underwater acoustic reference (1 µPa) instead of the airborne standard (20 µPa).",
      "Confusing acoustic AC pressure oscillations (pascals) with total barometric ambient atmospheric pressure (101,325 Pa).",
      "Forgetting that 0 Pa cannot be evaluated in a logarithm (it yields negative infinity dB; the practical minimum is the 20 µPa baseline)."
    ]
  },
  faqs: [
    {
      question: "How many decibels is 1 Pascal of sound pressure?",
      answer: "1 Pascal of sound pressure equals approximately 93.98 dB (commonly rounded and standardized as 94 dB re 20 µPa)."
    },
    {
      question: "What is the formula to convert pascals into decibels?",
      answer: "The formula is: dB = 20 × log₁₀(p / 0.00002), where p is the root-mean-square (RMS) sound pressure in pascals."
    },
    {
      question: "Why is 20 micropascals used as the reference pressure in air?",
      answer: "20 micropascals (0.00002 Pa) represents the quietest sound pressure amplitude that can be detected by an average young adult with healthy hearing at 1 kHz."
    },
    {
      question: "What decibel level corresponds to 0.02 Pascals?",
      answer: "0.02 Pascals corresponds to exactly 60 dB, which is typical of normal conversational speech at a distance of 1 meter."
    },
    {
      question: "How many pascals represent the human threshold of pain?",
      answer: "The human threshold of acoustic pain occurs around 120 dB to 130 dB, which corresponds to 20 to 63.2 Pascals RMS."
    },
    {
      question: "Why do we multiply by 20 instead of 10 in the decibel formula?",
      answer: "Because sound pressure is a field amplitude quantity and sound power is proportional to pressure squared (P ∝ p²), 10 × log₁₀(p² / p₀²) simplifies mathematically to 20 × log₁₀(p / p₀)."
    },
    {
      question: "Can sound pressure in pascals yield a negative decibel value?",
      answer: "Yes. Any sound pressure lower than 0.00002 Pa (20 µPa) produces a negative decibel value. For example, 0.000002 Pa yields -20 dB."
    },
    {
      question: "What is the relationship between pascals and micropascals?",
      answer: "1 Pascal (Pa) equals exactly 1,000,000 micropascals (µPa). Therefore, 20 µPa equals 0.00002 Pa."
    }
  ]
};
