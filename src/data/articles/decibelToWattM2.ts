import { CustomArticleData } from "./types";

export const decibelToWattM2: CustomArticleData = {
  fromUnitId: "decibel",
  toUnitId: "watt-m2-sound",
  seoTitle: "Decibel to Watt/m² Converter (dB to W/m²) | UnitsConvertors.com",
  metaDescription: "Convert Decibels to Watts per Square Meter (dB to W/m²) with scientific precision. Calculate acoustic intensity from decibels using I = 10⁻¹² × 10^(dB/10) with formulas and examples.",
  h1: "Decibel to Watt/m² Converter",
  introduction: [
    "In physical acoustics and audio engineering, decibels (dB) measure relative logarithmic sound levels, while Watts per square meter (W/m²) quantify absolute acoustic energy flux per surface area. Converting decibels to W/m² allows acoustic designers, environmental engineers, and noise specialists to convert subjective or measured sound pressure levels into physical power density.",
    "The standard reference point for airborne acoustic intensity is I₀ = 10⁻¹² W/m² (1 picowatt per square meter), representing the nominal human hearing threshold at 1,000 Hz. The conversion follows the exponential relationship I = 10⁻¹² × 10^(dB / 10). For example, a conversational sound level of 60 dB corresponds to 0.000001 W/m².",
    "This guide provides comprehensive mathematical derivations, reference benchmarks, step-by-step worked examples, and conversion tables to transform decibels into Watts per square meter."
  ],
  quickAnswer: {
    text: "To convert Decibels to Watts per Square Meter (W/m²), calculate: I = 10⁻¹² × 10^(dB / 10). For example, 80 dB equals 0.0001 W/m².",
    formulaDisplay: "I (W/m²) = 10⁻¹² × 10^(dB / 10)",
    subtext: "Where baseline reference intensity I₀ = 10⁻¹² W/m²."
  },
  aboutSourceUnit: {
    title: "What is a Decibel (dB)?",
    text: "The decibel (symbol: dB) is a logarithmic unit used across physical acoustics to quantify power and intensity ratios. Expressing sound levels in decibels avoids working with unwieldy tiny decimal fractions in daily engineering practice."
  },
  aboutTargetUnit: {
    title: "Understanding Watt per Square Meter (W/m²)",
    text: "Watt per square meter (symbol: W/m²) is the SI coherent unit of power density and acoustic intensity. It measures the rate of acoustic energy transmission (in Joules per second) crossing a one square meter plane."
  },
  relationship: "Decibel sound intensity level L_I relates to physical energy flux I in W/m² via L_I = 10 log₁₀(I / I₀). Reversing this equation gives I = 10⁻¹² × 10^(L_I / 10), with I₀ = 10⁻¹² W/m².",
  relationshipTitle: "Decibel to Watt/m² Scale Comparison",
  relationshipItems: [
    { label: "0 dB", value: "1.0 × 10⁻¹² W/m² (Threshold of hearing)" },
    { label: "40 dB", value: "1.0 × 10⁻⁸ W/m² (Quiet residential room)" },
    { label: "70 dB", value: "1.0 × 10⁻⁵ W/m² (Vacuum cleaner / loud speech)" },
    { label: "100 dB", value: "1.0 × 10⁻² W/m² (Pneumatic jackhammer at 1 meter)" },
    { label: "120 dB", value: "1.0 W/m² (Threshold of auditory pain)" }
  ],
  formula: {
    text: "Multiply the baseline intensity I₀ (10⁻¹² W/m²) by 10 raised to the exponent of (dB / 10).",
    math: "I = 10⁻¹² × 10^(dB / 10)",
    subtext: "Where I is intensity in W/m², and I₀ = 10⁻¹² W/m²."
  },
  formulaTitle: "Decibel to Watt/m² Conversion Formula",
  practicalTip: {
    title: "Understanding Power Exponents",
    text: "Every 10 dB addition multiplies the intensity in W/m² by a factor of 10. Every 20 dB addition multiplies intensity by 100."
  },
  expertNote: {
    title: "ISO 80000-8 International Acoustics Compliance",
    text: "Per ISO 80000-8 specifications, sound intensity is an energy quantity, so the logarithmic scale multiplier is strictly 10 log₁₀(I/I₀). In free-field plane-wave conditions, sound intensity in W/m² relates to RMS sound pressure p in Pascals via I = p² / (ρ × c), where ρ × c ≈ 400 N·s/m³ is the characteristic acoustic impedance of air."
  },
  examples: {
    title: "Step-by-Step dB to W/m² Worked Examples",
    items: [
      {
        title: "Example 1: Quiet Office Environment (50 dB)",
        subtitle: "Convert a 50 dB background office sound level to Watts per square meter.",
        steps: [
          "Identify sound level: 50 dB.",
          "Apply formula: I = 10⁻¹² × 10^(50 / 10).",
          "Simplify exponent: 50 / 10 = 5.",
          "Calculate 10⁵ = 100,000.",
          "Multiply: 10⁻¹² × 100,000 = 10⁻⁷ W/m² = 0.0000001 W/m².",
          "Final Result: 50 dB is equivalent to 0.0000001 W/m² (0.1 µW/m²)."
        ]
      },
      {
        title: "Example 2: Industrial Manufacturing Line (85 dB)",
        subtitle: "Calculate the energy flux in W/m² for an 85 dB assembly floor.",
        steps: [
          "Identify sound level: 85 dB.",
          "Apply formula: I = 10⁻¹² × 10^(85 / 10) = 10⁻¹² × 10^8.5.",
          "Compute 10^8.5 ≈ 316,227,766.02.",
          "Multiply: 10⁻¹² × 316,227,766.02 ≈ 0.0003162 W/m².",
          "Final Result: 85 dB equals approximately 0.0003162 W/m² (316.2 µW/m²)."
        ]
      },
      {
        title: "Example 3: Stadium Concert PA Output (115 dB)",
        subtitle: "Convert 115 dB sound energy level at the sound mixing console to W/m².",
        steps: [
          "Identify sound level: 115 dB.",
          "Apply formula: I = 10⁻¹² × 10^(115 / 10) = 10⁻¹² × 10^11.5.",
          "Compute 10^11.5 ≈ 316,227,766,016.84.",
          "Multiply: 10⁻¹² × 316,227,766,016.84 ≈ 0.3162 W/m².",
          "Final Result: 115 dB corresponds to 0.3162 W/m²."
        ]
      }
    ]
  },
  table: {
    title: "Decibel to Watt/m² Acoustic Intensity Conversion Table",
    headers: ["Sound Level (dB)", "Acoustic Intensity (W/m²)", "MicroWatts/m² (µW/m²)", "Environmental Context"],
    rows: [
      { fromVal: "0 dB", toVal: "0.000000000001 W/m²", extra: "0.000001 µW/m²", extra2: "Threshold of human hearing" },
      { fromVal: "20 dB", toVal: "0.0000000001 W/m²", extra: "0.0001 µW/m²", extra2: "Quiet recording studio floor" },
      { fromVal: "40 dB", toVal: "0.00000001 W/m²", extra: "0.01 µW/m²", extra2: "Quiet suburban living room" },
      { fromVal: "60 dB", toVal: "0.000001 W/m²", extra: "1.0 µW/m²", extra2: "Normal conversational voice" },
      { fromVal: "80 dB", toVal: "0.0001 W/m²", extra: "100.0 µW/m²", extra2: "Loud city traffic / vacuum cleaner" },
      { fromVal: "100 dB", toVal: "0.01 W/m²", extra: "10,000.0 µW/m²", extra2: "Pneumatic jackhammer at 1 meter" },
      { fromVal: "120 dB", toVal: "1.0 W/m²", extra: "1,000,000.0 µW/m²", extra2: "Threshold of human ear discomfort" },
      { fromVal: "140 dB", toVal: "100.0 W/m²", extra: "100,000,000.0 µW/m²", extra2: "Jet engine takeoff at 30 meters" }
    ]
  },
  applications: {
    title: "Engineering Applications of dB to W/m² Conversions",
    items: [
      {
        title: "Acoustic Noise Control & Isolation",
        text: "Engineers calculate physical sound energy transmission across architectural walls and acoustic partitions in W/m²."
      },
      {
        title: "Audio Transducer Efficiency Analysis",
        text: "Loudspeaker manufacturers convert electroacoustic output levels into W/m² to determine acoustic conversion efficiency."
      },
      {
        title: "Environmental Impact Assessment",
        text: "Noise pollution specialists evaluate total acoustic power radiated by highways and industrial facilities."
      }
    ]
  },
  pitfalls: {
    title: "Common Mistakes in dB to W/m² Calculations",
    items: [
      "Using an exponent divider of 20 instead of 10 (intensity is an energy quantity governed by 10 log₁₀)."
    ]
  },
  faqs: [
    {
      question: "How do you convert dB to W/m²?",
      answer: "Use the formula I = 10⁻¹² × 10^(dB / 10), where I₀ = 10⁻¹² W/m² is the baseline reference."
    },
    {
      question: "What is 0 dB in W/m²?",
      answer: "0 dB equals 10⁻¹² W/m² (0.000000000001 W/m²)."
    },
    {
      question: "What is 60 dB in W/m²?",
      answer: "60 dB equals 0.000001 W/m² (1 microwatt per square meter)."
    },
    {
      question: "What is 120 dB in W/m²?",
      answer: "120 dB equals 1.0 W/m²."
    },
    {
      question: "Why does the formula use 10⁻¹² as baseline?",
      answer: "10⁻¹² W/m² is the internationally standardized reference intensity I₀ corresponding to the average human threshold of hearing at 1 kHz."
    },
    {
      question: "What is 90 dB in W/m²?",
      answer: "90 dB equals 0.001 W/m² (1 milliwatt per square meter)."
    },
    {
      question: "How does intensity change when sound level increases by 10 dB?",
      answer: "A 10 dB increase multiplies the acoustic intensity in W/m² by exactly 10."
    },
    {
      question: "Is Watt per square meter an SI unit?",
      answer: "Yes, W/m² is the coherent SI derived unit of power density and sound intensity."
    }
  ],
  relatedList: [
    { label: "Decibel to Bel", from: "decibel", to: "bel" },
    { label: "Decibel to Decibel SPL", from: "decibel", to: "decibel-spl" },
    { label: "Decibel to Sound Intensity", from: "decibel", to: "sound-intensity" }
  ],
  references: [
    "ISO 80000-8:2020 Quantities and units — Part 8: Acoustics, ISO.",
    "IEC 60027-3 Letter symbols to be used in electrical technology - Part 3: Logarithmic and related quantities.",
    "Bies, D. A., & Hansen, C. H. (2009). Engineering Noise Control. Spon Press."
  ]
};
