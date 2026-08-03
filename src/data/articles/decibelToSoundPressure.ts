import { CustomArticleData } from "./types";

export const decibelToSoundPressure: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "sound-pressure",
  seoTitle: "Decibel to Sound Pressure Converter (dB to Pa) | UnitsConvertors.com",
  metaDescription: "Convert acoustic Decibels to Sound Pressure in Pascals with high accuracy. Learn the p = p₀ × 10^(dB/20) logarithmic relationship, acoustic wave mechanics, examples, and tables.",
  h1: "Decibel to Sound Pressure Converter",
  introduction: [
    "Sound pressure measures the local physical pressure deviation from static ambient atmospheric pressure caused by an acoustic wave propagating through a medium like air or water.",
    "While acoustic measurements and sound level meters express sound level logarithmically in decibels (dB), mechanical vibration models, transducer diaphragm dynamics, and building acoustics calculations require absolute sound pressure in Pascals (Pa).",
    "Converting sound levels in decibels to sound pressure in Pascals requires applying the standard acoustic wave exponential equation: p = 20 µPa × 10^(dB / 20). This guide explains sound wave mechanics, physical pressure thresholds, step-by-step conversions, and practical engineering reference benchmarks."
  ],
  quickAnswer: {
    text: "To convert Decibels to physical Sound Pressure in Pascals, multiply 0.00002 Pa (20 µPa) by 10 raised to the power of (dB / 20). For example, 60 dB corresponds to 0.02 Pascals of sound pressure.",
    formulaDisplay: "p (Pa) = 0.00002 × 10^(dB / 20)",
    subtext: "0 dB = 0.00002 Pa (20 µPa threshold); 94 dB = 1.0 Pa."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustics?",
    text: "The decibel (dB) is a logarithmic ratio scale. In airborne acoustics, 0 dB SPL represents the standard reference sound pressure level p₀ = 20 micropascals (20 µPa), which is the auditory threshold of healthy human ears at 1,000 Hz."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Pressure (Pa)",
    text: "Sound pressure (symbol: p) is the physical force per unit area exerted by alternating acoustic wave compressions and rarefactions on a surface. Expressed in Pascals (1 Pa = 1 N/m²), RMS sound pressure directly determines mechanical force on micro-electro-mechanical systems (MEMS) and ear drum membranes."
  },
  relationship: "Sound pressure scales logarithmically in decibels. Increasing sound pressure by 20 dB multiplies the physical Pascal sound pressure by a factor of 10. A 6 dB increase doubles the physical pressure amplitude.",
  relationshipTitle: "Decibel to Sound Pressure Ratio Comparison",
  relationshipItems: [
    { label: "0 dB", value: "0.00002 Pa (20 µPa / Threshold of human hearing)" },
    { label: "40 dB", value: "0.002 Pa (2,000 µPa / Quiet residential bedroom)" },
    { label: "70 dB", value: "0.0632 Pa (63,200 µPa / Vacuum cleaner at 1 meter)" },
    { label: "94 dB", value: "1.0 Pa (1,000,000 µPa / Standard acoustic calibrator reference)" },
    { label: "120 dB", value: "20.0 Pa (20,000,000 µPa / Threshold of physical human pain)" }
  ],
  formula: {
    text: "Multiply 0.00002 Pa (the international airborne reference sound pressure p₀) by 10 raised to the power of (dB / 20).",
    math: "p = 0.00002 \\times 10^{\\frac{\\text{dB}}{20}} \\text{ Pa}",
    subtext: "Where p₀ = 20 µPa = 2 × 10⁻⁵ N/m²."
  },
  formulaTitle: "Decibel to Sound Pressure Formula",
  practicalTip: {
    title: "Key Acoustic Benchmark",
    text: "Always remember that 94 dB corresponds to exactly 1.0 Pascal RMS sound pressure. This provides an easy anchor point for field checks."
  },
  expertNote: {
    title: "Root-Mean-Square (RMS) vs Peak Sound Pressure",
    text: "Decibel sound pressure levels report RMS pressure values (L_p = 20 log₁0(p_rms / p₀)). For pure sine waves, peak pressure is p_peak = p_rms × √2 ≈ p_rms × 1.414."
  },
  examples: {
    title: "Step-by-Step dB to Sound Pressure Worked Examples",
    items: [
      {
        title: "Example 1: Office Desk Ambient Noise",
        subtitle: "Convert a commercial office noise level of 50 dB to sound pressure in Pascals.",
        steps: [
          "Identify sound level: 50 dB.",
          "Calculate exponent: 50 ÷ 20 = 2.5.",
          "Compute power of 10: 10²ˑ⁵ = 316.2277.",
          "Multiply by reference p₀: 0.00002 × 316.2277 = 0.006325 Pa.",
          "Final Result: 50 dB equals 0.006325 Pascals (6.325 mPa)."
        ]
      },
      {
        title: "Example 2: Concert Loudspeaker Sound Pressure",
        subtitle: "Convert a front-of-house concert sound level of 110 dB to sound pressure.",
        steps: [
          "Identify sound level: 110 dB.",
          "Calculate exponent: 110 ÷ 20 = 5.5.",
          "Compute power of 10: 10⁵ˑ⁵ = 316,227.77.",
          "Multiply by 0.00002 Pa: 0.00002 × 316,227.77 = 6.3245 Pa.",
          "Final Result: 110 dB corresponds to 6.325 Pascals."
        ]
      },
      {
        title: "Example 3: Emergency Vehicle Siren at 3 Meters",
        subtitle: "Convert a siren reading of 120 dB to sound pressure.",
        steps: [
          "Identify sound level: 120 dB.",
          "Calculate exponent: 120 ÷ 20 = 6.",
          "Compute power of 10: 10⁶ = 1,000,000.",
          "Multiply by reference p₀: 0.00002 × 1,000,000 = 20.0 Pa.",
          "Final Result: 120 dB equals 20.0 Pascals."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Sound Pressure Reference Table",
    headers: ["Decibels (dB)", "Sound Pressure (Pa)", "Sound Pressure (µPa)", "Typical Environmental / Acoustic Source"],
    rows: [
      { fromVal: "0 dB", toVal: "0.00002 Pa", extra: "20 µPa", extra2: "Human auditory threshold at 1 kHz" },
      { fromVal: "30 dB", toVal: "0.000632 Pa", extra: "632 µPa", extra2: "Quiet library whisper / recording booth" },
      { fromVal: "50 dB", toVal: "0.006325 Pa", extra: "6,325 µPa", extra2: "Quiet suburban office ambient sound" },
      { fromVal: "70 dB", toVal: "0.063246 Pa", extra: "63,246 µPa", extra2: "Busy restaurant / vacuum cleaner at 1 meter" },
      { fromVal: "85 dB", toVal: "0.355656 Pa", extra: "355,656 µPa", extra2: "OSHA 8-hour hearing protection threshold" },
      { fromVal: "94 dB", toVal: "1.000000 Pa", extra: "1,000,000 µPa", extra2: "Standard 1 kHz acoustic calibrator output" },
      { fromVal: "100 dB", toVal: "2.000000 Pa", extra: "2,000,000 µPa", extra2: "Pneumatic drill / heavy machinery" },
      { fromVal: "120 dB", toVal: "20.000000 Pa", extra: "20,000,000 µPa", extra2: "Human auditory discomfort / pain threshold" },
      { fromVal: "130 dB", toVal: "63.245553 Pa", extra: "63,245,553 µPa", extra2: "Jackhammer / threshold of immediate acoustic injury" },
      { fromVal: "140 dB", toVal: "200.000000 Pa", extra: "200,000,000 µPa", extra2: "Jet engine takeoff at 30 meters distance" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to Sound Pressure Conversion",
    items: [
      {
        title: "Acoustic Transducer & Sensor Engineering",
        text: "Engineers convert decibel specifications into physical sound pressure values to calculate mechanical forces on piezoelectric diaphragms, MEMS sensors, and condenser capsules."
      },
      {
        title: "Building Vibration & Acoustic Structural Impact",
        text: "Architectural acousticians calculate physical acoustic pressure waves impacting wall assemblies, glass facades, and HVAC ducting to prevent vibration fatigue."
      },
      {
        title: "Aeroacoustics & Noise Mitigation Modeling",
        text: "Aircraft aerodynamic designers evaluate dynamic pressure fluctuations on fuselage panels during high-speed atmospheric flight."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Sound Pressure Conversions",
    items: [
      "Dividing decibels by 10 instead of 20 when calculating field quantities like sound pressure.",
      "Confusing RMS sound pressure with peak-to-peak pressure swings.",
      "Forgetting that 0 dB is not zero physical pressure, but 20 micropascals.",
      "Attempting to perform linear mathematical operations directly on decibel numbers."
    ]
  },
  faqs: [
    {
      question: "How do I calculate sound pressure in Pascals from dB?",
      answer: "Use p = 0.00002 × 10^(dB / 20). Divide the dB value by 20, raise 10 to that exponent, and multiply by 0.00002 Pa."
    },
    {
      question: "What is 70 dB in Pascals?",
      answer: "70 dB equals approximately 0.0632 Pascals (63.2 mPa)."
    },
    {
      question: "Why does 94 dB equal 1 Pascal?",
      answer: "Because 20 log₁0(1 Pa / 0.00002 Pa) = 20 log₁0(50,000) = 20 × 4.69897 ≈ 94.0 dB."
    },
    {
      question: "How many Pascals is 100 dB?",
      answer: "100 dB is equal to exactly 2.0 Pascals of sound pressure."
    },
    {
      question: "What happens to sound pressure when dB increases by 20?",
      answer: "An increase of +20 dB multiplies physical sound pressure in Pascals by exactly 10."
    },
    {
      question: "What happens to sound pressure when dB increases by 6 dB?",
      answer: "An increase of +6 dB doubles physical sound pressure in Pascals (factor of ~1.995)."
    },
    {
      question: "What is the threshold of human hearing in Pascals?",
      answer: "The threshold of human hearing at 1 kHz is defined as 20 micropascals (0.00002 Pa or 2 × 10⁻⁵ Pa)."
    },
    {
      question: "Is sound pressure the same as sound intensity?",
      answer: "No. Sound pressure is force per unit area (Pa), while sound intensity is acoustic power per unit area (W/m²). Sound intensity is proportional to sound pressure squared."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics.",
    "Beranek, L. L., & Mellow, T. (2012). Acoustics: Sound Fields and Transducers. Academic Press.",
    "IEC 61672-1:2013 Electroacoustics — Sound level meters."
  ]
};
