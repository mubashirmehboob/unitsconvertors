import { CustomArticleData } from "./types";

export const decibelToSone: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "sone",
  seoTitle: "Decibel to Sone Converter (dB to Sone) | UnitsConvertors.com",
  metaDescription: "Convert Decibels to Sones (dB to Sone) with psychoacoustic precision. Learn Stevens' power law for loudness, the S = 2^((dB-40)/10) formula, 1 Sone reference, and tables.",
  h1: "Decibel to Sone Converter",
  introduction: [
    "While the decibel (dB) is a logarithmic measure of physical acoustic sound pressure, human brains do not perceive loudness logarithmically. A 10 dB increase in physical sound level is perceived by human listeners as roughly doubling the actual subjective loudness.",
    "To represent human loudness perception linearly, psychoacousticians use the sone. By international definition, 1 sone is defined as the loudness of a pure 1,000 Hz tone played at 40 dB SPL.",
    "For sound levels at or above 40 dB SPL, converting decibels to sones uses Stevens' exponential power law: S = 2^((dB - 40) / 10). This guide explains psychoacoustic linear loudness scaling, mathematical formulas, step-by-step examples, and practical acoustic tables."
  ],
  quickAnswer: {
    text: "To convert Decibels (at 1 kHz) to Sones for levels ≥ 40 dB, subtract 40 from the decibel value, divide by 10, and raise 2 to that power: S = 2^((dB - 40) / 10). For example, 50 dB = 2 Sones, 60 dB = 4 Sones, and 70 dB = 8 Sones.",
    formulaDisplay: "S (Sone) = 2^((dB - 40) / 10)",
    subtext: "40 dB = 1 Sone reference benchmark; every +10 dB doubles Sone loudness."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustic Loudness?",
    text: "The decibel (dB SPL) is a logarithmic ratio unit measuring physical acoustic pressure relative to 20 micropascals. Because it is logarithmic, a decibel reading does not scale linearly with human subjective volume sensation."
  },
  aboutTargetUnit: {
    title: "Understanding the Sone",
    text: "Proposed by Stanley Smith Stevens in 1936, the sone is a linear unit of perceived subjective loudness. A sound rated at 4 sones is perceived by standard human listeners as exactly twice as loud as a sound rated at 2 sones, and four times as loud as 1 sone."
  },
  relationship: "The relationship between decibels and sones is exponential. Starting from the 40 dB = 1 sone baseline, every 10 dB increase doubles the value in sones (50 dB = 2 sones, 60 dB = 4 sones, 70 dB = 8 sones, 80 dB = 16 sones).",
  relationshipTitle: "Decibel vs Sone Loudness Progression",
  relationshipItems: [
    { label: "40 dB (40 Phon)", value: "1.0 Sone (Standard reference tone loudness benchmark)" },
    { label: "50 dB (50 Phon)", value: "2.0 Sone (2× reference loudness / quiet living room)" },
    { label: "60 dB (60 Phon)", value: "4.0 Sone (4× reference loudness / normal conversation)" },
    { label: "70 dB (70 Phon)", value: "8.0 Sone (8× reference loudness / vacuum cleaner)" },
    { label: "80 dB (80 Phon)", value: "16.0 Sone (16× reference loudness / loud alarm clock)" },
    { label: "90 dB (90 Phon)", value: "32.0 Sone (32× reference loudness / heavy lawn mower)" }
  ],
  formula: {
    text: "For sound pressure levels L ≥ 40 dB SPL at 1 kHz, calculate sones by raising 2 to the power of ((dB - 40) / 10).",
    math: "S = 2^{\\frac{\\text{dB} - 40}{10}}",
    subtext: "Valid for L ≥ 40 dB SPL at 1 kHz reference."
  },
  formulaTitle: "Decibel to Sone Formula (Stevens' Law)",
  practicalTip: {
    title: "The Doubling Rule for Sones",
    text: "A simple mental math shortcut: Every +10 dB adds a factor of 2 in sones. 40 dB = 1 sone, 50 dB = 2 sones, 60 dB = 4 sones, 70 dB = 8 sones, 80 dB = 16 sones."
  },
  expertNote: {
    title: "ISO 532-1 & ISO 532-2 Stationary Loudness Standards",
    text: "ISO 532-1 (Zwicker method) and ISO 532-2 (Moore-Glasberg method) define precise algorithms for calculating total loudness in sones from complex broadband sound spectrums using critical frequency bands."
  },
  examples: {
    title: "Step-by-Step dB to Sone Worked Examples",
    items: [
      {
        title: "Example 1: Normal Office Conversation",
        subtitle: "Convert a conversational speech level of 60 dB SPL (at 1 kHz) to Sones.",
        steps: [
          "Identify sound level: 60 dB.",
          "Subtract reference baseline: 60 - 40 = 20.",
          "Divide by 10: 20 ÷ 10 = 2.",
          "Raise 2 to power 2: 2² = 4 Sones.",
          "Final Result: 60 dB corresponds to 4 Sones (4× as loud as a 40 dB whisper)."
        ]
      },
      {
        title: "Example 2: Commercial Vacuum Cleaner Noise",
        subtitle: "Convert a appliance noise level of 70 dB to Sones.",
        steps: [
          "Identify sound level: 70 dB.",
          "Subtract reference: 70 - 40 = 30.",
          "Divide by 10: 30 ÷ 10 = 3.",
          "Compute 2³ = 8 Sones.",
          "Final Result: 70 dB equals 8 Sones."
        ]
      },
      {
        title: "Example 3: Heavy Machinery Noise Audit",
        subtitle: "Convert a factory floor noise measurement of 90 dB to Sones.",
        steps: [
          "Identify sound level: 90 dB.",
          "Subtract baseline: 90 - 40 = 50.",
          "Divide by 10: 50 ÷ 10 = 5.",
          "Compute 2⁵ = 32 Sones.",
          "Final Result: 90 dB corresponds to 32 Sones."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Sone Conversion Reference Table (1 kHz Reference)",
    headers: ["Decibels (dB SPL at 1 kHz)", "Loudness (Sones)", "Perceived Loudness Ratio", "Acoustic Source / Context"],
    rows: [
      { fromVal: "40 dB", toVal: "1.0 Sone", extra: "1× (Baseline)", extra2: "Standard 1 Sone reference tone benchmark" },
      { fromVal: "50 dB", toVal: "2.0 Sone", extra: "2× baseline", extra2: "Quiet suburban living room ambient" },
      { fromVal: "60 dB", toVal: "4.0 Sone", extra: "4× baseline", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "70 dB", toVal: "8.0 Sone", extra: "8× baseline", extra2: "Busy restaurant / vacuum cleaner at 1m" },
      { fromVal: "80 dB", toVal: "16.0 Sone", extra: "16× baseline", extra2: "Loud alarm clock / heavy traffic street" },
      { fromVal: "90 dB", toVal: "32.0 Sone", extra: "32× baseline", extra2: "Heavy lawn mower at 1 meter" },
      { fromVal: "100 dB", toVal: "64.0 Sone", extra: "64× baseline", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "110 dB", toVal: "128.0 Sone", extra: "128× baseline", extra2: "Live rock concert front speaker stack" },
      { fromVal: "120 dB", toVal: "256.0 Sone", extra: "256× baseline", extra2: "Threshold of human physical pain" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to Sone Conversion",
    items: [
      {
        title: "HVAC & Appliance Noise Specification",
        text: "Home ventilation fans, kitchen range hoods, and air conditioners are rated in Sones rather than dBA because consumers intuitively understand linear scale ratings."
      },
      {
        title: "Product Sound Quality & Automotive NVH",
        text: "Noise, Vibration, and Harshness (NVH) engineers use Sone metrics to evaluate door closing thuds, electric vehicle cabin quietness, and motor acoustics."
      },
      {
        title: "Architectural & Acoustic Enclosure Design",
        text: "Building acousticians compare fan Sone ratings to select quiet ventilation systems for hospital rooms, recording studios, and classrooms."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Decibel to Sone Calculations",
    items: [
      "Assuming sones scale logarithmically (sones are strictly linear: 2 sones is twice as loud as 1 sone).",
      "Applying S = 2^((dB-40)/10) to sound levels below 40 dB without low-level psychoacoustic correction factors.",
      "Confusing sones with phons (40 phons = 1 sone, 50 phons = 2 sones, 60 phons = 4 sones).",
      "Calculating sones for complex noise without considering spectral frequency distribution."
    ]
  },
  faqs: [
    {
      question: "How do you convert dB to Sones?",
      answer: "For sound levels ≥ 40 dB SPL at 1 kHz, use S = 2^((dB - 40) / 10). Subtract 40 from the decibels, divide by 10, and raise 2 to that exponent."
    },
    {
      question: "What is 1 Sone in decibels?",
      answer: "1 Sone is defined as the loudness of a 1,000 Hz tone at 40 dB SPL (40 Phons)."
    },
    {
      question: "How many Sones is 60 dB?",
      answer: "60 dB SPL at 1 kHz is equal to 4.0 Sones."
    },
    {
      question: "How many Sones is 70 dB?",
      answer: "70 dB SPL at 1 kHz is equal to 8.0 Sones."
    },
    {
      question: "Why are Sones used instead of decibels for ventilation fan ratings?",
      answer: "Decibels are logarithmic and confusing for buyers. Sones are linear: a 1.5 Sone fan is twice as quiet as a 3.0 Sone fan."
    },
    {
      question: "What happens to Sones when decibels increase by 10 dB?",
      answer: "An increase of +10 dB doubles the value in Sones (doubles perceived subjective loudness)."
    },
    {
      question: "What is the difference between a Phon and a Sone?",
      answer: "A Phon is a logarithmic scale of loudness level matching dB SPL at 1 kHz. A Sone is a linear scale of perceived loudness."
    },
    {
      question: "Who invented the Sone unit?",
      answer: "The sone was proposed by American experimental psychologist Stanley Smith Stevens in 1936."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Phon", from: "decibel", to: "phon" },
    { label: "Decibel to Sound Pressure", from: "decibel", to: "sound-pressure" }
  ],
  references: [
    "ISO 532-1:2017 Acoustics — Methods for calculating loudness — Part 1: Zwicker method.",
    "Stevens, S. S. (1936). A scale for the measurement of a psychological magnitude: loudness. Psychological Review, 43(5), 405.",
    "ANSI/ASA S3.4-2007 Procedure for the Computation of Loudness of Steady Sounds."
  ]
};
