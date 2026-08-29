import { CustomArticleData } from "./types";

export const decibelSplToSoundPressure: CustomArticleData = {
  fromUnitId: "decibel-spl",
  toUnitId: "sound-pressure",
  seoTitle: "Decibel SPL to Sound Pressure Converter (dB SPL to Pa RMS) | UnitsConvertors.com",
  metaDescription: "Convert Decibel SPL to Sound Pressure (Pascals RMS) with scientific accuracy. Master the exponential acoustic formula, reference baselines, worked examples, and tables.",
  h1: "Decibel SPL to Sound Pressure Converter",
  introduction: [
    "Sound pressure represents the dynamic physical force exerted by acoustic sound waves per unit area as they propagate through air. While environmental noise regulations and audio engineering meters report sound levels in decibels sound pressure level (dB SPL), acoustic physics and transducer engineering require the actual linear root-mean-square (RMS) sound pressure measured in pascals (Pa or N/m²).",
    "Because the human ear responds logarithmically over a wide intensity range, the decibel scale compresses sound pressure levels. Converting dB SPL back to sound pressure yields the true mechanical pressure oscillation interacting with microphones, eardrums, and architectural boundaries.",
    "This guide explains the mathematical transformation between logarithmic dB SPL and linear sound pressure, provides step-by-step calculation examples, details acoustic reference standards, and presents comparative pressure reference tables."
  ],
  quickAnswer: {
    text: "To convert Decibel SPL to linear Sound Pressure in Pascals (Pa), calculate: Sound Pressure (Pa) = 2.0 × 10⁻⁵ × 10^(dB SPL / 20). For example, 94 dB SPL equals 1.0 Pascal RMS of sound pressure.",
    formulaDisplay: "p (Pa RMS) = 0.00002 × 10^(dB SPL / 20)",
    subtext: "Where the standard acoustic reference pressure p₀ is 20 µPa (0.00002 Pa in air)."
  },
  aboutSourceUnit: {
    title: "What is Decibel SPL (dB SPL)?",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is a logarithmic ratio quantifying acoustic sound pressure relative to the airborne auditory threshold p₀ = 20 µPa (2.0 × 10⁻⁵ Pa). Defined in ISO 80000-8 and ANSI S1.1, 0 dB SPL is the quietest detectable sound at 1 kHz, while 120 dB SPL to 140 dB SPL marks the human threshold of acute discomfort and hearing trauma."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Pressure (Pa RMS)",
    text: "Sound pressure (symbol: p) is the local pressure deviation from ambient atmospheric pressure caused by an acoustic wave. In physical acoustics, it is quantified as the root-mean-square (RMS) pressure in pascals (1 Pa = 1 N/m²). Airborne sound pressures range from 0.00002 Pa at the threshold of hearing to over 200 Pa near jet engines."
  },
  relationship: "Sound pressure level is defined by the formula L_p = 20 log₁₀(p / p₀). Inverting this formula to solve for linear sound pressure gives p = p₀ × 10^(L_p / 20), where p₀ = 0.00002 Pa.",
  relationshipTitle: "Decibel SPL to Sound Pressure Magnitude Scale",
  relationshipItems: [
    { label: "0 dB SPL", value: "0.00002 Pa (20 µPa - Threshold of hearing)" },
    { label: "20 dB SPL", value: "0.0002 Pa (200 µPa - Whispering in a quiet room)" },
    { label: "60 dB SPL", value: "0.02 Pa (20,000 µPa - Conversational speech)" },
    { label: "94 dB SPL", value: "1.0 Pa (Standard microphone calibrator pressure)" },
    { label: "114 dB SPL", value: "10.0 Pa (High-output acoustic calibrator)" },
    { label: "120 dB SPL", value: "20.0 Pa (Threshold of acoustic discomfort)" },
    { label: "140 dB SPL", value: "200.0 Pa (Jet engine at 30 m / immediate hearing damage)" }
  ],
  formula: {
    text: "Multiply the standard acoustic reference pressure p₀ (20 µPa) by 10 raised to the power of (dB SPL / 20).",
    math: "p = 2.0 × 10⁻⁵ × 10^(dB SPL / 20)",
    subtext: "Where p is RMS sound pressure in pascals (Pa) and dB SPL is the decibel level."
  },
  formulaTitle: "Decibel SPL to Sound Pressure Formula",
  practicalTip: {
    title: "The 6 dB Pressure Doubling Rule",
    text: "Every 6.02 dB increase in dB SPL exactly doubles the linear sound pressure in pascals. Conversely, subtracting 6.02 dB cuts the sound pressure in half."
  },
  expertNote: {
    title: "Instantaneous vs RMS Sound Pressure",
    text: "Acoustic sound pressure oscillates symmetrically above and below static atmospheric pressure. Because the average value of a pure sine wave is zero, acousticians always evaluate the Root-Mean-Square (RMS) pressure to calculate effective energy and dB SPL."
  },
  examples: {
    title: "Step-by-Step dB SPL to Sound Pressure Worked Examples",
    items: [
      {
        title: "Example 1: Studio Microphone Calibration at 94 dB SPL",
        subtitle: "Calculate the exact sound pressure striking a microphone capsule during calibration.",
        steps: [
          "Identify sound level: 94 dB SPL.",
          "Apply formula: p = 0.00002 × 10^(94 / 20).",
          "Divide: 94 / 20 = 4.7.",
          "Calculate 10^4.7 ≈ 50,118.72.",
          "Multiply by 0.00002 Pa: 0.00002 × 50,118.72 = 1.002 Pa.",
          "Final Result: 94 dB SPL produces 1.00 Pa RMS of sound pressure."
        ]
      },
      {
        title: "Example 2: Conversational Speech at 60 dB SPL",
        subtitle: "Determine the acoustic pressure of normal speech at a 1-meter distance.",
        steps: [
          "Identify sound level: 60 dB SPL.",
          "Apply formula: p = 0.00002 × 10^(60 / 20).",
          "Simplify exponent: 60 / 20 = 3.",
          "Compute power of 10: 10³ = 1,000.",
          "Multiply: 0.00002 × 1,000 = 0.02 Pa.",
          "Final Result: 60 dB SPL equals exactly 0.02 Pa (20 mPa)."
        ]
      },
      {
        title: "Example 3: Emergency Vehicle Siren at 120 dB SPL",
        subtitle: "Find the physical pressure wave exerted near an emergency vehicle siren.",
        steps: [
          "Identify input level: 120 dB SPL.",
          "Divide by 20: 120 / 20 = 6.",
          "Calculate power of 10: 10⁶ = 1,000,000.",
          "Multiply: 0.00002 × 1,000,000 = 20.0 Pa.",
          "Final Result: 120 dB SPL equals 20.0 Pascals of sound pressure."
        ]
      }
    ]
  },
  table: {
    title: "Decibel SPL to Sound Pressure (Pa RMS) Conversion Table",
    headers: ["Sound Pressure Level (dB SPL)", "RMS Sound Pressure (Pa)", "Environmental Reference & Perception"],
    rows: [
      { fromVal: "0 dB SPL", toVal: "0.00002 Pa", extra: "20 µPa - Absolute threshold of human hearing at 1 kHz" },
      { fromVal: "10 dB SPL", toVal: "0.000063 Pa", extra: "63.2 µPa - Calm breathing, rustling leaves" },
      { fromVal: "20 dB SPL", toVal: "0.00020 Pa", extra: "200 µPa - Quiet recording studio, whisper at 1 m" },
      { fromVal: "30 dB SPL", toVal: "0.000632 Pa", extra: "632 µPa - Quiet bedroom at night, rural ambient" },
      { fromVal: "40 dB SPL", toVal: "0.0020 Pa", extra: "2 mPa - Quiet library, residential living room" },
      { fromVal: "50 dB SPL", toVal: "0.00632 Pa", extra: "6.32 mPa - Moderate rainfall, quiet private office" },
      { fromVal: "60 dB SPL", toVal: "0.020 Pa", extra: "20 mPa - Normal conversational speech at 1 meter" },
      { fromVal: "70 dB SPL", toVal: "0.06325 Pa", extra: "63.25 mPa - Busy restaurant, passenger car at 60 mph" },
      { fromVal: "80 dB SPL", toVal: "0.20 Pa", extra: "200 mPa - Garbage disposal, curbside city traffic" },
      { fromVal: "85 dB SPL", toVal: "0.3557 Pa", extra: "355.7 mPa - OSHA 8-hour occupational hearing action limit" },
      { fromVal: "90 dB SPL", toVal: "0.6325 Pa", extra: "632.5 mPa - Power lawnmower, heavy truck at 10 m" },
      { fromVal: "94 dB SPL", toVal: "1.002 Pa", extra: "1.0 Pa - Standard microphone acoustic calibrator" },
      { fromVal: "100 dB SPL", toVal: "2.00 Pa", extra: "2,000 mPa - Pneumatic drill, nightclub dance floor" },
      { fromVal: "110 dB SPL", toVal: "6.325 Pa", extra: "6.325 Pa - Live rock concert, car horn at 1 m" },
      { fromVal: "120 dB SPL", toVal: "20.00 Pa", extra: "20 Pa - Human threshold of pain, ambulance siren" },
      { fromVal: "130 dB SPL", toVal: "63.25 Pa", extra: "63.25 Pa - Pneumatic rivet hammer at operator ear" },
      { fromVal: "140 dB SPL", toVal: "200.00 Pa", extra: "200 Pa - Jet engine at 30 m (immediate acoustic trauma)" }
    ]
  },
  applications: {
    title: "Industry Applications of Decibel SPL to Sound Pressure Conversions",
    items: [
      {
        title: "Acoustic Transducer & Microphone Engineering",
        text: "Evaluating diaphragm compliance, membrane stress, and maximum acoustic overload point (AOP) in condenser microphones."
      },
      {
        title: "Building Facade & Glazing Acoustic Engineering",
        text: "Translating exterior airport and highway noise levels into mechanical surface pressures to design sound-insulating laminated glass."
      },
      {
        title: "Audiology & Hearing Aid Calibration",
        text: "Measuring real-ear sound pressure levels (SPL) in the ear canal to program digital hearing aids with millipascal precision."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Decibel SPL to Sound Pressure Conversions",
    items: [
      "Dividing the dB SPL value by 10 instead of 20 in the exponent (sound pressure is a field amplitude quantity, not power).",
      "Confusing peak-to-peak pressure with root-mean-square (RMS) sound pressure (for a sine wave, V_peak = V_rms × √2).",
      "Forgetting that 0 dB SPL represents a real physical pressure (0.00002 Pa), not zero pascals.",
      "Attempting to add dB SPL values with direct linear addition rather than summing mean square pressures."
    ]
  },
  faqs: [
    {
      question: "What is the difference between sound pressure and sound intensity?",
      answer: "Sound pressure (measured in pascals) is the local dynamic force per unit area exerted by the acoustic wave. Sound intensity (measured in W/m²) is the rate of acoustic energy flow through a unit area in a specific direction. In a free field, intensity is proportional to the square of sound pressure (I = p² / ρc)."
    },
    {
      question: "How do you calculate sound pressure in pascals from dB SPL?",
      answer: "Use the formula p = p₀ × 10^(dB SPL / 20), where p₀ = 0.00002 Pa (20 µPa in air)."
    },
    {
      question: "What sound pressure corresponds to 0 dB SPL?",
      answer: "0 dB SPL corresponds exactly to 20 micropascals (0.00002 Pa or 2.0 × 10⁻⁵ N/m²), representing the nominal auditory threshold of human hearing at 1 kHz."
    },
    {
      question: "What is the sound pressure at the threshold of human hearing pain?",
      answer: "The human threshold of pain occurs around 120 dB SPL to 130 dB SPL, which corresponds to an RMS sound pressure of 20 to 63.2 Pascals."
    },
    {
      question: "Why does a 20 dB increase represent a factor of 10 in pressure?",
      answer: "Because sound pressure is a field quantity, the decibel formula uses 20 log₁₀(p / p₀). When p / p₀ = 10, the log₁₀(10) = 1, and multiplying by 20 gives exactly 20 dB."
    },
    {
      question: "What is the relationship between pascals and newtons per square meter?",
      answer: "They are completely identical: 1 Pascal (Pa) equals exactly 1 Newton per square meter (1 N/m²)."
    },
    {
      question: "Why is 94 dB SPL used to calibrate sound level meters?",
      answer: "94 dB SPL equals approximately 1.00 Pascal RMS (0.00002 × 10^4.7 ≈ 1.002 Pa), creating a clean, whole-number pressure benchmark of 1 Pa for acoustic calibrators."
    },
    {
      question: "Can sound pressure in pascals ever be negative?",
      answer: "Instantaneous acoustic pressure oscillates above and below ambient atmospheric pressure, but effective RMS sound pressure is always positive."
    }
  ]
};
