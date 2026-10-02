import { CustomArticleData } from "./types";

export const soundPressureToDecibel: CustomArticleData = {
  fromUnitId: "sound-pressure",
  toUnitId: "decibel",
  seoTitle: "Sound Pressure to Decibel Converter | Pa to dB",
  metaDescription: "Convert Sound Pressure to Decibels (Pa to dB) accurately. Master the logarithmic formula dB = 20 log10(p / 0.00002), 20 µPa reference baseline, worked examples, and tables.",
  canonicalUrl: "https://unitsconvertors.com/sound-pressure-to-decibel",
  h1: "Sound Pressure to Decibel Converter",
  introduction: [
    "Acoustic sound waves consist of localized pressure oscillations propagated through an elastic medium such as air. When measured with physical pressure transducers or micro-machined sensor diaphragms, sound pressure is registered in pascals (Pa or N/m²). However, the human ear processes auditory sensations across an immense linear pressure span of more than 10,000,000 to 1, rendering linear scales unwieldy for everyday acoustic reporting.",
    "The decibel (dB) compresses this broad dynamic pressure range into an intuitive logarithmic scale. In airborne acoustics, decibels are referenced to the standardized baseline of 20 micropascals (p₀ = 0.00002 Pa), which represents the auditory threshold of acute hearing at a test frequency of 1,000 Hz.",
    "Converting sound pressure in pascals to decibels allows environmental scientists, audio engineers, and industrial hygienists to evaluate noise levels, calibrate sound level meters, and maintain compliance with occupational hearing conservation standards."
  ],
  quickAnswer: {
    text: "To convert Sound Pressure in pascals to Decibels, divide the sound pressure by 0.00002 Pa, calculate the base-10 logarithm, and multiply by 20: dB = 20 × log₁₀(p / 0.00002). For example, a sound pressure of 1.0 Pascal equals approximately 93.98 dB (commonly standardized as 94 dB).",
    formulaDisplay: "dB = 20 × log₁₀(p / 0.00002)",
    subtext: "Where p is RMS sound pressure in pascals and 0.00002 Pa (20 µPa) is the standard reference pressure in air."
  },
  aboutSourceUnit: {
    title: "Understanding Sound Pressure (p)",
    text: "Sound Pressure (symbol: p) is the dynamic, root-mean-square (RMS) deviation from static atmospheric pressure caused by an acoustic sound wave, measured in pascals (Pa = 1 N/m²). Audible acoustic pressures in air range from 0.00002 Pa (20 µPa) at the threshold of hearing, to 0.02 Pa (20 mPa) for conversational speech, and up to 20 Pa (120 dB) at the onset of auditory discomfort."
  },
  aboutTargetUnit: {
    title: "Understanding Decibels (dB) in Acoustics",
    text: "The decibel (symbol: dB) is a dimensionless logarithmic unit expressing the ratio of a physical quantity to a specified reference value. In airborne acoustics, 'dB' without qualification denotes sound pressure level referenced to 20 micropascals (20 µPa). Because sound pressure is a field amplitude quantity, the base-10 logarithmic ratio is multiplied by 20."
  },
  relationship: "Sound pressure p (in pascals) and sound level L (in decibels) follow the logarithmic relationship L = 20 log₁₀(p / p₀), where p₀ = 0.00002 Pa. Every tenfold increase in sound pressure adds exactly 20 dB, while a twofold increase (doubling of pressure) adds approximately 6.02 dB.",
  relationshipTitle: "Sound Pressure to Decibel Scale Milestones",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "0.00 dB (Threshold of acute human hearing)" },
    { label: "0.0002 Pa (200 µPa)", value: "20.00 dB (Faint whisper, quiet anechoic room)" },
    { label: "0.002 Pa (2 mPa)", value: "40.00 dB (Quiet library reading hall, quiet bedroom)" },
    { label: "0.02 Pa (20 mPa)", value: "60.00 dB (Normal conversational speech at 1 meter)" },
    { label: "0.2 Pa (200 mPa)", value: "80.00 dB (Curbside urban traffic, ringing telephone)" },
    { label: "1.0 Pa (1,000 mPa)", value: "93.98 dB (~94 dB calibration test tone)" },
    { label: "2.0 Pa", value: "100.00 dB (Pneumatic jackhammer, motorcycle engine)" },
    { label: "20.0 Pa", value: "120.00 dB (Human threshold of auditory discomfort/pain)" },
    { label: "200.0 Pa", value: "140.00 dB (Jet aircraft takeoff at 30 meters)" }
  ],
  formula: {
    text: "Divide the sound pressure in pascals by the reference pressure of 0.00002 Pa, compute the common logarithm, and multiply by 20.",
    math: "dB = 20 × log₁₀(p / 0.00002)",
    subtext: "Where p is RMS acoustic pressure in pascals and reference pressure p₀ = 2.0 × 10⁻⁵ Pa."
  },
  formulaTitle: "Formula: Sound Pressure to Decibel",
  practicalTip: {
    title: "Decimal Shifts Equal 20 dB Steps",
    text: "A useful rule of thumb: shifting the decimal point of sound pressure by one position (multiplying by 10) adds exactly 20 dB. Thus, 0.0002 Pa = 20 dB, 0.002 Pa = 40 dB, 0.02 Pa = 60 dB, 0.2 Pa = 80 dB, 2 Pa = 100 dB, and 20 Pa = 120 dB."
  },
  expertNote: {
    title: "RMS versus Peak Sound Pressure",
    text: "Sound level meters calculate decibels using root-mean-square (RMS) pressure averaged over standardized time constants: Fast (125 ms) or Slow (1,000 ms). For pure sine waves, peak pressure equals RMS pressure multiplied by √2 (1.414)."
  },
  examples: {
    title: "Step-by-Step Conversion Calculations",
    items: [
      {
        title: "Example 1: Converting 1.0 Pascal (Calibrator Tone)",
        subtitle: "Determine the decibel level for an RMS sound pressure of 1.0 Pa.",
        steps: [
          "State sound pressure: p = 1.0 Pa.",
          "Identify reference pressure: p₀ = 0.00002 Pa.",
          "Divide by reference pressure: 1.0 / 0.00002 = 50,000.",
          "Compute log₁₀(50,000) ≈ 4.69897.",
          "Multiply by 20: 20 × 4.69897 = 93.9794 dB.",
          "Final Result: 1.0 Pascal equals approximately 93.98 dB (standard 94 dB calibration point)."
        ]
      },
      {
        title: "Example 2: Conversational Voice (0.02 Pa)",
        subtitle: "Convert the sound pressure of everyday conversation into decibels.",
        steps: [
          "State sound pressure: p = 0.02 Pa.",
          "Divide by p₀: 0.02 / 0.00002 = 1,000.",
          "Compute log₁₀(1,000) = 3.0.",
          "Multiply by 20: 20 × 3.0 = 60.0 dB.",
          "Final Result: 0.02 Pascals equals exactly 60 dB."
        ]
      },
      {
        title: "Example 3: Auditory Pain Threshold (20.0 Pa)",
        subtitle: "Calculate the decibel level for a sound wave reaching 20 Pascals of pressure.",
        steps: [
          "State sound pressure: p = 20.0 Pa.",
          "Divide by p₀: 20.0 / 0.00002 = 1,000,000.",
          "Compute log₁₀(1,000,000) = 6.0.",
          "Multiply by 20: 20 × 6.0 = 120.0 dB.",
          "Final Result: 20.0 Pascals equals exactly 120 dB."
        ]
      }
    ]
  },
  table: {
    title: "Sound Pressure (Pa) to Decibel (dB re 20 µPa) Reference Table",
    headers: ["Sound Pressure (Pa)", "Sound Level (dB)", "Environmental Context"],
    rows: [
      { fromVal: "0.00002 Pa", toVal: "0.00 dB", extra: "Threshold of human hearing at 1 kHz" },
      { fromVal: "0.000063 Pa", toVal: "10.00 dB", extra: "Calm breathing in quiet room" },
      { fromVal: "0.0002 Pa", toVal: "20.00 dB", extra: "Faint whisper at 1 meter, leaves rustling" },
      { fromVal: "0.000632 Pa", toVal: "30.00 dB", extra: "Quiet suburban bedroom at night" },
      { fromVal: "0.002 Pa", toVal: "40.00 dB", extra: "Quiet library study room" },
      { fromVal: "0.006325 Pa", toVal: "50.00 dB", extra: "Moderate rainfall, quiet office" },
      { fromVal: "0.02 Pa", toVal: "60.00 dB", extra: "Normal spoken conversation at 1 meter" },
      { fromVal: "0.06325 Pa", toVal: "70.00 dB", extra: "Busy restaurant dining area" },
      { fromVal: "0.2 Pa", toVal: "80.00 dB", extra: "Curbside city traffic, noisy food blender" },
      { fromVal: "0.3557 Pa", toVal: "85.00 dB", extra: "OSHA 8-hour occupational action limit" },
      { fromVal: "0.6325 Pa", toVal: "90.00 dB", extra: "Heavy diesel truck pass-by at 10 meters" },
      { fromVal: "1.0 Pa", toVal: "93.98 dB", extra: "Microphone acoustic calibrator tone (~94 dB)" },
      { fromVal: "2.0 Pa", toVal: "100.00 dB", extra: "Pneumatic jackhammer at 3 meters" },
      { fromVal: "6.325 Pa", toVal: "110.00 dB", extra: "Live rock concert, car horn at 1 meter" },
      { fromVal: "10.0 Pa", toVal: "113.98 dB", extra: "Secondary 114 dB calibrator reference" },
      { fromVal: "20.0 Pa", toVal: "120.00 dB", extra: "Human threshold of acoustic pain" },
      { fromVal: "63.25 Pa", toVal: "130.00 dB", extra: "Pneumatic riveting hammer at operator ear" },
      { fromVal: "200.0 Pa", toVal: "140.00 dB", extra: "Jet aircraft takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Engineering & Noise Control Applications",
    items: [
      {
        title: "Acoustic Transducer Calibration",
        text: "Converting microphone membrane pressure response data into standard decibel sound pressure levels."
      },
      {
        title: "Industrial Noise Dosimetry",
        text: "Translating workplace sound pressure fluctuations into cumulative decibel noise exposure records to protect worker hearing."
      },
      {
        title: "Building Partition Acoustic Ratings",
        text: "Comparing sound pressure levels on sending and receiving sides of architectural partitions to establish Sound Transmission Class (STC) ratings."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes",
    items: [
      "Using a 10 multiplier instead of 20: Acoustic pressure is a field amplitude quantity, requiring a factor of 20; only power or intensity ratios use 10.",
      "Confusing airborne and underwater references: Underwater acoustics uses a reference of 1 µPa, yielding values 26 dB higher than airborne standards.",
      "Confusing dynamic acoustic oscillations with static atmospheric pressure (101,325 Pa).",
      "Attempting to evaluate 0 Pa: Zero sound pressure mathematically evaluates to negative infinity decibels; 20 µPa serves as the practical baseline."
    ]
  },
  faqs: [
    {
      question: "How many decibels is 1 Pascal of sound pressure?",
      answer: "1 Pascal of RMS sound pressure equals approximately 93.98 dB (commonly standardized as 94 dB re 20 µPa)."
    },
    {
      question: "What is the formula to convert sound pressure in pascals to decibels?",
      answer: "The formula is: dB = 20 × log₁₀(p / 0.00002), where p is the RMS sound pressure in pascals and 0.00002 Pa is the airborne reference pressure."
    },
    {
      question: "Why is 20 micropascals the reference pressure?",
      answer: "20 micropascals (0.00002 Pa) represents the average auditory threshold of healthy young human hearing at a frequency of 1,000 Hz."
    },
    {
      question: "What decibel level corresponds to 0.02 Pascals?",
      answer: "0.02 Pascals corresponds to exactly 60 dB, typical of normal conversational speech at 1 meter."
    },
    {
      question: "How many pascals represent the threshold of pain?",
      answer: "The threshold of acoustic discomfort and pain begins at approximately 20 Pascals RMS, which corresponds to 120 dB."
    },
    {
      question: "Why do we multiply by 20 rather than 10?",
      answer: "Acoustic power is proportional to pressure squared (P ∝ p²). Expressing this in decibels gives 10 × log₁₀(p² / p₀²), which simplifies to 20 × log₁₀(p / p₀)."
    },
    {
      question: "Can decibels be negative?",
      answer: "Yes. Any sound pressure lower than 0.00002 Pa produces a negative decibel value. For example, 0.000002 Pa corresponds to -20 dB."
    },
    {
      question: "What is the effect of doubling sound pressure in pascals?",
      answer: "Doubling the sound pressure in pascals increases the sound level by approximately 6.02 dB (20 × log₁₀(2))."
    }
  ],
  references: [
    "ISO 80000-8: Quantities and units — Part 8: Acoustics",
    "IEC 61672-1: Sound level meters — Specifications",
    "ANSI/ASA S1.1: Acoustical Terminology",
    "NIST Special Publication 811: Guide for the Use of the International System of Units"
  ]
};
