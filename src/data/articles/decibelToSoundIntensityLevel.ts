import { CustomArticleData } from "./types";

export const decibelToSoundIntensityLevel: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "sound-intensity-level",
  seoTitle: "Decibel to Sound Intensity Level Converter (dB to dB SIL / L_I) | UnitsConvertors.com",
  metaDescription: "Convert generic Decibels to Sound Intensity Level (dB to dB SIL) with precision. Learn L_I logarithmic formulas, 10⁻¹² W/m² intensity baseline, ISO 9614 standards, and examples.",
  h1: "Decibel to Sound Intensity Level Converter",
  introduction: [
    "Acoustic measurement involves several distinct physical quantities. Sound Pressure Level (L_p) measures dynamic pressure fluctuations at a single point, whereas Sound Intensity Level (symbol: L_I or SIL) measures the directional flow of acoustic energy per unit area.",
    "Sound Intensity Level is expressed in decibels (dB SIL or dB re 1 pW/m²) relative to the international reference intensity I₀ = 10⁻¹² Watts per square meter (1 pW/m²).",
    "When decibels represent directional acoustic energy flux density relative to 1 pW/m², the level maps 1:1 to Sound Intensity Level (1 dB = 1 dB SIL). This guide covers acoustic intensity physics, vector measurement probes, plane wave field equivalence, formulas, and worked examples."
  ],
  quickAnswer: {
    text: "When converting a decibel value representing directional acoustic energy flux referenced to I₀ = 10⁻¹² W/m² (1 pW/m²), 1 dB maps 1:1 to 1 dB SIL (Sound Intensity Level).",
    formulaDisplay: "L_I (dB SIL) = 10 log₁₀(I / 10⁻¹² W/m²)",
    subtext: "Explicitly measures vector acoustic energy flow per unit area."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB) in Acoustic Energy Flux?",
    text: "The decibel (dB) is a logarithmic ratio. In sound intensity level (SIL), 0 dB represents the international reference intensity I₀ = 10⁻¹² W/m², corresponding to the human auditory threshold at 1,000 Hz."
  },
  aboutTargetUnit: {
    title: "Understanding Sound Intensity Level (L_I / dB SIL)",
    text: "Sound Intensity Level (L_I, measured in dB SIL) quantifies directional acoustic energy flow per unit area. Unlike scalar pressure, sound intensity is a vector quantity with both magnitude and direction."
  },
  relationship: "In a free plane wave field in air, Sound Pressure Level (L_p in dB SPL) and Sound Intensity Level (L_I in dB SIL) are practically identical in numerical value (L_p ≈ L_I) because the acoustic impedance of air (ρc ≈ 400 Pa·s/m) yields 10 log₁₀(ρc / 400) ≈ 0 dB.",
  relationshipTitle: "Plane Wave Field Equivalence (L_p vs L_I)",
  relationshipItems: [
    { label: "0 dB SIL", value: "10⁻¹² W/m² (1 pW/m² / Auditory intensity threshold)" },
    { label: "40 dB SIL", value: "10⁻⁸ W/m² (10 nW/m² / Quiet bedroom energy flux)" },
    { label: "60 dB SIL", value: "10⁻⁶ W/m² (1 µW/m² / Conversational speech flux)" },
    { label: "90 dB SIL", value: "0.001 W/m² (1 mW/m² / Heavy machinery energy flux)" },
    { label: "120 dB SIL", value: "1.0 W/m² (1 W/m² / Human pain threshold intensity)" }
  ],
  formula: {
    text: "Sound Intensity Level L_I in decibels is calculated from sound intensity I in W/m² divided by reference intensity I₀ = 10⁻¹² W/m².",
    math: "L_I \\text{ (dB SIL)} = 10 \\log_{10}\\left(\\frac{I}{10^{-12} \\text{ W/m²}}\\right)",
    subtext: "Where I₀ = 1 picowatt per square meter (10⁻¹² W/m²)."
  },
  formulaTitle: "Sound Intensity Level Formula",
  practicalTip: {
    title: "Plane-Wave Free Field Approximation",
    text: "In an anechoic chamber or free field away from reflections, L_p (dB SPL) ≈ L_I (dB SIL). In highly reverberant rooms, L_p is significantly higher than L_I."
  },
  expertNote: {
    title: "Pressure-Intensity (P-I) Index in Measurement Probes",
    text: "Dual-microphone sound intensity probes measure the P-I index (F_pI = L_p - L_I). A high P-I index indicates a diffuse reverberant field, while a low P-I index indicates a direct acoustic energy stream."
  },
  examples: {
    title: "Step-by-Step Sound Intensity Level Worked Examples",
    items: [
      {
        title: "Example 1: Studio Voice Acoustic Flux Audit",
        subtitle: "Convert a voice acoustic energy measurement of 65 dB to Sound Intensity Level.",
        steps: [
          "Identify decibel value: 65 dB.",
          "Confirm reference baseline is I₀ = 10⁻¹² W/m².",
          "Apply 1:1 mapping: 65 dB = 65 dB SIL.",
          "Final Result: The sound intensity level is 65 dB SIL."
        ]
      },
      {
        title: "Example 2: Intensity Probe Measurement across Engine Enclosure",
        subtitle: "Calculate L_I for a measured intensity vector of 0.0001 W/m².",
        steps: [
          "Identify intensity: I = 0.0001 W/m² = 10⁻⁴ W/m².",
          "Divide by I₀: 10⁻⁴ / 10⁻¹² = 10⁸.",
          "Take log₁₀: log₁₀(10⁸) = 8.",
          "Multiply by 10: 10 × 8 = 80 dB SIL.",
          "Final Result: The sound intensity level is 80 dB SIL."
        ]
      },
      {
        title: "Example 3: Factory Boundary Noise Audit",
        subtitle: "Convert an acoustic flux reading of 92 dB to dB SIL.",
        steps: [
          "Identify reading: 92 dB.",
          "Confirm reference baseline is 1 pW/m².",
          "Map level: 92 dB = 92 dB SIL.",
          "Final Result: The sound intensity level is 92 dB SIL."
        ]
      }
    ]
  },
  table: {
    title: "Sound Intensity Level Engineering Reference Table",
    headers: ["Sound Intensity Level (dB SIL)", "Sound Intensity (W/m²)", "Sound Intensity (µW/m²)", "Acoustic Field / Environment"],
    rows: [
      { fromVal: "0 dB SIL", toVal: "0.000000000001 W/m²", extra: "0.000001 µW/m²", extra2: "Human hearing threshold at 1 kHz" },
      { fromVal: "20 dB SIL", toVal: "0.000000000100 W/m²", extra: "0.000100 µW/m²", extra2: "Quiet recording booth background" },
      { fromVal: "40 dB SIL", toVal: "0.000000010000 W/m²", extra: "0.010000 µW/m²", extra2: "Quiet suburban bedroom at night" },
      { fromVal: "60 dB SIL", toVal: "0.000001000000 W/m²", extra: "1.000000 µW/m²", extra2: "Normal conversational speech at 1 meter" },
      { fromVal: "80 dB SIL", toVal: "0.000100000000 W/m²", extra: "100.000000 µW/m²", extra2: "Busy city traffic street corner" },
      { fromVal: "90 dB SIL", toVal: "0.001000000000 W/m²", extra: "1,000.000000 µW/m²", extra2: "Heavy lawn mower / industrial machinery" },
      { fromVal: "100 dB SIL", toVal: "0.010000000000 W/m²", extra: "10,000.000000 µW/m²", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "120 dB SIL", toVal: "1.000000000000 W/m²", extra: "1,000,000.000000 µW/m²", extra2: "Human physical pain threshold" },
      { fromVal: "130 dB SIL", toVal: "10.000000000000 W/m²", extra: "10,000,000.000000 µW/m²", extra2: "Immediate risk of acoustic injury" },
      { fromVal: "140 dB SIL", toVal: "100.000000000000 W/m²", extra: "100,000,000.000000 µW/m²", extra2: "Jet engine takeoff at 30 meters distance" }
    ]
  },
  applications: {
    title: "Real-World Applications of Sound Intensity Level",
    items: [
      {
        title: "In-Situ Machine Sound Power Determination (ISO 9614)",
        text: "Engineers use sound intensity probes to measure Sound Intensity Level over a surface grid, determining machine sound power without requiring an expensive anechoic chamber."
      },
      {
        title: "Acoustic Leak Pinpointing in Vehicles & Aircraft",
        text: "Automotive technicians sweep intensity probes along door seals and window tracks to identify exact locations where cabin sound insulation is leaking."
      },
      {
        title: "Building Partition Transmission Loss Testing",
        text: "Acousticians measure receiving-side Sound Intensity Level directly on wall panels to determine acoustic transmission loss (TL) in noisy field conditions."
      }
    ]
  },
  pitfalls: {
    title: "Common Pitfalls in Sound Intensity Level Measurements",
    items: [
      "Assuming dB SPL and dB SIL are always identical (they differ significantly in near-field or reverberant environments).",
      "Failing to account for phase mismatch between dual intensity probe microphones.",
      "Overlooking airflow or wind noise across intensity probe phase-matched pairs.",
      "Adding dB SIL values without accounting for directional vector signs."
    ]
  },
  faqs: [
    {
      question: "What is the difference between dB SPL and dB SIL?",
      answer: "dB SPL measures dynamic sound pressure at a point (scalar). dB SIL measures directional acoustic energy flux per unit area (vector)."
    },
    {
      question: "What is the reference intensity for 0 dB SIL?",
      answer: "The reference sound intensity is I₀ = 10⁻¹² W/m² (1 picowatt per square meter)."
    },
    {
      question: "Why does 1 dB equal 1 dB SIL?",
      answer: "When decibels explicitly represent sound intensity level referenced to 1 pW/m², the ratio is 1:1."
    },
    {
      question: "When does dB SPL equal dB SIL?",
      answer: "In a free plane-wave acoustic field in air at standard temperature and pressure, L_p (dB SPL) numerically equals L_I (dB SIL)."
    },
    {
      question: "How do you calculate dB SIL from W/m²?",
      answer: "Use L_I = 10 log₁₀(I / 10⁻¹² W/m²). Divide the intensity in W/m² by 10⁻¹², take the log base 10, and multiply by 10."
    },
    {
      question: "What standard governs sound intensity measurement?",
      answer: "ISO 9614 (Parts 1, 2, and 3) governs the determination of sound power levels using sound intensity measurements."
    },
    {
      question: "What happens to dB SIL when acoustic intensity doubles?",
      answer: "Doubling acoustic intensity in W/m² increases Sound Intensity Level by approximately +3.01 dB SIL."
    },
    {
      question: "Can sound intensity level be measured in noisy factory backgrounds?",
      answer: "Yes. Because sound intensity is a directional vector quantity, background reverberant noise coming from other angles cancels out when integrated over a closed surface."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Sound Power Level", from: "decibel", to: "sound-power-level" },
    { label: "Decibel to Watt/m²", from: "decibel", to: "watt-m2-sound" }
  ],
  references: [
    "ISO 9614-2:1996 Acoustics — Determination of sound power levels of noise sources using sound intensity — Part 2: Measurement by scanning.",
    "Fahy, F. J. (1995). Sound Intensity (2nd ed.). E & FN Spon.",
    "IEC 61043:1993 Electroacoustics — Instruments for the measurement of sound intensity."
  ]
};
