import { CustomArticleData } from "./types";

export const decibelSplToWattM2: CustomArticleData = {
  fromUnitId: "decibel-spl",
  toUnitId: "watt-m2-sound",
  seoTitle: "Decibel SPL to Watt/m² Converter (dB SPL to W/m²) | UnitsConvertors.com",
  metaDescription: "Convert Decibel Sound Pressure Level to Watts per square meter (dB SPL to W/m²) with scientific accuracy. Learn the I = 10^-12 * 10^(dB/10) formula, acoustics, and examples.",
  h1: "Decibel SPL to Watt/m² Converter",
  introduction: [
    "Acoustic noise measurements in environmental compliance, architectural design, and industrial hygiene are commonly recorded in decibels sound pressure level (dB SPL). However, calculating acoustic power transmission, loudspeaker radiation efficiency, and thermal acoustic dissipation requires converting logarithmic sound levels into Watts per square meter (W/m²).",
    "The unit Watt per square meter (W/m²) represents the physical rate of acoustic energy transmission flowing through a one-square-meter cross-sectional area. In standard atmospheric conditions (20 °C, 101.325 kPa, where specific acoustic impedance z₀ ≈ 400 to 415 Pa·s/m), the airborne sound pressure level in dB SPL corresponds directly to sound intensity referenced to I₀ = 10⁻¹² W/m².",
    "This guide provides the complete acoustic physics derivation, mathematical formulas, step-by-step conversion examples, occupational noise comparisons, and detailed conversion tables."
  ],
  quickAnswer: {
    text: "To convert Decibel SPL to Watts per square meter (W/m²), use the formula: W/m² = 10⁻¹² × 10^(dB SPL / 10). For example, a 90 dB SPL noise level produces exactly 0.001 W/m² (1 milliwatt/m²).",
    formulaDisplay: "W/m² = 1.0 × 10⁻¹² × 10^(dB SPL / 10)",
    subtext: "Where I₀ = 10⁻¹² W/m² (1 pW/m²) is the international reference sound intensity in air."
  },
  aboutSourceUnit: {
    title: "What is Decibel SPL (dB SPL)?",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is a logarithmic ratio quantifying acoustic pressure relative to p₀ = 20 µPa (2.0 × 10⁻⁵ Pa). Under ISO 80000-8, 0 dB SPL corresponds to the nominal human auditory threshold, while 120 dB SPL to 140 dB SPL indicates the threshold of pain and acute acoustic trauma."
  },
  aboutTargetUnit: {
    title: "Understanding Watt per Square Meter (W/m²)",
    text: "The Watt per square meter (symbol: W/m²) is the SI derived unit of radiant flux density and acoustic intensity. In acoustics, it measures the rate of acoustic energy flow per unit area. 1 W/m² corresponds to 120 dB SPL, representing substantial acoustic energy that can cause physical discomfort."
  },
  relationship: "Sound intensity I (in W/m²) relates to sound pressure p by I = p² / (ρc). In standard atmospheric air, the baseline threshold p₀ = 20 µPa produces exactly I₀ = 1.0 × 10⁻¹² W/m². Therefore, sound intensity in W/m² equals 10⁻¹² × 10^(dB SPL / 10).",
  relationshipTitle: "Decibel SPL to Watt/m² Scale Comparison",
  relationshipItems: [
    { label: "0 dB SPL", value: "1.0 × 10⁻¹² W/m² (1 picowatt/m² / hearing threshold)" },
    { label: "30 dB SPL", value: "1.0 × 10⁻⁹ W/m² (1 nanowatt/m² / quiet bedroom)" },
    { label: "60 dB SPL", value: "1.0 × 10⁻⁶ W/m² (1 microwatt/m² / conversational speech)" },
    { label: "90 dB SPL", value: "1.0 × 10⁻³ W/m² (1 milliwatt/m² / lawnmower)" },
    { label: "120 dB SPL", value: "1.0 W/m² (Threshold of acoustic pain)" },
    { label: "140 dB SPL", value: "100.0 W/m² (Jet engine at 30 m / acoustic trauma)" }
  ],
  formula: {
    text: "Multiply 10⁻¹² W/m² by 10 raised to the power of (dB SPL / 10).",
    math: "W/m² = 10⁻¹² × 10^(dB SPL / 10)",
    subtext: "Where W/m² is sound intensity and dB SPL is the measured sound level."
  },
  formulaTitle: "Decibel SPL to Watt/m² Formula",
  practicalTip: {
    title: "The Exponential Nature of Acoustic Power",
    text: "Because the power exponent is (dB / 10), each 10 dB increase represents a 10-fold increase in acoustic Watts per square meter. A sound at 120 dB SPL carries one million times more acoustic power per square meter than a sound at 60 dB SPL."
  },
  expertNote: {
    title: "Acoustic Power Conservation & Inverse Square Law",
    text: "In a spherical free field, sound intensity in W/m² decreases with the square of distance (I = W / 4πr²). Converting dB SPL to W/m² at known distances allows calculation of the sound source's total acoustic sound power output (in Watts)."
  },
  examples: {
    title: "Step-by-Step dB SPL to Watt/m² Worked Examples",
    items: [
      {
        title: "Example 1: Lawnmower Noise (90 dB SPL) to W/m²",
        subtitle: "Calculate the acoustic power flow per square meter from a 90 dB SPL lawnmower.",
        steps: [
          "Identify sound level: 90 dB SPL.",
          "Apply formula: W/m² = 10⁻¹² × 10^(90 / 10).",
          "Calculate exponent: 90 / 10 = 9.",
          "Compute power of 10: 10⁹.",
          "Multiply: 10⁻¹² × 10⁹ = 10⁻³ W/m² = 0.001 W/m².",
          "Final Result: 90 dB SPL produces 0.001 W/m² (1 mW/m²)."
        ]
      },
      {
        title: "Example 2: Conversational Speech (60 dB SPL) to W/m²",
        subtitle: "Determine the acoustic energy per square meter of normal conversation.",
        steps: [
          "Identify sound level: 60 dB SPL.",
          "Apply formula: W/m² = 10⁻¹² × 10^(60 / 10).",
          "Compute: 10⁻¹² × 10⁶ = 10⁻⁶ W/m².",
          "Final Result: 60 dB SPL equals 0.000001 W/m² (1 µW/m²)."
        ]
      },
      {
        title: "Example 3: Live Rock Concert (110 dB SPL)",
        subtitle: "Find the acoustic power density at a front-row concert seat.",
        steps: [
          "Identify input level: 110 dB SPL.",
          "Divide by 10: 110 / 10 = 11.",
          "Calculate: 10⁻¹² × 10¹¹ = 10⁻¹ W/m² = 0.1 W/m².",
          "Final Result: 110 dB SPL equals 0.1 Watts per square meter (100 mW/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Decibel SPL to Watt per Square Meter (W/m²) Table",
    headers: ["Sound Pressure Level (dB SPL)", "Acoustic Power Flow (W/m²)", "Equivalent Metric & Everyday Context"],
    rows: [
      { fromVal: "0 dB SPL", toVal: "1.0 × 10⁻¹² W/m²", extra: "1 pW/m² - Hearing threshold at 1 kHz" },
      { fromVal: "10 dB SPL", toVal: "1.0 × 10⁻¹¹ W/m²", extra: "10 pW/m² - Rustling leaves, breathing" },
      { fromVal: "20 dB SPL", toVal: "1.0 × 10⁻¹⁰ W/m²", extra: "100 pW/m² - Quiet recording studio, whisper" },
      { fromVal: "30 dB SPL", toVal: "1.0 × 10⁻⁹ W/m²", extra: "1 nW/m² - Quiet bedroom at night" },
      { fromVal: "40 dB SPL", toVal: "1.0 × 10⁻⁸ W/m²", extra: "10 nW/m² - Library reading room, quiet office" },
      { fromVal: "50 dB SPL", toVal: "1.0 × 10⁻⁷ W/m²", extra: "100 nW/m² - Moderate rainfall, quiet living room" },
      { fromVal: "60 dB SPL", toVal: "1.0 × 10⁻⁶ W/m²", extra: "1 µW/m² - Spoken conversation at 1 meter" },
      { fromVal: "70 dB SPL", toVal: "1.0 × 10⁻⁵ W/m²", extra: "10 µW/m² - Vacuum cleaner, curbside street noise" },
      { fromVal: "80 dB SPL", toVal: "1.0 × 10⁻⁴ W/m²", extra: "100 µW/m² - Busy urban intersection, food blender" },
      { fromVal: "85 dB SPL", toVal: "3.16 × 10⁻⁴ W/m²", extra: "316.2 µW/m² - OSHA 8-hour hearing action limit" },
      { fromVal: "90 dB SPL", toVal: "1.0 × 10⁻³ W/m²", extra: "1 mW/m² - Heavy diesel truck, power lawnmower" },
      { fromVal: "100 dB SPL", toVal: "1.0 × 10⁻² W/m²", extra: "10 mW/m² - Pneumatic jackhammer, dance club" },
      { fromVal: "110 dB SPL", toVal: "1.0 × 10⁻¹ W/m²", extra: "100 mW/m² - Live rock concert, chainsaw at 1 m" },
      { fromVal: "120 dB SPL", toVal: "1.0 W/m²", extra: "1,000 mW/m² - Threshold of human acoustic pain" },
      { fromVal: "130 dB SPL", toVal: "10.0 W/m²", extra: "10 W/m² - Pneumatic riveter, tarmac apron" },
      { fromVal: "140 dB SPL", toVal: "100.0 W/m²", extra: "100 W/m² - Jet engine at 30 m (immediate damage)" }
    ]
  },
  applications: {
    title: "Industry Applications of dB SPL to Watt/m² Conversions",
    items: [
      {
        title: "Loudspeaker Efficiency & Acoustic Radiation",
        text: "Determining the electroacoustic conversion efficiency of speaker drivers by measuring radiated acoustic power density."
      },
      {
        title: "Industrial Noise Barrier & Enclosure Engineering",
        text: "Calculating the acoustic transmission coefficient and insertion loss of acoustic silencers in HVAC systems."
      },
      {
        title: "Thermoacoustic & High-Intensity Ultrasound",
        text: "Analyzing high-power acoustic transducers for ultrasonic cleaning, medical lithotripsy, and thermoacoustic refrigeration."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB SPL to Watt/m² Conversions",
    items: [
      "Dividing the dB SPL by 20 instead of 10 in the exponent (W/m² is a power quantity, requiring factor 10).",
      "Confusing acoustic intensity in W/m² with electrical amplifier wattage driving a speaker.",
      "Assuming 0 dB SPL produces 0 W/m² (0 dB SPL equals 10⁻¹² W/m², not zero).",
      "Ignoring the medium's characteristic impedance when converting sound outside of standard atmospheric air."
    ]
  },
  faqs: [
    {
      question: "How many Watts per square meter are in 120 dB SPL?",
      answer: "Exactly 1.0 Watt per square meter (1 W/m²) corresponds to 120 dB SPL in a standard airborne acoustic free field."
    },
    {
      question: "What is the formula to convert dB SPL to Watts per square meter?",
      answer: "The formula is: W/m² = 10⁻¹² × 10^(dB SPL / 10)."
    },
    {
      question: "Why is the acoustic reference level 10⁻¹² W/m²?",
      answer: "10⁻¹² W/m² (1 picowatt per square meter) is the acoustic power density produced by a sound wave at the standard threshold of human hearing (20 µPa) in air."
    },
    {
      question: "How do you convert Watts per square meter back to dB SPL?",
      answer: "Use the formula: dB SPL = 10 × log₁₀(W/m² / 10⁻¹²)."
    },
    {
      question: "How much acoustic power does human speech produce in W/m²?",
      answer: "Normal conversational speech at 60 dB SPL produces approximately 10⁻⁶ W/m² (1 microwatt per square meter) at a 1-meter distance."
    },
    {
      question: "Is acoustic power in W/m² the same as solar radiation in W/m²?",
      answer: "The physical units are identical (energy per second per unit area), but solar radiation involves electromagnetic photons (averaging ~1,000 W/m² in sunlight), whereas acoustic intensity involves mechanical pressure waves in matter."
    },
    {
      question: "What sound level produces 100 W/m² of acoustic power?",
      answer: "A sound level of 140 dB SPL produces 100 W/m² of acoustic intensity, which is enough mechanical energy to cause immediate permanent hearing trauma."
    },
    {
      question: "How does doubling the sound power change the dB SPL level?",
      answer: "Doubling the acoustic power in W/m² increases the sound level by approximately +3.01 dB SPL."
    }
  ]
};
