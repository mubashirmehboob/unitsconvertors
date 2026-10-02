import { CustomArticleData } from "./types";

export const soundPressureToBel: CustomArticleData = {
  fromUnitId: "sound-pressure",
  toUnitId: "bel",
  seoTitle: "Sound Pressure to Bel Converter | Pa to B",
  metaDescription: "Convert Sound Pressure to Bels (Pa to B) with scientific precision. Master the formula B = 2 log10(p / 0.00002), 1 Bel = 10 dB, worked examples, and acoustic tables.",
  canonicalUrl: "https://unitsconvertors.com/sound-pressure-to-bel",
  h1: "Sound Pressure to Bel Converter",
  introduction: [
    "Acoustic waves traveling through the atmosphere generate dynamic pressure variations above and below ambient atmospheric pressure. In scientific sensor measurement, dynamic pressure is recorded linearly in pascals (Pa or N/m²). To represent the wide range of audible amplitudes in a compact form, acoustic levels are expressed logarithmically in bels (B) or decibels (dB).",
    "The bel (symbol: B) is the primary base unit of logarithmic level ratios, originally formulated by Bell Telephone Laboratories and named in honor of Alexander Graham Bell. Because 1 bel equals exactly 10 decibels (1 B = 10 dB), acoustic sound levels in bels provide a convenient, single-digit or low-decimal notation widely adopted in computer hardware acoustic ratings (ISO 7779) and telecommunications engineering.",
    "Converting sound pressure in pascals to bels translates linear root-mean-square (RMS) acoustic pressure into standardized bel sound pressure levels referenced to 20 micropascals (0.00002 Pa in air). This guide details the logarithmic derivation, formulas, worked calculations, and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert Sound Pressure in pascals to Bels, divide the sound pressure by 0.00002 Pa, compute the common logarithm (base 10), and multiply by 2: B = 2 × log₁₀(p / 0.00002). For example, 1.0 Pascal of sound pressure equals approximately 9.40 Bels (specifically 9.398 B).",
    formulaDisplay: "B = 2 × log₁₀(p / 0.00002)",
    subtext: "Where p is the RMS sound pressure in pascals and 0.00002 Pa (20 µPa) is the reference pressure in air (1 Bel = 10 Decibels)."
  },
  aboutSourceUnit: {
    title: "Understanding Sound Pressure (p)",
    text: "Sound Pressure (symbol: p) is the dynamic, alternating component of local pressure exerted by a propagating sound wave, measured in pascals (Pa = 1 N/m²). Audible acoustic pressures in air extend across seven orders of magnitude, from 0.00002 Pa (20 µPa) at the human threshold of hearing, to 0.02 Pa (20 mPa) for normal conversation, up to 20 Pa (12 Bels) at the threshold of physical pain."
  },
  aboutTargetUnit: {
    title: "Understanding the Bel (B)",
    text: "The bel (symbol: B) is a dimensionless logarithmic unit expressing the ratio of a physical quantity to a specified reference value. Because 1 Bel equals exactly 10 decibels (1 B = 10 dB), acoustic levels in bels compress numbers into a manageable scale: 0 B marks the threshold of hearing, 6 B represents normal speech, 9.4 B is a standard 1 Pa calibrator tone, and 12 B represents the pain threshold."
  },
  relationship: "Sound pressure p (in pascals) and sound level in bels (B) are connected by the formula B = 2 log₁₀(p / p₀), where p₀ = 0.00002 Pa. Every tenfold increase in sound pressure adds exactly 2.0 Bels (20 dB) to the acoustic level, while doubling sound pressure increases the level by approximately 0.602 Bels.",
  relationshipTitle: "Sound Pressure to Bel Scale Benchmarks",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "0.00 B (Threshold of acute human hearing)" },
    { label: "0.0002 Pa (200 µPa)", value: "2.00 B (Faint whisper, quiet studio ambient)" },
    { label: "0.002 Pa (2 mPa)", value: "4.00 B (Quiet residential bedroom, library)" },
    { label: "0.02 Pa (20 mPa)", value: "6.00 B (Normal conversational speech at 1 meter)" },
    { label: "0.2 Pa (200 mPa)", value: "8.00 B (Curbside city traffic, noisy food processor)" },
    { label: "1.0 Pa (1,000 mPa)", value: "9.40 B (9.398 B / Standard 94 dB calibrator tone)" },
    { label: "2.0 Pa", value: "10.00 B (Pneumatic jackhammer at 3 meters)" },
    { label: "20.0 Pa", value: "12.00 B (Human threshold of auditory discomfort/pain)" },
    { label: "200.0 Pa", value: "14.00 B (Jet aircraft takeoff at 30 meters)" }
  ],
  formula: {
    text: "Divide sound pressure in pascals by 0.00002 Pa, compute the base-10 logarithm, and multiply by 2 (or calculate decibels and divide by 10).",
    math: "B = 2 × log₁₀(p / 0.00002) = dB / 10",
    subtext: "Where p is RMS acoustic pressure in pascals and reference pressure p₀ = 2.0 × 10⁻⁵ Pa."
  },
  formulaTitle: "Formula: Sound Pressure to Bel",
  practicalTip: {
    title: "Why Bels Multiply by 2 Instead of 20",
    text: "In decibels, field quantities multiply by 20: dB = 20 × log₁₀(p / p₀). Because 1 Bel equals 10 decibels, dividing the decibel expression by 10 yields B = (20 / 10) × log₁₀(p / p₀) = 2 × log₁₀(p / p₀)."
  },
  expertNote: {
    title: "Computer Hardware Acoustic Declarations (ISO 7779 / ECMA-74)",
    text: "Computer servers, desktop workstations, and fan manufacturers declare sound power emissions in bels (e.g., 4.2 B) rather than decibels to prevent confusion with sound pressure levels measured at user ear level."
  },
  examples: {
    title: "Step-by-Step Conversion Calculations",
    items: [
      {
        title: "Example 1: Acoustic Calibrator Tone (1.0 Pa)",
        subtitle: "Convert a 1.0 Pascal acoustic signal into Bels.",
        steps: [
          "Identify sound pressure: p = 1.0 Pa.",
          "Identify reference pressure: p₀ = 0.00002 Pa.",
          "Divide by reference pressure: 1.0 / 0.00002 = 50,000.",
          "Compute log₁₀(50,000) ≈ 4.69897.",
          "Multiply by 2: 2 × 4.69897 = 9.3979 B.",
          "Final Result: 1.0 Pascal equals approximately 9.40 Bels (9.398 B, or 93.98 dB)."
        ]
      },
      {
        title: "Example 2: Normal Conversational Speech (0.02 Pa)",
        subtitle: "Determine the Bel level for human speech at 0.02 Pa.",
        steps: [
          "Identify sound pressure: p = 0.02 Pa.",
          "Divide by p₀: 0.02 / 0.00002 = 1,000.",
          "Compute log₁₀(1,000) = 3.0.",
          "Multiply by 2: 2 × 3.0 = 6.0 B.",
          "Final Result: 0.02 Pascals equals exactly 6.0 Bels (60 dB)."
        ]
      },
      {
        title: "Example 3: Pain Threshold (20.0 Pa)",
        subtitle: "Calculate the Bel level for acoustic pressure at the threshold of pain.",
        steps: [
          "Identify sound pressure: p = 20.0 Pa.",
          "Divide by p₀: 20.0 / 0.00002 = 1,000,000.",
          "Compute log₁₀(1,000,000) = 6.0.",
          "Multiply by 2: 2 × 6.0 = 12.0 B.",
          "Final Result: 20.0 Pascals equals exactly 12.0 Bels (120 dB)."
        ]
      }
    ]
  },
  table: {
    title: "Sound Pressure (Pa) to Bel (B re 20 µPa) Reference Table",
    headers: ["Sound Pressure (Pa)", "Sound Level (Bels)", "Decibel Equivalent (dB)", "Environmental Context"],
    rows: [
      { fromVal: "0.00002 Pa", toVal: "0.00 B", extra: "0.0 dB", extra2: "Human hearing threshold at 1 kHz" },
      { fromVal: "0.000063 Pa", toVal: "1.00 B", extra: "10.0 dB", extra2: "Calm breathing, quiet recording booth" },
      { fromVal: "0.0002 Pa", toVal: "2.00 B", extra: "20.0 dB", extra2: "Faint whisper at 1 meter, leaves rustling" },
      { fromVal: "0.000632 Pa", toVal: "3.00 B", extra: "30.0 dB", extra2: "Quiet suburban bedroom at midnight" },
      { fromVal: "0.002 Pa", toVal: "4.00 B", extra: "40.0 dB", extra2: "Quiet library study room" },
      { fromVal: "0.006325 Pa", toVal: "5.00 B", extra: "50.0 dB", extra2: "Moderate rainfall, quiet commercial office" },
      { fromVal: "0.02 Pa", toVal: "6.00 B", extra: "60.0 dB", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "0.06325 Pa", toVal: "7.00 B", extra: "70.0 dB", extra2: "Busy restaurant dining area" },
      { fromVal: "0.2 Pa", toVal: "8.00 B", extra: "80.0 dB", extra2: "Curbside city traffic, noisy food blender" },
      { fromVal: "0.3557 Pa", toVal: "8.50 B", extra: "85.0 dB", extra2: "OSHA 8-hour occupational action limit" },
      { fromVal: "0.6325 Pa", toVal: "9.00 B", extra: "90.0 dB", extra2: "Heavy diesel truck pass-by at 10 meters" },
      { fromVal: "1.0 Pa", toVal: "9.40 B", extra: "93.98 dB", extra2: "Standard 94 dB microphone calibrator tone" },
      { fromVal: "2.0 Pa", toVal: "10.00 B", extra: "100.0 dB", extra2: "Pneumatic jackhammer at 3 meters" },
      { fromVal: "6.325 Pa", toVal: "11.00 B", extra: "110.0 dB", extra2: "Live rock concert, car horn at 1 meter" },
      { fromVal: "10.0 Pa", toVal: "11.40 B", extra: "113.98 dB", extra2: "Secondary 114 dB calibrator reference" },
      { fromVal: "20.0 Pa", toVal: "12.00 B", extra: "120.0 dB", extra2: "Human threshold of acoustic pain" },
      { fromVal: "63.25 Pa", toVal: "13.00 B", extra: "130.0 dB", extra2: "Pneumatic riveting hammer at operator ear" },
      { fromVal: "200.0 Pa", toVal: "14.00 B", extra: "140.0 dB", extra2: "Jet aircraft takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Engineering & IT Acoustic Applications",
    items: [
      {
        title: "IT Equipment Noise Standards (ISO 7779)",
        text: "Declaring declared sound emissions for rackmount servers, hard drives, and office printers in bels to ensure clear differentiation from room ambient decibels."
      },
      {
        title: "Telecommunication Signal Path Loss",
        text: "Utilizing original bel scaling in legacy telecommunications infrastructure modeling and audio transmission line calculations."
      },
      {
        title: "Industrial Machinery Specification",
        text: "Reporting sound power levels in bels in technical equipment documentation to facilitate comparison across European machinery directives."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes",
    items: [
      "Multiplying by 20 instead of 2: The factor of 20 applies to decibels; bels are ten times larger than decibels, so the multiplier is 20 / 10 = 2.",
      "Confusing Bels with decibels: Reporting an acoustic level as 60 B instead of 6 B represents a ten-billion-fold numerical error.",
      "Applying underwater acoustic baselines: Underwater references use 1 µPa, which produces bel values 2.6 B higher than airborne 20 µPa standards.",
      "Ignoring the root-mean-square (RMS) convention: Sound pressure must be an RMS value; using peak amplitude overstates the bel level by approximately 0.15 B."
    ]
  },
  faqs: [
    {
      question: "How many Bels is 1 Pascal of sound pressure?",
      answer: "1 Pascal of RMS sound pressure corresponds to approximately 9.398 Bels (commonly rounded to 9.40 B), which equals 93.98 decibels."
    },
    {
      question: "What is the formula to convert sound pressure in pascals to Bels?",
      answer: "The formula is: B = 2 × log₁₀(p / 0.00002), where p is the RMS sound pressure in pascals and 0.00002 Pa is the airborne reference pressure."
    },
    {
      question: "Why does the Bel formula multiply by 2 instead of 20?",
      answer: "Because 1 Bel equals 10 decibels (1 B = 10 dB). The decibel formula 20 × log₁₀(p / p₀) divided by 10 yields 2 × log₁₀(p / p₀)."
    },
    {
      question: "What Bel level corresponds to normal conversation?",
      answer: "Normal conversational speech at 1 meter has a sound pressure of approximately 0.02 Pascals, which equals exactly 6.0 Bels (60 dB)."
    },
    {
      question: "Where are Bels used today instead of decibels?",
      answer: "Bels are prominently used in IT hardware noise declarations under ISO 7779 and ECMA-74 for computer servers, disk drives, and cooling systems."
    },
    {
      question: "What is the human threshold of pain in Bels?",
      answer: "The threshold of auditory pain (20 Pascals of sound pressure) equals 12.0 Bels (120 dB)."
    },
    {
      question: "Can an acoustic level in Bels be negative?",
      answer: "Yes. Any sound pressure lower than the 20 µPa reference baseline produces a negative Bel value (e.g., 0.000002 Pa equals -2.0 Bels)."
    },
    {
      question: "How does a 1 Bel increase affect sound pressure in pascals?",
      answer: "An increase of 1 Bel (10 dB) multiplies the sound pressure by √10 ≈ 3.162. An increase of 2 Bels (20 dB) multiplies the sound pressure by exactly 10."
    }
  ],
  references: [
    "ISO 80000-8: Quantities and units — Part 8: Acoustics",
    "ISO 7779: Acoustics — Measurement of airborne noise emitted by information technology and telecommunications equipment",
    "ECMA-74: Measurement of Airborne Noise emitted by Information Technology and Telecommunications Equipment",
    "IEEE Standard 260.1: Standard Letter Symbols for Units of Measurement"
  ]
};
