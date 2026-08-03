import { CustomArticleData } from "./types";

export const decibelToPhon: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "phon",
  seoTitle: "Decibel to Phon Converter (dB to Phon) | UnitsConvertors.com",
  metaDescription: "Convert Decibels to Phons (dB to Phon) with psychoacoustic precision. Learn ISO 226 equal-loudness contours, 1 kHz reference sound levels, formulas, and worked examples.",
  h1: "Decibel to Phon Converter",
  introduction: [
    "Human hearing sensitivity varies significantly across different frequencies. While a decibel (dB SPL) measures physical acoustic sound pressure, two sounds with the exact same decibel level can be perceived as drastically different in loudness depending on their pitch.",
    "The phon is the psychoacoustic unit used to measure subjective loudness level. By international definition (ISO 226), one phon is equal to one decibel (dB SPL) of a pure 1,000 Hz (1 kHz) reference tone.",
    "When evaluating acoustic sound pressure levels at the standard 1,000 Hz reference frequency, the conversion from dB to phon is a direct 1:1 mapping (1 dB = 1 Phon). This guide provides psychoacoustic background, ISO 226 equal-loudness contours, step-by-step calculations, and reference tables."
  ],
  quickAnswer: {
    text: "At the standard 1,000 Hz (1 kHz) reference tone, Decibels SPL and Phons map 1:1 (1 dB = 1 Phon). For example, a 1 kHz tone at 60 dB SPL produces a perceived loudness level of exactly 60 Phons.",
    formulaDisplay: "L_N (Phon) = L_p (dB) at 1,000 Hz",
    subtext: "ISO 226 anchors 1 Phon = 1 dB SPL for a 1 kHz reference tone."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustics?",
    text: "The decibel (dB SPL) measures physical root-mean-square sound pressure relative to p₀ = 20 micropascals. It is an objective physical measurement independent of human perception or listener age."
  },
  aboutTargetUnit: {
    title: "Understanding the Phon",
    text: "The phon is the unit of perceived loudness level introduced by Barkhausen in 1926. A sound has a loudness level of N phons if it is judged by a standard listener to be equal in loudness to a 1,000 Hz pure tone at N decibels SPL."
  },
  relationship: "At 1,000 Hz, 1 dB SPL equals 1 Phon. At lower frequencies (e.g. 50 Hz), human ears are less sensitive, requiring a higher physical dB SPL to achieve the same perceived Phon loudness level, as mapped by ISO 226 equal-loudness curves.",
  relationshipTitle: "Decibel vs Phon Equal-Loudness Scale",
  relationshipItems: [
    { label: "0 dB SPL at 1 kHz", value: "0 Phon (Threshold of human hearing)" },
    { label: "20 dB SPL at 1 kHz", value: "20 Phon (Quiet recording studio atmosphere)" },
    { label: "40 dB SPL at 1 kHz", value: "40 Phon (Standard 1 Sone reference loudness)" },
    { label: "60 dB SPL at 1 kHz", value: "60 Phon (Conversational speech loudness level)" },
    { label: "100 dB SPL at 1 kHz", value: "100 Phon (Pneumatic drill / concert loudspeaker level)" }
  ],
  formula: {
    text: "At the 1,000 Hz reference frequency, the loudness level in Phons equals the sound pressure level in decibels.",
    math: "\\text{Phon} = \\text{dB}_{\\text{SPL}} \\quad \\text{(at } f = 1,000 \\text{ Hz)}",
    subtext: "For non-1 kHz frequencies, Phons are evaluated using ISO 226 equal-loudness curves."
  },
  formulaTitle: "Decibel to Phon Formula",
  practicalTip: {
    title: "Psychoacoustic Rule of Thumb",
    text: "Phons measure 'equal loudness'. If a 100 Hz bass note is played at 62 dB SPL and sounds equally loud as a 1 kHz tone at 40 dB SPL, the 100 Hz bass note has a loudness level of 40 Phons."
  },
  expertNote: {
    title: "Fletcher-Munson and ISO 226 Revision History",
    text: "Originally defined by Fletcher and Munson in 1933 and refined by Robinson and Dadson in 1956, the current international standard ISO 226:2003 defines equal-loudness contours based on extensive psychoacoustic laboratory testing."
  },
  examples: {
    title: "Step-by-Step dB to Phon Worked Examples",
    items: [
      {
        title: "Example 1: Studio Test Tone Calibration at 1 kHz",
        subtitle: "Convert a 1,000 Hz calibration tone played at 70 dB SPL to Phons.",
        steps: [
          "Identify signal frequency: 1,000 Hz (1 kHz reference baseline).",
          "Identify sound level: 70 dB SPL.",
          "Apply 1:1 reference rule: 70 dB SPL at 1 kHz = 70 Phons.",
          "Final Result: The perceived loudness level is 70 Phons."
        ]
      },
      {
        title: "Example 2: Quiet Bedroom Night Ambiance",
        subtitle: "Convert a 1 kHz room noise level of 30 dB SPL to Phons.",
        steps: [
          "Identify signal frequency: 1 kHz.",
          "Identify sound level: 30 dB SPL.",
          "Apply formula: 30 dB = 30 Phons.",
          "Final Result: Room noise level corresponds to 30 Phons."
        ]
      },
      {
        title: "Example 3: Factory Alarm Siren at 1 kHz",
        subtitle: "Convert a 1 kHz emergency siren at 95 dB SPL to Phons.",
        steps: [
          "Identify frequency: 1,000 Hz reference tone.",
          "Identify sound level: 95 dB SPL.",
          "Apply formula: 95 dB = 95 Phons.",
          "Final Result: Siren loudness level is 95 Phons."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Phon Reference Table (1 kHz Reference)",
    headers: ["Decibels (dB SPL at 1 kHz)", "Loudness Level (Phons)", "Loudness in Sones", "Perceived Loudness Context"],
    rows: [
      { fromVal: "0 dB", toVal: "0 Phon", extra: "0.00 Sone", extra2: "Absolute human hearing threshold" },
      { fromVal: "20 dB", toVal: "20 Phon", extra: "0.25 Sone", extra2: "Quiet broadcast recording booth" },
      { fromVal: "40 dB", toVal: "40 Phon", extra: "1.00 Sone", extra2: "Standard 1 Sone reference benchmark" },
      { fromVal: "50 dB", toVal: "50 Phon", extra: "2.00 Sone", extra2: "Quiet residential living room" },
      { fromVal: "60 dB", toVal: "60 Phon", extra: "4.00 Sone", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "70 dB", toVal: "70 Phon", extra: "8.00 Sone", extra2: "Busy commercial office / restaurant" },
      { fromVal: "80 dB", toVal: "80 Phon", extra: "16.00 Sone", extra2: "Loud alarm clock / city traffic" },
      { fromVal: "90 dB", toVal: "90 Phon", extra: "32.00 Sone", extra2: "Heavy lawn mower at 1 meter" },
      { fromVal: "100 dB", toVal: "100 Phon", extra: "64.00 Sone", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "120 dB", toVal: "120 Phon", extra: "256.00 Sone", extra2: "Human auditory discomfort / pain threshold" }
    ]
  },
  applications: {
    title: "Real-World Applications of dB to Phon Conversion",
    items: [
      {
        title: "Audio Mastering & Equalization (Loudness War)",
        text: "Sound engineers use equal-loudness curves and Phons to design audio mastering equalizers that maintain balanced bass and treble across low and high playback volumes."
      },
      {
        title: "Automotive Cabin Noise & Psychoacoustic Tuning",
        text: "Automotive engineers evaluate engine noise in Phons rather than raw dB SPL to improve cabin comfort and remove harsh acoustic frequencies."
      },
      {
        title: "Consumer Audio & Smart Speaker Volume Curves",
        text: "Digital signal processors (DSPs) in modern televisions and soundbars apply 'Loudness' compensation based on Phon curves to boost bass at low listening levels."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Decibel to Phon Conversions",
    items: [
      "Assuming 1 dB = 1 Phon at all frequencies (this holds true ONLY at 1,000 Hz).",
      "Confusing Phons (logarithmic loudness level) with Sones (linear perceived loudness).",
      "Adding Phon levels linearly instead of combining underlying acoustic energy or using equal-loudness curves.",
      "Comparing unweighted dB Z sound pressure levels directly to A-weighted dBA without considering spectrum."
    ]
  },
  faqs: [
    {
      question: "How are decibels and Phons related?",
      answer: "At the reference frequency of 1,000 Hz, 1 decibel (dB SPL) equals exactly 1 Phon."
    },
    {
      question: "What is the difference between a Phon and a Sone?",
      answer: "A Phon is a logarithmic scale of loudness level (40 Phon = 1 Sone, 50 Phon = 2 Sone, 60 Phon = 4 Sone). Sone is a linear scale where doubling the value doubles perceived loudness."
    },
    {
      question: "Why do we need Phons if we have decibels?",
      answer: "Human ears do not hear all frequencies equally loud. A 50 Hz bass note at 60 dB sounds much quieter than a 1,000 Hz tone at 60 dB. Phons correct for human hearing pitch sensitivity."
    },
    {
      question: "What is 40 dB at 1 kHz in Phons?",
      answer: "40 dB SPL at 1 kHz is equal to exactly 40 Phons (which corresponds to 1 Sone)."
    },
    {
      question: "What is ISO 226?",
      answer: "ISO 226 is the international standard defining equal-loudness level contours for human hearing across frequencies from 20 Hz to 12.5 kHz."
    },
    {
      question: "How many Phons is a 10 dB increase at 1 kHz?",
      answer: "At 1 kHz, increasing sound pressure level by +10 dB increases loudness level by +10 Phons (which roughly doubles perceived loudness in Sones)."
    },
    {
      question: "Is A-weighting (dBA) the same as Phons?",
      answer: "dBA is an electronic filter approximation of the 40-Phon equal-loudness curve across frequencies. Phons provide exact subjective loudness level matching."
    },
    {
      question: "Can Phons be negative?",
      answer: "Yes. Sounds below the 0 Phon threshold at 1 kHz (quieter than 20 micropascals) have negative Phon values."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Sone", from: "decibel", to: "sone" },
    { label: "Decibel to Sound Pressure", from: "decibel", to: "sound-pressure" }
  ],
  references: [
    "ISO 226:2003 Acoustics — Normal equal-loudness-level contours.",
    "Zwicker, E., & Fastl, H. (2013). Psychoacoustics: Facts and Models (3rd ed.). Springer Science & Business Media.",
    "Fletcher, H., & Munson, W. A. (1933). Loudness, its definition, measurement and calculation. Journal of the Acoustical Society of America, 5(2), 82-108."
  ]
};
