import { CustomArticleData } from "./types";

export const soundPressureToSoundIntensity: CustomArticleData = {
  fromUnitId: "sound-pressure",
  toUnitId: "sound-intensity",
  seoTitle: "Sound Pressure to Sound Intensity Converter | Pa to W/m²",
  metaDescription: "Convert Sound Pressure to Sound Intensity (Pa to W/m²). Master the physical relationship I = p² / (ρ·c), characteristic acoustic impedance Z₀ = 400 Pa·s/m, and examples.",
  canonicalUrl: "https://unitsconvertors.com/sound-pressure-to-sound-intensity",
  h1: "Sound Pressure to Sound Intensity Converter",
  introduction: [
    "Acoustic disturbances propagating through air involve both pressure perturbations and kinetic particle motions. Sound pressure measures the local alternating compression and expansion of air molecules in pascals (Pa or N/m²). Sound intensity, on the other hand, describes the time-averaged vector rate at which acoustic energy flows through a unit surface area perpendicular to the direction of propagation, measured in watts per square meter (W/m²).",
    "Translating sound pressure into sound intensity is a cornerstone of acoustic engineering, noise source identification, and loudspeaker development. While sound pressure is a scalar field quantity registered by standard pressure microphones, sound intensity is a vector energy flow quantity that characterizes how sound energy travels away from its source.",
    "Under free progressive wave conditions in standard air, sound intensity is directly proportional to the square of root-mean-square (RMS) sound pressure divided by the medium's characteristic acoustic impedance (Z₀ = ρ·c ≈ 400 Pa·s/m). This guide explains the underlying wave physics, formulas, step-by-step conversions, and reference tables."
  ],
  quickAnswer: {
    text: "In standard air (acoustic impedance Z₀ ≈ 400 Pa·s/m), sound intensity in watts per square meter is calculated by squaring the sound pressure in pascals and dividing by 400: I = p² / 400 (or I = 0.0025 × p²). For example, a sound pressure of 1.0 Pascal equals exactly 0.0025 W/m² (2.5 mW/m²).",
    formulaDisplay: "I (W/m²) = p² / (ρ · c) = p² / 400",
    subtext: "Where p is RMS sound pressure in pascals, ρ is air density, c is the speed of sound, and Z₀ = 400 Pa·s/m is standard acoustic impedance."
  },
  aboutSourceUnit: {
    title: "Understanding Sound Pressure (p)",
    text: "Sound Pressure (symbol: p) is the dynamic, alternating component of local pressure exerted by an acoustic wave, measured in pascals (Pa = 1 N/m²). In air, audible sound pressures span from 0.00002 Pa (20 µPa) at the human threshold of hearing, to 0.02 Pa (20 mPa) for normal conversation, and up to 20 Pa (120 dB) at the onset of auditory pain."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Intensity (I)",
    text: "Sound Intensity (symbol: I) is the acoustic power per unit area carried by a sound wave, measured in watts per square meter (W/m²). In airborne acoustics, the standardized international reference intensity is I₀ = 1.0 × 10⁻¹² W/m² (1 picowatt per square meter), which corresponds to 0 dB Sound Intensity Level (SIL) and matches the 20 micropascal hearing threshold."
  },
  relationship: "In a progressive plane wave or far-field spherical wave, sound intensity is related to sound pressure by I = p² / Z₀. Using the standardized acoustic impedance of air (Z₀ = 400 Pa·s/m), every tenfold increase in sound pressure produces a hundredfold (100×) increase in sound intensity. At the reference baseline, p = 0.00002 Pa yields exactly I = 10⁻¹² W/m².",
  relationshipTitle: "Sound Pressure to Sound Intensity Benchmarks",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "1.0 × 10⁻¹² W/m² (0 dB SIL / Hearing threshold)" },
    { label: "0.0002 Pa (200 µPa)", value: "1.0 × 10⁻¹⁰ W/m² (20 dB SIL / Whisper)" },
    { label: "0.002 Pa (2 mPa)", value: "1.0 × 10⁻⁸ W/m² (40 dB SIL / Quiet study room)" },
    { label: "0.02 Pa (20 mPa)", value: "1.0 × 10⁻⁶ W/m² (60 dB SIL / Normal conversation)" },
    { label: "0.2 Pa (200 mPa)", value: "1.0 × 10⁻⁴ W/m² (80 dB SIL / Busy urban traffic)" },
    { label: "1.0 Pa (1,000 mPa)", value: "2.5 × 10⁻³ W/m² (0.0025 W/m² / 94 dB calibration tone)" },
    { label: "2.0 Pa", value: "0.01 W/m² (10 mW/m² / 100 dB SIL)" },
    { label: "20.0 Pa", value: "1.0 W/m² (1,000 mW/m² / 120 dB SIL / Pain threshold)" },
    { label: "200.0 Pa", value: "100.0 W/m² (140 dB SIL / Jet aircraft takeoff)" }
  ],
  formula: {
    text: "Square the RMS sound pressure in pascals and divide by the characteristic acoustic impedance of air (Z₀ = 400 Pa·s/m).",
    math: "I = p² / 400 = 0.0025 × p² (W/m²)",
    subtext: "Valid for progressive waves in air at standard temperature and pressure."
  },
  formulaTitle: "Formula: Sound Pressure to Sound Intensity",
  practicalTip: {
    title: "The Square Law of Acoustic Power",
    text: "Because sound intensity depends on the square of sound pressure (I ∝ p²), doubling the acoustic pressure quadruples the sound intensity (a 4× increase). Increasing pressure by a factor of 10 increases intensity by a factor of 100 (a 20 dB gain in both SPL and SIL)."
  },
  expertNote: {
    title: "Characteristic Acoustic Impedance of Air",
    text: "The exact impedance of air is Z₀ = ρ·c. At 20 °C and 101.325 kPa, ρ ≈ 1.204 kg/m³ and c ≈ 343.2 m/s, yielding Z₀ ≈ 413.3 Pa·s/m. In international acoustics, 400 Pa·s/m is the conventional reference standard establishing exact parity between 20 µPa (0 dB SPL) and 10⁻¹² W/m² (0 dB SIL)."
  },
  examples: {
    title: "Step-by-Step Conversion Calculations",
    items: [
      {
        title: "Example 1: Acoustic Calibrator Signal (1.0 Pa)",
        subtitle: "Determine the acoustic intensity for an RMS sound pressure of 1.0 Pa.",
        steps: [
          "Identify sound pressure: p = 1.0 Pa.",
          "Square the sound pressure: (1.0)² = 1.0 Pa².",
          "Divide by acoustic impedance Z₀ = 400 Pa·s/m: 1.0 / 400 = 0.0025 W/m².",
          "Final Result: 1.0 Pascal equals 0.0025 W/m² (or 2.5 mW/m²)."
        ]
      },
      {
        title: "Example 2: Normal Conversational Speech (0.02 Pa)",
        subtitle: "Calculate the energy flux density for an acoustic speech wave of 0.02 Pa.",
        steps: [
          "Identify sound pressure: p = 0.02 Pa.",
          "Square the pressure: (0.02)² = 0.0004 Pa².",
          "Divide by 400: 0.0004 / 400 = 0.000001 W/m² = 1.0 × 10⁻⁶ W/m².",
          "Final Result: 0.02 Pascals corresponds to 1.0 × 10⁻⁶ W/m² (1.0 µW/m²)."
        ]
      },
      {
        title: "Example 3: Pain Threshold Level (20.0 Pa)",
        subtitle: "Find the sound intensity at the human threshold of pain (20.0 Pa).",
        steps: [
          "Identify sound pressure: p = 20.0 Pa.",
          "Square the pressure: (20.0)² = 400 Pa².",
          "Divide by 400: 400 / 400 = 1.0 W/m².",
          "Final Result: 20.0 Pascals equals exactly 1.0 W/m² of sound intensity."
        ]
      }
    ]
  },
  table: {
    title: "Sound Pressure (Pa) to Sound Intensity Reference Table",
    headers: ["Sound Pressure (Pa)", "Sound Intensity (W/m²)", "Intensity in Prefixed Units", "Acoustic Level (dB SIL)"],
    rows: [
      { fromVal: "0.00002 Pa", toVal: "1.0 × 10⁻¹² W/m²", extra: "1.0 pW/m²", extra2: "0.00 dB SIL (Hearing threshold)" },
      { fromVal: "0.0000632 Pa", toVal: "1.0 × 10⁻¹¹ W/m²", extra: "10.0 pW/m²", extra2: "10.00 dB SIL (Calm breathing)" },
      { fromVal: "0.0002 Pa", toVal: "1.0 × 10⁻¹⁰ W/m²", extra: "100.0 pW/m²", extra2: "20.00 dB SIL (Whisper at 1 m)" },
      { fromVal: "0.000632 Pa", toVal: "1.0 × 10⁻⁹ W/m²", extra: "1.0 nW/m²", extra2: "30.00 dB SIL (Quiet bedroom)" },
      { fromVal: "0.002 Pa", toVal: "1.0 × 10⁻⁸ W/m²", extra: "10.0 nW/m²", extra2: "40.00 dB SIL (Quiet library)" },
      { fromVal: "0.006325 Pa", toVal: "1.0 × 10⁻⁷ W/m²", extra: "100.0 nW/m²", extra2: "50.00 dB SIL (Moderate rainfall)" },
      { fromVal: "0.02 Pa", toVal: "1.0 × 10⁻⁶ W/m²", extra: "1.0 µW/m²", extra2: "60.00 dB SIL (Normal conversation)" },
      { fromVal: "0.06325 Pa", toVal: "1.0 × 10⁻⁵ W/m²", extra: "10.0 µW/m²", extra2: "70.00 dB SIL (Busy restaurant)" },
      { fromVal: "0.2 Pa", toVal: "1.0 × 10⁻⁴ W/m²", extra: "100.0 µW/m²", extra2: "80.00 dB SIL (Heavy city traffic)" },
      { fromVal: "0.3557 Pa", toVal: "3.16 × 10⁻⁴ W/m²", extra: "316.2 µW/m²", extra2: "85.00 dB SIL (OSHA action limit)" },
      { fromVal: "0.6325 Pa", toVal: "1.0 × 10⁻³ W/m²", extra: "1.0 mW/m²", extra2: "90.00 dB SIL (Diesel lawnmower)" },
      { fromVal: "1.0 Pa", toVal: "2.5 × 10⁻³ W/m²", extra: "2.5 mW/m²", extra2: "93.98 dB SIL (Calibrator tone)" },
      { fromVal: "2.0 Pa", toVal: "1.0 × 10⁻² W/m²", extra: "10.0 mW/m²", extra2: "100.00 dB SIL (Pneumatic jackhammer)" },
      { fromVal: "6.325 Pa", toVal: "1.0 × 10⁻¹ W/m²", extra: "100.0 mW/m²", extra2: "110.00 dB SIL (Live amplified concert)" },
      { fromVal: "10.0 Pa", toVal: "0.25 W/m²", extra: "250.0 mW/m²", extra2: "113.98 dB SIL (Secondary calibrator)" },
      { fromVal: "20.0 Pa", toVal: "1.0 W/m²", extra: "1,000.0 mW/m²", extra2: "120.00 dB SIL (Human pain threshold)" },
      { fromVal: "63.25 Pa", toVal: "10.0 W/m²", extra: "10,000.0 mW/m²", extra2: "130.00 dB SIL (Jet engine nearby)" },
      { fromVal: "200.0 Pa", toVal: "100.0 W/m²", extra: "100,000.0 mW/m²", extra2: "140.00 dB SIL (Immediate acoustic trauma)" }
    ]
  },
  applications: {
    title: "Engineering & Applied Acoustics Applications",
    items: [
      {
        title: "Industrial Noise Source Localization",
        text: "Using dual-microphone sound intensity probes to map acoustic energy flow vectors and locate noise leaks on machinery casings."
      },
      {
        title: "Determination of Sound Power (ISO 9614)",
        text: "Measuring sound intensity over a defined measurement surface enclosing an industrial machine to calculate its total sound power level without an anechoic room."
      },
      {
        title: "Building Acoustic Transmission Testing",
        text: "Measuring transmitted sound intensity through windows, doors, and walls to determine sound reduction indices in field conditions."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Mistakes",
    items: [
      "Assuming I = p / Z₀ instead of I = p² / Z₀: Sound intensity is proportional to pressure squared, not linear pressure.",
      "Applying free-field formulas in reverberant or reactive near-fields: In standing wave environments, pressure and particle velocity are out of phase, meaning actual active intensity is lower than p² / Z₀.",
      "Confusing sound intensity (W/m²) with sound power (Watts): Intensity is spatial power density, whereas sound power is the integrated total emission across an entire surface.",
      "Overlooking ambient temperature and barometric changes: Significant variations in temperature alter air density (ρ) and sound speed (c), altering acoustic impedance Z₀."
    ]
  },
  faqs: [
    {
      question: "How do you calculate sound intensity from sound pressure?",
      answer: "In a free progressive plane wave in air, sound intensity is calculated by squaring the RMS sound pressure and dividing by the acoustic impedance of air: I = p² / 400 (W/m²)."
    },
    {
      question: "What sound intensity corresponds to 1 Pascal of sound pressure?",
      answer: "1 Pascal of RMS sound pressure in standard air produces an acoustic intensity of 0.0025 W/m² (2.5 milliwatts per square meter)."
    },
    {
      question: "What is the reference sound intensity in air?",
      answer: "The standardized international reference sound intensity is I₀ = 1.0 × 10⁻¹² W/m² (1 picowatt per square meter), which defines 0 dB Sound Intensity Level (SIL)."
    },
    {
      question: "Why does the formula use the square of pressure?",
      answer: "In mechanical wave physics, power and energy density are proportional to the square of wave amplitude. For acoustic waves, power is the product of pressure and particle velocity; since particle velocity in a plane wave equals p / Z₀, intensity equals p × (p / Z₀) = p² / Z₀."
    },
    {
      question: "What sound intensity corresponds to 0.02 Pascals (normal conversation)?",
      answer: "0.02 Pascals corresponds to exactly 1.0 × 10⁻⁶ W/m² (1.0 microwatt per square meter), equivalent to 60 dB SIL."
    },
    {
      question: "What intensity is reached at the human threshold of pain?",
      answer: "At the threshold of acoustic pain (20 Pascals or 120 dB), sound intensity reaches 1.0 W/m² (1,000 milliwatts per square meter)."
    },
    {
      question: "What is the difference between sound pressure and sound intensity?",
      answer: "Sound pressure is a scalar quantity measuring local atmospheric compression at a point, whereas sound intensity is a vector quantity measuring the direction and rate of energy flow per unit area."
    },
    {
      question: "Does this formula work in water?",
      answer: "No. The formula requires the characteristic impedance of the specific medium. Water has an acoustic impedance of approximately 1.5 × 10⁶ Pa·s/m, which is roughly 3,600 times greater than air."
    }
  ],
  references: [
    "ISO 9614-1: Acoustics — Determination of sound power levels of noise sources using sound intensity",
    "ISO 80000-8: Quantities and units — Part 8: Acoustics",
    "ANSI/ASA S1.11: Specification for Octave-Band and Fractional-Octave-Band Filter Sets",
    "Kinsler, Frey, Coppens, & Sanders: Fundamentals of Acoustics (4th Edition)"
  ]
};
