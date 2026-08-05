import { CustomArticleData } from "./types";

export const decibelToDecibelSpl: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "decibel-spl",
  seoTitle: "Decibel to Decibel SPL Converter (dB to dB SPL) | UnitsConvertors.com",
  metaDescription: "Convert Decibels to Decibel Sound Pressure Level (dB to dB SPL) with scientific precision. Learn acoustics reference baselines, 20 µPa thresholds, formulas, and practical examples.",
  h1: "Decibel to Decibel SPL Converter",
  introduction: [
    "In acoustics and audio engineering, acoustic signal strength is commonly measured in decibels (dB) and decibel sound pressure level (dB SPL). While 'dB' represents a relative ratio between two power or voltage values, 'dB SPL' explicitly ties the logarithmic level to the international standardized reference pressure of 20 micropascals (20 µPa), which represents the threshold of human hearing at 1 kHz.",
    "When evaluating unweighted airborne sound levels where the baseline reference is understood to be 20 µPa, a decibel reading directly maps 1-to-1 to decibel SPL. Understanding this relationship helps audio technicians, industrial hygienists, and acoustical engineers differentiate between abstract gain ratios and absolute environmental acoustic pressure.",
    "This guide provides the physical background, mathematical formulas, acoustic reference thresholds, and practical worked examples to seamlessly convert decibels to decibel SPL."
  ],
  quickAnswer: {
    text: "When referencing acoustic sound pressure relative to 20 µPa, 1 Decibel equals exactly 1 Decibel SPL (1:1 ratio). For example, a 70 dB acoustic pressure reading corresponds to 70 dB SPL.",
    formulaDisplay: "dB SPL = dB",
    subtext: "Assumes standard acoustic reference pressure p₀ = 20 µPa (0.00002 Pa)."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB)?",
    text: "The decibel (symbol: dB) is a logarithmic unit expressing the ratio of a physical quantity—such as acoustic power, sound intensity, or voltage—relative to a specified or implied reference level. Because human auditory perception operates logarithmically, the decibel provides a practical numerical scale for acoustic engineering."
  },
  aboutTargetUnit: {
    title: "Understanding Decibel SPL (dB SPL)",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is an absolute logarithmic measure of effective sound pressure relative to p₀ = 20 µPa in air. Defined by ISO 80000-8, 0 dB SPL marks the nominal threshold of hearing for a healthy human ear at 1,000 Hz, while 120 dB SPL represents the threshold of physical discomfort."
  },
  relationship: "For airborne sound pressure measurements referencing 20 µPa, decibels and decibel SPL share an identical numerical scale: L_p = 20 log₁₀(p / p₀) dB SPL. Thus, converting dB to dB SPL requires no multiplier.",
  relationshipTitle: "Decibel to Decibel SPL Acoustic Comparison",
  relationshipItems: [
    { label: "0 dB", value: "0 dB SPL (Threshold of human hearing / 20 µPa)" },
    { label: "30 dB", value: "30 dB SPL (Quiet recording booth environment)" },
    { label: "60 dB", value: "60 dB SPL (Standard conversational speech at 1 meter)" },
    { label: "90 dB", value: "90 dB SPL (Heavy machinery or industrial workshop)" },
    { label: "120 dB", value: "120 dB SPL (Threshold of auditory pain / jet engine proximity)" }
  ],
  formula: {
    text: "Under standard atmospheric conditions referencing 20 µPa, sound level in decibels equals decibel SPL.",
    math: "dB SPL = dB",
    subtext: "Where baseline reference pressure p₀ = 20 µPa."
  },
  formulaTitle: "Decibel to Decibel SPL Conversion Formula",
  practicalTip: {
    title: "Understanding Reference Conditions",
    text: "Always confirm that your sound level meter or acoustic software utilizes the standard airborne reference p₀ = 20 µPa. In underwater acoustics, the reference pressure is 1 µPa, which introduces a 62 dB offset."
  },
  expertNote: {
    title: "ISO 80000-8 & ANSI S1.1 Acoustical Standards",
    text: "According to ISO 80000-8, sound pressure level L_p is defined as 20 log₁₀(p / p₀) dB, where p is the root-mean-square (RMS) sound pressure. When the reference p₀ is explicitly 20 µPa, the suffix 'SPL' is appended to distinguish it from electrical or intensity decibel quantities."
  },
  examples: {
    title: "Step-by-Step dB to dB SPL Calculation Examples",
    items: [
      {
        title: "Example 1: Concert Venue Noise Survey",
        subtitle: "A sound engineer logs an unweighted ambient sound level of 98 dB.",
        steps: [
          "Identify unweighted acoustic level: 98 dB.",
          "Verify standard reference pressure: 20 µPa.",
          "Apply 1:1 mapping formula: dB SPL = 98.",
          "Final Result: 98 dB is equivalent to 98 dB SPL."
        ]
      },
      {
        title: "Example 2: Architectural Classroom Acoustics",
        subtitle: "An acoustic consultant measures a background ventilation noise of 35 dB.",
        steps: [
          "Identify background sound level: 35 dB.",
          "Apply conversion: 35 dB = 35 dB SPL.",
          "Final Result: 35 dB corresponds to 35 dB SPL."
        ]
      },
      {
        title: "Example 3: Occupational Noise Assessment",
        subtitle: "A factory health inspector records a stamping press noise of 105 dB.",
        steps: [
          "Identify press sound level: 105 dB.",
          "Map directly to SPL scale: 105 dB = 105 dB SPL.",
          "Final Result: 105 dB equals 105 dB SPL."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Decibel SPL Reference Table",
    headers: ["Decibels (dB)", "Decibel SPL (dB SPL)", "RMS Pressure (Pa)", "Environmental Acoustic Example"],
    rows: [
      { fromVal: "0 dB", toVal: "0 dB SPL", extra: "0.00002 Pa", extra2: "Threshold of human hearing" },
      { fromVal: "20 dB", toVal: "20 dB SPL", extra: "0.0002 Pa", extra2: "Rustling leaves in a quiet garden" },
      { fromVal: "40 dB", toVal: "40 dB SPL", extra: "0.002 Pa", extra2: "Quiet residential library room" },
      { fromVal: "60 dB", toVal: "60 dB SPL", extra: "0.02 Pa", extra2: "Normal spoken conversation at 1 m" },
      { fromVal: "80 dB", toVal: "80 dB SPL", extra: "0.2 Pa", extra2: "Loud urban traffic / vacuum cleaner" },
      { fromVal: "100 dB", toVal: "100 dB SPL", extra: "2.0 Pa", extra2: "Pneumatic drill / motorcycle engine" },
      { fromVal: "120 dB", toVal: "120 dB SPL", extra: "20.0 Pa", extra2: "Threshold of auditory discomfort / pain" },
      { fromVal: "140 dB", toVal: "140 dB SPL", extra: "200.0 Pa", extra2: "Jet engine at 30 meters distance" }
    ]
  },
  applications: {
    title: "Applications of dB to dB SPL Conversion",
    items: [
      {
        title: "Acoustic Engineering & Noise Audits",
        text: "Ensures field sound level measurements properly denote absolute acoustic pressure relative to standardized hearing thresholds during compliance checks."
      },
      {
        title: "Audio Production & Studio Calibration",
        text: "Allows audio technicians to calibrate studio monitor speakers to reference SPL levels (e.g., 85 dB SPL) for accurate mixing and mastering."
      },
      {
        title: "Occupational Safety (OSHA & NIOSH)",
        text: "Translates raw noise dosimeter readings into standardized SPL exposure limits to prevent noise-induced hearing loss in workplace environments."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB to dB SPL Conversions",
    items: [
      "Assuming dB SPL applies to electrical signals or amplifier power gain (dB SPL is strictly an acoustic pressure unit).",
      "Overlooking frequency weighting (dB SPL is unweighted, whereas dBA applies A-weighting spectral filters).",
      "Confusing airborne sound pressure reference (20 µPa) with underwater sound pressure reference (1 µPa)."
    ]
  },
  faqs: [
    {
      question: "Is 1 dB equal to 1 dB SPL?",
      answer: "Yes, when measuring airborne sound pressure relative to the international reference of 20 micropascals, 1 dB equals 1 dB SPL."
    },
    {
      question: "What does 'SPL' stand for?",
      answer: "SPL stands for Sound Pressure Level, which quantifies local pressure fluctuations caused by sound waves relative to 20 µPa."
    },
    {
      question: "What is 0 dB SPL in Pascals?",
      answer: "0 dB SPL is equal to 20 micropascals (20 µPa or 0.00002 Pa), corresponding to the threshold of human hearing at 1 kHz."
    },
    {
      question: "What is the difference between dB and dB SPL?",
      answer: "dB is a general logarithmic ratio between any two values, whereas dB SPL is specifically calibrated to 20 µPa sound pressure in air."
    },
    {
      question: "Can dB SPL be negative?",
      answer: "Yes. Sound pressures lower than 20 µPa result in negative dB SPL values (e.g., -10 dB SPL in an anechoic chamber)."
    },
    {
      question: "How does dB SPL relate to dBA?",
      answer: "dB SPL measures raw unweighted physical pressure, while dBA adjusts SPL according to the frequency sensitivity of human ears."
    },
    {
      question: "Why is 20 µPa used as the SPL baseline?",
      answer: "20 micropascals was selected by acousticians because it represents the quietest 1 kHz pure tone audible by a young, healthy human."
    },
    {
      question: "What is the pain threshold in dB SPL?",
      answer: "The threshold of human acoustic pain is approximately 120 to 130 dB SPL (20 to 63 Pascals of sound pressure)."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, International Organization for Standardization.",
    "ANSI/ASA S1.1-2013 Acoustical Terminology, Acoustical Society of America.",
    "Kinsler, L. E., Frey, A. R., Coppens, A. B., & Sanders, J. V. (2000). Fundamentals of Acoustics (4th ed.). Wiley."
  ]
};
