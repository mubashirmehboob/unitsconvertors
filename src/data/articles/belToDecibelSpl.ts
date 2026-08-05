import { CustomArticleData } from "./types";

export const belToDecibelSpl: CustomArticleData = {
  fromUnitId: "bel",
  toUnitId: "decibel-spl",
  seoTitle: "Bel to Decibel SPL Converter (B to dB SPL) | UnitsConvertors.com",
  metaDescription: "Convert Bels to Decibels Sound Pressure Level (B to dB SPL) with scientific accuracy. Learn logarithmic sound scaling, 20 µPa reference baselines, formulas, and examples.",
  h1: "Bel to Decibel SPL Converter",
  introduction: [
    "The bel (B) and decibel sound pressure level (dB SPL) are logarithmic acoustic units used to express sound pressure relative to the human auditory threshold. One bel represents a tenfold increase in acoustic power ratio (10:1). Because one bel is a coarse unit for subtle sound level variations, acoustic standards express sound pressure level in decibels (dB SPL), where 1 Bel equals exactly 10 dB SPL.",
    "Decibel SPL explicitly anchors acoustic pressure to the international reference baseline p₀ = 20 micropascals (20 µPa), which marks the threshold of human hearing at 1 kHz. Converting bels to dB SPL simply requires multiplying the bel value by 10 (dB SPL = B × 10). For instance, 6.0 Bels corresponds to 60 dB SPL.",
    "This guide presents the foundational acoustic principles, mathematical formulas, acoustic reference thresholds, step-by-step worked examples, and conversion tables to convert bels to decibel SPL."
  ],
  quickAnswer: {
    text: "To convert Bels to Decibels Sound Pressure Level (dB SPL), multiply the value in Bels by 10. For example, 8.0 Bels equals 80 dB SPL.",
    formulaDisplay: "dB SPL = B × 10",
    subtext: "1 Bel equals exactly 10 Decibels SPL (referencing p₀ = 20 µPa)."
  },
  aboutSourceUnit: {
    title: "What is a Bel (B)?",
    text: "The bel (symbol: B) is the fundamental logarithmic unit created by Bell System engineers in the 1920s to quantify signal attenuation. One bel represents a power ratio order of magnitude (10¹). In acoustics, bels quantify large power and pressure ratios."
  },
  aboutTargetUnit: {
    title: "Understanding Decibel SPL (dB SPL)",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is the standard acoustic pressure metric defined by ISO 80000-8 as 20 log₁₀(p / p₀), where p₀ = 20 µPa (0.00002 Pa). It translates raw physical acoustic pressures into a practical 0–140 dB scale."
  },
  relationship: "Because 'deci-' means one-tenth, 1 bel contains exactly 10 decibels. When referencing 20 µPa acoustic pressure, converting bels to decibel SPL involves shifting the decimal point one place to the right (B × 10).",
  relationshipTitle: "Bel to Decibel SPL Scale Mapping",
  relationshipItems: [
    { label: "0.0 B", value: "0 dB SPL (Threshold of human hearing / 20 µPa)" },
    { label: "3.0 B", value: "30 dB SPL (Quiet bedroom or studio booth)" },
    { label: "6.0 B", value: "60 dB SPL (Normal spoken conversational voice)" },
    { label: "9.0 B", value: "90 dB SPL (Heavy city traffic / industrial machinery)" },
    { label: "12.0 B", value: "120 dB SPL (Threshold of auditory pain)" }
  ],
  formula: {
    text: "Multiply the sound level in bels by 10 to obtain the equivalent sound pressure level in decibels SPL.",
    math: "dB SPL = B × 10",
    subtext: "Where baseline reference pressure p₀ = 20 µPa."
  },
  formulaTitle: "Bel to Decibel SPL Conversion Formula",
  practicalTip: {
    title: "Quick Decimal Shift Rule",
    text: "To convert bels to dB SPL instantly in your head, simply move the decimal point one place to the right: 4.5 B becomes 45 dB SPL, and 9.2 B becomes 92 dB SPL."
  },
  expertNote: {
    title: "ISO 80000-8 International Acoustical Standard",
    text: "Under ISO 80000-8 recommendations, logarithmic quantities express power and pressure ratios relative to specified baselines. When expressing sound pressure level, L_p = lg(p/p₀) B = 20 lg(p/p₀) dB SPL."
  },
  examples: {
    title: "Step-by-Step B to dB SPL Worked Examples",
    items: [
      {
        title: "Example 1: Studio Noise Floor Rating",
        subtitle: "Convert a studio background acoustics measurement of 2.5 Bels to dB SPL.",
        steps: [
          "Identify sound level in bels: 2.5 B.",
          "Apply conversion formula: dB SPL = 2.5 × 10.",
          "Perform multiplication: 2.5 × 10 = 25.",
          "Final Result: 2.5 Bels corresponds to 25 dB SPL."
        ]
      },
      {
        title: "Example 2: Industrial Workshop Machinery Noise",
        subtitle: "Convert an industrial acoustic emission value of 9.4 Bels to dB SPL.",
        steps: [
          "Identify sound level in bels: 9.4 B.",
          "Apply formula: dB SPL = 9.4 × 10.",
          "Multiply: 9.4 × 10 = 94.",
          "Final Result: 9.4 Bels equals 94 dB SPL (1.0 Pa RMS pressure)."
        ]
      },
      {
        title: "Example 3: Concert Sound System Output",
        subtitle: "Convert a stadium concert loudspeaker level of 11.8 Bels to dB SPL.",
        steps: [
          "Identify sound level: 11.8 B.",
          "Multiply by 10: 11.8 × 10 = 118.",
          "Final Result: 11.8 Bels corresponds to 118 dB SPL."
        ]
      }
    ]
  },
  table: {
    title: "Bel to Decibel SPL Conversion Reference Table",
    headers: ["Bels (B)", "Decibel SPL (dB SPL)", "RMS Pressure (Pa)", "Environmental Acoustic Context"],
    rows: [
      { fromVal: "0.0 B", toVal: "0 dB SPL", extra: "0.00002 Pa", extra2: "Threshold of human hearing" },
      { fromVal: "2.0 B", toVal: "20 dB SPL", extra: "0.0002 Pa", extra2: "Rustling leaves in a calm forest" },
      { fromVal: "4.0 B", toVal: "40 dB SPL", extra: "0.002 Pa", extra2: "Quiet residential bedroom" },
      { fromVal: "6.0 B", toVal: "60 dB SPL", extra: "0.02 Pa", extra2: "Normal spoken conversation" },
      { fromVal: "8.0 B", toVal: "80 dB SPL", extra: "0.2 Pa", extra2: "Busy city traffic street" },
      { fromVal: "10.0 B", toVal: "100 dB SPL", extra: "2.0 Pa", extra2: "Pneumatic jackhammer at 1m" },
      { fromVal: "12.0 B", toVal: "120 dB SPL", extra: "20.0 Pa", extra2: "Threshold of human ear discomfort" },
      { fromVal: "14.0 B", toVal: "140 dB SPL", extra: "200.0 Pa", extra2: "Jet engine takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Applications of Bel to Decibel SPL Conversions",
    items: [
      {
        title: "Acoustic Product Noise Labeling",
        text: "European acoustic standards (e.g. Blue Angel, ISO 9296) specify computer and printer noise power levels in Bels, which engineers convert to dB SPL for room exposure calculations."
      },
      {
        title: "Building Acoustics & Sound Insulation",
        text: "Architects convert wall sound transmission loss ratings from Bels to dB SPL to evaluate compliance with building code privacy standards."
      },
      {
        title: "Telecommunications & Audio Systems",
        text: "Audio equipment manufacturers convert systemic signal-to-noise ratios from Bels into decibel SPL for studio monitor setup."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls to Avoid",
    items: [
      "Dividing by 10 instead of multiplying when converting Bels to dB SPL.",
      "Confusing airborne sound pressure reference (20 µPa) with electrical reference voltages (dBu/dBV)."
    ]
  },
  faqs: [
    {
      question: "How many dB SPL are in one Bel?",
      answer: "There are exactly 10 dB SPL in 1 Bel."
    },
    {
      question: "How do you convert Bels to dB SPL?",
      answer: "Multiply the Bel value by 10 (dB SPL = B × 10)."
    },
    {
      question: "What is 7.5 Bels in dB SPL?",
      answer: "7.5 Bels equals 75 dB SPL."
    },
    {
      question: "Why do sound level meters display dB SPL instead of Bels?",
      answer: "dB SPL provides finer, human-scale numbers (0 to 140) without requiring decimal fractions for minor sound changes."
    },
    {
      question: "What is 0 Bels in dB SPL?",
      answer: "0 Bels equals 0 dB SPL, corresponding to the reference pressure 20 micropascals."
    },
    {
      question: "Is Bel an official acoustic unit?",
      answer: "Yes, the Bel is accepted for use alongside the SI system by BIPM and defined in ISO 80000-8."
    },
    {
      question: "What is 10 Bels in dB SPL?",
      answer: "10 Bels equals 100 dB SPL (2.0 Pascals of sound pressure)."
    },
    {
      question: "Does converting Bels to dB SPL change the sound level?",
      answer: "No. Bels and dB SPL measure the exact same physical sound pressure ratio; only the numerical scale factor differs by 10."
    }
  ],
  relatedList: [
    { label: "Bel to Decibel", from: "bel", to: "decibel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Bel", from: "decibel", to: "bel" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "ISO 9296:2017 Acoustics — Declared noise emission values of information technology and telecommunications equipment.",
    "BIPM Le Système international d'unités (SI Brochure 9th Edition, 2019)."
  ]
};
