import { CustomArticleData } from "./types";

export const decibelToSoundPressure: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "sound-pressure",
  seoTitle: "Decibel to Sound Pressure Converter (dB to Pa) | UnitsConvertors.com",
  metaDescription: "Convert Decibels to Sound Pressure in Pascals (dB to Pa) with scientific precision. Learn pressure level equations, 20 µPa reference baselines, formulas, and worked examples.",
  h1: "Decibel to Sound Pressure Converter",
  introduction: [
    "Sound pressure represents the dynamic local pressure variation from ambient atmospheric pressure caused by acoustic wave propagation. While sound level meters display acoustic magnitude in decibels (dB), physical acoustic analysis and transducer design require evaluating RMS sound pressure directly in pascals (Pa).",
    "Converting sound levels in decibels to physical sound pressure in pascals uses the exponential inverse of the acoustic logarithmic scale: p = p₀ × 10^(dB / 20), where p₀ = 20 micropascals (0.00002 Pa). For instance, an office environment measuring 50 dB exerts an RMS sound pressure of 0.00632 Pa, whereas a 90 dB industrial machine produces 0.6325 Pa.",
    "This guide explains the fundamental acoustic pressure principles, mathematical logarithmic conversions, practical sound pressure benchmarks, and step-by-step calculation examples."
  ],
  quickAnswer: {
    text: "To convert Decibels to Sound Pressure in Pascals, calculate: p = 0.00002 × 10^(dB / 20). For example, 80 dB yields 0.2 Pascals of sound pressure.",
    formulaDisplay: "p (Pa) = 0.00002 × 10^(dB / 20)",
    subtext: "Utilizes standardized acoustic reference p₀ = 20 µPa."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB)?",
    text: "The decibel (symbol: dB) is a logarithmic unit measuring the magnitude of a physical quantity relative to a baseline reference. In acoustics, decibels express sound pressure level L_p on a manageable numerical scale spanning from 0 dB to over 140 dB."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Pressure (Pa)",
    text: "Sound pressure (symbol: p) is the root-mean-square (RMS) pressure deviation from static atmospheric pressure caused by sound waves, measured in Pascals (Pa). One Pascal equals one Newton per square meter (1 N/m²)."
  },
  relationship: "Sound pressure level L_p in decibels relates to physical sound pressure p in pascals through L_p = 20 log₁₀(p / p₀). Inverting this equation gives sound pressure: p = p₀ × 10^(L_p / 20), with p₀ = 20 µPa.",
  relationshipTitle: "Decibel to Sound Pressure Mapping",
  relationshipItems: [
    { label: "0 dB", value: "0.00002 Pa (20 µPa / threshold of hearing)" },
    { label: "50 dB", value: "0.00632 Pa (Moderate office ambience)" },
    { label: "70 dB", value: "0.06325 Pa (Busy vacuum cleaner or street corner)" },
    { label: "94 dB", value: "1.0 Pa (Acoustic calibrator standard reference)" },
    { label: "120 dB", value: "20.0 Pa (Human threshold of auditory discomfort)" }
  ],
  formula: {
    text: "Multiply the baseline acoustic pressure p₀ (0.00002 Pa) by 10 raised to the exponent of (dB / 20).",
    math: "p = 0.00002 × 10^(dB / 20)",
    subtext: "Where p is sound pressure in pascals, and p₀ = 0.00002 Pa."
  },
  formulaTitle: "Decibel to Sound Pressure Conversion Formula",
  practicalTip: {
    title: "Understanding Exponential Growth",
    text: "Because the decibel scale is logarithmic, every 20 dB increase represents a tenfold (10×) increase in physical sound pressure. A 40 dB shift represents a 100× pressure increase."
  },
  expertNote: {
    title: "Acoustic Field Quantity Mechanics",
    text: "In accordance with ISO 80000-8, sound pressure is categorized as a field quantity (amplitude quantity). Consequently, sound pressure level uses the factor of 20 log₁₀(p/p₀) rather than 10 log₁₀(I/I₀) used for energy quantities."
  },
  examples: {
    title: "Step-by-Step dB to Sound Pressure Worked Examples",
    items: [
      {
        title: "Example 1: Measuring Automobile Horn Noise (86 dB)",
        subtitle: "Calculate sound pressure in Pascals for an 86 dB vehicle horn at 1 meter.",
        steps: [
          "Identify decibel value: 86 dB.",
          "Apply conversion formula: p = 0.00002 × 10^(86 / 20).",
          "Calculate exponent: 86 / 20 = 4.3.",
          "Compute 10^4.3 ≈ 19,952.62.",
          "Multiply by p₀: 0.00002 × 19,952.62 ≈ 0.399 Pa.",
          "Final Result: 86 dB produces a sound pressure of approximately 0.399 Pascals."
        ]
      },
      {
        title: "Example 2: Acoustic Guitar Performance (74 dB)",
        subtitle: "Convert a 74 dB unamplified acoustic guitar performance to sound pressure.",
        steps: [
          "Identify decibel value: 74 dB.",
          "Apply formula: p = 0.00002 × 10^(74 / 20) = 0.00002 × 10^3.7.",
          "Compute 10^3.7 ≈ 5,011.87.",
          "Multiply: 0.00002 × 5,011.87 ≈ 0.1002 Pa.",
          "Final Result: 74 dB yields approximately 0.1002 Pascals."
        ]
      },
      {
        title: "Example 3: Jet Engine Proximity (130 dB)",
        subtitle: "Find sound pressure in Pascals for a jet engine roar reaching 130 dB.",
        steps: [
          "Identify sound level: 130 dB.",
          "Apply formula: p = 0.00002 × 10^(130 / 20) = 0.00002 × 10^6.5.",
          "Compute 10^6.5 ≈ 3,162,277.66.",
          "Multiply: 0.00002 × 3,162,277.66 ≈ 63.245 Pa.",
          "Final Result: 130 dB produces an intense sound pressure of 63.245 Pascals."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Sound Pressure Conversion Table",
    headers: ["Sound Level (dB)", "Sound Pressure (Pa)", "Sound Pressure (µPa)", "Acoustic Context"],
    rows: [
      { fromVal: "0 dB", toVal: "0.00002 Pa", extra: "20 µPa", extra2: "Threshold of human hearing" },
      { fromVal: "30 dB", toVal: "0.000632 Pa", extra: "632 µPa", extra2: "Whisper in a quiet bedroom" },
      { fromVal: "50 dB", toVal: "0.006325 Pa", extra: "6,325 µPa", extra2: "Suburban home background noise" },
      { fromVal: "70 dB", toVal: "0.063246 Pa", extra: "63,246 µPa", extra2: "Passenger car interior at 60 mph" },
      { fromVal: "90 dB", toVal: "0.632456 Pa", extra: "632,456 µPa", extra2: "Lawn mower / heavy city traffic" },
      { fromVal: "94 dB", toVal: "1.000000 Pa", extra: "1,000,000 µPa", extra2: "Standard microphone calibration (1 Pa)" },
      { fromVal: "110 dB", toVal: "6.324555 Pa", extra: "6,324,555 µPa", extra2: "Symphony orchestra peak passage" },
      { fromVal: "130 dB", toVal: "63.245553 Pa", extra: "63,245,553 µPa", extra2: "Threshold of auditory pain" }
    ]
  },
  applications: {
    title: "Practical Applications of dB to Sound Pressure Conversion",
    items: [
      {
        title: "Transducer Calibration & Testing",
        text: "Engineers calibrate test microphones using 94 dB SPL calibrators generating exactly 1.0 Pa of RMS sound pressure."
      },
      {
        title: "Acoustic Enclosure Design",
        text: "Structural engineers calculate mechanical force and wall stress on acoustic dampening panels using physical Pascals."
      },
      {
        title: "Audiology & Hearing Protection",
        text: "Audiologists convert patient hearing thresholds to pressure values when analyzing ear canal acoustic impedance."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing dB by 10 instead of 20 when calculating pressure exponents.",
      "Mistaking physical sound pressure in Pascals for sound intensity in Watts per square meter.",
      "Assuming 0 dB represents absolute silence rather than the 20 µPa baseline."
    ]
  },
  faqs: [
    {
      question: "How do I calculate sound pressure from decibels?",
      answer: "Use the formula p = 0.00002 × 10^(dB / 20), where p is sound pressure in pascals."
    },
    {
      question: "What is 70 dB in Pascals?",
      answer: "70 dB corresponds to approximately 0.06325 Pascals of RMS sound pressure."
    },
    {
      question: "What is the standard reference sound pressure in air?",
      answer: "The standard reference sound pressure p₀ in air is 20 micropascals (20 µPa or 0.00002 Pa)."
    },
    {
      question: "How many Pascals is 94 dB?",
      answer: "94 dB corresponds to exactly 1.0 Pascal."
    },
    {
      question: "Why is 20 used in the exponent for sound pressure?",
      answer: "Because sound pressure is an amplitude (field) quantity, and power is proportional to pressure squared."
    },
    {
      question: "What is 80 dB converted to Pascals?",
      answer: "80 dB corresponds to 0.2 Pascals (200,000 µPa)."
    },
    {
      question: "Can sound pressure in Pascals be negative?",
      answer: "No. RMS sound pressure amplitude is always a positive real number."
    },
    {
      question: "What sound level corresponds to 2 Pascals?",
      answer: "2.0 Pascals corresponds to exactly 100 dB SPL."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "ANSI/ASA S1.1-2013 Acoustical Terminology, ASA.",
    "Pierce, A. D. (2019). Acoustics: An Introduction to Its Physical Principles and Applications. Springer."
  ]
};
