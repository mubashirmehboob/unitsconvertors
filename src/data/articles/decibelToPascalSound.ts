import { CustomArticleData } from "./types";

export const decibelToPascalSound: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "pascal-sound",
  seoTitle: "Decibel to Pascal (Sound) Converter (dB to Pa) | UnitsConvertors.com",
  metaDescription: "Convert acoustic Decibels to Pascals (dB to Pa) with exact mathematical precision. Learn the logarithmic-to-linear formula p = p₀ × 10^(dB/20), 20 µPa baseline, examples, and tables.",
  h1: "Decibel to Pascal (Sound) Converter",
  introduction: [
    "In acoustics, sound levels are commonly expressed in decibels (dB), a logarithmic scale that compresses the vast dynamic range of human hearing into manageable numbers.",
    "However, physical acoustic wave equations, transducer sensitivity specs, and finite element simulation models require linear sound pressure values measured in Pascals (Pa)—the SI unit for pressure equal to one newton per square meter (1 N/m²).",
    "To convert acoustic decibels (dB SPL) to Pascals (Pa), apply the fundamental exponential formula: p = p₀ × 10^(dB / 20), where p₀ = 20 micropascals (0.00002 Pa). This guide provides mathematical derivations, worked engineering examples, reference tables, and practical measurement tips."
  ],
  quickAnswer: {
    text: "To convert acoustic Decibels to Pascals, divide the decibel value by 20, raise 10 to that power, and multiply by 0.00002 Pa (20 µPa). For example, 94 dB corresponds to exactly 1.0 Pascal of sound pressure.",
    formulaDisplay: "p (Pa) = 0.00002 × 10^(dB / 20)",
    subtext: "0 dB = 0.00002 Pa (20 µPa threshold); 94 dB = 1.0 Pa."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustics?",
    text: "In acoustic measurement, a decibel (dB SPL) quantifies effective root-mean-square (RMS) sound pressure on a logarithmic scale relative to p₀ = 20 µPa. This logarithmic compression reflects human loudness perception, where a 20 dB increase corresponds to a tenfold increase in physical sound pressure."
  },
  aboutTargetUnit: {
    title: "Understanding Pascal (Pa) in Acoustics",
    text: "The Pascal (symbol: Pa) is the SI derived unit of pressure defined as 1 newton per square meter (1 N/m²). In acoustics, sound pressure represents the instantaneous dynamic pressure deviation from static ambient atmospheric pressure (101,325 Pa) caused by a passing acoustic wave."
  },
  relationship: "The relationship between decibels and Pascals is logarithmic. Every 20 dB increase multiplies physical sound pressure in Pascals by a factor of 10. Conversely, a 6 dB increase doubles the pressure amplitude.",
  relationshipTitle: "Decibel vs Pascal Pressure Ratio Scale",
  relationshipItems: [
    { label: "0 dB", value: "0.00002 Pa (20 µPa / Threshold of human hearing at 1 kHz)" },
    { label: "20 dB", value: "0.0002 Pa (200 µPa / Quiet studio recording background)" },
    { label: "60 dB", value: "0.02 Pa (20,000 µPa / Normal conversational speech at 1m)" },
    { label: "94 dB", value: "1.0 Pa (1,000,000 µPa / Standard 1 kHz microphone calibration benchmark)" },
    { label: "120 dB", value: "20.0 Pa (20,000,000 µPa / Threshold of physical human discomfort)" }
  ],
  formula: {
    text: "Multiply the reference sound pressure p₀ (0.00002 Pa) by 10 raised to the power of (dB / 20).",
    math: "p \\text{ (Pa)} = 0.00002 \\times 10^{\\frac{\\text{dB}}{20}}",
    subtext: "Where p₀ = 2 × 10⁻⁵ Pa (20 micropascals)."
  },
  formulaTitle: "Decibel to Pascal Conversion Formula",
  practicalTip: {
    title: "Microphone Sensitivity Milestone",
    text: "Remember that 94 dB SPL is the universal reference benchmark in acoustics because 94 dB corresponds to exactly 1.0 Pascal RMS sound pressure."
  },
  expertNote: {
    title: "Field Quantity vs Power Quantity Logarithms",
    text: "Because sound pressure is a field quantity (proportional to the square root of acoustic power), decibels use a factor of 20 log₁₀(p/p₀) rather than 10 log₁₀(P/P₀). Thus, converting back to Pascals uses 10^(dB/20)."
  },
  examples: {
    title: "Step-by-Step dB to Pa Worked Examples",
    items: [
      {
        title: "Example 1: Normal Conversation Sound Level",
        subtitle: "Convert a conversational speech acoustic level of 60 dB to Pascals.",
        steps: [
          "Identify sound level: 60 dB.",
          "Calculate exponent: 60 ÷ 20 = 3.",
          "Compute power of 10: 10³ = 1,000.",
          "Multiply by reference p₀: 0.00002 × 1,000 = 0.02 Pa.",
          "Final Result: 60 dB corresponds to 0.02 Pascals (20 mPa)."
        ]
      },
      {
        title: "Example 2: Microphone Sensitivity Calibration (94 dB)",
        subtitle: "Convert 94 dB to sound pressure in Pascals.",
        steps: [
          "Identify decibel value: 94 dB.",
          "Calculate exponent: 94 ÷ 20 = 4.7.",
          "Compute power of 10: 10⁴ˑ⁷ = 50,118.72.",
          "Multiply by 0.00002 Pa: 0.00002 × 50,118.72 = 1.00237 Pa ≈ 1.0 Pa.",
          "Final Result: 94 dB equals 1.0 Pascal."
        ]
      },
      {
        title: "Example 3: Heavy Industrial Machine Noise (100 dB)",
        subtitle: "Convert an industrial noise level of 100 dB to Pascals.",
        steps: [
          "Identify noise level: 100 dB.",
          "Calculate exponent: 100 ÷ 20 = 5.",
          "Compute power of 10: 10⁵ = 100,000.",
          "Multiply by reference p₀: 0.00002 × 100,000 = 2.0 Pa.",
          "Final Result: 100 dB corresponds to 2.0 Pascals."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Pascal Acoustic Engineering Reference Table",
    headers: ["Decibels (dB)", "Sound Pressure (Pa)", "Micro-Pascals (µPa)", "Acoustic Environment / Reference"],
    rows: [
      { fromVal: "0 dB", toVal: "0.00002 Pa", extra: "20 µPa", extra2: "Human hearing threshold at 1 kHz" },
      { fromVal: "20 dB", toVal: "0.0002 Pa", extra: "200 µPa", extra2: "Quiet recording studio background" },
      { fromVal: "40 dB", toVal: "0.002 Pa", extra: "2,000 µPa", extra2: "Quiet residential bedroom at night" },
      { fromVal: "60 dB", toVal: "0.02 Pa", extra: "20,000 µPa", extra2: "Conversational speech at 1 meter" },
      { fromVal: "80 dB", toVal: "0.2 Pa", extra: "200,000 µPa", extra2: "Busy city street traffic / loud alarm" },
      { fromVal: "94 dB", toVal: "1.0 Pa", extra: "1,000,000 µPa", extra2: "Standard 1 kHz acoustic calibrator benchmark" },
      { fromVal: "100 dB", toVal: "2.0 Pa", extra: "2,000,000 µPa", extra2: "Loud motorcycle / heavy factory floor" },
      { fromVal: "120 dB", toVal: "20.0 Pa", extra: "20,000,000 µPa", extra2: "Threshold of human pain" },
      { fromVal: "140 dB", toVal: "200.0 Pa", extra: "200,000,000 µPa", extra2: "Jet engine takeoff at 30 meters" },
      { fromVal: "160 dB", toVal: "2,000.0 Pa", extra: "2,000,000,000 µPa", extra2: "Rifle gunshot near muzzle / severe acoustic trauma" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to Pascal Conversion",
    items: [
      {
        title: "Transducer & Microphone Sensitivity Calculations",
        text: "Microphone datasheets list sensitivity in mV/Pa. Converting target ambient dB SPL levels into Pascals allows engineers to calculate expected electrical voltage output."
      },
      {
        title: "Acoustic Finite Element & Computational Fluid Dynamics (CFD)",
        text: "Simulation software requires boundary conditions in Pascals to solve physical wave equations for speaker enclosures, automotive interiors, and turbomachinery."
      },
      {
        title: "Audiology & Hearing Protection Design",
        text: "Audiologists convert audiogram decibel thresholds into physical Pascal pressures to assess mechanical eardrum displacement and design protective hearing earplugs."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB to Pascal Calculations",
    items: [
      "Dividing dB by 10 instead of 20 when converting pressure (pressure is an amplitude field quantity, requiring 10^(dB/20)).",
      "Using the wrong reference pressure (e.g. underwater acoustics uses p₀ = 1 µPa instead of airborne p₀ = 20 µPa).",
      "Assuming Pascals represent static atmospheric pressure rather than dynamic acoustic fluctuation pressure.",
      "Attempting to add Pascals by simply adding decibels linearly."
    ]
  },
  faqs: [
    {
      question: "How do you convert dB to Pascals?",
      answer: "Use the formula p = 0.00002 × 10^(dB / 20). Divide the decibel value by 20, raise 10 to that power, and multiply by 0.00002 Pa."
    },
    {
      question: "What is 0 dB in Pascals?",
      answer: "0 dB corresponds to 0.00002 Pascals (20 micropascals or 2 × 10⁻⁵ Pa)."
    },
    {
      question: "What is 94 dB SPL in Pascals?",
      answer: "94 dB SPL is equal to exactly 1.0 Pascal (1 Pa RMS)."
    },
    {
      question: "Why is 20 used in the denominator instead of 10?",
      answer: "Sound pressure is an amplitude field quantity. Because acoustic power is proportional to pressure squared (p²), the logarithmic rule 10 log₁₀(p²) simplifies to 20 log₁₀(p)."
    },
    {
      question: "What is 120 dB in Pascals?",
      answer: "120 dB equals 20.0 Pascals of sound pressure."
    },
    {
      question: "Can sound pressure in Pascals be negative?",
      answer: "Instantaneous sound pressure fluctuations swing above and below atmospheric pressure. However, RMS sound pressure amplitude in Pascals is always positive."
    },
    {
      question: "How much pressure is 140 dB?",
      answer: "140 dB corresponds to 200 Pascals of acoustic sound pressure."
    },
    {
      question: "Does doubling sound pressure double the decibels?",
      answer: "No. Doubling the sound pressure in Pascals increases the sound level by approximately +6 dB."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Sound Pressure", from: "decibel", to: "sound-pressure" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics.",
    "Kinsler, L. E., Frey, A. R., Coppens, A. B., & Sanders, J. V. (2000). Fundamentals of Acoustics (4th ed.). Wiley.",
    "IEC 61672-1:2013 Electroacoustics — Sound level meters."
  ]
};
