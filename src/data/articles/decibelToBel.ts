import { CustomArticleData } from "./types";

export const decibelToBel: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "bel",
  seoTitle: "Decibel to Bel Converter (dB to B) | UnitsConvertors.com",
  metaDescription: "Convert Decibels to Bels (dB to B) with exact scientific accuracy. Learn the logarithmic scale, SI ratio standards, Alexander Graham Bell history, formulas, and worked examples.",
  h1: "Decibel to Bel Converter",
  introduction: [
    "The decibel (dB) and the bel (B) are dimensionless logarithmic units used across acoustics, telecommunications, audio engineering, and electronics to express ratios between physical quantities such as power, sound intensity, and acoustic pressure.",
    "Named in honor of Alexander Graham Bell, the bel represents a tenfold increase in power ratio (a factor of 10¹). Because one bel is a relatively large unit for everyday signal and sound level differences, engineers established the decibel as a submultiple equal to one-tenth of a bel (1 dB = 0.1 B).",
    "Converting decibels to bels is a straightforward linear scaling operation on a logarithmic quantity: simply divide the value in decibels by 10. This guide provides fundamental mathematical background, historical context, step-by-step calculations, and practical engineering reference tables."
  ],
  quickAnswer: {
    text: "To convert Decibels to Bels, divide the value in decibels by 10. For example, a sound pressure level of 80 dB corresponds to exactly 8.0 Bels.",
    formulaDisplay: "B = dB ÷ 10",
    subtext: "1 Bel equals exactly 10 Decibels (1 dB = 0.1 B)."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB)?",
    text: "The decibel (symbol: dB) is a metric unit that quantifies power or field amplitude ratios on a logarithmic scale. In acoustics, 0 dB SPL corresponds to the threshold of human hearing (20 micropascals). In electronics, decibels describe amplifier power gain, attenuation in transmission lines, and noise figures."
  },
  aboutTargetUnit: {
    title: "Understanding the Bel (B)",
    text: "The bel (symbol: B) is the base logarithmic unit introduced by Bell System engineers in the 1920s to quantify signal loss along standard telephone cables. One bel corresponds to an order of magnitude (10:1) power ratio. Although less common in commercial audio specs than the decibel, the bel remains the formal base unit in international ISO 80000-8 standards."
  },
  relationship: "The decibel is a standard SI prefix derivative equal to one-tenth of a bel (deci- = 10⁻¹). Therefore, converting decibels to bels involves moving the decimal point one place to the left: 10 dB = 1 B, 50 dB = 5 B, and 100 dB = 10 B.",
  relationshipTitle: "Decibel to Bel Scale Comparison",
  relationshipItems: [
    { label: "10 dB", value: "1.0 B (10:1 power ratio / gentle whisper level)" },
    { label: "20 dB", value: "2.0 B (100:1 power ratio / quiet library atmosphere)" },
    { label: "60 dB", value: "6.0 B (1,000,000:1 power ratio / typical conversational speech)" },
    { label: "90 dB", value: "9.0 B (1,000,000,000:1 power ratio / heavy lawn mower noise)" },
    { label: "120 dB", value: "12.0 B (10¹²:1 power ratio / human auditory discomfort threshold)" }
  ],
  formula: {
    text: "Divide the signal or sound level in decibels by 10 to obtain the value in bels.",
    math: "B = dB / 10",
    subtext: "Alternatively: B = dB × 0.1."
  },
  formulaTitle: "Decibel to Bel Conversion Formula",
  practicalTip: {
    title: "Quick Mental Calculation Rule",
    text: "Converting decibels to bels requires only shifting the decimal point one digit to the left. For instance, 45 dB becomes 4.5 B, and 115 dB becomes 11.5 B."
  },
  expertNote: {
    title: "ISO 80000-8 International Standard Compliance",
    text: "Under ISO 80000-8 and IEC 60027-3 recommendations, the bel and decibel are defined as coherent logarithmic quantities. When expressing power quantities, L_P = lg(P/P_0) B = 10 lg(P/P_0) dB. For field quantities (voltage, pressure), L_F = 20 lg(F/F_0) dB = 2 lg(F/F_0) B."
  },
  examples: {
    title: "Step-by-Step dB to B Worked Examples",
    items: [
      {
        title: "Example 1: Studio Audio Equipment Signal Level",
        subtitle: "Convert a professional mixing console output of 24 dB to bels.",
        steps: [
          "Identify initial level in decibels: 24 dB.",
          "Apply conversion formula: B = 24 ÷ 10.",
          "Perform calculation: 24 / 10 = 2.4.",
          "Final Result: 24 dB is equal to 2.4 Bels."
        ]
      },
      {
        title: "Example 2: Industrial Machine Shop Noise Measurement",
        subtitle: "Convert an industrial ambient acoustic pressure reading of 95 dB to bels.",
        steps: [
          "Identify sound level: 95 dB.",
          "Apply formula: B = 95 ÷ 10.",
          "Perform division: 95 / 10 = 9.5.",
          "Final Result: 95 dB corresponds to 9.5 Bels."
        ]
      },
      {
        title: "Example 3: Fiber Optic Cable Transmission Loss",
        subtitle: "Convert a telecommunication line attenuation factor of 3.5 dB to bels.",
        steps: [
          "Identify cable signal attenuation: 3.5 dB.",
          "Divide by 10: 3.5 ÷ 10 = 0.35.",
          "Final Result: 3.5 dB is equivalent to 0.35 Bels."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Bel Conversion Reference Table",
    headers: ["Decibels (dB)", "Bels (B)", "Power Ratio (P/P₀)", "Acoustic / Environmental Context"],
    rows: [
      { fromVal: "0 dB", toVal: "0.0 B", extra: "1:1", extra2: "Threshold of human hearing (20 µPa)" },
      { fromVal: "10 dB", toVal: "1.0 B", extra: "10:1", extra2: "Rustling leaves in a calm woods" },
      { fromVal: "20 dB", toVal: "2.0 B", extra: "100:1", extra2: "Quiet recording booth background noise" },
      { fromVal: "30 dB", toVal: "3.0 B", extra: "1,000:1", extra2: "Soft whisper at 1 meter distance" },
      { fromVal: "50 dB", toVal: "5.0 B", extra: "100,000:1", extra2: "Suburban residential evening ambience" },
      { fromVal: "60 dB", toVal: "6.0 B", extra: "1,000,000:1", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "80 dB", toVal: "8.0 B", extra: "100,000,000:1", extra2: "Busy city street traffic / alarm clock" },
      { fromVal: "100 dB", toVal: "10.0 B", extra: "10¹⁰:1", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "120 dB", toVal: "12.0 B", extra: "10¹²:1", extra2: "Human auditory discomfort / rock concert" },
      { fromVal: "140 dB", toVal: "14.0 B", extra: "10¹⁴:1", extra2: "Jet aircraft engine takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to Bel Conversion",
    items: [
      {
        title: "Telecommunications & Transmission Line Analysis",
        text: "Telecommunication engineers use bels and decibels to quantify power attenuation along copper wires, coaxial cables, and fiber-optic backbones, simplifying cascading amplifier gains into simple addition."
      },
      {
        title: "Acoustic Engineering & Environmental Noise Control",
        text: "Architectural acousticians convert sound levels between decibels and bels when auditing building wall sound transmission class (STC) ratings and industrial machinery noise output."
      },
      {
        title: "Audio Signal Processing & Hardware Design",
        text: "Audio equipment designers evaluate total harmonic distortion (THD), signal-to-noise ratios (SNR), and dynamic range across mixing consoles, digital converters, and power amplifiers."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes to Avoid in dB to B Conversions",
    items: [
      "Confusing power ratios (10 log₁₀) with amplitude/voltage ratios (20 log₁₀) when deriving underlying ratios.",
      "Adding decibel values linearly without converting back to linear power or pressure quantities first.",
      "Assuming 1 bel is equal to 100 decibels rather than 10 decibels (deci- means one-tenth, not one-hundredth).",
      "Omitting the reference level (e.g. dB SPL vs. dBm vs. dBu) when reporting absolute sound or electrical levels."
    ]
  },
  faqs: [
    {
      question: "How many decibels are in one bel?",
      answer: "There are exactly 10 decibels in 1 bel. The prefix 'deci-' denotes one-tenth, so a decibel is one-tenth of a bel."
    },
    {
      question: "Why do engineers use decibels more often than bels?",
      answer: "The bel is a relatively coarse step (a factor of 10 in power). The decibel provides finer, human-scale numbers for audio, acoustics, and electronics without requiring small decimals."
    },
    {
      question: "Is a bel an official SI unit?",
      answer: "The bel is listed by the International Bureau of Weights and Measures (BIPM) as a non-SI unit accepted for use alongside the SI system."
    },
    {
      question: "How do I convert 75 dB to Bels?",
      answer: "Divide 75 by 10. The result is exactly 7.5 bels."
    },
    {
      question: "What is the origin of the term 'bel'?",
      answer: "The bel was named in 1923 by Bell Telephone Laboratories in honor of Alexander Graham Bell, inventor of the telephone."
    },
    {
      question: "Does converting decibels to bels change the sound level?",
      answer: "No. Decibels and bels measure the exact same physical ratio or level; only the numerical scale factor differs by a factor of 10."
    },
    {
      question: "How does a 3 dB increase compare in bels?",
      answer: "A 3 dB increase represents approximately a doubling of power (+0.3 Bels)."
    },
    {
      question: "Can bels be negative?",
      answer: "Yes. Negative decibel or bel values indicate levels below the designated reference baseline (such as signals quieter than 0 dB)."
    }
  ],
  relatedList: [
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Pascal (Sound)", from: "decibel", to: "pascal-sound" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" },
    { label: "Decibel to Sound Power Level", from: "decibel", to: "sound-power-level" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, International Organization for Standardization.",
    "BIPM Le Système international d'unités (SI Brochure 9th Edition, 2019).",
    "ANSI/ASA S1.1-2013 Acoustical Terminology, Acoustical Society of America."
  ]
};
