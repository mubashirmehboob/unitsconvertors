import { CustomArticleData } from "./types";

export const pascalSoundToDecibelSpl: CustomArticleData = {
  fromUnitId: "pascal-sound",
  toUnitId: "decibel-spl",
  seoTitle: "Pascal (Sound) to Decibel SPL Converter | Pa to dB SPL",
  metaDescription: "Convert Pascal sound pressure to Decibel Sound Pressure Level (Pa to dB SPL). Learn the acoustic formula, reference baseline of 20 µPa, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/pascal-sound-to-decibel-spl",
  h1: "Pascal (Sound) to Decibel SPL Converter",
  introduction: [
    "Acoustic waves traveling through air create dynamic pressure fluctuations above and below the ambient atmospheric baseline. In laboratory transducer characterization, aerodynamic testing, and sensor physics, this dynamic acoustic force is measured linearly in pascals (Pa). However, the human auditory system detects sound across a vast amplitude span exceeding one to ten million, perceiving volume on a roughly logarithmic scale rather than a linear one.",
    "Decibel Sound Pressure Level (dB SPL) standardizes acoustic measurements by converting root-mean-square (RMS) sound pressure in pascals into a compact logarithmic scale. The scale is anchored to an internationally standardized reference sound pressure of 20 micropascals (0.00002 Pa in air), which represents the auditory threshold of acute human hearing at 1,000 Hz.",
    "Converting pascals of sound pressure to dB SPL enables acoustic engineers, audiologists, and environmental health officers to evaluate noise exposures, calibrate studio equipment, and predict auditory risk using standardized decibel ratings."
  ],
  quickAnswer: {
    text: "To convert Pascal (Sound) to Decibel SPL, divide the sound pressure in pascals by 0.00002 Pa, compute the base-10 logarithm, and multiply by 20. For instance, 1.0 Pascal of acoustic pressure equals approximately 93.98 dB SPL (standardized as 94 dB SPL).",
    formulaDisplay: "dB SPL = 20 × log₁₀(p / 0.00002)",
    subtext: "Where p is the RMS sound pressure in pascals and 0.00002 Pa (20 µPa) is the international reference pressure in air."
  },
  aboutSourceUnit: {
    title: "Understanding Pascal (Sound) (Pa)",
    text: "The pascal (symbol: Pa) is the International System of Units (SI) measure of pressure, defined as one newton of force applied perpendicular to an area of one square meter (1 N/m²). In acoustics, 'Pascal (Sound)' refers specifically to the effective or root-mean-square (RMS) alternating pressure produced by acoustic vibrations, excluding the steady static atmospheric pressure (approximately 101,325 Pa at sea level). Audible acoustic pressures range from 0.00002 Pa at the threshold of audibility up to 20 Pa at the threshold of physical discomfort."
  },
  aboutTargetUnit: {
    title: "Understanding Decibel Sound Pressure Level (dB SPL)",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is a logarithmic ratio expressing the magnitude of an acoustic pressure wave relative to 20 micropascals (20 µPa or 2 × 10⁻⁵ Pa) in air. Because it is a root-power or field quantity, the ratio is multiplied by 20 rather than 10. A level of 0 dB SPL marks the nominal threshold of human hearing, 94 dB SPL is the reference calibration point for measurement microphones, and levels above 120 dB SPL pose severe risk of immediate auditory fatigue or permanent damage."
  },
  relationship: "Sound pressure in pascals and sound pressure level in dB SPL are related by the logarithmic equation L_p = 20 log₁₀(p / p₀), where reference pressure p₀ equals 0.00002 Pa. Every tenfold increase in sound pressure adds exactly 20 dB SPL to the measured level, while doubling sound pressure increases the level by approximately 6.02 dB SPL.",
  relationshipTitle: "Acoustic Pressure to Decibel SPL Benchmarks",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "0.00 dB SPL (Nominal human hearing threshold)" },
    { label: "0.0002 Pa (200 µPa)", value: "20.00 dB SPL (Whisper, recording studio background)" },
    { label: "0.002 Pa (2 mPa)", value: "40.00 dB SPL (Quiet residential room, library)" },
    { label: "0.02 Pa (20 mPa)", value: "60.00 dB SPL (Normal conversational speech at 1 meter)" },
    { label: "0.2 Pa (200 mPa)", value: "80.00 dB SPL (Curbside urban traffic, vacuum cleaner)" },
    { label: "1.0 Pa (1,000 mPa)", value: "93.98 dB SPL (~94 dB SPL calibration tone)" },
    { label: "2.0 Pa", value: "100.00 dB SPL (Pneumatic drill at 3 meters)" },
    { label: "20.0 Pa", value: "120.00 dB SPL (Human threshold of acoustic discomfort)" },
    { label: "200.0 Pa", value: "140.00 dB SPL (Jet aircraft takeoff at 30 meters)" }
  ],
  formula: {
    text: "Divide the RMS sound pressure in pascals by the reference pressure of 0.00002 Pa, compute the common logarithm (base 10), and multiply the result by 20.",
    math: "dB SPL = 20 × log₁₀(p / 0.00002 Pa)",
    subtext: "For airborne sound according to ANSI S1.1 and ISO 1683 standards."
  },
  formulaTitle: "Mathematical Formula: Pa to dB SPL",
  practicalTip: {
    title: "The 20 dB per Decade Rule",
    text: "Whenever sound pressure multiplies by 10, add 20 dB SPL: 0.002 Pa = 40 dB SPL; 0.02 Pa = 60 dB SPL; 0.2 Pa = 80 dB SPL; 2 Pa = 100 dB SPL; 20 Pa = 120 dB SPL. When pressure doubles (a 2× factor), add approximately 6 dB SPL."
  },
  expertNote: {
    title: "Measurement Standards & Microphones",
    text: "IEC 61672 Class 1 acoustic sound level meters use 1.0 Pascal (94.0 dB SPL at 1 kHz) as the primary field calibration set point. An acoustic calibrator couples to a 1/2-inch condenser microphone to generate this precise pressure wave."
  },
  examples: {
    title: "Step-by-Step Conversion Examples",
    items: [
      {
        title: "Example 1: Converting 1.0 Pa Acoustic Calibrator Tone",
        subtitle: "Determine the dB SPL value for a standardized 1.0 Pascal test signal.",
        steps: [
          "State the acoustic pressure: p = 1.0 Pa.",
          "Identify the reference pressure: p₀ = 0.00002 Pa.",
          "Form the pressure ratio: 1.0 / 0.00002 = 50,000.",
          "Calculate the base-10 logarithm: log₁₀(50,000) ≈ 4.69897.",
          "Multiply by 20: 20 × 4.69897 = 93.9794 dB SPL.",
          "Final Result: 1.0 Pascal corresponds to 93.98 dB SPL (customarily rounded to 94 dB SPL)."
        ]
      },
      {
        title: "Example 2: Typical Office Noise (0.006325 Pa)",
        subtitle: "Convert moderate room ambient pressure to sound pressure level.",
        steps: [
          "State the acoustic pressure: p = 0.006325 Pa.",
          "Form the pressure ratio: 0.006325 / 0.00002 = 316.25.",
          "Compute log₁₀(316.25) ≈ 2.5000.",
          "Multiply by 20: 20 × 2.5000 = 50.00 dB SPL.",
          "Final Result: An acoustic pressure of 0.006325 Pa equals 50 dB SPL."
        ]
      },
      {
        title: "Example 3: Industrial Machinery Alarm (0.6325 Pa)",
        subtitle: "Find the dB SPL rating for an industrial machinery noise wave of 0.6325 Pa.",
        steps: [
          "State the acoustic pressure: p = 0.6325 Pa.",
          "Form the pressure ratio: 0.6325 / 0.00002 = 31,625.",
          "Compute log₁₀(31,625) ≈ 4.5000.",
          "Multiply by 20: 20 × 4.5000 = 90.00 dB SPL.",
          "Final Result: A sound pressure of 0.6325 Pa equals 90 dB SPL."
        ]
      }
    ]
  },
  table: {
    title: "Pascal (Sound) to Decibel SPL Reference Table",
    headers: ["Sound Pressure (Pa)", "Sound Pressure Level (dB SPL)", "Typical Environmental Context"],
    rows: [
      { fromVal: "0.00002 Pa", toVal: "0.00 dB SPL", extra: "Absolute human hearing threshold at 1 kHz" },
      { fromVal: "0.000063 Pa", toVal: "10.00 dB SPL", extra: "Calm breathing, quiet recording booth" },
      { fromVal: "0.0002 Pa", toVal: "20.00 dB SPL", extra: "Rustling leaves, faint whisper at 2 meters" },
      { fromVal: "0.000632 Pa", toVal: "30.00 dB SPL", extra: "Quiet suburban bedroom at midnight" },
      { fromVal: "0.002 Pa", toVal: "40.00 dB SPL", extra: "Public library study reading room" },
      { fromVal: "0.006325 Pa", toVal: "50.00 dB SPL", extra: "Quiet private office, moderate rainfall" },
      { fromVal: "0.02 Pa", toVal: "60.00 dB SPL", extra: "Normal spoken conversation at 1 meter" },
      { fromVal: "0.06325 Pa", toVal: "70.00 dB SPL", extra: "Busy restaurant, vacuum cleaner at 3 meters" },
      { fromVal: "0.2 Pa", toVal: "80.00 dB SPL", extra: "Curbside arterial traffic, garbage disposal" },
      { fromVal: "0.3557 Pa", toVal: "85.00 dB SPL", extra: "NIOSH 8-hour occupational action limit" },
      { fromVal: "0.6325 Pa", toVal: "90.00 dB SPL", extra: "Heavy lawnmower, diesel truck pass-by" },
      { fromVal: "1.0 Pa", toVal: "93.98 dB SPL", extra: "Microphone acoustic calibrator tone (~94 dB SPL)" },
      { fromVal: "2.0 Pa", toVal: "100.00 dB SPL", extra: "Pneumatic jackhammer, commercial concert" },
      { fromVal: "6.325 Pa", toVal: "110.00 dB SPL", extra: "Symphony orchestra crescendo, car horn at 1 meter" },
      { fromVal: "10.0 Pa", toVal: "113.98 dB SPL", extra: "Secondary microphone calibration tone (~114 dB SPL)" },
      { fromVal: "20.0 Pa", toVal: "120.00 dB SPL", extra: "Human threshold of acoustic discomfort" },
      { fromVal: "63.25 Pa", toVal: "130.00 dB SPL", extra: "Jet aircraft takeoff at 100 meters" },
      { fromVal: "200.0 Pa", toVal: "140.00 dB SPL", extra: "Threshold of immediate physical acoustic trauma" }
    ]
  },
  applications: {
    title: "Engineering & Occupational Applications",
    items: [
      {
        title: "Acoustic Transducer Calibration",
        text: "Translating voltage output and diaphragm deflection data from laboratory reference microphones into standardized dB SPL ratings."
      },
      {
        title: "Occupational Safety & Health (OSHA & NIOSH)",
        text: "Converting industrial pressure sensor readings into A-weighted or unweighted dB SPL values to monitor compliance with exposure limits."
      },
      {
        title: "Architectural & Building Acoustics",
        text: "Evaluating sound transmission loss through partition walls and HVAC duct systems by calculating incident vs transmitted dB SPL."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Sound Pressure Conversions",
    items: [
      "Using 10 log₁₀ instead of 20 log₁₀: Acoustic pressure is a field amplitude quantity, requiring a factor of 20, whereas acoustic power uses 10.",
      "Applying underwater acoustic standards: Marine acoustics uses a reference pressure of 1 µPa, which yields an answer 26 dB higher than the airborne 20 µPa standard.",
      "Confusing acoustic fluctuations with barometric pressure: Atmospheric air pressure is roughly 101,325 Pa, whereas acoustic waves represent minute dynamic fluctuations of 0.00002 to 20 Pa.",
      "Attempting to calculate the logarithm of zero: True silence (0 Pa) mathematically corresponds to negative infinity dB SPL; the practical reference baseline is 20 µPa."
    ]
  },
  faqs: [
    {
      question: "How many dB SPL is 1 Pascal of sound pressure?",
      answer: "1 Pascal of RMS sound pressure equals approximately 93.98 dB SPL. In commercial test instruments and calibration equipment, this is conventionally rounded and standardized as 94 dB SPL."
    },
    {
      question: "What is the reference pressure for dB SPL in air?",
      answer: "The international reference pressure for airborne sound is 20 micropascals (20 µPa, equal to 0.00002 Pa or 2 × 10⁻⁵ N/m²). This value represents the average human threshold of audibility at 1 kHz."
    },
    {
      question: "Why does the dB SPL formula multiply by 20 rather than 10?",
      answer: "Acoustic energy and power are proportional to the square of acoustic pressure (P ∝ p²). Expressing the power ratio logarithmically gives 10 × log₁₀(p² / p₀²), which simplifies by logarithmic rules to 20 × log₁₀(p / p₀)."
    },
    {
      question: "What sound pressure in pascals corresponds to 0 dB SPL?",
      answer: "A sound pressure of exactly 0.00002 Pascals (20 µPa) produces 0 dB SPL, representing the nominal baseline of human hearing."
    },
    {
      question: "Can dB SPL be a negative number?",
      answer: "Yes. Any sound pressure lower than the 20 µPa reference baseline produces a negative dB SPL value. For example, 0.000002 Pa (2 µPa) equals -20 dB SPL."
    },
    {
      question: "What sound pressure corresponds to normal conversation?",
      answer: "Normal conversational speech at a distance of 1 meter typically produces approximately 60 dB SPL, which equals an acoustic pressure of 0.02 Pascals (20 mPa)."
    },
    {
      question: "What pressure corresponds to the threshold of pain?",
      answer: "The human auditory threshold of pain begins around 120 dB SPL to 130 dB SPL, which corresponds to an RMS pressure of 20 to 63.2 Pascals."
    },
    {
      question: "How does a 6 dB SPL increase affect sound pressure in pascals?",
      answer: "An increase of approximately 6.02 dB SPL corresponds to an exact doubling of the sound pressure in pascals (a 2:1 linear pressure ratio)."
    }
  ],
  references: [
    "ISO 80000-8: Quantities and units — Part 8: Acoustics",
    "IEC 61672-1: Electroacoustics — Sound level meters — Part 1: Specifications",
    "ANSI/ASA S1.1: Acoustical Terminology Standards",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
