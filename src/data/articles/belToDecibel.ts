import { CustomArticleData } from "./types";

export const belToDecibel: CustomArticleData = {
  fromUnitId: "bel",
  toUnitId: "decibel",
  seoTitle: "Bel to Decibel Converter (B to dB) | UnitsConvertors.com",
  metaDescription: "Convert Bels to Decibels (B to dB) with scientific accuracy. Learn the logarithmic scaling factor (1 B = 10 dB), Alexander Graham Bell history, formulas, and worked examples.",
  h1: "Bel to Decibel Converter",
  introduction: [
    "The bel (B) and the decibel (dB) are logarithmic units used in telecommunications, acoustics, electronics, and audio signal processing to express ratios between physical quantities like power, voltage, or sound pressure.",
    "Named after inventor Alexander Graham Bell, one bel corresponds to a tenfold change in power ratio (10:1 or 10¹). Because the bel is a relatively large step for fine acoustic and electronic measurements, engineers introduced the decibel as a submultiple equal to one-tenth of a bel.",
    "Converting bels to decibels is a simple linear scaling operation: multiply the value in bels by 10 (dB = B × 10). This guide provides the mathematical definitions, practical calculation steps, conversion tables, and real-world engineering examples."
  ],
  quickAnswer: {
    text: "To convert Bels to Decibels, multiply the value in bels by 10. For example, a signal loss of 3.5 Bels equals exactly 35 Decibels.",
    formulaDisplay: "dB = B × 10",
    subtext: "1 Bel equals exactly 10 Decibels (1 B = 10 dB)."
  },
  aboutSourceUnit: {
    title: "What is a Bel (B)?",
    text: "The bel (symbol: B) is the primary logarithmic ratio unit introduced by Bell System engineers in the 1920s to quantify power attenuation along standard telephone transmission lines. One bel represents an order of magnitude (10:1) ratio in power or energy density."
  },
  aboutTargetUnit: {
    title: "Understanding the Decibel (dB)",
    text: "The decibel (symbol: dB) is a metric submultiple equal to one-tenth of a bel (deci- = 0.1). Widely adopted across acoustics, RF engineering, audio design, and optics, the decibel offers convenient human-scale numbers without requiring cumbersome decimal fractions."
  },
  relationship: "The decibel is derived directly from the bel by multiplying by 10. Shifting from bels to decibels simply moves the decimal point one digit to the right: 1 B = 10 dB, 5 B = 50 dB, and 12 B = 120 dB.",
  relationshipTitle: "Bel to Decibel Logarithmic Scale Comparison",
  relationshipItems: [
    { label: "0.1 B", value: "1 dB (Barely perceptible change in audio loudness)" },
    { label: "1.0 B", value: "10 dB (10:1 power ratio / whisper or rustling leaves level)" },
    { label: "2.0 B", value: "20 dB (100:1 power ratio / quiet bedroom night ambience)" },
    { label: "6.0 B", value: "60 dB (1,000,000:1 power ratio / typical conversational speech)" },
    { label: "12.0 B", value: "120 dB (10¹²:1 power ratio / human auditory pain threshold)" }
  ],
  formula: {
    text: "Multiply the logarithmic value in bels by 10 to obtain the equivalent value in decibels.",
    math: "\\text{dB} = \\text{B} \\times 10",
    subtext: "1 B = 10 dB."
  },
  formulaTitle: "Bel to Decibel Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert bels to decibels mentally, just move the decimal point one digit to the right. For instance, 4.2 B becomes 42 dB, and 0.8 B becomes 8 dB."
  },
  expertNote: {
    title: "ISO 80000-8 International Unit Standard",
    text: "According to ISO 80000-8 and IEC 60027-3 standards, the bel and decibel express power quantities as L_P = lg(P/P_0) B = 10 lg(P/P_0) dB. For field quantities (voltage, pressure), L_F = 2 lg(F/F_0) B = 20 lg(F/F_0) dB."
  },
  examples: {
    title: "Step-by-Step B to dB Worked Examples",
    items: [
      {
        title: "Example 1: Telephone Transmission Line Attenuation",
        subtitle: "Convert a transmission line power loss reading of 2.4 Bels to decibels.",
        steps: [
          "Identify initial value in bels: 2.4 B.",
          "Apply conversion formula: dB = 2.4 × 10.",
          "Perform calculation: 2.4 × 10 = 24.",
          "Final Result: 2.4 Bels is equal to 24 Decibels."
        ]
      },
      {
        title: "Example 2: Architectural Acoustic Insulation Rating",
        subtitle: "Convert a wall sound isolation rating of 5.5 Bels to decibels.",
        steps: [
          "Identify sound level in bels: 5.5 B.",
          "Apply formula: dB = 5.5 × 10.",
          "Perform multiplication: 5.5 × 10 = 55.",
          "Final Result: 5.5 Bels corresponds to 55 Decibels."
        ]
      },
      {
        title: "Example 3: RF Power Amplifier Gain Evaluation",
        subtitle: "Convert an amplifier power gain of 1.8 Bels to decibels.",
        steps: [
          "Identify power gain: 1.8 B.",
          "Multiply by 10: 1.8 × 10 = 18.",
          "Final Result: 1.8 Bels is equivalent to 18 Decibels."
        ]
      }
    ]
  },
  table: {
    title: "Bel to Decibel Reference Conversion Table",
    headers: ["Bels (B)", "Decibels (dB)", "Power Ratio (P/P₀)", "Acoustic / Technical Context"],
    rows: [
      { fromVal: "0.0 B", toVal: "0 dB", extra: "1:1", extra2: "Reference baseline threshold (20 µPa in air)" },
      { fromVal: "0.5 B", toVal: "5 dB", extra: "3.16:1", extra2: "Very soft background rustle" },
      { fromVal: "1.0 B", toVal: "10 dB", extra: "10:1", extra2: "Soft whisper at 1 meter distance" },
      { fromVal: "2.0 B", toVal: "20 dB", extra: "100:1", extra2: "Quiet recording studio background" },
      { fromVal: "4.0 B", toVal: "40 dB", extra: "10,000:1", extra2: "Quiet residential library room" },
      { fromVal: "6.0 B", toVal: "60 dB", extra: "1,000,000:1", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "8.0 B", toVal: "80 dB", extra: "100,000,000:1", extra2: "Busy commercial street traffic" },
      { fromVal: "9.4 B", toVal: "94 dB", extra: "2,511,886,432:1", extra2: "1.0 Pascal RMS acoustic calibrator tone" },
      { fromVal: "10.0 B", toVal: "100 dB", extra: "10¹⁰:1", extra2: "Pneumatic jackhammer at 2 meters" },
      { fromVal: "12.0 B", toVal: "120 dB", extra: "10¹²:1", extra2: "Human auditory physical pain threshold" }
    ]
  },
  applications: {
    title: "Real-World Applications of Bel to Decibel Conversion",
    items: [
      {
        title: "Audio Signal Processing & Mixing Consoles",
        text: "Audio engineers convert bels to decibels when configuring fader gain stages, dynamic compression thresholds, and equalizer boosts in digital audio workstations."
      },
      {
        title: "Telecommunications & Fiber-Optic Networks",
        text: "Network technicians translate cable loss specifications given in bels into decibels to compute optical power budgets across long-haul fiber links."
      },
      {
        title: "Acoustic Testing & Environmental Noise Audits",
        text: "Environmental acousticians convert building wall transmission metrics from bels to decibels when evaluating compliance with residential noise ordinances."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Bel to Decibel Conversions",
    items: [
      "Dividing by 10 instead of multiplying by 10 when converting from bels to decibels.",
      "Confusing power ratios (10 log₁₀) with voltage or pressure ratios (20 log₁₀) when deriving underlying physical amplitudes.",
      "Adding bel or decibel values linearly without converting back to linear power or pressure values first.",
      "Omitting the reference level (such as dB SPL or dBm) when stating absolute physical measurements."
    ]
  },
  faqs: [
    {
      question: "How many decibels are in 1 bel?",
      answer: "There are exactly 10 decibels in 1 bel (1 B = 10 dB)."
    },
    {
      question: "Why is the decibel used more frequently than the bel?",
      answer: "The bel is a large step (a 10-fold power ratio). The decibel offers smaller, human-friendly numbers for audio, acoustics, and electronics."
    },
    {
      question: "How do I convert 4.5 bels to decibels?",
      answer: "Multiply 4.5 by 10. The result is exactly 45 decibels."
    },
    {
      question: "Is the bel an official SI unit?",
      answer: "The bel is listed by the BIPM as a non-SI unit accepted for use alongside the International System of Units."
    },
    {
      question: "Who invented the bel?",
      answer: "The bel was named in 1923 by engineers at Bell Telephone Laboratories in honor of Alexander Graham Bell."
    },
    {
      question: "Does converting bels to decibels change the actual sound level?",
      answer: "No. Bels and decibels represent the exact same ratio; only the scale factor differs by a multiplier of 10."
    },
    {
      question: "Can bels or decibels be negative?",
      answer: "Yes. Negative bel or decibel values indicate signal levels or sound pressures below the designated reference baseline."
    },
    {
      question: "What is 0.3 Bels in decibels?",
      answer: "0.3 Bels multiplied by 10 equals exactly 3 Decibels (which corresponds to roughly doubling the physical power)."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "BIPM SI Brochure: The International System of Units (9th Edition, 2019).",
    "IEC 60027-3 Letter symbols to be used in electrical technology — Part 3: Logarithmic quantities."
  ]
};
