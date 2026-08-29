import { CustomArticleData } from "./types";

export const decibelSplToDecibel: CustomArticleData = {
  fromUnitId: "decibel-spl",
  toUnitId: "decibel",
  seoTitle: "Decibel SPL to Decibel Converter (dB SPL to dB) | UnitsConvertors.com",
  metaDescription: "Convert Decibel Sound Pressure Level to Decibels (dB SPL to dB) with scientific accuracy. Learn acoustic reference baselines, 1:1 mapping, formulas, and practical examples.",
  h1: "Decibel SPL to Decibel Converter",
  introduction: [
    "In acoustics, audio engineering, and occupational health, sound levels are frequently documented using both decibel sound pressure level (dB SPL) and general decibels (dB). While 'dB' is a logarithmic ratio comparing any two field or power quantities, 'dB SPL' specifically anchors the sound pressure scale to the internationally standardized reference baseline of 20 micropascals (20 µPa in air), corresponding to the auditory threshold of healthy human hearing at 1 kHz.",
    "When working in acoustic environments where airborne sound pressure is being characterized, a measured dB SPL value translates directly on a 1-to-1 basis to decibels referenced to 20 µPa. Understanding this relationship prevents confusion between absolute acoustic pressure measurements and relative electronic gains, signal-to-noise ratios, or attenuation factors.",
    "This guide explains the physical definition of both units, the standard acoustic reference constants, step-by-step conversion methods, comparative environmental tables, and real-world audio engineering applications."
  ],
  quickAnswer: {
    text: "For airborne acoustic pressure measurements, 1 Decibel SPL equals exactly 1 Decibel (1:1 ratio). For instance, an acoustic noise reading of 85 dB SPL corresponds to 85 dB relative to the standardized 20 µPa hearing threshold.",
    formulaDisplay: "dB = dB SPL",
    subtext: "Applies to airborne sound pressure where reference pressure p₀ = 20 µPa (0.00002 Pa)."
  },
  aboutSourceUnit: {
    title: "What is Decibel SPL (dB SPL)?",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is a specialized logarithmic unit that quantifies the effective root-mean-square (RMS) acoustic pressure in air relative to a standardized reference baseline: p₀ = 20 µPa (2.0 × 10⁻⁵ Pa). Standardized under ISO 80000-8 and ANSI S1.1, 0 dB SPL represents the nominal threshold of human hearing, whereas 120 dB SPL to 140 dB SPL marks the threshold of physical discomfort and immediate hearing damage risk."
  },
  aboutTargetUnit: {
    title: "Understanding the Decibel (dB) in Acoustics",
    text: "The decibel (symbol: dB) is a dimensionless logarithmic unit named in honor of Alexander Graham Bell. It expresses the ratio between a measured physical quantity (such as acoustic pressure, electrical voltage, or radiant power) and an established reference level. In physical acoustics, stating a sound level simply as 'dB' implicitly assumes the standard 20 µPa airborne pressure reference unless a different weighting network (such as dBA or dBC) or reference quantity is explicitly designated."
  },
  relationship: "Because both units express airborne acoustic pressure relative to the identical 20 micropascal reference threshold (p₀ = 20 µPa), the numerical value remains identical: L_p = 20 log₁₀(p / p₀). Thus, converting dB SPL to acoustic dB involves a direct 1-to-1 identity mapping.",
  relationshipTitle: "Decibel SPL to Decibel Level Comparison",
  relationshipItems: [
    { label: "0 dB SPL", value: "0 dB (Auditory threshold of human hearing at 1 kHz)" },
    { label: "30 dB SPL", value: "30 dB (Quiet recording studio or bedroom at night)" },
    { label: "60 dB SPL", value: "60 dB (Normal conversational speech at 1 meter distance)" },
    { label: "85 dB SPL", value: "85 dB (NIOSH/OSHA 8-hour occupational noise action limit)" },
    { label: "100 dB SPL", value: "100 dB (Gasoline lawnmower or loud music concert)" },
    { label: "120 dB SPL", value: "120 dB (Threshold of acoustic discomfort / emergency vehicle siren)" },
    { label: "140 dB SPL", value: "140 dB (Jet engine takeoff at 30 meters / immediate acoustic trauma threshold)" }
  ],
  formula: {
    text: "Sound level in acoustic decibels equals the sound pressure level in decibels SPL.",
    math: "dB = dB SPL",
    subtext: "Where the acoustic reference pressure p₀ is standardized at 20 µPa (2 × 10⁻⁵ Pa)."
  },
  formulaTitle: "Decibel SPL to Decibel Formula",
  practicalTip: {
    title: "Distinguishing Absolute SPL from Relative Gain dB",
    text: "Always verify the measurement context. If an audio processor states a '+6 dB boost', this indicates a relative electrical amplification factor (doubling the voltage), not an absolute sound level of 6 dB SPL. Suffixes like SPL, dBu, dBV, and dBFS differentiate absolute physical quantities from relative changes."
  },
  expertNote: {
    title: "ISO 80000-8 & ANSI S1.1 Acoustic Specifications",
    text: "International standard ISO 80000-8 defines sound pressure level L_p = 10 log₁₀(p² / p₀²) = 20 log₁₀(p / p₀) dB, where p is RMS sound pressure and p₀ = 20 µPa for gases (air). In liquids (such as marine sonar), the international reference p₀ is 1 µPa, which introduces a 26.02 dB scale difference compared to air."
  },
  examples: {
    title: "Step-by-Step dB SPL to Decibel Calculation Examples",
    items: [
      {
        title: "Example 1: Studio Monitor Output Calibration",
        subtitle: "A sound engineer measures a calibrated monitor level of 83 dB SPL at the mix position.",
        steps: [
          "Identify measured sound pressure level: 83 dB SPL.",
          "Confirm airborne reference baseline: p₀ = 20 µPa.",
          "Apply identity mapping formula: dB = 83.",
          "Final Result: 83 dB SPL corresponds to 83 dB (re 20 µPa)."
        ]
      },
      {
        title: "Example 2: Industrial Workplace Compliance Assessment",
        subtitle: "An industrial hygiene survey records an operating stamping press at 104 dB SPL.",
        steps: [
          "Record measured acoustic level: 104 dB SPL.",
          "Confirm acoustic pressure context relative to threshold of hearing.",
          "Apply conversion relationship: dB = dB SPL = 104.",
          "Final Result: 104 dB SPL equals 104 dB unweighted acoustic sound level."
        ]
      },
      {
        title: "Example 3: Quiet Office Ventilation Noise",
        subtitle: "An HVAC engineer measures ambient background noise of 42 dB SPL.",
        steps: [
          "Identify measured sound level: 42 dB SPL.",
          "Equate to unweighted decibel level: dB = 42.",
          "Final Result: 42 dB SPL is equivalent to 42 dB acoustic sound pressure level."
        ]
      }
    ]
  },
  table: {
    title: "Decibel SPL to Decibel Reference Table",
    headers: ["Sound Pressure Level (dB SPL)", "Acoustic Level (dB re 20 µPa)", "RMS Pressure & Reference"],
    rows: [
      { fromVal: "0 dB SPL", toVal: "0 dB", extra: "0.00002 Pa (20 µPa) - Threshold of human hearing" },
      { fromVal: "20 dB SPL", toVal: "20 dB", extra: "0.0002 Pa - Rustling leaves, whispering in a library" },
      { fromVal: "40 dB SPL", toVal: "40 dB", extra: "0.002 Pa - Quiet residential suburban area at night" },
      { fromVal: "60 dB SPL", toVal: "60 dB", extra: "0.02 Pa - Normal indoor spoken conversation at 1 m" },
      { fromVal: "70 dB SPL", toVal: "70 dB", extra: "0.06325 Pa - Moderate city street traffic, vacuum cleaner" },
      { fromVal: "80 dB SPL", toVal: "80 dB", extra: "0.2 Pa - Noisy restaurant, busy commercial street" },
      { fromVal: "85 dB SPL", toVal: "85 dB", extra: "0.3557 Pa - OSHA 8-hour action level for hearing conservation" },
      { fromVal: "90 dB SPL", toVal: "90 dB", extra: "0.6325 Pa - Heavy truck passing at 10 m, lawnmower" },
      { fromVal: "100 dB SPL", toVal: "100 dB", extra: "2.0 Pa - Pneumatic drill, nightclub dancefloor" },
      { fromVal: "110 dB SPL", toVal: "110 dB", extra: "6.325 Pa - Live rock concert, chainsaw at operator ear" },
      { fromVal: "120 dB SPL", toVal: "120 dB", extra: "20.0 Pa - Human threshold of acoustic pain, ambulance siren" },
      { fromVal: "130 dB SPL", toVal: "130 dB", extra: "63.25 Pa - Pneumatic riveter, aircraft carrier deck" },
      { fromVal: "140 dB SPL", toVal: "140 dB", extra: "200.0 Pa - Jet engine at 30 m (immediate hearing trauma)" }
    ]
  },
  applications: {
    title: "Industry Applications of Decibel SPL to Decibel Conversions",
    items: [
      {
        title: "Live Sound & Studio Engineering",
        text: "Calibrating front-of-house mixing desks and public address speakers to local municipal noise ordinances and monitoring acoustic headphone levels."
      },
      {
        title: "Occupational Health & Safety (OSHA/NIOSH)",
        text: "Monitoring manufacturing plant noise dosimeters to protect workers from acoustic overexposure and ensure hearing conservation compliance."
      },
      {
        title: "Architectural & Building Acoustics",
        text: "Designing recording studios, concert halls, and conference rooms to achieve targeted Noise Criteria (NC) ratings and sound transmission isolation."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in Decibel SPL to Decibel Conversions",
    items: [
      "Assuming decibels (dB) always refer to acoustic sound pressure, forgetting that dB is also used for electrical voltage gain, RF power, and optical attenuation.",
      "Confusing unweighted dB SPL with frequency-weighted metrics like dBA, dBC, or perceived loudness units like sones and phons.",
      "Applying underwater acoustic references (1 µPa) to airborne calculations (20 µPa), which causes a 62 dB calculation error.",
      "Assuming that doubling the sound source (e.g., two identical 80 dB SPL machines) results in 160 dB SPL instead of the correct logarithmic addition of 83 dB SPL."
    ]
  },
  faqs: [
    {
      question: "Is dB SPL the exact same thing as dB?",
      answer: "In airborne acoustics, yes. Both express sound pressure relative to 20 micropascals (20 µPa). However, the general decibel (dB) is also used for electrical signals (dBV, dBu), digital audio (dBFS), and optical power (dBm), whereas 'dB SPL' exclusively designates acoustic sound pressure level in air."
    },
    {
      question: "Why is 20 micropascals used as the reference point for dB SPL?",
      answer: "Twenty micropascals (20 µPa or 0.00002 Pa) represents the quietest sound pressure amplitude that a healthy human ear can detect at 1,000 Hz. Standardizing this value as 0 dB SPL creates a convenient scale where audible sounds register as positive numbers."
    },
    {
      question: "Can a sound have a negative dB SPL value?",
      answer: "Yes. Any sound pressure lower than 20 µPa produces a negative dB SPL value. For instance, in ultra-quiet anechoic research chambers, ambient noise levels have been measured as low as -9 dB SPL to -20 dB SPL."
    },
    {
      question: "What is the difference between dB SPL and dBA?",
      answer: "While dB SPL measures unweighted, physical acoustic pressure uniformly across all frequencies, dBA applies the A-weighting curve. The A-weighting filter reduces low and ultra-high frequencies to approximate how the human ear perceives loudness across different frequencies."
    },
    {
      question: "How does a 3 dB change in sound level affect perceived loudness?",
      answer: "A 3 dB change represents a doubling or halving of physical acoustic sound energy. However, human hearing perception requires approximately a 10 dB increase to perceive a sound as twice as loud."
    },
    {
      question: "What is the formula to calculate dB SPL from sound pressure in pascals?",
      answer: "The formula is L_p = 20 × log₁₀(p / p₀), where p is the root-mean-square (RMS) sound pressure in pascals and p₀ is 0.00002 Pa (20 µPa)."
    },
    {
      question: "Why do underwater acoustics use a different reference than airborne dB SPL?",
      answer: "Water is much denser than air and exhibits different acoustic impedance. Underwater acoustics standardizes the reference pressure at 1 micropascal (1 µPa) rather than 20 µPa. As a result, an underwater reading in dB re 1 µPa is approximately 62 dB higher than the equivalent airborne dB SPL level."
    },
    {
      question: "What sound level causes permanent hearing loss?",
      answer: "Prolonged exposure to sound levels above 85 dB SPL can cause gradual noise-induced hearing loss over time. Continuous exposure to levels exceeding 100 dB SPL can cause damage within minutes, and single impulse exposures exceeding 140 dB SPL can cause instantaneous acoustic trauma."
    }
  ]
};
