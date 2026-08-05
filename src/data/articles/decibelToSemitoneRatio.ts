import { CustomArticleData } from "./types";

export const decibelToSemitoneRatio: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "semitone-ratio",
  seoTitle: "Decibel to Semitone Ratio Analysis Guide (dB/Semitone) | UnitsConvertors.com",
  metaDescription: "Understand Decibel per Semitone ratios (dB/semitone) in musical acoustics, synthesizer filters, and pitch tuning. Learn 12-EDO equal temperament formulas, cents, and filter slopes.",
  h1: "Decibel to Semitone Ratio Analysis Guide",
  introduction: [
    "In musical acoustics, digital audio synthesis, and instrument tuning, pitch intervals are measured in semitones rather than octaves.",
    "Under the standard 12-tone equal temperament (12-EDO) tuning system, one octave is divided into 12 equal semitones, where each semitone represents a frequency ratio of 2^(1/12) ≈ 1.059463. Consequently, filter roll-off slopes and spectral equalizer curves can be expressed in decibels per semitone (dB/semitone).",
    "Converting filter slopes from decibels per octave to decibels per semitone requires dividing by 12: Slope (dB/semitone) = Slope (dB/octave) / 12. This guide covers equal temperament mathematics, musical pitch intervals, cents, synthesizer filter poles, and practical audio engineering calculations."
  ],
  quickAnswer: {
    text: "Because 1 octave contains exactly 12 semitones in equal temperament tuning, divide decibels per octave by 12 to find decibels per semitone. For example, a 12 dB/octave filter slope equals -1.0 dB per semitone, while a 24 dB/octave slope equals -2.0 dB per semitone.",
    formulaDisplay: "\\text{Slope (dB/semitone)} = \\frac{\\text{Slope (dB/octave)}}{12}",
    subtext: "1 Octave = 12 Semitones; 1 Semitone = 100 Cents; Frequency ratio = 2^(1/12) ≈ 1.05946."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Musical Acoustics?",
    text: "The decibel (dB) quantifies electrical or acoustic audio level gain. In music production, EQ boosts/cuts and synthesizer filter resonance levels are specified in decibels."
  },
  aboutTargetUnit: {
    title: "Understanding the Semitone Ratio (2^(1/12))",
    text: "A semitone (half-step) is the smallest musical interval in standard Western music (e.g. C to C#). In 12-EDO equal temperament, multiplying any frequency by 2^(1/12) ≈ 1.059463 raises the pitch by exactly 1 semitone."
  },
  relationship: "There are 12 semitones in 1 octave. Therefore, a filter slope of -6 dB/octave attenuates the signal by -0.5 dB for every semitone step in pitch, while a -24 dB/octave filter attenuates by -2.0 dB per semitone.",
  relationshipTitle: "Filter Slopes in dB/Octave vs dB/Semitone",
  relationshipItems: [
    { label: "1st Order Filter (-6 dB/oct)", value: "-0.5 dB per semitone (-0.005 dB per cent)" },
    { label: "2nd Order Filter (-12 dB/oct)", value: "-1.0 dB per semitone (-0.010 dB per cent / 2-pole Moog/Oberheim filter)" },
    { label: "3rd Order Filter (-18 dB/oct)", value: "-1.5 dB per semitone (-0.015 dB per cent / 3-pole TB-303 acid filter)" },
    { label: "4th Order Filter (-24 dB/oct)", value: "-2.0 dB per semitone (-0.020 dB per cent / 4-pole Moog ladder filter)" },
    { label: "8th Order Filter (-48 dB/oct)", value: "-4.0 dB per semitone (-0.040 dB per cent / Steep digital brick-wall filter)" }
  ],
  formula: {
    text: "To calculate signal attenuation ΔL in decibels across m semitones given a roll-off slope in dB/octave, divide the octave slope by 12 and multiply by the number of semitones m.",
    math: "\\Delta L_{\\text{dB}} = \\left( \\frac{S_{\\text{dB/oct}}}{12} \\right) \\times m = S_{\\text{dB/semitone}} \\times m",
    subtext: "Where m = 12 × log₂(f₂ / f₁) is the pitch distance in semitones."
  },
  formulaTitle: "Decibel Attenuation across Semitone Ratios Formula",
  practicalTip: {
    title: "Synthesizer Filter Pole Memory Rule",
    text: "Synthesizer users remember 2-pole filters (-12 dB/oct) as losing 1 dB per semitone, and 4-pole filters (-24 dB/oct) as losing 2 dB per semitone."
  },
  expertNote: {
    title: "Cent Resolution in Digital Audio Workstations (DAWs)",
    text: "Each semitone is divided into 100 cents (1 octave = 1,200 cents). Pitch ratio r = 2^(cents / 1200). Digital pitch shifters and autotune algorithms calculate amplitude interpolation at sub-cent micro-tonal precision."
  },
  examples: {
    title: "Step-by-Step dB/Semitone Worked Examples",
    items: [
      {
        title: "Example 1: Synthesizer 4-Pole Filter Cutoff Attenuation",
        subtitle: "Calculate attenuation 7 semitones (a musical perfect fifth) above cutoff for a 24 dB/octave Moog filter.",
        steps: [
          "Identify filter slope: -24 dB/octave.",
          "Convert to semitone slope: -24 ÷ 12 = -2.0 dB/semitone.",
          "Identify pitch distance: m = 7 semitones.",
          "Multiply slope by semitones: 7 × -2.0 = -14.0 dB.",
          "Final Result: The harmonic 7 semitones above cutoff is attenuated by -14 dB."
        ]
      },
      {
        title: "Example 2: Vocal Pitch Shift Gain Correction",
        subtitle: "Calculate attenuation across 3 semitones (a minor third) for a 12 dB/octave low-pass filter.",
        steps: [
          "Identify filter slope: -12 dB/octave.",
          "Convert to semitone slope: -12 ÷ 12 = -1.0 dB/semitone.",
          "Identify pitch distance: m = 3 semitones.",
          "Calculate drop: 3 × -1.0 = -3.0 dB.",
          "Final Result: Signal dropped by exactly -3.0 dB across 3 semitones."
        ]
      },
      {
        title: "Example 3: Micro-Tonal Detune Attenuation (50 Cents)",
        subtitle: "Calculate level change for a 50 cent (0.5 semitone) pitch offset on a 24 dB/octave filter.",
        steps: [
          "Identify semitones: m = 50 ÷ 100 = 0.5 semitones.",
          "Identify semitone slope: -2.0 dB/semitone.",
          "Multiply: 0.5 × -2.0 = -1.0 dB.",
          "Final Result: A 50 cent pitch detune results in a -1.0 dB level change."
        ]
      }
    ]
  },
  table: {
    title: "Musical Intervals, Semitones, Frequency Ratios & Decibel Drops",
    headers: ["Musical Interval Name", "Semitones (m)", "Frequency Ratio (f₂/f₁)", "-12 dB/oct Drop (-1dB/semi)", "-24 dB/oct Drop (-2dB/semi)"],
    rows: [
      { fromVal: "Unison (Root)", toVal: "0 semitones", extra: "1.0000", extra2: "0.0 dB", extra3: "0.0 dB" },
      { fromVal: "Minor 2nd (Half-step)", toVal: "1 semitone", extra: "1.0595", extra2: "-1.0 dB", extra3: "-2.0 dB" },
      { fromVal: "Major 2nd (Whole-step)", toVal: "2 semitones", extra: "1.1225", extra2: "-2.0 dB", extra3: "-4.0 dB" },
      { fromVal: "Minor 3rd", toVal: "3 semitones", extra: "1.1892", extra2: "-3.0 dB", extra3: "-6.0 dB" },
      { fromVal: "Major 3rd", toVal: "4 semitones", extra: "1.2599", extra2: "-4.0 dB", extra3: "-8.0 dB" },
      { fromVal: "Perfect 4th", toVal: "5 semitones", extra: "1.3348", extra2: "-5.0 dB", extra3: "-10.0 dB" },
      { fromVal: "Tritone (Diminished 5th)", toVal: "6 semitones", extra: "1.4142", extra2: "-6.0 dB", extra3: "-12.0 dB" },
      { fromVal: "Perfect 5th", toVal: "7 semitones", extra: "1.4983", extra2: "-7.0 dB", extra3: "-14.0 dB" },
      { fromVal: "Major 6th", toVal: "9 semitones", extra: "1.6818", extra2: "-9.0 dB", extra3: "-18.0 dB" },
      { fromVal: "Octave", toVal: "12 semitones", extra: "2.0000", extra2: "-12.0 dB", extra3: "-24.0 dB" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB/Semitone Ratios",
    items: [
      {
        title: "Subtractive Synthesizer Sound Design (Moog / Roland / Sequential)",
        text: "Sound designers adjust voltage-controlled filter (VCF) envelope depths knowing that a 4-pole ladder filter cuts high harmonics at -2 dB per semitone interval."
      },
      {
        title: "Vocal Autotune & Formant Correction Processing",
        text: "Pitch correction software calculates formant filter shift levels in dB/semitone when transposing vocal takes without introducing artificial squeaks."
      },
      {
        title: "Acoustic Musical Instrument Resonance Tuning",
        text: "Luthiers and piano technicians evaluate soundboard sympathetic resonance damping across semitone chromatic scale frequencies."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB/Semitone Calculations",
    items: [
      "Forgetting that semitones use logarithmic frequency spacing (2^(1/12)), not linear Hertz spacing.",
      "Assuming just intonation intervals match equal temperament semitones exactly (pure harmonic 5th ratio is 1.500 vs equal temperament 1.4983).",
      "Dividing dB/octave by 10 instead of 12 when converting to semitone slope.",
      "Confusing semitones (1/12 octave) with cents (1/1200 octave)."
    ]
  },
  faqs: [
    {
      question: "How do you convert dB/octave to dB/semitone?",
      answer: "Divide the dB/octave slope by 12. For example, -12 dB/octave ÷ 12 = -1.0 dB/semitone."
    },
    {
      question: "How many semitones are in an octave?",
      answer: "There are exactly 12 semitones in 1 octave under standard equal temperament tuning."
    },
    {
      question: "What is the frequency ratio of one semitone?",
      answer: "The frequency ratio of one semitone is 2^(1/12) ≈ 1.059463 (approximately a 5.95% frequency increase)."
    },
    {
      question: "How many dB per semitone does a 24 dB/octave filter attenuate?",
      answer: "A 24 dB/octave filter attenuates at a rate of -2.0 dB per semitone."
    },
    {
      question: "What is a cent in pitch measurement?",
      answer: "A cent is 1/100th of a semitone (1 octave = 1,200 cents). Frequency ratio = 2^(cents / 1200)."
    },
    {
      question: "How much attenuation occurs across a Perfect 5th (7 semitones) on a 12 dB/oct filter?",
      answer: "A 12 dB/oct filter (-1 dB/semitone) attenuates a perfect 5th (7 semitones) by -7.0 dB."
    },
    {
      question: "Why do synthesizers specify filter slopes in dB/octave rather than dB/semitone?",
      answer: "dB/octave is standard across electronic engineering because filter orders (poles) naturally align with doubling of frequency (-6 dB/octave per pole)."
    },
    {
      question: "What is a 2-pole filter in dB/semitone?",
      answer: "A 2-pole filter is -12 dB/octave, which equals -1.0 dB per semitone."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Frequency (Sound)", from: "decibel", to: "frequency-sound" },
    { label: "Decibel to Octave Ratio", from: "decibel", to: "octave-ratio" }
  ],
  references: [
    "Backus, J. (1977). The Acoustical Foundations of Music (2nd ed.). W. W. Norton & Company.",
    "Sethares, W. A. (2005). Tuning, Timbre, Spectrum, Scale (2nd ed.). Springer.",
    "Pohlmann, K. C. (2010). Principles of Digital Audio (6th ed.). McGraw-Hill Education."
  ]
};
