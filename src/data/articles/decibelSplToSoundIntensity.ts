import { CustomArticleData } from "./types";

export const decibelSplToSoundIntensity: CustomArticleData = {
  fromUnitId: "decibel-spl",
  toUnitId: "sound-intensity",
  seoTitle: "Decibel SPL to Sound Intensity Converter (dB SPL to W/m²) | UnitsConvertors.com",
  metaDescription: "Convert Decibel Sound Pressure Level to Sound Intensity (dB SPL to W/m²) with scientific precision. Master the acoustic impedance formula, energy thresholds, and examples.",
  h1: "Decibel SPL to Sound Intensity Converter",
  introduction: [
    "In acoustics and audio physics, sound can be quantified either as local pressure fluctuations (Sound Pressure Level in dB SPL) or as the directional rate of acoustic energy transmission per unit area (Sound Intensity in Watts per square meter, W/m²).",
    "In a standard airborne acoustic free-field (under ambient conditions of 20 °C and 101.325 kPa, where the characteristic specific acoustic impedance of air is z₀ = ρ₀c ≈ 400 to 415 Pa·s/m), the numerical value of Sound Pressure Level (dB SPL) is practically identical to Sound Intensity Level (SIL, in dB re 10⁻¹² W/m²). This enables a direct exponential transformation from dB SPL to physical sound intensity in Watts per square meter.",
    "This guide covers the acoustic physics connecting sound pressure and intensity, characteristic impedance of air, mathematical derivations, step-by-step conversion examples, and comprehensive reference tables."
  ],
  quickAnswer: {
    text: "In a standard airborne acoustic free field, sound intensity in Watts per square meter (W/m²) is calculated using: I = 10⁻¹² × 10^(dB SPL / 10). For example, 120 dB SPL corresponds to exactly 1.0 W/m² of acoustic power flow.",
    formulaDisplay: "I (W/m²) = 1.0 × 10⁻¹² × 10^(dB SPL / 10)",
    subtext: "Where I₀ = 10⁻¹² W/m² (1 pW/m²) is the international reference sound intensity at 1 kHz."
  },
  aboutSourceUnit: {
    title: "What is Decibel SPL (dB SPL)?",
    text: "Decibel Sound Pressure Level (symbol: dB SPL) is a logarithmic measure of root-mean-square sound pressure relative to p₀ = 20 µPa (2.0 × 10⁻⁵ Pa). It represents the local scalar pressure variation in air caused by sound waves."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Intensity (W/m²)",
    text: "Sound intensity (symbol: I) is a vector physical quantity defined as the time-averaged acoustic energy flowing through a unit area perpendicular to the direction of sound propagation. It is expressed in Watts per square meter (W/m²). The international reference intensity I₀ is 1.0 × 10⁻¹² W/m² (1 picowatt/m²), matching the 0 dB SPL auditory threshold in standard air."
  },
  relationship: "In a progressive plane acoustic wave, sound intensity is related to sound pressure by I = p² / (ρc). At standard temperature and pressure (20 °C, 101.325 kPa, ρc ≈ 400–415 N·s/m³), the reference pressure p₀ = 20 µPa produces I₀ = (20 × 10⁻⁶)² / 400 = 1.0 × 10⁻¹² W/m². Hence, Sound Intensity Level in dB re 10⁻¹² W/m² numerically equals Sound Pressure Level in dB SPL, yielding the formula I = 10⁻¹² × 10^(dB SPL / 10).",
  relationshipTitle: "Decibel SPL to Sound Intensity Scale",
  relationshipItems: [
    { label: "0 dB SPL", value: "1.0 × 10⁻¹² W/m² (Threshold of human hearing / 1 pW/m²)" },
    { label: "30 dB SPL", value: "1.0 × 10⁻⁹ W/m² (Quiet bedroom at night / 1 nW/m²)" },
    { label: "60 dB SPL", value: "1.0 × 10⁻⁶ W/m² (Normal conversation / 1 µW/m²)" },
    { label: "90 dB SPL", value: "1.0 × 10⁻³ W/m² (Lawnmower / heavy truck / 1 mW/m²)" },
    { label: "120 dB SPL", value: "1.0 W/m² (Threshold of acoustic discomfort / 1,000 mW/m²)" },
    { label: "130 dB SPL", value: "10.0 W/m² (Pneumatic drill at 1 m)" },
    { label: "140 dB SPL", value: "100.0 W/m² (Jet engine at 30 m / 100 W/m²)" }
  ],
  formula: {
    text: "Multiply the reference sound intensity I₀ (10⁻¹² W/m²) by 10 raised to the power of (dB SPL / 10).",
    math: "I = 10⁻¹² × 10^(dB SPL / 10)",
    subtext: "Where I is sound intensity in W/m² and dB SPL is the sound pressure level."
  },
  formulaTitle: "Decibel SPL to Sound Intensity Formula",
  practicalTip: {
    title: "The 10 dB Rule for Sound Intensity (Power Quantity)",
    text: "Because sound intensity is a power quantity (proportional to pressure squared), every 10 dB SPL increase multiplies the physical acoustic intensity (W/m²) by a factor of 10. A 3 dB increase doubles the sound intensity."
  },
  expertNote: {
    title: "Free-Field Acoustic Impedance Matching",
    text: "The exact equivalence L_p ≈ L_I holds strictly in a free progressive acoustic field where air impedance z₀ = ρc = 1.204 kg/m³ × 343.2 m/s = 413.2 Pa·s/m. The difference between SPL and SIL at room temperature is less than 0.16 dB, making direct conversion accurate for engineering work."
  },
  examples: {
    title: "Step-by-Step dB SPL to Sound Intensity Worked Examples",
    items: [
      {
        title: "Example 1: Threshold of Pain (120 dB SPL) to Intensity",
        subtitle: "Calculate the acoustic power flow per square meter at 120 dB SPL.",
        steps: [
          "Identify sound level: 120 dB SPL.",
          "Apply formula: I = 10⁻¹² × 10^(120 / 10).",
          "Compute exponent: 120 / 10 = 12.",
          "Calculate power of 10: 10¹².",
          "Multiply: 10⁻¹² × 10¹² = 1.0 W/m².",
          "Final Result: 120 dB SPL corresponds to exactly 1.0 Watt per square meter (1 W/m²)."
        ]
      },
      {
        title: "Example 2: Conversational Speech (60 dB SPL) to Intensity",
        subtitle: "Find the acoustic intensity of normal human conversation.",
        steps: [
          "Identify sound level: 60 dB SPL.",
          "Apply formula: I = 10⁻¹² × 10^(60 / 10).",
          "Simplify exponent: 60 / 10 = 6.",
          "Compute: 10⁻¹² × 10⁶ = 10⁻⁶ W/m².",
          "Final Result: 60 dB SPL equals 0.000001 W/m² (1 microwatt/m²)."
        ]
      },
      {
        title: "Example 3: Factory Noise (90 dB SPL)",
        subtitle: "Determine the acoustic energy density flow in an industrial workspace.",
        steps: [
          "Identify sound level: 90 dB SPL.",
          "Apply formula: I = 10⁻¹² × 10^(90 / 10).",
          "Compute: 90 / 10 = 9.",
          "Calculate: 10⁻¹² × 10⁹ = 10⁻³ W/m² = 0.001 W/m².",
          "Final Result: 90 dB SPL equals 0.001 W/m² (1 milliwatt/m²)."
        ]
      }
    ]
  },
  table: {
    title: "Decibel SPL to Sound Intensity (W/m²) Conversion Table",
    headers: ["Sound Pressure Level (dB SPL)", "Sound Intensity (W/m²)", "Alternative Units & Context"],
    rows: [
      { fromVal: "0 dB SPL", toVal: "1.0 × 10⁻¹² W/m²", extra: "1 pW/m² - Hearing threshold at 1 kHz" },
      { fromVal: "10 dB SPL", toVal: "1.0 × 10⁻¹¹ W/m²", extra: "10 pW/m² - Rustling leaves, breathing" },
      { fromVal: "20 dB SPL", toVal: "1.0 × 10⁻¹⁰ W/m²", extra: "100 pW/m² - Whisper at 1 m, recording studio" },
      { fromVal: "30 dB SPL", toVal: "1.0 × 10⁻⁹ W/m²", extra: "1 nW/m² - Quiet bedroom at night" },
      { fromVal: "40 dB SPL", toVal: "1.0 × 10⁻⁸ W/m²", extra: "10 nW/m² - Library reading room, quiet office" },
      { fromVal: "50 dB SPL", toVal: "1.0 × 10⁻⁷ W/m²", extra: "100 nW/m² - Moderate rainfall, quiet living room" },
      { fromVal: "60 dB SPL", toVal: "1.0 × 10⁻⁶ W/m²", extra: "1 µW/m² - Spoken conversation at 1 meter" },
      { fromVal: "70 dB SPL", toVal: "1.0 × 10⁻⁵ W/m²", extra: "10 µW/m² - Vacuum cleaner, curbside street noise" },
      { fromVal: "80 dB SPL", toVal: "1.0 × 10⁻⁴ W/m²", extra: "100 µW/m² - Busy urban intersection, food blender" },
      { fromVal: "90 dB SPL", toVal: "1.0 × 10⁻³ W/m²", extra: "1 mW/m² - Heavy diesel truck, power lawnmower" },
      { fromVal: "100 dB SPL", toVal: "1.0 × 10⁻² W/m²", extra: "10 mW/m² - Pneumatic jackhammer, dance club" },
      { fromVal: "110 dB SPL", toVal: "1.0 × 10⁻¹ W/m²", extra: "100 mW/m² - Live amplified concert, chainsaw" },
      { fromVal: "120 dB SPL", toVal: "1.0 W/m²", extra: "1,000 mW/m² - Threshold of human acoustic pain" },
      { fromVal: "130 dB SPL", toVal: "10.0 W/m²", extra: "10 W/m² - Pneumatic riveter, tarmac apron" },
      { fromVal: "140 dB SPL", toVal: "100.0 W/m²", extra: "100 W/m² - Jet engine at 30 m (immediate damage)" }
    ]
  },
  applications: {
    title: "Industry Applications of dB SPL to Sound Intensity Conversions",
    items: [
      {
        title: "Sound Intensity Probe Measurements (ISO 9614)",
        text: "Using two-microphone sound intensity probes to measure directional acoustic energy and locate noise leaks in automotive cabins."
      },
      {
        title: "Acoustic Power Source Characterization",
        text: "Integrating sound intensity over an enclosing measurement surface to determine the total acoustic sound power (in Watts) of industrial machinery."
      },
      {
        title: "Architectural Acoustic Transmission Loss",
        text: "Measuring incident vs transmitted acoustic power per square meter across drywall, glass, and composite acoustic partition walls."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB SPL to Sound Intensity Conversions",
    items: [
      "Using the 20 log₁₀ factor in the exponent instead of 10 (sound intensity is an energy/power quantity, not an amplitude quantity).",
      "Applying free-field sound intensity equations inside highly reverberant or reactive near-field acoustic spaces.",
      "Confusing sound intensity (Watts per square meter) with total sound power (Watts) or sound pressure (Pascals).",
      "Forgetting that sound intensity is a vector quantity possessing both magnitude and direction."
    ]
  },
  faqs: [
    {
      question: "What is the physical difference between sound pressure and sound intensity?",
      answer: "Sound pressure is a scalar quantity measuring local pressure oscillations in pascals, regardless of propagation direction. Sound intensity is a vector quantity measuring the net rate and direction of sound energy flow per unit area in Watts per square meter (W/m²)."
    },
    {
      question: "What is the standard reference sound intensity I₀?",
      answer: "The international standard reference sound intensity I₀ in air is 1.0 × 10⁻¹² W/m² (1 picowatt per square meter), which corresponds to 0 dB SIL and approximately 0 dB SPL at 1 kHz."
    },
    {
      question: "How many Watts per square meter equal 120 dB SPL?",
      answer: "120 dB SPL corresponds to exactly 1.0 Watt per square meter (1 W/m²) in a standard airborne free field."
    },
    {
      question: "Why do sound intensity calculations use a factor of 10 instead of 20?",
      answer: "Sound intensity is directly proportional to acoustic power and the square of sound pressure (I ∝ p²). Logarithmic power ratios use 10 log₁₀(I / I₀), while linear field amplitude ratios use 20 log₁₀(p / p₀)."
    },
    {
      question: "How does sound intensity change when sound level increases by 3 dB?",
      answer: "A 3 dB increase in sound level doubles the sound intensity in Watts per square meter (a 100% increase in acoustic power flow)."
    },
    {
      question: "Can sound intensity be measured in reactive acoustic near fields?",
      answer: "Sound intensity probes can measure true active sound energy flow even in reactive near fields and standing waves, whereas standard sound pressure level meters record total pressure including non-propagating reactive energy."
    },
    {
      question: "What is the sound intensity of quiet whispering?",
      answer: "A quiet whisper at 20 dB SPL produces a sound intensity of 1.0 × 10⁻¹⁰ W/m² (0.0000000001 W/m² or 100 pW/m²)."
    },
    {
      question: "What is the formula to convert sound intensity (W/m²) back to dB SPL?",
      answer: "In a free progressive airborne sound field: dB SPL ≈ 10 × log₁₀(I / 10⁻¹²)."
    }
  ]
};
