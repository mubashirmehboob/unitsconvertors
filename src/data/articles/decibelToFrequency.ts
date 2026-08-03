import { CustomArticleData } from "./types";

export const decibelToFrequency: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "frequency-sound",
  seoTitle: "Decibel to Frequency (Sound) Analysis Guide | UnitsConvertors.com",
  metaDescription: "Understand the relationship between acoustic Decibels (amplitude) and Frequency (pitch in Hertz). Learn ISO 226 equal-loudness contours, audio frequency response, and FFT spectrum analysis.",
  h1: "Decibel to Frequency (Sound) Analysis Guide",
  introduction: [
    "In acoustics and audio engineering, decibels (dB) and frequency (Hertz, Hz) measure two fundamentally distinct physical dimensions of a sound wave.",
    "Decibels quantify sound amplitude, pressure, or energy level (how loud a sound is), while frequency quantifies the rate of wave oscillations per second (the pitch or musical tone of a sound).",
    "Because decibels and frequency represent independent physical properties, there is no single direct mathematical conversion between them. However, they are intimately connected through equal-loudness curves (ISO 226), microphone frequency response charts, and Fast Fourier Transform (FFT) spectrum analysis. This guide explores psychoacoustics, frequency weighting curves (dBA/dBC), and acoustic spectrum analysis."
  ],
  quickAnswer: {
    text: "Decibels (dB) measure sound volume/amplitude, whereas Frequency (Hz) measures sound pitch/wave speed. They are distinct dimensions. In acoustic spectrum analysis, decibels represent signal amplitude at specific frequencies across the 20 Hz – 20,000 Hz human audible spectrum.",
    formulaDisplay: "Sound Level = f(Frequency, Amplitude)",
    subtext: "Independent properties connected via psychoacoustic equal-loudness contours."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Audio?",
    text: "The decibel (dB) is a logarithmic ratio unit measuring acoustic sound pressure level (dB SPL) or electrical audio voltage (dBu, dBV). It determines the perceived volume or loudness of a sound."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Frequency (Hertz / Hz)",
    text: "Frequency (symbol: f, measured in Hertz) represents the number of complete pressure vibration cycles per second. Human ears detect frequencies between approximately 20 Hz (deep sub-bass) and 20,000 Hz (20 kHz treble)."
  },
  relationship: "While independent, decibels and frequency interact in human auditory perception. Human ears are most sensitive to frequencies between 1,000 Hz and 4,000 Hz. Consequently, a 100 Hz bass tone requires a higher physical dB SPL to sound equally loud as a 1 kHz tone.",
  relationshipTitle: "Audible Frequency Spectrum & Human Sensitivity",
  relationshipItems: [
    { label: "20 Hz – 60 Hz", value: "Sub-Bass (Felt more than heard; requires high dB for perception)" },
    { label: "60 Hz – 250 Hz", value: "Bass (Rhythm, bass guitars; moderate ear sensitivity)" },
    { label: "250 Hz – 2,000 Hz", value: "Midrange (Human voice fundamental frequencies; prime human sensitivity)" },
    { label: "2,000 Hz – 6,000 Hz", value: "Upper Midrange / Presence (Vocal sibilance, ear canal resonant frequency)" },
    { label: "6,000 Hz – 20,000 Hz", value: "High Frequency / Air (Cymbals, harmonics, subtle spatial details)" }
  ],
  formula: {
    text: "While amplitude (dB) and frequency (Hz) are independent, frequency-weighted sound level (L_A in dBA) applies a frequency-dependent weighting filter W(f) to physical sound pressure levels L_p(f).",
    math: "L_A = 10 \\log_{10} \\left( \\sum 10^{\\frac{L_p(f) + A(f)}{10}} \\right)",
    subtext: "Where A(f) is the standard IEC 61672 A-weighting offset in dB at frequency f."
  },
  formulaTitle: "Frequency-Weighted Sound Level Formula (dBA)",
  practicalTip: {
    title: "Equal-Loudness (Fletcher-Munson) Insight",
    text: "Because human ears are less sensitive to low bass frequencies at low volume, playing music quietly reduces perceived bass. Audio receivers use 'Loudness' compensation buttons to boost bass dB levels at low master volumes."
  },
  expertNote: {
    title: "Fast Fourier Transform (FFT) & RTA Spectrum Analyzers",
    text: "Real-Time Analyzers (RTA) use FFT algorithm processing to decompose complex audio signals into individual frequency bands (1/1 or 1/3 octave), plotting amplitude in decibels (Y-axis) versus frequency in Hertz (X-axis)."
  },
  examples: {
    title: "Practical Examples of Decibel vs Frequency Analysis",
    items: [
      {
        title: "Example 1: Audio Equalizer (EQ) Cut and Boost",
        subtitle: "Analyze boosting a 1,000 Hz vocal frequency by +3 dB.",
        steps: [
          "Target Frequency: 1,000 Hz (midrange pitch).",
          "Applied Change: +3 dB gain adjustment.",
          "Effect: The pitch remains 1,000 Hz, but the signal acoustic power at that specific frequency is doubled.",
          "Result: Vocal clarity increases without changing pitch."
        ]
      },
      {
        title: "Example 2: A-Weighting Noise Filter Calculation",
        subtitle: "Evaluate a 100 Hz industrial motor noise tone at 70 dB SPL.",
        steps: [
          "Identify tone frequency: 100 Hz.",
          "Consult IEC A-weighting curve: At 100 Hz, A(f) = -19.1 dB.",
          "Apply offset: 70 dB SPL - 19.1 dB = 50.9 dBA.",
          "Result: The 100 Hz motor tone is registered as 50.9 dBA to match human ear perception."
        ]
      },
      {
        title: "Example 3: Speaker Frequency Response Curve Audit",
        subtitle: "Interpret a studio monitor specification stating '45 Hz – 20 kHz ±3 dB'.",
        steps: [
          "Identify frequency range: 45 Hz to 20,000 Hz.",
          "Identify tolerance: ±3 dB variation.",
          "Meaning: Across all audible frequencies from 45 Hz to 20 kHz, the speaker output volume never strays more than 3 dB from nominal flat output.",
          "Result: Indicates high-fidelity neutral sound reproduction."
        ]
      }
    ]
  },
  table: {
    title: "A-Weighting dB Offset vs Frequency Table (IEC 61672)",
    headers: ["Nominal Frequency (Hz)", "A-Weighting Offset A(f) (dB)", "C-Weighting Offset C(f) (dB)", "Human Auditory Sensitivity Context"],
    rows: [
      { fromVal: "31.5 Hz", toVal: "-39.4 dB", extra: "-3.0 dB", extra2: "Very low sub-bass (Human ear is extremely insensitive)" },
      { fromVal: "63 Hz", toVal: "-26.2 dB", extra: "-0.8 dB", extra2: "Low bass / kick drum (Significant reduction in dBA)" },
      { fromVal: "125 Hz", toVal: "-16.1 dB", extra: "-0.2 dB", extra2: "Upper bass / warm vocal fundamentals" },
      { fromVal: "250 Hz", toVal: "-8.6 dB", extra: "0.0 dB", extra2: "Low midrange / room resonance region" },
      { fromVal: "500 Hz", toVal: "-3.2 dB", extra: "0.0 dB", extra2: "Midrange / speech body" },
      { fromVal: "1,000 Hz", toVal: "0.0 dB", extra: "0.0 dB", extra2: "Reference benchmark (0 dB offset)" },
      { fromVal: "2,000 Hz", toVal: "+1.2 dB", extra: "-0.2 dB", extra2: "Ear canal resonance boost (Highest sensitivity)" },
      { fromVal: "4,000 Hz", toVal: "+1.0 dB", extra: "-0.8 dB", extra2: "Presence / vocal sibilance region" },
      { fromVal: "8,000 Hz", toVal: "-1.1 dB", extra: "-3.0 dB", extra2: "Treble / cymbal brilliance" },
      { fromVal: "16,000 Hz", toVal: "-6.6 dB", extra: "-8.5 dB", extra2: "High treble air (Hearing rolls off with age)" }
    ]
  },
  applications: {
    title: "Applications of Decibel & Frequency Spectrum Analysis",
    items: [
      {
        title: "Environmental & Occupational Noise Control (dBA vs dBC)",
        text: "Noise control regulations use dBA weighting to assess human annoyance and hearing loss risk, while dBC is used to measure low-frequency industrial rumble and explosive impacts."
      },
      {
        title: "Acoustic Room Tuning & Standing Wave Treatment",
        text: "Acousticians use sine sweeps and FFT analyzers to locate room mode resonant frequencies (peaks in dB) and apply bass traps at target frequencies."
      },
      {
        title: "Audio Compression & Psychoacoustic Codecs (MP3 / AAC)",
        text: "Lossy audio formats use psychoacoustic frequency masking models to eliminate quiet audio frequencies (low dB) masked by louder adjacent frequencies."
      }
    ]
  },
  pitfalls: {
    title: "Common Misconceptions About dB and Frequency",
    items: [
      "Believing higher frequency sounds are naturally louder in decibels (frequency and amplitude are independent).",
      "Confusing A-weighted dBA (frequency-filtered) with unweighted Z-weighted dB SPL.",
      "Assuming a 100 Hz tone at 80 dB SPL has the same physical acoustic pressure as a 1 kHz tone at 80 dB SPL (their pressures ARE equal; human perception differs).",
      "Treating frequency response graphs as linear when both frequency (X-axis) and amplitude (Y-axis) use logarithmic scaling."
    ]
  },
  faqs: [
    {
      question: "Can you convert decibels directly into Hertz?",
      answer: "No. Decibels (dB) measure volume or amplitude, while Hertz (Hz) measures pitch or frequency. They are separate physical dimensions plotted together on spectrum graphs."
    },
    {
      question: "What is the frequency range of human hearing?",
      answer: "A healthy young human can hear acoustic frequencies from approximately 20 Hz to 20,000 Hz (20 kHz)."
    },
    {
      question: "What is dBA weighting?",
      answer: "dBA is a frequency filter applied to decibel sound level meters that attenuates low bass and high treble frequencies to match human ear pitch sensitivity."
    },
    {
      question: "Why do low bass frequencies require higher decibels to sound equally loud?",
      answer: "Human ears evolved to prioritize human speech frequencies (1 kHz – 4 kHz). Low bass frequencies below 100 Hz require higher physical sound pressure (dB SPL) to stimulate inner ear hair cells."
    },
    {
      question: "What frequency is 0 dB A-weighting referenced to?",
      answer: "A-weighting provides 0 dB offset at 1,000 Hz (1 kHz)."
    },
    {
      question: "What is a frequency response curve?",
      answer: "A frequency response curve is a graph showing output amplitude in decibels (Y-axis) across a range of input frequencies in Hertz (X-axis)."
    },
    {
      question: "What is the difference between dBA and dBC?",
      answer: "dBA heavily attenuates low frequencies (mimicking quiet sound perception), while dBC has a flat response across bass frequencies (mimicking loud sound perception above 100 dB)."
    },
    {
      question: "What frequency range is most dangerous to human hearing?",
      answer: "Frequencies between 2,000 Hz and 5,000 Hz cause hearing loss most easily due to resonant amplification within the human ear canal."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Phon", from: "decibel", to: "phon" },
    { label: "Decibel to Wavelength (Sound)", from: "decibel", to: "wavelength-sound" }
  ],
  references: [
    "IEC 61672-1:2013 Electroacoustics — Sound level meters — Part 1: Specifications.",
    "ISO 226:2003 Acoustics — Normal equal-loudness-level contours.",
    "Everest, F. A., & Pohlmann, K. C. (2015). Master Handbook of Acoustics (6th ed.). McGraw-Hill Education."
  ]
};
