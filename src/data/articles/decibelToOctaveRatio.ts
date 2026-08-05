import { CustomArticleData } from "./types";

export const decibelToOctaveRatio: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "octave-ratio",
  seoTitle: "Decibel to Octave Ratio Analysis Guide (dB/Octave) | UnitsConvertors.com",
  metaDescription: "Understand Decibel per Octave ratios (dB/octave) in audio filter slopes, equalizer roll-offs, and acoustic band analysis. Learn filter orders (1st through 8th), formulas, and examples.",
  h1: "Decibel to Octave Ratio Analysis Guide",
  introduction: [
    "In audio signal processing and acoustic measurement, frequency-dependent attenuation slopes are described using decibels per octave (dB/octave).",
    "An octave represents a frequency ratio of exactly 2:1 (doubling or halving of frequency, f₂ / f₁ = 2). Decibels per octave (dB/octave) measure the rate at which an audio filter, equalizer, or crossover network attenuates signal level as frequency doubles.",
    "Understanding dB/octave ratios allows audio engineers and acousticians to specify low-pass, high-pass, and band-pass filter orders (6 dB/oct = 1st order, 12 dB/oct = 2nd order, 24 dB/oct = 4th order). This guide explains octave ratio physics, filter attenuation curves, mathematical formulas, and practical engineering applications."
  ],
  quickAnswer: {
    text: "Decibels per octave (dB/octave) express the rate of signal gain/attenuation per doubling of frequency. Each filter order adds -6 dB/octave of slope: a 1st order filter yields -6 dB/octave, a 2nd order filter yields -12 dB/octave, and a 4th order filter yields -24 dB/octave.",
    formulaDisplay: "\\text{Slope (dB/octave)} = 6.02 \\times N \\quad (N = \\text{Filter Order})",
    subtext: "An octave represents a 2:1 frequency ratio (f₂ = 2 × f₁)."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Filter Response?",
    text: "The decibel (dB) is a logarithmic measure of electrical or acoustic amplitude gain. A -3 dB level drop represents the standard cut-off frequency (-3 dB point) where signal power is halved."
  },
  aboutTargetUnit: {
    title: "Understanding the Octave Ratio (2:1 Frequency Ratio)",
    text: "In musical acoustics and signal theory, an octave is the interval between one frequency and another with double or half its value (e.g., 100 Hz to 200 Hz, or 1 kHz to 2 kHz). The number of octaves between f₁ and f₂ is calculated as n = log₂(f₂ / f₁)."
  },
  relationship: "A filter's roll-off slope expressed in dB/octave is directly proportional to its order N. For analog RC/RL active filters, each pole adds -20 dB/decade, which equals approximately -6.02 dB/octave.",
  relationshipTitle: "Filter Order vs dB/Octave Roll-Off Slope",
  relationshipItems: [
    { label: "1st Order Filter (1 Pole)", value: "-6 dB/octave (-20 dB/decade / -50% voltage per octave)" },
    { label: "2nd Order Filter (2 Poles)", value: "-12 dB/octave (-40 dB/decade / Linkwitz-Riley / Butterworth)" },
    { label: "3rd Order Filter (3 Poles)", value: "-18 dB/octave (-60 dB/decade / Steep active crossover)" },
    { label: "4th Order Filter (4 Poles)", value: "-24 dB/octave (-80 dB/decade / Standard 24dB LR4 loudspeaker crossover)" },
    { label: "8th Order Filter (8 Poles)", value: "-48 dB/octave (-160 dB/decade / Brick-wall digital DSP filter)" }
  ],
  formula: {
    text: "To calculate total signal attenuation ΔL in decibels across n octaves given a roll-off slope S in dB/octave, multiply slope S by the number of octaves n = log₂(f₂ / f₁).",
    math: "\\Delta L_{\\text{dB}} = S_{\\text{dB/oct}} \\times \\log_2\\left(\\frac{f_2}{f_1}\\right) = S_{\\text{dB/oct}} \\times \\frac{\\ln(f_2 / f_1)}{\\ln(2)}",
    subtext: "Where f₂ / f₁ is the frequency ratio, and n is the octave span."
  },
  formulaTitle: "Decibel Attenuation across Octave Ratios Formula",
  practicalTip: {
    title: "Rule of 6 dB per Octave",
    text: "Remember that -6 dB/octave and -20 dB/decade represent the exact same mathematical slope (1st-order RC filter). 20 × log₁₀(1/2) ≈ -6.02 dB."
  },
  expertNote: {
    title: "Linkwitz-Riley vs Butterworth Crossover Slopes",
    text: "In loudspeaker crossover design, 24 dB/octave Linkwitz-Riley (LR4) filters are preferred over Butterworth filters because LR4 crossovers maintain a flat summed amplitude response and acoustic in-phase alignment across driver transition regions."
  },
  examples: {
    title: "Step-by-Step dB/Octave Worked Examples",
    items: [
      {
        title: "Example 1: Subwoofer Low-Pass Filter Attenuation",
        subtitle: "Calculate attenuation at 160 Hz for an 80 Hz low-pass filter with a 24 dB/octave slope.",
        steps: [
          "Identify cutoff frequency: f₁ = 80 Hz.",
          "Identify target frequency: f₂ = 160 Hz.",
          "Calculate octaves: f₂ / f₁ = 160 ÷ 80 = 2 (exactly 1 octave).",
          "Apply slope: 1 octave × -24 dB/octave = -24 dB attenuation.",
          "Final Result: The signal at 160 Hz is attenuated by -24 dB."
        ]
      },
      {
        title: "Example 2: 2nd Order High-Pass Filter Roll-Off",
        subtitle: "Calculate attenuation 2 octaves below a 1,000 Hz cutoff for a 12 dB/octave filter.",
        steps: [
          "Identify cutoff: f₁ = 1,000 Hz.",
          "Identify target (2 octaves down): f₂ = 1000 ÷ 2² = 250 Hz.",
          "Calculate attenuation: 2 octaves × -12 dB/octave = -24 dB attenuation.",
          "Final Result: Signal at 250 Hz is attenuated by -24 dB relative to passband."
        ]
      },
      {
        title: "Example 3: Fractional Octave Span Calculation",
        subtitle: "Calculate signal drop across 1.5 octaves for an 18 dB/octave filter slope.",
        steps: [
          "Identify octave span: n = 1.5 octaves.",
          "Identify slope: S = -18 dB/octave.",
          "Multiply: 1.5 × -18 = -27 dB.",
          "Final Result: Signal is attenuated by -27 dB across 1.5 octaves."
        ]
      }
    ]
  },
  table: {
    title: "Filter Order vs dB/Octave & dB/Decade Reference Table",
    headers: ["Filter Order (N)", "Slope (dB/octave)", "Slope (dB/decade)", "Voltage Ratio per Octave", "Common Audio Crossover Type"],
    rows: [
      { fromVal: "1st Order", toVal: "-6 dB/oct", extra: "-20 dB/dec", extra2: "0.500 (-50%)", extra3: "Simple 6dB passive capacitor/inductor" },
      { fromVal: "2nd Order", toVal: "-12 dB/oct", extra: "-40 dB/dec", extra2: "0.250 (-75%)", extra3: "12dB Butterworth / Bessel active filter" },
      { fromVal: "3rd Order", toVal: "-18 dB/oct", extra: "-60 dB/dec", extra2: "0.125 (-87.5%)", extra3: "18dB Butterworth crossover" },
      { fromVal: "4th Order", toVal: "-24 dB/oct", extra: "-80 dB/dec", extra2: "0.0625 (-93.75%)", extra3: "24dB Linkwitz-Riley (LR4) standard" },
      { fromVal: "5th Order", toVal: "-30 dB/oct", extra: "-100 dB/dec", extra2: "0.03125", extra3: "Steep analog active filter" },
      { fromVal: "6th Order", toVal: "-36 dB/oct", extra: "-120 dB/dec", extra2: "0.015625", extra3: "36dB Linkwitz-Riley (LR6) DSP alignment" },
      { fromVal: "8th Order", toVal: "-48 dB/oct", extra: "-160 dB/dec", extra2: "0.003906", extra3: "48dB LR8 steep DSP crossover" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB/Octave Slopes",
    items: [
      {
        title: "Loudspeaker Crossover Design & Driver Protection",
        text: "Crossover networks use 24 dB/octave slopes to prevent low-frequency bass energy from burning out delicate high-frequency tweeter voice coils."
      },
      {
        title: "Parametric Equalization (EQ) & Bandwidth Q-Factor",
        text: "Audio mastering equalizers allow engineers to adjust filter Q-factor, controlling roll-off steepness in dB/octave around target frequency centers."
      },
      {
        title: "Environmental Fractional Octave Band Noise Testing",
        text: "Acousticians analyze industrial noise using 1/1 octave and 1/3 octave band filters (ANSI S1.11) to isolate specific machinery vibration frequencies."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB/Octave Calculations",
    items: [
      "Confusing dB per octave (frequency ratio 2:1) with dB per decade (frequency ratio 10:1).",
      "Assuming a 24 dB/octave filter removes all sound immediately outside the passband (attenuation is a gradual slope, not a wall).",
      "Forgetting that 1st-order filters introduce a 45° phase shift at the cutoff frequency, while 2nd-order filters introduce 90°.",
      "Miscalculating octave counts (e.g., from 100 Hz to 400 Hz is 2 octaves: 100→200→400, not 4 octaves)."
    ]
  },
  faqs: [
    {
      question: "What does dB/octave mean?",
      answer: "dB/octave measures the rate at which an audio filter reduces signal amplitude for every doubling (or halving) of frequency."
    },
    {
      question: "How many dB is one octave for a 1st order filter?",
      answer: "A 1st order filter attenuates signal amplitude by approximately 6 dB per octave (6 dB/octave)."
    },
    {
      question: "What is the difference between dB/octave and dB/decade?",
      answer: "An octave is a 2:1 frequency ratio, while a decade is a 10:1 frequency ratio. -6 dB/octave is mathematically equal to -20 dB/decade."
    },
    {
      question: "Why are 24 dB/octave crossovers popular in audio?",
      answer: "24 dB/octave (4th order Linkwitz-Riley) crossovers provide a steep roll-off to protect drivers while keeping acoustic phase in alignment across crossover frequencies."
    },
    {
      question: "How many octaves are between 100 Hz and 800 Hz?",
      answer: "There are 3 octaves between 100 Hz and 800 Hz (100 Hz → 200 Hz → 400 Hz → 800 Hz)."
    },
    {
      question: "What voltage ratio corresponds to -6 dB?",
      answer: "A -6 dB reduction cuts electrical voltage in half (0.500 × original voltage)."
    },
    {
      question: "What voltage ratio corresponds to -12 dB?",
      answer: "A -12 dB reduction reduces electrical voltage to one-quarter (0.250 × original voltage)."
    },
    {
      question: "How do you calculate the number of octaves between two frequencies?",
      answer: "Use n = log₂(f₂ / f₁) = ln(f₂ / f₁) / ln(2). Divide the higher frequency by the lower frequency and take the base-2 logarithm."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Frequency (Sound)", from: "decibel", to: "frequency-sound" },
    { label: "Decibel to Semitone Ratio", from: "decibel", to: "semitone-ratio" }
  ],
  references: [
    "IEC 61260-1:2014 Electroacoustics — Octave-band and fractional-octave-band filters.",
    "Linkwitz, S. H. (1976). Active Crossover Networks for Noncoincident Drivers. Journal of the Audio Engineering Society, 24(1), 2-8.",
    "ANSI S1.11-2014 Specification for Octave-Band and Fractional-Octave-Band Analog and Digital Filters."
  ]
};
