import { CustomArticleData } from "./types";

export const pascalSoundToBel: CustomArticleData = {
  fromUnitId: "pascal-sound",
  toUnitId: "bel",
  seoTitle: "Pascal (Sound) to Bel Converter (Pa to B) | UnitsConvertors.com",
  metaDescription: "Convert Pascal acoustic pressure to Bels (Pa to B) with scientific precision. Master the B = 2 log10(p / 20 µPa) formula, acoustics, worked examples, and tables.",
  h1: "Pascal (Sound) to Bel Converter",
  introduction: [
    "Acoustic pressure measurements in fluid dynamics, microphone testing, and aeroacoustic research are captured linearly in pascals (Pa). However, telecommunications engineering and equipment sound power standards (such as ISO 7779 and ECMA-74 for computing machinery) express acoustic levels using the bel (B).",
    "Because the bel represents a base-10 logarithmic ratio where 1 Bel equals 10 Decibels (1 B = 10 dB), converting linear sound pressure in pascals to bels requires combining the acoustic reference pressure baseline (20 micropascals, p₀ = 2.0 × 10⁻⁵ Pa) with logarithmic scaling. The resulting formula is B = 2 × log₁₀(p / 0.00002).",
    "This guide explains the mathematical derivation, conversion formulas, step-by-step calculation examples, IT hardware acoustic rating standards, and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "To convert Pascal (Sound) to Bels, use the formula: B = 2 × log₁₀(p / 0.00002). For example, 1.0 Pascal of sound pressure produces approximately 9.40 Bels (B) of sound level.",
    formulaDisplay: "B = 2 × log₁₀(p / 0.00002)",
    subtext: "Where p is RMS sound pressure in pascals and reference pressure p₀ = 20 µPa (0.00002 Pa in air)."
  },
  aboutSourceUnit: {
    title: "What is Pascal (Sound) (Pa)?",
    text: "The pascal (symbol: Pa) is the SI derived unit of pressure (1 N/m²). In physical acoustics, 'Pascal (Sound)' quantifies the root-mean-square (RMS) pressure wave oscillation in air relative to static atmospheric pressure. Audible sound pressures range from 0.00002 Pa at the threshold of hearing to 20 Pa at the threshold of physical pain."
  },
  aboutTargetUnit: {
    title: "Understanding the Bel (B)",
    text: "The bel (symbol: B) is the fundamental dimensionless logarithmic unit named in honor of Alexander Graham Bell. 1 bel represents an order-of-magnitude (10-fold) increase in acoustic power or energy. Computer hardware noise standards (such as ISO 7779 and Blue Angel eco-labels) routinely report declared acoustic sound power levels (LWAd) in bels."
  },
  relationship: "The decibel sound pressure level is L_p (dB) = 20 log₁₀(p / p₀). Because 1 Bel equals 10 Decibels (B = dB / 10), dividing the decibel equation by 10 yields the bel formula: B = 2 log₁₀(p / p₀), where p₀ = 0.00002 Pa. Every tenfold increase in sound pressure adds exactly 2.0 Bels to the acoustic level.",
  relationshipTitle: "Pascal Sound Pressure to Bel Scale",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "0.0 B (Threshold of human hearing)" },
    { label: "0.0002 Pa (200 µPa)", value: "2.0 B (Whispering, quiet recording booth)" },
    { label: "0.002 Pa (2 mPa)", value: "4.0 B (Quiet library study area)" },
    { label: "0.02 Pa (20 mPa)", value: "6.0 B (Conversational speech at 1 meter)" },
    { label: "0.2 Pa (200 mPa)", value: "8.0 B (Curbside city traffic, food blender)" },
    { label: "1.0 Pa (1,000 mPa)", value: "9.4 B (Standard microphone calibrator / 94 dB)" },
    { label: "2.0 Pa", value: "10.0 B (Pneumatic jackhammer, dance club)" },
    { label: "20.0 Pa", value: "12.0 B (Human threshold of acoustic pain)" }
  ],
  formula: {
    text: "Divide the sound pressure in pascals by 0.00002 Pa, take the base-10 logarithm, and multiply by 2.",
    math: "B = 2 × log₁₀(p / 0.00002)",
    subtext: "Where p is RMS acoustic pressure in pascals and reference pressure p₀ = 2.0 × 10⁻⁵ Pa."
  },
  formulaTitle: "Pascal (Sound) to Bel Conversion Formula",
  practicalTip: {
    title: "The 2 Bel Rule per Decade of Pressure",
    text: "Because B = 2 log₁₀(p / p₀), every 10-fold increase in sound pressure (one decade) adds exactly 2.0 Bels to the sound level: 0.002 Pa = 4.0 B, 0.02 Pa = 6.0 B, 0.2 Pa = 8.0 B, 2.0 Pa = 10.0 B, 20.0 Pa = 12.0 B."
  },
  expertNote: {
    title: "ISO 7779 IT Equipment Noise Standards",
    text: "Under ISO 7779 and ECMA-74, declared sound power levels for server racks, hard disk drives, and cooling fans are specified in bels (B) rather than decibels to eliminate consumer confusion between total acoustic power output (in bels) and local sound pressure (in dB SPL)."
  },
  examples: {
    title: "Step-by-Step Pascal to Bel Worked Calculations",
    items: [
      {
        title: "Example 1: Converting 1.0 Pascal (Calibrator Output) to Bels",
        subtitle: "Determine the acoustic level in bels for a 1.0 Pa reference pressure.",
        steps: [
          "Identify sound pressure: p = 1.0 Pa.",
          "Divide by reference pressure: 1.0 / 0.00002 = 50,000.",
          "Calculate base-10 logarithm: log₁₀(50,000) ≈ 4.69897.",
          "Multiply by 2: 2 × 4.69897 = 9.39794 B.",
          "Final Result: 1.0 Pascal corresponds to 9.40 Bels (B)."
        ]
      },
      {
        title: "Example 2: Conversational Voice (0.02 Pa) to Bels",
        subtitle: "Find the acoustic level in bels for normal speech.",
        steps: [
          "Identify sound pressure: p = 0.02 Pa.",
          "Divide by p₀: 0.02 / 0.00002 = 1,000.",
          "Compute log₁₀(1,000) = 3.",
          "Multiply by 2: 2 × 3 = 6.0 B.",
          "Final Result: 0.02 Pascals equals exactly 6.0 Bels (B)."
        ]
      },
      {
        title: "Example 3: Industrial Machinery (2.0 Pa) to Bels",
        subtitle: "Calculate the bel rating for a 2.0 Pascal acoustic pressure wave.",
        steps: [
          "Identify sound pressure: p = 2.0 Pa.",
          "Divide by p₀: 2.0 / 0.00002 = 100,000.",
          "Compute log₁₀(100,000) = 5.",
          "Multiply by 2: 2 × 5 = 10.0 B.",
          "Final Result: 2.0 Pascals equals exactly 10.0 Bels (B)."
        ]
      }
    ]
  },
  table: {
    title: "Pascal (Sound) to Bel (B) Conversion Table",
    headers: ["Sound Pressure (Pa)", "Level in Bels (B)", "Decibel Equivalent & Acoustic Context"],
    rows: [
      { fromVal: "0.00002 Pa (20 µPa)", toVal: "0.00 B", extra: "0 dB - Nominal threshold of human hearing at 1 kHz" },
      { fromVal: "0.000063 Pa", toVal: "1.00 B", extra: "10 dB - Calm breathing, anechoic chamber background" },
      { fromVal: "0.0002 Pa", toVal: "2.00 B", extra: "20 dB - Whisper at 1 m, quiet recording booth" },
      { fromVal: "0.000632 Pa", toVal: "3.00 B", extra: "30 dB - Quiet bedroom at night, rural ambient" },
      { fromVal: "0.002 Pa (2 mPa)", toVal: "4.00 B", extra: "40 dB - Quiet library study area, residential living room" },
      { fromVal: "0.006325 Pa", toVal: "5.00 B", extra: "50 dB - Moderate rainfall, quiet commercial office" },
      { fromVal: "0.02 Pa (20 mPa)", toVal: "6.00 B", extra: "60 dB - Normal conversational speech at 1 meter" },
      { fromVal: "0.06325 Pa", toVal: "7.00 B", extra: "70 dB - Vacuum cleaner, curbside city traffic" },
      { fromVal: "0.2 Pa (200 mPa)", toVal: "8.00 B", extra: "80 dB - Busy restaurant, food blender" },
      { fromVal: "0.3557 Pa", toVal: "8.50 B", extra: "85 dB - OSHA 8-hour hearing conservation threshold" },
      { fromVal: "0.6325 Pa", toVal: "9.00 B", extra: "90 dB - Heavy diesel truck at 10 m, lawnmower" },
      { fromVal: "1.0 Pa (1,000 mPa)", toVal: "9.40 B", extra: "93.98 dB - Standard acoustic microphone calibrator" },
      { fromVal: "2.0 Pa", toVal: "10.00 B", extra: "100 dB - Pneumatic jackhammer, dance club" },
      { fromVal: "6.325 Pa", toVal: "11.00 B", extra: "110 dB - Live rock concert, car horn at 1 m" },
      { fromVal: "20.0 Pa", toVal: "12.00 B", extra: "120 dB - Human threshold of acoustic pain, siren" },
      { fromVal: "63.25 Pa", toVal: "13.00 B", extra: "130 dB - Pneumatic riveter at operator ear" },
      { fromVal: "200.0 Pa", toVal: "14.00 B", extra: "140 dB - Jet aircraft at 30 m (immediate trauma)" }
    ]
  },
  applications: {
    title: "Industry Applications of Pascal to Bel Conversions",
    items: [
      {
        title: "IT Equipment Acoustic Noise Declaration",
        text: "Converting microphone pressure data in testing chambers into declared sound power levels in bels under ISO 7779 and ECMA-74."
      },
      {
        title: "Telecommunications & Audio Systems",
        text: "Translating acoustic wave pressure into bels to evaluate telephone transmission quality and line signal attenuation."
      },
      {
        title: "Industrial Machinery Sound Power Standards",
        text: "Calculating machine acoustic sound power ratings in bels from sound pressure sensor arrays."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Pascal to Bel Conversions",
    items: [
      "Multiplying the logarithm by 20 instead of 2 (which calculates decibels instead of bels).",
      "Confusing acoustic sound power declared in bels (re 1 pW) with sound pressure level in bels (re 20 µPa).",
      "Forgetting to divide the pressure by the 0.00002 Pa reference constant before taking the logarithm.",
      "Attempting to add bels linearly rather than combining sound energy logarithmically."
    ]
  },
  faqs: [
    {
      question: "How many bels is 1 Pascal of sound pressure?",
      answer: "1 Pascal of sound pressure equals approximately 9.40 Bels (exact: 9.398 B), which corresponds to 93.98 decibels."
    },
    {
      question: "What is the formula to convert pascals into bels?",
      answer: "The formula is: B = 2 × log₁₀(p / 0.00002), where p is the root-mean-square (RMS) sound pressure in pascals."
    },
    {
      question: "Why do we multiply by 2 instead of 20 when converting to bels?",
      answer: "The decibel formula uses 20 log₁₀(p / p₀). Because 1 Bel equals 10 decibels, dividing 20 by 10 yields a multiplier of 2 for bels: B = 2 log₁₀(p / p₀)."
    },
    {
      question: "What level in bels corresponds to conversational speech (0.02 Pa)?",
      answer: "0.02 Pascals corresponds to exactly 6.0 Bels (60 dB), which is typical of normal spoken conversation at 1 meter."
    },
    {
      question: "What sound pressure produces 10.0 Bels?",
      answer: "A sound pressure of 2.0 Pascals produces exactly 10.0 Bels (100 dB), equivalent to a pneumatic jackhammer or loud nightclub."
    },
    {
      question: "Why do server and printer manufacturers state noise ratings in bels?",
      answer: "Manufacturers report declared sound power levels in bels under ISO 7779 to prevent consumers from confusing total sound power emissions (in bels) with local sound pressure levels (in dB SPL at the listener's desk)."
    },
    {
      question: "How do you convert bels back into pascals?",
      answer: "To convert bels into sound pressure in pascals, use the formula: p = 0.00002 × 10^(B / 2)."
    },
    {
      question: "What is the level in bels at the threshold of human hearing?",
      answer: "The auditory threshold of human hearing (0.00002 Pa or 20 µPa) produces exactly 0.0 Bels (0 dB)."
    }
  ]
};
