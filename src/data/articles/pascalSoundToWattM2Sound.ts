import { CustomArticleData } from "./types";

export const pascalSoundToWattM2Sound: CustomArticleData = {
  fromUnitId: "pascal-sound",
  toUnitId: "watt-m2-sound",
  seoTitle: "Pascal (Sound) to Watt/m² Converter | Pa to W/m²",
  metaDescription: "Convert Pascal acoustic pressure to Watts per square meter (Pa to W/m²). Understand acoustic power density, wave impedance Z₀ = 400 Pa·s/m, formula, and reference charts.",
  canonicalUrl: "https://unitsconvertors.com/pascal-sound-to-watt-m2-sound",
  h1: "Pascal (Sound) to Watt/m² Converter",
  introduction: [
    "Acoustic waves in a gaseous medium such as air transfer mechanical power across space. While sound pressure measured in pascals (Pa or N/m²) quantifies the localized root-mean-square (RMS) stress exerted on a surface or microphone diaphragm, acoustic surface power flux is measured in watts per square meter (W/m²).",
    "Converting sound pressure in pascals to watts per square meter is essential in transducer design, ultrasonic engineering, architectural acoustics, and noise barrier evaluation. It enables engineers to determine the exact mechanical energy passing through a given surface area from pressure sensor recordings.",
    "In a plane progressive wave traveling through standard air, acoustic power flux density in watts per square meter is proportional to the square of the sound pressure divided by the medium's characteristic acoustic impedance (Z₀ = ρ·c ≈ 400 Pa·s/m). This comprehensive guide explains the physical principles, conversion formulas, worked examples, and reference tables."
  ],
  quickAnswer: {
    text: "To convert Pascal (Sound) to Watt/m² in standard air, square the sound pressure in pascals and divide by 400: W/m² = p² / 400 (or W/m² = 0.0025 × p²). For example, 1.0 Pascal of sound pressure produces exactly 0.0025 W/m² (2.5 milliwatts per square meter).",
    formulaDisplay: "Power Flux (W/m²) = p² / 400 = 0.0025 × p²",
    subtext: "Where p is the RMS sound pressure in pascals and 400 Pa·s/m is the standard acoustic impedance of air."
  },
  aboutSourceUnit: {
    title: "Understanding Pascal (Sound) (Pa)",
    text: "The pascal (symbol: Pa) is the SI derived unit of pressure, defined as one newton of force distributed over one square meter (1 N/m²). In acoustics, 'Pascal (Sound)' specifically represents the root-mean-square (RMS) fluctuating pressure wave component. Audible sound pressures in air range from 0.00002 Pa at the limit of human audibility up to 20 Pa at the threshold of auditory pain."
  },
  aboutTargetUnit: {
    title: "Understanding Watt/m² (Acoustic Power Flux)",
    text: "The watt per square meter (symbol: W/m²) is the coherent SI unit of sound intensity and power flux density. It represents one joule of acoustic energy propagating through an aperture of one square meter every second. In airborne acoustics, 1.0 × 10⁻¹² W/m² (1 pW/m²) serves as the international reference zero (0 dB SIL), matching the 20 micropascal hearing threshold."
  },
  relationship: "The relationship between sound pressure (p in Pa) and acoustic power density (in W/m²) follows the wave impedance equation W/m² = p² / (ρ·c). In standard atmospheric air (Z₀ = 400 Pa·s/m), squaring the pressure and multiplying by 0.0025 yields the power flux in W/m². Doubling the pressure results in a 4× increase in power flux.",
  relationshipTitle: "Acoustic Pressure to Power Flux Benchmarks",
  relationshipItems: [
    { label: "0.00002 Pa (20 µPa)", value: "1.0 × 10⁻¹² W/m² (1 pW/m² / Hearing threshold)" },
    { label: "0.0002 Pa (200 µPa)", value: "1.0 × 10⁻¹⁰ W/m² (100 pW/m² / Whisper)" },
    { label: "0.002 Pa (2 mPa)", value: "1.0 × 10⁻⁸ W/m² (10 nW/m² / Quiet library)" },
    { label: "0.02 Pa (20 mPa)", value: "1.0 × 10⁻⁶ W/m² (1 µW/m² / Normal speech)" },
    { label: "0.2 Pa (200 mPa)", value: "1.0 × 10⁻⁴ W/m² (100 µW/m² / Urban traffic)" },
    { label: "1.0 Pa (1,000 mPa)", value: "2.5 × 10⁻³ W/m² (0.0025 W/m² / 94 dB calibrator tone)" },
    { label: "2.0 Pa", value: "0.01 W/m² (10 mW/m² / Jackhammer at 3 m)" },
    { label: "20.0 Pa", value: "1.0 W/m² (1,000 mW/m² / Human pain threshold)" },
    { label: "200.0 Pa", value: "100.0 W/m² (100 W/m² / Jet engine takeoff)" }
  ],
  formula: {
    text: "Square the RMS sound pressure in pascals and divide by the characteristic acoustic impedance of air (Z₀ = 400 Pa·s/m).",
    math: "Power Flux (W/m²) = p² / 400 = 0.0025 × p²",
    subtext: "Applies to free progressive acoustic waves in air at standard temperature and pressure."
  },
  formulaTitle: "Formula: Pascal (Sound) to Watt/m²",
  practicalTip: {
    title: "Converting to Prefixed Acoustic Units",
    text: "Because airborne sound involves very small power densities, engineers frequently express W/m² using SI prefixes: 1 W/m² = 1,000 mW/m² = 1,000,000 µW/m² = 10¹² pW/m². For example, normal conversational speech (0.02 Pa) produces exactly 1.0 µW/m²."
  },
  expertNote: {
    title: "Acoustic Impedance Standards",
    text: "The exact impedance of air is given by Z₀ = ρ·c. At 20 °C and sea-level pressure, ρ ≈ 1.204 kg/m³ and c ≈ 343.2 m/s, yielding Z₀ ≈ 413.3 Pa·s/m. The value 400 Pa·s/m is standardized internationally to ensure exact equivalence between 20 µPa and 10⁻¹² W/m² at 0 dB."
  },
  examples: {
    title: "Step-by-Step Conversion Calculations",
    items: [
      {
        title: "Example 1: Standard Microphone Calibrator (1.0 Pa)",
        subtitle: "Calculate the acoustic power flux density for a 1.0 Pa calibration wave.",
        steps: [
          "State the acoustic pressure: p = 1.0 Pa.",
          "Square the pressure value: (1.0)² = 1.0 Pa².",
          "Divide by acoustic impedance Z₀ = 400 Pa·s/m: 1.0 / 400 = 0.0025 W/m².",
          "Final Result: 1.0 Pascal of sound pressure delivers 0.0025 W/m² (2.5 mW/m²)."
        ]
      },
      {
        title: "Example 2: Acoustic Speech Waveform (0.02 Pa)",
        subtitle: "Find the energy transfer rate per square meter for vocal speech.",
        steps: [
          "State the acoustic pressure: p = 0.02 Pa.",
          "Square the pressure: (0.02)² = 0.0004 Pa².",
          "Divide by 400: 0.0004 / 400 = 0.000001 W/m² = 1.0 × 10⁻⁶ W/m².",
          "Final Result: 0.02 Pascals produces exactly 1.0 × 10⁻⁶ W/m² (1.0 µW/m²)."
        ]
      },
      {
        title: "Example 3: Severe Industrial Noise (20.0 Pa)",
        subtitle: "Determine the acoustic power flux at the human threshold of pain (20.0 Pa).",
        steps: [
          "State the acoustic pressure: p = 20.0 Pa.",
          "Square the pressure: (20.0)² = 400 Pa².",
          "Divide by 400: 400 / 400 = 1.0 W/m².",
          "Final Result: 20.0 Pascals equals exactly 1.0 W/m² of acoustic power flux."
        ]
      }
    ]
  },
  table: {
    title: "Pascal (Sound) to Watt/m² Reference Table",
    headers: ["Sound Pressure (Pa)", "Power Flux (W/m²)", "Prefixed Value", "Decibel Level (dB re 1 pW/m²)"],
    rows: [
      { fromVal: "0.00002 Pa", toVal: "1.0 × 10⁻¹² W/m²", extra: "1.0 pW/m²", extra2: "0.00 dB (Threshold of hearing)" },
      { fromVal: "0.0000632 Pa", toVal: "1.0 × 10⁻¹¹ W/m²", extra: "10.0 pW/m²", extra2: "10.00 dB (Faint breathing)" },
      { fromVal: "0.0002 Pa", toVal: "1.0 × 10⁻¹⁰ W/m²", extra: "100.0 pW/m²", extra2: "20.00 dB (Whisper at 1 m)" },
      { fromVal: "0.000632 Pa", toVal: "1.0 × 10⁻⁹ W/m²", extra: "1.0 nW/m²", extra2: "30.00 dB (Quiet bedroom)" },
      { fromVal: "0.002 Pa", toVal: "1.0 × 10⁻⁸ W/m²", extra: "10.0 nW/m²", extra2: "40.00 dB (Quiet library)" },
      { fromVal: "0.006325 Pa", toVal: "1.0 × 10⁻⁷ W/m²", extra: "100.0 nW/m²", extra2: "50.00 dB (Moderate rainfall)" },
      { fromVal: "0.02 Pa", toVal: "1.0 × 10⁻⁶ W/m²", extra: "1.0 µW/m²", extra2: "60.00 dB (Normal conversation)" },
      { fromVal: "0.06325 Pa", toVal: "1.0 × 10⁻⁵ W/m²", extra: "10.0 µW/m²", extra2: "70.00 dB (Busy restaurant)" },
      { fromVal: "0.2 Pa", toVal: "1.0 × 10⁻⁴ W/m²", extra: "100.0 µW/m²", extra2: "80.00 dB (Urban curbside traffic)" },
      { fromVal: "0.3557 Pa", toVal: "3.16 × 10⁻⁴ W/m²", extra: "316.2 µW/m²", extra2: "85.00 dB (OSHA action limit)" },
      { fromVal: "0.6325 Pa", toVal: "1.0 × 10⁻³ W/m²", extra: "1.0 mW/m²", extra2: "90.00 dB (Lawnmower at operator)" },
      { fromVal: "1.0 Pa", toVal: "2.5 × 10⁻³ W/m²", extra: "2.5 mW/m²", extra2: "93.98 dB (Microphone calibrator)" },
      { fromVal: "2.0 Pa", toVal: "1.0 × 10⁻² W/m²", extra: "10.0 mW/m²", extra2: "100.00 dB (Jackhammer at 3 m)" },
      { fromVal: "6.325 Pa", toVal: "1.0 × 10⁻¹ W/m²", extra: "100.0 mW/m²", extra2: "110.00 dB (Rock concert crescendo)" },
      { fromVal: "10.0 Pa", toVal: "0.25 W/m²", extra: "250.0 mW/m²", extra2: "113.98 dB (Secondary calibrator)" },
      { fromVal: "20.0 Pa", toVal: "1.0 W/m²", extra: "1,000.0 mW/m²", extra2: "120.00 dB (Human pain threshold)" },
      { fromVal: "63.25 Pa", toVal: "10.0 W/m²", extra: "10,000.0 mW/m²", extra2: "130.00 dB (Jet engine at 100 m)" },
      { fromVal: "200.0 Pa", toVal: "100.0 W/m²", extra: "100,000.0 mW/m²", extra2: "140.00 dB (Immediate acoustic trauma)" }
    ]
  },
  applications: {
    title: "Engineering & Applied Physics Applications",
    items: [
      {
        title: "Ultrasonic Transducer Characterization",
        text: "Calculating the acoustic power density emitted by medical or industrial ultrasonic cleaning horns from hydrophone pressure readings."
      },
      {
        title: "Acoustic Energy Harvesting",
        text: "Evaluating available mechanical power flux per unit area in noisy industrial environments to size piezoelectric energy harvesting membranes."
      },
      {
        title: "Architectural Sound Absorption Modeling",
        text: "Determining energy dissipation in porous acoustic absorbers by comparing incident acoustic power flux to reflected wave amplitudes."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls & Calculation Errors",
    items: [
      "Linear pressure scaling error: Forgetting that power flux is proportional to pressure squared (doubling pressure quadruples the watts per square meter).",
      "Confusing acoustic power flux (W/m²) with total source sound power (Watts): Power flux must be integrated over the entire radiating surface area to obtain total emitted watts.",
      "Reactive near-field inaccuracy: In close proximity to acoustic sources or in standing-wave enclosures, pressure and velocity are out of phase, requiring complex intensity measurement rather than p² / Z₀.",
      "Neglecting environmental parameters: Drastic shifts in altitude or temperature change air density and speed of sound, altering the characteristic impedance."
    ]
  },
  faqs: [
    {
      question: "How do you convert Pascal (Sound) to Watt/m²?",
      answer: "In standard air, square the RMS sound pressure in pascals and divide by 400: Watt/m² = p² / 400 (or multiply p² by 0.0025)."
    },
    {
      question: "How many Watt/m² is 1 Pascal of sound pressure?",
      answer: "1 Pascal of RMS sound pressure produces 0.0025 W/m² (2.5 milliwatts per square meter) in air under standard conditions."
    },
    {
      question: "What is the acoustic reference level in Watt/m²?",
      answer: "The international acoustic reference level is 1.0 × 10⁻¹² W/m² (1 picowatt per square meter), which corresponds to 0 dB and 20 micropascals of sound pressure."
    },
    {
      question: "Why does the formula divide by 400?",
      answer: "The number 400 represents the standardized characteristic acoustic impedance of air (Z₀ = ρ·c ≈ 400 Pa·s/m). Since intensity equals pressure multiplied by particle velocity (p × u = p² / Z₀), dividing by 400 converts pressure squared directly into watts per square meter."
    },
    {
      question: "What power flux corresponds to 0.02 Pascals (normal conversation)?",
      answer: "An acoustic pressure of 0.02 Pascals corresponds to exactly 1.0 × 10⁻⁶ W/m² (1.0 microwatt per square meter)."
    },
    {
      question: "What power flux corresponds to the human pain threshold (20 Pa)?",
      answer: "A sound pressure of 20 Pascals produces exactly 1.0 W/m² (1,000 milliwatts per square meter) of acoustic energy flux."
    },
    {
      question: "What happens to the power flux when sound pressure doubles?",
      answer: "Because acoustic power depends on the square of pressure, doubling the sound pressure multiplies the power flux by 4 (a 400% increase, or +6.02 dB)."
    },
    {
      question: "Can sound waves generate meaningful electrical power?",
      answer: "Even very loud sounds contain remarkably small power flux: conversational speech is only 1 microwatt per square meter, and even painful noise (120 dB) provides only 1 watt per square meter."
    }
  ],
  references: [
    "ISO 80000-8: Quantities and units — Part 8: Acoustics",
    "IEC 61043: Electroacoustics — Instruments for the measurement of sound intensity",
    "Pierce, Allan D.: Acoustics: An Introduction to Its Physical Principles and Applications",
    "ANSI/ASA S1.1: Acoustical Terminology Standards"
  ]
};
